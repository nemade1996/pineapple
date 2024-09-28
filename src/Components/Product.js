import React from 'react'
import p4 from "../img/p-4.webp"
import { Link } from 'react-router-dom';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";
import { toast } from 'react-toastify';
import { addToWishlist } from '../utils/wishlistSlice';
import { useSelector } from 'react-redux';

const Product = ({id, title, desc, price, imgSrc, category}) => {

  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const truncateTitle = (title, limit) => {
    const words = title.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return title;
  };

  const truncatedTitle = truncateTitle(title, 5);

  const handleAddToCart = () => {
    // Dispatch addItem action with the product details as payload
    dispatch(addItem({ id, title, price, imgSrc, category }));
    toast.success('Product added to cart!');
  };

  const handleAddToWishlist = () => {
    const existingItem = wishlist.find((item) => item.id === id);
    if (existingItem) {
      toast.error('Product already in wishlist!');
    } else {
      dispatch(addToWishlist({ id, title, price, imgSrc, category }));
      toast.info('Product added to wishlist!');
    }
  };

  return (
    <>
        <div className='group box-border border border-gray-300 rounded-lg overflow-hidden flex p-4 lg:p-5 ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white'>
            <img  className="w-full h-[120px] lg:h-[200px] lg:w-3/4 lg:m-auto object-contain" src={imgSrc}/>
            <h6 className='uppercase text-xs md:text-sm mt-2 text-yellow-600 mb-2'>{category}</h6>
            <h2 className='mb-1 text-xs md:text-sm font-semibold text-heading min-h-[2.2rem] md:min-h-[3.5rem] text-left cursor-pointer hover:text-yellow-600'>
              <Link to={`/pineapple/product/${id}`}>{truncatedTitle}</Link>
            </h2>
            <span className='inline-block false text-gray-900'>₹ {price}</span>
            <div className="flex justify-between w-full mt-2 border-t border-solid border-gray-300 pt-3">
            <button
              onClick={handleAddToCart} className="cursor-pointer text-xs md:text-sm leading-1 inline-flex items-center font-semibold font-body text-center justify-center border-0 border-transparent focus-visible:outline-none focus:outline-none rounded-md bg-gray-300 text-black px-2 md:px-3 py-2 md:py-2 hover:bg-gray-600 hover:shadow-cart hover:text-white">
              Add To Cart
            </button>
            <button onClick={handleAddToWishlist} className="cursor-pointer mx-1 text-sm md:text-lg leading-4 inline-flex items-center font-semibold font-body text-center justify-center border-0 border-transparent focus-visible:outline-none focus:outline-none rounded-md bg-yellow-500 text-white px-3 py-2 hover:bg-gray-600 hover:shadow-cart">
            <FaRegHeart />
            </button>
          </div>
        </div>
    </>
  )
}

export default Product