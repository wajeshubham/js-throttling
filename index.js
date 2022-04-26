const clickMeButton = document.getElementById("btn");

const countContainer = document.getElementById("count");
const unThrottledCountContainer = document.getElementById("unThrottledCount");

let count = 0;
let countWithoutThrottle = 0;

const throttle = (callback, delay = 500) => {
  let wait = false; // Initially, we're not waiting

  return (...args) => {
    if (wait) return; // If we are waiting, don't do anything

    // If we're not waiting, call the callback and set the wait flag
    callback.apply(this, ...args);
    wait = true;

    setTimeout(() => {
      // After the delay, we are no longer waiting
      wait = false;
    }, delay);
  };
};

const withThrottle = throttle((e) => {
  countContainer.innerHTML = count++;
}, 1000);

clickMeButton.addEventListener("click", (e) => {
  withThrottle(e);
  unThrottledCountContainer.innerHTML = countWithoutThrottle++;
});
