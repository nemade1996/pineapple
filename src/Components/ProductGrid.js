import React from 'react'
import Product from './Product'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
      }, []);

    const fetchProducts = async ()=>{
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          
        // console.log(data)
          setProducts(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }

      };

     

    // const {name, description, price } = bestList;

  return (
    <div className='container'>
    <div className='flex mt-16 items-center text-center justify-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8'>
    <h2 className='text-xl md:text-xl lg:text-2xl 2xl:text-4xl xl:leading-10 font-bold text-heading'>Best Sellers</h2>
    </div>
    <div className='grid grid-cols-2 px-1 md:px-4 lg:px-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-2 md:gap-x-4  lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 '>

        {
            products.map((product)=>(
                <Product  key={product.id} id={product.id} title={product.title} price={product.price} imgSrc={product.image} category={product.category}/>
            ))
        }

        
    </div>
    </div>
  )
}

export default ProductGrid