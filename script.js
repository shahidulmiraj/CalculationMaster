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

// c to f
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
  }
});

// f to c
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
  }
});

//circle
const circleButton = document.getElementById("circle-button");
const circleErrorMsg = document.getElementById("circle-error-msg");
circleButton.addEventListener("click", () => {
  const circleRadius = document.getElementById("circle-radius").value;
  if (circleRadius) {
    circleErrorMsg.classList.add("hide");
    let circleArea = Math.PI * circleRadius * circleRadius;
    showResult("The area of the circle : " + circleArea);
  } else {
    circleErrorMsg.classList.remove("hide");
  }
});
//Rectangle
const rectangleButton = document.getElementById("rectangle-button");
const rectangleErrorMsg = document.getElementById("rectangle-error-msg");
rectangleButton.addEventListener("click", () => {
  const rectangleLength = document.getElementById("rectangle-length").value;
  const rectangleWidth = document.getElementById("rectangle-width").value;

  if (rectangleLength && rectangleWidth) {
    rectangleErrorMsg.classList.add("hide");
    let rectangleArea = rectangleLength * rectangleWidth;
    showResult("The area of the rectangle : " + rectangleArea);
  } else {
    rectangleErrorMsg.classList.remove("hide");
  }
});

//square
const squareButton = document.getElementById("square-button");
const squareErrorMsg = document.getElementById("square-error-msg");
squareButton.addEventListener("click", () => {
  const squarelength = document.getElementById("square-length").value;
  if (squarelength) {
    squareErrorMsg.classList.add("hide");
    let squareArea = squarelength * squarelength;
    showResult("The area of the square : " + squareArea);
  } else {
    squareErrorMsg.classList.remove("hide");
  }
});
//triangle
const triangleButton = document.getElementById("triangle-button");
const triangleErrorMsg = document.getElementById("triangle-error-msg");
triangleButton.addEventListener("click", () => {
  const triangleBase = document.getElementById("triangle-base").value;
  const triangleHeight = document.getElementById("triangle-height").value;

  if (triangleBase && triangleHeight) {
    triangleErrorMsg.classList.add("hide");
    let triangleArea = (1 / 2) * triangleBase * triangleHeight;
    showResult("The area of the triangle is: " + triangleArea);
  } else {
    triangleErrorMsg.classList.remove("hide");
  }
});
//parallelogram
const parallelogramButton = document.getElementById("parallelogram-button");
const parallelogramErrorMsg = document.getElementById("parallelogram-error-msg");
parallelogramButton.addEventListener("click", () => {
  const parallelogramBase = document.getElementById("parallelogram-base").value;
  const parallelogramHeight = document.getElementById("parallelogram-height").value;

  if (parallelogramBase && parallelogramHeight) {
    parallelogramErrorMsg.classList.add("hide");
    let parallelogramArea = parallelogramBase * parallelogramHeight;
    showResult("The area of the parallelogram is: " + parallelogramArea);
  } else {
    parallelogramErrorMsg.classList.remove("hide");
  }
});
//rhombus
const rhombusButton = document.getElementById("rhombus-button");
const rhombusErrorMsg = document.getElementById("rhombus-error-msg");
rhombusButton.addEventListener("click", () => {
  const rhombusDiagonal1 = document.getElementById("rhombus-diagonal1").value;
  const rhombusDiagonal2 = document.getElementById("rhombus-diagonal2").value;

  if (rhombusDiagonal1 && rhombusDiagonal2) {
    rhombusErrorMsg.classList.add("hide");
    let rhombusArea = (1 / 2) * rhombusDiagonal1 * rhombusDiagonal2;
    showResult("The area of the rhombus is: " + rhombusArea);
  } else {
    rhombusErrorMsg.classList.remove("hide");
  }
});

//trapezoid
const trapezoidButton = document.getElementById("trapezoid-button");
const trapezoidErrorMsg = document.getElementById("trapezoid-error-msg");
trapezoidButton.addEventListener("click", () => {
  const trapezoidLength = document.getElementById("trapezoid-length").value;
  const trapezoidWidth = document.getElementById("trapezoid-width").value;
  const trapezoidHeight = document.getElementById("trapezoid-height").value;

  if (trapezoidLength && trapezoidWidth && trapezoidHeight) {
    trapezoidErrorMsg.classList.add("hide");
    console.log(trapezoidHeight);
    console.log(trapezoidLength);
    console.log(trapezoidWidth);
    let trapezoidArea = (1 / 2) * (parseFloat(trapezoidLength) + parseFloat(trapezoidWidth)) * trapezoidHeight;
    showResult("The area of the trapezoid : " + trapezoidArea);
  } else {
    trapezoidErrorMsg.classList.remove("hide");
  }
});

//ellipse
const ellipseButton = document.getElementById("ellipse-button");
const ellipseErrorMsg = document.getElementById("ellipse-error-msg");
ellipseButton.addEventListener("click", () => {
  const ellipseMajor = document.getElementById("ellipse-major").value;
  const ellipseMinor = document.getElementById("ellipse-minor").value;

  if (ellipseMajor && ellipseMinor) {
    ellipseErrorMsg.classList.add("hide");
    let ellipseArea = Math.PI * ellipseMajor * ellipseMinor;
    showResult("The area of the ellipse : " + ellipseArea);
  } else {
    ellipseErrorMsg.classList.remove("hide");
  }
});

//cube
const cubeButton = document.getElementById("cube-button");
const cubeErrorMsg = document.getElementById("cube-error-msg");
cubeButton.addEventListener("click", () => {
  const cubeLength = document.getElementById("cube-length").value;
  if (cubeLength) {
    cubeErrorMsg.classList.add("hide");
    let cubeArea = 6 * cubeLength * cubeLength;
    showResult("The area of the cube : " + cubeArea);
  } else {
    cubeErrorMsg.classList.remove("hide");
  }
});
