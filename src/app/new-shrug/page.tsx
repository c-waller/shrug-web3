'use client';

import styles from "./new-shrug.module.css";
import NavBar from "../components/NavBar";
import MainButton from "../components/MainButton";

export default function NewShrug() 
{
    function autoGrow(e: any) 
    {
        const element = e.target;
        element.style.height = "5px";
        element.style.height = `${element.scrollHeight}px`;
    }
    
    return (
        <div className={styles.container}>
            <NavBar />
            <main className={styles.main}>
                <form className={styles.form}>
                    <div>
                        <textarea
                            className={styles.title}
                            placeholder="Title"
                            onInput={autoGrow}
                        />
                    </div>
                    <div>
                        <textarea
                            className={styles.description}
                            placeholder="Say something to #main"
                            onInput={autoGrow}
                        />
                    </div>
                    <p className={styles.metadata}> just now · someone </p>
                </form>
                <div className={styles.postButtonWrapper}>
                    <MainButton> Post </MainButton>
                </div>
            </main>
        </div>
    );
}