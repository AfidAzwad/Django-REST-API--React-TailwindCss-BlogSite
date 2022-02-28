import React from 'react';
import { Link } from 'react-router-dom';

export default function categories() {
    return (
     <div className="flex justify-center items-center pt-16 font-semibold text-lg xs:text-xs sm:text-sm md:text-lg lg:text-xl">
        <Link
          className=" text-black no-underline xs:pr-2 sm:pr-4 md:pr-6 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 ..."
          to="/category/technology"
        >
          Technology
        </Link>
        <Link
          className=" text-black no-underline xs:pr-2 md:pr-6 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 ..."
          to="/category/programming"
        >
          Programming
        </Link>
        <Link
          className=" text-black no-underline xs:pr-2 md:pr-6 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 ..."
          to="/category/health"
        >
          Health
        </Link>
        <Link
          className=" text-black no-underline xs:pr-2 md:pr-6 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 ..."
          to="/category/style"
        >
          Style
        </Link>
        <Link
          className=" text-black no-underline md:pr-6 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 ..."
          to="/category/travel"
        >
          Travel
        </Link>
    </div>
    );
}