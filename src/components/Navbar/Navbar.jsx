import React from "react";
import { ItemNavbar } from "../ItemNavbar/ItemNavbar";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <ItemNavbar content = 'Home' />
        <ItemNavbar content = 'About Us' />
        <ItemNavbar content = 'Contact US' />
        <ItemNavbar content= 'FAQ' />
      </ul>
    </nav>
  );
};
