const firstColor = document.getElementById('#D98880');
const secondColor = document.getElementById('#A9DFBF');
const thirdColor = document.getElementById('#5DADE2');
const fourthColor = document.getElementById('#CCD1D1');
const bodybg = document.querySelector('body');

firstColor.addEventListener('click', () => {
  bodybg.style.backgroundColor = "#D98880";
})

secondColor.addEventListener('click', () => {
  bodybg.style.backgroundColor = "#A9DFBF";
})

thirdColor.addEventListener('click', () => {
  bodybg.style.backgroundColor = "#5DADE2";
})

fourthColor.addEventListener('click', () => {
  bodybg.style.backgroundColor = "#CCD1D1";
})
