import { jwtDecode } from "jwt-decode";

const BASE_URL = "https://reeltrouble.dataduck.dk/api/";
const LOGIN_ENDPOINT = "auth/login";
const REGISTER_ENDPOINT = "auth/register";
const ADMIN_ENDPOINT = "admin";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const getUsername = () => {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.username || decoded.sub || decoded.name || null;
  } catch (e) {
    console.error("Failed to decode token", e);
    return null;
  }
};

const getUserId = () => {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.userId || decoded.sub || decoded.name || null;
  } catch (e) {
    console.error("Failed to decode token", e);
    return null;
  }
};

/* Insert utility-methods from later steps 
here (REMEMBER to uncomment in the returned 
object when you do)*/
//Step 6
const setToken = (token) => {
  localStorage.setItem("jwtToken", token);
};
const getToken = () => {
  return localStorage.getItem("jwtToken");
};
const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
};
const logout = () => {
  localStorage.removeItem("jwtToken");
};

//Step 7
const login = (user, password) => {
  const options = makeOptions("POST", false, {
    username: user,
    password: password,
  });
  return fetch(BASE_URL + LOGIN_ENDPOINT, options)
    .then(handleHttpErrors)
    .then((res) => {
      setToken(res.token);
    });
};

const register = (user, password) => {
  const options = makeOptions("POST", false, {
    username: user,
    password: password,
  });
  return fetch(BASE_URL + REGISTER_ENDPOINT, options)
    .then(handleHttpErrors)
    .then((res) => {
      setToken(res.token);
    });
};

//Step 11
const fetchData = () => {
  const options = makeOptions("GET", true); //True add's the token
  return fetch(BASE_URL + "movies", options).then(handleHttpErrors);
};

const makeOptions = (method, addToken, body) => {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (addToken && loggedIn()) {
    opts.headers["Authorization"] = `Bearer ${getToken()}`;
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
};

const facade = {
  makeOptions,
  setToken,
  getToken,
  loggedIn,
  login,
  register,
  logout,
  fetchData,
  getUsername,
};

export default facade;
