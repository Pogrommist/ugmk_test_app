import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const HomeChart = ({ data, handleClick, filter }) => {
  const transformedData = Object.entries(data).map(([month, productData]) => ({
    month,
    ...productData,
  }));
  
  const width = Math.min(window.innerWidth, 1280)
  const height= Math.min(window.innerHeight, 768)

  const Bars = () => { 
    switch (filter) {
      case 'all': 
        return (
          <>
            <Bar dataKey="factory_1Products_all" fill="#FF0000" name='Фабрика 1' />
            <Bar dataKey="factory_2Products_all" fill="#0000FF" name='Фабрика 2'/>
          </>
        )
      case 'product1':
        return (
          <>
            <Bar dataKey="factory_1Products1" fill="#FF0000" name='Фабрика 1' />
            <Bar dataKey="factory_2Products1" fill="#0000FF" name='Фабрика 2'/>
          </>
        )
      case 'product2':
        return (
          <>
            <Bar dataKey="factory_1Products2" fill="#FF0000" name='Фабрика 1' />
            <Bar dataKey="factory_2Products2" fill="#0000FF" name='Фабрика 2'/>
          </>
        )
        default:
          return (
            <>
              <Bar dataKey="factory_1Products_all" fill="#FF0000" name='Фабрика 1' />
              <Bar dataKey="factory_2Products_all" fill="#FF0000" name='Фабрика 1'/>
            </>
          )
    }
  }

  return (
      <BarChart width={width} height={height} data={transformedData} onClick={handleClick}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        {
          Bars()
        }
      </BarChart>
  )
}

export default HomeChart