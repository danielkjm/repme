const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  const url = 'https://api.propublica.org/congress/v1/115/senate/members.json';
  axios
    .get(url, {
      headers: { Authorization: 'D6RcdBv0VgQc7gVVFxUO97umVSHtbwgzUlywB67p ' }
    })
    .then(response => {
      // If request is good...
      console.log(response.data);
    })
    .catch(error => {
      console.log('error 3 ' + error);
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/index.html'));
});

app.listen(port, function() {
  console.log(`Your server, listening on port ${port}`);
});
