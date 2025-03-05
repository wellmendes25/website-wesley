import estilos from "./page.module.css"
import Header from "./componentes/header/header";
import Main from "./componentes/main/main";
import FonteAlternada from "./componentes/fonte/page";
import QuemSomos from "./componentes/quemSomos/page";
import Contatos from "./componentes/contatos/page";




export default function Home() {
  return (
    <div className={estilos.main}>
      
      <Header/>
      <Main/>
      <FonteAlternada/>
      <div className={estilos.section}>
        <QuemSomos/>
        <Contatos/>
      </div>
     
    </div>
  );
}
