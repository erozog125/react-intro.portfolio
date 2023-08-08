import React from 'react'

export const Card = ({ img, alt, title, description }) => {
  return (
    <div className='w-80 h-96 rounded-2xl bg-slate-600 m-6'>
      <img className='w-full rounded-none rounded-t-2xl h-2/5 object-cover object-center' src={img} alt={alt} />
      <h2 className='text-center text-sky-500 text-3xl mt-1'>{title}</h2>
      <p className='w-full text-center text-slate-200 p-2'>{description}</p>
    </div>
  )
}
