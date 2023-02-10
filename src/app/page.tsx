import styles from './page.module.css'



export const Home = () =>{
  return (
    <main className={styles.main}>
      <h1>Login Sucker</h1>
      Email<input type="text" title='Email' className={styles.element}/>
      Password<input type="password" title='password'  className={styles.element} />
      <button>LOG IN</button>
      <div className={styles.elements}>
       <h3>don't have an account create one</h3>
       <a href='sign-up'>
       <button  >Sign up</button>
       </a>
      </div>
    </main>
  )
}
