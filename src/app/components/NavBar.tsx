import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import BlackButton from "./BlackButton";

export default function NavBar() {
    return (
        <nav className={styles.navigation}>
            <div className={styles.logoContainer}>
                <Link href={"feed"}>
                    <Image 
                        src="/logo.png" 
                        alt="Logo" 
                        width={120} 
                        height={0}
                        style={{height: 'auto'}}
                        draggable="false"
                    />
                </Link>
            </div>
            <div className={styles.buttonsContainer}>
                <BlackButton> Write a yap </BlackButton>
                <BlackButton> Log Out </BlackButton>
            </div>
        </nav>
    )
}