// landing page

import MainButton from "./components/MainButton";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() 
{
  return (
    <div className={styles.container}>
      <h1> ¯\_(ツ)_/¯ </h1>
      {/* <MainButton> Sign Up </MainButton> */}
      <Link href={"/feed"}> <MainButton> Discover </MainButton> </Link>
    </div>
  );
}
