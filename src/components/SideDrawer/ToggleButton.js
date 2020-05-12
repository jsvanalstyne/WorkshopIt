import React from "react";
import './ToggleButton.css';


const toggleButton = props => (
    <button className="toggleButton" onClick={props.click}>
        <div className="toggleButtonLine"></div>
        <div className="toggleButtonLine"></div>
        <div className="toggleButtonLine"></div>
    </button>
);

export default toggleButton;