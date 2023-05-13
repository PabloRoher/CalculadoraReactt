import React from "react";
import "./Button.css";

const Button = ({ name, onClick, id }) => {
    return (
        <button name={name} onClick={onClick} id={id} className="button">
            {name}
        </button>
    );
};

export default Button;