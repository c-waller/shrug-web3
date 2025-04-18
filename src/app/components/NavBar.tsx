import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import BlackButton from "./BlackButton";

export default function NavBar() 
{
    return (
    <header className={styles.header}>
        <div className="spacer"></div>

        <Link href={"feed"} className={styles.shrug}> 
            <h1> ¯\_(ツ)_/¯ </h1> 
        </Link>

        <nav className={styles.nav}> 
            <BlackButton> Make a post </BlackButton>
            <BlackButton> Log Out </BlackButton>
        </nav>
    </header>
    )
} 