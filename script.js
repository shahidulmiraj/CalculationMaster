const result = document.getElementById("result");
const showResult = (res) => {
  result.innerText = res;
};

// calculator
const calculatorButtton = document.getElementById("calculator-button");
calculatorButtton.addEventListener("click", () => {
  const firstNum = document.getElementById("num-1").value;
  const secondNum = document.getElementById("num-2").value;
  const operator = document.getElementById("operator").value;
  const calculatorErrorMsg = document.getElementById("calculator-error-msg");

  if (firstNum === "" || secondNum === "") {
    calculatorErrorMsg.innerText = `Number should not be empty...`;
    calculatorErrorMsg.classList.remove("hide");
  } else {
    calculatorErrorMsg.classList.add("hide");
    const num1 = parseFloat(firstNum),
      num2 = parseFloat(secondNum);
    let ans = 0;
    if (operator === "1") {
      ans = num1 + num2;
      showResult("The addition of " + num1 + " and " + num2 + " is: " + ans);
    } else if (operator === "2") {
      ans = num1 - num2;
      showResult("The subtraction of " + num1 + " and " + num2 + " is: " + ans);
    } else if (operator === "3") {
      ans = num1 * num2;
      showResult(
        "The multiplicatin of " + num1 + " and " + num2 + " is: " + ans
      );
    } else if (operator === "4") {
      if (num2 === 0) {
        calculatorErrorMsg.innerText = `Number can't divide by 0`;
        calculatorErrorMsg.classList.remove("hide");
      } else {
        ans = num1 / num2;
        showResult("The division of " + num1 + " and " + num2 + " is: " + ans);
      }
    } else if (operator === "5") {
      ans = (num1 * num2) / 100;
      showResult("The interest of " + num1 + " and " + num2 + " is: " + ans);
    } else if (operator === "6") {
      if (num2 === 0) {
        calculatorErrorMsg.innerText = `Number can't divide by 0`;
        calculatorErrorMsg.classList.remove("hide");
      } else {
        ans = num1 % num2;
        showResult("The remainder of " + num1 + " and " + num2 + " is: " + ans);
      }
    }
  }
});

// c to f //done
const ctofButton = document.getElementById("ctof-button");
const celciusErrorMsg = document.getElementById("celsius-error-msg");
ctofButton.addEventListener("click", () => {
  const celsiusTemp = document.getElementById("celsius-temp");
  if (celsiusTemp.value === "") {
    celciusErrorMsg.classList.remove("hide");
  } else {
    let fahrenheitTemp = parseFloat(celsiusTemp.value) * (9 / 5) + 32;
    celciusErrorMsg.classList.add("hide");
    showResult("The fahrenheit temparature is : " + fahrenheitTemp);
    celsiusTemp.value = "";
  }
});

// f to c //done
const ftocButton = document.getElementById("ftoc-button");
const fahrenheitErrorMsg = document.getElementById("fahrenheit-error-msg");
ftocButton.addEventListener("click", () => {
  const fahrenheitTemp = document.getElementById("fahrenheit-temp");
  if (fahrenheitTemp.value === "") {
    fahrenheitErrorMsg.classList.remove("hide");
  } else {
    let celsiusTemp = ((parseFloat(fahrenheitTemp.value) - 32) * 5) / 9;
    fahrenheitErrorMsg.classList.add("hide");
    showResult("The celsius temparature is : " + celsiusTemp);
    fahrenheitTemp.value = "";
  }
});

//circle //done
const circleButton = document.getElementById("circle-button");
const circleErrorMsg = document.getElementById("circle-error-msg");
circleButton.addEventListener("click", () => {
  const circleRadius = document.getElementById("circle-radius");
  if (circleRadius.value == "") {
    circleErrorMsg.innerText = "Radius value should not be empty..";
    circleErrorMsg.classList.remove("hide");
  } else if (circleRadius.value < 0) {
    circleErrorMsg.innerText = "Length can't be negative value";
    circleErrorMsg.classList.remove("hide");
  } else {
    circleErrorMsg.classList.add("hide");
    let circleArea = Math.PI * circleRadius.value * circleRadius.value;
    showResult("The area of the circle : " + circleArea);
    circleRadius.value = "";
  }
});
//Rectangle //done
const rectangleButton = document.getElementById("rectangle-button");
const rectangleErrorMsg = document.getElementById("rectangle-error-msg");

