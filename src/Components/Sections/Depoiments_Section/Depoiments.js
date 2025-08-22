import React from "react";
import './Depoiments.css'

import { Carousel, CarouselItem } from "react-bootstrap";
import Depoiments from "./Depoiments/Depoiments";


export default function Depoiments_Section()
{
    return (
        <section className="Depoiments_Section">
            <h1>O que nossos clientes acham?</h1>

                <Carousel>
                    <CarouselItem>
                        <Depoiments direction="right"/>
                        <Depoiments direction="left"/>
                        <Depoiments direction="right"/>
                    </CarouselItem>
                    
                    <CarouselItem>
                        <Depoiments direction="right"/>
                        <Depoiments direction="left"/>
                        <Depoiments direction="right"/>
                    </CarouselItem>
                </Carousel>
        </section>
    )
}


