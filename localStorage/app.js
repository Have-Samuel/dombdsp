// const preferences = {
//   fontSize: '20px',
//   margin: '3rem',
//   favColor: 'teal'
// };

// localStorage.setItem('preferences', JSON.stringify(preferences));
// const ans = localStorage.getItem('preferences');

// const nothin = JSON.parse(ans);
// console.log(nothin); // -> {fontSize: '20px', margin: '3rem'}
// console.log(ans); // -> {"fontSize":"20px","margin":"3rem"}

// const prefs = JSON.parse(localStorage.preferences);

// const { favColor } = JSON.parse(localStorage.preferences);

// document.body.style.backgroundColor = favColor;

const toggleSwitch = document.querySelector('input[type="checkbox"]');

if (localStorage.getItem('darkModeEnabled')) {
  document.body.className = 'dark';
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('click', () => {
  const { checked } = toggleSwitch;
  if (checked) {
    localStorage.setItem('darkModeEnabled', true);
  } else {
    localStorage.removeItem('darkModeEnabled');
  }
  document.body.className = checked ? 'dark' : '';
});