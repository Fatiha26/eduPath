import Link from 'next/link';
import React from 'react';
import styles from "../../../styles/nav.module.scss";
import { IoIosArrowDown } from "react-icons/io";

const NavLinks = () => {
  const links = [
    { name: "Courses", href: "/course", hasDropdown: true },
    { name: "Instructors", href: "/instructors", hasDropdown: true },
    { name: "Blogs", href: "/blogs", hasDropdown: true },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  return (
    <div className={styles.navContainer}>
      {links.map((link, index) => (
        <div key={index} className={styles.navItem}>
          <Link className={styles.navlinks} href={link.href}>
            {link.name}
          </Link>
          {link.hasDropdown && <IoIosArrowDown className={styles.arrowicon} />}
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
