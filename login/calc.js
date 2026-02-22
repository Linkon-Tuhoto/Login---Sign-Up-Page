let input = document.getElementById("inputfield");
let allbtn = document.querySelectorAll(".num button");


let expression = "";
allbtn.forEach(button => {
    button.addEventListener("click", () => {
        let value=button.textContent;

        if(value === "C"){
            expression = "";
            input.value = "";
            return;
        }

        if(value === "DEL"){
            expression = expression.slice(0, -1);
            input.value = expression;
            return;
        }

        if(value === "="){
            try {
                expression = eval(expression).toString();
                input.value = expression;
            }
            catch (error){
                input.value = "Error";
                expression = "";
            }
            return;
        }

        const char = expression.slice(-1);
        const operators = ["%", "/", "*", "-", "+", "."];

        if(operators.includes(char) && operators.includes(value)){
            return;
        }

        expression += value;
        input.value = expression
    })
    
});