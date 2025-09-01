import React from "react";
import './Services_Section.css';
import Services from "../Services/Services";

import Pincel from '../../Images/brush-svgrepo-com.svg'
import Site from '../../Images/sites-svgrepo-com.svg'
import ImagemPhoto from '../../Images/images-svgrepo-com.svg'

export default function Services_Section()
{
    return (
        <section className="Services_Section" id="Service_Section">
            
            <h1>Nossos serviços</h1>

            <div className="Services_Container">
                <Services ClassAnimation="Animation_ToUp" image={Site}/>
                 <Services ClassAnimation="Animation_ToDown" image={Pincel}/>
                <Services ClassAnimation="Animation_ToUp" image={ImagemPhoto}/>
            </div>
        </section>
    )
}