export default function displayDOM(weather) {
  const root = document.querySelector('#root');
  root.innerHTML = '';
  console.log(weather);

  //Location
  const location = document.createElement('h1');
  location.textContent = `${weather.city}, ${weather.country}`;

  //weather
  const main = document.createElement('div');
  main.classList.add('main');

  //weather icon
  const weatherIcon = document.createElement('img');
  weatherIcon.classList.add('icon');
  weatherIcon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  const temp = document.createElement('span');
  temp.classList.add('temp');
  temp.textContent = weather.temp + '℃';

  main.append(weatherIcon, temp);

  //weather information
  const info = document.createElement('p');
  info.textContent = `feels like ${weather.feelsLike}℃. ${weather.description}.`;

  root.append(location, main, info);
}
