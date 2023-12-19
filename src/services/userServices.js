import { fetchData } from './Api.js'

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

export async function updateUser(inputNewUser) {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputNewUser),
  };

  return fetchData('/updateUser', options)
}

export async function updateImage(userImage, userId) {

  const formData = new FormData();
  formData.append('img', userImage);
  formData.append('userId', userId);

  const options = {
    method: 'POST',
    body: formData,
  };

  return fetchData('/updateImage', options);
}