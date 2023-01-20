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
            <h3 className="feedback-text chatbot-page-text"><a className="chatbot-link" href="https://twitter.com/onursaraylii" target="_blank" rel="noreferrer">Onur</a> bu chatbot'ta rehberler oluşturmuş ve Türk topluluğunun potansiyelinden tam olarak yararlanabilmesi için içeriği buna göre gözden geçirmiş ve değiştirmiştir.</h3><h3 className="feedback-text chatbot-page-text"><strong>Beta Aşama 1</strong></h3>
            <h3 className="feedback-text chatbot-page-text">Şu an da Youtube eğitimleri sadece İngilizce dilindedir. Kendi dilinize çevirmek için lütfen önce Altyazıları/CC'yi etkinleştirin. Daha sonra ayarlar düğmesini tıklayın, Altyazıları seçip otomatik çevirmeden Türkçe'yi seçin.</h3>
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
       <button type="button" className="feedback-button btn btn-outline-dark"><a className="chatbot-link-button" href="https://mb3kald91rd.typeform.com/to/s4NyS49n" target="_blank" rel="noreferrer"><h3 className="feedback-button-text">Chatbot Geliştirme Formu
          </h3></a></button>
          <br></br>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" href="/TURTranslatorHelp" target="_blank" rel="noreferrer">Çevirmen Yardım Sayfası</a></h2>
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