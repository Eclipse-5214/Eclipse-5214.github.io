/** Made with Electric Dolphin's platformer template
 * https://www.khanacademy.org/computer-programming/platformer-template/5484801669693440
*/
/*



*/
//variables
{
var win = true;
var death = 0;
var acceleration = 0.5;
var deceleration = 0.4;
var maxSpeed = 5;
var jumpHeight = 7.7;
var gravity = 5;
var enemySpeed = 1;
var enemyGravity = 0.09;
var bounceHeight = 11;
var enemyBounceHeight = 5;
var fSize = 20;
var pulse = 132;
var pulseS = 1;
var inWater = false;
var tp = false;
var scene = 3;
var angle = 0;
var rgb = [100,100,100];
var fade = 0;
var time = 0;
var sounds;

{var level = 0;
var pX = 0;
var pY = 0;
var initialize = true;
var x = 0;
var y = 0;
var xVel = 0;
var yVel = 0;
var canJump = false;
var touchingBlock = false;
var doInit = true;}
var play = true;

var enemies = [];

var playerL = "p";
var enemyL = "e";
var blockL = "b";
var fakeL = "f";
var lavaL = "l";
var spikeL = "^";
var jumpL = "j";
var portalL = "w";
var waterL = "o";
var tp1L = "1";
var tp2L = "2";
var decoRedL = "r";
var decoGreenL = "g";
var decoBlueL = "B";
var wallL = "3";
var platformL = "4";
var doorL = "5";
}

function preload(){
	sounds={
		jump1:loadSound("jump1.mp3"),
		jump2:loadSound("jump2.mp3"),
		laser4:loadSound("laser4.mp3"),
		battleswing:loadSound("battle-swing.mp3"),
		boom2:loadSound("boom2.mp3"),
	}
}

//setup function
function setup(){
	createCanvas(windowHeight,windowHeight);
	noStroke();
	textAlign(CENTER, CENTER);
	textFont("Arial Bold", fSize);
	frameRate(60);
	sounds.tf=true;
	scale(windowHeight,windowHeight);

}

