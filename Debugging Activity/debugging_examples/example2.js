/*** 
    Description: This program analyzes the day of the week. The current program has a few bugs. 
    TODO: Analyze the errors and use console outputs to help your instructor debug the program.
***/

function dayOfWeek(day) {
    if (day == "Saturday" || day == "Sunday"){
        return "Hooray! It's the weekend."
    }
    else {
        return "It must be a weekday."
    }
}

function main(day) {
    let results = dayOfWeek(day);
    return results;
}

let nameOfDay = "Sunday";
console.log('results = ' + main(nameOfDay));