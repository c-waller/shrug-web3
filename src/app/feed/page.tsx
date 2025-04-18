import styles from "./feed.module.css";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Feed() 
{
  return (
    <div className={styles.container}>
        <NavBar />
        <p> content here </p>
    </div>
  );
}
