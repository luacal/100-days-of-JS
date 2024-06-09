const resultElm = document.getElementById('result');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', ()=> {
  resultElm.innerText = Math.round((Math.random()*1000));
})



