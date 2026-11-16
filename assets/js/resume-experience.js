const partTimeTrigger = document.getElementById('part-time-experience-trigger');
const partTimeDialog = document.getElementById('part-time-experience');

partTimeTrigger.addEventListener('click', () => partTimeDialog.showModal());

partTimeDialog.addEventListener('click', (event) => {
  if (event.target === partTimeDialog) {
    partTimeDialog.close();
  }
});
