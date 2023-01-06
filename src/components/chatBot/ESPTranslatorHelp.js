import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import ESPChatbotFooter from '../footer/ESPChatbotFooter';

const ESPTranslatorHelp = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
              <h1 className="QB-about-page-title">Bienvenido al banco de preguntas del chatbot GRTDataHub.</h1>
              <h2 className="QB-about-page-title">Aquí encontrarás todas las preguntas que puedes hacerle al chatbot. ¿Crees que esta lista se puede mejorar con más preguntas?<br></br><br></br>Ayude a la comunidad completando un breve <a className="chatbot-link" href="https://mb3kald91rd.typeform.com/to/Mr1hatEA" target="_blank" rel="noreferrer">formulario de comentarios</a>.</h2>
              <h3 className="QB-about-page-subtitle">ALGUNAS ACTUALIZACIONES RECIENTES</h3>
              <h3 className="QB-about-page-text">Geo actualizado: Geo Génesis<br></br>T‑Mobile lanza un nuevo desafío T que busca el desarrollo de Web3 a través de 5G: The Graph<br></br>The Graph ahora es compatible con Solana con Substreams<br></br>Graph Advocates Actualización con el proceso de subvención y retiro de fondos de subvención<br></br>Respuesta de selección de indexador actualizada<br></br>Enlace de horario de oficina de indexador actualizado<br></br>GRTiQ<br></br>The Graph Social <br></br>The Graph Roadmap para 2023, respuesta actualizada con un nuevo artículo fácil de interpretar<br></br>Learn Web3 actualizado con nuevo contenido de aprendizaje<br></br>Una hoja de trucos para desarrolladores para ponerse al día velocidad con subgráficos en 15 minutos, agregado a la respuesta del subgráfico<br></br>Respuesta actualizada de la extinción del servicio alojado<br></br>El amanecer de los datos descentralizados<br></br>Cómo delegar sus tokens GRT con un tutorial de Hardware Wallet agregado a la respuesta de Wallet<br></br>Los beneficios de usar The Graph Network vs Self Hosting<br></br>Herramientas de curador<br></br>Documentos de Tenderize actualizados con Graphtronauts 'How to Stake Guía<br></br>Cómo evaluar y detectar rmine si un subgráfico es legítimo<br></br>Cómo convertirse en un indexador eficaz<br></br>Aprender Web3 Dev GRATIS<br></br>Cómo consultar el protocolo gráfico para datos en cadena usando Python<br></br>Preguntas frecuentes de Graphtronauts para el blog de delegadores<br></br>Messari agregado a Core Devs<br></br>Oportunidades laborales en The Graph<br></br>API de GraphQL<br></br>Actualización trimestral de participantes del segundo trimestre de 2022<br></br>Actualización de documentos de Fire Hose<br></br>Delegación de Coinbase Wallet<br></br>¿iPhone sincronizando su información de MetaMask con iCloud?<br></br>¿Cómo funciona Web3 dApps?<br></br>Soulbound Studio<br></br>¡Y más!</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">Datos en vivo / Estadísticas</h3>
        <h3 className="QB-about-page-text">Recuento de delegadores activos<br></br>Recuento de delegación activa<br></br>Recuento de titulares<br></br>Recuento de subgráficos<br></br>Recuento de curadores<br></br>Recuento de indexadores activos <br></br>Recuento total de tarifas de consulta<br></br>GRT total apostado<br></br>GRT total delegado por los delegadores<br></br>GRT total señalado por los curadores<br></ br>GRT total delegado por indexadores<br></br>GRT total quemado</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Delegador</h2>
        <h3 className="QB-about-page-text">¿Cuál es el recuento de delegadores activos?<br></br>¿Cuál es el GRT total delegado por los delegantes?<br></br>¿Qué son las recompensas de los delegadores?<br></br>¿Qué es un delegador?<br></br>¿Cómo delego?<br></br>¿Cuáles son las tarifas de delegación?<br></br>¿Puedo delegar con una billetera?<br></br>¿Cuánto tiempo para cancelar la delegación?<br></br>¿Qué es el gas?<br></br>¿Qué es el staking líquido?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Indexador</h2>
        <h3 className="QB-about-page-text">¿Qué es un indexador?<br></br>¿Cuál es el recuento de indexadores activos?<br></br>¿Cuál es el GRT total delegado por los indexadores?<br></br>¿Cómo elijo un indexador?< br></br>¿Cuáles son los requisitos de hardware para la indexación?<br></br>Horario de oficina del indexador<br></br>¿Cuál es el recorte de la recompensa del indexador?<br></br>¿Cuánto GRT necesito? necesito convertirme en un indexador?<br></br>Ubicación de indexadores<br></br>¿Cómo comparo indexadores?<br></br>¿Qué herramientas puedo usar para encontrar un indexador?<br></ br>¿Cuántos tokens GRT necesito para convertirme en Indexador?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Curador</h2>
        <h3 className="QB-about-page-text">¿Cuál es el recuento de curadores?<br></br>¿Cuál es el GRT total señalado por los curadores?<br></br>¿Qué es un curador?<br></br>¿Qué es una curva de vinculación?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Subgrafo</h2>
        <h3 className="QB-about-page-text">¿Qué es un subgráfico?<br></br>¿Cómo señalo un subgráfico?<br></br>¿Cómo verifico un subgráfico?<br></br>¿Cuál es el número de subgráficos?<br></br>¿Cómo obtengo la identificación de subgráficos del hash ipfs?<br></br>¿Cómo creo un subgráfico?<br></br>¿Cómo implemento un subgráfico?<br></br>¿Cómo ¿Puedo migrar un subgráfico del servicio alojado a la red principal?<br></br>¿Qué es una asignación?<br></br>¿Qué cursos hay disponibles?<br></br>¿Cuál es la diferencia entre el alojamiento y la red principal? <br></br>¿Qué es el servicio alojado?<br></br>¿Qué está desactivando el servicio alojado?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Más información sobre el gráfico</h2>
        <h3 className="QB-about-page-text">¿Qué es Graph Foundation?<br></br>¿Qué es Graph Council?<br></br>¿Quiénes son los miembros fundadores de Graph?<br></br>¿Quién proporciona los fondos para Graph?< br></br>¿Quiénes son los desarrolladores principales?<br></br>¿Qué es el gráfico?<br></br>¿Qué es el borde y el nodo?<br></br>¿Qué es el día del gráfico?< br></br>¿Qué es Graph Hack?<br></br>¿El gráfico hace lanzamientos desde el aire?<br></br>¿Hay alguna manera de obtener GRT gratis?<br></br>¿Cuál es el ¿Dirección de Github para el gráfico?<br></br>¿Dónde puedo encontrar el mapa de ruta?<br></br>¿Cuál es el esquema utilizado por el gráfico?<br></br></h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Comunidad</h2>
        <h3 className="QB-about-page-text">¿Qué es el servidor de discord oficial de graph?<br></br>¿Qué es el telegrama de graph?<br></br>¿Dónde puedo encontrar la comunidad de graph?<br></br>¿Qué son los graphtronauts?<br ></br>¿Qué es un abogado?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Tarifas de consulta</h2>
        <h3 className="QB-about-page-text">¿Qué son las tarifas de consulta?<br></br>¿Cómo se distribuyen las recompensas de indexación y las tarifas de consulta?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Tokenómica</h2>
        <h3 className="QB-about-page-text">¿Qué son los tokenonomics?<br></br>¿Qué son los desbloqueos de tokens?<br></br>¿Qué es el suministro de tokens?<br></br>¿Cuál es la dirección del token GRT?<br></br> ¿Qué es una época?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Desarrolladores principales | Día del Graph</h2>
        <h3 className="QB-about-page-text">¿Quiénes son los principales desarrolladores?<br></br>¿Qué son las operaciones gráficas?<br></br>¿Qué es la ubicación geográfica?<br></br>¿Qué son las subtransmisiones?<br></br>¿Qué es la transmisión rápida? ?<br></br>¿Qué es el gremio?<br></br>¿Qué es la semiótica?<br></br>¿Qué es la ficción?<br></br>¿Qué es firehose?<br></br>Día del Graph<br></br>Graph Hack</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Aprende Internet 3</h2>
        <h3 className="QB-about-page-text">Mujeres en web 3<br></br>¿Qué cursos hay disponibles?<br></br>¿Qué es Web3?<br></br>¿Qué es blockchain?<br></br>¿Es seguro blockchain? <br></br>¿Qué es la criptomoneda?<br></br>¿Qué es ethereum?<br></br>¿Qué es la prueba de trabajo?<br></br>¿Qué es la prueba de participación?<br ></br>¿Qué es una moneda estable?<br></br>¿Cuál es la diferencia entre una moneda y un token?<br></br>¿Qué es un cex?<br></br>¿Qué es a dex?<br></br>¿Qué es la capa dos?<br></br>¿Qué es zkproof?<br></br>¿Qué es un contrato inteligente?<br></br>¿Qué es un nft? ?<br></br>¿Qué es la minería?<br></br>¿Qué son los nodos?<br></br>¿Qué es una quema de fichas?<br></br>¿Qué es un dao?<br ></br>¿Qué es zksnark?<br></br>¿Qué es zkstark?<br></br>¿Qué es el metaverso?</h3>
        </div>
</div>
<ESPChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default ESPTranslatorHelp;