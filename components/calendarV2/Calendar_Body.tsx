import { useState, useEffect } from "react";
import Calendar_Row from "./Calendar_Row";
import styles from "../../compiled_styles/CalendarV2.module.css";

interface dateProps 
{
    month: number,
    year: number
}

const Calendar_Body:React.FC<dateProps> = ( { month, year } ) => 
{

    const [content, setContent] = useState(
        [
                "content", 
                "content", 
                "content", 
                "content", 
                "content", 
                "content", 
                "content"
        ]
    );
    const [date, setDate] = useState(0);
    const [currentDay, setCurrentDay] = useState(0);
    const [currentDay2, setCurrentDay2] = useState(currentDay + 6);
    const [currentDay3, setCurrentDay3] = useState(currentDay2 + 6);
    const [currentDay4, setCurrentDay4] = useState(currentDay3 + 6);

    useEffect(() => {
        calculateFirstRowStart();
        setCurrentDay2(currentDay + 7);
        setCurrentDay3(currentDay2 + 7);
        setCurrentDay4(currentDay3 + 7);
    }, [month, year])


    //What is the start day
    //How many days in the month
    let startDay = new Date(year, month).getDay(); // Day month starts (Monday through Sunday)
    let lastDayOfMonth = (32 - new Date(year, month, 32).getDate());
    let dayCounter= 0; //Tracks Sunday - Saturday
    let calendarLength = 35;
    let startDayRows = [ startDay, 0, 0, 0, 0];

    const calculateFirstRowStart = () => {
        console.log(startDay)
        switch (startDay) {
            case 0: 
                setCurrentDay(7);
                break;
            case 1: 
                setCurrentDay(6);
                break;
            case 2: 
                setCurrentDay(5);
                break;
            case 3: 
                setCurrentDay(4);
                break;
            case 4: 
                setCurrentDay(3);
                break;
            case 5: 
                setCurrentDay(2);
                break;
            case 6: 
                setCurrentDay(1);
                break;
        } 
        console.log(currentDay)
    }

    const calculateOtherRowStart = () => {

        setCurrentDay(currentDay + 7)
        return currentDay;

    }



    return (
        <table className={styles.table}>
            <tbody className={styles.tbody}>

                <tr className={styles.header_row}>
                    <th className={styles.header_cell}> Su </th>
                    <th className={styles.header_cell}> M </th>
                    <th className={styles.header_cell}> T </th>
                    <th className={styles.header_cell}> W </th>
                    <th className={styles.header_cell}> Th </th>
                    <th className={styles.header_cell}> F </th>
                    <th className={styles.header_cell}> Sa </th>
                </tr>
                
                <Calendar_Row content={content} date={date} startDay={-startDay} />              
                <Calendar_Row content={content} date={date} startDay={currentDay} />
                <Calendar_Row content={content} date={date} startDay={currentDay2} />
                <Calendar_Row content={content} date={date} startDay={currentDay3} />
                <Calendar_Row content={content} date={date} startDay={currentDay4} />
               

            </tbody>
        </table>
    )

}

export default Calendar_Body;