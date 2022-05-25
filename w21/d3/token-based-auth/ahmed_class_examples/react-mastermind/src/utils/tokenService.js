const TOKEN_STORAGE_KEY = 'token'

function setToken(token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token)
}

function getTokenPayload() {
    let token = localStorage.getItem(TOKEN_STORAGE_KEY)
    if (token) {
        return JSON.parse(atob(token.split('.')[1]))
    }
    return {}
}

// gets token and remove expired token from localStorage
function getToken() {
    let token = localStorage.getItem(TOKEN_STORAGE_KEY)
    if (token) {
        const payload = getTokenPayload();
        console.log(payload);

        // remove token from local storage if expired
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem(TOKEN_STORAGE_KEY);
            token = null;
        }
    }
    return token;
}

function getUserFromToken() {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY)
    return token ? getTokenPayload().user : null
}

function removeToken() {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
}

export default {
    setToken,
    getUserFromToken,
    removeToken
}