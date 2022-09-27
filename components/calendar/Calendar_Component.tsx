import React, { useState, useEffect} from "react";
import * as ReactDOM from 'react-dom';
import Header_Input from "./Header_Input";
import styles from "../../compiled_styles/Calendar.module.css";

const Calendar = () => {

    const [calendar, setCalendar] = useState<React.ReactElement[]>([]);
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {

        setCalendar(create_calendar_cells());

    }, [month, year])

    const renderSingleDiv = (target: any) => { // generate single element
        console.log('render div')
        console.log(target)
        
        // let element = React.createElement("div", {className: "crud-card"}, "NewDiv");
        // ReactDOM.render(element, document.getElementById('test'))
    }

    const create_calendar_cells = () => {
        
        let temporary_calendar_storage = [];
        let printOk = false; //When to start printing days
        let currentDay = 0;
        let startDay = new Date(year, month).getDay() // Day month starts (Monday through Sunday)
        let rows;
        let lastDayOfMonth = (32 - new Date(year, month, 32).getDate())
        let uniqueKey = 0;
        let uniqueOuterKey = 0;

        //calculate how many rows based on:
        // (1) What day the month stars (Monday through Sunday)
        // (2) How many days in the month
        if (startDay === 5 && (32 - new Date(year, month, 32).getDate()) === 31) {
            rows = 6;
        } else if (startDay === 6 && (32 - new Date(year, month, 32).getDate()) >= 30) {
            rows = 6
        } else {
            rows = 5
        }
        
        //Create calendar based on rows and store in temp storage
        for (let i = 1; i <= rows; i++) {

            //Function figures out when to print and returns the currentDay or null
            const printDay = (startDay: number, dayOfWeek: number) => {

                //boolean becomes true when loop finds startDay: number; and 
                //dayOfWeek: Monday through Sunday; are equal
                if (startDay === dayOfWeek) {
                    printOk = true;
                } 

                //When print starts else return null
                if (printOk === true) {
                    currentDay = currentDay + 1;

                    //stop printing when passed last day of month
                    if (currentDay > lastDayOfMonth) {
                        return null;
                    }

                    return currentDay;
                } else {
                    return null;
                }

            }

            //Stores calendar rows
            //Style checks: (1) Checks to see if dates start. If not, mark as grey.
            //              (2) Checks to see if past end date. If so, mark as grey.
            //Date prints via "printDay: function" and  uses 2 parameters (startDay, dayOfWeek: 0-6)
            //  Example: 0 = Monday, 6 = Saturday
            temporary_calendar_storage[i] = 
        
            <tr key={uniqueOuterKey += 1}>
                <td 
                    className={styles.cellDate}
                    style={startDay > 0 && printOk === false || currentDay + 1 > lastDayOfMonth  ? {backgroundColor: 'grey'}: {}}
                    key={uniqueKey += 1}
                    id="test"
                > 
                    <div className={styles.dateNumber}>
                        { 
                            printDay(startDay, 0)
                        }
                    </div>
                    <div className={styles.cellContent} onClick={(e) => renderSingleDiv(e.target)}>
                        {
                            startDay > 0 && printOk === false || currentDay > lastDayOfMonth ? 
                            null:
                            "content"
                        }
                    
                    </div>
                </td>

                <td 
                    className={styles.cellDate}
                    style={startDay > 1 && printOk === false || currentDay + 1 > lastDayOfMonth  ? {backgroundColor: 'grey'}: {}}
                    key={uniqueKey += 1}
                >
                    <div className={styles.dateNumber}>
                        { 
                            printDay(startDay, 1)
                        }
                    </div>
                    <div className={styles.cellContent}>
                        {
                            startDay > 0 && printOk === false || currentDay > lastDayOfMonth ? 
                            null:
                            "content"
                        }
                    </div>
                </td>

                <td 
                    className={styles.cellDate}
                    style={startDay > 2 && printOk === false || currentDay + 1 > lastDayOfMonth ? {backgroundColor: 'grey'}: {}}
                    key={uniqueKey += 1}
                >
                    <div className={styles.dateNumber}>
                        { 
                            printDay(startDay, 2)
                        }
                    </div>
                    <div className={styles.cellContent}>
                        {
                            startDay > 0 && printOk === false || currentDay > lastDayOfMonth ? 
                            null:
                            "content"
                        }
                    </div>
                </td>

                <td 
                    className={styles.cellDate}
                    style={startDay > 3 && printOk === false || currentDay + 1 > lastDayOfMonth ? {backgroundColor: 'grey'}: {}}
                    key={uniqueKey += 1}
                >
                    <div className={styles.dateNumber}>
                        { 
                            printDay(startDay, 3)
                        }
                    </div>
                    <div className={styles.cellContent}>
                        {
                            startDay > 0 && printOk === false || currentDay > lastDayOfMonth ? 
                            null:
                            "content"
                        }
                    </div>
                </td>

                <td 
                    className={styles.cellDate}
                    style={startDay > 4 && printOk === false || currentDay + 1 > lastDayOfMonth ? {backgroundColor: 'grey'}: {}}
                    key={uniqueKey += 1}
                >
                    <div className={styles.dateNumber}>
                        { 
                            printDay(startDay, 4)
                        }
                    </div>
                    <div className={styles.cellContent}>
                        {
                            startDay > 0 && printOk === false || currentDay > lastDayOfMonth ? 
                            null:
                            "content"
                        }
                    </div>
                </td>

                <td 
                    className={styles.cellDate}
                    style={startDay > 5 && printOk === false || currentDay + 1 > lastDayOfMonth ? {backgroundColor: 'grey'}: {}}
                    key={uniqueKey += 1}
                >
                    <div className={styles.dateNumber}>
                        { 
                            printDay(startDay, 5)
                        }
                    </div>
                    <div className={styles.cellContent}>
                        {
                            startDay > 0 && printOk === false || currentDay > lastDayOfMonth ? 
                            null:
                            "content"
                        }
                    </div>
                </td>
                
                <td 
                    className={styles.cellDate}
                    style={startDay > 6 && printOk === false || currentDay + 1 > lastDayOfMonth ? {backgroundColor: 'grey'}: {}}
                    key={uniqueKey += 1}
                >
                    <div className={styles.dateNumber}>
                        { 
                            printDay(startDay, 6)
                        }
                    </div>
                    <div className={styles.cellContent}>
                        {
                            startDay > 0 && printOk === false || currentDay > lastDayOfMonth ? 
                            null:
                            "content"
                        }
                    </div>
                </td>
            </tr>;

        }

        return temporary_calendar_storage;

    }

    return (

      
            
             <div className={styles.calendar_wrapper}>
                {/** Pass useState hooks down to component which are used
             *   to find the current month and date by user input
             */}
                <Header_Input 
                    month={month}
                    setMonth={setMonth}
                    year={year}
                    setYear={setYear}
                />
                
                

                    {/** Sunday - Monday calendar header */}
                    <table className={styles.table}> 
                        <tbody>
                        <tr>
                            <th className={styles.cell}> S </th>
                            <th className={styles.cell}> M </th>
                            <th className={styles.cell}> T </th>
                            <th className={styles.cell}> W </th>
                            <th className={styles.cell}> Th </th>
                            <th className={styles.cell}> F </th>
                            <th className={styles.cell}> Sa </th>
                        </tr>

                        {/** Output of calendar */}
                        {calendar}

                        </tbody>
                    </table>

                
            </div>
       

    )

}

export default Calendar;