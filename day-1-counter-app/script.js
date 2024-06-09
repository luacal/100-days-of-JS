const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');
const decrementBtn = document.getElementById('decrement');

resetBtn.addEventListener('click', ()=> {
  counter.innerText = 0;
});

incrementBtn.addEventListener('click', () => {
  const counterValue = Number(counter.innerText);
  counter.innerText = counterValue + 1;
});

decrementBtn.addEventListener('click', () => {
  const counterValue = Number(counter.innerText);
  counter.innerText = counterValue - 1;
});