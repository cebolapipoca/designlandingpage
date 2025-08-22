import React from "react";
import './Footer.css'
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import Button from "react-bootstrap";

import MasterCard from '../../Images/mastercard-svgrepo-com.svg'
import Elo from '../../Images/elo-svgrepo-com.svg'
import Visa from '../../Images/visa-classic-svgrepo-com.svg'
import PayPal from '../../Images/paypal-3-svgrepo-com.svg'
import Pix from '../../Images/pix-svgrepo-com.svg'

export default function Footer()
{
    return (
        <footer>
            <div className="contact_form">
                <h1>Formulário de Contato</h1>
                <h2>faça sua pergunta/pedido e nós mande por email</h2>
                <Form>
                    <FormGroup>
                        <FormLabel>Seu Nome</FormLabel>
                        <FormControl></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Telefone para Contato/Whatsapp</FormLabel>
                        <FormControl></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Diga qual seu pedido ou pergunta</FormLabel>
                        <FormControl as={"textarea"} rows={3} className="textarea_form_contact"></FormControl>
                    </FormGroup>

                    <button>Enviar Formulário</button>
                </Form>
            </div>

            <div className="footer_info">

                <div className="Contact_Whatsapp_Button">
                    <h1>Se interessou pelo meu serviço?</h1>
                    <h2>Faça agora seu pedido pelo nosso whatsapp! mande uma mensagem e responderei quando possivel</h2>

                    <button>Fazer Pedido pelo whatsapp</button>
                </div>

                <div className="payments_forms">
                    

                    <div className="payments_icon">
                        <img src={MasterCard}/>
                        <img src={Elo}/>
                        <img src={Visa}/>
                        <img src={PayPal}/>
                        <img src={Pix}/>
                    </div>
                </div>

                <h3> Site e design desenvolvido por <a href="https://github.com/cebolapipoca">@Cebas</a></h3>
            </div>

            
        </footer>
    )
}