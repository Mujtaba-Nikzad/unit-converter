/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// elements

const feet = 3.281
const gallon = 0.264
const pound = 2.204
let input = document.getElementById("input")
const meterP = document.getElementById("meter-p")
// const feetP = document.getElementById("feet-p")
const gallonP = document.getElementById("gallon-p")
 const kiloP = document.getElementById("kilo-p")
// const literP = document.getElementById("liter-p")
//  const poundP = document.getElementById("pound-p")
const convertBtn = document.getElementById("conver-btn")

// Function

convertBtn.addEventListener("click", function(){
    let inputEl = input.value 
    
    // Length 
    
    meterP.textContent = `${inputEl} meters is equal to ${inputEl * feet} feet || ${inputEl} 
    feet is equal to ${parseFloat(inputEl / feet).toFixed(3)} meters`
    
    // Volume
    
    gallonP.textContent = `${inputEl} liters is equal to ${parseFloat(inputEl * gallon).toFixed(3)} gallons || ${inputEl} 
    gallons is equal to ${parseFloat(inputEl / gallon).toFixed(3)} liters`
    
    // Mass
    
    kiloP.textContent = `${inputEl} kilos is equal to ${parseFloat(inputEl * pound).toFixed(3)} pounds || ${inputEl} 
    pounds is equal to ${parseFloat(inputEl / feet).toFixed(3)} kilos`
    
    input.value = ""
    
})

