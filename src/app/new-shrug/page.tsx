import styles from "./new-shrug.module.css";
import NavBar from "../components/NavBar";

export default function NewShrug()
{
    return(
        <div className={styles.container}>
            <NavBar />
            <p> This is where you write shrugs </p>
        </div>
    )
}