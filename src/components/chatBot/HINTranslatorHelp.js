import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import HINChatbotFooter from '../footer/HINChatbotFooter';
import ChatbotContent from './Files/GRTDataHub-Chatbot-Content.docx';
import ChatbotContentText from './Files/GRTDataHub_Chatbot_Content.txt';
// font awesome 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faTelegramPlane, faReddit, faYoutube } from "@fortawesome/free-brands-svg-icons";
const HINTranslatorHelp = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
              <h1 className="QB-about-page-title">GRTDataHub अनुवादक सहायता पृष्ठ पर आपका स्वागत है!</h1>
              <br></br>
              <h3 className="QB-about-page-subtitle">चैटबॉट्स का अनुवाद कैसे किया जाता है?</h3>
              <h3 className="QB-about-page-text">ग्राफ़एडवोकेट्स अनुवादकों ने इस उपकरण से समुदायों को बहुत लाभान्वित करने के लिए सामग्री का अनुवाद करने में एक अद्भुत काम किया है। आप पता लगा सकते हैं कि किसने अनुवाद किया है और प्रत्येक संबंधित चैटबॉट के शीर्ष पर सामग्री को पढ़ा है।</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">मैं भविष्य में सुधार और अनुवाद करने में कैसे मदद कर सकता हूँ?</h3>
              <h3 className="QB-about-page-text">आप <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/pulls" target="_blank" rel="noreferrer">यहां</a> GRTDataHub के ओपन-सोर्स GitHub पेज पर जा सकते हैं। पुल अनुरोध आपको अन्य लोगों के साथ कोड पर सहयोग करने में मदद करते हैं। जैसे ही पुल अनुरोध बनाए जाते हैं, वे यहां खोजे जाने योग्य और फ़िल्टर करने योग्य सूची में दिखाई देंगे।<br></br><br></br>नई सामग्री और अनुवादों के बारे में चर्चा के लिए <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/discussions" target="_blank" rel="noreferrer">यहां</a> देखें। </h3><h3 className="QB-about-page-text">आप मुझे सीधे <a className="graphiql-link"  href="https://t.me/GRTDataHub" target="_blank" rel="noreferrer">टेलीग्राम</a>, <a className="graphiql-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">ट्विटर</a> या ईमेल admin@GRTDataHub.com के माध्यम से भी संदेश भेज सकते हैं। एक अन्य विकल्प प्रत्येक चैटबॉट के नीचे चैटबॉट सुधार फॉर्म का उपयोग करना है।</h3>
              <hr className="QB-about-hr"></hr>
              <h3 className="QB-about-page-subtitle">चैटबॉट सामग्री डाउनलोड करें</h3>
              
              <div className="new-button QB-about-page-subtitle">
              <a href={ChatbotContent} download="GRTDataHub_Chatbot_Content.docx">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        माइक्रोसॉफ्ट वर्ड फ़ाइल
      </a>
  </div>
  <div className="new-button QB-about-page-subtitle">
  <a href={ChatbotContentText} download="GRTDataHub_Chatbot_Content.txt">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        पाठ फ़ाइल
      </a>
  </div>
   {/* <span className="telegram"><a href="https://t.me/GraphtronautsDataHub" target="_blank" rel="noreferrer"><h3 className="telegram-icon"><FontAwesomeIcon className="icon" icon={faTelegramPlane} color="#53466C" size="lg" /></h3></a></span>
            <span className="twitter"><a href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer"><h3 className="twitter-icon"><FontAwesomeIcon className="icon" icon={faTwitter} color="#53466C" size="lg" /></h3></a></span> */}
            {/* <span className="reddit"><a href="https://www.reddit.com/user/bitcoin_zpt?utm_medium=android_app&utm_source=share" target="_blank" rel="noreferrer"><h3 className="reddit-icon"><FontAwesomeIcon className="icon" icon={faReddit} color="#53466C" size="lg"/></h3></a></span>
                <span className="youtube"><a href="https://youtube.com/channel/UCfWakD5bnrOD_mq8uXlNnbg" target="_blank" rel="noreferrer"><h3 className="youtube-icon"><FontAwesomeIcon className="icon" icon={faYoutube} color="#53466C" size="lg"/></h3></a></span> */}
              
        </div>
        
</div>
<HINChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default HINTranslatorHelp;