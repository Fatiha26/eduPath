import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import styles from "../../../styles/banner.module.scss";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerText}>
                <div>
                    <span className={styles.banner__icon}>
                        <FaStar className={styles.starIcon} />
                        <FaStar className={styles.starIcon} />
                        <FaStar className={styles.starIcon} />
                        <FaStar className={styles.starIcon} />
                        <FaRegStarHalfStroke /></span>
                    <span className={styles.banner__rating}>4.9 (566)</span>
                </div>
                <h1>#1 Platform<br />
                    Powering Health <br />
                    and Wellness</h1>
                <h3>We&apos;re restoring home as the primary<br /> place of personal well-being</h3>
                <p>Health is not just about what you&apos;re eating. It&apos;s also<br /> about what you&apos;re thinking and saying</p>
                <div>
                    <button className={styles.btn1}>Browse Courses</button>
                    <button className={styles.btn2}>Get Started</button>
                </div>
            </div>
            <div className={styles.bannerImg}>
                <Image src='/image/banner.png'
                    alt='banner image'
                    width={674}
                    height={760}
                />
            </div>
        </div>
    )
}

export default Banner