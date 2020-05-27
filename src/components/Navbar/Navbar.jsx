import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <ul className={styles.navContainer}>
                <li className={styles.navElements}>Logo/Name</li>
                <li className={`${styles.navFloat} ${styles.navli}`}>Login</li>
                <li className={styles.navFloat}>SignUp</li>
            </ul>
        </div>
    )
}
export default Navbar