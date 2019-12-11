const weatherWrap = document.querySelector("#weather-js");
const weatherOutput = weatherWrap.querySelector("span");

const API_KEY = "8e220cb68809ab8203c6d521d55c2016";
const COORDS = "coords";

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(response => {
        return response.json();
    }).then(json => {
        const temperature = json.main.temp
        const place = json.name;

        weatherOutput.innerText = `${temperature}℃ @ ${place}`;
    });
}

// function savePosition(position) {
//     localStorage.setItem(COORDS, JSON.stringify(position));
// }

function handleGeoSucces(position) {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const Position = {
       latitude,
       longitude
   };

   //savePosition(Position);
   getWeather(Position.latitude, Position.longitude);
}

function handleGeoError() {
    console.log("Can't access geolocation...!!");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    //const loadedCords = localStorage.getItem(COORDS);

    askForCoords();

    // if(loadedCords === null) {
    //     askForCoords();
    // } else {
    //     const parseCoords = JSON.parse(loadedCords);
    //     getWeather(parseCoords.latitude, parseCoords.longitude);
    // }
}

function execute() {
    loadCoords();
}

execute();