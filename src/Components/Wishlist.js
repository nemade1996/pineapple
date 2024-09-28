import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import emptycart from "../img/emptyCart.svg";
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { removeWishlistItem, clearWishlist, updateQuantity } from '../utils/wishlistSlice';
import { addMultipleItems } from '../utils/cartSlice';

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  
  const handleRemoveWishlistItem = (id) => {
    dispatch(removeWishlistItem(id));
  };

  const removeAllFromWishlist = () => {
    dispatch(clearWishlist());
  };

  const incrementQuantity = (id, event) => {
    event.preventDefault();
    const item = wishlistData.find((item) => item.id === id);
    dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
  };

  const decrementQuantity = (id, event) => {
    event.preventDefault();
    const item = wishlistData.find((item) => item.id === id);
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const addAllToCart = () => {
    dispatch(addMultipleItems(wishlistData));
    removeAllFromWishlist(); // Optional: Clear wishlist after adding to cart
  };

  return (
    <div>
      <div className='container'>
        <div className="flex flex-wrap w-full">
          {wishlistData.length > 0 ? (
            <div className="w-full">
              <div className="flex mt-16 items-center text-center justify-center md:mb-8 lg:mb-8 mb-8 3xl:mb-8">
                <h2 className="text-xl md:text-xl lg:text-2xl 2xl:text-4xl xl:leading-10 font-bold text-heading">Your wishlist</h2>
              </div>
              <div className="table-content cart-table-content">
                <table className="w-full bg-[#fff]">
                  <thead className="max-[767px]:border-[0] max-[767px]:h-[1px] max-[767px]:m-[-1px] max-[767px]:overflow-hidden max-[767px]:p-[0] max-[767px]:absolute max-[767px]:w-[1px]">
                    <tr className="bg-[#fff] border-b-[2px] border-solid border-[#eee]">
                      <th className="text-[#4b5966] text-[15px] font-medium pt-[15px] pb-[12px] px-[14px] text-left capitalize align-middle whitespace-nowrap leading-[1] tracking-[0]">Product</th>
                      <th className="text-[#4b5966] text-[15px] font-medium pt-[15px] pb-[12px] px-[14px] text-left capitalize align-middle whitespace-nowrap leading-[1] tracking-[0]">Name</th>
                      <th className="text-[#4b5966] text-[15px] font-medium pt-[15px] pb-[12px] px-[14px] text-left capitalize align-middle whitespace-nowrap leading-[1] tracking-[0]">Price</th>
                      <th className="text-[#4b5966] text-[15px] font-medium pt-[15px] pb-[12px] px-[14px] text-center capitalize align-middle whitespace-nowrap leading-[1] tracking-[0]">Quantity</th>
                      <th className="text-[#4b5966] text-[15px] font-medium pt-[15px] pb-[12px] px-[14px] text-left capitalize align-middle whitespace-nowrap leading-[1] tracking-[0]">Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlistData.map((item) => (
                      <tr key={item.id} className="border-b-[1px] border-solid border-[#eee] max-[767px]:border-[1px] max-[767px]:block max-[767px]:mb-[15px]">
                        <td data-label="Product" className="flex justify-center w-[40%] text-[#4b5966] text-[16px] py-[15px] px-[14px] text-left max-[767px]:w-full max-[767px]:border-b-[1px] max-[767px]:border-solid max-[767px]:border-[#eee] max-[767px]:flex max-[767px]:justify-between max-[767px]:items-center max-[767px]:text-[14px] max-[767px]:py-[8px] max-[767px]:px-[10px]">
                          <a href="product-left-sidebar.html" className="text-[#777] font-normal text-[14px] flex leading-[1.5] tracking-[0.6px] items-center">
                            <img className="gi-cart-pro-img w-[60px] mr-[15px]" src={item.imgSrc || item.image} alt="" />
                          </a>
                        </td>
                        <td data-label="Name" className="gi-cart-pro-name text-[#4b5966] font-medium text-[15px] py-[15px] px-[14px] text-left max-[767px]:border-b-[1px] max-[767px]:border-solid max-[767px]:border-[#eee] max-[767px]:flex max-[767px]:justify-between max-[767px]:items-center max-[767px]:text-[14px] max-[767px]:py-[8px] max-[767px]:px-[10px]">
                          <span className="amount tracking-[0.02rem]">{item.title}</span>
                        </td>
                        <td data-label="Price" className="gi-cart-pro-price text-[#4b5966] font-medium text-[15px] py-[15px] px-[14px] text-left max-[767px]:border-b-[1px] max-[767px]:border-solid max-[767px]:border-[#eee] max-[767px]:flex max-[767px]:justify-between max-[767px]:items-center max-[767px]:text-[14px] max-[767px]:py-[8px] max-[767px]:px-[10px]">
                          <span className="amount tracking-[0.02rem]">₹{item.price}</span>
                        </td>
                        <td data-label="Quantity" className="gi-cart-pro-quantity flex justify-center text-[#4b5966] font-medium text-[15px] py-[15px] px-[14px] text-left max-[767px]:border-b-[1px] max-[767px]:border-solid max-[767px]:border-[#eee] max-[767px]:flex max-[767px]:justify-between max-[767px]:items-center max-[767px]:text-[14px] max-[767px]:py-[8px] max-[767px]:px-[10px]">
                          <div className="my-auto border border-[#eee] rounded-[5px] h-[35px] overflow-hidden flex items-center justify-between w-[100px] mx-auto sm:m-0">
                            <button onClick={(e) => decrementQuantity(item.id, e)} className="p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold w-8">-</button>
                            <p className="text-center w-8">{item.quantity}</p>
                            <button onClick={(e) => incrementQuantity(item.id, e)} className="p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold w-8">+</button>
                          </div>
                        </td>
                        <td data-label="Total" className="gi-cart-pro-subtotal text-[#4b5966] text-[15px] font-medium py-[15px] px-[14px] text-left max-[767px]:border-b-[1px] max-[767px]:border-solid max-[767px]:border-[#eee] max-[767px]:flex max-[767px]:justify-between max-[767px]:items-center max-[767px]:text-[14px] max-[767px]:py-[8px] max-[767px]:px-[10px]">
                        ₹{(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td data-label="Remove" className="gi-cart-pro-remove text-[#4b5966] w-[90px] text-[16px] py-[15px] px-[14px] text-right max-[767px]:border-b-[1px] max-[767px]:border-solid max-[767px]:border-[#eee] max-[767px]:flex max-[767px]:justify-between max-[767px]:items-center max-[767px]:text-[14px] max-[767px]:py-[8px] max-[767px]:px-[10px]">
                          <a onClick={() => handleRemoveWishlistItem(item.id)} className="text-[22px] my-[0] mx-auto"><MdDeleteOutline /></a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="pt-4 flex justify-center">
                    <div>
                      <button onClick={removeAllFromWishlist} type="button" className="px-4 py-2 mr-4 bg-gray-500 text-white rounded transition-colors duration-300 hover:bg-black">
                        Clear Wishlist
                      </button>
                      <button onClick={addAllToCart} type="button" className="px-4 py-2 bg-yellow-500 text-white rounded transition-colors duration-300 hover:bg-[#4b5966]">
                        Add All To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full text-center py-10">
              <img src={emptycart} className='mx-auto' alt="Empty Cart" />
              <h2 className="text-[30px] text-black mb-[15px] mt-2 font-semibold">Your wishlist is empty</h2>
              <Link to="/" className="text-yellow-500 underline uppercase font-semibold text-[15px]">Continue Shopping</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
