import { Dispatch, SetStateAction } from "react";

interface dateProps 
{
    month: number,
    setMonth: Dispatch<SetStateAction<number>>,
    year: number,
    setYear: Dispatch<SetStateAction<number>>
}

const Calendar_Header:React.FC<dateProps> = ( { month, setMonth, year, setYear } ) => 
{

    return (

        <div>

            <h2> CALENDAR </h2> 

            <div>
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

            <div>
                <label> Year </label>
                <select onChange={(e) => setYear(parseInt(e.target.value))} value={year}>
                    <option value={2022}> 2022 </option>
                    <option value={2023}> 2023 </option>
                </select>
            </div>

        </div>

    )

}

export default Calendar_Header;