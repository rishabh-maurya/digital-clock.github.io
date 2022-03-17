const time = document.getElementById("time");
const ampm = document.getElementById("ampm");

let abrevationAmPm = (hours) => {
    if(hours >= 12) {
        return "pm";
    }
    else {
        return "am";
    }
}

// let showTime = () => {
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     const abrevation = abrevationAmPm(hours);

//     time.innerText = `${hours} : ${minutes} : ${seconds}`;
//     ampm.innerText = `${abrevation}`;
// }


setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let abrevation = abrevationAmPm(hours);

    if(hours >= 12) {
        hours -= 12;
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    time.innerText = `${hours} : ${minutes} : ${seconds}`;
    ampm.innerText = `${abrevation}`;
}, 1000);



