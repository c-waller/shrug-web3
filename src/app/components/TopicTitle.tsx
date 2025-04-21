import styles from "./TopicTitle.module.css";

type TopicTitleProps =
{
    children: React.ReactNode;
}

export default function TopicTitle({children}: TopicTitleProps)
{
    return (
        <h1 className={styles.topicTitle}> {children} </h1>
    );
}