//levels
{
var levels = [
   ["",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "p                  w",
    "bbbbbbbbbbbbbbbbbbbb"], // Tutorial 1

   ["",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "p        ^^^       w",
    "bbbbbbbbbbbbbbbbbbbb"], // Tutorial 2

   ["",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "w",
    "bbbbbbbbbbbbbbbbbbb",
    "",
    "",
    "",
    "p        ^^^       j",
    "bbbbbbbbbbbbbbbbbbbb"], // Tutorial 3

   ["",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "w",
    "bbbbbbbbblllbbbbbbb",
    "bbbbbbbbbbbbbbbbbbb",
    "",
    "",
    "",
    "p        ^^^       j",
    "bbbbbbbbbbbbbbbbbbbb"], // Tutorial 4

   ["",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "p                  w",
    "bbbbbbbbooobbbbbbbbb",
    "bbbbbbbblllbbbbbbbbb"], // Tutorial 5

   ["",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "p        eee       w",
    "bbbbbbbbbbbbbbbbbbbb"], // Tutorial 6

   ["bbbbbbbbbbbbbbbbbbbb",
    "bfffffffffooooooooow",
    "bffffffffff",
    "bffbfffff",
    "bffffff    b",
    "bffff",
    "bfffff   j   eeeeeee",
    "bfbbbbbbbbbbbbbbbbbb",
    "b                  b",
    "bj    bo      bo   b",
    "bbo       bo       b",
    "b                  b",
    "b^^^^^^^^^^^^^^^   b",
    "bbbbbbbbbbbbbbbbbbfb",
    "lllbfffffffffffffffb",
    "   bfffffffffffffffb",
    "   ffffffbfffffffffb",
    "   ffffffbfffffffffb",
    "p  ffffffblfffffffjb",
    "bbbbbllllbbbbbbbbbbb"], // level 1

   ["pb           w",
    " b           b",
    " b          bf",
    " b         bff",
    " b         f f",
    " b         f f",
    " b     b   f f   ",
    " b     f   f f      ",
    " b     f   f f     j",
    " b   j f   f f     f",
    " bbbbbbf   f f     f",
    " fffffbf  jf f     f",
    " fffffbfffff f     f",
    " bbbffbf   f f     f",
    " b     f   f f j j f",
    " b     f   f fffffff",
    " b     f   f f f   f",
    " b     f   f f f   f",
    "jbeeeeefeeef f f   j",
    "bbbbbbbbbbbbbbbbbbbb"], // level 2

   ["fffffwffffffffffffff",
    "ffffffffffffffffffff",
    "fffffffffffoffffffffb",
    "fffffffffffoffffffffb",
    "fffffffffffbffffffffb",
    "ffffffffffffffffffffb",
    "ffffffffffffffffoffb",
    "ffffffffffffffffbffb",
    "ffffffffffffffffofff",
    "ffffffffbfffffffffff",
    "ffffffffofffffffffff",
    "ffffffffffffffffffff",
    "ffffffffffffffffffff",
    "ffffffffffffffffffff",
    "fbbfffffffffffffffff",
    "fbfff   fff   ffffff",
    "fb       f        ff",
    "fb                 f",
    "pb                 ^",
    "jblllllllllllllllllb"], // level 3

   ["oooooooooowooooooooo",
    "",
    "",
    "",
    "",
    "    ^ee^      b",
    "    bbbb   bbb",
    "",
    "2                  ^",
    "jblllllllllllllllllb",
    "bbbbbbbbbbbbbbbbbbbbb",
    "ffffffffffffffffffff",
    "fff fffff  fffff fff",
    "ff   fff    fff   ff",
    "f  p  f      f     f",
    "f     f   ^  f   1 f",
    "f bbb f  bb  f bbb f",
    "f     f      f     f",
    "ff   fff    fff   ff",
    "lllllllllllllllllllll"], // level 4

   ["bbbbbbbbbbbbbbbbbbbb",
    "b233333333333333333b",
    "b33rr3333gg3333BB33b",
    "b33rr3333gg3333BB33b",
    "b33rr3333gg3333BB335bbbbbb",
    "b3333333333333333335eeeeeb",
    "bbbbbbbbbbbbbbbb444bbbbbbb",
    "b                 bb",
    "b                b b",
    "b               b  b",
    "b  bb    bb    b   b",
    "b             b    b",
    "bw^^^^^^^^^^^b^^^^^b",
    "bbbbbbbbbbbbbbbbbbbb",
    "bfffffbffffffbffff1b",
    "b ffffbfffffflfffffb",
    "b  fffbffbbbfffffffb",
    "b   fffffffbfffffffb",
    "bp   ffffffbfffffffb",
    "bbbbbbbbbllbbbbbbbbb"], // level 5

   ["bbbbbbbbbbbbbbbbbbbb",
    "ggggggggggb2BBBBBBBB",
    "ggggggggggbbbbbbbbbB",
    "ggggggggggbBBBBBBBBB",
    "ggggggggggbBBBBBBBBB",
    "ggggggggggbBbbbbBBbb",
    "ggggggggggbBbllbllbb",
    "ggggggggggbBbbbbbbbbbbbbbbbbbbbbbb",
    "ggbllllbgg4BBBBBBBBBeeeeeeeeeeeeeb",
    "4bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "ffffffffbwb f   f",
    "ffffffffbfb f   f",
    "ffffffffbfbp f f^",
    "ffffffffffbbbb44b",
    "ffffffffffb1bbeeb  b",
    "ffbjffffffb 44bbb",
    "ffffffffffb b  oo",
    "ffffffffbjblbbb",
    "llllllllllbb^^^^^^^^",
    "bbbbbbbbbbbbbbbbbbbb"], // level 6

   ["bbbbbbbbbbbbbbbbbbbb",
    "p",
    "bbbbbbbb bbbbbbbbbbb",
    "llllllll lllllllllll",
    "llllllll lllllllllll",
    "llllllll lllllllllll",
    "llllllll lllllllllll",
    "llllllll lllllllllll",
    "llllllll lllllllllll",
    "llllllll lllllllllll",
    "llllllll444lllllllll",
    "llllllll4eelllllllll",
    "llllllll444lllllllll",
    "llllllll lllllllllll",
    "llllllll lllllllllll",
    "llllllll lllllllllll",
    "llllllll lllllllllll",
    "llllllllwlllllllllll",
    "llllllllllllllllllll",
    "bbbbbbbbbbbbbbbbbbbb"], // level 7

   ["",
    "             b",
    "                   o",
    "l  lb   j",
    "l  lb",
    "l  lb",
    "l  lb              b",
    "l  lb",
    "l  lb",
    "l  lb               ",
    "l  lb",
    "l  lb",
    "l  lb        j",
    "l  lb",
    "l  lb",
    "l11lb    o       4ee",
    "llllb            4bb",
    "bbbbb            4b2",
    "p                4bw",
    "bbbbbbbbbbbbbbbbbbbb"], // level 8

   ["bb     llooolbbbbbbb",
    "wb   n llloolllooooo",
    "       lllooooooo",
    "         looooooo ^^",
    "   o lbb bbblll   bb",
    "   bl o           ll",
    "   b             j",
    "bbbb",
    "444o",
    "ll            o",
    "",
    "   ",
    " b           o",
    " b",
    " b",
    " b",
    " b",
    "pb",
    "jbllllllllllllllllll",
    "bbbbbbbbbbbbbbbbbbbb"], // level 9

    ["bbbbbbbbbbbbbbooooo",
    "                 ^^1",
    "                    ",
    "                    ",
    "                    ",
    "      o       j     ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "                    ",
    "      j        o    ",
    "                    ",
    "blllllllllllllllbb  ",
    "bbbbbbbbbbbbbbbbbb  ",
    "bbbbbbbbbbbbbbbbbb  ",
    "                   j",
    "           bbbbbbbbb",
    "p        eellllllll2",
    "bbbbbbbbllllbbbbbblw"], //level 10


   ["bbbbbbbbbbbbbbbbbbbb",
    "                    ",
    "44444444444444444444",
    "gggggggggggggggggggg",
    "gggggggggggggggggggg",
    "gggggrrrggggrrrggggg",
    "gggggrggggggrggggggg",
    "gggggrgrggggrgrggggg",
    "gggggrrrggggrrrggggg",
    "gggggggggggggggggggg",
    "gggggggggggggggggggg",
    "gggggggggggggggggggg",
    "gggggggggggggggggggg",
    "gggggggggggggggggggg",
    "gggggggggggggggggggg",
    "gggggggggggggggggggg",
    "gggggggggggggggggggg",
    "44444444444444444444",
    "p                  ",
    "bbbbbbbbbbbbbbbbbbbb"], // GG


];


var levelText = [["This Is a Platformer\n(death count is over your head)", 200, 30], ["It has Spikes", 200, 30],["Also Jump pads", 200, 30],["& Lava", 200, 30],["Also Water", 200, 30],["Finally It Has The Infection", 200, 30],["Level 1", 360, 130],["Level 2\nWait", 200, 30],["Level 3", 200, 10],["Level 4", 200, 30],["Level 5", 200, 30],["Level 6", 100, 40],["Level 7\nDropper\n:P", 70, 150],["Level 8\nParkour!", 200, 200],["Level 9 made by Baljeet", 200, 340],["Level 10 Made by shadow", 200, 200],["Thanks for playing", 200, 230]];
}

