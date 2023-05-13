import React from "react";
import "./Display.css";

const Display = ({ value, result }) => {
    return (
        <div className="display">
            <input type="text" className="operation" value={value}/>
            <input type="text" className="result" value={result}/>
        </div>
    );
};

export default Display;