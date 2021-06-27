export default async function getCurrentCity(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const API_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}.42159&longitude=${longitude}.0837&localityLanguage=en
  `;

  const fetchCity = await fetch(API_URL, { mode: 'cors' });
  const data = await fetchCity.json();

  const city = data.localityInfo.administrative[4].name;
  return city;
}
