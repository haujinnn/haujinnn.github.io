const timeleft = document.querySelector(".timer-container"),
    clockT = timeleft.querySelector(".timer"),
    clockshow = clockT.querySelector("#display"),
    add1m_button = document.querySelector(".add1m"),
    add10m_button = document.querySelector(".add10m"),
    start_button = document.querySelector(".start"),
    stop_button = document.querySelector(".stop"),
    reset_button = document.querySelector(".reset")
    ;

let totalS = 0,
    min = 0,
    sec = 0;

function showClock (total) {
    let min = parseInt(total / 60);
    let sec = total % 60;    
    clockshow.innerText = `${
        min < 10 ? `0${min}` : min}:${
        sec < 10 ? `0${sec}` : sec
    }`;    
}

add1m_button.addEventListener("click", () => {
    totalS += 60;    
    showClock (totalS);
});

add10m_button.addEventListener("click", () => {
    totalS += 600;    
    showClock (totalS);
});


var clockInterval = null;

start_button.addEventListener("click", () => {
    clockInterval = setInterval(() => {
        totalS = totalS - 1;
        showClock(totalS);
        if (totalS <= 0) {
            totalS = 0;
            clockshow.innerText = "00:00";
        }
    }, 1000);
    start_button.hidden = true;
});

stop_button.addEventListener("click", () => {
    clearInterval(clockInterval);
    start_button.hidden = false;
});

reset_button.addEventListener("click", () => {
    if (clockInterval != null){
        clearInterval(clockInterval);
        totalS = 0;
        clockshow.innerText = "00:00";
    } else {
        totalS = 0;
        clockshow.innerText = "00:00";
    }
    start_button.hidden = false;
});