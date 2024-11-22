"use client"

import React from 'react';
import { courseData } from '../../utils/helper/dummy-data/courses';
import Image from 'next/image';
import styles from "../../../styles/course.module.scss";
import { MdTimer } from "react-icons/md";
import Carousel from "react-elastic-carousel";
import { FaBookOpen } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1024, itemsToShow: 3 }
];


const ElasticCarousel = () => {
  return (
    <div className={styles.courses__container}>
      <h2 >Our Popular Courses</h2>
      <p>
        By taking proactive steps to nurture mental health, we can enhance our quality of life,
        <br />
        build resilience, and foster a sense of inner peace and balance.
      </p>
      <div className={styles.course__slider}>
        <Carousel breakPoints={breakPoints} pagination={false} enableAutoPlay={true} autoPlaySpeed={3000}>
          {courseData.map((item, index) => (
            <div key={index} className={styles.course__card}>
              <div className={styles.image__div}>
              <Image src={item.image} alt="course" width={400} height={230} />
              <div className={styles.hover__icon}>
                <FiShoppingCart size={16} className={styles.top__icon}/>
                <FaRegHeart size={16} className={styles.top__icon}/>
              </div>
              </div>
              <div className={styles.course__link}>
                <a href="#" className={styles.course__link1}>{item.link1}</a>
                <a href="#" className={styles.course__link2}>{item.link2}</a>
              </div>
              <h3>{item.heading}</h3>
              <div className={styles.course__meta}>
                <span>{item.star}</span>
                <span className={styles.course__rating}>{item.rating}</span>
              </div>
              <div className={styles.course__details}>
                <div className={styles.course__details__inner}>
                  <MdTimer size={24} color='#9998E1' /><span>{item.time}</span>
                </div>
                <span className={styles.course__details__line}>|</span>
                <div className={styles.course__details__inner}>
                  <FaBookOpen size={24} color='#9998E1' /><span>{item.lession}</span>
                </div>
              </div>
              <div className={styles.course__footer}>
                <div className={styles.instructor__info}>
                  <Image src={item.img2} alt="Instructor" width={40} height={40}  
                  style={{ borderRadius: '50%', width: '40px', height: '40px' }}
                  />
                  <p>{item.name}</p>
                </div>
                <p className={styles.course__price}>{item.price}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ElasticCarousel;
