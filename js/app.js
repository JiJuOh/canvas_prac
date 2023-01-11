const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// we have to let js know the cnavas size
canvas.width = 800;
canvas.height = 800;


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
ctx.fill();

// setTimeout(() => {
//   ctx.fill();
// }, 1000);

// build a house
ctx.beginPath();
// two walls
ctx.fillStyle = "purple";
ctx.fillRect(300, 600, 50, 200);
ctx.fillRect(600, 600, 50, 200);
// a door
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.strokeRect(500, 700, 80, 100);
ctx.arc(520, 750, 5, 0, 2 * Math.PI);
// ceiling
ctx.fillRect(300, 570, 350, 30);
//roof
ctx.moveTo(300, 570);
ctx.lineTo(475, 450);
ctx.lineTo(650, 570);
ctx.lineTo(300, 570);
ctx.lineTo(475, 450);
ctx.stroke();
ctx.fill();
// window
ctx.beginPath();
ctx.fillStyle = "lightskyblue";
ctx.arc(400, 650, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(400, 570, 35, 1 * Math.PI, 2 * Math.PI);
ctx.arc(550, 570, 35, 1 * Math.PI, 2 * Math.PI);
ctx.fill();

// bear
ctx.beginPath();

ctx.lineWidth = "3";
ctx.strokeStyle = "peru";

ctx.fillStyle = "tan";
ctx.fillRect(150, 700, 40, 100);
ctx.fillRect(140, 730, 10, 30);
ctx.fillRect(190, 730, 10, 30);
ctx.fillRect(150, 695, 10, 5);
ctx.fillRect(180, 695, 10, 5);

ctx.fillStyle="lemonchiffon"
ctx.fillRect(166, 720, 12, 6);
ctx.fillRect(190, 760, 10, 10);
ctx.fillRect(140, 760, 10, 10);
ctx.fillRect(153, 697, 4, 3);
ctx.fillRect(183, 697, 4, 3);
ctx.fillRect(183, 697, 4, 3);
ctx.fillRect(160, 740, 20, 20);

ctx.fillStyle="black"
ctx.fillRect(160, 715, 4,4);
ctx.fillRect(180, 715,4,4);
ctx.fillRect(170, 720, 6,3);

// vertical box
ctx.moveTo(150, 800);
ctx.lineTo(150, 695);
ctx.lineTo(160, 695);
ctx.lineTo(160, 700);
ctx.lineTo(180, 700);
ctx.lineTo(180, 695);
ctx.lineTo(190, 695);
ctx.lineTo(190, 800);

// horizental box
ctx.moveTo(140,731);
ctx.lineTo(200,731);
ctx.lineTo(200,768);
ctx.lineTo(140,768);
ctx.lineTo(140,730);
ctx.moveTo(170,770);
ctx.lineTo(170,800);
ctx.stroke();
//

