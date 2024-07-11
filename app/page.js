import Navbar from "./components/Navbar/Navbar";
import Textarea from "./components/Textarea/Textarea";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className={styles.main}>
        <h1 style={{gridColumn: "1 / span 2"}}>
          گۆڕینی نووسینی لە نێوان <span>AliK</span> و <span>Unicode</span>
        </h1>
        <Textarea isUnicode/>
        <Textarea isUnicode={false}/>
      </main>
    </>
  );
}
