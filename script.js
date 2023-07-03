
function add(array){
    let num1=Number(array[0]);//grab the first number
    let op=array[1]//grab the operator
    let num2=Number(array[2]);//grab the second number
    if(op==="+"){
        return num1 + num2; 
    }
}
function subtract(array){
    let num1=Number(array[0]);//grab the first number
    let op=array[1]//grab the operator
    let num2=Number(array[2]);//grab the second number
    if(op==="-"){
        return num1 - num2; 
    }
}

function multiply(array){
    let num1=Number(array[0]);//grab the first number
    let op=array[1]//grab the operator
    let num2=Number(array[2]);//grab the second number
    if(op==="*"){
        return num1 * num2; 
    }
}
function divide(array){
    let num1=Number(array[0]);//grab the first number
    let op=array[1]//grab the operator
    let num2=Number(array[2]);//grab the second number
    if(op==="/"){
        return num1 / num2; 
    }
}

function operate(numberOne,operator,numberTwo){
    // this function will call add,subtract,multiply,divide func depending on the operator
    const arr=[numberOne,operator,numberTwo]; // make an array [num,"+ - * /",num ]
        if(operator==="+"){
            let sum=add(arr) //pass the arr in func call
            return sum
        }
        else if(operator==="-"){
            let subtraction=subtract(arr)
            return subtraction
        }
        else if(operator==="*"){
            let multiplication=multiply(arr)
            return multiplication
        }
        else if(operator==="/"){
            let division=divide(arr)
            return division
        }
        else{
            return `invalid operator`
        }
}
