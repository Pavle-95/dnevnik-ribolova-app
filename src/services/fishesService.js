import { fetchData } from "./Api";

export async function getFishes(searchQuery, bearerToken) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    },
    body: JSON.stringify({
      type: searchQuery.type,
      text: searchQuery.text
    })
  };

  return fetchData('/getFishes', options)
}