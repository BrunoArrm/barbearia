import './BotaoDarkLight.css';
import '../../../App.css';

export default function BotaoDarkLight( props ) {
    
    let modo = props.classe;

    let modo__botao;
    let modo__img;
    let modo__texto;

    if ( modo === "light" ) {
      modo__botao = "light__header--toogle";
      modo__img = "light__toogle--img"
      modo__texto = "Dark";
    } else {
        modo__botao = "dark__header--toogle";
        modo__img = "dark__toogle--img"
        modo__texto = "Light";
    }

  return (
    <button className={modo__botao} onClick={props.funcionalidade}>
        <div  className={modo__img}></div>
        <p>{modo__texto}</p>
  </button>
  )
}