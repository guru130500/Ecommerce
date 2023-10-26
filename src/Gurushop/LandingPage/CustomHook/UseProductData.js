import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const UseProductData = (value) => {
    const [product,setProduct]=useState([])
    const[data,setData]=useState([])
    
  useEffect(() => {
    axios.get(`http://localhost:9000/products?pId=${value}`).then((res) => {
      setProduct(res.data);
    });
  }, [value]);

  useEffect(() => { 
    product &&
      product.map((e) => {
        fetch(`http://localhost:9000/products?category=${e.category}`)
          .then((res) => res.json())
          .then((data1) => setData(data1));
      });
  }, [product]);

  

  return { product, data };
  
}

export default UseProductData