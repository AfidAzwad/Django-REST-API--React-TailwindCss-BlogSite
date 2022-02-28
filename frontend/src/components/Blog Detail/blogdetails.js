import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Detail(props) {
    const [blog, setBlog] = useState({});
    useEffect(() => {
        const slug = props.match.params.id;
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                setBlog(res.data);
            }
            catch (err) {
            }
        };
        
        fetchData();
    },[props.match.params.id]);
    const createBlog = () => {
        return {__html: blog.content}
    };
    return (
    <div className='container mt-12'>
          <div className='flex flex-nowrap justify-between'>
            <div>
                <p className='font-bold text-5xl'>{blog.title}</p>
                <p className='text-lg font-serif font-semibold mb-0'>Category: {blog.category}</p>
               {/* <p className='text-lg font-serif font-semibold mb-0'>Author: {blog.author}</p> */}
                <p className='text-lg font-serif font-semibold mb-4'>{blog.day} {blog.month} {blog.year}</p>
            </div>
            <img className="w-50 h-50 d-none inline d-sm-block rounded-t-md md:h-auto md:w-48 md:rounded-md" src={blog.thumbnail} alt="thumbnail"/>
          </div>
          <div className='text-justify' dangerouslySetInnerHTML={createBlog()} />
          <hr />
          <Link to='/' className='flex justify-end font-semibold text-lg no-underline italic mb-4'>Back to Blogs</Link>
    </div>
    );
};