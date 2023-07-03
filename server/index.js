const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const { groupByMonth } = require('./utils/chat-data-transformer.js')
const port = 3001
const app = express()

let products = [];

fs.createReadStream('products.csv')
  .pipe(csv())
  .on('data', (data) => {
    const { id, factory_id, date, product1, product2 } = data
    products.push({
      id: parseFloat(id, 10),
      factory_id: parseFloat(factory_id, 10),
      date,
      product1: parseFloat(product1, 10),
      product2: parseFloat(product2, 10)
    })
  })
  .on('end', () => {
    products = groupByMonth(products)
    console.log('CSV file parsed successfully');
  });

app.get('/products', (req, res) => {
  res.json(products)
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

