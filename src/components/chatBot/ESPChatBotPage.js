import React from 'react';
import '../../App.css';
import NavbarChatbot from '../navbars/NavbarChatbot';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import ESPConfig from './ESPConfig';
import ESPMessageParser from './ESPMessageParser';
import ESPActionProvider from './ESPActionProvider';
import ESPChatbotFooter from '../footer/ESPChatbotFooter';

const ESPChatBotPage = () => ({ 
  render(){
      return (
        <>
        <NavbarChatbot />
        <div className="chatbot-page-container">
            <div className="chatbot-text-container">
            <h3  className="chatbot-page-text">Para encontrar el conjunto completo de preguntas para este bot y las ACTUALIZACIONES RECIENTES, consulte <a  className="chatbot-link" href="./ESPQuestionBank" target="_blank" rel="noreferrer">aquí</a>.</h3><h3 className="feedback-text chatbot-page-text">Apoye el GRTDataHub Chatbot ayudando con las mejoras recomendando contenido, documentación y tutoriales.</h3><h3 className="feedback-text chatbot-page-text"></h3><h3 className="feedback-text chatbot-page-text">Los tutoriales de texto y video ahora están en español, sin embargo, algunos están actualmente en inglés.</h3><h3 className="feedback-text chatbot-page-text">Beta Fase 2</h3>

        <Chatbot
        config={ESPConfig}
        messageParser={ESPMessageParser}
        actionProvider={ESPActionProvider}
        headerText='GRTDataHub Chatbot en Español'
        placeholderText='¿Cómo delegar?'
        disableScrollToBottom
      /> 
       <button type="button" className="feedback-button btn btn-outline-dark"><a className="chatbot-link-button" href="https://mb3kald91rd.typeform.com/to/Mr1hatEA" target="_blank" rel="noreferrer"><h3 className="feedback-button-text">Formulario de mejoras de Chatbot
          </h3></a></button>
</div>
</div>
<ESPChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default ESPChatBotPage;



 <Chatbot
 config={ESPConfig}
 messageParser={ESPMessageParser}
 actionProvider={ESPActionProvider}
/>