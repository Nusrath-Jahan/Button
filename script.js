// let name = 'nusrat';
// console.log(name.toLowerCase());
// console.log(name.length);
// console.log(name.slice(0,1));
// console.log(name.split(2,4)); eta hoyni
// console.log(name.character()); eta hoyni
// ---------------------------------------------------------



//Get first letter
// Make it capital
// Take the rest of the String 
// Combine two parts
// Return the combination

function uppercaseFirstLetter(myString){
    let first = myString.slice(0,1).toUpperCase();
    console.log(first);
    
    let second = myString.slice(1);
    console.log(second);

    let combineTwoParts = first + second ;
    console.log(combineTwoParts);
    console.log("-----------------");
    return combineTwoParts ;
    
}
console.log(uppercaseFirstLetter("kasia") == "Kasia");
console.log(uppercaseFirstLetter("kAsia") == "KAsia");
console.log(uppercaseFirstLetter("1hello") == "1hello");
// ---------------------------------------------------------

// Create a button 
var button = document.createElement("button");
button.innerHTML = "Click me";
button.style = "width: 100px ; height: 50px; background-color:red;";

document.body.appendChild(button);
// ---------------------------------------------------------


// button.onclick = function() {
//   alert("Button clicked!");
// };

// var container = document.getElementById("buttonContainer");

// container.appendChild(button);
// ---------------------------------------------------------

// function changeBackgroundColor() {
//     document.getElementById("divsection").style.backgroundColor = "lightblue";
//  }
// ---------------------------------------------------------
 function buttonClicked(){
    button.style = "width: 100px ; height: 50px; background-color:blue;";
}
button.addEventListener("click", buttonClicked );






// ---------------------------------------------------------

// let firstLetter = myString.slice(0,1);
    // let secondPart = myString.slice(1, myString.length);
    // let result = firstLetter + secondPart ;
    // console.log(result);
    // console.log("-----------------");
    // return result;