//AI
{
var player = function() {
    fill(pulse,pulse,pulse);
    text(death,pX+10,pY-10);
    fill(244, 127, 255);
    rect(pX, pY, 20, 20,5);
    fill(255, 0, 0);
};

var enemy = function(x, y) {
    this.x = x;
    this.y = y;
    this.dir = round(random(0, 1));
    this.yVel = 0;
};

enemy.prototype.draw = function() {
    fill(100, pulse, pulse);
    rect(this.x, this.y, 20, 20,5);
    if (this.dir === 0) {
        this.x -= enemySpeed;
    } else {
        this.x += enemySpeed;
    }
    this.y += this.yVel;
    this.yVel += enemyGravity;
};

var keys = [];

keyPressed = function() {
    keys[keyCode] = true;
};

keyReleased = function() {
    keys[keyCode] = false;
};
}

//titlescreen
{
var title = function(){
    push();
    translate(200,300);
    rotate(radians(45));
    fill(59, 59, 59);
    rect(0,-300,40,600);
    pop();
    push();
    translate(200,100);
    rotate(radians(45));
    fill(59, 59, 59);
    rect(0,-200,40,600);
    pop();
    textSize(50);
    fill(0);
    text("Cube Effect",210,52);
    fill(255);
    text("Cube Effect",200,50);
    textSize(5);
    fill(50);
    text("ver. 2.4",20,10);
    textSize(50);
    push();
    translate(80,232);
    rotate(radians(angle));
    fill(0);
    rect(-30,-30,60,60,10);
    pop();
    push();
    translate(70,230);
    rotate(radians(angle));
    fill(255, 127, 127);
    rect(-30,-30,60,60,10);
    pop();
    push();
    translate(80,142);
    rotate(radians(angle));
    fill(0);
    rect(-30,-30,60,60,10);
    pop();
    push();
    translate(70,140);
    rotate(radians(angle));
    fill(244, 127, 255);
    rect(-30,-30,60,60,10);
    pop();
    push();
    translate(80,332);
    rotate(radians(angle));
    fill(0);
    rect(-30,-30,60,60,10);
    pop();
    push();
    translate(70,330);
    rotate(radians(angle));
    fill(100, pulse, pulse);
    rect(-30,-30,60,60,10);
    pop();
    fill(0);
    rect(160,116,200,55,10);
    fill(rgb[0]);
    rect(150,110,200,55,10);
    fill(0);
    text("Play",260,136);
    fill(150);
    text("Play",250,133);
    fill(0);
    rect(160,206,200,55,10);
    fill(rgb[1]);
    rect(150,200,200,55,10);
    fill(0);
    textSize(29);
    text("Leaderboard",256,226);
    fill(150);
    text("Leaderboard",250,223);
    angle+=4;
    fill(0);
    rect(160,306,200,55,10);
    fill(rgb[2]);
    rect(150,300,200,55,10);
    fill(0);
    textSize(50);
    text("Credits",260,326);
    fill(150);
    text("Credits",250,320);
    angle+=1;
    fill(0,0,0,fade);
    rect(0,0,400,400);
    fade-=5;

    if(level>0){
        textSize(80);
        fill(255, 0, 0);
        text("CHEATER",200,200);
        play = false;
    }else{play = true;}

    if(play){
			mousePressed =function(){}
    if(mouseX>150&&mouseX<350&&mouseY>110&&mouseY<165){
        rgb[0]=125;
        mousePressed =function(){scene=1;}
    }else{rgb[0]=100;}
    if(mouseX>150&&mouseX<350&&mouseY>300&&mouseY<355){
        rgb[2]=125;
        mousePressed =function(){scene=2; sounds.battleswing.play();}
    }else{rgb[2]=100;}
    if(mouseX>150&&mouseX<350&&mouseY>206&&mouseY<261){
        rgb[1]=125;
        mousePressed =function(){scene=4; sounds.battleswing.play();}
    }else{rgb[1]=100;}
    }
};
}

