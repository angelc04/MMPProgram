//The setup function only happens once
var salut=0;

function setup() {
	createCanvas(500, 500);
  getElementById("myCanvas")
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
}

function changeBackground() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    // Change background color
    var randomColor = getRandomColor();
    canvas.style.backgroundColor = randomColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}