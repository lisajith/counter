let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increment").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("decrement").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

document.getElementById("double").addEventListener("click", () => {
  count *= 2;
  countDisplay.textContent = count;
});
