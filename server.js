const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist')));

app.route('/api/rates/:baseRate').get((req, res) => {
  axios.request('https://api.exchangeratesapi.io/latest?base=' + req.params.baseRate)
  .then((response) => {
      res.send({ rates: response.data.rates });
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
});

app.listen(port, () => console.log(`Listening on port ${port}`));
