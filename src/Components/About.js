import React from 'react'
import { Link } from 'react-router-dom';
import { promises } from '../utils/constant';
import { aboutContent } from '../utils/constant';
import { founderContent } from '../utils/constant';

const About = () => {
  console.log(aboutContent[0])
  return (
    <div>
      <section className="relative px-4 md:px-0 md:pt-24 pt-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-5 md:col-span-6">
            <img src={aboutContent[0].image} className="rounded-t-full shadow-md dark:shadow-gray-800" alt=""/>
            </div>
            <div className="lg:col-span-7 md:col-span-6">
              <div className="lg:ms-8">
                <h6 className="text-yellow-500 font-semibold uppercase text-lg">{aboutContent[0].title}</h6>
                <h5 className="font-semibold text-3xl leading-normal my-4">{aboutContent[0].subtitle}</h5>
                <p className="text-slate-400">{aboutContent[0].desc}</p>
                <div className="flex items-center mt-6 gap-5 justify-center">
                  <div className='text-center'>
                    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 mx-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div className="">
                    <h5 className="title font-bold mb-0 text-center">Phone</h5>
                    <Link className="tracking-wide text-yellow-500" to="tel:+152534-468-854">+152 534-468-854</Link>
                  </div>
                  </div>
                  <div className='text-center'>
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 mx-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div className="">
                    <h5 className="title font-bold mb-0 text-center">Location</h5>
                    <Link className="text-yellow-500">View on Google map</Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
            <img src={founderContent[0].image} className="rounded-b-full shadow-md dark:shadow-gray-800" alt=""/>
            </div>
            <div className="lg:col-span-7 md:col-span-6 md:order-1 order-2">
              <h6 className="text-yellow-500 font-semibold uppercase text-lg">{founderContent[0].title}</h6>
              <h5 className="font-semibold text-3xl leading-normal my-4">{founderContent[0].subtitle}</h5>
              <p className="text-slate-400">{founderContent[0].desc}</p>
              <ul className="list-none mt-6 space-x-3">
                <li className="inline">
                  <Link className="inline-flex hover:text-yellow-500 dark:hover:text-yellow-500" to="#" target="_blank">
                    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="size-5 align-middle" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <title>dribbble</title>
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                    </svg>
                  </Link>
                </li>
                <li className="inline">
                  <Link className="inline-flex hover:text-yellow-500 dark:hover:text-yellow-500" to="#" target="_blank">
                    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="size-5 align-middle" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <title>Linkedin</title>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                </li>
                <li className="inline">
                  <Link className="inline-flex hover:text-yellow-500 dark:hover:text-yellow-500" to="#" target="_blank">
                    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="size-5 align-middle" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <title>facebook</title>
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="inline">
                  <Link className="inline-flex hover:text-yellow-500 dark:hover:text-yellow-500" to="#" target="_blank">
                    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="size-5 align-middle" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <title>instagram</title>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Link>
                </li>
                <li className="inline">
                  <Link className="inline-flex hover:text-yellow-500 dark:hover:text-yellow-500" to="#" target="_blank">
                    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="size-5 align-middle" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <title>twitter</title>
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 justify-center text-center mb-4">
            <h6 className="text-yellow-500 font-semibold uppercase text-lg">Our Promise</h6>
            <h5 className="font-semibold text-3xl leading-normal my-4">We Designed and Developed Products</h5>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6">
          {
            promises.map((promise, index) => {
              const IconComponent = promise.icon;
              return (
                <div key={index} className="p-6 text-center shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-md bg-white dark:bg-slate-900">
                  <IconComponent className="text-4xl text-yellow-500 mx-auto" />
                  <div className="content mt-4">
                    <p className="title h5 text-xl font-medium">{promise.title}</p>
                    <p className="text-slate-400 mt-3">{promise.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About