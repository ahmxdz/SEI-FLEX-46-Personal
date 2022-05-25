import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  .then(({ token }) => {
    tokenService.setToken(token);
  })

}

function login(user) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(res => console.log(res));
}

// return logged in user based on the token
function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

export default {
  signup,
  login, 
  getUser,
  logout
};