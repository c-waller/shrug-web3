// stylized navbar component

import styles from "./styles/NavBar.module.css";
import Link from "next/link";
import MainButton from "./MainButton";

export default function NavBar() 
{
    return (
    <header className={styles.header}>
        <div className="spacer"></div>
        <Link href={"feed"} className={styles.shrug}> 
            <h1> ¯\_(ツ)_/¯ </h1> 
        </Link>
        <nav className={styles.nav}> 
            <Link href="/new-shrug">
                <MainButton> Write a shrug </MainButton>
            </Link>
            <Link href="/">
                <MainButton className={styles.homeButton}> 
                    Home
                </MainButton>
            </Link>
        </nav>
    </header>
    )
} 