function calculateFunctionArea() {
  // get triangle base value
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  console.log(base);

  //get triangle height value

  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);
  console.log(height);

  const area = 0.5 * base * height;
  console.log(area);

  document.getElementById("area").innerText = area;
}

function calculateRectangle() {
  // get rectangle with
  const widthField = document.getElementById("rectangle-with");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  console.log(width);

  //get triangle height value

  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  console.log(length);

  //calculate area
  const area = width * length;
  console.log(area);

  // show rectangle area
  document.getElementById("rectangle-area").innerText = area;
}

// reusable function---> reduce duplicate code
function calculateParallelogram() {
  const base = getInputValue("parallelogram-base");

  const height = getInputValue("parallelogram-height");

  const area = base * height;

  setElementInnerText("parallelogram-area", area);
}

// Rhombus Area

function calculateRhombusArea() {
  const rhombusD1 = getInputValue("rhombus-base");
  const rhombusD2 = getInputValue("rhombus-height");

  const area = 0.5 * rhombusD1 * rhombusD2;

  setElementInnerText("rhombus-area", area);
}

// Pentagon Area

function calculatePentagonArea() {
  const pentagonP = getInputValue("pentagon-p");
  const pentagonBase = getInputValue("pentagon-base");

  const area = 0.5 * pentagonP * pentagonBase;
  setElementInnerText("pentagon-area", area);
}

//Ellipse
function calculateEllipseArea() {
  const ellipseA = getInputValue("ellipse-a");
  const ellipseBase = getInputValue("ellipse-base");
  const area = 3.1416 * ellipseA * ellipseBase;

  setElementInnerText("ellipse-area", area);
}

//reusable get input value filed in number function

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

//reusable set  span, p, div, etc text
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
