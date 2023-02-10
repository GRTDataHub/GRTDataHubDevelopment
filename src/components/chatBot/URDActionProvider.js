import React from 'react';
import '../../App.css';
import { ChatBotActiveDelegatorCountBar ,  ChatBotHoldersCountBar, ChatBotActiveDelegationCountBar, ChatBotSubgraphsCountBar, ChatBotCuratorsCountBar, ChatBotActiveIndexerCountBar, ChatBotTotalGRTDelegatedByDelegatorsBar, ChatBotTotalQueryFeesCountBar, ChatBotTotalGRTSignalledByCuratorsBar, ChatBotTotalStakedGRTCountBar, ChatBotTotalDelegatedGRTByIndexersCountBar, ChatBotTotalGRTBurnedCountBar } from "../mainBarCharts/BarChartsData";
import Embed from 'react-embed';

class URDActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
// Charts / Graphs Start
handleActiveDelegatorCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>فعال ڈیلیگیٹر کی گنتی <ChatBotActiveDelegatorCountBar /> ہے۔</h4>
  فعال ڈیلیگیٹر کی گنتی کو مکمل منظر میں دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/ActiveDelegatorCount" target="_blank" rel="noreferrer">یہاں کلک کریں
  ۔</a></a>  
  ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveDelegationCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>فعال ڈیلیگیٹرز کی تعداد <ChatBotActiveDelegationCountBar / > ہے۔</h4>
  فعال ڈیلیگیٹرز کی گنتی کو مکمل منظر میں دیکھنے کے لئے  <a className="cla" href="https://grtdatahub.com/ActiveDelegationCount" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleHoldersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>ہولڈرز کی گنتی <ChatBotHoldersCountBar /> ہے۔ </h4>
  ہولڈرز کی گنتی کو مکمل منظر میں دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/HoldersCount" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleSubgraphsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>سب گراف کی گنتی <ChatBotSubgraphsCountBar /> ہے۔</h4>
  سب گراف گنتی کو مکمل منظر میں دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/SubgraphsCount" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleCuratorsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>کیوریٹر کی گنتی <ChatBotCuratorsCountBar /> ہے۔</h4>
  کیوریٹر کاؤنٹ کو مکمل منظر میں دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/CuratorsCount" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveIndexerCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>فعال انڈیکسر کی گنتی <ChatBotActiveIndexerCountBar /> ہے.</h4>
  فعال انڈیکسر کی گنتی کو مکمل منظر میں دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/ActiveIndexerCount" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTDelegatedByDelegators() {
  const message = this.createChatbotMessage(<a> 
  <h4>ڈیلیگیٹرز کے ذریعہ ڈیلیگیٹڈ کردہ GRT کی کل رقم <ChatBotTotalGRTDelegatedByDelegatorsBar /> ہے۔</h4>
  مکمل منظر میں ڈیلیگیٹرز کے ذریعہ تفویض کردہ GRT کی کل رقم دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/TotalGRTDelegatedByDelegators" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalQueryFeesCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>تمام کیوری کی فیس کی گنتی <ChatBotTotalQueryFeesCountBar /> GRT ہے.</h4>
  مکمل منظر میں تمام کیوری فیس کی گنتی دیکھنے کے لئے  <a className="cla" href="https://grtdatahub.com/TotalQueryFeesCount" target="_blank" rel="noreferrer">یہاں کلک کریں.</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTSignalledByCurators() {
  const message = this.createChatbotMessage(<a> 
  <h4>کیوریٹرز کے ذریعہ اشارہ کردہ GRT کی کل رقم <ChatBotTotalGRTSignalledByCuratorsBar /> ہے.</h4>
  کیوریٹرز کے ذریعہ اشارہ کردہ GRT کی کل رقم کو مکمل نظارے میں دیکھنے کے لئے  <a className="cla" href="https://grtdatahub.com/TotalGRTSignalledByCurators" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalStakedGRTCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>داؤ پر لگی GRT کی کل رقم <ChatBotTotalStakedGRTCountBar /> ہے.</h4>
  مکمل منظر میں داؤ پر لگی GRT کی کل رقم دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/TotalStakedGRTCount" target="_blank" rel="noreferrer">یہاں کلک کریں</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalDelegatedGRTByIndexersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>انڈیکسرز کے ذریعہ تفویض کردہ GRT کی کل رقم <ChatBotTotalDelegatedGRTByIndexersCountBar /> ہے.</h4>
  انڈیکسرز کے ذریعہ تفویض کردہ GRT کی کل رقم کو مکمل منظر میں دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/TotalDelegatedGRTByIndexersCount" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTotalGRTBurnedCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>جلائی گئی GRT کی کل مقدار <ChatBotTotalGRTBurnedCountBar /> ہے.</h4>
  مکمل منظر میں جلائے گئے GRT کی کل مقدار دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/TotalGRTBurnedCount" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// constructor(props) {
  
// }
// Choosing Indexer Start
handleChoosingIndexers() {
  this.handleDelegateGuides = this.handleDelegateGuides.bind(this);
  const message = this.createChatbotMessage(<a>تفویض کرنے کے لئے انڈیکسر کا انتخاب کرنا ایک مشکل فیصلہ ہوسکتا ہے۔ مندرجہ ذیل معلومات اور وسائل آپ کی مدد کریں گے. صرف اس وجہ سے کہ انڈیکسر میں سب سے زیادہ APY ہے اس کا مطلب یہ نہیں ہے کہ وہ آپ کے لئے بہترین ہیں۔ اپنی تحقیق کریں ، اپنا وقت لیں اور سیکھیں کہ انڈیکسر کو تفویض کرنے کے لئے منتخب کرتے وقت کیا دیکھنا ہے۔ یہ اس بات کو یقینی بنائے گا کہ آپ تفویض کرنے سے پہلے پراعتماد ہیں۔<hr></hr>
گرافٹرونوٹس ایپ ڈیلیگیٹرز کو اپنی پسند کے انڈیکسر کے بارے میں مفید بصیرت حاصل کرنے کی اجازت دیتی ہے۔ بس اپنی پسند کے انڈیکسر کا ETH ایڈریس داخل کریں یا جائزوں پر ایک نظر ڈالیں۔ آپ ایپ کے اندر انڈیکسرز کا موازنہ بھی کرسکتے ہیں۔
<br></br>
<a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts app</a>
  <br></br><br></br>
  ایک بار جب آپ ڈیلیگیٹ کے لئے تیار ہوجائیں تو ، براہ کرم <a className="cla" onClick={this.handleDelegateGuides}> کریں اور میں آپ کو متن اور ویڈیو ٹیوٹوریل فراہم کروں گا۔ </a>مجھ پر کلک</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Choosing Indexers End
handleJob() {
  const message = this.createChatbotMessage(<a>web3 میں کام کرنا چاہتے ہیں؟ اچھی خبر، گراف ایکو سسٹم کی خدمات حاصل کر رہا ہے! گراف فاؤنڈیشن اور کور ڈویلپر ٹیموں میں مواقع موجود ہیں۔  موجودہ کھلی پوزیشنوں کے لئے <a className="cla" href="https://thegraph.com/jobs/#open-positions" target="_blank" rel="noreferrer">یہاں</a> ایک نظر ڈالیں.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// Network Roles Start
handleRoles() {
  this.handleDelegateGuides = this.handleDelegateGuides.bind(this);
  this.handleBecomeIndexer = this.handleBecomeIndexer.bind(this);
  this.handleCurator = this.handleCurator.bind(this);
  const message = this.createChatbotMessage(<a>گراف نیٹ ورک تین کرداروں پر مشتمل ہے جو ایکو سسٹم کو خدمات فراہم کرتے ہیں اور web3 ایپلی کیشنز جیسے یونیسویپ ، ایو اور سنتھیٹکس کو ڈیٹا فراہم کرتے ہیں: انڈیکسرز ، کیوریٹرز اور ڈیلیگیٹرز۔ آپ ذیل میں ہر کردار کے لئے تفصیلی دستاویزات تلاش کرسکتے ہیں۔
    <br></br>
    <a className="cla" onClick={this.handleBecomeIndexer}>انڈیکسرز</a>
    <br></br>
    <a className="cla" onClick={this.handleCurator}>کیوریٹرز</a>
    <br></br>
    <a className="cla" onClick={this.handleDelegateGuides}>ڈیلیگیٹرز</a>
    <br></br>
    گراف نیٹ ورک کی معاشی سلامتی کو یقینی بنانے اور اعداد و شمار کی سالمیت کو یقینی بنانے کے لئے ، شرکاء گراف ٹوکن (GRT) کو داؤ پر لگاتے ہیں اور استعمال کرتے ہیں۔ GRT ایک کام ٹوکن ہے جو ایتھریم بلاکچین پر ایک ERC-20 ہے ، جو نیٹ ورک میں وسائل مختص کرنے کے لئے استعمال ہوتا ہے۔ فعال انڈیکسرز ، کیوریٹرز اور ڈیلیگیٹرز خدمات فراہم کرسکتے ہیں اور نیٹ ورک سے آمدنی حاصل کرسکتے ہیں ، جو ان کے کام کی مقدار اور ان کے GRT اسٹیک کے متناسب ہیں۔</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleEdgeAndNode() {
  const message = this.createChatbotMessage(<a>گراف نیٹ ورک کے پیچھے کا خیال گراف پروٹوکول ، انکارپوریٹڈ کے ذریعہ تصور کیا گیا تھا اور اسے شکل دی گئی تھی۔  17 دسمبر ، 2020 کو گراف نیٹ ورک کا مین نیٹ لانچ کرنے کے بعد ، گراف پروٹوکول ، انکارپوریٹڈ نے اس کا نام Edge & Node میں تبدیل کرنے کا فیصلہ کیا۔ نام کی تبدیلی کے پیچھے مقصد نیٹ ورک میں جاری غیر مرکزیت کو اجاگر کرنا تھا۔ اس طرح ، Edge & Node اب پروٹوکول کی ترقی اور فروغ دینے والی مرکزی ٹیم نہیں ہے۔ اس کے بجائے ، Edge & Node ایکو سسٹم کو خدمات فراہم کرے گا اور پروٹوکول کے ساتھ شامل ہوگا۔</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTheGraphFoundation() {
  const message = this.createChatbotMessage(<a>
    دی گراف فاؤنڈیشن کے قیام کا اعلان اکتوبر 2020 میں کیا گیا تھا۔
    <br></br>
    <a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank" rel="noreferrer">The Graph بنیاد</a>  
    <br></br><br></br>
    <a className="cla" href="https://ca.linkedin.com/in/evabeylin?original_referer=https%3A%2F%2Fdocs.thegraph.academy%2Fthe-graph-ecosystem%2Forganizational-structure%2Fthe-graph-foundation" target="_blank" rel="noreferrer">Eva Beylin</a> دی گراف فاؤنڈیشن کی ڈائریکٹر کے طور پر کام کرتی ہیں۔ پروٹوکول کی نگرانی کے لیے ذمہ دار، گراف فاؤنڈیشن ماحولیاتی نظام کو ہم آہنگی اور مدد فراہم کرے گی۔ فاؤنڈیشن کا قیام ایک آزاد تنظیمی ڈھانچہ تشکیل دینے کی حکمت عملی کا حصہ تھا جو کہ وکندریقرت ہو۔
    <hr></hr>کونسل کے ارکان:
    <br></br>انڈیکسرز<br></br>Jim Cousins & Gary Morris
    <br></br>صارفین<br></br>Justin J Moses & Kayvon Tehranian
    <br></br>محققین<br></br>Santiago Palladino & Yondon Fu
    <br></br>پشت پناہی کرنے والے<br></br>Michael Anderson & Spencer Noon
    <br></br>ابتدائی ٹیم<br></br>Brandon Ramirez & Yaniv Tal</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTheGraphCouncil() {
  const message = this.createChatbotMessage(<a>
    گراف کونسل  اکتوبر 2020 میں پروٹوکول کو ڈیسنٹرلائز کرنے کے منصوبوں کے ایک حصے کے طور پر متعارف کرایا گیا تھا۔ <a className="cla" href="https://thegraph.com/blog/introducing-the-graph-council" target="_blank" rel="noreferrer">گراف کونسل کے ممبران کا</a> افتتاح دسمبر 2020 میں کیا گیا تھا۔ گراف کونسل ڈیسنٹرلائزڈ گراف نیٹ ورک کو کنٹرول کرتی ہے۔ 10 میں سے 6 ملٹی سگ ایکو سسٹم میں پانچ مختلف اسٹیک ہولڈر گروپوں کے مفادات کو متوازن کرتا ہے: انڈیکسرز ، ٹوکن ہولڈرز ، ابتدائی ٹیم ، صارفین اور تکنیکی ڈومین کے ماہرین۔
    <br></br><br></br>
    گراف کونسل کے مینڈیٹ میں مندرجہ ذیل بنیادی افعال شامل ہیں:
    <br></br>
گراف فاؤنڈیشن آپریشنز
<br></br>
گرانٹس اور ایکو سسٹم فنڈنگ
<br></br>
پروٹوکول اپ گریڈ پروٹوکول
<br></br>
پیرامیٹرائزیشن
<br></br>
ایمرجنسی پروٹوکول آپریشنز
<br></br><br></br>
مستقبل میں ، گراف کی حکمرانی کو مزید مہذب بنانے کا منصوبہ بنایا گیا ہے ، مثال کے طور پر انفرادی ممبروں کو نیسٹڈ ملٹی سگس یا DAO کے ساتھ تبدیل کرکے۔</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Networok Roles End

handleBecomeIndexer() {
  const message = this.createChatbotMessage(<a><strong>گراف نیٹ ورک پر ایک موثر انڈیکسر کیسے بنیں۔</strong><hr></hr>انڈیکسرز کے لئے کم از کم ضروریات - گراف نیٹ ورک پر ایک مؤثر انڈیکسر بننے کے لئے چار اہم ضروریات کی ضرورت ہے.<br></br><br></br>سٹیک - آپ کو انڈیکسر بننے کے لئے کم از کم 100،000 GRT سٹیک کرنے ہوں گے.<br></br><br></br>مہارتیں - مثالی طور پر ، انڈیکسرز کا DevOps میں پس منظر ہونا چاہئے یا بلاکچین نوڈس کو چلانے کا تجربہ ہونا چاہئے۔ انڈیکسرز کو کلاؤڈ یا ہوسٹڈ سرورز کو تعینات کرنے ، یا اپنے سرور ہارڈ ویئر کو چلانے میں آرام دہ اور پرسکون ہونا چاہئے۔ توثیق کنندہ نوڈ چلانے اور لینکس پر کام کرنے سے واقفیت بھی تجویز کی جاتی ہے۔<br></br><br></br>ہارڈ ویئر - کارکردگی ، کیوری آؤٹ پٹ ، اور رفتار کو متوازن کرنے کے لئے ، بہت سے انڈیکسرز اکثر 16 سی پی یو ، 1 TB ڈسک ، اور 32 GB ریم کے سیٹ اپ سے شروع ہوتے ہیں۔<br></br><br></br>انفراسٹرکچر سافٹ ویئر - کنٹینر اور اسکیلنگ ٹکنالوجیوں جیسے ڈوکر اور کوبرنیٹس سے واقفیت فائدہ مند ہے ، تاہم گراف سافٹ ویئر کو ننگے دھات پر تعینات کرنا بھی ممکن ہے۔ انفراسٹرکچر سافٹ ویئر کی ضروریات میں PostgreSQL ڈیٹا بیس ، گراف نوڈ ، انڈیکسر ایجنٹ ، انڈیکسر سروس ، پرومیتھیس میٹرکس سرور ، اور ممکنہ طور پر آپ کی مخصوص ضروریات اور سیٹ اپ پر منحصر ہے۔<br></br><br></br>گراف نیٹ ورک پر انڈیکسرز کے لئے بہترین طریقوں کے بارے میں جاننے کے لئے، مثالی انڈیکسر کمیونٹی کی شرکت، ایک سفارش کردہ انڈیکسر ٹیک سیٹ اپ، وسائل اور گائیڈز اور  گراف کے ساتھ اپنے انڈیکسنگ کا سفر شروع کریں.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// Discord and Telegram Start
handleGraphDiscord() {
  const message = this.createChatbotMessage(<a>گراف آفیشل ڈسکارڈ سرور <a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">یہاں</a> پایا جا سکتا ہے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Discord and Reddit End

// Rewards Start 
handleRewards() {
  const message = this.createChatbotMessage(<a>انڈیکسنگ انعامات جمع کیے جاتے ہیں اور ہر بار تقسیم کیے جاتے ہیں جب انڈیکسرز اپنی تفویض کو بند کرتے ہیں. فعال ہونے کے باوجود ، اسائنمنٹس مسلسل انعامات حاصل کرتی رہتی ہیں۔ انڈیکسر یا تو اپنے الاٹمنٹ کو دستی طور پر بند کرنے پر مجبور کرسکتے ہیں یا زیادہ سے زیادہ مختص کی مدت (ہر 28 ایپوکس) کے بعد انہیں خود بخود بند ہونے دے سکتے ہیں۔
    <br></br><br></br>
1 ایپوک = ~ 26 گھنٹے
<br></br><br></br>
تفویض مسلسل انعامات جمع کرتے ہیں جبکہ وہ فعال ہوتے ہیں. انعامات انڈیکسرز کے ذریعہ جمع کیے جاتے ہیں اور جب بھی ان کے مختص بند ہوجاتے ہیں تو تقسیم کیے جاتے ہیں۔ یہ دستی طور پر ہوتا ہے ، ہر بار جب انڈیکسر قریب آنے پر مجبور کرنا چاہتا ہے ، یا خود بخود ہر 28 ایپوکس میں زیادہ سے زیادہ - زیادہ سے زیادہ مختص کی زندگی (ابھی ایک ایپوک ~ 24 گھنٹے تک رہتا ہے)۔
<hr></hr>
اپنے زیر التواء انعامات کو دیکھنے کے لئے ، گرافٹروناٹس پر جائیں  اور والیٹ شامل کریں۔
<br></br><br></br>
<a className="cla" href="https://www.graphtronauts.com/#/profile" target="_blank" rel="noreferrer">Graphtronauts</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Rewards End
// Indexing Rewards,Query Fees and POI Start 
handleQueryFees() {
  const message = this.createChatbotMessage(<a>ہر بار جب میپنگ بند ہوجاتی ہے (یا تو دستی طور پر انڈیکسر کے ذریعہ یا میپنگ کی زیادہ سے زیادہ زندگی کے بعد خود بخود) ، پروٹوکول گیٹ وے کے ذریعہ کیوری کی فیس وصول کی جاتی ہے۔ کیوری کی فیس سب گراف کے کیوری فیس معاوضہ پول میں جمع کی جاتی ہے۔ رقم کی واپسی کے پول سے پوچھ گچھ کی فیس کی تقسیم شدہ رقم کا حساب رقم کی واپسی کے پول میں انڈیکسر کی شراکت اور سب گراف میں اس کے مختص حصے کی بنیاد پر کیا جاتا ہے.
    <br></br><br></br>
  ایک بار تفویض بند ہونے کے بعد ، انڈیکسرز تنازعہ کی مدت گزرنے کے بعد ہی کیوریز کی فیس کو دوبارہ حاصل کرسکتے ہیں۔ ایک بار جب ایک انڈیکسر کامیابی کے ساتھ کیوری کی فیس کا دعوی کرتا ہے تو ، رقم کی واپسی انڈیکسر اور اس کے ڈیلیگیٹرز کو تقسیم کردی جاتی ہے۔
  <br></br><br></br>
  کوب ڈگلس پروڈکشن فنکشن کے بعد ، ایک چھٹکارا پول تیار کیا گیا ہے جو گراف نیٹ ورک میں ان کی شراکت کی بنیاد پر نیٹ ورک کے تمام شرکاء (جیسے انڈیکسرز) کو انعام دیتا ہے۔ ریبیٹ پول کے پیچھے ارادہ یہ ہے کہ انڈیکسرز کی حوصلہ
  </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleIndexingRewardsAndQueryFees() {
  const message = this.createChatbotMessage(<a>اشاریہ سازی کے انعامات سب گرافس میں سب گراف کے کیوریشن سگنل کے تناسب سے تقسیم کیے جاتے ہیں۔ اشاریہ سازوں کو ان کے اشاریہ سازی کے انعامات اس حصص کے متناسب ہوتے ہیں جو انہوں نے کسی خاص ذیلی گراف پر مختص کیے ہیں۔
<br></br><br></br>
    اشاریہ سازی کے انعامات پروٹوکول افراط زر سے پیدا ہوتے ہیں جو کہ 3% سالانہ جاری کرنے پر سیٹ ہے۔
    <br></br><br></br>
    تمام مختصات کو اشاریہ سازی کے درست ثبوت (POI) کے ساتھ بند کرنے کی ضرورت ہے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handlePOI() {
  const message = this.createChatbotMessage(<a>انڈیکسنگ کا نام نہاد ثبوت (POI) اس بات کی تصدیق کرتا ہے کہ انڈیکسرز نے حقیقت میں ان سب گرافوں کو انڈیکس کیا ہے جس میں انہوں نے اپنا حصہ تفویض کیا ہے۔ کسی بلاک کا POI ایک سب گراف میں عمل درآمد کی تفصیلات فراہم کرنے والے ادارے کے اسٹور کے تمام ٹرانزیکشن کا خلاصہ ہے۔ انڈیکسنگ کے انعامات حاصل کرنے کے لئے، انڈیکسرز کو انڈیکسنگ (POI) کے درست ثبوت کے ساتھ ایک تفویض کو بند کرنا ہوگا جو ثالثی قانون کے ذریعہ قائم کردہ معیارات پر پورا اترتا ہے. انڈیکسر جائز POI کے بغیر انعامات کے اہل نہیں ہیں۔ الاٹمنٹ کو بند کرتے وقت ، انڈیکسر کو موجودہ دور کے پہلے بلاک کے لئے POI بھیجنا ہوگا۔
    <br></br><br></br>
  انڈیکسنگ انعامات جمع کیے جاتے ہیں اور ہر بار تقسیم کیے جاتے ہیں جب انڈیکسرز اپنی تفویض کو بند کرتے ہیں. فعال ہونے کے باوجود ، اسائنمنٹس مسلسل انعامات حاصل کرتی رہتی ہیں۔ انڈیکسر یا تو اپنے الاٹمنٹ کو دستی طور پر بند کرنے پر مجبور کرسکتے ہیں یا زیادہ سے زیادہ مختص کی مدت (ہر 28 ادوار) کے بعد انہیں خود بخود بند ہونے دے سکتے ہیں۔
  <br></br><br></br>
  1 ایپوک = ~ 26 گھنٹے
  </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Indexing Rewards,Query Fees and POI End
// Hardware Requirements
handleIndexerHardwareRequirements() {
  const message = this.createChatbotMessage(<a>انڈیکسر کے طور پر نیٹ ورک میں حصہ لینے کے لئے ہارڈ ویئر کی ضروریات کو مندرجہ ذیل جدول میں پایا جاسکتا ہے۔<hr></hr><table><tr className="indexer-table-header">
    <th>ترتیبات</th>
    <th>پوسٹگریس (CPUs)</th>
    <th>پوسٹگریس (GB میں میموری) </th>
    <th>پوسٹگریس (TB میں ڈسک) ورچوئل مشینیں </th>
    <th>VMs  (CPUs) </th>
    <th>VMs  (میں میموری GB) </th>
  </tr>
  <tr className="indexer-table">
    <td>چھوٹا</td>
    <td>4</td>
    <td>8</td>
    <td>1</td>
    <td>4</td>
    <td>16</td>
  </tr>
  <tr className="indexer-table">
    <td>معیاری</td>
    <td>8</td>
    <td>30</td>
    <td>1</td>
    <td>12</td>
    <td>48</td>
  </tr>
  <tr className="indexer-table">
    <td>میڈیم</td>
    <td>16</td>
    <td>64</td>
    <td>2</td>
    <td>32</td>
    <td>64</td>
  </tr>
  <tr className="indexer-table">
    <td>لمبا</td>
    <td>72</td>
    <td>468</td>
    <td>3.5</td>
    <td>48</td>
    <td>184</td>
  </tr>
</table>
<br></br><br></br>چھوٹا = ایک سے زیادہ سب گرافوں کی انڈیکسنگ شروع کرنے کے لئے کافی ہے
<br></br>
معیاری = پہلے سے طے شدہ ترتیب
<br></br>
میڈیم = 100 سب گرافوں کو انڈیکس کرنے اور فی سیکنڈ 200 اور 500 درخواستوں کے درمیان کرنے کی ضرورت ہے
<br></br>
لمبا = تمام فی الحال استعمال شدہ سب گرافوں کو انڈیکس کرنے اور متعلقہ ٹریفک کے لئے درخواستوں کی خدمت کرنے کی ضرورت ہے

 </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Indexing Rewards,Query Fees and POI End
// Allocations Start
handleAllocations() {
  const message = this.createChatbotMessage(<a>تفویض مسلسل فعال رہتے ہوئے انعامات جمع کرتے ہیں۔ انعامات انڈیکسرز کے ذریعہ جمع کیے جاتے ہیں اور ہر بار جب ان کی تفویض بند ہوجاتی ہیں تو تقسیم کی جاتی ہیں۔ یہ دستی طور پر ہوتا ہے ، ہر بار جب انڈیکسر شٹ ڈاؤن کو مجبور کرنا چاہتا ہے ، یا خود بخود ہر 28 ادوار میں زیادہ سے زیادہ: زیادہ سے زیادہ مختص زندگی (اس وقت ، ایک مشکل ایپوک ~ 26 گھنٹے)۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Allocations End
// IPFS Start
handleIPFS() {
  const message = this.createChatbotMessage(<a>ID سے سب گراف ipfs ہیش حاصل کرنے کے بارے میں انڈیکسرز کے لئے دستاویزات  اور اس کے برعکس یہاں پایا جاسکتا ہے۔
  </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// IPFS End
handleTools() {
  const message = this.createChatbotMessage(<a>گرافٹروناٹس ایپ ڈیلیگیٹرز کو اپنی پسند کے انڈیکسر کے بارے میں مفید معلومات حاصل کرنے کی اجازت دیتی ہے۔ بس اپنی پسند کے انڈیکسر کا ETH ایڈریس داخل کریں یا نیچے دیئے گئے جائزوں پر ایک نظر ڈالیں۔
  <br></br>
  <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a>
  <br></br><br></br>
  دیگر بہت مفید سائٹس یہ ہیں:<br></br><br></br><a className="cla" href="http://ww25.oracleminer.com/graph/indexer/0x7ab4cf25330ed7277ac7ab59380b68eea68abb0e?subid1=20220530-2214-27fd-afb4-5d675e9469e5s" target="_blank" rel="noreferrer">OracleMiner.com</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://graphscan.io/" target="_blank" rel="noreferrer">GraphScan.io</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://thegraph.live/" target="_blank" rel="noreferrer">TheGraph.Live</a><br></br><br></br><a className="cla" href="https://www.notion.so/Community-Guides-abbb10f4dba040d5ba81648ca093e70c" target="_blank" rel="noreferrer">Community Tools and Guides</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Choosing Indexers End
// Fees to delegate
handleFeesToDelegate() {
  const message = this.createChatbotMessage(<a>
    ہر بار جب آپ GRT کو کسی انڈیکسر کو تفویض کرتے ہیں تو ، آپ کو 0.5٪ کی مضبوط تفویض کی فیس پر غور کرنا چاہئے۔ مضبوط مثال کے طور پر ، اگر آپ 10،000 GRT تفویض کرتے ہیں تو ، آپ سے 50 GRT وصول کیا جائے گا۔ اگر آپ کا منتخب کردہ انڈیکسر آپ کو فی دن 2 GRT کی منافع بخش صلاحیت پیش کرتا ہے۔ اس مفروضے کے تحت ، آپ کو یہاں تک کہ توڑنے میں 25 دن (50 GRT / 2 GRT) لگیں گے۔ معاشی طور پر ٹھوس فیصلے کرنے کے لئے، آپ کو حساب کرنے کی ضرورت ہے کہ آپ کو اپنے ڈیلیگیشن سے 0.5٪ ٹیکس کی وصولی میں کتنا وقت لگے گا.
    <br></br><br></br>
ایک انڈیکسر تفویض کرنے سے آپ کو دو ETH ٹرانزیکشنز پر دستخط کرنے کی ضرورت ہوگی۔ آئیے یہ بھی فرض کرتے ہیں کہ آپ صرف $ 100 تفویض کرنا چاہتے ہیں۔ اس معاملے میں ، تفویض کرنے کے ٹرانزیکشن کے اخراجات آپ کے TSO اسٹیک کا کل 25٪ ہوں گے۔ اس کا مطلب یہ ہے کہ پوائنٹ کو توڑنے کا وقت نمایاں طور پر بڑھ جائے گا.
<br></br><br></br>
اگر ڈیلیگیٹرز حذف کرنا چاہتے ہیں تو ، وہ فوری طور پر اپنے ٹوکن تک رسائی حاصل نہیں کرسکتے ہیں۔ غیر ڈیلیگیٹڈ شدہ ٹوکن 28 دن کی غیر منجمد مدت کے تابع ہیں ، صرف اس کے بعد ہی ڈیلیگیٹرز آزادانہ طور پر اپنے ٹوکن منتقل کرسکتے ہیں یا انہیں کسی دوسرے انڈیکسر کو دوبارہ تفویض کرسکتے ہیں۔
ایک قابل احترام، قابل اعتماد اور مؤثر انڈیکسر کا انتخاب ایک اہم فیصلہ ہے جسے ہلکے سے نہیں لیا جانا چاہئے. ڈیلیگیٹرز جو اپنی مناسب محنت نہیں کرتے ہیں وہ ناقص کارکردگی کا مظاہرہ کرنے والے انڈیکسر کو تفویض کرنے کا خطرہ چلاتے ہیں۔ اسی طرح، وہ ایک انڈیکسر کو منتخب کرنے کا خطرہ چلا سکتے ہیں جو مشکوک طریقوں میں ملوث ہوتا ہے یا ایک پرکشش اAPY (سالانہ فیصد واپسی) کی تشہیر کرنے کے لئے مختصر وقت کے لئے ڈیلیگیٹرز کو سبسڈی دیتا ہے جو طویل عرصے میں غیر حقیقی ہے.    
  <br></br><br></br>
  اس وقت وفد کے لین دین کی اوسط لاگت کے لیے، گرافٹرونٹس ایپ دیکھیں اور فیس منتخب کریں۔
<br></br><a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Delegate Guides Start
handleDelegateGuides() {
  const message = this.createChatbotMessage(<a>میں آپ کو وہ فراہم کروں گا جو آپ کو ڈیلیگیٹر بننے کی ضرورت ہے۔ مندرجہ ذیل معلومات اور وسائل آپ کی مدد کریں گے.
    <br></br><br></br>
    انڈیکسرز ٹیوٹوریل کا انتخاب دیکھنے سے  آپ کو یہ سمجھنے میں مدد ملے گی کہ آپ کو کیا تلاش کرنے کی ضرورت ہے۔ اس بات کو یقینی بنانے کے لئے کہ آپ تفویض کرنے سے پہلے پراعتماد ہیں ، مزید تفہیم حاصل کرنے کے لئے نیچے دیئے گئے سبق دیکھیں۔
    <br></br><br></br>
    آپ اپنے GRT ٹوکنز کو اپنی پسند کے انڈیکسر کو تفویض کرکے <a className="cla" href="https://thegraph.com/explorer/participants/indexers" target="_blank">network.thegraph.com</a> پر سٹیک پر لگا سکتے ہیں۔ 
    <br></br><br></br>
    ایک 0.5٪ ڈیلیگیشن ٹیکس ہے جو ڈیلیگیشن کے وقت خرچ کیا جاتا ہے تاکہ ڈیلیگیٹرز کو انڈیکسر سے وابستہ کرنے کی حوصلہ افزائی کی جاسکے۔
    <br></br><br></br>
    غیر تفویض کرنے میں 26 دن لگتے ہیں کیونکہ یہ مختص کی زیادہ سے زیادہ مدت ہے۔
    <br></br><br></br>
    ایک ڈیلیگیشن ٹرانزیکشن کی اوسط لاگت کے لئے ، گرافٹروناٹس کا دورہ  کریں اور فیس منتخب کریں۔
    <br></br>
    <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank">Graphtronauts</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWeb3DApp() {
  const message = this.createChatbotMessage(<a>
    web3 ڈیپس کیسے کام کرتا ہے ؟
 <br></br><br></br>
 آپ یہاں ایک انتہائی مفید ٹویٹر تھریڈ میں "<a className="cla" href="https://twitter.com/suhailkakar/status/1555894207570513920?s=21&t=FoLxHgWLO78VA_3VheV_DQ" target="_blank">web3</a> فن تعمیر کے لئے ایک مکمل گائیڈ" تلاش کرسکتے ہیں۔
 </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSoulBound() {
  const message = this.createChatbotMessage(<a>
    ڈیپس کی تعمیر تکلیف دہ نہیں ہونی چاہئے۔




ان کی تازہ ترین ریلیز اور خبروں کو برقرار رکھنے کے لئے ، ٹویٹر پر سول باؤنڈ لیبز کی پیروی کریں۔
ایک ویڈیو ٹیوٹوریل کے لئے کہ آپ بغیر کسی کوڈنگ کے سول باؤنڈ اسٹوڈیو  کا استعمال کرتے ہوئے منٹوں میں  سب گراف ڈیپس اور تجزیات کیسے تشکیل دے  سکتے ہیں ، نیچے دیکھیں۔
<br></br><strong><a className="cla" href="https://soulbound.xyz/" target="_blank">Soulbound Studio</a></strong> - سول باؤنڈ اسٹوڈیو اسے آسان بنا دیتا ہے۔<br></br>کوڈنگ کی ضرورت نہیں ہے.<br></br><br></br>مکمل طور پر مہذب web3 انٹرفیس اور API کو ڈیزائن کرنے ، دوبارہ نشر کرنے اور شائع کرنے کے لئے ایک متحد انٹرفیس۔<br></br><br></br>اگر آپ  مطلوبہ خصوصیات اور بگ رپورٹس کا اشتراک کرکے سول باؤنڈ اسٹوڈیو ڈیزائن کرنے میں ان کی مدد کرنا چاہتے ہیں تو ، ان کے ڈسکارڈ میں شامل ہوں۔ 
<br></br>
<a className="cla" href="https://discord.com/invite/Eu3Eeh4J6a" target="_blank">Discord</a><br></br><br></br>
ان کی تازہ ترین ریلیز اور خبروں کو برقرار رکھنے کے لئے ، ٹویٹر پر سول باؤنڈ لیبز کی پیروی کریں۔
<br></br> 
<a className="cla" href="https://twitter.com/SoulboundLabs" target="_blank">Twitter</a><br></br><br></br>
ایک ویڈیو ٹیوٹوریل کے لئے کہ آپ بغیر کسی کوڈنگ کے سول باؤنڈ اسٹوڈیو  کا استعمال کرتے ہوئے منٹوں میں  سب گراف ڈیپس اور تجزیات کیسے تشکیل دے  سکتے ہیں ، نیچے دیکھیں۔<br></br><br></br>
  <Embed className="embed" isDark url='https://www.youtube.com/watch?v=IEmr280lGSU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIPhone() {
  const message = this.createChatbotMessage(<a>گرم والیٹ میں اپنے فون پر بہت سارے پیسے اور بورنگ بندر نہ رکھیں! کیونکہ آپ کا آئی فون شاید آپ کی میٹا ماسک کی معلومات کو آئی کلاؤڈ سے مطابقت پذیر کررہا ہے۔ یہ پہلے سے طے شدہ طور پر آن ہے ، اسے بند کرنے کے بارے میں یہاں ایک انتہائی آسان ٹویٹر تھریڈ ہے۔ 
    <br></br>
    <a className="cla" href="https://twitter.com/plumferno/status/1556187973200351234?s=21&t=a-4X_QM7BzHRKcJe8aPc_w" target="_blank">Twitter</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Query Fees Cut and indexing reward cut Start
handleQueryFeesAndIndexingRewardCut() {
  const message = this.createChatbotMessage(<a>
    queryFeeCut اور indexingRewardCut ویلیوس ڈیلیگیشن کے پیرامیٹرز ہیں جو انڈیکسر, انڈیکسراور اس کے ڈیلیگیٹرز کے مابین GRT کی تقسیم کو کنٹرول کرنے کے لئے کول ڈاؤن بلاکس کے ساتھ مل کر مرتب  کرسکتے ہیں۔ ڈیلیگیشن کے پیرامیٹرز کو تشکیل دینے کے بارے میں ہدایات کے لئے پروٹوکول اسٹیکنگ میں آخری مراحل دیکھیں۔
    <br></br><br></br>
    queryFeeCut: انڈیکسر کو تقسیم کرنے کے لئے سب گراف میں جمع ہونے والی طلب فیس کی واپسی کا٪ ۔ اگر 95٪ پر سیٹ کیا جاتا ہے تو ، جب کسی تفویض کا دعوی کیا جاتا ہے تو انڈیکسر کو کیوری فیس معاوضہ گروپ کا 95٪ موصول ہوگا اور باقی 5٪ ڈیلیگیٹرز کے پاس جائیں گے۔
    <br></br><br></br>
    indexingRewardCut: ایک سب گراف میں جمع ہونے والے انڈیکسنگ انعامات کا ٪ جو انڈیکسر میں تقسیم کیا جائے گا۔ اگر 95٪ پر سیٹ کیا جاتا ہے تو ، جب تفویض بند ہوجائے گی تو انڈیکسر انڈیکسنگ انعامات کے پول کا 95٪ وصول کرے گا ، اور ڈیلیگیٹرز دوسرے 5٪ کو تقسیم کردیں گے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Query Fees Cut and indexing reward cut End
// Founding Members Start
handleFoundingMembers() {
  const message = this.createChatbotMessage(<a>گراف پروٹوکول ، انکارپوریٹڈ کی بنیاد اپریل 2018 میں جینس پوہلمین ، برینڈن رامیرس اور یانیو تال نے رکھی تھی۔<br></br><br></br>
  جینس پوہلمین ، ٹکنالوجی لیڈر اور شریک بانی۔ <a className="cla" href="https://de.linkedin.com/in/jannispohlmann" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/jannispohlmann" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br>
  برینڈن رمیریز، <a className="cla" href="https://www.linkedin.com/in/1stramirez" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/rezbrandon?lang=en" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br>
  ینیو تال، پروجیکٹ لیڈر اور شریک بانی <a className="cla" href="https://www.linkedin.com/in/yanivtal9" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla"  href="https://twitter.com/yanivgraph" target="_blank" rel="noreferrer">Twitter</a> | <a className="cla" href="https://www.grtiq.com/grtiq-podcast-100-Yaniv-Tal/" target="_blank" rel="noreferrer">GRTiQ Podcast</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Founding Members End
// Graph Funding Start
handleGraphFunding() {
  const message = this.createChatbotMessage(<a><a className="cla" href="https://www.crunchbase.com/organization/the-graph/investor_financials" target="_blank" rel="noreferrer">Crunchbase.com</a> مطابق، گراف نے 7 راؤنڈ کے دوران فنڈنگ میں مجموعی طور پر 69.6 ملین ڈالر جمع کیے ہیں. اس کی آخری فنڈنگ 21 جنوری ، 2022 کو وینچر - سیریز نامعلوم راؤنڈ سے اکٹھا کی گئی تھی۔<br></br><br></br>گراف 27 سرمایہ کاروں کی طرف سے فنڈ کیا جاتا ہے. بلاک وال مینجمنٹ اور فن ٹیک کلیکٹو جدید ترین سرمایہ کار ہیں۔<br></br><br></br>The گراف نے ایک ہی وینچر فنڈ ، گراف ایکو سسٹم فنڈ میں مجموعی طور پر 205 ملین ڈالر جمع کیے ہیں۔ اس فنڈ کا اعلان 18 فروری 2022 کو کیا گیا تھا اور اس نے مجموعی طور پر 205 ملین ڈالر جمع کیے تھے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Graph Funding End
// What Start
handleWhatIsTheGraph() {
  const message = this.createChatbotMessage(<a>گراف $GRT ایتھریم اور IPFS جیسے نیٹ ورکس سے پوچھ گچھ کے لئے ایک انڈیکسنگ پروٹوکول ہے۔ کوئی بھی اوپن API بنا اور شائع کرسکتا ہے ، جسے سب گراف کہا جاتا ہے ، جس سے ڈیٹا آسانی سے قابل رسائی ہوجاتا ہے۔ مختصر طور پر ، گراف ڈیٹا فراہم کرتا ہے جسے کسی کو بھی صرف چند کلیدی اسٹروکس کے ساتھ پوچھ گچھ کرنے کے لئے ایپلیکیشنز میں تبدیل ، منظم اور شیئر کیا جاسکتا ہے۔<br></br><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/" target="_blank" rel="noreferrer">گراف کو کس طرح کنٹرول کیا جاتا ہے</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-council" target="_blank" rel="noreferrer">گراف کونسل</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-foundation" target="_blank" rel="noreferrer">گراف فاؤنڈیشن</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#advocates-dao" target="_blank" rel="noreferrer">گراف DAO کی وکالت کرتا ہے</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// what End
// Airdrop Start
handleAirdrop() {
  const message = this.createChatbotMessage(<a>ایئر ڈراپس کے بارے میں ، گراف ان چند منصوبوں میں سے ایک ہے جس نے اصل میں لوگوں کو اپنے ٹوکن کے لئے کام کرنے پر مجبور کیا۔ کیوریٹوریل پروگرام بہت شدید تھا اور لوگوں نے سب گراف کے بارے میں سیکھنے ، اعداد و شمار کو منظم کرنے اور نیٹ ورک میں حصہ لینے میں بہت زیادہ وقت گزارا۔ یہ ٹیم کو ایک ناقابل یقین پوزیشن میں رکھتا ہے کہ گراف میں بڑھتی ہوئی web3 کے لئے وقف بلڈرز کی ایک اچھی طرح سے تربیت یافتہ اور حوصلہ افزائی کمیونٹی ہے. اس وقت، کوئی ہوائی قطرے کی منصوبہ بندی نہیں کی جاتی ہے.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Airdrop  End
// Free  Start
handleFreeGRT() {
  const message = this.createChatbotMessage(<a>  کوائن مارکیٹ کیپ ارن اور کوائن بیس ارن ان شرکاء کے لئے مفت GRT ٹوکن دے رہے ہیں جو نیٹ ورک کے بارے میں سیکھتے ہیں اور سوالات کا جواب دیتے ہیں۔<br></br><a className="cla" href="https://twitter.com/CoinMarketCap/status/1341310792461918210" target="_blank" rel="noreferrer">CoinMarketCap Earn</a><br></br><a className="cla" href="https://twitter.com/coinbase/status/1339723594566406156?s=20" target="_blank" rel="noreferrer">Coinbase Earn</a><hr></hr>پس پس! مفت میں GRT حاصل کرنے کا بہترین طریقہ ڈیلیگیٹ کرنا اور انعام حاصل کرنا ہے.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Free End
// GitHub Start
handleGitHub() {
  const message = this.createChatbotMessage(<a>آپ گراف گٹہب کا پتہ یہاں تلاش کرسکتے ہیں: <a className="cla" href="https://github.com/graphprotocol/" target="_blank" rel="noreferrer">github.com/graphprotocol/</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// GitHub End
// Road Map Start
handleRoadMap() {
  const message = this.createChatbotMessage(<a>گراف کا سرکاری آر + ڈی روڈ میپ <a className="cla" href="https://thegraph.com/blog/roadmap-2022" target="_blank" rel="noreferrer">
    یہاں</a>پایا جاسکتا ہے۔ .<br></br><br></br> گراف اسپینول کی لورینا فیبریس نے کمیونٹی کے لئے مندرجہ ذیل سبق بنائے ہیں۔<br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/the-graph-roadmap-for-2023-952b17d20d71" target="_blank" rel="noreferrer">2023</a><br></br><br></br>اس مضمون میں ، آپ ترقی کے چار شعبوں کو سیکھیں گے جو 2023 میں دن کی روشنی دیکھیں گے اور گراف نیٹ ورک کو آج سے بھی زیادہ مضبوط بنائیں گے:<br></br>ہوسٹڈ سروس کی گودھولی<br></br>ہوسٹڈ سروس کی گودھولی<br></br>سب اسٹریمز<br></br>پروٹوکول کو آربیٹرم ون کے ساتھ L2 پر منتقل کریں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Road Map End
// Schema Start
handleWhatIsSchema() {
  const message = this.createChatbotMessage(<a>گراف گراف کیو ایل کا استعمال کرتا ہے ، جو فیس بک کے ذریعہ تیار کردہ اوپن سورس کیوری لینگویج ہے۔ اسکیما کے ہر عنصر کی ایک وضاحت ہوتی ہے۔ گراف کیو ایل سیکھیں  اور پھر آپ بلاکچین سے مطلوبہ تمام ڈیٹا بازیافت کرسکتے ہیں۔<hr></hr>گراف کیو ایل ایپلیکیشن پروگرامنگ انٹرفیس (API) کے لئے سرور سائیڈ کیوری اور رن ٹائم لینگویج ہے جو صارفین کو بالکل وہی ڈیٹا دینے کو ترجیح دیتا ہے جس کی وہ درخواست کرتے ہیں اور اس سے زیادہ کچھ نہیں۔  گراف کیو ایل کو API کو تیز ، لچکدار اور ڈویلپرز کے استعمال میں آسان بنانے کے لئے ڈیزائن کیا گیا ہے۔ گراف کیو ایل API وہ API ہے جسے ڈویلپرز گراف کے ذریعہ انڈیکس کردہ ڈیٹا تک رسائی حاصل کرنے کے لئے استعمال کرسکتے ہیں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Schema End
// Buy Start
handleBuy() {
  const message = this.createChatbotMessage(<a>آپ سکے مارکیٹ کیپ پر قیمت اور تمام کھلی مارکیٹوں کو دیکھ سکتے ہیں.<a className="cla" href="https://coinmarketcap.com/ur/currencies/the-graph/markets/" target="_blank" rel="noreferrer">CoinMarketCap</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDecentralisedData() {
  const message = this.createChatbotMessage(<a><strong>ڈیسینٹرالائزڈ ڈیٹا کا آغاز</strong><br></br><br></br>گراف ایکو سسٹم متحرک ، مہذب مستقبل کا خیرمقدم کرتے ہوئے صارفین کی توقعات کو پورا کرنے کے لئے اقدامات اٹھا رہا ہے۔ اس توازن کو حاصل کرنے کے لئے، ہوسٹنگ سروس سپورٹ رکاوٹ کو تین چین منتقلی کے مراحل میں تقسیم کیا گیا ہے جو مختلف آؤٹ پٹ معیار پر منحصر ہے، بشمول استعمال، استحکام، اور بنیادی فعالیت تک محدود نہیں ہے.<br></br><br></br>ہوسٹڈ سروس چینز آہستہ آہستہ منتقلی کریں گے ، جس سے ڈویلپرز کو خود کو مہذب نیٹ ورک سے واقف کرنے اور اپنے سب گرافس کو منتقل کرنے کے لئے کافی وقت ملے گا۔<br></br><br></br>ڈویلپرز کی بہتر مدد کرنے کے لئے ، ہوسٹڈ سروس سے گراف نیٹ ورک تک منتقلی کی چینز میں کوئی مرحلہ وار مخصوص تاریخیں تفویض نہیں کی جائیں گی۔ ڈویلپر کی ضروریات کو پورا کرنے اور کلیدی باہر نکلنے کے معیار کو حاصل کرنے کی ہوسٹڈ سروس کی حمایت کے خاتمے کی جگہ لے لیتا ہے. جیسا کہ ہوسٹڈ سروس چین فی آؤٹ پٹ معیار تک پہنچ گیا ہے، یہ سلسلہ تین مراحل میں منتقل ہوجائے گا. یہ سمجھنے کے لئے MIP پروگرام کی پیشرفت دیکھیں کہ جب انڈیکسرز تاروں کی جانچ کر رہے ہیں ، جب انہیں نیٹ ورک پر سپورٹ کیا جاتا ہے ، اور جب چین کی منتقلی شروع ہوجاتی ہے۔<br></br><br></br>ہر ہوسٹڈ سروس چین کے لئے، گراف نیٹ ورک پر حمایت کو فعال کرنے کے لئے تین منتقلی کے مراحل یہ ہیں:<br></br>مرحلہ 1 (سنرے): بلاکچینز کے لئے نئی ہوسٹڈ سروس کے سب گراف کی تخلیق کو غیر فعال کریں جو نیٹ ورک پر کافی بنیادی فعالیت رکھتے ہیں.<br></br>مرحلہ 2 (سن بیم): ہوسٹڈ سروس کے لئے سب گراف اپ ڈیٹس کو غیر فعال کریں۔<br></br>مرحلہ 3 (طلوع آفتاب): ہوسٹڈ سروس کے سب گرافس سے پوچھ گچھ کو غیر فعال کریں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleVsSelfHosting() {
  const message = this.createChatbotMessage(<a><strong>گراف نیٹ ورک بمقابلہ سیلف ہوسٹنگ</strong><br></br><br></br>اسپوئلر انتباہ: گراف نیٹ ورک کم مہنگا ، استعمال میں آسان ہے ، اور مقامی طور پر گراف نوڈ چلانے کے مقابلے میں بہتر نتائج پیدا کرتا ہے۔<br></br><br></br>گراف کے مہذب نیٹ ورک کو ایک مضبوط انڈیکسنگ اور پوچھ گچھ کا تجربہ پیدا کرنے کے لئے ڈیزائن اور بہتر بنایا گیا ہے، اور دنیا بھر میں ہزاروں شراکت داروں کی بدولت ہر روز بہتر ہو رہا ہے. اس مہذب پروٹوکول کے فوائد کو مقامی طور پر گرافیکل نوڈ چلا کر نقل نہیں کیا جاسکتا ہے۔ گراف نیٹ ورک زیادہ قابل اعتماد، زیادہ موثر اور کم مہنگا ہے. یہاں ایک تجزیہ ہے:<br></br><br></br><strong>آپ کو گراف نیٹ ورک کیوں استعمال کرنا چاہئے</strong><br></br>60-98٪ کم ماہانہ لاگت<br></br>اعلی اپ ٹائم<br></br>Superior uptime<br></br><ChatBotActiveIndexerCountBar / > انڈیکسرز تک رسائی (اور گنتی)<br></br>عالمی برادری کی طرف سے 24/7 تکنیکی مدد<br></br><br></br>گراف نیٹ ورک استعمال کرنے کے فوائد کی خرابی کو پڑھنے کے لئے ، یہاں پڑھیں۔<br></br><br></br><strong>کوئی سیٹ اپ کے اخراجات اور آپریشنل کارکردگی میں اضافہ نہیں. صفر تنصیب کی فیس.</strong><br></br>کوئی اوور ہیڈ یا تنصیب کے اخراجات کے ساتھ فوری طور پر شروع کریں<br></br>کوئی ہارڈ ویئر کی ضروریات.<br></br>مرکزی بنیادی ڈھانچے کی وجہ سے کوئی رکاوٹ نہیں اور آپ کی بنیادی مصنوعات پر توجہ مرکوز کرنے کے لئے زیادہ وقت.<br></br>کوئی بیک اپ سرورز ، خرابیوں کا سراغ لگانا ، یا مہنگے انجینئرنگ وسائل کی ضرورت نہیں ہے۔<br></br><br></br>وشوسنییتا اور لچک دار گراف کا مہذب نیٹ ورک صارفین کو جغرافیائی فالتو پن تک رسائی فراہم کرتا ہے جو گراف نوڈ کی میزبانی کرتے وقت موجود نہیں ہوتا ہے۔ عالمی نیٹ ورک کو محفوظ بنانے والے انڈیکسرز کے ذریعہ حاصل کردہ 99.9٪ سے زیادہ اپ ٹائم کے ساتھ کیوریز قابل اعتماد طریقے سے پیش کیے جاتے ہیں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Buy End
// Subgraph Start
handleSubgraph() {
   const message = this.createChatbotMessage(<a>سب گراف آپ کو بلاکچین سے نکالنے والے اعداد و شمار کو منظم کرنے کے لئے اعداد و شمار کے ڈھانچے ہیں. وہ اس بات کی وضاحت کرنے کا ایک طریقہ ہیں کہ آپ کون سا ڈیٹا انڈیکس کرنا چاہتے ہیں اور اسے کس طرح اسٹور کرنا چاہتے ہیں۔ ان میں سے کچھ اپنے اسائنمنٹس پر پہلے سے جمع یا حساب کتاب کرتے ہیں ، کچھ صرف اسی طرح کے سادہ اعداد و شمار کو اسٹور کرتے ہیں جو آپ کو چین میں مل سکتا ہے۔ اس کے بعد ایک ادارہ اس ڈیٹا سے پوچھ گچھ کرتا ہے۔ یہ ادارہ ایک ڈپ (کمپنی / ڈویلپر ، وغیرہ) ، ٹیلی گرام بوٹ ، ڈسکورڈ بوٹ ، یا یہاں تک کہ ایک سادہ صارف بھی ہوسکتا ہے جو معلومات تلاش کرنے کے لئے پوچھ گچھ کرتا ہے۔<br></br><br></br>ہوسٹڈ سروس سے سب گراف کی مشاورت فی الحال ہر ایک کے لئے استعمال کرنے کے لئے آزاد ہے. مہذب پروٹوکول کے لئے، ٹیم کو توقع ہے کہ سوال کے اخراجات فی سوال $ 0.00001 کے ارد گرد ہوں گے، لیکن یہ ایک مفت مارکیٹ ہے اور ہر انڈیکسر اپنی لاگت کے ماڈل مقرر کرسکتا ہے.<br></br><br></br>آپ یہاں 15 منٹ میں سب گراف کے ساتھ رفتار حاصل کرنے کے لئے ایک ڈویلپر دھوکہ دہی شیٹ تلاش کرسکتے ہیں.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Subgraph End
// Indexer Qs Start
handleIndexerQs() {
  const message = this.createChatbotMessage(<a>ایک اشاریہ ساز اور ضروری انفراسٹرکچر بننے کے لیے آپ کو 100,000 GRT کی ضرورت ہے۔ یہ وہ کم از کم رقم ہے جو آپ کو ایک اشاریہ نوڈ آن چین رجسٹر کرنے کے لیے داؤ پر لگانا ہے۔<br></br><br></br>انڈیکسرز کو ڈی او اوپس کی وسیع مہارتوں اور ضروری ہارڈ ویئر کی ضرورت ہوتی ہے۔<br></br >

  انڈیکسرز کو مارکیٹ کے ذریعے ڈیلیگیشن پیرامیٹرز کو تبدیل کرنے پر "سزا" دی جاتی ہے۔ دیگر تمام چیزیں برابر ہونے کی وجہ سے، ٹیم انڈیکسرز کی توقع کرے گی جو کم کولڈاؤن پیریڈز طے کرتے ہیں کم وفد وصول کریں گے۔ ٹیم ایسے ٹولز بھی بنانا چاہے گی جو انڈیکسرز کو تلاش کرنا آسان بنائیں جو ڈیلی گیشن پیرامیٹرز کو بے ترتیب یا بہت زیادہ تبدیل کرتے ہیں۔ ان میں سے کچھ سگنلز کو ایکسپلورر کے مستقبل کے ورژن میں شامل کیا جا سکتا ہے۔
  <br></br>
  آپ دسمبر 2020 سے اگلے دو سالوں میں اپنا انڈیکسر ایڈریس تبدیل نہیں کر سکتے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Indexer Qs End
// Gas Start
handleGas() {
  const message = this.createChatbotMessage(<a>گیس ایتھر (ETH) کی مقدار کے لئے اصطلاح ہے، ایتھریم کی مقامی کرپٹو کرنسی، نیٹ ورک کی طرف سے صارف کو نیٹ ورک کے ساتھ بات چیت کرنے کے لئے ضروری ہے.<br></br><br></br>پٹرول کی قیمت کوئی ایسی چیز نہیں ہے جس پر گراف ٹیم کا کنٹرول ہے۔ پٹرول کی قیمت اس وقت بڑھ جاتی ہے جب ایتھریم نیٹ ورک بھیڑ بھاڑ میں ہوتا ہے یا بہت زیادہ استعمال ہوتا ہے۔<br></br><br></br>پٹرول کی قیمت کوئی ایسی چیز نہیں ہے جس پر گراف ٹیم کا کنٹرول ہے۔ پٹرول کی قیمت اس وقت بڑھ جاتی ہے جب ایتھریم نیٹ ورک بھیڑ بھاڑ میں ہوتا ہے یا بہت زیادہ استعمال ہوتا ہے۔
 <br></br><a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts app</a><br></br><br></br>ایتھریم گیس کی قیمتوں کے لئے، یہاں ملاحظہ کریں.
 <br></br><a className="cla" href="https://ethereumprice.org/gas/" target="_blank" rel="noreferrer">گیس</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Gas End
// Indexer Map Start
handleIndexerMap() {
  const message = this.createChatbotMessage(<a>To see a map of all indexer locations, visit the <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> app and select Map.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Indexer Map End
// Compare Indexer Start
handleIndexerCompare() {
  const message = this.createChatbotMessage(<a>To compare indexers, visit the <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> app and select List.<br></br><br></br>Click the Compare button and then select up to five indexers that you would like to compare.<br></br><br></br>Once you have selected, click the Compare Button below.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphSocial() {
  const message = this.createChatbotMessage(<a><strong><a className="cla" href="https://twitter.com/graphsocial1?s=21&t=f_BFECU3y4NfkRXocWA5kQ" target="_blank" rel="noreferrer">گراف سوشل</a></strong><br></br><br></br>ایک بین الاقوامی web3 ملاقات گراف ایکو سسٹم کی ترقی کو چلا رہی ہے۔ جس کا اہتمام احمد ماردینی نے کیا تھا۔<br></br><br></br>پہلا گراف سوشل web3 اجلاس 8 اکتوبر 2022 کو شام 6-10 بجے GST کے ساتھ دبئی میں ہوا تھا ، جس میں 100 سے زیادہ افراد نے شرکت کی تھی۔ گراف کیا ہے، حالیہ حاصل کردہ مائل سٹونز کیا ہیں، اور اس میں کیسے شامل ہوا جاۓ!<hr></hr><strong>مقررین</strong><br></br><br></br>Ahmad Mardeni<br></br>Salim Hadri<br></br>Shing Lam from <a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><br></br><a className="cla" href="https://twitter.com/9001sabella" target="_blank" rel="noreferrer">Isabella</a> from <a className="cla" href="https://twitter.com/routerprotocol" target="_blank" rel="noreferrer">Router Protocol</a><br></br><a className="cla" href="https://twitter.com/farhajmayan" target="_blank" rel="noreferrer">Farhaj Mayan</a> from <a className="cla" href="https://twitter.com/_buildspace" target="_blank" rel="noreferrer">Buildspace</a><br></br><a className="cla" href="https://twitter.com/dudhat_paresh" target="_blank" rel="noreferrer">Paresh Dudhat</a> from <a className="cla" href="https://twitter.com/infy_protocol" target="_blank" rel="noreferrer">Infy Protocol</a><br></br>Rashmi Padhy<br></br><br></br><strong>اسپانسرز</strong><br></br><br></br><a className="cla" href="https://twitter.com/tenderize_me" target="_blank" rel="noreferrer">Tenderize</a><br></br><a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><hr></hr>آپ ذیل میں احمد ماردینی اور ملٹی آرٹ اسٹوڈیو کے ساتھ ایونٹ سے ایک انٹرویو دیکھ  سکتے ہیں!<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=KFUxrs10gpI'/></a>
    ,
  );
  this.setState((prev) => ({ 
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePodcast() {
  const message = this.createChatbotMessage(<a><strong>GRTiQ کیا ہے؟</strong><br></br><br></br><a className="cla" href="https://www.grtiq.com/" target="_blank" rel="noreferrer">GRTiQ</a> تجزیہ ، تحقیق ، اصلاح اور تعلیم کے ذریعے مارکیٹ انٹیلی جنس تیار کرتا ہے۔<br></br><br></br>مارکیٹ تجزیہ - مارکیٹ کا تجزیہ اور کارکردگی فراہم کریں تاکہ ڈیلیگیٹرز مارکیٹ کی حرکیات کو بہتر طور پر سمجھ سکیں.<br></br><br></br>انڈیکسر ریسرچ - اشاریہ شدہ تحقیق کریں جو ڈیلیگیٹرز مواقع اور شراکت داری کی نشاندہی کرنے کے لئے استعمال کرسکتے ہیں۔<br></br><br></br>انعامات کی اصلاح - ڈیٹا ، گائیڈز ، اور تجزیات بنائیں اور شائع کریں تاکہ ڈیلیگیٹرز کو اپنے انعامات کی کمائی کو بہتر بنانے میں مدد مل سکے۔<br></br><br></br>ایکو سسٹم کی تعلیم - گراف ایکو سسٹم کے تمام پہلوؤں پر جاری تعلیمی وسائل اور معلومات پیش کرتے ہیں.<hr></hr>آپ یہاں <a className="cla" href="https://www.grtiq.com/podcast/" target="_blank" rel="noreferrer">GRTiQ</a> کے پوڈ کاسٹ سن سکتے ہیں۔.<br></br><br></br><a className="cla" href="https://twitter.com/grt_iq" target="_blank" rel="noreferrer">Twitter</a><br></br><a className="cla" href="https://www.youtube.com/channel/UCxhFN47AlCDx1Qoaw1oSQ5A" target="_blank" rel="noreferrer">YouTube</a><br></br><a className="cla" href="https://www.instagram.com/thegraphiq/" target="_blank" rel="noreferrer">Instagram</a>.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/grt_iq/status/1617269631403831297?s=20&t=C_TtsLrGHQ0b92xQs527lQ'/></a>
   ,
   );
   this.setState((prev) => ({ 
     ...prev,
     messages: [...prev.messages, message],
   }));
 }

 handleGraphSocial() {
   const message = this.createChatbotMessage(<a><strong><a className="cla" href="https://twitter.com/graphsocial1?s=21&t=f_BFECU3y4NfkRXocWA5kQ" target="_blank" rel="noreferrer">Graph Social</a></strong><br></br><br></br>An international web3 meetup driving The Graph ecosystem growth. Organized by <a className="cla" href="https://twitter.com/Mardeni01" target="_blank" rel="noreferrer">Ahmad Mardeni</a>.<br></br><br></br>The first Graph Social web3 meetup was in Dubai on 8th October 2022, 6-10pm GST, with more than 100 people in attendance. The event covering what The Graph is, what are the recent achieved milestones, and how to get involved!<hr></hr><strong>Speakers</strong><br></br><br></br>Ahmad Mardeni<br></br>Salim Hadri<br></br>Shing Lam from <a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><br></br><a className="cla" href="https://twitter.com/9001sabella" target="_blank" rel="noreferrer">Isabella</a> from <a className="cla" href="https://twitter.com/routerprotocol" target="_blank" rel="noreferrer">Router Protocol</a><br></br><a className="cla" href="https://twitter.com/farhajmayan" target="_blank" rel="noreferrer">Farhaj Mayan</a> from <a className="cla" href="https://twitter.com/_buildspace" target="_blank" rel="noreferrer">Buildspace</a><br></br><a className="cla" href="https://twitter.com/dudhat_paresh" target="_blank" rel="noreferrer">Paresh Dudhat</a> from <a className="cla" href="https://twitter.com/infy_protocol" target="_blank" rel="noreferrer">Infy Protocol</a><br></br>Rashmi Padhy<br></br><br></br><strong>Sponsors</strong><br></br><br></br><a className="cla" href="https://twitter.com/tenderize_me" target="_blank" rel="noreferrer">Tenderize</a><br></br><a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><hr></hr>You can watch an interview from the event with Ahmad Mardeni and <a className="cla" href="https://twitter.com/MultiartStudio" target="_blank" rel="noreferrer">MultiArt Studio</a> below!<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=KFUxrs10gpI'/></a>
    ,
  );
  this.setState((prev) => ({ 
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Compare Indexers End
// Advocates Start
handleAdvocates() {
  this.handleAdvocateGrant = this.handleAdvocateGrant.bind(this);
  const message = this.createChatbotMessage(<a><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-15947" target="_blank" rel="noreferrer">The Graph Advocates</a><br></br> گراف ایڈوکیٹس ایک کمیونٹی پر مبنی پہل ہے جو دنیا بھر کے لوگوں کے لئے web3 میں پورٹل کے طور پر خدمات انجام دے رہی ہے۔ ایڈوکیٹس کے پاس گراف کمیونٹی اور web3 مشن کو سیکھنے اور اس میں حصہ لینے کا انوکھا موقع ہے۔ کوئی بھی ایڈوکیٹ بن سکتا ہے اور اس کے بعد گراف ایڈوکیٹس DAO میں شامل ہوسکتا ہے۔<hr></hr><strong><underline>ایڈوکیٹ رولز</underline></strong><br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12947" target="_blank" rel="noreferrer"><strong>ایونٹ ایونجلسٹ</strong></a><br></br>ایونٹ ایونجلسٹ<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12927" target="_blank" rel="noreferrer"><strong>کونٹینٹ کریئٹر</strong></a><br></br>web3 اور گراف کے بارے میں مواد بنائیں ، بشمول مضامین ، ویڈیوز ، انفوگرافکس ، میمز یا GIFs۔<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13207" target="_blank" rel="noreferrer"><strong>ٹیکسٹ ٹرانسلیٹر</strong></a><br></br>گراف اور دیگر کمیونٹی دستاویزات، مواد، اور سماجی خطوط کو دوسری زبانوں میں ترجمہ کریں.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12667" target="_blank" rel="noreferrer"><strong>کمیونٹی کیئر</strong></a><br></br>سوالات کے جوابات پوسٹ کریں یا گراف فورم، ٹیلیگرام، ڈسکارڈ، یا ریڈڈیٹ میں تعلیمی وسائل کا اشتراک کریں۔<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13167" target="_blank" rel="noreferrer"><strong>ٹیکنیکل ٹیچر</strong></a><br></br>دوسروں کو سکھائیں کہ web3 اور گراف ایکو سسٹم میں فعال طور پر کس طرح حصہ لیں اور تعاون کریں.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13407" target="_blank" rel="noreferrer"><strong>web3 ویلکمر</strong></a>
  <br></br>دنیا بھر میں زیادہ سے زیادہ تعلیم اور web3 اور گراف کو اپنانے میں تیزی لائیں۔<hr></hr>دنیا بھر میں زیادہ سے زیادہ تعلیم اور web3 اور گراف کو اپنانے میں تیزی لائیں۔ <a className="cla" href="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7" target="_blank" rel="noreferrer">یہاں</a>.<br></br><br></br>اس کے بارے میں مزید جاننے کے لئے کہ ایڈوکیٹ بننے کے لئے کیا ہوتا ہے یہاں دیکھیں۔ <a className="cla" href="https://thegraph.com/ecosystem/advocacy/" target="_blank" rel="noreferrer">یہاں</a>.<hr></hr>ایڈوکیٹس DAO گرانٹس  کے بارے میں جاننے کے لئے ، مجھ پر کلک کریں! <a className="cla" onClick={this.handleAdvocateGrant}><strong>مجھے کلک کیجیے</strong></a>!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrant() {
  this.handleAdvocateGrantWithdraw = this.handleAdvocateGrantWithdraw.bind(this);
  const message = this.createChatbotMessage(<a><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12762" target="_blank" rel="noreferrer"><strong>گراف ایڈوکیٹس DAO گرانٹ</strong></a><br></br><br></br> آپ یہاں ایڈوکیٹس DAO گرانٹ کے لئے درخواست دے سکتے ہیں۔ <a className="cla" href="http://grants.graphadvocates.com/" target="_blank" rel="noreferrer">یہاں</a>.<hr></hr><strong>گرانٹ کا عمل</strong><br></br>ابتدائی جائزہ - آپ کی گرانٹ یہاں گراف ایڈوکیٹس DAO فورم  میں پوسٹ کی جائے گی۔ گرانٹ کمیٹی کا DAO ممبر آپ کی گرانٹ کی اہلیت کا اندازہ کرے گا۔ <a className="cla" href="https://forum.graphadvocates.com/" target="_blank" rel="noreferrer">یہاں</a><br></br>عوامی مباحثے - وسیع تر کمیونٹی کو گرانٹس پر رائے فراہم کرنے اور فورم میں ووٹ دینے کے لئے مدعو کیا جاتا ہے کہ آیا وہ اس کی حمایت کرتے ہیں یا نہیں۔ اس عمل کے دوران، کمیونٹی کے ارکان یا DAO کے ارکان فورم میں سوالات پوچھ سکتے ہیں تاکہ گرانٹ کے بارے میں مزید تفصیلات جمع کی جا سکیں تاکہ اس کے دائرہ کار کو بہتر طور پر سمجھا جا سکے. یہ اس عمل کا ایک اہم مرحلہ ہے جس کے دوران رائے قائم ہوتی ہے۔<br></br>کمیٹی پریزنٹیشن - ایک کامیاب گرانٹ کی درخواست میں DAO کی گرانٹ کمیٹی کو براہ راست پریزنٹیشن بھی شامل ہوگی۔ یہ ملاقاتیں DAO کے ڈسکارڈ سرور کی عوامی صوتی چیٹ میں ہوتی  ہیں اور دنیا بھر میں مختلف ٹائم زونز کو ایڈجسٹ کرنے کے لئے ہر منگل کو تین مختلف ٹائم سلاٹس (10:00 | 18:00 | 22:00 یو ٹی سی UTC) پر شیڈول کی جاتی ہیں۔ گرانٹ کمیٹی کے ممبروں کے لئے یہ اہم ٹچ پوائنٹس ہیں تاکہ وہ اس بات پر اعتماد حاصل کرسکیں کہ گرانٹ کی حمایت کرنا ہے یا نہیں۔ براہ کرم اپنی گرانٹ کا جائزہ پیش کرنے اور سوالات کے جوابات دینے کے لئے تیار آئیں۔<br></br>گرانٹ کا فیصلہ - آپ گرانٹ کے عمل کے دوران ابھرتے ہوئے متعدد مختلف ووٹس اور انتخابات کو دیکھیں گے۔ یہ ناقابل یقین حد تک اہم اشارے ہیں جو DAO کے ممبروں کو ان کے ووٹ میں مطلع کرتے ہیں۔ کامیاب گرانٹس کے لئے سرکاری DAO فنڈنگ کا فیصلہ عمل کے بالکل اختتام پر ہوگا ، جہاں DAO کے تمام ممبران DAO ہاؤس میں آن چین ووٹ دیں گے۔ (نوٹ: کچھ چھوٹی گرانٹس کو گرانٹ کمیٹی کے ذریعہ آف چین ووٹ دیا جاسکتا ہے)
  <br></br>متوقع وقت - DAO تمام گرانٹ ایپلی کیشنز کو مناسب طریقے سے جانچنے کے لئے پرعزم ہے۔ DAO نے آن چین اور آف چین ٹائم لائنز بھی قائم کی ہیں جو مختلف ٹائم زونز میں رہنے والی کمیونٹی سے وسیع پیمانے پر مشغولیت کی اجازت دیتی ہیں جن میں شرکت کے لئے دستیابی کی مختلف ڈگریاں ہوتی ہیں۔<hr></hr>ایڈوکیٹس DAO گرانٹس  واپس لینے کے بارے میں جاننے کے لئے ، مجھ پر کلک کریں!<br></br><a className="cla" onClick={this.handleAdvocateGrantWithdraw}><strong>مجھے کلک کیجیے</strong></a>!</a>
    , 
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrantWithdraw() {
  const message = this.createChatbotMessage(<a><strong>مزید ایڈوکیٹس DAO گرانٹ کا عمل</strong><hr></hr>لہذا آپ نے اب فارم کے ذریعہ اپنی گرانٹ جمع کروائی ہے ، اسے اس فورم میں پوسٹ کیا گیا ہے جہاں کمیونٹی اور ایڈوکیٹس ووٹ دے رہے ہیں اور سوالات پوچھ رہے ہیں۔ اگلا کیا ہے؟<br></br><a className="cla" href="https://docs.graphadvocates.com/community-grants/getting-grant-paid" target="_blank" rel="noreferrer">یہاں</a>. DAO ایک/دو ماہ کے اندر اندر ایک کامیاب گرانٹ کی درخواست پر عملدرآمد کرنے کا ارادہ رکھتا ہے. ذیل میں کلیدی اقدامات کا ایک جائزہ ہے جو ایک کامیاب گرانٹ کی درخواست سے گزرتا ہے<br></br>
  : کمیونٹی کا جائزہ: ~ 10 دن (کمیونٹی کی مصروفیت کی طرف سے مختلف ہوتا ہے)<br></br>
  کمیٹی پریزنٹیشن: ~ 7 دن (شیڈولنگ کے لئے وقت کی اجازت بھی شامل ہے)<br></br>
  کمیٹی پریزنٹیشن: ~ 7 دن (شیڈولنگ کے لئے وقت کی اجازت بھی شامل ہے)<br></br>
  ووٹنگ کی مدت ختم ہو چکی ہے اور آپ کی گرانٹ کامیاب رہی ہے۔ اگر ایسا ہے تو، مبارک ہو! کیا توقع کریں:<br></br>
  ای میل کی تصدیق - یہ گراف ایڈوکیٹس DAO سے ہے ، آپ کو ای میل کے اندر موجود لنک کے ذریعہ کے وائی سی (اپنے کسٹمر کو جانیں) کو مکمل کرنے کی ضرورت ہوگی۔ آپ کو ایک کنٹریکٹ معاہدہ بھی بھیجا جائے گا.<br></br>
  فورم پوسٹ - ایک ایڈوکیٹ بھی فورم کے اندر آپ کی گرانٹ پر تبصرہ کرے گا اس بات کی تصدیق کرنے کے لئے کہ آپ اپنی گرانٹ کے ساتھ کامیاب رہے ہیں.<br></br>
  KYCa اور گرانٹ معاہدہ: ~ 7 دن
  <br></br>
  آن چین ووٹنگ: 14 دن
  <br></br>
  آپ اپنی آن چین گرانٹ کی تجویز کو یہاں دیکھ سکیں گے۔
  <br></br>
  14 دنوں کے بعد اگر آپ  آن چین ووٹنگ کے ساتھ کامیاب رہے ہیں تو آپ اپنی گرانٹ واپس لے سکیں گے۔
  <br></br>
  DAOhaus ایپ سے اپنے GRT کو واپس لینے کے بارے میں ایک گائیڈ یہاں پایا جاسکتا ہے۔ یا آپ  ذیل میں ویڈیو ٹیوٹوریل دیکھ سکتے ہیں۔ اگر آپ کو اپنے فنڈز کو گنوسس چین سے ایتھریم میں منتقل کرنے کی ضرورت ہے تو ، آپ کو اپنے GRT کو پل کرنے کی ضرورت ہے ، ہم اومنی برج کا استعمال کرتے ہوئے تجویز کرتے ہیں ، جس تک آپ یہاں تک رسائی حاصل کرسکتے ہیں۔ ایک ویڈیو دیکھنے کے لئے جس میں دکھایا گیا ہے کہ اپنے فنڈز کو منتقل کرنے کے  لئے اومنی برج کا استعمال کیسے کریں ، آپ اسے یہاں دیکھ سکتے ہیں۔ 
  <hr></hr>
  <a className="cla" href="https://omni.gnosischain.com/bridge" target="_blank" rel="noreferrer">OmniBridge</a>
  <br></br>
  <a className="cla" href="https://drive.google.com/file/d/1-YB8JfBu8mkYzc1wAqopGsBIonaLHwq6/view" target="_blank" rel="noreferrer">ویڈیو گائیڈ</a>.<br></br><br></br><iframe className="embed" isDark src="https://drive.google.com/file/d/1toZih5GIO-h3deJKQz9lr_WBY3_QqX0U/preview" width="100%" height="480" allow="autoplay"></iframe></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// Advocates End
// GRT Token Address Start
handleGRTTokenAddress() {
  const message = this.createChatbotMessage(<a>ذیل میں آپ کو GRT معاہدہ اور اس کی تفصیلات ملیں گی، نقصان دہ معاہدہ شامل کرنے سے بچنے کے لیے معلومات کو دو بار چیک کرنا یقینی بنائیں۔<br></br><br></br>نام: گراف<br></br>علامت: جی آر ٹی<br></br>نیٹ ورک: Ethereum (ERC20)<br></br>معاہدہ: 0xc944e90c64b2c07662a292be6244bdf05cda44a7<br></br>اعشاریہ: 18<br></br><br></br>آپ اسے CoinMarketCap پر <a className="cla" href="https://coinmarketcap.com/ur/currencies/the-graph/" target="_blank" rel="noreferrer">یہاں</a><br></br>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// GRT Token Address End
// Undelegating Start
handleUnDelegating() {
  const message = this.createChatbotMessage(<a>ہر بار جب کوئی نمائندہ ڈیلیگیشن کو منسوخ کرنا چاہتا ہے تو ، ان کے ٹوکن 26 دن کی غیر منسلک مدت سے مشروط ہوتے ہیں۔ اس کا مطلب یہ ہے کہ وہ اپنے ٹوکن کو منتقل نہیں کرسکتے ہیں یا 26 دنوں کے لئے انعامات حاصل نہیں کرسکتے ہیں.<br></br><br></br>ڈیلیگیشن / پگھلنے کی مدت کچھ اقتصادی حملوں کو ہونے سے روکنے کے لئے موجود ہے. اسے 28 ایپوکس کی زیادہ سے زیادہ مختص زندگی سے ملنا ہے۔ فی الحال جس طرح سے انعام کا نظام کام کرتا ہے اسے دیکھتے ہوئے ، ڈیلیگیشن کے خاتمے کی ایک مختصر مدت ممکنہ طور پر ڈیلیگیشن کو بیک وقت متعدد اسائنمنٹس میں "دو بار شمار" کرنے کی اجازت دے گی۔<hr></hr>ہر بار جب انڈیکسر اپنی بندش (دستی طور پر) کو مجبور کرنا چاہتا ہے ، یا خود بخود ہر زیادہ سے زیادہ 28 ایپوکس: تفویض کی زیادہ سے زیادہ مدت۔ یہ وہ وقت ہوتا ہے جب انعامات تقسیم کیے جاتے ہیں۔<br></br><br></br>غور کرنے کے لئے ایک چیز یہ بھی ہے کہ ایک انڈیکسر کو دانشمندی سے منتخب کرنا ہے۔ اگر آپ کسی ایسے انڈیکسر کا انتخاب کرتے ہیں جو قابل اعتماد نہیں تھا یا اچھا کام نہیں کررہا تھا تو ، آپ تفویض کرنا چاہیں گے ، جس کا مطلب ہے کہ آپ انعامات حاصل کرنے کے بہت سارے مواقع سے محروم ہوجائیں گے ، جو GRT کو جلانے کی طرح ہی برا ہوسکتا ہے۔<br></br><br></br>گراف کے GRT ٹوکن وفد کو ختم کرنے کے بارے میں ایک ٹیوٹوریل کے لئے ، <a className="cla" href="https://www.youtube.com/watch?v=3GPY5On7vHc" target="_blank" rel="noreferrer">
  یہاں
</a><br></br>میں انڈیکسر کا انتخاب کرنے کے بارے میں دستاویزات اور ٹیوٹوریل کے ساتھ آپ کی مدد کرسکتا ہوں۔
  <hr></hr>انڈیلیگیشن میں 28 دور (دن نہیں) لگتے ہیں۔<br></br>
  ہر دور کی لمبائی 6646 بلاکس ہوتی ہے۔<br></br><br></br>ETH PoS سے پہلے ہر بلاک کی لمبائی تقریباً 13 سیکنڈ تھی، اس وجہ سے 28 دور تقریباً 28 دن تھے۔<br></br>13s * 6646b * 28e = ~28 days<br></br><br></br>اب ہر بلاک میں تقریباً 12.06 سیکنڈ لگتے ہیں۔<br></br>12s * 6646b * 28e = 26 days</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Undelegating End
// Courses Start
handleCourses() {
  const message = this.createChatbotMessage(<a>گراف اکیڈمی تعلیم اور گراف کے بارے میں مزید سیکھنے کے بارے میں ہے. ان کے کورسز آپ کو گراف کے ساتھ شروع کرنے اور ایکو سسٹم کے بارے میں اپنے علم کو بڑھانے میں مدد کرنے کے لئے ڈیزائن کیے گئے ہیں. اور مزید سیکھنے کے لئے انعام کے طور پر، آپ کو ایک ذاتی سرٹیفکیٹ ملتا ہے.<br></br><br></br><a className="cla" href="https://thegraph.academy/course/delegator-course/" target="_blank" rel="noreferrer">ڈیلیگیٹر کورس</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/subgraph-developer-course/" target="_blank" rel="noreferrer">سب گراف ڈویلپر کورس</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/curator-course/" target="_blank" rel="noreferrer">سب گراف ڈویلپر کورس</a><hr></hr>اگر آپ web3 کے بارے میں مزید جاننا چاہتے ہیں تو، مجھ سے پوچھیں! "میں مفت کے لئے web3 کیسے سیکھ سکتا ہوں؟"</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLearnWeb3() {
  const message = this.createChatbotMessage(<a>مفت کے لئے web3 دیو سیکھنے کے لئے وسائل<br></br><br></br>کورسز، منصوبوں اور کوڈ کے ذریعے اپنے web3 کیریئر کو فاسٹ ٹریک کریں. مکمل طور پر مفت. یہاں تلاش کریں.<br></br>
  <a className="cla" href="https://university.alchemy.com/" target="_blank" rel="noreferrer">یہاں</a><br></br><br></br><a className="cla" href="https://t.co/dm50GZ8lMP" target="_blank" rel="noreferrer">ایتھریم</a><br></br><a className="cla" href="https://t.co/BfjoA5ynEt" target="_blank" rel="noreferrer">سولیڈیٹی</a><br></br>خوفناک ٹھوس وسائل ، لائبریریوں ، ٹولز اور بہت کچھ کی ایک تیار کردہ فہرست حیرت انگیز استحکام میں مل سکتی ہے۔ 
  <br></br><a className="cla" href="https://github.com/bkrem/awesome-solidity" target="_blank" rel="noreferrer">Awesome Solidity.</a><br></br><a className="cla" href="https://t.co/GUMDW8WAru" target="_blank" rel="noreferrer">Blockchain</a><br></br><a className="cla" href="https://t.co/kzVyI8leHK" target="_blank" rel="noreferrer">Oracles</a><br></br>کرپٹو زومبیز ایک انٹرایکٹو اسکول ہے جو آپ کو بلاکچینز کے بارے میں تکنیکی تمام چیزیں سکھاتا ہے۔
  <br></br><a className="cla" href="https://t.co/QRwZn0CvPl" target="_blank" rel="noreferrer">CryptoZombies</a><br></br>SpeedRunEthereum.com پر اپنے آپ کو امتحان میں رکھو  .
  <br></br><a className="cla" href="https://t.co/VVsmytm7CS" target="_blank" rel="noreferrer">SpeedRunEthereum.com</a> .<br></br>Alchemy's <a className="cla" href="https://t.co/BDni1gjuvJ" target="_blank" rel="noreferrer">Road to Web3</a> کیمیا کی Road to Web3 سیریز ، ایک 10 ہفتوں کا ، خود رفتار web3 ڈویلپر پروگرام جو نئے بلاکچین  ڈویلپرز کو  ابتدائی سے اعلی درجے کی طرف جانے میں مدد فراہم کرتا ہے۔ سہیل کاکڑ<br></br><br></br>اگر آپ ویڈیو ٹیوٹوریل دیکھ کر سیکھنے کو ترجیح دیتے ہیں تو پھر نادر ڈبٹ سے بہتر سیکھنے کے لئے کوئی نہیں ہے۔ آپ کو ذیل میں 'مکمل اسٹیک web3 ڈویلپمنٹ کے لئے مکمل گائیڈ' ٹیوٹوریل مل جائے گا ، مزید web3 سیکھنے والے مواد کے لئے اس کے باقی یوٹیوب چینل کو چیک کرنا یقینی بنائیں۔<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=nRMo5jjgCr4'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Courses End
// Women Of Web 3 Start
handleWomenInWeb3() {
  const message = this.createChatbotMessage(<a>
    
    <a className="cla" href="https://twitter.com/evabeylin?s=21&t=xlTfEQdph_MfbuUlhFrb0Q" target="_blank" rel="noreferrer"><strong>ایوا بیلن</strong></a> اکتوبر 2020 سے گراف فاؤنڈیشن کی ڈائریکٹر ہیں۔ وہ ای گرل کیپٹل کے ذریعے بنیادی ایتھریم ٹیکنالوجی میں سرمایہ کار اور حامی  ہیں اور گراف کی ترقی کی  قیادت کر رہی  ہیں۔ وہ کوائن ڈیسک کے سب سے زیادہ بااثر 2022 میں سے ایک ہے، یہاں مکمل بلاگ پڑھیں. انہوں نے گراف کے بنیادی ڈویلپرز کو گرانٹس میں 135 ملین ڈالر سے زیادہ کی تقسیم اور ٹائیگر گلوبل کی سربراہی میں فاؤنڈیشن کے 50 ملین ڈالر کے سرمائے کی قیادت کی ہے۔ گراف ڈے 2022 میں ہمارے ڈیسینٹرلائزیشن سفر  کے بارے میں ان کی گفتگو دیکھیں ، <a className="cla" href="https://www.coindesk.com/consensus-magazine/2022/12/05/eva-beylin-most-influential-2022/" target="_blank" rel="noreferrer">یہاں</a>۔ انہوں نے فوربس 2023 انڈر <a className="cla" href="https://www.forbes.com/profile/eva-beylin/?sh=34d711c95444" target="_blank" rel="noreferrer">30</a> بنایا۔ آپ یہاں ایک انٹرویو دیکھ کر ایوا کو جان سکتے ہیں۔
    <br></br><br></br>
    <a className="cla" href="https://twitter.com/theklineventure?s=21&t=8FTTZesLJJUxAVnVbmLgQg" target="_blank" rel="noreferrer"><strong>ٹیگن کلائن</strong></a>بنانے میں مدد کے لئے 22.5 ملین جمع کرنے کے بعد جو ایتھریم ڈویلپرز کو یہ سمجھنے دیتا ہے کہ  ان کی مصنوعات کو کس طرح استعمال کیا جارہا ہے ، اس نے اس منصوبے کو منیٹائز کرنے میں مدد کے لئے ایج اینڈ نوڈ کی مشترکہ بنیاد رکھی۔ ایج اینڈ نوڈ کو اصل میں جی آر ٹی ٹوکن کے 8٪ حصص کے ساتھ مالی اعانت فراہم کی گئی تھی ، جس کی قیمت اب تقریبا 650 ملین ڈالر ہے۔ کلائن نے دی گراف سے ملحقہ منصوبوں میں ایج اینڈ نوڈ کی سرمایہ کاری کی بھی قیادت کی ہے ، جو  2021 میں مجموعی طور پر 3.1 ملین ڈالر ہے۔ انہوں نے فوربز 2022 انڈر <a className="cla" href="https://www.forbes.com/profile/tegan-kline/?sh=1465202462f7" target="_blank" rel="noreferrer">30</a> بنایا۔ آپ یہاں اس کی ویب سائٹ پر جاکر کلائن کو جان سکتے <a className="cla" href="https://www.tegankline.com/" target="_blank" rel="noreferrer">ہیں</a>۔ اس کے ساتھ ایک انٹرویو دیکھیں، <a className="cla" href="https://youtu.be/yONuFNxJVrc" target="_blank" rel="noreferrer">یہاں</a>. یا <a className="cla" href="https://youtu.be/ZGHwTb92Rrg" target="_blank" rel="noreferrer">یہاں</a>یہاں (جی آر ٹی کیو) پوڈ کاسٹ سن سکتے  ہیں۔
     <br></br><br></br>
     <a className="cla" href="https://twitter.com/girlcalledreem?s=21&t=h9ZItE1mnaruz2uPiHkrLQ" target="_blank" rel="noreferrer"><strong>ریم چہارور</strong></a>گرانٹس کے کام کی پیروی کی ہے ، پھر وہ پہلے ہی ریم کا سامنا کرچکے ہیں۔ وہ  گراف کمیونٹی کے لئے ایک اہم اثاثہ ہے اور اس کا کام مختلف قسم کے اہم اقدامات کا احاطہ کرتا ہے. آپ اسے (جی آر ٹی کیو) پوڈ کاسٹ پر سن سکتے ہیں ، یہاں۔ وہ کرپٹو میں اپنے داخلے اور گراف فاؤنڈیشن میں اپنے کام کے بارے میں بات کرتی ہے ، گرانٹ کے لئے درخواست دینے کے خواہاں افراد کے لئے اس کا مشورہ (اور جہاں فاؤنڈیشن مزید گذارشات دیکھنا چاہتی ہے) ، آر ایف پی اور گرانٹس پروگراموں کے مابین فرق ، اور جلد ہی لانچ گراف ایڈوکیٹس پروگرام۔
     <br></br><br></br>
     جب کوئی انڈیکسر کا ذکر کرتا ہے تو وہ مرد کے نام استعمال کرتے ہیں۔ "وہ اپنا الاٹمنٹ بند کر دیتا ہے"۔ انڈیکسر ٹیموں پر کام کرنے والی ویب 3 میں خواتین کو اجاگر کرنے یا گراف ماحولیاتی نظام کے اندر اپنا انڈیکسر چلانے  کے خواہاں گرافٹروناٹس نے ویب 3 کی خواتین کے ساتھ انٹرویوز کا ایک سلسلہ منعقد کیا۔
     <br></br><br></br>
     <a className="cla" href="https://www.youtube.com/watch?v=WTdf9wEhSLg" target="_blank" rel="noreferrer">ویب 3 کی خواتین - گراف اوپس سے انا</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=0D4_17B6ypY" target="_blank" rel="noreferrer">ویب 3 کی خواتین - سیٹیڈیل.ون سے انا</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=chvIFfPfOjY" target="_blank" rel="noreferrer">ویب 3 کی خواتین - چینوڈ ٹیک سے  (آئی آئی این سی اے)</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=Z7UnQotqLVA" target="_blank" rel="noreferrer">ویب 3 کی خواتین   -  اسٹیک 2 ارن سے گیبی</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Women Of Web 3 End
// Discord Start
handleDiscord() {
  const message = this.createChatbotMessage(<a>
    ذیل میں آپ کو آفیشل ڈسکورڈ سرورز ملیں گے۔<br></br><br></br><a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">گراف پروٹوکول</a><br></br><br></br><a className="cla" href="https://discord.com/invite/aZtCCKPp34" target="_blank" rel="noreferrer">گراف ایڈوکیٹس ڈی اے او</a><hr></hr>ذیل میں آپ کو غیر سرکاری ڈسکورڈ سرورز ملیں گے۔<br></br><br></br><a className="cla" href="https://discord.com/invite/zqrwSFFW3F" target="_blank" rel="noreferrer">Graphrica</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Discord End
// Telegram Start
handleTelegram() {
  const message = this.createChatbotMessage(<a>
     ذیل میں آپ کو آفیشل ٹیلی گرام گروپ مل جائے گا۔<br></br><br></br><a className="cla" href="https://t.me/graphprotocol" target="_blank" rel="noreferrer">سرکاری گراف کمیونٹی</a><hr></hr>ذیل میں آپ کو دنیا بھر سے غیر سرکاری ٹیلیگرام گروپ ملیں گے۔
    <br></br><br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank">Graphtronauts</a><br></br><a className="cla" href="https://t.me/TheGraph_Germany" target="_blank">The Graph - Germany</a><br></br><a className="cla" href="https://t.me/thegraphfrenchchannel" target="_blank">The Graph - French</a><br></br><a className="cla" href="https://t.me/thegraphenespanol" target="_blank">The Graph - Español</a><br></br><a className="cla" href="https://t.me/thegraphRu" target="_blank">The Graph - Russia</a><br></br><a className="cla" href="https://t.me/thegraphitalia" target="_blank" rel="noreferrer">The Graph - Italia</a><br></br><a className="cla" href="https://t.me/graphprotocolTR" target="_blank" rel="noreferrer">The Graph - Turkey</a><br></br><a className="cla" href="https://t.me/TheGraphBR" target="_blank" rel="noreferrer">The Graph - Brasil</a><br></br><a className="cla" href="https://t.me/GraphProtocol_VN" target="_blank" rel="noreferrer">The Graph - Vietnam</a><br></br><a className="cla" href="https://t.me/Graph_Persian" target="_blank" rel="noreferrer">The Graph - Persian</a><br></br><a className="cla" href="https://t.me/IndianGraphCommunity" target="_blank" rel="noreferrer">The Graph - Indian</a><br></br><a className="cla" href="https://t.me/thegraphjapan" target="_blank" rel="noreferrer">The Graph - Japan</a><br></br><a className="cla" href="https://t.me/TheGraph_Dutch" target="_blank" rel="noreferrer">The Graph - Dutch</a><br></br><a className="cla" href="https://t.me/GRTARAB" target="_blank" rel="noreferrer">The Graph - Arab</a><br></br><a className="cla" href="https://t.me/Thegraph_KR" target="_blank" rel="noreferrer">The Graph - Korea</a><br></br><a className="cla" href="https://t.me/thegraphpk" target="_blank" rel="noreferrer">The Graph - Pakistan</a><br></br><a className="cla" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">The Graph - Indonesia</a><br></br><a className="cla" href="https://t.me/thegraphbangladesh" target="_blank">The Graph - Bangladesh</a><br></br><a className="cla" href="https://t.me/GraphProtocolCN" target="_blank">The Graph - China</a><br></br><a className="graphiql-link" href="https://t.me/TheGraphUkrainian" rel="noreferrer">The Graph - Ukraine</a><br></br><a className="graphiql-link" href="https://t.me/thegraph_pl" target="_blank" rel="noreferrer">The Graph - Poland</a><br></br><a className="graphiql-link" href="https://t.me/TheGraph_Nigeria" target="_blank" rel="noreferrer">The Graph - Nigeria</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Token Economics Start
handleTwitter() {
  const message = this.createChatbotMessage(<a>ذیل میں آپ کو آفیشل ٹویٹر کا صفحہ مل جائے گا۔<br></br><br></br><a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">گراف</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTokenEconomics() {
  const message = this.createChatbotMessage(<a>گراف کی ٹوکن معیشت کافی پیچیدہ ہے. ٹوکن کے اجراء کے شیڈول اور ٹوکن جلانے کے طریقہ کار کے علاوہ ، گراف پروٹوکول 5 سے 10 سال کی مدت میں حاصل کردہ ٹوکنکو غیر مقفل کرتا ہے۔<hr></hr><table><tr className="indexer-table-header">
  <th>کل ٹوکن کی فراہمی = </th>
  <th>ابتدائی ٹوکن کی فراہمی + </th>
  <th>سالانہ شمارہ - </th>
  <th>سالانہ برننگ</th>
</tr>
</table><br></br>سالانہ اجراء کا فارمولا درج ذیل ہے:<br></br><br></br>networkGRTIssuance = 1000000011247641700<br></br><br></br>blocksYear = 2628000<br></br><br></br>Inflation = networkGRTIssuance * (10^-18) * blocksYear - 1<br></br><br></br>Inflation = 0,0299999999792... = 3% approx
<hr></hr><strong>جی آر ٹی ٹوکن معیشت کا جائزہ</strong><br></br><br></br><table>
<tr className="indexer-table">
  <td><strong>سمبل ٹیب </strong></td>
  <td>GRT</td>
</tr>
<tr className="indexer-table">
  <td><strong>نام ٹوکن</strong></td>
  <td>گراف ٹوکن</td>
</tr>
<tr className="indexer-table">
  <td><strong>ابتدائی ٹوکن کی فراہمی</strong></td>
  <td>دس بلین جی آر ٹی</td>
</tr>
<tr className="indexer-table">
  <td><strong>سالانہ شمارہ</strong></td>
  <td>~ 3٪ (سال 1 کے لئے) </td>
</tr>
<tr className="indexer-table">
  <td><strong>سالانہ جلانا</strong></td>
  <td>~ 1٪ مشاورت کی فیس اور ٹیکس</td>
</tr>
</table><hr></hr>آپ دی گراف کی ٹوکن اکنامکس کے بارے میں سب کچھ <a className="cla" href="https://thegraph.academy/ecosystem/graph-token-economics/" target="_blank" rel="noreferrer">یہاں</a> پڑھ سکتے ہیں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Token Economics End
// Sunsetting Hosted Service Start
handleSunsettingHostedService() {
  const message = this.createChatbotMessage(<a>اپ ڈیٹ- ہوسٹڈ سروس کے لئے آگے بڑھنے کا راستہ واضح کریں<br></br><br></br>ہوسٹڈ سروس اچانک تمام چینز کے لئے حمایت ختم نہیں کرے گی. ہوسٹڈ سروس فی چین استعمال کرنے کے لئے آزاد رہے گی، جب تک کہ ہر چین کے لئے بنیادی فعالیت تک نہیں پہنچ جاتا.<br></br><br></br>سب گراف ڈویلپرز کو ایک ضروری خدمت سے محروم نہیں کیا جائے گا جس پر وہ پیداوار میں انحصار کرتے ہیں۔<br></br><br></br>اصل اعلان کی وضاحت کرنے کے لئے (اور اصلاح کرنے کے لئے) جس کا اندازہ لگایا گیا ہے کہ ہوسٹڈ سروس کا خاتمہ 2023 کی پہلی سہ ماہی کے اختتام پر ہوگا:<br></br>منتقلی کا عمل صرف اس وقت چینز پر لاگو ہوتا ہے جب وہ گراف نیٹ ورک کی حمایت کرتے ہیں (جس میں لکھنے کے وقت صرف ایتھروم میننیٹ شامل ہوتا ہے  ، جس میں گنوسس چین جلد ہی آتا ہے)۔<br></br><br></br>گراف ڈسکورڈ، گراف فورم اور conmigration@thegraph.foundation سے رابطہ کرکے تبصروں کا ہمیشہ خیرمقدم کیا جاتا ہے۔<br></br><br></br>ویب 3 ڈیپس کے لئے سب گراف کی حمایت کرنے کے تقریبا 4 سال کے بعد ، ہوسٹڈ سروس 2023 کی پہلی سہ ماہی میں ڈیپس کی  ڈیسنٹرلائزڈ نیٹ ورک میں منتقلی کے ساتھ بند ہوجائے گی۔ ہوسٹڈ سروس گراف کی غیر مرکزیت کے سفر کے لئے مرکزی تھا، مارکیٹ میں مصنوعات کے فٹ کو حاصل کرنے اور ڈویلپرز کے ساتھ سب گراف کی خصوصیات کی جانچ پڑتال.<br></br><br></br>گراف اسپینول کی لورینا فیبریس نے کمیونٹی کے لئے مندرجہ ذیل سبق بنائے ہیں۔<br></br><br></br>گراف نیٹ ورک: مہذب اعداد و شمار کی صبح<br></br><br></br>سرکاری دستاویزات کے دورے کے لئے، گراف فاؤنڈیشن - ہوسٹڈ سروس کو سنسیٹ کرنے <a className="cla" href="https://thegraph.com/blog/sunsetting-hosted-service" target="_blank" rel="noreferrer">سنسیٹ کرنے کے لئے</a> سڑک.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Sunsetting Hosted Service  End
handlePowerDAOS() {
  const message = this.createChatbotMessage(<a>DAOs کو پاور کرنے کے لیے گراف کا استعمال: سنیپ شاٹ کیس اسٹڈی<br></br><br></br>گراف ایک اہم پروٹوکول ہے جو ڈی اے او کے ممبران کو اس ڈیٹا کو درست اور آسانی سے پڑھنے کے قابل بناتا ہے، جبکہ ووٹوں کو ٹریک کرنا بھی آسان بناتا ہے۔ وکندریقرت خود مختار تنظیمیں، یا DAOs، وہ تنظیمیں ہیں جو تقسیم شدہ کمیونٹیز کے ذریعے چلائی جاتی ہیں، مرکزی اتھارٹیز کے برعکس۔ کیونکہ DAOs میں فیصلہ سازی کا بڑا حصہ بلاکچینز پر ریکارڈ کیے گئے آن چین ڈیٹا پر انحصار کرتا ہے۔<br></br><br></br>سنیپ شاٹ ایک وکندریقرت گورننس پروٹوکول ہے جو لوگوں کو ان تنظیموں کے مستقبل کے بارے میں ہم آہنگی اور اجتماعی فیصلے کرنے کے قابل بناتا ہے جس میں وہ شرکت کرتے ہیں۔ <a className="cla" href="https://snapshot.org/#/" target="_blank" rel="noreferrer">سنیپ</a> شاٹ لوگوں کے لیے یہ ممکن بناتا ہے کہ وہ آسانی سے کسی گیس کی فیس کے بغیر تجاویز تخلیق کر سکیں اور ان پر ووٹ دیں۔ یہ پروٹوکول پر کام کرنے والے، DAOs میں تعاون کرنے، اور web3 میں جدید نئے پروجیکٹس بنانے والے ہزاروں لوگوں کے لیے وسیع پیمانے پر استعمال ہونے والا ٹول ہے۔
  <br></br><br></br>اب تک، سنیپ شاٹ نے اس سے زیادہ ریکارڈ کیا ہے:<br></br>8.5M آف چین ووٹ<br></br>8K پروٹوکول مربوط<br></br>64.8k تجاویز۔<hr></hr><a className="cla" href="https://thegraph.com/blog/using-the-graph-for-daos-snapshot/" target="_blank" rel="noreferrer">یہاں</a> پڑھیں، یہ جاننے کے لیے کہ گراف پاور اسنیپ شاٹ کیسے اور اپنے ڈیپ کو سپرچارج کیسے کریں۔
  
 </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Tenderize Start
handleTenderize() {
  const message = this.createChatbotMessage(<a>گراف ڈے کے دوران ، ٹینڈرائز کو پہلے مائع مصروفیت پروٹوکول کے طور پر تسلیم کیا گیا تھا۔ صارفین ٹینڈر جی آر ٹی کے ذریعہ (ٹی جی آر ٹی) جمع کرسکتے ہیں ، جو خود بخود انعامات جمع کرتا ہے اور اپنی مرضی سے آگے پیچھے تجارت کی جاتی ہے۔ (ٹی جی آر ٹی) ہولڈرز ٹینڈرائز کے ذریعہ تفویض کرسکتے ہیں ، انہیں ٹی جی آر ٹی دے سکتے ہیں۔ ویجرڈ پوزیشن کا ایک ٹوکنائزڈ ورژن جو خود بخود انعامات کو یکجا کرتا ہے اور فوری طور پر جی آر ٹی میں واپس تبدیل کیا جاسکتا ہے۔<br></br><br></br>
  شروع کرنے کے لئے، <a className="cla" href="https://app.tenderize.me/stakers/graph" target="_blank" rel="noreferrer">ٹینڈرائز کرنا</a> ملاحظہ کریں.
<br></br><br></br>
آپ ٹینڈرائز بلاگ کو <a className="cla" href="https://blog.tenderize.me/" target="_blank" rel="noreferrer">یہاں</a> بھی پڑھ سکتے ہیں۔
</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Tenderize  End
// Community Start
handleCommunity() {
  this.handleButtonCommunity = this.handleButtonCommunity.bind(this);
  const message = this.createChatbotMessage(<a>باصلاحیت مترجمین کی مدد سے گراف اب ان کی بنیادی زبانوں میں اور بھی زیادہ لوگوں تک پہنچتا ہے۔<br></br><br></br>جی آر ٹی کمیونٹی کے بارے میں مزید جاننے کے لئے ، ذیل میں دیکھیں۔<br></br><br></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCommunity();
  }}><strong>کمیونٹی</strong></button>
  <br></br><br></br><a className="cla" href="https://thegraph.com/blog/get-involved-with-graph-community-web3/" target="_blank" rel="noreferrer">گراف ایکو سسٹم میں حصہ لینے کے 23 طریقے</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Community End
// Geo Start
handleGeo() {
  const message = this.createChatbotMessage(<a>جیو گراف پر مبنی ایک مہذب ویب 3 براؤزر ہے ، صفحات کمیونٹی کے ذریعہ کھلے اور منتخب کیے جاتے ہیں۔ لہذا آپ اس پر ووٹ دے سکتے ہیں جو قابل قدر ہے اور آپ کے ووٹ کی گنتی ہوتی ہے۔ جیو ان تمام مسائل کو حل کر رہا ہے جو اس وقت ہمارے ویب 2 براؤزرز کے ساتھ ہیں اور جدت طرازی کی ایک نئی کھڑکی کھول رہا ہے ، ایک نیا انٹرنیٹ جہاں آپ کی رازداری اولین ترجیح ہے۔ اسے استعمال کرنے کے قابل ہونے کے لئے آپ کو کرپٹوگرافی یا بلاکچین کے بارے میں کچھ جاننے کی ضرورت نہیں ہے۔ یہ اگلے 1 ارب صارفین کو ویب 3 پر سوار کرنے کا ایک تجربہ ہے۔<br></br><br></br>
  جیو بیٹا میں ہے اور اس وقت صرف آئی پیڈ اور میک آلات پر سپورٹ کیا گیا ہے ، <a className="cla" href="https://edgeandnode.com/geo/" target="_blank" rel="noreferrer">یہاں</a> بیٹا ویٹ لسٹ کے لئے سائن اپ کریں۔
  <hr></hr>اپ ڈیٹ - جیو جینیسس<br></br><br></br>یانیو - پانچ سال پہلے، ہم میں سے ایک گروپ نے ایتھریم کے ارد گرد ہونے والی سرگرمی کو دیکھا اور گراف کی تعمیر کی طرف سے حصہ لینے کا فیصلہ کیا. میں نے گراف کی صلاحیت کو دنیا کے تمام عوامی علم اور معلومات کا ایک مہذب عالمی علم گراف بننے کے لئے دیکھا. معلومات کو منظم کرنے اور فراہم کرنے کے لئے عوامی بنیادی ڈھانچے کا استعمال کرتے ہوئے، ہمارے پاس بہتر کھلی اور منصفانہ عمل ہوسکتا ہے تاکہ اس بات پر اثر انداز ہو سکے کہ کون سی معلومات کو سچ سمجھا جاتا ہے. آج ہمارے پاس ایک متحرک مہذب نیٹ ورک ہے اور گراف ہزاروں ڈویلپرز کے لئے بلاکچین کے اعداد و شمار تک مؤثر طریقے سے رسائی حاصل کرنے کے اہم مسئلے کو حل کر رہا ہے، لیکن ہمیں اب بھی مکمل تصویر کو زندگی میں لانے کے لئے ایک اور قدم اٹھانے کی ضرورت ہے.<br></br><br></br>
  آپ مکمل بلاگ پڑھ سکتے ہیں، <a className="cla" href="https://www.geobrowser.io/blog/post/introducing-geo-genesis?s=09" target="_blank" rel="noreferrer">یہاں</a>
 <br></br><br></br><Embed className="embed" isDark url='https://twitter.com/i/status/1532418078700580869'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Geo  End
// Fast Streaming Start
handleSubstreams() {
  const message = this.createChatbotMessage(<a>اسٹریمنگ فاسٹ ایک پروٹوکول انفراسٹرکچر کمپنی ہے جو بلاکچین ڈیٹا ٹرانسمیشن کے لئے انتہائی اسکیل ایبل کراس چین فن تعمیر کی تعمیر میں مہارت رکھتی ہے۔ 60 ملین ڈالر کی کور دیو گرانٹ اپنی نوعیت کی پہلی گرانٹ ہے ، جو باہمی تعاون سے جدت طرازی کی ایک نئی سرحد کا آغاز کرتی ہے جہاں کمیونٹیز اور کاروباری ادارے بنیادی طور پر زیادہ کھلے انٹرنیٹ کی تعمیر کے لئے سیدھ میں آتے ہیں۔<br></br><br></br>اسٹریمنگ فاسٹ ایک پروٹوکول انفراسٹرکچر کمپنی ہے جو بلاکچین ڈیٹا ٹرانسمیشن کے لئے انتہائی اسکیل ایبل کراس چین فن تعمیر کی تعمیر میں مہارت رکھتی ہے۔ 60 ملین ڈالر کی کور دیو گرانٹ اپنی نوعیت کی پہلی گرانٹ ہے ، جو باہمی تعاون سے جدت طرازی کی ایک نئی سرحد کا آغاز کرتی ہے جہاں کمیونٹیز اور کاروباری ادارے بنیادی طور پر زیادہ کھلے انٹرنیٹ کی تعمیر کے لئے سیدھ میں آتے ہیں۔<br></br><br></br>
  ذیلی اسٹریمز کے بارے میں دستاویزات تلاش کرنے کے لئے، <a className="cla" href="https://thegraph.com/blog/core-dev-grant" target="_blank" rel="noreferrer">یہاں</a>
   <hr></hr>اسٹریمنگ فاسٹ ڈسکورڈ سرور میں شامل ہوں یا انہیں یہاں چیک کریں۔<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=qWxffTKpciU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Fast Streaming  End
// Graphtronauts Start
handleGraphtronauts() {
  const message = this.createChatbotMessage(<a>ڈیلیگیٹرز کے لئے ایک کمیونٹی ، ڈیلیگیٹرز کے ذریعہ تعمیر کی گئی۔<br></br>گرافٹر.ونوٹس ایک ایسا گروپ ہے جو ان لوگوں کے لئے چیٹ کو آسان بنانے کے لئے وقف ہے جو جی آر ٹی رکھنا چاہتے ہیں اور گراف پروجیکٹ کے بنیادی اصولوں کے بارے میں بات کرتے ہیں۔ نہ صرف وہ  گراف ایکو سسٹم کے لئے طویل مدتی جی آر ٹی ہولڈرز کی سب سے بڑی غیر سرکاری کمیونٹی ہیں، ان کا مقصد گراف کے لئے ایک ڈیلیگیٹر بننے کے لئے ان کے سفر میں لوگوں کی مدد کرنا ہے.<br></br><br></br>'ہم دوسروں کو اٹھا کر اٹھتے ہیں' - گرافٹرونوٹ | 16 جنوری 2021 کو قائم کیا گیا<br></br><br></br>
   باغے اور کرس ایونگ کے ساتھ  اس <a className="cla" href="https://www.grtiq.com/grtiq-podcast-35-the-graphtronauts/" target="_blank" rel="noreferrer">جی آر ٹی آئی کیو پوڈ کاسٹ</a> کو سن کر گرافٹروناٹس کے
بارے میں مزید جانیں۔
<br></br>
اور یہ جی آر ٹی آئی کیو <a className="cla" href="https://www.grtiq.com/grtiq-podcast-90-paolo-diomede/" target="_blank" rel="noreferrer">پوڈ کاسٹ</a> پاؤلو ڈائومڈ کے ساتھ۔
<br></br>
آپ مندرجہ ذیل لنکس کے ذریعے کمیونٹی میں شامل ہوسکتے ہیں:<br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank" rel="noreferrer">ٹیلیگرام</a><br></br><a className="cla" href="https://twitter.com/graphtronauts" target="_blank" rel="noreferrer">ٹویٹر</a><br></br><a className="cla" href="https://www.graphtronauts.com/#/" target="_blank" rel="noreferrer">گرافٹرونوٹس ایپ</a><br></br><a className="cla" href="https://old.graphtronauts.com/" target="_blank" rel="noreferrer">ویب سائٹ</a><br></br><a className="cla" href="https://www.youtube.com/channel/UCPAUeNaRtBV-jdSKY8wmcXg" target="_blank" rel="noreferrer">یوٹیوب</a><br></br><a className="cla" href="https://www.reddit.com/r/Graphtronauts/" target="_blank" rel="noreferrer">ریڈٹ</a><hr></hr>
گرافٹرونوٹس انڈیکسر (<a className="cla" href="https://thegraph.com/explorer/profile/0x0c3aab9f49c01070ec359aae4778fcbb01d2fbef?view=Indexing" target="_blank" rel="noreferrer">graphtronauts-indexer.eth</a>) اب براہ راست ہے اور وفود کے لئے تیار ہے! مزید معلومات کے لئے نیچے دیئے گئے ٹویٹ کو دیکھیں ، ان کے <a className="cla" href="https://t.co/dDUb7NHaPY" target="_blank" rel="noreferrer">ڈسکورڈ</a>  میں شامل ہوں  اور اپ ڈیٹس کے لئے ٹویٹر پر پیروی کریں۔
<br></br><Embed className="embed" isDark url='https://twitter.com/graphtronauts_x/status/1593310558798979072?s=20&t=2FCQMWbItkh1MnXmrHBVIA'/>
    </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Graphtronauts End
 // Chit Chat KEEP AT END Start


handleDelegateWithWallet() {
  const message = this.createChatbotMessage(<a>If you would like to delegate GRT via Metamask. If you haven’t already, <a className="cla" href="https://metamask.io/download/" target="_blank" rel="noreferrer">download MetaMask</a>. If you need help with this, you can find a guide <a className="cla" href="https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>You can watch a step-by-step video tutorial on delegating GRT to an Indexer <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">here</a>.<br></br>If you would prefer to follow the text guide, you can read that <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">here</a>.<hr></hr>You can use <strong>WalletConnect</strong> to delegate on The Graph Protocol.<br></br>You can find a step by step guide on how to do this <a className="cla" href="https://thegraph.academy/delegators/delegating-walletconnect/" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>Instead of Metamask’s soft wallet, you can also use a hard wallet, such as Ledger, to delegate your GRT. Hard wallets can add another layer of security as they typically require physical device confirmation of transactions. You can connect Metamask to your hardware wallet via the Metamask Browser Extension. Make sure to have the ETH app open on your Ledger device and to have Contract Data allowed within the ETH app on your device.<br></br><br></br>To delegate your GRT tokens using a hardware wallet connected to MetaMask, read a tutorial <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-delegate-your-grt-tokens-with-an-hardware-wallet-aec7751cd5d5" target="_blank" rel="noreferrer">here</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCurator() {
  const message = this.createChatbotMessage(<a><a className="cla" href="https://thegraph.academy/curators/definition/" target="_blank" rel="noreferrer">Curators</a> do not need to possess complex technical skills or knowledge. All it takes is the ability to do transactions via MetaMask. Similarly, Curators are not required to stake a minimum required amount of GRT, unlike Indexers. Curators should have an understanding of the Web3 ecosystem trends and see if a subgraph is providing useful information. It is also helpful for a Curator to be able to identify critical issues that could mean a subgraph is broken.<br></br><br></br>The following guides will give you all the info you need to know prior to signalling a subgraph and how to do it with confindence.<br></br><br></br>This Curator <a className="cla" href="https://medium.com/@paulieb.eth/tips-and-tricks-to-evaluate-and-determine-if-a-subgraph-is-legitimate-c67f16e2205a" target="_blank" rel="noreferrer">guide</a> on 'Tips and Tricks to evaluate and determine if a subgraph is legitimate' is the best place to start. Once you have read the guide and watched the tutorials below, you will be in a great position to signal your first subgraph.<br></br><br></br>This <a className="cla" href="https://medium.com/@paulieb.eth/the-graph-curation-bb17bf8b8fa9" target="_blank" rel="noreferrer">guide</a> also made by PaulieB on 'Curation. A short and sweet guide explaining what it is, how to do it, and helpful resources to help you become successful.'<br></br><br></br>Join <a className="cla" href="https://t.me/CurationStation" target="_blank" rel="noreferrer">$GRT Curation Station</a>, a community created by Curators, for Curators. You can seek further help here if needed.<br></br><br></br>The following video tutorials were created by <a className="cla" href="https://thegraph.com/explorer/profile?id=0x87eba079059b75504c734820d6cf828476754b83&view=Indexing" target="_blank" rel="noreferrer">DataNexus</a> about Curation:<br></br><a className="cla" href="https://www.youtube.com/watch?v=-7qWi2do-1E" target="_blank" rel="noreferrer">What Is A Curator For The Graph</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=unzQvSZIORg" target="_blank" rel="noreferrer">Verifying a Subgraph</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=zJswFILfADg" target="_blank" rel="noreferrer">How to Signal a Subgraph</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=u76dxQPdS9c" target="_blank" rel="noreferrer">Signal Transaction Failure</a><hr></hr>If you want some helpful Curator tools, then just ask.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCuratorTools() {
  const message = this.createChatbotMessage(<a><strong>Helpful Tools for Curators</strong><br></br><br></br>Learn how billing works on the Subgraph Studio, <a className="cla" href="https://thegraph.com/docs/en/billing/" target="_blank" rel="noreferrer">here.</a><br></br><br></br>Learn how The Graph to use Polygon for its billing system, <a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">here</a>.<hr></hr><a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">Check</a> the Indexing status of a Subgraph<br></br><br></br>You can see data for:<br></br>Mainnet Query Fees (Daily)<br></br>Mainnet Query Fees (Monthly)<br></br>Mainnet Query Fees (Monthly, 30 Day Moving Average)<br></br>New Subgraphs (Monthly)<br></br>Total Subgraphs<br></br>Average Subgraph Fees (Monthly, 30 Day Moving Average)<br></br>Subgraph Query Fees (30 Days)<br></br>Query Fee / Signal Ratio (30 Days)<br></br>Subgraph Query Fees (30 Days) - %<br></br><a className="cla" href="http://michael.lesane.net/graphdash/" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>Or check the Billing of Subgraphs, <a className="cla" href="http://michael.lesane.net/graphdash/billing" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>Graph Network <a className="cla" href="https://dapplooker.com/dapp/graph-network-billing-120192" target="_blank" rel="noreferrer">Billing Dashboard</a><br></br><br></br>Graph Network <a className="cla" href="https://dapplooker.com/dapp/graph-network-user-billing-balance-120204" target="_blank" rel="noreferrer">User Billing Balance</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleHostedService() {
  const message = this.createChatbotMessage(<a>The hosted service has been instrumental to getting The Graph to where it is today, but the vision has always been to create a decentralized indexing protocol and global API. When The Graph Network goes live, developers will finally have the ability to offer truly serverless decentralized applications that are fast to load and dependable. There will be no need for centralized infrastructure as applications can connect directly to an efficient network of Indexers to process queries.<br></br><br></br>Ethereum subgraphs continue to migrate to The Graph’s decentralized network. As web3 adoption grows, so does demand for scale and performance. Developers are faced with a major decision: to continue to rely on centralized tech or to switch to decentralized infrastructure.<br></br>For longevity and reliability, nothing beats decentralization. By eschewing centralized points of failure, you are offering your users a web3 app they can access consistently. Many projects have already validated the network in production and now is the perfect time for your project to migrate over.<br></br><br></br>To learn more about The Graph Subgraph Migration, see <a className="cla" href="https://thegraph.com/blog/graph-network-migration" target="_blank" rel="noreferrer">here</a>.<br></br>If you are looking for a step-by-step guide on how to migrate a subgraph from the hosted service to mainnet, see <a className="cla" href="https://codex.thegraph.com/repositories-and-documentation/official-documentation/hosted-service/migrating-subgraph" target="_blank" rel="noreferrer">here</a>. If you prefer video tutorials then see below.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=syXwYEk-VnU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleChainlink() {
  const message = this.createChatbotMessage(<a>The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.<hr></hr>Chainlink is a decentralized oracle network that enables smart contracts to securely access off-chain data feeds, web APIs, and traditional bank payments.<hr></hr>Here is a video explanation with Tegan Kline and Dave Kajpust of The Graph Protocol. They discuss The Graph's vital importance to building a decentralized Web3 and explain the differences between Chainlink and the Graph.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=HOS9g0rKP24'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIndexerOfficeHours() {
  const message = this.createChatbotMessage(<a>Indexer Office Hours is an informal drop-in clinic for anyone to get advice on their Indexer deployment whether it be on Mainnet or Testnet. If you would like to get more eyes on a troubleshooting issue, or even just want to ask questions about indexing, then this is the clinic for you.<br></br><br></br>You can catch up on all Indexer Office Hours <a className="cla" href="https://graphops.notion.site/Indexer-Office-Hours-952e0b50a65144768aab922e2c9d102a" target="_blank" rel="noreferrer">here</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleFireHose() {
  const message = this.createChatbotMessage(<a>Processing data through Firehose (developed by StreamingFast), increases linear indexing performance and syncing speed, and maximizes data agility by enabling parallel processing. Firehose creates a generic interface for Graph Node with any blockchain and vastly improves the capability of handling high throughput chains like NEAR.<br></br><br></br>You can read the proposal of the Firehose to learn more about it, <a className="cla" href="https://firehose.streamingfast.io/" target="_blank" rel="noreferrer">here</a>.<hr></hr>Ask me about StreamingFast to learn more about them.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoreDevs() {
  this.handleButtonCoreDevsChat = this.handleButtonCoreDevsChat.bind(this);
  const message = this.createChatbotMessage(<a>The Graph`s Core Developers are:<br></br><br></br><a className="cla" href="https://edgeandnode.com/blog/introducing-edge-and-node/" target="_blank"><strong>Edge & Node</strong></a> - Developing decentralized protocols and advancing web3. Initial team behind The Graph.<br></br><a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank"><strong>Figment</strong></a> - Improving node infrastructure and multi-blockchain support.<br></br><a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank"><strong>The Graph Foundation</strong></a> - Stewarding the ecosystem, issuing grants, and supporting the community.<br></br><a className="cla" href="https://www.streamingfast.io/" target="_blank"><strong>StreamingFast</strong></a> - Optimizing subgraph indexing performance and supporting web3 development tooling.<br></br><a className="cla" href="https://www.semiotic.ai/" target="_blank" ><strong>Semiotic</strong></a>- Enhancing The Graph Network through AI innovations and R&D.<br></br><a className="cla"href="https://www.the-guild.dev/" target="_blank"><strong>The Guild</strong></a> - Building subgraph tooling and developing GraphQL API improvements.<br></br><a className="cla" href="https://graphops.xyz/" target="_blank"><strong>GraphOps</strong></a> - Extracting, transforming, and serving blockchain data via the Graph Protocol.<br></br><a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank"><strong>Messari</strong></a> - Bringing transparency and building tools for informed decisions and investment.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonCoreDevsChat}><strong>Core Devs</strong></button><br></br><br></br>Catch up on all Core Devs Calls <a className="cla" href="https://www.youtube.com/playlist?list=PLTqyKgxaGF3Tj_A6eqV8V_aQoRwd2oHa_" target="_blank">here</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleFigment() {
  const message = this.createChatbotMessage(<a>Figment is a venture funded, registered Canadian company based in Toronto. Serving the world’s largest GRT holders. With 30+ years of experience successfully scaling internet infrastructure companies.<hr></hr><strong>Staking</strong>- Figment operates a highly secure network of Proof-of-Stake (PoS) validators that enable token holders to secure networks, participate in governance, and earn yield.<br></br>To learn more about Staking with Figment, see <a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank" rel="noreferrer">here</a>.<br></br><br></br><strong>Software</strong>- Figment’s DataHub platform lets developers use the most powerful and unique features of a blockchain without having to become protocol experts, accelerating the development of new Web 3 applications.<br></br>To learn more about Figment’s DataHub platform, see <a className="cla" href="https://datahub.figment.io/" target="_blank" rel="noreferrer">here</a>.<br></br><br></br><strong>Capital</strong>- Figment Capital offers seed funding and growth support to new, highly innovative PoS projects.<hr></hr>Developers using subgraphs can easily monitor their subgraphs within DataHub. This helps developers to improve their subgraph performance and reliability.<br></br>DataHub, Figment’s Web 3 blockchain developer platform, integrates subgraph data from The Graph.<br></br>This makes it easier for developers to access more components of their Web 3 tech stack, all in one place.<br></br>You can read about Subgraph Linking on DataHub, <a className="cla" href="https://www.figment.io/resources/subgraph-linking-is-now-live-on-datahub-2" target="_blank" rel="noreferrer">here</a>.<hr></hr>Figment’s core development team integrated The Graph with the Cosmos ecosystem. This integration allowed for the indexing and querying of Cosmos ecosystem data in a completely decentralized way powered by The Graph.<br></br>You can read about Bringing The Graph to the Cosmos Ecosystem, <a className="cla" href="https://www.figment.io/resources/the-graph-and-cosmos" target="_blank" rel="noreferrer">here</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSemiotic() {
  const message = this.createChatbotMessage(<a>Semiotic Labs is building automated decision-making tools for decentralized markets on the blockchain. They believe that the convergence of AI and cryptography will propel Web3, the decentralized internet of the future.<hr></hr><strong>Deep Reinforcement Learning (RL)</strong> is a field of AI that was used in mastering games like Go and in scientific discovery.<br></br>Using Deep RL, they develop autonomous agents that can negotiate price and other terms in bilateral or auction type deals.<br></br>Agents with prosocial behaviors can be trained to improve the welfare of the decentralized network.<br></br><br></br><strong>Simulation environments</strong> are essential in training AI agents efficiently and testing their performance against benchmarks.<br></br>They develop realistic simulators to capture economics of decentralized markets and train multiple agents that participate in the network.<br></br>Simulation environments are also useful in stress testing new protocols to find weaknesses (e.g. adversarial attacks) before real world failures occur.<br></br><strong>Homomorphic Encryption</strong> makes it possible to perform computations on encrypted data.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMessari() {
  const message = this.createChatbotMessage(<a>Messari contribute it's developer talent and domain expertise to develop and maintain high-quality, accurate, complex, and standardized protocol subgraphs. All subgraphs will be open source and available for the broader community. Each subgraph will be migrated to the decentralized network. Moreover, Messari will lead subgraph working groups, provide feedback to help inform core protocol efforts, share subgraph best practices, and help create community-wide standards for any protocol.<br></br><br></br>You can learn more about Messari's role within The Graph ecosystem <a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank" rel="noreferrer">here</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphQLApi() {
  const message = this.createChatbotMessage(<a><strong>GraphQL API</strong><br></br><br></br>This <a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/" target="_blank" rel="noreferrer">guide</a> explains the GraphQL Query API that is used for the Graph Protocol.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#queries" target="_blank" rel="noreferrer">Queries</a></strong> - In your subgraph schema you define types called Entities. For each Entity type, an entity and entities field will be generated on the top-level Query type. Note that query does not need to be included at the top of the graphql query when using The Graph.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#sorting" target="_blank" rel="noreferrer">Sorting</a></strong> - When querying a collection, the orderBy parameter may be used to sort by a specific attribute. Additionally, the orderDirection can be used to specify the sort direction, asc for ascending or desc for descending.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#pagination" target="_blank" rel="noreferrer">Pagination</a></strong> - When querying a collection, the first parameter can be used to paginate from the beginning of the collection. It is worth noting that the default sort order is by ID in ascending alphanumeric order, not by creation time.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#filtering" target="_blank" rel="noreferrer">Filtering</a></strong> - You can use the where parameter in your queries to filter for different properties. You can filter on multiple values within the where parameter.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#time-travel-queries" target="_blank" rel="noreferrer">Time-travel queries</a></strong> - You can query the state of your entities not just for the latest block, which is the by default, but also for an arbitrary block in the past. The block at which a query should happen can be specified either by its block number or its block hash by including a block argument in the toplevel fields of queries.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleParticipantUpdate() {
  const message = this.createChatbotMessage(<a>The latest GRT Participant Update covers highlights from Q3 2022 of The Graph, including key stats, announcements and milestones. Watch the recording and learn about all the building and innovating happening within The Graph Ecosystem.<br></br><br></br><Embed className="embed" isDark url='https://youtu.be/58el3_9oJ6Q'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}



handleTheGuild() {
  const message = this.createChatbotMessage(<a>The Guild's advanced open source ecosystem covers everything you need for your API infrastructure with a modular, open source and complete platform.<hr></hr><strong>The Ecosystem</strong><br></br><br></br>Their advanced, modular solutions can be adopted gradually as individual open source libraries or as a complete unified API platform. Explore thier suite of sustainable, open source API tools that covers everything you need to scale your API infrastructure <a className="cla" href="https://www.the-guild.dev/#platform" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>You can learn more about The Guild <a className="cla" href="https://www.the-guild.dev/about-us" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>You can learn more about the services they provide <a className="cla" href="https://www.the-guild.dev/services" target="_blank" rel="noreferrer">here</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphOps() {
  const message = this.createChatbotMessage(<a>GraphOps are building the future of the web. Their mission is: We’re driven by the mission to build an uncensorable, equitable and self-sovereign web. Public data is at the heart of that mission, and we thrive on building open data standards & protocols to empower the next great wave of institutions and applications for our world.<br></br><br></br>GraphOps are a blockchain data infrastructure company. They extract, transform and serve blockchain data via the Graph Protocol.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphDay() {
  const message = this.createChatbotMessage(<a>Here is a recap on the most recent Graph Day that took place on 2nd June 2022 at the historic Palace of Fine Arts in San Francisco.<hr></hr>Visit <a className="cla" href="https://thegraph.com/graph-day/2022/" target="_blank" rel="noreferrer">Graph Day</a> and <a className="cla" href="https://thegraph.com/graph-hack/2022/" target="_blank" rel="noreferrer">Graph Hack</a> to learn more about the whole event.<hr></hr>The Graph community were able to join in and focuse on web3, dapps, protocols, and the future of the internet. The leading protocol and dapp developers showcased how the web3 community is pioneering brand new forms of human coordination.<br></br><br></br>Welcomed by Eva Beylin, Director of The Graph Foundation. Followed by an inspirational talk by Yaniv Tal, Co Founder of The Graph and CEO of Edge & Node. Next the community were treated to a Graph presentation about 'Why decentralization matters'. Then the exciting announcements rolled in, one after another:<br></br>Announcement of sunsetting the Hosted Service<br></br>Substream Announcement<br></br>GEO Launch Announcement<br></br>The community were then treated to a panel talk with Diana Chen, Camila Ramos, Chris Ewing and Derek Meyer. -"It takes a Village".<br></br><br></br>You can listen to the GRTiQ Podcast on the Graph Day and Graph Hack with Tegan Kline which took place just before the event, <a className="cla" href="https://www.grtiq.com/grtiq-podcast-special-release-graph-day/" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>See the future of the internet as it is unveiled live from The Graph Day 2022 Livestream below.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=yLQmdM5DWSk&list=PLTqyKgxaGF3T2Ginisuf2nUY6yDi_WbT3&index=11'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsTheWeb() {
  const message = this.createChatbotMessage(<a>The web has evolved a lot over the years, and the applications of it today are almost unrecognizable from its most early days. The evolution of the web is often partitioned into three separate stages: Web1, Web2, and Web3.<hr></hr><strong>Web1</strong><br></br>Web 1.0 was the first iteration of the web. Most participants were consumers of content, and the creators were typically developers who build websites that contained information served up mainly in text or image format. Web 1.0 lasted approximately from 1991 to 2004.<br></br>Web 1.0 consisted of sites serving static content instead of dynamic HTML. Data and content were served from a static file system rather than a database, and sites didn't have much interactivity at all.<br></br>You can think of Web 1.0 as the read-only web.<br></br><br></br><strong>Web2</strong><br></br>Most of us have primarily experienced the web in its current form, commonly referred to as web2. You can think of web2 as the interactive and social web.<br></br>In the web2 world, you don’t have to be a developer to participate in the creation process. Many apps are built in a way that easily allows anyone to be a creator.<br></br>If you want to craft a thought and share it with the world, you can. If you want to upload a video and allow millions of people to see it, interact with it, and comment on it, you can do that too.<br></br>Web2 is simple, really, and because of its simplicity more and more people around the world are becoming creators.<br></br>The web in its current form is really great in many ways, but there are some areas where we can do a lot better.<br></br><br></br><strong>Web3</strong><br></br>There are a few fundamental differences between web2 and web3, but decentralization is at its core.<br></br>In web3, developers don't usually build and deploy applications that run on a single server or that store their data in a single database (usually hosted on and managed by a single cloud provider).<br></br>Instead, web3 applications either run on blockchains, decentralized networks of many peer to peer nodes (servers), or a combination of the two that forms a cryptoeconomic protocol. These apps are often referred to as dapps (decentralized apps), and you will see that term used often in the web3 space.<br></br><br></br>To learn more about Web1, Web2 and Web3, read <a className="cla" href="https://www.freecodecamp.org/news/what-is-web3/" target="_blank">here</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoinbase() {
  const message = this.createChatbotMessage(<a>How to Delegate your GRT tokens with Coinbase Wallet<br></br><br></br>In this article it will teach you how to delegate your GRT tokens within The Graph protocol, using <a className="cla" href="https://www.coinbase.com/wallet" target="_blank">Coinbase Wallet</a>.<br></br><br></br>To read the guide made by the Graphtronauts, see <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-delegate-your-grt-tokens-with-coinbase-wallet-85168f84e95e" target="_blank">here</a>. Or if you prefer to watch a video tutorial, you will find that below.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCryptocurrencies() {
  const message = this.createChatbotMessage(<a>The name is a combination, or a portmanteau, of cryptography and currency. Unlike traditional currencies (usually referred to as “fiat currencies”), which use physical bills and coins, cryptocurrencies are entirely digital. Just like any other currency, you can use cryptocurrency to purchase goods and services, and you can transfer it between friends and family worldwide. However, cryptocurrency has a few additional features that set it apart from traditional currencies.<br></br><br></br>When you deposit fiat currency into a bank, you are essentially lending your money to that bank and trusting them to give it back to you when you ask for it. While this does generally work well for both parties, the banks profit off your money by then loaning it out to others and collecting interest on these loans. Further, banks charge additional fees, such as withdrawal fees or monthly account fees, and can also have minimum balance requirements.<br></br><br></br>A traditional bank would be considered centralised, cryptocurrency is decentralised meaning it doesn’t have a single person controlling everything – in fact, there are thousands of people that help validate all of the transactions that occur on a blockchain – and that means you have a trustless environment, improved data reconciliation, and reduced points of weakness. That’s a wordy way of saying you control your own assets.<br></br><br></br>The increased privacy, security, portability, and transparency of cryptocurrency means there is no room for manipulating transactions, changing the money supply, or adjusting the rules mid-game. Cryptocurrencies aren’t an organization, they don’t control your funds; you can be your own bank.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsABlockchain() {
  const message = this.createChatbotMessage(<a>Blockchain can be thought of as a record book that is used for tracking cryptocurrency transactions in the same way checkbook spending is tracked with a checkbook register. A blockchain is a system for recording transactions made with cryptocurrencies, such as ETH or Bitcoin. Transaction data is stored in a block of many transactions. After a block is full, a new block that references the previous block is created and chained to the previous block; hence the term blockchain.<br></br><br></br>Some blockchains, like Ethereum, are maintained using a peer-to-peer network of computers, allowing any user to host and access the blockchain from anywhere in the world. As a transaction occurs, it is recorded and distributed to each user's record book in the blockchain network.<br></br><br></br>These individual computers when used together form a global decentralized database to store all the blockchain data. Decentralized means that instead of the data being managed in one location and controlled by a single company or person, it is managed by everyone using the network.<br></br><br></br>Blockchains are designed to be immutable, meaning unchangeable. After something has been recorded to the blockchain, it can’t be changed or reversed. This means that any transactions on the blockchain are permanent, and a record of them will always be available for anyone to view. Decentralisation combined with the blockchain data structure creates a permanent timeline of events.<br></br><br></br>Some banks require you to contact them to see transactions that are older than a month in your account. Using the blockchain would eliminate the need to contact your bank because all your transactions will already be available for you to view.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSafe() {
  const message = this.createChatbotMessage(<a><strong>Is Crypto safe?</strong><br></br>The safety of cryptocurrency is a hotly debated topic. On the one hand, proponents argue that cryptocurrency is more secure than traditional currency because it is not subject to government control or manipulation. On the other hand, skeptics claim that cryptocurrency is vulnerable to hacking and theft.<br></br><br></br>Ultimately, the safety of cryptocurrency depends on the individual user’s security practices and on the security of the cryptocurrency network. For example, if you store your cryptocurrency in a digital wallet that is not password protected, then it is at risk of being hacked.<br></br><br></br>Similarly, if the network is not secure, then your cryptocurrency may be stolen by cybercriminals. Thus, it is important to do your research before investing in cryptocurrency and to use caution when storing or using it.<br></br><br></br>To learn about the benefits and drawbacks of crypto, read <a className="cla" href="https://www.abcmoney.co.uk/2022/03/16/is-cryptocurrency-safe/" target="_blank" rel="noreferrer">here</a>.<hr></hr><strong>Is Blockchain safe?</strong><br></br>Alongside cryptocurrencies that can’t be counterfeited or hacked, blockchain technologies offer incredible security in addition to their utility. The decentralised nature of blockchains and the inability to change the information within them aid blockchains in being resistant to tampering, hacking, and fraudulent transactions. With many distributed versions of the blockchain across the network, a hacker would need to gain control over countless computers to do any real damage. This makes hacking a blockchain nearly impossible.<br></br><br></br>Implementing blockchain technology to power the world allows for faster, more secure, and more transparent markets for everyone.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleEthereum() {
  const message = this.createChatbotMessage(<a>Ethereum is a programmable blockchain technology developed by Vitalik Buterin beginning in 2013. Ethereum allows users to send and receive cryptocurrencies, access and create decentralized applications known as dapps, earn rewards through staking, and much more. Free access to financial services and a more private and decentralized internet are some of the key goals of the Ethereum foundation.<br></br><br></br>After its conception, Ethereum implemented a system of decentralised governance with no one person in control. This lack of ownership makes it almost impossible for governments or organizations to deny you access to services on Ethereum. Applications on Ethereum don’t require all of your personal details to use them. This gives users more control over their privacy and keeps them safer in every transaction.<br></br><br></br>Ethereum is open to anyone, anywhere as long as they have access to an Ethereum wallet, like the Loopring Smart Wallet. You can think of an Ethereum wallet as a banking app, without a bank that controls your funds. With only an internet connection, Ethereum is available for everyone to use, supplying access to banking services worldwide.<br></br><br></br>The peer-to-peer network of Ethereum eliminates the need for a middle man and allows users to interact directly with each other for payments, and other agreements. Thanks to smart contracts, users have a built-in guarantee that deals will go through only if both sides provide what was agreed on.<br></br><br></br>All transactions on the Ethereum blockchain are powered by the native cryptocurrency ether, or ETH. Whenever ETH is sent or a dapp is used, users pay a small fee in ETH for using the Ethereum network. These fees are used to help reward miners for verifying actions on the blockchain. Miners act as record-keepers making sure that no one is cheating or manipulating the blockchain, and keeping it secure. This is known as proof of work. The future of Ethereum brings a new method of securing the blockchain in which funds are committed, or staked, to allow users to act as record-keepers for the blockchain. This is known as proof of stake.<br></br><br></br>To learn more about Ethereum, read <a className="cla" href="https://desk.zoho.com/portal/loopring/en/kb/articles/what-is-ethereum" target="_blank" rel="noreferrer">here</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOW() {
  const message = this.createChatbotMessage(<a>Proof of Work (PoW) is a consensus algorithm for most major cryptocurrencies; it is one way to secure a cryptocurrency’s ledger. PoW was introduced by Satoshi Nakamoto for the Bitcoin blockchain making it the first consensus algorithm, and it remains the dominant one to date.<br></br><br></br>It wasn’t the first time we’ve heard of PoW though, Adam Back’s Hashcash app was invented in 1997 and used a proof-of-work function. One of the great benefits of this system is it prevents double-spending. This term is used almost exclusively for digital money and cryptocurrency because you can’t spend the same physical cash twice, that is; if you went to a store and paid cash for a drink you couldn’t use that same cash at a different store because the first store locked the money up in the cash register.<br></br><br></br>In cryptocurrency or any digital money, it's possible to send lots of data around rapidly and without validation, you’d have people that could spend fast enough to trick multiple stores into believing they got paid and the ledger would be ruined quickly. On a small scale, this might work, but when 10s and 100s of thousands of people are trading on a blockchain it gets messy fast.<br></br><br></br>It would be tiresome and inefficient to add all the transactions one at a time with so many people wanting to trade, so these transactions get lumped into a block that links to the previous and references it – thus the name Blockchain. Adding to a block isn’t free though, there are users called miners that help validate each block of transactions. This costs computing power, and real-world energy, to create a hash (think digital fingerprint) that is virtually impossible to reverse.<br></br><br></br>Because of the high computing power, miners are paid a fee for their services, and the blocks are submitted to the chain. With the power of the cryptography in PoW, if you try to make an invalid transaction it will be automatically rejected by the network and you’ll still pay the miner fee. That is the beauty of it: it becomes expensive to attempt invalid transactions but is profitable to act honestly.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOS() {
  const message = this.createChatbotMessage(<a>Much like Proof of Work, Proof of Stake (PoS) is a consensus algorithm that is based on the number of coins being staked. Staking refers to committing funds to the system in order to be a block validator; validators can only participate in the process of producing new blocks if their coins are locked. The funds then act as collateral, meaning a malicious validator would lose their staked funds and lose access to the network.<br></br><br></br>PoS is an alternative to PoW that comes with certain advantages and disadvantages. In Proof of Work only the miner is rewarded and everyone is competing to be the one that submits the valid block, thus wasting a lot of energy. The Proof of Stake model achieves consensus by considering staking size and how long they’ve been staked, then selecting the validator which saves considerable amounts of energy and time.<br></br><br></br><table><tr className="indexer-table-header">
  <th><strong>Pros</strong></th>
  <th><strong>Cons</strong></th>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Efficiency: There is very little energy used to secure a blockchain.</td>
  <td>Scale: There has yet to be a PoS system to reach the size of Ethereum or Bitcoin.</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Throughput: You don’t have complex computer problems to solve, so transaction speeds are increased.</td>
  <td>Less Secure: Participating in a PoS system can incentivize hoarding coins to have a 51% attack. In large enough blockchains, this becomes much less likely.</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Lower Entry Level: You only ever need to spend money once to participate in a Proof of Stake model. A PoW system requires hardware equipment and continuous uptime.</td>
  <td>Centralisation: There is an incentive to hold more tokens for staking. Some blockchains have started punishing this and incentivising smaller validators.</td>
</tr>
</table></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoinOrToken() {
  const message = this.createChatbotMessage(<a><strong>Coin</strong><br></br>In cryptocurrency, the term ‘coin’ is used when describing a currency that is native to its own blockchain (e.g., Ether for the Ethereum blockchain, Bitcoin for the Bitcoin blockchain, etc…). A coin is a digital currency that may be used in a variety of ways:<br></br>As a form of payment (e.g., transferring ETH to another for an item or service), Store of value (e.g., some view Bitcoin as a ‘safe haven’ for one’s wealth), Unit of account (e.g., items such as NFTs may be priced in ETH) and for blockchains that use proof-of-work, the native coin is also used to pay the miners for processing transactions and producing blocks.<br></br><br></br><strong>Token</strong><br></br>While a coin is native to its own blockchain, a token is created on an existing blockchain. Each blockchain has its own format for tokens. For example, tokens created on the Ethereum blockchain have a prefix of ERC followed by a number (e.g., ERC-20). Technically, anyone can create a token, so researching and reading through the tokenomics is always recommended before purchasing.<br></br>A token may be fungible (interchangeable) or non-fungible depending on the standard it uses. On Ethereum, some examples of token standards are:<br></br><br></br>ERC-20<br></br>Standard commonly used for fungible tokens, ones used for digital currencies, staking, and voting.<br></br><br></br>ERC-721<br></br>Standard used for non-fungible tokens, like an NFT for artwork or a song.<br></br><br></br>ERC-1155<br></br>Standard that allows for more efficient trades and bundling of transactions. It can represent and control any number of fungible and non-fungible token types. Meaning, the ERC-1155 token can perform the same role as an ERC-20 and ERC-721 token, and even both at the same time.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStablecoin() {
  const message = this.createChatbotMessage(<a>A stablecoin is a cryptocurrency that is designed to maintain a consistent market price. While the exact mechanisms may vary from one to another, stablecoins are somewhat resistant to market volatility. They shouldn’t experience significant price changes as their values are often pegged to another asset like the US Dollar.<br></br><br></br>The main idea of using a stablecoin is that you gain the benefits of both fiat and cryptocurrency worlds. You can hedge against the volatile nature of crypto markets and loan out your stablecoins to earn interest better than you would with a bank or broker.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCEX() {
  const message = this.createChatbotMessage(<a>A centralised exchange (CEX) is a way to facilitate trades between users by maintaining an order book; a collection of buy and sell orders that are placed by individual investors. The orders are to buy or sell a certain amount of crypto at a specific price – a CEX will aggregate these orders and execute the orders.<br></br><br></br>A big difference between a CEX and personal wallets or a DEX is that users do not actually exchange crypto or fiat with each other. The funds are deposited and the exchange takes over custody of the assets and basically issues an IOU to the trader. There are upsides to this like lower fees and simpler swapping, but there are downsides like a shortage of transparency that enables malicious practices like wash trading and price manipulation.<br></br><br></br>Since all funds are held in custody by the exchange, CEXs are a prime target for potential hacks and they have been hit several times in the past few years for hundreds of millions of dollars. Additionally, because a CEX is hosted somewhere it’s possible to have technical issues or attacks that can lead to downtime. Funds can also be frozen and seized because of government regulations in some cases.<br></br><br></br>While a CEX will require Know Your Customer (KYC) to be conducted, it’s also useful for tax purposes to have this information readily available and most exchanges can easily provide tax documents for you. Having a CEX take custody of your funds has advantages if you’re not comfortable controlling them yourself. Some users have stored funds in their personal wallets and forgotten seed phrases or lost their private keys, losing millions of dollars worth of crypto.<br></br><br></br>Some examples of popular CEXs include Binance, Coinbase, FTX, Huobi, and Kucoin.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDEX() {
  const message = this.createChatbotMessage(<a>A decentralized exchange is a peer-to-peer marketplace where transactions go directly between traders. This is core to crypto’s values of being decentralised – no transactions are fostered by officiated banks, brokers, or any other intermediary. There are a few popular DEXs like Uniswap and Sushiwap that run on Ethereum L1.<br></br><br></br>The biggest difference between a centralised exchange (CEX) and a DEX is that a CEX will allow exchanges between fiat and crypto whereas a DEX cannot. A CEX will allow for margin trades and setting limit orders that are handled by the order book – this is similar to stock exchanges like Nasdaq.<br></br><br></br>A DEX is built entirely on smart contracts. They establish prices of cryptocurrencies algorithmically and use liquidity pools (LP) to facilitate trades that are settled directly on the blockchain. A DEX is normally built on open-source code, meaning there isn’t anything being hidden about how it functions.<br></br><br></br>You’ll find more variety on a DEX, DeFi is the place to be for getting in on early token LPs. This ranges from well-known tokens to random and sometimes useless ones, be sure to do your own research when investing. That said, the risk of hacking is drastically reduced because the funds on a DEX are stored in personal wallets and not a central store; there have been several hacks on CEX’s over the years.<br></br><br></br>A CEX will require KYC (Know Your Customer) to identify you, a DEX will not require any personally identifiable information so you remain anonymous. Additionally, while some locations will be restricted from allowing crypto purchases, a DEX opens up the possibility to the people in these regions.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLayerTwo() {
  const message = this.createChatbotMessage(<a>Layer 2 (L2) refers to a secondary framework or protocol that is built on top of an existing blockchain. The main goal of a L2 protocol is to help solve the transaction speed and scaling difficulties of major cryptocurrency networks, for Ethereum we call this the Ethereum Scaling Trilemma – Scaling, Speed, and Decentralisation.<br></br><br></br>Ethereum currently processes ~13 transactions per second, whereas credit card companies like MasterCard and Visa process over 1700 tps and charge a small fee. If you’re familiar with Square or similar services for small businesses, you would never imagine using just Ethereum to transact. Imagine trying to pay and waiting 20-30 minutes to validate the payment, not to mention you pay a gas fee for that validation; that’s where L2 steps in and there are a few ways to do it.<br></br><br></br>It’s faster, cheaper, and just as secure as Ethereum. So why doesn’t everyone do it? Well, Optimistic Rollups suffer from longer finality/withdrawal times, typically holding funds for 7 days. Validium and Plasma are off-chain and thus lack the true security of Ethereum. zkRollups are the best of all worlds in that they are fast and secure on-chain, but the technology required to develop them is very challenging.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKProof() {
  const message = this.createChatbotMessage(<a>A zero-knowledge proof (zkProof) is being able to prove something to someone without conveying any additional information except for the fact that it's true. You don’t need to prove that you possess the knowledge of certain information by simply revealing it; the challenge is to prove possession of the knowledge without revealing the information itself.<hr></hr><strong>Applications</strong><br></br><br></br><strong>Finance:</strong> You can use zkProofs to allow customers to prove their secret number lies in a known range. As an example, a loan applicant can prove their income is in a qualifying range without giving away their exact salary.<br></br><br></br><strong>Online Voting:</strong>A zkProof would allow you to vote anonymously and verify your vote was included in the final tally.<br></br><br></br><strong>Authentication:</strong>You could sign into sites without exchanging secret information like a password.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?time_continue=18&v=fOGdb1CTu5c&feature=emb_logo'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSmartContract() {
  const message = this.createChatbotMessage(<a>A “smart contract” is simply a program that runs on the Ethereum blockchain. It is a collection of code and data that resides at a specific address on the blockchain; it is a type of Ethereum account. They can hold a balance and can send transactions over the network, but they are not controlled by a user. They are programmed to do exactly what they are told, defining rules and automatically enforcing them based on their code.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNFT() {
  const message = this.createChatbotMessage(<a>Introduced by Dieter Shirley in September 2017 and finalised in June 2018, the ERC-721 was designed for Non-Fungible Tokens. They are unique, no one token is exactly the same and they are assigned a uint256 variable called tokenId that must be unique. This could represent almost anything in the world that is unique that needs provable ownership:<br></br><br></br>Digital art (GIFs, Collectibles, Music, Videos)<br></br>A domain name<br></br>Deeds to a car<br></br>Tickets to a real-world event<br></br>Tokenized invoices<br></br>Legal documents<br></br>Medical records<br></br>Signatures<br></br><br></br>NFTs have special properties:<br></br><br></br>Each token minted has a unique identifier that is directly linked to one Ethereum address.<br></br>They're not directly interchangeable with other tokens 1:1. For example, 1 ETH is exactly the same as another ETH. This isn't the case with NFTs.<br></br>Each token has an owner and this information is easily verifiable.<br></br>They live on Ethereum and can be bought and sold on an Ethereum-based NFT market.<br></br><br></br>That means if you own an NFT:<br></br><br></br>You can prove you own it.<br></br>The token proves that your copy is the original.<br></br>Your private key is proof of ownership.<br></br>No one can manipulate it in any way.<br></br>You can sell it or hold it forever.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMining() {
  const message = this.createChatbotMessage(<a>Cryptocurrency mining refers to the process of verifying and validating blockchain transactions. Miners solve intense cryptographical equations and submit new blocks to the blockchain with this data. Honest and successful miners are rewarded a mining fee, this fee is referred to as a gas fee in Ethereum.<br></br><br></br>As new blockchain transactions are made, they get sent to a memory pool (mempool). The miner verifies the validity of the pending transactions and organizes them into blocks. This is similar to people submitting transactions orally to you and you write them all down on a piece of paper in order – the piece of paper in this metaphor is a block. This block needs to be confirmed; this requires complex mathematical problem solving and takes a lot of computational resources. Once successful, the block is submitted to the chain and the miner receives rewards.<br></br><br></br>To learn more about how mining works, see <a className="cla" href="https://desk.zoho.com/portal/loopring/en/kb/articles/what-is-crypto-mining" target="_blank" rel="noreferrer">here</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNodes() {
  const message = this.createChatbotMessage(<a>Nodes are a piece of client software. There are 3 different types of nodes and they each consume data differently. Additionally, there are different sync strategies that enable faster synchronization time; synchronization is how fast you can get accurate information on Ethereum’s state.<br></br><br></br><strong>Full Node</strong><br></br><br></br>Stores full blockchain data.<br></br>Verifies all blocks and all states while participating in block validation.<br></br>All states can be derived from a full node.<br></br>Serves the network and provides data on request.<br></br><br></br><strong>Light Node</strong><br></br><br></br>Unlike a full node, light nodes only download block headers. These contain just a summary of information about the contents of the blocks. If there is additional required information, a light node can request it from a full node. This allows the light node to verify the data they receive against a state root in the block headers.<br></br>Light nodes are useful because you don’t need powerful hardware or high bandwidth to run them like a full node.<br></br><br></br><strong>Archive Node</strong><br></br><br></br>All information stored in a full node is archived into historical states in an archive node. If you wanted to query information from a random block like block #222,222 you would use this node. The data is obviously massive. Terabytes of data in an archive node can be less attractive for the average user but useful for services such as block explorers, chain analytics, and wallet vendors.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTokenBurn() {
  const message = this.createChatbotMessage(<a>Token burning means destroying a coin or token permanently, but why would you do this? Blockchain technology gives power to the users, you can be self-custodial – complete ownership of your assets. You don’t need a bank or financial institution, transactions aren’t limited by third parties, and in most cases, the supply is limited with the power to be deflationary because you can destroy tokens.<br></br><br></br>Burning a token specifically means you are sending a token to a frozen address, called the burn address, which cannot be recovered. A burn address will have no private key, there is a public address to send to but no keys to unlock the wallet. It is the equivalent of placing your physical money in an uncrackable safe of which no one has the passcode to unlock.<br></br><br></br>The value of a token is based on supply and demand. Usually, the higher the demand the higher the value. Likewise, if the supply is smaller the value is also higher. So when there is a fixed supply of a token there is an impact to destroying some of that supply. This can be used for a number of reasons like increasing token value or producing value stability.<br></br><br></br><strong>Increase Project Value</strong><br></br>Corporate buybacks are commonplace in today's growing financial world; companies buy back some of their own stocks and shares from the market to help increase the value of the remaining supply. A similar event happened in 2021 when Ethereum bought back and then proceeded to burn 1.3 million ETH that was in circulation. The goal is to make ETH deflationary as part of a new protocol – to ensure that Ethereum tokens can be an effective store of value and increase in value over time by reducing the supply.<br></br><br></br><strong>Stabilize Value</strong><br></br>Stablecoins are essential to crypto and DeFi as a whole. Within the ecosystem, they provide a medium for both settlement and holding, insulated from the volatility of regular coins and tokens. The compromise here is using a central reserve where you lose out on decentralisation. Algorithmic stablecoins attempt to overcome this issue by controlling the supply.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDAO() {
  const message = this.createChatbotMessage(<a><strong>Using The Graph to Power DAOs</strong> - Read the Snapshot Case Study, <a className="cla" href="https://thegraph.com/blog/using-the-graph-for-daos-snapshot/" target="_blank" rel="noreferrer">here</a>.<hr></hr>This acronym stands for Decentralised Autonomous Organization. It exists as a system of predefined rules that determine which actions an organisation will take. This is different from conventional companies and is instead based on open source code and operated entirely by the community. This means that there is no single entity in charge, no directory board, and thus no centralisation of power.<br></br><br></br>The rules are built as smart contracts that govern the collective work of its contributors and community members. So while the concept of a decentralised organisation isn’t particularly new, being able to automate its working mechanisms and functions of it makes a DAO such an interesting concept.<br></br><br></br>Many communities use DAOs for automated fundraising campaigns like an ICO (Initial Coin Offering), the issuance and dispersal of fees collected on a protocol, or as decision-making and voting systems. Additionally, all of this is done without human interaction to ensure a trusted and secure process.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKSnark() {
  const message = this.createChatbotMessage(<a>A zero-knowledge Succinct Non-interactive Argument of Knowledge - <strong>zkSNARK</strong><br></br><br></br>Let’s break it down:<br></br><br></br>Zero-knowledge - We’ve reviewed this in other articles but the short version is proving something without letting someone else know how you proved it, just that it is provable.<br></br>Succinct - Brief and clear; the proof is significantly smaller than the data it represents.<br></br>Non-interactive - Information goes from the prover to the verifier, there is no back and forth.<br></br>Argument of Knowledge - The proof is sound, there is no malicious prover to cheat the system without possessing the knowledge to support its statement.<br></br><br></br>A SNARK requires a trusted setup between prover and verifier. This is a set of public parameters that resemble the rules of a game. These parameters are generated during a trusted setup ceremony. This is a joint computation performed at a set time by a group of volunteering participants. As long as one verifier behaves honestly, the parameters are securely generated so the more parties that participate the more trusted this ceremony can be considered. This ceremony needs to be conducted for every new version of the product.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKStark() {
  const message = this.createChatbotMessage(<a>A zero-knowledge Scalable Transparent Argument of Knowledge - <strong>zkSTARK</strong><br></br><br></br>Let’s explain:<br></br><br></br>Scalable - The proof is relatively small in size and the verification takes less time even for large amounts of proofs, it is thus scalable.<br></br>Transparent - There are no requirements for a reliable configuration.<br></br>Argument of Knowledge - The proof is sound, there is no malicious prover to cheat the system without possessing the knowledge to support its statement.<br></br><br></br>zkSTARKs were created by Eli-Ben Sasson, a professor at the Technion-Israel Institute of Technology. The big difference maker here is that a zkSTARK doesn’t require an initial trusted setup - the ceremony discussed in the SNARK section. A STARKs is less computationally expensive than a SNARK and theoretically are quantum computers. So what’s the drawback? The size of proofs is much larger than a SNARK and that can drive up the cost for on-chain transactions.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMetaverse() {
  const message = this.createChatbotMessage(<a>The first use of the word is in a 1992 science fanfiction novel called Snow Crash; it is a combination of the words meta and universe. The metaverse is often linked to advanced virtual reality technology due to increasing demands for immersion. While the metaverse isn’t a gaming concept, it has grown the most in that space. A game called Second Life is often described as the first metaverse and the novel Ready Player One (later a movie) continued to grow the possibilities.<br></br><br></br>Ideally, a true Metaverse won’t support just gaming or social media, it will combine economies, digital identity, decentralized governance, and other applications. Think of how Roblox isn’t just custom games, it functions for virtual events like concerts and meetups. The game isn’t just for playing, it’s for hanging out in a virtual space.<br></br><br></br>Crypto fits into the metaverse by providing immutability and proof of ownership. Think about how NFTs would work in this instance; digital clothes, accessories, etc… would all be securely and quickly verifiable, all in a decentralized environment. In-game currencies could flourish, and a user would be able to earn money and spend it there. With wallets, the metaverse is highly accessible and with blockchain in place, we would have reliable governance much the same way we vote in real life for leadership.<br></br><br></br>A single, unified metaverse is likely a good bit away but there are many developments in the right direction for this and blockchain will lead the way.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleArbitrum() {
  const message = this.createChatbotMessage(<a>Arbitrum is a scaling solution for Ethereum that drastically reduces costs and latency. Arbitrum has launched Arbitrum One on the Ethereum mainnet, and the team is getting ready for its upcoming release to the public.<br></br><br></br>Thanks to the integration with Arbitrum, The Graph’s hosting indexing and querying services are now live on the network. Developers on Arbitrum One will now be able to build and publish open APIs (subgraphs) that applications can query using GraphQL.<br></br><br></br>The Graph already supports indexing data for Ethereum, IPFS, Celo, Avalanche, Fantom, and Moonbeam. In addition, thousands of developers have already built over 10,000 subgraphs for applications like DODO, MCDEX, Uniswap, Synthetic, Gnosis, Decentraland, etc. By adding Arbitrum to that list, The Graph’s expansion efforts have taken another step in uniting the Web3 ecosystem.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStatistics() {
  const message = this.createChatbotMessage(<a>If you are looking for the live data / statistics. Then please be more specific. Here is a list of what you can ask me about:<br></br><br></br>Active Delegator Count<br></br>Active Delegation Count<br></br>Holders Count<br></br>Subgraphs Count<br></br>Curators Count<br></br>Active Indexers Count<br></br>Total Query Fees Count<br></br>Total Staked GRT<br></br>Total GRT Delegated by Delegators<br></br>Total GRT Signalled by Curators<br></br>Total Delegated GRT by Indexers<br></br>Total GRT Burned</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTMobile() {
  const message = this.createChatbotMessage(<a><strong>Deutsche Telekom and T‑Mobile US Launch New T Challenge Seeking Web3 Development Through 5G</strong><br></br><br></br>The global competition for startups, developers and researchers awarding innovative solutions using 5G networks is back, this time in search of Web3 technologies to change the way the world uses the internet.<br></br><br></br>BONN, Germany and BELLEVUE, Wash. — November 2, 2022 — Deutsche Telekom AG and T-Mobile US, Inc. (NASDAQ: TMUS) have teamed up to launch the third annual T Challenge, the global stage for innovators and disruptors to compete for an award on the best Public Blockchain Protocol solutions for Web3. The solutions created by participants will leverage the power of 5G to bring Web3 to life, with 5G playing a significant role in how users stay connected to these innovations.<br></br><br></br>Submissions are officially open now through Jan. 20, 2023. Six winners will split 600,000 euros (roughly the same in U.S. dollars) and an all-expenses paid trip to Bonn, Germany to present their ideas to Deutsche Telekom and T-Mobile US.<br></br><br></br>To read the full article that mentions The Graph, see <a className="cla" href="https://www.t-mobile.com/news/network/2023-t-challenge" target="_blank" rel="noreferrer">here</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSolana() {
  this.handleSubstreams = this.handleSubstreams.bind(this);
  const message = this.createChatbotMessage(<a><strong>The Graph Now Supports Solana with Substreams</strong><br></br><br></br>The Graph Foundation is excited to announce support for Solana with <a className="cla" onClick={this.handleSubstreams}><strong>Substreams</strong></a>. The Solana developer community can now begin using The Graph to build lightning-fast dapps. By using the new substreams technology, developers can efficiently extract and interpret on-chain data from Solana’s mainnet-beta to feed their applications. Providing support with substreams is the first step in bringing subgraphs to Solana.<br></br><br></br>Substreams, which are fully open-source, empower Solana developers to build with on-chain data in brand new ways, thanks to their speed and efficiency. Developers can use substreams modules, coded in Rust, to build protocol-specific data streams or market-wide analytical datasets. They can also be used to power real-time notifications, and display long, time-series information. Breaking out of walled gardens, substreams devs can leverage streams created by others to save time, and can empower the whole web3 ecosystem by making their work openly available and composable. As a result, substreams give rise to new and innovative use cases throughout the Solana developer community.<br></br><br></br>Developed by StreamingFast, a core developer in The Graph ecosystem, substreams allow for extremely fast historical processing (in batch and in streaming). Substreams open the door to many benefits, including: feeding any data systems through technology-specific sinks, reusing your Solana program’s Rust code to read on-chain data, a laser-focused debugging experience, communal and composable refinement of data streams, and reliable reorg-aware streams.<br></br><br></br>A true industry-shifting technology, substreams are poised to unlock subgraph performance with parallel data processing to greatly increase syncing speeds. Through a horizontally scalable parallel engine, substreams are capable of multiplying historical indexing performance by more than 100x.<br></br><br></br>Read the full blog, <a className="cla" href="https://thegraph.com/blog/indexing-solana-substreams/" target="_blank" rel="noreferrer">here</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleBirthday() {
  this.handleButtonAmsterdam = this.handleButtonAmsterdam.bind(this);
  this.handleButtonBuenosAires = this.handleButtonBuenosAires.bind(this);
  this.handleButtonDubai = this.handleButtonDubai.bind(this);
  this.handleButtonLagos = this.handleButtonLagos.bind(this);
  this.handleButtonSanFrancisco = this.handleButtonSanFrancisco .bind(this);
  this.handleButtonSingapore = this.handleButtonSingapore .bind(this);
    const message = this.createChatbotMessage(<a><strong>The Graph turned 2 on December 17th 2022!</strong><br></br><br></br>Many people from all over the globe helped to celebrate The Graph Network's launch on mainnet and commitment to decentralization by attending one of the following six community-led birthday events. The <strong>FOMO</strong> was real! You can listen to the Twitter Space, <a className="cla" href="https://twitter.com/i/spaces/1vOGwMQpzPgxB" target="_blank" rel="noreferrer">here</a>. If you missed it, dont worry, you can catch up by clicking the buttons below.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button><br></br><br></br>As more content is shared these will be updated.</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleButtonAmsterdam() {
    this.handleButtonBuenosAires = this.handleButtonBuenosAires.bind(this);
    this.handleButtonDubai = this.handleButtonDubai.bind(this);
    this.handleButtonLagos = this.handleButtonLagos.bind(this);
    this.handleButtonSanFrancisco = this.handleButtonSanFrancisco .bind(this);
    this.handleButtonSingapore = this.handleButtonSingapore .bind(this);
      const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/colsongrteacher?s=21&t=G1z0E5ndRT5F549tsuRY2A' target="_blank" rel="noreferrer"><strong>Colson</strong></a> hosted The Graph, 2 Year Birthday Celebration at Amstel Boathouse in Amsterdam.<br></br><br></br>Waiting for content from the event to be released...<br></br><br></br>You can also check out the other events below.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
        ,
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }

    handleButtonBuenosAires() {
      this.handleButtonAmsterdam = this.handleButtonAmsterdam.bind(this);
      this.handleButtonDubai = this.handleButtonDubai.bind(this);
      this.handleButtonLagos = this.handleButtonLagos.bind(this);
      this.handleButtonSanFrancisco = this.handleButtonSanFrancisco .bind(this);
      this.handleButtonSingapore = this.handleButtonSingapore .bind(this);
        const message = this.createChatbotMessage(<a>The Graph, 2 Year Birthday Celebration at Area3 El Salvador in Buenos Aires.<br></br><br></br>You can catch up on the event via this Twitter feed made by The Graph Espanol, <a className="cla" href='https://twitter.com/espanolgraph/status/1604257219628916736?s=46&t=MuGXfy1qv8hl2x-HpLcfAg' target="_blank" rel="noreferrer">here</a>.<br></br><br></br>You can also check out the other events below.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
          ,
        );
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }

      handleButtonDubai() {
        this.handleButtonAmsterdam = this.handleButtonAmsterdam.bind(this);
        this.handleButtonBuenosAires = this.handleButtonBuenosAires.bind(this);
        this.handleButtonLagos = this.handleButtonLagos.bind(this);
        this.handleButtonSanFrancisco = this.handleButtonSanFrancisco .bind(this);
        this.handleButtonSingapore = this.handleButtonSingapore .bind(this);
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/Mardeni01' target="_blank" rel="noreferrer">Ahmad Mardeni</a> hosted The Graph, 2 Year Birthday Celebration at OPM Room in Dubai.<br></br><br></br>You can catch up on the event via his Twitter feed, <a className="cla" href='https://twitter.com/mardeni01/status/1604127593007120384?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">here</a> and <a className="cla" href='https://twitter.com/mardeni01/status/1604205523619946498?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">here</a>.<br></br><br></br>You can also check out the other events below.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
            ,
          );
          this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
          }));
        }

      handleButtonLagos() {
        this.handleButtonAmsterdam = this.handleButtonAmsterdam.bind(this);
        this.handleButtonBuenosAires = this.handleButtonBuenosAires.bind(this);
        this.handleButtonDubai = this.handleButtonDubai.bind(this);
        this.handleButtonSanFrancisco = this.handleButtonSanFrancisco .bind(this);
        this.handleButtonSingapore = this.handleButtonSingapore .bind(this);
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/thegraphnations?s=21&t=2oybVC4qbnXUtBbgmnvSqw' target="_blank" rel="noreferrer">TheGraphNation</a> hosted The Graph, 2 Year Birthday Celebration at The Lekki Coliseum (TLC) in Lagos.<br></br><br></br>You can catch up on the event via their Twitter feed, <a className="cla" href='https://twitter.com/thegraphnations/status/1603831459629891585?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">here</a>.<br></br><br></br>You can also check out the other events below.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
            ,
          );
          this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
          }));
        }

        handleButtonSanFrancisco() {
          this.handleButtonAmsterdam = this.handleButtonAmsterdam.bind(this);
          this.handleButtonBuenosAires = this.handleButtonBuenosAires.bind(this);
          this.handleButtonDubai = this.handleButtonDubai.bind(this);
          this.handleButtonLagos = this.handleButtonLagos.bind(this);
          this.handleButtonSingapore = this.handleButtonSingapore .bind(this);
            const message = this.createChatbotMessage(<a>The Graph, 2 Year Birthday Celebration at Edge & Node House of Web3 in San Francisco.<br></br><br></br>You can catch up on the event via their Twitter <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603952216540213248?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">here</a> and <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603990278322507780?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">here</a>.<br></br><br></br>You can also check out the other events below.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
              ,
            );
            this.setState((prev) => ({
              ...prev,
              messages: [...prev.messages, message],
            }));
          }

          handleButtonSingapore() {
            this.handleButtonAmsterdam = this.handleButtonAmsterdam.bind(this);
            this.handleButtonBuenosAires = this.handleButtonBuenosAires.bind(this);
            this.handleButtonDubai = this.handleButtonDubai.bind(this);
            this.handleButtonLagos = this.handleButtonLagos.bind(this);
            this.handleButtonSanFrancisco = this.handleButtonSanFrancisco .bind(this);
              const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/impranavm_?s=21&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">Pranav Maheshwari</a> hosted The Graph, 2 Year Birthday Celebration in Singapore.<br></br><br></br>You can catch up on the event via his Twitter feed, <a className="cla" href='https://twitter.com/impranavm_/status/1604024407789182976?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">here</a> and <a className="cla" href='https://twitter.com/impranavm_/status/1603991615009304576?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">here</a>.<br></br><br></br>You can also check out the other events below.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button></a>
                ,
              );
              this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
              }));
            }

  handleNews() {
    const message = this.createChatbotMessage(<a>If you are wanting to keep up with the latest news about The Graph, new partnership announcements and read about what is going on within the community, then the links below can help with that.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">The Graph Blog</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a><hr></hr>Make sure you also follow The Graph on <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">Twitter</a>.</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

handleHello() {
  const message = this.createChatbotMessage(<a>Hello, how can I help you today?</a>
  ,
  );

  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// help start

handleHelp() {
  this.handleButtonTheGraph = this.handleButtonTheGraph.bind(this);
  this.handleButtonDelegator = this.handleButtonDelegator.bind(this);
  this.handleButtonCurator = this.handleButtonCurator.bind(this);
  this.handleButtonIndexer = this.handleButtonIndexer.bind(this);
  this.handleButtonSubgraph = this.handleButtonSubgraph.bind(this);
  this.handleButtonStatistics = this.handleButtonStatistics.bind(this);
  this.handleButtonCommunity = this.handleButtonCommunity.bind(this);
  this.handleButtonLearnWeb3 = this.handleButtonLearnWeb3.bind(this);
  this.handleButtonCoreDevs = this.handleButtonCoreDevs.bind(this);
  this.handleButtonNews = this.handleButtonNews.bind(this);
  const message = this.createChatbotMessage(<a>You can also use the buttons below and scroll down to you find an answer!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegator</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Curator</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Indexer</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Core Devs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgraph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Live Statistics</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Community</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>News</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Learn Web3</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonMenu() {
  this.handleButtonTheGraph = this.handleButtonTheGraph.bind(this);
  this.handleButtonDelegator = this.handleButtonDelegator.bind(this);
  this.handleButtonCurator = this.handleButtonCurator.bind(this);
  this.handleButtonIndexer = this.handleButtonIndexer.bind(this);
  this.handleButtonSubgraph = this.handleButtonSubgraph.bind(this);
  this.handleButtonStatistics = this.handleButtonStatistics.bind(this);
  this.handleButtonCommunity = this.handleButtonCommunity.bind(this);
  this.handleButtonCoreDevs = this.handleButtonCoreDevs.bind(this);
  this.handleButtonLearnWeb3 = this.handleButtonLearnWeb3.bind(this);
  this.handleButtonNews = this.handleButtonNews.bind(this);
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegator</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Curator</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Indexer</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Core Devs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgraph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Live Statistics</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Community</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>News</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Learn Web3</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonTheGraph() {
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  this.handleButtonTheGraph = this.handleButtonTheGraph.bind(this);
  this.handleTheGraphCouncil = this.handleTheGraphCouncil.bind(this);
  this.handleBirthday = this.handleBirthday.bind(this);
  this.handleButtonCoreDevs = this.handleButtonCoreDevs.bind(this);
  this.handleFoundingMembers = this.handleFoundingMembers.bind(this);
  this.handleGraphDay = this.handleGraphDay.bind(this);
  this.handleGeo = this.handleGeo.bind(this);
  this.handleGitHub = this.handleGitHub.bind(this);
  this.handleGraphFunding = this.handleGraphFunding .bind(this);
  this.handleGraphQLApi = this.handleGraphQLApi .bind(this);
  this.handleHostedService = this.handleHostedService .bind(this);
  this.handleSunsettingHostedService = this.handleSunsettingHostedService.bind(this);
  this.handleJob = this.handleJob.bind(this);
  this.handleParticipantUpdate = this.handleParticipantUpdate.bind(this);
  this.handleRoadMap = this.handleRoadMap.bind(this);
  this.handleRoles = this.handleRoles.bind(this);
  this.handleDecentralisedData = this.handleDecentralisedData.bind(this);
  this.handleGRTTokenAddress = this.handleGRTTokenAddress.bind(this);
  this.handleMIPS = this.handleMIPS.bind(this);
  this.handlePowerDAOS = this.handlePowerDAOS.bind(this);

  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleTheGraphCouncil();
    this.handleButtonTheGraph();
  }}><strong>Council</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCoreDevs();
  }}><strong>Core Devs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFoundingMembers();
    this.handleButtonTheGraph();
  }}><strong>Founding Members</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHostedService();
    this.handleButtonTheGraph();
  }}><strong>Hosted Service</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonTheGraph();
  }}><strong>Sunsetting Hosted Service</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonTheGraph();
  }}><strong>Decentralised Data</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoadMap();
    this.handleButtonTheGraph();
  }}><strong>Roadmap</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoles();
    this.handleButtonTheGraph();
  }}><strong>Ecosystem Roles</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMIPS();
    this.handleButtonTheGraph();
  }}><strong>MIPs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleJob();
    this.handleButtonTheGraph();
  }}><strong>Jobs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBirthday();
    this.handleButtonTheGraph();
  }}><strong>Birthday</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphDay();
    this.handleButtonTheGraph();
  }}><strong>Graph Day</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleParticipantUpdate();
    this.handleButtonTheGraph();
  }}><strong>Participant Update</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGeo();
    this.handleButtonTheGraph();
  }}><strong>Geo</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonTheGraph();
  }}><strong>GitHub</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphFunding();
    this.handleButtonTheGraph();
  }}><strong>Funding</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleGraphQLApi();
    this.handleButtonTheGraph();
  }}><strong>GraphQL API</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleGRTTokenAddress();
    this.handleButtonTheGraph();
  }}><strong>GRT Token Address</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handlePowerDAOS();
    this.handleButtonTheGraph();
  }}><strong>Snapshot</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Catagories Menu</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonCoreDevsChat() {
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  this.handleButtonCoreDevsChat = this.handleButtonCoreDevsChat.bind(this);
  this.handleEdgeAndNode = this.handleEdgeAndNode.bind(this);
  this.handleFoundingMembers = this.handleFoundingMembers.bind(this);
  this.handleGraphOps = this.handleGraphOps.bind(this);
  this.handleMessari = this.handleMessari.bind(this);
  this.handleSemiotic = this.handleSemiotic.bind(this);
  this.handleTheGuild = this.handleTheGuild.bind(this);
  this.handleFigment = this.handleFigment.bind(this);
  this.handleTheGraphFoundation = this.handleTheGraphFoundation.bind(this);
  this.handleSubstreams = this.handleSubstreams.bind(this);

  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleEdgeAndNode();
    this.handleButtonCoreDevsChat();
  }}><strong>Edge and Node</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFigment();
    this.handleButtonCoreDevsChat();
  }}><strong>Figment</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTheGraphFoundation();
    this.handleButtonCoreDevsChat();
  }}><strong>The Graph Foundation</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonCoreDevsChat();
  }}><strong>StreamingFast</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSemiotic();
    this.handleButtonCoreDevsChat();
  }}><strong>Semiotic</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTheGuild();
    this.handleButtonCoreDevsChat();
  }}><strong>The Guild</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphOps();
    this.handleButtonCoreDevsChat();
  }}><strong>Graph Ops</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonCoreDevsChat();
  }}><strong>Messari</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonCoreDevs() {
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  this.handleButtonCoreDevs = this.handleButtonCoreDevs.bind(this);
  this.handleEdgeAndNode = this.handleEdgeAndNode.bind(this);
  this.handleFoundingMembers = this.handleFoundingMembers.bind(this);
  this.handleGraphOps = this.handleGraphOps.bind(this);
  this.handleMessari = this.handleMessari.bind(this);
  this.handleSemiotic = this.handleSemiotic.bind(this);
  this.handleTheGuild = this.handleTheGuild.bind(this);
 
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleEdgeAndNode();
    this.handleButtonCoreDevs();
  }}><strong>Edge and Node</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFigment();
    this.handleButtonCoreDevs();
  }}><strong>Figment</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTheGraphFoundation();
    this.handleButtonCoreDevs();
  }}><strong>The Graph Foundation</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonCoreDevs();
  }}><strong>StreamingFast</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSemiotic();
    this.handleButtonCoreDevs();
  }}><strong>Semiotic</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTheGuild();
    this.handleButtonCoreDevs();
  }}><strong>The Guild</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphOps();
    this.handleButtonCoreDevs();
  }}><strong>Graph Ops</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonCoreDevs();
  }}><strong>Messari</strong></button>
  
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Catagories Menu</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleButtonDelegator() {
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  this.handleButtonDelegator = this.handleButtonDelegator.bind(this);
  this.handleDelegateGuides = this.handleDelegateGuides.bind(this);
  this.handleDelegateWithWallet = this.handleDelegateWithWallet.bind(this);
  this.handleChoosingIndexers = this.handleChoosingIndexers.bind(this);
  this.handleFeesToDelegate = this.handleFeesToDelegate.bind(this);
  this.handleUnDelegating = this.handleUnDelegating.bind(this);
  this.handleTenderize = this.handleTenderize.bind(this);
  this.handleIndexerCompare = this.handleIndexerCompare.bind(this);
  this.handleActiveDelegatorCount = this.handleActiveDelegatorCount.bind(this);
  this.handleActiveDelegationCount = this.handleActiveDelegationCount.bind(this);
  this.handleTotalGRTDelegatedByDelegators = this.handleTotalGRTDelegatedByDelegators.bind(this);
  this.handleCoinbase = this.handleCoinbase.bind(this);

  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleDelegateGuides();
    this.handleButtonDelegator();
  }}><strong>Delegator Guides</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDelegateWithWallet();
    this.handleButtonDelegator();
  }}><strong>Delegate With Wallet</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCoinbase();
    this.handleButtonDelegator();
  }}><strong>Delegate from Coinbase Wallet</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFeesToDelegate();
    this.handleButtonDelegator();
  }}><strong>Delegation Fees</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleUnDelegating();
    this.handleButtonDelegator();
  }}><strong>Undelegating</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTenderize();
    this.handleButtonDelegator();
  }}><strong>Tenderize</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleChoosingIndexers();
    this.handleButtonDelegator();
  }}><strong>Choosing an Indexer</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonDelegator();
  }}><strong>Compare Indexers</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonDelegator();
  }}><strong>Active Delegator Count</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonDelegator();
  }}><strong>Active Delegation Count</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonDelegator();
  }}><strong>Total GRT Delegated By Delegators</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Catagories Menu</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonCurator() { 
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  this.handleButtonCurator = this.handleButtonCurator.bind(this);
  this.handleCurator = this.handleCurator.bind(this);
  this.handleCuratorTools = this.handleCuratorTools.bind(this);
  this.handleCuratorsCount = this.handleCuratorsCount.bind(this);
  this.handleTotalGRTSignalledByCurators = this.handleTotalGRTSignalledByCurators.bind(this);
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleCurator();
    this.handleButtonCurator();
  }}><strong>Curator Role</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorTools();
    this.handleButtonCurator();
  }}><strong>Curator Tools</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonCurator();
  }}><strong>Curator Count</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonCurator();
  }}><strong>Total GRT Signalled By Curators</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Catagories Menu</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonIndexer() { 
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  this.handleButtonIndexer = this.handleButtonIndexer.bind(this);
  this.handleChoosingIndexers = this.handleChoosingIndexers.bind(this);
  this.handleBecomeIndexer = this.handleBecomeIndexer .bind(this);
  this.handleIndexerCompare = this.handleIndexerCompare .bind(this);
  this.handleIndexerHardwareRequirements = this.handleIndexerHardwareRequirements.bind(this);
  this.handleIndexerMap = this.handleIndexerMap.bind(this);
  this.handleIndexerOfficeHours = this.handleIndexerOfficeHours.bind(this);
  this.handleIndexingRewardsAndQueryFees = this.handleIndexingRewardsAndQueryFees.bind(this);
  this.handleQueryFeesAndIndexingRewardCut = this.handleQueryFeesAndIndexingRewardCut.bind(this);
  this.handleActiveIndexerCount = this.handleActiveIndexerCount.bind(this);
  this.handleTotalDelegatedGRTByIndexersCount = this.handleTotalDelegatedGRTByIndexersCount.bind(this);
  this.handleAllocations = this.handleAllocations.bind(this);
  this.handleMIPS = this.handleMIPS.bind(this);

  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleCurator();
    this.handleButtonIndexer();
  }}><strong>Choosing Indexers</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonIndexer();
  }}><strong>Compare Indexers</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBecomeIndexer();
    this.handleButtonIndexer();
  }}><strong>Become Indexer</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerHardwareRequirements();
    this.handleButtonIndexer();
  }}><strong>Indexer Hardware Requirements</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerMap();
    this.handleButtonIndexer();
  }}><strong>Indexer Map</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMIPS();
    this.handleButtonIndexer();
  }}><strong>MIPs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerOfficeHours();
    this.handleButtonIndexer();
  }}><strong>Indexer Office Hours</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexingRewardsAndQueryFees();
    this.handleButtonIndexer();
  }}><strong>Indexer Rewards</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleQueryFeesAndIndexingRewardCut();
    this.handleButtonIndexer();
  }}><strong>Query Fees And Indexing Reward Cut</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAllocations();
    this.handleButtonIndexer();
  }}><strong>Allocations</strong></button><br class="no-show-monitor"></br>
 <button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonIndexer();
  }}><strong>Active Indexer Count</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonIndexer();
  }}><strong>Total Delegated GRT By Indexers Count</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Catagories Menu</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonSubgraph() { 
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  this.handleButtonSubgraph = this.handleButtonSubgraph.bind(this);
  this.handleSubgraph = this.handleSubgraph.bind(this);
  this.handleSubstreams = this.handleSubstreams.bind(this);
  this.handleSoulBound = this.handleSoulBound.bind(this);
  this.handleFireHose = this.handleFireHose.bind(this);
  this.handleMessari = this.handleMessari.bind(this);
  this.handleSubgraphsCount = this.handleSubgraphsCount.bind(this);
  this.handleGitHub = this.handleGitHub.bind(this);
  this.handleSunsettingHostedService = this.handleSunsettingHostedService.bind(this);
  this.handleVsSelfHosting = this.handleVsSelfHosting.bind(this);
  this.handleDecentralisedData = this.handleDecentralisedData.bind(this);
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleSubgraph();
    this.handleButtonSubgraph();
  }}><strong>Subgraphs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonSubgraph();
  }}><strong>Substreams</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonSubgraph();
  }}><strong>Sunsetting Hosted Service</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonSubgraph();
  }}><strong>Decentralised Data</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleVsSelfHosting();
    this.handleButtonSubgraph();
  }}><strong>Hosted VS Self-Hosting</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSoulBound();
    this.handleButtonSubgraph();
  }}><strong>SoulBound</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleFireHose();
    this.handleButtonSubgraph();
  }}><strong>FireHose</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonSubgraph();
  }}><strong>Messari</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonSubgraph();
  }}><strong>Subgraphs Count</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonSubgraph();
  }}><strong>GitHub</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Catagories Menu</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonStatistics() { 
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  this.handleButtonStatistics = this.handleButtonStatistics.bind(this);
  this.handleParticipantUpdate = this.handleParticipantUpdate.bind(this);
  this.handleHoldersCount = this.handleHoldersCount.bind(this);
  this.handleActiveDelegatorCount = this.handleActiveDelegatorCount.bind(this);
  this.handleActiveIndexerCount = this.handleActiveIndexerCount.bind(this);
  this.handleCuratorsCount = this.handleCuratorsCount.bind(this);
  this.handleActiveDelegationCount = this.handleActiveDelegationCount.bind(this);
  this.handleTotalQueryFeesCount = this.handleTotalQueryFeesCount.bind(this);
  this.handleSubgraphsCount = this.handleSubgraphsCount.bind(this);
  this.handleTotalGRTDelegatedByDelegators = this.handleTotalGRTDelegatedByDelegators.bind(this);
  this.handleTotalDelegatedGRTByIndexersCount = this.handleTotalDelegatedGRTByIndexersCount.bind(this);
  this.handleTotalGRTSignalledByCurators = this.handleTotalGRTSignalledByCurators.bind(this);
  this.handleTotalGRTBurnedCount = this.handleTotalGRTBurnedCount.bind(this);
  this.handleTotalStakedGRTCount = this.handleTotalStakedGRTCount.bind(this);
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleParticipantUpdate();
    this.handleButtonStatistics();
  }}><strong>Participant Update</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHoldersCount();
    this.handleButtonStatistics();
  }}><strong>Holders Count</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonStatistics();
  }}><strong>Active Delegator Count</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonStatistics();
  }}><strong>Active Indexer Count</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonStatistics();
  }}><strong>Curator Count</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonStatistics();
  }}><strong>Active Delegation Count</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalQueryFeesCount();
    this.handleButtonStatistics();
  }}><strong>Query Fees</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonStatistics();
  }}><strong>Subgraphs Count</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonStatistics();
  }}><strong>Total GRT Delegated By Delegators</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonStatistics();
  }}><strong>Total GRT Delegated By Indexers</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonStatistics();
  }}><strong>Total GRT Signalled By Curators</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalStakedGRTCount();
    this.handleButtonStatistics();
  }}><strong>Total Staked GRT Count</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTBurnedCount();
    this.handleButtonStatistics();
  }}><strong>Total GRT Burned Count</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Catagories Menu</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonCommunity() { 
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  this.handleCommunity = this.handleCommunity.bind(this);
  this.handleDiscord = this.handleDiscord.bind(this);
  this.handleTelegram = this.handleTelegram.bind(this);
  this.handleGraphtronauts = this.handleGraphtronauts.bind(this);
  this.handleGraphDay = this.handleGraphDay.bind(this);
  this.handleBirthday = this.handleBirthday.bind(this);
  this.handleAdvocates = this.handleAdvocates.bind(this);
  this.handleGraphSocial = this.handleGraphSocial.bind(this);
  this.handlePodcast = this.handlePodcast.bind(this);
  this.handleTwitter = this.handleTwitter.bind(this);
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleDiscord();
    this.handleButtonCommunity();
  }}><strong>Discord</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTelegram();
    this.handleButtonCommunity();
  }}><strong>Telegram</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTwitter();
    this.handleButtonCommunity();
  }}><strong>Twitter</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphtronauts();
    this.handleButtonCommunity();
  }}><strong>Graphtronauts</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphDay();
    this.handleButtonCommunity();
  }}><strong>Graph Day 2022</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBirthday();
    this.handleButtonCommunity();
  }}><strong>Graph Birthday</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAdvocates();
    this.handleButtonCommunity();
  }}><strong>Graph Advocates</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphSocial();
    this.handleButtonCommunity();
  }}><strong>Graph Social</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePodcast();
    this.handleButtonCommunity();
  }}><strong>GRTiQ Podcast</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Catagories Menu</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMIPS(){
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  const message = this.createChatbotMessage(<a><strong>The Graph’s Multi-Chain Incentivized Program</strong><br></br><br></br>The MIPs program bootstraps Indexers to add support for new chains on the decentralized network, enabling migration of multi-chain subgraphs. This is a critical expansion of support for dapps and subgraph migration ahead of the <a className="cla" onClick={this.handleSunsettingHostedService} target="_blank" rel="noreferrer">sunsetting of the hosted service</a>.<br></br><br></br>The MIPs program has allocated 0.75% of the GRT supply (75M GRT), with 0.5% to reward Indexers who contribute to bootstrapping the network and 0.25% allocated to migration grants for subgraph developers using multi-chain subgraphs. By the end of Q1 2023, the hosted service for all network-supported chains will be sunset, so the MIPs program will work in parallel to subgraph migration efforts.<br></br><br></br>The first chain to be supported on the decentralized network was the <a className="cla" href='https://twitter.com/gnosischain' target="_blank" rel="noreferrer">Gnosis</a>Chain! New chains will be announced throughout the MIPs program, based on Indexer readiness, demand, and community sentiment. To read more about MIPs Performance & Scoring and Eligibility Requirements, see <a className="cla" href='https://thegraph.com/blog/mips-multi-chain-indexing-incentivized-program/' target="_blank" rel="noreferrer">here</a>.<hr></hr>The announced chains so far can be found below.<br></br><br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1613980493787312128?s=20&t=_FqJsNOl6vvyIYt3B0KCfg' target="_blank" rel="noreferrer"><strong>Gnosis</strong></a> beta integration complete<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615443632252948480' target="_blank" rel="noreferrer"><strong>Polygon</strong></a> integration underway<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772854838231040?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Arbitrum</strong></a> coming soon!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772857211961354?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Avalanche</strong></a> coming soon!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772859678457859?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Celo</strong></a> coming soon!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772862110900225?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Optimism</strong></a> coming soon!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonNews() {
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  const message = this.createChatbotMessage(<a>If you are wanting to keep up with the latest news about The Graph, new partnership announcements and read about what is going on within the community, then the links below can help with that.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">The Graph Blog</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a><br></br><br></br>Make sure you also follow The Graph on <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">Twitter</a>.<hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Catagories Menu</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonLearnWeb3() { 
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  this.handleButtonLearnWeb3 = this.handleButtonLearnWeb3.bind(this);
  this.handleLearnWeb3 = this.handleLearnWeb3.bind(this);
  this.handleCoinOrToken = this.handleCoinOrToken.bind(this);
  this.handleCryptocurrencies = this.handleCryptocurrencies.bind(this);
  this.handleEthereum = this.handleEthereum.bind(this);
  this.handleDAO = this.handleDAO.bind(this);
  this.handleCEX = this.handleCEX.bind(this);
  this.handleDEX = this.handleDEX.bind(this);
  this.handleGas = this.handleGas.bind(this);
  this.handleIPFS = this.handleIPFS.bind(this);
  this.handleLayerTwo = this.handleLayerTwo.bind(this);
  this.handleMetaverse = this.handleMetaverse.bind(this);
  this.handleMining = this.handleMining.bind(this);
  this.handleNFT = this.handleNFT.bind(this);
  this.handleNodes = this.handleNodes.bind(this);
  this.handlePOI = this.handlePOI.bind(this);
  this.handlePOS = this.handlePOS.bind(this);
  this.handlePOW = this.handlePOW.bind(this);
  this.handleSmartContract = this.handleSmartContract.bind(this);
  this.handleStablecoin = this.handleStablecoin.bind(this);
  this.handleTokenBurn= this.handleTokenBurn.bind(this);
  this.handleTokenEconomics= this.handleTokenEconomics.bind(this);
  this.handleWeb3DApp = this.handleWeb3DApp.bind(this);
  this.handleWhatIsABlockchain = this.handleWhatIsABlockchain.bind(this);
  this.handleWhatIsTheWeb = this.handleWhatIsTheWeb.bind(this);
  this.handleZKProof = this.handleZKProof.bind(this);
  this.handleZKSnark = this.handleZKSnark.bind(this);
  this.handleZKStark = this.handleZKStark.bind(this);
  this.handleSafe = this.handleSafe.bind(this);
  this.handleCourses = this.handleCourses.bind(this);
  this.handleWomenInWeb3 = this.handleWomenInWeb3.bind(this);
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleWhatIsTheWeb();
    this.handleButtonLearnWeb3();
  }}><strong>What is the Web?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCourses();
    this.handleButtonLearnWeb3();
  }}><strong>Courses</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLearnWeb3();
    this.handleButtonLearnWeb3();
  }}><strong>Learn Web3</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWhatIsABlockchain();
    this.handleButtonLearnWeb3();
  }}><strong>Blockchain</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSafe();
    this.handleButtonLearnWeb3();
  }}><strong>Is it safe?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWeb3DApp();
    this.handleButtonLearnWeb3();
  }}><strong>Web3 DApp</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCryptocurrencies();
    this.handleButtonLearnWeb3();
  }}><strong>Cryptocurrencies</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>Ethereum</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGas();
    this.handleButtonLearnWeb3();
  }}><strong>Gas</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>Coin Or Token</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMining();
    this.handleButtonLearnWeb3();
  }}><strong>Mining</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleNFT();
    this.handleButtonLearnWeb3();
  }}><strong>NFT</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMetaverse();
    this.handleButtonLearnWeb3();
  }}><strong>Metaverse</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSmartContract();
    this.handleButtonLearnWeb3();
  }}><strong>Smart Contract</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleStablecoin();
    this.handleButtonLearnWeb3();
  }}><strong>Stablecoin</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLayerTwo();
    this.handleButtonLearnWeb3();
  }}><strong>Layer Two</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenEconomics();
    this.handleButtonLearnWeb3();
  }}><strong>Token Economics</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenBurn();
    this.handleButtonLearnWeb3();
  }}><strong>Token Burn</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCoreDevs();
    this.handleButtonLearnWeb3();
  }}><strong>Nodes</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDAO();
    this.handleButtonLearnWeb3();
  }}><strong>DAO</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCEX();
    this.handleButtonLearnWeb3();
  }}><strong>CEX</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDEX();
    this.handleButtonLearnWeb3();
  }}><strong>DEX</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIPFS();
    this.handleButtonLearnWeb3();
  }}><strong>IPFS</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePOI();
    this.handleButtonLearnWeb3();
  }}><strong>POI</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePOS();
    this.handleButtonLearnWeb3();
  }}><strong>POS</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePOW();
    this.handleButtonLearnWeb3();
  }}><strong>POW</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleZKProof();
    this.handleButtonLearnWeb3();
  }}><strong>ZKProof</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleZKSnark();
    this.handleButtonLearnWeb3();
  }}><strong>ZKSnark</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleZKStark();
    this.handleButtonLearnWeb3();
  }}><strong>ZKStark</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWomenInWeb3();
    this.handleButtonLearnWeb3();
  }}><strong>Women In Web3</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Catagories Menu</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// help finish

noAnswer() {
  this.handleAdvocateGrant = this.handleAdvocateGrant.bind(this);
  this.handleButtonTheGraph = this.handleButtonTheGraph.bind(this);
  this.handleButtonDelegator = this.handleButtonDelegator.bind(this);
  this.handleButtonCurator = this.handleButtonCurator.bind(this);
  this.handleButtonIndexer = this.handleButtonIndexer.bind(this);
  this.handleButtonSubgraph = this.handleButtonSubgraph.bind(this);
  this.handleButtonStatistics = this.handleButtonStatistics.bind(this);
  this.handleButtonCommunity = this.handleButtonCommunity.bind(this);
  this.handleButtonCoreDevs = this.handleButtonCoreDevs.bind(this);
  this.handleButtonNews = this.handleButtonNews.bind(this);
  const message = this.createChatbotMessage(<a>Sorry, I could not find the answer. Can you try again or rephrase the question? If I still cannot help you, then please take 2 minutes to fill in the feedback form below. With your help, this will improve my knowledge and enable me to help other GRT community members in the future who may also have the same questions and seeking the answers. Thank you!
  
  {/* help start */}

  <br></br><br></br>You can also use the buttons below and scroll down to you find an answer!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegator</strong></button><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Curator</strong></button><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Indexer</strong></button><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Core Devs</strong></button><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgraph</strong></button><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Live Statistics</strong></button><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Community</strong></button><button className="chatbot-button" onClick={this.handleButtonNews}><strong>News</strong></button><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Learn Web3</strong></button>

  {/* help end */}

  </a>

    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
}

export default URDActionProvider;