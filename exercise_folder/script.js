// Select the section with an id of container without using querySelector.
// const onlySection = document.getElementById('container');
// Select the section with an id of container using querySelector.
// const section = document.querySelector('#container');
// Select all of the list items with a class of “second”.
// const secondLis = document.getElementsByClassName('second');
// Select a list item with a class of third, but only the list item inside of the ol tag.
// const ol = document.querySelectorAll('ol');
const ul = document.querySelector('ul');
// const thirdLi = ol.getElementsByClassName('third');

// console.log(thirdLi);
// const listItem = document.querySelector('ol .third');
// Give the section with an id of container the text “Hello!”.

// section.textContent = 'HELLO!';

// Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.className = 'main';
// Remove the class main on the div with a class of footer.
footer.classList.remove('main');
// Create a new li element.
const newLi = document.createElement('li');
newLi.textContent = 'four';
newLi.className = 'four';
ul.append(newLi);
// ol.prepend(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const orderLi = document.querySelectorAll('ol li');

for (let i = 0; i < orderLi.length; i + 1) {
  orderLi[i].style.backgroundColor = 'green';
}

// Remove the div with a class of footer
const div = document.querySelector('.footer');
div.remove();