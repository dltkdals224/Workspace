//af9dcb9a6123c619eda0ef0d0800c6bf
const API_KEY = "af9dcb9a6123c619eda0ef0d0800c6bf";

function onGeoOK(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = `/Area : ${data.name}`;
        weather.innerText = `Weather : ${data.weather[0].main}`;
    }); //fetch는 promise. 작업이 좀 뒤에 일어난다.
}

function onGeoError() {
    alert("Can't find weather");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);
