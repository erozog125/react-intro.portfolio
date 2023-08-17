import React from 'react'
import { AiFillYoutube,AiFillLinkedin,AiFillInstagram,AiFillGithub,AiOutlineWhatsApp } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const styleNetworks = 'flex justify-center items-center text-4xl m-4 hover:text-sky-400'

export const Footer = () => {
  return (
    <footer className='w-full h-1/6 px-6 flex justify-center items-center text-4xl bg-white'>
      <div className='w-1/4 flex justify-center items-center text-blue-700'>
        <NavLink target='_blank' to='https://www.youtube.com/channel/UCiofAhVDBU6UqJDARXe6gXA' className={styleNetworks}><AiFillYoutube className='mx-2' />@edwin dev</NavLink>
      </div>
      <div className='w-2/3 flex justify-center items-center'>
        <NavLink target='_blank' to='https://www.instagram.com/edwin.rozog/' className={styleNetworks} ><AiFillInstagram/></NavLink>
        <NavLink target='_blank' to='https://www.linkedin.com/in/edwin-gustavo-rozo-g%C3%B3mez-9705155b/' className={styleNetworks} ><AiFillLinkedin/></NavLink>
        <NavLink target='_blank' to='https://github.com/erozog125' className={styleNetworks} ><AiFillGithub/></NavLink>
      </div>
      <NavLink target='_blank' to='https://wa.link/lix96n'><AiOutlineWhatsApp className='text-green-600 hover:text-green-900 scale-125' /></NavLink>
    </footer>
  )
}
