import React from "react";
import './Header.css'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";

export default function Header()
{
    return (
        <header>
            <ul>
                <Button variant="success">Fazer Pedido ✆</Button>
                <li><a>Serviços</a></li>
                <li><a>Projetos</a></li>
                <li><a>Produção</a></li>
                <li><a>Depoimentos</a></li>
                <li><a>Sobre mim</a></li>
                <li><a>FAQ</a></li>

                <Dropdown>
                <DropdownToggle id="Menu_Dropdown">
                    Menu
                </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem>Serviços</DropdownItem>
                    <DropdownItem>Projetos</DropdownItem>
                    <DropdownItem>Produção</DropdownItem>
                    <DropdownItem>Depoimentos</DropdownItem>
                    <DropdownItem>Sobre mim</DropdownItem>
                    <DropdownItem>FAQ</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </ul>
        </header>
    )
}