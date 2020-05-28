import styles from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <div className={styles.supMain}>
            <img src="/assets/Group5.svg" alt="img"></img>
            <div className={styles.supForm}>
                <h1>Login</h1>
                <form action="">
                    <div className={styles.supElements}>
                        <label htmlFor="email"><h3>Email:</h3></label>
                        <input className={styles.supInput} type="email" name="email" placeholder="Enter your email address" />
                    </div>
                    <div className={styles.supElements}>
                        <label htmlFor="password"><h3>Password:</h3></label>
                        <input className={styles.supInput} type="password" placeholder="Enter password" />
                    </div>
                    <div>
                        <button className={styles.supBtn} type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default LoginPage