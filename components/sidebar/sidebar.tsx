import styles from "../../compiled_styles/sidebar.module.css";
import Link from "next/link"

const sidebar = () => {

    return (

        <div className={styles.sidebar}>
            <div className={styles.account_title}>
                <p> Film Booth </p>
            </div>

            <div className={styles.top_section}> 
                <p> Top Section</p>
            </div>

            <div className={styles.bottom_section}> 
                <Link href="/"> Home </Link> 
                <Link href="/calendar"> Calendar </Link> 
                <Link href="/calendarV2"> CalendarV2 </Link>
            </div>
        </div>

    )

}

export default sidebar;