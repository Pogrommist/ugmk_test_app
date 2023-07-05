import { useState, useEffect } from 'react';
import { axiosInstance } from '../axios'

const useProductsDetails = (factoryId, monthNumber) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsDetails = async () => {
      try {
        const response = await axiosInstance.get(`details/${factoryId}/${monthNumber}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products details:', error);
      }
    };

    fetchProductsDetails();
  }, [factoryId, monthNumber]);

  return [products];
};

export default useProductsDetails;