//credits
{
var help = function(){
    push();
    translate(200,300);
    rotate(radians(45));
    fill(59, 59, 59);
    rect(0,-300,40,600);
    pop();
    push();
    translate(200,100);
    rotate(radians(45));
    fill(59, 59, 59);
    rect(0,-200,40,600);
    pop();
    fill(100);
    rect(30,30,340,340,10);
    fill(150);
    textSize(15);
    text("This is a platformer made\nwith Electric Dolphin's \nplatformer template.\n\nI have pretty much changed\neverything exept for the \ncollision, some of the\n blocks, and the player.\n I have made some new \nblocks  too! You will learn the\n basics in the tutorial, but\n I forgot to mention the teleporter.\nThat is self explanitory though.\n\nHave fun!\nmade in two months\nall levels are posible\n(Click anywhere to continue)",200,200);

    mousePressed = function() {scene=0;sounds.battleswing.play();};
};
}

//intro
{
var intro = function(){
    fill(0);
    stroke(255);
    strokeWeight(20);
    ellipse(200,220,200,200);
		noStroke();
    textSize(50);
    fill(255);
    text("Eclipse Games",200,60);
    push();
    translate(200,220);
    rotate(radians(270));
    arc(0, 0, 200, 200, 0, PI, PIE);
    pop();
    noStroke();
    fill(0,0,0,fade);
    rect(0,0,400,400);
    time++;
    if(time>100){fade+=5;}
    if(fade>300){scene=0;}

};
}

//Leaderboard
{
var score = function(){
    push();
    translate(200,300);
    rotate(radians(45));
    fill(59, 59, 59);
    rect(0,-300,40,600);
    pop();
    push();
    translate(200,100);
    rotate(radians(45));
    fill(59, 59, 59);
    rect(0,-200,40,600);
    pop();
    fill(100);
    rect(30,30,340,340,10);
    fill(150);
    textSize(15);
    text("River 13 deaths\nMe 29 deaths\nAdventuremen 729\n\npost your scores in the comments\n to get on the leaderboard\n(click to continue)",200,200);

};

}

