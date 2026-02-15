let count = 0;
let intervalId = null;
//selecting zero id
const btn = document.getElementById("count");
//selecting increase btn
const increaseBtn = document.getElementById("inc");
increaseBtn.addEventListener("click", () => {
  count++;
  btn.textContent = count;
});
//selecting decrease btn
const decreaseBtn = document.getElementById("dec");
decreaseBtn.addEventListener("click", () => {
  count--;
  btn.textContent = count;
});
//selecting reset btn
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
  count = 0;
  btn.textContent = count;
});

//selecting auto start button
const autoSt = document.getElementById("start");
autoSt.addEventListener("click", () => {
  if (intervalId !== null) return;
  intervalId = setInterval(() => {
    count++;
    btn.textContent = count;
  }, 1000);
});
//selecting stop auto btn
const autoStop = document.getElementById("stop");
autoStop.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
