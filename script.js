const key = "495df22fce9ce667d5acabb021f68d59";
const URL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const city = document.querySelector(".inpt");
const btn = document.querySelector(".srch-img");
const condition = document.querySelector(".sub2-img");


async function checkWeather(city) {
    const response = await fetch(`${URL}${city}&appid=${key}`);
    const data = await response.json();

    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = city;
    document.querySelector(".wind-txt").innerHTML = data.wind.speed;
    document.querySelector(".humi-txt").innerHTML = data.main.humidity;

    if(data.weather[0].main === 'Rain') {
        condition.src = "rain.png";
    }else if (data.weather[0].main === 'Clear') {
        condition.src = "clear.png";
    }else if (data.weather[0].main === 'Clouds') {
        condition.src = "clouds.png";
    }else if (data.weather[0].main === 'Drizzle') {
        condition.src = "drizzle.png";
    }else if (data.weather[0].main === 'Snow') {
        condition.src = "snow.png";
    }else if (data.weather[0].main === 'Mist') {
        condition.src = "mist.png";
    }
}

btn.addEventListener('click',() => {
    checkWeather(city.value);
});
