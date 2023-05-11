// this file is for code needed for
// input, quiz and truth game
// global variable for first name
// a variable that can be used in all functions
// first name
let fname = "";
// function to get info from intro form
// check input, and produce a sentence
function greet() {
    let greetParagraph = document.getElementById("greet");
    // get the values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    // check the input
    if (fname === "" || lname === "") {
        alert("First and last name cannot be an empty string!");
        return;
    }
    // age check
    if (age === "" || age < 18) {
        alert("Invalid age! You must be 18 or older!")
        return;
    }
    // update output paragraph
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + "!";
}
// function to play the trivia game
function trivia1() {
    // get handle to answer paragraph
    let triviaAnswer = document.getElementById("trivia-answer");
    // get handles and values from radio selections
    let chocSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;
    // give the results
    if (chocSelected) {
        triviaAnswer.innerHTML = fname + ", chocolate is wrong! Sweet tooth huh?";
        triviaAnswer.style.color = '#440000'//red
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", tuna is wrong! Fish goes bad fast.";
        triviaAnswer.style.color = '#440000'//red
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", Bravo! You are right! Honey never goes bad!";
        triviaAnswer.style.color = '#34eb89'//light green
    }
    else {
        triviaAnswer.innerHTML = "Uh oh. Something went wrong!!!";
        triviaAnswer.style.color = '#440000' //red
    }
}

    function truth_and_lie() {
        // get handle to answer paragraph
        let triviaAnswer = document.getElementById("lie-answer");
        // get handles and values from radio selections
        let bellevueSelected = document.getElementById("Bellevue").checked;
        let hindiSelected = document.getElementById("Hindi").checked;
        let indiaSelected = document.getElementById("India").checked;
        // give the results
        if (bellevueSelected) {
            triviaAnswer.innerHTML = fname + " you got it wrong. I was actually born in Bellevue.";
            triviaAnswer.style.color = '#FF0000'; //red
        }
        else if (hindiSelected) {
            triviaAnswer.innerHTML = fname + " you got it right. Who would've thought that an Indian wouldn't speak Hindi?"; 
            triviaAnswer.style.color = '#34eb89'//light green
        } 
        else if (indiaSelected) {
            triviaAnswer.innerHTML = fname + " you got it wrong. My parents are actually from India.";
            triviaAnswer.style.color = '#FF0000'; //red
        }
        else {
            triviaAnswer.innerHTML = "Uh oh. Something went wrong!";
            triviaAnswer.style.color = '#FF0000'; //red
        }
}
