import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar/sidebar"
import styles from "../compiled_styles/layout.module.css";

const Layout = ( {children} ) => {

    return ( 

        <>

            <div className={styles.ui_container}>

                <Sidebar />

                <div className={styles.rightside_container}>
                    <Navbar /> 
                    <div className={styles.content_container}>
                        
                            { children }
                        
                    </div>

                </div>

            </div>

        </>

    )


}

export default Layout;