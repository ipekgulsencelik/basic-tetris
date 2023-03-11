let canvas;
let ctx;
let gBArrayHeight = 20; // Number of cells in array height
let gBArrayWidth = 12; // Number of cells in array width
let startX = 4; // Starting X position for Tetromino
let startY = 0; // Starting Y position for Tetromino
let score = 0; // Tracks the score
let level = 1; // Tracks current level
let winOrLose = "Playing";
// Used as a look up table where each value in the array
// contains the x & y position we can use to draw the
// box on the canvas
let coordinateArray = [...Array(gBArrayHeight)].map((e) =>
  Array(gBArrayWidth).fill(0)
);