//scenes
{

draw = function() {
    scale(2);

    if(scene===0){
        background(150,150,150);
        title();
    }

    if(scene===2){
        background(150,150,150);
        help();
    }
    if(scene===3){
        background(0);
        intro();
    }
    if(scene===4){
        background(150,150,150);
        score();
        mousePressed = function(){
        scene=0;
				sounds.battleswing.play();
    };
    }
    pulse -= pulseS;
    if(pulse<0){pulseS = -1;}
    if(pulse>255){pulseS = 1;}

    if(scene===1){
    background(255);
    textSize(20);

    if(initialize===true){
    death+=1;
    if(win===true){death-=1;sounds.battleswing.play();}
    if(win===false){sounds.boom2.play();}
    }
    background(255, 255, 255);
    yVel += 0.5;
    canJump = false;
    if (initialize) {
        enemies = [];
    }
for (var i = 0; i < levels[level].length; i ++) {
    for (var j = 0; j < levels[level][i].length; j ++) {
        switch(levels[level][i][j]) {
            case playerL:
                if (initialize) {
                    pX = j * 20;
                    pY = i * 20;
                }
            break;

            case enemyL:
                if (initialize) {
                    enemies.push(new enemy(j * 20, i * 20));
                }
            break;

            case blockL:
                fill(0, 0, 0);
                rect(j * 20, i * 20, 20, 20);
                x = j * 20;
                y = i * 20;
                if (pX + 20 > x && pX < x + 20 && pY + 20 > y && pY < y + 20) {
                    if (pX + 20 > x + round(xVel) + 1 && pX < x + round(xVel) + 20 - (round(abs(xVel)) + 1) && pY + 20 > y && pY < y + 10) {
                        inWater = false;
                        yVel = 0;
                        pY = y - 20;
                        canJump = true;
                    }
                    if (pX + 20 > (x + round(xVel) + 1) && pX < (x + round(xVel)) + 20 - (round(abs(xVel)) + 1) && pY + 20 > y + 20/2 && pY < (y + 20/2) + 20/2) {
                        yVel = 0.1;
                        pY = y + 20;
                    }
                    if (pX + 20 > x && pX < x + 10 && pY + 20 > y + round(yVel) + 1 && pY < y + round(yVel) + 1 + 20 - (round(abs(yVel)) + 1)) {
                        pX = x - 20;
                        xVel = 0;
                    }
                    if (pX + 20 > x + 10 && pX < x + 10 + 10 && pY + 20 > y + round(yVel) + 1 && pY < y + round(yVel) + 1 + 20 - (round(abs(yVel)) + 1)) {
                        pX = x + 20;
                        xVel = 0;
                    }
                }
                for (var l = 0; l < enemies.length; l ++) {
                    if (enemies[l].x > x - 19 && enemies[l].x < x + 19 && enemies[l].y > y - 21 && enemies[l].y < y - 5) {
                    enemies[l].yVel = 0;
                    if (enemies[l].y > y - 20) {
                        enemies[l].y = y - 20;
                        enemies[l].yVel = 0;
                    }
                }
                    if (enemies[l].x > x - 19 && enemies[l].x < x + 19 && enemies[l].y < y + 20 && enemies[l].y > y + 5) {
                    enemies[l].yVel = -enemies[l].yVel/4;
                    enemies[l].y += 2;
                }
                    if (enemies[l].x > x - 20 && enemies[l].x < x - 9 && enemies[l].y > y - 17 && enemies[l].y < y + 17) {
                    enemies[l].dir = 0;
                }
                    if (enemies[l].x < x + 20 && enemies[l].x > x + 9 && enemies[l].y > y - 17 && enemies[l].y < y + 17) {
                    enemies[l].dir = 1;
                }
                }
            break;

            case doorL:
                fill(0, 0, 0);
                rect(j * 20, i * 20, 20, 20);
                x = j * 20;
                y = i * 20;
                if (pX + 20 > x && pX < x + 20 && pY + 20 > y && pY < y + 20) {
                    if (pX + 20 > x + round(xVel) + 1 && pX < x + round(xVel) + 20 - (round(abs(xVel)) + 1) && pY + 20 > y && pY < y + 10) {
                        inWater = false;
                        yVel = 0;
                        pY = y - 20;
                        canJump = true;
                    }
                    if (pX + 20 > (x + round(xVel) + 1) && pX < (x + round(xVel)) + 20 - (round(abs(xVel)) + 1) && pY + 20 > y + 20/2 && pY < (y + 20/2) + 20/2) {
                        yVel = 0.1;
                        pY = y + 20;
                    }
                    if (pX + 20 > x && pX < x + 10 && pY + 20 > y + round(yVel) + 1 && pY < y + round(yVel) + 1 + 20 - (round(abs(yVel)) + 1)) {
                        pX = x - 20;
                        xVel = 0;
                    }
                    if (pX + 20 > x + 10 && pX < x + 10 + 10 && pY + 20 > y + round(yVel) + 1 && pY < y + round(yVel) + 1 + 20 - (round(abs(yVel)) + 1)) {
                        pX = x + 20;
                        xVel = 0;
                    }
                }
            break;

            case fakeL:
                fill(89, 89, 89);
                rect(j * 20, i * 20, 20, 20);
            break;

            case decoRedL:
                fill(255,0,0);
                rect(j * 20, i * 20, 20, 20);
            break;

            case decoBlueL:
                fill(0, 0, 255);
                rect(j * 20, i * 20, 20, 20);
            break;

            case decoGreenL:
                fill(0, 255, 0);
                rect(j * 20, i * 20, 20, 20);
            break;

            case wallL:
                fill(227, 207, 93);
                rect(j * 20, i * 20, 20, 20);
            break;

            case platformL:
                fill(123, 123, 123);
                rect(j * 20, i * 20, 20, 20);
                x = j * 20;
                y = i * 20;
                for (var l = 0; l < enemies.length; l ++) {
                    if (enemies[l].x > x - 19 && enemies[l].x < x + 19 && enemies[l].y > y - 21 && enemies[l].y < y - 5) {
                    enemies[l].yVel = 0;
                    if (enemies[l].y > y - 20) {
                        enemies[l].y = y - 20;
                        enemies[l].yVel = 0;
                    }
                }
                    if (enemies[l].x > x - 19 && enemies[l].x < x + 19 && enemies[l].y < y + 20 && enemies[l].y > y + 5) {
                    enemies[l].yVel = -enemies[l].yVel/4;
                    enemies[l].y += 2;
                }
                    if (enemies[l].x > x - 20 && enemies[l].x < x - 9 && enemies[l].y > y - 17 && enemies[l].y < y + 17) {
                    enemies[l].dir = 0;
                }
                    if (enemies[l].x < x + 20 && enemies[l].x > x + 9 && enemies[l].y > y - 17 && enemies[l].y < y + 17) {
                    enemies[l].dir = 1;
                }
                }
            break;

            case lavaL:
                fill(255, pulse, 0);
                rect(j * 20, i * 20, 20, 20);
                x = j * 20;
                y = i * 20;
                if (pX > x - 20 && pX < x + 20 && pY > y - 20 && pY < y + 20) {
                    initialize = true;
                    win=false;
                    doInit = false;
                }
                for (var l = 0; l < enemies.length; l ++) {
                    if (enemies[l].x > x - 19 && enemies[l].x < x + 19 && enemies[l].y > y - 21 && enemies[l].y < y - 5) {
                    enemies[l].yVel = 0;
                    if (enemies[l].y > y - 20) {
                        enemies[l].y = y - 20;
                        enemies[l].yVel = 0;
                    }
                }
                    if (enemies[l].x > x - 19 && enemies[l].x < x + 19 && enemies[l].y < y + 20 && enemies[l].y > y + 5) {
                    enemies[l].yVel = -enemies[l].yVel/4;
                    enemies[l].y += 2;
                }
                    if (enemies[l].x > x - 20 && enemies[l].x < x - 9 && enemies[l].y > y - 17 && enemies[l].y < y + 17) {
                    enemies[l].dir = 0;
                }
                    if (enemies[l].x < x + 20 && enemies[l].x > x + 9 && enemies[l].y > y - 17 && enemies[l].y < y + 17) {
                    enemies[l].dir = 1;
                }
                }
            break;

            case spikeL:
                fill(92, 92, 92);
                triangle(j * 20 + 10, i * 20, j * 20, i * 20 + 20, j * 20 + 20, i * 20 + 20);
                x = j * 20;
                y = i * 20;
                if (pX > x - 20 && pX < x + 20 && pY > y - 20 && pY < y + 20) {
                    initialize = true;
                    win=false;
                    doInit = false;
                }
                for (var l = 0; l < enemies.length; l ++) {
                    if (enemies[l].x > x - 19 && enemies[l].x < x + 19 && enemies[l].y > y - 21 && enemies[l].y < y - 5) {
                    enemies[l].yVel = 0;
                    if (enemies[l].y > y - 20) {
                        enemies[l].y = y - 20;
                        enemies[l].yVel = 0;
                    }
                }
                    if (enemies[l].x > x - 19 && enemies[l].x < x + 19 && enemies[l].y < y + 20 && enemies[l].y > y + 5) {
                    enemies[l].yVel = -enemies[l].yVel/4;
                    enemies[l].y += 2;
                }
                    if (enemies[l].x > x - 20 && enemies[l].x < x - 9 && enemies[l].y > y - 17 && enemies[l].y < y + 17) {
                    enemies[l].dir = 0;
                }
                    if (enemies[l].x < x + 20 && enemies[l].x > x + 9 && enemies[l].y > y - 17 && enemies[l].y < y + 17) {
                    enemies[l].dir = 1;
                }
                }
            break;

            case waterL:
                fill(0, pulse, 255, 150);
                rect(j * 20, i * 20, 20, 20);
                x = j * 20;
                y = i * 20;
                if (pX > x - 20 && pX < x + 20 && pY > y - 20 && pY < y + 20) {
                    canJump = true;
                    inWater = true;
                    yVel = 0.5;
                }
                for (var l = 0; l < enemies.length; l ++) {
                    if (enemies[l].x > x - 20 && enemies[l].x < x + 20 && enemies[l].y > y - 20 && enemies[l].y < y + 20) {
                    enemies[l].yVel = 0.5;
                    }
                }
            break;

            case jumpL:
                fill(0, 21, 255);
                rect(j * 20, i * 20, 20, 20);
                fill(255, 213, 0);
                rect(j * 20, i * 20, 20, 5);
                rect(j * 20, i * 20+15, 20, 5);
                x = j * 20;
                y = i * 20;
                if (pX > x - 20 && pX < x + 20 && pY > y - 20 && pY < y + 20) {
                    yVel = -bounceHeight;
                    if(sounds.tf){sounds.jump1.play();sounds.tf=false;}
                    pY -= 1;
                }else{
									sounds.tf=true;
								}
                for (var l = 0; l < enemies.length; l ++) {
	                    if (enemies[l].x > x - 20 && enemies[l].x < x + 20 && enemies[l].y > y - 20 && enemies[l].y < y + 20) {
	                    enemies[l].yVel = -enemyBounceHeight;
	                    enemies[l].y -= 1;
	                    if(sounds.tf){sounds.jump1.play();sounds.tf=false;}
	                }else{
										sounds.tf=true;
									}
                }
            break;

            case portalL:
                fill(0, 255, 221);
                rect(j * 20, i * 20, 20, 20);
                x = j * 20;
                y = i * 20;
                if (pX > x - 20 && pX < x + 20 && pY > y - 20 && pY < y + 20) {
                    level ++;
                    win=true;
                    initialize = true;
                    doInit = false;
                }
                for (var l = 0; l < enemies.length; l ++) {
                    if (enemies[l].x > x - 19 && enemies[l].x < x + 19 && enemies[l].y > y - 21 && enemies[l].y < y - 5) {
                    enemies[l].yVel = 0;
                    if (enemies[l].y > y - 20) {
                        enemies[l].y = y - 20;
                        enemies[l].yVel = 0;
                    }
                }
                    if (enemies[l].x > x - 19 && enemies[l].x < x + 19 && enemies[l].y < y + 20 && enemies[l].y > y + 5) {
                    enemies[l].yVel = -enemies[l].yVel/4;
                    enemies[l].y += 2;
                }
                    if (enemies[l].x > x - 20 && enemies[l].x < x - 9 && enemies[l].y > y - 17 && enemies[l].y < y + 17) {
                    enemies[l].dir = 0;
                }
                    if (enemies[l].x < x + 20 && enemies[l].x > x + 9 && enemies[l].y > y - 17 && enemies[l].y < y + 17) {
                    enemies[l].dir = 1;
                }
                }
            break;

            case tp1L:
                fill(255, 200+pulse, pulse);
                rect(j * 20, i * 20, 20, 20);
                x = j * 20;
                y = i * 20;
                if (pX + 20 > x && pX < x + 20 && pY + 20 > y && pY < y + 20) {
                    if (pX + 20 > x + round(xVel) + 1 && pX < x + round(xVel) + 20 - (round(abs(xVel)) + 1) && pY + 20 > y && pY < y + 10) {
                        tp = true;
                    }
                    if (pX + 20 > (x + round(xVel) + 1) && pX < (x + round(xVel)) + 20 - (round(abs(xVel)) + 1) && pY + 20 > y + 20/2 && pY < (y + 20/2) + 20/2) {
                        tp = true;
                    }
                    if (pX + 20 > x && pX < x + 10 && pY + 20 > y + round(yVel) + 1 && pY < y + round(yVel) + 1 + 20 - (round(abs(yVel)) + 1)) {
                       tp = true;
                    }
                    if (pX + 20 > x + 10 && pX < x + 10 + 10 && pY + 20 > y + round(yVel) + 1 && pY < y + round(yVel) + 1 + 20 - (round(abs(yVel)) + 1)) {
                       tp = true;
                    }
                }
                for (var l = 0; l < enemies.length; l ++) {
                    if (enemies[l].x > x - 19 && enemies[l].x < x + 19 && enemies[l].y > y - 21 && enemies[l].y < y - 5) {
                    enemies[l].yVel = 0;
                    if (enemies[l].y > y - 20) {
                        enemies[l].y = y - 20;
                        enemies[l].yVel = 0;
                    }
                }
                    if (enemies[l].x > x - 19 && enemies[l].x < x + 19 && enemies[l].y < y + 20 && enemies[l].y > y + 5) {
                    enemies[l].yVel = -enemies[l].yVel/4;
                    enemies[l].y += 2;
                }
                    if (enemies[l].x > x - 20 && enemies[l].x < x - 9 && enemies[l].y > y - 17 && enemies[l].y < y + 17) {
                    enemies[l].dir = 0;
                }
                    if (enemies[l].x < x + 20 && enemies[l].x > x + 9 && enemies[l].y > y - 17 && enemies[l].y < y + 17) {
                    enemies[l].dir = 1;
                }
                }
            break;

            case tp2L:
                fill(pulse,pulse,255);
                rect(j * 20, i * 20, 20, 20);
                if(tp){
                    pX = j * 20;
                    pY = i * 20;
                    tp=false;
                    sounds.laser4.play();
                }
        }

    }
}
if (initialize) {
    xVel = 0;
    yVel = 0;
}
if (doInit) {
initialize = false;
}
doInit = true;
player();
pY += yVel;
pX += xVel;
if (keys[39] || keys[68]) {
    if (xVel < -3) {
        xVel = -3;
    }
    if (xVel < maxSpeed) {
    xVel += acceleration;
    } else {
        xVel = maxSpeed;
    }

} else if (xVel > deceleration) {
    xVel  -= deceleration;

} else if (keys[37] || keys[65]) {
    if (xVel > 3) {
        xVel = 3;
    }
    if (xVel > -maxSpeed) {
    xVel -= acceleration;
    } else {
        xVel = -maxSpeed;
    }
    if (touchingBlock) {
        pX -= 0.1;
}

} else if (xVel < -deceleration) {
    xVel += deceleration;

} else {
    xVel = 0;
}

if (keys[38] && canJump || keys[87] && canJump) {
    yVel = -jumpHeight;
    canJump = false;
    pY -= gravity;
    if(inWater===false){
    sounds.jump2.play();
    }
}

for (var i = 0; i < enemies.length; i ++) {
    enemies[i].draw();
    if (pX > enemies[i].x - 20 && pX < enemies[i].x + 20 && pY > enemies[i].y - 20 && pY < enemies[i].y + 20) {
        initialize = true;
        win=false;
    }
    if (enemies[i].x < 1) {
        enemies[i].dir = 1;
    }
    if (enemies[i].x > width - 21) {
        enemies[i].dir = 0;
    }
}
if (pY > height-20){pY=height-20;}
if (pX > width-20){pX=width-20;xVel=0;}
if (pX < 0){pX=0;xVel=0;}
if (levelText[level]) {
    fill(0, 0, 0);
    text(levelText[level][0], levelText[level][1], levelText[level][2]);
}
}

};}

//<-- Now thats alot of code!
