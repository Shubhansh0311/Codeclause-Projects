const timers = document.querySelector(".stopwatch");

var hr = 0;
var min = 0;
var sec = 0;
var stop_time = true;


function Start_time() {
    if (stop_time == true) {
        stop_time = false;
        Timer();

    }
}
function Stop_time() {
    if (stop_time == false) {
        stop_time = true;


    }
}
function Timer() {
    if (stop_time == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;
        if (sec == 60) {
            min = min + 1;
            sec = 0;

        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;


        }
        if (sec < 10) { sec = "0" + sec; }
        if (min < 10) { min = "0" + min; }
        if (hr < 10) { hr = "0" + hr; }
        timers.innerHTML = hr + ":" + min + ":" + sec;
        setTimeout("Timer()", 1000);
    }
}
function Reset_time() {
    timers.innerHTML = "00:00:00"
    
    stop_time = true;
    hr = 0;
    min = 0;
    sec = 0;


}
