// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'GRTDataHub Türkçe Chatbot';

const message = 'Chatbot içinde mesajlar yerine butonları kullanmayı tercih ederseniz, aşağıya "yardım" yazmanız yeterlidir, cevapları bulmanıza yardımcı olurum.';

const TURconfig = {
  botName: botName,

  initialMessages: [
    createChatBotMessage(`Hoş geldin! Ben ${botName}'ım. Graph hakkında olabilecek tüm sorularınızı yanıtlamaya yardımcı olacağım. Dilerseniz daha fazla bilgi edinebilmeniz için size metin ve video eğitimleriyle birlikte ilgili belgelere bir bağlantı sağlayacağım. Aptalca soru diye bir şey yoktur, yardım etmek ve eğitmek için buradayım!`), 
    createChatBotMessage(`${message}`),
  ],
};

export default TURconfig;

