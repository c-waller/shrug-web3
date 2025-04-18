import styles from "./blackbutton.module.css";

type BlackButtonProps = 
{
    children: React.ReactNode,
}

export default function BlackButton({children}: BlackButtonProps)
{
    return(
        <button className={styles.blackButton} type="button" >
            {children}
        </button>
    )    
}