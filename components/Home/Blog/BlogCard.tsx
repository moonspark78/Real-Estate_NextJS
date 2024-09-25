import Image from 'next/image';
import React from 'react'


type Props= {
    blog: {
        id: number;
        date: string;
        comment: string;
        title: string;
        shortDescription: string;
        image: string;
    }
}

const BlogCard = ({blog} : Props) => {
  return (
    <div className='bg-white rounded-md overflow-hidden'>
        <div>
            <Image
                src={blog.image}
                alt={blog.title}
                className='w-full'
                width={300}
                height={300}
            />
        </div>
    </div>
  )
}

export default BlogCard