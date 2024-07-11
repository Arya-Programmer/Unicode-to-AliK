import Navbar from "./components/Navbar/Navbar";
import Textarea from "./components/Textarea/Textarea";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className={styles.main}>
        <Textarea/>
      </main>
    </>
  );
}
