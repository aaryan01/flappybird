let flapPower = -5;
let gravity = 0.25;
let obstacleSpeed = -10;
let birdSize = 50;
let bird = null;
let gameOver = null;

function setup () {
    createCanvas(800, 600);
    background(color(135,206,250));
    bird = new Bird();
    gameOver = false;
    
}

function draw () {
    if (!gameOver) {
        background(color(135,206,250));
        bird.update();
        bird.show();
    }
    else {
        if (keyIsPressed) {
            setup();
        }
    }
}

function keyPressed() {
    switch(keyCode) {
        case 32:
            bird.flap();
            break;
    }
    return false;
}

class Bird {
    constructor() {
        this.x = 100;
        this.y = 300;
        this.xVelocity = 0;
        this.yVelocity = 0;
    }
    flap() {
        this.yVelocity = flapPower;
    }
    show() {
        ellipse(this.x, this.y, birdSize, birdSize);
    }
    update() {
        this.y += this.yVelocity;
        this.yVelocity += gravity;
        if (height <= ( this.y+ (birdSize/2) ) ) gameOver = true;
    }
}