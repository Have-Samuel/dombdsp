const formEl = document.querySelector('form');
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('YOU SUBMITTED THE FORM!!!');
});

const link = document.querySelector('a');
link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('NO GOOGLE FOR YOU!!!');
});

const checkBox = document.querySelector('input[type= "checkbox"]');
checkBox.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('NO CHECKING THIS BOX GUY!!!');
});