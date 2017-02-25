// ***** Global variables ***** //
var refugeeTable;
var maxLength = 750;
var maxValue = 0;

// ***** Preload function ***** //
function preload(){
  refugeeTable = loadTable('../data/RefugeesUNHCR.csv', 'csv', 'header');
}


// ***** Setup function ***** //
function setup(){
  createCanvas(900, 3000);
  textAlign(LEFT, TOP);
  textSize(12);
  for (var i = 0; i < refugeeTable.getRowCount(); i++){
  	maxValue = max(maxValue, refugeeTable.getNum(i, 'Total'));
  }
  print(maxValue);
}

// ***** Draw function ***** //
function draw(){
  background(255);
  for (var i = 0; i < refugeeTable.getRowCount(); i++) {
  	var rectLength = map(refugeeTable.getNum(i, 'Total'), 0, maxValue, 0, maxLength);
  	rect(100, 50 + 20 * i, rectLength, 15);
  }
}