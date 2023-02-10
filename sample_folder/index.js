const newLi = document.createElement('li');
const list = document.querySelector('ul');
const newTodo = document.createElement('li');
const boldText = document.createElement('b');
boldText.textContent = 'DON\'T FORGET TO LOCK THE  COOP!';
newLi.classList.add('todo');
newTodo.classList.add('todo');
newLi.textContent = 'Treat the chickens(Madication)';

newTodo.append(boldText);
list.append(newLi);
