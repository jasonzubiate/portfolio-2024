import { fetchWeather } from "@/lib";

export function getLocalTime() {
  const date = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  } as Intl.DateTimeFormatOptions;

  const timeZone = "America/Los_Angeles";
  const losAngelesTime = date.toLocaleTimeString("en-US", {
    ...options,
    timeZone,
  });

  return losAngelesTime;
}

export async function renderWeatherIcon() {
  const weather = await fetchWeather();
  switch (weather) {
    case "sunny":
      return "☀️";
    case "partly_sunny":
      return "🌤️";
    case "mostly_cloudy":
      return "☁️";
    case "cloudy":
      return "☁️";
    case "light_rain":
      return "🌧️";
    case "rain_shower":
      return "🌦️";
    default:
      return "☀️"; // Default to sunny if weather type is unknown
  }
}
