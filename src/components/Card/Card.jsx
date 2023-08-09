import React from 'react'

export const Card = ({ img, alt, title, description, url }) => {
  return (
    <div className='w-72 h-96 m-6 bg-slate-50 shadow-lg shadow-cyan-500 flex flex-col items-center'>
      <img className='w-full rounded-none h-1/2 object-contain object-center bg-black' src={img} alt={alt} />
      <h2 className='px-2 text-blue-800 text-2xl mt-1'>{title}</h2>
      <p className='w-full text-center p-2'>{description}</p>
      <a className='w-48 bg-sky-500 text-center text-gray-50 hover:bg-cyan-700' target='_blank' href={url}>Ver más</a>
    </div>
  )
}
