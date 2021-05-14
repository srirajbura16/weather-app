import getWeatherData from './weatherData';
import processData from './processData';
import displayDOM from './displayDOM';
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  const city = document.querySelector('.city-input').value;

  showWeather(city);

  e.target.reset();
});

async function showWeather(city) {
  const weatherData = await getWeatherData(city);
  const data = processData(weatherData);
  const displayData = displayDOM(data);
}
