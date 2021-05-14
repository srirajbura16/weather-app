export default async function fetchData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1f965b90a13724999861d4a7c8433f55`,
    { mode: 'cors' }
  );
  const data = await response.json();

  return data;
}
