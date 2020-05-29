import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
    return (
        <div className={styles.supMain}>
            <div className={styles.col1}>
                <img src="/assets/Group4.svg" alt="img"></img>
            </div>
            <div className={styles.col2}>
                <div className={styles.supForm}>
                    <h1>Sign Up</h1>
                    <form action="">
                        <div className={styles.supElements}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
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
                        <div className={styles.supElements}>
                            <TextField
                                label="Confirm password"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div>
                            <button className={styles.supBtn} type="submit">
                                Submit
                            </button>
                        </div>
                        <div className={styles.loginMessage}>
                            Already a User?{" "}
                            <Link href="/login">
                                <a>Login here</a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
