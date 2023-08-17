import React from 'react'
import { Navbar } from '../Navbar/Navbar'
const img = 'https://res.cloudinary.com/erpersonalprojects/image/upload/v1691531613/projects/logo_k5dv7q.jpg'

export const Header = () => {
  return (
    <header className='w-full h-1/5 flex justify-center items-center'>
      <div className="flex justify-center items-center">
        <img className='w-28 h-28 rounded-full m-4' src={img} alt='img-logo' />
        <h1 className='text-sky-600 text-2xl text-center font-extrabold mx-4'>Edwin Rozo Gómez</h1>
      </div>
        <Navbar />
    </header>
  )
}
