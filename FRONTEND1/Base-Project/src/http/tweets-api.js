async function fetchFormData(path, { body, method }) {
  const token = localStorage.getItem("token");
  const headers = new Headers();
  if (token) {
    headers.append("Authorization", token);
  }

  return await fetch(path, { method, headers, body });
}

async function postTweet(data) {
  const body = new FormData();
  body.append("text", data[0].value);
  body.append("image", data[1].value);

  return await fetchFormData("http://localhost:4000/", {
    method: "POST",
    body,
  });
}

export { postTweet };
