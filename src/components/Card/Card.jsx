import React from 'react'

export const Card = ({ img, alt, title, description, url }) => {
  return (
    <div className='w-64 h-96 m-6 border-s-violet-50 bg-white shadow-blue-500/50'>
      <img className='w-full rounded-none h-1/2 object-cover object-center' src={img} alt={alt} />
      <h2 className='text-left px-2 text-blue-800 text-2xl mt-1'>{title}</h2>
      <p className='w-full text-center p-2'>{description}</p>
      <a className='relative bottom-0 top-0 w-80 bg-sky-500 text-center text-gray-50' target='_blank' href={url}>Ver más</a>
    </div>
  )
}
