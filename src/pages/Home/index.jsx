import React from "react"
import useProducts from "../../services/hooks/useProducts"
import HomeChart from "../../components/HomeChart"

const HomePage = () => {
  const [products] = useProducts()
  const handleChartItemClick = data => {
    const { factory_id, date } = data?.activePayload[0]?.payload // ToDo: format date 
  }
  return(
    <div>
      <HomeChart data={products} handleClick={handleChartItemClick} />
    </div>
  )
}

export default HomePage