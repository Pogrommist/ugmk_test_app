import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const HomeChart = ({ data, handleClick }) => {
  return (
      <BarChart width={800} height={800} data={data} onClick={handleClick}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="product1" fill="#8884d8" />
        <Bar dataKey="product2" fill="#82ca9d" />
      </BarChart>
  )
}

export default HomeChart