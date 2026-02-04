import Gallery from "./components/gallery";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <main className={styles.main}>
      <Gallery />
    </main>
  );
}
