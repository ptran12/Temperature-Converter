const celciusInput = document.querySelector("#celcius > input"); 
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");


function celciusToFahrenheitAndKelvin(){
    const cTemp = parseFloat(celciusInput.value); //converting string to number
    // equation to convert celcius to fahrenheit
    const fTemp = (cTemp * (9 / 5)) + 32;
    //equation for kelvin
    const kTemp = cTemp + 273.15;
    
    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;
}

function fahrenheitToCelciusAndKelvin (){
    const fTemp = parseFloat(fahrenheitInput.value);
    //equation to convert fahrenheit to celcius 
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9

    // displaying on page 
    celciusInput.value = cTemp;
    kelvinInput.value = kTemp;



}

celciusInput.addEventListener("input", celciusToFahrenheitAndKelvin);

fahrenheitInput.addEventListener("input", fahrenheitToCelciusAndKelvin);
