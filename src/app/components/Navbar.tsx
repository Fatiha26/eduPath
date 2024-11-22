"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { FaBars } from 'react-icons/fa'; // Mobile menu icon
import styles from "../../../styles/nav.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <h1>Logo</h1>
      </div>
      <NavLinks isMenuOpen={isMenuOpen} />
      <FaBars size={26} onClick={toggleMenu} className={styles.menuIcon} />

      <div className={styles.navBtn}>
        <HiOutlineShoppingBag size={26} className={styles.shoppingIcon} />
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
