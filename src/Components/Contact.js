import React, { useRef, useState } from 'react';
import contact from "../img/contact.webp";

const Contact = () => {
  const [submittedName, setSubmittedName] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const commentRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const comment = commentRef.current.value;

    if (name === "") {
      nameRef.current.setCustomValidity("Please enter your name.");
      nameRef.current.reportValidity();
      return;
    } else {
      nameRef.current.setCustomValidity("");
    }

    if (email === "") {
      emailRef.current.setCustomValidity("Please enter your email.");
      emailRef.current.reportValidity();
      return;
    } else {
      emailRef.current.setCustomValidity("");
    }

    if (phone === "") {
      phoneRef.current.setCustomValidity("Please enter your phone number.");
      phoneRef.current.reportValidity();
      return;
    } else {
      phoneRef.current.setCustomValidity("");
    }

    console.log(name, email, phone, comment);
    setSubmittedName(name);
  };

  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773392.078304354!2d61.028322527582525!3d19.69057626482709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1721058423633!5m2!1sen!2sin"
          width="100%"
          height="500px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
      <section className="relative lg:pt-24 pt-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-6 md:col-span-6">
              <img src={contact} alt="Contact" />
            </div>
            <div className="lg:col-span-6 md:col-span-6">
              <div className="lg:ms-5">
                <div className="py-5 px-10 sm:px-8 bg-white mx-auto rounded-lg w-full border border-gray-300">
                  <h6 className="text-yellow-500 font-semibold uppercase text-lg">Contact Us</h6>
                  <h3 className="mb-6 capitalize font-semibold text-3xl leading-normal my-4">Fill the form below</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                      <div className="lg:col-span-6">
                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer text-left">Your Name:</label>
                        <input ref={nameRef} name="name" type="text" required className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" placeholder="Name :" />
                      </div>
                      <div className="lg:col-span-6">
                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer text-left">Your Email:</label>
                        <input ref={emailRef} name="email" type="email" required className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" placeholder="Email :" />
                      </div>
                      <div className="lg:col-span-12">
                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer text-left">Your Phone:</label>
                        <input ref={phoneRef} name="Phone" type="tel" required className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" placeholder="Phone :" />
                      </div>
                      <div className="lg:col-span-12">
                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer text-left">Your Comment:</label>
                        <textarea ref={commentRef} name="comments" className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" placeholder="Message :"></textarea>
                      </div>
                    </div>
                    <button type="submit" className="py-2 px-5 inline-block align-middle duration-500 text-base text-center bg-yellow-500 text-white mt-2 hover:bg-gray-600 rounded-md">Submit</button>
                    <p className='mt-3'>{submittedName ? `Thank You ${submittedName} ! We will get back to you soon.` : ""}</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-yellow-500/5 text-yellow-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </div>
              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Phone</h5>
                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                <div className="mt-5"><a className="text-yellow-500 font-medium" href="tel:+152534-468-854">+152 534-468-854</a></div>
              </div>
            </div>
            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-yellow-500/5 text-yellow-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
              </div>
              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Email</h5>
                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                <div className="mt-5"><a className="text-yellow-500 font-medium" href="mailto:contact@example.com">contact@example.com</a></div>
              </div>
            </div>
            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-yellow-500/5 text-yellow-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              </div>
              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Location</h5>
                <p className="text-slate-400 mt-3">C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485</p>
                <div className="mt-5"><a data-type="iframe" className="video-play-icon read-more lightbox text-yellow-500 font-medium" href="/contact">View on Google map</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
