const fahrenheitNumber = document.querySelector('#fahrenheit > input');

const celsiusNumber = document.querySelector('#celsius > input');

const myinput = document.querySelector('#myinput > input');

const converted = document.querySelector('#convert > button');

const mySolution = document.querySelector('#solution');

// If the user clicked on celsius radio
celsiusNumber.addEventListener("click", function(e) {
    // converting to a float 
    const input = parseFloat(myinput.value);

    // Error checking 
    if(celsiusNumber.checked == true && !isNaN(input)){
        const celsiusNow = input;

        // Formula 
        const fahrenheitThen = celsiusNow * 1.8 + 32

        // Changing the html
        mySolution.innerHTML = input + " C = " + (Math.round(fahrenheitThen*100)/100) + " F";
    } else if(myinput.value == ""){

        mySolution.innerHTML = "Your input is empty";
    } else if(isNaN(input)){

        mySolution.innerHTML = "This is not a number";
    }
});

// If the user clicked on fahrenheit radio
fahrenheitNumber.addEventListener("click", function(e) {
    const input = parseFloat(myinput.value);

    if(fahrenheitNumber.checked == true && !isNaN(input)){
        const fahrenheitNow = input;

        // Formula
        const celsiusThen = 0.556 * (fahrenheitNow - 32)

        // Changing the html
        mySolution.innerHTML = input + " F = " + (Math.round(celsiusThen*100)/100) + " C";
    } else if(myinput.value == ""){

        // If the input is empty
        mySolution.innerHTML = "Your input is empty";
    } else if(isNaN(input)){

        // If the input is not a number
        mySolution.innerHTML = "This is not a number";
    }
});

// Once the user type something, it will convert if fahren or cel is slected
myinput.addEventListener("input", function(e) {
    const input = parseFloat(myinput.value);
    
    if(celsiusNumber.checked == true){
        const celsiusNow = input;
        const fahrenheitThen = celsiusNow * 1.8 + 32

        mySolution.innerHTML = input + " C = " + (Math.round(fahrenheitThen*100)/100) + " F";
    } else if(fahrenheitNumber.checked == true){
        const fahrenheitNow = input;
        const celsiusThen = 0.556 * (fahrenheitNow - 32)

        mySolution.innerHTML = input + " F = " + (Math.round(celsiusThen*100)/100) + " C";
    }

    if(fahrenheitNumber.checked == false && celsiusNumber.checked == false){
        mySolution.innerHTML = "Please select a temperature scale to convert";
    } else if(myinput.value == ""){
        mySolution.innerHTML = "Your input is empty";
    } else if(isNaN(input)){
        mySolution.innerHTML = "This is not a number";
    }

});

// Converting button is pressed, nothing really happen cause doing extra credit, only for error checking
converted.addEventListener("click", function(e) {
    const input = parseFloat(myinput.value);

    if(fahrenheitNumber.checked == false && celsiusNumber.checked == false){
        mySolution.innerHTML = "Please select a temperature scale to convert";
    } else if(myinput.value == ""){
        mySolution.innerHTML = "Your input is empty";
    } else if(isNaN(input)){
        mySolution.innerHTML = "This is not a number";
    }
});




