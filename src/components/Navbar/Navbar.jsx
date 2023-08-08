import React from "react";
import { ItemNavbar } from "../ItemNavbar/ItemNavbar";

export const Navbar = () => {
  return (
    <nav className='flex justify-center mx-4'>
      <ul className='w-full flex justify-center'>
        <ItemNavbar route='/' content = 'Home' />
        <ItemNavbar route='/projects' content = 'Projects' />
        <ItemNavbar route='/workexperience'content = 'Work Experience' />
        <ItemNavbar route='/contactme'content = 'Contact Me' />        
      </ul>
    </nav>
  );
};
