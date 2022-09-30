import { useState } from "react";
import Calendar_Body from "./Calendar_Body";
import Calendar_Header from "./Calendar_Header";
import styles from "../../compiled_styles/CalendarV2.module.css";

const Calendar_Main = () => 
{

    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(2022);
    

    return (

        <div className={styles.calendar_container}>
            <Calendar_Header 
                month={month}  
                setMonth={setMonth}
                year={year}
                setYear={setYear}
            />
    
            <Calendar_Body month={month} year={year}/>
        </div>


    )

};

export default Calendar_Main;