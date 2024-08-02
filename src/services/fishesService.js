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

// get Single Fish 
export async function getFish(fish_id, bearerToken) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    },
    body: JSON.stringify({
      single_fish_id: fish_id
    })
  };

  return fetchData('/getFish', options)
}