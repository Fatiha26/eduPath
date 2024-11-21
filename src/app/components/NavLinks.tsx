import Link from 'next/link'
import React from 'react'
import styles from "../../../styles/nav.module.scss";
import { IoIosArrowDown } from "react-icons/io";
const NavLinks = () => {
  return (
    <div>
        <Link className={styles.navlinks} href="/course">Courses</Link><IoIosArrowDown className={styles.arrowicon}/>
        <Link className={styles.navlinks} href="/course">Instructors</Link><IoIosArrowDown className={styles.arrowicon}/>
        <Link className={styles.navlinks} href="/course">Blogs</Link><IoIosArrowDown className={styles.arrowicon}/>
        <Link className={styles.navlinks} href="/about">About</Link>
        <Link className={styles.navlinks} href="/contact">Contact</Link>
    </div>
  )
}

export default NavLinks