import React from 'react';
import '../../App.css';
import { ChatBotActiveDelegatorCountBar ,  ChatBotHoldersCountBar, ChatBotActiveDelegationCountBar, ChatBotSubgraphsCountBar, ChatBotCuratorsCountBar, ChatBotActiveIndexerCountBar, ChatBotTotalGRTDelegatedByDelegatorsBar, ChatBotTotalQueryFeesCountBar, ChatBotTotalGRTSignalledByCuratorsBar, ChatBotTotalStakedGRTCountBar, ChatBotTotalDelegatedGRTByIndexersCountBar, ChatBotTotalGRTBurnedCountBar } from "../mainBarCharts/BarChartsData";
import Embed from 'react-embed';

class HINActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
// Charts / Graphs Start
handleActiveDelegatorCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>The Active Delegator Count is <ChatBotActiveDelegatorCountBar />.</h4>
  एक्टिव डेलिगेटर काउंट को फुल व्यू में देखने के लिए <a className="cla" href="https://grtdatahub.com/ActiveDelegatorCount" target="_blank" rel="noreferrer"> यहां क्लिक करें</a>।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveDelegationCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>The Active Delegation Count is <ChatBotActiveDelegationCountBar />.</h4>
   सक्रिय प्रतिनिधिमंडल की संख्या को पूर्ण दृश्य में देखने के लिए <a className="cla" href="https://grtdatahub.com/ActiveDelegationCount" target="_blank" rel="noreferrer">यहां क्लिक करें</a>।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleHoldersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>The Holders Count is <ChatBotHoldersCountBar/>.</h4>
   धारकों की संख्या को पूर्ण रूप से देखने के लिए <a className="cla" href="https://grtdatahub.com/HoldersCount" target="_blank" rel="noreferrer">यहां क्लिक करें</a>रें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleSubgraphsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>The Subgraph Count is <ChatBotSubgraphsCountBar/>.</h4>
   सबग्राफ काउंट को पूर्ण रूप से देखने देखने के लिए <a className="cla" href="https://grtdatahub.com/SubgraphsCount" target="_blank" rel="noreferrer">यहां क्लिक करें</a>रें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleCuratorsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>The Curator Count is <ChatBotCuratorsCountBar/>.</h4>
  क्यूरेटर काउंट को पूर्ण रूप से देखने के लिए <a className="cla" href="https://grtdatahub.com/CuratorsCount" target="_blank" rel="noreferrer">यहां क्लिक करें</a>  |</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveIndexerCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>The Active Indexer Count is <ChatBotActiveIndexerCountBar/>.</h4>
   सक्रिय अनुक्रमणिका गणना को पूर्ण दृश्य में देखने के लिए <a className="cla" href="https://grtdatahub.com/ActiveIndexerCount" target="_blank" rel="noreferrer">यहां क्लिक क</a>रें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTDelegatedByDelegators() {
  const message = this.createChatbotMessage(<a> 
  <h4>The Total amount of GRT Delegated by Delegators is <ChatBotTotalGRTDelegatedByDelegatorsBar/>.</h4>
   प्रतिनिधियों द्वारा प्रत्यायोजित जीआरटी की कुल राशि को पूर्ण रूप से देखने के लिए <a className="cla" href="https://grtdatahub.com/TotalGRTDelegatedByDelegators" target="_blank" rel="noreferrer">यहां क्लिक करें</a>रें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalQueryFeesCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>The Total Query Fees Count is <ChatBotTotalQueryFeesCountBar/> GRT.</h4>
  कुल प्रश्न शुल्क गणना को पूर्ण दृश्य में देखने के लिए  <a className="cla" href="https://grtdatahub.com/TotalQueryFeesCount" target="_blank" rel="noreferrer">यहां क्लिक करें</a>रें। </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTSignalledByCurators() {
  const message = this.createChatbotMessage(<a> 
  <h4>The Total Amount of GRT Signalled by Curators is <ChatBotTotalGRTSignalledByCuratorsBar/>.</h4>
  क्यूरेटरों द्वारा हस्ताक्षरित जीआरटी की कुल राशि को पूर्ण दृश्य में देखने के लिए <a className="cla" href="https://grtdatahub.com/TotalGRTSignalledByCurators" target="_blank" rel="noreferrer">यहां क्लिक करें</a>रें। </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalStakedGRTCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>The Total Amount of GRT Staked is <ChatBotTotalStakedGRTCountBar/>.</h4>
   जीआरटी स्टेक की कुल राशि को पूर्ण रूप से देखने के लिए <a className="cla" href="https://grtdatahub.com/TotalStakedGRTCount" target="_blank" rel="noreferrer">यहां क्लिक करें</a>। .</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalDelegatedGRTByIndexersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>The Total Amount of Delegated GRT by Indexers is <ChatBotTotalDelegatedGRTByIndexersCountBar/>.</h4>
   अनुक्रमणकों द्वारा प्रत्यायोजित GRT की कुल राशि को पूर्ण रूप से देखने के लिए <a className="cla" href="https://grtdatahub.com/TotalDelegatedGRTByIndexersCount" target="_blank" rel="noreferrer">यहां क्लिक करें</a>। </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTotalGRTBurnedCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>The Total Amount of GRT Burned is <ChatBotTotalGRTBurnedCountBar/>.</h4>
   जीआरटी बर्न की कुल राशि को पूर्ण रूप से देखने के लिए <a className="cla" href="https://grtdatahub.com/TotalGRTBurnedCount" target="_blank" rel="noreferrer">यहां क्लिक करें</a>रें। </a>
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
  const message = this.createChatbotMessage(<a>
    किसी अनुक्रमणिका को प्रत्यायोजित करने के लिए चुनना एक कठिन निर्णय हो सकता है। निम्नलिखित जानकारी और संसाधन आपकी मदद करेंगे। सिर्फ इसलिए कि एक इंडेक्सर के पास सबसे ज्यादा एपीवाई है, इसका मतलब यह नहीं है कि वे आपके लिए सबसे अच्छे हैं। अपना खुद का शोध करें, अपना समय लें और जानें कि सौंपने के लिए इंडेक्सर चुनते समय क्या देखना चाहिए। यह सुनिश्चित करेगा कि आप सौंपने से पहले आश्वस्त हैं।<hr></hr><a className="cla" href="https://medium.com/@OG-ग्राफट्रोनॉट्स/how-to-chose-an-indexer-for-delegation-in-graph-protocol-a59725c16062" target="_blank">ग्राफ़ प्रोटोकॉल में डेलिगेशन के लिए एक इंडेक्सर कैसे</a> चुनें पर इस ग्राफ़ट्रोनॉट्स गाइड को पढ़ना और <a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">इंडेक्सर्स को चुनना</a> ट्यूटोरियल देखने से आपको यह समझने में मदद मिलेगी कि आपको क्या देखना है।<br></br><br></br>
    <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">ग्राफट्रोनॉट्स</a> ऐप प्रतिनिधियों को उनकी पसंद के इंडेक्सर पर उपयोगी अंतर्दृष्टि प्राप्त करने की अनुमति देता है। बस अपनी पसंद के इंडेक्सर का ETH पता डालें या समीक्षाओं पर एक नज़र डालें। आप ऐप के भीतर इंडेक्सर्स की तुलना भी कर सकते हैं।<br></br><br></br>एक बार जब आप डेलिगेट करने के लिए तैयार हों, तो कृपया <a className="cla" onClick={this.handleDelegateGuides}>मुझे क्लिक</a> करें और मैं आपको टेक्स्ट और वीडियो ट्यूटोरियल प्रदान करूंगा।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Choosing Indexers End
handleJob() {
  const message = this.createChatbotMessage(<a>Web3 में काम करना चाहते हैं? खुशखबरी, द ग्राफ इकोसिस्टम भर्ती कर रहा है! द ग्राफ फाउंडेशन और कोर देव टीमों में अवसर हैं। वर्तमान खुली स्थितियों के लिए <a className="cla" href="https://thegraph.com/jobs/#open-positions" target="_blank" rel="noreferrer">यहां</a> देखें।
     </a>
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
  const message = this.createChatbotMessage(<a>
    ग्राफ़ नेटवर्क में तीन भूमिकाएँ होती हैं जो पारिस्थितिकी तंत्र को सेवाएँ प्रदान करती हैं और Uniswap, Aave और Synthetix जैसे Web3 अनुप्रयोगों को डेटा प्रदान करती हैं: इंडेक्सर्स, क्यूरेटर और प्रतिनिधि। आप नीचे प्रत्येक भूमिका के लिए विस्तृत दस्तावेज़ीकरण प्राप्त कर सकते हैं।<br></br><a className="cla" onClick={this.handleBecomeIndexer}><strong>इंडेक्सर्स</strong></a><br></br><a className="cla" onClick={this.handleCurator}><strong>क्यूरेटर</strong></a><br></br><a className="cla" onClick={this.handleDelegateGuides}><strong>प्रतिनिधि</strong></a><br></br><br></br>द ग्राफ़ नेटवर्क की आर्थिक सुरक्षा और क्वेरी किए जा रहे डेटा की अखंडता सुनिश्चित करने के लिए, प्रतिभागी ग्राफ़ टोकन (जीआरटी) को दांव पर लगाते हैं और उनका उपयोग करते हैं। GRT एक कार्य टोकन है जो एथेरियम ब्लॉकचेन पर एक ERC-20 है, जिसका उपयोग नेटवर्क में संसाधन आवंटित करने के लिए किया जाता है। सक्रिय अनुक्रमणिका, क्यूरेटर और प्रतिनिधि सेवाएं प्रदान कर सकते हैं और नेटवर्क से आय अर्जित कर सकते हैं, जो उनके द्वारा किए जाने वाले कार्य और उनकी जीआरटी हिस्सेदारी के अनुपात में है।</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleEdgeAndNode() {
  const message = this.createChatbotMessage(<a>
   द ग्राफ नेटवर्क के पीछे के विचार की कल्पना की गई थी और इसे ग्राफ प्रोटोकॉल, इंक द्वारा आकार दिया गया था। 17 दिसंबर, 2020 को द ग्राफ नेटवर्क का मेननेट लॉन्च करने के बाद, ग्राफ प्रोटोकॉल, इंक। नाम बदलने के पीछे मंशा नेटवर्क में चल रहे विकेंद्रीकरण को उजागर करना था। इसलिए, एज एंड नोड अब प्रोटोकॉल को विकसित करने और बढ़ावा देने वाली केंद्रीय टीम नहीं है। इसके बजाय, एज एंड नोड पारिस्थितिकी तंत्र को सेवाएं प्रदान करेगा और प्रोटोकॉल में शामिल होगा।</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTheGraphFoundation() {
  const message = this.createChatbotMessage(<a>
    द ग्राफ फाउंडेशन के निर्माण की <a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank" rel="noreferrer">घोषणा</a>  अक्टूबर 2020 में की गई थी। ईवा बाइलिन द ग्राफ फाउंडेशन के निदेशक के रूप में कार्य करती हैं। प्रोटोकॉल के संचालन के लिए जिम्मेदार, ग्राफ फाउंडेशन पारिस्थितिकी तंत्र को समन्वय और सहायता प्रदान करेगा। नींव की स्थापना विकेंद्रीकृत एक स्वतंत्र संगठनात्मक संरचना बनाने की रणनीति का हिस्सा थी।
     <a className="cla" href="https://ca.linkedin.com/in/evabeylin?original_referer=https%3A%2F%2Fdocs.thegraph.academy%2Fthe-graph-ecosystem%2Forganizational-structure%2Fthe-graph-foundation" target="_blank" rel="noreferrer">Eva Beylin</a> द ग्राफ फाउंडेशन के निदेशक के रूप में कार्य करती हैं। प्रोटोकॉल के संचालन के लिए जिम्मेदार, ग्राफ फाउंडेशन पारिस्थितिकी तंत्र को समन्वय और सहायता प्रदान करेगा। नींव की स्थापना विकेंद्रीकृत एक स्वतंत्र संगठनात्मक संरचना बनाने की रणनीति का हिस्सा थी।<hr></hr>परिषद के सदस्यों:<br></br>इंडेक्सर्स<br></br>Jim Cousins और Gary Morris<br></br>उपयोगकर्ताओं<br></br>Justin J Moses और Kayvon Tehranian<br></br>शोधकर्ताओं<br></br>Santiago Palladino और Yondon Fu<br></br>समर्थकों<br></br>Michael Anderson और Spencer Noon<br></br>प्रारंभिक टीम<br></br>Brandon Ramirez और Yaniv Tal</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTheGraphCouncil() {
  const message = this.createChatbotMessage(<a>
    प्रोटोकॉल को विकेंद्रीकृत करने की योजना के एक हिस्से के रूप में ग्राफ काउंसिल को अक्टूबर 2020 में पेश <a className="cla" href="https://thegraph.com/blog/introducing-the-graph-council" target="_blank" rel="noreferrer">किया गया</a>  था। द <a className="cla" href="https://thegraph.com/blog/inaugurating-council-and-grants" target="_blank" rel="noreferrer">ग्राफ काउंसिल के सदस्यों का</a> उद्घाटन दिसंबर 2020 में हुआ था। ग्राफ़ परिषद विकेंद्रीकरण ग्राफ़ नेटवर्क को नियंत्रित करता है। एक 6-ऑफ-10 मल्टीसिग पारिस्थितिक तंत्र में पांच अलग-अलग हिटमार्कर के संतुलित करता है: ग्लोबर्स, टोकन धारक, प्रारंभिक टीम, उपयोगकर्ता और तकनीकी डोमेन विशेषज्ञ।
     <br></br><br></br>द ग्राफ काउंसिल के अधिदेश में निम्नलिखित मुख्य कार्य शामिल हैं:<br></br>ग्राफ फाउंडेशन ऑपरेशंस<br></br>अनुदान और पारिस्थितिकी तंत्र अनुदान<br></br>प्रोटोकॉल अपग्रेड<br></br>प्रोटोकॉल पैरामीटराइजेशन<br></br>आपातकालीन प्रोटोकॉल संचालन</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Networok Roles End

handleBecomeIndexer() {
  const message = this.createChatbotMessage(<a><strong>ग्राफ़ नेटवर्क पर प्रभावी अनुक्रमणिका कैसे बनें</strong><hr></hr>अनुक्रमणकों के लिए न्यूनतम आवश्यकताएँ - ग्राफ़ नेटवर्क पर प्रभावी अनुक्रमणिका बनने के लिए चार मुख्य आवश्यकताएँ आवश्यक हैं।<br></br><br></br>स्टेक- इंडेक्सर बनने के लिए आपको कम से कम 100,000 जीआरटी दांव पर लगाना होगा।<br></br><br></br>कौशल - आदर्श रूप से, इंडेक्सर्स के पास DevOps की पृष्ठभूमि होनी चाहिए या ब्लॉकचैन नोड्स के संचालन का अनुभव होना चाहिए। इंडेक्सर्स को क्लाउड या होस्ट किए गए सर्वरों को परिनियोजित करने, या अपना स्वयं का सर्वर हार्डवेयर चलाने में सहज होना चाहिए। एक सत्यापनकर्ता नोड चलाने और लिनक्स पर काम करने के साथ परिचित होने का भी सुझाव दिया गया है।<br></br><br></br>हार्डवेयर - कार्यकुशलता, क्वेरी आउटपुट और गति को संतुलित करने के लिए, कई इंडेक्सर अक्सर 16 सीपीयू, एक 1 टीबी डिस्क और 32 जीबी रैम के सेटअप के साथ शुरू करते हैं।<br></br><br></br>इन्फ्रास्ट्रक्चर सॉफ्टवेयर - डॉकटर और कुबेरनेट्स जैसे कंटेनर और स्केलिंग तकनीकों के साथ परिचित होना फायदेमंद है, हालांकि ग्राफ सॉफ्टवेयर को नंगे धातु में तैनात करना भी संभव है। इन्फ्रास्ट्रक्चर सॉफ़्टवेयर आवश्यकताओं में एक PostgreSQL डेटाबेस, ग्राफ़ नोड, इंडेक्सर एजेंट, इंडेक्सर सेवा, प्रोमेथियस मेट्रिक्स सर्वर और आपकी विशिष्ट आवश्यकताओं और सेटअप के आधार पर संभावित रूप से अधिक शामिल हैं। हार्डवेयर - दक्षता, क्वेरी आउटपुट और गति को संतुलित करने के लिए, कई इंडेक्सर्स अक्सर प्रारंभ करते हैं 16 सीपीयू, एक 1 टीबी डिस्क और 32 जीबी रैम के सेटअप के साथ।<br></br><br></br>ग्राफ़ नेटवर्क पर इंडेक्सर्स के लिए सर्वोत्तम प्रथाओं के बारे में जानने के लिए, आदर्श इंडेक्सर समुदाय की भागीदारी, एक अनुशंसित इंडेक्सर टेक सेटअप, संसाधन और गाइड और ग्राफ़ के साथ अपनी इंडेक्सिंग यात्रा शुरू करें। यह <a className="cla" href="https://thegraph.com/blog/how-to-become-indexer/" target="_blank" rel="noreferrer">गाइड</a> आपको ग्राफ़ नेटवर्क पर एक सर्वश्रेष्ठ-इन-क्लास इंडेक्सर बनने के लिए परिचालन आवश्यकताओं, सर्वोत्तम प्रथाओं और संचार रणनीति को सीखने में मदद करती है।</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// Discord and Telegram Start
handleGraphDiscord() {
  const message = this.createChatbotMessage(<a>ग्राफ़ आधिकारिक कलह सर्वर <a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">यहाँ</a> पाया जा सकता है।</a>
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
  const message = this.createChatbotMessage(<a>जब भी अनुक्रमणिका अपना आवंटन बंद करते हैं, अनुक्रमणिका पुरस्कार एकत्र और वितरित किए जाते हैं। जबकि वे सक्रिय हैं, आवंटन लगातार पुरस्कार अर्जित करते रहते हैं। इंडेक्सर्स या तो अपने आवंटन को मैन्युअल रूप से बंद कर सकते हैं या उन्हें अधिकतम आवंटन जीवनकाल (प्रत्येक 28 युग) के बाद स्वचालित रूप से बंद कर सकते हैं।<br></br><br></br>28 युग = ~ 28 दिन <br></br><br></br>सक्रिय होने के दौरान आवंटन लगातार पुरस्कार अर्जित कर रहे हैं। इंडेक्सर्स द्वारा पुरस्कार एकत्र किए जाते हैं, और जब भी उनका आवंटन बंद हो जाता है, वितरित किया जाता है। यह या तो मैन्युअल रूप से होता है, जब भी इंडेक्सर उन्हें बंद करना चाहता है, या स्वचालित रूप से प्रत्येक अधिकतम 28 युग - अधिकतम आवंटन जीवनकाल होता है। अपने लंबित पुरस्कारों को देखने के लिए, <a className="cla" href="https://www.graphtronauts.com/#/profile" target="_blank" rel="noreferrer">ग्राफट्रोनॉट्स</a> ऐप पर जाएं और एक वॉलेट जोड़ें।</a>
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
  const message = this.createChatbotMessage(<a>जब भी एक आवंटन बंद हो जाता है (या तो मैन्युअल रूप से एक इंडेक्सर द्वारा या स्वचालित रूप से अधिकतम आवंटन जीवनकाल के बाद), प्रोटोकॉल के गेटवे द्वारा क्वेरी फीस एकत्र की जाती है। क्वेरी शुल्क सबग्राफ के क्वेरी शुल्क रिबेट पूल में जमा होते हैं। रिबेट पूल से क्वेरी फीस की वितरित राशि की गणना रिबेट पूल में इंडेक्सर के योगदान और सबग्राफ पर उनकी आवंटित हिस्सेदारी के आधार पर की जाती है।<br></br><br></br>आवंटन बंद होने के बाद, विवाद की अवधि बीत जाने के बाद ही इंडेक्सर्स द्वारा क्वेरी फीस का दावा किया जा सकता है। एक बार जब कोई अनुक्रमणिका सफलतापूर्वक क्वेरी शुल्क का दावा कर लेती है, तो अनुक्रमणिका और उनके प्रतिनिधि को छूट वितरित कर दी जाती है।<br></br><br></br>
  <a className="cla" href="https://en.wikipedia.org/wiki/Cobb%E2%80%93Douglas_production_function" target="_blank" rel="noreferrer">कॉब-डगलस</a> प्रोडक्शन फंक्शन के बाद, एक रिबेट पूल बनाया गया है जो सभी नेटवर्क प्रतिभागियों (जैसे इंडेक्सर्स) को उनके ग्राफ नेटवर्क में उनके योगदान के आधार पर पुरस्कृत करता है। रिबेट पूल के पीछे का इरादा इंडेक्सरों को प्रोत्साहित करना है कि वे नेटवर्क के लिए कमाए जाने वाले क्वेरी शुल्क की राशि के मोटे अनुपात में जीआरटी को दांव पर लगाएं। रिबेट पूल को क्वेरी शुल्क का एक निश्चित हिस्सा प्राप्त होता है जो इसमें योगदान दिया जाता है</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleIndexingRewardsAndQueryFees() {
  const message = this.createChatbotMessage(<a>सबग्राफ के क्यूरेशन सिग्नल के अनुपात में सबग्राफ में इंडेक्सिंग पुरस्कार वितरित किए जाते हैं। इंडेक्सर्स अपने इंडेक्सिंग रिवार्ड्स को उस हिस्सेदारी के अनुपात में प्राप्त करते हैं जो उन्होंने एक विशेष सबग्राफ पर आवंटित की है।<br></br><br></br>इंडेक्सिंग रिवार्ड्स प्रोटोकॉल इन्फ्लेशन द्वारा उत्पन्न होते हैं जो 3% वार्षिक जारी करने के लिए निर्धारित है। सभी आवंटनों को इंडेक्सिंग के वैध प्रमाण के साथ बंद करने की आवश्यकता है (POI)</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handlePOI() {
  const message = this.createChatbotMessage(<a>इंडेक्सिंग का तथाकथित प्रमाण (पीओआई) यह सत्यापित करता है कि इंडेक्सर्स ने तथ्यात्मक रूप से उन सबग्राफों को अनुक्रमित किया है जिन पर उन्होंने अपनी हिस्सेदारी आवंटित की है। एक ब्लॉक के लिए पीओआई सबग्राफ पर परिनियोजन का विवरण देने वाले सभी इकाई स्टोर लेनदेन के लिए डाइजेस्ट है। इंडेक्सिंग पुरस्कार प्राप्त करने के लिए, इंडेक्सर्स को एक आवंटन को इंडेक्सिंग के वैध प्रमाण (पीओआई) के साथ बंद करना होगा जो मध्यस्थता चार्टर द्वारा निर्धारित मानकों को पूरा करता है। इंडेक्सर्स वैध पीओआई के बिना पुरस्कार के लिए पात्र नहीं हैं। आवंटन बंद करते समय, इंडेक्सर द्वारा वर्तमान युग के पहले ब्लॉक के लिए एक पीओआई प्रस्तुत किया जाना चाहिए।<br></br><br></br>जब भी अनुक्रमणिका अपना आवंटन बंद करते हैं, अनुक्रमणिका पुरस्कार एकत्र और वितरित किए जाते हैं। जबकि वे सक्रिय हैं, आवंटन लगातार पुरस्कार अर्जित करते रहते हैं। इंडेक्सर्स या तो अपने आवंटन को मैन्युअल रूप से बंद कर सकते हैं या उन्हें अधिकतम आवंटन जीवनकाल (प्रत्येक 28 युग) के बाद स्वचालित रूप से बंद कर सकते हैं।<br></br><br></br>28 युग = ~ 28 दिन</a>
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
  const message = this.createChatbotMessage(<a>एक अनुक्रमणिका के रूप में नेटवर्क में भाग लेने के लिए हार्डवेयर आवश्यकताएँ नीचे दी गई तालिका में पाई जा सकती हैं।<hr></hr><table><tr className="indexer-table-header">
    <th>स्थापित करना</th>
    <th>पोस्टग्रेज (सीपीयू)</th>
    <th>पोस्टग्रेज (जीबी में मेमोरी) </th>
    <th>पोस्टग्रेज (टीबी में डिस्क) </th>
    <th>वीएम (सीपीयू) </th>
    <th>वीएम (जीबी में मेमोरी) </th>
  </tr>
  <tr className="indexer-table">
    <td>छोटा</td>
    <td>4</td>
    <td>8</td>
    <td>1</td>
    <td>4</td>
    <td>16</td>
  </tr>
  <tr className="indexer-table">
    <td>मानक</td>
    <td>8</td>
    <td>30</td>
    <td>1</td>
    <td>12</td>
    <td>48</td>
  </tr>
  <tr className="indexer-table">
    <td>मध्यम</td>
    <td>16</td>
    <td>64</td>
    <td>2</td>
    <td>32</td>
    <td>64</td>
  </tr>
  <tr className="indexer-table">
    <td>बड़ा</td>
    <td>72</td>
    <td>468</td>
    <td>3.5</td>
    <td>48</td>
    <td>184</td>
  </tr>
</table>
<br></br><br></br>छोटा = कई उप-अनुच्छेदों को अनुक्रमित करने के साथ आरंभ करने के लिए पर्याप्त<br></br>मानक = डिफ़ॉल्ट सेटअप<br></br>मीडियम = 100 सबग्राफ इंडेक्स करने और प्रति सेकंड 200-500 अनुरोध करने के लिए ज़रूरी है<br></br>बड़ा = संबंधित ट्रैफ़िक के लिए वर्तमान में उपयोग किए जाने वाले सभी सबग्राफ और सेवा अनुरोधों को अनुक्रमित करने के लिए आवश्यक है
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
  const message = this.createChatbotMessage(<a>सक्रिय होने के दौरान आवंटन लगातार पुरस्कार अर्जित कर रहे हैं। इंडेक्सर्स द्वारा पुरस्कार एकत्र किए जाते हैं, और जब भी उनका आवंटन बंद हो जाता है, वितरित किया जाता है। यह या तो मैन्युअल रूप से होता है, जब भी इंडेक्सर उन्हें बंद करना चाहता है, या स्वचालित रूप से प्रत्येक अधिकतम 28 युग - अधिकतम आवंटन जीवनकाल होता है।</a>
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
  const message = this.createChatbotMessage(<a>इंडेक्सर्स के लिए दस्तावेज़ीकरण कैसे आईडी और वाइस वर्सा से सबग्राफ के ipfs हैश प्राप्त करने के लिए <a className="cla" href="https://docs.thegraph.academy/network/indexers/technical-documentation/get-ipfs-hash-from-deployment-id" target="_blank" rel="noreferrer">यहां</a> पाया जा सकता है।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// IPFS End
handleTools() {
  const message = this.createChatbotMessage(<a><a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">ग्राफट्रोनॉट्स</a> ऐप प्रतिनिधियों को उनकी पसंद के इंडेक्सर पर उपयोगी अंतर्दृष्टि प्राप्त करने की अनुमति देता है। बस अपनी पसंद के इंडेक्सर का ETH पता डालें या नीचे दी गई समीक्षाओं पर एक नज़र डालें। अन्य बहुत उपयोगी साइट हैं: 
     <br></br><br></br><a className="cla" href="http://ww25.oracleminer.com/graph/indexer/0x7ab4cf25330ed7277ac7ab59380b68eea68abb0e?subid1=20220530-2214-27fd-afb4-5d675e9469e5s" target="_blank" rel="noreferrer">OracleMiner.com</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://graphscan.io/" target="_blank" rel="noreferrer">GraphScan.io</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://thegraph.live/" target="_blank" rel="noreferrer">TheGraph.Live</a><br></br><br></br><a className="cla" href="https://www.notion.so/Community-Guides-abbb10f4dba040d5ba81648ca093e70c" target="_blank" rel="noreferrer">सामुदायिक उपकरण और मार्गदर्शिकाएँ</a></a>
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
  const message = this.createChatbotMessage(<a>प्रत्येक बार जब आप किसी अनुक्रमणिका को GRT प्रत्यायोजित करते हैं, तो आपको <strong>0.5% प्रत्यायोजन शुल्क</strong> को ध्यान में रखना होगा. उदाहरण के लिए, यदि आप 10,000 GRT प्रत्यायोजित करते हैं, तो आपसे 50 GRT शुल्क लिया जाएगा। यदि आपका चुना हुआ इंडेक्सर आपको प्रति दिन 2 जीआरटी की कमाई की क्षमता प्रदान करता है। इस धारणा के तहत, आपको 25 दिन (50 जीआरटी / 2 जीआरटी) लगेंगे। आर्थिक रूप से अच्छे निर्णय लेने के लिए, आपको गणना करनी होगी कि आपके प्रतिनिधिमंडल पर 0.5% कर वापस पाने में आपको कितना समय लगेगा।<br></br><br></br>एक अनुक्रमणिका को सौंपने के लिए आपको <strong>दो ETH लेन-देन</strong> पर हस्ताक्षर करने की आवश्यकता होगी। आपके GRT को अनावृत्त करने के लिए भी यही बात लागू होती है। उच्च गैस की कीमतों के मामले में, आपको सावधानी से गणना करनी होगी कि जीआरटी की छोटी मात्रा का प्रत्यायोजन करना आर्थिक रूप से ठीक है या नहीं। उदाहरण के लिए, मान लें कि दो ETH लेनदेन पर हस्ताक्षर करने पर आपको $25 का खर्च आएगा। आइए हम यह भी मान लें कि आप केवल $100 प्रत्यायोजित करना चाहते हैं। इस मामले में, प्रत्यायोजन की लेन-देन लागत आपके GRT स्टैक का कुल 25% होगी। इसका मतलब यह है कि जब तक आप ब्रेक ईवन नहीं करते तब तक का समय काफी बढ़ जाएगा। यदि प्रतिनिधि प्रतिनिधि को हटाना चाहते हैं, तो वे तुरंत अपने टोकन तक नहीं पहुंच सकते। अप्रत्यायोजित टोकन 28 दिन की विगलन अवधि के अधीन हैं, तभी प्रतिनिधि स्वतंत्र रूप से अपने टोकन स्थानांतरित कर सकते हैं या उन्हें किसी अन्य इंडेक्सर को फिर से सौंप सकते हैं।<br></br><br></br>एक प्रतिष्ठित, भरोसेमंद और प्रभावी अनुक्रमणिका का चयन करना एक महत्वपूर्ण निर्णय है जिसे हल्के में नहीं लिया जाना चाहिए। जो डेलीगेटर्स अपना यथोचित परिश्रम नहीं करते हैं, वे खराब प्रदर्शन वाले इंडेक्सर को सौंपने के जोखिम का सामना करते हैं। इसी तरह, वे एक ऐसे इंडेक्सर को चुनने का जोखिम उठा सकते हैं जो एक आकर्षक एपीवाई (वार्षिक प्रतिशत प्रतिफल) का विज्ञापन करने के लिए संदिग्ध प्रथाओं में संलग्न है या प्रतिनिधियों को थोड़े समय के लिए सब्सिडी देता है जो लंबे समय में यथार्थवादी नहीं है।<br></br><br></br>एक प्रतिनिधि होने के जोखिमों पर दस्तावेज़ीकरण <a className="cla" href="https://thegraph.academy/delegators/risks/" target="_blank">यहां</a> पाया जा सकता है।<br></br><br></br><a className="cla" href="https://medium.com/@OG-ग्राफट्रोनॉट्स/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank" rel="noreferrer">अपने GRT टोकनों को प्रत्यायोजित करने के लिए गैस की लागत को कैसे कम करें</a><br></br><br></br>इस समय एक प्रतिनिधिमंडल लेनदेन की औसत लागत के लिए, <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">ग्राफट्रोनॉट्स</a> ऐप पर जाएं और शुल्क चुनें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Delegate Guides Start
handleDelegateGuides() {
  const message = this.createChatbotMessage(<a>प्रतिनिधि बनने के लिए आपको जो चाहिए वह मैं आपको प्रदान करूंगा। निम्नलिखित जानकारी और संसाधन आपकी मदद करेंगे।<hr></hr><a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">इंडेक्सर्स का चयन</a> ट्यूटोरियल देखने से आपको यह समझने में मदद मिलेगी कि आपको क्या खोजने की आवश्यकता है। सौंपने से पहले यह सुनिश्चित करने के लिए कि आप आश्वस्त हैं, अधिक जानकारी प्राप्त करने के लिए नीचे दिए गए ट्यूटोरियल देखें।<br></br><br></br>आप अपने GRT टोकन को <a className="cla" href="https://thegraph.com/explorer/participants/indexers" target="_blank">network.thegraph.com</a> पर अपनी पसंद के इंडेक्सर को सौंप कर दांव पर लगा सकते हैं।<br></br>एक 0.5% डेलिगेशन टैक्स है जो डेलिगेटर को एक इंडेक्सर के लिए प्रतिबद्ध करने के लिए प्रोत्साहित करने के लिए डेलिगेशन के समय लगता है।<br></br><br></br>अपने जीआरटी को प्रत्यायोजित या दाव पर लगाने के तरीके के बारे में <a className="cla" href="https://docs.thegraph.academy/network/delegators/general-documentation-1/choosing-indexers/guides" target="_blank">मार्गदर्शन</a> प्राप्त कर सकते हैं।<br></br><br></br>अप्रत्यायोजन में 28 दिन लगते हैं क्योंकि यह आवंटन की अधिकतम अवधि है।<br></br><br></br>ग्राफट्रोनॉट्स ने अपने खुद के गाइड भी बनाए हैं:<br></br><br></br><a className="cla" href="https://medium.com/@OG-ग्राफट्रोनॉट्स/how-to-stake-your-tokens-with-the-graph-the-complete-guide-to-become-a-delegator-3f723e6420b1" target="_blank">एक प्रतिनिधि बनने के लिए पूरी गाइड</a><br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s" target="_blank">कॉइनबेस वॉलेट स्टेकिंग</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-ग्राफट्रोनॉट्स/binance-staking-vs-delegating-with-the-graph-network-b4ba7e259b73" target="_blank">बिनेंस स्टेकिंग बनाम ग्राफ नेटवर्क के साथ प्रतिनिधि</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-ग्राफट्रोनॉट्स/faq-for-the-graph-delegators-2b4a03a830f2" target="_blank">ग्राफ़ प्रतिनिधि के लिए अक्सर पूछे जाने वाले प्रश्न</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-ग्राफट्रोनॉट्स/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank">अपने GRT टोकनों को प्रत्यायोजित करने के लिए गैस की लागत को कैसे कम करें</a><br></br><br></br>प्रतिनिधि लेन-देन की औसत लागत के लिए, <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank">ग्राफ़ट्रोनॉट्स</a> पर जाएँ और शुल्क चुनें।
  </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleQueryPython() {
  const message = this.createChatbotMessage(<a>पायथन का उपयोग करके ऑन-चेन डेटा के लिए ग्राफ़ प्रोटोकॉल की क्वेरी कैसे करें <a className="cla" href="https://hashnode.com/@townee" target="_blank">Tony Kipkemboi</a> ने पायथन, ग्राफक्यूएल और सबग्राउंड्स का उपयोग करके सबग्राफ को क्वेरी करने के लिए एक अद्भुत चरण-दर-चरण मार्गदर्शिका लिखी है।<br></br><br></br>पूरा ब्लॉग <a className="cla" href="https://townee.hashnode.dev/how-to-query-the-graph-protocol-for-on-chain-data-using-python" target="_blank">यहां</a> पाया जा सकता है। 
  <br></br><br></br>जब उसका दूसरा ब्लॉग समुदाय के लिए जारी किया जाता है, तो अपडेट होने के लिए आप ट्विटर पर <a className="cla" href="https://twitter.com/ynot_kip" target="_blank">Tony</a> का अनुसरण कर सकते हैं, "होस्ट की गई सेवा समाप्त होने पर मैं सबग्राउंड का उपयोग कैसे करूं?"।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWeb3DApp() {
  const message = this.createChatbotMessage(<a>Web3 dApps कैसे काम करता है?<br></br><br></br>आप <a className="cla" href="https://twitter.com/suhailkakar/status/1555894207570513920?s=21&t=FoLxHgWLO78VA_3VheV_DQ" target="_blank">यहां</a> एक अत्यंत उपयोगी ट्विटर थ्रेड में "ए कंप्लीट गाइड टू वेब3 आर्किटेक्चर" पा सकते हैं।
   </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSoulBound() {
  const message = this.createChatbotMessage(<a>डीएपी बनाने में दर्द नहीं होना चाहिए।<br></br><strong><a className="cla" href="https://soulbound.xyz/" target="_blank">सोलबाउंड स्टूडियो</a></strong> इसे आसान बनाता है।<br></br>कोडिंग की आवश्यकता नहीं है।<br></br><br></br>पूरी तरह से विकेन्द्रीकृत वेब3 एपीआई और फ्रंटएंड को डिजाइन करने, पुनरावृत्त करने और प्रकाशित करने के लिए एक एकीकृत इंटरफ़ेस।<br></br><br></br>यदि आप अपनी वांछित सुविधाओं और बग रिपोर्ट को साझा करके सोलबाउंड स्टूडियो को डिजाइन करने में उनकी सहायता करना चाहते हैं तो कृपया उनके <a className="cla" href="https://discord.com/invite/Eu3Eeh4J6a" target="_blank">डिस्कोर्ड</a> में शामिल हों।<br></br><br></br>उनकी नवीनतम रिलीज़ और समाचारों के साथ अद्यतित रहने के लिए, <a className="cla" href="https://twitter.com/SoulboundLabs" target="_blank">ट्विटर</a> पर सोलबाउंड लैब्स का अनुसरण करें।<br></br><br></br>बिना कोडिंग के सोलबाउंड स्टूडियो का उपयोग करके आप मिनटों में सबग्राफ डीएपी और एनालिटिक्स कैसे बना सकते हैं, इस पर एक वीडियो ट्यूटोरियल के लिए, नीचे देखें।<br></br><br></br>
  <Embed className="embed" isDark url='https://www.youtube.com/watch?v=IEmr280lGSU'/></a>
  
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIPhone() {
  const message = this.createChatbotMessage(<a>अपने फ़ोन पर एक गर्म बटुए में बड़ा पैसा और ऊबे हुए बंदर न रखें! क्योंकि आपका iPhone संभवतः आपके मेटामास्क जानकारी को iCloud से सिंक कर रहा है। यह डिफ़ॉल्ट रूप से चालू है, इसे बंद करने के तरीके पर <a className="cla" href="https://twitter.com/plumferno/status/1556187973200351234?s=21&t=a-4X_QM7BzHRKcJe8aPc_w" target="_blank">यहां</a> एक अत्यंत उपयोगी ट्विटर थ्रेड है!
    
     </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Query Fees Cut and indexing reward cut Start
handleQueryFeesAndIndexingRewardCut() {
  const message = this.createChatbotMessage(<a>queryFeeCut और indexingRewardCut मान डेलिगेशन पैरामीटर हैं जिन्हें इंडेक्सर और उनके डेलिगेटर के बीच GRT के वितरण को नियंत्रित करने के लिए इंडेक्सर cooldownBlocks के साथ सेट कर सकता है। डेलिगेशन पैरामीटर सेट करने के निर्देशों के लिए प्रोटोकॉल में स्टेकिंग के अंतिम चरण देखें।<br></br><br></br>queryFeeCut - एक सबग्राफ पर एकत्रित क्वेरी शुल्क छूट का % जो अनुक्रमणिका को वितरित किया जाएगा। यदि इसे 95% पर सेट किया जाता है, तो अनुक्रमणक को क्वेरी शुल्क रिबेट पूल का 95% तब प्राप्त होगा जब आवंटन का दावा किया जाता है और अन्य 5% प्रतिनिधियों के पास जाता है।<br></br><br></br>indexingRewardCut - एक सबग्राफ पर संचित अनुक्रमण पुरस्कारों का % जो कि अनुक्रमणिका को वितरित किया जाएगा। यदि यह 95% पर सेट है, तो आवंटन बंद होने पर इंडेक्सर को इंडेक्सिंग पुरस्कार पूल का 95% प्राप्त होगा और प्रतिनिधि अन्य 5% को विभाजित कर देंगे।</a>
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
  const message = this.createChatbotMessage(<a>ग्राफ़ प्रोटोकॉल, इंक. की स्थापना अप्रैल 2018 में जेनिस पोल्मैन, ब्रैंडन रामायर्स और यानिव ताल ने की थी जेनिस पोहलमैन, टेक लीड और सह-संस्थापक।<a className="cla" href="https://de.linkedin.com/in/jannispohlmann" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/jannispohlmann" target="_blank" rel="noreferrer">ट्विटर</a><br></br><br></br><strong>Brandon Ramirez</strong>, रिसर्च लीड और सह-संस्थापक <a className="cla" href="https://www.linkedin.com/in/1stramirez" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/rezbrandon?lang=en" target="_blank" rel="noreferrer">ट्विटर</a><br></br><br></br><strong>Yaniv Tal</strong>, प्रोजेक्ट लीड और सह-संस्थापक <a className="cla" href="https://www.linkedin.com/in/yanivtal9" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla"  href="https://twitter.com/yanivgraph" target="_blank" rel="noreferrer">ट्विटर</a> | <a className="cla" href="https://www.grtiq.com/grtiq-podcast-100-Yaniv-Tal/" target="_blank" rel="noreferrer">GRTiQ पॉडकास्ट</a></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://www.crunchbase.com/organization/the-graph/investor_financials" target="_blank" rel="noreferrer">Crunchbase.com</a> के मुताबिक, द ग्राफ ने 7 राउंड में कुल $69.6M की फंडिंग जुटाई है। उनकी नवीनतम फंडिंग 21 जनवरी, 2022 को वेंचर-सीरीज़ अज्ञात दौर से जुटाई गई थी। ग्राफ को 27 निवेशकों द्वारा वित्त पोषित किया गया है। ब्लॉकवॉल मैनेजमेंट और फिनटेक कलेक्टिव सबसे हालिया निवेशक हैं।<br></br><br></br>ग्राफ़ ने एकल वेंचर फ़ंड, द ग्राफ़ इकोसिस्टम फ़ंड में कुल $205M जुटाए हैं। इस फंड की घोषणा 18 फरवरी, 2022 को की गई थी और इसने कुल $205M जुटाए।</a>
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
  const message = this.createChatbotMessage(<a>ग्राफ़ $GRT एथेरियम और IPFS जैसे नेटवर्क को क्वेरी करने के लिए एक इंडेक्सिंग प्रोटोकॉल है। कोई भी ओपन एपीआई बना और प्रकाशित कर सकता है, जिसे सबग्राफ कहा जाता है, जिससे डेटा को आसानी से एक्सेस किया जा सकता है। संक्षेप में, ग्राफ़ डेटा प्रदान करता है जिसे केवल कुछ कीस्ट्रोक्स के साथ क्वेरी करने के लिए किसी भी एप्लिकेशन में रूपांतरित, व्यवस्थित और साझा किया जा सकता है।<br></br><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/" target="_blank" rel="noreferrer">ग्राफ कैसे संचालित होता है</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-council" target="_blank" rel="noreferrer">ग्राफ परिषद</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-foundation" target="_blank" rel="noreferrer">ग्राफ फाउंडेशन</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#advocates-dao" target="_blank" rel="noreferrer">ग्राफ एडवोकेट्सडीएओ</a><br></br><br></br>आप ग्राफट्रोनॉट्स द्वारा बनाए गए 'द ग्राफ हिस्ट्री (2017-2020)' को <a className="cla" href="https://blog.graphtronauts.com/the-graph-history-2017-2020-75cc40132992" target="_blank" rel="noreferrer">यहां</a> पढ़ सकते हैं।<br></br><br></br>आप <a className="cla" href="https://blog.graphtronauts.com/what-is-the-graph-and-why-is-the-next-big-thing-in-the-technology-industry-25051fae4256" target="_blank" rel="noreferrer">यहां</a> ग्राफट्रोनॉट्स द्वारा बनाए गए 'ग्राफ क्या है और यह प्रौद्योगिकी उद्योग में अगली बड़ी चीज क्यों है' पढ़ सकते हैं।<br></br><br></br>'गूगल ऑफ ब्लॉकचेन' क्या है, इसकी वीडियो व्याख्या के लिए <a className="cla" href="https://youtu.be/7gC7xJ_98r8" target="_blank" rel="noreferrer">यहां</a> देखें।</a>
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
  const message = this.createChatbotMessage(<a>एयरड्रॉप्स के संबंध में, द ग्राफ बहुत कम परियोजनाओं में से एक है जिसने वास्तव में लोगों को उनके टोकन के लिए काम करने के लिए प्रेरित किया। क्यूरेटर कार्यक्रम बहुत गहन था और लोगों ने सबग्राफ के बारे में सीखने, डेटा व्यवस्थित करने और नेटवर्क में योगदान देने में महत्वपूर्ण समय बिताया। यह टीम को ग्राफ पर बढ़ते वेब3 के लिए बिल्डरों के समर्पण के एक अच्छी तरह से प्रशिक्षित और प्रोत्साहित समुदाय होने की अविश्वसनीय स्थिति में रखता है। इस समय, कोई एयरड्रॉप की योजना नहीं है</a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://twitter.com/CoinMarketCap/status/1341310792461918210" target="_blank" rel="noreferrer">कॉइनमार्केटकैप कमाएं</a> नेटवर्क के बारे में जानने वाले और सवालों के जवाब देने वाले प्रतिभागियों को मुफ़्त GRT टोकन देकर <a className="cla" href="https://twitter.com/coinbase/status/1339723594566406156?s=20" target="_blank" rel="noreferrer">कॉइनबेस अर्न</a><hr></hr>करें। श्श! नि:शुल्क जीआरटी कमाने का सबसे अच्छा तरीका प्रत्यायोजित करना और पुरस्कार अर्जित करना है।</a>
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
  const message = this.createChatbotMessage(<a>आप यहां ग्राफ जीथब पता पा सकते हैं: <a className="cla" href="https://github.com/graphprotocol/" target="_blank" rel="noreferrer">github.com/graphprotocol/</a></a>
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
  const message = this.createChatbotMessage(<a>ग्राफ आधिकारिक आर एंड डी रोडमैप <a className="cla" href="https://thegraph.com/blog/roadmap-2022" target="_blank" rel="noreferrer">यहां</a> पाया जा सकता है।<br></br><br></br>द ग्राफट्रोनॉट्स द्वारा लिखित 2023 के लिए ग्राफ रोडमैप <a className="cla" href="https://medium.com/@OG-ग्राफट्रोनॉट्स/the-graph-roadmap-for-2023-952b17d20d71" target="_blank" rel="noreferrer">यहां</a> पाया जा सकता है।<br></br><br></br>इस लेख में आप विकास के चार क्षेत्रों के बारे में जानेंगे जो 2023 में दिन के उजाले को देखेंगे और ग्राफ़ नेटवर्क को आज से भी अधिक मजबूत बना देंगे:<br></br>होस्ट की गई सेवा का सूर्यास्त<br></br>आग बुझाने का नल<br></br>सबस्ट्रीम<br></br>आर्बिट्रम वन के साथ प्रोटोकॉल को L2 में ले जाना</a>
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
  const message = this.createChatbotMessage(<a>ग्राफ फेसबुक द्वारा विकसित एक ओपन सोर्स क्वेरी लैंग्वेज ग्राफक्लाइन का उपयोग करता है। स्कीमा में प्रत्येक तत्व का विवरण है। ग्राफ़क्यूएल सीखें और फिर आप ब्लॉकचेन से जो भी डेटा चाहते हैं उसे पुनः प्राप्त कर सकते हैं। ग्राफक्लाइन एक क्वेरी भाषा और एप्लिकेशन प्रोग्रामिंग इंटरफेस (एपीआई) के लिए सर्वर-साइड रनटाइम है जो ग्राहकों को उनके द्वारा अनुरोधित डेटा को ठीक से देने को प्राथमिकता देता है और इससे अधिक नहीं।<hr></hr> ग्राफक्यूएल को एपीआई को तेज, लचीला और डेवलपर के अनुकूल बनाने के लिए डिजाइन किया गया है। ग्राफ़कॉल एपीआई वह एपीआई है जिसका उपयोग डेवलपर्स ग्राफ़ द्वारा अनुक्रमित डेटा तक पहुँचने के लिए कर सकते हैं।</a>
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
  const message = this.createChatbotMessage(<a>आप <a className="cla" href="https://coinmarketcap.com/currencies/the-graph/markets/" target="_blank" rel="noreferrer">कॉइनमार्केटकैप</a>पर कीमत और सभी खुले बाजार देख सकते हैं।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDecentralisedData() {
  const message = this.createChatbotMessage(<a><strong>विकेंद्रीकृत डेटा का सूर्योदय</strong><br></br><br></br>ग्राफ पारिस्थितिकी तंत्र जीवंत, विकेंद्रीकृत भविष्य का स्वागत करते हुए उपयोगकर्ता की अपेक्षाओं को पूरा करने के लिए कदम उठा रहा है। इस संतुलन को प्राप्त करने के लिए, होस्ट किए गए सेवा समर्थन को बंद करने को प्रति-श्रृंखला के आधार पर तीन संक्रमणकालीन चरणों में विभाजित किया गया है, जो विभिन्न निकास मानदंडों पर निर्भर हैं - जिसमें उपयोगिता, स्थिरता और कोर कार्यक्षमता शामिल है, लेकिन इन तक सीमित नहीं है। होस्ट की गई सेवा श्रृंखलाएं धीरे-धीरे संक्रमण करेंगी, जिससे डेवलपर्स को विकेंद्रीकृत नेटवर्क से परिचित होने और अपने सबग्राफ को माइग्रेट करने के लिए पर्याप्त समय मिलेगा।<br></br><br></br>डेवलपर्स को बेहतर समर्थन देने के लिए, होस्ट की गई सेवा से और ग्राफ़ नेटवर्क पर संक्रमण श्रृंखलाओं में प्रत्येक चरण के लिए विशिष्ट तिथियां निर्दिष्ट नहीं की जाएंगी। डेवलपर की जरूरतों को पूरा करना और बाहर निकलने के प्रमुख मानदंडों को हासिल करना, होस्टेड सर्विस सपोर्ट को खत्म कर देता है। जैसे ही प्रत्येक होस्टेड सेवा श्रृंखला से बाहर निकलने का मानदंड पूरा हो जाता है, वह श्रृंखला तीन चरणों में परिवर्तित हो जाएगी। यह समझने के लिए एमआईपी प्रोग्राम की प्रगति देखें कि इंडेक्सर्स द्वारा चेन का परीक्षण कब किया जा रहा है, जब वे नेटवर्क पर समर्थित हो जाते हैं और प्रति चेन माइग्रेशन कब शुरू हो जाते हैं।<br></br><br></br>प्रत्येक होस्ट की गई सेवा श्रृंखला के लिए, ग्राफ़ नेटवर्क पर समर्थन को सक्षम करने में तीन संक्रमणकालीन चरण हैं: चरण 1 (द सनरे):<br></br>चरण 1 (द सनरे): ब्लॉकचेन के लिए नई होस्टेड सर्विस सबग्राफ निर्माण को अक्षम करें जिनके पास नेटवर्क पर पर्याप्त कोर कार्यक्षमता है।<br></br>चरण 2 (द सनबीम): होस्टेड सर्विस सबग्राफ अपग्रेड को अक्षम करें।<br></br>चरण 3 (सूर्योदय): होस्टेड सर्विस सबग्राफ की पूछताछ को अक्षम करें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleVsSelfHosting() {
  const message = this.createChatbotMessage(<a><strong>ग्राफ नेटवर्क बनाम सेल्फ होस्टिंग</strong><br></br><br></br>स्पॉइलर अलर्ट: ग्राफ़ नेटवर्क स्थानीय रूप से ग्राफ़ नोड चलाने की तुलना में कम खर्चीला, उपयोग में आसान और बेहतर परिणाम देता है।<br></br><br></br>ग्राफ़ के विकेन्द्रीकृत नेटवर्क को एक मजबूत अनुक्रमण और क्वेरी अनुभव बनाने के लिए इंजीनियर और परिष्कृत किया गया है - और यह दुनिया भर के हजारों योगदानकर्ताओं के लिए हर दिन बेहतर हो रहा है। इस विकेंद्रीकृत प्रोटोकॉल के लाभों को स्थानीय स्तर पर ग्राफ़ नोड चलाकर दोहराया नहीं जा सकता है। ग्राफ़ नेटवर्क अधिक विश्वसनीय, अधिक कुशल और कम खर्चीला है। यहाँ एक विश्लेषण है:<br></br><br></br><strong>आपको ग्राफ़ नेटवर्क का उपयोग क्यों करना चाहिए</strong><br></br>60-98% कम मासिक लागत<br></br>0 इंफ्रास्ट्रक्चर सेटअप लागत<br></br>सुपीरियर अपटाइम<br></br>460 इंडेक्सर्स तक पहुंच (और गिनती जारी है)<br></br>वैश्विक समुदाय द्वारा 24/7 तकनीकी सहायता<br></br><br></br>ग्राफ़ नेटवर्क का उपयोग करने के लाभों का विश्लेषण करने के लिए, <a className="cla" href="https://thegraph.com/docs/en/network/benefits/#breaking-down-the-benefits-of-using-the-graph-network" target="_blank" rel="noreferrer">यहाँ</a> पढ़ें।<br></br><br></br>कोई सेटअप लागत और अधिक परिचालन क्षमता शून्य सेटअप शुल्क नहीं।<br></br>बिना किसी सेटअप या ओवरहेड लागत के तुरंत आरंभ करें।<br></br>कोई हार्डवेयर आवश्यकताएँ नहीं।<br></br>केंद्रीकृत बुनियादी ढाँचे के कारण कोई कमी नहीं, और अपने मूल उत्पाद पर ध्यान केंद्रित करने के लिए अधिक समय।<br></br>बैकअप सर्वर, समस्या निवारण या महंगे इंजीनियरिंग संसाधनों की कोई आवश्यकता नहीं है।<br></br><br></br>विश्वसनीयता और लचीलापन - ग्राफ़ का विकेन्द्रीकृत नेटवर्क उपयोगकर्ताओं को भौगोलिक अतिरेक तक पहुँच प्रदान करता है जो किसी ग्राफ़ नोड को स्व-होस्ट करते समय मौजूद नहीं होता है। प्रश्नों को 99.9%+ अपटाइम के लिए भरोसेमंद तरीके से परोसा जाता है, जो 460 इंडेक्सर्स (और गिनती) द्वारा वैश्विक स्तर पर नेटवर्क को सुरक्षित करने के लिए हासिल किया गया है।</a>
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
   const message = this.createChatbotMessage(<a>सबग्राफ डेटा संरचनाएं हैं जो डेटा को व्यवस्थित करने के लिए होती हैं जिसे आप ब्लॉकचेन से प्राप्त करते हैं। वे यह परिभाषित करने का एक तरीका हैं कि आप किस डेटा को अनुक्रमित करना चाहते हैं और इसे कैसे स्टोर करना है। उनमें से कुछ अपने मैपिंग पर प्री-एग्रीगेशन या कैलकुलेशन करते हैं, कुछ सिर्फ सादा डेटा स्टोर करते हैं जो आपको ऑन-चेन मिल सकता है। फिर, एक इकाई उस डेटा पर सवाल उठाती है। यह इकाई एक डैप (कंपनी/डेवलपर, आदि) हो सकती है, या एक टेलीग्राम बॉट, या एक कलह बॉट या जानकारी खोजने के लिए क्वेरी करने वाला एक साधारण उपयोगकर्ता भी हो सकता है।<br></br><br></br>होस्‍ट की गई सेवा से सबग्राफ क्‍वेरी करना वर्तमान में सभी के लिए नि:शुल्‍क है। विकेन्द्रीकृत प्रोटोकॉल के लिए, टीम को उम्मीद है कि क्वेरी की लागत लगभग $0.00001 प्रति क्वेरी होगी, लेकिन यह एक मुफ़्त बाज़ार है, और प्रत्येक इंडेक्सर अपने स्वयं के लागत मॉडल सेट कर सकता है।<br></br><br></br>15 मिनट में सबग्राफ के साथ गति प्राप्त करने के लिए एक डेवलपर की चीट शीट यहां पाई जा सकती है। सबग्राफ स्टूडियो के साथ सबग्राफ बनाने के लिए एक ट्यूटोरियल <a className="cla" href="https://drive.google.com/file/d/1J2zm06wZV0EwMEGBD48fGbaFKPPcCdZT/view" target="_blank" rel="noreferrer">यहां</a> पाया जा सकता है।<br></br><br></br>15 मिनट में सबग्राफ के साथ गति प्राप्त करने के लिए एक डेवलपर की चीट शीट <a className="cla" href="https://www.youtube.com/watch?v=HfDgC2oNnwo" target="_blank" rel="noreferrer">यहां</a> पाई जा सकती है। 
    <br></br><br></br>कैमिला रामोस द्वारा बनाए गए एक सबग्राफ के निर्माण पर एक सिंहावलोकन और चरण-दर-चरण मार्गदर्शिका के लिए, <a className="cla" href="https://camiinthisthang.hashnode.dev/the-complete-guide-to-getting-started-with-the-graph" target="_blank" rel="noreferrer">यहां</a> देखें।<br></br><br></br>आप एक सबग्राफ की तलाश कर रहे हैं या मेननेट पर माइग्रेट किए गए लोगों का पता लगाना चाहते हैं, <a className="cla" href="https://www.graphtronauts.com/#/subgraphs" target="_blank" rel="noreferrer">ग्राफट्रोनॉट्स</a> ऐप पर जाएं।<br></br><br></br>आप <a className="cla" href="https://thegraph.academy/course/subgraph-developer-course/" target="_blank" rel="noreferrer">सबग्राफ डेवलपर कोर्स</a> में भी नामांकन कर सकते हैं।</a>
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
  const message = this.createChatbotMessage(<a>एक अनुक्रमणिका बनने के लिए आपको 100,000 GRT और आवश्यक बुनियादी ढाँचे की आवश्यकता है। यह न्यूनतम राशि है जिसे आपको इंडेक्सर नोड ऑन-चेन पंजीकृत करने के लिए दांव पर लगाना होगा।<br></br><br></br>इंडेक्सर्स को व्यापक DevOps कौशल और आवश्यक हार्डवेयर की आवश्यकता होती है। <br></br><br></br>इंडेक्सर्स को बाजार द्वारा प्रतिनिधिमंडल मापदंडों को बदलने के लिए "दंडित" किया जाता है। अन्य सभी चीजें समान होने पर, टीम उन इंडेक्सर्स से उम्मीद करेगी जो कम कूलडाउन अवधि निर्धारित करते हैं, उन्हें कम डेलिगेशन प्राप्त होगा।<br></br><br></br>टीम ऐसे टूल भी बनाना चाहेगी जो इंडेक्सर्स को स्पॉट करना आसान बनाते हैं जो डेलिगेशन पैरामीटर को गलत तरीके से या बहुत बार बदलते हैं। इनमें से कुछ संकेतों को एक्सप्लोरर के भविष्य के संस्करण में शामिल किया जा सकता है।<br></br><br></br>आप दिसंबर 2020 से अगले दो वर्षों में अपना इंडेक्सर पता नहीं बदल सकते</a>
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
  const message = this.createChatbotMessage(<a>गैस ईथर (ETH) की मात्रा के लिए शब्द है - एथेरियम की मूल क्रिप्टोक्यूरेंसी - नेटवर्क द्वारा उपयोगकर्ता के लिए नेटवर्क के साथ बातचीत करने के लिए आवश्यक है।<br></br><br></br>गैस की कीमत कुछ ऐसा नहीं है जिस पर ग्राफ टीम का नियंत्रण हो। एथेरियम नेटवर्क के भीड़भाड़ या अत्यधिक उपयोग होने पर गैस की कीमत बढ़ जाती है।<br></br><br></br>इस समय प्रतिनिधि लेन-देन की औसत लागत के लिए, <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">यहां </a> ग्राफट्रोनॉट्स ऐप पर जाएं और शुल्क चुनें।<br></br><br></br>अपने GRT टोकन को प्रत्यायोजित करने के लिए गैस की लागत को कैसे कम करें, इस पर एक गाइड के लिए, <a className="cla" href="https://medium.com/@OG-ग्राफट्रोनॉट्स/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank" rel="noreferrer">यहां</a> देखें।<br></br><br></br>एथेरियम गैस शुल्क के लिए <a className="cla" href="https://ethereumprice.org/gas/" target="_blank" rel="noreferrer">यहां</a> देखें।</a>
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
  const message = this.createChatbotMessage(<a>सभी अनुक्रमणिका स्थानों का मानचित्र देखने के लिए, <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">ग्राफ़ट्रोनॉट्स</a> ऐप पर जाएँ और मानचित्र का चयन करें।</a>
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
  const message = this.createChatbotMessage(<a>इंडेक्सर्स की तुलना करने के लिए, <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">ग्राफ़ट्रोनॉट्स</a> ऐप पर जाएं और लिस्ट चुनें।<br></br><br></br>तुलना करें बटन पर क्लिक करें और फिर अधिकतम पांच इंडेक्सर्स चुनें जिनकी आप तुलना करना चाहते हैं।<br></br><br></br>एक बार चयन करने के बाद, नीचे दिए गए तुलना बटन पर क्लिक करें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphSocial() {
  const message = this.createChatbotMessage(<a><strong><a className="cla" href="https://twitter.com/graphsocial1?s=21&t=f_BFECU3y4NfkRXocWA5kQ" target="_blank" rel="noreferrer">ग्राफ सामाजिक</a></strong><br></br><br></br>एक अंतर्राष्ट्रीय वेब3 मीटअप, जो ग्राफ़ पारिस्थितिक तंत्र के विकास को संचालित करता है। संचालन <a className="cla" href="https://twitter.com/Mardeni01" target="_blank" rel="noreferrer">Ahmad Mardeni</a> ने किया।<br></br><br></br>पहला ग्राफ सोशल वेब3 मीटअप दुबई में 8 अक्टूबर 2022 को शाम 6-10 बजे जीएसटी में हुआ था, जिसमें 100 से अधिक लोग उपस्थित थे। ग्राफ क्या है, हाल ही में हासिल किए गए मील के पत्थर क्या हैं, और इसमें कैसे शामिल होना है, को कवर करने वाली घटना!<hr></hr><strong>वक्ताओं </strong><br></br><br></br>Ahmad Mardeni<br></br>Salim Hadri<br></br>Shing Lam से <a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><br></br><a className="cla" href="https://twitter.com/9001sabella" target="_blank" rel="noreferrer">Isabella</a> से <a className="cla" href="https://twitter.com/routerprotocol" target="_blank" rel="noreferrer">Router Protocol</a><br></br><a className="cla" href="https://twitter.com/farhajmayan" target="_blank" rel="noreferrer">Farhaj Mayan</a> से <a className="cla" href="https://twitter.com/_buildspace" target="_blank" rel="noreferrer">Buildspace</a><br></br><a className="cla" href="https://twitter.com/dudhat_paresh" target="_blank" rel="noreferrer">Paresh Dudhat</a> से <a className="cla" href="https://twitter.com/infy_protocol" target="_blank" rel="noreferrer">Infy Protocol</a><br></br>Rashmi Padhy<br></br><br></br><strong>प्रायोजक</strong><br></br><br></br><a className="cla" href="https://twitter.com/tenderize_me" target="_blank" rel="noreferrer">Tenderize</a><br></br><a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><hr></hr>आप अहमद मर्देनी और <a className="cla" href="https://twitter.com/MultiartStudio" target="_blank" rel="noreferrer">मल्टीआर्ट स्टूडियो</a> के साथ कार्यक्रम का एक साक्षात्कार नीचे देख सकते हैं!<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=KFUxrs10gpI'/></a>
    ,
  );
  this.setState((prev) => ({ 
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePodcast() {
  const message = this.createChatbotMessage(<a><strong>GRTiQ क्या है?</strong><br></br><br></br><a className="cla" href="https://www.grtiq.com/" target="_blank" rel="noreferrer">GRTiQ</a> विश्लेषिकी, अनुसंधान, अनुकूलन और शिक्षा के माध्यम से बाज़ार की जानकारी उत्पन्न करता है।<br></br><br></br>मार्केट एनालिटिक्स - वे मार्केट परफॉर्मेंस और एनालिटिक्स प्रदान करते हैं ताकि प्रतिनिधि बाजार की गतिशीलता को बेहतर ढंग से समझ सकें।<br></br><br></br>इंडेक्सर रिसर्च - वे इंडेक्सर रिसर्च करते हैं जिसका उपयोग प्रतिनिधि अवसरों और साझेदारी की पहचान करने के लिए कर सकते हैं।<br></br><br></br>पुरस्कार अनुकूलन- वे प्रतिनिधियों को उनकी पुरस्कार आय का अनुकूलन करने में मदद करने के लिए डेटा, गाइड और विश्लेषण बनाते और प्रकाशित करते हैं।<br></br><br></br>पारिस्थितिकी तंत्र शिक्षा-वे चल रहे शैक्षिक संसाधन और द ग्राफ पारिस्थितिकी तंत्र के सभी पहलुओं के बारे में जानकारी प्रदान करते हैं।<hr></hr>आप <a className="cla" href="https://www.grtiq.com/podcast/" target="_blank" rel="noreferrer">यहां</a> GRTiQ पॉडकास्ट सुन सकते हैं।<br></br><br></br>GRTiQ के साथ अद्यतित रहने के लिए आप उन्हें <a className="cla" href="https://twitter.com/grt_iq" target="_blank" rel="noreferrer">ट्विटर</a>, <a className="cla" href="https://www.youtube.com/channel/UCxhFN47AlCDx1Qoaw1oSQ5A" target="_blank" rel="noreferrer">यूट्यूब</a> और <a className="cla" href="https://www.instagram.com/thegraphiq/" target="_blank" rel="noreferrer">इंस्टाग्राम</a> पर फॉलो कर सकते हैं।<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/grt_iq/status/1617269631403831297?s=20&t=C_TtsLrGHQ0b92xQs527lQ'/></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-15947" target="_blank" rel="noreferrer">द ग्राफ एडवोकेट्स</a> एक समुदाय-संचालित पहल है जो दुनिया भर के लोगों के लिए वेब3 में एक पोर्टल के रूप में काम कर रही है। अधिवक्ताओं के पास द ग्राफ समुदाय और वेब3 मिशन को सीखने और योगदान करने का अनूठा अवसर है। कोई भी अधिवक्ता बन सकता है और बाद में ग्राफ एडवोकेट्सडीएओ में शामिल हो सकता है।<hr></hr><strong><underline>अधिवक्ता भूमिकाएँ</underline></strong><br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12947" target="_blank" rel="noreferrer"><strong>इवेंट इंजीलिस्ट</strong></a><br></br>स्थानीय कार्यक्रमों की मेजबानी करें, क्षेत्रीय कार्यक्रमों में भाग लें और व्यक्तिगत या ऑनलाइन सामुदायिक कार्यक्रमों में भाग लें।<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12927" target="_blank" rel="noreferrer"><strong>सामग्री निर्माता</strong></a><br></br>लेख, वीडियो, इन्फोग्राफिक्स, मेम या जीआईएफ सहित वेब3 और द ग्राफ के बारे में सामग्री बनाएं।<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13207" target="_blank" rel="noreferrer"><strong>टेक्स्ट ट्रांसलेटर</strong></a><br></br>ग्राफ़ और अन्य सामुदायिक दस्तावेज़ीकरण, सामग्री और सामाजिक पोस्ट का अन्य भाषाओं में अनुवाद करें।<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12667" target="_blank" rel="noreferrer"><strong>कम्युनिटी केयर</strong></a><br></br>द ग्राफ फोरम, टेलीग्राम, डिस्कॉर्ड, या रेडिट में प्रश्नों के उत्तर पोस्ट करें या शैक्षिक संसाधनों को साझा करें।<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13167" target="_blank" rel="noreferrer"><strong>तकनीकी शिक्षक</strong></a><br></br>दूसरों को वेब3 और द ग्राफ इकोसिस्टम में सक्रिय रूप से भाग लेना और योगदान करना सिखाएं।<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13407" target="_blank" rel="noreferrer"><strong>Web3 वेलकम</strong></a>
  <br></br>दुनिया भर में अधिक शिक्षा और वेब3 और द ग्राफ को अपनाने में तेजी लाएं।<hr></hr>आप <a className="cla" href="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7" target="_blank" rel="noreferrer">यहां</a> द ग्राफ के अधिवक्ता बनने के लिए आवेदन कर सकते हैं।<br></br><br></br>एडवोकेट बनने के लिए क्या करना पड़ता है, इसके बारे में अधिक जानने के लिए <a className="cla" href="https://thegraph.com/ecosystem/advocacy/" target="_blank" rel="noreferrer">यहां</a> देखें।<hr></hr>एडवोकेट्सडीएओ अनुदान के बारे में जानने के लिए, <a className="cla" onClick={this.handleAdvocateGrant}><strong>मुझे क्लिक करें</strong></a>!
  
   !</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrant() {
  this.handleAdvocateGrantWithdraw = this.handleAdvocateGrantWithdraw.bind(this);
  const message = this.createChatbotMessage(<a><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12762" target="_blank" rel="noreferrer"><strong>ग्राफ एडवोकेट्सडीएओ कम्युनिटी ग्रांट</strong></a><br></br><br></br>आप <a className="cla" href="http://grants.graphadvocates.com/" target="_blank" rel="noreferrer">यहां</a> एडवोकेट्सडीएओ अनुदान के लिए आवेदन कर सकते हैं।<hr></hr><strong>अनुदान प्रक्रिया</strong><br></br>प्रारंभिक समीक्षा - आपका अनुदान <a className="cla" href="https://forum.graphadvocates.com/" target="_blank" rel="noreferrer">यहां</a> ग्राफ एडवोकेट्सडीएओ फोरम में पोस्ट किया जाएगा। अनुदान समिति का एक <a className="cla" href="https://discord.gg/XgT3s9XY" target="_blank" rel="noreferrer">DAO</a> सदस्य आपके अनुदान की पात्रता का मूल्यांकन करेगा।<br></br>सार्वजनिक चर्चाएँ - व्यापक समुदाय को अनुदानों पर प्रतिक्रिया देने के लिए आमंत्रित किया जाता है और फोरम में वोट भी दिया जाता है कि क्या वे इसका समर्थन करते हैं। इस प्रक्रिया के दौरान, समुदाय के सदस्य या डीएओ सदस्य अनुदान के दायरे को बेहतर ढंग से समझने के लिए इसके बारे में अधिक विशिष्टताओं को इकट्ठा करने के लिए फोरम में प्रश्न पूछ सकते हैं। यह प्रक्रिया का एक महत्वपूर्ण चरण है जिसके दौरान राय बनती है।<br></br>समिति प्रस्तुति - एक सफल अनुदान आवेदन में DAO की अनुदान समिति के सामने लाइव प्रस्तुति भी शामिल होगी। ये बैठकें डीएओ के डिस्कॉर्ड सर्वर के पब्लिक-वॉयस-चैट में होती हैं और दुनिया भर में अलग-अलग समय क्षेत्रों को समायोजित करने के लिए हर मंगलवार को तीन अलग-अलग समय स्लॉट (10:00 | 18:00 | 22:00 यूटीसी) पर निर्धारित की जाती हैं। अनुदान समिति के सदस्यों के लिए अनुदान का समर्थन करने या न करने पर विश्वास हासिल करने के लिए ये महत्वपूर्ण स्पर्श बिंदु हैं। कृपया अपने अनुदान का अवलोकन प्रस्तुत करने और प्रश्नों के उत्तर देने के लिए तैयार रहें।<br></br>अनुदान निर्णय - आप अनुदान प्रक्रिया के दौरान कई अलग-अलग वोट और मतदान देखेंगे। ये अविश्वसनीय रूप से महत्वपूर्ण संकेत हैं जो डीएओ सदस्यों को उनके वोट में सूचित करते हैं। सफल अनुदान के लिए आधिकारिक डीएओ फंडिंग निर्णय प्रक्रिया के अंत में होगा, जहां सभी डीएओ सदस्य <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2" target="_blank" rel="noreferrer">डीएओहॉस</a> में ऑन-चेन मतदान करेंगे। (ध्यान दें: अनुदान समिति द्वारा कुछ छोटे अनुदानों को ऑफ-चेन वोट दिया जा सकता है)<br></br>
 अपेक्षित समय - डीएओ सभी अनुदान आवेदनों की उपयुक्त रूप से जांच करने के लिए प्रतिबद्ध है। डीएओ ने ऑन-चेन और ऑफ-चेन टाइमलाइन भी स्थापित की है जो अलग-अलग समय क्षेत्रों में रहने वाले समुदाय से व्यापक जुड़ाव की अनुमति देता है, जिसमें भाग लेने के लिए उपलब्धता की अलग-अलग डिग्री होती है।<br></br><br></br>तो आपने अब फॉर्म के माध्यम से अपना अनुदान जमा कर दिया है, इसे फोरम में पोस्ट कर दिया गया है जहां समुदाय और अधिवक्ता मतदान कर रहे हैं और प्रश्न पूछ रहे हैं। आगे क्या है?<hr></hr>डीएओ का लक्ष्य 1-2 महीने के भीतर एक सफल अनुदान आवेदन को संसाधित करना है। नीचे उन प्रमुख चरणों का अवलोकन दिया गया है जिनसे एक सफल अनुदान आवेदन गुजरता है:<br></br>सामुदायिक समीक्षा: ~10 दिन (सामुदायिक जुड़ाव के अनुसार अलग-अलग)<br></br>समिति प्रस्तुति: ~ 7 दिन (शेड्यूलिंग के लिए समय की अनुमति शामिल है)<br></br>समिति ऑफ-चेन वोटिंग: ~ 7 दिन<hr></hr>मतदान की अवधि समाप्त हो गई है और आपका अनुदान सफल हो गया है। अगर ऐसा है, बधाई हो! क्या उम्मीद करें:<br></br><br></br><strong>ईमेल पुष्टि</strong> - यह ग्राफ एडवोकेट्सडीएओ से है, आपको ईमेल के भीतर लिंक के माध्यम से केवाईसी (अपने ग्राहक को जानें) को पूरा करना होगा। आपको एक अनुबंध समझौता भी भेजा जाएगा।<br></br><strong>फोरम पोस्ट</strong> - आपके अनुदान के साथ सफल होने की पुष्टि करने के लिए एक वकील भी मंच के भीतर आपके अनुदान पर टिप्पणी करेगा।<br></br>केवाईसी और अनुदान समझौता: ~ 7 दिन<br></br>ऑन-चेन वोटिंग: 14 दिन<br></br>आप अपना ऑन-चेन अनुदान प्रस्ताव <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2/proposals" target="_blank" rel="noreferrer">यहां</a> देख पाएंगे।<br></br>14 दिनों के बाद यदि आप ऑन-चेन वोटिंग में सफल रहे हैं तो आप अपना अनुदान वापस लेने में सक्षम होंगे।<hr></hr>एडवोकेट्सडीएओ अनुदान वापस लेने के बारे में जानने के लिए, <a className="cla" onClick={this.handleAdvocateGrantWithdraw}><strong>मुझे क्लिक करें</strong></a>!</a>
    , 
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrantWithdraw() {
  const message = this.createChatbotMessage(<a><strong>DAOHaus से निकासी</strong><hr></hr>DAOHaus ऐप से अपना GRT वापस लेने के बारे में एक गाइड <a className="cla" href="https://docs.graphadvocates.com/community-grants/getting-grant-paid" target="_blank" rel="noreferrer">यहां</a> पाई जा सकती है। या आप नीचे वीडियो ट्यूटोरियल देख सकते हैं। यदि आपको अपने धन को ग्नोसिस चेन से एथेरियम में स्थानांतरित करने की आवश्यकता है, तो आपको अपने जीआरटी को पाटने की आवश्यकता है, हम ओमनीब्रिज का उपयोग करने का सुझाव देते हैं, जिसे आप <a className="cla" href="https://omni.gnosischain.com/bridge" target="_blank" rel="noreferrer">यहां</a> एक्सेस कर सकते हैं। अपने फंड को स्थानांतरित करने के लिए ओमनीब्रिज का उपयोग करने का तरीका दिखाने वाला वीडियो देखने के लिए, आप इसे <a className="cla" href="https://drive.google.com/file/d/1-YB8JfBu8mkYzc1wAqopGsBIonaLHwq6/view" target="_blank" rel="noreferrer">यहां</a> देख सकते हैं।<br></br><br></br><iframe className="embed" isDark src="https://drive.google.com/file/d/1toZih5GIO-h3deJKQz9lr_WBY3_QqX0U/preview" width="100%" height="480" allow="autoplay"></iframe></a>
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
  const message = this.createChatbotMessage(<a>नीचे आपको जीआरटी अनुबंध और उसका विवरण मिलेगा, दुर्भावनापूर्ण अनुबंध जोड़ने से बचने के लिए जानकारी की दोबारा जांच करना सुनिश्चित करें।<br></br><br></br>नाम: ग्राफ<br></br>प्रतीक: जीआरटी<br></br>नेटवर्क: एथेरियम (ERC20)<br></br>अनुबंध: 0xc944e90c64b2c07662a292be6244bdf05cda44a7<br></br>दशमलव: 18<br></br><br></br>आप इसे <a className="cla" href="https://coinmarketcap.com/en/currencies/the-graph/" target="_blank" rel="noreferrer">यहां</a> कॉइनमार्केटकैप पर देख सकते हैं।</a>
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
  const message = this.createChatbotMessage(<a>जब भी एक प्रतिनिधि अनाधिकृत करना चाहता है, तो उनके टोकन 26-दिन की अनबॉन्डिंग अवधि के अधीन होते हैं। इसका मतलब है कि वे अपने टोकन स्थानांतरित नहीं कर सकते हैं, या 28 दिनों के लिए कोई पुरस्कार अर्जित नहीं कर सकते हैं। <br></br><br></br>कुछ आर्थिक हमलों को होने से रोकने के लिए अविभाजित/विगलन अवधि है। इसे 28 युगों के अधिकतम आवंटन जीवनकाल के साथ मेल खाना है। यह देखते हुए कि पुरस्कार प्रणाली वर्तमान में कैसे काम करती है, एक छोटी अनडेलीगेटिंग अवधि संभावित रूप से प्रतिनिधिमंडल को एक साथ कई आवंटनों में "डबल-गिनती" होने की अनुमति देगी। अधिकतम 28 युग - अधिकतम आवंटन जीवनकाल। यह तब है जब पुरस्कार वितरित किए जाते हैं।<hr></hr>एक बात पर भी विचार करना चाहिए कि एक इंडेक्सर को बुद्धिमानी से चुनना है। यदि आप एक ऐसे इंडेक्सर को चुनते हैं जो भरोसेमंद नहीं था, या अच्छा काम नहीं कर रहा था, तो आप अनाधिकृत करना चाहेंगे, जिसका अर्थ है कि आप पुरस्कार अर्जित करने के बहुत सारे अवसर खो देंगे, जो जीआरटी जलाने जितना ही बुरा हो सकता है। <br></br><br></br>ग्राफ से जीआरटी टोकनों को हटाना रद्द करने पर ट्यूटोरियल देखने के लिए <a className="cla" href="https://www.youtube.com/watch?v=3GPY5On7vHc" target="_blank" rel="noreferrer">यहां</a> क्लिक करें।<br></br><br></br>इंडेक्सर कैसे चुनें, इस पर मैं प्रलेखन और ट्यूटोरियल के साथ आपकी मदद कर सकता हूं।</a>
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
  const message = this.createChatbotMessage(<a>द ग्राफ अकादमी शिक्षा के बारे में है और द ग्राफ के बारे में अधिक जानने के लिए है। उनके पाठ्यक्रम द ग्राफ के साथ आरंभ करने में आपकी मदद करने और पारिस्थितिकी तंत्र के बारे में आपके ज्ञान को व्यापक बनाने के लिए डिज़ाइन किए गए हैं। और अधिक सीखने के पुरस्कार के रूप में, आपको एक कस्टम प्रमाणपत्र मिलता है। प्रतिनिधि पाठ्यक्रम<br></br><br></br><a className="cla" href="https://thegraph.academy/course/delegator-course/" target="_blank" rel="noreferrer">प्रतिनिधि पाठ्यक्रम</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/subgraph-developer-course/" target="_blank" rel="noreferrer">सबग्राफ डेवलपर कोर्स</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/curator-course/" target="_blank" rel="noreferrer">क्यूरेटर कोर्स</a><hr></hr>एक निःशुल्क खाता पंजीकृत करने या अतिथि के रूप में प्रवेश करने के लिए, उस पाठ्यक्रम पर जाएँ जिसमें आप रुचि रखते हैं और "अभी प्रारंभ करें" और "साइन अप करें" पर क्लिक करें। इसे कैसे करें इस पर चरण-दर-चरण <a className="cla" href="https://thegraph.academy/certificates/" target="_blank" rel="noreferrer">मार्गदर्शिका</a> है।<hr></hr>यदि आप Web3 के बारे में जानना चाहते हैं, तो मुझसे पूछें! "मैं मुफ्त में वेब3 कैसे सीख सकता हूँ?"</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLearnWeb3() {
  const message = this.createChatbotMessage(<a>Web3 Dev को निःशुल्क सीखने के लिए संसाधन<br></br><br></br>पाठ्यक्रम, परियोजनाओं और कोड के माध्यम से अपने वेब3 करियर को फास्ट ट्रैक करें। बिलकुल मुफ्त। <a className="cla" href="https://university.alchemy.com/" target="_blank" rel="noreferrer">यहां</a> खोजें।<br></br><br></br><a className="cla" href="https://t.co/dm50GZ8lMP" target="_blank" rel="noreferrer">Ethereum</a><br></br><a className="cla" href="https://t.co/BfjoA5ynEt" target="_blank" rel="noreferrer">Solidity</a><br></br>विस्मयकारी सॉलिडिटी संसाधनों, पुस्तकालयों, उपकरणों और बहुत कुछ की एक क्यूरेटेड सूची में <a className="cla" href="https://github.com/bkrem/awesome-solidity" target="_blank" rel="noreferrer">विस्मयकारी सॉलिडिटी</a> पाई जा सकती है।<br></br><a className="cla" href="https://t.co/GUMDW8WAru" target="_blank" rel="noreferrer">ब्लॉकचेन</a><br></br><a className="cla" href="https://t.co/kzVyI8leHK" target="_blank" rel="noreferrer">दैवज्ञ</a><br></br><a className="cla" href="https://t.co/QRwZn0CvPl" target="_blank" rel="noreferrer">क्रिप्टो जॉम्बीज</a> एक इंटरैक्टिव स्कूल है जो आपको ब्लॉकचेन के बारे में सभी तकनीकी चीजें सिखाता है।<br></br><a className="cla" href="https://t.co/VVsmytm7CS" target="_blank" rel="noreferrer">SpeedRunEthereum.com</a> पर स्वयं का परीक्षण करें।<br></br>एल्केमी की <a className="cla" href="https://t.co/BDni1gjuvJ" target="_blank" rel="noreferrer">वेब3</a> श्रृंखला की राह, एक 10-सप्ताह, स्व-गति वाला वेब3 डेवलपर प्रोग्राम है जो नए ब्लॉकचेन डेवलपर्स को शुरुआती से उन्नत तक जाने में मदद करता है।<br></br>सुहैल कक्कड़ द्वारा वेब3 और ब्लॉकचैन स्टैक ट्विटर थ्रेड के लिए एक पूर्ण मार्गदर्शिका <a className="cla" href="https://twitter.com/suhailkakar/status/1552889172175642624?s=21&t=l_VTQ8NemlIWkCRne8f3bQ" target="_blank" rel="noreferrer">यहां</a> पाई जा सकती है।<br></br><br></br>यदि आप वीडियो ट्यूटोरियल देखकर सीखना पसंद करते हैं तो नादेर डाबिट से बेहतर सीखने वाला कोई नहीं है। आपको नीचे 'पूर्ण स्टैक वेब3 विकास के लिए संपूर्ण मार्गदर्शिका' ट्यूटोरियल मिलेगा, अधिक वेब3 सीखने की सामग्री के लिए उसके बाकी YouTube चैनल को देखना सुनिश्चित करें।<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=nRMo5jjgCr4'/></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://twitter.com/evabeylin?s=21&t=xlTfEQdph_MfbuUlhFrb0Q" target="_blank" rel="noreferrer"><strong>Eva Beylin</strong></a> अक्टूबर 2020 से द ग्राफ फाउंडेशन की निदेशक हैं। वह ईगर्ल कैपिटल के माध्यम से कोर एथेरियम तकनीक में एक निवेशक और समर्थक हैं और द ग्राफ के विकास का नेतृत्व कर रही हैं। वह कॉइनडेस्क के सबसे प्रभावशाली 2022 में से एक है, पूरा ब्लॉग <a className="cla" href="https://www.coindesk.com/consensus-magazine/2022/12/05/eva-beylin-most-influential-2022/" target="_blank" rel="noreferrer">यहां</a> पढ़ें। 
  उन्होंने टाइगर ग्लोबल के नेतृत्व में द ग्राफ के कोर डेवलपर्स और फाउंडेशन की $50 मिलियन पूंजी को अनुदान में $135 मिलियन से अधिक के वितरण का नेतृत्व किया है। ग्राफ डे 2022 में हमारी विकेंद्रीकरण यात्रा के बारे में उनकी बातचीत <a className="cla" href="https://m.youtube.com/watch?v=ef5LCku3IqQ" target="_blank" rel="noreferrer">यहां</a> देखें। उसने फोर्ब्स 2023 <a className="cla" href="https://www.forbes.com/profile/eva-beylin/?sh=34d711c95444" target="_blank" rel="noreferrer">30 अंडर 30</a> बनाया। आप ईवा को <a className="cla" href="https://m.youtube.com/watch?v=IoqI6z5l9y8" target="_blank" rel="noreferrer">यहां</a> एक साक्षात्कार देखकर जान सकते हैं।<br></br><br></br>
  <a className="cla" href="https://twitter.com/theklineventure?s=21&t=8FTTZesLJJUxAVnVbmLgQg" target="_blank" rel="noreferrer"><strong>Tegan Kline</strong></a> 2021 से एज एंड नोड में सह-संस्थापक और व्यवसाय प्रमुख हैं। द ग्राफ को एक ओपन सोर्स टूल बनाने में मदद करने के लिए $ 22.5 मिलियन जुटाने के बाद, जो एथेरियम डेवलपर्स को यह समझने में मदद करता है कि उनके उत्पादों का उपयोग कैसे किया जा रहा है, उन्होंने एज एंड की सह-स्थापना की। करने के लिए नोड एज एंड नोड को मूल रूप से जीआरटी टोकन की 8% हिस्सेदारी के साथ वित्त पोषित किया गया था, जिसकी कीमत अब लगभग $650 मिलियन है। क्लाइन ने 2021 में 3.1 मिलियन डॉलर के कुल 3.1 मिलियन डॉलर के द ग्राफ से सटे प्रोजेक्ट्स में एज एंड नोड के निवेश का भी नेतृत्व किया है। उसने फोर्ब्स 2022 को <a className="cla" href="https://www.forbes.com/profile/tegan-kline/?sh=1465202462f7" target="_blank" rel="noreferrer">30 अंडर 30</a> बनाया है। आप क्लाइन को उसकी वेबसाइट पर जाकर जान सकते हैं। उसके साथ एक साक्षात्कार देखें, <a className="cla" href="https://youtu.be/yONuFNxJVrc" target="_blank" rel="noreferrer">यहाँ</a>। या आप <a className="cla" href="https://youtu.be/ZGHwTb92Rrg" target="_blank" rel="noreferrer">यहां</a> GRTiQ पॉडकास्ट सुन सकते हैं।<br></br><br></br>
  <a className="cla" href="https://twitter.com/girlcalledreem?s=21&t=h9ZItE1mnaruz2uPiHkrLQ" target="_blank" rel="noreferrer"><strong>Reem Chahrour</strong></a>  2021 से द ग्राफ में इकोसिस्टम मैनेजर हैं। किसी ने भी ग्राफ अनुदान के लिए आवेदन किया है, या किसी भी अनुदान प्राप्त करने वाले के काम का अनुसरण किया है, तो वे पहले ही रीम से मिल चुके हैं। वह द ग्राफ समुदाय के लिए एक महत्वपूर्ण संपत्ति है और उसके काम में कई महत्वपूर्ण पहलें शामिल हैं। आप उसे <a className="cla" href="https://m.youtube.com/watch?v=3xfb0n99AzI" target="_blank" rel="noreferrer">यहां</a> GRTiQ पॉडकास्ट पर सुन सकते हैं। वह क्रिप्टो में अपने प्रवेश और द ग्राफ फाउंडेशन में अपने काम के बारे में बात करती है, अनुदान के लिए आवेदन करने वालों के लिए उनकी सलाह (और जहां फाउंडेशन अधिक सबमिशन देखना चाहेगा), आरएफपी और अनुदान कार्यक्रमों के बीच अंतर, और जल्द ही -टू-लॉन्च ग्राफ एडवोकेट्स प्रोग्राम।<br></br><br></br>जब कोई इंडेक्सर का उल्लेख करता है तो वे पुरुष सर्वनाम का उपयोग करते हैं। "वह अपना आवंटन बंद कर देता है"। इंडेक्सर टीमों पर काम कर रही वेब3 में महिलाओं को उजागर करना चाहते हैं या ग्राफ इकोसिस्टम के भीतर अपना खुद का इंडेक्सर चला रहे हैं, ग्राफट्रोनॉट्स ने वेब3 की महिलाओं के साथ साक्षात्कार की एक श्रृंखला आयोजित की।<br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=WTdf9wEhSLg" target="_blank" rel="noreferrer">वेब3 की महिलाएं - ग्राफऑप्स से एना</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=0D4_17B6ypY" target="_blank" rel="noreferrer">वेब3 की महिलाएं - सिटाडेल से अन्ना।एक</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=chvIFfPfOjY" target="_blank" rel="noreferrer">वेब3 की महिलाएं - चिनोड टेक से IIinca</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=Z7UnQotqLVA" target="_blank" rel="noreferrer">वेब3 की महिलाएं - स्टेक2अर्न से गैबी</a></a>
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
  const message = this.createChatbotMessage(<a>नीचे आपको <strong>आधिकारिक</strong> डिस्कॉर्ड सर्वर मिलेंगे।<br></br><br></br><a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">ग्राफ प्रोटोकॉल</a><br></br><br></br><a className="cla" href="https://discord.com/invite/aZtCCKPp34" target="_blank" rel="noreferrer">ग्राफ एडवोकेट्सडीएओ</a><hr></hr>नीचे आपको अन-ऑफिशियल डिस्कॉर्ड सर्वर मिलेंगे।<br></br><br></br><a className="cla" href="https://discord.com/invite/zqrwSFFW3F" target="_blank" rel="noreferrer">ग्राफिका</a></a>
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
  const message = this.createChatbotMessage(<a>नीचे आपको आधिकारिक टेलीग्राम समूह मिलेगा।<br></br><br></br><a className="cla" href="https://t.me/graphprotocol" target="_blank" rel="noreferrer">ग्राफ आधिकारिक समुदाय</a><hr></hr>नीचे आपको दुनिया भर के अन-आधिकारिक टेलीग्राम समूह मिलेंगे।<br></br><br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank">ग्राफट्रोनॉट्स</a><br></br><a className="cla" href="https://t.me/TheGraph_Germany" target="_blank">ग्राफ - जर्मनी</a><br></br><a className="cla" href="https://t.me/thegraphfrenchchannel" target="_blank">द ग्राफ - फ्रेंच</a><br></br><a className="cla" href="https://t.me/thegraphenespanol" target="_blank">द ग्राफ – Español</a><br></br><a className="cla" href="https://t.me/thegraphRu" target="_blank">ग्राफ - रूस</a><br></br><a className="cla" href="https://t.me/thegraphitalia" target="_blank" rel="noreferrer">द ग्राफ - इटालिया</a><br></br><a className="cla" href="https://t.me/graphprotocolTR" target="_blank" rel="noreferrer">ग्राफ - तुर्की</a><br></br><a className="cla" href="https://t.me/TheGraphBR" target="_blank" rel="noreferrer">ग्राफ - ब्राजील</a><br></br><a className="cla" href="https://t.me/GraphProtocol_VN" target="_blank" rel="noreferrer">द ग्राफ - वियतनाम</a><br></br><a className="cla" href="https://t.me/Graph_Persian" target="_blank" rel="noreferrer">द ग्राफ - फारसी</a><br></br><a className="cla" href="https://t.me/thegraphjapan" target="_blank" rel="noreferrer">द ग्राफ - इंडियन</a><br></br><a className="cla" href="https://t.me/TheGraph_Dutch" target="_blank" rel="noreferrer">ग्राफ - जापान</a><br></br><a className="cla" href="https://t.me/GRTARAB" target="_blank" rel="noreferrer">ग्राफ - डच</a><br></br>
  <a className="cla" href="https://t.me/Thegraph_KR" target="_blank" rel="noreferrer">द ग्राफ - कोरिया</a><br></br><a className="cla" href="https://t.me/thegraphpk" target="_blank" rel="noreferrer">ग्राफ - पाकिस्तान</a><br></br><a className="cla" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">द ग्राफ - इंडोनेशिया </a><br></br><a className="cla" href="https://t.me/thegraphbangladesh" target="_blank">ग्राफ - बांग्लादेश</a><br></br><a className="cla" href="https://t.me/GraphProtocolCN" target="_blank">ग्राफ – चीन</a><br></br><a className="graphiql-link" href="https://t.me/TheGraphUkrainian" rel="noreferrer">ग्राफ - यूक्रेन</a><br></br><a className="graphiql-link" href="https://t.me/thegraph_pl" target="_blank" rel="noreferrer">ग्राफ - पोलैंड</a><br></br><a className="graphiql-link" href="https://t.me/TheGraph_Nigeria" target="_blank" rel="noreferrer">ग्राफ - नाइजीरिया</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Telegram End
// Token Economics Start
handleTwitter() {
  const message = this.createChatbotMessage(<a>नीचे आपको आधिकारिक ट्विटर पेज मिलेगा।<br></br><br></br><a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">लेखाचित्र</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTokenEconomics() {
  const message = this.createChatbotMessage(<a>ग्राफ का टोकन अर्थशास्त्र काफी जटिल है। टोकन जारी करने के शेड्यूल और टोकन बर्न मैकेनिज्म के अलावा, ग्राफ प्रोटोकॉल 5 से 10 साल की अवधि के दौरान निहित टोकन को अनलॉक करता है।<hr></hr><table><tr className="indexer-table-header">
  <th>कुल टोकन आपूर्ति = </th>
  <th> प्रारंभिक टोकन आपूर्ति + </th>
  <th> वार्षिक निर्गम - </th>
  <th> वार्षिक जलन</th>
</tr>
</table><br></br>वार्षिक निर्गमन सूत्र इस प्रकार है:<br></br><br></br>नेटवर्कGRTI जारी करना = 1000000011247641700<br></br><br></br>ब्लॉक वर्ष = 2628000<br></br><br></br>मुद्रास्फीति = नेटवर्क जीआरटीआई जारी करना * (10^-18) * ब्लॉक वर्ष - 1<br></br><br></br>मुद्रास्फीति = 0,0299999999792... = 3% लगभग
<hr></hr><strong>GRT टोकन अर्थशास्त्र अवलोकन</strong><br></br><br></br><table>
<tr className="indexer-table">
  <td><strong>सांकेतिक प्रतीक</strong></td>
  <td>जीआरटी</td>
</tr>
<tr className="indexer-table">
  <td><strong>टोकन नाम</strong></td>
  <td>ग्राफ टोकन</td>
</tr>
<tr className="indexer-table">
  <td><strong>प्रारंभिक टोकन आपूर्ति</strong></td>
  <td>10 बिलियन जीआरटी</td>
</tr>
<tr className="indexer-table">
  <td><strong>वार्षिक निर्गम</strong></td>
  <td>~3% (वर्ष 1 के लिए)</td>
</tr>
<tr className="indexer-table">
  <td><strong>वार्षिक जलन</strong></td>
  <td>क्वेरी शुल्क और करों का 1%</td>
</tr>
</table><hr></hr>आप <a className="cla" href="https://thegraph.academy/ecosystem/graph-token-economics/" target="_blank" rel="noreferrer">यहां</a> द ग्राफ के टोकन अर्थशास्त्र के बारे में सब कुछ पढ़ सकते हैं।</a>
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
  const message = this.createChatbotMessage(<a>होस्ट की गई सेवा के लिए आगे का रास्ता स्पष्ट करना<br></br><br></br>होस्ट की गई सेवा अचानक सभी श्रृंखलाओं के लिए समर्थन समाप्त नहीं करेगी। होस्ट की गई सेवा प्रति-श्रृंखला के आधार पर उपयोग-में-मुक्त रहेगी, जब तक कि प्रत्येक श्रृंखला के लिए मुख्य कार्यक्षमता तक नहीं पहुंच जाती।<br></br><br></br>सबग्राफ डेवलपर्स को एक आवश्यक सेवा से बंद नहीं किया जाएगा, जिस पर वे उत्पादन में भरोसा करते हैं।<br></br><br></br>Q1 2023 के अंत तक होने वाली होस्ट की गई सेवा के सूर्यास्त का अनुमान लगाने वाली मूल घोषणा पर विस्तृत (और सुधार करने के लिए) करने के लिए:<br></br><br></br>संक्रमण प्रक्रिया केवल एक बार श्रृंखलाओं पर लागू होती है जब वे ग्राफ़ नेटवर्क पर समर्थित होते हैं (जिसमें इस लेखन के समय केवल एथेरियम मेननेट शामिल होता है, जिसमें ग्नोसिस चेन जल्द ही आ रही है)।<br></br><br></br>यह प्रक्रिया एमआईपी कार्यक्रम के माध्यम से विशिष्ट निकास मानदंड और अनुक्रमणिका तत्परता से संचालित होती है, अब तारीख नहीं—डेवलपर्स को सेवा की आवश्यक गुणवत्ता, मुख्य कार्यक्षमता और डेवलपर अनुभव को विकेन्द्रीकृत नेटवर्क पर पेश किए जाने तक जंजीरों को बहिष्करण चरणों से गुजरने की उम्मीद नहीं करनी चाहिए।<br></br><br></br>सबग्राफ डेवलपर्स को चिंतित नहीं होना चाहिए कि उनकी श्रृंखला के लिए समर्थन मनमाने ढंग से या जल्दी से बंद कर दिया जाएगा। इसके अतिरिक्त, प्रवासन प्रक्रिया के दौरान आपका हाथ थामने के लिए समर्थन का एक बढ़ता हुआ समुदाय है। कोर डेवलपर्स भी क्वेरी फीस, प्रश्नों की लागत, सेवा की गुणवत्ता और नेटवर्क पर समग्र डेवलपर अनुभव के लिए बिलिंग प्रक्रिया में सुधार पर काम करना जारी रखे हुए हैं। ग्राफ़ के मुख्य योगदानकर्ता प्रवासन के बारे में डेवलपर की चिंताओं को स्वीकार करते हैं और अधिक निर्बाध नेटवर्क अनुभव बनाने के लिए समाधान पर काम कर रहे हैं।<br></br><br></br>द ग्राफ़ डिसॉर्डर, द ग्राफ़ फ़ोरम और migration@thegraph.foundationसे संपर्क करके फ़ीडबैक का हमेशा स्वागत है। कोर देव और योगदानकर्ता सक्रिय रूप से उपयोगकर्ताओं को सुन रहे हैं और उनकी आवश्यकताओं के अनुरूप परिवर्तन शामिल कर रहे हैं।<br></br><br></br>आधिकारिक प्रलेखन यात्रा के लिए, <a className="cla" href="https://thegraph.com/blog/sunsetting-hosted-service" target="_blank" rel="noreferrer">द ग्राफ फाउंडेशन - द रोड टू सनसेटिंग द होस्टेड सर्विस।</a><hr></hr>पचाने में आसान, अहमद मर्देनी द्वारा बनाया गया गहन ट्विटर थ्रेड, <a className="cla" href="https://twitter.com/Mardeni01" target="_blank" rel="noreferrer">यहां</a> देखें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Sunsetting Hosted Service  End
handlePowerDAOS() {
  const message = this.createChatbotMessage(<a>पावर डीएओ के लिए ग्राफ का उपयोग करना: स्नैपशॉट केस स्टडी<br></br><br></br>डीएओ सदस्यों को उस डेटा को सटीक और आसानी से पढ़ने में सक्षम बनाने के लिए ग्राफ एक महत्वपूर्ण प्रोटोकॉल है, जबकि वोटों को ट्रैक करना भी आसान बनाता है। विकेंद्रीकृत स्वायत्त संगठन, या DAO, ऐसे संगठन हैं जो केंद्रीकृत प्राधिकरणों के विपरीत वितरित समुदायों द्वारा चलाए जाते हैं। क्योंकि DAO में निर्णय लेने का बड़ा हिस्सा ब्लॉकचेन पर रिकॉर्ड किए गए ऑन-चेन डेटा पर निर्भर करता है।<br></br><br></br><a className="cla" href="https://snapshot.org/#/" target="_blank" rel="noreferrer">स्नैपशॉट</a> एक विकेन्द्रीकृत शासन प्रोटोकॉल है जो लोगों को उन संगठनों के भविष्य के बारे में समन्वय करने और सामूहिक निर्णय लेने में सक्षम बनाता है जिनमें वे भाग लेते हैं। स्नैपशॉट लोगों के लिए बिना किसी गैस शुल्क के प्रस्तावों को आसानी से बनाना और उन पर मतदान करना संभव बनाता है। यह प्रोटोकॉल पर काम करने वाले, डीएओ में सहयोग करने वाले और वेब3 में नए नए प्रोजेक्ट बनाने वाले हजारों लोगों के लिए व्यापक रूप से इस्तेमाल किया जाने वाला टूल है।<br></br><br></br>अब तक, स्नैपशॉट ने इससे अधिक रिकॉर्ड किया है:<br></br>8.5M ऑफ-चेन वोट<br></br>8K प्रोटोकॉल एकीकृत<br></br>64.8k प्रस्ताव।<hr></hr>यह जानने के लिए <a className="cla" href="https://thegraph.com/blog/using-the-graph-for-daos-snapshot/" target="_blank" rel="noreferrer">यहां</a> पढ़ें कि कैसे द ग्राफ पावर स्नैपशॉट और अपने डैप को सुपरचार्ज कैसे करें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Tenderize Start
handleTenderize() {
  const message = this.createChatbotMessage(<a>ग्राफ़ डे के दौरान पहले लिक्विड स्टेकिंग प्रोटोकॉल के रूप में टेंडराइज़ को शाउटआउट दिया गया। उपयोगकर्ता टेंडरजीआरटी (टीजीआरटी) के लिए $जीआरटी जमा कर सकते हैं, जो स्वचालित रूप से पुरस्कारों को जोड़ता है और इच्छानुसार आगे और पीछे स्वैप करता है। $GRT धारक उन्हें tGRT देते हुए Tenderize के माध्यम से प्रत्यायोजित कर सकते हैं। दांव पर लगाई गई स्थिति का एक सांकेतिक संस्करण जो स्वचालित रूप से पुरस्कारों को जोड़ता है और जिसे तुरंत जीआरटी में वापस स्वैप किया जा सकता है।<br></br><br></br>आप <a className="cla" href="https://medium.com/@OG-ग्राफट्रोनॉट्स/how-to-use-tenderize-tokenized-stake-for-your-grt-cf5fe38a6dc7" target="_blank" rel="noreferrer">यहां</a> अपने जीआरटी के लिए टेंडराइज टोकनाइज्ड स्टेक का उपयोग कैसे करें, इस पर ग्राफट्रोनॉट्स द्वारा लिखित एक गाइड पढ़ सकते हैं।</a>
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
  const message = this.createChatbotMessage(<a>प्रतिभाशाली अनुवादकों की सहायता से ग्राफ़ अब उनकी प्राथमिक भाषाओं में और भी अधिक लोगों तक पहुँचता है।<br></br><br></br>GRT समुदाय के बारे में अधिक जानने के लिए, नीचे देखें।<br></br><br></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCommunity();
  }}><strong>समुदाय</strong></button>
  <br></br><br></br><a className="cla" href="https://thegraph.com/blog/get-involved-with-graph-community-web3/" target="_blank" rel="noreferrer">ग्राफ़ इकोसिस्टम में भाग लेने के 23</a></a>
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
  const message = this.createChatbotMessage(<a>जियो एक वेब3 विकेन्द्रीकृत ब्राउज़र है जिसे द ग्राफ पर बनाया गया है, पेज खुले हैं और समुदाय द्वारा क्यूरेट किए गए हैं। इसलिए आप उस पर मतदान कर सकते हैं जो मूल्यवान है और आपका वोट मायने रखता है। जियो उन सभी समस्याओं को हल कर रहा है जो वर्तमान में हमारे वेब2 ब्राउज़रों के साथ हैं और यह नवाचार की एक नई विंडो खोल रहा है, एक नया इंटरनेट जहां आपकी गोपनीयता सर्वोच्च प्राथमिकता है। इसका उपयोग करने में सक्षम होने के लिए आपको क्रिप्टो या ब्लॉकचेन के बारे में कुछ भी जानने की आवश्यकता नहीं है। यह अगले 1बी उपयोगकर्ताओं को वेब3 पर ऑनबोर्ड करने का अनुभव है।<br></br><br></br>
  जियो अभी बीटा में है और फिलहाल यह केवल आईपैड और मैक डिवाइस को सपोर्ट कर रहा है, <a className="cla" href="https://edgeandnode.com/geo/" target="_blank" rel="noreferrer">यहां</a> बीटा वेटलिस्ट के लिए साइनअप करें।<br></br><br></br>अहमद मर्देनी द्वारा बनाए गए जियो के बारे में पूरा ब्लॉग पढ़ने के लिए <a className="cla" href="https://ahmadmardeni.substack.com/p/geo-the-new-web3-browser-with-a-decentralization?s=r" target="_blank" rel="noreferrer">यहां</a> देखें।<hr></hr>भू उत्पत्ति<br></br><br></br>यानीव - पांच साल पहले, हममें से एक समूह ने एथेरियम के आसपास हो रही गतिविधि को देखा और द ग्राफ बनाकर योगदान देने का फैसला किया। मैंने द ग्राफ की क्षमता को दुनिया के सभी सार्वजनिक ज्ञान और सूचनाओं के वैश्विक विकेन्द्रीकृत ज्ञान ग्राफ के रूप में देखा। सूचना को व्यवस्थित और प्रस्तुत करने के लिए सार्वजनिक अवसंरचना का उपयोग करके, हमारे पास सत्य मानी जाने वाली जानकारी को प्रभावित करने के लिए बेहतर खुली और निष्पक्ष प्रक्रियाएँ हो सकती हैं। आज हमारे पास एक जीवंत विकेन्द्रीकृत नेटवर्क है और ग्राफ हजारों डेवलपर्स के लिए ब्लॉकचेन डेटा तक कुशलतापूर्वक पहुंचने की महत्वपूर्ण समस्या को हल कर रहा है, लेकिन हमें अभी भी एक कदम और आगे बढ़ने की जरूरत है ताकि पूर्ण दृष्टि को जीवन में देखा जा सके।<br></br><br></br>मुझे यह बताते हुए खुशी हो रही है कि हमने जियो नाम की एक अलग कंपनी बनाई है जिसका नेतृत्व मैं कुछ बेहद प्रतिभाशाली इंजीनियरों और डिजाइनरों के साथ करूंगा। यह इस यात्रा की शुरुआत है और जियो को उसके पूर्ण रूप में लाने के लिए निस्संदेह बहुत सारे प्रयोग, पुनरावृत्ति और सहयोग की आवश्यकता होगी।<br></br><br></br>आप <a className="cla" href="https://www.geobrowser.io/blog/post/introducing-geo-genesis?s=09" target="_blank" rel="noreferrer">यहां</a> पूरा ब्लॉग पढ़ सकते हैं।<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/i/status/1532418078700580869'/></a>
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
  const message = this.createChatbotMessage(<a>StreamingFast एक प्रोटोकॉल इन्फ्रास्ट्रक्चर कंपनी है जो ब्लॉकचेन डेटा स्ट्रीमिंग के लिए अत्यधिक स्केलेबल, क्रॉस-चेन आर्किटेक्चर के निर्माण में उत्कृष्टता प्राप्त करती है। $60 मिलियन का कोर देव ग्रांट अपनी तरह का पहला है, जो सहयोगात्मक नवाचार की एक नई सीमा का नेतृत्व करता है, जहां समुदायों और कंपनियों को मौलिक रूप से अधिक खुला इंटरनेट बनाने के लिए गठबंधन किया जाता है।<br></br><br></br>StreamingFast ग्राफ़ को एक प्रोटोकॉल और पारिस्थितिकी तंत्र के रूप में आगे बढ़ाने के लिए अपनी तकनीक, डेवलपर प्रतिभा और संसाधनों का योगदान देगा। प्रासंगिक आईपी और उत्पाद द ग्राफ प्रोटोकॉल जीथब रेपो के तहत ओपन-सोर्स होंगे और एपीआई उत्पाद बैकएंड इंडेक्सिंग और क्वेरी समर्थन के लिए ग्राफ नेटवर्क में माइग्रेट होंगे।<br></br><br></br>ग्राफ़ फ़ाउंडेशन ने द ग्राफ़ को कोर डेवलपर टीम के रूप में शामिल होने के लिए स्ट्रीमिंगफ़ास्ट को $60 मिलियन का अनुदान दिया, <a className="cla" href="https://thegraph.com/blog/core-dev-grant" target="_blank" rel="noreferrer">यहाँ</a> पढ़ें।<hr></hr>सबस्ट्रीम एक शक्तिशाली ब्लॉकचेन इंडेक्सिंग तकनीक है, जिसे द ग्राफ नेटवर्क के लिए विकसित किया गया है। यह आपको रस्ट मॉड्यूल लिखने में सक्षम बनाता है, समुदाय के साथ-साथ डेटा स्ट्रीम की रचना करता है, और स्ट्रीमिंग-फर्स्ट फैशन में समानांतरकरण के आधार पर अत्यधिक उच्च प्रदर्शन अनुक्रमण प्रदान करता है। इसमें फायरहोज के सभी लाभ हैं, जैसे कम लागत वाली कैशिंग और ब्लॉकचेन डेटा का संग्रह, उच्च थ्रूपुट प्रोसेसिंग, और कर्सर-आधारित रीऑर्ग्स हैंडलिंग।<br></br><br></br><a className="cla" href="https://substreams.streamingfast.io/" target="_blank" rel="noreferrer">यहां</a> सबस्ट्रीम पर दस्तावेज़ ढूंढने के लिए।<br></br>या आप द ग्राफ अबाउट <a className="cla" href="https://thegraph.com/blog/substreams-parallel-processing" target="_blank" rel="noreferrer">सबस्ट्रीम: मैसिवली फास्टर इंडेक्सिंग परफॉर्मेंस फॉर सबग्राफ्स से</a> ब्लॉग पढ़ सकते हैं।<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=qWxffTKpciU'/><br></br>स्ट्रीमिंगफास्ट <a href="https://discord.com/invite/jZwqxJAvRs" target="_blank" rel="noreferrer">डिस्कॉर्ड</a> सर्वर से जुड़ें या उन्हें <a className="cla" href="https://www.streamingfast.io/" target="_blank" rel="noreferrer">यहां</a> देखें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Fast Streaming  End
// ग्राफट्रोनॉट्स Start
handleGraphtronauts() {
  const message = this.createChatbotMessage(<a><strong>प्रतिनिधियों के लिए एक समुदाय, प्रतिनिधियों द्वारा निर्मित।</strong><br></br>ग्राफट्रोनॉट्स एक समूह है जो उन लोगों के लिए चैट की सुविधा प्रदान करने के लिए समर्पित है जो $GRT रखना चाहते हैं और द ग्राफ प्रोजेक्ट के मूल सिद्धांतों के बारे में बात करते हैं। न केवल वे ग्राफ़ इकोसिस्टम के लिए दीर्घकालिक $GRT धारकों का सबसे बड़ा गैर-आधिकारिक समुदाय हैं, बल्कि उनका लक्ष्य लोगों को ग्राफ़ के लिए प्रतिनिधि बनने की उनकी यात्रा में मदद करना है।<br></br><br></br>'हम दूसरों को ऊपर उठाकर उठते हैं' - ग्राफट्रोनॉट्स | 16 जनवरी 2021<br></br><br></br>को स्थापित बाघे और क्रिस इविंग के साथ इस <a className="cla" href="https://www.grtiq.com/grtiq-podcast-35-the-graphtronauts/" target="_blank" rel="noreferrer">GRTiQ</a> पॉडकास्ट को सुनकर ग्राफट्रोनॉट्स के बारे में और जानें।<br></br>और यह <a className="cla" href="https://www.grtiq.com/grtiq-podcast-90-paolo-diomede/" target="_blank" rel="noreferrer">GRTiQ</a> पॉडकास्ट पाओलो डायोमेड के साथ।<br></br>आप निम्न लिंक के माध्यम से समुदाय में शामिल हो सकते हैं:<br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank" rel="noreferrer">तार</a><br></br><a className="cla" href="https://twitter.com/graphtronauts" target="_blank" rel="noreferrer">ट्विटर</a><br></br><a className="cla" href="https://www.graphtronauts.com/#/" target="_blank" rel="noreferrer">ग्राफट्रोनॉट्स ऐप</a><br></br><a className="cla" href="https://old.graphtronauts.com/" target="_blank" rel="noreferrer">वेबसाइट</a><br></br><a className="cla" href="https://www.youtube.com/channel/UCPAUeNaRtBV-jdSKY8wmcXg" target="_blank" rel="noreferrer">यूट्यूब</a><br></br><a className="cla" href="https://www.reddit.com/r/ग्राफट्रोनॉट्स/" target="_blank" rel="noreferrer">रेड्डी</a><hr></hr>ग्राफट्रोनॉट्स इंडेक्सर (<a className="cla" href="https://thegraph.com/explorer/profile/0x0c3aab9f49c01070ec359aae4778fcbb01d2fbef?view=Indexing" target="_blank" rel="noreferrer">graphtronauts-indexer.eth</a>) अब लाइव है और प्रतिनिधिमंडलों के लिए तैयार है! अधिक जानकारी के लिए नीचे ट्वीट देखें, उनके <a className="cla" href="https://t.co/dDUb7NHaPY" target="_blank" rel="noreferrer">डिस्कॉर्ड</a> में शामिल हों और अपडेट के लिए ट्विटर पर फॉलो करें।<br></br><Embed className="embed" isDark url='https://twitter.com/graphtronauts_x/status/1593310558798979072?s=20&t=2FCQMWbItkh1MnXmrHBVIA'/>
    </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// ग्राफट्रोनॉट्स End
 // Chit Chat KEEP AT END Start


handleDelegateWithWallet() {
  const message = this.createChatbotMessage(<a>यदि आप <a className="cla" href="https://metamask.io/download/" target="_blank" rel="noreferrer">मेटामास्क</a> के माध्यम से जीआरटी को प्रत्यायोजित करना चाहते हैं। यदि आपने पहले से ही मेटामास्क डाउनलोड नहीं किया है। यदि आपको इसमें सहायता की आवश्यकता है, तो आप <a className="cla" href="https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047" target="_blank" rel="noreferrer">यहाँ</a> एक गाइड पा सकते हैं।<br></br><br></br>आप <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">यहां</a> एक अनुक्रमणिका को GRT प्रत्यायोजित करने पर चरण-दर-चरण वीडियो ट्यूटोरियल देख सकते हैं।<br></br>यदि आप टेक्स्ट गाइड का पालन करना पसंद करेंगे, तो आप उसे <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">यहाँ</a> पढ़ सकते हैं।<hr></hr>आप ग्राफ़ प्रोटोकॉल पर डेलिगेट करने के लिए वॉलेटकनेक्ट का उपयोग कर सकते हैं।<br></br>आप इसे <a className="cla" href="https://thegraph.academy/delegators/delegating-walletconnect/" target="_blank" rel="noreferrer">यहां</a> कैसे करें इस पर चरण-दर-चरण मार्गदर्शिका पा सकते हैं।<br></br><br></br>मेटामास्क के सॉफ्ट वॉलेट के बजाय, आप अपने जीआरटी को सौंपने के लिए लेजर जैसे हार्ड वॉलेट का भी उपयोग कर सकते हैं। हार्ड वॉलेट सुरक्षा की एक और परत जोड़ सकते हैं क्योंकि उन्हें आमतौर पर लेनदेन की भौतिक डिवाइस पुष्टि की आवश्यकता होती है। आप मेटामास्क ब्राउज़र एक्सटेंशन के माध्यम से मेटामास्क को अपने हार्डवेयर वॉलेट से जोड़ सकते हैं। सुनिश्चित करें कि आपके लेजर डिवाइस पर ईटीएच ऐप खुला है और आपके डिवाइस पर ईटीएच ऐप के भीतर अनुबंध डेटा की अनुमति है।<br></br><br></br>मेटामास्क से जुड़े हार्डवेयर वॉलेट का उपयोग करके अपने जीआरटी टोकन को सौंपने के लिए, <a className="cla" href="https://medium.com/@OG-ग्राफट्रोनॉट्स/how-to-delegate-your-grt-tokens-with-an-hardware-wallet-aec7751cd5d5" target="_blank" rel="noreferrer">यहां</a> एक ट्यूटोरियल पढ़ें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCurator() {
  const message = this.createChatbotMessage(<a><a className="cla" href="https://thegraph.academy/curators/definition/" target="_blank" rel="noreferrer">क्यूरेटरों</a> क्यूरेटरों को जटिल तकनीकी कौशल या ज्ञान रखने की आवश्यकता नहीं है। इसके लिए केवल मेटामास्क के माध्यम से लेन-देन करने की क्षमता है। इसी तरह, इंडेक्सर्स के विपरीत, क्यूरेटरों को जीआरटी की न्यूनतम आवश्यक राशि को दांव पर लगाने की आवश्यकता नहीं होती है। क्यूरेटर को वेब3 पारिस्थितिकी तंत्र के रुझानों की समझ होनी चाहिए और देखना चाहिए कि क्या कोई सबग्राफ उपयोगी जानकारी प्रदान कर रहा है। यह एक क्यूरेटर के लिए महत्वपूर्ण मुद्दों की पहचान करने में सक्षम होने के लिए भी सहायक होता है जिसका मतलब हो सकता है कि सबग्राफ टूटा हुआ है।<br></br><br></br>
  निम्नलिखित गाइड आपको एक सबग्राफ को संकेत देने से पहले और आत्मविश्वास के साथ इसे करने के तरीके के बारे में जानने के लिए आवश्यक सभी जानकारी देंगे।<br></br><br></br><a className="cla" href="https://medium.com/@paulieb.eth/tips-and-tricks-to-evaluate-and-determine-if-a-subgraph-is-legitimate-c67f16e2205a" target="_blank" rel="noreferrer">यह क्यूरेटर</a> गाइड 'टिप्स और ट्रिक्स का मूल्यांकन करने और यह निर्धारित करने के लिए कि क्या सबग्राफ वैध है' शुरू करने के लिए सबसे अच्छी जगह है। एक बार जब आप गाइड पढ़ लेते हैं और नीचे दिए गए ट्यूटोरियल देख लेते हैं, तो आप अपने पहले सबग्राफ को संकेत देने की अच्छी स्थिति में होंगे।<br></br><br></br>यह <a className="cla" href="https://medium.com/@paulieb.eth/the-graph-curation-bb17bf8b8fa9" target="_blank" rel="noreferrer">मार्गदर्शिका</a> भी पाउलीबी द्वारा 'क्यूरेशन' पर बनाई गई है। यह क्या है, इसे कैसे करना है, और आपको सफल होने में मदद करने के लिए सहायक संसाधनों की व्याख्या करने वाली एक छोटी और प्यारी मार्गदर्शिका।' <a className="cla" href="https://t.me/CurationStation" target="_blank" rel="noreferrer">क्यूरेटर के लिए $GRT</a> क्यूरेशन स्टेशन, क्यूरेटर द्वारा बनाई गई कम्युनिटी से जुड़ें। जरूरत पड़ने पर आप यहां और मदद मांग सकते हैं।<br></br><br></br>क्यूरेशन के बारे में <a className="cla" href="https://thegraph.com/explorer/profile?id=0x87eba079059b75504c734820d6cf828476754b83&view=Indexing" target="_blank" rel="noreferrer">DataNexus</a> द्वारा निम्नलिखित वीडियो ट्यूटोरियल बनाए गए हैं:<br></br><a className="cla" href="https://www.youtube.com/watch?v=-7qWi2do-1E" target="_blank" rel="noreferrer">ग्राफ के लिए क्यूरेटर क्या है</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=unzQvSZIORg" target="_blank" rel="noreferrer">एक सबग्राफ का सत्यापन</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=zJswFILfADg" target="_blank" rel="noreferrer">कैसे एक सबग्राफ को सिग्नल करें</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=u76dxQPdS9c" target="_blank" rel="noreferrer">सिग्नल लेनदेन विफलता</a><hr></hr>यदि आप कुछ सहायक क्यूरेटर उपकरण चाहते हैं, तो बस पूछें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCuratorTools() {
  const message = this.createChatbotMessage(<a><strong>क्यूरेटर के लिए उपयोगी उपकरण</strong><br></br><br></br>जानें कि सबग्राफ स्टूडियो में बिलिंग कैसे काम करती है, <a className="cla" href="https://thegraph.com/docs/en/billing/" target="_blank" rel="noreferrer">यहाँ।</a><br></br><br></br><a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">यहां</a> जानें कि ग्राफ़ अपने बिलिंग सिस्टम के लिए बहुभुज का उपयोग कैसे करता है।<hr></hr> एक सबग्राफ की अनुक्रमण स्थिति <a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">की जाँच</a> करें <br></br><br></br>आप इसके लिए डेटा देख सकते हैं:<br></br>मेननेट क्वेरी शुल्क (दैनिक)<br></br>मेननेट क्वेरी शुल्क (मासिक)<br></br>मेननेट क्वेरी शुल्क (मासिक, 30 दिन मूविंग एवरेज)<br></br>नए सबग्राफ (मासिक)<br></br>कुल सबग्राफ<br></br>औसत सबग्राफ शुल्क (मासिक, 30 दिन का मूविंग एवरेज)<br></br>सबग्राफ पूछताछ शुल्क (30 दिन)<br></br>प्रश्न शुल्क / सिग्नल अनुपात (30 दिन)<br></br>सबग्राफ पूछताछ शुल्क (30 दिन) - %<br></br><a className="cla" href="http://michael.lesane.net/graphdash/" target="_blank" rel="noreferrer">यहाँ।</a><br></br><br></br>या <a className="cla" href="http://michael.lesane.net/graphdash/billing" target="_blank" rel="noreferrer">यहां</a> सबग्राफ की बिलिंग की जांच करें।<br></br><br></br>ग्राफ नेटवर्क <a className="cla" href="https://dapplooker.com/dapp/graph-network-billing-120192" target="_blank" rel="noreferrer">बिलिंग डैशबोर्ड</a><br></br><br></br>ग्राफ़ <a className="cla" href="https://dapplooker.com/dapp/graph-network-user-billing-balance-120204" target="_blank" rel="noreferrer">उपयोगकर्ता बिलिंग शेष</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleHostedService() {
  const message = this.createChatbotMessage(<a>होस्ट की गई सेवा द ग्राफ़ को आज की स्थिति में लाने में सहायक रही है, लेकिन दृष्टि हमेशा एक विकेंद्रीकृत अनुक्रमण प्रोटोकॉल और वैश्विक एपीआई बनाने की रही है। जब ग्राफ़ नेटवर्क लाइव हो जाता है, तो डेवलपर्स के पास वास्तव में सर्वर रहित विकेन्द्रीकृत अनुप्रयोगों की पेशकश करने की क्षमता होगी जो तेजी से लोड और भरोसेमंद हैं। केंद्रीकृत बुनियादी ढाँचे की कोई आवश्यकता नहीं होगी क्योंकि अनुप्रयोग प्रश्नों को संसाधित करने के लिए अनुक्रमणकों के एक कुशल नेटवर्क से सीधे जुड़ सकते हैं।<br></br><br></br>एथेरियम सबग्राफ ग्राफ के विकेंद्रीकृत नेटवर्क में माइग्रेट करना जारी रखता है। जैसे-जैसे वेब3 को अपनाना बढ़ता है, वैसे-वैसे पैमाने और प्रदर्शन की मांग भी बढ़ती है। डेवलपर्स को एक बड़े फैसले का सामना करना पड़ रहा है: केंद्रीकृत तकनीक पर भरोसा करना जारी रखना या विकेंद्रीकृत बुनियादी ढांचे पर स्विच करना। दीर्घायु और विश्वसनीयता के लिए, विकेंद्रीकरण से बेहतर कुछ नहीं है।<br></br>विफलता के केंद्रीकृत बिंदुओं से बचकर, आप अपने उपयोगकर्ताओं को एक वेब3 ऐप ऑफ़र कर रहे हैं, जिसे वे लगातार एक्सेस कर सकते हैं. कई परियोजनाओं ने पहले ही उत्पादन में नेटवर्क को मान्य कर दिया है और अब आपके प्रोजेक्ट के माइग्रेट करने का सही समय है।<br></br><br></br>ग्राफ़ सबग्राफ़ माइग्रेशन के बारे में अधिक जानने के लिए, <a className="cla" href="https://thegraph.com/blog/graph-network-migration" target="_blank" rel="noreferrer">यहाँ</a> देखें।<br></br>यदि आप एक सबग्राफ को होस्टेड सेवा से मेननेट पर माइग्रेट करने के बारे में चरण-दर-चरण मार्गदर्शिका की तलाश कर रहे हैं, तो <a className="cla" href="https://codex.thegraph.com/repositories-and-documentation/official-documentation/hosted-service/migrating-subgraph" target="_blank" rel="noreferrer">यहां</a> देखें। यदि आप वीडियो ट्यूटोरियल पसंद करते हैं तो नीचे देखें।<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=syXwYEk-VnU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleChainlink() {
  const message = this.createChatbotMessage(<a>ग्राफ़ एथेरियम और IPFS जैसे नेटवर्क को क्वेरी करने के लिए एक इंडेक्सिंग प्रोटोकॉल है। कोई भी ओपन एपीआई बना और प्रकाशित कर सकता है, जिसे सबग्राफ कहा जाता है, जिससे डेटा को आसानी से एक्सेस किया जा सकता है।<hr></hr>चैनलिंक एक विकेन्द्रीकृत ऑरेकल नेटवर्क है जो स्मार्ट अनुबंधों को ऑफ-चेन डेटा फीड्स, वेब एपीआई और पारंपरिक बैंक भुगतानों तक सुरक्षित रूप से पहुंचने में सक्षम बनाता है। वे विकेंद्रीकृत वेब3 के निर्माण के लिए ग्राफ के महत्वपूर्ण महत्व पर चर्चा करते हैं और चैनलिंक और ग्राफ के बीच के अंतरों की व्याख्या करते हैं।<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=HOS9g0rKP24'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIndexerOfficeHours() {
  const message = this.createChatbotMessage(<a>अनुक्रमणिका कार्यालय समय किसी के लिए अपने अनुक्रमणिका परिनियोजन पर सलाह लेने के लिए एक अनौपचारिक ड्रॉप-इन क्लिनिक है, चाहे वह मेननेट पर हो या टेस्टनेट पर। यदि आप किसी समस्या निवारण समस्या पर अधिक नज़र रखना चाहते हैं, या केवल अनुक्रमण के बारे में प्रश्न पूछना चाहते हैं, तो यह आपके लिए क्लिनिक है।<br></br><br></br>आप <a className="cla" href="https://graphops.notion.site/Indexer-Office-Hours-952e0b50a65144768aab922e2c9d102a" target="_blank" rel="noreferrer">यहां</a> सभी इंडेक्सर ऑफिस घंटे देख सकते हैं।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleFireHose() {
  const message = this.createChatbotMessage(<a>फ़ायरहोज़ (स्ट्रीमिंगफ़ास्ट द्वारा विकसित) के माध्यम से डेटा संसाधित करना, रैखिक अनुक्रमण प्रदर्शन और सिंकिंग गति को बढ़ाता है, और समानांतर प्रसंस्करण को सक्षम करके डेटा चपलता को अधिकतम करता है। Firehose किसी भी ब्लॉकचेन के साथ ग्राफ नोड के लिए एक सामान्य इंटरफ़ेस बनाता है और NEAR जैसी उच्च थ्रूपुट श्रृंखलाओं को संभालने की क्षमता में काफी सुधार करता है।<br></br><br></br>आप इसके बारे में अधिक जानने के लिए फायरहोज के प्रस्ताव को <a className="cla" href="https://firehose.streamingfast.io/" target="_blank" rel="noreferrer">यहां</a> पढ़ सकते हैं।<hr></hr>उनके बारे में अधिक जानने के लिए मुझसे StreamingFast के बारे में पूछें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoreDevs() {
  this.handleButtonCoreDevsChat = this.handleButtonCoreDevsChat.bind(this);
  const message = this.createChatbotMessage(<a>ग्राफ़ के कोर डेवलपर हैं:<br></br><br></br><a className="cla" href="https://edgeandnode.com/blog/introducing-edge-and-node/" target="_blank"><strong>एज एंड नोड</strong></a> - विकेंद्रीकृत प्रोटोकॉल विकसित करना और वेब3 को आगे बढ़ाना। ग्राफ के पीछे प्रारंभिक टीम। Figment - नोड इंफ्रास्ट्रक्चर और मल्टी-ब्लॉकचेन सपोर्ट में सुधार।<br></br><a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank"><strong>Figment</strong></a> - नोड इंफ्रास्ट्रक्चर और मल्टी-ब्लॉकचेन सपोर्ट में सुधार।<br></br><a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank"><strong>द ग्राफ फ़ाउंडेशन</strong></a> - पारिस्थितिकी तंत्र का प्रबंधन करना, अनुदान जारी करना और समुदाय का समर्थन करना।<br></br><a className="cla" href="https://www.streamingfast.io/" target="_blank"><strong>स्ट्रीमिंगफास्ट</strong></a> - सबग्राफ इंडेक्सिंग प्रदर्शन का अनुकूलन और वेब 3 विकास टूलिंग का समर्थन करना।<br></br><a className="cla" href="https://www.semiotic.ai/" target="_blank" ><strong>लाक्षणिक</strong></a>- एआई नवाचारों और अनुसंधान एवं विकास के माध्यम से ग्राफ नेटवर्क को बढ़ाना।<br></br><a className="cla"href="https://www.the-guild.dev/" target="_blank"><strong>गिल्ड</strong></a> - बिल्डिंग सबग्राफ टूलिंग और ग्राफक्यूएल एपीआई सुधार विकसित करना।<br></br><a className="cla" href="https://graphops.xyz/" target="_blank"><strong>ग्राफ़ऑप्स</strong></a> - ग्राफ़ प्रोटोकॉल के माध्यम से ब्लॉकचैन डेटा निकालना, बदलना और सेवा करना।<br></br><a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank"><strong>मेसारी</strong></a> - सूचित निर्णयों और निवेश के लिए पारदर्शिता लाना और उपकरण बनाना।<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonCoreDevsChat}><strong>कोर देव</strong></button><br></br><br></br>सभी कोर देव कॉल्स को <a className="cla" href="https://www.youtube.com/playlist?list=PLTqyKgxaGF3Tj_A6eqV8V_aQoRwd2oHa_" target="_blank">यहां</a> देखें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleFigment() {
  const message = this.createChatbotMessage(<a>Figment टोरंटो में स्थित एक वेंचर फंडेड, पंजीकृत कनाडाई कंपनी है। दुनिया के सबसे बड़े जीआरटी धारकों को सेवा प्रदान करना। 30+ वर्षों के अनुभव के साथ सफलतापूर्वक इंटरनेट इंफ्रास्ट्रक्चर कंपनियों को स्केल करना।<hr></hr><strong>स्टेकिंग</strong> - फिगमेंट प्रूफ-ऑफ़-स्टेक (पीओएस) वैलिडेटर्स के अत्यधिक सुरक्षित नेटवर्क का संचालन करता है जो टोकन धारकों को नेटवर्क सुरक्षित करने, शासन में भाग लेने और प्रतिफल अर्जित करने में सक्षम बनाता है।<br></br>फिगमेंट के साथ स्टेकिंग के बारे में अधिक जानने के लिए, <a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank" rel="noreferrer">यहां</a> देखें।<br></br><br></br><strong>सॉफ्टवेयर</strong>- फिगमेंट का डेटाहब प्लेटफॉर्म डेवलपर्स को प्रोटोकॉल विशेषज्ञ बने बिना ब्लॉकचैन की सबसे शक्तिशाली और अनूठी विशेषताओं का उपयोग करने देता है, जिससे नए वेब 3 अनुप्रयोगों के विकास में तेजी आती है।<br></br>फिगमेंट के डाटाहब प्लेटफॉर्म के बारे में अधिक जानने के लिए, <a className="cla" href="https://datahub.figment.io/" target="_blank" rel="noreferrer">यहां</a> देखें।<br></br><br></br><strong>Capital</strong> - फिगमेंट कैपिटल नई, अत्यधिक नवीन PoS परियोजनाओं के लिए सीड फंडिंग और विकास सहायता प्रदान करता है।<br></br>सबग्राफ का उपयोग करने वाले डेवलपर आसानी से DataHub के भीतर अपने सबग्राफ की निगरानी कर सकते हैं। यह डेवलपर्स को उनके सबग्राफ प्रदर्शन और विश्वसनीयता में सुधार करने में मदद करता है।<br></br>डेटाहब, फिगमेंट का वेब 3 ब्लॉकचेन डेवलपर प्लेटफॉर्म, द ग्राफ से सबग्राफ डेटा को एकीकृत करता है। इससे डेवलपर्स के लिए अपने वेब 3 टेक स्टैक के अधिक घटकों को एक ही स्थान पर एक्सेस करना आसान हो जाता है।<br></br>आप <a className="cla" href="https://www.figment.io/resources/subgraph-linking-is-now-live-on-datahub-2" target="_blank" rel="noreferrer">यहां</a> डेटाहब पर सबग्राफ लिंकिंग के बारे में पढ़ सकते हैं।<hr></hr>फिगमेंट की मुख्य विकास टीम ने द ग्राफ को कॉसमॉस पारिस्थितिकी तंत्र के साथ एकीकृत किया। इस एकीकरण ने द ग्राफ द्वारा संचालित पूरी तरह से विकेंद्रीकृत तरीके से कॉसमॉस इकोसिस्टम डेटा के अनुक्रमण और क्वेरी के लिए अनुमति दी।<br></br>आप ब्रिंगिंग द ग्राफ टू द कॉसमॉस इकोसिस्टम के बारे में <a className="cla" href="https://www.figment.io/resources/the-graph-and-cosmos" target="_blank" rel="noreferrer">यहां</a> पढ़ सकते हैं।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSemiotic() {
  const message = this.createChatbotMessage(<a>लाक्षणिक लैब्स ब्लॉकचेन पर विकेन्द्रीकृत बाजारों के लिए स्वचालित निर्णय लेने वाले उपकरणों का निर्माण कर रही है। उनका मानना है कि एआई और क्रिप्टोग्राफी का अभिसरण भविष्य के विकेंद्रीकृत इंटरनेट वेब3 को आगे बढ़ाएगा। गो और वैज्ञानिक खोज जैसे खेल। डीप आरएल का उपयोग करके, वे स्वायत्त एजेंट विकसित करते हैं जो द्विपक्षीय या नीलामी प्रकार के सौदों में मूल्य और अन्य शर्तों पर बातचीत कर सकते हैं। विकेंद्रीकृत नेटवर्क के कल्याण में सुधार के लिए पेशेवर व्यवहार वाले एजेंटों को प्रशिक्षित किया जा सकता है।<br></br>एआई एजेंटों को कुशलता से प्रशिक्षित करने और बेंचमार्क के खिलाफ उनके प्रदर्शन का परीक्षण करने के लिए सिमुलेशन वातावरण आवश्यक हैं।<br></br>वे विकेंद्रीकृत बाजारों के अर्थशास्त्र पर कब्जा करने और नेटवर्क में भाग लेने वाले कई एजेंटों को प्रशिक्षित करने के लिए यथार्थवादी सिमुलेटर विकसित करते हैं।<br></br>सिमुलेशन वातावरण वास्तविक दुनिया की विफलताओं से पहले कमजोरियों (जैसे प्रतिकूल हमलों) को खोजने के लिए नए प्रोटोकॉल के तनाव परीक्षण में भी उपयोगी होते हैं।<br></br>होमोमॉर्फिक एन्क्रिप्शन एन्क्रिप्टेड डेटा पर संगणना करना संभव बनाता है।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMessari() {
  const message = this.createChatbotMessage(<a>मेसारी उच्च-गुणवत्ता, सटीक, जटिल और मानकीकृत प्रोटोकॉल सबग्राफ को विकसित करने और बनाए रखने के लिए अपनी डेवलपर प्रतिभा और डोमेन विशेषज्ञता का योगदान देता है। सभी सबग्राफ ओपन सोर्स होंगे और व्यापक समुदाय के लिए उपलब्ध होंगे। प्रत्येक सबग्राफ को विकेंद्रीकृत नेटवर्क में माइग्रेट किया जाएगा। इसके अलावा, मेसारी सबग्राफ वर्किंग ग्रुप का नेतृत्व करेगा, कोर प्रोटोकॉल प्रयासों को सूचित करने में मदद करने के लिए फीडबैक प्रदान करेगा, सबग्राफ सर्वोत्तम प्रथाओं को साझा करेगा और किसी भी प्रोटोकॉल के लिए समुदाय-व्यापी मानक बनाने में मदद करेगा।<br></br><br></br>आप <a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank" rel="noreferrer">यहां</a> द ग्राफ ईकोसिस्टम में मेसारी की भूमिका के बारे में अधिक जान सकते हैं।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphQLApi() {
  const message = this.createChatbotMessage(<a><strong>ग्राफक्यूएल एपीआई</strong><br></br><br></br>यह <a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/" target="_blank" rel="noreferrer">मार्गदर्शिका</a> ग्राफ़िकल क्वेरी एपीआई की व्याख्या करती है जिसका उपयोग ग्राफ़ प्रोटोकॉल के लिए किया जाता है।<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#queries" target="_blank" rel="noreferrer">प्रश्न</a></strong> - आपके सबग्राफ स्कीमा में आप संस्थाओं नामक प्रकारों को परिभाषित करते हैं। प्रत्येक एंटिटी प्रकार के लिए, एक एंटिटी और एंटिटी फ़ील्ड शीर्ष-स्तरीय क्वेरी प्रकार पर उत्पन्न होगी। ध्यान दें कि ग्राफ़ का उपयोग करते समय क्वेरी को ग्राफ़िकल क्वेरी के शीर्ष पर शामिल करने की आवश्यकता नहीं है।<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#sorting" target="_blank" rel="noreferrer">छँटाई</a></strong> - किसी संग्रह की क्वेरी करते समय, ऑर्डरबी पैरामीटर का उपयोग किसी विशिष्ट विशेषता द्वारा क्रमबद्ध करने के लिए किया जा सकता है। इसके अतिरिक्त, ऑर्डर डायरेक्शन का उपयोग सॉर्ट दिशा निर्दिष्ट करने के लिए किया जा सकता है, आरोही के लिए एएससी या अवरोही के लिए डीएससी।<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#pagination" target="_blank" rel="noreferrer">पेजिनेशन</a></strong> - किसी संग्रह को क्वेरी करते समय, पहले पैरामीटर का उपयोग संग्रह की शुरुआत से पेजिनेट करने के लिए किया जा सकता है। यह ध्यान देने योग्य है कि डिफ़ॉल्ट सॉर्ट क्रम आईडी द्वारा आरोही अल्फ़ान्यूमेरिक क्रम में है, निर्माण समय के अनुसार नहीं।<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#filtering" target="_blank" rel="noreferrer">फ़िल्टरिंग</a></strong> - विभिन्न गुणों के लिए फ़िल्टर करने के लिए आप अपनी क्वेरी में वेयर पैरामीटर का उपयोग कर सकते हैं। आप जहां पैरामीटर के भीतर कई मानों को फ़िल्टर कर सकते हैं।<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#time-travel-queries" target="_blank" rel="noreferrer">समय-यात्रा प्रश्न</a></strong> - आप न केवल नवीनतम ब्लॉक के लिए अपनी संस्थाओं की स्थिति पूछ सकते हैं, जो डिफ़ॉल्ट रूप से है, बल्कि अतीत में मनमाने ब्लॉक के लिए भी है। जिस ब्लॉक पर एक क्वेरी होनी चाहिए, उसे या तो उसके ब्लॉक नंबर या उसके ब्लॉक हैश द्वारा प्रश्नों के अपूर्ण क्षेत्रों में एक ब्लॉक तर्क शामिल करके निर्दिष्ट किया जा सकता है।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleParticipantUpdate() {
  const message = this.createChatbotMessage(<a>नवीनतम GRT प्रतिभागी अपडेट में ग्राफ़ की Q3 2022 की झलकियाँ शामिल हैं, जिनमें प्रमुख आँकड़े, घोषणाएँ और मील के पत्थर शामिल हैं। रिकॉर्डिंग देखें और द ग्राफ इकोसिस्टम के भीतर हो रहे सभी निर्माण और नवाचारों के बारे में जानें।<br></br><br></br><Embed className="embed" isDark url='https://youtu.be/58el3_9oJ6Q'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}



handleTheGuild() {
  const message = this.createChatbotMessage(<a>गिल्ड का उन्नत ओपन सोर्स इकोसिस्टम एक मॉड्यूलर, ओपन सोर्स और पूर्ण प्लेटफॉर्म के साथ आपके एपीआई इंफ्रास्ट्रक्चर के लिए आपकी जरूरत की हर चीज को कवर करता है।<hr></hr><strong>पारिस्थितिक तंत्र</strong><br></br><br></br>उनके उन्नत, मॉड्यूलर समाधानों को धीरे-धीरे व्यक्तिगत ओपन सोर्स लाइब्रेरी या पूर्ण एकीकृत एपीआई प्लेटफॉर्म के रूप में अपनाया जा सकता है। टिकाऊ, ओपन सोर्स एपीआई टूल्स के अपने सूट का अन्वेषण करें जिसमें आपके एपीआई इंफ्रास्ट्रक्चर को स्केल करने के लिए आवश्यक सब कुछ शामिल है।<br></br><br></br>आप <a className="cla" href="https://www.the-guild.dev/about-us" target="_blank" rel="noreferrer">यहां</a> द गिल्ड के बारे में अधिक जान सकते हैं।<br></br><br></br>आप <a className="cla" href="https://www.the-guild.dev/services" target="_blank" rel="noreferrer">यहां</a> उनके द्वारा प्रदान की जाने वाली सेवाओं के बारे में अधिक जान सकते हैं।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphOps() {
  const message = this.createChatbotMessage(<a>ग्राफ़ऑप्स वेब के भविष्य का निर्माण कर रहे हैं। उनका मिशन है: हम एक बिना सेंसर, न्यायसंगत और स्व-संप्रभु वेब बनाने के मिशन से प्रेरित हैं। सार्वजनिक डेटा उस मिशन के केंद्र में है, और हम अपनी दुनिया के लिए संस्थानों और अनुप्रयोगों की अगली बड़ी लहर को सशक्त बनाने के लिए खुले डेटा मानकों और प्रोटोकॉल का निर्माण करते हैं।<br></br><br></br>ग्राफऑप्स एक ब्लॉकचेन डेटा इन्फ्रास्ट्रक्चर कंपनी है। वे ग्राफ़ प्रोटोकॉल के माध्यम से ब्लॉकचेन डेटा को निकालते, रूपांतरित और सेवा प्रदान करते हैं।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphDay() {
  const message = this.createChatbotMessage(<a>यहां 2 जून 2022 को सैन फ़्रांसिस्को के ऐतिहासिक पैलेस ऑफ़ फाइन आर्ट्स में हुए सबसे हालिया ग्राफ़ दिवस पर एक संक्षिप्त विवरण दिया गया है।<hr></hr>संपूर्ण घटना के बारे में अधिक जानने के लिए <a className="cla" href="https://thegraph.com/graph-day/2022/" target="_blank" rel="noreferrer">ग्राफ़ डे</a> और <a className="cla" href="https://thegraph.com/graph-hack/2022/" target="_blank" rel="noreferrer">ग्राफ़ हैक</a> पर जाएँ।<hr></hr>ग्राफ़ समुदाय शामिल होने और वेब3, डैप, प्रोटोकॉल और इंटरनेट के भविष्य पर ध्यान केंद्रित करने में सक्षम था। प्रमुख प्रोटोकॉल और डैप डेवलपर्स ने दिखाया कि कैसे वेब3 समुदाय मानव समन्वय के बिल्कुल नए रूपों का नेतृत्व कर रहा है।<br></br><br></br>द ग्राफ फाउंडेशन के निदेशक ईवा बेलीन द्वारा स्वागत किया गया। द ग्राफ के सह-संस्थापक और एज एंड नोड के सीईओ यानिव ताल द्वारा एक प्रेरणादायक बातचीत के बाद। इसके बाद समुदाय को 'विकेंद्रीकरण क्यों मायने रखता है' के बारे में एक ग्राफ प्रस्तुति दी गई। फिर एक के बाद एक रोमांचक घोषणाएं होने लगीं:<br></br>होस्ट की गई सेवा को समाप्त करने की घोषणा<br></br>सबस्ट्रीम घोषणा<br></br>जीईओ लॉन्च घोषणा<br></br>समुदाय को तब डायना चेन, कैमिला रामोस, क्रिस इविंग और डेरेक मेयर के साथ एक पैनल वार्ता के लिए माना गया था। -"यह एक गांव लेता है"।<br></br><br></br>आप ग्राफ डे पर GRTiQ पॉडकास्ट और टेगन क्लाइन के साथ ग्राफ हैक सुन सकते हैं, जो इवेंट से ठीक पहले <a className="cla" href="https://www.grtiq.com/grtiq-podcast-special-release-graph-day/" target="_blank" rel="noreferrer">यहां</a> हुआ था।<br></br><br></br>नीचे दिए गए द ग्राफ डे 2022 लाइवस्ट्रीम से इंटरनेट के भविष्य को देखें क्योंकि इसका लाइव अनावरण किया गया है।<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=yLQmdM5DWSk&list=PLTqyKgxaGF3T2Ginisuf2nUY6yDi_WbT3&index=11'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsTheWeb() {
  const message = this.createChatbotMessage(<a>वेब पिछले कुछ वर्षों में बहुत विकसित हुआ है, और आज इसके अनुप्रयोग अपने शुरुआती दिनों से लगभग अपरिचित हैं। वेब के विकास को अक्सर तीन अलग-अलग चरणों में विभाजित किया जाता है: वेब1, वेब2 और वेब3।<hr></hr><strong>वेब1</strong><br></br> - वेब 1.0 वेब का पहला पुनरावृति था। अधिकांश प्रतिभागी सामग्री के उपभोक्ता थे, और निर्माता आमतौर पर डेवलपर थे जो ऐसी वेबसाइटें बनाते हैं जिनमें मुख्य रूप से पाठ या छवि प्रारूप में दी गई जानकारी होती है। वेब 1.0 लगभग 1991 से 2004 तक चला।<br></br>वेब 1.0 में गतिशील HTML के बजाय स्थिर सामग्री परोसने वाली साइटें शामिल थीं। डेटा और सामग्री को एक डेटाबेस के बजाय एक स्थिर फ़ाइल सिस्टम से परोसा गया था, और साइट्स में बहुत अधिक अन्तरक्रियाशीलता नहीं थी। आप वेब 1.0 को रीड-ओनली वेब के रूप में सोच सकते हैं।<br></br><br></br><strong>वेब2</strong><br></br> - हम में से अधिकांश ने मुख्य रूप से वेब को उसके वर्तमान स्वरूप में अनुभव किया है, जिसे आमतौर पर वेब2 कहा जाता है। आप वेब2 को इंटरैक्टिव और सोशल वेब के रूप में सोच सकते हैं।<br></br>वेब2 दुनिया में, निर्माण प्रक्रिया में भाग लेने के लिए आपको डेवलपर होने की आवश्यकता नहीं है। कई ऐप इस तरह से बनाए गए हैं कि कोई भी आसानी से क्रिएटर बन सकता है।<br></br>यदि आप एक विचार तैयार करना चाहते हैं और इसे दुनिया के साथ साझा करना चाहते हैं, तो आप कर सकते हैं। अगर आप एक वीडियो अपलोड करना चाहते हैं और लाखों लोगों को इसे देखने, इसके साथ बातचीत करने और उस पर टिप्पणी करने की अनुमति देना चाहते हैं, तो आप वह भी कर सकते हैं।<br></br>Web2 वास्तव में सरल है, और इसकी सादगी के कारण दुनिया भर में अधिक से अधिक लोग निर्माता बन रहे हैं। वेब अपने मौजूदा स्वरूप में वास्तव में कई मायनों में बहुत अच्छा है, लेकिन कुछ ऐसे क्षेत्र हैं जहां हम बहुत बेहतर कर सकते हैं।<br></br><br></br><strong>वेब3</strong><br></br> - वेब2 और वेब3 के बीच कुछ मूलभूत अंतर हैं, लेकिन विकेंद्रीकरण इसके मूल में है।<br></br>वेब 3 में, डेवलपर आमतौर पर ऐसे एप्लिकेशन नहीं बनाते और तैनात नहीं करते हैं जो एक सर्वर पर चलते हैं या जो अपने डेटा को एक ही डेटाबेस में स्टोर करते हैं (आमतौर पर एक क्लाउड प्रदाता द्वारा होस्ट और प्रबंधित किया जाता है)।<br></br>इसके बजाय, वेब 3 एप्लिकेशन या तो ब्लॉकचेन पर चलते हैं, कई पीयर टू पीयर नोड्स (सर्वर) के विकेंद्रीकृत नेटवर्क, या दोनों का एक संयोजन जो एक क्रिप्टोइकोनॉमिक प्रोटोकॉल बनाता है। इन ऐप्स को अक्सर dapps (विकेन्द्रीकृत ऐप्स) के रूप में संदर्भित किया जाता है, और आप देखेंगे कि वेब3 स्पेस में अक्सर इस शब्द का उपयोग किया जाता है।<br></br><br></br>वेब1, वेब2 और वेब3 के बारे में अधिक जानने के लिए, <a className="cla" href="https://www.freecodecamp.org/news/what-is-web3/" target="_blank">यहां</a> पढ़ें। 
  
   </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoinbase() {
  const message = this.createChatbotMessage(<a><a className="cla" href="https://www.coinbase.com/wallet" target="_blank">कॉइनबेस वॉलेट</a> के साथ अपने जीआरटी टोकन कैसे सौंपें<br></br><br></br>इस लेख में यह आपको सिखाएगा कि कॉइनबेस वॉलेट का उपयोग करके, ग्राफ़ प्रोटोकॉल के भीतर अपने GRT टोकन को कैसे प्रत्यायोजित किया जाए।<br></br><br></br>ग्राफट्रोनॉट्स द्वारा बनाई गई गाइड को पढ़ने के लिए, <a className="cla" href="https://medium.com/@OG-ग्राफट्रोनॉट्स/how-to-delegate-your-grt-tokens-with-coinbase-wallet-85168f84e95e" target="_blank">यहां</a> देखें। या यदि आप एक वीडियो ट्यूटोरियल देखना पसंद करते हैं, तो वह आपको नीचे मिलेगा।<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCryptocurrencies() {
  const message = this.createChatbotMessage(<a>नाम क्रिप्टोग्राफी और मुद्रा का एक संयोजन या पोर्टमैंटो है। पारंपरिक मुद्राओं (आमतौर पर "फिएट मुद्राओं" के रूप में संदर्भित) के विपरीत, जो भौतिक बिलों और सिक्कों का उपयोग करते हैं, क्रिप्टोकरेंसी पूरी तरह से डिजिटल हैं। किसी भी अन्य मुद्रा की तरह, आप सामान और सेवाओं को खरीदने के लिए क्रिप्टोकरेंसी का उपयोग कर सकते हैं और आप इसे दुनिया भर में मित्रों और परिवार के बीच स्थानांतरित कर सकते हैं। हालाँकि, क्रिप्टोक्यूरेंसी में कुछ अतिरिक्त विशेषताएं हैं जो इसे पारंपरिक मुद्राओं से अलग करती हैं।<br></br><br></br>जब आप फिएट करेंसी को बैंक में जमा करते हैं, तो आप अनिवार्य रूप से उस बैंक को अपना पैसा उधार दे रहे होते हैं और जब आप उससे मांगते हैं तो उसे वापस देने के लिए उन पर भरोसा करते हैं। जबकि यह आम तौर पर दोनों पक्षों के लिए अच्छा काम करता है, बैंक आपके पैसे को दूसरों को उधार देकर और इन ऋणों पर ब्याज वसूल कर लाभ कमाते हैं। इसके अलावा, बैंक अतिरिक्त शुल्क लेते हैं, जैसे निकासी शुल्क या मासिक खाता शुल्क, और न्यूनतम शेष राशि की आवश्यकता भी हो सकती है।<br></br><br></br>एक पारंपरिक बैंक को केंद्रीकृत माना जाएगा, क्रिप्टोक्यूरेंसी विकेन्द्रीकृत है जिसका अर्थ है कि इसमें एक अकेला व्यक्ति सब कुछ नियंत्रित नहीं करता है - वास्तव में, ऐसे हजारों लोग हैं जो ब्लॉकचेन पर होने वाले सभी लेनदेन को मान्य करने में मदद करते हैं - और इसका मतलब है कि आपके पास एक भरोसेमंद वातावरण, बेहतर डेटा सामंजस्य और कमजोरी के कम बिंदु। यह कहने का एक शब्दशः तरीका है कि आप अपनी संपत्ति को नियंत्रित करते हैं।<br></br><br></br>क्रिप्टोक्यूरेंसी की बढ़ी हुई गोपनीयता, सुरक्षा, पोर्टेबिलिटी और पारदर्शिता का मतलब है कि लेन-देन में हेरफेर करने, पैसे की आपूर्ति बदलने या खेल के बीच में नियमों को समायोजित करने के लिए कोई जगह नहीं है। क्रिप्टोकरेंसी कोई संगठन नहीं है, वे आपके फंड को नियंत्रित नहीं करते हैं; आप अपने खुद के बैंक हो सकते हैं।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsABlockchain() {
  const message = this.createChatbotMessage(<a>ब्लॉकचैन को एक रिकॉर्ड बुक के रूप में माना जा सकता है जिसका उपयोग चेकबुक रजिस्टर के साथ चेकबुक खर्च को ट्रैक करने के तरीके से क्रिप्टोकुरेंसी लेनदेन को ट्रैक करने के लिए किया जाता है। ब्लॉकचैन ईटीएच या बिटकॉइन जैसी क्रिप्टोकरेंसी के साथ किए गए लेनदेन को रिकॉर्ड करने के लिए एक प्रणाली है। लेन-देन डेटा कई लेनदेन के ब्लॉक में संग्रहीत होता है। एक ब्लॉक भर जाने के बाद, एक नया ब्लॉक बनाया जाता है जो पिछले ब्लॉक को संदर्भित करता है और पिछले ब्लॉक से जुड़ा होता है; इसलिए ब्लॉकचैन शब्द।<br></br><br></br>एथेरियम जैसे कुछ ब्लॉकचेन को कंप्यूटर के पीयर-टू-पीयर नेटवर्क का उपयोग करके बनाए रखा जाता है, जिससे किसी भी उपयोगकर्ता को दुनिया में कहीं से भी ब्लॉकचेन को होस्ट और एक्सेस करने की अनुमति मिलती है। जैसे ही लेन-देन होता है, इसे ब्लॉकचैन नेटवर्क में प्रत्येक उपयोगकर्ता की रिकॉर्ड बुक में रिकॉर्ड और वितरित किया जाता है।<br></br><br></br>ये अलग-अलग कंप्यूटर जब एक साथ उपयोग किए जाते हैं तो सभी ब्लॉकचेन डेटा को स्टोर करने के लिए एक वैश्विक विकेंद्रीकृत डेटाबेस बनाते हैं। विकेंद्रीकृत का अर्थ है कि डेटा को एक स्थान पर प्रबंधित करने और किसी एक कंपनी या व्यक्ति द्वारा नियंत्रित करने के बजाय, इसे नेटवर्क का उपयोग करने वाले सभी लोगों द्वारा प्रबंधित किया जाता है।<br></br><br></br>ब्लॉकचेन को अपरिवर्तनीय होने के लिए डिज़ाइन किया गया है, जिसका अर्थ है अपरिवर्तनीय। ब्लॉकचैन में कुछ रिकॉर्ड किए जाने के बाद, इसे बदला या उलटा नहीं किया जा सकता है। इसका अर्थ है कि ब्लॉकचेन पर कोई भी लेन-देन स्थायी है, और उनका रिकॉर्ड किसी के भी देखने के लिए हमेशा उपलब्ध रहेगा। ब्लॉकचेन डेटा संरचना के साथ संयुक्त विकेंद्रीकरण घटनाओं की एक स्थायी समयरेखा बनाता है।<br></br><br></br>कुछ बैंकों के लिए आवश्यक है कि आप अपने खाते में एक महीने से अधिक पुराने लेन-देन देखने के लिए उनसे संपर्क करें। ब्लॉकचेन का उपयोग करने से आपके बैंक से संपर्क करने की आवश्यकता समाप्त हो जाएगी क्योंकि आपके सभी लेन-देन आपके देखने के लिए पहले से ही उपलब्ध होंगे।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSafe() {
  const message = this.createChatbotMessage(<a><strong>क्या क्रिप्टो सुरक्षित है?</strong><br></br>क्रिप्टोक्यूरेंसी की सुरक्षा एक गर्मागर्म बहस का विषय है। एक ओर, समर्थकों का तर्क है कि क्रिप्टोक्यूरेंसी पारंपरिक मुद्रा की तुलना में अधिक सुरक्षित है क्योंकि यह सरकारी नियंत्रण या हेरफेर के अधीन नहीं है। दूसरी ओर, संशयवादियों का दावा है कि क्रिप्टोकरंसी हैकिंग और चोरी की चपेट में है।<br></br><br></br>अंततः, क्रिप्टोक्यूरेंसी की सुरक्षा व्यक्तिगत उपयोगकर्ता की सुरक्षा प्रथाओं और क्रिप्टोक्यूरेंसी नेटवर्क की सुरक्षा पर निर्भर करती है। उदाहरण के लिए, यदि आप अपनी क्रिप्टोकरेंसी को एक ऐसे डिजिटल वॉलेट में स्टोर करते हैं जो पासवर्ड से सुरक्षित नहीं है, तो इसके हैक होने का खतरा है।<br></br><br></br>इसी तरह, यदि नेटवर्क सुरक्षित नहीं है, तो आपकी क्रिप्टोकरेंसी साइबर अपराधियों द्वारा चुराई जा सकती है। इस प्रकार, क्रिप्टोक्यूरेंसी में निवेश करने से पहले अपना शोध करना और इसे संग्रहीत या उपयोग करते समय सावधानी बरतना महत्वपूर्ण है।<br></br><br></br>क्रिप्टो के लाभ और कमियों के बारे में जानने के लिए, <a className="cla" href="https://www.abcmoney.co.uk/2022/03/16/is-cryptocurrency-safe/" target="_blank" rel="noreferrer">यहाँ</a> पढ़ें। <hr></hr><strong>क्या ब्लॉकचेन सुरक्षित है?</strong><br></br>क्रिप्टोकरेंसी के साथ-साथ जिन्हें नकली या हैक नहीं किया जा सकता है, ब्लॉकचैन प्रौद्योगिकियां उनकी उपयोगिता के अतिरिक्त अविश्वसनीय सुरक्षा प्रदान करती हैं। ब्लॉकचेन की विकेन्द्रीकृत प्रकृति और उनके भीतर जानकारी को बदलने में असमर्थता ब्लॉकचैन को छेड़छाड़, हैकिंग और धोखाधड़ी लेनदेन के प्रतिरोधी होने में सहायता करती है। पूरे नेटवर्क में ब्लॉकचैन के कई वितरित संस्करणों के साथ, एक हैकर को कोई वास्तविक नुकसान करने के लिए अनगिनत कंप्यूटरों पर नियंत्रण हासिल करने की आवश्यकता होगी। यह ब्लॉकचेन को हैक करना लगभग असंभव बना देता है।<br></br><br></br>दुनिया को सत्ता में लाने के लिए ब्लॉकचेन तकनीक को लागू करने से सभी के लिए तेज, अधिक सुरक्षित और अधिक पारदर्शी बाजार की अनुमति मिलती है।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleEthereum() {
  const message = this.createChatbotMessage(<a>एथेरियम 2013 में विटालिक ब्यूटिरिन द्वारा विकसित एक प्रोग्रामेबल ब्लॉकचेन तकनीक है। एथेरियम उपयोगकर्ताओं को क्रिप्टोकरेंसी भेजने और प्राप्त करने, डीएपी के रूप में जाने वाले विकेंद्रीकृत अनुप्रयोगों तक पहुंचने और बनाने, स्टेकिंग के माध्यम से पुरस्कार अर्जित करने और बहुत कुछ करने की अनुमति देता है। वित्तीय सेवाओं तक मुफ्त पहुंच और अधिक निजी और विकेन्द्रीकृत इंटरनेट एथेरियम फाउंडेशन के कुछ प्रमुख लक्ष्य हैं। अपनी अवधारणा के बाद, एथेरियम ने विकेन्द्रीकृत शासन की एक प्रणाली को लागू किया जिसमें किसी एक व्यक्ति का नियंत्रण नहीं था। स्वामित्व की यह कमी सरकारों या संगठनों के लिए एथेरियम पर सेवाओं तक आपकी पहुंच से इनकार करना लगभग असंभव बना देती है। एथेरियम पर एप्लिकेशन को उनका उपयोग करने के लिए आपके सभी व्यक्तिगत विवरणों की आवश्यकता नहीं होती है। यह उपयोगकर्ताओं को उनकी गोपनीयता पर अधिक नियंत्रण देता है और उन्हें हर लेनदेन में सुरक्षित रखता है।<br></br><br></br>एथेरियम किसी के लिए भी खुला है, जब तक उनके पास लूपिंग स्मार्ट वॉलेट की तरह एथेरियम वॉलेट तक पहुंच है। आप एथेरियम वॉलेट को एक बैंकिंग ऐप के रूप में सोच सकते हैं, बिना बैंक के जो आपके फंड को नियंत्रित करता है। केवल एक इंटरनेट कनेक्शन के साथ, एथेरियम हर किसी के उपयोग के लिए उपलब्ध है, दुनिया भर में बैंकिंग सेवाओं तक पहुंच प्रदान करता है।<br></br><br></br>एथेरियम का पीयर-टू-पीयर नेटवर्क एक बिचौलिए की आवश्यकता को समाप्त करता है और उपयोगकर्ताओं को भुगतान और अन्य समझौतों के लिए एक दूसरे के साथ सीधे बातचीत करने की अनुमति देता है। स्मार्ट अनुबंधों के लिए धन्यवाद, उपयोगकर्ताओं के पास एक अंतर्निहित गारंटी है कि सौदे केवल तभी होंगे जब दोनों पक्ष सहमत होंगे।<br></br><br></br>एथेरियम ब्लॉकचेन पर सभी लेनदेन देशी क्रिप्टोक्यूरेंसी ईथर, या ईटीएच द्वारा संचालित होते हैं। जब भी ईटीएच भेजा जाता है या डैप का उपयोग किया जाता है, तो उपयोगकर्ता एथेरियम नेटवर्क का उपयोग करने के लिए ईटीएच में एक छोटा सा शुल्क चुकाते हैं। इन शुल्कों का उपयोग ब्लॉकचैन पर क्रियाओं को सत्यापित करने के लिए खनिकों को पुरस्कृत करने में मदद के लिए किया जाता है। माइनर्स रिकॉर्ड-कीपर के रूप में कार्य करते हैं, यह सुनिश्चित करते हैं कि कोई भी ब्लॉकचेन को धोखा या हेरफेर नहीं कर रहा है, और इसे सुरक्षित रखता है। इसे कार्य के प्रमाण के रूप में जाना जाता है। एथेरियम का भविष्य ब्लॉकचैन को सुरक्षित करने का एक नया तरीका लाता है जिसमें ब्लॉकचैन के लिए रिकॉर्ड-रखवाले के रूप में कार्य करने के लिए उपयोगकर्ताओं को अनुमति देने के लिए धन प्रतिबद्ध या दांव लगाया जाता है। इसे हिस्सेदारी के प्रमाण के रूप में जाना जाता है।<br></br><br></br>एथेरियम के बारे में अधिक जानने के लिए, <a className="cla" href="https://desk.zoho.com/portal/loopring/en/kb/articles/what-is-ethereum" target="_blank" rel="noreferrer">यहां</a> पढ़ें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOW() {
  const message = this.createChatbotMessage(<a>प्रूफ़ ऑफ़ वर्क (पीओडब्ल्यू) अधिकांश प्रमुख क्रिप्टोकरेंसी के लिए एक सर्वसम्मत एल्गोरिद्म है; यह एक क्रिप्टोक्यूरेंसी के बहीखाता को सुरक्षित करने का एक तरीका है। PoW को Satoshi Nakamoto द्वारा बिटकॉइन ब्लॉकचेन के लिए पेश किया गया था, जो इसे पहली आम सहमति एल्गोरिथम बनाता है, और यह आज तक प्रमुख बना हुआ है।<br></br><br></br>यह पहली बार नहीं था जब हमने पीओडब्ल्यू के बारे में सुना था, हालांकि एडम बैक के हैशकैश ऐप का आविष्कार 1997 में किया गया था और इसने प्रूफ-ऑफ-वर्क फ़ंक्शन का उपयोग किया था। इस प्रणाली के महान लाभों में से एक यह है कि यह दोहरे खर्च को रोकता है। यह शब्द लगभग विशेष रूप से डिजिटल मनी और क्रिप्टोकरंसी के लिए उपयोग किया जाता है क्योंकि आप एक ही भौतिक नकदी को दो बार खर्च नहीं कर सकते हैं, अर्थात; यदि आप एक स्टोर में गए और एक पेय के लिए नकद भुगतान किया तो आप उसी नकदी को एक अलग स्टोर पर इस्तेमाल नहीं कर सकते क्योंकि पहले स्टोर ने कैश रजिस्टर में पैसा लॉक कर दिया था।<br></br><br></br>क्रिप्टोक्यूरेंसी या किसी भी डिजिटल पैसे में, बहुत सारे डेटा को तेजी से और सत्यापन के बिना भेजना संभव है, आपके पास ऐसे लोग होंगे जो कई स्टोरों को विश्वास दिलाने के लिए पर्याप्त तेजी से खर्च कर सकते हैं कि उन्हें भुगतान मिल गया है और बही जल्दी बर्बाद हो जाएगी। एक छोटे पैमाने पर, यह काम कर सकता है, लेकिन जब 10 और 100 के हजारों लोग ब्लॉकचेन पर व्यापार कर रहे हैं तो यह तेजी से गड़बड़ हो जाता है।<br></br><br></br>इतने सारे लोगों के व्यापार करने के इच्छुक लोगों के साथ एक समय में सभी लेन-देन को जोड़ना थकाऊ और अक्षम होगा, इसलिए ये लेन-देन एक ब्लॉक में हो जाते हैं जो पिछले से लिंक करता है और इसका संदर्भ देता है - इस प्रकार ब्लॉकचैन नाम। एक ब्लॉक में जोड़ना मुफ़्त नहीं है, हालांकि, ऐसे उपयोगकर्ता हैं जिन्हें खनिक कहा जाता है जो लेनदेन के प्रत्येक ब्लॉक को मान्य करने में मदद करते हैं। यह एक हैश (डिजिटल फिंगरप्रिंट सोचें) बनाने के लिए कंप्यूटिंग शक्ति और वास्तविक दुनिया की ऊर्जा खर्च करता है, जो कि रिवर्स करना लगभग असंभव है।<br></br><br></br>उच्च कंप्यूटिंग शक्ति के कारण, खनिकों को उनकी सेवाओं के लिए शुल्क का भुगतान किया जाता है, और ब्लॉकों को श्रृंखला में जमा किया जाता है। PoW में क्रिप्टोग्राफी की शक्ति के साथ, यदि आप एक अमान्य लेनदेन करने का प्रयास करते हैं तो यह नेटवर्क द्वारा स्वचालित रूप से अस्वीकार कर दिया जाएगा और आप अभी भी खनिक शुल्क का भुगतान करेंगे। यही इसकी सुंदरता है: अमान्य लेन-देन का प्रयास करना महंगा हो जाता है लेकिन ईमानदारी से कार्य करना लाभदायक होता है।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOS() {
  const message = this.createChatbotMessage(<a>प्रूफ़ ऑफ़ वर्क, प्रूफ़ ऑफ़ स्टेक (PoS) की तरह एक सर्वसम्मत एल्गोरिथम है जो दांव पर लगाए गए सिक्कों की संख्या पर आधारित है। स्टेकिंग एक ब्लॉक वैलिडेटर बनने के लिए सिस्टम में फंड जमा करने को संदर्भित करता है; सत्यापनकर्ता केवल नए ब्लॉक बनाने की प्रक्रिया में भाग ले सकते हैं यदि उनके सिक्के बंद हैं। धन तब संपार्श्विक के रूप में कार्य करता है, जिसका अर्थ है कि एक दुर्भावनापूर्ण सत्यापनकर्ता अपनी जमा राशि खो देगा और नेटवर्क तक पहुंच खो देगा।<br></br><br></br>PoS PoW का एक विकल्प है जो कुछ फायदे और नुकसान के साथ आता है। प्रूफ़ ऑफ़ वर्क में केवल खनिक को पुरस्कृत किया जाता है और हर कोई वैध ब्लॉक जमा करने के लिए प्रतिस्पर्धा कर रहा है, इस प्रकार बहुत सारी ऊर्जा बर्बाद होती है। प्रूफ ऑफ स्टेक मॉडल दांव के आकार और कितने समय तक उन्हें दांव पर लगाया गया है, इस पर विचार करके आम सहमति प्राप्त करता है, फिर सत्यापनकर्ता का चयन करता है जो काफी मात्रा में ऊर्जा और समय बचाता है।<br></br><br></br><table><tr className="indexer-table-header">
  <th><strong>पेशेवरों</strong></th>
  <th><strong>दोष</strong></th>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>दक्षता: ब्लॉकचेन को सुरक्षित करने के लिए बहुत कम ऊर्जा का उपयोग किया जाता है।</td>
  <td>पैमाना: एथेरियम या बिटकॉइन के आकार तक पहुंचने के लिए अभी तक एक PoS सिस्टम होना बाकी है।</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>थ्रूपुट: आपके पास हल करने के लिए जटिल कंप्यूटर समस्याएं नहीं हैं, इसलिए लेन-देन की गति बढ़ जाती है।</td>
  <td>कम सुरक्षित: पीओएस प्रणाली में भाग लेने से जमाखोरी के सिक्कों को 51% हमले के लिए प्रोत्साहित किया जा सकता है। बड़े पर्याप्त ब्लॉकचेन में, इसकी संभावना बहुत कम हो जाती है।</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>निचला प्रवेश स्तर: प्रूफ ऑफ स्टेक मॉडल में भाग लेने के लिए आपको केवल एक बार पैसा खर्च करने की आवश्यकता है। एक PoW सिस्टम के लिए हार्डवेयर उपकरण और निरंतर अपटाइम की आवश्यकता होती है।</td>
  <td>केंद्रीकरण: स्टेकिंग के लिए अधिक टोकन रखने के लिए एक प्रोत्साहन है। कुछ ब्लॉकचेन ने इसे दंडित करना और छोटे सत्यापनकर्ताओं को प्रोत्साहित करना शुरू कर दिया है।</td>
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
  const message = this.createChatbotMessage(<a><strong>सिक्का</strong><br></br>क्रिप्टोक्यूरेंसी में, 'सिक्का' शब्द का उपयोग उस मुद्रा का वर्णन करते समय किया जाता है जो अपने स्वयं के ब्लॉकचेन के लिए मूल है (उदाहरण के लिए, एथेरियम ब्लॉकचैन के लिए ईथर, बिटकॉइन ब्लॉकचेन के लिए बिटकॉइन, आदि ...)। एक सिक्का एक डिजिटल मुद्रा है जिसका उपयोग विभिन्न तरीकों से किया जा सकता है:<br></br>भुगतान के एक रूप के रूप में (उदाहरण के लिए, किसी वस्तु या सेवा के लिए ईटीएच को दूसरे में स्थानांतरित करना), मूल्य का भंडार (उदाहरण के लिए, कुछ बिटकॉइन को किसी के धन के लिए 'सुरक्षित आश्रय' के रूप में देखते हैं), खाते की इकाई (जैसे, एनएफटी जैसे आइटम हो सकते हैं) ETH में कीमत हो) और ब्लॉकचेन के लिए जो प्रूफ-ऑफ-वर्क का उपयोग करते हैं, देशी सिक्के का उपयोग खनिकों को लेनदेन और उत्पादन ब्लॉकों को संसाधित करने के लिए भुगतान करने के लिए भी किया जाता है।<br></br><br></br><strong>टोकन</strong><br></br>जबकि एक सिक्का अपने स्वयं के ब्लॉकचेन का मूल है, एक मौजूदा ब्लॉकचेन पर एक टोकन बनाया जाता है। टोकन के लिए प्रत्येक ब्लॉकचेन का अपना प्रारूप है। उदाहरण के लिए, एथेरियम ब्लॉकचैन पर बनाए गए टोकन में ईआरसी का एक उपसर्ग होता है जिसके बाद एक संख्या (जैसे, ईआरसी -20) होती है। तकनीकी रूप से, कोई भी टोकन बना सकता है, इसलिए खरीदने से पहले हमेशा टोकननॉमिक्स के माध्यम से शोध करने और पढ़ने की सिफारिश की जाती है।<br></br>एक टोकन उपयोग किए जाने वाले मानक के आधार पर प्रतिमोच्य (विनिमेय) या अपूरणीय हो सकता है। एथेरियम पर, टोकन मानकों के कुछ उदाहरण हैं:<br></br><br></br>ईआरसी-20<br></br>वैकल्पिक टोकन के लिए आमतौर पर मानक का उपयोग किया जाता है, जो डिजिटल मुद्राओं, स्टेकिंग और वोटिंग के लिए उपयोग किया जाता है।<br></br><br></br>ईआरसी-721<br></br>अपूरणीय टोकन के लिए मानक का उपयोग किया जाता है, जैसे कलाकृति या गीत के लिए NFT।<br></br><br></br>ईआरसी-1155<br></br>मानक जो अधिक कुशल ट्रेडों और लेन-देन के बंडलिंग की अनुमति देता है। यह किसी भी संख्या में बदलने योग्य और अपूरणीय टोकन प्रकारों का प्रतिनिधित्व और नियंत्रण कर सकता है। मतलब, ईआरसी-1155 टोकन ईआरसी-20 और ईआरसी-721 टोकन के समान भूमिका निभा सकता है, और यहां तक कि दोनों एक ही समय में।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStablecoin() {
  const message = this.createChatbotMessage(<a>एक स्थिर मुद्रा एक क्रिप्टोक्यूरेंसी है जिसे एक सुसंगत बाजार मूल्य बनाए रखने के लिए डिज़ाइन किया गया है। जबकि सटीक तंत्र एक से दूसरे में भिन्न हो सकते हैं, स्थिर स्टॉक बाजार की अस्थिरता के लिए कुछ हद तक प्रतिरोधी हैं। उन्हें महत्वपूर्ण मूल्य परिवर्तनों का अनुभव नहीं करना चाहिए क्योंकि उनके मूल्य अक्सर यूएस डॉलर जैसी किसी अन्य संपत्ति से जुड़े होते हैं।<br></br><br></br>एक स्थिर मुद्रा का उपयोग करने का मुख्य विचार यह है कि आप फिएट और क्रिप्टोक्यूरेंसी दुनिया दोनों का लाभ प्राप्त करते हैं। आप क्रिप्टो बाजारों की अस्थिर प्रकृति के खिलाफ बचाव कर सकते हैं और बैंक या ब्रोकर की तुलना में बेहतर ब्याज अर्जित करने के लिए अपने स्थिर सिक्कों को ऋण दे सकते हैं।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCEX() {
  const message = this.createChatbotMessage(<a>एक केंद्रीकृत एक्सचेंज (सीईएक्स) ऑर्डर बुक बनाए रखने के द्वारा उपयोगकर्ताओं के बीच ट्रेडों को सुविधाजनक बनाने का एक तरीका है; व्यक्तिगत निवेशकों द्वारा रखे गए खरीद और बिक्री के ऑर्डर का संग्रह। ऑर्डर एक निश्चित मूल्य पर क्रिप्टो की एक निश्चित मात्रा को खरीदने या बेचने के लिए हैं - एक CEX इन ऑर्डर को एकत्र करेगा और ऑर्डर निष्पादित करेगा।<br></br><br></br>CEX और व्यक्तिगत वॉलेट या DEX के बीच एक बड़ा अंतर यह है कि उपयोगकर्ता वास्तव में एक दूसरे के साथ क्रिप्टो या फिएट का आदान-प्रदान नहीं करते हैं। धनराशि जमा की जाती है और एक्सचेंज संपत्ति की कस्टडी लेता है और मूल रूप से व्यापारी को एक IOU जारी करता है। कम शुल्क और सरल अदला-बदली जैसे इसके फायदे हैं, लेकिन पारदर्शिता की कमी जैसी कमियां भी हैं जो दुर्भावनापूर्ण प्रथाओं जैसे वॉश ट्रेडिंग और मूल्य हेरफेर को सक्षम बनाती हैं।<br></br><br></br>चूंकि सभी फंड एक्सचेंज द्वारा हिरासत में रखे जाते हैं, CEX संभावित हैक के लिए एक प्रमुख लक्ष्य हैं और पिछले कुछ वर्षों में सैकड़ों मिलियन डॉलर के लिए उन्हें कई बार मारा गया है। इसके अतिरिक्त, क्योंकि एक CEX कहीं होस्ट किया गया है, इसमें तकनीकी समस्याएँ या हमले हो सकते हैं जो डाउनटाइम का कारण बन सकते हैं। कुछ मामलों में सरकारी विनियमों के कारण फंड को फ्रीज और जब्त भी किया जा सकता है।<br></br><br></br>जबकि CEX को अपने ग्राहक को जानें (KYC) आयोजित करने की आवश्यकता होगी, यह कर उद्देश्यों के लिए भी उपयोगी है कि यह जानकारी आसानी से उपलब्ध हो और अधिकांश एक्सचेंज आपके लिए आसानी से कर दस्तावेज़ प्रदान कर सकते हैं। यदि आप उन्हें स्वयं नियंत्रित करने में सहज नहीं हैं, तो CEX द्वारा आपके फंड को अपने कब्जे में लेने के फायदे हैं। कुछ उपयोगकर्ताओं ने अपने व्यक्तिगत बटुए में धन जमा किया है और बीज वाक्यांशों को भूल गए हैं या अपनी निजी चाबियां खो दी हैं, जिससे लाखों डॉलर का क्रिप्टो खो गया है।<br></br><br></br>लोकप्रिय CEX के कुछ उदाहरणों में Binance, Coinbase, Huobi और Kucoin शामिल हैं।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDEX() {
  const message = this.createChatbotMessage(<a>एक विकेन्द्रीकृत विनिमय एक सहकर्मी से सहकर्मी बाज़ार है जहाँ लेनदेन सीधे व्यापारियों के बीच होता है। यह क्रिप्टो के विकेंद्रीकृत होने के मूल्यों का मूल है - कोई भी लेन-देन अधिकृत बैंकों, दलालों या किसी अन्य मध्यस्थ द्वारा नहीं किया जाता है। Uniswap और Sushiwap जैसे कुछ लोकप्रिय DEX हैं जो Ethereum L1 पर चलते हैं।<br></br><br></br>एक केंद्रीकृत विनिमय (सीईएक्स) और एक डीईएक्स के बीच सबसे बड़ा अंतर यह है कि एक सीईएक्स फिएट और क्रिप्टो के बीच आदान-प्रदान की अनुमति देगा जबकि एक डीईएक्स नहीं कर सकता। एक CEX मार्जिन ट्रेडों और ऑर्डर बुक द्वारा नियंत्रित किए जाने वाले लिमिट ऑर्डर सेट करने की अनुमति देगा - यह नैस्डैक जैसे स्टॉक एक्सचेंजों के समान है।<br></br><br></br>एक DEX पूरी तरह से स्मार्ट कॉन्ट्रैक्ट्स पर बनाया गया है। वे क्रिप्टोकरंसीज की कीमतों को एल्गोरिथम से स्थापित करते हैं और ट्रेडों को सुविधाजनक बनाने के लिए लिक्विडिटी पूल (एलपी) का उपयोग करते हैं जो सीधे ब्लॉकचेन पर तय होते हैं। एक DEX आमतौर पर ओपन-सोर्स कोड पर बनाया जाता है, जिसका अर्थ है कि यह कैसे काम करता है, इसके बारे में कुछ भी छिपा नहीं है।<br></br><br></br>आप एक DEX पर अधिक विविधता पाएंगे, DeFi शुरुआती टोकन LPs में आने के लिए जगह है। यह जाने-माने टोकन से लेकर यादृच्छिक और कभी-कभी बेकार टोकन तक होता है, निवेश करते समय अपना खुद का शोध करना सुनिश्चित करें। उस ने कहा, हैकिंग का जोखिम बहुत कम हो जाता है क्योंकि DEX पर धन व्यक्तिगत बटुए में संग्रहीत होता है न कि केंद्रीय स्टोर में; CEX के वर्षों में कई हैक हुए हैं।<br></br><br></br>एक सीईएक्स को आपकी पहचान करने के लिए केवाईसी (अपने ग्राहक को जानें) की आवश्यकता होगी, एक डीईएक्स को व्यक्तिगत रूप से पहचान योग्य जानकारी की आवश्यकता नहीं होगी ताकि आप गुमनाम रहें। इसके अतिरिक्त, जबकि कुछ स्थानों को क्रिप्टो खरीद की अनुमति देने से प्रतिबंधित किया जाएगा, एक DEX इन क्षेत्रों के लोगों के लिए संभावना खोलता है।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLayerTwo() {
  const message = this.createChatbotMessage(<a>लेयर 2 (L2) एक सेकेंडरी फ्रेमवर्क या प्रोटोकॉल को संदर्भित करता है जो मौजूदा ब्लॉकचेन के शीर्ष पर बनाया गया है। L2 प्रोटोकॉल का मुख्य लक्ष्य लेन-देन की गति को हल करने में मदद करना और प्रमुख क्रिप्टोक्यूरेंसी नेटवर्क की स्केलिंग कठिनाइयों को हल करना है, एथेरियम के लिए हम इसे एथेरियम स्केलिंग ट्रिलेम्मा - स्केलिंग, स्पीड और विकेंद्रीकरण कहते हैं।<br></br><br></br>एथेरियम वर्तमान में प्रति सेकंड ~ 13 लेनदेन की प्रक्रिया करता है, जबकि मास्टरकार्ड और वीज़ा जैसी क्रेडिट कार्ड कंपनियां 1700 tps से अधिक की प्रक्रिया करती हैं और एक छोटा सा शुल्क लेती हैं। यदि आप छोटे व्यवसायों के लिए स्क्वायर या इसी तरह की सेवाओं से परिचित हैं, तो आप लेनदेन करने के लिए सिर्फ एथेरियम का उपयोग करने की कभी कल्पना नहीं करेंगे। भुगतान करने की कोशिश करने और भुगतान को मान्य करने के लिए 20-30 मिनट प्रतीक्षा करने की कल्पना करें, उस सत्यापन के लिए गैस शुल्क का भुगतान करने का उल्लेख न करें; यहीं से L2 आता है और इसे करने के कुछ तरीके हैं।<br></br><br></br>यह तेज, सस्ता और एथेरियम की तरह ही सुरक्षित है। तो हर कोई ऐसा क्यों नहीं करता? ठीक है, आशावादी रोलअप लंबे अंतिमता/निकासी के समय से ग्रस्त हैं, आम तौर पर 7 दिनों के लिए धन धारण करते हैं। वैलिडियम और प्लाज़्मा ऑफ-चेन हैं और इस प्रकार एथेरियम की सच्ची सुरक्षा का अभाव है। zkRollups इस मामले में सभी दुनिया में सबसे अच्छे हैं कि वे चेन पर तेज़ और सुरक्षित हैं, लेकिन उन्हें विकसित करने के लिए आवश्यक तकनीक बहुत चुनौतीपूर्ण है।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKProof() {
  const message = this.createChatbotMessage(<a>एक शून्य-ज्ञान प्रमाण (zkProof) इस तथ्य को छोड़कर कि यह सच है, बिना किसी अतिरिक्त जानकारी के किसी को कुछ साबित करने में सक्षम हो रहा है। आपको यह साबित करने की आवश्यकता नहीं है कि आपके पास कुछ जानकारी का ज्ञान है, केवल इसे प्रकट करके; चुनौती स्वयं जानकारी प्रकट किए बिना ज्ञान का अधिकार साबित करना है।<hr></hr><strong>आवेदन</strong><br></br><br></br><strong>वित्त:</strong> आप zkProofs का उपयोग ग्राहकों को यह साबित करने के लिए कर सकते हैं कि उनकी गुप्त संख्या ज्ञात सीमा में है। एक उदाहरण के रूप में, एक ऋण आवेदक अपना सटीक वेतन दिए बिना यह साबित कर सकता है कि उसकी आय योग्यता सीमा में है। ऑनलाइन वोटिंग: एक zkProof आपको गुमनाम रूप से वोट करने की अनुमति देगा और सत्यापित करेगा कि आपका वोट अंतिम टैली में शामिल था।<br></br><br></br><strong>प्रमाणीकरण:</strong> आप पासवर्ड जैसी गुप्त जानकारी का आदान-प्रदान किए बिना साइटों में साइन इन कर सकते हैं।<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?time_continue=18&v=fOGdb1CTu5c&feature=emb_logo'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSmartContract() {
  const message = this.createChatbotMessage(<a>एक "स्मार्ट कॉन्ट्रैक्ट" केवल एक प्रोग्राम है जो एथेरियम ब्लॉकचेन पर चलता है। यह कोड और डेटा का एक संग्रह है जो ब्लॉकचेन पर एक विशिष्ट पते पर रहता है; यह एक प्रकार का एथेरियम खाता है। वे एक संतुलन रख सकते हैं और नेटवर्क पर लेनदेन भेज सकते हैं, लेकिन वे उपयोगकर्ता द्वारा नियंत्रित नहीं होते हैं। उन्हें ठीक वही करने के लिए प्रोग्राम किया जाता है जो उन्हें बताया जाता है, नियमों को परिभाषित करते हैं और अपने कोड के आधार पर उन्हें स्वचालित रूप से लागू करते हैं।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNFT() {
  const message = this.createChatbotMessage(<a>सितंबर 2017 में डाइटर शर्ली द्वारा पेश किया गया और जून 2018 में अंतिम रूप दिया गया, ERC-721 को अपूरणीय टोकन के लिए डिज़ाइन किया गया था। वे अद्वितीय हैं, कोई भी टोकन बिल्कुल समान नहीं है और उन्हें एक uint256 चर सौंपा गया है जिसे टोकनआईड कहा जाता है जो अद्वितीय होना चाहिए। यह दुनिया में लगभग किसी भी चीज़ का प्रतिनिधित्व कर सकता है जो अद्वितीय है जिसे साबित करने योग्य स्वामित्व की आवश्यकता है:<br></br><br></br>डिजिटल कला (GIFs, संग्रहणता, संगीत, वीडियो)<br></br>एक डोमेन नाम<br></br>एक कार के लिए कर्म<br></br>एक वास्तविक दुनिया की घटना के लिए टिकट<br></br>टोकन चालान<br></br>कानूनी दस्तावेजों<br></br>मेडिकल रिकॉर्ड<br></br>हस्ताक्षर<br></br><br></br>एनएफटी में विशेष गुण हैं:<br></br><br></br>प्रत्येक टोकन की ढलाई में एक विशिष्ट पहचानकर्ता होता है जो सीधे एक एथेरियम पते से जुड़ा होता है।<br></br>वे अन्य टोकन 1:1 के साथ सीधे विनिमेय नहीं हैं। उदाहरण के लिए, 1 ETH बिल्कुल दूसरे ETH के समान है।<br></br>एनएफटी के मामले में ऐसा नहीं है।<br></br>प्रत्येक टोकन का एक स्वामी होता है और यह जानकारी आसानी से सत्यापित की जा सकती है।<br></br><br></br>वे एथेरियम पर रहते हैं और एथेरियम-आधारित एनएफटी बाजार पर खरीदे और बेचे जा सकते हैं।<br></br><br></br>इसका मतलब है कि अगर आप एनएफटी के मालिक हैं:<br></br>आप इसे अपना साबित कर सकते हैं।<br></br>टोकन यह साबित करता है कि आपकी कॉपी असली है।<br></br>आपकी निजी कुंजी स्वामित्व का प्रमाण है।<br></br>इसमें कोई किसी तरह की हेराफेरी नहीं कर सकता है।<br></br>आप इसे बेच सकते हैं या इसे हमेशा के लिए होल्ड कर सकते हैं</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMining() {
  const message = this.createChatbotMessage(<a>क्रिप्टोक्यूरेंसी माइनिंग ब्लॉकचेन लेनदेन को सत्यापित और मान्य करने की प्रक्रिया को संदर्भित करता है। खनिक गहन क्रिप्टोग्राफिक समीकरणों को हल करते हैं और इस डेटा के साथ ब्लॉकचैन में नए ब्लॉक जमा करते हैं। ईमानदार और सफल खनिकों को खनन शुल्क से पुरस्कृत किया जाता है, इस शुल्क को एथेरियम में गैस शुल्क के रूप में संदर्भित किया जाता है।<br></br><br></br>जैसे ही नए ब्लॉकचेन लेनदेन किए जाते हैं, वे एक मेमोरी पूल (मेमपूल) में भेज दिए जाते हैं। खनिक लंबित लेनदेन की वैधता की पुष्टि करता है और उन्हें ब्लॉकों में व्यवस्थित करता है। यह उन लोगों के समान है जो आपको मौखिक रूप से लेन-देन जमा करते हैं और आप उन्हें कागज के एक टुकड़े पर क्रम से लिखते हैं - इस रूपक में कागज का टुकड़ा एक ब्लॉक है। इस ब्लॉक की पुष्टि करने की आवश्यकता है; इसके लिए जटिल गणितीय समस्या को हल करने की आवश्यकता होती है और इसमें बहुत सारे कम्प्यूटेशनल संसाधन लगते हैं। एक बार सफल होने के बाद, ब्लॉक को श्रृंखला में जमा कर दिया जाता है और खनिक को पुरस्कार मिलता है।<br></br><br></br>खनन कैसे काम करता है, इसके बारे में अधिक जानने के लिए <a className="cla" href="https://desk.zoho.com/portal/loopring/en/kb/articles/what-is-crypto-mining" target="_blank" rel="noreferrer">यहां</a> देखें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNodes() {
  const message = this.createChatbotMessage(<a>नोड क्लाइंट सॉफ़्टवेयर का एक टुकड़ा है। 3 अलग-अलग प्रकार के नोड हैं और वे प्रत्येक अलग-अलग डेटा का उपभोग करते हैं। इसके अतिरिक्त, अलग-अलग सिंक रणनीतियाँ हैं जो तेज़ सिंक्रनाइज़ेशन समय को सक्षम करती हैं; सिंक्रोनाइज़ेशन यह है कि आप एथेरियम की स्थिति के बारे में कितनी तेजी से सटीक जानकारी प्राप्त कर सकते हैं।<br></br><br></br><strong>पूर्ण नोड</strong><br></br><br></br>पूर्ण ब्लॉकचेन डेटा स्टोर करता है।<br></br>ब्लॉक सत्यापन में भाग लेने के दौरान सभी ब्लॉकों और सभी राज्यों का सत्यापन करता है।<br></br>सभी राज्यों को पूर्ण नोड से प्राप्त किया जा सकता है।<br></br>नेटवर्क की सेवा करता है और अनुरोध पर डेटा प्रदान करता है।<br></br><br></br><strong>लाइट नोड</strong><br></br><br></br>पूर्ण नोड के विपरीत, प्रकाश नोड केवल ब्लॉक हेडर डाउनलोड करता है। इनमें ब्लॉक की सामग्री के बारे में जानकारी का सारांश होता है। यदि अतिरिक्त आवश्यक जानकारी है, तो एक प्रकाश नोड इसे पूर्ण नोड से अनुरोध कर सकता है। यह प्रकाश नोड को ब्लॉक हेडर में स्टेट रूट के विरुद्ध प्राप्त डेटा को सत्यापित करने की अनुमति देता है।<br></br>लाइट नोड्स उपयोगी होते हैं क्योंकि उन्हें पूर्ण नोड की तरह चलाने के लिए आपको शक्तिशाली हार्डवेयर या उच्च बैंडविड्थ की आवश्यकता नहीं होती है।<br></br><br></br><strong>पुरालेख नोड</strong><br></br><br></br>एक पूर्ण नोड में संग्रहीत सभी जानकारी एक संग्रह नोड में ऐतिहासिक अवस्थाओं में संग्रहीत की जाती है। यदि आप ब्लॉक #222,222 जैसे यादृच्छिक ब्लॉक से जानकारी पूछना चाहते हैं तो आप इस नोड का उपयोग करेंगे। डेटा स्पष्ट रूप से बड़े पैमाने पर है। संग्रह नोड में टेराबाइट डेटा औसत उपयोगकर्ता के लिए कम आकर्षक हो सकता है लेकिन ब्लॉक एक्सप्लोरर, चेन एनालिटिक्स और वॉलेट विक्रेताओं जैसी सेवाओं के लिए उपयोगी हो सकता है।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTokenBurn() {
  const message = this.createChatbotMessage(<a>टोकन जलाने का अर्थ है किसी सिक्के या टोकन को स्थायी रूप से नष्ट करना, लेकिन आप ऐसा क्यों करेंगे?<br></br><br></br>ब्लॉकचेन तकनीक उपयोगकर्ताओं को शक्ति देती है, आप स्व-संरक्षक हो सकते हैं - अपनी संपत्ति का पूर्ण स्वामित्व। आपको बैंक या वित्तीय संस्थान की आवश्यकता नहीं है, लेन-देन तीसरे पक्ष द्वारा सीमित नहीं हैं, और ज्यादातर मामलों में, अपस्फीतिकारक होने की शक्ति के साथ आपूर्ति सीमित है क्योंकि आप टोकन को नष्ट कर सकते हैं।<br></br><br></br>एक टोकन को जलाने का विशेष रूप से मतलब है कि आप एक जमे हुए पते पर एक टोकन भेज रहे हैं, जिसे बर्न एड्रेस कहा जाता है, जिसे पुनर्प्राप्त नहीं किया जा सकता है। एक जला पते में कोई निजी कुंजी नहीं होगी, भेजने के लिए एक सार्वजनिक पता होगा लेकिन वॉलेट को अनलॉक करने के लिए कोई कुंजी नहीं होगी। यह आपके भौतिक धन को एक ऐसी सुरक्षित तिजोरी में रखने के समान है जिसे खोलने के लिए किसी के पास पासकोड नहीं है।<br></br><br></br>एक टोकन का मूल्य आपूर्ति और मांग पर आधारित होता है। आमतौर पर, मांग जितनी अधिक होती है, मूल्य उतना ही अधिक होता है। इसी तरह, अगर आपूर्ति कम है तो मूल्य भी अधिक है। तो जब एक टोकन की एक निश्चित आपूर्ति होती है तो उस आपूर्ति में से कुछ को नष्ट करने का प्रभाव पड़ता है। इसका उपयोग कई कारणों से किया जा सकता है जैसे टोकन मूल्य बढ़ाना या मूल्य स्थिरता उत्पन्न करना।<br></br><br></br><strong>प्रोजेक्ट वैल्यू बढ़ाएं</strong><br></br>आज की बढ़ती वित्तीय दुनिया में कॉर्पोरेट बायबैक आम बात है; कंपनियां शेष आपूर्ति के मूल्य को बढ़ाने में मदद करने के लिए बाजार से अपने कुछ शेयरों और शेयरों को वापस खरीदती हैं। इसी तरह की घटना 2021 में हुई जब एथेरियम ने वापस खरीद लिया और फिर 1.3 मिलियन ईटीएच को नष्ट कर दिया जो प्रचलन में था। लक्ष्य एक नए प्रोटोकॉल के भाग के रूप में ETH अपस्फीतिकारक बनाना है - यह सुनिश्चित करने के लिए कि एथेरियम टोकन मूल्य का एक प्रभावी भंडार हो सकता है और आपूर्ति को कम करके समय के साथ मूल्य में वृद्धि कर सकता है।<br></br><br></br><strong>मूल्य स्थिर करें</strong><br></br>क्रिप्टोकरंसी और DeFi के लिए स्थिर सिक्के आवश्यक हैं। पारिस्थितिक तंत्र के भीतर, वे निपटान और होल्डिंग दोनों के लिए एक माध्यम प्रदान करते हैं, जो नियमित सिक्कों और टोकन की अस्थिरता से अछूता रहता है। यहां समझौता केंद्रीय रिजर्व का उपयोग कर रहा है जहां आप विकेंद्रीकरण पर हार जाते हैं। एल्गोरिदमिक स्थिर स्टॉक आपूर्ति को नियंत्रित करके इस समस्या को दूर करने का प्रयास करते हैं।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDAO() {
  const message = this.createChatbotMessage(<a><strong>डीएओ को शक्ति प्रदान करने के लिए ग्राफ़ का उपयोग करना</strong> - स्नैपशॉट केस स्टडी <a className="cla" href="https://thegraph.com/blog/using-the-graph-for-daos-snapshot/" target="_blank" rel="noreferrer">यहाँ</a> पढ़ें।<hr></hr>यह संक्षिप्त नाम विकेंद्रीकृत स्वायत्त संगठन के लिए है। यह पूर्वनिर्धारित नियमों की एक प्रणाली के रूप में मौजूद है जो यह निर्धारित करता है कि संगठन कौन सी कार्रवाइयाँ करेगा। यह पारंपरिक कंपनियों से अलग है और इसके बजाय ओपन सोर्स कोड पर आधारित है और पूरी तरह से समुदाय द्वारा संचालित है। इसका मतलब यह है कि कोई एकल इकाई प्रभारी नहीं है, कोई निर्देशिका बोर्ड नहीं है, और इस प्रकार सत्ता का कोई केंद्रीकरण नहीं है।<br></br><br></br>नियम स्मार्ट अनुबंध के रूप में बनाए गए हैं जो इसके योगदानकर्ताओं और समुदाय के सदस्यों के सामूहिक कार्य को नियंत्रित करते हैं। इसलिए जब एक विकेन्द्रीकृत संगठन की अवधारणा विशेष रूप से नई नहीं है, तो इसके कार्य तंत्र और इसके कार्यों को स्वचालित करने में सक्षम होने से डीएओ ऐसी दिलचस्प अवधारणा बन जाती है।<br></br><br></br>कई समुदाय स्वचालित धन उगाहने वाले अभियानों के लिए DAO का उपयोग करते हैं जैसे ICO (इनिशियल कॉइन ऑफरिंग), एक प्रोटोकॉल पर एकत्र किए गए शुल्क को जारी करना और फैलाना, या निर्णय लेने और मतदान प्रणाली के रूप में। इसके अतिरिक्त, यह सब एक विश्वसनीय और सुरक्षित प्रक्रिया सुनिश्चित करने के लिए मानवीय सहभागिता के बिना किया जाता है।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKSnark() {
  const message = this.createChatbotMessage(<a>ज्ञान का एक शून्य-ज्ञान संक्षिप्त गैर-संवादात्मक तर्क - <strong>zkSNARK</strong><br></br><br></br>आइए इसे तोड़ दें:<br></br><br></br>शून्य-ज्ञान - हमने अन्य लेखों में इसकी समीक्षा की है, लेकिन लघु संस्करण किसी और को बताए बिना कुछ साबित कर रहा है कि आपने इसे कैसे साबित किया, बस यह साबित करने योग्य है।<br></br>संक्षिप्त - संक्षिप्त और स्पष्ट; प्रमाण उस डेटा की तुलना में काफी छोटा है जिसका वह प्रतिनिधित्व करता है। <br></br>गैर-संवादात्मक - जानकारी प्रोवर से सत्यापनकर्ता तक जाती है, कोई आगे और पीछे नहीं है।<br></br>ज्ञान का तर्क - प्रमाण ठोस है, इसके कथन का समर्थन करने के लिए ज्ञान रखने के बिना सिस्टम को धोखा देने के लिए कोई दुर्भावनापूर्ण कहावत नहीं है।<br></br><br></br>एक SNARK को प्रोवर और वेरिफायर के बीच एक विश्वसनीय सेटअप की आवश्यकता होती है। यह सार्वजनिक मापदंडों का एक समूह है जो खेल के नियमों से मिलता जुलता है। ये पैरामीटर एक विश्वसनीय सेटअप समारोह के दौरान उत्पन्न होते हैं। यह स्वैच्छिक प्रतिभागियों के एक समूह द्वारा निर्धारित समय पर की गई एक संयुक्त संगणना है। जब तक एक सत्यापनकर्ता ईमानदारी से व्यवहार करता है, तब तक पैरामीटर सुरक्षित रूप से उत्पन्न होते हैं, इसलिए जितने अधिक पक्ष भाग लेते हैं, उतने ही विश्वसनीय इस समारोह पर विचार किया जा सकता है। इस समारोह को उत्पाद के प्रत्येक नए संस्करण के लिए आयोजित करने की आवश्यकता है।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKStark() {
  const message = this.createChatbotMessage(<a>ज्ञान का एक शून्य-ज्ञान मापनीय पारदर्शी तर्क - <strong>zkSTARK</strong><br></br><br></br>आइए बताते हैं:<br></br><br></br>स्केलेबल - प्रूफ आकार में अपेक्षाकृत छोटा होता है और बड़ी मात्रा में प्रूफ के लिए भी सत्यापन में कम समय लगता है, इसलिए यह स्केलेबल है।<br></br>पारदर्शी - विश्वसनीय कॉन्फ़िगरेशन के लिए कोई आवश्यकता नहीं है।<br></br>ज्ञान का तर्क - प्रमाण ठोस है, इसके कथन का समर्थन करने के लिए ज्ञान रखने के बिना सिस्टम को धोखा देने के लिए कोई दुर्भावनापूर्ण कहावत नहीं है।<br></br><br></br>zkSTARKs एली-बेन सैसन द्वारा बनाए गए थे, जो टेक्नियन-इज़राइल इंस्टीट्यूट ऑफ टेक्नोलॉजी के एक प्रोफेसर थे। यहाँ बड़ा अंतर निर्माता यह है कि एक zkSTARK को प्रारंभिक विश्वसनीय सेटअप की आवश्यकता नहीं है - SNARK अनुभाग में चर्चा की गई समारोह। एक STARK एक SNARK की तुलना में कम्प्यूटेशनल रूप से कम महंगा है और सैद्धांतिक रूप से क्वांटम कंप्यूटर हैं। तो क्या कमी है? SNARK की तुलना में प्रमाण का आकार बहुत बड़ा है और यह ऑन-चेन लेनदेन की लागत को बढ़ा सकता है।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMetaverse() {
  const message = this.createChatbotMessage(<a>इस शब्द का पहला प्रयोग 1992 के एक साइंस फैनफिक्शन उपन्यास स्नो क्रैश में हुआ है; यह मेटा और ब्रह्मांड शब्दों का एक संयोजन है। विसर्जन की बढ़ती मांगों के कारण मेटावर्स अक्सर उन्नत आभासी वास्तविकता प्रौद्योगिकी से जुड़ा होता है। जबकि मेटावर्स एक गेमिंग अवधारणा नहीं है, यह उस स्थान में सबसे अधिक विकसित हुआ है। सेकेंड लाइफ नामक गेम को अक्सर पहले मेटावर्स के रूप में वर्णित किया जाता है और उपन्यास रेडी प्लेयर वन (बाद में एक फिल्म) ने संभावनाओं को बढ़ाना जारी रखा।<br></br><br></br>आदर्श रूप से, एक सच्चा मेटावर्स सिर्फ गेमिंग या सोशल मीडिया का समर्थन नहीं करेगा, यह अर्थव्यवस्थाओं, डिजिटल पहचान, विकेंद्रीकृत शासन और अन्य अनुप्रयोगों को जोड़ देगा। इस बारे में सोचें कि कैसे Roblox सिर्फ कस्टम गेम नहीं है, यह कॉन्सर्ट और मीटअप जैसे वर्चुअल इवेंट्स के लिए काम करता है। खेल सिर्फ खेलने के लिए नहीं है, यह वर्चुअल स्पेस में घूमने के लिए है।<br></br><br></br>क्रिप्टो अपरिवर्तनीयता और स्वामित्व का प्रमाण प्रदान करके मेटावर्स में फिट बैठता है। इस बारे में सोचें कि इस उदाहरण में एनएफटी कैसे काम करेगा; डिजिटल कपड़े, सहायक उपकरण, आदि ... सभी एक विकेंद्रीकृत वातावरण में सुरक्षित रूप से और जल्दी से सत्यापित किए जा सकेंगे। इन-गेम मुद्राएं फल-फूल सकती हैं, और एक उपयोगकर्ता पैसे कमाने और वहां खर्च करने में सक्षम होगा। बटुए के साथ, मेटावर्स अत्यधिक सुलभ है और ब्लॉकचैन के साथ, हमारे पास विश्वसनीय शासन होगा, ठीक उसी तरह जैसे हम नेतृत्व के लिए वास्तविक जीवन में मतदान करते हैं।<br></br><br></br>एक एकल, एकीकृत मेटावर्स की संभावना थोड़ी दूर है लेकिन इसके लिए सही दिशा में कई विकास हैं और ब्लॉकचैन मार्ग का नेतृत्व करेगा।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleArbitrum() {
  const message = this.createChatbotMessage(<a>आर्बिट्रम एथेरियम के लिए एक स्केलिंग समाधान है जो लागत और विलंबता को काफी कम करता है। आर्बिट्रम ने एथेरियम मेननेट पर आर्बिट्रम वन लॉन्च किया है, और टीम जनता के लिए आगामी रिलीज के लिए तैयार हो रही है।<br></br><br></br>आर्बिट्रम के साथ एकीकरण के लिए धन्यवाद, ग्राफ की होस्टिंग इंडेक्सिंग और पूछताछ सेवाएं अब नेटवर्क पर लाइव हैं। आर्बिट्रम वन पर डेवलपर्स अब ओपन एपीआई (सबग्राफ) बनाने और प्रकाशित करने में सक्षम होंगे, जो एप्लिकेशन ग्राफक्लाइन का उपयोग करके क्वेरी कर सकते हैं।<br></br><br></br>ग्राफ पहले से ही एथेरियम, आईपीएफएस, सेलो, हिमस्खलन, फैंटम और मूनबीम के लिए इंडेक्सिंग डेटा का समर्थन करता है। इसके अलावा, हजारों डेवलपर्स ने पहले से ही DODO, MCDEX, Uniswap, Synthetic, Gnosis, Decentraland, आदि जैसे अनुप्रयोगों के लिए 10,000 से अधिक सबग्राफ बनाए हैं। उस सूची में आर्बिट्रम को जोड़कर, ग्राफ़ के विस्तार के प्रयासों ने Web3 पारिस्थितिकी तंत्र को एकजुट करने में एक और कदम उठाया है।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStatistics() {
  const message = this.createChatbotMessage(<a>यदि आप लाइव डेटा/आँकड़ों की तलाश कर रहे हैं। तो कृपया अधिक विशिष्ट बनें। आप मुझसे किस बारे में पूछ सकते हैं, इसकी सूची यहां दी गई है:<br></br><br></br>सक्रिय प्रतिनिधि गणना<br></br>सक्रिय प्रतिनिधिमंडल की संख्या<br></br>धारकों की संख्या<br></br>सबग्राफ की गिनती<br></br>क्यूरेटर काउंट<br></br>सक्रिय अनुक्रमणिका गणना<br></br>कुल प्रश्न शुल्क गणना<br></br>कुल स्टेक्ड जीआरटी<br></br>प्रतिनिधियों द्वारा प्रत्यायोजित कुल GRT<br></br>क्यूरेटर द्वारा हस्ताक्षरित कुल जीआरटी<br></br>इंडेक्सर्स द्वारा कुल प्रत्यायोजित जीआरटी<br></br>कुल जला जीआरटी</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTMobile() {
  const message = this.createChatbotMessage(<a>Deutsche Telekom और T‑Mobile US ने 5G के माध्यम से वेब3 विकास की नई टी चुनौती की शुरुआत की 5G नेटवर्क का उपयोग करके अभिनव समाधान प्रदान करने वाले स्टार्टअप्स, डेवलपर्स और शोधकर्ताओं के लिए वैश्विक प्रतिस्पर्धा वापस आ गई है, इस बार दुनिया इंटरनेट का उपयोग करने के तरीके को बदलने के लिए Web3 तकनीकों की तलाश में है।<br></br><br></br>बॉन, जर्मनी और बेलेव्यू, वाश. - नवंबर 2, 2022 - डॉयचे टेलीकॉम एजी और टी-मोबाइल यूएस, इंक। Web3 के लिए सर्वश्रेष्ठ सार्वजनिक ब्लॉकचेन प्रोटोकॉल समाधान के पुरस्कार के लिए। प्रतिभागियों द्वारा बनाए गए समाधान वेब3 को जीवन में लाने के लिए 5जी की शक्ति का लाभ उठाएंगे, जिसमें 5जी महत्वपूर्ण भूमिका निभाएगा कि कैसे उपयोगकर्ता इन नवाचारों से जुड़े रहते हैं। <br></br><br></br>सबमिशन अब आधिकारिक तौर पर 20 जनवरी, 2023 तक खुले हैं। छह विजेता 600,000 यूरो (लगभग यूएस डॉलर में समान) और डॉयचे टेलीकॉम और टी-मोबाइल यूएस को अपने विचार प्रस्तुत करने के लिए बॉन, जर्मनी की यात्रा के सभी खर्चों का भुगतान करेंगे।<br></br><br></br>द ग्राफ का उल्लेख करने वाले पूरे लेख को पढ़ने के लिए, <a className="cla" href="https://www.t-mobile.com/news/network/2023-t-challenge" target="_blank" rel="noreferrer">यहां</a> देखें।</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSolana() {
  this.handleSubstreams = this.handleSubstreams.bind(this);
  const message = this.createChatbotMessage(<a><strong>ग्राफ़ अब सबस्ट्रीम के साथ सोलाना का समर्थन करता है</strong><br></br><br></br><a className="cla" onClick={this.handleSubstreams}><strong>सबस्ट्रीम</strong></a> के साथ सोलाना के लिए समर्थन की घोषणा करते हुए ग्राफ फाउंडेशन उत्साहित है। सोलाना डेवलपर समुदाय अब बिजली-तेज़ डैप बनाने के लिए ग्राफ़ का उपयोग करना शुरू कर सकता है। नई सबस्ट्रीम तकनीक का उपयोग करके, डेवलपर्स अपने अनुप्रयोगों को फीड करने के लिए सोलाना के मेननेट-बीटा से ऑन-चेन डेटा को कुशलतापूर्वक निकाल और व्याख्या कर सकते हैं। सबस्ट्रीम के साथ समर्थन प्रदान करना सबग्राफ को सोलाना में लाने का पहला कदम है।<br></br><br></br>सबस्ट्रीम, जो पूरी तरह से खुला-स्रोत है, सोलाना डेवलपर्स को उनकी गति और दक्षता के कारण ब्रांड नए तरीकों से ऑन-चेन डेटा बनाने के लिए सशक्त बनाता है। डेवलपर्स प्रोटोकॉल-विशिष्ट डेटा स्ट्रीम या बाज़ार-व्यापी विश्लेषणात्मक डेटासेट बनाने के लिए रस्ट में कोडित सबस्ट्रीम मॉड्यूल का उपयोग कर सकते हैं। उनका उपयोग वास्तविक समय की सूचनाओं को शक्ति देने और लंबी, समय-श्रृंखला की जानकारी प्रदर्शित करने के लिए भी किया जा सकता है। चारदीवारी से बाहर निकलकर, सबस्ट्रीम देव समय बचाने के लिए दूसरों द्वारा बनाई गई धाराओं का लाभ उठा सकते हैं, और अपने काम को खुले तौर पर उपलब्ध और रचना योग्य बनाकर पूरे वेब3 पारिस्थितिकी तंत्र को सशक्त बना सकते हैं। नतीजतन, सबस्ट्रीम पूरे सोलाना डेवलपर समुदाय में नए और नए उपयोग के मामलों को जन्म देते हैं।<br></br><br></br>StreamingFast द्वारा विकसित, द ग्राफ़ इकोसिस्टम में एक मुख्य डेवलपर, सबस्ट्रीम बहुत तेज़ ऐतिहासिक प्रसंस्करण (बैच में और स्ट्रीमिंग में) की अनुमति देता है। सबस्ट्रीम कई लाभों के लिए द्वार खोलते हैं, जिनमें शामिल हैं: प्रौद्योगिकी-विशिष्ट सिंक के माध्यम से किसी भी डेटा सिस्टम को फीड करना, ऑन-चेन डेटा पढ़ने के लिए अपने सोलाना प्रोग्राम के रस्ट कोड का पुन: उपयोग करना, एक लेजर-केंद्रित डिबगिंग अनुभव, डेटा स्ट्रीम का सांप्रदायिक और संयोजन योग्य शोधन, और विश्वसनीय रीगॉर-जागरूक धाराएँ।<br></br><br></br>एक सच्ची उद्योग-स्थानांतरण तकनीक, सबस्ट्रीम सिंकिंग गति को बहुत बढ़ाने के लिए समानांतर डेटा प्रोसेसिंग के साथ सबग्राफ प्रदर्शन को अनलॉक करने के लिए तैयार हैं। एक क्षैतिज रूप से स्केलेबल समानांतर इंजन के माध्यम से, सबस्ट्रीम ऐतिहासिक अनुक्रमण प्रदर्शन को 100x से अधिक गुणा करने में सक्षम हैं।<br></br><br></br>पूरा ब्लॉग <a className="cla" href="https://thegraph.com/blog/indexing-solana-substreams/" target="_blank" rel="noreferrer">यहां</a> पढ़ें।</a>
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
    const message = this.createChatbotMessage(<a><strong>17 दिसंबर 2022 को ग्राफ 2 हो गया!</strong><br></br><br></br>दुनिया भर के कई लोगों ने मेननेट पर द ग्राफ नेटवर्क के लॉन्च का जश्न मनाने में मदद की और निम्नलिखित छह समुदाय-आधारित जन्मदिन कार्यक्रमों में से एक में भाग लेकर विकेंद्रीकरण की प्रतिबद्धता जताई। FOMO असली था! आप ट्विटर स्पेस को <a className="cla" href="https://twitter.com/i/spaces/1vOGwMQpzPgxB" target="_blank" rel="noreferrer">यहां</a>  सुन सकते हैं। यदि आप चूक गए हैं, तो चिंता न करें, आप नीचे दिए गए बटनों पर क्लिक करके इसे प्राप्त कर सकते हैं।<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>एम्स्टर्डम</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>ब्यूनस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>दुबई</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>लागोस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>सैन फ्रांसिस्को</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>सिंगापुर</strong></button></a>
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
      const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/colsongrteacher?s=21&t=G1z0E5ndRT5F549tsuRY2A' target="_blank" rel="noreferrer"><strong>Colson</strong></a> ने एम्स्टर्डम में एम्स्टल बोथहाउस में द ग्राफ, 2 साल का जन्मदिन समारोह की मेजबानी की।<br></br><br></br>इवेंट से सामग्री के रिलीज़ होने की प्रतीक्षा की जा रही है...<br></br><br></br>आप नीचे अन्य घटनाओं को भी देख सकते हैं।<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>ब्यूनस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>दुबई</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>लागोस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>सैन फ्रांसिस्को</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>सिंगापुर</strong></button></a>
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
        const message = this.createChatbotMessage(<a>ग्राफ, ब्यूनस आयर्स में एरिया 3 एल साल्वाडोर में 2 साल का जन्मदिन समारोह।<br></br><br></br>आप <a className="cla" href='https://twitter.com/espanolgraph/status/1604257219628916736?s=46&t=MuGXfy1qv8hl2x-HpLcfAg' target="_blank" rel="noreferrer">यहां</a> द ग्राफ एस्पानोल द्वारा बनाए गए इस ट्विटर फीड के माध्यम से इस घटना को पकड़ सकते हैं।<br></br><br></br>आप नीचे अन्य घटनाओं को भी देख सकते हैं।<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>एम्स्टर्डम</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>दुबई</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>लागोस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>सैन फ्रांसिस्को</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>सिंगापुर</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/Mardeni01' target="_blank" rel="noreferrer">Ahmad Mardeni</a> ने दुबई में ओपीएम रूम में द ग्राफ, 2 साल का जन्मदिन समारोह आयोजित किया।<br></br><br></br>आप <a className="cla" href='https://twitter.com/mardeni01/status/1604127593007120384?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">यहां</a> और <a className="cla" href='https://twitter.com/mardeni01/status/1604205523619946498?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">यहां</a> अपने ट्विटर फ़ीड के माध्यम से घटना को पकड़ सकते हैं।<br></br><br></br>आप नीचे अन्य घटनाओं को भी देख सकते हैं।<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>एम्स्टर्डम</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>ब्यूनस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>लागोस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>सैन फ्रांसिस्को</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>सिंगापुर</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/thegraphnations?s=21&t=2oybVC4qbnXUtBbgmnvSqw' target="_blank" rel="noreferrer">TheGraphNation</a> ने लागोस में The Lekki Coliseum (TLC) में द ग्राफ, 2 साल का जन्मदिन समारोह आयोजित किया।<br></br><br></br>आप <a className="cla" href='https://twitter.com/thegraphnations/status/1603831459629891585?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">यहां</a> उनके ट्विटर फीड के माध्यम से इस घटना को पकड़ सकते हैं।<br></br><br></br>आप नीचे अन्य घटनाओं को भी देख सकते हैं।<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>एम्स्टर्डम</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>ब्यूनस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>दुबई</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>सैन फ्रांसिस्को</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>सिंगापुर</strong></button></a>
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
            const message = this.createChatbotMessage(<a>ग्राफ, सैन फ्रांसिस्को में वेब3 के एज एंड नोड हाउस में 2 साल का जन्मदिन समारोह।<br></br><br></br>आप य<a className="cla" href='https://twitter.com/thehouseofweb3/status/1603952216540213248?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">यहां</a>हां और <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603990278322507780?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">यहां</a> उनके ट्विटर के माध्यम से घटना को पकड़ सकते हैं।<br></br><br></br>आप नीचे अन्य घटनाओं को भी देख सकते हैं।<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>एम्स्टर्डम</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>ब्यूनस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>दुबई</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>लागोस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>सिंगापुर</strong></button></a>
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
              const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/impranavm_?s=21&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">Pranav Maheshwari</a> ने सिंगापुर में द ग्राफ, 2 साल के जन्मदिन समारोह की मेजबानी की।<br></br><br></br>आप <a className="cla" href='https://twitter.com/impranavm_/status/1604024407789182976?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">यहां</a> और <a className="cla" href='https://twitter.com/impranavm_/status/1603991615009304576?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">यहां</a> अपने ट्विटर फ़ीड के माध्यम से घटना को पकड़ सकते हैं।<br></br><br></br>आप नीचे अन्य घटनाओं को भी देख सकते हैं।<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>एम्स्टर्डम</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>ब्यूनस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>दुबई</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>लागोस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>सैन फ्रांसिस्को</strong></button></a>
                ,
              );
              this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
              }));
            }

  handleNews() {
    const message = this.createChatbotMessage(<a>यदि आप द ग्राफ के बारे में नवीनतम समाचार, नई साझेदारी घोषणाओं के साथ अद्यतित रहना चाहते हैं और समुदाय के भीतर क्या चल रहा है, इसके बारे में पढ़ना चाहते हैं, तो नीचे दिए गए लिंक इसमें आपकी सहायता कर सकते हैं।<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">द ग्राफ ब्लॉग</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">ग्राफ एडवोकेट्स स्पॉटलाइट</a><hr></hr>सुनिश्चित करें कि आप <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">ट्विटर</a> पर द ग्राफ को भी फॉलो करते हैं।</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

handleHello() {
  const message = this.createChatbotMessage(<a>नमस्ते, मैं आज आपकी सहायता कैसे करूं?</a>
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
  const message = this.createChatbotMessage(<a>आप नीचे दिए गए बटनों का भी उपयोग कर सकते हैं और उत्तर खोजने के लिए नीचे स्क्रॉल करें!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>लेखाचित्र</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>डैलिगेटर</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>संग्रहाध्यक्ष</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>इंडेक्सर</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>कोर देव</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>सबग्राफ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>लाइव सांख्यिकी</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>समुदाय</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>समाचार</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>जानें Web3</strong></button></a>
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
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>लेखाचित्र</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>डैलिगेटर</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>संग्रहाध्यक्ष</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>इंडेक्सर</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>कोर देव</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>सबग्राफ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>लाइव सांख्यिकी</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>समुदाय</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>समाचार</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>जानें Web3</strong></button></a>
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
  }}><strong>परिषद</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCoreDevs();
  }}><strong>कोर देव</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFoundingMembers();
    this.handleButtonTheGraph();
  }}><strong>संस्थापक सदस्य</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHostedService();
    this.handleButtonTheGraph();
  }}><strong>होस्ट की गई सेवा</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonTheGraph();
  }}><strong>सनसेटिंग होस्टेड सर्विस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonTheGraph();
  }}><strong>विकेंद्रीकृत डेटा</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoadMap();
    this.handleButtonTheGraph();
  }}><strong>रोडमैप</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoles();
    this.handleButtonTheGraph();
  }}><strong>पारिस्थितिकी तंत्र भूमिकाएँ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMIPS();
    this.handleButtonTheGraph();
  }}><strong>एमआईपी</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleJob();
    this.handleButtonTheGraph();
  }}><strong>नौकरियां</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBirthday();
    this.handleButtonTheGraph();
  }}><strong>जन्मदिन</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphDay();
    this.handleButtonTheGraph();
  }}><strong>ग्राफ दिवस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleParticipantUpdate();
    this.handleButtonTheGraph();
  }}><strong>प्रतिभागी अद्यतन</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGeo();
    this.handleButtonTheGraph();
  }}><strong>भू</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonTheGraph();
  }}><strong>GitHub</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphFunding();
    this.handleButtonTheGraph();
  }}><strong>अनुदान</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleGraphQLApi();
    this.handleButtonTheGraph();
  }}><strong>ग्राफक्यूएल एपीआई</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleGRTTokenAddress();
    this.handleButtonTheGraph();
  }}><strong>जीआरटी टोकन पता</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handlePowerDAOS();
    this.handleButtonTheGraph();
  }}><strong>स्नैपशॉट</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>श्रेणियाँ मेनू</strong></button></a>
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
  }}><strong>एज और नोड</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFigment();
    this.handleButtonCoreDevsChat();
  }}><strong>मनगढ़ंत</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTheGraphFoundation();
    this.handleButtonCoreDevsChat();
  }}><strong>ग्राफ फाउंडेशन</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonCoreDevsChat();
  }}><strong>तेजी से स्ट्रीमिंग</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSemiotic();
    this.handleButtonCoreDevsChat();
  }}><strong>लाक्षणिक</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTheGuild();
    this.handleButtonCoreDevsChat();
  }}><strong>गिल्ड</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphOps();
    this.handleButtonCoreDevsChat();
  }}><strong>ग्राफ ऑप्स</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonCoreDevsChat();
  }}><strong>मेसारी</strong></button></a>
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
  }}><strong>एज और नोड</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFigment();
    this.handleButtonCoreDevs();
  }}><strong>मनगढ़ंत</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTheGraphFoundation();
    this.handleButtonCoreDevs();
  }}><strong>ग्राफ फाउंडेशन</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonCoreDevs();
  }}><strong>तेजी से स्ट्रीमिंग</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSemiotic();
    this.handleButtonCoreDevs();
  }}><strong>लाक्षणिक</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTheGuild();
    this.handleButtonCoreDevs();
  }}><strong>गिल्ड</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphOps();
    this.handleButtonCoreDevs();
  }}><strong>ग्राफ ऑप्स</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonCoreDevs();
  }}><strong>मेसारी</strong></button>
  
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>श्रेणियाँ मेनू</strong></button></a>
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
  }}><strong>प्रतिनिधि गाइड</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDelegateWithWallet();
    this.handleButtonDelegator();
  }}><strong>बटुए के साथ प्रतिनिधि</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCoinbase();
    this.handleButtonDelegator();
  }}><strong>कॉइनबेस वॉलेट से प्रतिनिधि</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFeesToDelegate();
    this.handleButtonDelegator();
  }}><strong>प्रतिनिधिमंडल शुल्क</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleUnDelegating();
    this.handleButtonDelegator();
  }}><strong>सौंपना</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTenderize();
    this.handleButtonDelegator();
  }}><strong>निविदा</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleChoosingIndexers();
    this.handleButtonDelegator();
  }}><strong>इंडेक्सर चुनना</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonDelegator();
  }}><strong>इंडेक्सर्स की तुलना करें</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonDelegator();
  }}><strong>सक्रिय प्रतिनिधि गणना</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonDelegator();
  }}><strong>सक्रिय प्रतिनिधिमंडल की संख्या</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonDelegator();
  }}><strong>प्रतिनिधियों द्वारा प्रत्यायोजित कुल GRT</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>श्रेणियाँ मेनू</strong></button></a>
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
  }}><strong>क्यूरेटर की भूमिका</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorTools();
    this.handleButtonCurator();
  }}><strong>क्यूरेटर उपकरण</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonCurator();
  }}><strong>क्यूरेटर काउंट</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonCurator();
  }}><strong>क्यूरेटर द्वारा हस्ताक्षरित कुल जीआरटी</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>श्रेणियाँ मेनू</strong></button></a>
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
  }}><strong>क्यूरेटर द्वारा हस्ताक्षरित कुल जीआरटी</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonIndexer();
  }}><strong>इंडेक्सर्स की तुलना करें</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBecomeIndexer();
    this.handleButtonIndexer();
  }}><strong>इंडेक्सर बनें</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerHardwareRequirements();
    this.handleButtonIndexer();
  }}><strong>इंडेक्सर हार्डवेयर आवश्यकताएँ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerMap();
    this.handleButtonIndexer();
  }}><strong>इंडेक्सर मानचित्र</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMIPS();
    this.handleButtonIndexer();
  }}><strong>एमआईपी</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerOfficeHours();
    this.handleButtonIndexer();
  }}><strong>अनुक्रमणिका कार्यालय समय</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexingRewardsAndQueryFees();
    this.handleButtonIndexer();
  }}><strong>अनुक्रमणिका पुरस्कार</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleQueryFeesAndIndexingRewardCut();
    this.handleButtonIndexer();
  }}><strong>क्वेरी फीस और इंडेक्सिंग रिवार्ड कट</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAllocations();
    this.handleButtonIndexer();
  }}><strong>आवंटन</strong></button><br class="no-show-monitor"></br>
 <button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonIndexer();
  }}><strong>सक्रिय अनुक्रमणिका गणना</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonIndexer();
  }}><strong>अनुक्रमणकों की संख्या के अनुसार प्रत्यायोजित कुल GRT</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>श्रेणियाँ मेनू</strong></button></a>
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
  this.handleQueryPython = this.handleQueryPython.bind(this);
  this.handle = this.handleQueryPython.bind(this);
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleSubgraph();
    this.handleButtonSubgraph();
  }}><strong>सबग्राफ </strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonSubgraph();
  }}><strong>सबस्ट्रीम</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonSubgraph();
  }}><strong>सनसेटिंग होस्टेड सर्विस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonSubgraph();
  }}><strong>विकेंद्रीकृत डेटा</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleVsSelfHosting();
    this.handleButtonSubgraph();
  }}><strong>होस्टेड वीएस सेल्फ-होस्टिंग</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSoulBound();
    this.handleButtonSubgraph();
  }}><strong>सोलबाउंड</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleFireHose();
    this.handleButtonSubgraph();
  }}><strong>आग बुझाने का नल</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleQueryPython();
    this.handleButtonSubgraph();
  }}><strong>पायथन का उपयोग कर क्वेरी</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonSubgraph();
  }}><strong>मेसारी </strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonSubgraph();
  }}><strong>सबग्राफ की गिनती</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonSubgraph();
  }}><strong>GitHub</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>श्रेणियाँ मेनू</strong></button></a>
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
  }}><strong>प्रतिभागी अद्यतन</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHoldersCount();
    this.handleButtonStatistics();
  }}><strong>धारकों की संख्या</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonStatistics();
  }}><strong>सक्रिय प्रतिनिधि गणना</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonStatistics();
  }}><strong>सक्रिय अनुक्रमणिका गणना</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonStatistics();
  }}><strong>क्यूरेटर काउंट</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonStatistics();
  }}><strong>सक्रिय प्रतिनिधिमंडल की संख्या</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalQueryFeesCount();
    this.handleButtonStatistics();
  }}><strong>प्रश्न शुल्क</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonStatistics();
  }}><strong>सबग्राफ की गिनती</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonStatistics();
  }}><strong>प्रतिनिधियों द्वारा प्रत्यायोजित कुल GRT</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonStatistics();
  }}><strong>इंडेक्सर्स द्वारा प्रत्यायोजित कुल GRT</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonStatistics();
  }}><strong>क्यूरेटर द्वारा हस्ताक्षरित कुल जीआरटी</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalStakedGRTCount();
    this.handleButtonStatistics();
  }}><strong>कुल स्टेक्ड जीआरटी गणना</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTBurnedCount();
    this.handleButtonStatistics();
  }}><strong>कुल जीआरटी बर्न काउंट</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>श्रेणियाँ मेनू</strong></button></a>
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
  this.handleग्राफट्रोनॉट्स = this.handleग्राफट्रोनॉट्स.bind(this);
  this.handleGraphDay = this.handleGraphDay.bind(this);
  this.handleBirthday = this.handleBirthday.bind(this);
  this.handleAdvocates = this.handleAdvocates.bind(this);
  this.handleGraphSocial = this.handleGraphSocial.bind(this);
  this.handlePodcast = this.handlePodcast.bind(this);
  this.handleTwitter = this.handleTwitter.bind(this);
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleDiscord();
    this.handleButtonCommunity();
  }}><strong>कलह</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTelegram();
    this.handleButtonCommunity();
  }}><strong>तार</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTwitter();
    this.handleButtonCommunity();
  }}><strong>ट्विटर</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphtronauts();
    this.handleButtonCommunity();
  }}><strong>ग्राफट्रोनॉट्स</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphDay();
    this.handleButtonCommunity();
  }}><strong>ग्राफ दिवस 2022</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBirthday();
    this.handleButtonCommunity();
  }}><strong>ग्राफ जन्मदिन</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAdvocates();
    this.handleButtonCommunity();
  }}><strong>ग्राफ अधिवक्ता</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphSocial();
    this.handleButtonCommunity();
  }}><strong>ग्राफ सामाजिक</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePodcast();
    this.handleButtonCommunity();
  }}><strong>GRTiQ पॉडकास्ट</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>श्रेणियाँ मेनू</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMIPS(){
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  const message = this.createChatbotMessage(<a><strong>ग्राफ का मल्टी-चेन प्रोत्साहन कार्यक्रम</strong><br></br><br></br>एमआईपी प्रोग्राम बूटस्ट्रैप इंडेक्सर्स को विकेंद्रीकृत नेटवर्क पर नई श्रृंखलाओं के लिए समर्थन जोड़ने के लिए, बहु-श्रृंखला सबग्राफ के प्रवासन को सक्षम करता है। यह होस्ट की गई सेवा के समाप्त होने से पहले डैप और सबग्राफ माइग्रेशन के लिए समर्थन का एक महत्वपूर्ण विस्तार है।<br></br><br></br>एमआईपी कार्यक्रम ने जीआरटी आपूर्ति (75एम जीआरटी) का 0.75% आवंटित किया है, जिसमें 0.5% इंडेक्सर्स को इनाम देने के लिए है जो नेटवर्क बूटस्ट्रैपिंग में योगदान करते हैं और मल्टी-चेन सबग्राफ का उपयोग करके सबग्राफ डेवलपर्स के लिए माइग्रेशन अनुदान के लिए 0.25% आवंटित किया गया है। Q1 2023 के अंत तक, सभी नेटवर्क-समर्थित श्रृंखलाओं के लिए होस्ट की गई सेवा समाप्त हो जाएगी, इसलिए MIP कार्यक्रम सबग्राफ माइग्रेशन प्रयासों के समानांतर काम करेगा। <br></br><br></br>विकेंद्रीकृत नेटवर्क पर समर्थित होने वाली पहली श्रृंखला ग्नोसिस चेन थी! इंडेक्सर की तत्परता, मांग और सामुदायिक भावना के आधार पर, पूरे एमआईपी कार्यक्रम में नई श्रृंखलाओं की घोषणा की जाएगी। एमआईपी के प्रदर्शन और स्कोरिंग और पात्रता आवश्यकताओं के बारे में अधिक पढ़ने के लिए, यहां देखें।<br></br><br></br>विकेंद्रीकृत <a className="cla" href='https://twitter.com/gnosischain' target="_blank" rel="noreferrer">नेटवर्क</a> पर समर्थित होने वाली पहली श्रृंखला ग्नोसिस चेन थी! इंडेक्सर की तत्परता, मांग और सामुदायिक भावना के आधार पर, पूरे एमआईपी कार्यक्रम में नई श्रृंखलाओं की घोषणा की जाएगी। एमआईपी के प्रदर्शन और स्कोरिंग और पात्रता आवश्यकताओं के बारे में अधिक पढ़ने के लिए, <a className="cla" href='https://thegraph.com/blog/mips-multi-chain-indexing-incentivized-program/' target="_blank" rel="noreferrer">यहां</a> देखें।<hr></hr>अब तक घोषित श्रृंखलाओं को नीचे पाया जा सकता है।<br></br><br></br>
  <a className="cla" href='https://twitter.com/graphprotocol/status/1613980493787312128?s=20&t=_FqJsNOl6vvyIYt3B0KCfg' target="_blank" rel="noreferrer"><strong>Gnosis</strong></a> बीटा एकीकरण पूर्ण<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615443632252948480' target="_blank" rel="noreferrer"><strong>बहुभुज</strong></a> एकीकरण चल रहा है<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772854838231040?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>आर्बिट्रम</strong></a> जल्द ही आ रहा है!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772857211961354?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>हिमस्खलन</strong></a> जल्द ही आ रहा है!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772859678457859?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>सेलो</strong></a> जल्द ही आ रहा है!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772862110900225?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>आशावाद</strong></a> जल्द ही आ रहा है!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonNews() {
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  const message = this.createChatbotMessage(<a>यदि आप द ग्राफ के बारे में नवीनतम समाचार, नई साझेदारी घोषणाओं के साथ अद्यतित रहना चाहते हैं और समुदाय के भीतर क्या चल रहा है, इसके बारे में पढ़ना चाहते हैं, तो नीचे दिए गए लिंक इसमें आपकी सहायता कर सकते हैं।<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">द ग्राफ ब्लॉग</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">ग्राफ एडवोकेट्स स्पॉटलाइट</a><br></br><br></br><a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">ट्विटर</a><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>श्रेणियाँ मेनू</strong></button></a>
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
  }}><strong>वेब क्या है?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCourses();
    this.handleButtonLearnWeb3();
  }}><strong>पाठ्यक्रम</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLearnWeb3();
    this.handleButtonLearnWeb3();
  }}><strong>जानें Web3</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWhatIsABlockchain();
    this.handleButtonLearnWeb3();
  }}><strong>ब्लॉकचेन</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSafe();
    this.handleButtonLearnWeb3();
  }}><strong>क्या ये सुरक्षित है?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWeb3DApp();
    this.handleButtonLearnWeb3();
  }}><strong>वेब3 डीएपी</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCryptocurrencies();
    this.handleButtonLearnWeb3();
  }}><strong>क्रिप्टोकरेंसी</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>Ethereum</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGas();
    this.handleButtonLearnWeb3();
  }}><strong>गैस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>सिक्का या टोकन</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMining();
    this.handleButtonLearnWeb3();
  }}><strong>खुदाई</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleNFT();
    this.handleButtonLearnWeb3();
  }}><strong>एनएफटी</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMetaverse();
    this.handleButtonLearnWeb3();
  }}><strong>मेटावर्स</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSmartContract();
    this.handleButtonLearnWeb3();
  }}><strong>स्मार्ट अनुबंध</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleStablecoin();
    this.handleButtonLearnWeb3();
  }}><strong>स्थिर मुद्रा</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLayerTwo();
    this.handleButtonLearnWeb3();
  }}><strong>परत दो</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenEconomics();
    this.handleButtonLearnWeb3();
  }}><strong>टोकन अर्थशास्त्र</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenBurn();
    this.handleButtonLearnWeb3();
  }}><strong>टोकन बर्न</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCoreDevs();
    this.handleButtonLearnWeb3();
  }}><strong>नोड्स</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDAO();
    this.handleButtonLearnWeb3();
  }}><strong>डीएओ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCEX();
    this.handleButtonLearnWeb3();
  }}><strong>सीईएक्स</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDEX();
    this.handleButtonLearnWeb3();
  }}><strong>डेक्स</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIPFS();
    this.handleButtonLearnWeb3();
  }}><strong>आईपीएफएस</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePOI();
    this.handleButtonLearnWeb3();
  }}><strong>पीओआई</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePOS();
    this.handleButtonLearnWeb3();
  }}><strong>पीओ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePOW();
    this.handleButtonLearnWeb3();
  }}><strong>पाउ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleZKProof();
    this.handleButtonLearnWeb3();
  }}><strong>ZKप्रूफ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleZKSnark();
    this.handleButtonLearnWeb3();
  }}><strong>ZKSnark</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleZKStark();
    this.handleButtonLearnWeb3();
  }}><strong>ZKStark</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWomenInWeb3();
    this.handleButtonLearnWeb3();
  }}><strong>Web3 में महिलाएं</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>श्रेणियाँ मेनू</strong></button></a>
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
  const message = this.createChatbotMessage(<a>क्षमा करें, मुझे उत्तर नहीं मिला। क्या आप फिर से कोशिश कर सकते हैं या प्रश्न को दोबारा बदल सकते हैं? अगर मैं अब भी आपकी मदद नहीं कर सकता, तो कृपया नीचे दिया गया फ़ीडबैक फ़ॉर्म भरने के लिए 2 मिनट का समय लें। आपकी मदद से, यह मेरे ज्ञान में सुधार करेगा और मुझे भविष्य में अन्य जीआरटी समुदाय के सदस्यों की मदद करने में सक्षम करेगा जिनके पास भी वही प्रश्न हो सकते हैं और उत्तर ढूंढ रहे हैं। धन्यवाद! 
  
  {/* help start */}

  <br></br><br></br>आप नीचे दिए गए बटनों का भी उपयोग कर सकते हैं और उत्तर खोजने के लिए नीचे स्क्रॉल करें!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>लेखाचित्र</strong></button><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>डैलिगेटर</strong></button><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>संग्रहाध्यक्ष</strong></button><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>इंडेक्सर</strong></button><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>कोर देव</strong></button><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>सबग्राफ</strong></button><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>लाइव सांख्यिकी</strong></button><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>समुदाय</strong></button><button className="chatbot-button" onClick={this.handleButtonNews}><strong>समाचार</strong></button><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>जानें Web3</strong></button>

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

export default HINActionProvider;