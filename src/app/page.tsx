// landing page

import MainButton from "./components/MainButton";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() 
{
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.title}>
        <h1> ¯\_(ツ)_/¯ Shrug </h1>
      </Link>
      <p className={styles.tagline}> A quiet corner of the internet for whatever's on your mind. </p>
      <Link href={"/feed"}> <MainButton> Discover </MainButton> </Link>
    </div>
  );
}
