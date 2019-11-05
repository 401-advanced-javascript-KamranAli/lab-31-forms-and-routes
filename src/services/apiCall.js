
const apiCall = (queries) => {
  const url = `https://last-airbender-api.herokuapp.com/${queries}`
  return fetch(url)
    .then(res => res.json())
    .then(result => result);
};

export default apiCall;
