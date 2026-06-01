export default () => {
  // BEGIN
  const tabTriggers = document.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');

  tabTriggers.forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
      
      const targetId = trigger.dataset.bsTarget;
      if (!targetId) return;
      
      const targetPane = document.querySelector(targetId);
      if (!targetPane) return;
 
      const navContainer = trigger.closest('.nav, .nav-tabs, .nav-pills');
      if (!navContainer) return;

      const allTriggersInGroup = navContainer.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');

      const tabContent = targetPane.closest('.tab-content');
      if (!tabContent) return;

      const allPanes = tabContent.querySelectorAll('.tab-pane');

      allTriggersInGroup.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
 
      trigger.classList.add('active');
      trigger.setAttribute('aria-selected', 'true');

      allPanes.forEach(pane => {
        pane.classList.remove('active', 'show');
        pane.setAttribute('aria-hidden', 'true');
      });

      targetPane.classList.add('active', 'show');
      targetPane.setAttribute('aria-hidden', 'false');
    })
  })
  // END
};
