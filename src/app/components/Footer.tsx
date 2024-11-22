import React from 'react'
import { footerData } from '../../utils/helper/dummy-data/footer'
import styles from "../../../styles/footer.module.scss";
import { FaDiscord, FaFacebook, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className={styles.footer__container}>
            <div className={styles.footer__container__links}>
                {footerData.map((item, index) => (
                    <div key={index} className={styles.footer__container__links__inner}>
                        <p>{item.heading}</p>
                        <a href="#">{item.link1}</a>
                        <a href="#">{item.link2}</a>
                        <a href="#">{item.link3}</a>
                        <a href="#">{item.link4}</a>
                        <a href="#">{item.link5}</a>
                        <a href="#">{item.link6}</a>
                    </div>
                ))}
            </div>
            <div className={styles.footer__container__social}>
                <p>Join our official channels</p>
                <div className={styles.footer__container__socialicon}>
                    <FaSquareInstagram className={styles.footer__container__icon} size={32} />
                    <FaSquareXTwitter className={styles.footer__container__icon} size={32} />
                    <FaFacebook className={styles.footer__container__icon} size={32} />
                    <FaDiscord className={styles.footer__container__icon} size={32} />
                </div>
            </div>
            <div className={styles.footer__container__copyright}>
                <p>© 2024 EduPath. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer