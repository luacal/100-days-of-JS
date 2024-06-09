const generateBtn = document.getElementById('generate-btn');
const colorCodeElm = document.querySelector('.color-code');
const colorImageElm = document.querySelector('.color-image');

function generateRandomHexColor () {
  const possibilitiesArr = ['a', 'b', 'c', 'd', 'e', 'f','0', '1', '2', '3', '4', '5', '6','7','8','9'];
  const possibilitiesArrLength = possibilitiesArr.length;
  let colorCode = '';

  for (let i = 0; i < 6; i++) {
    colorCode +=  possibilitiesArr[Math.floor((Math.random() * (possibilitiesArrLength-1)))];
  }

  console.log('color:', colorCode);
  return colorCode;

}


generateBtn.addEventListener('click', () => {
  let colorCode = generateRandomHexColor();
  colorCodeElm.innerText = '#'+colorCode ;
  colorImageElm.style.backgroundColor = `#${colorCode}`;
});
