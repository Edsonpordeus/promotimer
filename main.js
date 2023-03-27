const buttonPlay = document.querySelector("#buttonPlay")
const buttonPause = document.querySelector("#buttonPause")
const buttonStop = document.querySelector("#buttonStop")
const buttonTimer = document.querySelector("#buttonTimer")
const pomoSettings = document.querySelector(".pomoSettings")
const goButton = document.querySelector("#goButton")

let inputMinutes = document.querySelector("#inputMinutes");
let inputSeconds = document.querySelector("#inputSeconds");
let inputMinutesRest = document.querySelector("#inputMinutesRest")
let inputSecondsRest = document.querySelector("#inputSecondsRest")
let timeDisplay = document.querySelector(".time")

var minutes
var seconds
let interval

var stopTime

let contSessions = document.querySelector(".contSessions")
let cont = 0

const timeOutAlert = new Audio("./sounds/bits.ogg")

buttonPlay.addEventListener("click", hidePlay)
buttonPause.addEventListener("click", hidePause)
buttonTimer.addEventListener("click", hideSettings)
goButton.addEventListener("click", setTimeOnDisplay)



// funtions

function hidePlay(){   
    
   function startTime() {
        interval = setInterval (() => {

            if (seconds <= 0){
                seconds = 60;

            } if (minutes === undefined){
                alert("Preenche, porra!");
                hidePause();
                              
            } 

            seconds--;

            while (seconds == 0){
            seconds = 59;
            minutes--;
        }

        while ( minutes < 0 ) {  
            resetTimerDisplay();
            timeOutAlert.play();
            contSessions.innerHTML = cont+1;
            hidePause();
            return;
        }     
        
        
        timeDisplay.innerHTML = `${ minutes < 10 ? "0"+ minutes : minutes }:${ seconds < 10 ? "0"+ seconds : seconds }`;
        
    }, 1000)
};

startTime()



    buttonPause.classList.remove("hide")
    buttonPlay.classList.add("hide")

    inputMinutes.value = "";
    inputSeconds.value = "";
    

}


function hidePause(){
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")

    clearTimeout(interval);
}

function hideSettings(){
    pomoSettings.classList.toggle("hide")
}

function setTimeOnDisplay(){
    minutes = inputMinutes.value
    seconds = inputSeconds.value
    let minutesRest = inputMinutesRest.value
    let secondsRest = inputSecondsRest.value

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutesRest = minutesRest < 10 ? '0' + minutesRest : minutesRest;
    secondsRest = secondsRest < 10 ? '0' + secondsRest : secondsRest;
    
    timeDisplay.innerHTML = `${minutes}:${seconds}`

    hideSettings()
}

 function resetTimerDisplay() {
    timeDisplay.innerHTML = "00:00"
 }


// Efeitos

buttonStop.addEventListener('click', function() {

    buttonStop.style.transition = 'transform 0.1s ease-out';
    buttonStop.style.transform = 'scale(1.2)';

    setTimeout(function() {
      buttonStop.style.transition = 'transform 0.1s ease-in';
      buttonStop.style.transform = 'scale(1)';
    }, 500);

    clearTimeout(interval);

    buttonPlay.classList.remove("hide")  
    buttonPause.classList.add("hide") 

    resetTimerDisplay()
    
  });