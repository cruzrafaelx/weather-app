const apiKey = "0044f30bf7a7caeaa0381a43c2222d02";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;
const text = document.querySelector("input")
const button = document.querySelector("button")



async function fetchWeatherData(city) {
    const response = await fetch(apiUrl + `&q=${city}`);
    const data = await response.json();
    console.log(data) 
  
    document.querySelector(".weather-icon").src = "images/" + data.weather[0].main + ".png"
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h"

}

button.addEventListener("click", () => {
    fetchWeatherData(text.value);
})

text.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        fetchWeatherData(text.value)
    }
})