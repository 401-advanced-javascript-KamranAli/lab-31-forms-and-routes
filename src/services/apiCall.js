
const apiCall = (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(result => result);
};

export default apiCall;
