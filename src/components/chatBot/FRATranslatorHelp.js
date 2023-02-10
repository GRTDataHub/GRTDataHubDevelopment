import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import FRAChatbotFooter from '../footer/FRAChatbotFooter';
import ChatbotContent from './Files/GRTDataHub-Chatbot-Content.docx';
import ChatbotContentText from './Files/GRTDataHub_Chatbot_Content.txt';

const FRATranslatorHelp = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
              <h1 className="QB-about-page-title">Bienvenue sur la page d'aide du traducteur GRTDataHub !</h1>
              <br></br>
              <h3 className="QB-about-page-subtitle">Comment sont traduits les chatbots ?</h3>
              <h3 className="QB-about-page-text">Les traducteurs de GraphAdvocates ont fait un travail incroyable en traduisant le contenu pour que les communautés bénéficient grandement de cet outil. Vous pouvez trouver qui a traduit et relire le contenu en haut de chaque chatbot respectif.</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">Comment puis-je contribuer aux améliorations et à la traduction à l'avenir ?</h3>
              <h3 className="QB-about-page-text">Vous pouvez visiter la page open-source GitHub pour le GRTDataHub, <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/pulls" target="_blank" rel="noreferrer">ici</a>. Les demandes d'extraction vous aident à collaborer sur du code avec d'autres personnes. Au fur et à mesure que les demandes d'extraction sont créées, elles apparaîtront ici dans une liste consultable et filtrable.<br></br><br></br>Voir <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/discussions" target="_blank" rel="noreferrer">ici</a>, pour les discussions concernant le nouveau contenu et les traductions.</h3>
              <h3 className="QB-about-page-text">Vous pouvez également m'envoyer un message directement via <a className="graphiql-link"  href="https://t.me/GRTDataHub" target="_blank" rel="noreferrer">Telegram</a>, <a className="graphiql-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">Twitter</a> ou envoyer un e-mail à admin@GRTDataHub.com. Une autre option consiste à utiliser le formulaire d'améliorations Chatbot au bas de chaque chatbot.</h3>
              <hr className="QB-about-hr"></hr>
              <h3 className="QB-about-page-subtitle">Télécharger le contenu du chatbot</h3>
              <div className="new-button QB-about-page-subtitle">
              <a href={ChatbotContent} download="GRTDataHub_Chatbot_Content.docx">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Microsoft Word File
      </a>
  </div>
  <div className="new-button QB-about-page-subtitle">
  <a href={ChatbotContentText} download="GRTDataHub_Chatbot_Content.txt">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Text File
      </a>
  </div>
        </div>
</div>
<FRAChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default FRATranslatorHelp;