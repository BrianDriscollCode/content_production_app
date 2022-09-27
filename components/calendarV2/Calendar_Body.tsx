import Calendar_Cell from "./Calendar_Cell";

const Calendar_Body = () => 
{

    //What is the start day
    //How many days in the month

    return (
        <tbody>
            Calendar Body
            <tr>
                <th> Su </th>
                <th> M </th>
                <th> T </th>
                <th> W </th>
                <th> Th </th>
                <th> F </th>
                <th> Sa </th>
            </tr>

            <Calendar_Cell />

        </tbody>
    )

}

export default Calendar_Body;