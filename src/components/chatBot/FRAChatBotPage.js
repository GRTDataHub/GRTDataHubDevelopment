import React from 'react';
import '../../App.css';
import NavbarChatbot from '../navbars/NavbarChatbot';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import FRAConfig from './FRAConfig';
import FRAMessageParser from './FRAMessageParser';
import FRAActionProvider from './FRAActionProvider';
import FRAChatbotFooter from '../footer/FRAChatbotFooter';

const FRAChatBotPage = () => ({ 
  render(){
      return (
        <>
        <NavbarChatbot />
        <div className="chatbot-page-container">
            <div className="chatbot-text-container">
            <h3 className="feedback-text chatbot-page-text">Veuillez soutenir le chatbot GRTDataHub en aidant aux améliorations en recommandant du contenu, de la documentation et des didacticiels.</h3><h3 className="feedback-text chatbot-page-text">Con la ayuda de <a className="chatbot-link" href="https://twitter.com/justconstant1?s=21&t=cVYEbpPulTa3Uw6fHWaS7Q" target="_blank" rel="noreferrer">Constantin</a>, las traducciones dentro de este chatbot han sido revisadas y modificadas en consecuencia para que la comunidad francesa las use y aproveche todo su potencial.</h3><h3 className="feedback-text chatbot-page-text"><strong>Bêta Phase 1</strong></h3>
            
        <Chatbot
        config={FRAConfig}
        messageParser={FRAMessageParser}
        actionProvider={FRAActionProvider}
        headerText='GRTDataHub French Chatbot'
        placeholderText='Comment déléguer ?'
        disableScrollToBottom
      /> 
       <button type="button" className="feedback-button btn btn-outline-dark"><a className="chatbot-link-button" href="https://mb3kald91rd.typeform.com/to/PMIvTIT7" target="_blank" rel="noreferrer"><h3 className="feedback-button-text">Formulaire d'amélioration du chatbot
          </h3></a></button>
</div>
</div>
<FRAChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default FRAChatBotPage;



 <Chatbot
 config={FRAConfig}
 messageParser={FRAMessageParser}
 actionProvider={FRAActionProvider}
/>