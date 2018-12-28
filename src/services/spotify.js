import axios from 'axios';

const token = 'Bearer '.concat('BQBKO0h9f-Qjan6Z5Nf6_T3iGQImPyEnDR741TyA6jNP4UnyGiRdk6814SmA67BVnqN6cO5ZNbj2QnuNehI');

export async function getSearchResult(search) {
  return axios
    .get(`https://api.spotify.com/v1/search?q=${search}&type=artist`,
      { headers: {
        Authorization: token,
      } })
    .then(response => response.data);
}

export async function getUri(uri) {
  axios.get(uri)
    .then(response => response.data);
}
