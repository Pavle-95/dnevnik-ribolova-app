import { fetchData } from "./Api";

// Geting Lakes from BackEnd
export async function getLakes(searchQuery, bearerToken) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    },
    body: JSON.stringify({
      type: searchQuery.type,
      text: searchQuery.text
    }),
  };

  return fetchData('/getLakes', options)
}