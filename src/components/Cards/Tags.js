import styles from "./Card.module.css";

const Tags = () => {
    return (
        <div className={styles.tags}>
            <p className={`${styles.tag1} ${styles.tag}`}>React</p>
            <p className={`${styles.tag2} ${styles.tag}`}>Nodejs</p>
        </div>
    );
};

export default Tags;
