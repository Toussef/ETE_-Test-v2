import React from 'react';
import buttonStyle from "./style.css";


const Button = ({event,text}) =>{
    return(
        <button onClick = {event}
                style={{
                    background: "black",
                    color: "white",
                    padding: 10,
                    borderRadius: 50,
                    margin: 10,
                    cursor: "pointer",
        }}>
            {text}
        </button>
    )
}

export default Button;

