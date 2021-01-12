var player;


function setup() {
    //this function works once
    createCanvas(400,400);
    player = createSprite(200,200,10,10);
}

function draw() {
    //this runs again and again
    drawSprites();
}



