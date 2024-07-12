import Navbar from "./components/Navbar/Navbar";
import Textarea from "./components/Textarea/Textarea";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          گۆڕینی نووسین لە نێوان <span>AliK</span> و <span>Unicode</span>
        </h1>
        <Textarea isUnicode/>
        <Textarea isUnicode={false}/>
      </main>
    </>
  );
}
