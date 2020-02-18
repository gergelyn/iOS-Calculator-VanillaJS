let input = document.getElementById("input");

let divide = document.getElementById("divide");

let multiple = document.getElementById("multiple");

let subtract = document.getElementById("subtract");

let add = document.getElementById("add");

let result = document.getElementById("result");

let ac = document.getElementById("clear");

let posneg = document.getElementById("posneg");

let percentage = document.getElementById("percentage");

let zero = document.getElementById("0");

let one = document.getElementById("1");

let two = document.getElementById("2");

let three = document.getElementById("3");

let four = document.getElementById("4");

let five = document.getElementById("5");

let six = document.getElementById("6");

let seven = document.getElementById("7");

let eight = document.getElementById("8");

let nine = document.getElementById("9");

let comma = document.getElementById("comma");

let finalNumber = 0;

let digits = [];
let number = 0;

let secondDigits = [];
let secondNumber = 0;

zero.addEventListener("click", function() {
  if (
    add.classList.contains("operation") ||
    multiple.classList.contains("operation") ||
    divide.classList.contains("operation") ||
    subtract.classList.contains("operation")
  ) {
    if (secondNumber.length == 0) {
      input.innerHTML = secondNumber;
    } else {
      numClicked(0);
    }
  } else {
    if (number.length == 0) {
      input.innerHTML = number;
    } else {
      numClicked(0);
    }
  }
});

one.addEventListener("click", function() {
  numClicked(1);
});

two.addEventListener("click", function() {
  numClicked(2);
});

three.addEventListener("click", function() {
  numClicked(3);
});

four.addEventListener("click", function() {
  numClicked(4);
});

five.addEventListener("click", function() {
  numClicked(5);
});

six.addEventListener("click", function() {
  numClicked(6);
});

seven.addEventListener("click", function() {
  numClicked(7);
});

eight.addEventListener("click", function() {
  numClicked(8);
});

nine.addEventListener("click", function() {
  numClicked(9);
});

function numClicked(num) {
  if (
    add.classList.contains("operation") ||
    multiple.classList.contains("operation") ||
    divide.classList.contains("operation") ||
    subtract.classList.contains("operation")
  ) {
    removeActive();
    if (secondDigits.includes(".")) {
      secondDigits.push(num);
      secondNumber = secondDigits.join("");
      input.innerHTML = secondNumber;
      ac.innerHTML = "C";
      secondNumber = parseFloat(secondNumber);
      console.log("secondNumber = " + secondNumber);
    } else {
      secondDigits.push(num);
      secondNumber = secondDigits.join("");
      ac.innerHTML = "C";
      input.innerHTML = secondNumber;
      secondNumber = parseInt(secondNumber);
      console.log("secondNumber = " + secondNumber);
    }
  } else {
    if (digits.includes(".")) {
      digits.push(num);
      number = digits.join("");
      input.innerHTML = number;
      ac.innerHTML = "C";
      number = parseFloat(number);
      console.log("number = " + number);
    } else {
      digits.push(num);
      number = digits.join("");
      ac.innerHTML = "C";
      input.innerHTML = number;
      number = parseInt(number);
      console.log("number = " + number);
    }
  }
}

function clearVars() {
  digits.length = 0;
  number = 0;
  secondDigits.length = 0;
  secondNumber = 0;
  finalNumber = 0;
  input.innerHTML = number;
  ac.innerHTML = "AC";
  console.log("number = " + number);
  console.log("secondNumber = " + secondNumber);
  console.log("finalNumber = " + finalNumber);
}

ac.addEventListener("click", function() {
  removeOperation();
  removeActive();
  clearVars();
});

function removeActive() {
  add.classList.remove("active"); // Remove .active styling attribute
  multiple.classList.remove("active"); // Remove .active styling attribute
  divide.classList.remove("active"); // Remove .active styling attribute
  subtract.classList.remove("active"); // Remove .active styling
}

function removeOperation() {
  add.classList.remove("operation"); // Remove .operation functionate attribute
  multiple.classList.remove("operation"); // Remove .operation functionate attribute
  divide.classList.remove("operation"); // Remove .operation functionate attribute
  subtract.classList.remove("operation"); // Remove .operation functionate attribute
}

