
let operatorValue=""
let currentNumberValue=""
let previousNumberValue=""


//select all the buttons with class number
const numbersButton=document.querySelectorAll(".number")

//select all  the buttons with class operator
const operatorsButton=document.querySelectorAll(".operator")

// select the paragraphs inside of display-screen div
const currentNumberPara = document.querySelector(".currentNumber")
const previousNumberPara = document.querySelector(".previousNumber")


//select the remaining buttons
const clearButton=document.querySelector(".clear")
const lastClearButton=document.querySelector(".last-clear")
const equalButton=document.querySelector(".equal")
const decimalButton=document.querySelector(".decimal") // try  to implement it 

// create eventlistener for number buttons
//the currentNumberPara element inside of display-screen div will be equal to the button's text content
numbersButton.forEach(button=>{
    button.addEventListener("click",(e)=>{
        getNumber(e.target.textContent) // call func and pass the button's text content to it
        currentNumberPara.textContent=currentNumberValue
      
    })
})


// create eventlistener for operator buttons
operatorsButton.forEach(opButton=>{
    opButton.addEventListener("click",(e)=>{
    // call func and pass the button's text content to it,the func will switch  value of previousNumberValue to equal currentNumberValue
        getOperator(e.target.textContent)
    //now that previousNumberValue contains the currentNumberValue, I can store that inside of previousNumberParagraph along with operator
        previousNumberPara.textContent=previousNumberValue + " " + operatorValue 
        // currentNumberValue is now an empty string
        currentNumberPara.textContent=currentNumberValue
    })
})



// create event listener for clear button
//when this button is clicked 
//call func that will set currentNumberPara/previousNumberPara/operatorValue to empty strings and undefined
clearButton.addEventListener("click",()=>{
    resetCalc()
    previousNumberPara.textContent=previousNumberValue
    currentNumberPara.textContent=currentNumberValue
})

// this will clear the last entry so if user makes a mistake 
//they can press this button to clear last number entered
lastClearButton.addEventListener("click",()=>{
    //extract the everything except the last character and store in variable
    //this will remove the last number and keep everything else
    currentNumberPara.textContent=currentNumberPara.textContent.slice(0,-1)

    //fixes a problem when the user removes the last entry 
    //then enters a number, the number that was removed shows up
    currentNumberValue=currentNumberPara.textContent 
})




equalButton.addEventListener("click",()=>{
    //conditional test  fixes annoying bug when user presses a number button and then = right after
    // the result would be 0 instead of the number
    if(!operatorValue && !previousNumberValue){ 
        previousNumberPara.textContent=currentNumberValue
        currentNumberPara.textContent=""
        return
   }
    getResult()
    previousNumberPara.textContent=""
    currentNumberPara.textContent=previousNumberValue 
    
  
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
    currentNumberValue+=num
    
}
function getOperator(op){
    //call when user clicks on operator btn
    //store operator sign inside operatorValue
    // when user clicks on any of the 4 op buttons, the previousNumberValue will take the value of the currentNumbervalue
    //then i'll reset the currentNumberValue to an empty string
    operatorValue=op
    previousNumberValue=currentNumberValue
    currentNumberValue=""
}

function resetCalc(){
    //call when user click on clear btn
    //makes the display-screen div completely blank
    operatorValue=undefined
    currentNumberValue=""
    previousNumberValue=""
}

function getResult(){
    // call this func  when equal button is pressed
    previousNumberValue=Number(previousNumberValue)
    currentNumberValue=Number(currentNumberValue)
    if(!currentNumberValue && !previousNumberValue){ // if user just presses equal without entering number display 0 then stop execution
        currentNumberValue=""
        return
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
    previousNumberValue = Math.floor(previousNumberValue * 10000) / 10000 // rounds down the result to four decimal places 
    currentNumberValue=previousNumberValue.toString()
    
}
//allow user to use keyboard and numpad for both the numbers and operators
window.addEventListener("keydown",(e)=>{
    if (e.key==0){
        getNumber(e.key)
        currentNumberPara.textContent=currentNumberValue
    }
    if (e.key==1){
        getNumber(e.key)
        currentNumberPara.textContent=currentNumberValue
    }
    if (e.key==2){
        getNumber(e.key)
        currentNumberPara.textContent=currentNumberValue
    }
    if (e.key==3){
        getNumber(e.key)
        currentNumberPara.textContent=currentNumberValue
    }
    if (e.key==4){
        getNumber(e.key)
        currentNumberPara.textContent=currentNumberValue
    }
    if (e.key==5){
        getNumber(e.key)
        currentNumberPara.textContent=currentNumberValue
    }
    if (e.key==6){
        getNumber(e.key)
        currentNumberPara.textContent=currentNumberValue
    }
    if (e.key==7){
        getNumber(e.key)
        currentNumberPara.textContent=currentNumberValue
    }
    if (e.key==8){
        getNumber(e.key)
        currentNumberPara.textContent=currentNumberValue
    }
    if (e.key==9){
        getNumber(e.key)
        currentNumberPara.textContent=currentNumberValue
    }

    if(e.key==="+"){
        getOperator(e.key)
        previousNumberPara.textContent=previousNumberValue + " " + operatorValue
        currentNumberPara.textContent=currentNumberValue 
    }
    if(e.key==="-"){
        getOperator(e.key)
        previousNumberPara.textContent=previousNumberValue + " " + operatorValue
        currentNumberPara.textContent=currentNumberValue 
    }
    if(e.key==="*"){
        getOperator(e.key)
        previousNumberPara.textContent=previousNumberValue + " " + operatorValue
        currentNumberPara.textContent=currentNumberValue 
    }
    if(e.key==="/"){
        getOperator(e.key) 
        previousNumberPara.textContent=previousNumberValue + " " + operatorValue
        currentNumberPara.textContent=currentNumberValue 
    }
    if(e.key==="="){
        getResult()
        previousNumberPara.textContent=""
        currentNumberPara.textContent=previousNumberValue;
        
    }
})
