import React from 'react'
import NewsCard from '../components/NewsCard'
import { news } from '../news'

const Home = () => {
  return (
      <div className='mt-20 mb-10'>
        <NewsCard news={news} />
      </div>
  )
}

export default Home