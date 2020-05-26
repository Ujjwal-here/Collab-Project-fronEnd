import styles from "./Card.module.css";
import Tags from "./Tags";

const Card = () => {
    return (
        <div className={styles.cardMain}>
            <div className={styles.cardCol1}>
                <h4>Dashboard for an IOT Application</h4>
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
        </div>
    );
};
export default Card;
