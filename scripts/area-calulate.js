// get triangle base value

function calculateFunctionArea() {
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  baseField.value = "";
  

  //get triangle height value

  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);
  heightField.value = "";

  // Triangle: Validate input and length (aikhane moloto amra dekhaichi jeh jodi number nah dei tahole please insert a number dekhaibe)

  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a number");
    return;
  }

  const area = 0.5 * base * height;
  console.log(area);

  document.getElementById("area").innerText = area;

   // add to calculation
   calculationEntry("Triangle: ", area);
}

// get rectangle with
function calculateRectangle() {
  const widthField = document.getElementById("rectangle-with");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  widthField.value = "";

  //get triangle height value

  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  lengthField.value = "";

  // Rectangle: Validate input and length (aikhane moloto amra dekhaichi jeh jodi number nah dei tahole please insert a number dekhaibe)

  if (isNaN(width) || isNaN(length)) {
    alert("Please insert a number");
    return;
  }
  //calculate area
  const area = width * length;
  // show rectangle area
  document.getElementById("rectangle-area").innerText = area;

  // add to calculation
  calculationEntry("Rectangle: ", area);
}

// reusable function---> reduce duplicate code

// Parallelogram area
function calculateParallelogram() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");

  // validate
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a number");
    return;
  }

  const area = base * height;

  setElementInnerText("parallelogram-area", area);

  // add to calculation
  calculationEntry("parallelogram: ", area);
}

// Rhombus Area

function calculateRhombusArea() {
  const rhombusD1 = getInputValue("rhombus-base");
  const rhombusD2 = getInputValue("rhombus-height");

  // validate
  if (isNaN(rhombusD1) || isNaN(rhombusD2)) {
    alert("Please insert a number");
    return;
  }

  const area = 0.5 * rhombusD1 * rhombusD2;
  setElementInnerText("rhombus-area", area);

   // add to calculation
   calculationEntry("Rhombus: ", area);

}

// Pentagon Area

function calculatePentagonArea() {
  const pentagonP = getInputValue("pentagon-p");
  const pentagonBase = getInputValue("pentagon-base");

  // validate
  if (isNaN(pentagonP) || isNaN(pentagonBase)) {
    alert("Please insert a number");
    return;
  }

  const area = 0.5 * pentagonP * pentagonBase;
  setElementInnerText("pentagon-area", area);

   // add to calculation
   calculationEntry("Pentagon: ", area);
}

//Ellipse
function calculateEllipseArea() {
  const ellipseA = getInputValue("ellipse-a");
  const ellipseBase = getInputValue("ellipse-base");

  // validate
  if (isNaN(ellipseA) || isNaN(ellipseBase)) {
    alert("Please insert a number");
    return;
  }

  const area = 3.14 * ellipseA * ellipseBase;
  const areaTwoDecimal = area.toFixed(2);
  setElementInnerText("ellipse-area", areaTwoDecimal);

   // add to calculation
   calculationEntry("Ellipse: ", areaTwoDecimal);
}

//reusable get input value filed in number function

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  inputField.value = "";
  return value;
}

//reusable set  span, p, div, etc text
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

//add to calculation entry
/*
1. get the element where you want to add the dynamic HTML
2.create and element you want to add
3.if needed add some class
4.set inner HTML. it could be dynamic Template string
5.append the created element as a child of the parent
*/

function calculationEntry(areaType, area) {
  console.log("adding song");
  const calculationEntry = document.getElementById("calculation-entry");

  const count=calculationEntry.childElementCount

  // akta p tag add korte pari
  const p = document.createElement("p");
  p.classList.add('my-4')
  p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup>`

  // kono likha akjaigate add kora jonno .appendChild korte hobe.
  calculationEntry.appendChild(p);
}

//data validation
/*
1.set the proper type of the input field. (number,data,email)
2.check type using typeof
3.NaN means: Not a number. isNaN is checking whether the input is not a number or not
*/
