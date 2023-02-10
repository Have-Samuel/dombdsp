/* eslint-disable no-restricted-syntax */
function toggleAllTodos() {
  const todo = document.querySelectorAll('li');

  for (const li of todo) {
    li.classList.toggle('completed');
  }
}
toggleAllTodos();
const h1 = document.querySelector('h1');

setInterval(() => {
  if (h1.classList.contains('big')) {
    h1.textContent = 'SAD!';
    h1.style.color = 'yellow';
  } else {
    h1.textContent = 'HAPPY!';
    h1.style.color = 'brown';
  }
  h1.classList.toggle('big');
  h1.classList.toggle('samll');
}, 1000);