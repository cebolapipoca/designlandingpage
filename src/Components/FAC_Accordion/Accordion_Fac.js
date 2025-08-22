import React from "react";
import './Accordion_Fac.css'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";

export default function Accordion_Fac()
{
    return (
        <div id="Accordion_FAC">
            <h1>Perguntas Frequentes</h1>
            <Accordion>
                <AccordionItem className="Accordion_Item_FAC" eventKey="1">
                    <AccordionHeader>1. Quanto custa para criar um site?</AccordionHeader>
                    <AccordionBody>O valor depende da complexidade e recursos desejados (institucional, loja virtual, landing page etc.). Trabalhamos com pacotes personalizados para atender diferentes necessidades e orçamentos.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="2">
                    <AccordionHeader>2. Em quanto tempo meu site/design fica pronto?</AccordionHeader>
                    <AccordionBody>O prazo médio varia entre 10 e 30 dias, dependendo do tamanho do projeto e da agilidade no envio dos materiais (textos, imagens e informações).</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="3">
                    <AccordionHeader>3. O site vai funcionar em celular e tablet (responsivo)?</AccordionHeader>
                    <AccordionBody>Com certeza. Todos os sites são desenvolvidos de forma responsiva, garantindo uma boa experiência em computadores, celulares e tablets.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="4">
                    <AccordionHeader>4. Vocês oferecem hospedagem e domínio, ou preciso contratar à parte?</AccordionHeader>
                    <AccordionBody>Podemos auxiliar no registro de domínio e na contratação de hospedagem, além de indicar os melhores serviços. Também trabalhamos com planos que já incluem esses itens.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="5">
                    <AccordionHeader>5. O site será otimizado para aparecer no Google (SEO)?</AccordionHeader>
                    <AccordionBody>Sim. Aplicamos técnicas de SEO básico na estrutura do site para facilitar a indexação no Google e melhorar o posicionamento da sua marca.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="6">
                    <AccordionHeader>6. Como funciona o pagamento? É à vista ou parcelado?</AccordionHeader>
                    <AccordionBody>Oferecemos opções de pagamento à vista ou parcelado, conforme o pacote escolhido. Tudo é combinado de forma transparente no início do projeto.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="7">
                    <AccordionHeader>7. Vocês oferecem suporte/manutenção após a entrega?</AccordionHeader>
                    <AccordionBody>Sim. Temos planos de suporte e manutenção para manter seu site sempre atualizado, seguro e funcionando corretamente.</AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    )
}