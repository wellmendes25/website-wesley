import Image from "next/image";
import estilos from './main.module.css';
import MuayThai from '../../../../public/muay.jpg'

export default function Main(){
    return(
        <main className={estilos.main}>
            <div className={estilos.imagem_main}>
                <div className={estilos.imagem}>
                    <Image  src={MuayThai} alt="imagem de master1305 no freepik"/>:
                </div>
                <div className={estilos.texto}>
                    <h1>Muay thai</h1>
                    <p>"Não confunda derrotas com fracasso nem vitorias com sucesso" </p>
                    <a href="https://wa.me/5585994206887?text=Junte-se%20a%20nós
" target="_blank">Comece hoje</a>
                </div>
            </div>
        </main>
    )
}