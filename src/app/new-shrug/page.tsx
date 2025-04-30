"use client";

import styles from "./new-shrug.module.css";
import MainButton from "../components/MainButton";
import RequireWallet from "../components/RequireWallet";

export default function NewShrug() 
{
    function autoGrow(e: any) 
    {
        const element = e.target;
        element.style.height = "5px";
        element.style.height = `${element.scrollHeight}px`;
    }
    
    return (
        <RequireWallet>
            <div className={styles.container}>
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
        </RequireWallet>
    );
}