import React from 'react';
import './Header.css';
import Logomarca from '../../assets/barbearia-logo.png';
import BotaoDarkLight from './BotaoLightDark/BotaoDarkLight';

function Header( props ) {

  let funcao = props.funcao;
  let modo = props.classe;

  if ( modo === "light" ) {
    modo = "light__header";
  } else {
    modo = "dark__header";
  }

  return (
    <header className={modo}>

      <img  className='header--img' 
            src={Logomarca}
            alt='Barbearia'
            title='Barbearia'></img>

      <BotaoDarkLight 
        classe = { props.classe }
        funcionalidade = { props.funcao }/>

    </header>
  )
}

export default Header;