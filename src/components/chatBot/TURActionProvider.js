import React from 'react';
import '../../App.css';
import { ChatBotActiveDelegatorCountBar ,  ChatBotHoldersCountBar, ChatBotActiveDelegationCountBar, ChatBotSubgraphsCountBar, ChatBotCuratorsCountBar, ChatBotActiveIndexerCountBar, ChatBotTotalGRTDelegatedByDelegatorsBar, ChatBotTotalQueryFeesCountBar, ChatBotTotalGRTSignalledByCuratorsBar, ChatBotTotalStakedGRTCountBar, ChatBotTotalDelegatedGRTByIndexersCountBar, ChatBotTotalGRTBurnedCountBar } from "../mainBarCharts/BarChartsData";
import Embed from 'react-embed';

class TURActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
// Charts / Graphs Start
handleActiveDelegatorCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Aktif delegatör sayısı <ChatBotActiveDelegatorCountBar /> şeklindedir.</h4> Aktif delegatör sayısını tam görünümde görmek için <a className="cla" href="https://grtdatahub.com/ActiveDelegatorCount" target="_blank" rel="noreferrer">buradan tıklayın</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveDelegationCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Aktif delegasyon sayısı <ChatBotActiveDelegationCountBar /> şeklindedir.</h4> Aktif delegasyon sayısını tam görünümde görmek için <a className="cla" href="https://grtdatahub.com/ActiveDelegationCount" target="_blank" rel="noreferrer">buradan tıklayın</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleHoldersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Holder sayısı <ChatBotHoldersCountBar /> şeklindedir.</h4> Holder’ların sayısını tam görünümde görmek için <a className="cla" href="https://grtdatahub.com/HoldersCount" target="_blank" rel="noreferrer">buradan tıklayın</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleSubgraphsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Subgraph sayısı <ChatBotSubgraphsCountBar /> şeklindedir.</h4> Subgraph sayısını tam görünümde görmek için  <a className="cla" href="https://grtdatahub.com/SubgraphsCount" target="_blank" rel="noreferrer">buradan tıklayın</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleCuratorsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Küratör sayısı <ChatBotCuratorsCountBar /> şeklindedir.</h4> Küratör sayısını tam görünümde görmek için <a className="cla" href="https://grtdatahub.com/CuratorsCount" target="_blank" rel="noreferrer">buradan tıklayın</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveIndexerCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Aktif indeksleyici sayısı <ChatBotActiveIndexerCountBar /> şeklindedir.</h4> Aktif indeksleyici sayısını tam görünümde görmek için <a className="cla" href="https://grtdatahub.com/ActiveIndexerCount" target="_blank" rel="noreferrer">buradan tıklayın</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTDelegatedByDelegators() {
  const message = this.createChatbotMessage(<a> 
  <h4>Delegatörler tarafından delege edilen GRT'nin toplam miktarı <ChatBotTotalGRTDelegatedByDelegatorsBar /> şeklindedir.</h4> Delegatörler tarafından delege edilen toplam GRT miktarını tam görünümde görmek için  <a className="cla" href="https://grtdatahub.com/TotalGRTDelegatedByDelegators" target="_blank" rel="noreferrer">buradan tıklayın</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalQueryFeesCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Toplam sorgu ücreti sayısı şudur: <ChatBotTotalQueryFeesCountBar/> GRT.</h4> Toplam sorgu ücreti sayısını tam görünümde görmek için <a className="cla" href="https://grtdatahub.com/TotalQueryFeesCount" target="_blank" rel="noreferrer">buradan tıklayın</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTSignalledByCurators() {
  const message = this.createChatbotMessage(<a> 
  <h4>Küratörler tarafından sinyalize edilen toplam GRT miktarı <ChatBotTotalGRTSignalledByCuratorsBar/>.</h4> Küratörler tarafından sinyalize edilen toplam GRT miktarını tam olarak görmek için <a className="cla" href="https://grtdatahub.com/TotalGRTSignalledByCurators" target="_blank" rel="noreferrer">buradan tıklayın</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalStakedGRTCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Toplam stake edilen GRT tutarı <ChatBotTotalStakedGRTCountBar/>.</h4> Stake edilen toplam GRT miktarını tam görünümde görmek için <a className="cla" href="https://grtdatahub.com/TotalStakedGRTCount" target="_blank" rel="noreferrer">buradan tıklayın</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalDelegatedGRTByIndexersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>İndeksleyiciler tarafından delege edilen toplam GRT miktarı <ChatBotTotalDelegatedGRTByIndexersCountBar/>.</h4> İndeksleyiciler tarafından delege edilen toplam GRT miktarını tam görünümde görmek için <a className="cla" href="https://grtdatahub.com/TotalDelegatedGRTByIndexersCount" target="_blank" rel="noreferrer">buradan tıklayın</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTotalGRTBurnedCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Yakılan toplam GRT miktarı <ChatBotTotalGRTBurnedCountBar/>.</h4> Yakılan toplam GRT miktarını tam görünümde görmek için <a className="cla" href="https://grtdatahub.com/TotalGRTBurnedCount" target="_blank" rel="noreferrer">buradan tıklayın</a>.</a>
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
  const message = this.createChatbotMessage(<a>Delege etmek için bir indeksleyici seçmek zor bir karar olabilir. Aşağıdaki bilgi ve kaynaklar size yardımcı olacaktır. Bir indeksleyicinin en yüksek APY'ye sahip olması, sizin için en iyisi olduğu anlamına gelmez. Lütfen kendi araştırmanızı yapın, zaman ayırın ve delege etmek için bir indeksleyici seçerken nelere dikkat etmeniz gerektiğini öğrenin. Bu, delege etmeden önce kendinize güvenmenizi sağlayacaktır.<hr></hr><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-chose-an-indexer-for-delegation-in-graph-protocol-a59725c16062" target="_blank">Graph Protokol’de Delegasyon için Bir İndeksleyici Nasıl Seçilir</a> konulu bu Graphtronauts kılavuzunu  okumak ve <a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">İndeksleyicileri Seçme</a> rehberini izlemek, ne aramanız gerektiğini anlamanıza yardımcı olacaktır.<br></br><br></br><a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts uygulaması</a>, delegatörlerin seçtikleri indeksleyiciler hakkında yararlı bilgiler edinmelerini sağlar. Seçtiğiniz indeksleyicinin ETH adresini girmeniz veya incelemelere göz atmanız yeterlidir. Uygulama içinde indeksleyicileri de karşılaştırabilirsiniz.<br></br><br></br>Delege etmeye hazır olduğunuzda, lütfen <a className="cla" onClick={this.handleDelegateGuides}><strong>buradan tıklayın</strong></a>. Size konuyla ilgili metin ve video eğitimleri sunacağım.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Choosing Indexers End
handleJob() {
  const message = this.createChatbotMessage(<a>Web3'te çalışmak ister misiniz? Öyleyse size güzel bir haberimiz var. The Graph ekosistemi işe alıyor! The Graph Foundation ve çekirdek geliştirme ekiplerinde çeşitli fırsatlar bulunmaktadır. Mevcut açık pozisyonlar için <a className="cla" href="https://thegraph.com/jobs/#open-positions" target="_blank" rel="noreferrer">buradan</a> bir göz atın.</a>
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
    Graph Network, ekosisteme hizmet sağlayan ve Uniswap, Aave ve Synthetix gibi Web3 uygulamalarına veri sunan üç rolden oluşur : İndeksleyiciler, Küratörler ve Delegatörler. Rollerin her biri için ayrıntılı belgeleri aşağıda bulabilirsiniz.<br></br><a className="cla" onClick={this.handleBecomeIndexer}><strong>İndeksleyiciler</strong></a><br></br><a className="cla" onClick={this.handleCurator}><strong>Küratörler</strong></a><br></br><a className="cla" onClick={this.handleDelegateGuides}><strong>Delegatörler</strong></a><br></br><br></br>Graph Network’ün ekonomik güvenliğini ve sorgulanan verilerin bütünlüğünü sağlamak için, katılımcılar Graph token’larını (GRT) yatırır ve kullanır. GRT, ağdaki kaynakları tahsis etmek için kullanılan, Ethereum blok zincirinde bulunan bir ERC-20 token’dır. Aktif indeksleyiciler, küratörler ve delegatörler, gerçekleştirdikleri iş miktarı ve GRT hisseleriyle orantılı olarak hizmet sağlayabilir ve ağdan gelir elde edebilirler.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleEdgeAndNode() {
  const message = this.createChatbotMessage(<a>
    The Graph Network'ün arkasındaki fikir, Graph Protocol, Inc. tarafından tasarlandı ve şekillendirildi.  17 Aralık 2020'de The Graph Network'ün ana ağını başlattıktan sonra, Graph Protocol, Inc. adını Edge & Node olarak değiştirmeye karar verdi. İsim değişikliğinin ardındaki amaç, ağda devam eden ademi merkeziyetçiliği vurgulamaktı. Bu nedenle, Edge & Node artık protokolü geliştiren ve tanıtan merkezi ekip değildir. Bunun yerine, Edge & Node ekosisteme hizmet sunacak ve protokole dahil olacak.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTheGraphFoundation() {
  const message = this.createChatbotMessage(<a>
    <a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank" rel="noreferrer">The Graph Foundation'ın</a> kuruluşu Ekim 2020'de duyurulmuştu. <a className="cla" href="https://ca.linkedin.com/in/evabeylin?original_referer=https%3A%2F%2Fdocs.thegraph.academy%2Fthe-graph-ecosystem%2Forganizational-structure%2Fthe-graph-foundation" target="_blank" rel="noreferrer">Eva Beylin</a> The Graph Foundation'ın Direktörü olarak görev yapmaktadır. Protokolü yönetmekten sorumlu olan The Graph Foundation, ekosisteme koordinasyon ve destek sağlayacaktır. Vakfın kurulması, merkezi olmayan bağımsız bir organizasyon yapısı oluşturma stratejisinin bir parçasıydı.<hr></hr>Meclis üyeleri:<br></br>İndeksleyiciler<br></br>Jim Cousins & Gary Morris<br></br>Kullanıcılar<br></br>Justin J Moses & Kayvon Tehranian<br></br>Araştırmacılar<br></br>Santiago Palladino & Yondon Fu<br></br>destekçiler<br></br>Michael Anderson & Spencer Noon<br></br>İlk Takım<br></br>Brandon Ramirez & Yaniv Tal</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTheGraphCouncil() {
  const message = this.createChatbotMessage(<a>
    Graph <a className="cla" href="https://thegraph.com/blog/introducing-the-graph-council" target="_blank" rel="noreferrer">Konseyi</a>, protokolü merkeziyetsizleştirme planlarının bir parçası olarak Ekim 2020'de tanıtıldı. Graph Konseyi üyeleri Aralık 2020'de aktif oldu. Graph Konseyi, <a className="cla" href="https://thegraph.com/blog/inaugurating-council-and-grants" target="_blank" rel="noreferrer">merkeziyetsiz</a> Graph Ağını yönetir. 10 multisig'in 6'sı, ekosistemdeki beş farklı paydaş grubunun çıkarlarını dengeler: İndeksleyiciler, token sahipleri, başlangıç ekibi, kullanıcılar ve teknik alan uzmanları.<br></br><br></br>Graph Council'in görevi aşağıdaki temel işlevleri içerir:<br></br>Graph Temel İşlemleri<br></br>Hibeler ve Ekosistem Finansman Protokolü<br></br>Yükseltme Protokolü<br></br>Parametreleştirme<br></br>Acil Durum Protokolü İşlemleri<br></br><br></br>Gelecekte, örneğin bireysel üyeleri iç içe geçmiş multisig'ler veya DAO'larla değiştirerek The Graph'ın yönetişiminin daha da merkeziyetsiz hale getirilmesi planlanmaktadır.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Networok Roles End

handleBecomeIndexer() {
  const message = this.createChatbotMessage(<a><strong>Graph Ağında Etkili Bir İndeksleyici Nasıl Olunur?</strong><hr></hr>İndeksleyiciler için Minimum Gereksinimler - Graph Ağı'nda etkili bir indeksleyici olmak için gereken dört ana gereksinim vardır.<br></br><br></br><strong>Stake Tutarı</strong> - İndeksleyici olmak için en az 100.000 GRT stake etmeniz gerekir.<br></br><br></br><strong>Beceriler</strong> - İdeal olarak, indeksleyiciler DevOps'ta bir geçmişe sahip olmalı veya blok zinciri node’larını çalıştırmayı deneyimlemelidir. İndeksleyiciler, bulut veya barındırılan sunucuları dağıtma veya kendi sunucu donanımlarını çalıştırma konusunda rahat olmalıdır. Bir validatör node’u çalıştırmaya ve Linux üzerinde çalışmaya aşinalık da önerilir.<br></br><br></br><strong>Donanım</strong> - Verimliliği, sorgu çıktısını ve hızı dengelemek için birçok indeksleyici genellikle 16 CPU, 1 TB disk ve 32 GB RAM'den oluşan bir kurulumla başlar.<br></br><br></br><strong>Altyapı Yazılımı</strong> - Docker ve Kubernetes gibi kapsayıcı ve ölçeklendirme teknolojilerine aşinalık avantajlıdır, ancak Graph yazılımını sıfırdan dağıtmak da mümkündür. Altyapı yazılımı gereksinimleri, özel gereksinimlerinize ve kurulumunuza bağlı olarak PostgreSQL veritabanı, Graph node’u, indeksleyici aracısı, indeksleyici hizmeti, Prometheus ölçüm sunucusu ve potansiyel olarak daha fazlasını içerir.<br></br><br></br>Graph Network'teki indeksleyicilere yönelik en iyi uygulamaları öğrenmek için, ideal indeksleyici topluluk katılımı, önerilen bir indeksleyici teknik kurulumu, kaynaklar ve kılavuzlar ile Graph Protocol üzerinde indeksleme yolculuğunuza başlayın.<br></br><br></br>Bu <a className="cla" href="https://thegraph.com/blog/how-to-become-indexer/" target="_blank" rel="noreferrer">kılavuz</a>, The Graph Network'te sınıfının en iyi indeksleyicisi olmak için operasyonel gereksinimleri, en iyi uygulamaları ve iletişim taktiklerini öğrenmenize yardımcı olur.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// Discord and Telegram Start
handleGraphDiscord() {
  const message = this.createChatbotMessage(<a>The Graph Resmi Discord Sunucusu  <a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">burada</a> bulunabilir.</a>
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
  const message = this.createChatbotMessage(<a>İndeksleme ödülleri, indeksleyiciler ödevlerini her kapattığında toplanır ve dağıtılır. Aktif durumdayken ödevler sürekli olarak ödüller almaya devam eder. İndeksleyiciler, tahsislerini manuel olarak kapatmaya zorlayabilir veya maksimum tahsis süresinden sonra (her 28 epoch/günde bir) otomatik olarak kapanmalarına izin verebilir.<br></br><br></br>28 dönem = ~26 günler<br></br><br></br>Ödevler, aktif olduklarında sürekli olarak ödüller biriktirir. Ödüller indeksleyiciler tarafından toplanır ve tahsisleri kapatıldığında dağıtılır. Bu, indeksleyiciler kapanmaya zorlamak istediğinde manuel olarak veya otomatik olarak en fazla 28 epoch/günde bir gerçekleşir - maksimum tahsis ömrü.<hr></hr>Bekleyen ödüllerinizi görüntülemek için <a className="cla" href="https://www.graphtronauts.com/#/profile" target="_blank" rel="noreferrer">Graphtronauts'u</a> ziyaret edin ve bir cüzdan ekleyin.</a>
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
  const message = this.createChatbotMessage(<a>Bir eşleme her kapatıldığında (bir indeksleyici tarafından el ile veya eşlemenin maksimum yaşam süresinden sonra otomatik olarak), sorgu ücretleri protokol ağ geçidi tarafından tahsil edilir. Sorgu ücretleri, subgraph’in sorgu ücreti geri ödeme havuzunda toplanır. Geri ödeme havuzundan dağıtılan sorgu ücreti tutarı, indeksleyicinin geri ödeme havuzuna katkılarına ve subgraph’te ayrılan payına göre hesaplanır.<br></br><br></br>Bir atama kapatıldıktan sonra, indeksleyiciler sorgu ücretlerini yalnızca anlaşmazlık süresi geçtikten sonra geri talep edebilir. Bir indeksleyici sorgu ücretlerini başarıyla talep ettiğinde, geri ödemeler indeksleyiciye ve delegatörlerine dağıtılır.<br></br><br></br><a className="cla" href="https://en.wikipedia.org/wiki/Cobb%E2%80%93Douglas_production_function" target="_blank" rel="noreferrer">Cobb-Douglas</a> üretim fonksiyonunu takiben, tüm ağ katılımcılarını (indeksleyiciler gibi) The Graph Network'e katkılarına göre ödüllendiren bir itfa havuzu oluşturulur. Rebate Havuzu'nun arkasındaki amaç, indeksleyicleri, ağ için kazandıkları sorgu ücreti miktarıyla kabaca bir oranda GRT yatırmaya teşvik etmektir. Geri ödeme havuzu, kendisine katkıda bulunan danışma ücretlerinin sabit bir kısmını alır.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleIndexingRewardsAndQueryFees() {
  const message = this.createChatbotMessage(<a>İndeksleme ödülleri, alt grafiğin iyileştirme sinyaliyle orantılı olarak alt grafikler arasında dağıtılır. Dizin oluşturucular, endeksleme ödüllerini belirli bir alt grafikte ayırdıkları payla orantılı olarak alırlar.<br></br><br></br>Endeksleme ödülleri, yıllık %3'e ayarlanan protokol enflasyonu tarafından oluşturulur.<br></br><br></br>Tüm tahsislerin geçerli bir indeksleme kanıtı (POI) ile kapatılması gerekir.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handlePOI() {
  const message = this.createChatbotMessage(<a>Sözde indeksleme kanıtı (POI), indeksleyicilerin aslında paylarını atadıkları subgraph’leri indekslediklerini doğrular. Bir bloğun POI’si, bir subgraph’te uygulamayı ayrıntılandıran varlık deposunun tüm işlemlerinin bir özetidir. İndeksleme ödülleri almak için, indeksleyicilerin bir atamayı tahkim tüzüğü tarafından belirlenen standartları karşılayan geçerli bir indeksleme kanıtı (POI) ile kapatmaları gerekir. İndeksleyiciler, geçerli bir POI olmadan ödüller almaya uygun değildir. Bir tahsisatı kapatırken, indeksleyici geçerli çağın/dönemin ilk bloğu için bir POI  göndermelidir.<br></br><br></br>İndeksleme ödülleri, indeksleyiciler ödevlerini her kapattığında toplanır ve dağıtılır. Aktif durumdayken ödevler sürekli olarak ödüller almaya devam eder. İndeksleyiciler, tahsislerini manuel olarak kapatmaya zorlayabilir veya maksimum tahsis süresinden sonra (her 28 epoch/günde bir) otomatik olarak kapanmalarına izin verebilir.</a>
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
  const message = this.createChatbotMessage(<a>Network’e indeksleyici olarak katılmak için donanım gereksinimleri aşağıdaki tabloda bulunabilir.<hr></hr><table><tr className="indexer-table-header">
    <th>Ayarlar</th>
    <th>Postgres (CPU)</th>
    <th>Postgres (GB cinsinden bellek) </th>
    <th>Postgres (TB cinsinden disk) Sanal Makineler (CPU) </th>
    <th>VM'ler (CPU'lar) </th>
    <th>VMs (GB cinsinden bellek) </th>
  </tr>
  <tr className="indexer-table">
  <td>Küçük</td>
    <td>4</td>
    <td>8</td>
    <td>1</td>
    <td>4</td>
    <td>16</td>
  </tr>
  <tr className="indexer-table">
  <td>Standart</td>
    <td>8</td>
    <td>30</td>
    <td>1</td>
    <td>12</td>
    <td>48</td>
  </tr>
  <tr className="indexer-table">
  <td>Orta</td>
    <td>16</td>
    <td>64</td>
    <td>2</td>
    <td>32</td>
    <td>64</td>
  </tr>
  <tr className="indexer-table">
  <td>Uzunluk</td>
    <td>72</td>
    <td>468</td>
    <td>3.5</td>
    <td>48</td>
    <td>184</td>
  </tr>
</table>
<br></br><br></br>Küçük = Birden çok subgraph’i indekslemeye başlamak için yeterlidir.<br></br>Standart = Varsayılan ayar<br></br>Orta = 100 subgraph’i indekslemek ve saniyede 200 ila 500 istek yapmak için gereklidir.<br></br>Büyük = Şu anda kullanılan tüm sugbraph’leri indekslemek ve ilgili trafik isteklerini sunmak için gereklidir.
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
  const message = this.createChatbotMessage(<a>Ödevler aktifken sürekli olarak ödüller biriktirir. Ödüller indeksleyiciler tarafından toplanır ve ödevleri her kapatıldığında dağıtılır. Bu, indeksleyici kapanmayı zorlamak istediğinde manuel olarak veya otomatik olarak en fazla 28 çağda/günde bir gerçekleşir: Maksimum tahsis ömrü.</a>
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
  const message = this.createChatbotMessage(<a>Subgraph IPFS karmasının ID'den nasıl alınacağına ve bunun tersi hakkında indeksleyiciler için belgeler <a className="cla" href="https://docs.thegraph.academy/network/indexers/technical-documentation/get-ipfs-hash-from-deployment-id" target="_blank" rel="noreferrer">burada</a> bulunabilir.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// IPFS End
handleTools() {
  const message = this.createChatbotMessage(<a><a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts uygulaması</a>, delegatörlerin seçtikleri indeksleyiciler hakkında yararlı bilgiler edinmelerini sağlar. Sadece seçtiğiniz indeksleyicinin ETH adresini girin veya aşağıdaki incelemelere bir göz atın.<br></br><br></br>Diğer çok yararlı siteler şunlardır:<br></br><br></br><a className="cla" href="http://ww25.oracleminer.com/graph/indexer/0x7ab4cf25330ed7277ac7ab59380b68eea68abb0e?subid1=20220530-2214-27fd-afb4-5d675e9469e5s" target="_blank" rel="noreferrer">OracleMiner.com</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://graphscan.io/" target="_blank" rel="noreferrer">GraphScan.io</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://thegraph.live/" target="_blank" rel="noreferrer">TheGraph.Live</a><br></br><br></br><a className="cla" href="https://www.notion.so/Community-Guides-abbb10f4dba040d5ba81648ca093e70c" target="_blank" rel="noreferrer">Topluluk Araçları ve Kılavuzları</a></a>
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
  const message = this.createChatbotMessage(<a>GRT'yi bir indeksleyiciye her devrettiğinizde, %0,5 güçlü delegasyon ücreti düşünmelisiniz Örneğin, 10.000 GRT delege ederseniz, sizden 50 GRT tahsil edilir. Seçtiğiniz indeksleyici size günde 2 GRT kâr potansiyeli sunuyor diyelim. Bu varsayıma göre, kırılmanız 25 gün (50 GRT / 2 GRT) sürer. Ekonomik açıdan sağlam kararlar almak için, delegasyonunuzdan % 0,5 vergiyi geri almanın ne kadar süreceğini de hesaplamanız gerekir.<br></br><br></br>Bir delegasyon için indeksleyici seçmek, iki ETH işlemini imzalamayı gerektirir. Ayrıca, yalnızca 100 ABD doları delege etmek istediğinizi varsayalım. Bu durumda, delegasyon işleminin işlem maliyetleri, TSO yığınınızın %25'ini oluşturur. Bu, başabaş noktasına kadar geçen sürenin önemli ölçüde artacağı anlamına gelir.<br></br>Delegatörler delege etmek isterlerse, tokenlarına hemen erişemezler. Stake edilmiş tokenlar 26 günlük bir çözülme süresine tabidir, ancak o zaman delegatörler tokenlarını serbestçe aktarabilir veya başka bir indeksleyiciye yeniden devredebilir.<br></br><br></br>Saygın, güvenilir ve etkili bir indeksleyici seçmek, hafife alınmaması gereken önemli bir karardır. Durum tespiti yapmayan delegatörler, düşük performans gösteren bir indeksleyiciye delegasyon riskiyle karşı karşıyadır. Benzer şekilde, uzun vadede gerçekçi olmayan iştah kabartan bir APY'nin (Yıllık Yüzde Getirisi) reklamını yapmak için şüpheli uygulamalara katılan veya delegasyonları kısa bir süre için sübvanse eden bir indeksleyici seçme riskiyle karşı karşıya kalabilirler.<br></br><br></br>Delegatör olmanın riskleri hakkındaki belgeleri <a className="cla" href="https://thegraph.academy/delegators/risks/" target="_blank">burada</a> bulabilirsiniz.<br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank" rel="noreferrer">GRT belirteçlerinizi devretmek için gaz maliyetini nasıl düşürürsünüz?</a><br></br><br></br>Şu anda bir delegasyon işleminin ortalama maliyetini öğrenmek için <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> uygulamasını ziyaret edin ve Ücretler'i seçin.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Delegate Guides Start
handleDelegateGuides() {
  const message = this.createChatbotMessage(<a>Delegatör olmak için ihtiyacınız olanı size sağlayacağım. Aşağıdaki bilgi ve kaynaklar size yardımcı olacaktır.<hr></hr><a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">Dizin Oluşturucuları Seçme öğreticisini izlemek</a>, ne aramanız gerektiğini anlamanıza yardımcı olacaktır. Temsilci seçmeden önce kendinizden emin olduğunuzu anlamak için, daha fazla bilgi edinmek üzere aşağıdaki öğreticileri izleyin.<br></br><br></br>GRT tokenlarınızı <a className="cla" href="https://thegraph.com/explorer/participants/indexers" target="_blank">network.thegraph.com</a> üzerinde seçtiğiniz bir indeksleyiciye stake ederek yatırabilirsiniz.<br></br>Delegatörleri bir indeksleyiciye taahhütte bulunmaya teşvik etmek için delegasyon sırasında tahakkuk ettirilen % 0,5'lik bir delegasyon vergisi vardır.<br></br><br></br>GRT'nizi nasıl stake edebileceğinize veya yatıracağınıza ilişkin kılavuzları <a className="cla" href="https://docs.thegraph.academy/network/delegators/general-documentation-1/choosing-indexers/guides" target="_blank">burada</a> bulabilirsiniz.<br></br><br></br>Stake’ten tokenlarınızı kaldırmak 26 gün sürer, çünkü bu bir tahsisin maksimum süresidir.<br></br><br></br>
  Graphtronauts ayrıca konuyla ilgili kendi kılavuzlarını da hazırladı:<br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-stake-your-tokens-with-the-graph-the-complete-guide-to-become-a-delegator-3f723e6420b1" target="_blank">Delegatör Olmak İçin Eksiksiz Kılavuz</a><br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s" target="_blank">Coinbase Wallet Staking Rehberi</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/binance-staking-vs-delegating-with-the-graph-network-b4ba7e259b73" target="_blank">Binance Staking ve The Graph Network ile Delegasyon Farkı</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/faq-for-the-graph-delegators-2b4a03a830f2" target="_blank">Graph Delegatörleri için SSS</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank">GRT tokenlarınızı devretmek için gaz maliyetini nasıl düşürürsünüz?</a><br></br><br></br>Bir delegasyon işleminin ortalama maliyeti için, <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank">Graphtronauts'u</a> ziyaret edin ve Ücretler'i seçin.<hr></hr><strong>Türkçe rehber makaleler ise aşağıda yer alıyor!</strong><br></br><br></br>"The Graph Stake Kılavuzu",  <a className="cla" href="https://onursarayli.medium.com/the-graph-stake-k%C4%B1lavuzu-9f0dada08b73" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<br></br><br></br>"GRT Tokenlarınızı Coinbase Cüzdanıyla Nasıl Stake Edebilirsiniz?",  <a className="cla" href="https://onursarayli.medium.com/grt-tokenlar%C4%B1n%C4%B1z%C4%B1-coinbase-c%C3%BCzdan%C4%B1yla-nas%C4%B1l-stake-edebilirsiniz-b908b7bb436b" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<br></br><br></br>"Bir Donanım Cüzdanı ile GRT Tokenlarınızı Nasıl Stake Edebilirsiniz?”,  <a className="cla" href="https://onursarayli.medium.com/bir-donan%C4%B1m-c%C3%BCzdan%C4%B1-ile-grt-tokenlar%C4%B1n%C4%B1z%C4%B1-nas%C4%B1l-stake-edebilirsiniz-d84c745540ff" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleQueryPython() {
  const message = this.createChatbotMessage(<a><strong>Python kullanarak dize verileri için Graph Protocol nasıl sorgulanır?</strong><br></br><br></br><a className="cla" href="https://hashnode.com/@townee" target="_blank">Tony Kipkemboi</a>, Python, GraphQL ve Subgrounds kullanarak subgraph’lerin nasıl sorgulanacağına dair inanılmaz bir adım adım kılavuz hazırladı.<br></br><br></br>Blogun tamamını <a className="cla" href="https://townee.hashnode.dev/how-to-query-the-graph-protocol-for-on-chain-data-using-python" target="_blank">burada</a> bulabilirsiniz.<br></br><br></br>İkinci blog yazısı topluluğa sunulduğunda gelişmeleri kaçırmamak için <a className="cla" href="https://twitter.com/ynot_kip" target="_blank">Tony'yi</a> Twitter'da takip edebilirsiniz, "Barındırılan hizmet iptal edildiğinde subfloor’ları nasıl kullanırım?"</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWeb3DApp() {
  const message = this.createChatbotMessage(<a>Web3 merkeziyetsiz uygulamaları nasıl çalışır?<br></br><br></br>"Web3 Mimarisi için Tam Bir Kılavuz" u <a className="cla" href="https://twitter.com/suhailkakar/status/1555894207570513920?s=21&t=FoLxHgWLO78VA_3VheV_DQ" target="_blank">burada</a>, son derece yararlı bir Twitter dizisinde bulabilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSoulBound() {
  const message = this.createChatbotMessage(<a> Merkeziyetsiz uygulamalar oluşturmak imkansız zorlukta olmamalıdır.<br></br><strong><a className="cla" href="https://soulbound.xyz/" target="_blank">Soulbound Studio</a></strong> bunu kolaylaştırır.<br></br>Kodlama gerekmez.<br></br><br></br>Tamamen merkeziyetsiz web3 arayüzleri ve API'leri tasarlamak, yinelemek ve yayınlamak için birleşik bir arayüz.<br></br><br></br>İstenilen özellikleri ve hata raporlarını paylaşarak Soulbound Studio'yu tasarlamalarına yardımcı olmak istiyorsanız, <a className="cla" href="https://discord.com/invite/Eu3Eeh4J6a" target="_blank">Discord'larına</a> katılın.<br></br><br></br>En son sürümlerini ve haberlerini takip etmek için <a className="cla" href="https://twitter.com/SoulboundLabs" target="_blank">Twitter'da</a> Soulbound Labs'ı takip edin.<br></br><br></br>Herhangi bir kodlama yapmadan Soulbound Studio'yu kullanarak dakikalar içinde Subgraphs dApps ve Analytics'i nasıl oluşturabileceğinize dair bir video eğitimi için alt kısmı göz atın.<br></br><br></br>
  <Embed className="embed" isDark url='https://www.youtube.com/watch?v=IEmr280lGSU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIPhone() {
  const message = this.createChatbotMessage(<a>Telefonunuzda çok fazla para ve değerli NFT’leri sıcak bir cüzdanda tutmayın! Çünkü iPhone'unuz muhtemelen MetaMask bilgilerinizi iCloud ile senkronize ediyor. Varsayılan olarak açıktır, işte karşınızda bunu nasıl kapatılacağına dair son derece kullanışlı bir <a className="cla" href="https://twitter.com/plumferno/status/1556187973200351234?s=21&t=a-4X_QM7BzHRKcJe8aPc_w" target="_blank">Twitter</a> dizisi.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Query Fees Cut and indexing reward cut Start
handleQueryFeesAndIndexingRewardCut() {
  const message = this.createChatbotMessage(<a>queryFeeCut ve indexingRewardCut değerleri, GRT'lerin indeksleyici ve delegatörleri arasındaki dağılımını denetlemek için indeksleyicinin cooldownBlocks ile birlikte ayarlayabileceği delegasyon parametreleridir. Delegasyon parametrelerinin nasıl yapılandırılacağına ilişkin yönergeler için Protokol stake’indeki son adımlara bakın.<br></br><br></br>queryFeeCut: İndeksleyicilere dağıtılmak üzere bir subgraph’te biriken sorgu ücreti iadelerinin yüzdesidir. %95 olarak ayarlanırsa, indeksleyici bir atama talep edildiğinde sorgu ücreti geri ödeme grubunun %95'ini alır, diğer %5'i ise delegatörlere gider.<br></br><br></br>indexingRewardCut: İndeksleyicilere dağıtılacak bir subgraph’te biriken indeksleme ödüllerinin yüzdesidir. %95 olarak ayarlanırsa, bir ödev kapatıldığında indeksleyici indeksleme ödülleri havuzunun %95'ini alır ve delagörler diğer %5'i paylaşır.</a>
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
  const message = this.createChatbotMessage(<a>Graph Protocol, Inc., Nisan 2018'de Jannis Pohlmann, Brandon Ramires ve Yaniv Tal tarafından kuruldu.<br></br><br></br><strong>Jannis Pohlmann</strong>, teknoloji lideri ve kurucu ortağı. <a className="cla" href="https://de.linkedin.com/in/jannispohlmann" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/jannispohlmann" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br><strong>Brandon Ramirez</strong>, Araştırma Lideri ve Kurucu Ortak. <a className="cla" href="https://www.linkedin.com/in/1stramirez" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/rezbrandon?lang=en" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br><strong>Yaniv Tal</strong>, proje lideri ve kurucu ortağı. <a className="cla" href="https://www.linkedin.com/in/yanivtal9" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla"  href="https://twitter.com/yanivgraph" target="_blank" rel="noreferrer">Twitter</a></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://www.crunchbase.com/organization/the-graph/investor_financials" target="_blank" rel="noreferrer">Crunchbase.com</a> göre, The Graph 7 turda toplam 69,6 milyon dolarlık fon topladı. Son finansmanı 21 Ocak 2022'de bir Venture - Series Unknown turundan toplandı.<br></br><br></br>The Graph, 27 yatırımcı tarafından finanse edilmektedir. Blockwall Management ve FinTech Collective en yeni yatırımcılardır.<br></br><br></br>The Graph, tek bir girişim fonu olan The Graph Ecosystem Fund'da toplam 205 milyon dolar topladı. Bu fon 18 Şubat 2022'de açıklandı ve toplam 205 milyon dolar topladı.</a>
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
  const message = this.createChatbotMessage(<a>Graph $GRT, Ethereum ve IPFS gibi ağları sorgulamak için kullanılan bir indeksleme protokolüdür. Herkes subgraph adı verilen açık API'ler oluşturup yayınlayarak verilere kolayca erişilebilmesini sağlayabilir. Kısacası, The Graph, herkesin yalnızca birkaç tuşa basarak sorgulaması için uygulamalar arasında dönüştürülebilen, organize edilebilen ve paylaşılabilen veriler sağlar. <br></br><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/" target="_blank" rel="noreferrer">The Graph Nasıl Yönetilir?</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-council" target="_blank" rel="noreferrer">The Graph Konseyi</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-foundation" target="_blank" rel="noreferrer">The Graph Vakfı</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#advocates-dao" target="_blank" rel="noreferrer">Graph Advocates­DAO</a><br></br><br></br>Graphtronauts tarafından hazırlanan “The Graph nedir ve neden teknoloji endüstrisinde bir sonraki büyük şeydir?” kitabını <a className="cla" href="https://blog.graphtronauts.com/the-graph-history-2017-2020-75cc40132992" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<br></br><br></br>Graphtronauts tarafından yapılan 'Grafik Nedir ve neden teknoloji endüstrisindeki bir sonraki büyük şey' başlıklı makaleyi <a className="cla" href="https://blog.graphtronauts.com/what-is-the-graph-and-why-is-the-next-big-thing-in-the-technology-industry-25051fae4256" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<br></br><br></br>“Blockchain'lerin Google'ı”nın ne olduğuna dair bir video açıklaması için, <a className="cla" href="https://youtu.be/7gC7xJ_98r8" target="_blank" rel="noreferrer">buradan</a> göz atmyı unutmayın.<hr></hr><strong>Türkçe rehber makaleler ise aşağıda yer alıyor!</strong><br></br><br></br>"Graph Protocol | fiyat, tartışma ve spekülasyon alanı”,  <a className="cla" href="https://bitcointalk.org/index.php?topic=5278803.0" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<br></br><br></br><hr></hr><strong>Türkçe rehber makaleler ise aşağıda yer alıyor!</strong><br></br><br></br>"The Graph Hakkında”,  <a className="cla" href="https://onursarayli.medium.com/graph-hakk%C4%B1nda-e7d236dbcc62" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<br></br><br></br>"Graph: Birinci Yıl ve Web3 Rönesansı”,  <a className="cla" href="https://onursarayli.medium.com/graph-birinci-y%C4%B1l-ve-web3-r%C3%B6nesans%C4%B1-71ba13e0e3c0" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<Embed className="embed" isDark url='https://www.youtube.com/watch?v=QpxgDsDl2Zk'/></a>
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
  const message = this.createChatbotMessage(<a>Airdrop'larla ilgili olarak, The Graph, insanların tokenları için çalışmasını sağlayan birkaç projeden biridir. Küratöryel program çok yoğundu ve insanlar subgraph’ler hakkında bilgi edinmek, verileri düzenlemek ve ağa katkıda bulunmak için çok zaman harcadılar. Bu, ekibi The Graph'te Web3'ü büyütmeye adanmış iyi eğitimli ve teşvik edilmiş bir geliştirici topluluğuna sahip olmak için inanılmaz bir konuma getiriyor. Şu anda, planlanan herhangi bir airdrop yoktur.</a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://twitter.com/CoinMarketCap/status/1341310792461918210" target="_blank" rel="noreferrer">CoinMarketCap Earn</a> ve <a className="cla" href="https://twitter.com/coinbase/status/1339723594566406156?s=20" target="_blank" rel="noreferrer">Coinbase Earn</a>, ağ hakkında bilgi edinen ve soruları yanıtlayan katılımcılar için ücretsiz GRT tokenları veriyor.<hr></hr>Pşşt! GRT'yi ücretsiz kazanmanın en iyi yolu, stake etmek ve ödüller kazanmaktır.
  </a>
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
  const message = this.createChatbotMessage(<a>Graph Github'ın adresini burada bulabilirsiniz: <a className="cla" href="https://github.com/graphprotocol/" target="_blank" rel="noreferrer">github.com/graphprotocol/</a></a>
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
  const message = this.createChatbotMessage(<a>The Graph'in resmi Ar-Ge yol haritasına <a className="cla" href="https://thegraph.com/blog/roadmap-2022" target="_blank" rel="noreferrer">buradan</a> ulaşabilirsiniz.<br></br><br></br>The Graphtronauts tarafından yazılan 2023 The Graph Yol Haritası <a className="cla" href="https://medium.com/@OG-Graphtronauts/the-graph-roadmap-for-2023-952b17d20d71" target="_blank" rel="noreferrer">burada</a> bulunabilir.<hr></hr><strong>Türkçe rehber makaleler ise aşağıda yer alıyor!</strong><br></br><br></br>"Graph Ar-Ge Yol Haritası”,  <a className="cla" href="https://onursarayli.medium.com/graph-ar-ge-yol-haritas%C4%B1-7eabe4a656a7" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<br></br><br></br>Bu makalede, 2023'te gün ışığına çıkacak ve The Graph ağını bugün olduğundan daha güçlü hale getirecek dört geliştirme alanını öğreneceksiniz:<br></br>Barındırılan hizmetin alacakaranlığı<br></br>Firehose<br></br>Substreams<br></br>Arbitrum One ile protokolü L2'ye taşıma</a>
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
  const message = this.createChatbotMessage(<a>The Graph, Facebook tarafından geliştirilen açık kaynaklı bir sorgu dili olan GraphQL'yi kullanır. Şemanın her öğesinin bir açıklaması vardır. GraphQL'yi öğrenin ve ardından blok zincirinden istediğiniz tüm verileri kurtarabilirsiniz.<hr></hr>GraphQL, uygulama programlama arabirimleri (API'ler) için müşterilere tam olarak istedikleri verileri vermeye öncelik veren ve başka bir şey yapmayan sunucu tarafı bir sorgu ve çalışma zamanı dilidir.  GraphQL, API'leri geliştiricilerin kullanımı için hızlı, esnek ve kolay hale getirmek üzere tasarlanmıştır. GraphQL API'si, geliştiricilerin The Graph tarafından indekslenen verilere erişmek için kullanabilecekleri API'dir.</a>
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
  const message = this.createChatbotMessage(<a>Fiyatı ve tüm açık piyasaları <a className="cla" href="https://coinmarketcap.com/tr/currencies/the-graph/markets/" target="_blank" rel="noreferrer">CoinMarketCap'te</a> görebilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDecentralisedData() {
  const message = this.createChatbotMessage(<a><strong>Merkeziyetsiz verilerin şafağı</strong><br></br><br></br>The Graph ekosistemi, canlı, merkeziyetsiz geleceği karşılarken kullanıcı beklentilerini karşılamak için adımlar atıyor. Bu dengeyi sağlamak için, barındırma hizmeti desteği kesintisi, kullanılabilirlik, kararlılık ve temel işlevsellik dahil ancak bunlarla sınırlı olmamak üzere çeşitli çıktı ölçütlerine bağlı üç zincir geçiş aşamasına ayrılmıştır.<br></br><br></br> Barındırılan hizmet zincirleri kademeli bir geçiş yapacak ve geliştiricilere merkeziyetsiz ağı tanımak ve subgraph’lerini taşımak için yeterli zaman tanıyacaktır.<br></br><br></br>In order to better support developers, specific dates will not be assigned for each phase in transitioning chains from the hosted service and onto The Graph Network. Addressing developer needs and achieving key exit criteria supersede ending hosted service support. As exit criteria are reached per hosted service chain, that chain will transition in three phases. Look to the progress of the MIPs program to understand when chains are being tested by Indexers, when they become supported on the network and when migrations have begun per chain. Geliştiricileri daha iyi desteklemek için, barındırılan hizmetten The Graph Network'e geçiş zincirlerinde aşamaya özgü tarihler atanmaz. Geliştirici ihtiyaçlarını karşılamak ve temel çıkış ölçütlerine ulaşmak, barındırılan hizmet desteğinin sonlandırılmasının yerini alır. Barındırılan hizmet zinciri başına çıktı ölçütlerine ulaşıldıkça, bu zincir üç aşamada geçiş yapar. İndeksleyicilerin dizeleri ne zaman sınadığını, ağda ne zaman desteklendiklerini ve zincirleme geçişlerin ne zaman başladığını anlamak için MIP programının ilerlemesini izleyin.<br></br><br></br>Barındırılan her hizmet zinciri için, The Graph Network'te desteği etkinleştirmek adına üç geçiş aşaması şunlardır:<br></br>Aşama 1 (The Sunray): Ağda yeterli çekirdek işlevselliğe sahip blok zincirleri için yeni barındırılan hizmetlerin subgraph’lerin oluşturulmasını devre dışı bırakın.<br></br>Aşama 2 (The Sunbeam): Barındırılan hizmetler için subgraph güncelleştirmelerini devre dışı bırakın.<br></br>Aşama 3 (The Sunrise): Barındırılan hizmetler subgraph’leri sorgulamayı devre dışı bırakın.<hr></hr><strong>Türkçe rehber makaleler ise aşağıda yer alıyor!</strong><br></br><br></br>"EIP-4444 Sonrası Geçmiş Ethereum Verilerine Erişim”,  <a className="cla" href="https://onursarayli.medium.com/eip-4444-sonras%C4%B1-ge%C3%A7mi%C5%9F-ethereum-verilerine-eri%C5%9Fim-8513c6e13cdc" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleVsSelfHosting() {
  const message = this.createChatbotMessage(<a><strong>The Graph vs Self Hosting</strong><br></br><br></br><underline>Spoiler uyarısı:</underline> The Graph Ağı daha ucuzdur, kullanımı daha kolaydır ve bir graph node’unu yerel olarak çalıştırmaya kıyasla üstün sonuçlar üretir.<br></br><br></br>The Graph'in merkeziyetsiz ağı, sağlam bir indeksleme ve sorgulama deneyimi oluşturmak için tasarlanmış ve rafine edilmiştir ve dünya çapında binlerce katılımcı sayesinde her geçen gün daha da iyiye gitmektedir. Bu merkeziyetsiz protokolün faydaları, yerel olarak bir graph node’u çalıştırarak çoğaltılamaz. Graph Network daha güvenilir, daha verimli ve daha ucuzdur. İşte size bir analiz:<br></br><br></br><strong>The Graph network’ü neden kullanmalısınız?</strong><br></br>60-98% daha düşük aylık maliyet<br></br>Üstün çalışma süresi.<br></br>Küresel topluluktan 7/24 teknik destek.
<br></br>The Graph Network'ü kullanmanın faydalarının dökümünü okumak için burayı okuyun.
<br></br>Kurulum maliyeti yoktur ve operasyonel verimliliği artırır. Sıfır kurulum ücreti.
<br></br><br></br>Ek yük veya kurulum maliyeti olmadan hemen kullanmaya başlayın.<br></br><br></br>
Donanım gereksinimi yoktur.<br></br><br></br>Merkezi altyapı sayesinde kesinti olmaz ve temel ürününüze odaklanmak için daha fazla zaman ayırın.<br></br><br></br>Yedekleme sunucularına, sorun gidermeye veya pahalı mühendislik kaynaklarına gerek yoktur.Güvenilirlik ve esneklik <br></br>The Graph'in merkeziyetsiz ağı, kullanıcılara bir graph node’unu barındırırken var olmayan coğrafi yedekliliğe erişim sağlar. Sorgular, küresel ağın güvenliğini sağlayan indeksleyiciler tarafından elde edilen %99,9'dan fazla çalışma süresiyle güvenilir bir şekilde sunulur.</a>
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
   const message = this.createChatbotMessage(<a>Subgraph’ler, bir blok zincirinden çıkardığınız verileri düzenlemek için kullanılan veri yapılarıdır. Bunlar, hangi verileri dizine eklemek istediğinizi ve bunların nasıl depolanacağını tanımlamanın bir yoludur. Bazıları ödevlerinde ön toplama veya hesaplamalar yapar, bazıları zincirde bulabileceğinize benzer basit verileri depolar. Bir varlık daha sonra bu verileri sorgular. Bu varlık bir dapp (şirket / geliştirici, vb.), bir Telegram botu, bir Discord botu veya hatta bilgi bulmak için sorgu yapan basit bir kullanıcı olabilir.<br></br><br></br>Barındırılan hizmetten altgrafiklerin danışmanlığı şu anda herkes için ücretsizdir. Merkeziyetsiz protokol için ekip, sorgu maliyetlerinin sorgu başına yaklaşık 0,00001 ABD Doları olmasını bekler, ancak bu serbest bir piyasadır ve her indeksleyici kendi maliyet modellerini ayarlayabilir.<br></br><br></br>15 dakika içinde subgraph’ler ile hızlanmak için bir geliştirici sayfasını <a className="cla" href="https://drive.google.com/file/d/1J2zm06wZV0EwMEGBD48fGbaFKPPcCdZT/view" target="_blank" rel="noreferrer">burada</a> bulabilirsiniz.<br></br><br></br>   Subgraph Studio ile bir subgraph oluşturmak için bir öğretici rehber <a className="cla" href="https://www.youtube.com/watch?v=HfDgC2oNnwo" target="_blank" rel="noreferrer">burada</a> bulunabilir.<br></br><br></br>For an overview and step-by-step guide on building a subgraph made by <a className="cla" href="https://hashnode.com/@camiinthisthang" target="_blank" rel="noreferrer">Camila Ramos</a> tarafından bir subgraph oluşturma hakkında genel bir bakış ve adım adım kılavuz için <a className="cla" href="https://camiinthisthang.hashnode.dev/the-complete-guide-to-getting-started-with-the-graph" target="_blank" rel="noreferrer">buradan</a> bakın.<br></br><br></br>Bir alt grafik arıyorsanız veya ana ağa taşınmış olanları keşfetmek istiyorsanız, <a className="cla" href="https://www.graphtronauts.com/#/subgraphs" target="_blank" rel="noreferrer">Graphtronauts</a> uygulamasını ziyaret edin.<hr></hr><strong>Türkçe rehber makaleler ise aşağıda yer alıyor!</strong><br></br><br></br>"Substreams: Subgraph’ler için Çok Daha Hızlı Dizin Oluşturma Performansı”,  <a className="cla" href="https://onursarayli.medium.com/substreams-subgraphler-i%C3%A7in-%C3%A7ok-daha-h%C4%B1zl%C4%B1-dizin-olu%C5%9Fturma-performans%C4%B1-e886b3bcafa4" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<br></br><br></br>"Cosmos’ta Subgraph’ler Oluşturma”,  <a className="cla" href="https://onursarayli.medium.com/cosmosta-subgraph-ler-olu%C5%9Fturma-50b31fcd0c6?source=social.tw" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.</a>
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
  const message = this.createChatbotMessage(<a>Indexer olmak için 100.000 GRT'ye ve gerekli altyapıya ihtiyacınız var. Zincir üzerinde bir indeksleyici düğümü kaydetmek için stake etmeniz gereken minimum miktardır.<br></br><br></br>Dizin oluşturucuların kapsamlı DevOps becerilerine ve gerekli donanıma ihtiyacı vardır. Dizin oluşturucular, pazar tarafından yetkilendirme parametrelerini değiştirdikleri için "cezalandırılır". Diğer her şey eşit olduğunda ekip, daha düşük soğuma süreleri belirleyen İndeksleyicilerin daha az delegasyon almasını bekler. Ekip ayrıca, delegasyon parametrelerini düzensiz veya çok sık değiştiren Dizin Oluşturucuları tespit etmeyi kolaylaştıran araçlar geliştirmek istiyor. Bu sinyallerden bazıları, gezginin gelecekteki bir sürümüne dahil edilebilir.</a>
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
  const message = this.createChatbotMessage(<a>Gas, bir kullanıcının ağ ile etkileşime girmesi için ağ tarafından gerekli kılınan Ethereum'un yerel kripto para birimi olan ether (ETH) miktarı için kullanılan terimdir.<br></br><br></br> Gas fiyatı, Graph ekibinin kontrol ettiği bir şey değildir. Ethereum ağı sıkışık olduğunda veya yoğun kullanıldığında gas fiyatı artar.<br></br><br></br>Şu anda bir delegasyon işleminin ortalama maliyetini öğrenmek için <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">buradan</a> Graphtronauts uygulamasını ziyaret edin ve Ücretler'i seçin.<br></br><br></br>GRT tokenlarınızı devretmek için gas maliyetini nasıl azaltacağınıza ilişkin rehberlik için <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank" rel="noreferrer">buradan</a> bakın.
<br></br><br></br>Ethereum gas oranları için <a className="cla" href="https://ethereumprice.org/gas/" target="_blank" rel="noreferrer">buradan</a> bakın.</a>
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
  const message = this.createChatbotMessage(<a>Tüm dizin oluşturucu konumlarının bir haritasını görmek için <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> uygulamasını ziyaret edin ve Harita'yı seçin.</a>
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
  const message = this.createChatbotMessage(<a>Dizin oluşturucuları karşılaştırmak için <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> uygulamasını ziyaret edin ve Listele'yi seçin.<br></br><br></br>Karşılaştır düğmesine tıklayın ve ardından karşılaştırmak istediğiniz en fazla beş dizin oluşturucu seçin.<br></br><br></br>Seçtikten sonra, aşağıdaki Karşılaştır Düğmesine tıklayın.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePodcast() {
  const message = this.createChatbotMessage(<a><strong>GRTiQ nedir?</strong><br></br><br></br><a className="cla" href="https://www.grtiq.com/" target="_blank" rel="noreferrer">GRTiQ</a> analiz, araştırma, optimizasyon ve eğitim yoluyla pazar analizi üretir.
  <br></br><br></br><strong>Pazar Analizi</strong> - Delegatörlerin piyasa dinamiklerini daha iyi anlayabilmeleri için pazar analizi ve performans sağlayın.<br></br><br></br><strong>Indexer
Research</strong> - Delegatörlerin fırsatları ve ortaklıkları belirlemek için kullanabilecekleri endeksli araştırmalar yürütün.<br></br><br></br><strong>Ödül Optimizasyonu </strong> – Delegatörlerin ödül kazançlarını optimize etmelerine yardımcı olmak için veriler, kılavuzlar ve analizler oluşturun ve yayınlayın.<br></br><br></br>Ekosistem Eğitimi - The Graph ekosisteminin tüm yönleri hakkında sürekli eğitim kaynakları ve bilgiler sunun.<hr></hr>GRTiQ'nun podcast'lerini <a className="cla" href="https://www.grtiq.com/podcast/" target="_blank" rel="noreferrer">buradan</a> dinleyebilirsiniz.<br></br><br></br>GRTiQ'ya ayak uydurmak için onları <a className="cla" href="https://twitter.com/grt_iq" target="_blank" rel="noreferrer">Twitter</a>, <a className="cla" href="https://www.youtube.com/channel/UCxhFN47AlCDx1Qoaw1oSQ5A" target="_blank" rel="noreferrer">YouTube</a> ve <a className="cla" href="https://www.instagram.com/thegraphiq/" target="_blank" rel="noreferrer">Instagram'da</a> takip edebilirsiniz.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/grt_iq/status/1617269631403831297?s=20&t=C_TtsLrGHQ0b92xQs527lQ'/></a>
   ,
   );
   this.setState((prev) => ({ 
     ...prev,
     messages: [...prev.messages, message],
   }));
 }

 handleGraphSocial() {
   const message = this.createChatbotMessage(<a><strong><a className="cla" href="https://twitter.com/graphsocial1?s=21&t=f_BFECU3y4NfkRXocWA5kQ" target="_blank" rel="noreferrer">Graph Social</a></strong><br></br><br></br>The Graph ekosisteminin büyümesini sağlayan uluslararası bir web3 buluşması. <a className="cla" href="https://twitter.com/Mardeni01" target="_blank" rel="noreferrer">Ahmad Mardeni</a> tarafından organize edildi.<br></br><br></br>İlk Graph Social web3 buluşması, 8 Ekim 2022'de Dubai'de, 6-10pm GST'de 100'den fazla kişinin katılımıyla gerçekleşti. The Graph'in ne olduğunu, son zamanlarda elde edilen kilometre taşlarının neler olduğunu ve nasıl katılacağınızı kapsayan etkinlik!<hr></hr>Ahmad Mardeni ve <a className="cla" href="https://twitter.com/MultiartStudio" target="_blank" rel="noreferrer">MultiArt Studio</a> ile etkinlikten bir röportajı aşağıdan izleyebilirsiniz!<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=KFUxrs10gpI'/></a>
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
  const message = this.createChatbotMessage(<a>The Graph Savunucuları, dünyanın dört bir yanındaki insanlar için web3'e açılan bir portal görevi gören topluluk odaklı bir girişimdir. Savunucular, The Graph topluluğunu ve web3 misyonunu öğrenmek ve katkıda bulunmak için eşsiz bir fırsata sahiptir. Herkes bir savunucu olabilir ve daha sonra Graph AdvocatesDAO'ya katılabilir.<hr></hr><strong><underline>Savunucu Rolleri</underline></strong><br></br><br></br><strong>Etkinlik Evangelisti</strong><br></br>Yerel etkinliklere ev sahipliği yapın, bölgesel etkinliklere katılın ve yüz yüze veya çevrimiçi topluluk etkinliklerine katılın.<br></br><br></br><strong>İçerik Oluşturucu</strong><br></br>Makaleler, videolar, infografikler, meme’ler veya GIF'ler dahil olmak üzere web3 ve The Graph hakkında içerik oluşturun. <br></br><br></br><strong>Metin Çevirmeni</strong><br></br>The Graph'i ve diğer topluluk belgelerini, materyallerini ve sosyal gönderilerini diğer dillere çevirin.<br></br><br></br><strong>Community Care</strong><br></br>The Graph Forum, Telegram, Discord veya Reddit'te soruların yanıtlarını yayınlayın veya eğitim kaynaklarını paylaşın.<br></br><br></br><strong>Teknik Öğretmen</strong><br></br>Başkalarına web3 ve The Graph ekosistemine aktif olarak nasıl katılacaklarını ve katkıda bulunacaklarını öğretin. <br></br><br></br><strong>Web3 Welcomer</strong><br></br>Dünya çapında web3 ve The Graph'in daha fazla eğitimini ve benimsenmesini hızlandırın.<hr></hr>The Graph'in Savunucusu olmak için <a className="cla" href="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7" target="_blank" rel="noreferrer">buradan</a> başvurabilirsiniz.<br></br><br></br>Savunucu olmak için gerekenler hakkında daha fazla bilgi edinmek için <a className="cla" href="https://thegraph.com/ecosystem/advocacy/" target="_blank" rel="noreferrer">buradan</a> bakın.<hr></hr>AdvocatesDAO hibeleri hakkında bilgi edinmek <a className="cla" onClick={this.handleAdvocateGrant}><strong>için buradan</strong></a> tıklayın!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrant() {
  this.handleAdvocateGrantWithdraw = this.handleAdvocateGrantWithdraw.bind(this);
  const message = this.createChatbotMessage(<a><strong>Graph AdvocatesDAO Hibeleri</strong><br></br><br></br>AdvocatesDAO hibesine <a className="cla" href="http://grants.graphadvocates.com/" target="_blank" rel="noreferrer">buradan</a> başvurabilirsiniz.<hr></hr><strong>Hibe Süreci</strong><br></br>İlk İnceleme - Hibeniz <a className="cla" href="https://forum.graphadvocates.com/" target="_blank" rel="noreferrer">buradaki</a> Graph AdvocatesDAO Forumunda yayınlanacaktır. Hibe Komitesi'nin bir DAO üyesi, hibenizin uygunluğunu değerlendirecektir.<br></br>Public Tartışmalar - Daha geniş topluluk, hibeler hakkında geri bildirim sağlamaya ve ayrıca Forum'da destekleyip desteklemedikleri konusunda oy kullanmaya davet edilir. Bu süreçte, topluluk üyeleri veya DAO üyeleri, kapsamını daha iyi anlamak için hibe hakkında daha fazla ayrıntı toplamak için Forum'da sorular sorabilirler. Bu, fikirlerin oluştuğu sürecin önemli bir aşamasıdır.<br></br>Komite Sunumu - Başarılı bir hibe başvurusu, DAO'nun Hibe Komitesine canlı bir sunum da içerecektir. Bu toplantılar, <a className="cla" href="https://discord.gg/XgT3s9XY" target="_blank" rel="noreferrer">DAO'nun Discord</a> sunucusunun halka açık sesli sohbetinde gerçekleşir ve dünya genelinde farklı saat dilimlerine uyum sağlamak için her Salı günü üç farklı zaman diliminde (10:00 | 18:00 | 22:00 UTC) planlanır. Bunlar, Hibe Komitesi üyelerinin bir hibeyi destekleyip desteklememe konusunda güven kazanmaları için önemli temas noktalarıdır. Lütfen hibenize genel bir bakış sunmak ve soruları cevaplamak için hazır olun.<br></br>Hibe Kararı - Hibe süreci boyunca ortaya çıkan bir dizi farklı oy ve anket göreceksiniz. Bunlar, DAO üyelerini oylarında bilgilendiren inanılmaz derecede önemli sinyallerdir. Başarılı hibeler için resmi DAO finansman kararı, tüm DAO üyelerinin <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2" target="_blank" rel="noreferrer">DAOHaus'ta</a> zincir üzerinde oy kullanacağı sürecin sonunda gerçekleşecek. (not: Bazı küçük hibeler Hibe Komitesi tarafından zincir dışı olarak oylanabilir)<br></br>
  Beklenen Zamanlama - DAO, tüm hibe başvurularını uygun şekilde incelemeyi taahhüt eder. DAO ayrıca, farklı saat dilimlerinde yaşayan topluluktan farklı derecelerde katılım için geniş katılıma izin veren zincir içi ve zincir dışı zaman çizelgeleri oluşturmuştur.<hr></hr>AdvocatesDAO hibelerini geri çekilmesi hakkında bilgi edinmek <a className="cla" onClick={this.handleAdvocateGrantWithdraw}><strong>için buradan</strong></a> tıklayın!</a>
    , 
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrantWithdraw() {
  const message = this.createChatbotMessage(<a><strong>Diğer AdvocatesDAO Hibe Süreci</strong><br></br>Artık hibenizi form aracılığıyla gönderdiniz, topluluğun ve savunucuların oy kullandığı ve sorular sorduğu foruma gönderildi. Sırada ne var?<hr></hr>DAO, başarılı bir hibe başvurusunu 1-2 ay içinde işleme koymayı hedefliyor. Aşağıda, başarılı bir hibe başvurusunun geçtiği önemli adımlara genel bir bakış bulunmaktadır:<br></br>Topluluk İncelemesi: ~ 10 gün (topluluk katılımına göre değişir)<br></br>Komite Sunumu: ~ 7 gün (zamanlama için zaman ayırmayı içerir)<br></br>Komite zincir dışı oylama: ~ 7 gün<hr></hr>Oylama süresi sona erdi ve hibeniz başarılı oldu diyelim. Eğer öyleyse, Tebrikler! Sırada ne bekliyor:<br></br><br></br><strong>E-posta Onayı</strong> - Bu Graph AdvocatesDAO'dan gelen bir e-posotadır. E-postadaki bağlantı aracılığıyla KYC'yi (Müşterinizi Tanıyın) tamamlamanız gerekecektir. Ayrıca size bir Sözleşme Sözleşmesi gönderilecektir.<br></br><strong>Forum Gönderisi</strong> - Bir Savunucu, hibenizle başarılı olduğunuzu onaylamak için forum içindeki hibeniz hakkında da yorum yapacaktır.<br></br>KYC ve Hibe Anlaşması: ~ 7 gün<br></br>Zincir içi oylama: 14 gün<br></br>Zincir içi hibe teklifinizi <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2/proposals" target="_blank" rel="noreferrer">burada</a> görebileceksiniz.<br></br>14 gün sonra, zincirleme oylamada başarılı olduysanız, hibenizi cüzdanınıza çekebileceksiniz.<hr></hr>GRT'nizi DAOhaus uygulamasından çekme kılavuzuna    <a className="cla" href="https://docs.graphadvocates.com/community-grants/getting-grant-paid" target="_blank" rel="noreferrer">buradan</a> ulaşabilirsiniz. Veya aşağıdaki video eğitimini izleyebilirsiniz. Paranızı Gnosis Zinciri'nden Ethereum'a taşımanız gerekiyorsa, GRT'nizi köprülemeniz gerekir, <a className="cla" href="https://omni.gnosischain.com/bridge" target="_blank" rel="noreferrer">buradan</a> erişebileceğiniz OmniBridge kullanmanızı öneririz. Paranızı taşımak için OmniBridge'i nasıl kullanacağınızı gösteren bir video izlemek için <a className="cla" href="https://drive.google.com/file/d/1-YB8JfBu8mkYzc1wAqopGsBIonaLHwq6/view" target="_blank" rel="noreferrer">buradan</a> izleyebilirsiniz.<br></br><br></br><iframe className="embed" isDark src="https://drive.google.com/file/d/1toZih5GIO-h3deJKQz9lr_WBY3_QqX0U/preview" width="100%" height="480" allow="autoplay"></iframe></a>
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
  const message = this.createChatbotMessage(<a>Aşağıda GRT sözleşmesini ve ayrıntılarını bulacaksınız, kötü niyetli bir sözleşme eklememek için bilgileri iki kez kontrol ettiğinizden emin olun.<br></br><br></br>Ad: The Graph<br></br>Sembol: GRT<br></br>Ağ: Ethereum (ERC20)<br></br>Sözleşme: 0xc944e90c64b2c07662a292be6244bdf05cda44a7<br></br>Ondalıklar: 18<br></br><br></br><a className="cla" href="https://coinmarketcap.com/tr/currencies/the-graph/" target="_blank" rel="noreferrer">CoinMarketCap'te</a> buradan kontrol edebilirsiniz.</a>
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
  const message = this.createChatbotMessage(<a>Bir delegatör delegasyon işlemini her iptal etmek istediğinde, tokenları 26 günlük bir bağlantı kaldırma süresine tabidir. Bu, tokenlarını 26 gün boyunca transfer edemeyecekleri veya ödüller kazanamayacakları anlamına gelir.<br></br><br></br>Delegasyon/çözülme dönemi, bazı ekonomik saldırıların gerçekleşmesini önlemek için vardır. 28 dönemlik maksimum tahsis ömrüne uymalıdır. Ödül sisteminin şu anda çalışma şekli göz önüne alındığında, daha kısa bir delegasyon eleme süresi, delegasyonun aynı anda birden fazla atamada "iki kez sayılmasına" izin verecektir.<hr></hr>İndeksleyici kapanışını her zorlamak istediğinde (el ile) veya otomatik olarak her maksimum 26 dönemde/günde yapabiilr: bu maksimum süresidir. Bu, ödüllerin dağıtıldığı zamandır.<br></br><br></br>Göz önünde bulundurulması gereken bir şey, akıllıca bir indeksleyici seçmektir. Güvenilir olmayan veya iyi bir iş çıkarmayan bir indeksleyici seçerseniz, delege etmek isteyeceksiniz, bu da ödül almak için birçok fırsatı kaçıracağınız anlamına gelir, bu da GRT'yi yakmak kadar kötü olabilir.<br></br><br></br>The Graph'in GRT token delegasyonunu geçersiz kılma hakkında bir eğitim için <a className="cla" href="https://www.youtube.com/watch?v=3GPY5On7vHc" target="_blank" rel="noreferrer">buradan</a> tıklayın.<br></br><br></br>Bir indeksleyicinin nasıl seçileceğine dair belgeler ve öğretici rehber konusunda size yardımcı olabilirim.<hr></hr>Yetki devri 28 dönem sürer (günler değil).<br></br>Her çağ 6646 blok uzunluğundadır.<br></br><br></br>ETH PoS'tan önce her blok yaklaşık 13 saniye uzunluğundaydı, bu nedenle 28 epoch yaklaşık 28 gündü.<br></br>13s * 6646b * 28e = ~28 gün<br></br><br></br>Artık her blok yaklaşık 12.06 saniye sürüyor.<br></br>12s * 6646b * 28e = 26 gün</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// handlePowerDAOS() {
//   const message = this.createChatbotMessage(<a><strong>Using The Graph to Power DAOs: Snapshot Case Study</strong><br></br><br></br>The Graph is a crucial protocol for enabling DAO members to accurately and easily read that data, while also making it effortless to track votes. Decentralized Autonomous Organizations, or DAOs, are organizations that are run by distributed communities, in contrast to centralized authorities. Because the bulk of decision-making in DAOs relies on on-chain data recorded on blockchains.<br></br><br></br><a className="cla" href="https://snapshot.org/#/" target="_blank" rel="noreferrer">Snapshot</a> is a decentralized governance protocol that enables people to coordinate and make collective decisions about the future of the organizations they participate in. Snapshot makes it possible for people to easily create and vote on proposals without incurring any gas fees. It’s a widely used tool for thousands of people working on protocols, collaborating in DAOs, and building innovative new projects in web3.<br></br><br></br>So far, Snapshot has recorded more than:<br></br>8.5M off-chain votes<br></br>8K protocols integrated<br></br>64.8k proposals.<hr></hr>Read <a className="cla" href="https://thegraph.com/blog/using-the-graph-for-daos-snapshot/" target="_blank" rel="noreferrer">here</a>, to find out how The Graph Powers Snapshot and How to Supercharge your Dapp.</a>
//     ,
//   );
//   this.setState((prev) => ({
//     ...prev,
//     messages: [...prev.messages, message],
//   }));
// }

// handleMIPS(){
//   this.handleButtonMenu = this.handleButtonMenu.bind(this);
//   const message = this.createChatbotMessage(<a><strong>The Graph’s Multi-Chain Incentivized Program</strong><br></br><br></br>The MIPs program bootstraps Indexers to add support for new chains on the decentralized network, enabling migration of multi-chain subgraphs. This is a critical expansion of support for dapps and subgraph migration ahead of the <a className="cla" onClick={this.handleSunsettingHostedService} target="_blank" rel="noreferrer">sunsetting of the hosted service</a>.<br></br>The MIPs program has allocated 0.75% of the GRT supply (75M GRT), with 0.5% to reward Indexers who contribute to bootstrapping the network and 0.25% allocated to migration grants for subgraph developers using multi-chain subgraphs. By the end of Q1 2023, the hosted service for all network-supported chains will be sunset, so the MIPs program will work in parallel to subgraph migration efforts.<br></br>The first chain to be supported on the decentralized network was the <a className="cla" href='https://twitter.com/gnosischain' target="_blank" rel="noreferrer">Gnosis</a>Chain! New chains will be announced throughout the MIPs program, based on Indexer readiness, demand, and community sentiment. To read more about MIPs Performance & Scoring and Eligibility Requirements, see <a className="cla" href='https://thegraph.com/blog/mips-multi-chain-indexing-incentivized-program/' target="_blank" rel="noreferrer">here</a>.<hr></hr>The announced chains so far can be found below.<br></br><br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1613980493787312128?s=20&t=_FqJsNOl6vvyIYt3B0KCfg' target="_blank" rel="noreferrer"><strong>Gnosis</strong></a> beta integration complete<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615443632252948480' target="_blank" rel="noreferrer"><strong>Polygon</strong></a> integration underway<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772854838231040?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Arbitrum</strong></a> coming soon!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772857211961354?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Avalanche</strong></a> coming soon!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772859678457859?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Celo</strong></a> coming soon!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772862110900225?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Optimism</strong></a> coming soon!</a>
//     ,
//   );
//   this.setState((prev) => ({
//     ...prev,
//     messages: [...prev.messages, message],
//   }));
// }
// Undelegating End
// Courses Start
handleCourses() {
  const message = this.createChatbotMessage(<a>Graph Academy, eğitim ve The Graph hakkında daha fazla bilgi edinmekle ilgilidir. Kursları, The Graph'e başlamanıza ve ekosistem hakkındaki bilginizi genişletmenize yardımcı olmak için tasarlanmıştır. Ve daha fazla bilgi edinmenin bir ödülü olarak, kişiselleştirilmiş bir sertifika alırsınız.<br></br><br></br><a className="cla" href="https://thegraph.academy/course/delegator-course/" target="_blank" rel="noreferrer"> Delegatör Kursu</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/subgraph-developer-course/" target="_blank" rel="noreferrer">Subgraph Geliştirici Kursu</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/curator-course/" target="_blank" rel="noreferrer">Küratör Kursu</a><hr></hr>Ücretsiz bir hesaba kaydolmak veya misafir olarak giriş yapmak için, ilgilendiğiniz kursu ziyaret edin ve "Şimdi Başlat" ve "Kaydol" u tıklayın. Bunun nasıl yapılacağına dair adım adım bir <a className="cla" href="https://thegraph.academy/certificates/" target="_blank" rel="noreferrer">kılavuz</a> bulunmaktadır.<hr></hr>Web3 hakkında daha fazla bilgi edinmek isterseniz, bana sorabilirsiniz! "Web3'ü ücretsiz olarak nasıl öğrenebilirim?"</a>
    ,
     );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLearnWeb3() {
  const message = this.createChatbotMessage(<a><strong>GÜNCELLENDİ</strong> - Web3 Geliştiriciliği hakkında bilgi sahibi olmak için <strong>ÜCRETSİZ</strong> kaynaklar.<br></br><br></br>Web3 kariyerinizi kurslar, projeler ve kodlarla hızlı bir şekilde takip edin. Tamamen ücretsiz. <a className="cla" href="https://university.alchemy.com/" target="_blank" rel="noreferrer">Buradan</a> öğrenin.<br></br><br></br><a className="cla" href="https://t.co/dm50GZ8lMP" target="_blank" rel="noreferrer">Ethereum</a><br></br><a className="cla" href="https://t.co/BfjoA5ynEt" target="_blank" rel="noreferrer">Solidity</a><br></br>Harika Solidity kaynaklarının, kütüphanelerinin, araçlarının ve daha fazlasının küratörlüğünde bir listesi <a className="cla" href="https://github.com/bkrem/awesome-solidity" target="_blank" rel="noreferrer">Awesome Solidity'de</a> bulunabilir.<br></br><a className="cla" href="https://t.co/GUMDW8WAru" target="_blank" rel="noreferrer">Blockchain</a><br></br><a className="cla" href="https://t.co/kzVyI8leHK" target="_blank" rel="noreferrer">Oracles</a><br></br><a className="cla" href="https://t.co/QRwZn0CvPl" target="_blank" rel="noreferrer">CryptoZombies</a> size blok zincirleri hakkında teknik her şeyi öğreten etkileşimli bir okuldur.<br></br>Kendinizi <a className="cla" href="https://t.co/VVsmytm7CS" target="_blank" rel="noreferrer">SpeedRunEthereum.com</a> test edin.<br></br>Alchemy's <a className="cla" href="https://t.co/BDni1gjuvJ" target="_blank" rel="noreferrer">Road to Web3</a> serisi, yeni blockchain geliştiricilerinin başlangıçtan ileri seviyeye geçmesine yardımcı olmak için 10 haftalık, kendi hızınızda bir web3 geliştirici programıdır.<br></br>Suhail Kakar 
  tarafından Web3 ve Blockchain yığını Twitter iş parçacığı için tamamlanmış bir kılavuzu <a className="cla" href="https://twitter.com/suhailkakar/status/1552889172175642624?s=21&t=l_VTQ8NemlIWkCRne8f3bQ" target="_blank" rel="noreferrer">burada</a> bulabilirsiniz.<br></br><br></br>Video eğitimlerini izleyerek öğrenmeyi tercih ediyorsanız, Nader Dabit'ten daha iyi öğrenebileceğiniz kimse yoktur. Aşağıda “Tam Yığın Web3 Geliştirme Tam Kılavuzu” öğreticisini bulacaksınız, daha fazla Web3 öğrenme içeriği için YouTube kanalının geri kalanına göz attığınızdan emin olun.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=nRMo5jjgCr4'/></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://twitter.com/evabeylin?s=21&t=xlTfEQdph_MfbuUlhFrb0Q" target="_blank" rel="noreferrer"><strong>Eva Beylin</strong></a> ,Ekim 2020'den beri The Graph Foundation'ın direktörüdür. eGirl Capital aracılığıyla çekirdek Ethereum teknolojisinin yatırımcısı ve destekçisidir ve The Graph'ın büyüme ekibine liderlik etmektedir. CoinDesk'in En Etkili 2022 isimlerinden biridir, blogun tamamını <a className="cla" href="https://www.coindesk.com/consensus-magazine/2022/12/05/eva-beylin-most-influential-2022/" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz. The Graph'in çekirdek geliştiricilerine 135 milyon doların üzerinde hibe dağıtımına ve Tiger Global liderliğindeki vakfın 50 milyon dolarlık sermayesine liderlik etti. Graph Day 2022'de Decenralization Journey, hakkındaki konuşmasını <a className="cla" href="https://m.youtube.com/watch?v=ef5LCku3IqQ" target="_blank" rel="noreferrer">buradan</a> izleyin. Forbes 2023 <a className="cla" href="https://www.forbes.com/profile/eva-beylin/?sh=34d711c95444" target="_blank" rel="noreferrer">30 Under 30'u</a> yaptı. Eva'yı <a className="cla" href="https://m.youtube.com/watch?v=IoqI6z5l9y8" target="_blank" rel="noreferrer">buradan</a> bir röportaj izleyerek tanıyabilirsiniz.<br></br><br></br><a className="cla" href="https://twitter.com/theklineventure?s=21&t=8FTTZesLJJUxAVnVbmLgQg" target="_blank" rel="noreferrer"><strong>Tegan Kline</strong></a> ,2021'den beri Edge & Node'un Kurucu Ortağı ve İş Başkanıdır. The Graph'in Ethereum geliştiricilerinin ürünlerinin nasıl kullanıldığını anlamalarını sağlayan açık kaynaklı bir araç oluşturmasına yardımcı olmak için 22,5 milyon dolar topladıktan sonra, projeden para kazanmaya yardımcı olmak için Edge & Node'u kurdu. Edge & Node başlangıçta GRT tokeninin % 8'lik bir hissesi ile finanse edildi ve şu anda yaklaşık 650 milyon dolar değerinde. Kline ayrıca Edge & Node'un yatırımlarını The Graph'a bitişik projelere yönlendirdi ve 2021'de toplam 3,1 milyon dolar kazandı. Forbes 2022 <a className="cla" href="https://www.forbes.com/profile/tegan-kline/?sh=1465202462f7" target="_blank" rel="noreferrer">30 Under 30'u</a> yaptı. Kline'ı web sitesini ziyaret ederek <a className="cla" href="https://www.tegankline.com/" target="_blank" rel="noreferrer">buradan</a> tanıyabilirsiniz. Onunla yapılan röportajı <a className="cla" href="https://youtu.be/yONuFNxJVrc" target="_blank" rel="noreferrer">buradan</a> izleyebilirsiniz. Veya <a className="cla" href="https://youtu.be/ZGHwTb92Rrg" target="_blank" rel="noreferrer">buradan</a> bir GRTiQ Podcast'i dinleyebilirsiniz.<br></br><br></br><a className="cla" href="https://twitter.com/girlcalledreem?s=21&t=h9ZItE1mnaruz2uPiHkrLQ" target="_blank" rel="noreferrer"><strong>Reem Chahrour</strong></a> ,2021'den beri The Graph'ta Ekosistem Yöneticisi olarak görev yapmaktadır. Bir Graph Hibesi için başvuran veya herhangi bir hibe alanın çalışmalarını takip eden herkes için, o zaman zaten Reem ile karşılaştılar. The Graph topluluğu için önemli bir isimdir ve çalışmaları çeşitli önemli girişimleri kapsamaktadır. Onu GRTiQ Podcast'te <a className="cla" href="https://m.youtube.com/watch?v=3xfb0n99AzI" target="_blank" rel="noreferrer">buradan</a> dinleyebilirsiniz. Kriptoya girişi ve The Graph Foundation'daki çalışmaları, hibe başvurusunda bulunmak isteyenler için tavsiyeleri (ve vakfın daha fazla başvuru görmek istediği yerler), RFP ve hibe programları arasındaki fark ve yakında piyasaya sürülecek olan Graph Advocates programı hakkında konuşuyor.<br></br><br></br>Herhangi biri bir indeksleyiciden bahsettiğinde, erkek zamirlerini kullanır. "Tahsisatını kapatıyor". Web3'te İndekxleyici Ekipleri üzerinde çalışan veya The Graph ekosisteminde kendi indeksleyicisini çalıştıran kadınları vurgulamak isteyen Graphtronauts, Web3'ün Kadınları ile bir dizi röportaj gerçekleştirdi. <br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=WTdf9wEhSLg" target="_blank" rel="noreferrer">Women of Web3 - Ana from GraphOps</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=0D4_17B6ypY" target="_blank" rel="noreferrer">Women of Web3 - Anna from Citadel.One</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=chvIFfPfOjY" target="_blank" rel="noreferrer">Women of Web3 - IIinca from Chainode Tech</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=Z7UnQotqLVA" target="_blank" rel="noreferrer">Women of Web3 - Gabi from Stake2Earn</a></a>
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
  const message = this.createChatbotMessage(<a>Aşağıda resmi Discord sunucularını bulacaksınız.<br></br><br></br><a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">Graph Protocol</a><br></br><br></br><a className="cla" href="https://discord.com/invite/aZtCCKPp34" target="_blank" rel="noreferrer"></a><hr></hr>Aşağıda resmi olmayan Discord sunucularını bulacaksınız.<br></br><br></br><a className="cla" href="https://discord.com/invite/zqrwSFFW3F" target="_blank" rel="noreferrer">Graphrica</a></a>
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
  const message = this.createChatbotMessage(<a>Aşağıda resmi Telegram grubunu bulacaksınız.<br></br><br></br><a className="cla" href="https://t.me/graphprotocol" target="_blank" rel="noreferrer">Resmi The Graph Topluluğu</a><hr></hr>Aşağıda dünyanın dört bir yanından resmi olmayan Telegram gruplarını bulacaksınız.<br></br><br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank">Graphtronauts</a><br></br><a className="cla" href="https://t.me/TheGraph_Germany" target="_blank">The Graph - Germany</a><br></br><a className="cla" href="https://t.me/thegraphfrenchchannel" target="_blank">The Graph - French</a><br></br><a className="cla" href="https://t.me/thegraphenespanol" target="_blank">The Graph - Español</a><br></br><a className="cla" href="https://t.me/thegraphRu" target="_blank">The Graph - Russia</a><br></br><a className="cla" href="https://t.me/thegraphitalia" target="_blank" rel="noreferrer">The Graph - Italia</a><br></br><a className="cla" href="https://t.me/graphprotocolTR" target="_blank" rel="noreferrer">The Graph - Turkey</a><br></br><a className="cla" href="https://t.me/TheGraphBR" target="_blank" rel="noreferrer">The Graph - Brasil</a><br></br><a className="cla" href="https://t.me/GraphProtocol_VN" target="_blank" rel="noreferrer">The Graph - Vietnam</a><br></br><a className="cla" href="https://t.me/Graph_Persian" target="_blank" rel="noreferrer">The Graph - Persian</a><br></br><a className="cla" href="https://t.me/IndianGraphCommunity" target="_blank" rel="noreferrer">The Graph - Indian</a><br></br><a className="cla" href="https://t.me/thegraphjapan" target="_blank" rel="noreferrer">The Graph - Japan</a><br></br><a className="cla" href="https://t.me/TheGraph_Dutch" target="_blank" rel="noreferrer">The Graph - Dutch</a><br></br><a className="cla" href="https://t.me/GRTARAB" target="_blank" rel="noreferrer">The Graph - Arab</a><br></br><a className="cla" href="https://t.me/Thegraph_KR" target="_blank" rel="noreferrer">The Graph - Korea</a><br></br><a className="cla" href="https://t.me/thegraphpk" target="_blank" rel="noreferrer">The Graph - Pakistan</a><br></br><a className="cla" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">The Graph - Indonesia</a><br></br><a className="cla" href="https://t.me/thegraphbangladesh" target="_blank">The Graph - Bangladesh</a><br></br><a className="cla" href="https://t.me/GraphProtocolCN" target="_blank">The Graph - China</a><br></br><a className="graphiql-link" href="https://t.me/TheGraphUkrainian" rel="noreferrer">The Graph - Ukraine</a><br></br><a className="graphiql-link" href="https://t.me/thegraph_pl" target="_blank" rel="noreferrer">The Graph - Poland</a><br></br><a className="graphiql-link" href="https://t.me/TheGraph_Nigeria" target="_blank" rel="noreferrer">The Graph - Nigeria</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Token Economics Start
handleTwitter() {
  const message = this.createChatbotMessage(<a>Aşağıda Resmi Twitter sayfasını bulacaksınız.<br></br><br></br><a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">The Graph</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTokenEconomics() {
  const message = this.createChatbotMessage(<a>Graph'in token ekonomisi oldukça karmaşıktır. Bir token verme zamanlamasına ve token yakma mekanizmasına ek olarak, Graph Protocık 5 ila 10 yıllık bir süre içinde edinilen token’ların kilidini açar.<hr></hr><table><tr className="indexer-table-header">
    <th>Toplam token arzı = </th>
  <th> İlk token kaynağı + </th>
  <th> Yıllık sayı - </th>
  <th> Yıllık yakma</th>
</tr>
</table>
{/* <br></br>The <strong>Annual Issuance</strong> formula is as follows:<br></br><br></br>networkGRTIssuance = 1000000011247641700<br></br><br></br>blocksYear = 2628000<br></br><br></br>Inflation = networkGRTIssuance * (10^-18) * blocksYear - 1<br></br><br></br>Inflation = 0,0299999999792... = 3% approx */}
<hr></hr><strong>GRT token ekonomisine genel bakış</strong><br></br><br></br><table>
<tr className="indexer-table">
<td><strong>Sembol sekmesi</strong></td>
  <td>GRT</td>

</tr>
<tr className="indexer-table">
  <td><strong>Token İsmi</strong></td>
  <td>Graph Token</td>
</tr>
<tr className="indexer-table">
  <td><strong>İlk belirteç tedariki</strong></td>
  <td>10 milyar GRT</td>
</tr>
<tr className="indexer-table">
  <td><strong>Yıllık Sayı</strong></td>
  <td>~%3 (1. yıl için)</td>
</tr>
<tr className="indexer-table">
<td><strong>Yıllık yanma</strong></td>
  <td>~% 1 danışmanlık ücretleri ve vergiler</td>
</tr>
</table>
  <hr></hr><table><tr className="indexer-table-header">
  <th>Toplam token arzı = </th>
  <th> İlk token kaynağı + </th>
  <th> Yıllık sayı - </th>
  <th> Yıllık yakma</th>

</tr>
</table><hr></hr><strong>Token Kilidi Açma Kilometre Taşları</strong> - Belirli Tarihlerde Token Kilit Açma İlerlemesine Genel Bakış.<br></br><br></br><table><tr className="indexer-table-header">
  <th>Tarih</th>
  <th>Artış (%)</th>
  <th> Kümülatif Kilit Açılımı (%)</th>
  <th> Kümülatif GRT Kilidi Açılımı</th>
</tr>
<tr className="indexer-table">
<td>18.06.2022</td>
  <td>12</td>
  <td>60</td>
  <td>6B</td>
</tr>
<tr className="indexer-table">
<td>17.12.2022</td>
  <td>10</td>
  <td>70</td>
  <td>7B</td>
</tr>
<tr className="indexer-table">
<td>18.06.2023</td>
  <td>0.6</td>
  <td>70.6</td>
  <td>7B</td>
</tr>
</table><br></br>The Graph'ın token ekonomisi hakkında her şeyi <a className="cla" href="https://thegraph.academy/ecosystem/graph-token-economics/" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.</a>
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
  const message = this.createChatbotMessage(<a><strong>GÜNCELLENDİ</strong> - Barındırılan hizmet için ileriye dönük yolu netleştirmek<br></br><br></br>Barındırılan hizmet, tüm zincirler için desteği aniden sona erdirmez. Barındırılan hizmet, her zincir için temel işlevselliğe ulaşılana kadar zincir başına ücretsiz olarak kullanılmaya devam eder.<br></br><br></br>Subgraph geliştiricileri, üretimde bağımlı oldukları temel bir hizmetten mahrum kalmayacaklar.<br></br><br></br>Barındırılan hizmetin sonlandırılmasının 2023'ün ilk çeyreğinin sonunda gerçekleşeceğini tahmin eden orijinal duyuruyu detaylandıralım (ek bir düzeltme yaparak):<br></br>Geçiş süreci yalnızca The Graph Network tarafından desteklendikten sonra zincirler için geçerlidir (yazım sırasında yalnızca Ethereum mainnet’i içerir, Gnosis Zinciri yakında yayınlanacaktır).<br></br><br></br>Yorumlar, The Graph Discord, The Graph Forum aracılığıyla ve conmigration@thegraph.foundation ile iletişime geçerek her zaman memnuniyetle karşılanır. Web3 merkeziyetsiz uygulamaları için neredeyse 4 yıllık destek subgraph’lerinden sonra, barındırılan hizmet, merkeziyetsiz uygulamaların merkeziyetsiz bir ağa taşınmasıyla 2023'ün ilk çeyreğinde kapatılacak. Barındırılan hizmet, The Graph'ın merkeziyetsiz yolculuğunun merkezinde yer aldı, ürünün pazara uygunluğunu sağladı ve subgraph özelliklerini geliştiricilerle test etti.<br></br><br></br>Feedback is always welcome via The Graph Discord, The Graph Forum, and by contacting migration@thegraph.foundation. Core devs and contributors are actively listening to users and incorporating changes to suit their needs.<br></br><br></br>Announcing plans to discontinue the hosted service without addressing user needs or providing an abundance of context was the wrong move. The Graph ecosystem is shifting course to make sure the voices of people depending on The Graph are heard and understood.<br></br><br></br>After nearly 4 years of supporting subgraphs for web3 dapps, the hosted service will be sunsetting in Q1 2023 with dapps migrating to the decentralized network. The hosted service was critical to The Graph’s decentralization journey, achieving product-market-fit and testing subgraph features with developers. Sunsetting the service is the greatest milestone since The Graph Network launched, and will enable all web3 applications to retrieve blockchain data in a truly decentralized way.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Sunsetting Hosted Service  End
// Tenderize Start
handleTenderize() {
  const message = this.createChatbotMessage(<a>Graph Day boyunca, Tenderize ilk likit katılım protokolü olarak kabul edildi. Kullanıcılar, ödülleri otomatik olarak biriktiren ve istedikleri zaman ileri geri işlem gören tenderGRT (tGRT) ile $GRT yatırabilirler. $GRT sahipleri, Tenderize aracılığıyla delege edebilir ve onlara tGRT verebilir. Ödülleri otomatik olarak birleştiren ve anında GRT'ye geri döndürülebilen stake pozisyonunun tokenize edilmiş bir versiyonu.<br></br><br></br>Tenderize kullanımı için Graphtronauts kılavuzunu <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-use-tenderize-tokenized-stake-for-your-grt-cf5fe38a6dc7" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<br></br><br></br>Başlamak için <a className="cla" href="https://app.tenderize.me/stakers/graph" target="_blank" rel="noreferrer">Tenderize'ı</a> ziyaret edin.<br></br><br></br>Ayrıca <a className="cla" href="https://blog.tenderize.me/" target="_blank" rel="noreferrer">buradan</a> Tenderize blogunu da okuyabilirsiniz.</a>
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
  const message = this.createChatbotMessage(<a>Graph, yetenekli çevirmenlerin yardımı sayesinde artık birincil dillerinde daha da fazla insana ulaşıyor.<br></br><br></br>GRT topluluğu hakkında daha fazla bilgi edinmek için aşağıya bakın.<br></br><br></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCommunity();
  }}><strong>Topluluk</strong></button>
  <br></br><br></br><a className="cla" href="https://thegraph.com/blog/get-involved-with-graph-community-web3/" target="_blank" rel="noreferrer">The Graph Ekosistemine Katılmanın 23 Yolu</a></a>
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
  const message = this.createChatbotMessage(<a>Geo, The Graph'e dayanan merkeziyetsiz bir web3 tarayıcısıdır, sayfalar açıktır ve topluluk tarafından seçilir. Böylece değerli olana oy verebilirsiniz ve oylarınız önemlidir. Geo, şu anda web2 tarayıcılarımızla ilgili tüm sorunları çözüyor ve gizliliğinizin en önemli öncelik olduğu yeni bir inovasyon penceresi, yeni bir internete kapı açıyor. Kullanabilmek için kriptografi veya blockchain hakkında hiçbir şey bilmek zorunda değilsiniz. Bu, sonraki 1 milyar kullanıcıyı web3'e dahil etmek için bir deneyimdir.<br></br><br></br><a className="cla" href="https://substack.com/profile/45913426-ahmad-mardni" target="_blank" rel="noreferrer">Ahmad Mardeni</a> tarafından oluşturulan Geo hakkında tam bir blog okumak için <a className="cla" href="https://ahmadmardeni.substack.com/p/geo-the-new-web3-browser-with-a-decentralization?s=r" target="_blank" rel="noreferrer">buradan</a> göz atın.<hr></hr><strong>GÜNCELLENDİ</strong> - Geo Genesis<br></br><br></br>Yaniv - Beş yıl önce, bir grubumuz Ethereum etrafında gerçekleşen etkinliği gördük ve The Graph'i inşa ederek katkıda bulunmaya karar verdik. The Graph'in potansiyelini, dünyanın tüm public bilgi ve tecrübelerinin merkeziyetsiz bir küresel bilgi grafiği olma potansiyelini gördüm. Bilgileri organize etmek ve sunmak için halka açık altyapıyı kullanarak, hangi bilgilerin doğru olduğunu etkilemek için daha açık ve adil süreçlere sahip olabiliriz. Bugün hayatta olan bir merkeziyetsiz ağımız var ve The Graph, binlerce geliştirici için blockchain verilerine verimli bir şekilde erişmenin kritik sorununu çözüyor, ancak yine de tam resmi hayata geçirmek için başka bir adım atmamız gerekiyor.<br></br><br></br>Blogun tamamını <a className="cla" href="https://www.geobrowser.io/blog/post/introducing-geo-genesis?s=09" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/i/status/1532418078700580869'/></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://www.streamingfast.io/" target="_blank" rel="noreferrer">StreamingFast</a>, blok zinciri veri iletimi için yüksek oranda ölçeklenebilir bir çapraz zincir mimarisi oluşturmada mükemmel bir protokol altyapı şirketidir. 60 milyon dolarlık Core Dev hibesi, türünün ilk örneğidir ve toplulukların ve işletmelerin radikal olarak daha açık bir internet oluşturmak için hizalandığı yeni bir iş birliğine dayalı inovasyon sınırına öncülük etmektedir.<br></br><br></br>The Graph Vakfı, The Graph'e çekirdek bir geliştirme ekibi olarak katılması için StreamingFast'a 60 milyon dolarlık bir hibe veriyor, detayları <a className="cla" href="https://thegraph.com/blog/core-dev-grant" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<br></br><br></br>Substreams, The Graph Network için geliştirilen güçlü bir blockchain indeksleme teknolojisidir.<hr></hr>Substream’ler ile ilgili belgeleri <a className="cla" href="https://substreams.streamingfast.io/" target="_blank" rel="noreferrer">burada</a> bulabilirsiniz.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=qWxffTKpciU'/><br></br>StreamingFast <a href="https://discord.com/invite/jZwqxJAvRs" target="_blank" rel="noreferrer">Discord</a> sunucusuna katılın veya buradan kontrol edin.<hr></hr><strong>Türkçe rehber makaleler ise aşağıda yer alıyor!</strong><br></br><br></br>"Substreams: Subgraph’ler için Çok Daha Hızlı Dizin Oluşturma Performansı”,  <a className="cla" href="https://onursarayli.medium.com/substreams-subgraphler-i%C3%A7in-%C3%A7ok-daha-h%C4%B1zl%C4%B1-dizin-olu%C5%9Fturma-performans%C4%B1-e886b3bcafa4" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.</a>
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
  const message = this.createChatbotMessage(<a><strong>Delegatörler için bir topluluk, Delegatörler tarafından oluşturulmuştur.</strong><br></br>Graphtronauts, $GRT HODL etmek ve The Graph projesinin temelleri hakkında konuşmak isteyenler için sohbeti kolaylaştırmaya adanmış bir gruptur. Sadece The Graph ekosistemi için uzun vadeli $GRT sahiplerinden oluşan resmi olmayan en büyük topluluk değil, aynı zamanda amaçları, insanlara The Graph için bir delegatör olma yolculuklarında yardımcı olmaktır.<br></br><br></br><strong>“Başkalarını yücelterek yükseliriz” - Graphtronauts | Kuruluş 16 Ocak 2021</strong><br></br><br></br>Baghe ve Chris Ewing ile bu <a className="cla" href="https://www.grtiq.com/grtiq-podcast-35-the-graphtronauts/" target="_blank" rel="noreferrer">GRTiQ  Podcast'ini</a> dinleyerek Graphtronauts hakkında daha fazla bilgi edinin.<br></br>Ve bu <a className="cla" href="https://www.grtiq.com/grtiq-podcast-90-paolo-diomede/" target="_blank" rel="noreferrer">GRTiQ podcast'i</a> Paolo Diomede ile gerçekleşti.<br></br>Topluluğa aşağıdaki bağlantılardan katılabilirsiniz:<br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank" rel="noreferrer">Telegram</a><br></br><a className="cla" href="https://twitter.com/graphtronauts" target="_blank" rel="noreferrer">Twitter</a><br></br><a className="cla" href="https://www.graphtronauts.com/#/" target="_blank" rel="noreferrer">Graphtronauts App</a><br></br><a className="cla" href="https://old.graphtronauts.com/" target="_blank" rel="noreferrer">Website</a><br></br><a className="cla" href="https://www.youtube.com/channel/UCPAUeNaRtBV-jdSKY8wmcXg" target="_blank" rel="noreferrer">YouTube</a><br></br><a className="cla" href="https://www.reddit.com/r/Graphtronauts/" target="_blank" rel="noreferrer">Reddit</a><hr></hr>The Graphtronauts Indexer (<a className="cla" href="https://thegraph.com/explorer/profile/0x0c3aab9f49c01070ec359aae4778fcbb01d2fbef?view=Indexing" target="_blank" rel="noreferrer">graphtronauts-indexer.eth</a>) artık yayında ve delegasyonlar için hazır! Daha fazla bilgi için aşağıdaki tweet’e göz atın, <a className="cla" href="https://t.co/dDUb7NHaPY" target="_blank" rel="noreferrer">Discord'larına</a> katılın ve güncellemeler için Twitter'da takip edin.<br></br><Embed className="embed" isDark url='https://twitter.com/graphtronauts_x/status/1593310558798979072?s=20&t=2FCQMWbItkh1MnXmrHBVIA'/>
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
  const message = this.createChatbotMessage(<a>GRT'yi Metamask aracılığıyla stake etmek istiyorsanız ve henüz yapmadıysanız ilk önce <a className="cla" href="https://metamask.io/download/" target="_blank" rel="noreferrer">MetaMask'ı indirin</a>. Bu konuda yardıma ihtiyacınız varsa, <a className="cla" href="https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047" target="_blank" rel="noreferrer">buradan</a> sizin için bir rehber bulabilirsiniz.<br></br><br></br>GRT'yi bir indeksleyiciye nasıl stake edeceğiniz ilgili adım adım video eğitimini <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">buradan</a> izleyebilirsiniz.<br></br>Metin kılavuzunu takip etmeyi tercih ederseniz, <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<hr></hr>Graph Protocol’e stake etmek için <strong>WalletConnect'i</strong> kullanabilirsiniz.<br></br>Bunun nasıl yapılacağına dair adım adım kılavuzu <a className="cla" href="https://thegraph.academy/delegators/delegating-walletconnect/" target="_blank" rel="noreferrer">burada</a> bulabilirsiniz.<br></br><br></br>Metamask'ın sıcak cüzdanı yerine, GRT'nizi stake etmek için Ledger gibi bir soğuk cüzdan da kullanabilirsiniz. Soğuk cüzdanlar, genellikle fiziksel cihazdan işlemlerin onaylanmasını gerektirdiğinden, başka bir güvenlik katmanı ekleyebilir. Metamask'ı donanım cüzdanınıza Metamask Tarayıcı Uzantısı ile bağlayabilirsiniz. Ledger cihazınızda ETH uygulamasının açık olduğundan ve cihazınızın ETH uygulamasında sözleşme verilerine izin verildiğinden emin olun.<br></br><br></br>MetaMask'a bağlı bir donanım cüzdanı kullanarak GRT token’larınızı devretmek için <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-delegate-your-grt-tokens-with-an-hardware-wallet-aec7751cd5d5" target="_blank" rel="noreferrer">buradan</a> bir öğretici okuyun.<hr></hr><strong>Türkçe rehber makaleler ise aşağıda yer alıyor!</strong><br></br><br></br>"Bir Donanım Cüzdanı ile GRT Tokenlarınızı Nasıl Stake Edebilirsiniz?”,  <a className="cla" href="https://onursarayli.medium.com/bir-donan%C4%B1m-c%C3%BCzdan%C4%B1-ile-grt-tokenlar%C4%B1n%C4%B1z%C4%B1-nas%C4%B1l-stake-edebilirsiniz-d84c745540ff" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCurator() {
  const message = this.createChatbotMessage(<a><a className="cla" href="https://thegraph.academy/curators/definition/" target="_blank" rel="noreferrer">Küratörlerin</a> karmaşık teknik becerilere veya bilgilere sahip olmaları gerekmez. Gerekli olan tek şey MetaMask aracılığıyla işlem yapabilme yeteneğidir. Benzer şekilde, küratörlerin, indeksleyicilerin aksine, gerekli minimum miktarda GRT yatırmaları da gerekmez. Küratörlerin Web3 ekosisteminin eğilimlerini anlamaları ve bir subgraph’in yararlı bilgiler sağlayıp sağlamadığını görmeleri gerekir. Bir küratörün bir subgraph’in kırıldığı anlamına gelebilecek kritik sorunları tanımlayabilmesi de yararlıdır.<br></br><br></br>Aşağıdaki kılavuzlar, bir subgraph’e işaret etmeden önce bilmeniz gereken tüm bilgileri ve bunu güvenle nasıl yapacağınızı size verecektir.<br></br><br></br>Bu küratörün "Bir Subgraph’in Meşru Olup Olmadığını Değerlendirme ve Belirleme İpuçları için Detay ve Püf Noktaları" kılavuzu başlamak için en iyi <a className="cla" href="https://medium.com/@paulieb.eth/tips-and-tricks-to-evaluate-and-determine-if-a-subgraph-is-legitimate-c67f16e2205a" target="_blank" rel="noreferrer">yerdir</a>. Kılavuzu okuduktan ve aşağıdaki öğreticileri izledikten sonra, ilk subgraph’inize sinyal vermek için harika bir konumda olacaksınız.<br></br><br></br>Bu <a className="cla" href="https://medium.com/@paulieb.eth/the-graph-curation-bb17bf8b8fa9" target="_blank" rel="noreferrer">kılavuz</a> aynı zamanda PaulieB tarafından "Küratörlük" üzerine hazırlanmıştır. Ne olduğunu, nasıl yapılacağını açıklayan kısa ve tatlı bir rehber ve başarılı olmanıza yardımcı olacak faydalı kaynaklar.'<br></br><br></br>
  Küratörler tarafından küratörler için oluşturulan bir topluluk olan <a className="cla" href="https://t.me/CurationStation" target="_blank" rel="noreferrer">$GRT Curation Station’e</a> katılın. Gerekirse buradan daha fazla yardım isteyebilirsiniz.<br></br><br></br>Aşağıdaki eğitim videoları <a className="cla" href="https://thegraph.com/explorer/profile?id=0x87eba079059b75504c734820d6cf828476754b83&view=Indexing" target="_blank" rel="noreferrer">DataNexus</a> tarafından kürasyon hakkında oluşturulmuştur:<br></br><a className="cla" href="https://www.youtube.com/watch?v=-7qWi2do-1E" target="_blank" rel="noreferrer">The Graph'in küratörü nedir?</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=unzQvSZIORg" target="_blank" rel="noreferrer">Subgraph’i doğrulama</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=zJswFILfADg" target="_blank" rel="noreferrer">Bir subgraph’in üzerine nasıl gelinir?</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=u76dxQPdS9c" target="_blank" rel="noreferrer">İmzalama işlemi hatası</a><hr></hr>Bazı yararlı küratör araçları istiyorsanız, sadece sorup isteyin.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCuratorTools() {
  const message = this.createChatbotMessage(<a><strong>Küratörler için faydalı araçlar.</strong><br></br><br></br>Subgraph Studio'da faturalandırmanın nasıl çalıştığını <a className="cla" href="https://thegraph.com/docs/en/billing/" target="_blank" rel="noreferrer">buradan</a> öğrenebilirsiniz.<br></br><br></br>The Graph'in faturalandırma sistemi için Polygon'u nasıl kullandığını <a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">buradan</a> öğrenebilirsiniz.<hr></hr>Subgrpah’in indeksleme <a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">durumunu</a> denetleme<br></br><br></br>Şuradaki verileri görebilirsiniz:<br></br>Mainnet danışma fiyatları (günlük)

<br></br>Mainnet danışmanlık ücretleri (aylık)









Kullanıcı faturalandırma bakiyesi<br></br>Mainnet sorgu ücretleri (aylık, 30 günlük hareketli ortalama)<br></br>Yeni subgraph’ler(aylık)<br></br>Toplam subgraph’ler<br></br>Ortalama subgraph oranları (aylık, 30 günlük hareketli ortalama)<br></br>Subgraph danışmanlık ücretleri (30 gün)<br></br>Sorgu Hızı / Sinyal Hızı (30 gün)<br></br>Subgraph danışmanlık ücretleri (30 gün) - %<br></br><a className="cla" href="http://michael.lesane.net/graphdash/" target="_blank" rel="noreferrer">Burada</a><br></br><br></br>Veya <a className="cla" href="http://michael.lesane.net/graphdash/billing" target="_blank" rel="noreferrer">buradan</a> Abonelik Faturalandırması'nı kontrol edin.<br></br><br></br>Graph Network <a className="cla" href="https://dapplooker.com/dapp/graph-network-billing-120192" target="_blank" rel="noreferrer">Faturalandırma Kontrol Paneli</a><br></br><br></br>Graph Network <a className="cla" href="https://dapplooker.com/dapp/graph-network-user-billing-balance-120204" target="_blank" rel="noreferrer">Kullanıcı faturalandırma bakiyesi</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleHostedService() {
  const message = this.createChatbotMessage(<a>Barındırılan hizmet, The Graph'i bugün bulunduğu yere getirmede etkili olmuştur, ancak vizyon her zaman merkeziyetsiz bir indeksleme protokolü ve küresel API oluşturmak olmuştur. The Graph Network yayına girdiğinde, geliştiriciler nihayet yüklenmesi hızlı ve güvenilir olan gerçekten sunucusuz merkeziyetsiz uygulamalar sunma yeteneğine sahip olacaklar. Uygulamalar sorguları işlemek için doğrudan verimli bir indeksleyici ağına bağlanabildiğinden, merkezi bir altyapıya gerek kalmayacaktır.<br></br><br></br>Ethereum subgraph’leri, The Graph'in merkeziyetsiz ağına geçmeye devam ediyor. Web3'ün benimsenmesi arttıkça, ölçek ve performans talebi de artmaktadır. Geliştiriciler önemli bir seçenekle karşı karşıyadır: Merkezi teknolojiye güvenmeye devam etmek veya merkeziyetsiz bir altyapıya geçmek.<br></br>Uzun ömürlülük ve güvenilirlik için hiçbir şey merkeziyetsizliğin yerini tutamaz. Merkezi hata noktalarından kaçınarak, kullanıcılarınıza tutarlı bir şekilde erişebilecekleri bir web3 uygulaması sunuyorsunuz. Birçok proje üretimdeki ağı zaten doğrulamıştır ve şimdi projenizin taşınması için mükemmel bir zamandır.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/graph-network-migration" target="_blank" rel="noreferrer">Graph Network: Tüm Hızıyla Subgraph Geçişi.</a><br></br>Barındırılan hizmetten ana ağa bir alt grafiğin nasıl taşınacağına ilişkin adım adım bir kılavuz arıyorsanız, <a className="cla" href="https://codex.thegraph.com/repositories-and-documentation/official-documentation/hosted-service/migrating-subgraph" target="_blank" rel="noreferrer">buradan</a> bakın. Video eğitimlerini tercih ediyorsanız, alt kısma göz atın.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=syXwYEk-VnU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleChainlink() {
  const message = this.createChatbotMessage(<a>The Graph, Ethereum ve IPFS gibi ağları sorgulamak için kullanılan bir indeksleme protokolüdür. Herkes subgraph adı verilen açık API'ler oluşturup yayınlayarak verilere erişimi kolaylaştırabilir.<hr></hr>Chainlink, akıllı sözleşmelerin zincir dışı veri kaynaklarına, web API'lerine ve geleneksel banka ödemelerine güvenli bir şekilde erişmesini sağlayan merkeziyetsiz bir Oracle ağıdır.<hr></hr>İşte The Graph Protocol'den Tegan Kline ve Dave Kajpust ile bir video açıklaması. Merkeziyetsiz bir Web3 oluşturmada The Graph'in hayati önemini tartışıyorlar ve Chainlink ile The Graph arasındaki farkları açıklıyorlar.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=HOS9g0rKP24'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIndexerOfficeHours() {
  const message = this.createChatbotMessage(<a>Indexer Office Hours, Mainnet veya Testnet'te olsun, herkesin indeksleyici uygulama konusunda tavsiye alması için gayri resmi bir walk-in kliniğidir. Sorun giderme hakkında daha fazla bilgi edinmek veya yalnızca dizine ekleme hakkında sorular sormak istiyorsanız, burası tam size göre bir klinik.<br></br><br></br>Tüm Indexer çalışma saatlerini <a className="cla" href="https://graphops.notion.site/Indexer-Office-Hours-952e0b50a65144768aab922e2c9d102a" target="_blank" rel="noreferrer">buradan</a> takip edebilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleFireHose() {
  const message = this.createChatbotMessage(<a>Firehose (StreamingFast tarafından geliştirilen) aracılığıyla veri işleme, doğrusal indeksleme performansını ve senkronizasyon hızını artırır ve paralel işlemeyi etkinleştirerek veri çevikliğini en üst düzeye çıkarır. Firehose, herhangi bir blok zinciriyle Graph Node’u için genel bir arayüz oluşturur ve NEAR gibi yüksek performanslı zincirleri işleme yeteneğini büyük ölçüde geliştirir.<br></br><br></br>Bu konuda daha fazla bilgi edinmek için Firehose'un önerisini <a className="cla" href="https://firehose.streamingfast.io/" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.<hr></hr>Onlar hakkında daha fazla bilgi edinmek için bana StreamingFast hakkında soru sorabilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoreDevs() {
  this.handleButtonCoreDevsChat = this.handleButtonCoreDevsChat.bind(this);
  const message = this.createChatbotMessage(<a>Graph’in Temel Geliştiricileri şunlardır:<br></br><br></br><a className="cla" href="https://edgeandnode.com/blog/introducing-edge-and-node/" target="_blank"><strong>Edge & Node</strong></a> - Merkeziyetsiz protokoller geliştirmek ve web'i ilerletmek3. The Graph'in arkasındaki ilk ekip.<br></br><a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank"><strong>Figment</strong></a> - Node altyapısını ve çoklu blok zinciri desteğini iyileştirme.<br></br><a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank"><strong>The Graph Foundation</strong></a> - Ekosistemi yönetmek, hibeler vermek ve toplumu desteklemek.<br></br><a className="cla" href="https://www.streamingfast.io/" target="_blank"><strong>StreamingFast</strong></a> - Subgraph indeksleme performansını optimize etme ve web3 geliştirme araçlarını destekleme.<br></br><a className="cla" href="https://www.semiotic.ai/" target="_blank" ><strong>Semiotic</strong></a>- Yapay zeka yenilikleri ve Ar-Ge yoluyla Graph Network’ü Geliştirmek.<br></br><a className="cla"href="https://www.the-guild.dev/" target="_blank"><strong>The Guild</strong></a> - Subgraph araçları oluşturma ve GraphQL API iyileştirmeleri geliştirme.<br></br><a className="cla" href="https://graphops.xyz/" target="_blank"><strong>GraphOps</strong></a> - Graph Protocol aracılığıyla blok zinciri verilerini ayıklama, dönüştürme ve sunma.<br></br><a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank"><strong>Messari</strong></a> - Bilinçli kararlar ve yatırım için şeffaflık ve yapı araçları getirmek.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonCoreDevsChat}><strong>Çekirdek Geliştiriciler</strong></button><br></br><br></br>Tüm Çekirdek Geliştirici söyleşilerini <a className="cla" href="https://www.youtube.com/playlist?list=PLTqyKgxaGF3Tj_A6eqV8V_aQoRwd2oHa_" target="_blank">buradan</a> takip edebilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleFigment() {
  const message = this.createChatbotMessage(<a>Figment, Toronto merkezli Kanada'da kayıtlı ve risk sermayesi tarafından finanse edilen bir şirkettir. Dünyanın en büyük GRT sahiplerine hizmet veriyoruz. İnternet altyapısı şirketlerini başarıyla ölçeklendirmek için 30 yılı aşkın deneyime sahip.<hr></hr><strong>Staking</strong> - Figment, token  sahiplerinin ağları güvence altına almalarını, yönetişime katılmalarını ve performans kazanmalarını sağlayan son derece güvenli bir proof-of-stake (PoS) doğrulayıcıları ağı işletmektedir.<br></br>Figment ile Stake İşlemleri hakkında daha fazla bilgi için <a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank" rel="noreferrer">buradan</a> göz atın.<br></br><br></br><strong>Software</strong>- Figment'in <a className="cla" href="https://datahub.figment.io/" target="_blank" rel="noreferrer">DataHub</a> platformu, geliştiricilerin protokol uzmanı olmak zorunda kalmadan bir blok zincirinin en güçlü ve benzersiz özelliklerini kullanmalarına olanak tanıyarak yeni Web3 uygulamalarının geliştirilmesini hızlandırır.<br></br>Figment'in DataHub platformu hakkında daha fazla bilgi edinmek için buradan göz atın.<br></br><br></br><strong>Capital</strong>- Figment Capital, yeni ve son derece yenilikçi PoS projeleri için tohum finansmanı ve büyüme desteği sağlar.<hr></hr>Subgraph’leri kullanan geliştiriciler, subgraph’lerini DataHub içinde kolayca izleyebilir. Bu, geliştiricilerin subgraph’lerinin performansını ve güvenilirliğini geliştirmelerine yardımcı olur.<br></br>Graph’i Cosmos ekosistemine getirme konusu hakkında buradan bilgi edinebilirsiniz.<br></br>Figment, merkeziyetsiz bir protokoldeki en büyük birleşmelerden birinde Graph’e katılıyor; 80 Milyon GRT'lik bir Temel Geliştirici Hibesi verildi.<br></br><hr></hr>Messari - Bilinçli kararlar ve yatırımlar için şeffaflık sağlamak ve araçlar oluşturmak. Daha fazla bilgi için çekirdek geliştiricilerden herhangi birine soru sorabilirsiniz. En iyi geliştirici söyleşilerinin tümünü buradan takip edebilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSemiotic() {
  const message = this.createChatbotMessage(<a>Semiotic Labs, blok zincirindeki merkeziyetsiz pazarlar için otomatik karar verme araçları oluşturuyor. AI ve kriptografinin yakınsamasının geleceğin merkeziyetsiz interneti olan Web3'ü yönlendireceğine inanıyorlar.<hr></hr><strong>Deep Reinforcement Learning (RL)</strong>, Go gibi oyunlara ve bilimsel keşiflere hükmetmek için kullanılan bir AI alanıdır.<br></br>Deep RL kullanarak, ikili veya açık artırma tipi anlaşmalarda fiyat ve diğer şartları müzakere edebilen özerk ajanlar geliştiriyorlar.<br></br>Prososyal davranışları olan ajanlar, merkeziyetsiz network’ün refahını artırmak için eğitilebilir.<br></br><br></br><strong>Simülasyon ortamları</strong>, yapay zekâ aracılarını verimli bir şekilde eğitmek ve performanslarını kıyaslamalara göre test etmek için gereklidir.<br></br>Merkeziyetsiz pazarların ekonomisini yakalamak ve ağa katılan birden fazla ajanı eğitmek için gerçekçi simülatörler geliştiriyorlar.<br></br>Simülasyon ortamları, gerçek dünyadaki arızalar meydana gelmeden önce zayıflıkları (örneğin, düşman saldırıları) bulmak için yeni protokollerin stres testinde de yararlıdır.<br></br><strong>Homomorfik şifreleme</strong>, şifrelenmiş veriler üzerinde hesaplamalar yapmayı mümkün kılar.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMessari() {
  const message = this.createChatbotMessage(<a>Messari, standartlaştırılmış, karmaşık, doğru ve yüksek kaliteli protokol subgraph’leri geliştirmek ve sürdürmek için geliştirici yeteneğini ve alan uzmanlığını getiriyor. Tüm subgraph’leri açık kaynak kodlu olacak ve genel topluluk tarafından kullanılabilecektir. Her subgraph merkeziyetsiz network’e taşınacaktır. Buna ek olarak, Messari subgraph çalışma gruplarına liderlik edecek, temel protokol çabalarını bilgilendirmeye yardımcı olmak için geri bildirim sağlayacak, subgraph en iyi uygulamalarını paylaşacak ve herhangi bir protokol için topluluk standartları oluşturmaya yardımcı olacaktır.<br></br><br></br>Messari'nin The Graph ekosistemindeki rolü hakkında daha fazla bilgiyi <a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank" rel="noreferrer">buradan</a> edinebilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphQLApi() {
  const message = this.createChatbotMessage(<a><strong>API GraphQL</strong><br></br><br></br>Bu <a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/" target="_blank" rel="noreferrer">kılavuzda</a>, Graph protokolü için kullanılan GraphQL sorgu API'si açıklanmaktadır.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#queries" target="_blank" rel="noreferrer">Sorgular</a></strong> – Subgraph şemanızda, carlıklar adlı türleri tanımlarsınız. Her varlık türü için, üst düzey sorgu türünde bir varlık ve varlık alanı oluşturulur.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#sorting" target="_blank" rel="noreferrer">Sınıflandırma</a></strong> - Bir koleksiyonu sorgularken, orderBy parametresi belirli bir özniteliğe göre sıralamak için kullanılabilir. Ek olarak, orderDirection, sınıflandırma yönünü, yükselmek için asc veya alçalmak için desc belirtmek için kullanılabilir.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#pagination" target="_blank" rel="noreferrer">Disk Belleği</a></strong> - Bir koleksiyonu sorgularken, ilk parametre koleksiyonun başlangıcından itibaren sayfalandırma için kullanılabilir.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#filtering" target="_blank" rel="noreferrer">Filtreleme</a></strong> - Farklı özelliklere göre filtrelemek için sorgularınızdaki “where” parametresini kullanabilirsiniz.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#time-travel-queries" target="_blank" rel="noreferrer">Zaman yolculuğu sorguları</a></strong> - Varlıklarınızın durumunu yalnızca varsayılan olan son blok için değil, aynı zamanda geçmişteki rastgele bir blok için de kontrol edebilirsiniz.<hr></hr><strong>Türkçe rehber makaleler ise aşağıda yer alıyor!</strong><br></br><br></br>"EIP-4444 Sonrası Geçmiş Ethereum Verilerine Erişim”,  <a className="cla" href="https://onursarayli.medium.com/eip-4444-sonras%C4%B1-ge%C3%A7mi%C5%9F-ethereum-verilerine-eri%C5%9Fim-8513c6e13cdc" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleParticipantUpdate() {
  const message = this.createChatbotMessage(<a>En son GRT Katılımcı Güncellemesi, önemli istatistikler, duyurular ve kilometre taşları dahil olmak üzere The Graph'in Q3 2022 önemli noktalarını kapsar. Kaydı tekrar izleyin ve The Graph Ekosisteminde gerçekleşen tüm geliştirmeler ve yenilikler hakkında bilgi edinin.<br></br><br></br><Embed className="embed" isDark url='https://youtu.be/58el3_9oJ6Q'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}



handleTheGuild() {
  const message = this.createChatbotMessage(<a>Guild'in gelişmiş açık kaynak ekosistemi, modüler, açık kaynaklı ve kapsamlı bir platformla API altyapınız için ihtiyacınız olan her şeyi kapsar.<hr></hr><strong>Ekosistem</strong><br></br><br></br>Gelişmiş modüler çözümleri, bireysel açık kaynak kütüphaneleri veya eksiksiz bir birleşik API platformu olarak kademeli olarak benimsenebilir. API altyapınızı ölçeklendirmek için ihtiyacınız olan her şeyi kapsayan açık kaynaklı, sürdürülebilir API araç setini <a className="cla" href="https://www.the-guild.dev/#platform" target="_blank" rel="noreferrer">buradan</a> keşfedin.<br></br><br></br>The Guild hakkında daha fazla bilgiyi <a className="cla" href="https://www.the-guild.dev/about-us" target="_blank" rel="noreferrer">buradan</a> edinebilirsiniz.<br></br><br></br>Sağladıkları hizmetler hakkında daha fazla bilgiyi <a className="cla" href="https://www.the-guild.dev/services" target="_blank" rel="noreferrer">buradan</a> edinebilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphOps() {
  const message = this.createChatbotMessage(<a>GraphOps, web'in geleceğini inşa ediyor. Misyonu şudur: Sansürsüz, adil ve kendi kendine egemen bir ağ kurma misyonuyla hareket ediyoruz. Kamu verileri bu misyonun merkezinde yer alıyor  ve dünyamız için bir sonraki büyük kurum ve uygulama dalgasını güçlendirmek için açık veri standartları ve protokolleri oluşturma konusunda başarılı oluyoruz.<br></br><br></br>GraphOps bir blockchain veri altyapısı şirketidir. Grafik Protokolü aracılığıyla blok zinciri verilerini ayıklar, dönüştürür ve sunarlar.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphDay() {
  const message = this.createChatbotMessage(<a>İşte 2 Haziran 2022'de San Francisco'nun tarihi Güzel Sanatlar Sarayı'nda gerçekleşen en son Graph Day’in bir özeti.<hr></hr>Tüm etkinlik hakkında daha fazla bilgi edinmek için <a className="cla" href="https://thegraph.com/graph-day/2022/" target="_blank" rel="noreferrer">Graph Day</a> ve <a className="cla" href="https://thegraph.com/graph-hack/2022/" target="_blank" rel="noreferrer">Graph Hack'i</a> ziyaret edin.<hr></hr>Graph topluluğu bir araya gelip web3, dapps, protokoller ve İnternet'in geleceğine odaklanabildi. Önde gelen protokol ve dapps geliştiricileri, web3 topluluğunun yeni insan koordinasyonu biçimlerine nasıl öncülük ettiğini gösterdi. <br></br><br></br>The Graph Foundation Direktörü Eva Beylin'den hoş geldiniz konuşması ile başladı. Ardından The Graph'in kurucu ortağı ve Edge & Node'un CEO'su Yaniv Tal'dan ilham verici bir konuşma geldi. Daha sonra, topluluk Graph'tan “Neden Merkeziyetsizlik Önemlidir” konulu bir sunum yapıldı. Sonra birbiri ardına heyecan verici duyurular geldi:<br></br>Barındırılan hizmetin sonlandırıldığına dair bildirim.<br></br>İkincil yayın duyurusu.<br></br>GEO’nun çıkış duyurusu.<br></br>Topluluk daha sonra Diana Chen, Camila Ramos, Chris Ewing ve Derek Meyer ile bir panel konuşmasına davet edildi. "İnsanlara ihtiyacın var."<br></br><br></br>GRTiQ'nun Graph Day podcast'ini ve etkinlikten hemen önce gerçekleşen Tegan Kline ile Graph Hack'i <a className="cla" href="https://www.grtiq.com/grtiq-podcast-special-release-graph-day/" target="_blank" rel="noreferrer">buradan</a> dinleyebilirsiniz.<br></br><br></br>Aşağıdaki The Graph Day 2022 Canlı Yayınından internetin geleceğine bir göz atın.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=yLQmdM5DWSk&list=PLTqyKgxaGF3T2Ginisuf2nUY6yDi_WbT3&index=11'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsTheWeb() {
  const message = this.createChatbotMessage(<a>Web yıllar içinde çok gelişti ve bugünkü uygulamaları ilk günlerinden itibaren neredeyse tanınmıyor bile. Web'in evrimi genellikle üç ayrı aşamaya ayrılır: Web1, Web2 ve Web3.<hr></hr><strong>Web1</strong><br></br>Web 1.0, web'in ilk yinelemesiydi. Katılımcıların çoğu içerik tüketicileriydi ve içerik oluşturucular, öncelikle metin veya resim biçiminde sunulan bilgileri içeren web siteleri oluşturan geliştiriciler olma eğilimindeydi. Web 1.0 yaklaşık olarak 1991'den 2004'e kadar sürdü.<br></br>Web 1.0, dinamik HTML yerine statik içerik sunan sitelerden oluşuyordu. Veriler ve içerik veri tabanı yerine statik bir dosya sisteminden sunuluyordu ve sitelerin fazla etkileşimi yoktu.<br></br><br></br><strong>Web2</strong><br></br>Çoğumuz öncelikle web'i, yaygın olarak web2 olarak bilinen mevcut haliyle deneyimledik. Web2'yi etkileşimli ve sosyal web olarak düşünebilirsiniz.<br></br>Web2 dünyasında, oluşturma sürecine katılmak için geliştirici olmanıza gerek yoktur. Birçok uygulama, herkesin içerik oluşturucu olmasına izin verecek şekilde tasarlanmıştır.<br></br>Bir düşünce yaratmak ve onu dünyayla paylaşmak istiyorsanız, bunu yapabilirsiniz. Bir video yüklemek ve milyonlarca insanın izlemesine, etkileşimde bulunmasına ve yorum yapmasına izin vermek istiyorsanız, bunu da yapabilirsiniz.
Web2 aslında basittir ve sadeliği nedeniyle, dünya çapında giderek daha fazla insan yaratıcı hale gelmektedir.<br></br>Mevcut haliyle web2 birçok yönden gerçekten harika, ancak çok daha iyisini yapabileceğimiz bazı alanlar var.<br></br><br></br><strong>Web3</strong><br></br>Web2 ve web3 arasında bazı temel farklılıklar vardır, ancak merkezileştirme özündedir.<br></br>Bunun yerine, web3 uygulamaları blok zincirleri, birçok node’un (sunucunun) eşler arası merkeziyetsiz ağlarında veya kripto-ekonomik bir protokol oluşturan ikisinin bir kombinasyonunda çalışır. Bu uygulamalar genellikle dApps (merkezi olmayan uygulamalar) olarak adlandırılır ve bu terimin web3 ekosisteminde sıklıkla kullanıldığını görürsünüz.<br></br><br></br>Web1, Web2 ve Web3 hakkında daha fazla bilgi edinmek için <a className="cla" href="https://www.freecodecamp.org/news/what-is-web3/" target="_blank">burayı</a> okuyun.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoinbase() {
  const message = this.createChatbotMessage(<a>GRT tokenlarınızı Coinbase Cüzdanı ile nasıl stake edebilirsiniz?<br></br><br></br>Bu makalede, GRT tokenlarınızı <a className="cla" href="https://www.coinbase.com/wallet" target="_blank">Coinbase</a> Cüzdanı kullanarak The Graph protokolü içinde nasıl stake edebileceğinizi öğretecektir.<br></br><br></br>Graphtronauts tarafından hazırlanan kılavuzu okumak için <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-delegate-your-grt-tokens-with-coinbase-wallet-85168f84e95e" target="_blank">buradan</a> göz atın. Bir video eğitimi izlemeyi tercih ederseniz, onu da alt kısımda bulabilirsiniz.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s'/><hr></hr><strong>Türkçe rehber makaleler ise aşağıda yer alıyor!</strong>"GRT Tokenlarınızı Coinbase Cüzdanıyla Nasıl Stake Edebilirsiniz?",  <a className="cla" href="https://onursarayli.medium.com/grt-tokenlar%C4%B1n%C4%B1z%C4%B1-coinbase-c%C3%BCzdan%C4%B1yla-nas%C4%B1l-stake-edebilirsiniz-b908b7bb436b" target="_blank" rel="noreferrer">buradan</a> okuyabilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCryptocurrencies() {
  const message = this.createChatbotMessage(<a>Ad, kriptografi ve para biriminin bir kombinasyonu veya kısaltmasıdır. Fiziksel faturalar ve madeni paralar kullanan geleneksel para birimlerinin (genellikle "fiat para birimleri" olarak adlandırılır) aksine, kripto para birimleri tamamen dijitaldir. Tıpkı diğer para birimleri gibi, mal ve hizmet satın almak için kripto para birimini kullanabilir ve dünyanın dört bir yanındaki arkadaşlarınız ve aileniz arasında aktarabilirsiniz. Bununla birlikte, kripto para birimi, onu geleneksel para birimlerinden ayıran bazı ek özelliklere sahiptir.<br></br><br></br>Bir bankaya itibari para yatırdığınızda, aslında paranızı o bankaya ödünç verirsiniz ve talep ettiğinizde size geri ödeyeceklerine güvenirsiniz. Bu genellikle her iki taraf için de iyi çalışsa da bankalar başkalarına borç vererek ve bu kredilere faiz uygulayarak paranızdan kâr eder. Buna ek olarak, bankalar para çekme ücretleri veya aylık hesap ücretleri gibi ek ücretler talep eder ve ayrıca minimum bakiye gereksinimlerine sahip olabilir.<br></br><br></br>Geleneksel bir banka merkezileştirilmiş olarak kabul edilir, kripto para birimi merkezi değildir, yani her şeyi kontrol eden tek bir kişi yoktur; aslında, bir blok zincirinde gerçekleşen her işlemi doğrulamaya yardımcı olan binlerce insan vardır ve bu, güvenilmez bir ortama, gelişmiş veri mutabakatına ve azaltılmış sıkıntılara sahip olduğunuz anlamına gelir. Bu, kendi varlıklarınızı kontrol ettiğinizi söylemenin düzgün bir yoludur.<br></br><br></br>Kripto para birimlerinin artan gizliliği, güvenliği, taşınabilirliği ve şeffaflığı, işlemleri manipüle etmek, para arzını değiştirmek veya oyun ortasında kuralları ayarlamak için yer olmadığı anlamına gelir. Kripto para birimleri bir organizasyon değildir, fonlarını kontrol etmezler; kendi bankanız olabilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsABlockchain() {
  const message = this.createChatbotMessage(<a>Blockchain, kripto para birimi işlemlerini izlemek için kullanılan bir defter olarak düşünülebilir, aynı şekilde çek defteri harcamaları bir çek defteri kaydıyla izlenir. Bir blok zinciri, ETH veya Bitcoin gibi kripto para birimleri ile yapılan işlemleri kaydetmek için kullanılan bir sistemdir. İşlem verileri birçok işlemden oluşan bir blokta saklanır. Bir blok dolduğunda, önceki bloğa referans veren ve önceki bloğa zincirleyen yeni bir blok oluşturulur; bu nedenle blockchain terimi kullanılmaktadır.<br></br><br></br>Ethereum gibi bazı blok zincirleri, eşler arası bir bilgisayar ağı kullanılarak sürdürülür ve herhangi bir kullanıcının dünyanın herhangi bir yerinden blok zincirine ev sahipliği yapmasına ve erişmesine izin verir. Bir işlem gerçekleştikçe, blockchain ağındaki her kullanıcının defterine kaydedilir ve dağıtılır.<br></br><br></br>Bu bireysel bilgisayarlar, birlikte kullanıldığında, tüm blok zinciri verilerini depolamak için merkeziyetsiz bir küresel veritabanı oluşturur. Merkeziyetsiz, verilerin tek bir yerde yönetilmesi ve tek bir şirket veya kişi tarafından kontrol edilmesi yerine, ağı kullanan herkesin onu yönettiği anlamına gelir.<br></br><br></br>Blok zincirleri değişmez, yani değişmez olacak şekilde tasarlanmıştır. Bir şey blok zincirine kaydedildikten sonra, değiştirilemez veya tersine çevrilemez. Bu, blok zincirindeki herhangi bir işlemin kalıcı olduğu ve her zaman herkesin görebileceği bir kayıt olacağı anlamına gelir. Blockchain'in veri yapısıyla birleştirilen merkeziyetsizlik, olayların kalıcı bir zaman çizelgesini oluşturur.<br></br><br></br>Bazı bankalar, hesabınızda bir aydan uzun süren işlemleri görmek için kendileriyle iletişime geçmenizi ister. Blockchain kullanmak, bankanızla iletişim kurma ihtiyacını ortadan kaldıracaktır, çünkü tüm işlemleriniz zaten görüntülemeniz için mevcut olacaktır.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSafe() {
  const message = this.createChatbotMessage(<a><strong>Güvenli şifreleme mi?</strong><br></br>Kripto para birimlerinin güvenliği çok tartışılan bir konudur. Bir yandan, savunucular kripto para biriminin geleneksel para biriminden daha güvenli olduğunu savunuyorlar çünkü hükümet kontrolüne veya manipülasyonuna tabi değil. Öte yandan, şüpheciler kripto para biriminin bilgisayar korsanlığı ve hırsızlığa karşı savunmasız olduğunu iddia ediyor.<br></br><br></br>Sonuçta, kripto para birimlerinin güvenliği, bireysel kullanıcının güvenlik uygulamalarına ve kripto para birimi ağının güvenliğine bağlıdır. Örneğin, kripto para biriminizi şifre korumalı olmayan bir dijital cüzdanda saklarsanız, saldırıya uğrama riskiyle karşı karşıya kalırsınız.<br></br><br></br>Benzer şekilde, ağ güvenli değilse, siber suçlular kripto para biriminizi çalabilir. Bu nedenle, kripto para birimlerine yatırım yapmadan önce araştırma yapmak ve bunları saklarken veya kullanırken dikkatli olmak önemlidir.<br></br><br></br>Kriptonun yararları ve sakıncaları hakkında bilgi edinmek için <a className="cla" href="https://www.abcmoney.co.uk/2022/03/16/is-cryptocurrency-safe/" target="_blank" rel="noreferrer">burayı</a> okuyun.<hr></hr><strong>Is Blockchain güvenli midir?</strong><br></br>Taklit edilemeyen veya saldırıya uğramayan kripto para birimleri ile birlikte, blockchain teknolojileri faydalarına ek olarak inanılmaz güvenlik sunar. Blok zincirlerinin merkeziyetsiz doğası ve içlerindeki bilgileri değiştirememeleri, blok zincirlerini manipülasyona, bilgisayar korsanlığına ve hileli işlemlere karşı dirençli hale getirmeye yardımcı olur. Ağdaki birçok dağıtılmış blok zinciri sürümüyle, bir bilgisayar korsanının gerçek hasara neden olmak için sayısız bilgisayarın kontrolünü ele geçirmesi gerekir. Bu, bir blok zincirini hacklemeyi neredeyse imkânsız hale getirir.<br></br><br></br>Dünyayı güçlendirmek için blockchain teknolojisini uygulamak, herkes için daha hızlı, daha güvenli ve daha şeffaf pazarlar sağlar.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleEthereum() {
  const message = this.createChatbotMessage(<a>Ethereum, Vitalik Buterin tarafından 2013 yılından itibaren geliştirilen programlanabilir bir blockchain teknolojisidir. Ethereum, kullanıcıların kripto para birimleri gönderip almalarına, dapps olarak bilinen merkeziyetsiz uygulamalara erişmelerine ve inşa etmelerine, staking yoluyla ödüller kazanmalarına ve çok daha fazlasına olanak tanır. Finansal hizmetlere ücretsiz erişim ve daha özel ve merkeziyetsiz bir internet, Ethereum vakfının temel hedeflerinden bazılarıdır.<br></br><br></br>Kuruluşundan sonra Ethereum, kontrolünde tek bir kişi olmadan merkeziyetsiz bir yönetişim sistemi uyguladı. Bu sahiplik eksikliği, hükümetlerin veya kuruluşların Ethereum'daki hizmetlere erişiminizi reddetmesini neredeyse imkânsız hale getiriyor. Ethereum'daki uygulamalar, bunları kullanmak için tüm kişisel verilerinizi gerektirmez. Bu, kullanıcılara gizlilikleri üzerinde daha fazla kontrol sağlar ve her işlemde onları daha güvende tutar.<br></br><br></br>Ethereum, Loopring Smart Wallet gibi bir Ethereum cüzdanına erişimi olduğu sürece herkese, her yere açıktır. Ethereum cüzdanını, fonlarınızı kontrol eden bir banka olmadan bir bankacılık uygulaması olarak düşünebilirsiniz. Sadece bir internet bağlantısı ile Ethereum, dünya çapında bankacılık hizmetlerine erişim sağlayan herkesin kullanımına açıktır.<br></br><br></br>Ethereum blok zincirindeki tüm işlemler yerel kripto para birimi ether/ETH tarafından desteklenmektedir. ETH her gönderildiğinde veya bir merkeziyetsiz uygulama kullanıldığında, kullanıcılar Ethereum ağını kullanmak için ETH olarak küçük bir ücret öderler. Bu ücretler, madencilerin blok zincirindeki eylemleri doğrulamalarına yardımcı olmak için kullanılır. Madenciler kimsenin blok zincirini aldatmadığından veya kurcalamadığından ve güvende tutmadığından emin olmak için bekçi olarak hareket eder. Bu, proof of work olarak bilinir. Ethereum'un geleceği, kullanıcıların blok zinciri kayıtlarının koruyucuları olarak hareket etmelerine izin vermek için fonların taahhüt edildiği veya yatırıldığı blok zincirini korumak için yeni bir yöntem getiriyor. Bu, proof of stake olarak bilinir.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOW() {
  const message = this.createChatbotMessage(<a>Proof-of-work (PoW), çoğu büyük kripto para birimi için bir fikir birliği algoritmasıdır; bir kripto para biriminin defterini güvence altına almanın bir yoludur. PoW, Bitcoin blok zinciri için Satoshi Nakamoto tarafından tanıtıldı ve ilk fikir birliği algoritması haline geldi ve bugüne kadar baskın kaldı.<br></br><br></br>Ancak, PoW'u ilk kez duymuyorduk, Adam Back'in Hashcash uygulaması 1997'de icat edildi ve bir Proof-of-work özelliği kullandı. Bu sistemin en büyük faydalarından biri, çifte harcamadan kaçınmasıdır. Bu terim neredeyse yalnızca dijital para ve kripto para birimleri için kullanılır, çünkü aynı fiziksel parayı iki kez harcayamazsınız, yani; bir mağazaya gidip bir içki için nakit ödeme yaptıysanız, aynı parayı farklı bir mağazada kullanamazsınız, çünkü ilk mağaza parayı kasasına koydu bile.<br></br><br></br>Kripto para birimlerinde veya herhangi bir dijital parada, büyük miktarda veriyi hızlı ve doğrulama olmadan göndermek mümkündür, çeşitli mağazaları kendilerine ödeme yapıldığına ve defterin hızla mahvolacağına inandırmak için yeterince hızlı harcayabilecek insanlara sahip olursunuz. Küçük ölçekte, bu işe yarayabilir, ancak 10 ila 100 bin kişi bir blok zincirinde çalışırken, işler hızla karmaşıklaşır.<br></br><br></br>Tüm işlemleri ticaret yapmak isteyen pek çok insanla birer birer toplamak sıkıcı ve verimsiz olacaktır, bu nedenle bu işlemler bir öncekine bağlanan ve ona atıfta bulunan bir blok halinde gruplandırılır, bu nedenle Blockchain adı verilir. Bununla birlikte, bir bloğa eklemek ücretsiz değildir, her bir işlem bloğunu doğrulamaya yardımcı olan madenci adı verilen kullanıcılar vardır. Bu, tersine çevrilmesi neredeyse imkânsız olan bir karma (parmak izi gibi düşünün) oluşturmak için bilgi işlem gücüne ve gerçek dünya enerjisine mal olur.<br></br><br></br>Yüksek bilgi işlem gücü nedeniyle, madencilere hizmetleri için bir ücret ödenir ve bloklar zincire gönderilir. PoW'daki kriptonun gücüyle, geçersiz bir işlem yapmaya çalışırsanız, ağ otomatik olarak reddedecek ve madencinin ücretini ödemeye devam edecektir. Bunun güzelliği de buradadır: Geçersiz işlemlere teşebbüs etmek maliyetli hale gelir, ancak dürüst davranmak kârlıdır.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOS() {
  const message = this.createChatbotMessage(<a>Proof of Work gibi, Proof of Stake (PoS), yatırılan coin sayısına dayanan bir fikir birliği algoritmasıdır. Staking bir blok doğrulayıcı olmak için sistemdeki fonları taahhüt etmeyi ifade eder; doğrulayıcılar, yalnızca coinleri kilitliyse yeni bloklar üretme sürecine katılabilirler. Fonlar daha sonra teminat görevi görür, yani kötü niyetli bir doğrulayıcı stake fonlarınızı ve ağa erişimi kaybeder.<br></br><br></br> PoS, belirli avantaj ve dezavantajlarla birlikte gelen PoW'a bir alternatiftir. Proof of Work'te sadece madenci ödüllendirilir ve herkes geçerli bloğu sunan kişi olmak için yarışır, böylece çok fazla enerji harcar. Proof of Stake modeli, stake boyutunu ve ne kadar süredir stake ettiğinizi göz önünde bulundurarak, ardından önemli miktarda enerji ve zaman tasarrufu sağlayan doğrulayıcıyı seçerek fikir birliğine varır.<br></br><br></br><table><tr className="indexer-table-header">
  <th><strong>Avantajları</strong></th>
  <th><strong>Dezavantajları</strong></th>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Verimlilik: Bir blok zincirini korumak için çok az enerji kullanılır.</td>
  <td>Ölçek: Ethereum veya Bitcoin boyutuna ulaşmak için hala bir PoS sistemi olması gerekiyor.</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Performans: Karmaşık bilgisayar sorunlarını çözmek zorunda değilsiniz, bu nedenle işlem hızlarını artırıyorsunuz.</td>
  <td>Daha az güvenli: Bir PoS sistemine katılmak, coin istiflemeyi % 51'lik bir saldırıya teşvik edebilir. Yeterince büyük blok zincirlerde, bu çok daha az olası hale gelir.</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>LNivel alt girişi: Bir proof-of-stake modeline katılmak için yalnızca bir kez para harcamanız gerekir. Bir PoW sistemi donanım ekipmanı ve sürekli çalışma süresi gerektirir.</td>
  <td>Merkezileştirme: Stake etmek adına daha fazla tokena sahip olmak için bir teşvik vardır. Bazı blok zincirleri bunu cezalandırmaya ve daha küçük doğrulayıcıları teşvik etmeye başladı.</td>
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
  const message = this.createChatbotMessage(<a><strong>Coin</strong><br></br>Kripto para biriminde, "para birimi" terimi, kendi blok zincirine özgü bir para birimini tanımlamak için kullanılır (örneğin, Ethereum blok zinciri için Ether, Bitcoin blok zinciri için Bitcoin, vb.). Para birimi, çeşitli şekillerde kullanılabilen dijital bir para birimidir:<br></br>Bir ödeme şekli olarak (örneğin, bir ürün veya hizmet için ETH'yi bir başkasına aktarmak), değer deposu (örneğin, bazıları Bitcoin'i birinin serveti için "güvenli bir liman" olarak görür), hesap birimi (örneğin, NFT gibi öğeler ETH'de fiyatlandırılabilir) ve iş kanıtı kullanan blok zincirleri için, yerel para birimi ayrıca madencilere işlemleri işlemek ve blok üretmek için ödeme yapmak için de kullanılır.<br></br><br></br><strong>Sembolik</strong><br></br>Bir coin kendi blok zincirine özgü olsa da mevcut bir blok zincirinde bir token oluşturulur. Her blok zincirinin tokenları için kendi formatı vardır. Örneğin, Ethereum blok zincirinde oluşturulan tokenlar ERC koduna ve ardından bir sayıya (örneğin ERC-20) sahiptir. Teknik olarak, herkes bir token oluşturabilir, bu nedenle satın almadan önce tokenları araştırmanız ve okumanız her zaman önerilir.<br></br>Bir token, kullandığınız standarda bağlı olarak değiştirilebilir (alınıp satılabilir) veya değiştirilemez. Ethereum'da, standart belirteçlerin bazı örnekleri şunlardır:<br></br><br></br>ERC-20<br></br>Değiştirilebilir tokenlar, dijital para birimleri, bahis ve oylama adına kullanılanlar için yaygın olarak kullanılan standarttır.<br></br><br></br>ERC-721<br></br>Bir sanat eseri veya şarkı için NFT gibi değiştirilemeyen tokenlar için kullanılan standart.<br></br><br></br>ERC-1155<br></br>Daha verimli operasyonlara ve işlemlerin gruplandırılmasına olanak tanıyan standart. Herhangi bir sayıda değiştirilebilir ve değiştirilemez token tipini temsil edebilir ve kontrol edebilir. Yani, ERC-1155 tokenı bir ERC-20 ve ERC-721 tokenı ile aynı işlevi ve hatta her ikisini de aynı anda gerçekleştirebilir.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStablecoin() {
  const message = this.createChatbotMessage(<a>Stablecoin, sabit bir piyasa fiyatını korumak için tasarlanmış bir kripto para birimidir. Kesin mekanizmalar birinden diğerine değişebilse de stablecoin'ler piyasa oynaklığına karşı biraz dirençlidir. Menkul kıymetleri genellikle ABD doları gibi başka bir varlığa sabitlendiği için önemli fiyat değişiklikleri yaşamamalıdırlar.<br></br><br></br> Bir stablecoin kullanmanın ana fikri, fiat ve kripto para birimi ekosisteminin avantajlarından yararlanmaktır. Kripto piyasalarının değişken doğasına karşı korunabilir ve bir banka veya komisyoncudan daha iyi faiz kazanmak için stablecoin'lerinizi ödünç verebilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCEX() {
  const message = this.createChatbotMessage(<a>Merkezi borsalar (CEX), bir sipariş defteri tutarak kullanıcılar arasındaki alışverişi kolaylaştırmanın bir yoludur; bireysel yatırımcılar tarafından verilen alım satım emirleri koleksiyonu. Siparişler, belirli bir fiyata belirli miktarda kripto para birimi satın almak veya satmaktır: Bir CEX bu emirleri toplayacak ve bunları yerine getirecektir.<br></br><br></br>CEX ile kişisel cüzdanlar veya DEX arasındaki en büyük fark, kullanıcıların aslında birbirleriyle kripto para birimleri veya fiat ticareti yapmamalarıdır. Fonlar yatırılır ve borsa varlıkların velayetini devralır ve temel olarak tüccara bir senet verir. Bunun, daha düşük ücretler ve daha basit takaslar gibi avantajları olduğu gibi, aynı zamanda aklama ticareti ve fiyat manipülasyonu gibi kötü niyetli uygulamalara izin veren şeffaflık eksikliği gibi dezavantajları da vardır.<br></br><br></br>Tüm fonlar borsanın gözetiminde olduğundan, CEX'ler potansiyel saldırılar için birincil hedeftir ve son yıllarda yüz milyonlarca dolar için birkaç kez saldırıya uğramıştır. Ayrıca, bir CEX bir yerde barındırıldığından, kesinti süresine yol açabilecek teknik sorunlar veya saldırılar olabilir. Bazı durumlarda hükümet düzenlemeleri nedeniyle fonlar dondurulabilir ve el konulabilir.<br></br><br></br>Bir CEX, KYC yapmanızı gerektirse de bu bilgilerin kolayca erişilebilir olması vergi amaçları için de yararlıdır ve çoğu borsa size vergi belgelerini kolayca sağlayabilir. Bir CEX'in fonlarınızın velayetini alması, kendiniz kontrol etmekte rahat hissetmiyorsanız sizin için bir avantaj olarak görülebilir. Bazı kullanıcılar kişisel cüzdanlarına kripto paralarını gönderdi ve ilk cümleleri unuttular veya özel anahtarlarını kaybettiler. Böylece kripto para birimlerinde milyonlarca dolar kayıplar yaşanmış oldu.<br></br><br></br>Popüler CEX'in bazı örnekleri Binance, Coinbase, Huobi ve Kucoin'dir.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDEX() {
  const message = this.createChatbotMessage(<a>Merkeziyetsiz bir borsa, işlemlerin doğrudan tüccarlar arasında gerçekleştiği eşler arası bir piyasadır. Bu, merkeziyetsiz kripto menkul kıymetlerin çekirdeğidir: bankalar, brokerler veya diğer resmi aracılar işlemleri teşvik etmez. Ethereum L1'de çalışan Uniswap ve Sushiwap gibi bazı popüler DEX'ler bulunmaktadır.<br></br><br></br>Merkezi bir borsa (CEX) ve bir DEX arasındaki en büyük fark, bir CEX'in fiat para birimi ve kripto arasındaki değişimlere izin verirken, bir DEX'in izin vermemesidir. Bir CEX, marj ticaretine izin verecek ve sipariş defteri tarafından işlenen limit emirlerini ayarlayacaktır; bu Nasdaq gibi borsalara benzer.
  Bir DEX tamamen akıllı sözleşmelere dayanır. Kripto para birimi fiyatlarını algoritmik olarak belirlerler ve doğrudan blok zincirine yerleşen işlemleri kolaylaştırmak için likidite fonlarını (LP'ler) kullanırlar. Bir DEX normalde açık kaynak koduna dayanır, bu da nasıl çalıştığı hakkında gizli bir şey olmadığı anlamına gelir.<br></br><br></br>Bir DEX'te daha fazla çeşitlilik bulacaksınız, DeFi ilk token LP'lerine girmek için ideal bir yerdir. Bu, bilinen rastgele ve bazen işe yaramaz belirteçlere kadar değişir, yatırım yaparken kendi araştırmanızı yaptığınızdan emin olun. Bununla birlikte, bilgisayar korsanlığı riski büyük ölçüde azalır, çünkü bir DEX'teki fonlar merkezi bir mağazada değil, kişisel cüzdanlarda saklanır; yıllar boyunca CEX üzerinde birkaç defa çalınmalar oldu.<br></br><br></br>Bir CEX, KYC ile kullanıcılarını tanımlamayı gerektirecektir. Bir DEX ise anonim kalmanız için kişisel olarak tanımlanabilir herhangi bir bilgi gerektirmez. Ayrıca, bazı yerler kripto para birimi alımlarına izin vermeyecek olsa da bir DEX bu bölgelerden insanlar için olasılık yaratıyor.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLayerTwo() {
  const message = this.createChatbotMessage(<a>Katman 2 (L2), mevcut bir blok zincirine dayanan ikincil bir çerçeve veya protokolü ifade eder. Bir L2 protokolünün temel amacı, büyük kripto para birimi ağlarının işlem hızını ve ölçeklendirme zorluklarını çözmeye yardımcı olmaktır, Ethereum için buna Ethereum Ölçeklendirme Üçlüsü diyoruz: Ölçeklendirme, Hız ve Merkeziyetsizleştirme.<br></br><br></br>Ethereum şu anda saniyede ~ 13 işlem gerçekleştirirken, MasterCard ve Visa gibi kredi kartı şirketleri 1700 tps'den fazla işlem yapıyor ve küçük bir ücret talep ediyor. Küçük işletmeler için Square veya benzeri hizmetlere aşina iseniz, işlem yapmak için Ethereum'u tek başına kullanmayı asla hayal edemezsiniz. Ödeme yapmaya çalıştığınızı ve ödemeyi doğrulamak için 20 ila 30 dakika beklediğinizi düşünün, bu doğrulama için bir gaz ücreti ödemekten bahsetmiyorum bile; L2'nin devreye girdiği yer burasıdır ve bunu yapmanın birkaç yolu vardır.<br></br><br></br>Ethereum kadar hızlı, daha ucuz ve güvenli. Peki neden herkes bunu yapmıyor? Optimistik Rollup'lar, genellikle 7 gün boyunca fon tutan daha uzun tamamlama / para çekme sürelerinden muzdariptir. Validium ve Plasma zincir dışıdır ve bu nedenle Ethereum'un gerçek güvenliğinden yoksundur.  zkRollup'lar tüm dünyaların en iyisidir çünkü zincirde hızlı ve güvenlidirler, ancak bunları geliştirmek için gereken teknoloji oldukça zordur.
  </a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKProof() {
  const message = this.createChatbotMessage(<a>Sıfır bilgi kanıtı (zkProof), doğru olduğu gerçeği dışında herhangi bir ek bilgi iletmeden birisine bir şeyi kanıtlayabilmektir. Sadece ifşa ederek belirli bilgiler hakkında bilgi sahibi olduğunuzu kanıtlamanıza gerek yoktur; buradaki zorluk, bilginin kendisini ifşa etmeden bilgiye sahip olduğunu kanıtlamaktır.<hr></hr><strong>Uygulama</strong><br></br><br></br><strong>Finans:</strong> Müşterilerin gizli numaralarının bilinen bir aralıkta olduğunu kanıtlamalarını sağlamak için zkProofs'u kullanabilirsiniz. Örneğin, bir kredi başvuru sahibi, kesin maaşlarını açıklamadan gelirlerinin nitelikli bir aralıkta olduğunu kanıtlayabilir.<br></br><br></br><strong>Çevrimiçi Oylama:</strong> Bir zkProof, anonim olarak oy kullanmanıza ve oyunuzun son sayıma dahil edildiğini doğrulamanıza olanak tanır.<br></br><br></br><strong>Kimlik Doğrulama:</strong> Parola gibi gizli bilgileri paylaşmadan sitelerde oturum açabilirsiniz.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?time_continue=18&v=fOGdb1CTu5c&feature=emb_logo'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSmartContract() {
  const message = this.createChatbotMessage(<a>Bir "akıllı sözleşme" basitçe Ethereum blok zincirinde çalışan bir programdır. Blok zincirinde belirli bir adreste bulunan bir kod ve veri koleksiyonudur; bir tür Ethereum hesabıdır. Bir dengeyi koruyabilir ve ağ üzerinden işlem gönderebilirler, ancak bir kullanıcı tarafından kontrol edilmezler. Tam olarak söylenenleri yapmak, kuralları tanımlamak ve kodlarına göre otomatik olarak uygulamak üzere programlanırlar.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNFT() {
  const message = this.createChatbotMessage(<a>Eylül 2017'de Dieter Shirley tarafından tanıtılan ve Haziran 2018'de tamamlanan ERC-721, değiştirilemeyen belirteçler için tasarlanmıştır. Bunlar benzersizdir, hiçbir belirteç tam olarak aynı değildir ve benzersiz olması gereken tokenId adlı bir uint256 değişkeni atanır. Bu, dünyada benzersiz olan ve kanıtlanabilir bir özelliğe ihtiyaç duyan hemen hemen her şeyi temsil edebilir:<br></br><br></br>Dijital sanat (GIF, koleksiyonlar, müzik, videolar)<br></br>Bir alan adı<br></br>Bir arabanın yazıları<br></br>Gerçek dünyadaki bir etkinliğe ait biletler<br></br>Tokenize faturalar<br></br>Yasal belgeler<br></br>Tıbbi kayıtlar<br></br>İmzalar<br></br><br></br>NFT'lerin özel özellikleri vardır:<br></br><br></br>Basılan her token, doğrudan bir Ethereum adresine bağlı benzersiz bir tanımlayıcıya sahiptir.<br></br>Diğer 1: 1 token’larla doğrudan değiştirilemezler. Örneğin, 1 ETH başka bir ETH ile tamamen aynıdır. NFT'lerde durum böyle değildir.<br></br>Her token’ın bir sahibi vardır ve bu bilgiler kolayca doğrulanabilir.
  Genellikle Ethereum üzerinde hayata geçerler ve Ethereum tabanlı bir NFT pazarında satın alınıp satılabilirler.<br></br><br></br>Bu, bir NFT'ye sahipseniz şu anlama gelir:<br></br><br></br>Ona sahip olduğunuzu kanıtlayabilirsiniz.<br></br>Özel anahtarınız sahiplik kanıtıdır.<br></br>Kimse onu hiçbir şekilde manipüle edemez.<br></br>Satabilir veya sonsuza kadar saklayabilirsiniz.<br></br>Token, kopyasının orijinal olduğunu kanıtlar.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMining() {
  const message = this.createChatbotMessage(<a>Kripto para madenciliği, blockchain işlemlerini doğrulama ve onaylama sürecini ifade eder. Madenciler yoğun kriptografik denklemleri çözer ve bu verilerle blok zincirine yeni bloklar gönderir. Dürüst ve başarılı madenciler madencilik ücreti alırlar, bu ücret Ethereum'da gaz ücreti olarak bilinir.<br></br><br></br>Yeni blockchain işlemleri yapıldıkça, bir hafıza havuzuna (mempool) gönderilir. Madenci, bekleyen işlemlerin geçerliliğini kontrol eder ve bunları bloklar halinde düzenler. Bu, size işlemleri sözlü olarak gönderen insanlara benzer ve hepsini sırayla bir kâğıda yazarsınız: bu metafordaki kâğıt sayfası bir bloktur. Bu bloğun onaylanması gerekiyor; bu, karmaşık matematik problemlerinin çözülmesini gerektirir ve birçok hesaplama kaynağı gerektirir. Başarılı olduktan sonra, blok zincire gönderilir ve madenci ödüller alır.<br></br><br></br>Madenciliğin nasıl çalıştığı hakkında daha fazla bilgi için <a className="cla" href="https://desk.zoho.com/portal/loopring/en/kb/articles/what-is-crypto-mining" target="_blank" rel="noreferrer">buradan</a> göz atabilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNodes() {
  const message = this.createChatbotMessage(<a>Node’lar, istemci yazılımının bir parçasıdır. 3 farklı node türü vardır ve her biri verileri farklı şekilde tüketir. Ek olarak, daha hızlı senkronizasyon süresine izin veren farklı senkronizasyon stratejileri vardır; senkronizasyon, Ethereum'un durumu hakkında doğru bilgileri ne kadar hızlı alabileceğinizdir.<br></br><br></br><strong>Full Node</strong><br></br><br></br>Tüm blok zinciri verilerini depolar.<br></br>Blok doğrulamaya katılırken tüm blokları ve tüm durumları doğrular.<br></br>Tüm durumlar full node’tan türetilebilir.<br></br>Ağa hizmet eder ve talep üzerine veri sağlar.<br></br><br></br><strong>Light Node</strong><br></br><br></br>Full node’un aksine, light node’lar yalnızca blok başlıklarını indirir. Bunlar yalnızca blokların içeriği hakkındaki bilgilerin bir özetini içerir. Gerekli ek bilgiler varsa, light node tüm bunu full node’tan isteyebilir. Bu light node’tan aldığı verileri blok üstbilgilerindeki bir durum köküne karşı doğrulamasına olanak tanır.<br></br>Light node’lar kullanışlıdır, çünkü onları full node olarak çalıştırmak için güçlü donanıma veya yüksek bant genişliğine ihtiyacınız yoktur.<br></br><br></br><strong>Archive Node</strong><br></br><br></br>Full node’ta depolanan tüm bilgiler, bir archive node’a geçmiş durumlarda arşivlenir. #222,222 numaralı blok gibi rastgele bir bloktan bilgi sorgulamak isteseydim, bu node’u kullanırdım. Veriler açıkça çok büyük. Bir dosya node’undaki terabaytlarca veri, ortalama bir kullanıcı için daha az çekici olabilir, ancak block explorer’ları, zincir analizi ve cüzdan sağlayıcıları gibi hizmetler için yararlı olabilir.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTokenBurn() {
  const message = this.createChatbotMessage(<a>Token’ları yakmak, bir coin veya tokenı kalıcı olarak yok etmek anlamına gelir, ancak bunu neden yaparsınız? Blockchain teknolojisi kullanıcıları güçlendirir, kendi kendininizin emanetçisi olabilirsiniz: varlıklarınızın tam mülkiyeti size ait. Bir bankaya veya finansal kuruma ihtiyacınız yoktur, işlemler üçüncü taraflarca sınırlandırılmaz ve çoğu durumda, arz deflasyonist olma gücüyle sınırlıdır, çünkü token’ları yok edebilir.<br></br><br></br>Bir token’ın kaydedilmesi, özellikle, kayıt adresi adı verilen ve alınamayan donmuş bir adrese token gönderdiğiniz anlamına gelir. Bir kayıt adresinin özel bir anahtarı olmayacaktır, gönderilecek genel bir adres vardır, ancak cüzdanın kilidini açmak için anahtar yoktur. Fiziksel paranızı, kimsenin kilidini açmak için erişim koduna sahip olmadığı çözülemez bir kasaya yerleştirmeye eşdeğerdir.<br></br><br></br>Bir token’ın değeri arz ve talebe dayanır. Genellikle, talep ne kadar yüksek olursa, değer o kadar yüksek olur. Ayrıca, teklif daha düşükse, değer de daha yüksektir. Dolayısıyla, sabit bir token arzı olduğunda, bu arzın bir kısmının yok edilmesi üzerinde bir etki vardır. Bu, token’ın değerini artırmak veya değerin kararlılığını üretmek gibi çeşitli nedenlerle kullanılabilir.<br></br><br></br><strong>Proje Değerini Artırın</strong><br></br>
Kurumsal geri alımlar günümüzün büyüyen finans dünyasında yaygındır; şirketler, kalan teklifin değerini artırmaya yardımcı olmak için kendi hisselerinin ve piyasa varlıklarının bir kısmını geri satın alırlar. Benzer bir olay, Ethereum'un geri satın aldığı ve ardından dolaşımda olan 1,3 milyon ETH'yi yakmaya devam ettiği 2021 yılında meydana geldi. Amaç, Ethereum tokenlarının arzı azaltarak etkili bir değer deposu olabilmesini ve zaman içinde değer artışı sağlayabilmesini sağlamak için ETH'yi yeni bir protokolün parçası olarak deflasyonist hale getirmektir.<br></br><br></br><strong>Stabilize Değeri</strong><br></br> Stablecoin'ler kripto para birimleri ve bir bütün olarak DeFi için gereklidir. Ekosistem içinde hem yerleşim hem de tutma için bir araç sağlarlar. Buradaki uzlaşma, merkeziyetsizliği kaybettiğiniz merkezi bir rezerv kullanmaktır. Algoritmik stablecoin'ler arzı kontrol ederek bu sorunun üstesinden gelmeye çalışır.
</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDAO() {
  const message = this.createChatbotMessage(<a>Bu kısaltma, Türkçe olarak Merkeziyetsiz Otonom Organizasyon anlamına gelir. Bir kuruluşun hangi eylemleri gerçekleştireceğini belirleyen önceden tanımlanmış kurallar sistemi olarak var olur. Bu, geleneksel şirketlerden farklıdır ve bunun yerine açık kaynak koduna dayanır ve tamamen topluluk tarafından işletilir. Bu, sorumlu tek bir varlığın, yönetim kurulunun olmadığı ve dolayısıyla gücün merkezileşmesinin olmadığı anlamına gelir.<br></br><br></br>Kurallar, ortak çalışanlarının ve topluluk üyelerinin kolektif çalışmalarını yöneten akıllı sözleşmeler olarak inşa edilir. Bu nedenle, merkeziyetsiz bir organizasyon kavramı özellikle yeni olmasa da, çalışma mekanizmalarını ve işlevlerini otomatikleştirebilmek, bir DAO'yu bu kadar ilginç bir kavram haline getirir.<br></br><br></br>Birçok topluluk, ICO (ilk coin teklifi), bir protokolde toplanan ücretlerin verilmesi ve dağıtılması veya karar verme ve oylama sistemleri gibi otomatik bağış toplama kampanyaları için DAO'ları kullanır. Ek olarak, tüm bunlar emin ve güvenli bir süreç sağlamak için insan etkileşimi olmadan yapılır.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKSnark() {
  const message = this.createChatbotMessage(<a>Etkileşimli olmayan zero-knowledge özlü bilgi argümanı - <strong>zkSNARK</strong><br></br><br></br>Parçalarına ayıralım:<br></br><br></br>Zero-Knowledge: Bunu diğer makalelerde inceledik, ancak kısa versiyonu; başka hiç kimsenin nasıl kanıtladığını bilmeden bir şeyi kanıtlıyor, sadece kanıtlanabilir olduğunu kanıtlıyor diyebiliriz.<br></br>Non-interactive - Kısa ve net; Test, temsil ettiği verilerden önemli ölçüde daha küçüktür.<br></br>Succinct - Bilgiler test cihazından doğrulayıcıya gider, gidiş-dönüş yoktur.<br></br>Argument of Knowledge - Kanıt güçlüdür, ifadesini destekleyecek bilgiye sahip olmadan sistemi kandıracak kötü niyetli bir test cihazı yoktur.<br></br><br></br>SNARK, test edenler ve doğrulayıcı arasında bir güven ayarı gerektirir. Bu, bir oyunun kurallarına benzeyen bir dizi genel parametredir. Bu parametreler bir güven yapılandırma töreni sırasında oluşturulur. Bu, bir grup gönüllü katılımcı tarafından belirli bir sürede yapılan ortak bir hesaplamadır. Bir doğrulayıcı dürüst davrandığı sürece, parametreler güvenli bir şekilde oluşturulur, bu nedenle ne kadar çok taraf katılırsa, bu seremoni o kadar güvenilir olarak kabul edilebilir. Bu seremoni, ürünün her yeni sürümü için yapılmalıdır.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKStark() {
  const message = this.createChatbotMessage(<a>Ölçeklenebilir zero-knowledge şeffaf bilgi argümanı - <strong>zkSTARK</strong><br></br><br></br>Açıklaması:<br></br><br></br>Scalable - Testin boyutu nispeten küçüktür ve çok sayıda test için bile doğrulama daha az zaman alır, bu nedenle ölçeklenebilir.<br></br>Transparent - Güvenilir yapılandırma için herhangi bir gereksinim yoktur.<br></br>Argument of Knowledge - Kanıt güçlüdür, ifadesini destekleyecek bilgiye sahip olmadan sistemi kandıracak kötü niyetli bir test cihazı yoktur.<br></br><br></br>ZkSTARK, Technion-İsrail Teknoloji Enstitüsü'nde profesör olan Eli-Ben Sasson tarafından yaratıldı. Buradaki en büyük fark, bir zkSTARK'ın güvenilir bir ilk kurulum gerektirmemesidir: seremoni SNARK bölümünde tartışılmaktadır. Bir STARK, bir SNARK'tan hesaplama açısından daha ucuzdur ve teoride kuantum bilgisayarlardır. Peki dezavantajı nedir? Testlerin boyutu bir SNARK'tan çok daha büyüktür ve bu da zincir içi işlemlerin maliyetini artırabilir.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMetaverse() {
  const message = this.createChatbotMessage(<a>Kelimenin ilk kullanımı 1992 yılında Snow Crash adlı bir bilim kurgu romanında; Meta ve evren kelimelerinin birleşimine dayanmaktadır. Metaverse, artan talepleri nedeniyle genellikle gelişmiş sanal gerçeklik teknolojisi ile bağlantılıdır. Metaverse bir oyun konsepti olmasa da bu alanda daha da büyüdü. Second Life adlı bir oyun genellikle ilk metaverse olarak tanımlanır ve roman Ready Player One (daha sonra bir filmi çıktı) olasılıkları artırmaya devam etmiştir.<br></br><br></br>İdeal olarak, gerçek bir Metaverse sadece oyunları veya sosyal medyayı desteklemekle kalmayacak, aynı zamanda ekonomileri, dijital kimliği, merkeziyetsiz yönetimi ve diğer uygulamaları birleştirecektir. Roblox'un sadece özel bir oyun olmadığını, konserler ve toplantılar gibi sanal etkinlikler için nasıl çalıştığını düşünün. Oyun sadece oynamak için değil, sanal bir alanda takılmak içindir.<br></br><br></br>Kripto, değişmezlik ve mülkiyet kanıtı sağlayarak meta evrene uyar. NFT'lerin bu durumda nasıl çalışacağını bir düşünün; dijital giysiler, aksesuarlar vb., merkeziyetsiz bir ortamda, güvenli ve hızlı bir şekilde doğrulanabilir. Oyun içi paralar gelişebilir ve kullanıcılar para kazanabilir ve orada harcayabilir. Cüzdanlarla, metaverse çok erişilebilir ve blockchain aktif olduğunda, gerçek hayatta seçimler için oy kullandığımız gibi güvenilir bir yönetime sahip olacağız.<br></br><br></br>Tek, birleşik bir metaverse’ün biraz uzakta olması muhtemeldir, ancak bunun için doğru yönde birçok gelişme var ve blockchain bu çerçevede bizlere yol gösterecektir.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleArbitrum() {
  const message = this.createChatbotMessage(<a>Arbitrum, Ethereum için maliyetleri ve gecikmeyi önemli ölçüde azaltan bir ölçeklendirme çözümüdür.  Arbitrum, Ethereum ana ağında Arbitrum One'ı başlattı ve ekip yaklaşmakta olan halka açık sürümü için hazırlanıyor.
  Arbitrum ile entegrasyon sayesinde, The Graph'in barındırma sorgusu ve indeksleme hizmetleri artık çevrimiçi olarak kullanılabilir. Arbitrum One geliştiricileri artık uygulamaların GraphQL kullanarak sorgulayabileceği açık API'ler (subgraph’ler) oluşturabilecek ve yayımlayabilecek.<br></br><br></br>Graph, Ethereum, IPFS, Celo, Avalanche, Fantom ve Moonbeam için indeksleme verilerini hali hazırda destekliyor. Buna ek olarak, binlerce geliştirici DODO, MCDEX, Uniswap, Synthetic, Gnosis, Decentraland gibi uygulamalar için 10.000'den fazla subgraph oluşturmuştur. Arbitrum'u bu listeye ekleyerek, The Graph'in genişleme çabaları, Web3.Graph ekosistemini birleştirmek için bir adım daha attı ve Ethereum, IPFS, Celo, Avalanche, Fantom ve Moonbeam için indeksleme verilerini zaten destekliyor. Buna ek olarak, binlerce geliştirici DODO, MCDEX, Uniswap, Synthetic, Gnosis, Decentraland gibi uygulamalar için 10.000'den fazla subgraph oluşturmuştur. Arbitrum'u bu listeye ekleyerek, The Graph'in genişleme çabaları Web3 ekosistemini birleştirmeye yönelik bir adım daha attı.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStatistics() {
  const message = this.createChatbotMessage(<a>Canlı verileri / istatistikleri mi arıyorsunuz? O zaman lütfen daha spesifik biçimde ilerleyelim. Bana sorabileceğiniz şeylerin kısa bir listesi:<br></br><br></br>Aktif Delegatör Sayısı<br></br>Aktif Delegasyon Sayısı<br></br>Holder Sayısı<br></br>Subgraph Sayısı<br></br>Küratör Sayısı<br></br>Etkin Dizin Oluşturucu Sayısı<br></br>Toplam Sorgu Ücreti Sayısı<br></br>Toplam Stake Edilmiş GRT Sayısı<br></br>Delegatörler Tarafından Yetkilendirilmiş Toplam GRT Sayısı<br></br>Küratörler Tarafından Sinyal Verilen Toplam GRT Sayısı<br></br>İndeksleyiciler Tarafından Yetkilendirilmiş Toplam GRT Sayısı<br></br>Yakılan Toplam GRT Sayısı</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTMobile() {
  const message = this.createChatbotMessage(<a><strong>Deutsche Telekom ve T-Mobile US, 5G Aracılığıyla Web3 Geliştirme Arayışında Yeni Challenge başlattı.</strong><br></br><br></br>Küresel rekabet, 5G ağlarını kullanarak yenilikçi çözümleri ödüllendiren girişimler, geliştiriciler ve araştırmacılar için geri döndü, bu sefer dünyanın interneti kullanma şeklini değiştirmek için Web3 teknolojileri arıyor.<br></br><br></br>BONN, Almanya ve BELLEVUE, Wash. - 2 Kasım 2022 - Deutsche Telekom AG ve T-Mobile US, Inc. (NASDAQ: TMUS), yenilikçilerin ve ezber bozanların Web3 adına en iyi Halka Açık Blockchain Protokolü çözümleri için bir ödül çerçevesinde rekabet etmeleri için küresel sahne olan üçüncü yıllık T Challenge'ı başlatmak için bir araya geldi. Katılımcılar tarafından oluşturulan çözümler, Web3'ü hayata geçirmek için 5G'nin gücünden yararlanacak ve 5G, kullanıcıların bu yeniliklere nasıl bağlı kalacağı konusunda önemli bir rol oynayacaktır.<br></br><br></br>Başvurular şu andan itibaren 20 Ocak 2023 tarihine kadar resmi olarak açıktır. Altı kazanan, fikirlerini Deutsche Telekom ve T-Mobile ABD'ye sunmak için 600.000 € (kabaca ABD doları cinsinden aynı) sahibi olacak ve Bonn/Almanya'ya tüm masrafları ödenmiş bir gezi yapacak.<br></br><br></br>Graph tarafından söz edilen makalenin tamamını okumak için <a className="cla" href="https://www.t-mobile.com/news/network/2023-t-challenge" target="_blank" rel="noreferrer">buradan</a> göz atabilirsiniz.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSolana() {
  this.handleSubstreams = this.handleSubstreams.bind(this);
  const message = this.createChatbotMessage(<a><strong>The Graph artık substream ile Solana'yı destekliyor.</strong><br></br><br></br>Graph Vakfı,  <a className="cla" onClick={this.handleSubstreams}><strong>Substreams</strong></a> ile Solana'ya desteğini duyurmaktan mutluluk duyar. Solana geliştirici topluluğu artık ultra hızlı dapp'ler oluşturmak için The Graph'ı kullanmaya başlayabilir. Geliştiriciler, yeni substreams teknolojisini kullanarak, uygulamalarına güç sağlamak için Solana'nın beta ana ağından zincir üzerindeki verileri verimli bir şekilde çıkarabilir ve yorumlayabilir. Substream’ler ile destek sağlamak, subgraph’leri Solana'ya getirmenin ilk adımıdır.<br></br><br></br>Tamamen açık kaynak olan substream’ler, hızları ve verimlilikleri sayesinde Solana geliştiricilerinin zincir üstü verilerle tamamen yeni yöntemlerle derleme yapmasına olanak tanır. Geliştiriciler, piyasadan protokole özel veri akışları veya analitik veri kümeleri oluşturmak için Rust'ta kodlanmış substream modüllerini kullanabilir. Gerçek zamanlı bildirimler oluşturmak ve kapsamlı zaman serisi bilgilerini görüntülemek için de kullanılabilirler. Stream geliştiricileri sınırların dışına çıkarak, zaman kazanmak için başkaları tarafından oluşturulan stream’lerden yararlanabilir, çalışmalarını açık bir şekilde kullanılabilir ve düzenlenebilir hale getirerek tüm web3 ekosistemini güçlendirebilir. Sonuç olarak, ikincil akışlar, Solana geliştirici topluluğunda yeni ve yenilikçi kullanım örneklerine yol açar.<br></br><br></br> The Graph ekosisteminin temel geliştiricilerinden biri olan StreamingFast tarafından geliştirilen Substreams, teknolojiye özel havuzlar yoluyla herhangi bir veri sistemini beslemek, verileri zincir halinde okumak için Solana programından Rust kodunu yeniden kullanmak, lazer odaklı bir hata ayıklama dahil olmak üzere birçok avantaja kapı açar. Veri akışlarının deneyim, topluluk ve şekillendirilebilir iyileştirmesi ve güvenilir yeniden düzenlenebilmesi için bilinçli akışlar.<br></br><br></br>Sektörü değiştiren gerçek bir teknoloji olan alt iletimler, senkronizasyon hızlarını önemli ölçüde artırmak için paralel veri işleme ile subgraph performansının kilidini açmaya hazırlanıyor. Yatay olarak ölçeklenebilir bir paralel motor aracılığıyla, substream’ler geçmiş endeksleme performansını 100 kattan fazla artırabilir.<br></br><br></br>Blogun tamamını <a className="cla" href="https://thegraph.com/blog/indexing-solana-substreams/" target="_blank" rel="noreferrer">buradan</a> okuyun.</a>
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
    const message = this.createChatbotMessage(<a><strong>The Graph Protocol 17 Aralık 2022'de 2 yaşına girdi.</strong><br></br><br></br>Dünyanın dört bir yanından birçok insan, The Graph Network'ün mainnet lansmanını ve merkeziyetsizliğe olan bağlılığını, aşağıdaki altı topluluk liderliğinde gerçekleşen doğum günü etkinliğinden birine katılarak kutlamaya yardımcı oldu. <strong>FOMO</strong> gerçekti! Twitter Spaces’i <a className="cla" href="https://twitter.com/i/spaces/1vOGwMQpzPgxB" target="_blank" rel="noreferrer">buradan</a> dinleyebilirsiniz. Kaçırdıysanız endişelenmeyin, aşağıdaki düğmelere tıklayarak tekrar dahil olabilirsiniz.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button><br></br><br></br>Daha fazla içerik paylaşıldıkça bu liste güncellenecektir.</a>
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
      const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/colsongrteacher?s=21&t=G1z0E5ndRT5F549tsuRY2A' target="_blank" rel="noreferrer"><strong>Colson</strong></a>, Amsterdam'daki Amstel Boathouse'da The Graph Protocol, 2. Doğum Günü Kutlaması'na ev sahipliği yaptı.<br></br><br></br>Etkinlikten içeriklerin yayınlanmasını bekliyorum...
Aşağıdan ise diğer etkinliklere de göz atabilirsiniz.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
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
        const message = this.createChatbotMessage(<a>The Graph Protocol, Buenos Aires'teki Area3 El Salvador'da 2. Doğum Gününü kutladı.<br></br><br></br>Etkinliğe Twitter paylaşımları aracılığıyla, <a className="cla" href='https://twitter.com/espanolgraph/status/1604257219628916736?s=46&t=MuGXfy1qv8hl2x-HpLcfAg' target="_blank" rel="noreferrer">burada</a> ve burada göz atabilirsiniz.<br></br><br></br>Aşağıdan ise diğer etkinliklere de göz atabilirsiniz.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/Mardeni01' target="_blank" rel="noreferrer">Ahmad Mardeni</a>, Dubai’deki OPM Room'da The Graph Protocol, 2. Doğum Günü Kutlaması'na ev sahipliği yaptı.
          Etkinliğe Twitter paylaşımları aracılığıyla, <a className="cla" href='https://twitter.com/mardeni01/status/1604127593007120384?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">burada</a> ve <a className="cla" href='https://twitter.com/mardeni01/status/1604205523619946498?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">burada</a> göz atabilirsiniz.<br></br><br></br>Aşağıdan ise diğer etkinliklere de göz atabilirsiniz.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/thegraphnations?s=21&t=2oybVC4qbnXUtBbgmnvSqw' target="_blank" rel="noreferrer">TheGraphNation</a>, Lagos'taki The Lekki Coliseum'da (TLC) The Graph Protocol, 2. Doğum Günü Kutlamasına ev sahipliği yaptı.<br></br><br></br>Etkinliğe Twitter paylaşımları aracılığıyla, <a className="cla" href='https://twitter.com/thegraphnations/status/1603831459629891585?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">burada</a> göz atabilirsiniz.<br></br><br></br> Aşağıdan ise diğer etkinliklere de göz atabilirsiniz.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
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
            const message = this.createChatbotMessage(<a>The Graph Protocol, San Francisco'daki Edge & Node House of Web3’te 2. Doğum Gününü kutladı.<br></br><br></br>Etkinliğe Twitter paylaşımları aracılığıyla, <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603952216540213248?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">burada</a> ve <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603990278322507780?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">burada</a> göz atabilirsiniz.<br></br><br></br>Aşağıdan ise diğer etkinliklere de göz atabilirsiniz.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
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
              const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/impranavm_?s=21&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">Pranav Maheshwari</a>, Singapur'da 2. Doğum Günü kutlamasında The Graph'a ev sahipliği yaptı.<br></br><br></br> Etkinliğe Twitter paylaşımları aracılığıyla, <a className="cla" href='https://twitter.com/impranavm_/status/1604024407789182976?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">burada</a> ve <a className="cla" href='https://twitter.com/impranavm_/status/1603991615009304576?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">burada</a> göz atabilirsiniz.<br></br><br></br>Aşağıdan ise diğer etkinliklere de göz atabilirsiniz.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button></a>
                ,
              );
              this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
              }));
            }

  handleNews() {
    const message = this.createChatbotMessage(<a>Graph Protocol ile ilgili en son haberleri, yeni ortaklık duyurularını takip etmek ve toplulukta neler olup bittiğini okumak istiyorsanız, aşağıdaki bağlantılar size bu konuda yardımcı olabilir.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">The Graph Blog Sayfası</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a><hr></hr><a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">Twitter'da</a> The Graph Protocol'ü de takip ettiğinizden lütfen emin olun.</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

handleHello() {
  const message = this.createChatbotMessage(<a>Merhaba, acaba sana nasıl yardımcı olabilirim?</a>
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
  const message = this.createChatbotMessage(<a>Ayrıca aşağıdaki düğmeleri kullanabilir ve bir cevap bulmak için aşağı kaydırabilirsiniz!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegatör</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Küratör</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>İndeksleyici</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Temel Geliştiriciler</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgraph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Canlı İstatistikler</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Topluluk</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Haberler</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Web'i Öğrenin3</strong></button></a>
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
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegatör</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Küratör</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>İndeksleyici</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Temel Geliştiriciler</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgraph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Canlı İstatistikler</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Topluluk</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Haberler</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Web'i Öğrenin3</strong></button></a>
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
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleTheGraphCouncil();
    this.handleButtonTheGraph();
  }}><strong>Konsey</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCoreDevs();
  }}><strong>Temel Geliştiriciler</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFoundingMembers();
    this.handleButtonTheGraph();
  }}><strong>Kurucu Üyeler
</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHostedService();
    this.handleButtonTheGraph();
  }}><strong>Barındırılan Hizmet</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonTheGraph();
  }}><strong>Sunsetting Barındırılan Hizmet</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonTheGraph();
  }}><strong>Merkezi Olmayan Veriler</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoadMap();
    this.handleButtonTheGraph();
  }}><strong>Yol Haritası</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoles();
    this.handleButtonTheGraph();
  }}><strong>Ekosistem Rolleri</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleJob();
    this.handleButtonTheGraph();
  }}><strong>İşe Alıyoruz</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBirthday();
    this.handleButtonTheGraph();
  }}><strong>Doğum günü</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphDay();
    this.handleButtonTheGraph();
  }}><strong>Graph Günü</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleParticipantUpdate();
    this.handleButtonTheGraph();
  }}><strong>Katılımcı Güncellemesi</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGeo();
    this.handleButtonTheGraph();
  }}><strong>Coğrafi Bölge</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonTheGraph();
  }}><strong>GitHub Hesabı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphFunding();
    this.handleButtonTheGraph();
  }}><strong>Finansman</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleGraphQLApi();
    this.handleButtonTheGraph();
  }}><strong>GraphQL API'si</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleGRTTokenAddress();
    this.handleButtonTheGraph();
  }}><strong>GRT Token Adresi</strong></button>
  
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategoriler Menüsü</strong></button></a>
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
  
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategoriler Menüsü</strong></button></a>
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
  }}><strong>Stake Kılavuzu</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDelegateWithWallet();
    this.handleButtonDelegator();
  }}><strong>Cüzdanla Stake Etme</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCoinbase();
    this.handleButtonDelegator();
  }}><strong>Coinbase Cüzdanından Stake</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFeesToDelegate();
    this.handleButtonDelegator();
  }}><strong>Stake Ücretleri</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleUnDelegating();
    this.handleButtonDelegator();
  }}><strong>Geri al</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTenderize();
    this.handleButtonDelegator();
  }}><strong>Tenderize</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleChoosingIndexers();
    this.handleButtonDelegator();
  }}><strong>İndeksleyici Seçme</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonDelegator();
  }}><strong>İndeksleyicileri Karşılaştırın</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonDelegator();
  }}><strong>Aktif Delege Sayısı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonDelegator();
  }}><strong>Etkin Temsilci Seçme Sayısı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonDelegator();
  }}><strong>Delegeler Tarafından Stake Edilen Toplam GRT</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategoriler Menüsü</strong></button></a>
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
  }}><strong>Küratör Rolü</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorTools();
    this.handleButtonCurator();
  }}><strong>Küratör Araçları</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonCurator();
  }}><strong>Küratör Sayısı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonCurator();
  }}><strong>Küratörler Tarafından Sinyalize Edilen Toplam GRT</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategoriler Menüsü</strong></button></a>
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
  this.handle = this.handleAllocations.bind(this);

  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleCurator();
    this.handleButtonIndexer();
  }}><strong>İndeksleyicileri Seçme</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonIndexer();
  }}><strong>İndeksleyicileri Karşılaştırın</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBecomeIndexer();
    this.handleButtonIndexer();
  }}><strong>İndeksleyici Olun</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerHardwareRequirements();
    this.handleButtonIndexer();
  }}><strong>İndeksleyici Donanım Gereksinimleri</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerMap();
    this.handleButtonIndexer();
  }}><strong>İndeksleyici Haritası</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerOfficeHours();
    this.handleButtonIndexer();
  }}><strong>Indexer Office Hours</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexingRewardsAndQueryFees();
    this.handleButtonIndexer();
  }}><strong>İndeksleyici Ödülleri</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleQueryFeesAndIndexingRewardCut();
    this.handleButtonIndexer();
  }}><strong>Sorgu Ücretleri ve İndeksleme Ödülü Kesintisi</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAllocations();
    this.handleButtonIndexer();
  }}><strong>Tahsisatları</strong></button><br class="no-show-monitor"></br>
 <button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonIndexer();
  }}><strong>Aktif İndeksleyici Sayısı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonIndexer();
  }}><strong>İndeksleyici Sayısına Göre Toplam Stake Edilen GRT Sayısı</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategoriler Menüsü</strong></button></a>
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
  }}><strong>Subgraphs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonSubgraph();
  }}><strong>Substreams</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonSubgraph();
  }}><strong>Sunsetting Barındırılan Hizmet</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonSubgraph();
  }}><strong>Merkeziyetsiz Veriler</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
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
    this.handleQueryPython();
    this.handleButtonSubgraph();
  }}><strong>Python kullanarak sorgulama</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonSubgraph();
  }}><strong>Messari</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonSubgraph();
  }}><strong>Subgraph Sayısı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonSubgraph();
  }}><strong>GitHub Hesabı</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategoriler Menüsü</strong></button></a>
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
  }}><strong>Katılımcı Güncellemesi</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHoldersCount();
    this.handleButtonStatistics();
  }}><strong>Holder Sayısı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonStatistics();
  }}><strong>Aktif Delegatör Sayısı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonStatistics();
  }}><strong>Aktif Indeksleyici Sayısı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonStatistics();
  }}><strong>Küratör Sayısı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonStatistics();
  }}><strong>Etkin Stake Edilme Sayısı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalQueryFeesCount();
    this.handleButtonStatistics();
  }}><strong>Sorgu Ücretleri</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonStatistics();
  }}><strong>Subgraph Sayısı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonStatistics();
  }}><strong>Delegatörler Tarafından Stake Edilen Toplam GRT</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonStatistics();
  }}><strong>İndeksleyiciler Tarafından Stake Edilen Toplam GRT</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonStatistics();
  }}><strong>Küratörler Tarafından Sinyalize Edilen Toplam GRT</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalStakedGRTCount();
    this.handleButtonStatistics();
  }}><strong>Toplam Stake Edilen GRT Sayısı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTBurnedCount();
    this.handleButtonStatistics();
  }}><strong>Yakılmış Toplam GRT Sayısı</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategoriler Menüsü</strong></button></a>
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
  }}><strong>GRTiQ Podcast</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategoriler Menüsü</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonNews() {
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  const message = this.createChatbotMessage(<a>The Graph ile ilgili en son haberleri, yeni ortaklık duyurularını takip etmek ve toplulukta neler olup bittiğini okumak istiyorsanız, aşağıdaki bağlantılar bu konuda yardımcı olabilir.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">The Graph Blog</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a><br></br><br></br>The Graph'ı <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">Twitter'da</a> da takip ettiğinizden emin olun.<hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategoriler Menüsü</strong></button></a>
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
  }}><strong>Web nedir?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCourses();
    this.handleButtonLearnWeb3();
  }}><strong>Kurslar</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLearnWeb3();
    this.handleButtonLearnWeb3();
  }}><strong>Web'i Öğrenin3</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWhatIsABlockchain();
    this.handleButtonLearnWeb3();
  }}><strong>Blokzincir</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSafe();
    this.handleButtonLearnWeb3();
  }}><strong>Güvenli mi?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWeb3DApp();
    this.handleButtonLearnWeb3();
  }}><strong>Web3 Merkeziyetsiz Uygulamaları</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCryptocurrencies();
    this.handleButtonLearnWeb3();
  }}><strong>Kripto para birimleri</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>Ethereum</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGas();
    this.handleButtonLearnWeb3();
  }}><strong>Gas</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>Coin / Token Farkı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMining();
    this.handleButtonLearnWeb3();
  }}><strong>Madencilik</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleNFT();
    this.handleButtonLearnWeb3();
  }}><strong>NFT</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMetaverse();
    this.handleButtonLearnWeb3();
  }}><strong>Metaverse</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSmartContract();
    this.handleButtonLearnWeb3();
  }}><strong>Akıllı Sözleşme</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleStablecoin();
    this.handleButtonLearnWeb3();
  }}><strong>Stablecoin</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLayerTwo();
    this.handleButtonLearnWeb3();
  }}><strong>İkinci Katman</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenEconomics();
    this.handleButtonLearnWeb3();
  }}><strong>Token Ekonomisi</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenBurn();
    this.handleButtonLearnWeb3();
  }}><strong>Token Yakımı</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCoreDevs();
    this.handleButtonLearnWeb3();
  }}><strong>Node</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
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
  }}><strong>Web3 Ekosistemindeki Kadınlar</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategoriler Menüsü</strong></button></a>
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
  const message = this.createChatbotMessage(<a>Üzgünüm, cevabı bulamadım. Tekrar deneyebilir veya sorunuzu yeniden ifade edebilir misiniz? Soru bankasını her zaman kontrol edebilirsiniz. Hala size yardımcı olamıyorsam, lütfen aşağıdaki geri bildirim formunu doldurmak için iki dakikanızı ayırın. Bu gösterdiğin yardım, benim bilgimi geliştirecek ve gelecekte GRT topluluğunun aynı sorulara sahip ve cevaplarını arayan diğer üyelerine yardım etmeme izin verecektir. Teşekkürler!
  
  {/* help start */}

  <br></br><br></br>Ayrıca aşağıdaki düğmeleri kullanabilir ve bir cevap bulmak için aşağı kaydırabilirsiniz!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegatör</strong></button><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Küratör</strong></button><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>İndeksleyici</strong></button><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Temel Geliştiriciler</strong></button><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgraph</strong></button><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Canlı İstatistikler</strong></button><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Topluluk</strong></button><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Haberler</strong></button><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Web'i Öğrenin3</strong></button>

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

export default TURActionProvider;