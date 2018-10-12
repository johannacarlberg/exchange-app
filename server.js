const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/getExchangeRates', (req, res) => {
  res.send({ rates: 'This is exchange rates' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
