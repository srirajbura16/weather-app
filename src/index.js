import getWeatherData from './weatherData';
import processData from './processData';
import displayDOM from './displayDOM';
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  const city = document.querySelector('.city-input').value;
  getWeatherData(city)
    .then(weatherData => {
      console.log(weatherData);
      return processData(weatherData);
    })
    .then(data => {
      displayDOM(data);
    })
    .catch(err => {
      console.log(err);
    });
});
