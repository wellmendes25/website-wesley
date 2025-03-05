import estilos from './fonteAlternada.module.css';

export default function FonteAlternada(){
    return(
        <section className={estilos.section}>

            <div className={estilos.fonte} >"Desafie seus <span className={estilos.corDourada}>limites</span >, fortaleça seu <span className={estilos.corDourada}>corpo e mente!</span> 🥊🔥 Venha treinar <span className={estilos.corDourada}>Muay Thai</span> no meu <span className={estilos.corDourada}>dojo</span>"</div>

            
            <div className={estilos.fonte2} >"Desafie seus <span className={estilos.corDourada}>limites</span >, fortaleça seu <span className={estilos.corDourada}>corpo e mente!</span> 🥊🔥 Venha treinar <span className={estilos.corDourada}>Muay Thai</span> no meu <span className={estilos.corDourada}>dojo</span>"</div>

        </section>
    )
}