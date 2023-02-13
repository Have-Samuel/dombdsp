// For this demo, when the mouse moves over different positions of the
// body, the color changes according to the allocated colors
document.addEventListener('mousemove', (e) => {
  const r = Math.floor((e.pageX * 255) / window.innerWidth);
  const b = Math.floor((e.pageY * 255) / window.innerHeight);
  const color = `rgb(${r}, 0, ${b})`;
  document.body.style.backgroundColor = color;
  console.log(r, b);
});