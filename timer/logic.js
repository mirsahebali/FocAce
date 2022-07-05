var minutes = 25;
var seconds = "00";
var sessions = 0;
var click = new Audio("C:/Users/mirsa/OneDrive/Desktop/FocAce/click.wav");
var bell = new Audio("C:/Users/mirsa/OneDrive/Desktop/FocAce/bell.wav");
var bell2 = new Audio("C:/Users/mirsa/OneDrive/Desktop/FocAce/bell2.wav");
function template() {
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  minutesTimer();
  secondsTimer();
  focusSession();
  breakTimer();
}

function start() {
  click.play();

  minutes = 24;
  seconds = 59;

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  var minutesInterval = setInterval(minutesTimer, 60000);
  var secondsInterval = setInterval(secondsTimer, 1000);

  var focusInterval = setInterval(focusSession, 25 * 60000);
  var breakInterval = setInterval(breakTimer, 5 * 60000);

  function focusSession() {
    if (minutes <= 0) {
      console.log("session done");
      minutes = 5;
      breakTimer();
      var done = true;
    }
  }

  function breakTimer() {
    if (minutes <= 0) {
      console.log("break over");
      minutes = 25;
      focusSession();
      var done = false;
    }
  }

  function minutesTimer() {
      var initialtime = minutes;
    minutes--;
    document.getElementById("minutes").innerHTML = minutes;
    if (minutes <= 0) {
      bell.play();
if (initialtime === 24){
    minutes = 5 ;
    
}else{
    minutes = 25;
}
     
    }
  }

  function secondsTimer() {
    seconds--;
    document.getElementById("seconds").innerHTML = seconds;
    if (seconds <= 00) {
      seconds = 60;
    }
  }
}
