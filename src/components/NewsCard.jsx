import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    return news.map((article) => ( 
    <Link to={`/news/${article.id}`}>
        <div className='flex justify-center mb-5'>
            <div className='block w-4/5 bg-white shadow-lg'>
                <img
                    class="h-96 w-full"
                    src={article.imgUrl}
                    alt="news" 
                />
                <div className='p-6'>
                    <h2 class="mb-2 text-xl font-medium leading-tight text-neutral-800"> {article.title}</h2>
                    <p className='mb-4 text-base text-neutral-600'>{article.abstract}</p>
                </div>
            </div>
        </div> 
    </Link>
    ))
}

export default NewsCard