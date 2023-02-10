const newLi = document.createElement('li');
const list = document.querySelector('ul');
const newTodo = document.createElement('li');
const fastLi = document.createElement('li');
const boldText = document.createElement('b');
const newImg = document.createElement('img'); 

boldText.textContent = 'DON\'T FORGET TO LOCK THE  COOP!';
newLi.classList.add('todo');
newTodo.classList.add('todo');
newLi.textContent = 'Treat the chickens(Madication)';
fastLi.textContent = 'Feed the animals';
fastLi.className = 'todo';
newImg.setAttribute(
  'src',
  'https://i.ytimg.com/vi/BgKUmzkFKUo/maxresdefault.jpg'
);
newImg.style.width = '500px';

newTodo.append(boldText);
list.append(newLi);
list.append(newTodo);
list.prepend(fastLi);
document.body.prepend(newImg);