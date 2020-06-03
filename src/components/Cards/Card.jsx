import { FaUserCircle } from 'react-icons/fa'
import styles from "./Card.module.css";
import Tags from "./Tags";

const Card = () => {
    return (
        <div className={styles.cardMain}>
            <div className={styles.cardCol1}>
                <div className={styles.cardTitle}>
                    Dashboard for an IOT Application
                </div>
                <div className={styles.cardDescription}>
                    A customizable dashboard for an IOT application, which
                    allows users to manage...
                </div>
            </div>
            <div className={styles.cardCol2}>
                <div className={styles.userInfo}>
                    <span><FaUserCircle size="20px" /></span>
                    <span className={styles.userName}>John Doe</span>
                </div>
                <Tags />
            </div>
            <div className={styles.rating}>
                <span className={styles.ratingButton}>&#x25B2;</span>
                <span>15</span>
                <span className={styles.ratingButton}>&#x25BC;</span>
            </div>
        </div>
    );
};
export default Card;
