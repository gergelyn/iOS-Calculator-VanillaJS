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
  if (add.classList.contains("operation")) {
    if (secondNumber == 0) {
      input.innerHTML = secondNumber;
    } else {
      numClicked(0);
    }
  } else {
    if (number == 0) {
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
    secondDigits.push(num);
    secondNumber = secondDigits.join("");
    secondNumber = parseInt(secondNumber);
    ac.innerHTML = "C";
    input.innerHTML = secondNumber;
    console.log("secondNumber = " + secondNumber);
  } else {
    digits.push(num);
    number = digits.join("");
    number = parseInt(number);
    ac.innerHTML = "C";
    input.innerHTML = number;
    console.log("number = " + number);
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
  removeActive();
  clearVars();
});

function removeActive() {
  add.classList.remove("active"); // Remove .active styling attribute
  multiple.classList.remove("active"); // Remove .active styling attribute
  divide.classList.remove("active");
  subtract.classList.remove("active");
}

function removeOperation() {
  add.classList.remove("operation"); // Remove .operation functionate attribute
  multiple.classList.remove("operation"); // Remove .operation functionate attribute
  divide.classList.remove("operation");
  subtract.classList.remove("operation");
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
  } else if (multiple.classList.contains("operation")) {
    removeOperation();
    multipleFunction();
    number = finalNumber;
    input.innerHTML = finalNumber;
    secondDigits.length = 0;
    secondNumber = 0;
    console.log("number = " + number);
    console.log("finalNumber = " + finalNumber);
    console.log("secondNumber = " + secondNumber);
  } else if (divide.classList.contains("operation")) {
    removeOperation();
    divideFunction();
    number = finalNumber;
    input.innerHTML = finalNumber;
    secondDigits.length = 0;
    secondNumber = 0;
    console.log("number = " + number);
    console.log("finalNumber = " + finalNumber);
    console.log("secondNumber = " + secondNumber);
  } else if (subtract.classList.contains("operation")) {
    removeOperation();
    subtractFunction();
    number = finalNumber;
    input.innerHTML = finalNumber;
    secondDigits.length = 0;
    secondNumber = 0;
    console.log("number = " + number);
    console.log("finalNumber = " + finalNumber);
    console.log("secondNumber = " + secondNumber);
  } else {
    input.innerHTML = "Error";
  }
});

add.addEventListener("click", function() {
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
  divide.classList.add("active");
  divide.classList.add("operation");
  if (secondNumber != 0) {
    divideFunction();
    number = finalNumber;
    console.log("number = " + number);
    console.log("finalNumber = " + finalNumber);
    console.log("secondNumber = " + secondNumber);
    secondDigits.length = 0;
    secondNumber = 0;
  }
});

function divideFunction() {
  finalNumber = number / secondNumber;
  input.innerHTML = finalNumber;
}

subtract.addEventListener("click", function() {
  subtract.classList.add("active");
  subtract.classList.add("operation");
  if (secondNumber != 0) {
    subtractFunction();
    number = finalNumber;
    console.log("number = " + number);
    console.log("finalNumber = " + finalNumber);
    console.log("secondNumber = " + secondNumber);
    secondDigits.length = 0;
    secondNumber = 0;
  }
});

function subtractFunction() {
  finalNumber = number - secondNumber;
  input.innerHTML = finalNumber;
}

/*if(digits.length != 0 && secondDigits.length != 0) {
  addFunction();
}*/

comma.addEventListener("click", function() {
  commaFunction();
});

function commaFunction() {
  if (secondDigits.length != 0) {
    secondDigits.push(".");
    secondNumber = secondDigits.join("");
    input.innerHTML = secondNumber;
  } else {
    digits.push(".");
    number = digits.join("");
    input.innerHTML = number;
  }
}

percentage.addEventListener("click", function() {
  percentageFunction();
  console.log("number " + number);
  console.log("finalNumber = " + finalNumber);
  input.innerHTML = finalNumber;
});

function percentageFunction() {
  number = number / 100;
  finalNumber = number;
}

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
