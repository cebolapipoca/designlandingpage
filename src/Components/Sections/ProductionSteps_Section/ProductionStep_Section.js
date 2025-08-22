import React from "react";
import './ProductionStep_Section.css'
import ProductionStep from "./ProductionSteps/ProductionStep";


export default function ProductionStep_Section()
{
    return (
        <section className="ProductionStep_Section">
            <h1>Etapas de Produção</h1>

            <div className="steps">
                <ProductionStep direction='left' number="1" title="Planejamento" text="Definimos o objetivo do site, o público-alvo e as funcionalidades necessárias. Criamos o mapa de páginas e traçamos a estratégia para alcançar os resultados esperados."/>
                <ProductionStep direction='right' number="2" title="Design" text="Desenvolvemos o layout visual do site, escolhendo cores, fontes e imagens. Garantimos uma navegação intuitiva e um design responsivo para todos os dispositivos."/>
                <ProductionStep direction='left' number="3" title="Desenvolvimento" text="Transformamos o design em código, criando o front-end e o back-end do site. Implementamos todas as funcionalidades e integramos banco de dados quando necessário."/>
                <ProductionStep direction='right' number="4" title="Testes" text="Verificamos compatibilidade, desempenho e usabilidade em diferentes dispositivos e navegadores. Corrigimos erros e otimizamos a performance antes do lançamento."/>
                <ProductionStep direction='left' number="5" title="Publicação" text="Registramos o domínio, configuramos a hospedagem e publicamos o site online. Garantimos segurança com SSL e testamos tudo no ambiente real."/>
                <ProductionStep direction='right' number="6" title="Manutenção" text="Mantemos o site atualizado, corrigindo falhas e melhorando seu desempenho. Adicionamos novos conteúdos e recursos para acompanhar as necessidades do negócio."/>
            </div>
        </section>
    )
}