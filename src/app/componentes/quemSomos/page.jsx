'use client'
import estilos from './quemSomos.module.css';
import Image from 'next/image';
import Wesley from '../../../../public/transparente.png';
import React, { useState } from 'react';

export default function QuemSomos() {
  const textos = [
    "Desde pequeno, Wesley sempre foi apaixonado por artes marciais. Fascinado por filmes de luta e pela disciplina dos grandes guerreiros, ele sonhava em um dia se tornar um verdadeiro lutador. Aos 12 anos, teve seu primeiro contato com o Muay Thai e, desde então, nunca mais parou.",
    "Decidido a aprofundar seus conhecimentos, viajou para a Tailândia, onde treinou com os melhores lutadores e viveu a essência do Muay Thai. Foi lá que percebeu sua verdadeira vocação: ensinar e transformar vidas através da arte das oito armas."
  ];

  const [indice, setIndice] = useState(0);

  const proximoTexto = () => {
    if (indice === textos.length - 1) {
      setIndice(0);
    } else {
      setIndice(indice + 1);
    }
  };

  const textoAnterior = () => {
    if (indice === 0) {
      setIndice(textos.length - 1);
    } else {
      setIndice(indice - 1);
    }
  };

  return (
    <main className={estilos.main} id='quemSomos'>
      <h1>A Jornada de Wesley: Do Sonho ao Dojo</h1>
      <section className={estilos.section}>
        <div>
          <Image className={estilos.imagem} src={Wesley} alt="Imagem de Wesley" />
        </div>
        <div className={estilos.caixaTexto}>
          <p key={indice} className={estilos.texto}>
            {textos[indice]}
          </p>
          <div className={estilos.botoes}>
            <button onClick={textoAnterior}>❮</button>
            <button onClick={proximoTexto}>❯</button>
          </div>
        </div>
      </section>
    </main>
  );
}
