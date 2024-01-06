export default async function getData(val) {
  try {
    const location = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=02acb9e290594790a2995550231412&q=${val}&aqi=no`
    );
    const parsedLocation = await location.json();
    return parsedLocation;
  } catch (err) {
    return err;
  }
}