rectangleButton.addEventListener("click", () => {
  const rectangleLength = document.getElementById("rectangle-length");
  const rectangleWidth = document.getElementById("rectangle-width");

  if (rectangleLength.value < 0 || rectangleWidth.value < 0) {
    rectangleErrorMsg.innerText = `Rectangle length or width can't be negative`;
    rectangleErrorMsg.classList.remove("hide");
  } else if (rectangleLength.value && rectangleWidth.value) {
    rectangleErrorMsg.classList.add("hide");
    let rectangleArea = rectangleLength.value * rectangleWidth.value;
    showResult("The area of the rectangle : " + rectangleArea);
    rectangleLength.value = "";
    rectangleWidth.value = "";
  } else {
    rectangleErrorMsg.innerText = `Rectangle length and width should not be empty...`;
    rectangleErrorMsg.classList.remove("hide");
  }
});

//square // done
const squareButton = document.getElementById("square-button");
const squareErrorMsg = document.getElementById("square-error-msg");
squareButton.addEventListener("click", () => {
  const squarelength = document.getElementById("square-length");
  if (squarelength.value < 0) {
    squareErrorMsg.innerText = `Square length can't be negative`;
    squareErrorMsg.classList.remove("hide");
  } else if (squarelength.value) {
    squareErrorMsg.classList.add("hide");
    let squareArea = squarelength.value * squarelength.value;
    showResult("The area of the square : " + squareArea);
    squarelength.value = "";
  } else {
    squareErrorMsg.innerText = `Length value should not be empty...`;
    squareErrorMsg.classList.remove("hide");
  }
});

//triangle //done
const triangleButton = document.getElementById("triangle-button");
const triangleErrorMsg = document.getElementById("triangle-error-msg");
triangleButton.addEventListener("click", () => {
  const triangleBase = document.getElementById("triangle-base");
  const triangleHeight = document.getElementById("triangle-height");
  if (triangleBase.value < 0 || triangleHeight.value < 0) {
    triangleErrorMsg.innerText = `Triangle base or height can't be negative`;
    triangleErrorMsg.classList.remove("hide");
  } else if (triangleBase.value && triangleHeight.value) {
    triangleErrorMsg.classList.add("hide");
    let triangleArea = (1 / 2) * triangleBase.value * triangleHeight.value;
    showResult("The area of the triangle is: " + triangleArea);
    triangleBase.value = "";
    triangleHeight.value = "";
  } else {
    triangleErrorMsg.innerText = `Triangle base and height should not be empty...`;
    triangleErrorMsg.classList.remove("hide");
  }
});

//parallelogram //done
const parallelogramButton = document.getElementById("parallelogram-button");
const parallelogramErrorMsg = document.getElementById(
  "parallelogram-error-msg"
);

parallelogramButton.addEventListener("click", () => {
  const parallelogramBase = document.getElementById("parallelogram-base");
  const parallelogramHeight = document.getElementById("parallelogram-height");
  if (parallelogramBase.value < 0 || parallelogramHeight.value < 0) {
    parallelogramErrorMsg.innerText = `Parallelogram base or height can't be negative`;
    parallelogramErrorMsg.classList.remove("hide");
  } else if (parallelogramBase.value && parallelogramHeight.value) {
    parallelogramErrorMsg.classList.add("hide");
    let parallelogramArea = parallelogramBase.value * parallelogramHeight.value;
    showResult("The area of the parallelogram is: " + parallelogramArea);
    parallelogramBase.value = "";
    parallelogramHeight.value = "";
  } else {
    parallelogramErrorMsg.innerText = ` Parallelogram base and height should not be empty...`;
    parallelogramErrorMsg.classList.remove("hide");
  }
});
//rhombus //done
const rhombusButton = document.getElementById("rhombus-button");
const rhombusErrorMsg = document.getElementById("rhombus-error-msg");
rhombusButton.addEventListener("click", () => {
  const rhombusDiagonal1 = document.getElementById("rhombus-diagonal1");
  const rhombusDiagonal2 = document.getElementById("rhombus-diagonal2");

  if (rhombusDiagonal1.value < 0 || rhombusDiagonal2.value < 0) {
    rhombusErrorMsg.innerText = `Rhombus diagonal value can't be negative...`;
    rhombusErrorMsg.classList.remove("hide");
  } else if (rhombusDiagonal1.value && rhombusDiagonal2.value) {
    rhombusErrorMsg.classList.add("hide");
    let rhombusArea = (1 / 2) * rhombusDiagonal1.value * rhombusDiagonal2.value;
    showResult("The area of the rhombus is: " + rhombusArea);
    rhombusDiagonal1.value = "";
    rhombusDiagonal2.value = "";
  } else {
    rhombusErrorMsg.innerText = `Rhombus diagonal value should not be empty...`;
    rhombusErrorMsg.classList.remove("hide");
  }
});

