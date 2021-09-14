function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

img = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#F132F3");
    text("Dog", 45, 50);
    textSize(15);
    noFill();
    stroke("#F132F3");
    rect(30, 60, 450, 350)
}