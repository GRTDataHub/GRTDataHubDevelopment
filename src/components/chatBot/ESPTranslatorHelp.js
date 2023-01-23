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
              <h1 className="QB-about-page-title">¡Bienvenido a la página de ayuda del traductor GRTDataHub!</h1>
              <br></br>
              <h3 className="QB-about-page-subtitle">¿Cómo se traducen los chatbots?</h3>
              <h3 className="QB-about-page-text">Los traductores de GraphAdvocates han hecho un trabajo increíble al traducir el contenido para que las comunidades se beneficien enormemente de esta herramienta. Puede encontrar quién ha traducido y revisar el contenido en la parte superior de cada chatbot respectivo.</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">¿Cómo puedo ayudar con las mejoras y la traducción en el futuro?</h3>
              <h3 className="QB-about-page-text">Puedes visitar la página de GitHub de código abierto para GRTDataHub, <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/pulls" target="_blank" rel="noreferrer">aquí</a>. Las solicitudes de extracción lo ayudan a colaborar en el código con otras personas. A medida que se crean las solicitudes de incorporación de cambios, aparecerán aquí en una lista que se puede buscar y filtrar.<br></br><br></br>Vea <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/discussions" target="_blank" rel="noreferrer">aquí</a>, para discusiones sobre contenido nuevo y traducciones.</h3>
              <h3 className="QB-about-page-text">También puedes enviarme un mensaje directamente a través de <a className="graphiql-link"  href="https://t.me/GRTDataHub" target="_blank" rel="noreferrer">Telegram</a>, <a className="graphiql-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">Twitter</a> o enviar un correo electrónico a admin@GRTDataHub.com. Otra opción es usar el formulario de mejoras de Chatbot en la parte inferior de cada chatbot.</h3>
        </div>

        









También puede enviarme un mensaje directamente a través de Telegram, Twitter o enviar un correo electrónico a admin@GRTDataHub.com. Otra opción es usar el formulario de mejoras de Chatbot en la parte inferior de cada chatbot.
</div>
<ESPChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default ESPTranslatorHelp;