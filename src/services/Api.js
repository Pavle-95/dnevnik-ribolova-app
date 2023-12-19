const BASE_URL = 'http://localhost:5713';

export async function fetchData(url, options) {
  try {
      const response = await fetch(`${BASE_URL}${url}`, options);
      const data = await response.json();
    return data;
  } catch (error) {
      // Handle errors or throw an exception
      console.error('Error fetching data:', error);
    throw error;
  }
}


export async function topThreeCatches(token) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  };

  return fetchData('/topThree', options)
}