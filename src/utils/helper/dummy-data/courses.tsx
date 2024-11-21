import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { TiCalculator, TiTick } from "react-icons/ti";

export const courseData = [
    {
        image: '/image/course1.png',
        link1: 'Beginner',
        link2: 'Nutrition and Diet',
        heading: (
            <>
              Foundation of Sleep: Sleep<br />
              Science and Sleep Disorders
            </>
          ),
        star: <div><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke/></div>,
        rating: '4.9 (566)',
        time: '6h 34m',
        lession: '3 Lessons',
        img2: '/image/pp1.png',
        name: 'Kilian Murphe',
        price: '$40'
    },
    {
        image: '/image/course2.png',
        link1: 'Intermediate ',
        link2: 'Health and Wellness',
        heading: (
            <>
              Parenting in the Digital Age:<br />
              Navigating Screen Time
            </>
          ),
        star: <div><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke/></div>,
        rating: '4.9 (456)',
        time: '6h 34m',
        lession: '3 Lessons',
        img2: '/image/pp2.png',
        name: 'Sarah Hopkins',
        price: '$50'
    },
    {
        image: '/image/course3.png',
        link1: 'Beginner',
        link2: 'Nutrition and Diet',
        heading: (
            <>
              Holistic Health: Integrating<br />
              Mind, Body, and Spirit
            </>
          ),
        star: <div><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke/></div>,
        rating: '4.9 (389)',
        time: '6h 34m',
        lession: '3 Lessons',
        img2: '/image/pp3.png',
        name: 'Luna Karim',
        price: (
            <>
              <button style={{padding: '0.2rem 0.4rem'}}>Enrolled</button>
            </>
          ),
    },
    {
        image: '/image/course4.png',
        link1: 'Beginner',
        link2: 'Nutrition and Diet',
        heading: (
            <>
              Introduction to healthy Diet<br />
              and Nutrition
            </>
          ),
        star: <div><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke/></div>,
        rating: '4.9 (566)',
        time: '6h 34m',
        lession: '3 Lessons',
        img2: '/image/pp4.png',
        name: 'Kate Winslate',
        price: '$40'
    }
]