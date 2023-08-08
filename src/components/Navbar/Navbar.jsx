import React from "react";
import { ItemNavbar } from "../ItemNavbar/ItemNavbar";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <ItemNavbar content = 'Home' />
        <ItemNavbar content = 'Projects' />
        <ItemNavbar content = 'Contact US' />        
      </ul>
    </nav>
  );
};
