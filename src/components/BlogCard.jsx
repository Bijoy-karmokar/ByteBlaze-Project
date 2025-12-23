import React from 'react';
import { Link } from 'react-router';

const BlogCard = ({blog}) => {
    // console.log(blog);
    const{title,description,published_at,cover_image,id} = blog;
    
    return (
        <div>
             <Link to={`/blog/${id}`}
            className="max-w-sm mx-auto border-2 transition hover:scale-105 border-primary hover:border-secondary group hover:no-underline focus:no-underline"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 "
              src={cover_image}
            />
            <div className="p-6 space-y-2 text-black">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {title}
              </h3>
              <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
              <p>
                {description}
              </p>
            </div>
          </Link>
        </div>
    );
};

export default BlogCard;