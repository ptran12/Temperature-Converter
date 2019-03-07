const celciusInput = document.querySelector("#celcius > input"); 
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");


function roundNum(num) {
    return Math.round(num*100)/100;
}

function celciusToFahrenheitAndKelvin(){
    const cTemp = parseFloat(celciusInput.value); //converting string to number
    // equation to convert celcius to fahrenheit
    const fTemp = (cTemp * (9 / 5)) + 32;
    //equation for kelvin
    const kTemp = cTemp + 273.15;
    
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelciusAndKelvin (){
    const fTemp = parseFloat(fahrenheitInput.value);
    //equation to convert fahrenheit to celcius 
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9

    // displaying on page 
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);

}

function kelvinToCelciusAndFahrenheit (){
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;

    // displaying on page 
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);

}

function mainTemps() {
    celciusInput.addEventListener("input", celciusToFahrenheitAndKelvin);
    fahrenheitInput.addEventListener("input", fahrenheitToCelciusAndKelvin);
    kelvinInput.addEventListener("input", kelvinToCelciusAndFahrenheit);
}

mainTemps();

