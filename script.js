const background = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');
let load = 0;
let intervalId = setInterval(bluring, 30);

function bluring() {
  load++;

  if (load > 99) {
    clearInterval(intervalId);
  };

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
};