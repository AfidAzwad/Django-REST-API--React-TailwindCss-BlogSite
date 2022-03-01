import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

let BASE_URL='http://localhost:8000';

export default function FeaturedBlog() {
  const [featuredblog, setFeaturedBlogs] = useState([]);
  useEffect(() => {
    const fetchfeaturedBlog = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/blog/featured`);
        setFeaturedBlogs(response.data[0]);
        
      } catch (err) {
        console.log('cant fetch data !');
      }
    };
    fetchfeaturedBlog();
  }, []);

  return (
    <div>
      <p className="text-2xl mt-2 font-semibold text-gray-300 italic">Featured Blog</p>
        <div className="px-12 pt-12 pb-12 text-left text-black rounded-lg bg-indigo-200">
            <h1 className="font-sans italic text-4xl">{featuredblog.title}</h1>
            <p className="font-sans mt-3 text-left xs:text-justify">{featuredblog.excerpt}</p>
            <p className="text-lg mt-4 font-semibold text-teal-600">{featuredblog.category}</p>
            <Link
              to={`/blog/${featuredblog.slug}`}
              className="text-black italic flex justify-end no-underline text-lg font-semibold"
            >
              Continue reading...
            </Link>
        </div>      
    </div>
  );
}
