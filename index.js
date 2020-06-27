
let button = document.querySelectorAll('button');
let resetButton = document.getElementById('ac');
let equalButton = document.getElementById('result');
let screen = document.querySelector('span');
let decimal = false;
let operator = "+-*/";



button.forEach(btn => {
    btn.addEventListener('click', () => {

        if(screen.innerHTML.charAt(0) === "0") { screen.innerHTML = btn.value; return; };
        if(operator.includes(btn.value) && btn.value !== "=") 
            screen.innerHTML += ` ${btn.value} `;
        else if(btn.value !== "=")
            screen.innerHTML += btn.value;

    })
});

equalButton.addEventListener('click', () =>  {
    var arrayResult = convertStringToNumberInList(screen.innerHTML);
    screen.innerHTML = applyingMDAS(arrayResult);

});

resetButton.addEventListener('click', () => screen.innerHTML = "0");


// Functions to apply MDAS (multiply, divide, add, substract)


/* Arithmetic Function */

function arithmetic(operator, num1, num2) {
    switch(operator) {
        case "*":
            return num1 * num2; 
        case "/":
            return num1 / num2; 
        case "+":
            return num1 + num2; 
        case "-":
            return num1 - num2; 
        default:
            return 0;
    }
}

/* Function check in a list who are the numbers and it convert it into a string */

function convertStringToNumberInList(arithmeticString) {
    var arithmeticArray = arithmeticString.split(" ");

    for(var i=0; i < arithmeticArray.length; i++)
        if(parseFloat(arithmeticArray[i])) arithmeticArray[i] = parseFloat(arithmeticArray[i]);

    return arithmeticArray;
}

/* Function apply the arithmetic rules  */

function applyingMDAS(arr) {
    let multiplyDivisionOperator = "*/";
    let addSubstractOperator = "+-";
    let result = "";
  
  do {
    for(var i=0; i < arr.length; i++)
        if(multiplyDivisionOperator.includes(arr[i])) {
            arr[i-1] = arithmetic(arr[i], arr[i-1], arr[i+1]);
          	arr.splice(i, 2);
        }
    
    for(var i=0; i < arr.length; i++)
        if(addSubstractOperator.includes(arr[i])) {
            arr[i-1] = arithmetic(arr[i], arr[i-1], arr[i+1]);
          	arr.splice(i, 2);
        }
  }	
  while(arr.length !== 1)
  
  result = arr[0].toString();

  return result;
}