import styles from './page.module.css';
import axios from 'axios'

export const SignIn = () => {
    const showUser = async (e: any) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
        console.log(email, ' ', password)
        const userdata = {
            password,
            email
        };

        await axios.post('http://localhost:4200/auth/signin', userdata)
            .then((response) => {
                console.log(response);
            })
            .catch( (error) => {
                console.log(error);
            });
        console.log(userdata);



    }
    return (
        <main className={styles.main}>
            <form onSubmit={(e) => showUser(e)} method="post">
                <h1>Login Sucker</h1>
                Email<input type="text" title='Email' className={styles.element} id="email" />
                Password<input type="password" title='password' className={styles.element} id="password" />
                <button type="submit">LOG IN</button>
                <div className={styles.elements}>
                    <h3>don't have an account create one</h3>

                </div>
            </form>
            <a href='sign-up'>
                <button  >Sign up</button>
            </a>
        </main>

    )
}