const axios = require('axios');

const key = require('./credentials.js').apiKey;

const makeApiCall = () => {
  axios.get(`http://api.giphy.com/v1/gifs/search`, {
    params: {
      api_key: key,
      q: 'dog',
      limit: 1,
      fmt: 'json'
    }
  })
    .then(res => {
      console.log('what is ', res.data.data[0].images.looping);
    })
    .catch(err => {
      console.log('error');
    });
}

makeApiCall();
