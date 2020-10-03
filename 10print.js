let x = 0;
let y = 0;
const cor = 0;
let cv, ctx;
let interval = 10;
const spc = 10;
let iterations = 5;
let probability = 0.5;

window.onload = () => setup();

const setup = function() {
  cv = document.querySelector('canvas');
  ctx = cv.getContext('2d');
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,cv.width,cv.height);
  let params = {};
  let search = window.location.search.split(/\?|&/);
  search.shift();
  for (let i = 0; i < search.length; i++) {
    let s = search[i].split('=');
    params[s[0]] = s[1];
  };
  probability = parseFloat(params.probability, 10) || probability;
  setInterval(draw, interval);
}

const draw = function() {
  for (let i = 0; i < iterations; i++) {
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, spc, spc);
    ctx.strokeStyle = 'white';
    let r = Math.random() > probability;
    ctx.beginPath();
    ctx.moveTo(x + spc * r, y);
    ctx.lineTo(x + spc * !r, y + spc);
    ctx.stroke();
    x += spc;
    if (x >= cv.width) {
      x = 0;
      y += spc;
      if (y >= cv.height) y = 0;
    }
  }
}