// Accessing text
const mainGreeting = document.getElementById('main-greeting');

console.log(mainGreeting.innerText);

// Modifying Text
mainGreeting.innerText = 'Hey Treasure!!';

// Using textContent
mainGreeting.textContent = 'Tell me it changed!';

// Modifying HTML
mainGreeting.innerHTML = '<article>Life is Good!!</article>';

// styling the Dom
const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'teal';
mainHeading.style.backgroundColor = 'yellow';

// Modifying Attributes
const firstInput = document.querySelector('input');

firstInput.getAttribute('type'); // text

firstInput.setAttribute('type', 'email');
