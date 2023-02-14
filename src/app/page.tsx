import styles from './page.module.css'



export const Home = () =>{
  return (
    <main className={styles.main}>
      <h1>Welcome to Dream of Doom</h1>
      
       <a href='sign-up'>
       <button className={styles.button} >Sign up</button>
       </a>
       <a href='sign-in'>
       <button className={styles.button} >Login</button>
       </a>
      
    </main>
  )
}
