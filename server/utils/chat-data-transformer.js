
const { format, parse } = require('date-fns'); 
const { ru } = require('date-fns/locale');
const { groupBy, sumBy } = require('lodash');
const { monthOrder } = require('./constants');

const groupByMonth = data => {
  const grouped = groupBy(data, item => {
    if (item.date !== null && item.date !== '') {
      const parsed = parse(item.date, 'dd/MM/yyyy', new Date(), { locale: ru })
      item.month = new Date(parsed).getMonth() + 1
      return format(parsed, 'LLLL', { locale: ru })
    }
  })

  const result = {}
  for (const key in grouped) {
    if (key !== 'undefined') {
      const value = grouped[key]
      const factory_1Products = value.filter(item => item.factory_id === 1)
      const factory_2Products = value.filter(item => item.factory_id === 2)

      const factory_1Products1 = sumBy(factory_1Products, 'product1')
      const factory_1Products2 = sumBy(factory_1Products, 'product2')
      const factory_1Products_all = factory_1Products1 + factory_1Products2

      const factory_2Products1 = sumBy(factory_2Products, 'product1')
      const factory_2Products2 = sumBy(factory_2Products, 'product2')
      const factory_2Products_all = factory_2Products1 + factory_2Products2

      result[key] = {
        factory_1Products1,
        factory_1Products2,
        factory_1Products_all,
        factory_2Products1,
        factory_2Products2,
        factory_2Products_all
      }
    } 

  }

  return sortByMonth(result)
}

const sortByMonth = (data) => {
  return Object.fromEntries(
    Object.entries(data).sort(([firstVal], [secondVal]) => monthOrder[firstVal] - monthOrder[secondVal])
  )
}

module.exports = {
  groupByMonth
};