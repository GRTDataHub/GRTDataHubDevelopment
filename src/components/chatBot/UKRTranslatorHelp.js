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
              <h1 className="QB-about-page-title">Ласкаво просимо на сторінку довідки перекладача GRTDataHub!</h1>
              <br></br>
              <h3 className="QB-about-page-subtitle">Як перекладаються чат-боти?</h3>
              <h3 className="QB-about-page-text">Перекладачі GraphAdvocates виконали дивовижну роботу з перекладу контенту, щоб спільноти могли отримати велику користь від цього інструменту. Ви можете знайти, хто переклав і вичитав контент, у верхній частині кожного відповідного чат-бота.</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">Як я можу сприяти вдосконаленню та перекладу в майбутньому?</h3>
              <h3 className="QB-about-page-text">Ви можете відвідати сторінку GRTDataHub на GitHub з відкритим вихідним кодом <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/pulls" target="_blank" rel="noreferrer">тут</a>.. Pull-запити допомагають вам співпрацювати над кодом з іншими людьми. Коли запити будуть створені, вони з'являтимуться тут у вигляді списку з можливістю пошуку та фільтрації.<br></br><br></br>Обговорення нового вмісту та перекладів дивіться <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/discussions" target="_blank" rel="noreferrer">тут</a>.</h3><h3 className="QB-about-page-text">Ви також можете написати мені безпосередньо через <a className="graphiql-link"  href="https://t.me/GRTDataHub" target="_blank" rel="noreferrer">Telegram</a>, <a className="graphiql-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">Twitter</a> або електронною поштою admin@GRTDataHub.com. Інший варіант - скористатися формою вдосконалення чат-бота, яка знаходиться внизу кожного чат-бота.</h3>
              <hr className="QB-about-hr"></hr>
              <h3 className="QB-about-page-subtitle">Завантажте вміст чат-бота</h3>
              
              <div className="new-button QB-about-page-subtitle">
              <a href={ChatbotContent} download="GRTDataHub_Chatbot_Content.docx">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Файл Microsoft Word
      </a>
  </div>
  <div className="new-button QB-about-page-subtitle">
  <a href={ChatbotContentText} download="GRTDataHub_Chatbot_Content.txt">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Текстовий файл
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