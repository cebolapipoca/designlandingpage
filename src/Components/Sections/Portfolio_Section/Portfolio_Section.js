import React from "react";
import './Portfolio_Section.css'

import Project_1 from '../../../Images/0836a1ad-9cea-4637-afcb-3739d1d2f3c3.png'
import Project_2 from '../../../Images/f35efe7d-6f20-429d-b5ea-ddc0d1a1ca47.png'


export default function Portfolio_Section()
{
    return (
        <section className="Portfolio_Section"> 
            <h1> Veja alguns de nossos projetos</h1>

            <div className="Projects_Portfolio">
                <div className="Project_Portfolio">
                    <a className="Background_Portfolio">
                        <button>Acessar Website</button>
                    </a>
                    <img src="https://www.hubspot.com/hs-fs/hubfs/shopify-screenshot-BR.png?width=2608&height=1644&name=shopify-screenshot-BR.png"></img>
                </div>
                <div className="Project_Portfolio">
                     <a className="Background_Portfolio">
                        <button>Acessar Website</button>
                    </a>
                    <img src="https://neilpatel.com/wp-content/uploads/2019/11/unbounce-como-exemplo-de-landing-page-criativa.png"></img>
                </div>
                <div className="Project_Portfolio">
                    <a className="Background_Portfolio">
                        <button>Acessar Website</button>
                    </a>
                    <img src={Project_1}></img>
                </div>
                <div className="Project_Portfolio">
                    <a className="Background_Portfolio">
                        <button>Acessar Website</button>
                    </a>
                    <img src={Project_2}></img>
                </div>
                <div className="Project_Portfolio">
                    <a className="Background_Portfolio">
                        <button>Acessar Website</button>
                    </a>
                    <img src="https://static.wixstatic.com/media/16f059_63c7d795078f4ee2aff7d954580a24cc~mv2.png/v1/fill/w_980,h_646,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/16f059_63c7d795078f4ee2aff7d954580a24cc~mv2.png"></img>
                </div>
                <div className="Project_Portfolio">
                    <a className="Background_Portfolio">
                        <button>Acessar Website</button>
                    </a>
                    <img src="https://landingi.com/wp-content/uploads/2020/09/camfed-5-optimized.webp"></img>
                </div>
            </div>

            <button>Ver todos os projetos</button>
        </section>
    )
}