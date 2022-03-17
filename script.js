const showHours = document.getElementById("hours");
const showMinutes = document.getElementById("minutes");
const showSeconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
const showDay = document.getElementById("showDay");
const showDate = document.getElementById("showDate");
const showMonth = document.getElementById("showMonth");
const showYear = document.getElementById("showYear");

// weekday and months
const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let abbreviationAmPm = (hours) => {
    if(hours >= 12) {
        return "pm";
    }
    else {
        return "am";
    }
}

let isLessThan10 = (value) => {
    if(value < 10) {
        return "0" + value;
    }
    else {
        return value;
    }
}

setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = isLessThan10(date.getMinutes());
    let seconds = isLessThan10(date.getSeconds());
    let abbreviation = abbreviationAmPm(hours);
    let day = weekday[date.getDay()-1];
    let datee = isLessThan10(date.getDate());
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    if(hours >= 12) {
        hours -= 12;
    }
    hours = isLessThan10(hours);

    showHours.innerText = `${hours} :`;
    showMinutes.innerText = `${minutes} :`;
    showSeconds.innerText = `${seconds}`;
    ampm.innerText = `${abbreviation}`;
    showDay.innerText = `${day}`;
    showDate.innerText = `${datee}`;
    showMonth.innerText = `${month}`;
    showYear.innerText = `${year}`;
}, 1000);



