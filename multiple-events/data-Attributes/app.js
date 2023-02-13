const list = document.querySelector('#cars');

list.addEventListener('click', (e) => {
  console.log(e.target.getAttribute('data-id'));
  console.log(e.target.dataset);
  e.target.dataset.sold = true;
});