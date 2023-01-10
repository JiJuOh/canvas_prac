const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// we have to let js know the cnavas size
canvas.width = 500;
canvas.height = 500;


// coordinate system
// start from the canvas left top corner (0,0)
ctx.fillRect(50, 50, 100, 100); 
// starting point x,y, rectangle width w,height h
ctx.rect(160, 160, 100, 100); 
ctx.rect(270, 270, 100, 100);

ctx.moveTo(380, 50);
ctx.lineTo(480, 50);
ctx.lineTo(480, 150);
ctx.lineTo(380, 150);
ctx.lineTo(380, 50);
ctx.stroke();

ctx.beginPath();
ctx.rect(160, 50, 100, 100); 
ctx.rect(50, 160, 100, 100);
ctx.rect(160, 270, 100, 100)
ctx.fillStyle = "green";

setTimeout(() => {
  ctx.fill();
}, 1000);

