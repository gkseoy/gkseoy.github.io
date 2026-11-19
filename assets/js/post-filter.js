(() => {
  const filterGroup = document.querySelector("[data-post-filters]");
  const feed = document.querySelector("[data-post-feed]");

  if (!filterGroup || !feed) return;

  const buttons = Array.from(filterGroup.querySelectorAll("[data-feed-filter]"));
  const posts = Array.from(feed.querySelectorAll("[data-feed-category]"));
  const emptyMessage = document.querySelector("[data-post-feed-empty]");
  const pagination = document.querySelector("[data-post-pagination]");
  const status = document.querySelector("[data-post-feed-status]");
  const validFilters = new Set(buttons.map((button) => button.dataset.feedFilter));
  const parsedPageSize = Number.parseInt(feed.dataset.pageSize, 10);
  const pageSize = Number.isInteger(parsedPageSize) && parsedPageSize > 0 ? parsedPageSize : 10;
  let activeFilter = "all";
  let activePage = 1;

  const filterFromHash = () => {
    try {
      return decodeURIComponent(window.location.hash.slice(1)) || "all";
    } catch (_error) {
      return "all";
    }
  };

  const pageFromUrl = () => {
    const requestedPage = Number.parseInt(new URL(window.location.href).searchParams.get("page"), 10);
    return Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  };

  const updateUrl = (filter, page, historyMode) => {
    const url = new URL(window.location.href);
    if (page > 1) {
      url.searchParams.set("page", String(page));
    } else {
      url.searchParams.delete("page");
    }
    url.hash = filter === "all" ? "" : filter;
    const historyMethod = historyMode === "replace" ? "replaceState" : "pushState";
    window.history[historyMethod](null, "", `${url.pathname}${url.search}${url.hash}`);
  };

  const scrollToFeed = () => {
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    filterGroup.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const renderPagination = (pageCount) => {
    if (!pagination) return;

    pagination.replaceChildren();
    pagination.hidden = pageCount <= 1;

    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
      const pageButton = document.createElement("button");
      pageButton.type = "button";
      pageButton.textContent = String(pageNumber);
      pageButton.dataset.feedPage = String(pageNumber);
      pageButton.setAttribute("aria-label", `Page ${pageNumber}`);

      if (pageNumber === activePage) {
        pageButton.setAttribute("aria-current", "page");
        pageButton.disabled = true;
      } else {
        pageButton.addEventListener("click", () => {
          applyFilter(activeFilter, pageNumber, "push");
          scrollToFeed();
        });
      }

      pagination.append(pageButton);
    }
  };

  const applyFilter = (requestedFilter, requestedPage = 1, historyMode = null) => {
    activeFilter = validFilters.has(requestedFilter) ? requestedFilter : "all";
    const matchingPosts = posts.filter(
      (post) => activeFilter === "all" || post.dataset.feedCategory === activeFilter,
    );
    const pageCount = Math.ceil(matchingPosts.length / pageSize);
    const parsedPage = Number.parseInt(requestedPage, 10);
    const safePage = Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
    activePage = pageCount > 0 ? Math.min(safePage, pageCount) : 1;
    const firstPostIndex = (activePage - 1) * pageSize;
    const visiblePosts = new Set(matchingPosts.slice(firstPostIndex, firstPostIndex + pageSize));

    posts.forEach((post) => {
      post.hidden = !visiblePosts.has(post);
    });

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.feedFilter === activeFilter));
    });

    if (emptyMessage) emptyMessage.hidden = matchingPosts.length !== 0;

    renderPagination(pageCount);

    if (status) {
      const activeButton = buttons.find((button) => button.dataset.feedFilter === activeFilter);
      const label = activeButton ? activeButton.textContent.trim() : "All";
      if (matchingPosts.length === 0) {
        status.textContent = `${label}: 0 posts shown.`;
      } else if (pageCount > 1) {
        status.textContent = `${label}: ${visiblePosts.size} of ${matchingPosts.length} posts shown, page ${activePage} of ${pageCount}.`;
      } else {
        status.textContent = `${label}: ${matchingPosts.length} post${matchingPosts.length === 1 ? "" : "s"} shown.`;
      }
    }

    if (historyMode) updateUrl(activeFilter, activePage, historyMode);

    return { filter: activeFilter, page: activePage };
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.feedFilter, 1, "push"));
  });

  const restoreFromUrl = () => applyFilter(filterFromHash(), pageFromUrl());
  window.addEventListener("popstate", restoreFromUrl);
  window.addEventListener("hashchange", restoreFromUrl);

  const requestedFilter = filterFromHash();
  const requestedPage = pageFromUrl();
  const initialState = applyFilter(requestedFilter, requestedPage);
  if (initialState.filter !== requestedFilter || initialState.page !== requestedPage) {
    updateUrl(initialState.filter, initialState.page, "replace");
  }
})();
