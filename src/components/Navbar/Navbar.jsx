import { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LayoutContext } from '../../context/LayoutContext';
import styles from './Navbar.module.css';

const Navbar = () => {
    const { sideBar, toggleSideBar } = useContext(LayoutContext);
    const isAuthenticated = true;
    return (
        <div>
            <ul className={styles.navContainer}>
                {isAuthenticated ? (
                    <GiHamburgerMenu
                        onClick={() => toggleSideBar(sideBar)}
                        size="1.35em"
                        className={styles.hamburger}
                    />
                ) : (
                    <>
                        <li className={styles.navElements}>Logo/Name</li>
                        <li className={`${styles.navFloat} ${styles.navli}`}>
                            Login
                        </li>
                        <li className={styles.navFloat}>SignUp</li>
                    </>
                )}
            </ul>
        </div>
    );
};
export default Navbar;
