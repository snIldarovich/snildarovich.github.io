
const tabs = document.querySelectorAll('.accordeon__tab-btn');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-id');

    tabs.forEach(tab => {
      tab.classList.remove('accordeon__tab-btn--active');
    });

    tab.classList.add('accordeon__tab-btn--active');

    const contentTabs = document.querySelectorAll('.accordeon__tab-content');

    contentTabs.forEach(contentTab => {
      if (contentTab.getAttribute('data-id') === tabId) {
        contentTab.style.display = 'block';
      } else {
        contentTab.style.display = 'none';
      }
    });
  });
});


