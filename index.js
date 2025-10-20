const buttonEl = document.getElementById("btn")
const inputEl = document.getElementById("input-field")
const meterFeetEl = document.getElementById("Meter-Feet")
const literGallonsEl = document.getElementById("liter-gallon")
const kilogramPound = document.getElementById("kilograms-pound")

buttonEl.addEventListener("click",function(){
    let number = Number(inputEl.value)
    if (meterFeetEl.textContent !==meterAndFeet(number)){
    meterFeetEl.innerHTML=""    
    meterFeetEl.innerHTML += meterAndFeet(number)
   }
   if (literGallonsEl.textContent !==literAndGallon(number)){
    literGallonsEl.innerHTML=""
    literGallonsEl.innerHTML += literAndGallon(number)
   }
   if (kilogramPound.textContent !==kilogramAndPound(number)){
    kilogramPound.innerHTML=""
    kilogramPound.innerHTML += kilogramAndPound(number)
   }
   
})


function meterAndFeet(number){
    let string = ""
    let meterToFeet = (number*3.281).toFixed(3)
    let FeetToMeter = (number/3.281).toFixed(3)
    string = `
    ${number} meters = ${meterToFeet} feet | ${number} feet = ${FeetToMeter} meters
    `
    return string
} 

function literAndGallon(number){
    let string = ""
    let literToGallon = (number*0.264).toFixed(3)
    let GallonToLiter = (number/0.264).toFixed(3)
    string = `
    ${number} liter = ${literToGallon} gallon | ${number} gallon = ${GallonToLiter} liter
    `
    return string
} 


function kilogramAndPound(number){
    let string = ""
    let kilogramToPound = (number*2.204).toFixed(3)
    let poundToKilogram = (number/2.204).toFixed(3)
    string = `
    ${number} kilogram = ${kilogramToPound} pound | ${number} pound = ${poundToKilogram} kilogram
    `
    return string
} 