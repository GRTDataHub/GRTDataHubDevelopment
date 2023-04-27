// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'GRTDataHub हिंदी चैटबॉट';

const message = 'यदि आप चैटबॉट में संदेशों के बजाय बटनों का उपयोग करना पसंद करते हैं, तो बस नीचे "सहायता" टाइप करें और मैं उत्तर खोजने में आपकी सहायता करूंगा।';

const HINconfig = {

  botName: botName,
  
  initialMessages: [
    createChatBotMessage(`स्वागत! मैं ${botName} हूं। मैं ग्राफ़ के बारे में आपके किसी भी प्रश्न का उत्तर देने में मदद करूँगा। मैं आपको पाठ और वीडियो ट्यूटोरियल के साथ प्रासंगिक दस्तावेज़ीकरण का लिंक प्रदान करूँगा ताकि आप चाहें तो और जानकारी प्राप्त कर सकें। मूर्खतापूर्ण प्रश्न जैसी कोई चीज नहीं है, मैं यहां मदद करने और शिक्षित करने के लिए हूं!`), 
    createChatBotMessage(`${message}`),
  ],
};

export default HINconfig;

