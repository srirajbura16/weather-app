export default async function getCurrentCity(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const GET_CITY = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}.42159&longitude=${longitude}.0837&localityLanguage=en
  `;

  const fetchCity = await fetch(GET_CITY, { mode: 'cors' });
  let city = await fetchCity.json();

  city = city.localityInfo.administrative[4].name;
  return city;
}
