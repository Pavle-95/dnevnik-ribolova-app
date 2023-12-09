const BASE_URL = 'http://localhost:5713';

async function fetchData(url, options) {
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

// Export For Register User
export async function registerUser(inputName, inputEmail, inputPassword) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName: inputName,
      email: inputEmail,
      password: inputPassword,
    }),
  };

  return fetchData('/register', options);
}

export async function loginUser(inputEmail, inputPassword) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: inputEmail,
      password: inputPassword,
    }),
  };

  return fetchData('/login', options)
}

export async function topThreeCatches(token) {
  console.log(token);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  };

  return fetchData('/topThree', options)
}