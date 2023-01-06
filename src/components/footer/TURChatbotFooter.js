import React from 'react';
import "../../App.css";

const TURChatbotFooter = () =>{
return (
  <div className="chatbot-footer">
	<footer className="bg-dark text-center text-white">
  <div className="col-auto">
  <p className="pt-auto footer">
            <strong>Yakında daha fazla veri geliyor!</strong><br></br>
            Daha fazla veri istemek için lütfen <span className="email">admin@GRTDataHub.com</span> adresine e-posta gönderin.<br></br>Önerilen herhangi bir iyileştirmeniz varsa, uygulamayla ilgili aksaklıkları veya sorunları bulun, <br></br>ardından lütfen Telegram Twitter <a className="data-link"  href="https://t.me/GraphtronautsDataHub" target="_blank" rel="noreferrer">Telegram</a> veya  <a className="data-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">Twitter</a> aracılığıyla iletişime geçin.<br></br>
              <p><a className="about" href="/aboutPage">Hakkında</a><a className="privacy-policy-link" href="/privacyPolicy">Gizlilik Politikası</a><a className="privacy-policy-link" href="/cookiePolicy">Çerez politikası</a><a className="privacy-policy-link" href="https://app.termly.io/notify/a85a151c-741d-4a15-a8f6-9d2bb64ee205" target="_blank" rel="noreferrer"><strong>
              bilgilerimi satma</strong>
</a><br></br><span className="C">© 2022 - GRTDataHub</span><br></br></p>
            </p>
          </div>
</footer>
</div>
)}

export default TURChatbotFooter;