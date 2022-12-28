const txtOp1 = document.getElementById("op1")
const txtOperation = document.getElementById("operation")
const txtOp2 = document.getElementById("op2")
const btnCalculate = document.getElementById("calculate")
const result = document.getElementById("result")

btnCalculate.addEventListener('click', calculate)

function calculate() {
    const operation = txtOperation.value
    const op1 = parseFloat (txtOp1.value)
    const op2 = parseFloat (txtOp2.value)

    if ((operation == "+" || operation == "-" || operation == "*" || operation == "/") && !isNaN(op1) && !isNaN(op2)) {
        let resultado
        switch (operation){
        case "+":
            resultado = op1 + op2
            break;

        case "-":
            resultado = op1 - op2
            break;

        case "*":
            resultado = op1*op2
            break;

        case "/":
            resultado = op1/op2
            break;
         }
        result.style = "color:black"
        result.innerText = resultado
    }
    else {
        result.style = "color:red"
        result.innerText = ("Not possible calculation")
    }
}