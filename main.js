canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d"); //Create a reference for canvas

greencar_width = 75;
greencar_height = 100;
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225; //Set initial position for a car image.

function add() {
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;

  greencar_imgTag = new Image();
  greencar_imgTag.onload = uploadgreencar;
  greencar_imgTag.src = greencar_image; //upload car, and background images on the canvas.
}

function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); //Define function ‘uploadBackground’
}

function uploadgreencar() {
  ctx.drawImage(
    greencar_imgTag,
    greencar_width,
    greencar_height,
    canvas.width,
    canvas.height
  ); //Define function ‘uploadgreencar’.
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (keyPressed == "38") {
    up();
    console.log("up");
  }

  if (keyPressed == "40") {
    down();
    console.log("down");
  }

  if (keyPressed == "37") {
    left();
    console.log("left");
  }

  if (keyPressed == "39") {
    right();
    console.log("right");
  }
}

function up() {
  if (greencar_y >= 0) {
    greencar_y = greencar_y - 10;
    console.log(
      "WHEN UP ARROW IS PRESSED, GREENCAR'S X IS" +
        greencar_x +
        "GREENCAR'S Y IS" +
        greencar_y
    );
    uploadBackground();
    uploadgreencar();
  } //Define function to move the car upward
}

function down() {
  if (greencar_y <= 500) {
    greencar_y = greencar_y + 10;
    console.log(
      "WHEN DOWN ARROW IS PRESSED, GREENCAR'S X IS" +
        greencar_x +
        "GREENCAR'S Y IS" +
        greencar_y
    );
    uploadBackground();
    uploadgreencar();
  } //Define function to move the car downward
}

function left() {
  if (greencar_x >= 0) {
    greencar_x = greencar_x - 10;
    console.log(
      "WHEN LEFT ARROW IS PRESSED, GREENCAR'S X IS" +
        greencar_x +
        "GREENCAR'S Y IS" +
        greencar_y
    );
    uploadBackground();
    uploadgreencar();
  } //Define function to move the car left side
}

function right() {
  if (greencar_x <= 700) {
    greencar_x = greencar_x = 10;
    console.log(
      "WHEN RIGHT ARROW IS PRESSED, GREENCAR'S x IS" +
        greencar_x +
        "GREENCAR'S Y IS" +
        greencar_y
    );
    uploadBackground();
    uploadgreencar();
  }
  //Define function to move the car right side
}
