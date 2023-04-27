import React from 'react';
import "../../App.css";

const ChatbotFooter = () =>{
return (
  <div className="chatbot-footer">
	<footer className="bg-dark text-center text-white">
  <div className="col-auto">
  <p className="pt-auto footer">
            <strong>مزید ڈیٹا جلد آرہا ہے!</strong><br></br>
            مزید ڈیٹا کی درخواست کرنے کے لیے براہ کرم <span className="email">admin@GRTDataHub.com</span> پر ای میل کریں۔<br></br> اگر آپ کے پاس کوئی تجویز کردہ بہتری ہے تو ایپ میں خرابیاں یا مسائل تلاش کریں۔<br></br>پھر براہ کرم ٹیلیگرام یا ٹویٹر کے ذریعے رابطہ کریں۔<a className="data-link"  href="https://t.me/GRTDataHub" target="_blank" rel="noreferrer">ٹیلی گرام</a> یا <a className="data-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">ٹویٹر</a><br></br>
              <p><a className="about" href="/aboutPage">کے بارے میں</a><a className="privacy-policy-link" href="/privacyPolicy">رازداری کی پالیسی</a><a className="privacy-policy-link" href="/cookiePolicy">کوکی پالیسی</a><a className="privacy-policy-link" href="https://app.termly.io/notify/a85a151c-741d-4a15-a8f6-9d2bb64ee205" target="_blank" rel="noreferrer"><strong>
              میری معلومات فروخت نہ کریں۔</strong>
</a><br></br><span className="C">© 2022 - GRTDataHub</span><br></br></p>
            </p>
          </div>
</footer>
</div>
)}

export default ChatbotFooter;