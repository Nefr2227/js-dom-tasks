export default () => {
  // BEGIN
  const button = document.getElementById('alert-generator');
  const alertsContainer = document.querySelector('.alerts');
  
  let alertCounter = 1;

  button.addEventListener('click', () => {
    const alert = document.createElement('div');
    alert.className = 'alert alert-primary';
    alert.textContent = `Alert ${alertCounter}`;

    alertsContainer.prepend(alert);

    alertCounter++;
  });
  // END
};