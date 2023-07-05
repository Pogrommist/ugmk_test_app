import React from "react"
import { useParams } from "react-router-dom";

import useProductsDetails from "../../services/hooks/useProductsDetails";
import DetailsChart from "../../components/DetailsChart";


import './style.css'
import { factoryNames } from "../../shared/constants";


const DetailsPage = () => {
  const { factoryId, monthNumber } = useParams();
  const [products] = useProductsDetails(factoryId, monthNumber)

  const factoryName = factoryNames[factoryId]

  return (
    <div class="details-page-container">
      <h1>Статистика по продукции {factoryName} за {products?.month}</h1>
        <div>
          <DetailsChart products={products} />
        </div>

    </div>
  )
}

export default DetailsPage