const tabs = document.querySelectorAll('.tabs ul li');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
tab.addEventListener('click', () => {
  const target = tab.dataset.tab;
  const tabGroup = tab.parentElement.parentElement;

  // Remove active class from all tabs in this group
  tabGroup.querySelectorAll('li').forEach(t => t.classList.remove('active'));
  tabGroup.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  // Add active class to clicked tab and corresponding content
  tab.classList.add('active');
  tabGroup.querySelector(`.tab-content[data-tab="${target}"]`).classList.add('active');
});
});