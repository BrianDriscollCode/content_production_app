import type { NextPage } from 'next';
import styles from '../styles/Page.module.css';
import Calendar from "../components/calendar/Calendar";

const calendar: NextPage = () => {
  return (
    <div className={styles.container}>
     
        <Calendar />

    </div>
  )
}

export default Calendar
