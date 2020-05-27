import styles from "./Card.module.css";
import Tags from "./Tags";

const Card = () => {
    return (
        <div className={styles.cardMain}>
            <div className={styles.cardCol1}>
                <h2 className={styles.cardh3}>Dashboard for an IOT Application</h2>
                <div className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus ipsam, totam voluptatum, vel nam a beatae excepturi
                    minima...
                </div>
            </div>
            <div className={styles.cardCol2}>
                <div className={styles.userInfo}>
                    <span>Icon</span>
                    <span>John Doe</span>
                </div>
                <Tags />
            </div>
            <div>
                <h3>Upvote</h3>
            </div>
        </div>
    );
};
export default Card;
