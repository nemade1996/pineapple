import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const starsTotal = 5;
  const starsFilled = Math.round(rating * starsTotal) / starsTotal;
  //if rating is 4
  // Multiply rating by starsTotal : rating×starsTotal=4×5=20
  // Round the Result : Math.round(20)=20
  // Divide by starsTotal : 20/5=4

  console.log(starsFilled)

  const starIcons = [];
  for (let i = 0; i < starsTotal; i++) {
    starIcons.push(
      i < starsFilled ? ( <FaStar key={i} className="h-5 w-5 text-yellow-500" /> ) : ( <FaRegStar key={i} className="h-5 w-5 text-gray-300" />      )
    );
  }

  return <div className="flex items-center">{starIcons} <p className='pl-1 text-black'>{rating}</p></div>;
};

export default StarRating;
