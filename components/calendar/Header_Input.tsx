import styles from "../../styles/Calendar.module.scss";
import { useState, Dispatch, SetStateAction } from "react";

interface stateProps{
    month: number,
    setMonth: Dispatch<SetStateAction<number>>,
    year: number,
    setYear: Dispatch<SetStateAction<number>>,
}

const Header_Input:React.FC<stateProps> = ( {year, setYear, month, setMonth } ) => {

    return (

        <div className={styles.calendar_properties}>

                <h2> CALENDAR </h2> 

                <div className={styles.month_property}>
                    <label> Month </label>
                    <select onChange={(e) => setMonth(parseInt(e.target.value))} value={month}>
                        <option value={0}> January </option>
                        <option value={1}> February </option>
                        <option value={2}> March </option>
                        <option value={3}> April </option>
                        <option value={4}> May </option>
                        <option value={5}> June </option>
                        <option value={6}> July </option>
                        <option value={7}> August </option>
                        <option value={8}> September </option>
                        <option value={9}> October </option>
                        <option value={10}> November </option>
                        <option value={11}> December </option>
                    </select>
                </div>

                <div className={styles.year_property}>
                    <label> Year </label>
                    <select onChange={(e) => setYear(parseInt(e.target.value))} value={year}>
                        <option value={2022}> 2022 </option>
                        <option value={2023}> 2023 </option>
                    </select>
                </div>
            </div>

    )
}

export default Header_Input;