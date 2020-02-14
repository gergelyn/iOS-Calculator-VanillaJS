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

let activeElements = document.getElementsByClassName("active");

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
  if (add.classList.contains("operation")) {
    removeActive();
    secondDigits.push(num);
    secondNumber = secondDigits.join("");
    secondNumber = parseInt(secondNumber);
    ac.innerHTML = "C";
    input.innerHTML = secondNumber;
  } else {
    digits.push(num);
    number = digits.join("");
    number = parseInt(number);
    ac.innerHTML = "C";
    input.innerHTML = number;
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
}

ac.addEventListener("click", function() {
  removeActive();
  clearVars();
});

function removeActive() {
  add.classList.remove("active"); // Remove .active styling attribute
}

function removeOperation() {
  add.classList.remove("operation"); // Remove .operation functionate attribute
}

result.addEventListener("click", function() {
  if (secondDigits.length == 0) {
    input.innerHTML = number;
  } else if (add.classList.contains("operation")) {
    removeOperation();
    addFunction();
    number = finalNumber;
    secondDigits.length = 0;
    secondNumber = 0;
  } else {
    input.innerHTML = "Error";
  }
});

add.addEventListener("click", function() {
  add.classList.add("active");
  add.classList.add("operation");
  if (secondDigits.length != 0) {
    secondDigits.length = 0;
    secondNumber = 0;
  }
});

function addFunction() {
  finalNumber = number + secondNumber;
  input.innerHTML = finalNumber;
}

/*if(digits.length != 0 && secondDigits.length != 0) {
  addFunction();
}*/

percentage.addEventListener("click", function() {
  percentageFunction();
  input.innerHTML = finalNumber;
});

function percentageFunction() {
  finalNumber = number / 100;
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
