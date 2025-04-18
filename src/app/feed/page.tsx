// feed page

import styles from "./feed.module.css";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Feed() 
{
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}> 
        <h1 className={styles.latest}> #main </h1>
        <article className={styles.article}>
          <h2> Title </h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit.</p>
          <p> Date • Author </p>
          <p> #main </p>
        </article>

        <article className={styles.shrug}>
          <h2> Title </h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit.</p>
          <p> Date • Author </p>
          <p> #main </p>
        </article>

        <article className={styles.shrug}>
          <h2> Title </h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit.</p>
          <p> Date • Author </p>
          <p> #main </p>
        </article>

        <article className={styles.shrug}>
          <h2> Title </h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit.</p>
          <p> Date • Author </p>
          <p> #main </p>
        </article> 
      </main>

    </div>
  );
}
