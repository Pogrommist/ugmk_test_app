import React, { useState } from "react"
import Select from 'react-select'
import { useNavigate } from "react-router"

import useProducts from "../../services/hooks/useProducts"
import HomeChart from "../../components/HomeChart"
import useLocalStorage from "../../services/hooks/useLocalStorage"
import { monthOrder } from "./constants"

import './style.css'
import { factoryIds } from "../../shared/constants"

const selectOptions = [
  { value: 'all', label: 'Все' },
  { value: 'product1', label: 'Продукт 1' },
  { value: 'product2', label: 'Продукт 2' }
]

const HomePage = () => {
  const [products] = useProducts()
  const [filterLocal, setFilterLocal] = useLocalStorage('filter', 'all')
  const [filter, setFilter] = useState(filterLocal)
  const navigate = useNavigate()

  const handleChartItemClick = data => {
    const { month } = data?.tooltipPayload[0]?.payload
    const monthFromatted = monthOrder[month]
    const factoryId = factoryIds[data?.tooltipPayload[0]?.name]
    
    if (typeof monthFromatted !== 'undefined' && typeof factoryId !== 'undefined') navigate(`/details/${factoryId}/${monthFromatted}`)
  }

  const handleFilterChange = data => {
    const { value } = data
    setFilter(value)
    setFilterLocal(value)
  }

  return(
    <div className="homepage-container">
      <div className="homepage-filter">
        <span>Фильтр по типу продукции</span>
        <Select 
          options={selectOptions} 
          onChange={handleFilterChange} 
          value={selectOptions.find(option => option.value === filter)}
          className="homepage__select"
        />
      </div>
      <div className="homepage-chart">
        <HomeChart data={products} handleClick={handleChartItemClick} filter={filter} />
      </div>
    </div>
  )
}

export default HomePage