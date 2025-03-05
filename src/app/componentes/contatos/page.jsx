import estilos from './contatos.module.css';

export default function Contatos(){
    return(
        <section className={estilos.section} id='contatos'>
            <h1>Contato</h1>

            <div className={estilos.formEmapa}>
                <div className={estilos.caixaEmail}>
                <form action="https://formsubmit.co/wesleydabliom@gmail.com" method="POST">
                    <input required type="text"  placeholder='Nome: '/>
                    <input type="hidden" name="_next" value="http://127.0.0.1:5500/sucesso.html"/>
                    <input type="hidden" name="_autoresponse" value="Recebemos seu email, responderemos assim que possível"/>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input required type="email" placeholder='Email:' />
                    <textarea id="mensagem" placeholder='Mensagem: ' required></textarea>
                    <input className={estilos.botao} type="submit" />
                </form>
                </div>
                <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127390.8020113975!2d-38.533133264899725!3d-3.8181614629763283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x7c7450c89d9b0dd%3A0x1e4bc4665abc0aef!2sAv.%20Recreio%2C%201384%20-%20Lagoa%20Redonda%2C%20Fortaleza%20-%20CE%2C%2060831-600!3m2!1d-3.8181656999999998!2d-38.4507304!5e0!3m2!1spt-BR!2sbr!4v1741089959225!5m2!1spt-BR!2sbr"

                    className={estilos.mapa}
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}