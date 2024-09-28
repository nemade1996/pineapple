import React, { useState } from 'react'
import useProducts from '../utils/useProducts'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import Product from './Product';

const ProductFilter = () => {

    const dispatch = useDispatch();

    const { products, loading, error } = useProducts('https://fakestoreapi.com/products');
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeCategory, setActiveCategory] = useState("All");


    const categories = [ "All",'jewelery', "men's clothing", "women's clothing"];

    const filteredItems = selectedCategory == "All" ? products : products.filter(item => item.category === selectedCategory)

    const handleAddToCart = (product) =>{
      // console.log(product)
      dispatch(addItem(product))
    }


  return (

    <div className='container'>
      <div class="flex mt-16 items-center text-center justify-center md:mb-8 lg:mb-8 mb-8 3xl:mb-8"><h2 class="text-xl md:text-xl lg:text-2xl 2xl:text-4xl xl:leading-10 font-bold text-heading">Shop By Category      </h2></div>
      <ul className="flex w-full justify-center align-middle md:justify-center flex-wrap font-medium text-center">
        {categories.map((category) => (
          <li key={category} onClick={() => setSelectedCategory(category)} className={`filter-btn mr-2 md:mx-2 ${selectedCategory === category ? 'capitalize cursor-pointer mx-2 my-1 px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-500 hover:text-white' : 'capitalize cursor-pointer mx-2 my-1 px-3 py-2 bg-gray-300 text-black rounded-lg hover:bg-yellow-500 hover:text-white'}`}>
            {category}
          </li>
        ))}
      </ul>
      <div className="grid mt-14 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
        {
          filteredItems.map((product)=>(
            <Product key={product.id} id={product.id} title={product.title} price={product.price} imgSrc={product.image} category={product.category}/>
          ))
        }
      </div>
    </div>
  )
}

export default ProductFilter