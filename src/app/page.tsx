import Image from "next/image";
import styles from "../../styles/page.module.scss";
import Banner from "./components/Banner";
import ElasticCarousel from "./components/Courses";

export default function Home() {
  return (
    <div className={styles.page}>
       <main>
         <Banner />
         <ElasticCarousel />
       </main>
    </div>
  );
}
