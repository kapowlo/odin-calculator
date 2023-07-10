
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

function operate(numberOne,operator,numberTwo,equalSign){
    // this function will call add,subtract,multiply,divide func depending on the operator
    const arr=[numberOne,operator,numberTwo,equalSign]; // make an array [num,"+ - * / =",num ]
        if(operator==="+"){
            let sum=add(arr) //pass the arr that contains the numbers in func call
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
//these paragraphs will hold the numbers and the operator once a btn is clicked
// MUST append all three paragraphs to container
const body=document.body;
const firstNumberPara=document.createElement("p");
const secondNumberPara=document.createElement("p");
const operatorPara=document.createElement("p"); // for the + - * / arithmetic signs
const storeEqualSignPara=document.createElement("p");// paragraph to store the equal sign


const displayPara=document.querySelector(".display-screen");
displayPara.append(firstNumberPara,operatorPara,secondNumberPara,storeEqualSignPara);

// create loop for the buttons then add click event for the buttons 
//the first paragraph will be equal to the text content of the button that was clicked
// after the user clicks once that number gets stored in the first para, when the user click a second time on the operators
//like + - * / the operator para will be equal to the text content  of the button that was click + - * /
//then user clicks on a second number and that number will be stored in the secondNumberPara
//finally when user click on equal sign we will display the result on screen
const myButtons=document.querySelectorAll(".container button");
let step=1;
myButtons.forEach(btn=>{
    
    btn.addEventListener("click",event=>{
        switch(step){
            case 1:
                firstNumberPara.textContent=event.target.textContent; 
                step=2;
                break;
            case 2:
                operatorPara.textContent=event.target.textContent;
                step=3;
                break;
            case 3:
                secondNumberPara.textContent=event.target.textContent;
                step=4;
                break;
            case 4:
                storeEqualSignPara.textContent=event.target.textContent
                break;
        }  
    });
});

//Moved the operationBtn outside of the forEach loop, because the eventlistener was added multiple times
const operationBtn=document.querySelector(".operation");
    operationBtn.addEventListener("click",result=>{
        result=operate(firstNumberPara.textContent,operatorPara.textContent,secondNumberPara.textContent,"=");
        console.log(firstNumberPara,operatorPara,secondNumberPara); 
        console.log(result);
       Array.from(displayPara.children).forEach(para=>{ //use array from to convert the htmlCollection/node list into an array loop through
            para.remove();
       });
           
         displayPara.append(result);
         console.log(result);
    });
