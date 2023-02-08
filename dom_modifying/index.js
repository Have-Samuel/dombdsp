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

for (let h2 of allH2s) {
  h2.style.color = 'magenta';
  h2.style.fontSize = '35px';
}

const h1 = document.querySelector('h1');

h1.style.backgroundColor = 'yellow';

const allImgs = document.getElementsByTagName('img');

for (let img of allImgs) {
  img.style.width = '400px';
  img.style.border = '5px solid teal';
  img.style.borderRadius = '1rem';
}

const imgs = document.querySelectorAll('img');
for (let img of imgs) {
  console.log(img.getAttribute('src'));
}

const input = document.querySelector('input');
// input.setAttribute('type', 'checkbox');

input.setAttribute('placeholder', 'I like piglets!');
