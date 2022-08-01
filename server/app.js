const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3050;

const baseURL = 'https://api.mercadolibre.com/';

app.use(cors());

app.get('/api/items', (req, res) => {
  const query = req.query.q || '';
  axios
    .get(`${baseURL}/sites/MLA/search?q=${query}`)
    .then((response) => res.json(response.data))
    .catch((error) => res.json(error));
});

app.get('/api/items/:id', (req, res) => {
  const itemId = req.params.id || '';
  axios
    .get(`${baseURL}/items/${itemId}`)
    .then((response) => res.json(response.data))
    .catch((error) => res.json(error));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
