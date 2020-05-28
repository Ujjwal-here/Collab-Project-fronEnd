
import styles from './Sidebar.module.css';
import { IoMdAddCircle } from 'react-icons/io';
import { AiFillHome, AiFillSetting } from 'react-icons/ai'
import { MdBook } from 'react-icons/md'

const Sidebar = () => {
    return (
        <div className={styles.sbarMain}>
            <h1 className={styles.sbarh1}>No Name</h1>
            <div className={styles.sbarAddPost}>
                <IoMdAddCircle />
                New Post
                </div>
            <div className={styles.sbHome}><AiFillHome />Home</div>
            <div className={styles.sbPost}><MdBook /> My Post</div>
            <div className={styles.sbSettings}>
                <AiFillSetting />
                Settings
            </div>
        </div>
    )
}

export default Sidebar