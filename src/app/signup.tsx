import styles from './page.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';

export const Signup = () => {
  const router = useRouter();
  const makeUser = async (e: any) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      username: { value: string };
      email: { value: string };
      password: { value: string };
    };
    const username = target.username.value;
    const email = target.email.value;
    const password = target.password.value;
    if(username && email.length && password.length){
    const userdata = {
      username,
      email,
      password
    };
    await axios.post('http://localhost:4200/auth/signup', userdata)
      .then((response) => {
        console.log(response);
        router.push('/sign-in')
      })
      .catch((error) => {
        console.log(error);
      });

     }else{
      alert('please fill all informaton ');
    } 
  }

  return (
    <main className={styles.main}>
      <form onSubmit={(e) => makeUser(e)} method="post">
        <h1>Login Sucker</h1>
        Username<input type="text" title='Email' className={styles.element} id='username' />
        Email<input type="email" title='Email' className={styles.element} id='email' />
        Password<input type="password" title='password' className={styles.element} id='password' />
        Confirm Password<input type="password" title='password' className={styles.element} />
        <button type='submit'>SIGN IN</button>

      </form>
      <div className={styles.elements}>
        <h3>have an account </h3>
        <a href='sign-in'>
          <button >LOG IN</button>
        </a>
      </div>
    </main>
  )
}