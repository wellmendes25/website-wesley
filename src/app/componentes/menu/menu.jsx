import estilos from './menu.module.css'

export default function Menu(){
    return(
        <nav className={estilos.nav}>
            <ul>
                <li><a href="#main">Home</a></li>
                <li><a href="#quemSomos">Quem somos</a></li>
                <li><a href="#contatos">Contatos</a></li>
            </ul>
        </nav>
    )
}