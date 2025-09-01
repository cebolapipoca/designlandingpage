import React from "react";
import './ProductionStep.css'
import { useEffect } from "react";

export default function ProductionStep(props)
{

    useEffect(()=>{
    
            const ProductionStep = Array.from(document.getElementsByClassName('ProductionStep'))
            
            
    
            
            const Observer = new IntersectionObserver((Entries)=>{
                Entries.forEach((Entry)=>{
                    Entry.target.animate([{left: '10%', opacity: 0}, {left: '0%', opacity: 1}], {duration: 1000})
                })
            })
    
    
            ProductionStep.forEach((element)=>{Observer.observe(element)})        
    
        }, [])

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
