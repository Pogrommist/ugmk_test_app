import React, { useState } from "react"
import Select from 'react-select'

import useProducts from "../../services/hooks/useProducts"
import HomeChart from "../../components/HomeChart"
import useLocalStorage from "../../services/hooks/useLocalStorage"

import './style.css'

const selectOptions = [
  { value: 'all', label: 'Все' },
  { value: 'product1', label: 'Продукт 1' },
  { value: 'product2', label: 'Продукт 2' }
]

const HomePage = () => {
  const [products] = useProducts()
  const [filterLocal, setFilterLocal] = useLocalStorage('filter', 'all')
  const [filter, setFilter] = useState(filterLocal)

  const handleChartItemClick = data => {
    const { factory_id, date } = data?.activePayload[0]?.payload // ToDo: format date 
  }

  const handleFilterChange = data => {
    const { value } = data
    setFilter(value)
    setFilterLocal(value)
  }

  return(
    <div className="homepage-container">
      <Select 
        options={selectOptions} 
        onChange={handleFilterChange} 
        value={selectOptions.find(option => option.value === filter)}
        className="homepage__select"
      />
      <HomeChart data={products} handleClick={handleChartItemClick} filter={filter} />
    </div>
  )
}

export default HomePage