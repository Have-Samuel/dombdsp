const colorSection = document.querySelector('#colors');

colorSection.addEventListener('click', (e) => {
  // console.log(e.target.dataset.hex);
  document.body.style.backgroundColor = e.target.dataset.hex;
});