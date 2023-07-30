
let operatorValue="";
let currentNumberValue="";
let previousNumberValue=""


//select all the buttons with class number
const numbersButton=document.querySelectorAll(".number");

//select all  the buttons with class operator
const operatorsButton=document.querySelectorAll(".operator");

// select the paragraphs inside of display-screen div
const currentNumberPara = document.querySelector(".currentNumber")
const previousNumberPara = document.querySelector(".previousNumber")


//select the remaining buttons
const clearButton=document.querySelector(".clear")
const equalButton=document.querySelector(".equal")
const decimalButton=document.querySelector(".decimal") // try  to implement it 

// create eventlistener for number buttons
//the currentNumberPara element inside of display-screen div will be equal to the button's text content
numbersButton.forEach(button=>{
    button.addEventListener("click",(e)=>{
        getNumber(e.target.textContent); // call func and pass the button's text content to it
        currentNumberPara.textContent=currentNumberValue
        //currentNumberValue=currentNumberPara.textContent;
        //previousNumberPara.textContent=currentNumberValue;
    })
})


// create eventlistener for operator buttons
operatorsButton.forEach(opButton=>{
    opButton.addEventListener("click",(e)=>{
    // call func and pass the button's text content to it,the func will switch  value of previousNumberValue to equal currentNumberValue
        getOperator(e.target.textContent)
    //now that previousNumberValue contains the currentNumberValue, I can store that inside of previousNumberParagraph along with operator
        previousNumberPara.textContent=previousNumberValue + " " + operatorValue; 
        // currentNumberValue is now an empty string
        currentNumberPara.textContent=currentNumberValue;
    })
})



// create event listener for clear button
//when this button is clicked 
//call func that will set currentNumberPara/previousNumberPara/operatorValue to empty strings and undefined
clearButton.addEventListener("click",()=>{
    resetCalc();
    previousNumberPara.textContent=previousNumberValue;
    currentNumberPara.textContent=currentNumberValue;
})



equalButton.addEventListener("click",()=>{
    //conditional test  fixes annoying bug when user presses a number button and then = right after
    // the result would be 0 instead of the number
    if(!operatorValue && !previousNumberValue){ 
        previousNumberPara.textContent=currentNumberValue;
        currentNumberPara.textContent="";
        return;
   }
    getResult()
    previousNumberPara.textContent="";
    currentNumberPara.textContent=previousNumberValue; 
  
})

decimalButton.addEventListener("click",()=>{
    if(!currentNumberValue.includes(".")){ // if it does'nt include . then add one
        currentNumberValue +="."
    }
})


function getNumber(num){
    //call when user clicks on number btn
    //stores a number inside currentNumber variable then returns the number
    //also allows user to  input large numbers like 2987112
    currentNumberValue+=num;
    
}
function getOperator(op){
    //call when user clicks on operator btn
    //store operator sign inside operatorValue
    // when user clicks on any of the 4 op buttons, the previousNumberValue will take the value of the currentNumbervalue
    //then i'll reset the currentNumberValue to an empty string
    operatorValue=op;
    previousNumberValue=currentNumberValue;
    currentNumberValue=""
}

function resetCalc(){
    //call when user click on clear btn
    //makes the display-screen div completely blank
    operatorValue=undefined;
    currentNumberValue="";
    previousNumberValue=""
}

function getResult(){
    // call this func  when equal button is pressed
    previousNumberValue=Number(previousNumberValue);
    currentNumberValue=Number(currentNumberValue);
    if(!currentNumberValue && !previousNumberValue){ // if user just presses equal without entering number display 0 then stop execution
        currentNumberValue=""
        return;
    }
   
    if (operatorValue==="+"){
         previousNumberValue += currentNumberValue
    }else if(operatorValue==="-"){
        previousNumberValue -= currentNumberValue     
    }
    else if(operatorValue==="*"){
        previousNumberValue *= currentNumberValue     
    }
    else if(operatorValue==="/"){
         previousNumberValue /= currentNumberValue     
    }
    previousNumberValue = Math.floor(previousNumberValue * 10000) / 10000; // rounds down the result to four decimal places 
    currentNumberValue=previousNumberValue.toString();
    
}
