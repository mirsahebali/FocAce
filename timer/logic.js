var minutes = 25;
var seconds = "00";
var sessions = 0;
var click = new Audio('C:/Users/mirsa/OneDrive/Desktop/FocAce/click.wav');
var bell = new Audio('C:/Users/mirsa/OneDrive/Desktop/FocAce/bell.wav');
var bell2 = new Audio('C:/Users/mirsa/OneDrive/Desktop/FocAce/bell2.wav')
function template(){
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
minutesTimer();
secondsTimer();
}

function start(){
click.play();

minutes = 24;
seconds = 59;

document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

var focusInterval = setInterval(focusSession, 25 * 60000);
var breakInterval = setInterval(breakTimer, 5 * 60000)

function focusSession(){
setInterval(minutesTimer, 60000);
setInterval(secondsTimer, 1000);
if(minutes <= 0){
    console.log('session done');
    minutes = 5;
    breakTimer();
    
}
}



function breakTimer(){

    setInterval(minutesTimer, 60000);
setInterval(secondsTimer, 1000);
if(minutes <= 0){
    console.log('break over');
    minutes = 25;
    focusSession();
}
}


function minutesTimer(){
    minutes--;
    document.getElementById('minutes').innerHTML = minutes;
if(minutes <= 0 ){
    bell.play();

    minutes = 25;
  

}
}

function secondsTimer(){
    seconds--;
    document.getElementById('seconds').innerHTML = seconds;
if (seconds <= 00){
    seconds = 60;
}
}
}

