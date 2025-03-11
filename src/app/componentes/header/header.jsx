'use client'
import { useState } from "react";
import Image from "next/image";
import estilos from "./header.module.css";
import Logo from '../../../../public/CHANG (17).png';
import Menu from "../menu/menu";

// react icons
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { CgClose } from "react-icons/cg";



export default function Header(){
    
    const [abrirMenu, setAbrirMenu] = useState(false);

    function abrirEfechar(){
        setAbrirMenu(!abrirMenu)
    }

    return(
    <header className={estilos.header}>

<div className={estilos.menu}>
            <button  onClick={abrirEfechar}>{abrirMenu ? <CgClose  size={35} color="white"/> : <CiMenuFries size={35} color="white" /> } {abrirMenu ? <Menu/> : null}</button>
        </div>

        <a href="#main">
            <Image alt="imagem de logo" src={Logo} width={100} height={60} color="#ccc"/>
        </a>

        <ul className={estilos.lista}>
            <li><a href="#main">Home</a></li>
            <li><a href="#quemSomos">Quem somos</a></li>
            <li><a href="#contatos">Contatos</a></li>
        </ul>

        <div className={estilos.icones}>
            <ul className={estilos.lista}>
                <li><a href="https://www.instagram.com/instrutormt.wesley/" target="_blank"><CiInstagram  color="white" size={35} /> </a></li>
                <li><a href="https://wa.me/5585994206887?text=Junte-se%20a%20nós
" target="_blank"><FaWhatsapp   color="white" size={35} /></a></li>
            </ul>

        </div>

       
       
        <div className={estilos.whatsapp}>
        <a href="https://wa.me/5585994206887?text=Junte-se%20a%20nós
" target="_blank"><FaWhatsapp  color="green"  size={45} /></a>
        </div>
    </header>
    )
}