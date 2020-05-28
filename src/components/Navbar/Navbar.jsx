import styles from './Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const isAuthenticated = true
    return (
        <div>
            <ul className={styles.navContainer}>
                {isAuthenticated ? <GiHamburgerMenu /> : <><li className={styles.navElements}>Logo/Name</li>
                    <li className={`${styles.navFloat} ${styles.navli}`}>Login</li>
                    <li className={styles.navFloat}>SignUp</li></>}
            </ul>
        </div>
    )
}
export default Navbar