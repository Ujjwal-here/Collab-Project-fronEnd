import styles from "./Sidebar.module.css";
import { IoMdAddCircle } from "react-icons/io";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { MdBook } from "react-icons/md";
import { useState } from "react";

const Sidebar = () => {
    const active = useState('home')
    return (
        <div className={styles.sbarMain}>
            <div className={styles.sbarh1}>NONAME</div>
            <button className={styles.sbarAddPost}>
                <IoMdAddCircle size="1.35em" />
                <span className={styles.sbNewButLabel}>New Post</span>
            </button>
            <div className={styles.sbHome}>
                <AiFillHome size="1.2em" />
                <span className={styles.sbItemName}>Home</span>
            </div>
            <div className={styles.sbPost}>
                <MdBook size="1.2em" />
                <span className={styles.sbItemName}>My Post</span>
            </div>
            <div className={styles.sbSettings}>
                <AiFillSetting size="1.2em" />
                <span className={styles.sbItemName}>Settings</span>
            </div>
        </div>
    );
};

export default Sidebar;
