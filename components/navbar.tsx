import React, { useState, useEffect} from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {

    const [text, setText] = useState("navbar test")
    const [chooser, setChooser] = useState(0);

    const changeText = () => {

        console.log(chooser)

        if (chooser == 0) {
            console.log('choice1')
            setText('choice 1');
            let storeChooser = chooser;
            setChooser(storeChooser += 1)

        } else if (chooser == 1) {
            console.log('choice2')
            setText('choice 2')
            let storeChooser = chooser;
            setChooser(storeChooser += 1)
 
        } else {
            console.log('choice3')
            setText('choice 3')
            let storeChooser = chooser;
            setChooser(0)

        }

    }

    return (

        <div>

            <p id={styles.navbar_style}> {text} </p>
            <button onClick={() => changeText()}> change text </button>

        </div>


    )

}

export default Navbar;