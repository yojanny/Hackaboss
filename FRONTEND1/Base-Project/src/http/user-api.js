const apiUrl = process.env.REACT_APP_BACKEND_URL;

const endpoints = {
  userEndpoint: "user/",
  userTweetsEndpoint: "tweets/",
  login: "login/",
};

const requestMethods = { post: "POST", get: "GET", put: "PUT" };

async function fetchUserApi(path, { body, method = requestMethods.get }) {
  const token = localStorage.getItem("token");

  // Creamos un nuevo objeto de headers
  const headers = new Headers({ "Content-Type": "application/json" });
  if (token) {
    // Añadimosun header extra de autenticacion, token
    headers.append("Authorization", token);
  }

  const request = await fetch(path, {
    headers,
    method,
    body: JSON.stringify(body),
  });
  return request.json();
}

async function getUser(id = 1) {
  /* 
    Este codigo es equivalente al de abajo
    return fetch(`${apiUrl}${userEndpoint}${id}`).then((request) => {
      return request.json();
    }); 

  
    const request = await fetch(`${apiUrl}${userEndpoint}${id}`);
    const userPromise = request.json();
    return userPromise;
  */
  return fetchUserApi(`${apiUrl}${endpoints.userEndpoint}${id}`, {});
}

async function getUserTweets(id = 1) {
  return fetchUserApi(
    `${apiUrl}${endpoints.userEndpoint}${id}/${endpoints.userTweetsEndpoint}`,
    {}
  );
}

async function postLogin({ email = "ivan@yo.com", password = "test" }) {
  console.log("login");
  return fetchUserApi(`${apiUrl}${endpoints.login}`, {
    method: requestMethods.post,
    body: {
      email,
      password,
    },
  });
}

export { getUser, getUserTweets, postLogin };
