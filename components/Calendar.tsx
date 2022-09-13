import React, { useState, useEffect } from "react";
import styles from "../styles/Calendar.module.scss";

const Calendar = () => {

    const [calendar, setCalendar] = useState<React.ReactElement[]>([]);
    const rows = 4;
    const columns = 8;

    useEffect(() => {

        create_calendar_spaces();

    }, [])

    const create_calendar_spaces = () => {

        let number_of_containers = 5; 
        let temporary_calendar_storage = [];

        for (let i = 1; i <= number_of_containers; i++) {

            temporary_calendar_storage[i] = <tr>
                                                <td className={styles.cell}> t </td>
                                                <td className={styles.cell}> t </td>
                                                <td className={styles.cell}> t </td>
                                                <td className={styles.cell}> t </td>
                                                <td className={styles.cell}> t </td>
                                                <td className={styles.cell}> t </td>
                                                <td className={styles.cell}> t </td>
                                            </tr>;

        }

        console.log(temporary_calendar_storage);
        setCalendar(temporary_calendar_storage)

    }

    return (

        <div>

            <h2> CALENDAR </h2> 
            <div>

                <table className={styles.table}> 

                    <tr>
                        <th className={styles.cell}> S </th>
                        <th className={styles.cell}> M </th>
                        <th className={styles.cell}> T </th>
                        <th className={styles.cell}> W </th>
                        <th className={styles.cell}> Th </th>
                        <th className={styles.cell}> F </th>
                        <th className={styles.cell}> Sa </th>
                    </tr>
                
                {calendar}

                </table>

            </div>

        </div>

    )

}

export default Calendar;