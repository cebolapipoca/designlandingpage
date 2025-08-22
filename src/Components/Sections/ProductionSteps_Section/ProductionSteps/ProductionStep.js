import React from "react";
import './ProductionStep.css'

export default function ProductionStep(props)
{

    if(props.direction == 'left')
    {
        return (
            <div className="ProductionStep ProductionStep_left">
                <p className="ProductionStep_number">{props.number}</p>
                <h1>{props.title}</h1>
                <h2>{props.text}</h2>
            </div>
    )
    }
    else {
        return (
            <div className="ProductionStep ProductionStep_right">
                <p className="ProductionStep_number">{props.number}</p>
                <h1>{props.title}</h1>
                <h2>{props.text}</h2>
            </div>
        )
    }

    
}
