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
  کیوریٹر گنتی کو مکمل منظر میں دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/CuratorsCount" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
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
  <h4>ڈیلیگیٹرز کے ذریعہ ڈیلیگیٹڈ کردہ جی آر ٹی کی کل رقم <ChatBotTotalGRTDelegatedByDelegatorsBar /> ہے۔</h4>
  مکمل منظر میں ڈیلیگیٹرز کے ذریعہ تفویض کردہ جی آر ٹی کی کل رقم دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/TotalGRTDelegatedByDelegators" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalQueryFeesCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>تمام کیوری کی فیس کی گنتی <ChatBotTotalQueryFeesCountBar /> جی آر ٹی ہے.</h4>
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
  <h4>کیوریٹرز کے ذریعہ اشارہ کردہ جی آر ٹی کی کل رقم <ChatBotTotalGRTSignalledByCuratorsBar /> ہے.</h4>
  کیوریٹرز کے ذریعہ اشارہ کردہ جی آر ٹی کی کل رقم کو مکمل نظارے میں دیکھنے کے لئے  <a className="cla" href="https://grtdatahub.com/TotalGRTSignalledByCurators" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalStakedGRTCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>داؤ پر لگی جی آر ٹی کی کل رقم <ChatBotTotalStakedGRTCountBar /> ہے.</h4>
  مکمل منظر میں داؤ پر لگی جی آر ٹی کی کل رقم دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/TotalStakedGRTCount" target="_blank" rel="noreferrer">یہاں کلک کریں</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalDelegatedGRTByIndexersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>انڈیکسرز کے ذریعہ تفویض کردہ جی آر ٹی کی کل رقم <ChatBotTotalDelegatedGRTByIndexersCountBar /> ہے.</h4>
  انڈیکسرز کے ذریعہ تفویض کردہ جی آر ٹی کی کل رقم کو مکمل منظر میں دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/TotalDelegatedGRTByIndexersCount" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTotalGRTBurnedCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>جلائی گئی جی آر ٹی کی کل مقدار <ChatBotTotalGRTBurnedCountBar /> ہے.</h4>
  مکمل منظر میں جلائے گئے جی آر ٹی کی کل مقدار دیکھنے کے لئے <a className="cla" href="https://grtdatahub.com/TotalGRTBurnedCount" target="_blank" rel="noreferrer">یہاں کلک کریں۔</a></a>
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
  const message = this.createChatbotMessage(<a>تفویض کرنے کے لئے انڈیکسر کا انتخاب کرنا ایک مشکل فیصلہ ہوسکتا ہے۔ مندرجہ ذیل معلومات اور وسائل آپ کی مدد کریں گے. صرف اس وجہ سے کہ انڈیکسر میں سب سے زیادہ اے پی وائی ہے اس کا مطلب یہ نہیں ہے کہ وہ آپ کے لئے بہترین ہیں۔ اپنی تحقیق کریں ، اپنا وقت لیں اور سیکھیں کہ انڈیکسر کو تفویض کرنے کے لئے منتخب کرتے وقت کیا دیکھنا ہے۔ یہ اس بات کو یقینی بنائے گا کہ آپ تفویض کرنے سے پہلے پراعتماد ہیں۔<hr></hr>
گرافٹرونوٹس ایپ ڈیلیگیٹرز کو اپنی پسند کے انڈیکسر کے بارے میں مفید بصیرت حاصل کرنے کی اجازت دیتی ہے۔ بس اپنی پسند کے انڈیکسر کا ایتھیریم ایڈریس داخل کریں یا جائزوں پر ایک نظر ڈالیں۔ آپ ایپ کے اندر انڈیکسرز کا موازنہ بھی کرسکتے ہیں۔
<br></br>
<a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">گرافٹرونوٹس app</a>
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
  const message = this.createChatbotMessage(<a>ویب 3 میں کام کرنا چاہتے ہیں؟ اچھی خبر، گراف ایکو سسٹم کی خدمات حاصل کر رہا ہے! گراف فاؤنڈیشن اور کور ڈویلپر ٹیموں میں مواقع موجود ہیں۔  موجودہ کھلی پوزیشنوں کے لئے <a className="cla" href="https://thegraph.com/jobs/#open-positions" target="_blank" rel="noreferrer">یہاں</a> ایک نظر ڈالیں.</a>
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
  const message = this.createChatbotMessage(<a>گراف نیٹ ورک تین کرداروں پر مشتمل ہے جو ایکو سسٹم کو خدمات فراہم کرتے ہیں اور ویب 3 ایپلیکیشنز جیسے یونیسویپ ، ایو اور سنتھیٹکس کو ڈیٹا فراہم کرتے ہیں: انڈیکسرز ، کیوریٹرز اور ڈیلیگیٹرز۔ آپ ذیل میں ہر کردار کے لئے تفصیلی دستاویزات تلاش کرسکتے ہیں۔
    <br></br>
    <a className="cla" onClick={this.handleBecomeIndexer}>انڈیکسرز</a>
    <br></br>
    <a className="cla" onClick={this.handleCurator}>کیوریٹرز</a>
    <br></br>
    <a className="cla" onClick={this.handleDelegateGuides}>ڈیلیگیٹرز</a>
    <br></br>
    گراف نیٹ ورک کی معاشی سلامتی کو یقینی بنانے اور اعداد و شمار کی سالمیت کو یقینی بنانے کے لئے ، شرکاء گراف ٹوکن جی آر ٹی کو داؤ پر لگاتے ہیں اور استعمال کرتے ہیں۔ جی آر ٹی ایک کام ٹوکن ہے جو ایتھیریم بلاکچین پر ایک ای آر سی-20 ہے ، جو نیٹ ورک میں وسائل مختص کرنے کے لئے استعمال ہوتا ہے۔ فعال انڈیکسرز ، کیوریٹرز اور ڈیلیگیٹرز خدمات فراہم کرسکتے ہیں اور نیٹ ورک سے آمدنی حاصل کرسکتے ہیں ، جو ان کے کام کی مقدار اور ان کے جی آر ٹی اسٹیک کے متناسب ہیں۔</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleEdgeAndNode() {
  const message = this.createChatbotMessage(<a>گراف نیٹ ورک کے پیچھے کا خیال گراف پروٹوکول ، انکارپوریٹڈ کے ذریعہ تصور کیا گیا تھا اور اسے شکل دی گئی تھی۔  17 دسمبر، 2020 کو گراف نیٹ ورک کا مین نیٹ لانچ کرنے کے بعد ، گراف پروٹوکول ، انکارپوریٹڈ نے اس کا نام ایج اور نوڈ میں تبدیل کرنے کا فیصلہ کیا۔ نام کی تبدیلی کے پیچھے مقصد نیٹ ورک میں جاری غیر مرکزیت کو اجاگر کرنا تھا۔ اس طرح ، ایج اور نوڈ اب پروٹوکول کی ترقی اور فروغ دینے والی مرکزی ٹیم نہیں ہے۔ اس کے بجائے ، ایج اور نوڈ ایکو سسٹم کو خدمات فراہم کرے گا اور پروٹوکول کے ساتھ شامل ہوگا۔</a>
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
    <a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank" rel="noreferrer"> گراف بنیاد</a>  
    <br></br><br></br>
    <a className="cla" href="https://ca.linkedin.com/in/evabeylin?original_referer=https%3A%2F%2Fdocs.thegraph.academy%2Fthe-graph-ecosystem%2Forganizational-structure%2Fthe-graph-foundation" target="_blank" rel="noreferrer">ایوا بیلن</a> گراف فاؤنڈیشن کی ڈائریکٹر کے طور پر کام کرتی ہیں۔ پروٹوکول کی نگرانی کے لیے ذمہ دار، گراف فاؤنڈیشن ایکو سسٹم کو ہم آہنگی اور مدد فراہم کرے گی۔ فاؤنڈیشن کا قیام ایک آزاد تنظیمی ڈھانچہ تشکیل دینے کی حکمت عملی کا حصہ تھا جو کہ وکندریقرت ہو۔
    <hr></hr>کونسل کے ارکان:
    <br></br>انڈیکسرز<br></br>جم کزنز اور گیری مورس
    <br></br>صارفین<br></br>جسٹن جے موزس اور کیون تہرانیئن
    <br></br>محققین<br></br>سینٹیاگو پیلاڈینو اور یونڈن فو
    <br></br>پشت پناہی کرنے والے<br></br>مائیکل اینڈرسن اور اسپینسر نون
    <br></br>ابتدائی ٹیم<br></br>برینڈن رامیرز اور یانیو تال</a>
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
مستقبل میں ، گراف کی حکمرانی کو مزید مہذب بنانے کا منصوبہ بنایا گیا ہے ، مثال کے طور پر انفرادی ممبروں کو نیسٹڈ ملٹی سگس یا ڈاو کے ساتھ تبدیل کرکے۔</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Networok Roles End

handleBecomeIndexer() {
  const message = this.createChatbotMessage(<a><strong>گراف نیٹ ورک پر ایک موثر انڈیکسر کیسے بنیں۔</strong><hr></hr>انڈیکسرز کے لئے کم از کم ضروریات - گراف نیٹ ورک پر ایک مؤثر انڈیکسر بننے کے لئے چار اہم ضروریات کی ضرورت ہے.<br></br><br></br>سٹیک - آپ کو انڈیکسر بننے کے لئے کم از کم 100،000 جی آر ٹی سٹیک کرنے ہوں گے.<br></br><br></br>مہارتیں - مثالی طور پر ، انڈیکسرز کا ڈویلپر اوپس میں پس منظر ہونا چاہئے یا بلاکچین نوڈس کو چلانے کا تجربہ ہونا چاہئے۔ انڈیکسرز کو کلاؤڈ یا ہوسٹڈ سرورز کو تعینات کرنے ، یا اپنے سرور ہارڈ ویئر کو چلانے میں آرام دہ اور پرسکون ہونا چاہئے۔ توثیق کنندہ نوڈ چلانے اور لینکس پر کام کرنے سے واقفیت بھی تجویز کی جاتی ہے۔<br></br><br></br>ہارڈ ویئر - کارکردگی ، کیوری آؤٹ پٹ ، اور رفتار کو متوازن کرنے کے لئے ، بہت سے انڈیکسرز اکثر 16 سی پی یو ، 1 ٹی بی ڈسک ، اور 32 جی بی ریم کے سیٹ اپ سے شروع ہوتے ہیں۔<br></br><br></br>انفراسٹرکچر سافٹ ویئر - کنٹینر اور اسکیلنگ ٹکنالوجیوں جیسے ڈوکر اور کوبرنیٹس سے واقفیت فائدہ مند ہے ، تاہم گراف سافٹ ویئر کو ننگے دھات پر تعینات کرنا بھی ممکن ہے۔ انفراسٹرکچر سافٹ ویئر کی ضروریات میں پوسٹگرییس ایس کیو ایل ڈیٹا بیس ، گراف نوڈ ، انڈیکسر ایجنٹ ، انڈیکسر سروس ، پرومیتھیس میٹرکس سرور ، اور ممکنہ طور پر آپ کی مخصوص ضروریات اور سیٹ اپ پر منحصر ہے۔<br></br><br></br>گراف نیٹ ورک پر انڈیکسرز کے لئے بہترین طریقوں کے بارے میں جاننے کے لئے، مثالی انڈیکسر کمیونٹی کی شرکت، ایک سفارش کردہ انڈیکسر ٹیک سیٹ اپ، وسائل اور گائیڈز اور  گراف کے ساتھ اپنے انڈیکسنگ کا سفر شروع کریں.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// Discord and Telegram Start
handleGraphDiscord() {
  const message = this.createChatbotMessage(<a>گراف آفیشل ڈسکورڈ سرور <a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">یہاں</a> پایا جا سکتا ہے۔</a>
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
اپنے زیر التواء انعامات کو دیکھنے کے لئے ، گرافٹرونوٹس پر جائیں  اور والیٹ شامل کریں۔
<br></br><br></br>
<a className="cla" href="https://www.graphtronauts.com/#/profile" target="_blank" rel="noreferrer">گرافٹرونوٹس</a></a>
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
  const message = this.createChatbotMessage(<a>انڈیکسنگ کے انعامات سب گرافس میں سب گراف کے کیوریشن سگنل کے تناسب سے تقسیم کیے جاتے ہیں۔ انڈیکسرز کو ان کے انڈیکسنگ کے انعامات اس حصص کے متناسب ہوتے ہیں جو انہوں نے کسی خاص ذیلی گراف پر مختص کیے ہیں۔
<br></br><br></br>
    انڈیکسنگ کے انعامات پروٹوکول افراط زر سے پیدا ہوتے ہیں جو کہ 3% سالانہ جاری کرنے پر سیٹ ہے۔
    <br></br><br></br>
    تمام مختصات کو اشاریہ سازی کے درست ثبوت پی او آئی کے ساتھ بند کرنے کی ضرورت ہے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handlePOI() {
  const message = this.createChatbotMessage(<a>انڈیکسنگ کا نام نہاد ثبوت پی او آئی اس بات کی تصدیق کرتا ہے کہ انڈیکسرز نے حقیقت میں ان سب گرافوں کو انڈیکس کیا ہے جس میں انہوں نے اپنا حصہ تفویض کیا ہے۔ کسی بلاک کا پی او آئی ایک سب گراف میں عمل درآمد کی تفصیلات فراہم کرنے والے ادارے کے اسٹور کے تمام ٹرانزیکشن کا خلاصہ ہے۔ انڈیکسنگ کے انعامات حاصل کرنے کے لئے، انڈیکسرز کو انڈیکسنگ پی او آئی کے درست ثبوت کے ساتھ ایک تفویض کو بند کرنا ہوگا جو ثالثی قانون کے ذریعہ قائم کردہ معیارات پر پورا اترتا ہے. انڈیکسر جائز پی او آئی کے بغیر انعامات کے اہل نہیں ہیں۔ الاٹمنٹ کو بند کرتے وقت ، انڈیکسر کو موجودہ دور کے پہلے بلاک کے لئے پی او آئی بھیجنا ہوگا۔
    <br></br><br></br>
  انڈیکسنگ انعامات جمع کیے جاتے ہیں اور ہر بار تقسیم کیے جاتے ہیں جب انڈیکسرز اپنی تفویض کو بند کرتے ہیں. فعال ہونے کے باوجود ، اسائنمنٹس مسلسل انعامات حاصل کرتی رہتی ہیں۔ انڈیکسر یا تو اپنے الاٹمنٹ کو دستی طور پر بند کرنے پر مجبور کرسکتے ہیں یا زیادہ سے زیادہ مختص کی مدت (ہر 28 ادوار) کے بعد انہیں خود بخود بند ہونے دے سکتے ہیں۔
  <br></br><br></br>
  1 ایپوک = ~ 28 گھنٹے
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
    <th>پوسٹگریس (GB میموری) </th>
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
<br></br><br></br>چھوٹا = ایک سے زیادہ سب گرافس کی انڈیکسنگ شروع کرنے کے لئے کافی ہے
<br></br>
معیاری = پہلے سے طے شدہ ترتیب
<br></br>
میڈیم = 100 سب گرافس کو انڈیکس کرنے اور فی سیکنڈ 200 اور 500 درخواستوں کے درمیان کرنے کی ضرورت ہے
<br></br>
لمبا = تمام فی الحال استعمال شدہ سب گرافس کو انڈیکس کرنے اور متعلقہ ٹریفک کے لئے درخواستوں کی خدمت کرنے کی ضرورت ہے

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
  const message = this.createChatbotMessage(<a>شناخت سے سب گراف آئی پی ایف ایس ہیش حاصل کرنے کے بارے میں انڈیکسرز کے لئے دستاویزات  اور اس کے برعکس یہاں پایا جاسکتا ہے۔
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
  const message = this.createChatbotMessage(<a>گرافٹرونوٹس ایپ ڈیلیگیٹرز کو اپنی پسند کے انڈیکسر کے بارے میں مفید معلومات حاصل کرنے کی اجازت دیتی ہے۔ بس اپنی پسند کے انڈیکسر کا ایتھیریم ایڈریس داخل کریں یا نیچے دیئے گئے جائزوں پر ایک نظر ڈالیں۔
  <br></br>
  <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">گرافٹرونوٹس</a>
  <br></br><br></br>
  دیگر بہت مفید سائٹس یہ ہیں:<br></br><br></br><a className="cla" href="http://ww25.oracleminer.com/graph/indexer/0x7ab4cf25330ed7277ac7ab59380b68eea68abb0e?subid1=20220530-2214-27fd-afb4-5d675e9469e5s" target="_blank" rel="noreferrer">OracleMiner.com</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://graphscan.io/" target="_blank" rel="noreferrer">GraphScan.io</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://thegraph.live/" target="_blank" rel="noreferrer">TheGraph.Live</a><br></br><br></br><a className="cla" href="https://www.notion.so/Community-Guides-abbb10f4dba040d5ba81648ca093e70c" target="_blank" rel="noreferrer">کمیونٹی ٹولز اور گائیڈز</a></a>
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
    ہر بار جب آپ جی آر ٹی کو کسی انڈیکسر کو تفویض کرتے ہیں تو ، آپ کو 0.5٪ کی مضبوط تفویض کی فیس پر غور کرنا چاہئے۔ مضبوط مثال کے طور پر ، اگر آپ 10،000 جی آر ٹی تفویض کرتے ہیں تو ، آپ سے 50 جی آر ٹی وصول کیا جائے گا۔ اگر آپ کا منتخب کردہ انڈیکسر آپ کو فی دن 2 جی آر ٹی کی منافع بخش صلاحیت پیش کرتا ہے۔ اس مفروضے کے تحت ، آپ کو یہاں تک کہ توڑنے میں 25 دن (50 جی آر ٹی / 2 جی آر ٹی) لگیں گے۔ معاشی طور پر ٹھوس فیصلے کرنے کے لئے، آپ کو حساب کرنے کی ضرورت ہے کہ آپ کو اپنے ڈیلیگیشن سے 0.5٪ ٹیکس کی وصولی میں کتنا وقت لگے گا.
    <br></br><br></br>
ایک انڈیکسر تفویض کرنے سے آپ کو دو ایتھیریم ٹرانزیکشنز پر دستخط کرنے کی ضرورت ہوگی۔ آئیے یہ بھی فرض کرتے ہیں کہ آپ صرف 100 ڈالر تفویض کرنا چاہتے ہیں۔ اس معاملے میں ، تفویض کرنے کے ٹرانزیکشن کے اخراجات آپ کے ٹی ایس او اسٹیک کا کل 25٪ ہوں گے۔ اس کا مطلب یہ ہے کہ پوائنٹ کو توڑنے کا وقت نمایاں طور پر بڑھ جائے گا.
<br></br><br></br>
اگر ڈیلیگیٹرز حذف کرنا چاہتے ہیں تو ، وہ فوری طور پر اپنے ٹوکن تک رسائی حاصل نہیں کرسکتے ہیں۔ غیر ڈیلیگیٹڈ شدہ ٹوکن 28 دن کی غیر منجمد مدت کے تابع ہیں ، صرف اس کے بعد ہی ڈیلیگیٹرز آزادانہ طور پر اپنے ٹوکن منتقل کرسکتے ہیں یا انہیں کسی دوسرے انڈیکسر کو دوبارہ تفویض کرسکتے ہیں۔
ایک قابل احترام، قابل اعتماد اور مؤثر انڈیکسر کا انتخاب ایک اہم فیصلہ ہے جسے ہلکے سے نہیں لیا جانا چاہئے. ڈیلیگیٹرز جو اپنی مناسب محنت نہیں کرتے ہیں وہ ناقص کارکردگی کا مظاہرہ کرنے والے انڈیکسر کو تفویض کرنے کا خطرہ چلاتے ہیں۔ اسی طرح، وہ ایک انڈیکسر کو منتخب کرنے کا خطرہ چلا سکتے ہیں جو مشکوک طریقوں میں ملوث ہوتا ہے یا ایک پرکشش اے پی وائی (سالانہ فیصد واپسی) کی تشہیر کرنے کے لئے مختصر وقت کے لئے ڈیلیگیٹرز کو سبسڈی دیتا ہے جو طویل عرصے میں غیر حقیقی ہے.    
  <br></br><br></br>
  اس وقت ڈیلیگیشن کے ٹرانزیکشن کی اوسط لاگت کے لیے، گرافٹرونوٹس
 ایپ دیکھیں اور فیس منتخب کریں۔
<br></br><a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">گرافٹرونوٹس</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWeb3DApp() {
  const message = this.createChatbotMessage(<a>
    ویب 3 ڈیپس کیسے کام کرتا ہے ؟
 <br></br><br></br>
 آپ یہاں ایک انتہائی مفید ٹویٹر تھریڈ میں "<a className="cla" href="https://twitter.com/suhailkakar/status/1555894207570513920?s=21&t=FoLxHgWLO78VA_3VheV_DQ" target="_blank">ویب 3</a> فن تعمیر کے لئے ایک مکمل گائیڈ" تلاش کرسکتے ہیں۔
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
<br></br><strong><a className="cla" href="https://soulbound.xyz/" target="_blank">سول باؤنڈ اسٹوڈیو</a></strong> - سول باؤنڈ اسٹوڈیو اسے آسان بنا دیتا ہے۔<br></br>کوڈنگ کی ضرورت نہیں ہے.<br></br><br></br>مکمل طور پر مہذب ویب 3 انٹرفیس اور اے پی آئی کو ڈیزائن کرنے ، دوبارہ نشر کرنے اور شائع کرنے کے لئے ایک متحد انٹرفیس۔<br></br><br></br>اگر آپ  مطلوبہ خصوصیات اور بگ رپورٹس کا اشتراک کرکے سول باؤنڈ اسٹوڈیو ڈیزائن کرنے میں ان کی مدد کرنا چاہتے ہیں تو ، ان کے ڈسکورڈ میں شامل ہوں۔ 
<br></br>
<a className="cla" href="https://discord.com/invite/Eu3Eeh4J6a" target="_blank">ڈسکورڈ</a><br></br><br></br>
ان کی تازہ ترین ریلیز اور خبروں کو برقرار رکھنے کے لئے ، ٹویٹر پر سول باؤنڈ لیبز کی پیروی کریں۔
<br></br> 
<a className="cla" href="https://twitter.com/SoulboundLabs" target="_blank">ٹویٹر</a><br></br><br></br>
ایک ویڈیو ٹیوٹوریل کے لئے کہ آپ بغیر کسی کوڈنگ کے سول باؤنڈ اسٹوڈیو کا استعمال کرتے ہوئے منٹوں میں  سب گراف ڈیپس اور تجزیات کیسے تشکیل دے  سکتے ہیں ، نیچے دیکھیں۔<br></br><br></br>
  <Embed className="embed" isDark url='https://www.youtube.com/watch?v=IEmr280lGSU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIPhone() {
  const message = this.createChatbotMessage(<a>ہوٹ والیٹ میں اپنے فون پر بہت سارے پیسے اور بورنگ بندر نہ رکھیں! کیونکہ آپ کا آئی فون شاید آپ کی میٹا ماسک کی معلومات کو آئی کلاؤڈ سے مطابقت پذیر کررہا ہے۔ یہ پہلے سے طے شدہ طور پر آن ہے ، اسے بند کرنے کے بارے میں یہاں ایک انتہائی آسان ٹویٹر تھریڈ ہے۔ 
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
    کیوری فیس کٹوتی اور انڈیکسنگ ریوارڈ کٹ ویلیوس ڈیلیگیشن کے پیرامیٹرز ہیں جو انڈیکسر, انڈیکسراور اس کے ڈیلیگیٹرز کے مابین جی آر ٹی کی تقسیم کو کنٹرول کرنے کے لئے کول ڈاؤن بلاکس کے ساتھ مل کر مرتب  کرسکتے ہیں۔ ڈیلیگیشن کے پیرامیٹرز کو تشکیل دینے کے بارے میں ہدایات کے لئے پروٹوکول اسٹیکنگ میں آخری مراحل دیکھیں۔
    <br></br><br></br>
    کیوری فیس کٹوتی: انڈیکسر کو تقسیم کرنے کے لئے سب گراف میں جمع ہونے والی طلب فیس کی واپسی کا٪ ۔ اگر 95٪ پر سیٹ کیا جاتا ہے تو ، جب کسی تفویض کا دعوی کیا جاتا ہے تو انڈیکسر کو کیوری فیس معاوضہ گروپ کا 95٪ موصول ہوگا اور باقی 5٪ ڈیلیگیٹرز کے پاس جائیں گے۔
    <br></br><br></br>
    انڈیکسنگ ریوارڈ کٹ: ایک سب گراف میں جمع ہونے والے انڈیکسنگ انعامات کا ٪ جو انڈیکسر میں تقسیم کیا جائے گا۔ اگر 95٪ پر سیٹ کیا جاتا ہے تو ، جب تفویض بند ہوجائے گی تو انڈیکسر انڈیکسنگ انعامات کے پول کا 95٪ وصول کرے گا ، اور ڈیلیگیٹرز دوسرے 5٪ کو تقسیم کردیں گے۔</a>
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
  جینس پوہلمین ، ٹیکنالوجی لیڈر اور شریک بانی۔ <a className="cla" href="https://de.linkedin.com/in/jannispohlmann" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/jannispohlmann" target="_blank" rel="noreferrer">ٹویٹر</a><br></br><br></br>
  برینڈن رمیریز، <a className="cla" href="https://www.linkedin.com/in/1stramirez" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/rezbrandon?lang=en" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br>
  ینیو تال، پروجیکٹ لیڈر اور شریک بانی <a className="cla" href="https://www.linkedin.com/in/yanivtal9" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla"  href="https://twitter.com/yanivgraph" target="_blank" rel="noreferrer">ٹویٹر</a> | <a className="cla" href="https://www.grtiq.com/grtiq-podcast-100-Yaniv-Tal/" target="_blank" rel="noreferrer">پوڈ کاسٹ GRTiQ</a></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://www.crunchbase.com/organization/the-graph/investor_financials" target="_blank" rel="noreferrer">Crunchbase.com</a> مطابق، گراف نے 7 راؤنڈ کے دوران فنڈنگ میں مجموعی طور پر 69.6 ملین ڈالر جمع کیے ہیں. اس کی آخری فنڈنگ 21 جنوری ، 2022 کو وینچر - سیریز نامعلوم راؤنڈ سے اکٹھا کی گئی تھی۔<br></br><br></br>گراف 27 سرمایہ کاروں کی طرف سے فنڈ کیا جاتا ہے. بلاک وال مینجمنٹ اور فن ٹیک کلیکٹو جدید ترین سرمایہ کار ہیں۔<br></br><br></br> گراف نے ایک ہی وینچر فنڈ ، گراف ایکو سسٹم فنڈ میں مجموعی طور پر 205 ملین ڈالر جمع کیے ہیں۔ اس فنڈ کا اعلان 18 فروری 2022 کو کیا گیا تھا اور اس نے مجموعی طور پر 205 ملین ڈالر جمع کیے تھے۔</a>
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
  const message = this.createChatbotMessage(<a>گراف جی آر ٹی ایتھیریم اور آئی پی ایف ایس جیسے نیٹ ورکس سے پوچھ گچھ کے لئے ایک انڈیکسنگ پروٹوکول ہے۔ کوئی بھی اوپن اے پی آئی بنا اور شائع کرسکتا ہے ، جسے سب گراف کہا جاتا ہے ، جس سے ڈیٹا آسانی سے قابل رسائی ہوجاتا ہے۔ مختصر طور پر ، گراف ڈیٹا فراہم کرتا ہے جسے کسی کو بھی صرف چند کلیدی سٹروکس کے ساتھ پوچھ گچھ کرنے کے لئے ایپلیکیشنز میں تبدیل ، منظم اور شیئر کیا جاسکتا ہے۔<br></br><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/" target="_blank" rel="noreferrer">گراف کو کس طرح کنٹرول کیا جاتا ہے</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-council" target="_blank" rel="noreferrer">گراف کونسل</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-foundation" target="_blank" rel="noreferrer">گراف فاؤنڈیشن</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#advocates-dao" target="_blank" rel="noreferrer">گراف ڈاو کی ایڈوکیسی کرتا ہے</a></a>
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
  const message = this.createChatbotMessage(<a>ایئر ڈراپس کے بارے میں ، گراف ان چند منصوبوں میں سے ایک ہے جس نے اصل میں لوگوں کو اپنے ٹوکن کے لئے کام کرنے پر مجبور کیا۔ کیوریٹوریل پروگرام بہت شدید تھا اور لوگوں نے سب گراف کے بارے میں سیکھنے ، اعداد و شمار کو منظم کرنے اور نیٹ ورک میں حصہ لینے میں بہت زیادہ وقت گزارا۔ یہ ٹیم کو ایک ناقابل یقین پوزیشن میں رکھتا ہے کہ گراف میں بڑھتی ہوئی ویب 3 کے لئے وقف بلڈرز کی ایک اچھی طرح سے تربیت یافتہ اور حوصلہ افزائی کمیونٹی ہے. اس وقت، کوئی ہوائی قطرے کی منصوبہ بندی نہیں کی جاتی ہے.</a>
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
  const message = this.createChatbotMessage(<a>  کوائن مارکیٹ کیپ ارن اور کوائن بیس ارن ان شرکاء کے لئے مفت جی آر ٹی ٹوکن دے رہے ہیں جو نیٹ ورک کے بارے میں سیکھتے ہیں اور سوالات کا جواب دیتے ہیں۔<br></br><a className="cla" href="https://twitter.com/CoinMarketCap/status/1341310792461918210" target="_blank" rel="noreferrer">کوائن مارکیٹ کیپ ارن</a><br></br><a className="cla" href="https://twitter.com/coinbase/status/1339723594566406156?s=20" target="_blank" rel="noreferrer">کوائن بیس ارن</a><hr></hr>پس پس! مفت میں جی آر ٹی حاصل کرنے کا بہترین طریقہ ڈیلیگیٹ کرنا اور انعام حاصل کرنا ہے.</a>
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
    یہاں</a>پایا جاسکتا ہے۔ .<br></br><br></br> گراف اسپینول کی لورینا فیبریس نے کمیونٹی کے لئے مندرجہ ذیل سبق بنائے ہیں۔<br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/the-graph-roadmap-for-2023-952b17d20d71" target="_blank" rel="noreferrer">2023</a><br></br><br></br>اس مضمون میں ، آپ ترقی کے چار شعبوں کو سیکھیں گے جو 2023 میں دن کی روشنی دیکھیں گے اور گراف نیٹ ورک کو آج سے بھی زیادہ مضبوط بنائیں گے:<br></br>ہوسٹڈ سروس کی گودھولی<br></br>ہوسٹڈ سروس کی گودھولی<br></br>سب اسٹریمز<br></br>پروٹوکول کو آربیٹرم ون کے ساتھ ایل 2 پر منتقل کریں۔</a>
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
  const message = this.createChatbotMessage(<a>گراف گراف کیو ایل کا استعمال کرتا ہے ، جو فیس بک کے ذریعہ تیار کردہ اوپن سورس کیوری لینگویج ہے۔ اسکیما کے ہر عنصر کی ایک وضاحت ہوتی ہے۔ گراف کیو ایل سیکھیں  اور پھر آپ بلاکچین سے مطلوبہ تمام ڈیٹا بازیافت کرسکتے ہیں۔<hr></hr>گراف کیو ایل ایپلیکیشن پروگرامنگ انٹرفیس (اے پی آئی) کے لئے سرور سائیڈ کیوری اور رن ٹائم لینگویج ہے جو صارفین کو بالکل وہی ڈیٹا دینے کو ترجیح دیتا ہے جس کی وہ درخواست کرتے ہیں اور اس سے زیادہ کچھ نہیں۔  گراف کیو ایل کو اے پی آئی کو تیز ، لچکدار اور ڈویلپرز کے استعمال میں آسان بنانے کے لئے ڈیزائن کیا گیا ہے۔ گراف کیو ایل اے پی آئی وہ اے پی آئی ہے جسے ڈویلپرز گراف کے ذریعہ انڈیکس کردہ ڈیٹا تک رسائی حاصل کرنے کے لئے استعمال کرسکتے ہیں۔</a>
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
  const message = this.createChatbotMessage(<a>آپ سکے مارکیٹ کیپ پر قیمت اور تمام کھلی مارکیٹوں کو دیکھ سکتے ہیں.<a className="cla" href="https://coinmarketcap.com/ur/currencies/the-graph/markets/" target="_blank" rel="noreferrer">کوائن مارکیٹ کیپ</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDecentralisedData() {
  const message = this.createChatbotMessage(<a><strong>ڈیسینٹرالائزڈ ڈیٹا کا آغاز</strong><br></br><br></br>گراف ایکو سسٹم متحرک ، مہذب مستقبل کا خیرمقدم کرتے ہوئے صارفین کی توقعات کو پورا کرنے کے لئے اقدامات اٹھا رہا ہے۔ اس توازن کو حاصل کرنے کے لئے، ہوسٹنگ سروس سپورٹ رکاوٹ کو تین چین منتقلی کے مراحل میں تقسیم کیا گیا ہے جو مختلف آؤٹ پٹ معیار پر منحصر ہے، بشمول استعمال، استحکام، اور بنیادی فعالیت تک محدود نہیں ہے.<br></br><br></br>ہوسٹڈ سروس چینز آہستہ آہستہ منتقلی کریں گے ، جس سے ڈویلپرز کو خود کو مہذب نیٹ ورک سے واقف کرنے اور اپنے سب گرافس کو منتقل کرنے کے لئے کافی وقت ملے گا۔<br></br><br></br>ڈویلپرز کی بہتر مدد کرنے کے لئے ، ہوسٹڈ سروس سے گراف نیٹ ورک تک منتقلی کی چینز میں کوئی مرحلہ وار مخصوص تاریخیں تفویض نہیں کی جائیں گی۔ ڈویلپر کی ضروریات کو پورا کرنے اور کلیدی باہر نکلنے کے معیار کو حاصل کرنے کی ہوسٹڈ سروس کی حمایت کے خاتمے کی جگہ لے لیتا ہے. جیسا کہ ہوسٹڈ سروس چین فی آؤٹ پٹ معیار تک پہنچ گیا ہے، یہ سلسلہ تین مراحل میں منتقل ہوجائے گا. یہ سمجھنے کے لئے ایم آئی پی پروگرام کی پیشرفت دیکھیں کہ جب انڈیکسرز تاروں کی جانچ کر رہے ہیں ، جب انہیں نیٹ ورک پر سپورٹ کیا جاتا ہے ، اور جب چین کی منتقلی شروع ہوجاتی ہے۔<br></br><br></br>ہر ہوسٹڈ سروس چین کے لئے، گراف نیٹ ورک پر حمایت کو فعال کرنے کے لئے تین منتقلی کے مراحل یہ ہیں:<br></br>مرحلہ 1 (سنرے): بلاکچینز کے لئے نئی ہوسٹڈ سروس کے سب گراف کی تخلیق کو غیر فعال کریں جو نیٹ ورک پر کافی بنیادی فعالیت رکھتے ہیں.<br></br>مرحلہ 2 (سن بیم): ہوسٹڈ سروس کے لئے سب گراف اپ ڈیٹس کو غیر فعال کریں۔<br></br>مرحلہ 3 (طلوع آفتاب): ہوسٹڈ سروس کے سب گرافس سے پوچھ گچھ کو غیر فعال کریں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleVsSelfHosting() {
  const message = this.createChatbotMessage(<a><strong>گراف نیٹ ورک بمقابلہ سیلف ہوسٹنگ</strong><br></br><br></br>اسپوئلر انتباہ: گراف نیٹ ورک کم مہنگا ، استعمال میں آسان ہے ، اور مقامی طور پر گراف نوڈ چلانے کے مقابلے میں بہتر نتائج پیدا کرتا ہے۔<br></br><br></br>گراف کے مہذب نیٹ ورک کو ایک مضبوط انڈیکسنگ اور پوچھ گچھ کا تجربہ پیدا کرنے کے لئے ڈیزائن اور بہتر بنایا گیا ہے، اور دنیا بھر میں ہزاروں شراکت داروں کی بدولت ہر روز بہتر ہو رہا ہے. اس مہذب پروٹوکول کے فوائد کو مقامی طور پر گرافیکل نوڈ چلا کر نقل نہیں کیا جاسکتا ہے۔ گراف نیٹ ورک زیادہ قابل اعتماد، زیادہ موثر اور کم مہنگا ہے. یہاں ایک تجزیہ ہے:<br></br><br></br><strong>آپ کو گراف نیٹ ورک کیوں استعمال کرنا چاہئے</strong><br></br>60-98٪ کم ماہانہ لاگت<br></br>اعلی اپ ٹائم<br></br>اعلی اپ ٹائم<br></br><ChatBotActiveIndexerCountBar / > انڈیکسرز تک رسائی (اور گنتی)<br></br>عالمی برادری کی طرف سے 24/7 تکنیکی مدد<br></br><br></br>گراف نیٹ ورک استعمال کرنے کے فوائد کی خرابی کو پڑھنے کے لئے ، یہاں پڑھیں۔<br></br><br></br><strong>کوئی سیٹ اپ کے اخراجات اور آپریشنل کارکردگی میں اضافہ نہیں. صفر تنصیب کی فیس.</strong><br></br>کوئی اوور ہیڈ یا تنصیب کے اخراجات کے ساتھ فوری طور پر شروع کریں<br></br>کوئی ہارڈ ویئر کی ضروریات.<br></br>مرکزی بنیادی ڈھانچے کی وجہ سے کوئی رکاوٹ نہیں اور آپ کی بنیادی مصنوعات پر توجہ مرکوز کرنے کے لئے زیادہ وقت.<br></br>کوئی بیک اپ سرورز ، خرابیوں کا سراغ لگانا ، یا مہنگے انجینئرنگ وسائل کی ضرورت نہیں ہے۔<br></br><br></br>وشوسنییتا اور لچک دار گراف کا مہذب نیٹ ورک صارفین کو جغرافیائی فالتو پن تک رسائی فراہم کرتا ہے جو گراف نوڈ کی میزبانی کرتے وقت موجود نہیں ہوتا ہے۔ عالمی نیٹ ورک کو محفوظ بنانے والے انڈیکسرز کے ذریعہ حاصل کردہ 99.9٪ سے زیادہ اپ ٹائم کے ساتھ کیوریز قابل اعتماد طریقے سے پیش کیے جاتے ہیں۔</a>
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
   const message = this.createChatbotMessage(<a>سب گراف آپ کو بلاکچین سے نکالنے والے اعداد و شمار کو منظم کرنے کے لئے اعداد و شمار کے ڈھانچے ہیں. وہ اس بات کی وضاحت کرنے کا ایک طریقہ ہیں کہ آپ کون سا ڈیٹا انڈیکس کرنا چاہتے ہیں اور اسے کس طرح اسٹور کرنا چاہتے ہیں۔ ان میں سے کچھ اپنے اسائنمنٹس پر پہلے سے جمع یا حساب کتاب کرتے ہیں ، کچھ صرف اسی طرح کے سادہ اعداد و شمار کو اسٹور کرتے ہیں جو آپ کو چین میں مل سکتا ہے۔ اس کے بعد ایک ادارہ اس ڈیٹا سے پوچھ گچھ کرتا ہے۔ یہ ادارہ ایک ڈپ (کمپنی / ڈویلپر ، وغیرہ) ، ٹیلیگرام بوٹ ، ڈسکورڈ بوٹ ، یا یہاں تک کہ ایک سادہ صارف بھی ہوسکتا ہے جو معلومات تلاش کرنے کے لئے پوچھ گچھ کرتا ہے۔<br></br><br></br>ہوسٹڈ سروس سے سب گراف کی مشاورت فی الحال ہر ایک کے لئے استعمال کرنے کے لئے آزاد ہے. مہذب پروٹوکول کے لئے، ٹیم کو توقع ہے کہ سوال کے اخراجات فی کیوری 0.00001 کے ڈالر ارد گرد ہوں گے، لیکن یہ ایک مفت مارکیٹ ہے اور ہر انڈیکسر اپنی لاگت کے ماڈل مقرر کرسکتا ہے.<br></br><br></br>آپ یہاں 15 منٹ میں سب گراف کے ساتھ رفتار حاصل کرنے کے لئے ایک ڈویلپر دھوکہ دہی شیٹ تلاش کرسکتے ہیں.</a>
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
  const message = this.createChatbotMessage(<a>ایک انڈیکسر اور ضروری انفراسٹرکچر بننے کے لیے آپ کو 100,000 جی آر ٹی کی ضرورت ہے۔ یہ وہ کم از کم رقم ہے جو آپ کو ایک اشاریہ نوڈ آن چین رجسٹر کرنے کے لیے داؤ پر لگانا ہے۔<br></br><br></br>انڈیکسرز کو ڈیپس کی وسیع مہارتوں اور ضروری ہارڈ ویئر کی ضرورت ہوتی ہے۔<br></br >

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
  const message = this.createChatbotMessage(<a>گیس ایتھر ایتھیریم کی مقدار کے لئے اصطلاح ہے، ایتھیریم کی مقامی کرپٹو کرنسی، نیٹ ورک کی طرف سے صارف کو نیٹ ورک کے ساتھ بات چیت کرنے کے لئے ضروری ہے.<br></br><br></br>پٹرول کی قیمت کوئی ایسی چیز نہیں ہے جس پر گراف ٹیم کا کنٹرول ہے۔ پٹرول کی قیمت اس وقت بڑھ جاتی ہے جب ایتھیریم نیٹ ورک بھیڑ بھاڑ میں ہوتا ہے یا بہت زیادہ استعمال ہوتا ہے۔<br></br><br></br>پٹرول کی قیمت کوئی ایسی چیز نہیں ہے جس پر گراف ٹیم کا کنٹرول ہے۔ پٹرول کی قیمت اس وقت بڑھ جاتی ہے جب ایتھیریم نیٹ ورک بھیڑ بھاڑ میں ہوتا ہے یا بہت زیادہ استعمال ہوتا ہے۔
 <br></br><a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">گرافٹرونوٹس ایپ</a><br></br><br></br>ایتھیریم گیس کی قیمتوں کے لئے، یہاں ملاحظہ کریں.
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
  const message = this.createChatbotMessage(<a>تمام انڈیسکرز کے مقامات کا نقشہ دیکھنے کے لیے، ملاحظہ کریں <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">گرافٹرونوٹس</a> .ایپ اور منتخب کریں نقشہ</a>
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
  const message = this.createChatbotMessage(<a>انڈیکسرز کا موازنہ کرنے کے لیے، ملاحظہ کریں <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">گرافٹرونوٹس</a>. ایپ اور منتخب کریں فہرست<br></br><br></br>موازنہ بٹن پر کلک کریں اور پھر پانچ انڈیکسرز کو منتخب کریں جن کا آپ موازنہ کرنا چاہتے ہیں۔<br></br><br></br>ایک بار منتخب کرنے کے بعد، نیچے موازنہ بٹن پر کلک کریں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphSocial() {
  const message = this.createChatbotMessage(<a><strong><a className="cla" href="https://twitter.com/graphsocial1?s=21&t=f_BFECU3y4NfkRXocWA5kQ" target="_blank" rel="noreferrer">گراف سوشل</a></strong><br></br><br></br>ایک بین الاقوامی ویب 3 ملاقات گراف ایکو سسٹم کی ترقی کو چلا رہی ہے۔ جس کا اہتمام احمد ماردینی نے کیا تھا۔<br></br><br></br>پہلا گراف سوشل ویب 3 اجلاس 8 اکتوبر 2022 کو شام 6-10 بجے جی ایس ٹی کے ساتھ دبئی میں ہوا تھا ، جس میں 100 سے زیادہ افراد نے شرکت کی تھی۔ گراف کیا ہے، حالیہ حاصل کردہ مائل سٹونز کیا ہیں، اور اس میں کیسے شامل ہوا جاۓ!<hr></hr><strong>مقررین</strong><br></br><br></br>احمد مردینی<br></br>سلیم حیدری<br></br>شنگ لام سے <a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">سے OOKC لیبز</a><br></br><a className="cla" href="https://twitter.com/9001sabella" target="_blank" rel="noreferrer">ازابیلا</a> سے <a className="cla" href="https://twitter.com/routerprotocol" target="_blank" rel="noreferrer">راؤٹر پروٹوکول</a><br></br><a className="cla" href="https://twitter.com/farhajmayan" target="_blank" rel="noreferrer">فرحاج مایان</a> from <a className="cla" href="https://twitter.com/_buildspace" target="_blank" rel="noreferrer">بلڈ سپیس</a><br></br><a className="cla" href="https://twitter.com/dudhat_paresh" target="_blank" rel="noreferrer">پریش دودھت</a> سے <a className="cla" href="https://twitter.com/infy_protocol" target="_blank" rel="noreferrer">انفائی پروٹوکول</a><br></br>رشمی پادھی<br></br><br></br><strong>اسپانسرز</strong><br></br><br></br><a className="cla" href="https://twitter.com/tenderize_me" target="_blank" rel="noreferrer">ٹینڈرائز</a><br></br><a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC لیبز</a><hr></hr>آپ ذیل میں احمد ماردینی اور ملٹی آرٹ اسٹوڈیو کے ساتھ ایونٹ سے ایک انٹرویو دیکھ  سکتے ہیں!<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=KFUxrs10gpI'/></a>
    ,
  );
  this.setState((prev) => ({ 
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePodcast() {
  const message = this.createChatbotMessage(<a><strong>GRTiQ کیا ہے؟</strong><br></br><br></br><a className="cla" href="https://www.grtiq.com/" target="_blank" rel="noreferrer">GRTiQ</a> تجزیہ ، تحقیق ، اصلاح اور تعلیم کے ذریعے مارکیٹ انٹیلی جنس تیار کرتا ہے۔<br></br><br></br>مارکیٹ تجزیہ - مارکیٹ کا تجزیہ اور کارکردگی فراہم کریں تاکہ ڈیلیگیٹرز مارکیٹ کی حرکیات کو بہتر طور پر سمجھ سکیں.<br></br><br></br>انڈیکسر ریسرچ - اشاریہ شدہ تحقیق کریں جو ڈیلیگیٹرز مواقع اور شراکت داری کی نشاندہی کرنے کے لئے استعمال کرسکتے ہیں۔<br></br><br></br>انعامات کی اصلاح - ڈیٹا ، گائیڈز ، اور تجزیات بنائیں اور شائع کریں تاکہ ڈیلیگیٹرز کو اپنے انعامات کی کمائی کو بہتر بنانے میں مدد مل سکے۔<br></br><br></br>ایکو سسٹم کی تعلیم - گراف ایکو سسٹم کے تمام پہلوؤں پر جاری تعلیمی وسائل اور معلومات پیش کرتے ہیں.<hr></hr>آپ یہاں <a className="cla" href="https://www.grtiq.com/podcast/" target="_blank" rel="noreferrer">GRTiQ</a> کے پوڈ کاسٹ سن سکتے ہیں۔.<br></br><br></br><a className="cla" href="https://twitter.com/grt_iq" target="_blank" rel="noreferrer">ٹویٹر</a><br></br><a className="cla" href="https://www.youtube.com/channel/UCxhFN47AlCDx1Qoaw1oSQ5A" target="_blank" rel="noreferrer">یوٹیوب</a><br></br><a className="cla" href="https://www.instagram.com/thegraphiq/" target="_blank" rel="noreferrer">انسٹاگرام</a>.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/grt_iq/status/1617269631403831297?s=20&t=C_TtsLrGHQ0b92xQs527lQ'/></a>
   ,
   );
   this.setState((prev) => ({ 
     ...prev,
     messages: [...prev.messages, message],
   }));
 }

 handleGraphSocial() {
   const message = this.createChatbotMessage(<a><strong><a className="cla" href="https://twitter.com/graphsocial1?s=21&t=f_BFECU3y4NfkRXocWA5kQ" target="_blank" rel="noreferrer">گراف سوشل</a></strong><br></br><br></br>ایک بین الاقوامی ویب 3 میٹ اپ جو گراف ایکو سسٹم کی ترقی کو آگے بڑھا رہا ہے. کی طرف سے منظم <a className="cla" href="https://twitter.com/Mardeni01" target="_blank" rel="noreferrer">احمد مردینی</a>.<br></br><br></br>پہلی گراف سوشل ویب 3 میٹنگ دبئی میں 8 اکتوبر 2022، شام 6-10 بجے جی ایس ٹی کے ساتھ تھی، جس میں 100 سے زیادہ لوگ شریک تھے۔ اس پروگرام کا احاطہ کرتا ہے کہ گراف کیا ہے، حال ہی میں حاصل کیے گئے سنگ میل کیا ہیں، اور اس میں شامل ہونے کا طریقہ!<hr></hr><strong>مقررین</strong><br></br><br></br>احمد مردینی<br></br>سلیم حیدری<br></br>شنگ لام سے <a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">لیبز OOKC</a><br></br><a className="cla" href="https://twitter.com/9001sabella" target="_blank" rel="noreferrer">ازابیلا</a> سے <a className="cla" href="https://twitter.com/routerprotocol" target="_blank" rel="noreferrer">راؤٹر پروٹوکول</a><br></br><a className="cla" href="https://twitter.com/farhajmayan" target="_blank" rel="noreferrer">فرحاج مایان</a> from <a className="cla" href="https://twitter.com/_buildspace" target="_blank" rel="noreferrer">بلڈ سپیس</a><br></br><a className="cla" href="https://twitter.com/dudhat_paresh" target="_blank" rel="noreferrer">پریش دودھت</a> from <a className="cla" href="https://twitter.com/infy_protocol" target="_blank" rel="noreferrer">انفائی پروٹوکول</a><br></br>رشمی پادھی<br></br><br></br><strong>سپانسرز</strong><br></br><br></br><a className="cla" href="https://twitter.com/tenderize_me" target="_blank" rel="noreferrer">ٹینڈرائز کرنا</a><br></br><a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC لیبز</a><hr></hr>آپ احمد مردینی کے ساتھ ایونٹ سے ایک انٹرویو دیکھ سکتے ہیں اور <a className="cla" href="https://twitter.com/MultiartStudio" target="_blank" rel="noreferrer">ملٹی آرٹ اسٹوڈیو</a>! نیچے<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=KFUxrs10gpI'/></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-15947" target="_blank" rel="noreferrer">گراف ایڈوکیٹس</a><br></br> گراف ایڈوکیٹس ایک کمیونٹی پر مبنی پہل ہے جو دنیا بھر کے لوگوں کے لئے ویب 3 میں پورٹل کے طور پر خدمات انجام دے رہی ہے۔ ایڈوکیٹس کے پاس گراف کمیونٹی اور ویب 3 مشن کو سیکھنے اور اس میں حصہ لینے کا انوکھا موقع ہے۔ کوئی بھی ایڈوکیٹ بن سکتا ہے اور اس کے بعد گراف ایڈوکیٹس ڈاو میں شامل ہوسکتا ہے۔<hr></hr><strong><underline>ایڈوکیٹ رولز</underline></strong><br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12947" target="_blank" rel="noreferrer"><strong>ایونٹ ایونجلسٹ</strong></a><br></br>ایونٹ ایونجلسٹ<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12927" target="_blank" rel="noreferrer"><strong>کونٹینٹ کریئٹر</strong></a><br></br>ویب 3 اور گراف کے بارے میں مواد بنائیں ، بشمول مضامین ، ویڈیوز ، انفوگرافکس ، میمز یا GIFs۔<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13207" target="_blank" rel="noreferrer"><strong>ٹیکسٹ ٹرانسلیٹر</strong></a><br></br>گراف اور دیگر کمیونٹی دستاویزات، مواد، اور سماجی خطوط کو دوسری زبانوں میں ترجمہ کریں.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12667" target="_blank" rel="noreferrer"><strong>کمیونٹی کیئر</strong></a><br></br>سوالات کے جوابات پوسٹ کریں یا گراف فورم، ٹیلیگرام، ڈسکورڈ، یا ریڈڈیٹ میں تعلیمی وسائل کا اشتراک کریں۔<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13167" target="_blank" rel="noreferrer"><strong>ٹیکنیکل ٹیچر</strong></a><br></br>دوسروں کو سکھائیں کہ ویب 3 اور گراف ایکو سسٹم میں فعال طور پر کس طرح حصہ لیں اور تعاون کریں.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13407" target="_blank" rel="noreferrer"><strong>ویب 3 ویلکمر</strong></a>
  <br></br>دنیا بھر میں زیادہ سے زیادہ تعلیم اور ویب 3 اور گراف کو اپنانے میں تیزی لائیں۔<hr></hr>دنیا بھر میں زیادہ سے زیادہ تعلیم اور ویب 3 اور گراف کو اپنانے میں تیزی لائیں۔ <a className="cla" href="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7" target="_blank" rel="noreferrer">یہاں</a>.<br></br><br></br>اس کے بارے میں مزید جاننے کے لئے کہ ایڈوکیٹ بننے کے لئے کیا ہوتا ہے یہاں دیکھیں۔ <a className="cla" href="https://thegraph.com/ecosystem/advocacy/" target="_blank" rel="noreferrer">یہاں</a>.<hr></hr>ایڈوکیٹس ڈاو گرانٹس  کے بارے میں جاننے کے لئے ، مجھ پر کلک کریں! <a className="cla" onClick={this.handleAdvocateGrant}><strong>مجھے کلک کیجیے</strong></a>!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrant() {
  this.handleAdvocateGrantWithdraw = this.handleAdvocateGrantWithdraw.bind(this);
  const message = this.createChatbotMessage(<a><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12762" target="_blank" rel="noreferrer"><strong>گراف ایڈوکیٹس ڈاو گرانٹ</strong></a><br></br><br></br> آپ یہاں ایڈوکیٹس ڈاو گرانٹ کے لئے درخواست دے سکتے ہیں۔ <a className="cla" href="http://grants.graphadvocates.com/" target="_blank" rel="noreferrer">یہاں</a>.<hr></hr><strong>گرانٹ کا عمل</strong><br></br>ابتدائی جائزہ - آپ کی گرانٹ یہاں گراف ایڈوکیٹس ڈاو فورم  میں پوسٹ کی جائے گی۔ گرانٹ کمیٹی کا ڈاو ممبر آپ کی گرانٹ کی اہلیت کا اندازہ کرے گا۔ <a className="cla" href="https://forum.graphadvocates.com/" target="_blank" rel="noreferrer">یہاں</a><br></br>عوامی مباحثے - وسیع تر کمیونٹی کو گرانٹس پر رائے فراہم کرنے اور فورم میں ووٹ دینے کے لئے مدعو کیا جاتا ہے کہ آیا وہ اس کی حمایت کرتے ہیں یا نہیں۔ اس عمل کے دوران، کمیونٹی کے ارکان یا ڈاو کے ارکان فورم میں سوالات پوچھ سکتے ہیں تاکہ گرانٹ کے بارے میں مزید تفصیلات جمع کی جا سکیں تاکہ اس کے دائرہ کار کو بہتر طور پر سمجھا جا سکے. یہ اس عمل کا ایک اہم مرحلہ ہے جس کے دوران رائے قائم ہوتی ہے۔<br></br>کمیٹی پریزنٹیشن - ایک کامیاب گرانٹ کی درخواست میں ڈاو کی گرانٹ کمیٹی کو براہ راست پریزنٹیشن بھی شامل ہوگی۔ یہ ملاقاتیں ڈاو کے ڈسکورڈ سرور کی عوامی صوتی چیٹ میں ہوتی  ہیں اور دنیا بھر میں مختلف ٹائم زونز کو ایڈجسٹ کرنے کے لئے ہر منگل کو تین مختلف ٹائم سلاٹس (10:00 | 18:00 | 22:00 یو ٹی سی یو ٹی سی) پر شیڈول کی جاتی ہیں۔ گرانٹ کمیٹی کے ممبروں کے لئے یہ اہم ٹچ پوائنٹس ہیں تاکہ وہ اس بات پر اعتماد حاصل کرسکیں کہ گرانٹ کی حمایت کرنا ہے یا نہیں۔ براہ کرم اپنی گرانٹ کا جائزہ پیش کرنے اور سوالات کے جوابات دینے کے لئے تیار آئیں۔<br></br>گرانٹ کا فیصلہ - آپ گرانٹ کے عمل کے دوران ابھرتے ہوئے متعدد مختلف ووٹس اور انتخابات کو دیکھیں گے۔ یہ ناقابل یقین حد تک اہم اشارے ہیں جو ڈاو کے ممبروں کو ان کے ووٹ میں مطلع کرتے ہیں۔ کامیاب گرانٹس کے لئے سرکاری ڈاو فنڈنگ کا فیصلہ عمل کے بالکل اختتام پر ہوگا ، جہاں ڈاو کے تمام ممبران ڈاو ہاؤس میں آن چین ووٹ دیں گے۔ (نوٹ: کچھ چھوٹی گرانٹس کو گرانٹ کمیٹی کے ذریعہ آف چین ووٹ دیا جاسکتا ہے)
  <br></br>متوقع وقت - ڈاو تمام گرانٹ ایپلیکیشنز کو مناسب طریقے سے جانچنے کے لئے پرعزم ہے۔ ڈاو نے آن چین اور آف چین ٹائم لائنز بھی قائم کی ہیں جو مختلف ٹائم زونز میں رہنے والی کمیونٹی سے وسیع پیمانے پر مشغولیت کی اجازت دیتی ہیں جن میں شرکت کے لئے دستیابی کی مختلف ڈگریاں ہوتی ہیں۔<hr></hr>ایڈوکیٹس ڈاو گرانٹس  واپس لینے کے بارے میں جاننے کے لئے ، مجھ پر کلک کریں!<br></br><a className="cla" onClick={this.handleAdvocateGrantWithdraw}><strong>مجھے کلک کیجیے</strong></a>!</a>
    , 
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrantWithdraw() {
  const message = this.createChatbotMessage(<a><strong>مزید ایڈوکیٹس ڈاو گرانٹ کا عمل</strong><hr></hr>لہذا آپ نے اب فارم کے ذریعہ اپنی گرانٹ جمع کروائی ہے ، اسے اس فورم میں پوسٹ کیا گیا ہے جہاں کمیونٹی اور ایڈوکیٹس ووٹ دے رہے ہیں اور سوالات پوچھ رہے ہیں۔ اگلا کیا ہے؟<br></br><a className="cla" href="https://docs.graphadvocates.com/community-grants/getting-grant-paid" target="_blank" rel="noreferrer">یہاں</a>. ڈاو ایک/دو ماہ کے اندر اندر ایک کامیاب گرانٹ کی درخواست پر عملدرآمد کرنے کا ارادہ رکھتا ہے. ذیل میں کلیدی اقدامات کا ایک جائزہ ہے جو ایک کامیاب گرانٹ کی درخواست سے گزرتا ہے<br></br>
  : کمیونٹی کا جائزہ: ~ 10 دن (کمیونٹی کی مصروفیت کی طرف سے مختلف ہوتا ہے)<br></br>
  کمیٹی پریزنٹیشن: ~ 7 دن (شیڈولنگ کے لئے وقت کی اجازت بھی شامل ہے)<br></br>
  کمیٹی پریزنٹیشن: ~ 7 دن (شیڈولنگ کے لئے وقت کی اجازت بھی شامل ہے)<br></br>
  ووٹنگ کی مدت ختم ہو چکی ہے اور آپ کی گرانٹ کامیاب رہی ہے۔ اگر ایسا ہے تو، مبارک ہو! کیا توقع کریں:<br></br>
  ای میل کی تصدیق - یہ گراف ایڈوکیٹس ڈاو سے ہے ، آپ کو ای میل کے اندر موجود لنک کے ذریعہ کے وائی سی (اپنے کسٹمر کو جانیں) کو مکمل کرنے کی ضرورت ہوگی۔ آپ کو ایک کنٹریکٹ بھی بھیجا جائے گا.<br></br>
  فورم پوسٹ - ایک ایڈوکیٹ بھی فورم کے اندر آپ کی گرانٹ پر تبصرہ کرے گا اس بات کی تصدیق کرنے کے لئے کہ آپ اپنی گرانٹ کے ساتھ کامیاب رہے ہیں.<br></br>
  کے وائی سی اور گرانٹ معاہدہ: ~ 7 دن
  <br></br>
  آن چین ووٹنگ: 14 دن
  <br></br>
  آپ اپنی آن چین گرانٹ کی تجویز کو یہاں دیکھ سکیں گے۔
  <br></br>
  14 دنوں کے بعد اگر آپ  آن چین ووٹنگ کے ساتھ کامیاب رہے ہیں تو آپ اپنی گرانٹ واپس لے سکیں گے۔
  <br></br>
  ڈاو ہاؤس ایپ سے اپنے جی آر ٹی کو واپس لینے کے بارے میں ایک گائیڈ یہاں پایا جاسکتا ہے۔ یا آپ  ذیل میں ویڈیو ٹیوٹوریل دیکھ سکتے ہیں۔ اگر آپ کو اپنے فنڈز کو گنوسس چین سے ایتھیریم میں منتقل کرنے کی ضرورت ہے تو ، آپ کو اپنے جی آر ٹی کو پل کرنے کی ضرورت ہے ، ہم اومنی برج کا استعمال کرتے ہوئے تجویز کرتے ہیں ، جس تک آپ یہاں تک رسائی حاصل کرسکتے ہیں۔ ایک ویڈیو دیکھنے کے لئے جس میں دکھایا گیا ہے کہ اپنے فنڈز کو منتقل کرنے کے  لئے اومنی برج کا استعمال کیسے کریں ، آپ اسے یہاں دیکھ سکتے ہیں۔ 
  <hr></hr>
  <a className="cla" href="https://omni.gnosischain.com/bridge" target="_blank" rel="noreferrer">اومنی بریج</a>
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
  const message = this.createChatbotMessage(<a>ذیل میں آپ کو جی آر ٹی کنٹریکٹ اور اس کی تفصیلات ملیں گی، نقصان دہ معاہدہ شامل کرنے سے بچنے کے لیے معلومات کو دو بار چیک کرنا یقینی بنائیں۔<br></br><br></br>نام: گراف<br></br>علامت: جی آر ٹی<br></br>نیٹ ورک: ایتھیریم (ای آر سی 20)<br></br>کنٹریکٹ: 0xc944e90c64b2c07662a292be6244bdf05cda44a7<br></br>اعشاریہ: 18<br></br><br></br>آپ اسے کوائن مارکیٹ کیپ پر <a className="cla" href="https://coinmarketcap.com/ur/currencies/the-graph/" target="_blank" rel="noreferrer">یہاں</a><br></br>.</a>
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
  const message = this.createChatbotMessage(<a>ہر بار جب کوئی نمائندہ ڈیلیگیشن کو منسوخ کرنا چاہتا ہے تو ، ان کے ٹوکن 26 دن کی غیر منسلک مدت سے مشروط ہوتے ہیں۔ اس کا مطلب یہ ہے کہ وہ اپنے ٹوکن کو منتقل نہیں کرسکتے ہیں یا 26 دنوں کے لئے انعامات حاصل نہیں کرسکتے ہیں.<br></br><br></br>ڈیلیگیشن / پگھلنے کی مدت کچھ اقتصادی حملوں کو ہونے سے روکنے کے لئے موجود ہے. اسے 28 ایپوکس کی زیادہ سے زیادہ مختص زندگی سے ملنا ہے۔ فی الحال جس طرح سے انعام کا نظام کام کرتا ہے اسے دیکھتے ہوئے ، ڈیلیگیشن کے خاتمے کی ایک مختصر مدت ممکنہ طور پر ڈیلیگیشن کو بیک وقت متعدد اسائنمنٹس میں "دو بار شمار" کرنے کی اجازت دے گی۔<hr></hr>ہر بار جب انڈیکسر اپنی بندش (دستی طور پر) کو مجبور کرنا چاہتا ہے ، یا خود بخود ہر زیادہ سے زیادہ 28 ایپوکس: تفویض کی زیادہ سے زیادہ مدت۔ یہ وہ وقت ہوتا ہے جب انعامات تقسیم کیے جاتے ہیں۔<br></br><br></br>غور کرنے کے لئے ایک چیز یہ بھی ہے کہ ایک انڈیکسر کو دانشمندی سے منتخب کرنا ہے۔ اگر آپ کسی ایسے انڈیکسر کا انتخاب کرتے ہیں جو قابل اعتماد نہیں تھا یا اچھا کام نہیں کررہا تھا تو ، آپ تفویض کرنا چاہیں گے ، جس کا مطلب ہے کہ آپ انعامات حاصل کرنے کے بہت سارے مواقع سے محروم ہوجائیں گے ، جو جی آر ٹی کو جلانے کی طرح ہی برا ہوسکتا ہے۔<br></br><br></br>گراف کے جی آر ٹی ٹوکن وفد کو ختم کرنے کے بارے میں ایک ٹیوٹوریل کے لئے ، <a className="cla" href="https://www.youtube.com/watch?v=3GPY5On7vHc" target="_blank" rel="noreferrer">
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
  const message = this.createChatbotMessage(<a>گراف اکیڈمی تعلیم اور گراف کے بارے میں مزید سیکھنے کے بارے میں ہے. ان کے کورسز آپ کو گراف کے ساتھ شروع کرنے اور ایکو سسٹم کے بارے میں اپنے علم کو بڑھانے میں مدد کرنے کے لئے ڈیزائن کیے گئے ہیں. اور مزید سیکھنے کے لئے انعام کے طور پر، آپ کو ایک ذاتی سرٹیفکیٹ ملتا ہے.<br></br><br></br><a className="cla" href="https://thegraph.academy/course/delegator-course/" target="_blank" rel="noreferrer">ڈیلیگیٹر کورس</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/subgraph-developer-course/" target="_blank" rel="noreferrer">سب گراف ڈویلپر کورس</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/curator-course/" target="_blank" rel="noreferrer">سب گراف ڈویلپر کورس</a><hr></hr>اگر آپ ویب 3 کے بارے میں مزید جاننا چاہتے ہیں تو، مجھ سے پوچھیں! "میں مفت کے لئے ویب 3 کیسے سیکھ سکتا ہوں؟"</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLearnWeb3() {
  const message = this.createChatbotMessage(<a>مفت کے لئے ویب 3 دیو سیکھنے کے لئے وسائل<br></br><br></br>کورسز، منصوبوں اور کوڈ کے ذریعے اپنے ویب 3 کیریئر کو فاسٹ ٹریک کریں. مکمل طور پر مفت. یہاں تلاش کریں.<br></br>
  <a className="cla" href="https://university.alchemy.com/" target="_blank" rel="noreferrer">یہاں</a><br></br><br></br><a className="cla" href="https://t.co/dm50GZ8lMP" target="_blank" rel="noreferrer">ایتھیریم</a><br></br><a className="cla" href="https://t.co/BfjoA5ynEt" target="_blank" rel="noreferrer">سولیڈیٹی</a><br></br>خوفناک ٹھوس وسائل ، لائبریریوں ، ٹولز اور بہت کچھ کی ایک تیار کردہ فہرست حیرت انگیز استحکام میں مل سکتی ہے۔ 
  <br></br><a className="cla" href="https://github.com/bkrem/awesome-solidity" target="_blank" rel="noreferrer">.زبردست سولیڈٹی</a><br></br><a className="cla" href="https://t.co/GUMDW8WAru" target="_blank" rel="noreferrer">بلاکچین</a><br></br><a className="cla" href="https://t.co/kzVyI8leHK" target="_blank" rel="noreferrer">اوریکلز</a><br></br>کرپٹو زومبیز ایک انٹرایکٹو اسکول ہے جو آپ کو بلاکچینز کے بارے میں تکنیکی تمام چیزیں سکھاتا ہے۔
  <br></br><a className="cla" href="https://t.co/QRwZn0CvPl" target="_blank" rel="noreferrer">CryptoZombies</a><br></br>SpeedRunEthereum.com پر اپنے آپ کو امتحان میں رکھو  .
  <br></br><a className="cla" href="https://t.co/VVsmytm7CS" target="_blank" rel="noreferrer">SpeedRunEthereum.com</a> .<br></br>ایلکیمی کی <a className="cla" href="https://t.co/BDni1gjuvJ" target="_blank" rel="noreferrer">ویب 3 کا راستہ</a> ایلکیمی کی ویب 3 کا راستہ سیریز ، ایک 10 ہفتوں کا ، خود رفتار ویب 3 ڈویلپر پروگرام جو نئے بلاکچین  ڈویلپرز کو  ابتدائی سے اعلی درجے کی طرف جانے میں مدد فراہم کرتا ہے۔ سہیل کاکڑ<br></br><br></br>اگر آپ ویڈیو ٹیوٹوریل دیکھ کر سیکھنے کو ترجیح دیتے ہیں تو پھر نادر ڈبٹ سے بہتر سیکھنے کے لئے کوئی نہیں ہے۔ آپ کو ذیل میں مکمل اسٹیک ویب 3 ڈویلپمنٹ کے لئے مکمل گائیڈ' ٹیوٹوریل مل جائے گا ، مزید ویب 3 سیکھنے والے مواد کے لئے اس کے باقی یوٹیوب چینل کو چیک کرنا یقینی بنائیں۔<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=nRMo5jjgCr4'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Courses End

// Discord Start
handleDiscord() {
  const message = this.createChatbotMessage(<a>
    ذیل میں آپ کو آفیشل ڈسکورڈ سرورز ملیں گے۔<br></br><br></br><a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">گراف پروٹوکول</a><br></br><br></br><a className="cla" href="https://discord.com/invite/aZtCCKPp34" target="_blank" rel="noreferrer">گراف ایڈوکیٹس ڈی اے او</a><hr></hr>ذیل میں آپ کو غیر سرکاری ڈسکورڈ سرورز ملیں گے۔<br></br><br></br><a className="cla" href="https://discord.com/invite/zqrwSFFW3F" target="_blank" rel="noreferrer">گرافریکا</a></a>
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
     ذیل میں آپ کو آفیشل ٹیلیگرام گروپ مل جائے گا۔<br></br><br></br><a className="cla" href="https://t.me/graphprotocol" target="_blank" rel="noreferrer">آفیشل گراف کمیونٹی</a><hr></hr>ذیل میں آپ کو دنیا بھر سے غیر آفیشل ٹیلیگرام گروپ ملیں گے۔
    <br></br><br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank">گرافٹرونوٹس</a><br></br><a className="cla" href="https://t.me/TheGraph_Germany" target="_blank">گراف - جرمنی</a><br></br><a className="cla" href="https://t.me/thegraphfrenchchannel" target="_blank">گراف - فرانسیسی</a><br></br><a className="cla" href="https://t.me/thegraphenespanol" target="_blank">گراف - ایسپینول</a><br></br><a className="cla" href="https://t.me/thegraphRu" target="_blank">گراف - روس</a><br></br><a className="cla" href="https://t.me/thegraphitalia" target="_blank" rel="noreferrer">گراف - اٹلی</a><br></br><a className="cla" href="https://t.me/graphprotocolTR" target="_blank" rel="noreferrer">گراف - ترکی</a><br></br><a className="cla" href="https://t.me/TheGraphBR" target="_blank" rel="noreferrer">گراف - برازیل</a><br></br><a className="cla" href="https://t.me/GraphProtocol_VN" target="_blank" rel="noreferrer">گراف - ویتنام</a><br></br><a className="cla" href="https://t.me/Graph_Persian" target="_blank" rel="noreferrer">گراف - فارسی</a><br></br><a className="cla" href="https://t.me/IndianGraphCommunity" target="_blank" rel="noreferrer">گراف - انڈیا</a><br></br><a className="cla" href="https://t.me/thegraphjapan" target="_blank" rel="noreferrer">گراف - جاپان</a><br></br><a className="cla" href="https://t.me/TheGraph_Dutch" target="_blank" rel="noreferrer">گراف - ڈچ</a><br></br><a className="cla" href="https://t.me/GRTARAB" target="_blank" rel="noreferrer">گراف - عرب</a><br></br><a className="cla" href="https://t.me/Thegraph_KR" target="_blank" rel="noreferrer">گراف - کوریا</a><br></br><a className="cla" href="https://t.me/thegraphpk" target="_blank" rel="noreferrer">گراف - پاکستان</a><br></br><a className="cla" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">گراف - انڈونیشیا</a><br></br><a className="cla" href="https://t.me/thegraphbangladesh" target="_blank">گراف - بنگلہ دیش</a><br></br><a className="cla" href="https://t.me/GraphProtocolCN" target="_blank">گراف - چین</a><br></br><a className="graphiql-link" href="https://t.me/TheGraphUkrainian" rel="noreferrer">گراف - یوکرین</a><br></br><a className="graphiql-link" href="https://t.me/thegraph_pl" target="_blank" rel="noreferrer">گراف - پولینڈ</a><br></br><a className="graphiql-link" href="https://t.me/TheGraph_Nigeria" target="_blank" rel="noreferrer">گراف - نائیجیریا</a></a>
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
  const message = this.createChatbotMessage(<a>گراف کی ٹوکن معیشت کافی پیچیدہ ہے. ٹوکن کے اجراء کے شیڈول اور ٹوکن جلانے کے طریقہ کار کے علاوہ ، گراف پروٹوکول 5 سے 10 سال کی مدت میں حاصل کردہ ٹوکن کو غیر مقفل کرتا ہے۔<hr></hr><table><tr className="indexer-table-header">
  <th>کل ٹوکن کی فراہمی = </th>
  <th>ابتدائی ٹوکن کی فراہمی + </th>
  <th>سالانہ شمارہ - </th>
  <th>سالانہ برننگ</th>
</tr>
</table><br></br>سالانہ اجراء کا فارمولا درج ذیل ہے:<br></br><br></br>networkGRTIssuance = 1000000011247641700<br></br><br></br>blocksYear = 2628000<br></br><br></br>Inflation = networkGRTIssuance * (10^-18) * blocksYear - 1<br></br><br></br>Inflation = 0,0299999999792... = 3% approx
<hr></hr><strong>جی آر ٹی ٹوکن معیشت کا جائزہ</strong><br></br><br></br><table>
<tr className="indexer-table">
  <td><strong>سمبل ٹیب </strong></td>
  <td>جی آر ٹی</td>
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
</table><hr></hr>آپ گراف کی ٹوکن اکنامکس کے بارے میں سب کچھ <a className="cla" href="https://thegraph.academy/ecosystem/graph-token-economics/" target="_blank" rel="noreferrer">یہاں</a> پڑھ سکتے ہیں۔</a>
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
  const message = this.createChatbotMessage(<a>اپ ڈیٹ- ہوسٹڈ سروس کے لئے آگے بڑھنے کا راستہ واضح کریں<br></br><br></br>ہوسٹڈ سروس اچانک تمام چینز کے لئے حمایت ختم نہیں کرے گی. ہوسٹڈ سروس فی چین استعمال کرنے کے لئے آزاد رہے گی، جب تک کہ ہر چین کے لئے بنیادی فعالیت تک نہیں پہنچ جاتا.<br></br><br></br>سب گراف ڈویلپرز کو ایک ضروری خدمت سے محروم نہیں کیا جائے گا جس پر وہ پیداوار میں انحصار کرتے ہیں۔<br></br><br></br>اصل اعلان کی وضاحت کرنے کے لئے (اور اصلاح کرنے کے لئے) جس کا اندازہ لگایا گیا ہے کہ ہوسٹڈ سروس کا خاتمہ 2023 کی پہلی سہ ماہی کے اختتام پر ہوگا:<br></br>منتقلی کا عمل صرف اس وقت چینز پر لاگو ہوتا ہے جب وہ گراف نیٹ ورک کی حمایت کرتے ہیں (جس میں لکھنے کے وقت صرف ایتھروم مین نیٹ شامل ہوتا ہے  ، جس میں گنوسس چین جلد ہی آتا ہے)۔<br></br><br></br>گراف ڈسکورڈ، گراف فورم اور conmigration@thegraph.foundation سے رابطہ کرکے تبصروں کا ہمیشہ خیرمقدم کیا جاتا ہے۔<br></br><br></br>ویب 3 ڈیپس کے لئے سب گراف کی حمایت کرنے کے تقریبا 4 سال کے بعد ، ہوسٹڈ سروس 2023 کی پہلی سہ ماہی میں ڈیپس کی  ڈیسنٹرلائزڈ نیٹ ورک میں منتقلی کے ساتھ بند ہوجائے گی۔ ہوسٹڈ سروس گراف کی غیر مرکزیت کے سفر کے لئے مرکزی تھا، مارکیٹ میں مصنوعات کے فٹ کو حاصل کرنے اور ڈویلپرز کے ساتھ سب گراف کی خصوصیات کی جانچ پڑتال.<br></br><br></br>گراف اسپینول کی لورینا فیبریس نے کمیونٹی کے لئے مندرجہ ذیل سبق بنائے ہیں۔<br></br><br></br>گراف نیٹ ورک: مہذب اعداد و شمار کی صبح<br></br><br></br>سرکاری دستاویزات کے دورے کے لئے، گراف فاؤنڈیشن - ہوسٹڈ سروس کو سنسیٹ کرنے <a className="cla" href="https://thegraph.com/blog/sunsetting-hosted-service" target="_blank" rel="noreferrer">سنسیٹ کرنے کے لئے</a> سڑک.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Sunsetting Hosted Service  End
handlePowerDAOS() {
  const message = this.createChatbotMessage(<a>ڈاو کو پاور کرنے کے لیے گراف کا استعمال: سنیپ شاٹ کیس اسٹڈی<br></br><br></br>گراف ایک اہم پروٹوکول ہے جو ڈی اے او کے ممبران کو اس ڈیٹا کو درست اور آسانی سے پڑھنے کے قابل بناتا ہے، جبکہ ووٹوں کو ٹریک کرنا بھی آسان بناتا ہے۔ ڈیسینٹرالائزڈ خود مختار تنظیمیں، یا ڈاو، وہ تنظیمیں ہیں جو تقسیم شدہ کمیونٹیز کے ذریعے چلائی جاتی ہیں، مرکزی حکام کے برعکس۔ کیونکہ ڈاو میں فیصلہ سازی کا بڑا حصہ بلاکچینز پر ریکارڈ کیے گئے آن چین ڈیٹا پر انحصار کرتا ہے۔<br></br><br></br>سنیپ شاٹ ایک ڈیسینٹرالائزڈ گورننس پروٹوکول ہے جو لوگوں کو ان تنظیموں کے مستقبل کے بارے میں ہم آہنگی اور اجتماعی فیصلے کرنے کے قابل بناتا ہے جس میں وہ شرکت کرتے ہیں۔ <a className="cla" href="https://snapshot.org/#/" target="_blank" rel="noreferrer">سنیپ</a> شاٹ لوگوں کے لیے یہ ممکن بناتا ہے کہ وہ آسانی سے کسی گیس کی فیس کے بغیر تجاویز تخلیق کر سکیں اور ان پر ووٹ دیں۔ یہ پروٹوکول پر کام کرنے والے، ڈاو میں تعاون کرنے، اور ویب 3 میں جدید نئے پروجیکٹس بنانے والے ہزاروں لوگوں کے لیے وسیع پیمانے پر استعمال ہونے والا ٹول ہے۔
  <br></br><br></br>اب تک، سنیپ شاٹ نے اس سے زیادہ ریکارڈ کیا ہے:<br></br>ملین8.5 آف چین ووٹ<br></br>ہزار 8 پروٹوکول مربوط<br></br> ہزار64.8 تجاویز۔<hr></hr><a className="cla" href="https://thegraph.com/blog/using-the-graph-for-daos-snapshot/" target="_blank" rel="noreferrer">یہاں</a> پڑھیں، یہ جاننے کے لیے کہ گراف پاور اسنیپ شاٹ کیسے اور اپنے ڈیپ کو سپرچارج کیسے کریں۔
  
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
  const message = this.createChatbotMessage(<a>گراف ڈے کے دوران ، ٹینڈرائز کو پہلے مائع مصروفیت پروٹوکول کے طور پر تسلیم کیا گیا تھا۔ صارفین ٹینڈر جی آر ٹی کے ذریعہ (ٹی جی آر ٹی) جمع کرسکتے ہیں ، جو خود بخود انعامات جمع کرتا ہے اور اپنی مرضی سے آگے پیچھے تجارت کی جاتی ہے۔ جی آر ٹی ہولڈرز ٹینڈرائز کے ذریعہ تفویض کرسکتے ہیں ، انہیں ٹی جی آر ٹی دے سکتے ہیں۔ ویجرڈ پوزیشن کا ایک ٹوکنائزڈ ورژن جو خود بخود انعامات کو یکجا کرتا ہے اور فوری طور پر جی آر ٹی میں واپس تبدیل کیا جاسکتا ہے۔<br></br><br></br>
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
  <hr></hr>اپ ڈیٹ - جیو جینیسس<br></br><br></br>یانیو - پانچ سال پہلے، ہم میں سے ایک گروپ نے ایتھیریم کے ارد گرد ہونے والی سرگرمی کو دیکھا اور گراف کی تعمیر کی طرف سے حصہ لینے کا فیصلہ کیا. میں نے گراف کی صلاحیت کو دنیا کے تمام عوامی علم اور معلومات کا ایک مہذب عالمی علم گراف بننے کے لئے دیکھا. معلومات کو منظم کرنے اور فراہم کرنے کے لئے عوامی بنیادی ڈھانچے کا استعمال کرتے ہوئے، ہمارے پاس بہتر کھلی اور منصفانہ عمل ہوسکتا ہے تاکہ اس بات پر اثر انداز ہو سکے کہ کون سی معلومات کو سچ سمجھا جاتا ہے. آج ہمارے پاس ایک متحرک مہذب نیٹ ورک ہے اور گراف ہزاروں ڈویلپرز کے لئے بلاکچین کے اعداد و شمار تک مؤثر طریقے سے رسائی حاصل کرنے کے اہم مسئلے کو حل کر رہا ہے، لیکن ہمیں اب بھی مکمل تصویر کو زندگی میں لانے کے لئے ایک اور قدم اٹھانے کی ضرورت ہے.<br></br><br></br>
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

 // Chit Chat KEEP AT END Start


handleDelegateWithWallet() {
  const message = this.createChatbotMessage(<a>اگر آپ میٹا ماسک کے ذریعہ جی آر ٹی کو تفویض کرنا چاہتے ہیں۔ اگر آپ کے پاس پہلے ہی نہیں ہے تو ، میٹا  <a className="cla" href="https://metamask.io/download/" target="_blank" rel="noreferrer">میٹا ماسک ڈاؤن لوڈ کریں۔</a> اگر آپ کو اس کے ساتھ مدد کی ضرورت ہے تو، آپ <a className="cla" href="https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047" target="_blank" rel="noreferrer">یہاں</a> ایک گائیڈ تلاش کرسکتے ہیں.
<br></br><br></br>
آپ <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">یہاں</a> جی آر ٹی کو انڈیکسر کو تفویض کرنے کے بارے میں مرحلہ وار ویڈیو ٹیوٹوریل دیکھ سکتے ہیں۔
<br></br>
اگر آپ ٹیکسٹ گائیڈ پر عمل کرنے کو ترجیح دیتے ہیں تو ، آپ اسے <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">یہاں</a> پڑھ سکتے ہیں۔
<hr></hr>
گراف  پروٹوکول کو تفویض کرنے کے لئے آپ <a className="cla" href="https://thegraph.academy/delegators/delegating-walletconnect/" target="_blank" rel="noreferrer">والیٹ کنیکٹ</a> کا استعمال کرسکتے ہیں۔
<br></br><br></br>
میٹا ماسک کے سوفٹ والیٹ کے بجائے ، آپ اپنے جی آر ٹی کو تفویض کرنے کے لئے ہارڈ والیٹ ، جیسے لیزر بھی استعمال کرسکتے ہیں۔ ہارڈ والیٹ سیکیورٹی کی ایک اور پرت شامل کرسکتے ہیں ، کیونکہ انہیں عام طور پر جسمانی آلے سے ٹرانزیکشن کی تصدیق کی ضرورت ہوتی ہے۔ آپ میٹا ماسک براؤزر ایکسٹینشن  کے ذریعہ میٹا ماسک کو اپنے ہارڈ ویئر والیٹ  سے مربوط  کرسکتے ہیں۔ اس بات کو یقینی بنائیں کہ آپ کے لیجر ڈیوائس پر ایتھیریم ایپ کھلی ہے اور آپ کو اپنے آلے کے ایتھیریم ایپ کے اندر کنٹریکٹ ڈیٹا کی اجازت ہے۔
<br></br><br></br>
میٹا ماسک سے منسلک ہارڈ ویئر والیٹ کا استعمال کرتے ہوئے اپنے جی آر ٹی ٹوکنز کو تفویض کرنے کے لئے ، <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-delegate-your-grt-tokens-with-an-hardware-wallet-aec7751cd5d5" target="_blank" rel="noreferrer">یہاں</a> ایک ٹیوٹوریل پڑھیں۔
</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCurator() {
  const message = this.createChatbotMessage(<a>
<a className="cla" href="https://thegraph.academy/curators/definition/" target="_blank" rel="noreferrer">کیوریٹرز</a> کو پیچیدہ تکنیکی مہارت یا علم رکھنے کی ضرورت نہیں ہے۔ جس چیز کی ضرورت ہے وہ میٹا ماسک کے ذریعہ ٹرانزیکشن کرنے کی صلاحیت ہے۔ اسی طرح ، کیوریٹرز کو انڈیکسرز کے برعکس ، جی آر ٹی کی کم از کم مطلوبہ رقم داؤ پر لگانے کی ضرورت نہیں ہے۔ کیوریٹرز کو ویب 3 ایکو سسٹم کے رجحانات کو سمجھنے اور یہ دیکھنے کی ضرورت ہے کہ آیا سب گراف مفید معلومات فراہم کرتا ہے۔ کیوریٹر کے لئے یہ بھی مددگار ثابت ہوتا ہے کہ وہ اہم مسائل کی نشاندہی کرنے کے قابل ہو جس کا مطلب یہ ہوسکتا ہے کہ سب گراف ٹوٹ گیا ہے۔
    <br></br><br></br>
    مندرجہ ذیل گائیڈز آپ کو وہ تمام معلومات فراہم کریں گے جو آپ کو سب گراف کی طرف اشارہ کرنے سے پہلے جاننے کی ضرورت ہے اور اعتماد کے ساتھ اسے کیسے کرنا ہے۔
    <br></br><br></br>
    اس کیوریٹر کا <a className="cla" href="https://medium.com/@paulieb.eth/tips-and-tricks-to-evaluate-and-determine-if-a-subgraph-is-legitimate-c67f16e2205a" target="_blank" rel="noreferrer"> گائیڈ</a> "اگر سب گراف جائز ہے تو اس کا جائزہ لینے اور اس کا تعین کرنے کے لئے نکات اور چالیں" شروع کرنے کے لئے بہترین جگہ ہے۔ ایک بار جب آپ گائیڈ پڑھ لیتے ہیں اور نیچے دیئے گئے سبق دیکھتے ہیں تو ، آپ اپنے پہلے سب گراف کی طرف اشارہ کرنے کے لئے ایک عمدہ پوزیشن میں ہوں گے۔
   <br></br><br></br>
   کیوریٹرز جی آر ٹی لئے کیوریٹرز کے ذریعہ تخلیق کردہ ایک <a className="cla" href="https://t.me/CurationStation" target="_blank" rel="noreferrer">کیوریشن اسٹیشن</a> اسٹیشن میں شامل ہوں۔ اگر ضرورت ہو تو آپ یہاں مزید مدد لے سکتے ہیں.
  <br></br><br></br>
  مندرجہ ذیل ٹیوٹوریل ویڈیوز <a className="cla" href="https://thegraph.com/explorer/profile?id=0x87eba079059b75504c734820d6cf828476754b83&view=Indexing" target="_blank" rel="noreferrer">ڈیٹا نیکسس</a> کے ذریعہ  کیوریشن کے بارے میں تیار کی گئیں:
<br></br>
<a className="cla" href="https://www.youtube.com/watch?v=-7qWi2do-1E" target="_blank" rel="noreferrer">گراف کے لئے کیوریٹر کیا ہے؟</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=unzQvSZIORg" target="_blank" rel="noreferrer">سب گراف کی تصدیق کر رہا ہے</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=zJswFILfADg" target="_blank" rel="noreferrer">سب گراف کی طرف اشارہ کرنے کا طریقہ</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=u76dxQPdS9c" target="_blank" rel="noreferrer">ٹرانزیکشن نقص پر دستخط کریں</a><hr></hr>اگر آپ کچھ مفید کیوریٹر ٹولز چاہتے ہیں تو ، صرف پوچھیں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCuratorTools() {
  const message = this.createChatbotMessage(<a>کیوریٹرز کے لئے مفید اوزار<br></br><br></br>
  سب گراف اسٹوڈیو میں بلنگ کیسے کام کرتی ہے ، <a className="cla" href="https://thegraph.com/docs/en/billing/" target="_blank" rel="noreferrer">یہاں</a> جانیں۔
  <br></br><br></br>
  معلوم کریں کہ گراف <a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">یہاں</a> اپنے بلنگ سسٹم کے لئے کثیر الاضلاع کا استعمال کس طرح کرتا ہے۔
  <hr></hr>
  سب گراف کی انڈیکسنگ کی حیثیت کی جانچ <a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">پڑتال کریں</a><br></br><br></br>
  آپ یہاں سے ڈیٹا دیکھ سکتے ہیں:
  <br></br>مین نیٹ مشاورت کی شرح (روزانہ)<br></br>مین نیٹ مشاورت کی شرح (روزانہ)<br></br>مین نیٹ طلب فیس (ماہانہ، 30 دن کی حرکت پذیری اوسط)<br></br>نئے سب گراف (ماہانہ)<br></br>کل سب گراف<br></br>اوسط سب گراف کی شرح (ماہانہ، 30 دن کی حرکت پذیری اوسط)<br></br>سب گراف مشاورت کی فیس (30 دن)<br></br>طلب کی شرح / سگنل کی شرح (30 دن)<br></br>سب گراف مشاورت کی فیس (30 دن) - ٪<br></br>
  <a className="cla" href="http://michael.lesane.net/graphdash/" target="_blank" rel="noreferrer">یہاں.</a><br></br><br></br>
  یا سبسکرپشن بلنگ چیک کریں ، <a className="cla" href="http://michael.lesane.net/graphdash/billing" target="_blank" rel="noreferrer">یہاں</a>۔
  <br></br><br></br>
  <a className="cla" href="https://dapplooker.com/dapp/graph-network-billing-120192" target="_blank" rel="noreferrer">گراف نیٹ ورک بلنگ ڈیش بورڈ</a><br></br><br></br>
  <a className="cla" href="https://dapplooker.com/dapp/graph-network-user-billing-balance-120204" target="_blank" rel="noreferrer">صارف بلنگ بیلنس</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleHostedService() {
  const message = this.createChatbotMessage(<a>ہوسٹڈ سروس گراف کو حاصل کرنے میں اہم کردار ادا کرتی رہی ہے جہاں یہ آج ہے، لیکن نقطہ نظر ہمیشہ ایک مہذب انڈیکسنگ پروٹوکول اور عالمی اے پی آئی بنانے کے لئے رہا ہے. جب گراف نیٹ ورک زندہ ہوجاتا ہے تو ، ڈویلپرز کے پاس آخر کار واقعی سرور لیس ڈیسنٹرلائزڈ ایپلیکیشنز فراہم کرنے کی صلاحیت ہوگی جو لوڈ کرنے میں تیز اور قابل اعتماد ہیں۔ مرکزی انفراسٹرکچر کی ضرورت نہیں ہوگی کیونکہ ایپلیکیشنز کیوریز پر کارروائی کرنے کے لئے انڈیکسرز کے موثر نیٹ ورک سے براہ راست رابطہ قائم کرسکتی ہیں۔<br></br><br></br>ایتھیریم سب گراف, گراف کے مہذب نیٹ ورک میں منتقل ہونا جاری رکھے ہوئے ہیں۔ جیسا کہ ویب 3 اپنانے میں اضافہ ہوتا ہے، اسی طرح پیمانے اور کارکردگی کی مانگ بھی بڑھتی ہے. ڈویلپرز کو ایک اہم انتخاب کا سامنا کرنا پڑتا ہے: مرکزی ٹیکنالوجی پر انحصار جاری رکھیں یا مہذب بنیادی ڈھانچے پر سوئچ کریں۔<br></br>لمبی عمر اور اعتبار کے لئے ، کچھ بھی غیر مرکزیت کو شکست نہیں دیتا ہے۔ ناکامی کے مرکزی نکات سے گریز کرکے ، آپ اپنے صارفین کو ایک ویب 3 ایپلیکیشن پیش کررہے ہیں جس تک وہ مستقل طور پر رسائی حاصل کرسکتے ہیں۔ بہت سے منصوبوں نے پہلے ہی پیداوار میں نیٹ ورک کی توثیق کی ہے اور اب آپ کے منصوبے کو منتقل کرنے کا بہترین وقت ہے.<br></br><br></br>
  <br></br>
  اگر آپ کسی سب گراف کو ہوسٹڈ سروس سے مین نیٹ پر منتقل کرنے کے بارے میں مرحلہ وار گائیڈ تلاش کر رہے ہیں، تو <a className="cla" href="https://codex.thegraph.com/repositories-and-documentation/official-documentation/hosted-service/migrating-subgraph" target="_blank" rel="noreferrer">یہاں</a> دیکھیں۔
  اگر آپ ویڈیو ٹیوٹوریل کو ترجیح دیتے ہیں تو ، ذیل میں دیکھیں۔<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=syXwYEk-VnU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleChainlink() {
  const message = this.createChatbotMessage(<a>گراف ایتھیریم اور آئی پی ایف ایس جیسے نیٹ ورکس سے پوچھ گچھ کے لئے ایک انڈیکسنگ پروٹوکول ہے۔ کوئی بھی اوپن اے پی آئی بنا اور شائع کرسکتا ہے ، جسے سب گراف کہا جاتا ہے ، جس سے ڈیٹا تک رسائی حاصل کرنا آسان ہوجاتا ہے۔<hr></hr>چین لنک ایک مہذب اوریکل نیٹ ورک ہے جو سمارٹ کنٹریکٹس کو آف چین ڈیٹا ذرائع ، ویب اے پی آئی ، اور روایتی بینک ادائیگیوں تک محفوظ طریقے سے رسائی حاصل کرنے کے قابل بناتا ہے۔<hr></hr>گراف پروٹوکول کے ٹیگن کلائن اور ڈیو کاجپسٹ کے ساتھ یہاں ایک ویڈیو وضاحت  ہے۔ وہ ایک مہذب ویب 3 کی تعمیر میں گراف کی اہم اہمیت پر تبادلہ خیال کرتے ہیں اور چین لنک اور گراف کے مابین اختلافات کی وضاحت کرتے ہیں۔<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=HOS9g0rKP24'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIndexerOfficeHours() {
  const message = this.createChatbotMessage(<a>انڈیکسر آفس آورز ایک غیر رسمی میں چلنے والا کلینک ہے جس میں کسی کو بھی انڈیکسر کو نافذ کرنے کے بارے میں مشورہ حاصل کرنے کے لئے ، چاہے میننیٹ یا ٹیسٹ نیٹ پر ہو۔ اگر آپ خرابیوں کا سراغ لگانے کے بارے میں مزید جاننا چاہتے ہیں ، یا صرف انڈیکسنگ کے بارے میں سوالات پوچھنا چاہتے ہیں تو ، یہ آپ کے لئے کلینک ہے۔<br></br><br></br>
  آپ <a className="cla" href="https://graphops.notion.site/Indexer-Office-Hours-952e0b50a65144768aab922e2c9d102a" target="_blank" rel="noreferrer">یہاں</a> تمام انڈیکسر آفس کے اوقات کو پکڑ سکتے ہیں۔
   </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleFireHose() {
  const message = this.createChatbotMessage(<a>فائر ہوز (اسٹریمنگ فاسٹ کے ذریعہ تیار کردہ) کے ذریعہ ڈیٹا پروسیسنگ ، لکیری انڈیکسنگ کی کارکردگی اور مطابقت پذیری کی رفتار میں اضافہ کرتی ہے ، اور متوازی پروسیسنگ کو چالو کرکے ڈیٹا چپلتا کو زیادہ سے زیادہ کرتی ہے۔ فائر ہوز کسی بھی بلاکچین کے ساتھ گراف نوڈ کے لئے ایک عام انٹرفیس بناتا ہے اور قریبی جیسے اعلی کارکردگی کی چینز کو سنبھالنے کی صلاحیت کو بہت بہتر بناتا ہے.<br></br><br></br>
  آپ <a className="cla" href="https://firehose.streamingfast.io/" target="_blank" rel="noreferrer">یہاں</a> اس کے بارے میں مزید جاننے کے لئے فائر ہوز کی تجویز پڑھ سکتے ہیں
  <hr></hr>ان کے بارے میں مزید جاننے کے لئے مجھ سے سٹریمنگ فاسٹ کے بارے میں پوچھیں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoreDevs() {
  this.handleButtonCoreDevsChat = this.handleButtonCoreDevsChat.bind(this);
  const message = this.createChatbotMessage(<a>گراف کے بنیادی ڈویلپرز یہ ہیں:<br></br><br></br><a className="cla" href="https://edgeandnode.com/blog/introducing-edge-and-node/" target="_blank"><strong>ایج اینڈ نوڈ</strong></a> - ڈیسنٹرلائزڈ پروٹوکول تیار کرنا اور ویب 3 کو آگے بڑھانا۔ گراف کے پیچھے ابتدائی ٹیم.<br></br><a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank"><strong>تصویر</strong></a> - نوڈ انفراسٹرکچر اور کثیر بلاکچین کی حمایت کو بہتر بنانا.<br></br><a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank"><strong>گراف فاؤنڈیشن</strong></a> - ایکو سسٹم کو سنبھالنا ، گرانٹ جاری کرنا ، اور کمیونٹی کی حمایت کرنا۔<br></br><a className="cla" href="https://www.streamingfast.io/" target="_blank"><strong>اسٹریمنگ فاسٹ</strong></a> - سب گراف انڈیکسنگ کی کارکردگی کو بہتر بنانا اور ویب 3 ڈویلپمنٹ ٹولنگ کی حمایت کرنا۔<br></br><a className="cla" href="https://www.semiotic.ai/" target="_blank" ><strong>سیمیوٹک</strong></a>- مصنوعی ذہانت کی اختراعات اور آر اینڈ ڈی کے ذریعے گراف نیٹ ورک کو بڑھانا۔<br></br><a className="cla"href="https://www.the-guild.dev/" target="_blank"><strong>گلڈ</strong></a> - سب گراف ٹولنگ کی تعمیر اور گراف کیو ایل اے پی آئی کی بہتری کی ترقی.<br></br><a className="cla" href="https://graphops.xyz/" target="_blank"><strong>گراف اوپس</strong></a> - گراف پروٹوکول کے ذریعہ بلاکچین کے اعداد و شمار کو نکالنا ، تبدیل کرنا اور خدمت کرنا۔<br></br><a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank"><strong>میساری</strong></a> - باخبر فیصلوں اور سرمایہ کاری کے لئے شفافیت اور عمارت کے اوزار لانا۔<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonCoreDevsChat}><strong>کور ڈویلپرز </strong></button><br></br><br></br>تمام کور ڈویلپرز کالز کو پکڑتے ہیں۔ <a className="cla" href="https://www.youtube.com/playlist?list=PLTqyKgxaGF3Tj_A6eqV8V_aQoRwd2oHa_" target="_blank">یہاں </a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleFigment() {
  const message = this.createChatbotMessage(<a>فگمنٹ ٹورنٹو میں واقع ایک کینیڈین رجسٹرڈ اور وینچر کیپٹل فنڈڈ کمپنی ہے۔ دنیا کے سب سے بڑے جی آر ٹی ہولڈرز کی خدمت کر رہے ہیں. 30 سال سے زیادہ کے تجربے کے ساتھ کامیابی کے ساتھ انٹرنیٹ انفراسٹرکچر کمپنیوں کو اسکیل کرنا.<hr></hr>اسٹیک آؤٹ - فگمنٹ پروف آف اسٹیک (پی او ایس) توثیق کنندگان کا ایک انتہائی محفوظ نیٹ ورک چلاتا ہے جو ٹوکن ہولڈرز کو نیٹ ورکس کو محفوظ بنانے ، حکمرانی میں حصہ لینے اور کارکردگی حاصل کرنے کے قابل بناتا ہے۔<br></br>
  اسٹیک آؤٹ - فگمنٹ پروف آف اسٹیک (پی او ایس) توثیق کنندگان کا ایک انتہائی محفوظ نیٹ ورک چلاتا ہے جو ٹوکن ہولڈرز کو نیٹ ورکس کو محفوظ <a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank" rel="noreferrer">یہاں</a>نے ، حکمرانی میں حصہ لینے اور کارکردگی حاصل کرنے کے قابل بناتا ہے۔
  <br></br><br></br>سافٹ ویئر - فگمنٹ کا ڈیٹا ہب پلیٹ فارم ڈویلپرز کو پروٹوکول کے ماہرین بننے کے بغیر بلاکچین کی سب سے طاقتور اور انوکھی خصوصیات کو استعمال کرنے کی اجازت دیتا ہے ، جس سے نئی ویب 3 ایپلیکیشنز کی ترقی میں تیزی آتی ہے۔<br></br>
  فگمنٹ کے ڈیٹا ہب پلیٹ فارم کے بارے میں مزید جاننے کے لئے  ، <a className="cla" href="https://datahub.figment.io/" target="_blank" rel="noreferrer">یہاں</a> دیکھیں۔
  <br></br><br></br>
  کیپٹل - فگمنٹ کیپٹل نئے اور انتہائی جدید پی او ایس منصوبوں کے لئے بیج کی مالی اعانت اور نمو کی حمایت فراہم کرتا ہے۔<hr></hr>
  سب گرافس استعمال کرنے والے ڈویلپرز ڈیٹا ہب کے اندر آسانی سے اپنے سب گراف کی نگرانی کرسکتے ہیں۔ اس سے ڈویلپرز کو اپنے سب گرافس کی کارکردگی اور وشوسنییتا کو بہتر بنانے میں مدد ملتی ہے۔<br></br>آپ گراف کو کائنات کے ایکو سسٹم میں لانے کے بارے میں یہاں پڑھ سکتے ہیں۔<br></br>گراف اسپینول کی لورینا فیبریس نے کمیونٹی کے لئے مندرجہ ذیل سبق بنائے ہیں۔<hr></hr>
  ایک مہذب پروٹوکول میں سب سے بڑے انضمام میں سے ایک میں گراف میں شامل ہوتا ہے۔ 80 ملین جی آر ٹی کی کور ڈویلپر گرانٹ سے نوازا جاتا ہے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSemiotic() {
  const message = this.createChatbotMessage(<a>سیمیوٹک لیبز بلاکچین پر مہذب مارکیٹوں کے لئے خود کار طریقے سے فیصلہ سازی کے اوزار بنا رہا ہے. ان کا خیال ہے کہ اے آئی اور کریپٹوگرافی کا امتزاج ویب 3 کو چلائے گا ، جو مستقبل کا مہذب انٹرنیٹ ہے۔<hr></hr>سیمیوٹک لیبز بلاکچین پر مہذب مارکیٹوں کے لئے خود کار طریقے سے فیصلہ سازی کے اوزار بنا رہا ہے. ان کا خیال ہے کہ اے آئی اور کرپٹوگرافی کا امتزاج ویب 3 کو چلائے گا ، جو مستقبل کا مہذب انٹرنیٹ ہے۔<br></br>ڈیپ آر ایل کا استعمال کرتے ہوئے ، وہ خود مختار ایجنٹ تیار کرتے ہیں جو دوطرفہ یا نیلامی کی قسم کے معاہدوں میں قیمت اور دیگر شرائط پر بات چیت کرسکتے ہیں۔<br></br>پیشہ ورانہ طرز عمل والے ایجنٹوں کو مہذب نیٹ ورک کی فلاح و بہبود کو بہتر بنانے کے لئے تربیت دی جاسکتی ہے۔<br></br><br></br>تخروپن ماحول اے آئی ایجنٹوں کو مؤثر طریقے سے تربیت دینے اور بینچ مارک کے خلاف ان کی کارکردگی کی جانچ کرنے کے لئے ضروری ہیں.<br></br>وہ مہذب مارکیٹوں کی معاشیات پر قبضہ کرنے اور نیٹ ورک میں حصہ لینے والے متعدد ایجنٹوں کو تربیت دینے کے لئے حقیقت پسندانہ سمیلیٹر تیار کرتے ہیں۔<br></br>تخروپن ماحول حقیقی دنیا کی ناکامیوں سے پہلے کمزوریوں (مثال کے طور پر، مخالف حملوں) کو تلاش کرنے کے لئے نئے پروٹوکول کی جانچ پڑتال میں بھی مفید ہیں.<br></br>ہومومورفک خفیہ کاری خفیہ کردہ اعداد و شمار پر حساب کتاب انجام دینا ممکن بناتی ہے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMessari() {
  const message = this.createChatbotMessage(<a>میساری معیاری ، پیچیدہ ، درست ، اور اعلی معیار کے پروٹوکول سب گراف تیار کرنے اور برقرار رکھنے کے لئے اپنے ڈویلپر ٹیلنٹ اور ڈومین کی مہارت لاتا ہے۔ تمام سب گراف اوپن سورس ہوں گے اور عام کمیونٹی کے لئے دستیاب ہوں گے۔ ہر سب گراف کو مہذب نیٹ ورک میں منتقل کردیا جائے گا۔ اس کے علاوہ ، میساری سب گراف ورکنگ گروپس کی قیادت کریں گے ، بنیادی پروٹوکول کی کوششوں کو مطلع کرنے میں مدد کے لئے آراء فراہم کریں گے ، سب گراف کے بہترین طریقوں کا اشتراک کریں گے ، اور کسی بھی پروٹوکول کے لئے کمیونٹی کے معیار ات بنانے میں مدد کریں گے۔<br></br><br></br>
  آپ گراف ایکو سسٹم کے اندر میسری کے کردار کے بارے میں مزید جان  سکتے ہیں۔
  <a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank" rel="noreferrer">یہاں</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphQLApi() {
  const message = this.createChatbotMessage(<a><strong>GraphQL API</strong><br></br><br></br>
  <a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/" target="_blank" rel="noreferrer">یہ</a> 
  گائیڈ گراف کیو ایل طلب اے پی آئی کی وضاحت کرتا ہے جو گراف پروٹوکول کے لئے استعمال ہوتا ہے۔
  <br></br><br></br>
  
  <a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#queries" target="_blank" rel="noreferrer">کیوریز</a> - آپ کے سب گراف اسکیما میں ، آپ اداروں نامی اقسام کی وضاحت کرتے ہیں۔ ہر ادارے کی قسم کے لئے، ایک ہستی اور ہستی فیلڈ اعلی درجے کی طلب کی قسم میں پیدا کیا جائے گا.
  <br></br><br></br>
  <a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#sorting" target="_blank" rel="noreferrer">درجہ بندی </a> - جب کسی مجموعے سے پوچھ گچھ کی جاتی ہے تو ، آرڈر بائی پیرامیٹر کو کسی مخصوص وصف کے ذریعہ ترتیب دینے کے لئے استعمال کیا جاسکتا ہے۔ اس کے علاوہ ، آرڈر ڈائریکشن کو درجہ بندی کی سمت کی وضاحت کرنے کے لئے استعمال کیا جاسکتا ہے ، اے ایس سی چڑھنے کے لئے ، یا ڈی ایس سی کو اترنے کے لئے۔<br></br><br></br>
  <a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#pagination" target="_blank" rel="noreferrer">پیجنگ</a> - جب کسی مجموعے سے پوچھ گچھ کی جاتی ہے تو ، پہلا پیرامیٹر مجموعہ کے آغاز سے صفحہ بندی کے لئے استعمال کیا جاسکتا ہے۔<br></br><br></br><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#filtering" target="_blank" rel="noreferrer">فلٹرنگ</a> - آپ مختلف خصوصیات کے ذریعہ فلٹر کرنے کے لئے اپنے کیوریز میں کہاں پیرامیٹر استعمال کرسکتے ہیں۔<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#time-travel-queries" target="_blank" rel="noreferrer">ٹائم ٹریول کیوریز</a></strong> - آپ اپنے اداروں کی حیثیت کو نہ صرف آخری بلاک کے لئے چیک کرسکتے ہیں ، جو پہلے سے طے شدہ ہے ، بلکہ ماضی میں صوابدیدی بلاک کے لئے بھی۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleParticipantUpdate() {
  const message = this.createChatbotMessage(<a>تازہ ترین جی آر ٹی شراکت دار اپ ڈیٹ گراف کی تیسری سہ ماہی 2022 کی جھلکیوں کا احاطہ کرتا ہے ، جس میں کلیدی اعداد و شمار ، اعلانات اور سنگ میل شامل ہیں۔ ریکارڈنگ دیکھیں اور گراف ایکو سسٹم کے اندر ہونے والی تمام عمارت اور جدت طرازی کے بارے میں جانیں۔<br></br><br></br><Embed className="embed" isDark url='https://youtu.be/58el3_9oJ6Q'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}



handleTheGuild() {
  const message = this.createChatbotMessage(<a> گلڈ کا اعلی درجے کا اوپن سورس ایکو سسٹم ماڈیولر ، اوپن سورس اور جامع پلیٹ فارم کے ساتھ اپنے اے پی آئی انفراسٹرکچر کے لئے آپ کی ضرورت کی ہر چیز کا احاطہ کرتا ہے۔<hr></hr><strong>ایکو سسٹم</strong><br></br><br></br>اس کے اعلی درجے کے ماڈیولر حل آہستہ آہستہ انفرادی اوپن سورس لائبریریوں کے طور پر یا ایک مکمل متحد اے پی آئی پلیٹ فارم کے طور پر اپنایا جا سکتا ہے. ان کے اوپن سورس ، پائیدار اے پی آئی ٹول کٹ کو دریافت کریں جو آپ کو <a className="cla" href="https://www.the-guild.dev/#platform" target="_blank" rel="noreferrer">یہاں</a> اپنے اے پی آئی انفراسٹرکچر کو اسکیل کرنے کے لئے درکار ہر چیز کا احاطہ کرتا ہے۔ 
  <br></br><br></br>
  آپ <a className="cla" href="https://www.the-guild.dev/about-us" target="_blank" rel="noreferrer">یہاں</a> گلڈ کے بارے میں مزید جان سکتے ہیں.
  <br></br><br></br>
  آپ ان خدمات کے بارے میں مزید جان سکتے ہیں جو وہ <a className="cla" href="https://www.the-guild.dev/services" target="_blank" rel="noreferrer">یہاں</a> فراہم کرتے ہیں.
  </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphOps() {
  const message = this.createChatbotMessage(<a>گراف اوپس ویب کے مستقبل کی تعمیر کر رہا ہے۔ اس کا مشن یہ ہے: ہم ایک غیر سنسر شدہ، منصفانہ اور خود مختار نیٹ ورک کی تعمیر کے مشن کی طرف سے حوصلہ افزائی کر رہے ہیں. عوامی اعداد و شمار اس مشن کے دل میں ہے، اور ہم اپنی دنیا کے لئے اداروں اور ایپلیکیشنز کی اگلی بڑی لہر کو طاقت دینے کے لئے کھلے اعداد و شمار کے معیار اور پروٹوکول بنانے پر ترقی کرتے ہیں.<br></br><br></br>گراف اوپس ایک بلاکچین ڈیٹا انفراسٹرکچر کمپنی ہے۔ وہ گراف پروٹوکول کے ذریعہ بلاکچین ڈیٹا کو نکالتے ہیں ، تبدیل کرتے ہیں اور اس کی خدمت کرتے ہیں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphDay() {
  const message = this.createChatbotMessage(<a>سان فرانسسکو کے تاریخی پیلس آف فائن آرٹس میں 2 جون ، 2022 کو ہونے والے حالیہ گراف ڈے کا ایک جائزہ یہ ہے۔<hr></hr>
  پورے واقعہ کے بارے میں مزید جاننے کے لئے <a className="cla" href="https://thegraph.com/graph-day/2022/" target="_blank" rel="noreferrer">گراف ڈے</a> اور <a className="cla" href="https://thegraph.com/graph-hack/2022/" target="_blank" rel="noreferrer">گراف ہیک</a> ملاحظہ کریں.<hr></hr>
  گراف کمیونٹی ایک ساتھ آنے اور ویب 3 ، ڈیپس ، پروٹوکول ، اور انٹرنیٹ کے مستقبل پر توجہ مرکوز کرنے کے قابل تھی۔ پروٹوکول اور ڈیپس کے معروف ڈویلپرز  نے دکھایا کہ کس طرح ویب 3 کمیونٹی انسانی ہم آہنگی کی نئی شکلوں کی رہنمائی کر رہی ہے۔
  <br></br><br></br>
  گراف فاؤنڈیشن کی ڈائریکٹر ایوا بیلن کا خیرمقدم ہے۔ اس کے بعد گراف کے شریک بانی اور ایج اینڈ نوڈ کے سی ای او یانیو ٹال کی طرف سے ایک متاثر کن گفتگو ہوئی۔ اس کے بعد، کمیونٹی کو گراف سے ایک پریزنٹیشن موصول ہوئی جس میں 'کیوں غیر مرکزیت کے معاملات' پر. اس کے بعد ایک کے بعد ایک دلچسپ اعلانات سامنے آئے:<br></br>ہوسٹڈ سروس کے خاتمے کا نوٹس<br></br>ثانوی نشریات کا اعلان<br></br>جیو ریلیز کا اعلان<br></br>اس کے بعد کمیونٹی کو ڈیانا چن ، کیمیلا راموس ، کرس ایونگ اور ڈیرک میئر کے ساتھ پینل ٹاک میں مدعو کیا گیا تھا۔ ''آپ کو ایک قوم کی ضرورت ہے۔''<br></br><br></br>
  آپ  گراف ڈے اور گراف ہیک پر ٹیگن کلائن کے ساتھ جی آر ٹی آئی کیو کے پوڈ کاسٹ کو سن سکتے ہیں ، جو ایونٹ سے ٹھیک پہلے ہوا تھا ، <a className="cla" href="https://www.grtiq.com/grtiq-podcast-special-release-graph-day/" target="_blank" rel="noreferrer">یہاں</a>۔
  <br></br><br></br>انٹرنیٹ کے مستقبل کو دیکھیں کیونکہ یہ نیچے گراف ڈے 2022 لائیو اسٹریم سے براہ راست کارکردگی کا مظاہرہ کرتا ہے۔<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=yLQmdM5DWSk&list=PLTqyKgxaGF3T2Ginisuf2nUY6yDi_WbT3&index=11'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsTheWeb() {
  const message = this.createChatbotMessage(<a>ویب نے سالوں میں بہت کچھ تیار کیا ہے ، اور آج اس کی ایپلیکیشنز اپنے ابتدائی دنوں سے ہی تقریبا ناقابل شناخت ہیں۔ ویب کے ارتقاء کو اکثر تین الگ الگ مراحل میں تقسیم کیا جاتا ہے: ویب 1 ، ویب 2 ، اور ویب 3۔<hr></hr><strong>ویب 1</strong><br></br>ویب 1.0 ویب کا پہلا تکرار تھا۔ زیادہ تر شرکاء مواد کے صارفین تھے اور تخلیق کار ڈویلپرز تھے جنہوں نے ایسی ویب سائٹس تیار کیں جن میں بنیادی طور پر متن یا تصویر کی شکل میں پیش کردہ معلومات شامل تھیں۔ ویب 1.0 تقریبا 1991 سے 2004 تک جاری رہا.<br></br>ویب 1.0 ایسی سائٹس پر مشتمل تھا جو متحرک ایچ ٹی ایم ایل کے بجائے جامد مواد پیش کرتے تھے۔ ڈیٹا اور مواد کو ڈیٹا بیس کے بجائے جامد فائل سسٹم سے پیش کیا گیا تھا ، اور سائٹس زیادہ تعامل نہیں تھی۔<strong>ویب 2</strong><br></br>ہم میں سے بیشتر نے بنیادی طور پر ویب کو اس کی موجودہ شکل میں تجربہ کیا ہے ، جسے عام طور پر ویب 2 کے نام سے جانا جاتا ہے۔ آپ ویب 2 کو تعامل اور سوشل ویب کے طور پر سوچ سکتے ہیں۔<br></br>ویب 2 کی دنیا میں ، آپ کو تخلیق کے عمل میں حصہ لینے کے لئے ڈویلپر بننے کی ضرورت نہیں ہے۔ بہت ساری ایپس کو اس طرح سے ڈیزائن کیا گیا ہے جو کسی کو بھی تخلیق کار بننے کی اجازت دیتا ہے۔<br></br>اگر آپ ایک خیال پیدا کرنا چاہتے ہیں اور اسے دنیا کے ساتھ اشتراک کرنا چاہتے ہیں تو، آپ اسے کر سکتے ہیں. اگر آپ کوئی ویڈیو اپ لوڈ کرنا چاہتے ہیں اور لاکھوں لوگوں کو اسے دیکھنے ، اس کے ساتھ بات چیت کرنے اور اس پر تبصرہ کرنے کی اجازت دینا چاہتے ہیں تو ، آپ ایسا بھی کرسکتے ہیں۔<br></br>ویب 2 آسان ہے، اصل میں، اور اس کی سادگی کی وجہ سے، دنیا بھر میں زیادہ سے زیادہ لوگ تخلیق کار بن رہے ہیں.<br></br>اس کی موجودہ شکل میں ویب بہت سے طریقوں سے واقعی بہت اچھا ہے، لیکن کچھ علاقے ایسے ہیں جہاں ہم بہت بہتر کر سکتے ہیں.<br></br><br></br><strong>ویب 3</strong><br></br>ویب 2 اور ویب 3 کے مابین کچھ بنیادی اختلافات ہیں ، لیکن غیر مرکزیت بنیادی طور پر ہے۔<br></br>اس کے بجائے ، ویب 3 ایپلیکیشنز بلاکچینز پر چلتی ہیں ، بہت سے نوڈس (سرورز) پیئر ٹو پیر کے ڈیسنٹرلائزڈ نیٹ ورکس ، یا ان دونوں کا ایک مجموعہ جو کرپٹو اکنامک پروٹوکول تشکیل دیتے ہیں۔ ان ایپس کو اکثر ڈیپس (ڈیسنٹرلائزڈ ایپس) کہا جاتا ہے ، اور آپ اس اصطلاح کو اکثر ویب اسپیس 3 میں استعمال ہوتے ہوئے دیکھیں گے۔
  </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCryptocurrencies() {
  const message = this.createChatbotMessage(<a>یہ نام کریپٹوگرافی اور کرنسی کا ایک مجموعہ ، یا مخفف ہے۔ روایتی کرنسیوں کے برعکس (عام طور پر "فیٹ کرنسیوں" کے طور پر کہا جاتا ہے)، جو جسمانی بلوں اور سکوں کا استعمال کرتے ہیں، کرپٹو کرنسیاں مکمل طور پر ڈیجیٹل ہیں. کسی بھی دوسری کرنسی کی طرح ، آپ سامان اور خدمات خریدنے کے لئے کرپٹو کرنسی کا استعمال کرسکتے ہیں ، اور آپ اسے دنیا بھر میں دوستوں اور خاندانوں کے مابین منتقل کرسکتے ہیں۔ تاہم ، کرپٹو کرنسی میں کچھ اضافی خصوصیات ہیں جو اسے روایتی کرنسیوں سے الگ کرتی ہیں۔<br></br><br></br>جب آپ کسی بینک میں فیٹ کرنسی جمع کرتے ہیں تو ، آپ بنیادی طور پر اپنا پیسہ اس بینک کو قرض دے رہے ہوتے ہیں اور اس بات پر بھروسہ کرتے ہیں کہ جب آپ اس کی درخواست کریں گے تو وہ آپ کو واپس کردیں گے۔ اگرچہ یہ عام طور پر دونوں فریقوں کے لئے اچھی طرح سے کام کرتا ہے ، لیکن بینک آپ کے پیسے سے دوسروں کو قرض دے کر اور ان قرضوں پر سود وصول کرکے فائدہ اٹھاتے ہیں۔ اس کے علاوہ، بینک اضافی فیس وصول کرتے ہیں، جیسے واپسی کی فیس یا ماہانہ اکاؤنٹ کی فیس، اور کم از کم بیلنس کی ضروریات بھی ہوسکتی ہیں.<br></br><br></br>ایک روایتی بینک کو مرکزی سمجھا جائے گا، کرپٹو کرنسی غیر مرکزی ہے، اس کا مطلب یہ ہے کہ اس میں ہر چیز کو کنٹرول کرنے والا ایک بھی شخص نہیں ہے. در حقیقت ، ہزاروں لوگ ہیں جو بلاکچین پر ہونے والے ہر ٹرانزیکشن کی توثیق کرنے میں مدد کرتے ہیں ، اور اس کا مطلب ہے کہ آپ کے پاس قابل اعتماد ماحول ، بہتر ڈیٹا مفاہمت ، اور درد کے نکات کم ہیں۔ یہ کہنے کا ایک صاف ستھرا طریقہ ہے کہ آپ اپنے اثاثوں کو کنٹرول کرتے ہیں۔<br></br><br></br>کرپٹو کرنسیوں کی بڑھتی ہوئی رازداری ، سیکیورٹی ، پورٹیبلٹی اور شفافیت کا مطلب ہے کہ ٹرانزیکشن میں ہیرا پھیری کرنے ، رقم کی فراہمی کو تبدیل کرنے ، یا کھیل کے وسط میں قواعد کو ایڈجسٹ کرنے کی کوئی گنجائش نہیں ہے۔ کرپٹو کرنسیاں ایک تنظیم نہیں ہیں، وہ اپنے فنڈز کو کنٹرول نہیں کرتے ہیں. آپ اپنا بینک بن سکتے ہیں.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsABlockchain() {
  const message = this.createChatbotMessage(<a>بلاکچین کو ایک لیجر کے طور پر سوچا جاسکتا ہے جو کرپٹو کرنسی کے ٹرانزیکشن کو اسی طرح ٹریک کرنے کے لئے استعمال ہوتا ہے جس طرح چیک بک کے اخراجات کو چیک بک ریکارڈ کے ساتھ ٹریک کیا جاتا ہے۔ بلاکچین کرپٹو کرنسیوں ، جیسے ایتھیریم یا بٹ کوائن کے ساتھ کیے گئے ٹرانزیکشن کو ریکارڈ کرنے کا ایک نظام ہے۔ ٹرانزیکشن ڈیٹا بہت سے ٹرانزیکشنز کے بلاک میں ذخیرہ کیا جاتا ہے. ایک بار جب بلاک بھر جاتا ہے تو ، ایک نیا بلاک تشکیل دیا جاتا ہے جو پچھلے بلاک اور چینز کو پچھلے بلاک میں حوالہ دیتا ہے۔ لہذا بلاکچین کی اصطلاح.<br></br><br></br>کچھ بلاکچینز ، جیسے ایتھیریم ، کو پیر ٹو پیر کمپیوٹر نیٹ ورک کا استعمال کرتے ہوئے برقرار رکھا جاتا ہے ، جس سے کسی بھی صارف کو دنیا میں کہیں سے بھی بلاکچین کی میزبانی اور رسائی حاصل کرنے کی اجازت ملتی ہے۔ جیسے جیسے کوئی ٹرانزیکشن ہوتا ہے ، اسے بلاکچین نیٹ ورک پر ہر صارف کے لیجر میں ریکارڈ اور تقسیم کیا جاتا ہے۔<br></br><br></br>یہ انفرادی کمپیوٹرز ، جب ایک ساتھ استعمال ہوتے ہیں تو ، تمام بلاکچین ڈیٹا کو اسٹور کرنے کے لئے ایک مہذب عالمی ڈیٹا بیس تشکیل دیتے ہیں۔ ڈیسنٹرلائزڈ کا مطلب یہ ہے کہ ڈیٹا کو ایک جگہ پر منظم کرنے اور کسی ایک کمپنی یا شخص کے ذریعہ کنٹرول کرنے کے بجائے ، نیٹ ورک کا استعمال کرنے والا ہر شخص اس کا انتظام کرتا ہے۔<br></br><br></br>بلاکچینز کو ناقابل تغیر ہونے کے لئے ڈیزائن کیا گیا ہے ، یعنی ، ناقابل تغیر۔ ایک بار جب بلاکچین پر کچھ ریکارڈ کیا گیا ہے تو ، اسے تبدیل یا الٹا نہیں کیا جاسکتا ہے۔ اس کا مطلب یہ ہے کہ بلاکچین پر کوئی بھی ٹرانزیکشن مستقل ہے اور کسی کو بھی دیکھنے کے لئے ہمیشہ ایک ریکارڈ دستیاب ہوگا. بلاکچین کے اعداد و شمار کے ڈھانچے کے ساتھ مل کر غیر مرکزیت واقعات کی مستقل ٹائم لائن بناتی ہے۔<br></br><br></br>کچھ بینکوں کو آپ کو ان ٹرانزیکشنز کو دیکھنے کے لئے ان سے رابطہ کرنے کی ضرورت ہوتی ہے جو آپ کے اکاؤنٹ میں ایک ماہ سے زیادہ ہے. بلاکچین کا استعمال آپ کے بینک سے رابطہ کرنے کی ضرورت کو ختم کردے گا کیونکہ آپ کے تمام ٹرانزیکشن آپ کو دیکھنے کے لئے پہلے سے ہی دستیاب ہوں گے.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSafe() {
  const message = this.createChatbotMessage(<a><strong>کیا یہ محفوظ کرپٹوگرافک ہے؟</strong><br></br>کیا یہ محفوظ کرپٹوگرافک ہے؟<br></br><br></br>بالآخر ، کرپٹو کرنسیوں کی حفاظت کا انحصار انفرادی صارف کے سیکیورٹی طریقوں اور کرپٹو کرنسی نیٹ ورک کی حفاظت پر ہے۔ مثال کے طور پر ، اگر آپ اپنی کرپٹو کرنسی کو ڈیجیٹل والیٹ میں اسٹور کرتے ہیں جو پاس ورڈ سے محفوظ نہیں ہے تو ، آپ کو ہیک ہونے کا خطرہ ہے۔<br></br><br></br>اسی طرح ، اگر نیٹ ورک محفوظ نہیں ہے تو ، سائبر مجرم آپ کی کرپٹو کرنسی چوری کرسکتے ہیں۔ لہذا ، کرپٹو کرنسیوں میں سرمایہ کاری کرنے سے پہلے تحقیق کرنا اور ان کو ذخیرہ کرتے وقت یا استعمال کرتے وقت محتاط رہنا ضروری ہے۔<hr></hr><strong>کیا بلاکچین محفوظ ہے؟</strong><br></br>کرپٹو کرنسیوں کے ساتھ ساتھ جن کو جعلی یا ہیک نہیں کیا جاسکتا ہے ، بلاکچین ٹیکنالوجیز ان کی افادیت کے علاوہ ناقابل یقین سیکیورٹی پیش کرتی ہیں۔ بلاکچینز کی مہذب نوعیت اور ان کے اندر موجود معلومات کو تبدیل کرنے میں ناکامی بلاکچینز کو ہیرا پھیری ، ہیکنگ اور دھوکہ دہی کے ٹرانزیکشن کے خلاف مزاحم بنانے میں مدد کرتی ہے۔ نیٹ ورک پر بلاکچین کے بہت سے تقسیم شدہ ورژن کے ساتھ، ایک ہیکر کو حقیقی نقصان پہنچانے کے لئے ان گنت کمپیوٹرز کا کنٹرول حاصل کرنے کی ضرورت ہوگی. اس سے بلاک چین کو ہیک کرنا تقریبا ناممکن ہوجاتا ہے۔<br></br><br></br>دنیا کو طاقت دینے کے لئے بلاکچین ٹیکنالوجی کا نفاذ ہر ایک کے لئے تیز ، محفوظ اور زیادہ شفاف مارکیٹوں کو قابل بناتا ہے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleEthereum() {
  const message = this.createChatbotMessage(<a>ایتھیریم ایک قابل پروگرام بلاکچین ٹیکنالوجی ہے جسے 2013 میں شروع ہونے والی وٹالک بوٹیرن نے تیار کیا  تھا۔ ایتھیریم صارفین کو کرپٹو کرنسیوں کو بھیجنے اور وصول کرنے ، ڈیپس کے نام سے مشہور مہذب ایپلیکیشنز تک رسائی حاصل کرنے اور تخلیق کرنے ، اسٹیکنگ کے ذریعہ انعامات کمانے ، اور بہت کچھ کرنے کی اجازت دیتا ہے۔ مالیاتی خدمات تک مفت رسائی اور زیادہ نجی اور مہذب انٹرنیٹ ایتھروم فاؤنڈیشن کے کچھ اہم اہداف ہیں۔<br></br><br></br>اس کے تصور کے بعد ، ایتھیریم نے کنٹرول میں کسی ایک شخص کے بغیر ایک مہذب حکمرانی کا نظام نافذ کیا۔ ملکیت کی یہ کمی حکومتوں یا تنظیموں کے لئے آپ کو ایتھیریم پر خدمات تک رسائی سے انکار کرنا تقریبا ناممکن بنا دیتی ہے۔ ایتھیریم پر ایپلیکیشنز کو ان کو استعمال کرنے کے لئے آپ کے تمام ذاتی ڈیٹا کی ضرورت نہیں ہے. یہ صارفین کو ان کی رازداری پر زیادہ کنٹرول دیتا ہے اور انہیں ہر ٹرانزیکشن میں محفوظ رکھتا ہے.<br></br><br></br>ایتھیریم کسی کے لئے بھی کھلا ہے ، کہیں بھی ، جب تک کہ انہیں ایتھیریم والیٹ تک رسائی حاصل ہو ، جیسے لوپرنگ اسمارٹ والیٹ۔ آپ ایتھیریم والیٹ کو بینکنگ ایپ کے طور پر سوچ سکتے ہیں ، بغیر کسی بینک کے آپ کے فنڈز کو کنٹرول کیے۔ صرف ایک انٹرنیٹ کنکشن کے ساتھ، ایتھیریم ہر ایک کو استعمال کرنے کے لئے دستیاب ہے، دنیا بھر میں بینکنگ کی خدمات تک رسائی فراہم کرتا ہے.<br></br><br></br>ایتھیریم بلاکچین پر تمام ٹرانزیکشنز مقامی کرپٹو کرنسی ایتھر یا ایتھیریم کی طرف سے طاقتور ہیں. ہر بار جب ایتھیریم بھیجا جاتا ہے یا ڈیپ استعمال کیا جاتا ہے تو ، صارفین ایتھیریم نیٹ ورک استعمال کرنے کے لئے ایتھیریم میں ایک چھوٹی سی فیس ادا کرتے ہیں۔ یہ فیس بلاکچین پر کارروائیوں کی تصدیق کرنے کے لئے کان کنوں کو انعام دینے میں مدد کرنے کے لئے استعمال کیا جاتا ہے. کان کن اس بات کو یقینی بنانے کے لئے رکھوالوں کے طور پر کام کرتے ہیں کہ کوئی بھی بلاکچین کے ساتھ دھوکہ دہی یا چھیڑ چھاڑ نہیں کررہا ہے اور اسے محفوظ رکھتا ہے۔ یہ کام کے ثبوت کے طور پر جانا جاتا ہے. ایتھیریم کا مستقبل بلاکچین کی حفاظت کا ایک نیا طریقہ لاتا ہے جس میں صارفین کو بلاکچین ریکارڈز کے محافظوں کے طور پر کام کرنے کی اجازت دینے کے لئے فنڈز کا وعدہ کیا جاتا ہے یا جمع کیا جاتا ہے. یہ داؤ کے ثبوت کے طور پر جانا جاتا ہے.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOW() {
  const message = this.createChatbotMessage(<a>پروف آف ورک (پی او ڈبلیو) زیادہ تر بڑی کرپٹو کرنسیوں کے لئے ایک متفقہ الگورتھم ہے۔ یہ کرپٹو کرنسی کے لیجر کو محفوظ کرنے کا ایک طریقہ ہے۔ پی او ڈبلیو کو ستوشی ناکاموٹو نے بٹ کوائن بلاکچین کے لئے متعارف کرایا تھا ، جس سے یہ پہلا اتفاق رائے الگورتھم بن گیا ہے ، اور آج تک غالب ہے۔<br></br><br></br>تاہم ، یہ پہلی بار نہیں تھا جب ہم نے پی او ڈبلیو کے بارے میں سنا تھا ، ایڈم بیک کی ہیش کیش ایپ 1997 میں ایجاد کی گئی تھی اور اس میں پروف آف ورک کی خصوصیت کا استعمال کیا گیا تھا۔ اس نظام کا ایک بہت بڑا فائدہ یہ ہے کہ یہ دوہرے اخراجات سے بچتا ہے۔ یہ اصطلاح تقریبا خصوصی طور پر ڈیجیٹل پیسے اور کرپٹو کرنسیوں کے لئے استعمال کی جاتی ہے کیونکہ آپ ایک ہی جسمانی رقم کو دو بار خرچ نہیں کرسکتے ہیں، یعنی؛ اگر آپ کسی اسٹور پر گئے اور کسی مشروب کے لئے نقد رقم ادا کی تو ، آپ اسی نقد رقم کو کسی دوسرے اسٹور میں استعمال نہیں کرسکیں گے کیونکہ پہلے اسٹور نے نقد رجسٹر میں رقم کو بند کردیا تھا۔<br></br><br></br>کرپٹو کرنسیوں یا کسی بھی ڈیجیٹل پیسے میں ، بڑی مقدار میں ڈیٹا کو جلدی اور توثیق کے بغیر بھیجنا ممکن ہے ، آپ کے پاس ایسے لوگ ہوں گے جو مختلف اسٹورز کو یہ یقین دلانے کے لئے کافی تیزی سے خرچ کرسکتے ہیں کہ انہیں ادائیگی کی گئی ہے اور لیجر جلدی سے برباد ہوجائے گا۔ چھوٹے پیمانے پر ، یہ کام کرسکتا ہے ، لیکن جب 10 اور 100 ہزار افراد بلاکچین پر کام کررہے ہیں تو ، یہ جلدی سے پیچیدہ ہوجاتا ہے۔<br></br><br></br>یہ بہت سے لوگوں کے ساتھ ایک وقت میں تمام ٹرانزیکشن کو جمع کرنے کے لئے تھکادینے والا اور غیر موثر ہوگا جو تجارت کرنا چاہتے ہیں، لہذا ان ٹرانزیکشن کو ایک بلاک میں گروپ کیا جاتا ہے جو پچھلے ایک سے منسلک ہوتا ہے اور اس کا حوالہ دیتا ہے، لہذا نام بلاکچین. تاہم ، کسی بلاک میں شامل کرنا مفت نہیں ہے ، کان کن کہلانے والے صارفین موجود ہیں جو ٹرانزیکشن کے ہر بلاک کی توثیق کرنے میں مدد کرتے ہیں۔ اس سے کمپیوٹنگ کی طاقت اور حقیقی دنیا کی توانائی کی لاگت آتی ہے تاکہ ہیش (فنگر پرنٹ کے بارے میں سوچیں) تیار کیا جاسکے جس کو ریورس کرنا عملی طور پر ناممکن ہے۔<br></br><br></br>اعلی کمپیوٹنگ طاقت کی وجہ سے، کان کنوں کو ان کی خدمات کے لئے فیس ادا کی جاتی ہے اور بلاکس کو چین میں بھیجا جاتا ہے. پی او ڈبلیو میں کرپٹو کی طاقت کے ساتھ ، اگر آپ ناجائز ٹرانزیکشن کرنے کی کوشش کرتے ہیں تو ، نیٹ ورک خود بخود اسے مسترد کردے گا اور پھر بھی کان کن کی فیس ادا کرے گا۔ یہی اس کی خوبصورتی ہے: ناجائز ٹرانزیکشن کی کوشش کرنا مہنگا پڑ جاتا ہے لیکن ایمانداری سے کام کرنا منافع بخش ہے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOS() {
  const message = this.createChatbotMessage(<a>پی او ایس پی او ڈبلیو کا ایک متبادل ہے  جو کچھ فوائد اور نقصانات کے ساتھ آتا ہے۔ کام کے ثبوت میں صرف کان کن کو انعام دیا جاتا ہے اور ہر کوئی وہ شخص بننے کے لئے مقابلہ کرتا ہے جو درست بلاک پیش کرتا ہے ، اس طرح بہت ساری توانائی ضائع ہوتی ہے۔ پروف آف اسٹیک ماڈل سٹیک کے سائز پر غور کرکے اتفاق رائے حاصل کرتا ہے اور انہیں کتنی دیر تک سٹیک پر لگایا گیا ہے ، پھر توثیق کنندہ کا انتخاب کرنا جو کافی مقدار میں توانائی اور وقت بچاتا ہے۔<br></br><br></br><table><tr className="indexer-table-header">
  <th><strong>فوائد</strong></th>
  <th><strong>نقصانات</strong></th>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>کارکردگی: بلاکچین کی حفاظت کے لئے بہت کم توانائی کا استعمال کیا جاتا ہے</td>
  <td>اسکیل:  ایتھیریم یا بٹ کوائن ڈاٹ کے سائز تک پہنچنے کے لئے اب بھی پی او ایس سسٹم ہونا ضروری ہے</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>کارکردگی: آپ کو پیچیدہ کمپیوٹر کے مسائل کو حل کرنے کی ضرورت نہیں ہے، لہذا آپ ٹرانزیکشن کی رفتار میں اضافہ کرتے ہیں</td>
  <td>کم محفوظ: پی او ایس سسٹم میں حصہ  لینے سے سکے کی ذخیرہ اندوزی کو 51٪ حملہ کرنے کی ترغیب مل سکتی ہے۔ بڑے پیمانے پر کافی بلاکچینز پر، یہ بہت کم امکان بن جاتا ہے</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>ایل نیول نیچے کا اندراج: آپ کو پروف آف سٹیک ماڈل میں حصہ لینے کے لئے صرف ایک بار پیسہ خرچ کرنے کی ضرورت ہے۔ ایک پی او ڈبلیو سسٹم کو ہارڈ ویئر کا سامان اور مسلسل اپ ٹائم کی ضرورت ہوتی ہے</td>
  <td>ایل نیول نیچے کا اندراج: آپ کو پروف آف سٹیک ماڈل میں حصہ لینے کے لئے صرف ایک بار پیسہ خرچ کرنے کی ضرورت ہے۔ ایک پی او ڈبلیو سسٹم کو ہارڈ ویئر کا سامان اور مسلسل اپ ٹائم کی ضرورت ہوتی ہے</td>
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
  const message = this.createChatbotMessage(<a><strong>سکہ</strong><br></br>کرپٹو کرنسی میں ، "کرنسی" کی اصطلاح ایک ایسی کرنسی کی وضاحت کرنے کے لئے استعمال کی جاتی ہے جو اس کے اپنے بلاکچین (مثال کے طور پر ، ایتھر برائے ایتھیریم بلاکچین ، بٹ کوائن بلاکچین کے لئے بٹ کوائن ، وغیرہ) سے تعلق رکھتی ہے۔ کرنسی ایک ڈیجیٹل کرنسی ہے جسے کئی طریقوں سے استعمال کیا جاسکتا ہے:<br></br>ادائیگی کی ایک شکل کے طور پر (مثال کے طور پر ، کسی شے یا خدمت کے لئے ایتھیریم کو کسی دوسرے میں منتقل کرنا) ، قدر کا ذخیرہ (مثال کے طور پر ، کچھ بٹ کوائن کو کسی کی دولت کے لئے "محفوظ پناہ گاہ" کے طور پر دیکھتے ہیں) ، اکاؤنٹ کی اکائی (مثال کے طور پر ، این ایف ٹی جیسی اشیاء کی قیمت ایتھیریم میں ہوسکتی ہے) ، اور بلاکچینز کے لئے جو کام کا ثبوت استعمال کرتے ہیں ، مقامی کرنسی پروسیسنگ ٹرانزیکشنز اور بلاکس تیار کرنے کے لئے کان کنوں کو ادائیگی کرنے کے لئے بھی استعمال ہوتی ہے۔<br></br><br></br><strong>استعاری</strong><br></br>اگرچہ ایک سکہ اس کے اپنے بلاکچین کا مقامی ہے ، لیکن موجودہ بلاکچین پر ایک ٹوکن تیار کیا جاتا ہے۔ ٹوکن کے لئے ہر بلاکچین کی اپنی شکل ہوتی ہے۔ مثال کے طور پر ، ایتھیریم بلاکچین پر بنائے گئے ٹوکنوں میں سابقہ ای آر سی ہوتا ہے جس کے بعد ایک نمبر ہوتا ہے (جیسے ای آر سی 20)۔ تکنیکی طور پر ، کوئی بھی ٹوکن تشکیل دے سکتا ہے ، لہذا  خریدنے سے پہلے ہمیشہ ٹوکینومکس کی تحقیق اور پڑھنے کی سفارش کی جاتی ہے۔<br></br>آپ جو معیاری استعمال کرتے ہیں اس پر انحصار کرتے ہوئے ایک ٹوکن فنگبل (قابل تبادلہ) یا غیر فنگبل ہوسکتا ہے۔ ایتھیریم پر ، معیاری ٹوکن کی کچھ مثالیں یہ ہیں:<br></br><br></br>ای آر سی-20<br></br>ای آر سی-20<br></br><br></br>ای آر سی-721<br></br>غیر فنجبل ٹوکن کے لئے استعمال ہونے والا معیاری ، جیسے آرٹ یا گانے کے کام کے لئے این ایف ٹی۔<br></br><br></br>ای آر سی-1155<br></br>معیاری جو زیادہ موثر آپریشنز اور ٹرانزیکشنز کی گروپبندی کی اجازت دیتا ہے۔ یہ کسی بھی تعداد میں فنجبل اور غیر فنجبل ٹوکن اقسام کی نمائندگی اور کنٹرول کرسکتا ہے۔ یعنی ، ای آر سی -1155 ٹوکن ای آر سی -20 اور ای آر سی -721 ٹوکن کی طرح ایک ہی کام انجام دے سکتا ہے ، اور یہاں تک کہ دونوں ایک ہی وقت میں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStablecoin() {
  const message = this.createChatbotMessage(<a>ایک مستحکم سکہ ایک کرپٹو کرنسی ہے جو مستقل مارکیٹ کی قیمت کو برقرار رکھنے کے لئے ڈیزائن کیا گیا ہے. اگرچہ عین مطابق میکانزم ایک سے دوسرے میں مختلف ہوسکتے ہیں ، مستحکم سکے مارکیٹ کے اتار چڑھاؤ کے لئے کسی حد تک مزاحم ہیں۔ انہیں قیمت میں نمایاں تبدیلیوں کا تجربہ نہیں کرنا چاہئے کیونکہ ان کی سیکیورٹیز اکثر کسی دوسرے اثاثہ جیسے امریکی ڈالر سے منسلک ہوتی ہیں۔<br></br><br></br>مستحکم سکے کا استعمال کرنے کا بنیادی خیال  یہ ہے کہ آپ فیاٹ اور کرپٹو کرنسی کی دنیا کے فوائد حاصل کریں۔ آپ کرپٹو مارکیٹوں کی غیر مستحکم نوعیت کے خلاف ہیج کرسکتے ہیں اور اپنے مستحکم سکوں کو بینک یا بروکر سے بہتر سود کمانے کے لئے قرض دے سکتے ہیں.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCEX() {
  const message = this.createChatbotMessage(<a>ایک مرکزی ایکسچینج (سی ای ایکس) آرڈر بک کو برقرار رکھتے ہوئے صارفین کے مابین تبادلے کی سہولت فراہم کرنے کا ایک طریقہ ہے۔ انفرادی سرمایہ کاروں کے ذریعہ رکھے گئے خرید و فروخت کے احکامات کا ایک مجموعہ۔ آرڈرز ایک مخصوص قیمت پر کرپٹو کرنسی کی ایک مخصوص رقم خریدنے یا فروخت کرنے کے لئے ہیں: ایک سی ای ایکس ان احکامات کو جمع کرے گا اور ان پر عملدرآمد کرے گا.<br></br><br></br>سی ای ایکس اور ذاتی والیٹ یا ڈی ای ایکس کے مابین ایک بڑا فرق یہ ہے کہ صارفین دراصل ایک دوسرے کے ساتھ کرپٹو کرنسیوں یا فیٹ کی تجارت نہیں کرتے ہیں۔ فنڈز جمع کیے جاتے ہیں اور ایکسچینج اثاثوں کی تحویل میں لے لیتا ہے اور بنیادی طور پر تاجر کو ایک وعدہ نوٹ جاری کرتا ہے. اس کے فوائد ہیں ، جیسے کم فیس اور آسان تبادلہ ، لیکن نقصانات بھی ، جیسے شفافیت کی کمی جو بدنیتی پر مبنی طریقوں کی اجازت دیتی ہے جیسے لانڈرنگ ٹریڈنگ اور قیمت میں ہیرا پھیری۔<br></br><br></br>چونکہ تمام فنڈز ایکسچینج کی تحویل میں ہیں، سی ای ایکس ممکنہ حملوں کے لئے ایک اہم ہدف ہیں اور حالیہ برسوں میں سینکڑوں ملین ڈالر کے لئے کئی بار حملہ کیا گیا ہے. نیز ، چونکہ سی ای ایکس کی میزبانی کہیں کی گئی ہے ، لہذا تکنیکی مسائل یا حملے ہوسکتے ہیں جو ڈاؤن ٹائم کا باعث بن سکتے ہیں۔ کچھ معاملات میں حکومتی قواعد و ضوابط کی وجہ سے فنڈز کو منجمد اور ضبط بھی کیا جاسکتا ہے۔<br></br><br></br>اگرچہ سی ای ایکس کو آپ کو اپنے کسٹمر کو جاننے کی ضرورت ہوگی ، لیکن ٹیکس کے مقاصد کے لئے یہ معلومات آسانی سے دستیاب ہونا بھی مفید ہے اور زیادہ تر تبادلے آپ کو آسانی سے ٹیکس دستاویزات فراہم کرسکتے ہیں۔ اگر آپ اپنے آپ کو کنٹرول کرنے میں آرام دہ اور پرسکون محسوس نہیں کرتے ہیں تو سی ای ایکس کو اپنے فنڈز کی تحویل میں لینے کے فوائد ہیں. کچھ صارفین نے اپنے ذاتی والیٹ میں فنڈز ذخیرہ کیے ہیں اور ابتدائی جملے بھول گئے ہیں یا اپنی نجی چابیاں کھو چکے ہیں ، جس سے کرپٹو کرنسیوں میں لاکھوں ڈالر کا نقصان ہوا ہے۔<br></br><br></br>مقبول سی ای ایکس کی کچھ مثالوں میں بیننس ، کوائن بیس ، ہوبی ، اور کو کوائن شامل ہیں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDEX() {
  const message = this.createChatbotMessage(<a>ایک مہذب ایکسچینج ایک پیر ٹو پیر مارکیٹ ہے جہاں ٹرانزیکشن براہ راست تاجروں کے درمیان جاتا ہے. یہ کرپٹو سیکورٹیز کا بنیادی حصہ ہے جو غیر مرکزی ہے: بینک، بروکرز یا کسی دوسرے سرکاری ثالث ٹرانزیکشن کی حوصلہ افزائی نہیں کرتے ہیں. کچھ مشہور ڈی ایکس ہیں جیسے یونیسویپ اور سوشیوپ جو ایتھیریم ایل 1 پر چلتے ہیں۔<br></br><br></br>سینٹرلائزڈ ایکسچینج (سی ای ایکس) اور ڈی ای ایکس کے مابین سب سے بڑا فرق یہ ہے کہ سی ای ایکس فیٹ کرنسی اور کرپٹو کے مابین تبادلے کی اجازت دے گا جبکہ ڈی ای ایکس نہیں کرے گا۔ ایک سی ای ایکس مارجن ٹریڈنگ کی اجازت دے گا اور حد کے احکامات مقرر کرے گا جو آرڈر بک کے ذریعہ سنبھالے جاتے ہیں۔ یہ نیسڈیک جیسے اسٹاک ایکسچینج کی طرح ہے۔<br></br><br></br>ایک ڈی ای ایکس مکمل طور پر سمارٹ کنٹریکٹس پر مبنی ہے۔ وہ کرپٹو کرنسی کی قیمتوں کو الگورتھم طور پر مقرر کرتے ہیں اور بلاکچین پر براہ راست آباد ہونے والی تجارت کو آسان بنانے کے لئے لیکویڈیٹی فنڈز (ایل پی) کا استعمال کرتے ہیں. ڈی ای ایکس عام طور پر اوپن سورس کوڈ پر مبنی ہوتا ہے ، جس کا مطلب ہے کہ اس کے کام کرنے کے بارے میں کچھ بھی پوشیدہ نہیں ہے۔<br></br><br></br>آپ کو ڈی ای ایکس میں زیادہ مختلف قسم یں ملیں گی ، ڈی فائی پہلے ٹوکن ایل پی میں داخل ہونے کے لئے مثالی جگہ ہے۔ یہ معلوم سے لے کر بے ترتیب اور بعض اوقات بیکار ٹوکن تک ہوتا ہے ، سرمایہ کاری کرتے وقت اپنی تحقیق کرنا یقینی بنائیں۔ اس نے کہا ، ہیکنگ کا خطرہ بہت کم ہوجاتا ہے کیونکہ ڈی ای ایکس میں فنڈز ذاتی والیٹ میں محفوظ ہوتے ہیں نہ کہ مرکزی اسٹور میں۔ سالوں میں سی ای ایکس پر کئی ہیک ہوئے ہیں۔<br></br><br></br>ایک سی ای ایکس کو ان کی شناخت کرنے کے لئے اپنے کسٹمر کو جاننے کی ضرورت ہوگی، ایک ڈی ای ایکس آپ کو گمنام رہنے کے لئے کسی بھی ذاتی طور پر شناختی معلومات کی ضرورت نہیں ہوگی. نیز ، جبکہ کچھ مقامات کرپٹو کرنسی کی خریداری کی اجازت نہیں دے سکیں گے ، ایک ڈی ای ایکس ان علاقوں کے لوگوں کے لئے امکان کھولتا ہے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLayerTwo() {
  const message = this.createChatbotMessage(<a>پرت 2 (ایل 2) ایک ثانوی فریم ورک یا پروٹوکول سے مراد ہے جو موجودہ بلاکچین پر بناتا ہے۔ ایل 2 پروٹوکول کا بنیادی مقصد ٹرانزیکشن کی رفتار اور بڑے کرپٹو کرنسی نیٹ ورکس کی اسکیلنگ کی مشکلات کو حل کرنے میں مدد کرنا ہے ، ایتھیریم کے لئے ہم اسے ایتھیریم اسکیلنگ ٹریلیما کہتے ہیں: اسکیلنگ ، اسپیڈ ، اور ڈیسنٹرلائزیشن۔<br></br><br></br>ایتھیریم فی الحال فی سیکنڈ ~ 13 ٹرانزیکشنز پر عملدرآمد کرتا ہے، جبکہ ماسٹر کارڈ اور ویزا جیسے کریڈٹ کارڈ کمپنیاں 1700 ٹی پی ایس پر عملدرآمد کرتی ہیں اور ایک چھوٹی سی فیس وصول کرتی ہیں. اگر آپ چھوٹے کاروباری اداروں کے لئے اسکوائر یا اسی طرح کی خدمات سے واقف ہیں تو ، آپ کبھی بھی ٹرانزیکشن کے لئے اکیلے ایتھیریم کا استعمال کرنے کا تصور نہیں کریں گے۔ ادائیگی کی توثیق کرنے کے لئے 20 سے 30 منٹ تک ادائیگی کرنے کی کوشش کرنے اور انتظار کرنے کا تصور کریں ، اس توثیق کے لئے گیس کی فیس ادا کرنے کا ذکر نہ کریں۔ یہی وہ جگہ ہے جہاں ایل 2 آتا ہے اور ایسا کرنے کے کچھ طریقے ہیں۔<br></br><br></br>یہ تیز ، سستا ، اور ایتھیریم کی طرح ہی محفوظ ہے۔ ہر کوئی ایسا کیوں نہیں کرتا؟ ٹھیک ہے، پرامید رول اپ طویل تکمیل / واپسی کے اوقات سے دوچار ہیں، عام طور پر 7 دن کے لئے فنڈز رکھتے ہیں. ویلیڈیم اور پلازما آف چین ہیں اور اس وجہ سے ایتھیریم کی حقیقی حفاظت کی کمی ہے.  زکرولاپ تمام دنیاؤں میں سب سے بہترین ہیں کیونکہ وہ چین میں تیز اور محفوظ ہیں ، لیکن ان کی ترقی کے لئے درکار ٹکنالوجی بہت مشکل ہے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKProof() {
  const message = this.createChatbotMessage(<a>ایک صفر علم کا ثبوت (زیڈ کے پروف) کسی بھی اضافی معلومات کو پہنچانے کے بغیر کسی کو کچھ ثابت کرنے کے قابل ہو رہا ہے سوائے اس حقیقت کے کہ یہ سچ ہے. آپ کو یہ ثابت کرنے کی ضرورت نہیں ہے کہ آپ کو صرف اس کا انکشاف کرکے کچھ معلومات کا علم ہے۔ چیلنج یہ ہے کہ معلومات کو ظاہر کیے بغیر علم کے قبضے کو ثابت کیا جائے۔<hr></hr><strong>درخواستیں</strong><br></br><br></br>فنانس: آپ  صارفین کو یہ ثابت کرنے کی اجازت دینے کے لئے زیڈ کے پروف استعمال کرسکتے ہیں کہ ان کا خفیہ نمبر معلوم حد میں ہے۔ مثال کے طور پر، ایک قرض درخواست دہندہ ثابت کر سکتا ہے کہ ان کی آمدنی ان کی صحیح تنخواہ کا انکشاف کیے بغیر کوالیفائنگ رینج میں ہے.<br></br><br></br>- آن لائن ووٹنگ: زیڈ کے پروف آپ کو گمنام طور پر ووٹ ڈالنے اور اس بات کی تصدیق کرنے کی اجازت دے گا کہ آپ کا ووٹ حتمی گنتی میں شامل ہے۔<br></br><br></br>توثیق: آپ خفیہ معلومات جیسے پاس ورڈ کے تبادلے کے بغیر سائٹس میں لاگ ان کرسکتے ہیں۔<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?time_continue=18&v=fOGdb1CTu5c&feature=emb_logo'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSmartContract() {
  const message = this.createChatbotMessage(<a>ایک "سمارٹ کنٹریکٹ" صرف ایک پروگرام ہے جو ایتھیریم بلاکچین پر چلتا ہے. یہ کوڈ اور اعداد و شمار کا ایک مجموعہ ہے جو بلاکچین پر ایک مخصوص پتے پر رہتا ہے۔ ایتھیریم اکاؤنٹ کی ایک قسم ہے. وہ توازن برقرار رکھ سکتے ہیں اور نیٹ ورک پر ٹرانزیکشن بھیج سکتے ہیں ، لیکن وہ صارف کے ذریعہ کنٹرول نہیں کیے جاتے ہیں۔ انہیں بالکل وہی کرنے کے لئے پروگرام کیا جاتا ہے جو انہیں بتایا جاتا ہے ، قواعد کی وضاحت کرتے ہیں اور ان کے کوڈ کی بنیاد پر خود بخود ان کا اطلاق کرتے ہیں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNFT() {
  const message = this.createChatbotMessage(<a>ستمبر 2017 میں ڈائیٹر شرلی کی طرف سے متعارف کرایا گیا تھا اور جون 2018 میں حتمی شکل دی گئی تھی، ای آر سی -721 غیر فنجبل ٹوکن کے لئے ڈیزائن کیا گیا تھا. وہ منفرد ہیں، کوئی ٹوکن بالکل ایک ہی نہیں ہے، اور انہیں ٹوکن آئی ڈی نامی ایک یواین ٹی 256 متغیر تفویض کیا جاتا  ہے جو منفرد ہونا ضروری ہے. یہ دنیا میں تقریبا کسی بھی چیز کی نمائندگی کرسکتا ہے جو منفرد ہے اور ایک واضح جائیداد کی ضرورت ہے::<br></br><br></br> ڈیجیٹل آرٹ (جی آئی ایف، مجموعہ، موسیقی، ویڈیوز)<br></br>ایک ڈومین نام<br></br>ایک گاڑی کی تحریریں<br></br>ایک حقیقی دنیا کے ایونٹ کے لئے ٹکٹ<br></br>ٹوکنائزڈ انوائسز<br></br>قانونی دستاویزات<br></br>میڈیکل ریکارڈ<br></br>دستخط<br></br><br></br>این ایف ٹی میں خصوصی خصوصیات ہیں:<br></br><br></br>ہر ٹکسال والے ٹوکن میں ایک انوکھا شناخت کنندہ ہوتا ہے جو براہ راست ایتھیریم ایڈریس سے منسلک ہوتا ہے۔<br></br>وہ دوسرے 1: 1 ٹوکن کے ساتھ براہ راست قابل تبادلہ نہیں ہیں. مثال کے طور پر ، 1 ایتھیریم بالکل دوسرے ایتھیریم کی طرح ہی ہے۔ این ایف ٹی کے ساتھ ایسا نہیں ہے۔<br></br>ہر ٹوکن کا ایک مالک ہوتا ہے اور یہ معلومات آسانی سے قابل تصدیق ہوتی ہے۔<br></br>وہ ایتھیریم پر رہتے ہیں اور ایتھیریم پر مبنی این ایف ٹی مارکیٹ میں خریدے اور فروخت کیے جاسکتے ہیں۔<br></br><br></br>اس کا مطلب یہ ہے کہ اگر آپ این ایف ٹی کے مالک ہیں:<br></br><br></br>آپ یہ ثابت کر سکتے ہیں کہ آپ اس کے مالک ہیں.<br></br>ٹوکن ثابت کرتا ہے کہ اس کی کاپی اصل ہے.<br></br>آپ کی نجی کلید ملکیت کا ثبوت ہے۔<br></br>کوئی بھی اسے کسی بھی طرح سے جوڑ توڑ نہیں کرسکتا ہے۔<br></br>آپ اسے فروخت کر سکتے ہیں یا اسے ہمیشہ کے لئے رکھ سکتے ہیں.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMining() {
  const message = this.createChatbotMessage(<a>کرپٹو کرنسی مائننگ سے مراد بلاکچین ٹرانزیکشنز کی تصدیق اور توثیق کے عمل سے ہے۔ مائنرز شدید کرپٹوگرافک مساوات کو حل کرتے ہیں اور اس اعداد و شمار کے ساتھ بلاکچین کو نئے بلاکس بھیجتے ہیں. ایماندار اور کامیاب مائنرز کو مائننگ کی فیس ملتی ہے ، اس فیس کو ایتھیریم پر گیس فیس کے نام سے جانا جاتا ہے۔<br></br><br></br>جیسا کہ نئے بلاکچین ٹرانزیکشنز بنائے جاتے ہیں، وہ میموری پول (میمپول) میں بھیجے جاتے ہیں. کان کن زیر التواء ٹرانزیکشن کی صداقت کی جانچ پڑتال کرتا ہے اور انہیں بلاکس میں منظم کرتا ہے۔ یہ آپ کو زبانی طور پر ٹرانزیکشن بھیجنے والے لوگوں کی طرح ہے اور آپ ان سب کو کاغذ کے ایک ٹکڑے پر ترتیب سے لکھتے ہیں: اس استعارہ میں کاغذ کی شیٹ ایک بلاک ہے۔ اس بلاک کی تصدیق کرنے کی ضرورت ہے۔ اس کے لئے پیچیدہ ریاضیاتی مسائل کے حل کی ضرورت ہوتی ہے اور بہت سے کمپیوٹیشنل وسائل کی ضرورت ہوتی ہے۔ ایک بار کامیاب ہونے کے بعد ، بلاک کو چین میں بھیج دیا جاتا ہے اور مائنرز کو انعامات ملتے ہیں۔<br></br><br></br>مائننگ کس طرح کام کرتی ہے اس کے بارے میں مزید معلومات کے لئے ، <a className="cla" href="https://desk.zoho.com/portal/loopring/en/kb/articles/what-is-crypto-mining" target="_blank" rel="noreferrer">یہاں</a> دیکھیں۔
  
  </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNodes() {
  const message = this.createChatbotMessage(<a>نوڈس کلائنٹ سافٹ ویئر کا ایک ٹکڑا ہیں۔ نوڈس کی 3 مختلف اقسام ہیں اور ہر ایک اعداد و شمار کو مختلف طریقے سے استعمال کرتا ہے. اس کے علاوہ ، مختلف مطابقت پذیری کی حکمت عملی موجود ہیں جو تیزی سے مطابقت پذیری کے وقت کی اجازت دیتی ہیں۔ مطابقت پذیری یہ ہے کہ آپ ایتھیریم کی حیثیت کے بارے میں کتنی تیزی سے درست معلومات حاصل کرسکتے ہیں۔<br></br><br></br><strong>مکمل نوڈ</strong><br></br><br></br>مکمل بلاکچین ڈیٹا سٹور کرتا ہے.<br></br>بلاک کی توثیق میں حصہ لیتے ہوئے تمام بلاکس اور تمام ریاستوں کی تصدیق کریں۔<br></br>تمام ریاستوں کو ایک مکمل نوڈ سے حاصل کیا جا سکتا ہے.<br></br>تمام ریاستوں کو ایک مکمل نوڈ سے حاصل کیا جا سکتا ہے.<br></br><br></br><strong>لائٹ نوڈ</strong><br></br><br></br>مکمل نوڈ کے برعکس ، تھن نوڈس صرف بلاک ہیڈر ڈاؤن لوڈ کرتی ہیں۔ ان میں بلاکس کے مواد کے بارے میں معلومات کا صرف خلاصہ ہوتا ہے۔ اگر اضافی مطلوبہ معلومات موجود ہیں تو ، ایک لائٹ نوڈ مکمل نوڈ سے اس کی درخواست کرسکتا ہے۔ اس سے لائٹ نوڈ کو بلاک ہیڈر میں اسٹیٹ روٹ کے خلاف موصول ہونے والے ڈیٹا کی تصدیق کرنے کی اجازت ملتی ہے۔<br></br>تھن نوڈس مفید ہیں کیونکہ آپ کو مکمل نوڈ کے طور پر چلانے کے لئے طاقتور ہارڈ ویئر یا اعلی بینڈوتھ کی ضرورت نہیں ہے.<br></br><br></br><strong>آرکائیو نوڈ</strong><br></br><br></br>آرکائیو نوڈ</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTokenBurn() {
  const message = this.createChatbotMessage(<a>ٹوکن جلانے کا مطلب ایک سکے یا ٹوکن کو مستقل طور پر تباہ کرنا ہے ، لیکن آپ ایسا کیوں کریں گے؟ بلاکچین ٹیکنالوجی صارفین کو بااختیار بناتی ہے ، آپ خود محافظ بن سکتے ہیں: آپ کے اثاثوں کی مکمل ملکیت۔ آپ کو کسی بینک یا مالیاتی ادارے کی ضرورت نہیں ہے ، ٹرانزیکشن تیسرے فریقوں کے ذریعہ محدود نہیں ہے ، اور زیادہ تر معاملات میں ، فراہمی افراط زر کی طاقت کے ساتھ محدود ہے کیونکہ یہ ٹوکن کو تباہ کرسکتا ہے۔<br></br><br></br>ٹوکن کو ریکارڈ کرنے کا خاص طور پر مطلب یہ ہے کہ آپ ایک منجمد پتے پر ٹوکن بھیج رہے ہیں ، جسے ریکارڈنگ ایڈریس کہا جاتا ہے ، جسے بازیافت نہیں کیا جاسکتا ہے۔ ریکارڈنگ ایڈریس میں نجی کلید نہیں ہوگی ، بھیجنے کے لئے ایک عوامی پتہ ہے لیکن والیٹ کو غیر مقفل کرنے کے لئے کوئی کلید نہیں ہیں۔ یہ آپ کے جسمانی پیسے کو ناقابل فہم محفوظ میں رکھنے کے برابر ہے کہ کسی کے پاس غیر مقفل کرنے کے لئے رسائی کا کوڈ نہیں ہے۔<br></br><br></br>ٹوکن کی قیمت فراہمی اور طلب پر مبنی ہے۔ عام طور پر ، طلب جتنی زیادہ ہوگی ، قیمت اتنی ہی زیادہ ہوگی۔ اس کے علاوہ، اگر پیشکش کم ہے، تو قیمت بھی زیادہ ہے. لہذا جب ٹوکن کی مقررہ فراہمی ہوتی ہے تو ، اس سپلائی کے کچھ حصے کی تباہی پر اثر پڑتا ہے۔ یہ مختلف وجوہات کی بناء پر استعمال کیا جاسکتا ہے ، جیسے ٹوکن کی قیمت میں اضافہ کرنا یا قدر کا استحکام پیدا کرنا۔<br></br><br></br><strong>پروجیکٹ کی قدر میں اضافہ کریں</strong><br></br>آج کی بڑھتی ہوئی مالیاتی دنیا میں کارپوریٹ بائی بیک عام ہیں۔ کمپنیاں بقیہ پیشکش کی قیمت بڑھانے میں مدد کے لئے اپنے کچھ حصص اور مارکیٹ ہولڈنگز واپس خریدتی ہیں۔ اسی طرح کا ایک واقعہ 2021 میں پیش آیا تھا جب ایتھیریم نے واپس خریدا اور پھر گردش میں موجود 1.3 ملین ایتھیریم کو جلانے کے لئے آگے بڑھا۔ مقصد یہ ہے کہ ایتھیریم کو ایک نئے پروٹوکول کے حصے کے طور پر افراط زر بنانا ہے ، تاکہ اس بات کو یقینی بنایا جاسکے کہ ایتھروم ٹوکن قیمت کا ایک موثر ذخیرہ بن سکتے ہیں اور فراہمی کو کم کرکے وقت کے ساتھ ساتھ قدر میں اضافہ کرسکتے ہیں۔<br></br><br></br><strong>قدر مستحکم کریں</strong><br></br>مجموعی طور پر کرپٹو کرنسیوں اور ڈی فائی کے لئے مستحکم سکے ضروری ہیں  ۔ ایکو سسٹم کے اندر ، وہ باقاعدگی سے سکوں اور ٹوکنوں کے اتار چڑھاؤ سے الگ تھلگ ، آبادکاری اور ہولڈنگ دونوں کے لئے ایک ذریعہ فراہم کرتے ہیں۔ یہاں سمجھوتہ ایک مرکزی ریزرو کا استعمال کرنا ہے جس میں آپ غیر مرکزیت کھو دیتے ہیں۔ الگورتھم مستحکم سکے سپلائی کو کنٹرول کرکے اس مسئلے پر قابو پانے کی کوشش کرتے ہیں۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDAO() {
  const message = this.createChatbotMessage(<a><strong>پاور ٹو گراف کا استعمال</strong>  - یہاں سنیپ شاٹ کیس اسٹڈی <a className="cla" href="https://thegraph.com/blog/using-the-graph-for-daos-snapshot/" target="_blank" rel="noreferrer">پڑھیں</a>۔<hr></hr>یہ مخفف مہذب خود مختار ادارہ کے لئے کھڑا ہے. یہ پہلے سے طے شدہ قواعد کے ایک نظام کے طور پر موجود ہے جو اس بات کا تعین کرتا ہے کہ کوئی تنظیم کیا اقدامات کرے گی۔ یہ روایتی کمپنیوں سے مختلف ہے اور اس کے بجائے اوپن سورس کوڈ پر انحصار کرتا ہے اور مکمل طور پر کمیونٹی کے ذریعہ چلایا جاتا ہے۔ اس کا مطلب یہ ہے کہ کوئی واحد ادارہ انچارج نہیں ہے، کوئی بورڈ آف ڈائریکٹرز نہیں ہے، اور اس وجہ سے طاقت کی کوئی مرکزیت نہیں ہے.<br></br><br></br>قواعد سمارٹ کنٹریکٹس کے طور پر بنائے جاتے ہیں جو ان کے ساتھیوں اور کمیونٹی کے ممبران کے اجتماعی کام کو کنٹرول کرتے ہیں۔ لہذا جب ایک مہذب تنظیم کا تصور خاص طور پر نیا نہیں ہے، تو اس کے کام کرنے والے طریقے اور افعال کو خود کار طریقے سے کرنے کے قابل ہونے کی وجہ سے ڈاو کو اس طرح کا ایک دلچسپ تصور بناتا ہے.<br></br><br></br>بہت ساری برادریاں خود کار طریقے سے فنڈ ریزنگ مہمات جیسے آئی سی او (ابتدائی سکے کی پیش کش) ، پروٹوکول پر اٹھائے گئے فیسوں کے اجراء اور تقسیم ، یا فیصلہ سازی اور ووٹنگ سسٹم کے طور پر ڈاو کا استعمال کرتی ہیں۔ اس کے علاوہ، یہ سب ایک قابل اعتماد اور محفوظ عمل کو یقینی بنانے کے لئے انسانی تعامل کے بغیر کیا جاتا ہے.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKSnark() {
  const message = this.createChatbotMessage(<a>ایک غیر انٹرایکٹو صفر علم مختصر علم کی دلیل – زیڈ کے سنارک - <strong>زیڈ کے سنارک</strong><br></br><br></br>آئیے اسے توڑ دیں:<br></br><br></br>صفر علم: ہم نے دوسرے مضامین میں اس کا جائزہ لیا ہے، لیکن مختصر ورژن کسی اور کو یہ جاننے کے بغیر کچھ ثابت کر رہا ہے کہ اس نے اسے کیسے ثابت کیا، صرف یہ کہ یہ قابل اعتماد ہے.<br></br>مختصر - مختصر اور واضح؛ ٹیسٹ اس کی نمائندگی کرنے والے اعداد و شمار سے نمایاں طور پر چھوٹا ہے۔<br></br>غیر انٹرایکٹو: معلومات ٹیسٹر سے تصدیق کنندہ تک جاتی ہے ، کوئی راؤنڈ ٹرپ نہیں ہے۔<br></br>علم کی دلیل: ثبوت مضبوط ہے، کوئی بدخواہ ٹیسٹر نہیں ہے جو اس کے بیان کی حمایت کرنے کے لئے علم کے بغیر نظام کو دھوکہ دے.<br></br><br></br>سنارک کو ٹیسٹر اور تصدیق کنندہ کے مابین اعتماد کی ترتیب کی ضرورت ہوتی ہے۔ یہ عوامی پیرامیٹرز کا ایک سیٹ ہے جو کھیل کے قواعد سے ملتا جلتا ہے۔ یہ پیرامیٹرز ایک ٹرسٹ ترتیب تقریب کے دوران پیدا ہوتے ہیں. یہ رضاکارانہ شرکاء کے ایک گروپ کی طرف سے ایک خاص وقت میں کیا گیا ایک مشترکہ حساب ہے. جب تک تصدیق کنندہ ایمانداری سے برتاؤ کرتا ہے ، پیرامیٹرز کو محفوظ طریقے سے تیار کیا جاتا ہے ، لہذا اس میں شامل زیادہ جماعتیں ، اس تقریب پر اتنا ہی زیادہ قابل اعتماد سمجھا جاسکتا ہے۔ اس تقریب کو مصنوعات کے ہر نئے ورژن کے لئے منعقد کیا جانا چاہئے.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKStark() {
  const message = this.createChatbotMessage(<a>ایک اسکیلیبل صفر علم شفاف علم کی دلیل – زیڈ کے سٹارک - <strong>زی کے سٹارک</strong><br></br><br></br>سمجھانا:<br></br><br></br>اسکیل ایبل: ٹیسٹ سائز میں نسبتا چھوٹا ہے اور تصدیق میں کم وقت لگتا ہے ، یہاں تک کہ بڑی تعداد میں ٹیسٹوں کے لئے بھی ، لہذا یہ اسکیل ایبل ہے۔<br></br>شفاف: قابل اعتماد ترتیب کے لئے کوئی ضروریات نہیں ہیں.<br></br>علم کی دلیل: ثبوت مضبوط ہے، کوئی بدخواہ ٹیسٹر نہیں ہے جو اس کے بیان کی حمایت کرنے کے لئے علم کے بغیر نظام کو دھوکہ دے.<br></br><br></br> زیڈ کے سٹارک کو ٹیکنیون اسرائیل انسٹی ٹیوٹ آف ٹیکنالوجی کے پروفیسر ایلی بین سیسن نے تیار کیا تھا۔ یہاں بڑا فرق یہ ہے کہ زیڈ کے سٹارک کو قابل اعتماد ابتدائی سیٹ اپ کی ضرورت نہیں ہوتی ہے: تقریب پر سنارک سیکشن میں تبادلہ خیال کیا گیا ہے۔ سٹارک سنارک کے مقابلے میں کمپیوٹیشنل طور پر کم مہنگا ہے اور ، نظریاتی طور پر ، وہ کوانٹم کمپیوٹر ہیں۔ تو اس کا منفی پہلو کیا ہے؟ ٹیسٹوں کا سائز سنارک سے کہیں زیادہ بڑا ہے اور اس سے آن چین ٹرانزیکشنز کی لاگت میں اضافہ ہوسکتا ہے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMetaverse() {
  const message = this.createChatbotMessage(<a>اس لفظ کا پہلا استعمال 1992 کے سائنس فکشن ناول میں ہے جسے سنو کریش کہا جاتا ہے۔ یہ میٹا اور کائنات کے الفاظ کا امتزاج ہے۔ وسرجن کے بڑھتے ہوئے مطالبات کی وجہ سے میٹاورس اکثر اعلی درجے کی ورچوئل رئیلٹی ٹیکنالوجی سے منسلک ہوتا ہے۔ اگرچہ میٹاورس گیم کا تصور نہیں ہے ، لیکن اس جگہ میں اس میں مزید اضافہ ہوا ہے۔ سیکنڈ لائف نامی ایک گیم کو اکثر پہلے میٹاورس کے طور پر بیان کیا جاتا ہے اور ناول ریڈی پلیئر ون (بعد میں ایک فلم) امکانات میں اضافہ کرتا رہا۔<br></br><br></br>مثالی طور پر ، ایک حقیقی میٹاورس صرف کھیلوں یا سوشل میڈیا کی حمایت نہیں کرے گا ، بلکہ معیشتوں ، ڈیجیٹل شناخت ، مہذب حکومت اور دیگر ایپلیکیشنز کو یکجا کرے گا۔ اس بارے میں سوچیں کہ روبلوکس صرف ایک کسٹم گیم نہیں ہے ، یہ کنسرٹس اور میٹنگس جیسے مجازی واقعات کے لئے کام کرتا ہے۔ کھیل صرف کھیلنے کے لئے نہیں ہے، یہ ایک مجازی جگہ میں گھومنے کے لیے ہے۔<br></br><br></br>کرپٹو غیر متغیر اور ملکیت کا ثبوت فراہم کرکے میٹاورس میں فٹ بیٹھتا ہے۔ اس بارے میں سوچیں کہ اس معاملے میں این ایف ٹی کس طرح کام کریں گے۔ ڈیجیٹل لباس، لوازمات، وغیرہ محفوظ طریقے سے اور فوری طور پر قابل تصدیق ہوں گے، یہ سب ایک مہذب ماحول میں. کھیل میں سکے اضافہ کر سکتے ہیں اور ایک صارف پیسہ کما سکتا ہے اور اسے وہاں خرچ کرسکتا ہے۔ والیٹ کے ساتھ، میٹاورس بہت قابل رسائی ہے اور جگہ میں بلاکچین کے ساتھ، ہمارے پاس ایک قابل اعتماد حکومت ہوگی جس طرح ہم قیادت کے لئے حقیقی زندگی میں ووٹ دیتے ہیں.<br></br><br></br>ایک واحد ، متحد میٹاورس تھوڑا سا دور ہونے کا امکان ہے ، لیکن اس کے لئے صحیح سمت میں بہت ساری پیشرفت یں ہیں اور بلاکچین راستے کی قیادت کرے گا۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleArbitrum() {
  const message = this.createChatbotMessage(<a>آربٹرم ایتھیریم کے لئے ایک اسکیلنگ حل ہے جو اخراجات اور تاخیر کو تیزی سے کم کرتا ہے۔  آربٹرم نے  ایتھیریم مین نیٹ پر آربٹرم ون  لانچ کیا ہے ، اور ٹیم اس کی آئندہ عوامی ریلیز کی تیاری کر رہی ہے۔<br></br><br></br>آربٹرم کے ساتھ انضمام کا شکریہ ، گراف کی ہوسٹنگ کیوری اور انڈیکسنگ کی خدمات اب آن لائن دستیاب ہیں۔  آربٹرم ون ڈویلپرز اب اوپن اے پی آئی (سب گراف) بنانے اور شائع کرنے کے قابل ہوں گے جو ایپلیکیشنز گراف کیو ایل کا استعمال کرتے ہوئے پوچھ سکتی ہیں۔<br></br><br></br>گراف پہلے ہی ایتھیریم ، آئی پی ایف ایس ، سیلو ، ایوالینچے ، فینٹم ، اور مون بیم کے لئے انڈیکسنگ ڈیٹا کی حمایت کرتا ہے۔ اس کے علاوہ ، ہزاروں ڈویلپرز پہلے ہی ڈوڈو ، ایم سی ڈی ای ایکس ، یونیسویپ ، سنتھیٹک ، گنوسس ، ڈیسینٹرالینڈ وغیرہ جیسی ایپلیکیشنز کے لئے 10،000 سے زیادہ سب گراف تشکیل دے چکے ہیں۔  اس فہرست میں آربٹرم کو شامل کرکے ، گراف کی توسیع کی کوششوں نے ویب 3 کو متحد کرنے کے لئے ایک اور قدم اٹھایا ہے۔ گراف اسپینول کی لورینا فیبریس نے کمیونٹی کے لئے مندرجہ ذیل سبق بنائے ہیں۔
  <br></br><br></br>آربٹرم انٹیگرا گراف ، اوپن ڈیٹا اب پرت 2 آربٹرم رول اپ میں فعال ہے۔</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStatistics() {
  const message = this.createChatbotMessage(<a>اگر آپ براہ راست اعداد و شمار / اعداد و شمار کے لئے تلاش کر رہے ہیں. اس کے بعد براہ کرم زیادہ مخصوص ہو. یہاں ایک فہرست ہے جس کے بارے میں آپ مجھ سے پوچھ سکتے ہیں:<br></br><br></br>فعال ڈیلیگیٹر گنتی<br></br>فعال ڈیلیگیشن گنتی<br></br>ہولڈرز شمار<br></br>سب گرافس گنتی<br></br>کیوریٹرز گنتی<br></br>فعال انڈیکسرز گنتی<br></br>کل طلب فیس کی گنتی<br></br>کل سٹیکڈ جی آر ٹی<br></br>کل سٹیکڈ جی آر ٹی<br></br>کل جی آر ٹی کیوریٹرز کے ذریعہ انڈیکس کیے گۓ<br></br>کل جی آر ٹی انڈیکسرز کے ذریعہ کل تفویض کردہ <br></br>کل جی آر ٹی جلا دیے گۓ</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTMobile() {
  const message = this.createChatbotMessage(<a><strong>ڈوئچے ٹیلیکام اور ٹی موبائل یو ایس اے نے 5 جی کے ذریعے نئی چیلنج ٹی تلاش کرنا والی ویب 3 ڈیولپمنٹ کا آغاز کر دیا</strong><br></br><br></br>5 جی نیٹ ورکس کا استعمال کرتے ہوئے جدید حل کو فائدہ پہنچانے والے اسٹارٹ اپس ، ڈویلپرز اور محققین کے لئے عالمی مقابلہ واپس آگیا ہے ، اس بار ویب 3 ٹیکنالوجیوں کی تلاش میں ہیں تاکہ دنیا انٹرنیٹ کے استعمال کے انداز کو تبدیل کرسکے۔<br></br><br></br>بون، جرمنی اور بیلیویو، واش - 2 نومبر، 2022 - ڈوئچے ٹیلیکام اے جی اور ٹی موبائل یو ایس، انکارپوریٹڈ (نیسڈیک: ٹی ایم یو ایس) نے تیسرے سالانہ ٹی چیلنج کو شروع کرنے کے لئے مل کر کام کیا ہے، جو جدت طرازوں اور رکاوٹوں کے لئے عالمی سطح پر ویب 3 کے لئے بہترین عوامی بلاکچین پروٹوکول حل کے لئے ایک ایوارڈ کے لئے مقابلہ کرنے کے لئے ہے. شرکاء کی طرف سے تیار کردہ حل ویب 3 کو زندہ کرنے کے لئے 5 جی کی طاقت کو استعمال کریں گے، 5 جی صارفین کو ان اختراعات سے منسلک رہنے میں اہم کردار ادا کرے گا.<br></br><br></br>درخواستیں سرکاری طور پر اب سے 20 جنوری ، 2023 تک کھلی ہیں۔ چھ فاتحین 600,000 یورو (تقریبا امریکی ڈالر میں ایک ہی) اور بون، جرمنی کے تمام اخراجات کی ادائیگی کے سفر کو تقسیم کریں گے، تاکہ ڈوئچے ٹیلی کام اور ٹی موبائل امریکہ میں اپنے خیالات پیش کریں.<br></br><br></br>گراف کی طرف سے ذکر کردہ مکمل مضمون پڑھنے کے لئے، <a className="cla" href="https://www.t-mobile.com/news/network/2023-t-challenge" target="_blank" rel="noreferrer">یہاں</a> ملاحظہ کریں
  
   </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSolana() {
  this.handleSubstreams = this.handleSubstreams.bind(this);
  const message = this.createChatbotMessage(<a><strong>گراف اب سب اسٹریمز کے ساتھ سولانا کی حمایت کرتا ہے۔</strong><br></br><br></br>گراف فاؤنڈیشن سب اسٹریمز کے ساتھ سولانا کے لئے اپنی حمایت کا اعلان کرتے ہوئے خوش ہے۔ سولانا ڈویلپر کمیونٹی اب انتہائی تیز ڈیپس بنانے کے لئے گراف کا استعمال شروع کرسکتی ہے۔ نئی سب اسٹریمنگ ٹیکنالوجی کا استعمال کرتے ہوئے ، ڈویلپرز اپنی ایپلیکیشنز کو طاقت دینے  کے لئے سولانا کے بیٹا مین نیٹ سے آن چین ڈیٹا کو موثر طریقے سے نکال سکتے ہیں اور اس کی ترجمانی کرسکتے  ہیں۔ سب اسٹریمز کے ساتھ مدد فراہم  کرنا سولانا میں سب گراف لانے میں پہلا قدم ہے۔<br></br><br></br>سب اسٹریمز ، جو مکمل طور پر اوپن سورس ہیں ، سولانا ڈویلپرز کو ان کی رفتار اور کارکردگی کی بدولت ، مکمل طور پر نئے طریقوں سے آن چین ڈیٹا کے ساتھ تعمیر کرنے کی اجازت دیتے ہیں۔ ڈویلپرز  مارکیٹ بھر سے پروٹوکول مخصوص ڈیٹا اسٹریمز یا تجزیاتی ڈیٹا سیٹ بنانے کے لئے ، مورچا میں کوڈڈ سب فلو ماڈیولز کا استعمال کرسکتے ہیں۔ ان کا استعمال ریئل ٹائم اطلاعات پیدا کرنے اور وسیع پیمانے پر ٹائم سیریز کی معلومات ظاہر کرنے کے لئے بھی کیا جاسکتا ہے۔ دیواروں والے باغات سے باہر نکلتے ہوئے ، اسٹریمنگ ڈویلپرز وقت بچانے کے لئے دوسروں کے ذریعہ تخلیق کردہ اسٹریمز کا فائدہ اٹھا سکتے ہیں اور اپنے کام کو کھلے عام دستیاب اور قابل عمل بنا کر پورے ویب 3 ایکو سسٹم کو طاقت دے سکتے ہیں۔ اس کے نتیجے میں ، ثانوی بہاؤ سولانا ڈویلپر کمیونٹی میں نئے اور جدید استعمال کے معاملات کو جنم دیتے ہیں۔<br></br><br></br>گراف ایکو سسٹم میں ایک بنیادی ڈویلپر اسٹریمنگ فاسٹ کے ذریعہ تیار کردہ ، سب اسٹریمز بہت سے فوائد کا دروازہ کھولتا ہے ، بشمول: ٹیکنالوجی سے متعلق مخصوص سنک کے ذریعہ کسی بھی ڈیٹا سسٹم کو کھانا کھلانا ، چین میں اعداد و شمار کو پڑھنے کے لئے اس کے سولانا پروگرام سے مورچا کوڈ کو دوبارہ استعمال کرنا ، لیزر پر مرکوز ڈی بگنگ کا تجربہ ، ڈیٹا اسٹریمز کی کمیونٹی اور کمپوز ایبل ریفائنمنٹ ، اور قابل اعتماد تنظیم نو - باشعور اسٹریمز۔<br></br><br></br>ایک حقیقی صنعت کو تبدیل کرنے والی ٹیکنالوجی ، ذیلی ٹرانسمیشن متوازی ڈیٹا پروسیسنگ کے ساتھ سب گراف کی کارکردگی کو غیر مقفل کرنے کے لئے تیار ہیں تاکہ ڈرامائی طور پر مطابقت پذیری کی رفتار میں اضافہ کیا جاسکے۔ افقی طور پر اسکیلیبل متوازی انجن کے ذریعہ ، سب اسٹریمز تاریخی انڈیکسنگ کی کارکردگی کو 100 گنا سے زیادہ ضرب دینے کے قابل ہیں۔<br></br><br></br>گراف اب سب اسٹریم کے ساتھ سولانا کی حمایت <a className="cla" href="https://thegraph.com/blog/indexing-solana-substreams/" target="_blank" rel="noreferrer">کرتا ہے</a>۔</a>
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
    const message = this.createChatbotMessage(<a><strong>گراف 17 دسمبر 2022 کو 2 سال کا ہو گیا</strong><br></br><br></br>دنیا بھر سے بہت سے لوگوں نے  مندرجہ ذیل چھ کمیونٹی کی قیادت میں سالگرہ کے واقعات میں سے ایک میں شرکت کرکے میننیٹ پر گراف نیٹ ورک کے آغاز اور غیر مرکزیت کے عزم کا جشن منانے میں مدد کی. ایف او ایم او حقیقی تھا! آپ <a className="cla" href="https://twitter.com/i/spaces/1vOGwMQpzPgxB" target="_blank" rel="noreferrer">یہاں</a> ٹویٹر اسپیس سن سکتے ہیں۔ اگر آپ اسے یاد کرتے ہیں تو ،  فکر نہ کریں ، آپ نیچے دیئے گئے بٹنوں پر کلک کرکے پکڑ سکتے ہیں
     <br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>ایمسٹرڈیم</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>بیونس آئرس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>دبئی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>لاگوس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>سان فرانسسکو</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>سنگاپور</strong></button></a>
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
      const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/colsongrteacher?s=21&t=G1z0E5ndRT5F549tsuRY2A' target="_blank" rel="noreferrer"><strong>Colson</strong></a> نے ایمسٹرڈیم میں ایمسٹل بوٹ ہاؤس میں گراف ، 2 سالہ سالگرہ کے جشن کی میزبانی کی۔<br></br><br></br>وقوعہ سے جاری ہونے والے مواد کا انتظار کر رہا ہے...<br></br><br></br>آپ ذیل میں دیگر واقعات کو بھی دیکھ سکتے ہیں<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>بیونس آئرس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>دبئی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>لاگوس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>سان فرانسسکو</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>سنگاپور</strong></button></a>
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
        const message = this.createChatbotMessage(<a>گراف ، بیونس آئرس میں ایریا 3 ایل سلواڈور میں 2 سالہ سالگرہ کا جشن۔<br></br><br></br>آپ گراف اسپینول کے ذریعہ بنائے گئے اس ٹویٹر فیڈ کے ذریعہ ایونٹ کو دیکھ سکتے ہیں ، <a className="cla" href='https://twitter.com/espanolgraph/status/1604257219628916736?s=46&t=MuGXfy1qv8hl2x-HpLcfAg' target="_blank" rel="noreferrer">یہاں</a>۔
         <br></br><br></br>آپ ذیل میں دیگر واقعات کو بھی دیکھ سکتے ہیں.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>ایمسٹرڈیم</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>دبئی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>لاگوس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>سان فرانسسکو</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>سنگاپور</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/Mardeni01' target="_blank" rel="noreferrer">احمد مردینی</a> نے دبئی کے او پی ایم روم میں گراف، 2 سالہ سالگرہ کی تقریب کی میزبانی کی۔<br></br><br></br>آپ اس کے ٹویٹر فیڈ کے ذریعہ <a className="cla" href='https://twitter.com/mardeni01/status/1604127593007120384?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">یہاں</a> اور <a className="cla" href='https://twitter.com/mardeni01/status/1604205523619946498?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">یہاں</a> ایونٹ کو دیکھ سکتے ہیں۔
<br></br><br></br>آپ ذیل میں دیگر واقعات کو بھی دیکھ سکتے ہیں.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>ایمسٹرڈیم</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>بیونس آئرس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>لاگوس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>سان فرانسسکو</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>سنگاپور</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/thegraphnations?s=21&t=2oybVC4qbnXUtBbgmnvSqw' target="_blank" rel="noreferrer">دی گراف نیشن</a> نے لاگوس میں لیکی کولیزیم (ٹی ایل سی) میں گراف ، 2 سالہ سالگرہ کی تقریب کی میزبانی کی۔<br></br><br></br>آپ یہاں اور یہاں ان کے ٹویٹر فیڈ کے ذریعہ ایونٹ کو دیکھ سکتے <a className="cla" href='https://twitter.com/thegraphnations/status/1603831459629891585?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">ہیں</a>۔
           <br></br><br></br><a className="cla" href='https://twitter.com/thegraphnations/status/1603831459629891585?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">ہیں</a><br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>ایمسٹرڈیم</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>بیونس آئرس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>دبئی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>سان فرانسسکو</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>سنگاپور</strong></button></a>
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
            const message = this.createChatbotMessage(<a>سان فرانسسکو میں ایج اینڈ نوڈ ہاؤس آف ویب 3 میں گراف ، 2 سالہ سالگرہ کا جشن۔<br></br><br></br>آپ <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603952216540213248?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">یہاں</a> اور <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603990278322507780?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">یہاں</a> ان کے ٹویٹر کے ذریعہ ایونٹ کو دیکھ سکتے ہیں۔
            
              <br></br><br></br>آپ ذیل میں دیگر واقعات کو بھی دیکھ سکتے ہیں.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>ایمسٹرڈیم</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>بیونس آئرس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>دبئی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>لاگوس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>سنگاپور</strong></button></a>
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
              const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/impranavm_?s=21&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">پرناو مہیشوری</a> نے سنگاپور میں گراف، 2 سالہ سالگرہ کی تقریب کی میزبانی کی۔<br></br><br></br>آپ اس کے ٹویٹر فیڈ کے ذریعہ <a className="cla" href='https://twitter.com/impranavm_/status/1604024407789182976?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">یہاں</a> اور <a className="cla" href='https://twitter.com/impranavm_/status/1603991615009304576?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">یہاں</a> ایونٹ کو دیکھ سکتے ہیں۔
               <br></br><br></br>آپ ذیل میں دیگر واقعات کو بھی دیکھ سکتے ہیں<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>ایمسٹرڈیم</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>بیونس آئرس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>دبئی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>لاگوس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>سان فرانسسکو</strong></button></a>
                ,
              );
              this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
              }));
            }

  handleNews() {
    const message = this.createChatbotMessage(<a>اگر آپ گراف کے بارے میں تازہ ترین خبروں، شراکت داری کے نئے اعلانات اور کمیونٹی کے اندر کیا ہو رہا ہے اس کے بارے میں پڑھنا چاہتے ہیں، تو نیچے دیئے گئے لنکس اس میں مدد کرسکتے ہیں.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">گراف بلاگ</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">گراف ایڈوکیٹ اسپاٹ لائٹ</a><hr></hr>اس بات کو یقینی بنائیں کہ آپ <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">ٹویٹر</a> پر گراف کو فالو کر رہے ییں۔ </a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

// ------------------------
  // -Update V1 Start--------
  // ------------------------

  handleAI() {
    const message = this.createChatbotMessage(<a><strong></strong>گراف نیٹ ورک کو بہتر کرنے کے لیے آرٹیفیشل انٹیلیجینس کا استعمال<strong></strong><br></br><br></br>دسمبر 2021، <a className="cla" href="https://semiotic.ai/" target="_blank" rel="noreferrer">سیمیٹک</a> سیمیٹک گراف کی چوتھی کور ڈویلپر ٹیم بن گئی۔ وہ گراف نیٹ ورک پر انڈیکسر کے طور پر کام کر رہے ہیں، جس کے لیے ڈیو اوپس کی خصوصی مہارتوں کی ضرورت ہے، اور 2021 کے اوائل سے ایک مسابقتی انڈیکسر، سیمیٹک-انڈیکسر۔ایتھ چلا رہا ہے۔ مزید، انہوں نے اپنی آٹیفیشل انٹیلیجینس مہارت کا استعمال کرتے ہوئے گراف ایکو سسٹم میں دو آٹومیشن سافٹ ویئر ٹولز جاری کیے ہیں: آٹو اگورا اور ایلوکیشن آپٹیمائزر. <a className="cla" href="https://thegraph.com/explorer/profile/0xd75c4dbcb215a6cf9097cfbcc70aab2596b96a9c?view=Indexing&chain=mainnet" target="_blank" rel="noreferrer">semiotic-indexer.eth</a><br></br><br></br>آپ یہ <a className="cla" href="https://thegraph.com/blog/using-ai-to-enhance-the-graph/" target="_blank" rel="noreferrer">بلاگ</a> پرھ سکتے ہیں، یہ ان کی ماضی اور موجودہ آرٹیفیشل انٹیلیجینس کوششوں کا ایک جائزہ فراہم کرتی ہے، اور یہ مستقبل کے خیالات کا خاکہ پیش کرتا ہے کے کیسے گراف کی منفرد ڈیٹا انڈیکسنگ کی صلاحیتوں کو آرٹیفیشل انٹیلیجینس ایپلیکیشنز کے لیے فائدہ اٹھایا جا سکتا ہے۔
    آرٹیفیشل انٹیلیجینس کے بارے میں مزید جاننے کے لیے جی آر ٹی آئ کیو پوڈکاسٹ سنیں اینی، سیم، اورٹوماسز کے ساتھ دریافت کریں کے آٹیفیشل انٹیلیجینس کیا ہے، نظم و ضبط کی ابتدا، اور چیٹ جی پی ٹی کا مہاکاوی عروج اور وہ کیسے کام کرتا ہے۔<br></br><br></br>آرٹیفیشل انٹیلیجینس کے بارے میں مزید جاننے کے لیے جی آر ٹی آئ کیو <a className="cla" href="https://www.youtube.com/watch?v=7RZU7wbFKwQ" target="_blank" rel="noreferrer">پوڈکاسٹ</a> سنیں اینی، سیم، اورٹوماسز کے ساتھ دریافت کریں کے آٹیفیشل انٹیلیجینس کیا ہے، نظم و ضبط کی ابتدا، اور چیٹ جی پی ٹی کا مہاکاوی عروج اور وہ کیسے کام کرتا ہے۔</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleNetworkIntergration() {
    const message = this.createChatbotMessage(<a>آپ <a className="cla" href="https://thegraph.com/docs/en/network-transition-faq/#the-graph-network-integration-status-tracker" target="_blank" rel="noreferrer">یہاں</a>، گراف نیٹ ورک کی انٹیگریشنز کی صورتحال پر اپ ڈیٹ رہ سکتے ہیں۔<br></br><br></br>آپ کو ایک ٹیبل ملے گا جو یہ بتاتا ہے کہ نیٹ ورک انٹیگریشن کے عمل میں ہر نیٹ ورک کہاں ہیں جو یہ ہیں:<br></br><br></br>گراف نیٹ ورک پر نیٹ ورک انٹیگریشن کا اعلان کر رہا ہے۔
    <br></br>
<br></br>نیٹ ورک انٹیگریشن مکمل
<br></br>پہلا مرحلہ: ہوسٹڈ سروس پر نئے سب گرافس بند کرنا
<br></br>دوسرا مرحلہ: ہوسٹڈ سروس پر سب گرافس اپ گریڈس بند کرنا
<br></br>تیسرا مرحلہ: ہوسٹڈ سروس پر سب گرافس بند کرنا
</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleArbitrum() {
    const message = this.createChatbotMessage(<a><a className="cla" href="https://developer.arbitrum.io/intro/" target="_blank" rel="noreferrer">آربٹرم</a> ایتھیریم کے لیے ایک سکیلنگ حل ہے جو لاگت اور تاخیر کو کافی حد تک کرتا ہے۔<br></br><br></br>آربٹرم کے ساتھ انٹیگریشن کی بدولت، گراف کی انڈیکسنگ اور کیورنگ سروسز اب نیٹ ورک پر فعال ہیں۔ آربٹرم ون پر ڈویلپرز اب اوپن اے پی آئیز (سب گرافس) بنا اور شائع کر سکیں جو ایپلیکیشنز گراف کیو ایل کا استعمال کرتے ہوئے کیوری کر سکیں گی۔<br></br><br></br>اس فہرست میں آربٹرم کو شامل کر کے، گراف کی توسیعی کوششوں نے ویب 3 ایکو سسٹم کو متحد کرنے میں ایک اور قدپ اٹھایا ہے۔<hr></hr>ایل 2 پر گراف کو سکیل کرنے سے، نیٹ ورک کے شرکاء توقع کر سکتے ہیں:<br></br><br></br>گیس فیس میں 26 فیسد بچت<br></br>تیز ٹرانزیکشن رفتار<br></br>ایتھیریم کی طرف سے محفوظ<hr></hr>آپ اپنے جی آر ٹی اور ایتھ کو مندرجہ ذیل طریقوں سے بریج کر سکتے ہیں:<br></br><br></br><a className="cla" href="https://bridge.arbitrum.io/?l2ChainId=42161" target="_blank" rel="noreferrer">آربٹرم پر گراف بریج</a><br></br><a className="cla" href="https://jumper.exchange/" target="_blank" rel="noreferrer">کی طرف بھیجنا</a><br></br><a className="cla" href="https://bridge.connext.network/" target="_blank" rel="noreferrer">کونیکسٹ بریج</a><br></br><a className="cla" href="https://app.hop.exchange/#/send?token=ETH" target="_blank" rel="noreferrer">ہوپ ایکسچینج</a><hr></hr>10 اپریل 2023 تمام انڈیکسنگ کے انعامات کے 5 فیسد آربٹرم پر دیے جا رہے ہیں۔ جیسے جیسے نیٹ ورک کی شرکت میں اضافہ ہوتا ہے، اور جیسے کونسل اسے منظور کرتی ہے، انڈیکسنگ کے انعامات آہستہ آہستہ ایتھیریم سے آربٹرم منتقل ہو جاتے ہیں، بالآخر مکمل طور پر آربٹرم پر منتقل ہو جائیں گے۔</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
  
  handleNetworks() {
    const message = this.createChatbotMessage(<a>گراف نیٹ ورک اور ہوسٹڈ سروس پر نیٹ ورکس پر اپ ڈیٹ رہنے کے لیے، <a className="cla" href="https://thegraph.com/docs/en/#supported-networks" target="_blank" rel="noreferrer">یہاں</a> دیکھیں!</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleGRTTokenAddress() {
    const message = this.createChatbotMessage(<a>نیچے آپ کو جی آر ٹی کے کنٹریکٹس اور تفصیلات ملیں گی، نقصان دہ کنٹریکٹ شامل کرنے سے بچنے کے لیے معلومات کو دو بار چیک کرنا یقینی بنائیں۔<br></br><br></br>نام: گراف
<br></br>علامت: جی آر ٹی
<br></br>نیٹ ورک: ایتھیریم (ای آر سی 20)
<br></br>Ethereum: 0xc944E90C64B2c07662A292be6244BDf05Cda44a7<br></br>Arbitrum: 0x9623063377AD1B27544C965cCd7342f7EA7e88C7<br></br>اعشاریہ: 18
<hr></hr>آپ یہ کوائن مارکیٹ کیپ پر چیک کر سکتے ہیں، <a className="cla" href="https://coinmarketcap.com/en/currencies/the-graph/" target="_blank" rel="noreferrer">یہاں</a></a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

handleCoinbase() {
    const message = this.createChatbotMessage(<a><strong>گراف نئی ایل 2:  کے ٹیسٹ نیٹ <a className="cla" href="https://www.coinbase.com/blog/introducing-base" target="_blank">لانچ</a> کے لیے کوائن بیس کے ساتھ تعاون کر رہا ہے۔</strong><br></br><br></br>گراف نے بیس ٹیسٹ نیٹ کو پہلے دن سے ہی سپورٹ کیا ہے۔ بیس ٹیسٹ نیٹ کی گراف سے ہمایت سب گراف سٹوڈیو اور گراف نیٹ ورک میں مکمل تعاون کی بنیاد بھی رکھتی ہے جب بیس مین نیٹ لائیو ہوتا ہے۔ ڈویپلرز بیس مین نیٹ کے آغاز کی تیاری کے لیے ابھی ٹیسٹ نیٹ پر بیس سب گراف بنا کر خود کو واقف کر سکتے ہیں، اس لیے وہ گراف نیٹ ورک کا استعمال کرتے ہوئے ڈیسینٹرالائزڈ انداز میں مشن کے لیے اہم ڈیپ ڈیٹا کو کیوری کرنے کے لیے سب گراف کا استعمال جاری رکھ سکتے ہیں۔<br></br><br></br>ڈویلپرز آج ہی سے <a className="cla" href="https://thegraph.com/docs/en/cookbook/base-testnet/" target="_blank">یہاں</a>یہاں دستاویزات کو فالو کرتے ہوئے سب گراف کے ساتھ موئثر طریقے سے منظم بیس ڈیٹا سے کیوری کرنا شروع کریں۔ <hr></hr>اپنے کوائن بیس والیٹ کے ساتھ جی آر ٹی ٹوکنز کیسے ڈیلیگیٹ کریں<br></br><br></br>اس آرٹکل میں یہ آپ کو سکھائے گا کے گراف پروٹوکول میں کیسے اپنے جی آر ٹی ٹوکنز ڈیلیگیٹ کیے جائیں، کوائن بیس والیٹ کا استعمال کرتے ہوئے۔ <br></br><br></br>گرافٹرونوٹس کی بنائی گئی گائڈ پرھنے کے لیے، <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-delegate-your-grt-tokens-with-coinbase-wallet-85168f84e95e" target="_blank">یہاں</a> دیکھیں۔ اور اگر آپ وڈیو ٹیوٹوریل دیکھنا پسند کریں گے،  تو آپ کو وہ نیچے مل جائے گا۔<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s'/></a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleGIPS() { 
    const message = this.createChatbotMessage(<a><strong>گراف میں بہتری کی تجاویز</strong><hr></hr>جی آی پیز گراف کے تعمیری مرحلے کا ضروری جز ہے۔ وہ کمیونٹی کو ایسی تبدیلیاں تجویز کرنے، بحث کرنے اور لاگو کرنے کا ایک طریقہ فراہم کرتے ہیں جو گراف کو بہتر بنانے اور تیار کرنے میں مدد کرتے ہیں۔ ایک منظم عمل کی پیروی کرتے ہوئے، جی آی پیز اس بات کو یقینی بنانے میں مدد کرتے ہیں کہ اسے کھلے، شفاف اور باہمی تعاون کے ساتھ تیار کیا گیا ہے۔<hr></hr>مندرجہ ذیل میں سے کسی کے لیے <a className="cla" href="https://github.com/graphprotocol/graph-improvement-proposals" target="_blank">گٹ ہب ریپو</a> کا ملاحظہ کریں:<br></br><br></br>جی آی پیز - پروٹوکول لاجک، انٹرفیس، فعالیت، چارٹر، اور تجاویز۔<br></br>جی آر پیز - تجاویز کے لیے درخواستیں جو کسی اہم مسئلے کو حل کرتی ہیں یا گراف کے لیے ضروری استعمال کے معاملے کو حل کرتی ہیں۔<br></br>جی آر سیز - گراف پر تعمیر کے لیے ایپلیکیشن لیئر کمیونٹی کے معیارات پر تبصرے کی درخواستیں۔</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleBounties() { 
    const message = this.createChatbotMessage(<a><strong>گراف ایڈوکیٹس ڈاو باؤنٹیز</strong><br></br><br></br>یہ باؤنٹیز ان ایڈوکیٹس کے لیے ہیں جو تعاون کرنا چاہتے ہیں، شامل ہونے کے لیے <a className="cla" href="https://app.dework.xyz/graph-advocatesdao" target="_blank">ڈی ورک</a> پر جائیں۔</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleBilling() { 
    const message = this.createChatbotMessage(<a><strong>گراف بلنگ کیسے کام کرتی ہے</strong><br></br><br></br>گراف ایتھیریم مین نیٹ پر کام کرتا ہے، لیکن ٹرانزیکشن کے وقت اور خرچے کم کرنے کے لیے، بلنگ کنٹریکٹ <a className="cla" href="https://arbiscan.io/address/0x1b07d3344188908fb6deceac381f3ee63c48477a" target="_blank">آربٹرم</a> نیٹ ورک پر رہتا ہے۔<br></br><br></br>بلنگ نیٹ ورک پر کی گئی کیوریز پر مبنی ہے۔ ہر کیوری کے اخراجات، کیوری کی فیس، مقامی جی آر ٹی میں ادا کی جاتی ہے۔ کیوری کے اخراجات کیوری کی پیچیدگی اور نیٹ ورک کی حالت پر مبنی ہے۔ کیوری کی رقم تب بتائ جاتی ہے جب صارف کیوری پیش کرتا ہے، تاہم صارف جی آر ٹی سے محروم نہیں ہو گا اگر اگر استعمال شدہ رقم اس کے بیان کردہ سے زیادہ ہو۔ حد سے زیادہ ادائیگی سے بچنے کے لیے وہ کتنی رقم ادا کرنے کو تیار ہیں۔<br></br><br></br>انڈیکسرز گراف کیو ایل کیوریز پیش کر کے جی آر ٹی میں کیوری فیس کماتے ہیں۔ یہ درست اور بر وقت ڈیٹا فراہم کر کے اختتامی صارفین کو فائدہ پہنچاتا ہے۔ گراف ڈیٹا تک موئثر رسائ کے کے لیے مسابقی بازار کی اجازت دیتا ہے۔<br></br><br></br><strong>گراف نیٹ ورک پر کیوریز کے لیے ادائیگی کرنا اب اتنا ہی آسان ہے جتنا کریڈٹ کارڈ سوائپ کرنا! اب آپ ڈیبٹ یا کریڈٹ کارڈ کے ذریعے اپنے کیوری کی فیس بیلنس ادا کر سکتے ہیں، نئے <a className="cla" href="https://twitter.com/BanxaOfficial" target="_blank">بنکسا</a> وی فیاٹ اون ریمپ کی بدولت۔</strong><br></br><Embed className="embed" isDark url='https://twitter.com/graphprotocol/status/1638933843645288449?s=20'/></a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

handleDelegateGuides() {
  const message = this.createChatbotMessage(<a>میں آپ کو وہ فراہم کروں گا جو آپ کو ڈیلیگیٹر بننے کی ضرورت ہے۔ مندرجہ ذیل معلومات اور وسائل آپ کی مدد کریں گے.
    <br></br><br></br>
    انڈیکسرز ٹیوٹوریل کا انتخاب دیکھنے سے  آپ کو یہ سمجھنے میں مدد ملے گی کہ آپ کو کیا تلاش کرنے کی ضرورت ہے۔ اس بات کو یقینی بنانے کے لئے کہ آپ تفویض کرنے سے پہلے پراعتماد ہیں ، مزید تفہیم حاصل کرنے کے لئے نیچے دیئے گئے سبق دیکھیں۔
    <br></br><br></br>
    آپ اپنے جی آر ٹی ٹوکنز کو اپنی پسند کے انڈیکسر کو تفویض کرکے <a className="cla" href="https://thegraph.com/explorer/participants/indexers" target="_blank">network.thegraph.com</a> پر سٹیک پر لگا سکتے ہیں۔ 
    <br></br><br></br>
    ایک 0.5٪ ڈیلیگیشن ٹیکس ہے جو ڈیلیگیشن کے وقت خرچ کیا جاتا ہے تاکہ ڈیلیگیٹرز کو انڈیکسر سے وابستہ کرنے کی حوصلہ افزائی کی جاسکے۔
    <br></br><br></br>
    غیر تفویض کرنے میں 28 دن لگتے ہیں کیونکہ یہ مختص کی زیادہ سے زیادہ مدت ہے۔
    <br></br><br></br>
    ایک ڈیلیگیشن ٹرانزیکشن کی اوسط لاگت کے لئے ، گرافٹرونوٹس کا دورہ  کریں اور فیس منتخب کریں۔
    <br></br>
    <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank">گرافٹرونوٹس</a><br></br><br></br>آپ <a className="cla" href="https://docs.thegraph.academy/network/delegators/general-documentation-1/choosing-indexers/guides" target="_blank">یہاں</a> اپنے جی آر ٹی کو تفویض کرنے یا اس میں حصہ لینے کے بارے میں رہنما تلاش کر سکتے ہیں۔ <br></br><br></br>گرافٹرونوٹس نے اپنے گائیڈ بھی بنائے ہیں:<br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-stake-your-tokens-with-the-graph-the-complete-guide-to-become-a-delegator-3f723e6420b1" target="_blank">ڈیلیگیٹر بننے کے لیے مکمل گائیڈ</a><br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s" target="_blank">Coinbase والیٹ Staking</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/binance-staking-vs-delegating-with-the-graph-network-b4ba7e259b73" target="_blank">بائننس اسٹیکنگ بمقابلہ گراف نیٹ ورک کے ساتھ ڈیلیگیٹنگ</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/faq-for-the-graph-delegators-2b4a03a830f2" target="_blank">گراف ڈیلیگیٹرز کے لیے اکثر پوچھے گئے سوالات</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank">اپنے جی آر ٹی ٹوکن ڈیلیگ کرنے کے لیے گیس کی قیمت کو کیسے کم کیا جائے۔</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphtronauts() {
  const message = this.createChatbotMessage(<a>ڈیلیگیٹرز کے لئے ایک کمیونٹی ، ڈیلیگیٹرز کے ذریعہ تعمیر کی گئی۔<br></br>گرافٹرونوٹس ایک ایسا گروپ ہے جو ان لوگوں کے لئے چیٹ کو آسان بنانے کے لئے وقف ہے جو جی آر ٹی رکھنا چاہتے ہیں اور گراف پروجیکٹ کے بنیادی اصولوں کے بارے میں بات کرتے ہیں۔ نہ صرف وہ  گراف ایکو سسٹم کے لئے طویل مدتی جی آر ٹی ہولڈرز کی سب سے بڑی غیر سرکاری کمیونٹی ہیں، ان کا مقصد گراف کے لئے ایک ڈیلیگیٹر بننے کے لئے ان کے سفر میں لوگوں کی مدد کرنا ہے.<br></br><br></br>'ہم دوسروں کو اٹھا کر اٹھتے ہیں' - گرافٹرونوٹ | 16 جنوری 2021 کو قائم کیا گیا<br></br><br></br>
   باغے اور کرس ایونگ کے ساتھ  اس <a className="cla" href="https://www.grtiq.com/grtiq-podcast-35-the-graphtronauts/" target="_blank" rel="noreferrer">جی آر ٹی آئی کیو پوڈ کاسٹ</a> کو سن کر گرافٹرونوٹس کے
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

handleSubstreams() {
  const message = this.createChatbotMessage(<a>اسٹریمنگ فاسٹ ایک پروٹوکول انفراسٹرکچر کمپنی ہے جو بلاکچین ڈیٹا ٹرانسمیشن کے لئے انتہائی اسکیل ایبل کراس چین فن تعمیر کی تعمیر میں مہارت رکھتی ہے۔ 60 ملین ڈالر کی کور ڈویلپر گرانٹ اپنی نوعیت کی پہلی گرانٹ ہے ، جو باہمی تعاون سے جدت طرازی کی ایک نئی سرحد کا آغاز کرتی ہے جہاں کمیونٹیز اور کاروباری ادارے بنیادی طور پر زیادہ کھلے انٹرنیٹ کی تعمیر کے لئے سیدھ میں آتے ہیں۔<br></br><br></br>اسٹریمنگ فاسٹ ایک پروٹوکول انفراسٹرکچر کمپنی ہے جو بلاکچین ڈیٹا ٹرانسمیشن کے لئے انتہائی اسکیل ایبل کراس چین فن تعمیر کی تعمیر میں مہارت رکھتی ہے۔ 60 ملین ڈالر کی کور دیو گرانٹ اپنی نوعیت کی پہلی گرانٹ ہے ، جو باہمی تعاون سے جدت طرازی کی ایک نئی سرحد کا آغاز کرتی ہے جہاں کمیونٹیز اور کاروباری ادارے بنیادی طور پر زیادہ کھلے انٹرنیٹ کی تعمیر کے لئے سیدھ میں آتے ہیں۔<br></br><br></br>
  سب اسٹریمز کے بارے میں دستاویزات تلاش کرنے کے لئے، <a className="cla" href="https://thegraph.com/blog/core-dev-grant" target="_blank" rel="noreferrer">یہاں</a>
   <hr></hr>اسٹریمنگ فاسٹ ڈسکورڈ سرور میں شامل ہوں یا انہیں یہاں چیک کریں۔<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=qWxffTKpciU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWomenInWeb3() {
  const message = this.createChatbotMessage(<a>
    
    <a className="cla" href="https://twitter.com/evabeylin?s=21&t=xlTfEQdph_MfbuUlhFrb0Q" target="_blank" rel="noreferrer"><strong>ایوا بیلن</strong></a> اکتوبر 2020 سے گراف فاؤنڈیشن کی ڈائریکٹر ہیں۔ وہ ای گرل کیپٹل کے ذریعے بنیادی ایتھیریم ٹیکنالوجی میں سرمایہ کار اور حامی  ہیں اور گراف کی ترقی کی  قیادت کر رہی  ہیں۔ وہ کوائن ڈیسک کے سب سے زیادہ بااثر 2022 میں سے ایک ہے، یہاں مکمل بلاگ پڑھیں. انہوں نے گراف کے بنیادی ڈویلپرز کو گرانٹس میں 135 ملین ڈالر سے زیادہ کی تقسیم اور ٹائیگر گلوبل کی سربراہی میں فاؤنڈیشن کے 50 ملین ڈالر کے سرمائے کی قیادت کی ہے۔ گراف ڈے 2022 میں ہمارے ڈیسینٹرلائزیشن سفر  کے بارے میں ان کی گفتگو دیکھیں ، <a className="cla" href="https://www.coindesk.com/consensus-magazine/2022/12/05/eva-beylin-most-influential-2022/" target="_blank" rel="noreferrer">یہاں</a>۔ انہوں نے فوربس 2023 انڈر <a className="cla" href="https://www.forbes.com/profile/eva-beylin/?sh=34d711c95444" target="_blank" rel="noreferrer">30</a> بنایا۔ آپ یہاں ایک انٹرویو دیکھ کر ایوا کو جان سکتے ہیں۔
    <br></br><br></br>
    <a className="cla" href="https://twitter.com/theklineventure?s=21&t=8FTTZesLJJUxAVnVbmLgQg" target="_blank" rel="noreferrer"><strong>ٹیگن کلائن</strong></a>بنانے میں مدد کے لئے 22.5 ملین جمع کرنے کے بعد جو ایتھیریم ڈویلپرز کو یہ سمجھنے دیتا ہے کہ  ان کی مصنوعات کو کس طرح استعمال کیا جارہا ہے ، اس نے اس منصوبے کو منیٹائز کرنے میں مدد کے لئے ایج اینڈ نوڈ کی مشترکہ بنیاد رکھی۔ ایج اینڈ نوڈ کو اصل میں جی آر ٹی ٹوکن کے 8٪ حصص کے ساتھ مالی اعانت فراہم کی گئی تھی ، جس کی قیمت اب تقریبا 650 ملین ڈالر ہے۔ کلائن نے دی گراف سے ملحقہ منصوبوں میں ایج اینڈ نوڈ کی سرمایہ کاری کی بھی قیادت کی ہے ، جو  2021 میں مجموعی طور پر 3.1 ملین ڈالر ہے۔ انہوں نے فوربز 2022 انڈر <a className="cla" href="https://www.forbes.com/profile/tegan-kline/?sh=1465202462f7" target="_blank" rel="noreferrer">30</a> بنایا۔ آپ یہاں اس کی ویب سائٹ پر جاکر کلائن کو جان سکتے <a className="cla" href="https://www.tegankline.com/" target="_blank" rel="noreferrer">ہیں</a>۔ اس کے ساتھ ایک انٹرویو دیکھیں، <a className="cla" href="https://youtu.be/yONuFNxJVrc" target="_blank" rel="noreferrer">یہاں</a>. یا <a className="cla" href="https://youtu.be/ZGHwTb92Rrg" target="_blank" rel="noreferrer">یہاں</a>یہاں (جی آر ٹی کیو) پوڈ کاسٹ سن سکتے  ہیں۔
     <br></br><br></br>
     <a className="cla" href="https://twitter.com/girlcalledreem?s=21&t=h9ZItE1mnaruz2uPiHkrLQ" target="_blank" rel="noreferrer"><strong>ریم چہارور</strong></a>گرانٹس کے کام کی پیروی کی ہے ، پھر وہ پہلے ہی ریم کا سامنا کرچکے ہیں۔ وہ  گراف کمیونٹی کے لئے ایک اہم اثاثہ ہے اور اس کا کام مختلف قسم کے اہم اقدامات کا احاطہ کرتا ہے. آپ اسے (جی آر ٹی کیو) پوڈ کاسٹ پر سن سکتے ہیں ، یہاں۔ وہ کرپٹو میں اپنے داخلے اور گراف فاؤنڈیشن میں اپنے کام کے بارے میں بات کرتی ہے ، گرانٹ کے لئے درخواست دینے کے خواہاں افراد کے لئے اس کا مشورہ (اور جہاں فاؤنڈیشن مزید گذارشات دیکھنا چاہتی ہے) ، آر ایف پی اور گرانٹس پروگراموں کے مابین فرق ، اور جلد ہی لانچ گراف ایڈوکیٹس پروگرام۔
     <br></br><br></br>
     جب کوئی انڈیکسر کا ذکر کرتا ہے تو وہ مرد کے نام استعمال کرتے ہیں۔ "وہ اپنا الاٹمنٹ بند کر دیتا ہے"۔ انڈیکسر ٹیموں پر کام کرنے والی ویب 3 میں خواتین کو اجاگر کرنے یا گراف ایکو سسٹم کے اندر اپنا انڈیکسر چلانے  کے خواہاں گرافٹرونوٹس نے ویب 3 کی خواتین کے ساتھ انٹرویوز کا ایک سلسلہ منعقد کیا۔
     <br></br><br></br>
     <a className="cla" href="https://www.youtube.com/watch?v=WTdf9wEhSLg" target="_blank" rel="noreferrer">ویب 3 کی خواتین - گراف اوپس سے انا</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=0D4_17B6ypY" target="_blank" rel="noreferrer">ویب 3 کی خواتین - سیٹیڈیل.ون سے انا</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=chvIFfPfOjY" target="_blank" rel="noreferrer">ویب 3 کی خواتین - چینوڈ ٹیک سے  (آئی آئی این سی اے)</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=Z7UnQotqLVA" target="_blank" rel="noreferrer">ویب 3 کی خواتین   -  اسٹیک 2 ارن سے گیبی</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// end v1
  
handleHello() {
  const message = this.createChatbotMessage(<a>ہیلو، میں آج آپ کی مدد کیسے کر سکتا ہوں؟</a>
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
  const message = this.createChatbotMessage(<a>آپ نیچے دیئے گئے بٹنوں کو بھی استعمال کر سکتے ہیں اور جواب تلاش کرنے کے لیے نیچے سکرول کر سکتے ہیں!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>گراف</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>ڈیلیگیٹر</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>کیوریٹر</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>انڈیکسر</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>کور ڈویلپرز</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>سب گراف</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>براہ راست اعداد و شمار</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>کمیونٹی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>خبر</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>ویب 3 سیکھیں</strong></button></a>
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
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>گراف</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>ڈیلیگیٹر</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>کیوریٹر</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>انڈیکسر</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>کور ڈویلپرز</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>سب گراف</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>براہ راست اعداد و شمار</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>کمیونٹی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>خبر</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>ویب 3 سیکھیں</strong></button></a>
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
  }}><strong>کونسل</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCoreDevs();
  }}><strong>کور ڈویلپرز</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFoundingMembers();
    this.handleButtonTheGraph();
  }}><strong>بانی اراکین</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHostedService();
    this.handleButtonTheGraph();
  }}><strong>ہوسٹڈ سروس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonTheGraph();
  }}><strong>سن سیٹنگ ہوسٹڈ سروس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonTheGraph();
  }}><strong>ڈیسینٹرالائزڈ ڈیٹا</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoadMap();
    this.handleButtonTheGraph();
  }}><strong>روڈ میپ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoles();
    this.handleButtonTheGraph();
  }}><strong>ایکو سسٹم کے کردار</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMIPS();
    this.handleButtonTheGraph();
  }}><strong>ایم آئ پیز</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleJob();
    this.handleButtonTheGraph();
  }}><strong>نوکریاں</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBirthday();
    this.handleButtonTheGraph();
  }}><strong>سالگرہ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphDay();
    this.handleButtonTheGraph();
  }}><strong>گراف ڈے</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleParticipantUpdate();
    this.handleButtonTheGraph();
  }}><strong>شرکاء کی تازہ کاری</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGeo();
    this.handleButtonTheGraph();
  }}><strong>جیو</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonTheGraph();
  }}><strong>گٹ ہب</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphFunding();
    this.handleButtonTheGraph();
  }}><strong>فنڈنگ</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleGraphQLApi();
    this.handleButtonTheGraph();
  }}><strong>گراف کیو ایل اے پی آئی</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleGRTTokenAddress();
    this.handleButtonTheGraph();
  }}><strong>جی آر ٹی ٹوکن ایڈریس</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handlePowerDAOS();
    this.handleButtonTheGraph();
  }}><strong>سنیپ شاٹ</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>زمرہ جات کا مینو</strong></button></a>
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
  }}><strong>ایج اینڈ نوڈ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFigment();
    this.handleButtonCoreDevsChat();
  }}><strong>فگمنٹ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTheGraphFoundation();
    this.handleButtonCoreDevsChat();
  }}><strong>گراف فاؤنڈیشن</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonCoreDevsChat();
  }}><strong>سٹریمنگ فاسٹ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSemiotic();
    this.handleButtonCoreDevsChat();
  }}><strong>سیمیوٹک</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTheGuild();
    this.handleButtonCoreDevsChat();
  }}><strong>دی گلڈ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphOps();
    this.handleButtonCoreDevsChat();
  }}><strong>گراف اوپس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonCoreDevsChat();
  }}><strong>میساری</strong></button></a>
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
  }}><strong>ایج اینڈ نوڈ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFigment();
    this.handleButtonCoreDevs();
  }}><strong>فگمنٹ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTheGraphFoundation();
    this.handleButtonCoreDevs();
  }}><strong>گراف فاؤنڈیشن</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonCoreDevs();
  }}><strong>سٹریمنگ فاسٹ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSemiotic();
    this.handleButtonCoreDevs();
  }}><strong>سیمیوٹک</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTheGuild();
    this.handleButtonCoreDevs();
  }}><strong>دی گلڈ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphOps();
    this.handleButtonCoreDevs();
  }}><strong>گراف اوپس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonCoreDevs();
  }}><strong>میساری</strong></button>
  
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>زمرہ جات کا مینو</strong></button></a>
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
  }}><strong>ڈیلیگیٹر رہنما</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDelegateWithWallet();
    this.handleButtonDelegator();
  }}><strong>والیٹ کے ساتھ ڈیلیگیٹ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCoinbase();
    this.handleButtonDelegator();
  }}><strong>کوائن بیس والیٹ سے ڈیلیگیٹ کریں</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFeesToDelegate();
    this.handleButtonDelegator();
  }}><strong>ڈیلیگیشن کی فیس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleUnDelegating();
    this.handleButtonDelegator();
  }}><strong>غیر تفویض کرنا</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTenderize();
    this.handleButtonDelegator();
  }}><strong>ٹینڈرائز کرنا</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleChoosingIndexers();
    this.handleButtonDelegator();
  }}><strong>انڈیکسر کا انتخاب</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonDelegator();
  }}><strong>انڈیکسرز کا موازنہ کریں</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonDelegator();
  }}><strong>فعال ڈیلیگیٹر کا شمار</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonDelegator();
  }}><strong>فعال ڈیلیگیشن کی گنتی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonDelegator();
  }}><strong>ڈیلیگیٹرز کے ذریعے تفویض کردہ کل جی آر ٹی</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>زمرہ جات کا مینو</strong></button></a>
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
  }}><strong>کیوریٹر کا کردار</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorTools();
    this.handleButtonCurator();
  }}><strong>کیوریٹر ٹولز</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonCurator();
  }}><strong>کیوریٹر کی گنتی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonCurator();
  }}><strong>کیوریٹرز کے ذریعہ انڈیکس کردہ کل جی آر ٹی</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>زمرہ جات کا مینو</strong></button></a>
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
  }}><strong>انڈیکسرز کا انتخاب</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonIndexer();
  }}><strong>انڈیکسرز کا موازنہ کریں</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBecomeIndexer();
    this.handleButtonIndexer();
  }}><strong>انڈیکسر بنیں</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerHardwareRequirements();
    this.handleButtonIndexer();
  }}><strong>انڈیکسرز ہارڈ ویئر کی ضروریات</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerMap();
    this.handleButtonIndexer();
  }}><strong>انڈیکسر میپ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMIPS();
    this.handleButtonIndexer();
  }}><strong>ایم آئ پیز</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerOfficeHours();
    this.handleButtonIndexer();
  }}><strong>انڈیکسر آفس اوقات</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexingRewardsAndQueryFees();
    this.handleButtonIndexer();
  }}><strong>انڈیکسر کے انعامات</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleQueryFeesAndIndexingRewardCut();
    this.handleButtonIndexer();
  }}><strong>کیوری کی فیس اور انڈیکسنگ انعام میں کٹوتی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAllocations();
    this.handleButtonIndexer();
  }}><strong>مختصات</strong></button><br class="no-show-monitor"></br>
 <button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonIndexer();
  }}><strong>فعال انڈیکسرز شمار</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonIndexer();
  }}><strong>انڈیکسرز کی گنتی کے لحاظ سے کل تفویض کردہ جی آر ٹی</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>زمرہ جات کا مینو</strong></button></a>
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
  }}><strong>سب گراف</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonSubgraph();
  }}><strong>سب سٹریمز</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonSubgraph();
  }}><strong>سنسیٹنگ ہوسٹڈ سروس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonSubgraph();
  }}><strong>ڈیسینٹرالائزڈ ڈیٹا</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleVsSelfHosting();
    this.handleButtonSubgraph();
  }}><strong>ہوسٹنگ بمقابلہ خود ہوسٹنگ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSoulBound();
    this.handleButtonSubgraph();
  }}><strong>سول باونڈ</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleFireHose();
    this.handleButtonSubgraph();
  }}><strong>فائر ہوز</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonSubgraph();
  }}><strong>میساری</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonSubgraph();
  }}><strong>سب گراف شمار</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonSubgraph();
  }}><strong>گٹ ہب</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>زمرہ جات کا مینو</strong></button></a>
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
  }}><strong>شرکاء کی تازہ کاری</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHoldersCount();
    this.handleButtonStatistics();
  }}><strong>ہولڈرز کی گنتی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonStatistics();
  }}><strong>فعال ڈیلیگیٹرز کا شمار</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonStatistics();
  }}><strong>فعال انڈیکسرز شمار</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonStatistics();
  }}><strong>کیوریٹر کی گنتی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonStatistics();
  }}><strong>فعال ڈیلیگیٹرز کی گنتی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalQueryFeesCount();
    this.handleButtonStatistics();
  }}><strong>کیوری کی فیس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonStatistics();
  }}><strong>سب گراف کا شمار</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonStatistics();
  }}><strong>ڈیلیگیٹرز کے ذریعے تفویض کردہ کل جی آر ٹی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonStatistics();
  }}><strong>انڈیکسرز کے ذریعہ تفویض کردہ کل جی آر ٹی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonStatistics();
  }}><strong>کیوریٹرز کے ذریعہ انڈیکسر کردہ کل جی آر ٹی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalStakedGRTCount();
    this.handleButtonStatistics();
  }}><strong>کل اسٹیکڈ جی آر ٹی کی گنتی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTBurnedCount();
    this.handleButtonStatistics();
  }}><strong>کل جی آر ٹی جلی ہوئی کی تعداد</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>زمرہ جات کا مینو</strong></button></a>
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
  }}><strong>ڈسکورڈ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTelegram();
    this.handleButtonCommunity();
  }}><strong>ٹیلیگرام</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTwitter();
    this.handleButtonCommunity();
  }}><strong>ٹویٹر</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphtronauts();
    this.handleButtonCommunity();
  }}><strong>گرافٹرونوٹس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphDay();
    this.handleButtonCommunity();
  }}><strong>گراف ڈے 2022</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBirthday();
    this.handleButtonCommunity();
  }}><strong>گراف سالگرہ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAdvocates();
    this.handleButtonCommunity();
  }}><strong>گراف ایڈوکیٹس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphSocial();
    this.handleButtonCommunity();
  }}><strong>گراف سوشل</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePodcast();
    this.handleButtonCommunity();
  }}><strong>GRTiQ پوڈ کاسٹ</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>زمرہ جات کا مینو</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMIPS(){
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  const message = this.createChatbotMessage(<a><strong>گراف کا ملٹی چین انسینٹیوائزڈ پروگرام</strong><br></br><br></br>پروگرام بوٹسٹریپ انڈیکسرز کو ڈیسینٹرلائزڈ نیٹ ورک پر نئی چینز کے لیے سپورٹ شامل کرتا ہے، جس سے ملٹی چین سب گرافس کی منتقلی ممکن ہوتی ہے۔ یہ <a className="cla" onClick={this.handleSunsettingHostedService} target="_blank" rel="noreferrer">ہوسٹڈ سروس</a> کے غروب ہونے سے پہلے ڈی پی پی اور سب گراف کی منتقلی کے لیے تعاون کی ایک اہم توسیع ہے۔
   <br></br><br></br>پروگرام نے جی آر ٹی سپلائی (75 جی آر ٹی) کا 0.75% مختص کیا ہے، 0.5% انڈیکسرز کو انعام دینے کے لیے جو نیٹ ورک کو بوٹسٹریپ کرنے میں حصہ ڈالتے ہیں اور 0.25% ملٹی چین سب گراف استعمال کرنے والے سب گراف ڈویلپرز کے لیے مائیگریشن گرانٹس کے لیے مختص کیے گئے ہیں۔ قوارٹر1 2023 کے اختتام تک، نیٹ ورک کے تعاون سے چلنے والی تمام چینز کے لیے میزبانی کی سروس غروب ہو جائے گی، لہذا ایم آئی پیز پروگرام سب گراف منتقلی کی کوششوں کے متوازی طور پر کام کرے گا۔<br></br><br></br>ڈیسینٹرلائزڈ نیٹ ورک پر تعاون کرنے والی پہلی چین <a className="cla" href='https://twitter.com/gnosischain' target="_blank" rel="noreferrer">گنوسس</a> چین تھی۔
   نئی چینز کا اعلان پورے ایم آئی پیز پروگرام میں کیا جائے گا، جو انڈیکسنگ کی تیاری، طلب اور کمیونٹی کے جذبات پر مبنی ہے۔ ایم آئی پیز کی کارکردگی اور اسکورنگ اور اہلیت کے تقاضوں کے بارے میں مزید پڑھنے کے لیے، <a className="cla" href='https://thegraph.com/blog/mips-multi-chain-indexing-incentivized-program/' target="_blank" rel="noreferrer">یہاں</a> دیکھیں۔
    <hr></hr>اب تک اعلان کردہ چینز کو نیچے پایا جا سکتا ہے۔<br></br><br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1613980493787312128?s=20&t=_FqJsNOl6vvyIYt3B0KCfg' target="_blank" rel="noreferrer"><strong>گنوسس</strong></a> بیٹا انضمام مکمل<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615443632252948480' target="_blank" rel="noreferrer"><strong>پولیگون</strong></a> انضمام جاری ہے<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772854838231040?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>آربٹرم</strong></a> جلد آ رہا ہے!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772857211961354?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>ایوالینچے</strong></a> جلد آ رہا ہے!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772859678457859?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>سیلو</strong></a> جلد آ رہا ہے!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772862110900225?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>اوپٹیمزم</strong></a> جلد آ رہا ہے!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonNews() {
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  const message = this.createChatbotMessage(<a>اگر آپ گراف کے بارے میں تازہ ترین خبروں، شراکت داری کے نئے اعلانات اور کمیونٹی کے اندر کیا ہو رہا ہے اس کے بارے میں پڑھنا چاہتے ہیں، تو نیچے دیے گئے لنک اس میں مدد کر سکتے ہیں۔<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">گراف بلاگ</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">گراف ایڈوکیٹس اسپاٹ لائٹ</a><br></br><br></br>یقینی بنائیں کہ آپ <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">ٹویٹر</a> پر گراف کو بھی فالو کریں۔
   <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>زمرہ جات کا مینو</strong></button></a>
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
  }}><strong>ویب کیا ہے؟</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCourses();
    this.handleButtonLearnWeb3();
  }}><strong>کورسز</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLearnWeb3();
    this.handleButtonLearnWeb3();
  }}><strong>ویب 3 سیکھیں</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWhatIsABlockchain();
    this.handleButtonLearnWeb3();
  }}><strong>بلاکچین</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSafe();
    this.handleButtonLearnWeb3();
  }}><strong>کیا یہ محفوظ ہے؟</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWeb3DApp();
    this.handleButtonLearnWeb3();
  }}><strong>کیا یہ محفوظ ہے؟</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCryptocurrencies();
    this.handleButtonLearnWeb3();
  }}><strong>کرپٹو کرنسیاں</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>ایتھیریم</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGas();
    this.handleButtonLearnWeb3();
  }}><strong>گیس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>سکے یا ٹوکن</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMining();
    this.handleButtonLearnWeb3();
  }}><strong>مائننگ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleNFT();
    this.handleButtonLearnWeb3();
  }}><strong>این ایف ٹی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMetaverse();
    this.handleButtonLearnWeb3();
  }}><strong>میٹاورس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSmartContract();
    this.handleButtonLearnWeb3();
  }}><strong>سمارٹ کنٹریکٹ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleStablecoin();
    this.handleButtonLearnWeb3();
  }}><strong>سٹیبل کوائن</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLayerTwo();
    this.handleButtonLearnWeb3();
  }}><strong>پرت دو</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenEconomics();
    this.handleButtonLearnWeb3();
  }}><strong>ٹوکن معاشیات</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenBurn();
    this.handleButtonLearnWeb3();
  }}><strong>ٹوکن برن</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCoreDevs();
    this.handleButtonLearnWeb3();
  }}><strong>کور ڈویلپرز</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDAO();
    this.handleButtonLearnWeb3();
  }}><strong>ڈاو</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCEX();
    this.handleButtonLearnWeb3();
  }}><strong>سی ای ایکس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDEX();
    this.handleButtonLearnWeb3();
  }}><strong>ڈی ای ایکس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIPFS();
    this.handleButtonLearnWeb3();
  }}><strong>آئی پی ایف ایس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePOI();
    this.handleButtonLearnWeb3();
  }}><strong>پی او آئی</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePOS();
    this.handleButtonLearnWeb3();
  }}><strong>پی او ایس</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePOW();
    this.handleButtonLearnWeb3();
  }}><strong>پی او ڈبلیو</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleZKProof();
    this.handleButtonLearnWeb3();
  }}><strong>زیڈ کے پروف</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleZKSnark();
    this.handleButtonLearnWeb3();
  }}><strong>زیڈ کے سنارک</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleZKStark();
    this.handleButtonLearnWeb3();
  }}><strong>زیڈ کے سٹارک</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWomenInWeb3();
    this.handleButtonLearnWeb3();
  }}><strong>ویب 3 میں خواتین</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>زمرہ جات کا مینو</strong></button></a>
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
  const message = this.createChatbotMessage(<a>معاف کیجئے گا، مجھے جواب نہیں مل سکا. کیا آپ دوبارہ کوشش کر سکتے ہیں یا سوال کو دوبارہ دہرا سکتے ہیں؟ آپ ہمیشہ سوالیہ بینک کی جانچ پڑتال کر سکتے ہیں. اگر میں اب بھی آپ کی مدد نہیں کرسکتا ہوں تو ، براہ کرم نیچے دیئے گئے آراء فارم کو پر کرنے کے لئے 2 منٹ لیں۔ آپ کی مدد سے، یہ میرے علم کو بہتر بنائے گا اور مجھے مستقبل میں جی آر ٹی کمیونٹی کے دیگر ممبروں کی مدد کرنے کی اجازت دے گا جو بھی اسی طرح کے سوالات ہوسکتے ہیں اور جوابات تلاش کرسکتے ہیں. شکریہ
  
  {/* help start */}

  <br></br><br></br>آپ نیچے دیئے گئے بٹنوں کو بھی استعمال کر سکتے ہیں اور جواب تلاش کرنے کے لیے نیچے سکرول کر سکتے ہیں!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>گراف</strong></button><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>ڈیلیگیٹر</strong></button><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>کیوریٹر</strong></button><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>انڈیکسر</strong></button><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>کور ڈویلپرز</strong></button><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>سب گراف</strong></button><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>براہ راست اعداد و شمار</strong></button><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>کمیونٹی</strong></button><button className="chatbot-button" onClick={this.handleButtonNews}><strong>خبر</strong></button><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>ویب 3 سیکھیں</strong></button>

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

