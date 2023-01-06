import React from 'react';
import '../../App.css';
import NavbarChatbot from '../navbars/NavbarChatbot';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import TURConfig from './TURConfig';
import TURMessageParser from './TURMessageParser';
import TURActionProvider from './TURActionProvider';
import TURChatbotFooter from '../footer/TURChatbotFooter';

const TURChatBotPage = () => ({ 
  render(){
      return (
        <>
        <NavbarChatbot />
        <div className="chatbot-page-container">
            <div className="chatbot-text-container">
            <h3 className="feedback-text chatbot-page-text">Lütfen içerik, dokümantasyon ve öğreticiler önererek iyileştirmelere yardımcı olarak GRTDataHub Turkish Chatbot'u destekleyin.</h3>
            <h3 className="feedback-text chatbot-page-text"><a className="chatbot-link" href="https://twitter.com/onursaraylii" target="_blank" rel="noreferrer">Onur'un</a> yardımıyla, chatbot'un çevirileri gözden geçirildi ve Türk topluluğunun tam potansiyelinden faydalanması için uygun şekilde değiştirildi.</h3><h3 className="feedback-text chatbot-page-text"><strong>Beta Aşama 1</strong></h3>
            {/* <h3 className="feedback-text chatbot-page-text">Şu anda yalnızca İngilizce olan YouTube eğitimleri için lütfen altyazıları/CC'yi etkinleştirin, ayarlar düğmesini tıklayın, altyazıları, otomatik çeviriyi ve Türkçe'yi seçin.</h3> */}
           
        <Chatbot
        config={TURConfig}
        messageParser={TURMessageParser}
        actionProvider={TURActionProvider}
        headerText='GRTDataHub Türkçe Chatbot'
        placeholderText='Nasıl yetki verebilirim?'
        disableScrollToBottom
      /> 
       <button type="button" className="feedback-button btn btn-outline-dark"><a className="chatbot-link-button" href="https://mb3kald91rd.typeform.com/to/esxDMqut " target="_blank" rel="noreferrer"><h3 className="feedback-button-text">Chatbot Geliştirme Formu
          </h3></a></button>
</div>
</div>
<TURChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default TURChatBotPage;



 <Chatbot
 config={TURConfig}
 messageParser={TURMessageParser}
 actionProvider={TURActionProvider}
/>