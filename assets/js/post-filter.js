(() => {
  const filterGroup = document.querySelector("[data-post-filters]");
  const feed = document.querySelector("[data-post-feed]");

  if (!filterGroup || !feed) return;

  const buttons = Array.from(filterGroup.querySelectorAll("[data-feed-filter]"));
  const posts = Array.from(feed.querySelectorAll("[data-feed-category]"));
  const emptyMessage = document.querySelector("[data-post-feed-empty]");
  const status = document.querySelector("[data-post-feed-status]");
  const validFilters = new Set(buttons.map((button) => button.dataset.feedFilter));

  const filterFromHash = () => {
    try {
      return decodeURIComponent(window.location.hash.slice(1));
    } catch (_error) {
      return "all";
    }
  };

  const updateUrl = (filter) => {
    const url = new URL(window.location.href);
    url.hash = filter === "all" ? "" : filter;
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };

  const applyFilter = (requestedFilter, shouldUpdateUrl = true) => {
    const filter = validFilters.has(requestedFilter) ? requestedFilter : "all";
    let visibleCount = 0;

    posts.forEach((post) => {
      const isVisible = filter === "all" || post.dataset.feedCategory === filter;
      post.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.feedFilter === filter));
    });

    if (emptyMessage) emptyMessage.hidden = visibleCount !== 0;

    if (status) {
      const activeButton = buttons.find((button) => button.dataset.feedFilter === filter);
      const label = activeButton ? activeButton.textContent.trim() : "All";
      status.textContent = `${label}: ${visibleCount} post${visibleCount === 1 ? "" : "s"} shown.`;
    }

    if (shouldUpdateUrl) updateUrl(filter);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.feedFilter));
  });

  window.addEventListener("hashchange", () => applyFilter(filterFromHash(), false));
  applyFilter(filterFromHash(), false);
})();
