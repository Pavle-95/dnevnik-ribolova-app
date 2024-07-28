import { fetchData } from "./Api";

// Geting Lakes from BackEnd
export async function getWaters(searchQuery, bearerToken) {
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

  return fetchData('/getWaters', options)
}

// Geting single Water for backend
export async function getSingleWater(water_id, bearerToken) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    },
    body: JSON.stringify({
      single_water_id: water_id
    })
  };

  return fetchData('/getSingleWater', options)
}