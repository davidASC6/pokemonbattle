let health1 = 150
let health2 = 150
function setup(){
   createCanvas(600,600);
   background("lightblue");
}
function changeBG() {
    var val = random(255);
    background(val);
  }
function draw(){
   fill(0,102,53);
   rect(0,150, 600,600);
   fill("tan");
   ellipse(450,290,200,40);
   fill("yellow");
   ellipse(450,250, 80);
   fill('tan')
   ellipse(150,410,200,40);
   fill("blue");
   ellipse(150, 370, 80);
   fill("white");
   rect(0,450,600,200);
   fill("white");
   rect(50,200, 200,50);
   rect(350,350,200,50);
   fill("lightgreen");
   rect(75, 220, health1, 25);
   rect(375,370,health2,25 );
   fill("gray")
   rect(25, 500, 200, 75);
   rect(350, 500, 200, 75);
   textSize(19)
   fill(1,1,1)
   text('Pikachu  Lv75', 400,368)
   text('Squirtle Lv80', 100, 215)
   textSize(28)
   text('Water Cannon', 42, 540)
   text('Thunder bolt',380, 540)
}
function mouseClicked(){
   if (mouseX > 25 && mouseX <225 && mouseY > 500 && mouseY < 575 ){
       health2 -= 20
       health1 -= 10
       clickListener(event)
   }else if (mouseX > 350 && mouseX < 550 && mouseY > 500 & mouseY <575){
       health2 -= 40
       health1 -= 50
   }
}
const button = document.getElementById("fullRestoreButton")
button.addEventListener("click",clickListener);
function clickListener(event){
    event.preventDefault();
    const health1 = 150
}