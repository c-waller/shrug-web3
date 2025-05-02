// skeleton component

import styles from "./styles/ShrugSkeleton.module.css";

export default function ShrugSkeleton() 
{
  return (
    <article className={styles.skeleton}>
      <div className={styles.title}></div>
      <div className={styles.lines}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.lineShort}></div>
      </div>
      <div className={styles.meta}></div>
    </article>
  );
}