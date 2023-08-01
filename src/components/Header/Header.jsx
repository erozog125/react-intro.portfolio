import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'
const img = 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400'

export const Header = () => {
  return (
    <header>
      <div className="container-header">
        <img className='img-header' src={img} alt='img-logo' />
        <h1>Portafolio</h1>
      </div>
        <Navbar />
    </header>
  )
}
