"use client";

import Image from "next/image";
import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import { reviewData } from "../../utils/helper/dummy-data/review";
import styles from "../../../styles/review.module.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1024, itemsToShow: 4 },
];

const Review = () => {
  return (
    <div className={styles.review}>
      <h2 className={styles.heading}>
        Learners love EduPath. See why <br /> they rate us 4.9 out of 5
      </h2>
      <ReactElasticCarousel
        breakPoints={breakPoints}
        pagination={true}
        enableAutoPlay={true}
        autoPlaySpeed={3000}
        showArrows={false}
      >
        {reviewData.map((item, index) => (
          <div key={index} className={styles.review__card}>
            <div className={styles.review__card__top}>
              <div className={styles.review__card__profile}>
                <Image
                  src={item.image1}
                  width={56}
                  height={56}
                  alt="Profile Picture"
                  style={{ borderRadius: "50%" }}
                />
                <p className={styles.review__card__name}>{item.name}</p>
              </div>
              <div>
                <Image
                  src={item.image2}
                  width={26}
                  height={19}
                  alt="Rating Icon"
                />
              </div>
            </div>
            <div className={styles.review__card__text}>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </ReactElasticCarousel>
    </div>
  );
};

export default Review;
