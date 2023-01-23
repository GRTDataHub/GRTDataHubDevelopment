// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = "GRTDataHub'ın Türkçe Chatbot'uyum"

const message = 'Chatbot içinde mesajlar yerine butonları kullanmayı tercih ederseniz, aşağıya "yardım" yazmanız yeterlidir, cevapları bulmanıza yardımcı olurum.';

const TURconfig = {
  botName: botName,

  initialMessages: [
    createChatBotMessage(`Hoş geldin! Ben ${botName}. Graph projesi hakkındaki tüm sorularınızı yanıtlamaya çalışacağım. Daha fazla bilgi edinmek istiyorsanız size metin ve video eğitimleriyle ilgili belgelere bir bağlantı sağlayabilirim! Kötü soru diye bir şey yoktur, yardım etmek ve eğitmek için buradayım!`), 
    createChatBotMessage(`${message}`),
  ],
};

export default TURconfig;