result.addEventListener("click", function() {
  if (secondDigits.length == 0) {
    input.innerHTML = number;
    console.log(number);
  } else if (add.classList.contains("operation")) {
    removeOperation();
    addFunction();
    number = finalNumber;
    input.innerHTML = finalNumber;
    secondDigits.length = 0;
    secondNumber = 0;
    console.log("number = " + number);
    console.log("secondNumber = " + secondNumber);
    console.log("finalNumber = " + finalNumber);
  } else if (multiple.classList.contains("operation")) {
    removeOperation();
    multipleFunction();
    number = finalNumber;
    input.innerHTML = finalNumber;
    secondDigits.length = 0;
    secondNumber = 0;
    console.log("number = " + number);
    console.log("secondNumber = " + secondNumber);
    console.log("finalNumber = " + finalNumber);
  } else if (divide.classList.contains("operation")) {
    removeOperation();
    divideFunction();
    number = finalNumber;
    input.innerHTML = finalNumber;
    secondDigits.length = 0;
    secondNumber = 0;
    console.log("number = " + number);
    console.log("secondNumber = " + secondNumber);
    console.log("finalNumber = " + finalNumber);
  } else if (subtract.classList.contains("operation")) {
    removeOperation();
    subtractFunction();
    number = finalNumber;
    input.innerHTML = finalNumber;
    secondDigits.length = 0;
    secondNumber = 0;
    console.log("number = " + number);
    console.log("secondNumber = " + secondNumber);
    console.log("finalNumber = " + finalNumber);
  } else {
    input.innerHTML = "Error";
  }
});

add.addEventListener("click", function() {
  removeActive();
  removeOperation();
  add.classList.add("active");
  add.classList.add("operation");
  if (secondNumber != 0) {
    addFunction();
    number = finalNumber;
    console.log("number = " + number);
    console.log("secondNumber = " + secondNumber);
    console.log("finalNumber = " + finalNumber);
    secondDigits.length = 0;
    secondNumber = 0;
  }
});

function addFunction() {
  finalNumber = number + secondNumber;
  input.innerHTML = finalNumber;
}

multiple.addEventListener("click", function() {
  removeActive();
  removeOperation();
  multiple.classList.add("active");
  multiple.classList.add("operation");
  if (secondNumber != 0) {
    multipleFunction();
    number = finalNumber;
    console.log("number = " + number);
    console.log("secondNumber = " + secondNumber);
    console.log("finalNumber = " + finalNumber);
    secondDigits.length = 0;
    secondNumber = 0;
  }
});

function multipleFunction() {
  finalNumber = number * secondNumber;
  input.innerHTML = finalNumber;
}

divide.addEventListener("click", function() {
  removeActive();
  removeOperation();
  divide.classList.add("active");
  divide.classList.add("operation");
  if (secondNumber != 0) {
    divideFunction();
    number = finalNumber;
    console.log("number = " + number);
    console.log("secondNumber = " + secondNumber);
    console.log("finalNumber = " + finalNumber);
    secondDigits.length = 0;
    secondNumber = 0;
  }
});

function divideFunction() {
  finalNumber = number / secondNumber;
  input.innerHTML = finalNumber;
}

subtract.addEventListener("click", function() {
  removeActive();
  removeOperation();
  subtract.classList.add("active");
  subtract.classList.add("operation");
  if (secondNumber != 0) {
    subtractFunction();
    number = finalNumber;
    console.log("number = " + number);
    console.log("secondNumber = " + secondNumber);
    console.log("finalNumber = " + finalNumber);
    secondDigits.length = 0;
    secondNumber = 0;
  }
});

function subtractFunction() {
  finalNumber = number - secondNumber;
  input.innerHTML = finalNumber;
}

comma.addEventListener("click", function() {
  commaFunction();
});

function commaFunction() {
  if (
    add.classList.contains("operation") ||
    multiple.classList.contains("operation") ||
    divide.classList.contains("operation") ||
    subtract.classList.contains("operation")
  ) {
    if (!secondDigits.includes(".")) {
      if (secondDigits.length == 0) {
        secondDigits.push(0);
        secondDigits.push(".");
        secondNumber = secondDigits.join("");
        input.innerHTML = secondNumber;
      } else {
        secondDigits.push(".");
        secondNumber = secondDigits.join("");
        input.innerHTML = secondNumber;
      }
    }
  } else {
    if (!digits.includes(".")) {
      if (digits.length == 0) {
        digits.push(0);
        digits.push(".");
        number = digits.join("");
        input.innerHTML = number;
      } else {
        digits.push(".");
        number = digits.join("");
        input.innerHTML = number;
      }
    }
  }
}

percentage.addEventListener("click", function() {
  percentageFunction();
  console.log("number = " + number);
  console.log("secondNumber = " + secondNumber);
  console.log("finalNumber = " + finalNumber);
  input.innerHTML = finalNumber;
});

function percentageFunction() {
  number = number / 100;
  finalNumber = number;
}

