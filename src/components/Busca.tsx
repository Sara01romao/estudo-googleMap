import './busca.css';
import logo from '../assets/logo.svg';


 

function Busca() {
    return (
      <div className="buscaContainer" >
          <img src={logo} alt="" />
          <input type="text" placeholder="Pesquisar" />
         <div className="busca">
             
         </div>
      </div>
     
    );
  }
  
  export default Busca;
  