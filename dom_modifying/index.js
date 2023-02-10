/* eslint-disable no-restricted-syntax */
// const btn = document.getElementById('submit');

// btn.innerText = 'Release';

// const ol = document.querySelector('ol');

// ol.innerText = 'Love is good!';

// const i = document.querySelector('i');
// const caps = i.innerText.toUpperCase();

// i.innerText = caps;
const allH3s = document.querySelector('h3');

allH3s.style.color = 'red';
allH3s.style.fontSize = '40px';

const allH2s = document.getElementsByTagName('h2');

for (const h2 of allH2s) {
  // h2.style.color = 'magenta';
  h2.style.fontSize = '35px';
}

const h1 = document.querySelector('h1');

h1.style.backgroundColor = 'yellow';

const allImgs = document.getElementsByTagName('img');

for (const img of allImgs) {
  img.style.width = '400px';
  img.style.border = '5px solid teal';
  img.style.borderRadius = '1rem';
}

const input = document.querySelector('input');
// input.setAttribute('type', 'checkbox');

input.setAttribute('placeholder', 'I like piglets!');

const imgs = document.querySelectorAll('img');
// for (let img of imgs) {
//   console.log(img.getAttribute('src'));
// }
// LOOPING THRO IMAGE1 SO THAT ALL OTHER IMGAGES ARE GONE
const src = imgs[0].getAttribute('src');
for (const img of imgs) {
  img.setAttribute('src', src);
}

const quote = document.querySelector('blockquote');
quote.setAttribute('class', 'section-title');

const h2 = document.querySelector('h2');
h2.setAttribute('class', 'big');

const range = document.querySelector('input[type="range"]');
range.value = 10;