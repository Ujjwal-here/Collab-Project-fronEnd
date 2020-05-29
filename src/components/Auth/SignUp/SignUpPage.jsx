import Link from "next/link";
import { useState } from "react";
import styles from "./SignUpPage.module.css";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
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
                                type="email"
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
                        <div className={styles.supElements}>
                            <TextField
                                label="Confirm password"
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
