const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3050;

const baseURL = 'https://api.mercadolibre.com/';

app.use(cors());

app.get('/api/items', (req, res) => {
  const query = req.query.q || '';
  let products = {};
  axios
    .get(`${baseURL}/sites/MLA/search?q=${query}`)
    .then((response) => {
      const data = response.data;
      const categories = data.available_filters.find(
        (filter) => filter.id == 'category'
      );
      products = {
        items: data.results.map((item) => ({
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
        })),
        categories: categories.values.map((category) => category.name),
      };

      res.json(products);
    })
    .catch((error) => res.json(error));
});

app.get('/api/items/:id', (req, res) => {
  const itemId = req.params.id || '';
  let item = {};
  axios
    .get(`${baseURL}/items/${itemId}`)
    .then((response) => {
      const dataItem = response.data;
      item = {
        id: dataItem.id,
        title: dataItem.title,
        price: {
          currency: dataItem.currency_id,
          amount: dataItem.price,
        },
        picture: dataItem.pictures[0].url,
        condition: dataItem.condition,
        free_shipping: dataItem.shipping.free_shipping,
        sold_quantity: dataItem.sold_quantity,
        category_id: dataItem.category_id,
      };
    })
    .then(() => {
      axios.get(`${baseURL}/items/${itemId}/description`).then((response) => {
        const dataDescription = response.data;
        item = {
          ...item,
          description: dataDescription.plain_text,
        };
        res.json(item);
      });
    })
    .catch((error) => res.json(error));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
