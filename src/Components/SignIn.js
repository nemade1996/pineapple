import React, { useRef, useState } from 'react';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const SignIn = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState('');

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const errMessage = checkValidateData(email.current.value, password.current.value);
    setErrMsg(errMessage);
    if (errMessage) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser({ id: user.uid, name: name.current.value, email: user.email }));
        })
        .catch((error) => {
          setErrMsg(error.message);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          const existingUser = {
            id: user.uid,
            name: name.current ? name.current.value : user.email,
            email: user.email
          };
          dispatch(addUser(existingUser));
          console.log("Success");
          // dispatch(addUser({ id: user.uid, name: user.name, email: user.email })); 
        })
        .catch((error) => {
          setErrMsg(error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const logoutFun = () => {
    dispatch(removeUser());
  };

  return (
    <div className="relative flex-grow">
      <div className="flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover">
        <div className="mx-auto w-full md:max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <div className="py-16 lg:py-20">
            <div className="py-5 px-5 sm:px-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
              <div className="text-center mb-6 pt-2.5">
                <h2>{isSignInForm ? 'Sign In Form' : 'Sign Up Form'}</h2>
              </div>
              <div>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-center">
                  <div className="flex flex-col space-y-4">
                    {!isSignInForm && (
                      <div className="block">
                        <label htmlFor="name" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer text-left">Name</label>
                        <input type="text" ref={name} className="py-2 px-4 md:px-5 w-full border text-xs lg:text-sm font-body placeholder-body min-h-12 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" />
                      </div>
                    )}
                    <div className="block">
                      <label htmlFor="email" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer text-left">Email</label>
                      <input type="email" ref={email} className="py-2 px-4 md:px-5 w-full border text-xs lg:text-sm font-body placeholder-body min-h-12 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" />
                    </div>
                    <div className="block">
                      <label htmlFor="password" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer text-left">Password</label>
                      <input type="password" ref={password} className="py-2 px-4 md:px-5 w-full border border-gray-300 text-xs lg:text-sm font-body rounded-md placeholder-gray-600 bg-white focus:outline-none focus:border-heading h-11 md:h-12" />
                    </div>
                    <button onClick={handleButtonClick} className="bg-black text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus:outline-none rounded-md bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-2">
                      {isSignInForm ? 'Sign In' : 'Sign Up'}
                    </button>
                  </div>
                </form>
                <p className="text-red-500">{errMsg}</p>
                <p onClick={toggleSignInForm} className="mt-5 cursor-pointer">{isSignInForm ? 'New User? Sign Up' : 'Already have an account? Sign In'}</p>
                <p onClick={logoutFun} className="cursor-pointer mt-5">Log Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
