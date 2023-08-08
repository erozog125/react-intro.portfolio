import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({ content, route}) => {
  return (
    <li><NavLink className=' text-yellow-500 text-2xl m-3 hover:text-slate-300 hover:decoration-4' to={route}>{content}</NavLink></li>    
  )
}
