function setup() {
 createCanvas(windowWidth-20, windowHeight-20);
}
var px=200;
var py=200;
var keys=[];

//Player    {
noStroke();

//keys
var keyPressed = function(){
    keys[keyCode] = true;
};
var keyReleased = function(){
    keys[keyCode] = false;
};
//player
var player = function(){
    fill(234, 0, 255);
    rect(px,py,Size,Size,5);
    if(keys[RIGHT]){
        px+=4.5;
        if(px>380){
         px=380;   
        }
    }
    if(keys[LEFT]){
        px-=4.5;
        if(px<0){
         px=0;   
        }
    }
    if(keys[UP]&& jump === true && vel > 3){
        vel=-7;
        jump = false;
        
    }
    py+=vel;
    if(jump === false&& vel < 3){
        vel+=0.1;
    }
    vel+= 0.1;
    if(py>380){
        py=380;
        jump=true;
    }
    if(py<0){
        py=0;
        vel=0;
    }
    if(vel>4){vel=4;}
    



};

//}


function draw() {
 bacground(255);
 
}
