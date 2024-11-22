"use client";

import { useState } from "react";
import styles from "../../../styles/provide.module.scss";
import Image from "next/image";

const Provide = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const data = [
        {
            title: "Personalized routine",
            content:
                "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.",
        },
        {
            title: "Follow-up after completing courses",
            content:
                "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.",
        },
        {
            title: "Access to additional resources",
            content:
                "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.",
        },
        {
            title: "Free community support",
            content:
                "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.",
        },
    ];

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className={styles.accordion__body}>
            <h2>We provide...</h2>
            <div className={styles.accordion__inner}>
                <div className={styles.accordion}>
                    {data.map((item, index) => (
                        <div key={index} className={styles.accordion__item}>
                            <div
                                className={`${styles.accordion__title} ${index === activeIndex ? styles.active : ""
                                    }`}
                                onClick={() => handleToggle(index)}
                            >
                                <span className={styles.checkmark}>&#10003;</span> {item.title}
                            </div>
                            {index === activeIndex && (
                                <div className={styles.accordion__content}>{item.content}</div>
                            )}
                        </div>
                    ))}
                    <button className={styles.btn}>Learn More About Our Services</button>
                </div>
                <div>
                    <Image src='/image/accordion.png'
                        alt="accordion" width={585} height={600} />
                </div>
            </div>
        </div>
    );
};

export default Provide;
