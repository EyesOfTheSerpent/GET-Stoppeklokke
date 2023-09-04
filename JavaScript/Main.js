//Start

let startTime = 0; //Default value.
let timeUsed = 0 || null; //Default value.
let timeChange = setInterval(changeNumber, 1000); //Will increase the value once per second (1000 ms = 1 s).

//Starts the timer.
function startTimer(){
    timeChange;
}

//Increases the number.
function changeNumber(){
    startTime++;
}

//Ends the timer, gets the current value and will display it the div named timeDisplay.
function endTimer(){
    let timerHTML = document.getElementById("timeDisplay");
    timeUsed = startTime;
    if(timeUsed > 1){
        timerHTML.innerText= "Time used: " + timeUsed + " seconds.";
    }else{
        timerHTML.innerText= "Time used: " + timeUsed + " second."
    }
    clearInterval(timeChange);
}

//Reloads the page.
function resetTimer(){
    location.reload();
}

//End