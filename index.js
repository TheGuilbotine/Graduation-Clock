window.addEventListener("DOMContentLoaded", event => {
    var end = new Date("2021-09-17T20:30:00Z");
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    var clockDiv = document.querySelector(".clock-area__clock");

    function showRemaining() {
        var now = new Date();
        var timeLeft = end - now;
        if (timeLeft < 0) {
            clearInterval(timer);
            clockDiv.innerHTML = "<h1>GRaADUaATION!</h1> <h2>Can't say how much I will mis you all!!!! Good Luck with your prosperous futures.</h2>";
            return;
        }
        var days = Math.floor(timeLeft / _day);
        var hours = Math.floor((timeLeft % _day) / _hour);
        var minutes = Math.floor((timeLeft % _hour) / _minute);
        var seconds = Math.floor((timeLeft % _minute) / _second);

        clockDiv.innerHTML = days + 'days ';
        clockDiv.innerHTML += hours + 'hrs ';
        clockDiv.innerHTML += minutes + 'mins ';
        clockDiv.innerHTML += seconds + 'secs';

        // if (days) {
        //     clockDiv.innerHTML = days + 'days ';
        //     clockDiv.innerHTML += hours + 'hrs ';
        //     clockDiv.innerHTML += minutes + 'mins ';
        //     clockDiv.innerHTML += seconds + 'secs';
        // }
        // if (!days) {
        //     clockDiv.innerHTML = hours + 'hrs ';
        //     clockDiv.innerHTML += minutes + 'mins ';
        //     clockDiv.innerHTML += seconds + 'secs';
        // }
        // if (!hours) {
        //     clockDiv.innerHTML = minutes + 'mins ';
        //     clockDiv.innerHTML += seconds + 'secs';
        // }
        // if (!minutes) {
        //     clockDiv.innerHTML = seconds + 'secs';
        // }
    }
    timer = setInterval(showRemaining, 1000);

    // const background = document.querySelector("body");
    // background.innerHTML("./episode6ceremony.jpg");
});




// window.addEventListener("DOMContentLoaded", event => {
//     const time = () => {
//         const date = new Date();
//         const seconds = date.getSeconds();
//         const minutes = date.getMinutes();
//         const hours = date.getHours();
//         const days = date.getDay();
//         clockDiv.innerHTML = `time is ${hours}:${minutes}:${seconds}`;
//     }
//     setInterval(time, 1000);
// });
