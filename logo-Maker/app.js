const formEl = document.querySelector('#logo-form');
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('SUBMIT!!');
});