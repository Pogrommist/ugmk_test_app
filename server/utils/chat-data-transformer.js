
const { format, parse } = require('date-fns'); 
const { ru } = require('date-fns/locale');
const { groupBy, sumBy } = require('lodash');

const groupByMonth = data => {
  const grouped = groupBy(data, item => {
    if (item.date !== null && item.date !== '') {
      const parsed = parse(item.date, 'dd/MM/yyyy', new Date(), { locale: ru })
      item.month = new Date(parsed).getMonth()
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
    Object.entries(data).sort(([firstVal], [secondVal]) => {
      const monthOrder = {
        январь: 0,
        февраль: 1,
        март: 2,
        апрель: 3,
        май: 4,
        июнь: 5,
        июль: 6,
        август: 7,
        сентябрь: 8,
        октябрь: 9,
        ноябрь: 10,
        декабрь: 11
      };
  
      return monthOrder[firstVal] - monthOrder[secondVal];
    })
  )
}


module.exports = {
  groupByMonth
};