import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import { BsArrowRight } from "react-icons/bs";
import styles from "./LoginPage.module.css";

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
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className={styles.supElements}>
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.supBtn} type="submit">
                                Login <BsArrowRight />
                            </button>
                            <Link href="/signup">
                                <button
                                    className={styles.signUpButton}
                                    type="submit"
                                >
                                    Sign up <BsArrowRight />
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
