import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Card({ id, image, title, rating, categories }) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <img className="h-52 w-full object-cover" src={image} alt="" />
        <div className="py-2">
          <span className="text-sm dark:text-white">{title}</span>
          <Rating rating={rating} />
          <div className="flex justify-between text-xs text-gray-400">
            <span>{categories}</span>
            <span>Open Now</span>
          </div>
        </div>
      </div>
      <Link to={'/detail/' + id}>
        <div className="text-center bg-dark-blue text-white py-2 cursor-pointer">
          <span className="text-xs">LEARN MORE</span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
