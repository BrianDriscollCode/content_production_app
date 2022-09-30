import styles from "../../compiled_styles/CalendarV2.module.css";
import { useState, Dispatch, SetStateAction } from "react";

interface content {
    content: string[],
    date: number,
    startDay: number,
}

const Calendar_Row = ( { content, date, startDay}: content) => 
{

    let num = startDay;

    const numHelper = () => {
        num += 1;
        return num;
    }

    return (
    <tr>
        {
            content.map((string) => (

                <td className={styles.table_cell}>
                    <div className={styles.date}>{numHelper()}</div>
                    <div className={styles.content}>{string}</div>
                </td>
                
            )) 
            
        }
        
    </tr>
        

    )

}

export default Calendar_Row;