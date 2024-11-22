"use client"

import Image from 'next/image'
import React from 'react'
import { reviewData } from '../../utils/helper/dummy-data/review'
import Carousel from "react-elastic-carousel";
import styles from "../../../styles/review.module.scss";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1024, itemsToShow: 4 }
  ];

  
const Review = () => {
  return (
    <div className={styles.review}>
        <h2 className={styles.heading}>Learners love EduPath. See why <br/> they rate us 4.9 out of 5</h2>
        <Carousel breakPoints={breakPoints} showArrows={false} pagination={true} enableAutoPlay={true} autoPlaySpeed={3000}>
        {reviewData.map((item,index)=>(
            <div key={index} className={styles.review__card}>
            <div className={styles.review__card__top}>
                <div>
                <Image src={item.image1} width={56} height={56} alt='pp' 
                style={{ borderRadius: '50%', width: '56px', height: '56px' }}/>
                <p className={styles.review__card__name}>{item.name}</p>
                </div>
                <div>
                <Image src={item.image2} width={26} height={19} alt='pp' />
                </div>                
            </div>
            <div className={styles.review__card__text}>
                <p>{item.text}</p>
            </div>
        </div>
        ))}
        </Carousel>
    </div>
  )
}

export default Review