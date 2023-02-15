import styles from './page.module.css'



export const Signup = () =>{
  const makeUser = (e: any) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
        username:{value: string};
        email: { value: string };
        password: { value: string };
    };
    const username = target.username.value;
    const email = target.email.value;
    const password = target.password.value;
    console.log(username,'',email, ' ', password)
}
  return (
    <main className={styles.main}>
      <form onSubmit={(e) => makeUser(e)} method="post">
      <h1>Login Sucker</h1>
      Username<input type="text" title='Email' className={styles.element} id='username'/>
      Email<input type="text" title='Email' className={styles.element} id='email'/>
      Password<input type="password" title='password'  className={styles.element} id='password' />
      Confirm Password<input type="password" title='password'  className={styles.element} />
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