document.addEventListener("keyup", function(event) {
  if (event.defaultPrevented) {
    return;
  }
  var key = event.key || event.keyCode;
  if (key === "0" || key === "0" || key === 48) {
    numClicked(0);
  } else if (key === "1" || key === "1" || key === 49) {
    numClicked(1);
  } else if (key === "2" || key === "2" || key === 50) {
    numClicked(2);
  } else if (key === "3" || key === "3" || key === 51) {
    numClicked(3);
  } else if (key === "4" || key === "4" || key === 52) {
    numClicked(4);
  } else if (key === "5" || key === "5" || key === 53) {
    numClicked(5);
  } else if (key === "6" || key === "6" || key === 54) {
    numClicked(6);
  } else if (key === "7" || key === "7" || key === 55) {
    numClicked(7);
  } else if (key === "8" || key === "8" || key === 56) {
    numClicked(8);
  } else if (key === "9" || key === "9" || key === 57) {
    numClicked(9);
  } else if (key === "Backspace" || key === "Backspace" || key === 8) {
    ac.addEventListener("click", function() {
      removeOperation();
      removeActive();
      clearVars();
    });
  } else if (key === "Enter" || key === "Enter" || key === 13) {
    if (secondDigits.length == 0) {
      input.innerHTML = number;
      console.log(number);
    } else if (add.classList.contains("operation")) {
      removeOperation();
      addFunction();
      number = finalNumber;
      input.innerHTML = finalNumber;
      secondDigits.length = 0;
      secondNumber = 0;
      console.log("number = " + number);
      console.log("secondNumber = " + secondNumber);
      console.log("finalNumber = " + finalNumber);
    } else if (multiple.classList.contains("operation")) {
      removeOperation();
      multipleFunction();
      number = finalNumber;
      input.innerHTML = finalNumber;
      secondDigits.length = 0;
      secondNumber = 0;
      console.log("number = " + number);
      console.log("secondNumber = " + secondNumber);
      console.log("finalNumber = " + finalNumber);
    } else if (divide.classList.contains("operation")) {
      removeOperation();
      divideFunction();
      number = finalNumber;
      input.innerHTML = finalNumber;
      secondDigits.length = 0;
      secondNumber = 0;
      console.log("number = " + number);
      console.log("secondNumber = " + secondNumber);
      console.log("finalNumber = " + finalNumber);
    } else if (subtract.classList.contains("operation")) {
      removeOperation();
      subtractFunction();
      number = finalNumber;
      input.innerHTML = finalNumber;
      secondDigits.length = 0;
      secondNumber = 0;
      console.log("number = " + number);
      console.log("secondNumber = " + secondNumber);
      console.log("finalNumber = " + finalNumber);
    } else {
      input.innerHTML = "Error";
    }
  } else if (key === "+" || key === "+" || key === "Equal") {
    removeActive();
    removeOperation();
    add.classList.add("active");
    add.classList.add("operation");
    if (secondNumber != 0) {
      addFunction();
      number = finalNumber;
      console.log("number = " + number);
      console.log("secondNumber = " + secondNumber);
      console.log("finalNumber = " + finalNumber);
      secondDigits.length = 0;
      secondNumber = 0;
    }
  } else if (key === "/" || key === "/" || key === "Slash") {
    removeActive();
    removeOperation();
    divide.classList.add("active");
    divide.classList.add("operation");
    if (secondNumber != 0) {
      divideFunction();
      number = finalNumber;
      console.log("number = " + number);
      console.log("secondNumber = " + secondNumber);
      console.log("finalNumber = " + finalNumber);
      secondDigits.length = 0;
      secondNumber = 0;
    }
  } else if (key === "*" || key === "*" || key === 56) {
    removeActive();
    removeOperation();
    multiple.classList.add("active");
    multiple.classList.add("operation");
    if (secondNumber != 0) {
      multipleFunction();
      number = finalNumber;
      console.log("number = " + number);
      console.log("secondNumber = " + secondNumber);
      console.log("finalNumber = " + finalNumber);
      secondDigits.length = 0;
      secondNumber = 0;
    }
  } else if (key === "-" || key === "-" || key === 189) {
    removeActive();
    removeOperation();
    subtract.classList.add("active");
    subtract.classList.add("operation");
    if (secondNumber != 0) {
      subtractFunction();
      number = finalNumber;
      console.log("number = " + number);
      console.log("secondNumber = " + secondNumber);
      console.log("finalNumber = " + finalNumber);
      secondDigits.length = 0;
      secondNumber = 0;
    }
  } else if (key === "%" || key === "%" || key === 53) {
    percentageFunction();
    console.log("number = " + number);
    console.log("secondNumber = " + secondNumber);
    console.log("finalNumber = " + finalNumber);
    input.innerHTML = finalNumber;
  }
});

/* function removeActive() {
  let activeElements = document.getElementsByClassName("active");
} */

/* posneg.addEventListener("click", function() {
  posnegFunction();
}); */

/* function posnegFunction() {
  if (number > 0) {
    number = -Math.abs(number);
    input.innerHTML = number;
  } else if (number < 0) {
    number = Math.abs(number);
    input.innerHTML = number;
  } else if (number == Math.abs(0)) {
    number = -Math.abs(number);
    input.innerHTML = Math.sign(number);
  } else if (number == -Math.abs(0)) {
    number = Math.abs(number);
    input.innerHTML = Math.sign(number);
  } else {
    input.innerHTML = "Error";
  }
} */

/* Bugs 

1. If I hit 3 -> + -> 6 -> - it will be -3, instead of 9
2. Comma is not working properly

*/
