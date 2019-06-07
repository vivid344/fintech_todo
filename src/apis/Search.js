import * as request from 'superagent';

export function searchAnime(input) {
  return request
    .get(`http://0.0.0.0:5000/search?name=${input}`)
    .then(response => {
      const body = response.body;
      return { body };
    })
    .catch(error => {
      return { error };
    });
}
