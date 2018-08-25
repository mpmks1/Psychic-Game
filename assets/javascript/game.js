
// psuedo code of what needs to be done here:
// 1) establish variables for letters
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var emptyString = "";
var userInput = [];
var win = 0;
var lose = 0;

$(document).ready(function () {    
//  i cant figure out how to loop this so the prompt will pop up multiple times and re-pick a new letter every time!

    // 2) computer must use math.random to choose a letter from the array
    while (emptyString.length < 1) {
        emptyString += letters[Math.floor(Math.random() * letters.length)];
    }
    // temporary console log to determine what letter was chosen, comment out when finished with project
    // console.log(emptyString);

    //   decided to prompt user to input information:

    userInput.push(String(prompt("what letter would you like to guess?")));
    //  temporary console.log to ensure the guess is registering in system
    console.log("Your guess: " + userInput);

    // prints user input into letter guess slot
    $("#letter-blank").html(userInput);

    // 4) if statements which clarify if the user won or lost and if user input is valid 
   

    if (userInput == emptyString) {
        alert("Correct! You might be psychic!!!")
        win = win + 1;
        $("#win-counter").html(win);
    }
    else {
        alert("Incorrect, try again.")
        lose = lose + 1;
        $("#loss-counter").html(lose);
    }

});
