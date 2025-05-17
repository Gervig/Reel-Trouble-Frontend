export function fetchData(url, callback, method, body) {
  const headers = { Accept: "application/json" };

  // Tilføj Content-Type header for POST og PUT
  if (method === "POST" || method === "PUT") {
    headers["Content-Type"] = "application/json";
  }

  // Tilføj Authorization header, hvis token findes
  const token = localStorage.getItem("jwtToken");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() });
      }
      return res.json();
    })
    .then((data) => callback(data))
    .catch((err) => {
      if (err.status) {
        err.fullError.then((e) => console.log(e.detail));
      } else {
        console.log(err);
      }
    });
}
