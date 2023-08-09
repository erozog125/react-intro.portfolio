import React from "react";
import { ItemNavbar } from "../ItemNavbar/ItemNavbar";

export const Navbar = () => {
  return (
    <nav className='flex justify-center mx-4'>
      <ul className='w-full flex justify-center'>
        <ItemNavbar route='/' content = 'Inicio' />
        <ItemNavbar route='/projects' content = 'Mis Proyectos' />
        <ItemNavbar route='/workexperience'content = 'Experiencia' />
        <ItemNavbar route='/contactme'content = 'Contáctame' />        
        <ItemNavbar target='_blank' route='https://www.youtube.com/channel/UCiofAhVDBU6UqJDARXe6gXA'content = 'Mi Canal' />        
      </ul>
    </nav>
  );
};
