import React from 'react';
import Markdown from 'react-markdown';
import { useLoaderData } from 'react-router';
import rehypeRaw from 'rehype-raw';

const Content = () => {
    const blog = useLoaderData();
    // console.log(blog);
    
     const{title,cover_image,tags,body_html} = blog;
    return (
        <div
            className="mx-auto"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded-3xl h-44 "
              src={cover_image}
            />
              <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
          {
            tags.map(tag=><a
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            #{tag}
          </a>)
          }
        </div>
            <div className="p-6 space-y-2 text-black">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {title}
              </h3>
              <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
            </div>
          </div>
    );
};

export default Content;