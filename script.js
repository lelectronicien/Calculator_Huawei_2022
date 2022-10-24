//let's display the values of our operands when we click on the buttons.
const DISPLAY = document.querySelector("#display");
const BUTTONS = document.querySelectorAll("button");

BUTTONS.forEach(button => 
    {
        button.onclick = () => 
        {
            //clear the display screen
            if (button.id == "clear") {
                DISPLAY.innerText = "";
            }
            //clear the display screen one caracter after an other
            else if (button.id == "backspace") {
                let string = DISPLAY.innerText.toString();
                DISPLAY.innerText = string.substr(0, string.length-1);
            }
            //give the results of the input
            else if (DISPLAY.innerText != "" && button.id == "equal") {
                DISPLAY.innerText = eval(DISPLAY.innerText);
            }
            //When the user didn't enter any digits
            else if (DISPLAY.innerText == "" && button.id == "equal") {
                DISPLAY.innerText = "No digit, no result!";
            }
            //Give the percent of the input
            else if (button.id == "%"){
                DISPLAY.innerText = parseFloat(DISPLAY.innerText)/100;
            }
            /*continue to display the digits when 
            the user enter more than one time*/
            else {
                DISPLAY.innerText += button.id;
            }
        };
    });