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
            <h3 className="feedback-text chatbot-page-text">Apoye el GRTDataHub Chatbot ayudando con las mejoras recomendando contenido, documentación y tutoriales.</h3><h3 className="feedback-text chatbot-page-text"></h3>
            <h3 className="feedback-text chatbot-page-text">Con la ayuda de <a className="chatbot-link" href="https://twitter.com/block_latina?s=21&t=cVYEbpPulTa3Uw6fHWaS7Q" target="_blank" rel="noreferrer">Jorgelina</a> y <a className="chatbot-link" href="https://twitter.com/blockya_?s=21&t=cVYEbpPulTa3Uw6fHWaS7Q" target="_blank" rel="noreferrer">Lorena</a>, las traducciones dentro de este chatbot han sido revisadas y modificadas en consecuencia para que la comunidad española las use y aproveche todo su potencial.</h3>
            <h3 className="feedback-text chatbot-page-text">Pour les didacticiels YouTube qui ne sont actuellement qu'en anglais, veuillez activer les sous-titres/CC, cliquez sur le bouton Paramètres, sélectionnez les sous-titres, la traduction automatique et l'espagnol.</h3>
            <h3 className="feedback-text chatbot-page-text">La comunidad está traduciendo activamente tutoriales de texto y blogs, si desea contribuir, ¡póngase en contacto con nosotros!</h3>

        <Chatbot
        config={ESPConfig}
        messageParser={ESPMessageParser}
        actionProvider={ESPActionProvider}
        headerText='GRTDataHub Chatbot en Español'
        placeholderText='¿Cómo delegar?'
        disableScrollToBottom
      /> 
        <br></br>
      <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="https://mb3kald91rd.typeform.com/to/Mr1hatEA" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Formulario de mejoras de Chatbot
      </a>
  </div>
          <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/ESPTranslatorHelp" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Página de ayuda de la traductora
      </a>
  </div>
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