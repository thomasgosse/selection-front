import axios from 'axios';

const token = 'Bearer '.concat('BQDYtt0LaT7dsi9wkwpE_IPUvu7uD9w5whdlGv95c9JcpWItC3mbKazayDHeozTYqUFCJFIJCqOduEoVQiU');

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
