import React from "react";
import "./SideDrawer.css";

const SideDrawer = props =>{
    let drawerClasses = 'sideDrawer'
    if(props.show){
        drawerClasses= 'sideDrawer open'
    }
    
    return (
    <nav className={drawerClasses}>
        <ul>
        <li><a href="#">Sign-up</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    )
};


export default SideDrawer;