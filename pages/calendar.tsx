import type { NextPage } from 'next';
import styles from '../compiled_styles/Page.module.css';

//V1 Calendar
import Calendar_Component from "../components/calendar/Calendar_Component";

//V2 Calendar
import Calendar_Main from "../components/calendarV2/Calendar_Main";

const calendar: NextPage = () => {
  return (
        <Calendar_Component />
  )
}

export default calendar
