import Image from "next/image";
import styles from "../../styles/page.module.scss";
import Banner from "./components/Banner";
import ElasticCarousel from "./components/Courses";
import Provide from "./components/Provide";
import Review from "./components/Review";

export default function Home() {
  return (
    <div className={styles.page}>
       <main>
         <Banner />
         <ElasticCarousel />
         <Provide />
         <Review />
       </main>
    </div>
  );
}
