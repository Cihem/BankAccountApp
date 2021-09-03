import React from 'react';

function ColorNumber(props) {

   {
        return (
            <div className={props.number > 0 ? "text-success" : "text-danger"}>{props.number}</div>
        );
    }
}

export default ColorNumber;