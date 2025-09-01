import React from "react";
import './Services_Section.css';
import Services from "../Services/Services";

export default function Services_Section()
{
    return (
        <section className="Services_Section" id="Service_Section">
            
            <h1>Nossos serviços</h1>

            <div className="Services_Container">
                <Services ClassAnimation="Animation_ToUp"/>
                 <Services ClassAnimation="Animation_ToDown"/>
                <Services ClassAnimation="Animation_ToUp"/>
            </div>
        </section>
    )
}