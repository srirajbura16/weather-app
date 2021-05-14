export default function processData(data) {
  const sky = data.weather[0].main;
  const description = data.weather[0].description;
  const temp = data.main.temp;
  const feelsLike = data.main.feels_like;

  const city = data.name;
  const country = data.sys.country;

  const icon = data.weather[0].icon;

  return {
    sky,
    description,
    temp,
    feelsLike,
    city,
    country,
    icon,
  };
}
