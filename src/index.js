import displayDOM from './displayDOM';
import fetchData from './fetchWeatherData';
import getCurrentCity from './getCurrentCity';
import processData from './processData';

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.querySelector('.city-input').value;

  showWeather(city);

  e.target.reset();
});

async function displayCurrentCity(position) {
  const city = await getCurrentCity(position);
  showWeather(city);
}

window.onload = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayCurrentCity);
  }
};

async function showWeather(city) {
  const data = await fetchData(city);
  const weatherData = processData(data);
  displayDOM(weatherData);
}

showWeather('toronto');
