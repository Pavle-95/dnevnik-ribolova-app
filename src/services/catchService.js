import { fetchData } from "./Api";

// Adding List of cactch to backend
export async function addCatchList (catchList, bearerToken) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    },
    body: JSON.stringify({
      list: catchList
    }),
  };

  return fetchData('/addCatchList', options)
}