//trapezoid //done
const trapezoidButton = document.getElementById("trapezoid-button");
const trapezoidErrorMsg = document.getElementById("trapezoid-error-msg");
trapezoidButton.addEventListener("click", () => {
  const trapezoidLength = document.getElementById("trapezoid-length");
  const trapezoidWidth = document.getElementById("trapezoid-width");
  const trapezoidHeight = document.getElementById("trapezoid-height");
  if (
    trapezoidLength.value < 0 ||
    trapezoidWidth.value < 0 ||
    trapezoidHeight.value < 0
  ) {
    trapezoidErrorMsg.innerText = `Trapezoid length, width or height can't be negative...`;
    trapezoidErrorMsg.classList.remove("hide");
  } else if (
    trapezoidLength.value &&
    trapezoidWidth.value &&
    trapezoidHeight.value
  ) {
    trapezoidErrorMsg.classList.add("hide");
    let trapezoidArea =
      (1 / 2) *
      (parseFloat(trapezoidLength.value) + parseFloat(trapezoidWidth.value)) *
      trapezoidHeight.value;
    showResult("The area of the trapezoid is: " + trapezoidArea);
    trapezoidLength.value = "";
    trapezoidHeight.value = "";
    trapezoidWidth.value = "";
  } else {
    trapezoidErrorMsg.innerText = `Trapezoid length, width or height should not be empty...`;
    trapezoidErrorMsg.classList.remove("hide");
  }
});

//ellipse //done
const ellipseButton = document.getElementById("ellipse-button");
const ellipseErrorMsg = document.getElementById("ellipse-error-msg");
ellipseButton.addEventListener("click", () => {
  const ellipseMajor = document.getElementById("ellipse-major");
  const ellipseMinor = document.getElementById("ellipse-minor");

  if (ellipseMajor.value < 0 || ellipseMinor.value < 0) {
    ellipseErrorMsg.classList.remove("hide");
    ellipseErrorMsg.innerText = `Ellipse axis length can't be negative...`;
  } else if (ellipseMajor.value && ellipseMinor.value) {
    ellipseErrorMsg.classList.add("hide");
    let ellipseArea = Math.PI * ellipseMajor.value * ellipseMinor.value;
    showResult("The area of the ellipse : " + ellipseArea);
    ellipseMajor.value = "";
    ellipseMinor.value = "";
  } else {
    ellipseErrorMsg.classList.remove("hide");
    ellipseErrorMsg.innerText = `Ellipse axis length should not be empty...`;
  }
});

//cube
const cubeButton = document.getElementById("cube-button");
const cubeErrorMsg = document.getElementById("cube-error-msg");
cubeButton.addEventListener("click", () => {
  const cubeLength = document.getElementById("cube-length");

  if (cubeLength.value < 0) {
    cubeErrorMsg.innerText = `Cube lenght can't be negative...`;
    cubeErrorMsg.classList.remove("hide");
  } else if (cubeLength.value) {
    cubeErrorMsg.classList.add("hide");
    let cubeArea = 6 * cubeLength.value * cubeLength.value;
    showResult("The area of the cube : " + cubeArea);
    cubeLength.value = "";
  } else {
    cubeErrorMsg.innerText = `Cube length should not be empty...`;
    cubeErrorMsg.classList.remove("hide");
  }
});
