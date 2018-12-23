import axios from 'axios';

const token = '';

const discogsClient = axios.create({
  headers: {
    Authorization: `Discogs token=${token}`,
  },
});

export async function getSearchResult(search) {
  return discogsClient
    .get(`https://api.discogs.com/database/search?q=${search}`)
    .then(response => response.data);
}

export async function getUri(uri) {
  discogsClient.get(uri)
    .then(response => response.data);
}
