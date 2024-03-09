// define the usable characters
let  charactersForPass = []; // going to be used for generate a list base on options
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const characters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


// define the dom objects
let button = document.getElementById("generate");
let passLenghtInput = document.getElementById("passLenght");
let lowerCaseCheckBox = document.getElementById("lowerCase");
let upperCaseCheckBox = document.getElementById("upperCase");
let numberCaseCheckBox = document.getElementById("number");
let charecterCaseCheckBox = document.getElementById("characters");
let generatedPassOne = document.getElementById("passOne");
let generatedPassTwo = document.getElementById("passTwo");


//keep passLengthInput value between min and max value
passLenghtInput.onchange = ()=> {
    const passLenght = passLenghtInput.value;
    if(passLenght < 10){
        passLenghtInput.value = 10;
    }else if(passLenght > 50){
       passLenghtInput.value = 50; 
    }
}
//keep passLengthInput value between min and max value END


// create usable characters list based on selected options
const generatePasswordCharList = () => {
    // clean charactersForPass
    charactersForPass = [];
    
    if(lowerCaseCheckBox.checked){
        charactersForPass.push(...lowerCase)
    }
    
    if(upperCaseCheckBox.checked){
        charactersForPass.push(...upperCase)
    }
    
    if(numberCaseCheckBox.checked){
        charactersForPass.push(...numbers)
    }
    if(charecterCaseCheckBox.checked){
        charactersForPass.push(...characters)
    }
}
// create usable characters list based on selected options END



// Generate A password with usable characters as long as passLenght
const genratePassword = () => {
    generatePasswordCharList();
    
    const passLenght = passLenghtInput.value;
    let pass = "";
    
    // check if any option is checked
    if(charactersForPass.length === 0){
       return pass = "Choice at least one option";
    }
    
    // loop as much as passLenght
    for (i=1; i<= passLenght; i++){
       // get random char from charactersForPass and add to pass
       pass += charactersForPass[Math.floor(Math.random() * charactersForPass.length)]
    }
    return pass  
}
// Generate A password with usable characters as long as passLenght SON



// show passwords 
const showPassword = () => {    
    generatedPassOne.querySelector('.password').textContent = genratePassword();
    generatedPassTwo.querySelector('.password').textContent = genratePassword();
}
// show passwords END

// copy passwords on click
generatedPassOne.onclick = async() => {    
    await navigator.clipboard.writeText(generatedPassOne.querySelector('.password').textContent);
    alert("Copied");
}

generatedPassTwo.onclick = async() => {
    await navigator.clipboard.writeText(generatedPassTwo.querySelector('.password').textContent);
    alert("Copied");
}
// copy passwords on click END

// genrate password at first load
showPassword();

// genrate password at button click
button.onclick = ()=> showPassword();
