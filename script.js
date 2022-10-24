//let's display the values of our operands when we click on the buttons.
const DISPLAY = document.querySelector("#display");
const BUTTONS = document.querySelectorAll("button");

BUTTONS.forEach(button => 
    {
        button.onclick = () => 
        {
            if (button.id == "clear") {
                DISPLAY.innerText = "";
            }

            else if (button.id == "backspace") {
                let string = DISPLAY.innerText.toString();
                DISPLAY.innerText = string.substr(0, string.length - 1);
            }

            else if (DISPLAY.innerText != "" && button.id == "equal") {
                DISPLAY.innerText = eval(DISPLAY.innerText);
            }

            else if (DISPLAY.innerText == "" && button.id == "equal") {
                DISPLAY.innerText = "No digit, no result!";
            }

            else if (button.id == "%"){
                DISPLAY.innerText = parseFloat(DISPLAY.innerText)/100;
            }
            
            else {
                DISPLAY.innerText += button.id;
            }
        };
    });