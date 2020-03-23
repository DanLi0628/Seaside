//x:x coordinate,y:y coordinate,a:variable
w = 400, h = 600;
let x = 80;
let y = 0;
let a = 1;
let b = 1;
let c1, c2, c3, c4;
let m = 200, n = 150;
let x1=50,y1=100;

function setup() {
    createCanvas(w, h);
    //sea color,1:dark,2:light
    c1 = color('#2631EA');
    c2 = color('#2394F5');
    //sun color,3:dark,4:light
    c3 = color('#FA8B14');
    c4 = color('#F0B67B');
}
function draw() {
    //sea
    noStroke();
    fill('#3B4CB2');
    quad(0, 0, 0, h, w - 350, h, w, 0);
    //beach
    fill('#FFC850');
    triangle(w, 0, w, h, w - 350, h);
    fill('#FAECA4');
    quad(50,600,200,600,400,230,400,0);
    //sun
    stroke('#FAC914');
    fill('#FA8B14');
    circle(x, y, 50);
    //left and right
    x = x - a / 5;
    //up and down

    y = y + a;
    if (y >= 600 || y < -400) {
        a = -a;
        y = y + a;
    }

    //make the sun disappear
    noStroke();
    fill('#3B4CB2');
    quad(0, 200, 0, h, 25, h, 200, 200);
    //sunset 
    if (y > 180 && y < 280 && a == 1) {
        fill(c3);
        quad(0, m, 0, m + 20, n, m + 20, n + 10, m);
    }
    if (y > 220 && y < 280 && a == 1) {
        fill(c4);
        quad(0, m + 20, 0, m + 40, n - 10, m + 40, n, m + 20);
    }
    if (y > 240 && y < 280 && a == 1) {
        fill(c2);
        quad(0, m + 40, 0, m + 60, n - 20, m + 60, n - 10, m + 40);
    }
    if (y > 260 && y < 280 && a == 1) {
        fill(c1);
        quad(0, m + 60, 0, m + 80, n - 30, m + 80, n - 20, m + 60);
    }
    //sunrise
    if (y > 180 && y < 280 && a == -1) {
        fill(c1);
        quad(0, m, 0, m + 20, n - 20, m + 20, n - 30, m);
    }
    if (y > 220 && y < 280 && a == -1) {
        fill(c2);
        quad(0, m + 20, 0, m + 40, n - 10, m + 40, n - 20, m + 20);
    }
    if (y > 240 && y < 280 && a == -1) {
        fill(c4);
        quad(0, m + 40, 0, m + 60, n, m + 60, n - 10, m + 40);
    }
    if (y > 260 && y < 280 && a == -1) {
        fill(c3);
        quad(0, m + 60, 0, m + 80, n + 10, m + 80, n, m + 60);
    }
//become dark
    if (y > 280) {
        //sea
        fill('#0F1583');
        quad(0, 0, 0, h, w - 350, h, w, 0);
        //beach
        fill('#CBBD88');
        triangle(w, 0, w, h, w - 350, h);
        fill('#E5E0C3');
        quad(50,600,200,600,400,230,400,0);
    }

if ((mouseX*12/7)-(h-mouseY)-200/7>=0){
    girl(mouseX,mouseY);
    }
if ((mouseX*12/7)-(h-mouseY)-200/7<0){
    fill('#888FCB')
    fish(mouseX,mouseY);
    fish(mouseX-50,mouseY-50);
    fish(mouseX-100,mouseY+150);
}
    //house 
    fill('#CBC588');
    stroke('#76650A');
    strokeWeight(2);
    triangle(310,320,250,370,370,370);
    rect(308,370,5,100);
    rect(250,400,5,70);
    rect(255,440,30,30);
    rect(370,400,5,70);
    rect(340,440,30,30);
    //fish
if ((x1*12/7)-(h-y1)-200/7<0){
    fill('#8486DE')
    fish (x1,y1);
    fish (x1-150,y1+50);
    fish (x1-100,y1+150);
    x1++;
    if((x1*12/7)-(h-y1)-200/7>=0){
        x1=50;
    }
    

}
}
function fish(m, n) {
    stroke('black');
    strokeWeight(1);
    triangle(m + 30, n, m, n + 20, m, n - 20);
    triangle(m, n, m - 10, n - 10, m - 10, n + 10);
    strokeWeight(2);
    point(m + 20, n)
}

function girl(x, y) {
    noStroke();
    fill('#F5DAF4')
    circle(x, y, 25);
    triangle(x, y, x - 20, y + 40, x + 20, y + 40);
    stroke('#F5DAF4');
    strokeWeight(3);
    line(x - 5, y + 40, x - 5, y + 50);
    line(x + 5, y + 40, x + 5, y + 50);
}
