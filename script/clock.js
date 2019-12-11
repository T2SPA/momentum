const clockWrap = document.querySelector("#clock-js");
const clockText = clockWrap.querySelector("h1");

function getClock() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    function get2Digit(digit) {
        return digit < 10 ? `0${digit}` : `${digit}`;
    }

    return `${get2Digit(hours)}:${get2Digit(minutes)}:${get2Digit(seconds)}`;
}

function execute() {
    clockText.innerText = getClock();

    setInterval(() => {
        clockText.innerText = getClock();
    }, 1000);
}

execute();