export default async function processData(data) {
  const city = data.name;
  const countryCode = data.sys.country;
  const feelsLike = data.main.feels_like;

  return {
    city,
    countryCode,
    feelsLike,
  };
}
