import { fetchData } from "./Api";

export async function getCurrentWeather(location, bearerToken) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    },
    body: JSON.stringify({
      location: location
    }),
  };

  return fetchData('/getCurrentWather', options)
}

