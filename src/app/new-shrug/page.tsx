import styles from "./new-shrug.module.css";
import NavBar from "../components/NavBar";

export default function NewShrug()
{
    return(
        <div className={styles.container}>
            <NavBar />
            <main className={styles.main}>
                <form className={styles.form}>
                    <div>
                        <input className={styles.title} type="text" placeholder="Title"/>
                    </div>
                    <div>
                        <input className={styles.description} type="text" placeholder="Say something to #main."/>
                    </div>
                </form>
            </main>
        </div>
    )
}