import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { news } from '../news';

const News = () => {
    const { id } = useParams();
    const [ newsDetail, setNewsDetail ] = useState(null);

    useEffect(() => {
        const detail = news.find(news => news.id === id);
        setNewsDetail(detail);
    }, [id])
    
  return (
    <div className='flex justify-center mt-20 mb-10'>
        <div className='block w-4/5 bg-white shadow-lg'>
            <img
                className="h-96 w-full"
                src={newsDetail?.imgUrl}
                alt="news" 
            />
            <div className='p-6'>
                <h2 className="mb-2 text-xl font-medium leading-tight text-neutral-800"> {newsDetail?.title}</h2>
                <p className='mb-4 text-base text-neutral-600'>{newsDetail?.abstract}</p>
            </div>
        </div>
    </div>
  )
}

export default News