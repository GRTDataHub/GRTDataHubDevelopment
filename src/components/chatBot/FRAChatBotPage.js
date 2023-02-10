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
            <h3 className="feedback-text chatbot-page-text">Veuillez soutenir le chatbot GRTDataHub en aidant aux améliorations en recommandant du contenu, de la documentation et des didacticiels.</h3><h3 className="feedback-text chatbot-page-text">Avec l'aide de <a className="chatbot-link" href="https://twitter.com/justconstant1?s=21&t=cVYEbpPulTa3Uw6fHWaS7Q" target="_blank" rel="noreferrer">Constantin</a>, les traductions du chatbot ont été revues et modifiées en conséquence pour que la communauté française puisse utiliser et réaliser leur plein potentiel.</h3>
            <h3 className="feedback-text chatbot-page-text">Pour les didacticiels YouTube qui ne sont actuellement qu'en anglais, veuillez activer les sous-titres/CC, cliquez sur le bouton Paramètres, sélectionnez les sous-titres, la traduction automatique et le français.</h3>
            <h3 className="feedback-text chatbot-page-text">Les didacticiels textuels et les blogs sont activement traduits par la communauté, si vous souhaitez contribuer, n'hésitez pas à nous contacter!</h3>
            
        <Chatbot
        config={FRAConfig}
        messageParser={FRAMessageParser}
        actionProvider={FRAActionProvider}
        headerText='Chatbot Français GRTDataHub'
        placeholderText='Comment déléguer ?'
        disableScrollToBottom
      /> 
        <br></br>
      <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="https://mb3kald91rd.typeform.com/to/PMIvTIT7" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Formulaire d'amélioration du chatbot
      </a>
  </div>
          <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/FRATranslatorHelp" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Page d'aide du traducteur
      </a>
  </div>
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