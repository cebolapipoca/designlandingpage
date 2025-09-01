import React from "react";
import './Depoiments.css'
import { useEffect } from "react";

export default function Depoiments(props)
{

    useEffect(()=>{
        
                const Depoiments = Array.from(document.getElementsByClassName('Depoiment'))
                
                
        
                
                const Observer = new IntersectionObserver((Entries)=>{
                    Entries.forEach((Entry)=>{
                        Entry.target.animate([{opacity: 0}, {opacity: 1}], {duration: 1200})
                    })
                })
        
        
                Depoiments.forEach((element)=>{Observer.observe(element)})        
        
            }, [])

    if(props.direction == 'right')
    {
        return (
        <div className="Depoiment Depoiment_right">
            <div className="Depoiment_PictureName">
                <img className="Depoiment_Picture"/>
                <h1>Ruan Augusto Silveira Costa</h1>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )
    }
    else {
        return (
        <div className="Depoiment Depoiment_left">
            <img className="Depoiment_Picture"/>
            <h1>Ruan Augusto Silveira Costa</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )
    }

    
}