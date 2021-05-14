import fetchData from './fetchWeatherData';
import processData from './processData';
import displayDOM from './displayDOM';
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  const city = document.querySelector('.city-input').value;

  showWeather(city);

  e.target.reset();
});

async function showWeather(city) {
  const data = await fetchData(city);
  const weatherData = processData(data);
  displayDOM(weatherData);
}
