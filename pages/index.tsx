import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Calendar from "../components/Calendar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     
        <h1>index page</h1> 
        <Calendar />

    </div>
  )
}

export default Home
