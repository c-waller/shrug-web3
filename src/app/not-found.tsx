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
      <h1 className={styles.title}> ¯\_(ツ)_/¯ Shrug </h1>
      <p className={styles.tagline}> <strong> 404: </strong> The requested URL <span className={styles.route}>{pathname}</span> doesn't exist. </p>
      <Link href="/feed">
        <MainButton> To safety </MainButton>
      </Link>
    </div>
  )
}