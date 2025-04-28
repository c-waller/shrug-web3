"use client"
import Link from 'next/link'
import MainButton from './components/MainButton'
import styles from "./page.module.css";
import { usePathname } from 'next/navigation'

export default function NotFound() 
{
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> (&times;_&times;；) 404 </h1>
      <p className={styles.tagline}> <span className={styles.route}>{pathname}</span> doesn't exist. Was it ever really here? </p>
      <Link href="/feed">
        <MainButton> Home </MainButton>
      </Link>
    </div>
  )
}