
let button = document.querySelectorAll('button');
let resetButton = document.getElementById('ac');
let equalButton = document.getElementById('result');
let screen = document.querySelector('span');
let decimal = false;

button.forEach(btn => {
    btn.addEventListener('click', () => {
        let operator = '+-*/';

        if(screen.innerHTML.charAt(0) === "0") { screen.innerHTML = btn.value; return; };

        if(btn.value === '.' && screen.innerHTML.includes('.')) decimal = true;
        console.log(decimal)
        if(operator.includes(btn.value)) decimal = false;
        console.log(decimal)
        
        if(decimal) {
            screen.innerHTML += btn.value;
        } else if(btn.value !== "=") {
            decimal = false;
            screen.innerHTML += btn.value;
        }

    })
});

equalButton.addEventListener('click', () => screen.innerHTML = eval(screen.innerHTML));

resetButton.addEventListener('click', () => screen.innerHTML = "0");
