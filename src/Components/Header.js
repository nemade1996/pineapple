import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from "../img/logo.png";
import search from "../img/search.svg";
import cart from "../img/cart.svg";
import ProductPopup from './ProductPopup';
import heart from "../img/heart.svg"

const Header = () => {
  const totalItem = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef(null);
  const wishlistData = useSelector((state) => state.wishlist);
  const [isMenuIsOpen, setIsMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuIsOpen(!isMenuIsOpen);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  const handleMenuClick = () => {
    setIsMenuIsOpen(false); // Close the menu when any menu item is clicked
  };

  return (
    <div className="shadow-lg container">
      <div className="relative z-20 w-full h-16 sm:h-20 lg:h-24">
        <div className="flex z-20 w-full h-16 px-4 text-gray-700 bg-white sm:h-20 lg:h-24 md:px-8 lg:px-6">
          <div className="flex justify-start items-center mx-auto max-w-[1920px] h-full w-full">
            <Link className="inline-flex focus:outline-none" to="/pineapple">
              <img src={logo} className="flex-none w-14 md:w-20 lg:w-24 xl:w-28 h-auto object-contain" alt="logo" />
            </Link>
          </div>
          <nav className="headerMenu flex relative lg:flex ltr:md:ml-6 rtl:md:mr-6 ltr:xl:ml-10 rtl:xl:mr-10">
            <div className="flex sm:hidden">
              <button className="flex items-center justify-center p-2 focus:outline-none" onClick={toggleMenu}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Hamburger icon */}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <ul className={`flex ${isMenuIsOpen ? 'flex-col' : 'hidden'} fixed top-14 left-0 w-full md:w-auto md:top-0 md:left-0 md:relative lg:relative my-0 sm:my-2 p-2 bg-white md:my-4 lg:my-8 xl:my-8 sm:flex`} onClick={handleMenuClick}>
              <li className="py-2 mx-2 sm:mx-2 lg:mx-3 xl:mx-5 cursor-pointer hover:text-yellow-500 bg-white text-gray-lite font-medium  flex text-xtiny items-center">
                <Link to="/pineapple/">Home</Link>
              </li>
              <li className="py-2 mx-2 sm:mx-2 lg:mx-3 xl:mx-5 cursor-pointer hover:text-yellow-500 bg-white text-gray-lite font-medium flex text-xtiny items-center">
                <Link to="/pineapple/about">About</Link>
              </li>
              <li className="py-2 mx-2 sm:mx-2 lg:mx-3 xl:mx-5 cursor-pointer hover:text-yellow-500 bg-white text-gray-lite font-medium flex text-xtiny items-center">
                <Link to="/pineapple/products">Products</Link>
              </li>
              <li className="py-2 mx-2 sm:mx-2 lg:mx-3 xl:mx-5 cursor-pointer hover:text-yellow-500 bg-white text-gray-lite font-medium flex text-xtiny items-center">
              <Link to="/pineapple/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="items-center justify-end flex-shrink-0 flex gap-4 lg:flex md:gap-x-4 lg:gap-x-5 xl:gap-x-8 2xl:gap-x-10 md:flex">
            <div className="relative " ref={searchRef}>
              <div className=" hidden xs:hidden sm:hidden md:hidden lg:flex xl:flex">
                <input
                  type="text"
                  className="border border-gray-300 rounded-l py-2 px-4 lg:w-64 md:wd-1/4 focus:outline-none"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <button
                  className="flex items-center justify-center flex-shrink-0 h-12 w-12 bg-gray-200 text-gray-700 rounded-r transform focus:outline-none"
                  aria-label="search-button"
                  onClick={togglePopup}
                >
                  <img src={search} alt="search icon" className="h-6 w-6" />
                </button>
              </div>

              {showPopup && <ProductPopup searchTerm={searchTerm} />}
            </div>
            <div className="-mt-0.5 flex-shrink-0">
              {user ? (
                <p className="text-sm font-semibold xl:text-base text-heading">
                  Hello, {user.name}
                </p>
              ) : (
                <Link to="/pineapple/signin">
                  <button className="text-sm font-semibold xl:text-base text-heading">Sign In</button>
                </Link>
              )}
            </div>
            <Link to="/pineapple/cart">
              <button className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none" aria-label="cart-button">
                <img src={cart} alt="cart icon" />
                <span className="cart-counter-badge">{totalItem.length}</span>
              </button>
            </Link>
            <Link to="/pineapple/wishlist">
              <button className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none">
                <img src={heart} alt="wishlist icon" className="h-6 w-6"/>
                <span className="cart-counter-badge">{wishlistData.length}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
