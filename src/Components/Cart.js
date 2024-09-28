import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeItem } from '../utils/cartSlice';
import { updateQuantity } from '../utils/cartSlice';
import { clearCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import emptyCart from "../img/emptyCart.svg"

const Cart = () => {
  const dispatch = useDispatch();
  const shippingCharge = 10;

  const cartItems = useSelector((state)=>state.cart);
  
  const removeCartItem=(id)=>{
    dispatch(removeItem(id))
  }

  const calculateTotal=(item)=>{
    return (item.price * item.quantity).toFixed(2);
  }

  const incrementQuantity = (id, event) => {
    event.preventDefault();
    const item = cartItems.find((item) => item.id === id);
    dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
  };

  const decrementQuantity = (id, event) => {
  event.preventDefault();
  const item = cartItems.find((item) => item.id === id);
    if (item.quantity > 1) {
    dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const handleClearCart=()=>{
    dispatch(clearCart())
  }

  const calculateSubtotal=()=>{
    return cartItems.reduce((acc, item) => acc + parseFloat(calculateTotal(item)), 0).toFixed(2);
  }

  const calculateFinalTotal=()=>{
    return (parseFloat(calculateSubtotal()) + shippingCharge).toFixed(2);
  }


return (
<div className='container'>
  <div className="flex flex-wrap w-full">
    {cartItems.length > 0 ? (
    <div className="w-full">
      <div class="flex mt-16 items-center text-center justify-center md:mb-8 lg:mb-8 mb-8 3xl:mb-8">
        <h2 class="text-xl md:text-xl lg:text-2xl 2xl:text-4xl xl:leading-10 font-bold text-heading">Your Cart</h2>
      </div>
      <div className="table-content cart-table-content">
        <table className="w-full bg-[#fff] ">
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
            {cartItems.map((item) => (
            <tr key={item.id} className="border-b-[1px] border-solid border-[#eee] max-[767px]:border-[1px] max-[767px]:block max-[767px]:mb-[15px]">
              <td data-label="Product" className="flex justify-center w-[40%] text-[#4b5966] text-[16px] py-[15px] px-[14px] text-left max-[767px]:w-full max-[767px]:border-b-[1px] max-[767px]:border-solid max-[767px]:border-[#eee] max-[767px]:flex max-[767px]:justify-between max-[767px]:items-center max-[767px]:text-[14px] max-[767px]:py-[8px] max-[767px]:px-[10px]">
                <a href="product-left-sidebar.html" className="text-[#777] font-normal text-[14px] flex leading-[1.5] tracking-[0.6px] items-center">
                <img className="gi-cart-pro-img w-[60px] mr-[15px]" src={item.imgSrc || item.image} alt="" />
                </a>
              </td>
              <td data-label="Price" className="gi-cart-pro-price text-[#4b5966] font-medium text-[15px] py-[15px] px-[14px] text-left max-[767px]:border-b-[1px] max-[767px]:border-solid max-[767px]:border-[#eee] max-[767px]:flex max-[767px]:justify-between max-[767px]:items-center max-[767px]:text-[14px] max-[767px]:py-[8px] max-[767px]:px-[10px]">
                <span className="amount tracking-[0.02rem]">{item.title}</span>
              </td>
              <td data-label="Price" className="gi-cart-pro-price text-[#4b5966] font-medium text-[15px] py-[15px] px-[14px] text-left max-[767px]:border-b-[1px] max-[767px]:border-solid max-[767px]:border-[#eee] max-[767px]:flex max-[767px]:justify-between max-[767px]:items-center max-[767px]:text-[14px] max-[767px]:py-[8px] max-[767px]:px-[10px]">
                <span className="amount tracking-[0.02rem]">{item.price}</span>
              </td>
              <td data-label="Quantity" className="gi-cart-pro-quantity flex justify-center text-[#4b5966] font-medium text-[15px] py-[15px] px-[14px] text-left max-[767px]:border-b-[1px] max-[767px]:border-solid max-[767px]:border-[#eee] max-[767px]:flex max-[767px]:justify-between max-[767px]:items-center max-[767px]:text-[14px] max-[767px]:py-[8px] max-[767px]:px-[10px]">
                <div className="my-auto border border-[#eee] rounded-[5px] h-[35px] overflow-hidden flex items-center justify-between w-[100px] mx-auto sm:m-0">
                  <button onClick={(e) => decrementQuantity(item.id,e)} className="p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold w-8">-</button>
                  <p className="text-center w-8">{item.quantity}</p>
                  <button onClick={(e) => incrementQuantity(item.id,e)} className="p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold w-8">+</button>
                </div>
              </td>
              <td data-label="Total" className="gi-cart-pro-subtotal text-[#4b5966] text-[15px] font-medium py-[15px] px-[14px] text-left max-[767px]:border-b-[1px] max-[767px]:border-solid max-[767px]:border-[#eee] max-[767px]:flex max-[767px]:justify-between max-[767px]:items-center max-[767px]:text-[14px] max-[767px]:py-[8px] max-[767px]:px-[10px]">{calculateTotal(item)}</td>
              <td data-label="Remove" className="gi-cart-pro-remove text-[#4b5966] w-[90px] text-[16px] py-[15px] px-[14px] text-right max-[767px]:border-b-[1px] max-[767px]:border-solid max-[767px]:border-[#eee] max-[767px]:flex max-[767px]:justify-between max-[767px]:items-center max-[767px]:text-[14px] max-[767px]:py-[8px] max-[767px]:px-[10px]">
                <a href="#" onClick={() => removeCartItem(item.id)} className="text-[22px] my-[0] mx-auto"><MdDeleteOutline /></a>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap">
          <div className="w-full">
            <div className="pt-4 block justify-between md:flex">
              <div className="sm:w-[370px] w-full border border-[#EDEDED] px-[30px] py-[26px]">
                <div className="sub-total mb-6">
                  <div className=" flex justify-between mb-6">
                    <p className="text-[15px] font-medium">Subtotal</p>
                    <p className="text-[15px] font-medium">{calculateSubtotal()}</p>
                  </div>
                </div>
                <div className="shipping mb-6">
                  <div className=" flex justify-between mb-6">
                    <p className="text-[15px] font-medium">Shipping</p>
                    <p className="text-[15px] font-medium">10.00</p>
                  </div>
                  <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                </div>
                <div className="total mb-2">
                  <div className=" flex justify-between">
                    <p className="text-[20px] font-bold">Total</p>
                    <p className="text-[20px] font-bold">{calculateFinalTotal()}</p>
                  </div>
                </div>
              </div>
              <div className="sm:w-[370px] w-full border border-[#EDEDED] px-[30px] py-[26px]">
                  <button  type="button" onClick={handleClearCart}  className="px-4 py-2 mr-4 bg-gray-500 text-white rounded transition-colors duration-300 hover:bg-black">
                      Clear Cart
                  </button>
                  <button type="button" className="px-4 py-2 bg-yellow-500 text-white rounded transition-colors duration-300 hover:bg-[#4b5966]">
                      Checkout
                  </button>
              </div>
            </div>
          </div>
      </div>
    </div>
    ) : (
    <div className="w-full text-center py-10">
      <img src={emptyCart} className='mx-auto'/>
      <h2 className="text-[30px] text-black mb-[15px] mt-2 font-semibold">Your cart is empty</h2>
      <Link to="/" className="text-yellow-500 underline uppercase font-semibold text-[15px]">Continue Shopping</Link>
    </div>
    )}
  </div>
</div>
)
}
export default Cart