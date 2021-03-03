canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa = ["nasa.jpeg", "nasa1.jpg", "nasa2.jpg", "nasa3.jpg", "mars.jpg"];

var random_number = Math.floor(Math.random() * 5);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = nasa[random_number];
console.log("Background = " + background_image)
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38') {
        Up();
        console.log("up")
    }

    if(keyPressed == '40') {
        Down();
        console.log("down")
    }

    if(keyPressed == '37') {
        Left();
        console.log("left")
    }

    if(keyPressed == '39') {
        Right();
        console.log("right")
    }
}

function Up() {
    if(rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When UP arrow pressed x = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function Right() {
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When Right arrow pressed x = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function Left() {
    if(rover_x >= 0) {
        rover_x = rover_x- 10;
        console.log("When Left arrow pressed x = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function Down() {
    if(rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When UP arrow pressed x = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}