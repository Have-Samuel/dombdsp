const fastLi = document.querySelector('li');

// fastLi.setAttribute('class', 'completed');

// fastLi.getAttribute('class');

// todo.className;

function toggleAllTodos() {
  const todo = document.querySelectorAll('li');

  for (let li of todo) {
    li.classList.toggle('completed');
  }
}
// toggleAllTodos();
const h1 = document.querySelector('h1');

setInterval(function () {
  if (h1.classList.contains('big')) {
    h1.textContent = 'SAD!'
    h1.style.color = 'teal'
  } else {
    h1.textContent = 'HAPPY!';
    h1.style.color = 'red';
  }
  h1.classList.toggle('big');
  h1.classList.toggle('small');
}, 1000);