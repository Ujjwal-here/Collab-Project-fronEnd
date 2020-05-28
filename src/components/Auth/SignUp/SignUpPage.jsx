import styles from './SignUpPage.module.css'

const SignUpPage = () => {
    return (
        <div className={styles.supMain}>
            <img src="/assets/Group4.svg" alt="img"></img>
            <div className={styles.supForm}>
                <h1>Sign Up</h1>
                <form action="">
                    <div className={styles.supElements}>
                        <label htmlFor="name"><h3>Name:</h3></label>
                        <input className={styles.supInput} className={styles.supInput} type="text" name="name" placeholder="Enter your name" />
                    </div>
                    <div className={styles.supElements}>
                        <label htmlFor="email"><h3>Email:</h3></label>
                        <input className={styles.supInput}  type="email" name="email" placeholder="Enter your email address" />
                    </div>
                    <div className={styles.supElements}>
                        <label htmlFor="password"><h3>Password:</h3></label>
                        <input className={styles.supInput}  type="password" placeholder="Enter password" />
                    </div>
                    <div className={styles.supElements}>
                        <label htmlFor="password"> <h3>Confirm Password:</h3></label>
                        <input className={styles.supInput} type="password" placeholder="Confirm Password" />
                    </div>
                    <div>
                        <button className={styles.supBtn} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUpPage
