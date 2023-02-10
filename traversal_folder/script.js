const ul = document.querySelector('ul');
const h1 = document.querySelector('h1');

const section = ul.parentElement.parentElement;

console.log(section);

h1.previousElementSibling; //=> null

h1.nextElementSibling.nextElementSibling; //=> <div>Here is the second div!</div>