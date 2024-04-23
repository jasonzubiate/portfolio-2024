export async function fetchWeather() {
  const url =
    "https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=37.81021&lon=-122.42282&language=en&units=auto";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6bea268cc7mshebc7815749959c5p1787f3jsn9c4d98aca92a",
      "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
   return result;
  } catch (error) {
    console.error(error);
  }
}
