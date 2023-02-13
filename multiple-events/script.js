const removeButtons = document.querySelectorAll('li button');

// Loop removing the whole 'li'
for (let btn of removeButtons) {
  btn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  })
};