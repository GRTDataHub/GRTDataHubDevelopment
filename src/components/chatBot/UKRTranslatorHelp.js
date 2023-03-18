import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import UKRChatbotFooter from '../footer/UKRChatbotFooter';
import ChatbotContent from './Files/GRTDataHub-Chatbot-Content.docx';
import ChatbotContentText from './Files/GRTDataHub_Chatbot_Content.txt';
// font awesome 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faTelegramPlane, faReddit, faYoutube } from "@fortawesome/free-brands-svg-icons";
const UKRTranslatorHelp = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
              <h1 className="QB-about-page-title">Welcome to the GRTDataHub translator help page!</h1>
              <br></br>
              <h3 className="QB-about-page-subtitle">How are the chatbots translated?</h3>
              <h3 className="QB-about-page-text">GraphAdvocates translators have done an amazing job at translating the content for the communities to benefit greatly from this tool. You can find who has translated and proof read the content at the top each each respective chatbot.</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">How do I help with improvements and translating in the future?</h3>
              <h3 className="QB-about-page-text">You can visit the open-source GitHub page for the GRTDataHub, <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/pulls" target="_blank" rel="noreferrer">here</a>. Pull requests help you collaborate on code with other people. As pull requests are created, they’ll appear here in a searchable and filterable list.<br></br><br></br>See <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/discussions" target="_blank" rel="noreferrer">here</a>, for discussions regarding new content and translations.</h3><h3 className="QB-about-page-text">You can also message me directly via <a className="graphiql-link"  href="https://t.me/GRTDataHub" target="_blank" rel="noreferrer">Telegram</a>, <a className="graphiql-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">Twitter</a> or email admin@GRTDataHub.com. Another option is to use the Chatbot improvements form at the bottom of every chatbot.</h3>
              <hr className="QB-about-hr"></hr>
              <h3 className="QB-about-page-subtitle">Download Chatbot Contents</h3>
              
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
   {/* <span className="telegram"><a href="https://t.me/GraphtronautsDataHub" target="_blank" rel="noreferrer"><h3 className="telegram-icon"><FontAwesomeIcon className="icon" icon={faTelegramPlane} color="#53466C" size="lg" /></h3></a></span>
            <span className="twitter"><a href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer"><h3 className="twitter-icon"><FontAwesomeIcon className="icon" icon={faTwitter} color="#53466C" size="lg" /></h3></a></span> */}
            {/* <span className="reddit"><a href="https://www.reddit.com/user/bitcoin_zpt?utm_medium=android_app&utm_source=share" target="_blank" rel="noreferrer"><h3 className="reddit-icon"><FontAwesomeIcon className="icon" icon={faReddit} color="#53466C" size="lg"/></h3></a></span>
                <span className="youtube"><a href="https://youtube.com/channel/UCfWakD5bnrOD_mq8uXlNnbg" target="_blank" rel="noreferrer"><h3 className="youtube-icon"><FontAwesomeIcon className="icon" icon={faYoutube} color="#53466C" size="lg"/></h3></a></span> */}
              
        </div>
        
</div>
<UKRChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default UKRTranslatorHelp;