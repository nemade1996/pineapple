import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { addToWishlist } from '../utils/wishlistSlice';
import { toast } from 'react-toastify';
import StarRating from './StarRating';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  
  // Select wishlist from the store
  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct(productId);
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addItem(product));
    toast.success('Product added to cart!');
  };

  const handleAddToWishlist = () => {
    const existingItem = wishlist.find((item) => item.id === product.id);
    if (existingItem) {
      toast.error('Product already in wishlist!');
    } else {
      dispatch(addToWishlist(product));
      toast.info('Product added to wishlist!');
    }
  };

  return (
    <div>
      <div className='relative flex-grow'>
        <div className='mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16'>
          <div className='block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start'>
            <div className='col-span-4 grid-cols-2 gap-2.5 flex justify-center items-center'>
              <img src={product.image} className="max-w-full max-h-full w-4/5"/>
            </div>
            <div className='col-span-5 pt-8 lg:pt-0'>
              <div className="pb-6 mb-7 border-b border-gray-300 text-center mt-16">
                <h2 className="text-heading text-left text-lg md:text-xl lg:text-3xl font-bold w-3/4 hover:text-black mb-3.5">{product.title}</h2>
                <h6 className="uppercase mt-2 text-yellow-600 text-lg mb-2 font-semibold text-left">{product.category}</h6>
                <div className="gi-single-rating-wrap flex mb-[14px] items-center">
                  <div className="gi-single-rating leading-[17px] pr-2">
                    ({product.rating.count} Reviews)
                  </div>
                  <span className="gi-read-review text-[#999] pl-2 leading-[17px] border-l-2 border-gray-300">
                    <StarRating rating={product.rating.rate} />
                  </span>
                </div>
              </div>
              <div className="pb-7 mb-7 border-b border-gray-300">
                <p className="text-body text-left text-sm lg:text-base leading-6 lg:leading-8">{product.description}</p>
                <div className="flex items-center mt-5">
                  <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">₹ {product.price}</div>
                </div>
              </div>

              <div className='flex gap-4'>
                <button onClick={handleAddToCart} className='px-4 py-2 bg-yellow-500 text-white rounded transition-colors duration-300 hover:bg-[#4b5966]'>Add To Cart</button>
                <button onClick={handleAddToWishlist} className='px-4 py-2 bg-gray-500 text-white rounded transition-colors duration-300 hover:bg-black'>Add To Wishlist</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
