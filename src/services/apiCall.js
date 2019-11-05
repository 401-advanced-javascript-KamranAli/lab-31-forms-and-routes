
const apiCall = (searchQuery) => {

  let query = searchQuery;

  if(searchQuery !== 'random'){
    query = `?name=${searchQuery}`;
  }

  const url = `https://last-airbender-api.herokuapp.com/${query}`;
  return fetch(url)
    .then(res => res.json())
    .then(result => result);
};

export default apiCall;
