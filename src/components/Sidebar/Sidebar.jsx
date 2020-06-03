import { useContext } from 'react';
import styles from './Sidebar.module.css';
import { IoMdAddCircle } from 'react-icons/io';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { MdBook } from 'react-icons/md';
import { useState } from 'react';
import { LayoutContext } from '../../context/LayoutContext';

const Sidebar = () => {
    const active = useState('home');
    const { sideBar, toggleSideBar } = useContext(LayoutContext);
    let sideBarStyle =
        sideBar === 'expanded' ? styles.expanded : styles.shrinked;
    return (
        <div className={styles.sidebarLeft} onMou>
            <div className={sideBarStyle}>
                <div className={styles.sbarh1}>NONAME</div>
                <button className={styles.sbarAddPost}>
                    <IoMdAddCircle size="1.35em" />
                    <span className={styles.sbNewButLabel}>New Post</span>
                </button>
                <div
                    className={`${styles.sbHome} ${styles.sideTab} ${styles.selectedTab}`}
                >
                    <AiFillHome size="1.2em" />
                    <span className={styles.sbItemName}>Home</span>
                </div>
                <div className={`${styles.sideTab}`}>
                    <MdBook size="1.2em" />
                    <span className={styles.sbItemName}>My Post</span>
                </div>
                <div className={`${styles.sideTab}`}>
                    <AiFillSetting size="1.2em" />
                    <span className={styles.sbItemName}>Settings</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
