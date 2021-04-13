const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  result: document.getElementById("value"),
};

let counterValue = 0;

refs.incrementBtn.addEventListener("click", increment);
refs.decrementBtn.addEventListener("click", decrement);

function increment() {
  counterValue += 1;
  refs.result.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  refs.result.textContent = counterValue;
}
