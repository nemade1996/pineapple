import React from 'react'
import logo from "../img/logo-white.png"
import payment from "../img/payment.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-black relative text-gray-200 dark:text-gray-200 mt-20 px-3">
        <div className="container relative">
          <div className="py-[60px] px-0 text-center ">
                <Link to="/" className="text-[22px] focus:outline-none">
                  <img src={logo} alt="logo" className='w-40 mx-auto'/>
                </Link>
                <p className="mt-6 text-gray-300">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                <ul className="list-none mt-6 flex space-x-4 justify-center">
                  <li className="inline">
                  <Link to="/" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-yellow-400 dark:hover:text-yellow-400 text-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dribbble h-4 w-4 align-middle" title="dribbble">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                      </svg>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link to="/" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-yellow-400 dark:hover:text-yellow-400 text-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin h-4 w-4 align-middle" title="Linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link to="/" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-yellow-400 dark:hover:text-yellow-400 text-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook h-4 w-4 align-middle" title="facebook">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link to="/" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-yellow-400 dark:hover:text-yellow-400 text-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram h-4 w-4 align-middle" title="instagram">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link to="#" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-yellow-400 dark:hover:text-yellow-400 text-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter h-4 w-4 align-middle" title="twitter">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-yellow-400 dark:hover:text-yellow-400 text-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail h-4 w-4 align-middle" title="email">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </Link>
                  </li>
                </ul>
          </div>
          <div className="py-[30px] px-4 md:px-2 border-t border-slate-800">
            <div className="grid lg:grid-cols-4 md:grid-cols-2">
              <div className="flex items-center lg:justify-center text-center">
                <h6 className="mb-0 font-medium m-auto">Free delivery</h6>
              </div>
              <div className="flex items-center lg:justify-center text-center">
                <h6 className="mb-0 font-medium m-auto">Non-contact shipping</h6>
              </div>
              <div className="flex items-center lg:justify-center text-center">
                <h6 className="mb-0 font-medium m-auto">Money-back quarantee</h6>
              </div>
              <div className="flex items-center lg:justify-center text-center">
                <h6 className="mb-0 font-medium m-auto">Secure payments</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[30px] px-4 md:px-2 border-t border-slate-800">
          <div className="container relative text-center">
            <div className="grid md:grid-cols-2 items-center">
              <div className="md:text-start text-center">
                <p className="mb-0">
                  Copyright © 2024 <span className='text-yellow-400'>Pineapple</span>
                </p>
              </div>
              <ul className="list-none md:text-end text-center mt-6 md:mt-0">
                <li className="inline"><Link to=""><img src={payment} className="max-h-6 rounded inline" title="Visa" alt=""/></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer