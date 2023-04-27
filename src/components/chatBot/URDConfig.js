// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'GRTDataHub اردو چیٹ بوٹ';

const message = 'اگر آپ چیٹ بوٹ میں پیغامات کے بجائے بٹن استعمال کرنا پسند کریں گے، تو بس نیچے "مدد" ٹائپ کریں اور میں آپ کو جوابات تلاش کرنے میں مدد کروں گا۔';

const URDconfig = {

  botName: botName,

  initialMessages: [
    createChatBotMessage(`خوش آمدید! میں ${botName} ہوں۔ میں گراف کے بارے میں آپ کے کسی بھی سوال کے جواب میں مدد کروں گا۔ میں آپ کو متن اور ویڈیو ٹیوٹوریلز کے ساتھ متعلقہ دستاویزات کا لنک فراہم کروں گا تاکہ اگر آپ چاہیں تو مزید معلومات حاصل کر سکیں۔ احمقانہ سوال جیسی کوئی چیز نہیں ہے، میں یہاں مدد اور تعلیم دینے کے لیے حاضر ہوں!`), 
    createChatBotMessage(`${message}`),
  ],
};

export default URDconfig;

