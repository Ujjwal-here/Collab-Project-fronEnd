import styles from "./LoginPage.module.css";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {BsArrowRight} from 'react-icons/bs'

const LoginPage = () => {
    return (
        <div className={styles.supMain}>
            <div className={styles.col1}>
                <img src="/assets/Group5.svg" alt="img"></img>
            </div>
            <div className={styles.col2}>
                <div className={styles.supForm}>
                    <div className={styles.title}>Login</div>
                    <form action="">
                        <div className={styles.supElements}>
                            <TextField label="Email" variant="outlined" fullWidth />
                        </div>
                        <div className={styles.supElements}>
                            <TextField label="Password" variant="outlined" fullWidth />
                        </div>
                        <div>
                            <button className={styles.supBtn} type="submit">
                                Login <BsArrowRight />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
