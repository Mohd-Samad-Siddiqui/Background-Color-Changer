const firstColor = document.getElementById('#D98880');
const secondColor = document.getElementById('#A9DFBF');
const thirdColor = document.getElementById('#5DADE2');
const fourthColor = document.getElementById('#CCD1D1');
const bodybg = document.querySelector('body');

firstColor.addEventListener('click', () => {
  bodybg.style.backgroundColor = "#D98880";
  firstColor.style.border = '2px solid #fff';
  secondColor.style.border = 'none';
  thirdColor.style.border = 'none';
  fourthColor.style.border = 'none';
})

secondColor.addEventListener('click', () => {
  bodybg.style.backgroundColor = "#A9DFBF";
  secondColor.style.border = '2px solid #fff';
  firstColor.style.border = 'none';
  thirdColor.style.border = 'none';
  fourthColor.style.border = 'none';
})

thirdColor.addEventListener('click', () => {
  bodybg.style.backgroundColor = "#5DADE2";
  thirdColor.style.border = '2px solid #fff';
  firstColor.style.border = 'none';
  secondColor.style.border = 'none';
  fourthColor.style.border = 'none';
})

fourthColor.addEventListener('click', () => {
  bodybg.style.backgroundColor = "#CCD1D1";
  fourthColor.style.border = '2px solid #fff';
  firstColor.style.border = 'none';
  secondColor.style.border = 'none';
  thirdColor.style.border = 'none';
})