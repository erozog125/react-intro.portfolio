import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({ content, route, target}) => {
  return (
    <li><NavLink target={target} className=' text-yellow-500 text-xl m-3 hover:text-slate-300 hover:decoration-4' to={route}>{content}</NavLink></li>    
  )
}
