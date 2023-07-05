import React from "react"
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { COLORS } from "./constants";

const DetailsChart = ({ products }) => {
  const width = Math.min(window.innerWidth, 1280)
  const height= Math.min(window.innerHeight, 768)

  const renderPie = () => {
    return (
      <Pie 
        data={products.data} 
        dataKey="total" 
        nameKey="label" 
        cx="50%" 
        cy="50%" 
        outerRadius={Math.min(window.innerWidth, 800) / 4}
        label
      >
        {
          products?.data?.map((productItem, index) => (
            <Cell key={index} name={productItem.label} fill={COLORS[index % COLORS.length]} />
          ))
        }
      </Pie>
    )
  }

  return(
    <PieChart width={width} height={height} data={products?.data}>
      {
        renderPie()
      }
        <Tooltip 
          formatter={(value) => `${value}, тонн`}
        />
        <Legend />
    </PieChart>
  )
}

export default DetailsChart