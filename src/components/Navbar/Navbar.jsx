import React from "react";
import { ItemNavbar } from "../ItemNavbar/ItemNavbar";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <ItemNavbar route='/' content = 'Home' />
        <ItemNavbar route='/projects' content = 'Projects' />
        <ItemNavbar route='/workexperience'content = 'Work Experience' />
        <ItemNavbar route='/contactme'content = 'Contact Me' />        
      </ul>
    </nav>
  );
};
