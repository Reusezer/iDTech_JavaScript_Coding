/**
 * Description: This program is assigning student IDs to 5 new students but there is a bug in the code preventing the code to run 
 * as expected. Your task is to run and debug the program using breakpoints.
 * 
 * TODO: The program has error message in the console. You should read the message and debug accordingly. The final 
 * goal is to print out a student ID for each student to the console. The ID numbers should be from 0 to 4.
 */

function checkPoint2(){
    alert3();

    // TODO: Remove the bugs from the code below.
    const friends = ["Rei", "Miya", "Alexis", "Ethan", "Anna"];
    const studentID = [];

    for (var i = 0; i < friends.length; i++){
        studentID.push("JSMIT" + i);
    }
    console.log(studentID);

    // DO NOT CHANGE THE CODE BELOW
    alerts(studentID);
}


/************************************************ DONT CHANGE THE CODE BELOW ******************************************************/
function alert3() {
    alert("All students need to get their student IDs, but it seems like the system is down. Can you help debug the system? Go to the example2.js file and work on checkpoint 2.");
}

function alerts(studentID) {
    if (studentID.length == 5) {
        alert("Yay! You got the system running!");
    }
    else {
        alert("Hmmm! It seems like Rei hasn't received his ID. Keep debugging!");
    }
}