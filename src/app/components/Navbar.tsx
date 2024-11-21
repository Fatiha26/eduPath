import Image from 'next/image'
import React from 'react'
import NavLinks from './NavLinks'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import styles from "../../../styles/nav.module.scss";


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <Image src={'/image/Logo.png'}
                    width={50}
                    height={34}
                    alt='logo'>
                </Image>
            </div>
            <NavLinks />
            <div className={styles.navBtn}>
            <HiOutlineShoppingBag size={26} className={styles.shoppingIcon} />
            <button>Login</button>
            </div>
                

        </nav>
    )
}

export default Navbar