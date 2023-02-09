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
toggleAllTodos();