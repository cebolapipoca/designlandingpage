import React, { useEffect, useState } from "react";
import './Services.css'

export default function Services(props)
{

     useEffect(()=>{

            const service_elements = Array.from(document.getElementsByClassName('Services_Info'))
    
            const observer = new IntersectionObserver((Entries)=>
                {

                    console.log(Entries)

                Entries.forEach((ElementoObservado)=>{
                    ElementoObservado.target.animate([{top: '20%', opacity: 0}, {top: '0%', opacity: 1}], {duration: 500})              
                })  
             
            })
    
            service_elements.forEach((element, i)=>{
                observer.observe(element)
            })

               

        }, [])

    return (
        <div className={"Services_Info" + " " + props.ClassAnimation}>
            <div className="service_icon">
                <img src={props.image}></img>
            </div>

            <h2>Criação de Sites</h2>
            <p>Oferecemos serviço completo de criação de sites modernos, rápidos e personalizados para o seu negócio</p>
        </div>
    )
}