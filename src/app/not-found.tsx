"use client"
import Link from 'next/link'
import styles from "./page.module.css";
import { usePathname } from 'next/navigation'

export default function NotFound() 
{
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <Link href="/feed" className={styles.title}>
        <h1> ¯\_(ツ)_/¯ Oops! </h1>
      </Link>
      <p className={styles.tagline}> 
        <strong> 404: </strong> The requested URL 
        <span className={styles.route}> { pathname } </span> doesn't exist. 
      </p>
    </div>
  )
}