import styles from "./page.module.css";
import Link from "next/link";

export default function Home() 
{
  return (
    <div className={styles.container}>
      <h1> Welcome To Yap! </h1>
      <button> Sign In </button>
      <Link href={"feed"}> <button> View Feed </button> </Link>
    </div>
  );
}
