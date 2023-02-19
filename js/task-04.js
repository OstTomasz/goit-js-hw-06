let counterValue = 0;
let value = counter.querySelector(`#value`);
//===========================
const decrement = counter.querySelector(`[data-action="decrement"]`);
const decrementing = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
decrement.addEventListener("click", decrementing);
//============================
const increment = counter.querySelector(`[data-action="increment"]`);
const incrementing = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
increment.addEventListener("click", incrementing);
