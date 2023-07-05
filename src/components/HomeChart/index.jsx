import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { COLORS } from '../../shared/constants';

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
            <Bar dataKey="factory_1Products_all" fill={COLORS.RED} name='Фабрика 1' onClick={handleClick} />
            <Bar dataKey="factory_2Products_all" fill={COLORS.BLUE} name='Фабрика 2' onClick={handleClick} />
          </>
        )
      case 'product1':
        return (
          <>
            <Bar dataKey="factory_1Products1" fill={COLORS.RED} name='Фабрика 1' onClick={handleClick} />
            <Bar dataKey="factory_2Products1" fill={COLORS.BLUE} name='Фабрика 2' onClick={handleClick} />
          </>
        )
      case 'product2':
        return (
          <>
            <Bar dataKey="factory_1Products2" fill={COLORS.RED} name='Фабрика 1' onClick={handleClick} />
            <Bar dataKey="factory_2Products2" fill={COLORS.BLUE} name='Фабрика 2' onClick={handleClick} />
          </>
        )
        default:
          return (
            <>
              <Bar dataKey="factory_1Products_all" fill={COLORS.RED} name='Фабрика 1' onClick={handleClick} />
              <Bar dataKey="factory_2Products_all" fill={COLORS.BLUE} name='Фабрика 1' onClick={handleClick} />
            </>
          )
    }
  }

  return (
      <BarChart width={width} height={height} data={transformedData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip cursor={false} formatter={(value) => `${value}, тонн`} />
        <Legend />
        {
          Bars()
        }
      </BarChart>
  )
}

export default HomeChart