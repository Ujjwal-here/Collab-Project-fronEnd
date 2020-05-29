import Link from "next/link";
import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { BsArrowRight, BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
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
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleShowPassword}
                                            >
                                                {showPassword ? (
                                                    <BsEyeFill />
                                                ) : (
                                                    <BsEyeSlashFill />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
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
