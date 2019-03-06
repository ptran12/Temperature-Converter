const celciusInput = document.querySelector("#celcius > input"); 
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

celciusInput.addEventListener("input", function () {
    const cTemp = parseFloat(celciusInput.value); //converting string to number
    // equation to convert celcius to fahrenheit
    const fTemp = (cTemp * (9 / 5)) + 32;
    //equation for kelvin
    const kTemp = cTemp + 273.15;
    
    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;
});