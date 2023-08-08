import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({ content, route}) => {
  return (
    <li><NavLink activeClassName='active-link' className='hover:text-slate-300 shadow-xl' to={route}>{content}</NavLink></li>    
  )
}
