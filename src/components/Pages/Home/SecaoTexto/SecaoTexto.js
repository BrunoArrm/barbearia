import React from 'react';
import './SecaoTexto.css';

export default function SecaoTexto( props ) {

  let modo = props.classe;

  if ( modo === "light" ) {
    modo = "light__secaoTexto";
  } else {
    modo = "dark__secaoTexto";
  }

  return (
    <section className={ modo }>

        <div className='secaoTexto--limitador'>
            <h1>Bem-vindo a Barber Shop</h1>
            <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
            <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
        </div>
        <h2 className='assinatura'>Bruno Arruda</h2>
    </section>
  )
}