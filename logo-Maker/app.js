// const brandInput = document.querySelector('input[name="brandname"]')
// const colorInput = document.querySelector('input[name="color"]');
// const fontSizeInput = document.querySelector('input[name="fontsize"]');
// const section = document.querySelector('#results');
// const formEl = document.querySelector('#logo-form');

// function makeLogo(text, color, size) {
//   const logo = document.createElement('h2');
//   logo.innerText = text;
//   logo.style.color = color;
//   logo.style.fontSize = size + 'px';
//   return logo;
// }

// formEl.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const newLogo = makeLogo(brandInput.value, colorInput.value, fontSizeInput.value);
//   section.append(newLogo);
//   brandInput.value = '';
// });

const brandInput = document.querySelector('input[name="brandname"]');
const colorInput = document.querySelector('input[name="color"]');
const fontSizeInput = document.querySelector('input[name="fontsize"]');
const section = document.querySelector('#results');

function makeLogo(text, color, size) {
  const logo = document.createElement('h2');
  logo.innerText = text;
  logo.style.color = color;
  logo.style.fontSize = size + 'px';
  return logo;
}

const form = document.querySelector('#logo-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newLogo = makeLogo(brandInput.value, colorInput.value, fontSizeInput.value);
  section.append(newLogo);
  brandInput.value = '';
});

// document.addEventListener('keypress', (e) => {
//   console.log('KEY PRESS!', e.key);
// });

// document.addEventListener('keydown', (e) => {
//   console.log('KEY PRESS!', e.key);
// });

document.addEventListener('keyup', (e) => {
  console.log('KEY PRESS!', e.key);
});