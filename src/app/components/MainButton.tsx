// stylized button component

import styles from './MainButton.module.css';

type MainButtonProps = 
{
    children: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function MainButton({ children, className, onClick }: MainButtonProps) 
{
    return (
        <button
            className={`${styles.mainButton} ${className || ""}`}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
}