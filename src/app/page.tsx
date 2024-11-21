import Image from "next/image";
import styles from "../../styles/page.module.scss";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className={styles.page}>
       <main>
         <Banner />
       </main>
    </div>
  );
}
