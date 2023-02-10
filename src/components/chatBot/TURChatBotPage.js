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
            <h3 className="feedback-text chatbot-page-text">Lütfen içerikleri, dökümanları ve öğretici rehberleri başkalarına önererek iyileştirmelere yardımcı olun ve GRTDataHub Turkish Chatbot'u destekleyin.</h3>
            <h3 className="feedback-text chatbot-page-text"><a className="chatbot-link" href="https://twitter.com/onursaraylii" target="_blank" rel="noreferrer">Onur</a> bu chatbot'ta rehberler oluşturmuş ve Türk topluluğunun potansiyelinden tam olarak yararlanabilmesi için içeriği gözden geçirmiş ve değiştirmiştir.</h3>
            <h3 className="feedback-text chatbot-page-text">Youtube eğitimlerimiz şu anda sadece İngilizcedir. Kendi dilinize çevirmek için lütfen önce Altyazıları/CC'yi etkinleştirin. Daha sonra ayarlar düğmesini tıklayın, Altyazıları seçip otomatik çevirmeden Türkçe'yi seçin.</h3>
            <h3 className="feedback-text chatbot-page-text">Metin eğitimleri ve bloglar topluluk tarafından aktif olarak çevriliyor, katkıda bulunmak istiyorsanız lütfen iletişime geçin!</h3>

        <Chatbot
        config={TURConfig}
        messageParser={TURMessageParser}
        actionProvider={TURActionProvider}
        headerText='GRTDataHub Türkçe Chatbot'
        placeholderText='Nasıl stake edebilirim?'
        disableScrollToBottom
      /> 
        <br></br>
      <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="https://mb3kald91rd.typeform.com/to/s4NyS49n" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Chatbot Geliştirme Formu
      </a>
  </div>
          <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/TURTranslatorHelp" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Çevirmen Yardım Sayfası
      </a>
  </div>
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