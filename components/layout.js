import React from "react";
import Navbar from "./navbar";

const Layout = ( {children} ) => {

    return ( 

        <>

            <div>
                <Navbar />
            
            </div>

            <div> 
                { children } 
            </div>

            <div>
                footer
            </div>

        </>

    )


}

export default Layout;