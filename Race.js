function setup() {
 createCanvas(windowWidth-20, windowHeight-20);
}
scale(width/600, height/600);
rectMode(CENTER);
var keys = [];

function keyPressed() {
    keys[keyCode] = true;
}

function keyReleased() {
    keys[keyCode] = false;
}

var player = {
    x: 200,
    y: 200,
    s: 0,
    rot: -90,
    acc: 0.1,
};

draw = function() {
    background(35, 128, 14);

    if(keys[LEFT]) {
        if(player.s > -2) {
            player.rot --;
        }
    }
    if(keys[RIGHT]) {
        if(player.s > -2) {
            player.rot ++;
        }
    }
    if(keys[UP]) {
        if(player.s <= 3) {
            player.s += player.acc;
        }
    }
    if(keys[DOWN]) {
        if(player.s > -1) {
            player.s -= player.acc;
        }
    }
    if(!keys[UP] && !keys[DOWN]) {
        if(player.s >= 0) {
            player.s -= 0.02;
        }
    }
    if(player.s < 0) {
        player.s = 0;
    }
    player.x += cos(player.rot) * player.s;
    player.y += sin(player.rot) * player.s;

    player.x = constrain(player.x, 0, width);
    player.y = constrain(player.y, 0, height);

    fill(0, 0, 0);
    push();
    translate(player.x, player.y);
    rotate(player.rot);
    stroke(0);
    rect(0, 0, 34, -20);

    noStroke();
    fill(keys[LEFT] ? 255:200, keys[LEFT] && !keys[RIGHT] ? 255:200, 0);
    rect(18, -5, 4, 6);
    fill(keys[RIGHT] ? 255:200, keys[RIGHT] && !keys[LEFT] ? 255:200, 0);
    rect(18, 5, 4, 6);//The headlights

    fill(keys[DOWN] || keys[LEFT] && !keys[RIGHT] ? 255: 100, 0, 0);
    stroke(0);
    rect(-18, -5, 4, 6);
    fill(keys[DOWN] || keys[RIGHT] && !keys[LEFT] ? 255: 100, 0, 0);
    rect(-18, 5, 4, 6);//The taillights

    fill(77, 77, 77);
    arc(-10, 10, 10, 5, 1, 180);
    arc(-10, -10, 10, 5, 180, 360);
    arc(10, -10, 10, 5, 180, 360);
    arc(10, 10, 10, 5, 1, 180);
    pop();
};
