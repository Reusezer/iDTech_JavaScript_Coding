// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
let fortune = Math.random() * 10;

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
let response = 'You did not selected a fortune...';
function Fortuneteller(fortune) {
    if (fortune <= 3) {
        var response = 'Oh no you selected a low fortune!';
    }
    else if (fortune > 3 || fortune <= 7){
        response = 'You have an Average Fortune'
    }
    else if (fortune > 7 || fortune <= 10) {
        response = 'You have a Great fortune'
    }
    else {
        response = 'what? how did we get here?'
    }
    return response;
}

console.log('Fortune selected: ' + fortune)
console.log(Fortuneteller(fortune))
