import estilos from './menu.module.css'

export default function Menu(){
    return(
        <nav className={estilos.nav}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Quem somos</a></li>
                <li><a href="">Contatos</a></li>
            </ul>
        </nav>
    )
}