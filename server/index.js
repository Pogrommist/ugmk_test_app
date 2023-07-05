const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const cors = require('cors');

const { groupByMonth } = require('./utils/chat-data-transformer.js');
const { monthOrderReversed } = require('./utils/constants.js');

const port = 3001
const app = express()

const KILLOGRAMS_IN_TON = 1000

app.use(cors());

let products = [];

fs.createReadStream('products.csv')
  .pipe(csv())
  .on('data', (data) => {
    const { id, factory_id, date, product1, product2 } = data
    products.push({
      id: parseFloat(id, 10),
      factory_id: parseFloat(factory_id, 10),
      date,
      product1: (parseFloat(product1, 10) / KILLOGRAMS_IN_TON),
      product2: (parseFloat(product2, 10) / KILLOGRAMS_IN_TON)
    })
  })
  .on('end', () => {
    products = groupByMonth(products)
    console.log('CSV file parsed successfully');
  });

app.get('/products', (req, res) => {
  res.json(products)
});

app.get('/details/:factoryId/:monthNumber', (req, res) => {
  const { factoryId, monthNumber } = req.params
  const monthReadable = monthOrderReversed[monthNumber]
  const productsForMonth = products[monthReadable]
  
  const result = {
    month: monthReadable,
      data: [
        { label: 'Продукт1', total: productsForMonth[`factory_${factoryId}Products1`] },
        { label: 'Продукт2', total: productsForMonth[`factory_${factoryId}Products2`] },
      ]
  }
  
  res.json(result)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
