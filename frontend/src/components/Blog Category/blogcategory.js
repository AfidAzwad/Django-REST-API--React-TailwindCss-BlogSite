import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

let BASE_URL='http://localhost:8000';

export default function Category(props) {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        var category = props.match.params.id;
        let axiosConfig  = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const fetchData = async () => {
            try {
                const response = await axios.post(`${BASE_URL}/api/blog/category`,{category}, axiosConfig);
                setBlogs(response.data);
            }
            catch (err) {
            }
        };
        fetchData();
    },);
    const getBlogs = () => {
        let bloglist = [];
        let result = [];
        blogs.map(blog => {
            return bloglist.push(
                <div className="overflow-hidden">
                <div className="flex flex-col justify-between no-underline items-center xs:items-start md:items-center lg:items-center xl:items-center bg-white text-black rounded-xl border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700">       
                  <div className="flex flex-col justify-left p-4 leading-normal">
                      <p className="flex justify-start text-xl no-underline font-bold text-teal-700 mb-2">{blog.category}</p>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{blog.title}</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">{blog.excerpt}</p>
                      <Link to={`/blog/${blog.slug}`} className="flex xs:justify-end md:justify-start lg:justify-start xl:justify-start font-semibold text-md no-underline italic">
                          Read more
                      </Link>
                  </div>
                <img className="object-cover col-4 w-full h-full d-none d-md-block d-lg-block rounded-r-lg md:h-auto md:w-48 md:rounded-none md:rounded-r-lg" src={blog.thumbnail} alt="thumbnail"/>
                </div>
              </div>
            );
        });
        for (let i=0;i<bloglist.length;i+=2) {
            result.push(
                <div key={i} className="row p-4">
                    <div className="col-md-6">{bloglist[i]}</div>
                    <div className="col-md-6">
                    {bloglist[i + 1] ? bloglist[i + 1] : null}
                    </div> 
                </div>
            )
        }
        return result;
    };
    return (
        <div className='container mt-12'>
            {getBlogs()}
        </div>
    );
};