import styles from './page.module.css'



export const Signup = () =>{
  return (
    <main className={styles.main}>
      <h1>Login Sucker</h1>
      Username<input type="text" title='Email' className={styles.element}/>
      Email<input type="text" title='Email' className={styles.element}/>
      Password<input type="password" title='password'  className={styles.element} />
      Confirm Password<input type="password" title='password'  className={styles.element} />
      <button>SIGN IN</button>
      <div className={styles.elements}>
       <h3>have an account </h3>
       <a href=''>
       <button >LOG IN</button>
       </a>
      </div>
    </main>
  )
}