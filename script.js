
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const themeButtons = document.getElementById("themeButton");

function updateClock() {

const now = new Date();

 let hours = now.getHours();

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

 const ampm = hours >= 12 ? "PM" : "AM";

 hours = hours % 12;

hours = hours === 0 ? 12 : hours;

const formattedHours = String(hours).padStart(2, "0");

    const formattedMinutes = String(minutes).padStart(2, "0");

    const formattedSeconds = String(seconds).padStart(2, "0");


 // Display time

    timeElement.textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;


    // Display date and day

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    dateElement.textContent =
        now.toLocaleDateString("en-US", options);

}


updateClock();

setInterval(updateClock, 1000);

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");
     
    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "Switch to Dark Mode";

    } else {

        themeButton.textContent = "Switch to Light Mode";
    }
});