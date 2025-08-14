import React from "react";
import './Banner.css'
import { Button } from "bootstrap";

export default function Banner()
{
    return (
        <div className="Banner">
            <div className="Banner_text">
                <div id="Banner_Text1">
                    <h1>DEFININDO SEU <br></br> DESIGN PERFEITO<br></br> COM DAVY JONES</h1>
                    <p>Fazer um bom design vai muito além de deixar algo “bonito”. É sobre criar experiências que funcionam, que guiam o usuário sem esforço e que transmitem a mensagem certa no primeiro olhar. Um bom design comunica com clareza, valoriza a marca e aumenta a confiança de quem está navegando. Ele equilibra estética com funcionalidade, chama atenção sem cansar, e transforma ideias em soluções visuais que realmente engajam. No final, um bom design é aquele que não apenas encanta — ele converte.</p>
                </div>
                

                <button>Peça agora seu design perfeito!</button>
            </div>

            <div className="Banner_Image">
                <img src="https://yt3.googleusercontent.com/ytc/AIdro_ntZ8R66VZbO_4pqK4RhKwaqs9nc-xT41rXRzH9kNEC9S4=s900-c-k-c0x00ffffff-no-rj" />
            </div>
        </div>
    )
}