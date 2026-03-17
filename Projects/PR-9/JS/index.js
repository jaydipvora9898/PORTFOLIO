let container = document.querySelector('.container');
let search = document.querySelector('.search-box button');
let weatherBox = document.querySelector('.weather-box');
let weatherDetails = document.querySelector('.weather-details');
let notFound = document.querySelector('.not-found');
let humidity = document.querySelector('.info-humidity span');
let wind = document.querySelector('.info-wind span');

search.addEventListener('click', () => {
    let inputField = document.querySelector('.search-box input');
    let city = inputField.value.trim();

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=490bd695fc50da543a184ab5d5e61db3`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                container.style.height = '400px';
                weatherBox.classList.remove('active');
                weatherDetails.classList.remove('active');
                notFound.classList.add('active');
                inputField.value = '';
                return;
            }

            container.style.height = '555px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            notFound.classList.remove('active');

            let image = document.querySelector('.weather-box img');
            let temperature = document.querySelector('.weather-box .temperature');
            let description = document.querySelector('.weather-box .description');

            switch (data.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;
                case 'Mist':
                case 'Haze':
                    image.src = 'images/mist.png';
                    break;
                default:
                    image.src = 'images/cloud.png';
                    break;
            }

            temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
            description.innerHTML = data.weather[0].description;
            humidity.innerHTML = `${data.main.humidity}%`;
            wind.innerHTML = `${parseInt(data.wind.speed)}km/h`;

            inputField.value = '';
        });
});
