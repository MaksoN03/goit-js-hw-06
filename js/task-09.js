function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', (event) => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColor.textContent = color;
});