import React from 'react';
import '../../App.css';
import { ChatBotActiveDelegatorCountBar ,  ChatBotHoldersCountBar, ChatBotActiveDelegationCountBar, ChatBotSubgraphsCountBar, ChatBotCuratorsCountBar, ChatBotActiveIndexerCountBar, ChatBotTotalGRTDelegatedByDelegatorsBar, ChatBotTotalQueryFeesCountBar, ChatBotTotalGRTSignalledByCuratorsBar, ChatBotTotalStakedGRTCountBar, ChatBotTotalDelegatedGRTByIndexersCountBar, ChatBotTotalGRTBurnedCountBar } from "../mainBarCharts/BarChartsData";
import Embed from 'react-embed';

class UKRActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
// Charts / Graphs Start
handleActiveDelegatorCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Кількість активних делегатів <ChatBotActiveDelegatorCountBar />.</h4>
  <a className="cla" href="https://grtdatahub.com/ActiveDelegatorCount" target="_blank" rel="noreferrer">Натисніть тут</a>, щоб переглянути кількість активних делегатів у повному обсязі.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveDelegationCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Кількість активних делегацій <ChatBotActiveDelegationCountBar />.</h4>
  <a className="cla" href="https://grtdatahub.com/ActiveDelegationCount" target="_blank" rel="noreferrer">Натисніть тут</a>, щоб переглянути кількість активних делегацій у повному обсязі.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleHoldersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Кількість холдерів <ChatBotHoldersCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/HoldersCount" target="_blank" rel="noreferrer">Натисніть тут</a>, щоб переглянути кількість холдерів у повному обсязі.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleSubgraphsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Кількість підграфів <ChatBotSubgraphsCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/SubgraphsCount" target="_blank" rel="noreferrer">Натисніть тут</a>, щоб переглянути кількість підграфів у повному обсязі.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleCuratorsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Кількість кураторів <ChatBotCuratorsCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/CuratorsCount" target="_blank" rel="noreferrer">Натисніть тут</a>, щоб переглянути список кураторів у повному обсязі.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveIndexerCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Кількість активних індексаторів <ChatBotActiveIndexerCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/ActiveIndexerCount" target="_blank" rel="noreferrer">Натисніть тут</a>, щоб переглянути кількість активних індексаторів у повному обсязі.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTDelegatedByDelegators() {
  const message = this.createChatbotMessage(<a> 
  <h4>Загальна кількість GRT токенів, які були делеговані <ChatBotTotalGRTDelegatedByDelegatorsBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalGRTDelegatedByDelegators" target="_blank" rel="noreferrer">Натисніть тут</a>, щоб переглянути загальну кількість GRT токенів, які були делеговані, у повному обсязі.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalQueryFeesCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Загальна кількість зборів за запит <ChatBotTotalQueryFeesCountBar/> GRT.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalQueryFeesCount" target="_blank" rel="noreferrer">Натисніть тут</a>, щоб переглянути загальну суму зборів за запити в повному обсязі.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTSignalledByCurators() {
  const message = this.createChatbotMessage(<a> 
  <h4>Загальна кількість GRT, яку куратори витратили для подання сигналів <ChatBotTotalGRTSignalledByCuratorsBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalGRTSignalledByCurators" target="_blank" rel="noreferrer">Натисніть тут</a>, щоб переглянути загальну кількість GRT, яку куратори витратили для подання сигналів, у повному обсязі.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalStakedGRTCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Загальна кількість застейканих GRT токенів <ChatBotTotalStakedGRTCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalStakedGRTCount" target="_blank" rel="noreferrer">Натисніть тут</a>, щоб переглянути загальну кількість застейканих токенів GRT у повному обсязі.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalDelegatedGRTByIndexersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Загальна кількість делегованих GRT від індексаторів <ChatBotTotalDelegatedGRTByIndexersCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalDelegatedGRTByIndexersCount" target="_blank" rel="noreferrer">Натисніть тут</a>, щоб переглянути загальну суму делегованих токенів GRT від індексаторів у повному обсязі.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTotalGRTBurnedCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Загальна кількість спалених GRT токенів <ChatBotTotalGRTBurnedCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalGRTBurnedCount" target="_blank" rel="noreferrer">Натисніть тут</a>, щоб переглянути загальну кількість спалених GRT токенів у повному обсязі.</a>
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
  const message = this.createChatbotMessage(<a>Вибір індексатора для делегування може бути складним рішенням. Наступна інформація та ресурси допоможуть вам. Те, що індексатор має найвищий APY, не означає, що він є найкращим для вас. Проведіть власне дослідження, не поспішайте і дізнайтеся, на що звертати увагу при виборі індексатора для делегування. Це забезпечить вам впевненість перед делегуванням токенів.<hr></hr>Прочитавши цей гайд від Graphtronauts про те, як обрати індексатора для делегування в <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-chose-an-indexer-for-delegation-in-graph-protocol-a59725c16062" target="_blank">The Graph Protocol</a>, а також переглянувши навчальний гайд <a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">Choosing Indexers</a>, ви зрозумієте, на що вам потрібно звертати увагу.<br></br><br></br>Додаток <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> дозволяє делегатам отримати корисну інформацію про обраного ними індексатора. Просто введіть ETH-адресу індексатора, якого ви обрали, або подивіться відгуки про нього. Ви також можете порівняти індексаторів у додатку.<br></br><br></br>Як тільки ви будете готові делегувати свої токени, <a className="cla" onClick={this.handleDelegateGuides}><strong>натисніть на мене</strong></a>, і я надам вам текстові та відеоінструкції.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Choosing Indexers End
handleJob() {
  const message = this.createChatbotMessage(<a>Хочеш працювати у web3? Хороші новини, екосистема The Graph набирає співробітників! Можливості представлені у The Graph Foundation та у ключових командах розробників. Перегляньте поточні відкриті вакансії <a className="cla" href="https://thegraph.com/jobs/#open-positions" target="_blank" rel="noreferrer">тут</a>.</a>
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
   Мережа The Graph складається з трьох ролей, які забезпечують роботу екосистеми та надають дані для таких Web3 додатків, як Uniswap, Aave та Synthetix: Індексатори, Куратори та Делегати. Нижче ви можете знайти детальну документацію для кожної з ролей.<br></br><a className="cla" onClick={this.handleBecomeIndexer}><strong>Індексатори</strong></a><br></br><a className="cla" onClick={this.handleCurator}><strong>Куратори</strong></a><br></br><a className="cla" onClick={this.handleDelegateGuides}><strong>Делегати</strong></a><br></br><br></br>Щоб забезпечити економічну безпеку The Graph Network і цілісність даних, що запитуються, учасники стейкають та користуються Graph Tokens (GRT). GRT - це робочий токен, який представляє собою стандарт ERC-20 в блокчейні Ethereum, що використовується для розподілення ресурсів в мережі. Активні індексатори, куратори та делегати можуть створювати сервіси та отримувати дохід від мережі, пропорційний до обсягу виконаної ними роботи та їхньої кількості застейканих GRT.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleEdgeAndNode() {
  const message = this.createChatbotMessage(<a>
    Ідея мережі The Graph була задумана і втілена в життя компанією Graph Protocol, Inc. Після запуску основної мережі The Graph Network 17 грудня 2020 року, Graph Protocol, Inc. вирішила змінити свою назву на Edge & Node. Метою зміни назви було підкреслити поточну децентралізацію в мережі. Таким чином, Edge & Node більше не є центральною командою, яка розробляє і просуває протокол. Замість цього, Edge & Node буде забезпечувати сервіси для екосистеми та буде залучена до роботи з протоколом.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTheGraphFoundation() {
  const message = this.createChatbotMessage(<a>
    Про створення The Graph Foundation було <a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank" rel="noreferrer">оголошено</a> у жовтні 2020 року. Директором The Graph Foundation є <a className="cla" href="https://ca.linkedin.com/in/evabeylin?original_referer=https%3A%2F%2Fdocs.thegraph.academy%2Fthe-graph-ecosystem%2Forganizational-structure%2Fthe-graph-foundation" target="_blank" rel="noreferrer">Eva Beylin</a>. Відповідаючи за управління протоколом, The Graph Foundation забезпечуватиме координацію та підтримку екосистеми. Заснування фонду було частиною стратегії створення незалежної організаційної структури, яка є децентралізованою.
    <hr></hr>Council Members:<br></br>Indexers<br></br>Jim Cousins & Gary Morris<br></br>Users<br></br>Justin J Moses & Kayvon Tehranian<br></br>Researchers<br></br>Santiago Palladino & Yondon Fu<br></br>Backers<br></br>Michael Anderson & Spencer Noon<br></br>Initial Team<br></br>Brandon Ramirez & Yaniv Tal</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTheGraphCouncil() {
  const message = this.createChatbotMessage(<a>
    The Graph Council була <a className="cla" href="https://thegraph.com/blog/introducing-the-graph-council" target="_blank" rel="noreferrer">створена</a> в жовтні 2020 року в рамках планів з децентралізації протоколу. <a className="cla" href="https://thegraph.com/blog/inaugurating-council-and-grants" target="_blank" rel="noreferrer">Члени The Graph Council</a> були представлені в грудні 2020 року. Graph Council управляє децентралізованою мережею Graph. Система 6 з 10 мультипідписів збалансовує інтереси п'яти різних груп стейкхолдерів в екосистемі: Індексаторів, холдери токенів, initial команди, users та технічних експертів домену.
    <br></br><br></br>Мандат Graph Council включає в себе наступні основні функції:<br></br>Операційна діяльність The Graph Foundation<br></br>Грантове та екосистемне фінансування<br></br>Оновлення протоколу<br></br>Параметризація протоколу<br></br>Екстрені операції з протоколом</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Networok Roles End

handleBecomeIndexer() {
  const message = this.createChatbotMessage(<a><strong>Як стати результативним індексатором в мережі The Graph</strong><hr></hr>Мінімальні вимоги до індексаторів - Існує чотири основні вимоги, необхідні для того, щоб стати результативним індексатором в мережі The Graph.<br></br><br></br><strong>Стейк</strong> - щоб стати індексатором, ви повинні застейкати мінімум 100,000 GRT токенів.<br></br><br></br><strong>Вміння</strong> - в ідеалі, індексатори повинні мати досвід роботи в DevOps або досвід роботи з нодами блокчейну. Індексатори повинні вміти працювати з хмарними або хостинговими серверами, або мати власне серверне обладнання. Також бажано мати досвід роботи з нодою валідатора та роботи в Linux.<br></br><br></br><strong>Технічне забезпечення</strong> - для того, щоб забезпечити баланс між ефективністю, якістю виконання запитів і швидкістю роботи, багато індексаторів часто починають з 16 ЦП, жорсткого диска об'ємом 1 ТБ і 32 ГБ оперативної пам'яті.<br></br><br></br><strong>Інфраструктурне програмне забезпечення</strong> - Знання технологій контейнерів і масштабування, таких як Docker і Kubernetes, матиме перевагу, однак можна також запустити програмне забезпечення Graph на "bare metal". Вимоги до інфраструктурного програмного забезпечення включають базу даних PostgreSQL, Graph Node, Agent Indexer, Indexer service, сервер показників Prometheus і, можливо, більше, залежно від ваших конкретних вимог і налаштувань.<br></br><br></br>Щоб дізнатися про найкращі практичні поради для індексаторів у The Graph Network, оптимальну участь у спільноті індексаторів, рекомендовані технічні налаштування індексатора, ресурси та гайди, розпочніть свою подорож з індексації за допомогою The Graph Network.<br></br><br></br>Цей <a className="cla" href="https://thegraph.com/blog/how-to-become-indexer/" target="_blank" rel="noreferrer">гайд</a> допоможе вам дізнатися про експлуатаційні вимоги, кращі практичні поради та комунікативні стратегії, щоб стати найкращим у своєму класі індексатором у The Graph Network.
 </a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// Discord and Telegram Start
handleGraphDiscord() {
  const message = this.createChatbotMessage(<a>Офіційний Discord сервер The Graph можна знайти <a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">тут</a>.</a>
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
  const message = this.createChatbotMessage(<a>Винагороди за індексацію накопичуються і розподіляються щоразу, коли індексатори закривають свої розподіли. Поки вони активні, винагороди продовжують накопичуватися постійно. Індексатори можуть або примусово закрити свої розподіли вручну, або дозволити закрити їх автоматично після закінчення максимального терміну дії розподілів (приблизно кожні 28 епох).<br></br><br></br>28 епох = ~26 днів<br></br><br></br>Поки розподіли активні, за них постійно нараховуються винагороди. Винагороди збираються індексаторами та розподіляються щоразу, коли їхні розподіли закриваються. Це відбувається або вручну, коли індексатор хоче примусово закрити їх, або автоматично кожні 28 епох - максимальний термін існування розподілів.<hr></hr>Щоб побачити свої майбутні винагороди, відвідайте додаток <a className="cla" href="https://www.graphtronauts.com/#/profile" target="_blank" rel="noreferrer">Graphtronauts</a> і додайте гаманець.
  </a>
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
  const message = this.createChatbotMessage(<a>Щоразу, коли розподіл закривається (вручну індексатором або автоматично після закінчення максимального терміну експлуатації), шлюз протоколу стягує плату за запити. Плата за запити накопичується в rebate pool для повернення плати за запити підграфа. Розподілена сума зборів за запити з пулу rebate розраховується на основі внесків індексаторів до rebate пулу та їхньої суми стейкінгу в підграфі.<br></br><br></br>Після закриття розподілу, індексатори можуть вимагати виплат за запити тільки після закінчення періоду розгляду диспуту. Після того, як індексатор успішно отримує плату за запити, кошти розподіляються між індексатором та його делегатами.<br></br><br></br>Відповідно до виробничої функції <a className="cla" href="https://en.wikipedia.org/wiki/Cobb%E2%80%93Douglas_production_function" target="_blank" rel="noreferrer">Cobb-Douglas</a>, створюється Rebate Pool, який винагороджує всіх учасників мережі (наприклад, індексаторів) на основі їхніх внесків у The Graph Network. Мета Rebate Pool полягає в тому, щоб стимулювати індексаторів стейкати GRT приблизно пропорційно до суми винагороди за запити, яку вони заробляють для мережі. Rebate Pool отримує фіксовану частину комісії за запити, які надходять до нього.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleIndexingRewardsAndQueryFees() {
  const message = this.createChatbotMessage(<a>Винагорода за індексацію розподіляється між підграфами пропорційно до кураторського сигналу підграфа. Індексатори отримують винагороду за індексацію пропорційно до своєї суми стейкінгу, яку вони розподілили на певний підграф.<br></br><br></br>Винагорода за індексацію генерується інфляцією протоколу, яка встановлена на рівні 3% річної емісії.<br></br><br></br>Всі розподіли повинні бути закриті дійсним доказом індексації (POI - proof of indexing)</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handlePOI() {
  const message = this.createChatbotMessage(<a>Так зване proof of indexing (POI) підтверджує, що індексатори дійсно проіндексували підграфи, на які вони розподілили власну суму стейкінгу. POI для блоку - це дайджест усіх транзакцій сховища даних, які детально відображають процес розгортання на підграфах. Щоб отримати винагороду за індексацію, індексатори повинні закрити розподіл з дійсним доказом індексації (POI), який відповідає стандартам, встановленим арбітражним статутом. Індексатори не мають права на отримання винагороди без дійсного POI. При закритті розподілу індексатор повинен надати POI першого блоку поточної епохи.<br></br><br></br>Винагороди за індексування збираються і розподіляються щоразу, коли індексатори закривають свої розподіли. Поки вони активні, розподіли продовжують накопичувати винагороди безперервно. Індексатори можуть або примусово закрити свої розподіли вручну, або дозволити закрити їх автоматично після закінчення максимального терміну дії розподілу (кожні 28 епох).<br></br><br></br>28 епох = ~26 днів</a>
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
  const message = this.createChatbotMessage(<a>Вимоги до апаратного забезпечення для участі в мережі в ролі індексатора наведені в таблиці нижче.<hr></hr><table><tr className="indexer-table-header">
    <th>Налаштування</th>
    <th>Postgres (ЦП)</th>
    <th>Postgres (пам'ять в ГБ) </th>
    <th>Postgres (диск в ТБ) </th>
    <th>VMs (процесори) </th>
    <th>VMs (пам'ять в ГБ) </th>
  </tr>
  <tr className="indexer-table">
    <td>Малий</td>
    <td>4</td>
    <td>8</td>
    <td>1</td>
    <td>4</td>
    <td>16</td>
  </tr>
  <tr className="indexer-table">
    <td>Стандартний</td>
    <td>8</td>
    <td>30</td>
    <td>1</td>
    <td>12</td>
    <td>48</td>
  </tr>
  <tr className="indexer-table">
    <td>Середній</td>
    <td>16</td>
    <td>64</td>
    <td>2</td>
    <td>32</td>
    <td>64</td>
  </tr>
  <tr className="indexer-table">
    <td>Великий</td>
    <td>72</td>
    <td>468</td>
    <td>3.5</td>
    <td>48</td>
    <td>184</td>
  </tr>
</table>
<br></br><br></br>Малий = достатньо для початку індексації декількох підграфів<br></br>Стандартний = налаштування за замовчуванням<br></br>Середній = необхідний для індексації 100 підграфів і обробки 200-500 запитів на секунду<br></br>Великий = необхідний для індексації всіх підграфів, що використовуються наразі, і обслуговування запитів для відповідного трафіку
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
  const message = this.createChatbotMessage(<a>Поки алокації активні, винагороди за них постійно накопичуються. Винагороди збираються індексаторами та розподіляються, коли розподіли закриваються. Це відбувається або вручну, коли індексатор хоче примусово закрити їх, або автоматично кожні 28 епох - максимальний термін експлуатації розподілів.</a>
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
  const message = this.createChatbotMessage(<a>Документацію для індексаторів про те, як отримати IPFS хеш підграфа з ID і навпаки, можна знайти <a className="cla" href="https://docs.thegraph.academy/network/indexers/technical-documentation/get-ipfs-hash-from-deployment-id" target="_blank" rel="noreferrer">тут</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// IPFS End
handleTools() {
  const message = this.createChatbotMessage(<a>Додаток <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> дозволяє делегатам отримати корисну інформацію про обраного ними індексатора. Просто введіть ETH-адресу обраного вами індексатора або ознайомтеся з відгуками нижче.<br></br><br></br>Інші дуже корисні сайти<br></br><br></br><a className="cla" href="http://ww25.oracleminer.com/graph/indexer/0x7ab4cf25330ed7277ac7ab59380b68eea68abb0e?subid1=20220530-2214-27fd-afb4-5d675e9469e5s" target="_blank" rel="noreferrer">OracleMiner.com</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://graphscan.io/" target="_blank" rel="noreferrer">GraphScan.io</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://thegraph.live/" target="_blank" rel="noreferrer">TheGraph.Live</a><br></br><br></br><a className="cla" href="https://www.notion.so/Community-Guides-abbb10f4dba040d5ba81648ca093e70c" target="_blank" rel="noreferrer">Інструменти та гайди від спільноти</a></a>
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
  const message = this.createChatbotMessage(<a>Щоразу, коли ви делегуєте GRT індексатору, вам потрібно враховувати <strong>0,5% комісії за делегування</strong>. Наприклад, якщо ви делегуєте 10 000 GRT, з вас буде стягнуто 50 GRT. Якщо обраний вами індексатор пропонує вам потенційний заробіток у розмірі 2 GRT на день. За такого припущення вам знадобиться 25 днів (50 GRT / 2 GRT), щоб вийти на рівень беззбитковості. Щоб приймати економічно обґрунтовані рішення, ви повинні розрахувати, скільки часу вам знадобиться, щоб повернути собі плату в розмірі 0,5% від суми вашого делегування.
  <br></br><br></br>Делегування індексатору вимагатиме від вас підписання <strong>двох транзакцій в ETH </strong>. Те ж саме стосується і скасування делегування ваших GRT. У випадку високих цін на газ вам доведеться ретельно прорахувати, чи є економічно обґрунтованим делегування невеликих сум GRT.<br></br><br></br>Наприклад, припустимо, що підписання двох транзакцій ETH коштуватиме вам $25. Давайте також припустимо, що ви хочете делегувати тільки $100. В цьому випадку транзакційні витрати на делегування складуть в цілому 25% від стека GRT. Це означає, що час виходу на окупність значно збільшиться.<br></br><br></br>Якщо делегати бажають скасувати делегування, вони не зможуть одразу отримати доступ до своїх токенів. Зняті токени підлягають 26-денному періоду очікування, після чого делегати можуть вільно переводити свої токени або переделегувати їх іншому індексатору.<br></br><br></br>Вибір перевіреного, надійного та ефективного індексатора є важливим рішенням, до якого не слід ставитися легковажно. Делегати, які не проводять належну перевірку, ризикують делегувати свої токени індексатору з поганими показниками. Аналогічно, вони можуть ризикувати, обравши Індексатора, який займається сумнівною діяльністю або короткостроково виплачує кошти делегатам, щоб рекламувати привабливу річну відсоткову прибутковість (APY), яка не є реалістичною в довгостроковій перспективі.<br></br><br></br>Інформацію про ризики, пов'язані з роботою делегата, можна знайти <a className="cla" href="https://thegraph.academy/delegators/risks/" target="_blank">тут</a>.<br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank" rel="noreferrer">Як зменшити вартість газу для делегування своїх токенів GRT</a><br></br><br></br>Щоб дізнатися середню вартість транзакції за делегування наразі, відвідайте додаток <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> і виберіть пункт "Fees".</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Delegate Guides Start
handleDelegateGuides() {
  const message = this.createChatbotMessage(<a>Я надам вам все необхідне для того, щоб ви стали делегатом. Наступна інформація та ресурси допоможуть вам.<hr></hr>Подивившись навчальний урок <a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">"Choosing Indexers"</a>, ви зрозумієте, на що вам потрібно звертати увагу. Щоб переконатися, що ви впевнені в собі перед делегуванням, перегляньте наведені нижче навчальні матеріали, щоб отримати краще уявлення про те, що відбувається.<br></br><br></br>Ви можете застейкати свої токени GRT через <a className="cla" href="https://thegraph.com/explorer/participants/indexers" target="_blank">network.thegraph.com</a>, делегувавши їх індексатору за власним уподобанням.<br></br>Існує комісія за делегування в розмірі 0,5%, яка стягується в момент делегування, щоб стимулювати делегатів брати на себе відповідальність перед індексатором.<br></br><br></br>Ви можете знайти інструкції про те, як делегувати або застейкати свої GRT <a className="cla" href="https://docs.thegraph.academy/network/delegators/general-documentation-1/choosing-indexers/guides" target="_blank">тут</a>.
  <br></br><br></br>Скасування делегування займає 26 днів, оскільки це максимальна тривалість розподілу.<br></br><br></br>Graphtronauts також створили свої власні гайди:<br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-stake-your-tokens-with-the-graph-the-complete-guide-to-become-a-delegator-3f723e6420b1" target="_blank">Повний гайд, як стати делегатом</a><br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s" target="_blank">Як користуватися гаманцем Coinbase для стейкінгу</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/binance-staking-vs-delegating-with-the-graph-network-b4ba7e259b73" target="_blank">Стейкінг на Binance VS Делегування в мережі The Graph</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/faq-for-the-graph-delegators-2b4a03a830f2" target="_blank">FAQ для делегатів The Graph</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank">Як зменшити витрати на газ для делегування своїх токенів GRT</a><br></br><br></br>Щоб дізнатися середню вартість транзакції за делегування, відвідайте <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank">Graphtronauts</a> і виберіть "Fees".</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleQueryPython() {
  const message = this.createChatbotMessage(<a><strong>Як запитувати on-chain дані з Graph Protocol за допомогою Python</strong><br></br><br></br><a className="cla" href="https://hashnode.com/@townee" target="_blank">Tony Kipkemboi</a> написав чудовий покроковий гайд по виконанню запитів до підграфів за допомогою Python, GraphQL та Subgrounds.<br></br><br></br>Повністю блог можна знайти <a className="cla" href="https://townee.hashnode.dev/how-to-query-the-graph-protocol-for-on-chain-data-using-python" target="_blank">тут</a>.<br></br><br></br>Ви можете слідкувати за <a className="cla" href="https://twitter.com/ynot_kip" target="_blank">Tony</a> у Twitter, щоб бути в курсі подій, коли буде опублікований його другий блог, "Як я можу використовувати subgrounds, коли хостинговий сервіс занепадає?".</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWeb3DApp() {
  const message = this.createChatbotMessage(<a>Як працюють Web3 dApps?<br></br><br></br>Ви можете знайти "Повний гайд по архітектурі Web3" <a className="cla" href="https://twitter.com/suhailkakar/status/1555894207570513920?s=21&t=FoLxHgWLO78VA_3VheV_DQ" target="_blank">тут</a>, у надзвичайно корисній стрічці в Twitter.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSoulBound() {
  const message = this.createChatbotMessage(<a>Створення dApps не повинно бути складним завданням.<br></br><strong><a className="cla" href="https://soulbound.xyz/" target="_blank">Soulbound Studio</a></strong> робить це легко.<br></br>Не потрібно займатися кодуванням.<br></br><br></br>Один уніфікований інтерфейс для розробки, ітерації та публікації повністю децентралізованих Web3 API та веб-інтерфейсів.<br></br><br></br>Якщо ви хочете допомогти розробникам Soulbound Studio, поділившись бажаними функціями та повідомленнями про помилки, будь ласка, приєднуйтесь до їхнього <a className="cla" href="https://discord.com/invite/Eu3Eeh4J6a" target="_blank">Discord</a>.<br></br><br></br>Щоб бути в курсі останніх релізів та новин, слідкуйте за Soulbound Labs у <a className="cla" href="https://twitter.com/SoulboundLabs" target="_blank">Twitter</a>.<br></br><br></br>Відеоурок про те, як створювати додатки для підграфів та аналітику за лічені хвилини за допомогою Soulbound Studio без написання коду, дивіться нижче.<br></br><br></br>
  <Embed className="embed" isDark url='https://www.youtube.com/watch?v=IEmr280lGSU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIPhone() {
  const message = this.createChatbotMessage(<a>Не зберігайте великі кошти та Bored Apes на телефоні на гарячому гаманці! Тому що ваш iPhone, ймовірно, синхронізує інформацію щодо MetaMask з iCloud. За замовчуванням це ввімкнено, <a className="cla" href="https://twitter.com/plumferno/status/1556187973200351234?s=21&t=a-4X_QM7BzHRKcJe8aPc_w" target="_blank">ось</a> надзвичайно корисна стаття у Twitter про те, як це вимкнути!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Query Fees Cut and indexing reward cut Start
handleQueryFeesAndIndexingRewardCut() {
  const message = this.createChatbotMessage(<a>Значення queryFeeCut та indexingRewardCut є параметрами делегування, які індексатор може встановити разом з cooldownBlocks для керування розподілом GRT між індексатором та його делегатами. Інструкції щодо встановлення параметрів делегування див. в останніх кроках розділу "Staking in the Protocol".<br></br><br></br>queryFeeCut - відсоток повернення плати за запити, накопичений на підграфі, який буде розподілено індексатору. Якщо встановлено значення 95%, індексатор отримає 95% пулу повернень плати за запити під час запиту на розподіл, а решта 5% підуть делегатам.<br></br><br></br>indexingRewardCut - відсоток винагороди за індексацію, накопиченої на підграфі, який буде розподілено індексатору. Якщо встановлено значення 95%, індексатор отримає 95% пулу винагород за індексацію, коли розподіл буде закрито, а делегати розділять решту в розмірі 5%.</a>
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
  const message = this.createChatbotMessage(<a>Graph Protocol, Inc. була заснована у квітні 2018 року Jannis Pohlmann, Brandon Ramires та Yaniv Tal<br></br><br></br><strong>Jannis Pohlmann</strong>, Tech Lead & Co-Founder. <a className="cla" href="https://de.linkedin.com/in/jannispohlmann" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/jannispohlmann" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br><strong>Brandon Ramirez</strong>,  Research Lead & Co-Founder. <a className="cla" href="https://www.linkedin.com/in/1stramirez" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/rezbrandon?lang=en" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br><strong>Yaniv Tal</strong>, Project Lead & Co-Founder. <a className="cla" href="https://www.linkedin.com/in/yanivtal9" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla"  href="https://twitter.com/yanivgraph" target="_blank" rel="noreferrer">Twitter</a> | <a className="cla" href="https://www.grtiq.com/grtiq-podcast-100-Yaniv-Tal/" target="_blank" rel="noreferrer">Подкаст GRTiQ</a></a>
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
  const message = this.createChatbotMessage(<a>За даними <a className="cla" href="https://www.crunchbase.com/organization/the-graph/investor_financials" target="_blank" rel="noreferrer">Crunchbase.com</a>, за 7 раундів The Graph залучив загалом $69,6 мільйона фінансування. Останнє фінансування було залучено 21 січня 2022 року в рамках раунду Venture - Series Unknown.<br></br><br></br>The Graph фінансується 27 інвесторами. Останніми інвесторами стали Blockwall Management та FinTech Collective.<br></br><br></br>The Graph залучив загалом $205 млн через єдиний венчурний фонд The Graph Ecosystem Fund. Цей фонд був анонсований 18 лютого 2022 року і зібрав в цілому $205 млн.</a>
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
  const message = this.createChatbotMessage(<a>The Graph $GRT - це протокол індексації для запитів у таких мережах, як Ethereum та IPFS. Будь-хто може створювати та оприлюднювати відкриті API, які називаються підграфами, роблячи дані легкодоступними. Одним словом, The Graph надає дані, які можна трансформувати, організовувати та ділитися ними між додатками, щоб кожен міг отримати доступ до них лише кількома натисканнями клавіш.<br></br><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/" target="_blank" rel="noreferrer">Як керується The Graph
  </a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-council" target="_blank" rel="noreferrer">The Graph Council</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-foundation" target="_blank" rel="noreferrer">The Graph Foundation</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#advocates-dao" target="_blank" rel="noreferrer">Graph Advocates­DAO</a><br></br><br></br>Ви можете прочитати "History of the Graph (2017-2020)", створену Graphtronauts, <a className="cla" href="https://blog.graphtronauts.com/the-graph-history-2017-2020-75cc40132992" target="_blank" rel="noreferrer"> тут</a>.<br></br><br></br>Ви можете прочитати "Що таке The Graph і чому це наступна велика технологічна новинка" від Graphtronauts <a className="cla" href="https://blog.graphtronauts.com/what-is-the-graph-and-why-is-the-next-big-thing-in-the-technology-industry-25051fae4256" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Відеопояснення, що таке "google of blockchains", дивіться <a className="cla" href="https://youtu.be/7gC7xJ_98r8" target="_blank" rel="noreferrer">тут</a>.</a>
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
  const message = this.createChatbotMessage(<a>Що стосується аірдропів, то The Graph - один з небагатьох проєктів, який дійсно змусив людей попрацювати за свої токени. Кураторська програма була дуже інтенсивною, і люди витратили багато часу на вивчення підграфів, організацію даних і внесення свого внеску в мережу. Це ставить команду в неймовірне становище, коли у неї є добре навчена і мотивована спільнота розробників, відданих розвитку Web3 на The Graph. Станом на сьогодні не заплановано жодних нових аірдропів.</a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://twitter.com/CoinMarketCap/status/1341310792461918210" target="_blank" rel="noreferrer">CoinMarketCap Earn</a><a className="cla" href="https://twitter.com/coinbase/status/1339723594566406156?s=20" target="_blank" rel="noreferrer">Coinbase Earn</a> роздає безкоштовні токени GRT учасникам, які дізнаються про мережу та відповідають на запитання.<hr></hr>Найкращий спосіб заробити безкоштовні GRT - це делегування та отримання винагород.</a>
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
  const message = this.createChatbotMessage(<a>Ви можете знайти посилання на Github The Graph тут: <a className="cla" href="https://github.com/graphprotocol/" target="_blank" rel="noreferrer">github.com/graphprotocol/</a></a>
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
  const message = this.createChatbotMessage(<a>Офіційну дорожню карту розвитку Graph можна знайти <a className="cla" href="https://thegraph.com/blog/roadmap-2022" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Дорожню карту The Graph на 2023 рік, написану The Graphtronauts, можна знайти <a className="cla" href="https://medium.com/@OG-Graphtronauts/the-graph-roadmap-for-2023-952b17d20d71" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>У цій статті ви дізнаєтеся про чотири сфери розвитку, які побачать світ у 2023 році та зроблять мережу The Graph ще потужнішою, ніж вона є сьогодні:<br></br>The Sunset of the Hosted Service<br></br>Firehose<br></br>Substreams<br></br>Moving the protocol to L2 with Arbitrum One</a>
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
  const message = this.createChatbotMessage(<a>The Graph використовує GraphQL, мову запитів з відкритим вихідним кодом, розроблену Facebook. Кожен елемент схеми має опис. Вивчивши GraphQL, ви зможете отримувати всі необхідні дані з блокчейну.<hr></hr>GraphQL - це мова запитів і середовище розробки на стороні сервера для інтерфейсів прикладного програмування (API), яке надає клієнтам саме ті дані, які вони запитують, і не більше. GraphQL створена для того, щоб зробити API швидкими, адаптивними та зручними для розробників. GraphQL API - це API, який розробники можуть використовувати для доступу до індексованих даних від The Graph.</a>
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
  const message = this.createChatbotMessage(<a>Ви можете побачити ціну і всі відкриті ринкові пропозиції на <a className="cla" href="https://coinmarketcap.com/currencies/the-graph/markets/" target="_blank" rel="noreferrer">CoinMarketCap</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDecentralisedData() {
  const message = this.createChatbotMessage(<a><strong>The Sunrise of Decentralized Data</strong><br></br><br></br>Екосистема Graph робить кроки, щоб виправдати очікування користувачів, одночасно вітаючи динамічне, децентралізоване майбутнє. Щоб досягти цього балансу, відмова від підтримки хостингових сервісів розділена на три перехідні фази для кожної окремої мережі, які залежать від різних критеріїв переходу, включаючи, але не обмежуючись ними, зручність використання, стабільність та основну функціональність.<br></br><br></br>Мережі хостингових сервісів будуть переходити поступово, надаючи розробникам достатньо часу для ознайомлення з децентралізованою мережею та міграції їхніх підграфів.<br></br><br></br>З метою кращої підтримки розробників, для кожного етапу переходу мережі від хостингового ресурсу до The Graph Network не буде призначено конкретних дат для кожної фази. Задоволення потреб розробників і досягнення ключових критеріїв припинення підтримки хостингового сервісу має пріоритет над припиненням підтримки. У міру досягнення критеріїв виходу для кожної мережі хостингових сервісів, ця лінія буде переходити в три етапи. Слідкуйте за розвитком програми MIPs, щоб зрозуміти, коли мережі тестуються індексаторами, коли вони підтримуються в загальній мережі та коли починається міграція для кожної з мереж.<br></br><br></br>Для кожної мережі хостингу існує три перехідні фази для включення підтримки в The Graph Network:<br></br>Етап 1 (The Sunray): Вимкнення створення нових підграфів для блокчейнів на базі хостингових сервісів, які вже мають достатній основний функціонал в мережі.<br></br>Етап 2 (The Sunbeam): Вимкнення оновлень підграфів на хостингових сервісах.<br></br>Етап 3 (Standart): Відключення запитів до підграфів на хостингу.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleVsSelfHosting() {
  const message = this.createChatbotMessage(<a><strong>Мережа The Graph в порівнянні з Самостійним хостингом</strong><br></br><br></br>Попереджаємо: Мережа The Graph дешевша, простіша у використанні та дає кращі результати порівняно з локальним розміщенням нод The Graph.<br></br><br></br>Децентралізована мережа The Graph була розроблена і вдосконалена для створення надійного індексування і запитів - і вона стає кращою з кожним днем завдяки тисячам учасників з усього світу. Переваги цього децентралізованого протоколу неможливо повторити, використовуючи локальний вузол графа. Мережа The Graph надійніша, ефективніша і дешевша. Ось аналіз:<br></br><br></br><strong>Чому варто використовувати мережу The Graph</strong><br></br>На 60-98% нижчі щомісячні витрати<br></br>0 витрат на налаштування інфраструктури<br></br>Вищий час безвідмовної роботи<br></br>Доступ до 168 індексаторів (і це ще не кінець)<br></br>24/7 технічна підтримка від глобальної спільноти<br></br><br></br>Щоб дізнатися про переваги використання мережі The Graph, читайте <a className="cla" href="https://thegraph.com/docs/en/network/benefits/#breaking-down-the-benefits-of-using-the-graph-network" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br><strong>Відсутність витрат на встановлення та підвищення операційної ефективності</strong>Нульова плата за налаштування.<br></br>Почніть роботу негайно без жодних накладних витрат на налаштування та обслуговування.<br></br>Відсутність вимог до апаратного забезпечення.<br></br>Відсутність перебоїв через централізовану інфраструктуру та більше часу для концентрації на основному продукті.<br></br>Немає потреби в резервних серверах, усуненні несправностей або дорогих інженерних ресурсах.<br></br><br></br>Надійність та відмовостійкість - децентралізована мережа Graph надає користувачам доступ до географічної доступності, яка не існує при автономному розміщенні graph нод. Запити обслуговуються надійно завдяки 99,9%+ часу безвідмовної роботи, що досягається завдяки 168 індексаторам (і їх кількість продовжує зростати), які забезпечують безпеку мережі по всьому світу.</a>
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
   const message = this.createChatbotMessage(<a>Підграфи - це інформаційні структури для організації даних, які ви отримуєте з блокчейну. Це спосіб визначити, які дані ви хочете проіндексувати і як їх зберігати. Деякі з них виконують попередні агрегації або обчислення на своїх мапах, деякі просто зберігають звичайні дані, подібні до тих, що ви можете знайти в мережі. Потім якийсь об'єкт запитує ці дані. Це може бути dapp (компанія/розробник тощо), або телеграм-бот, або дискорд-бот, або навіть простий користувач, який робить запит, щоб отримати інформацію.<br></br><br></br>Наразі запити до підграфів з хостингового сервісу є безкоштовними для всіх охочих. Для децентралізованого протоколу команда очікує, що вартість запиту становитиме близько $0,00001 за запит, але це вільний ринок, і кожен індексатор може встановлювати свої правила ціноутворення.<br></br><br></br>Шпаргалка для розробників, яка допоможе розібратися з підграфами за 15 хвилин, знаходиться <a className="cla" href="https://drive.google.com/file/d/1J2zm06wZV0EwMEGBD48fGbaFKPPcCdZT/view" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Посібник зі створення підграфів за допомогою Subgraph Studio можна знайти <a className="cla" href="https://www.youtube.com/watch?v=HfDgC2oNnwo" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Огляд і покрокове керівництво по створенню підграфа від <a className="cla" href="https://hashnode.com/@camiinthisthang" target="_blank" rel="noreferrer">Camila Ramos</a> можна знайти <a className="cla" href="https://camiinthisthang.hashnode.dev/the-complete-guide-to-getting-started-with-the-graph" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Якщо ви шукаєте підграф або хочете дослідити підграфи, які були перенесені в основну мережу, відвідайте додаток <a className="cla" href="https://www.graphtronauts.com/#/subgraphs" target="_blank" rel="noreferrer">Graphtronauts</a>.<br></br><br></br>Ви також можете записатися на <a className="cla" href="https://thegraph.academy/course/subgraph-developer-course/" target="_blank" rel="noreferrer">курс</a> для розробників підграфів.</a>
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
  const message = this.createChatbotMessage(<a>You need 100,000 GRT to become an indexer and the necessary infrastructure. It is the minimum amount you need to stake in order to register an indexer node on-chain.<br></br><br></br>Indexers need extensive DevOps skills and the necessary hardware.<br></br><br></br>Indexers are “punished” for changing delegation parameters by the market. All other things being equal, the team would expect Indexers who set lower cooldown periods to receive less delegation.
  The team would also like to build tools that make it easier to spot Indexers that change delegation parameters erratically or too frequently. Some of these signals could be incorporated into a future version of the explorer.<br></br><br></br>You can’t change your indexer address in the next two years, starting December 2020.</a>
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
  const message = this.createChatbotMessage(<a>Gas is the term for the amount of ether (ETH) – the native cryptocurrency of Ethereum – required by the network for a user to interact with the network.<br></br><br></br>The gas price is not something that The Graph team has control over. Gas price goes up when the Ethereum network is congested or heavily used.<br></br><br></br>For the average cost of a delegation transaction at this time, visit the Graphtronauts app <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">here</a> and select Fees.<br></br><br></br>For a guide on How to reduce the cost of gas for delegating your GRT tokens, see <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>For Ethereum gas fees see <a className="cla" href="https://ethereumprice.org/gas/" target="_blank" rel="noreferrer">here</a>.</a>
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
  const message = this.createChatbotMessage(<a><strong><a className="cla" href="https://twitter.com/graphsocial1?s=21&t=f_BFECU3y4NfkRXocWA5kQ" target="_blank" rel="noreferrer">Graph Social</a></strong><br></br><br></br>An international web3 meetup driving The Graph ecosystem growth. Organized by <a className="cla" href="https://twitter.com/Mardeni01" target="_blank" rel="noreferrer">Ahmad Mardeni</a>.<br></br><br></br>The first Graph Social web3 meetup was in Dubai on 8th October 2022, 6-10pm GST, with more than 100 people in attendance. The event covering what The Graph is, what are the recent achieved milestones, and how to get involved!<hr></hr><strong>Speakers</strong><br></br><br></br>Ahmad Mardeni<br></br>Salim Hadri<br></br>Shing Lam from <a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><br></br><a className="cla" href="https://twitter.com/9001sabella" target="_blank" rel="noreferrer">Isabella</a> from <a className="cla" href="https://twitter.com/routerprotocol" target="_blank" rel="noreferrer">Router Protocol</a><br></br><a className="cla" href="https://twitter.com/farhajmayan" target="_blank" rel="noreferrer">Farhaj Mayan</a> from <a className="cla" href="https://twitter.com/_buildspace" target="_blank" rel="noreferrer">Buildspace</a><br></br><a className="cla" href="https://twitter.com/dudhat_paresh" target="_blank" rel="noreferrer">Paresh Dudhat</a> from <a className="cla" href="https://twitter.com/infy_protocol" target="_blank" rel="noreferrer">Infy Protocol</a><br></br>Rashmi Padhy<br></br><br></br><strong>Sponsors</strong><br></br><br></br><a className="cla" href="https://twitter.com/tenderize_me" target="_blank" rel="noreferrer">Tenderize</a><br></br><a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><hr></hr>You can watch an interview from the event with Ahmad Mardeni and <a className="cla" href="https://twitter.com/MultiartStudio" target="_blank" rel="noreferrer">MultiArt Studio</a> below!<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=KFUxrs10gpI'/></a>
    ,
  );
  this.setState((prev) => ({ 
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePodcast() {
  const message = this.createChatbotMessage(<a><strong>What is GRTiQ?</strong><br></br><br></br><a className="cla" href="https://www.grtiq.com/" target="_blank" rel="noreferrer">GRTiQ</a> generate market intelligence through analytics, research, optimization, and education.<br></br><br></br><strong>Market
  Analytics</strong> - They provide market performance and analytics so Delegators can better understand market dynamics.<br></br><br></br><strong>Indexer
Research</strong> - They conduct indexer research that Delegators can use to identify opportunities and partnerships.<br></br><br></br><strong>Rewards
Optimization</strong> - They create and publish data, guides, and analysis to help Delegators optimize their rewards earnings.<br></br><br></br><strong>Ecosystem
Education</strong> -They offer ongoing educational resources and information about all aspects of The Graph ecosystem.<hr></hr>You can listen to the GRTiQ Podcasts, <a className="cla" href="https://www.grtiq.com/podcast/" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>To keep up to date with GRTiQ you can follow them on <a className="cla" href="https://twitter.com/grt_iq" target="_blank" rel="noreferrer">Twitter</a>, <a className="cla" href="https://www.youtube.com/channel/UCxhFN47AlCDx1Qoaw1oSQ5A" target="_blank" rel="noreferrer">YouTube</a> and <a className="cla" href="https://www.instagram.com/thegraphiq/" target="_blank" rel="noreferrer">Instagram</a>.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/grt_iq/status/1617269631403831297?s=20&t=C_TtsLrGHQ0b92xQs527lQ'/></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-15947" target="_blank" rel="noreferrer">The Graph Advocates</a> is a community-driven initiative serving as a portal into web3 for people all across the world. Advocates have the unique opportunity to learn and contribute to The Graph community and web3 mission. Anyone can become an Advocate and subsequently join the Graph AdvocatesDAO.<hr></hr><strong><underline>Advocate Roles</underline></strong><br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12947" target="_blank" rel="noreferrer"><strong>Event Evangelist</strong></a><br></br>Host local events, attend regional events, and participate in in-person or online community events.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12927" target="_blank" rel="noreferrer"><strong>Content Creator</strong></a><br></br>Create content about web3 and The Graph, including articles, videos, infographics, memes or GIFs.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13207" target="_blank" rel="noreferrer"><strong>Text Translator</strong></a><br></br>Translate The Graph and other community documentation, material, and social posts into other languages.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12667" target="_blank" rel="noreferrer"><strong>Community Care</strong></a><br></br>Post answers to questions or share educational resources in The Graph Forum, Telegram, Discord, or Reddit.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13167" target="_blank" rel="noreferrer"><strong>Technical Teacher</strong></a><br></br>Teach others how to actively participate and contribute in web3 and The Graph ecosystem.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13407" target="_blank" rel="noreferrer"><strong>Web3 Welcomer</strong></a>
  <br></br>Accelerate greater education and adoption of web3 and The Graph throughout the world.<hr></hr>You can apply to be an Advocate for The Graph <a className="cla" href="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>To learn more about what it takes to be an Advocate see <a className="cla" href="https://thegraph.com/ecosystem/advocacy/" target="_blank" rel="noreferrer">here</a>.<hr></hr>To learn about the AdvocatesDAO Grants, <a className="cla" onClick={this.handleAdvocateGrant}><strong>click me</strong></a>!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrant() {
  this.handleAdvocateGrantWithdraw = this.handleAdvocateGrantWithdraw.bind(this);
  const message = this.createChatbotMessage(<a><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12762" target="_blank" rel="noreferrer"><strong>Graph AdvocatesDAO Community Grant</strong></a><br></br><br></br>You can apply for an AdvocatesDAO grant <a className="cla" href="http://grants.graphadvocates.com/" target="_blank" rel="noreferrer">here</a>.<hr></hr><strong>The Grant Process</strong><br></br>Initial Review - Your grant will be posted in the Graph AdvocatesDAO Forum <a className="cla" href="https://forum.graphadvocates.com/" target="_blank" rel="noreferrer">here</a>. A DAO member of the Grant Committee will evaluate eligibility of your grant.<br></br>Public Discussions - The broader community is invited to provide feedback on grants and also vote in the Forum on whether they support it. During this process, community members or DAO members may ask questions in the Forum to gather more specifics about the grant to better understand its scope. This is an important phase of the process throughout which opinions are formed.<br></br>Committee Presentation - A successful grant application will also include a live presentation to the Grant Committee of the DAO. These meetings take place in the public-voice-chat of the <a className="cla" href="https://discord.gg/XgT3s9XY" target="_blank" rel="noreferrer">DAO's Discord server</a> and are scheduled at three different time slots (10:00 | 18:00 | 22:00 UTC) every Tuesday to accommodate different time zones across the globe. These are important touch points for Grant Committee members to gain confidence on whether or not to support a grant. Please come prepared to present an overview of your grant and answer questions.<br></br>Grant Decision - You will see a number of different votes and polls emerging throughout the grant process. These are incredibly important signals that inform DAO members in their vote. The official DAO funding decision for successful grants will take place at the very end of the process, where all DAO members will vote on-chain in <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2" target="_blank" rel="noreferrer">DAOHaus</a>. (note: some smaller grants may be voted off-chain by the Grant Committee)
  <br></br>Expected Timing - The DAO is committed to appropriately vet all grant applications. The DAO has also established on-chain and off-chain timelines that allow broad engagement from the community living across different time zones with varying degrees of availability to participate.<br></br><br></br>So you have now submitted your grant via the form, it has been posted into the forum where the community and Advocates are voting and asking questions. What is next?<hr></hr>The DAO is aiming to process a successful grant application within 1-2 months. Below is an overview of key steps that a successful grant application passes through:<br></br>Community Review: ~10 days (varies by community engagement)<br></br>Committee Presentation: ~7 days (includes allowing time for scheduling)<br></br>Committee off-chain voting: ~7 days<hr></hr>The voting period has ended and your grant has been sucessful. If so, Congratulations! What to expect:<br></br><br></br><strong>Email Confirmation</strong> - This is from the Graph AdvocatesDAO, you will be required to complete KYC (Know Your Customer) via the link within the email. You will also be sent a Contract Agreement.<br></br><strong>Forum Post</strong> - An Advocate will also comment on your grant within the forum to confirm you have been successful with your grant.<br></br>KYC & Grant Agreement: ~7 days<br></br>On-chain voting: 14 days<br></br>You will be able to see your on-chain grant proposal, <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2/proposals" target="_blank" rel="noreferrer">here</a>.<br></br>After the 14 days if you have been succeful with the on-chain voting then you will be able to withdraw your grant.<hr></hr>To learn about withdrawing AdvocatesDAO grants, <a className="cla" onClick={this.handleAdvocateGrantWithdraw}><strong>click me</strong></a>!</a>
    , 
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrantWithdraw() {
  const message = this.createChatbotMessage(<a><strong>Withdrawing from DAOHaus</strong><hr></hr>A guide on withdrawing your GRT from the DAOHaus app can be found <a className="cla" href="https://docs.graphadvocates.com/community-grants/getting-grant-paid" target="_blank" rel="noreferrer">here</a>. Or you can <strong>watch the video tutorial below</strong>.If you need to move your funds from Gnosis Chain to Ethereum, you need to bridge your GRT, we suggest using OmniBridge, that you can access <a className="cla" href="https://omni.gnosischain.com/bridge" target="_blank" rel="noreferrer">here</a>. To watch a video showing how to use the OmniBridge to move your funds, you can watch it <a className="cla" href="https://drive.google.com/file/d/1-YB8JfBu8mkYzc1wAqopGsBIonaLHwq6/view" target="_blank" rel="noreferrer">here</a>.<br></br><br></br><iframe className="embed" isDark src="https://drive.google.com/file/d/1toZih5GIO-h3deJKQz9lr_WBY3_QqX0U/preview" width="100%" height="480" allow="autoplay"></iframe></a>
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
  const message = this.createChatbotMessage(<a>Below you will find the GRT contract and its details, make sure to double check the information in order to avoid adding a malicious contract.<br></br><br></br>Name: The Graph<br></br>Symbol: GRT<br></br>Network: Ethereum (ERC20)<br></br>Contract: 0xc944e90c64b2c07662a292be6244bdf05cda44a7<br></br>Decimals: 18<br></br><br></br>You can check it out on CoinMarketCap, <a className="cla" href="https://coinmarketcap.com/en/currencies/the-graph/" target="_blank" rel="noreferrer">here</a>.</a>
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
  const message = this.createChatbotMessage(<a>Whenever a Delegator wants to undelegate, their tokens are subject to a 26-day unbonding period. This means they cannot transfer their tokens, or earn any rewards for 26 days.<br></br><br></br>The undelegating/thawing period is there to avoid certain economic attacks from taking place. It has to coincide with the max allocation lifetime of 28 epochs. Given how the rewards system currently works, a shorter undelegating period would potentially allow delegation to be “double-counted” across multiple simultaneous allocations.<hr></hr>Whenever the indexer wants to force close them (manually), or automatically every maximum 28 epochs - max allocation lifetime. This is when rewards are distributed. <br></br><br></br>One thing to consider as well is choosing an Indexer wisely. If you choose an Indexer who was not trustworthy, or not doing a good job, you will want to undelegate, which means you will be losing a lot of opportunities to earn rewards, which can be just as bad as burning GRT.<br></br><br></br>To watch a tutorial on Undelegating GRT Tokens from The Graph click <a className="cla" href="https://www.youtube.com/watch?v=3GPY5On7vHc" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>I can help you with documentation and tutorial on how to choose an Indexer.<hr></hr>Undelegation takes 28 epoches (not days).<br></br>
  Every epoch is 6646 blocks length.<br></br><br></br>Before ETH PoS every block was about 13 seconds length, for this reason 28 epoches were about 28 days.<br></br>13s * 6646b * 28e = ~28 days<br></br><br></br>Now every block takes about 12.06 seconds.<br></br>12s * 6646b * 28e = 26 days</a>
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
  const message = this.createChatbotMessage(<a>The Graph Academy is all about education and learning more about The Graph. Their courses are designed to help you in getting started with The Graph and to broaden your knowledge about the ecosystem. And as a reward for learning more, you get a custom certificate.<br></br><br></br><a className="cla" href="https://thegraph.academy/course/delegator-course/" target="_blank" rel="noreferrer">Delegator Course</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/subgraph-developer-course/" target="_blank" rel="noreferrer">Subgraph Developer Course</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/curator-course/" target="_blank" rel="noreferrer">Curator Course</a><hr></hr>To register a free account or to login as a guest, visit the course you are interested in and click on “Start now” and “Sign up”. There is a step-by-step <a className="cla" href="https://thegraph.academy/certificates/" target="_blank" rel="noreferrer">guide</a> on how to do this.<hr></hr>If you would like to learn about Web3, just ask me! "How do I learn Web3 for free?"</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLearnWeb3() {
  const message = this.createChatbotMessage(<a><strong>UPDATED</strong> -Resources to learn Web3 Dev for <strong>FREE</strong><br></br><br></br>Fast track your web3 career through courses, projects and code. Totally free. Find out <a className="cla" href="https://university.alchemy.com/" target="_blank" rel="noreferrer">here</a>.<br></br><br></br><a className="cla" href="https://t.co/dm50GZ8lMP" target="_blank" rel="noreferrer">Ethereum</a><br></br><a className="cla" href="https://t.co/BfjoA5ynEt" target="_blank" rel="noreferrer">Solidity</a><br></br>A curated list of awesome Solidity resources, libraries, tools and more can be found at <a className="cla" href="https://github.com/bkrem/awesome-solidity" target="_blank" rel="noreferrer">Awesome Solidity.</a><br></br><a className="cla" href="https://t.co/GUMDW8WAru" target="_blank" rel="noreferrer">Blockchain</a><br></br><a className="cla" href="https://t.co/kzVyI8leHK" target="_blank" rel="noreferrer">Oracles</a><br></br><a className="cla" href="https://t.co/QRwZn0CvPl" target="_blank" rel="noreferrer">CryptoZombies</a> is an interactive school that teaches you all things technical about blockchains.<br></br>Put yourself to the test on <a className="cla" href="https://t.co/VVsmytm7CS" target="_blank" rel="noreferrer">SpeedRunEthereum.com</a> .<br></br>Alchemy's <a className="cla" href="https://t.co/BDni1gjuvJ" target="_blank" rel="noreferrer">Road to Web3</a> series, a 10-week, self-paced web3 developer program to help new blockchain devs go from beginner to advanced.<br></br>A completed guide to Web3 and Blockchain stack Twitter thread by Suhail Kakar can be found <a className="cla" href="https://twitter.com/suhailkakar/status/1552889172175642624?s=21&t=l_VTQ8NemlIWkCRne8f3bQ" target="_blank" rel="noreferrer">here</a> .<br></br><br></br>If you prefer to learn by watching video tutorials then there is no-one better to learn from than Nader Dabit. You will find 'The Complete Guide to Full Stack Web3 Development' tutorial below, be sure to check out the rest of his YouTube channel for more Web3 learning content.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=nRMo5jjgCr4'/></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://twitter.com/evabeylin?s=21&t=xlTfEQdph_MfbuUlhFrb0Q" target="_blank" rel="noreferrer"><strong>Eva Beylin</strong></a> has been the director of The Graph Foundation since Oct 2020. She is an investor in, and supporter of, core Ethereum technology through eGirl Capital and is leading the grwoth of The Graph. She is one of CoinDesk’s Most Influential 2022, read the full blog <a className="cla" href="https://www.coindesk.com/consensus-magazine/2022/12/05/eva-beylin-most-influential-2022/" target="_blank" rel="noreferrer">here</a>. She has led the distribution of over $135 million in grants to The Graph's core developers and the foundation's $50 million capital, led by Tiger Global. Watch her talk at Graph Day 2022 about Our Decenralization Journey, <a className="cla" href="https://m.youtube.com/watch?v=ef5LCku3IqQ" target="_blank" rel="noreferrer">here</a>. She made Forbes 2023 <a className="cla" href="https://www.forbes.com/profile/eva-beylin/?sh=34d711c95444" target="_blank" rel="noreferrer">30 Under 30</a>. You can get to know Eva by watch an interview, <a className="cla" href="https://m.youtube.com/watch?v=IoqI6z5l9y8" target="_blank" rel="noreferrer">here</a>.<br></br><br></br><a className="cla" href="https://twitter.com/theklineventure?s=21&t=8FTTZesLJJUxAVnVbmLgQg" target="_blank" rel="noreferrer"><strong>Tegan Kline</strong></a> has been the Co-Founder and Head of Business at Edge & Node since 2021. After raising $22.5 million to help The Graph build an open source tool that lets ethereum developers understand how their products are being used, she co-founded Edge & Node to help monetize the project. Edge & Node was originally funded with an 8% stake of the GRT token, which is now worth about $650 million. Kline has also led Edge & Node's investments into projects adjacent to The Graph, totaling $3.1 million in 2021. She made Forbes 2022 <a className="cla" href="https://www.forbes.com/profile/tegan-kline/?sh=1465202462f7" target="_blank" rel="noreferrer">30 Under 30</a>. You can get to know Kline by visiting her website, <a className="cla" href="https://www.tegankline.com/" target="_blank" rel="noreferrer">here</a>. Watch an interview with her, <a className="cla" href="https://youtu.be/yONuFNxJVrc" target="_blank" rel="noreferrer">here</a>. Or you can listen to a GRTiQ Podcast, <a className="cla" href="https://youtu.be/ZGHwTb92Rrg" target="_blank" rel="noreferrer">here</a>.<br></br><br></br><a className="cla" href="https://twitter.com/girlcalledreem?s=21&t=h9ZItE1mnaruz2uPiHkrLQ" target="_blank" rel="noreferrer"><strong>Reem Chahrour</strong></a> has been the Ecosystem Manager at The Graph since 2021. For anyone who has applied for a Graph Grant, or followed the work of any grantees, then they have already encountered Reem. She's an important asset to The Graph community and her work covers a variety of important initiatives. You can listen to her on the GRTiQ Podcast, <a className="cla" href="https://m.youtube.com/watch?v=3xfb0n99AzI" target="_blank" rel="noreferrer">here</a>. She talks about her entry into crypto and her work at The Graph Foundation, her advice for those seeking to apply for a grant (and where the foundation would like to see more submissions), the difference between the RFP and Grants programs, and the soon-to-launch Graph Advocates program.<br></br><br></br>When anyone mentions an Indexer they use the male pronouns. “He closes his allocation”. Wanting to highlight Women in Web3 working on Indexer Teams or running their own Indexer within The Graph ecosystem the Graphtronauts conducted a series of interviews with Women of Web3.<br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=WTdf9wEhSLg" target="_blank" rel="noreferrer">Women of Web3 - Ana from GraphOps</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=0D4_17B6ypY" target="_blank" rel="noreferrer">Women of Web3 - Anna from Citadel.One</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=chvIFfPfOjY" target="_blank" rel="noreferrer">Women of Web3 - IIinca from Chainode Tech</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=Z7UnQotqLVA" target="_blank" rel="noreferrer">Women of Web3 - Gabi from Stake2Earn</a></a>
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
  const message = this.createChatbotMessage(<a>Below you will find the <strong>Official</strong> Discord servers.<br></br><br></br><a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">Graph Protocol</a><br></br><br></br><a className="cla" href="https://discord.com/invite/aZtCCKPp34" target="_blank" rel="noreferrer">Graph AdvocatesDAO</a><hr></hr>Below you will find the <strong>Un-official</strong> Discord servers.<br></br><br></br><a className="cla" href="https://discord.com/invite/zqrwSFFW3F" target="_blank" rel="noreferrer">Graphrica</a></a>
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
  const message = this.createChatbotMessage(<a>Below you will find the <strong>Official</strong> Telegram group.<br></br><br></br><a className="cla" href="https://t.me/graphprotocol" target="_blank" rel="noreferrer">The Graph Official Community</a><hr></hr>Below you will find the <strong>Un-official</strong> Telegram groups from all over the world.<br></br><br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank">Graphtronauts</a><br></br><a className="cla" href="https://t.me/TheGraph_Germany" target="_blank">The Graph - Germany</a><br></br><a className="cla" href="https://t.me/thegraphfrenchchannel" target="_blank">The Graph - French</a><br></br><a className="cla" href="https://t.me/thegraphenespanol" target="_blank">The Graph - Español</a><br></br><a className="cla" href="https://t.me/thegraphRu" target="_blank">The Graph - Russia</a><br></br><a className="cla" href="https://t.me/thegraphitalia" target="_blank" rel="noreferrer">The Graph - Italia</a><br></br><a className="cla" href="https://t.me/graphprotocolTR" target="_blank" rel="noreferrer">The Graph - Turkey</a><br></br><a className="cla" href="https://t.me/TheGraphBR" target="_blank" rel="noreferrer">The Graph - Brasil</a><br></br><a className="cla" href="https://t.me/GraphProtocol_VN" target="_blank" rel="noreferrer">The Graph - Vietnam</a><br></br><a className="cla" href="https://t.me/Graph_Persian" target="_blank" rel="noreferrer">The Graph - Persian</a><br></br><a className="cla" href="https://t.me/thegraphjapan" target="_blank" rel="noreferrer">The Graph - Japan</a><br></br><a className="cla" href="https://t.me/TheGraph_Dutch" target="_blank" rel="noreferrer">The Graph - Dutch</a><br></br><a className="cla" href="https://t.me/GRTARAB" target="_blank" rel="noreferrer">The Graph - Arab</a><br></br>
  <a className="cla" href="https://t.me/Thegraph_KR" target="_blank" rel="noreferrer">The Graph - Korea</a><br></br><a className="cla" href="https://t.me/thegraphpk" target="_blank" rel="noreferrer">The Graph - Pakistan</a><br></br><a className="cla" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">The Graph - Indonesia</a><br></br><a className="cla" href="https://t.me/thegraphbangladesh" target="_blank">The Graph - Bangladesh</a><br></br><a className="cla" href="https://t.me/GraphProtocolCN" target="_blank">The Graph - China</a><br></br><a className="graphiql-link" href="https://t.me/TheGraphUkrainian" rel="noreferrer">The Graph - Ukraine</a><br></br><a className="graphiql-link" href="https://t.me/thegraph_pl" target="_blank" rel="noreferrer">The Graph - Poland</a><br></br><a className="graphiql-link" href="https://t.me/TheGraph_Nigeria" target="_blank" rel="noreferrer">The Graph - Nigeria</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Telegram End
handleTelegram() {
  const message = this.createChatbotMessage(<a>Below you will find the <strong>Official</strong> Telegram group.<br></br><br></br><a className="cla" href="https://t.me/graphprotocol" target="_blank" rel="noreferrer">The Graph Official Community</a><hr></hr>Below you will find the <strong>Un-official</strong> Telegram groups from all over the world.<br></br><br></br><a className="cla" href="https://t.me/TheGraph_Germany" target="_blank" rel="noreferrer">The Graph - Germany</a><br></br><a className="cla" href="https://t.me/thegraphfrenchchannel" target="_blank" rel="noreferrer">The Graph - French</a><br></br><a className="cla" href="https://t.me/thegraphenespanol" target="_blank" rel="noreferrer">The Graph - Español</a><br></br><a className="cla" href="https://t.me/thegraphRu" target="_blank" rel="noreferrer">The Graph - Russia</a><br></br><a className="cla" href="https://t.me/thegraphitalia" target="_blank" rel="noreferrer">The Graph - Italia</a><br></br><a className="cla" href="https://t.me/graphprotocolTR" target="_blank" rel="noreferrer">The Graph - Turkey</a><br></br><a className="cla" href="https://t.me/TheGraphBR" target="_blank" rel="noreferrer">The Graph - Brasil</a><br></br><a className="cla" href="https://t.me/GraphProtocol_VN" target="_blank" rel="noreferrer">The Graph - Vietnam</a><br></br><a className="cla" href="https://t.me/Graph_Persian" target="_blank" rel="noreferrer">The Graph - Persian</a><br></br><a className="cla" href="https://t.me/IndianGraphCommunity" target="_blank" rel="noreferrer">The Graph - Indian</a><br></br><a className="cla" href="https://t.me/thegraphjapan" target="_blank" rel="noreferrer">The Graph - Japan</a><br></br><a className="cla" href="https://t.me/TheGraph_Dutch" target="_blank" rel="noreferrer">The Graph - Dutch</a><br></br><a className="cla" href="https://t.me/GRTARAB" target="_blank" rel="noreferrer">The Graph - Arab</a><br></br><a className="cla" href="https://t.me/Thegraph_KR" target="_blank" rel="noreferrer">The Graph - Korea</a><br></br><a className="cla" href="https://t.me/thegraphpk" target="_blank" rel="noreferrer">The Graph - Pakistan</a><br></br><a className="cla" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">The Graph - Indonesia</a><br></br><a className="cla" href="https://t.me/thegraphbangladesh" target="_blank">The Graph - Bangladesh</a><br></br><a className="cla" href="https://t.me/GraphProtocolCN" target="_blank">The Graph - China</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Token Economics Start
handleTwitter() {
  const message = this.createChatbotMessage(<a>Below you will find the <strong>Official</strong> Twitter page.<br></br><br></br><a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">The Graph</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTokenEconomics() {
  const message = this.createChatbotMessage(<a>The Graph’s token economics are quite complex. Aside from a token issuance schedule and a token burn mechanism, The Graph Protocol unlocks vesting tokens during a 5 to 10-year time span.<hr></hr><table><tr className="indexer-table-header">
  <th>Total Token Supply = </th>
  <th> Initial Token Supply + </th>
  <th> Annual Issuance - </th>
  <th> Annual Burn</th>
</tr>
</table><br></br>The <strong>Annual Issuance</strong> formula is as follows:<br></br><br></br>networkGRTIssuance = 1000000011247641700<br></br><br></br>blocksYear = 2628000<br></br><br></br>Inflation = networkGRTIssuance * (10^-18) * blocksYear - 1<br></br><br></br>Inflation = 0,0299999999792... = 3% approx
<hr></hr><strong>GRT Token Economics Overview</strong><br></br><br></br><table>
<tr className="indexer-table">
  <td><strong>Token Symbol</strong></td>
  <td>GRT</td>
</tr>
<tr className="indexer-table">
  <td><strong>Token Name</strong></td>
  <td>Graph Token</td>
</tr>
<tr className="indexer-table">
  <td><strong>Initial Token Supply</strong></td>
  <td>10 billion GRT</td>
</tr>
<tr className="indexer-table">
  <td><strong>Annual Issuance</strong></td>
  <td>~3% (for year 1)</td>
</tr>
<tr className="indexer-table">
  <td><strong>Annual Burn</strong></td>
  <td>~1% of query fees & taxes</td>
</tr>
</table><hr></hr>You can read all about the token economics of The Graph <a className="cla" href="https://thegraph.academy/ecosystem/graph-token-economics/" target="_blank" rel="noreferrer">here</a>.</a>
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
  const message = this.createChatbotMessage(<a><strong>UPDATED</strong> -Clarifying the path forward for the hosted service<br></br><br></br>The hosted service will not abruptly end support for all chains. The hosted service will remain free-to-use on a per-chain basis, until core functionality is reached for each chain.<br></br><br></br>Subgraph developers will not be shut off from an essential service they rely on in production.<br></br><br></br>To elaborate (and to make a correction) on the original announcement that estimated the sunsetting of the hosted service to occur by the end of Q1 2023:<br></br>The transition process only applies to chains once they are supported on The Graph Network (which only includes Ethereum mainnet at the time of this writing, with Gnosis Chain coming soon).<br></br><br></br>The process is driven by specific exit criteria and Indexer readiness via the MIPs program, not dates any longer—developers should not expect chains to undergo deprecation phases until the necessary quality of service, core functionality and developer experience are offered on the decentralized network.
  Subgraph developers should not be concerned that support for their chain will be arbitrarily or quickly discontinued. Additionally, there is a growing community of support to hold your hand throughout the migration process. Core developers are also continuing to work on improvements to the billing process for query fees, cost of queries, quality of service, and the overall developer experience on the network. The Graph’s core contributors acknowledge developer concerns about migration and are working on solutions to create a more seamless network experience.<br></br><br></br>Feedback is always welcome via The Graph Discord, The Graph Forum, and by contacting migration@thegraph.foundation. Core devs and contributors are actively listening to users and incorporating changes to suit their needs.<br></br><br></br>Announcing plans to discontinue the hosted service without addressing user needs or providing an abundance of context was the wrong move. The Graph ecosystem is shifting course to make sure the voices of people depending on The Graph are heard and understood.<br></br><br></br>After nearly 4 years of supporting subgraphs for web3 dapps, the hosted service will be sunsetting in Q1 2023 with dapps migrating to the decentralized network. The hosted service was critical to The Graph’s decentralization journey, achieving product-market-fit and testing subgraph features with developers. Sunsetting the service is the greatest milestone since The Graph Network launched, and will enable all web3 applications to retrieve blockchain data in a truly decentralized way.<br></br><br></br>For the Official documentation visit, <a className="cla" href="https://thegraph.com/blog/sunsetting-hosted-service" target="_blank" rel="noreferrer">The Graph Foundation - The Road to Sunsetting the Hosted Service</a>.<hr></hr>For an easy to digest, in-depth Twitter thread made by <a className="cla" href="https://ahmadmardeni.substack.com/" target="_blank" rel="noreferrer">Ahmad Mardeni</a>, see <a className="cla" href="https://twitter.com/Mardeni01" target="_blank" rel="noreferrer">here</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Sunsetting Hosted Service  End
handlePowerDAOS() {
  const message = this.createChatbotMessage(<a><strong>Using The Graph to Power DAOs: Snapshot Case Study</strong><br></br><br></br>The Graph is a crucial protocol for enabling DAO members to accurately and easily read that data, while also making it effortless to track votes. Decentralized Autonomous Organizations, or DAOs, are organizations that are run by distributed communities, in contrast to centralized authorities. Because the bulk of decision-making in DAOs relies on on-chain data recorded on blockchains.<br></br><br></br><a className="cla" href="https://snapshot.org/#/" target="_blank" rel="noreferrer">Snapshot</a> is a decentralized governance protocol that enables people to coordinate and make collective decisions about the future of the organizations they participate in. Snapshot makes it possible for people to easily create and vote on proposals without incurring any gas fees. It’s a widely used tool for thousands of people working on protocols, collaborating in DAOs, and building innovative new projects in web3.<br></br><br></br>So far, Snapshot has recorded more than:<br></br>8.5M off-chain votes<br></br>8K protocols integrated<br></br>64.8k proposals.<hr></hr>Read <a className="cla" href="https://thegraph.com/blog/using-the-graph-for-daos-snapshot/" target="_blank" rel="noreferrer">here</a>, to find out how The Graph Powers Snapshot and How to Supercharge your Dapp.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Tenderize Start
handleTenderize() {
  const message = this.createChatbotMessage(<a>During Graph Day Tenderize were given a shoutout as the first liquid staking protocol. Users can deposit $GRT for tenderGRT (tGRT), which automatically compounds rewards and swap back and forth at will. $GRT holders can delegate through Tenderize, giving them tGRT. A tokenized version of the staked position that automatically compounds rewards and that can be instantly swapped back to GRT.<br></br><br></br>You can read a guide wrote by the Graphtronauts on How to use Tenderize Tokenized Stake for your GRT, <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-use-tenderize-tokenized-stake-for-your-grt-cf5fe38a6dc7" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>To get started, visit <a className="cla" href="https://app.tenderize.me/stakers/graph" target="_blank" rel="noreferrer">Tenderize</a>.<br></br><br></br>You can also read the Tenderize blog <a className="cla" href="https://blog.tenderize.me/" target="_blank" rel="noreferrer">here</a>.</a>
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
  const message = this.createChatbotMessage(<a>The Graph now reaches even more people in their primary languages thanks to the help of talented translators.<br></br><br></br>To find out more about the GRT community, see below.<br></br><br></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCommunity();
  }}><strong>Community</strong></button>
  <br></br><br></br><a className="cla" href="https://thegraph.com/blog/get-involved-with-graph-community-web3/" target="_blank" rel="noreferrer">23 Ways to Participate in The Graph Ecosystem</a></a>
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
  const message = this.createChatbotMessage(<a>Geo is a web3 decentralized browser built on The Graph, the pages are open and curated by the community. So you can vote on what is valuable and your vote counts. Geo is solving all the problems we currently have with our web2 browsers and it is opening a new window of innovation, a new internet where your privacy is the top priority. You do not have to know anything about crypto or blockchain to be able to use it. This is an experience to onboard the next 1B users to web3.<br></br><br></br>Geo is in beta and it is only supporting iPad and Mac devices at the moment, signup for the beta waitlist <a className="cla" href="https://edgeandnode.com/geo/" target="_blank" rel="noreferrer">here</a>.<br></br><br></br>To read a full blog about Geo created by <a className="cla" href="https://substack.com/profile/45913426-ahmad-mardni" target="_blank" rel="noreferrer">Ahmad Mardeni</a> see <a className="cla" href="https://ahmadmardeni.substack.com/p/geo-the-new-web3-browser-with-a-decentralization?s=r" target="_blank" rel="noreferrer">here</a>.<hr></hr><strong>UPDATED</strong> - Geo Genesis<br></br><br></br>Yaniv - Five years ago, a group of us saw the activity happening around Ethereum and decided to contribute by building The Graph. I saw The Graph's potential to be a global decentralized knowledge graph of all the world’s public knowledge and information. By using public infrastructure to organize and serve information, we could have better open and fair processes for influencing what information is considered the truth. Today we have a vibrant decentralized network and The Graph is solving the critical problem of efficiently accessing blockchain data for thousands of developers, but we still need to go a step further to see the full vision come to life.<br></br><br></br>Today I’m excited to share that we’ve spun out a separate company called Geo that I will be leading alongside some very talented engineers and designers. This is the very beginning of this journey and building Geo into its full form will undoubtedly take a lot of experimentation, iteration, and collaboration.<br></br><br></br>You can read the full blog, <a className="cla" href="https://www.geobrowser.io/blog/post/introducing-geo-genesis?s=09" target="_blank" rel="noreferrer">here</a>.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/i/status/1532418078700580869'/></a>
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
  const message = this.createChatbotMessage(<a>StreamingFast is a protocol infrastructure company that excels at building highly scalable, cross-chain architecture for streaming blockchain data. The $60M Core Dev Grant is the first of its kind, pioneering a new frontier of collaborative innovation where communities and companies are aligned to build a radically more open Internet.<br></br><br></br> StreamingFast will contribute its technology, developer talent, and resources to advance The Graph as a protocol and ecosystem. Relevant IP and products will be open-sourced under The Graph Protocol Github repo and API products will migrate to The Graph Network for backend indexing and querying support.<br></br><br></br>The Graph Foundation Awards $60 Million Grant to StreamingFast to join The Graph as a Core Developer Team, read <a className="cla" href="https://thegraph.com/blog/core-dev-grant" target="_blank" rel="noreferrer">here</a>.<hr></hr>Substreams is a powerful blockchain indexing technology, developed for The Graph Network. It enables you to write Rust modules, composing data streams alongside the community, and provides extremely high performance indexing by virtue of parallelization, in a streaming-first fashion. It has all the benefits of the Firehose, like low-cost caching and archiving of blockchain data, high throughput processing, and cursor-based reorgs handling.<br></br><br></br>To find documentation on SubStreams see <a className="cla" href="https://substreams.streamingfast.io/" target="_blank" rel="noreferrer">here</a>.<br></br>Or you can read the blog from The Graph about <a className="cla" href="https://thegraph.com/blog/substreams-parallel-processing" target="_blank" rel="noreferrer">Substreams: Massively Faster Indexing Performance for Subgraphs</a>.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=qWxffTKpciU'/><br></br>Join the <a href="https://discord.com/invite/jZwqxJAvRs" target="_blank" rel="noreferrer">StreamingFast Discord server</a> or check them out <a className="cla" href="https://www.streamingfast.io/" target="_blank" rel="noreferrer">here</a>.</a>
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
  const message = this.createChatbotMessage(<a><strong>A community for Delegators, Built by Delegators.</strong><br></br>The Graphtronauts are a group dedicated to facilitating the chat for those who wish to HOLD $GRT and talk about the fundamentals of The Graph project. Not only are they the largest non official community of long term $GRT holders for The Graph ecosystem, their goal is to help people in their journey to become a delegator for The Graph.<br></br><br></br><strong>'We rise by lifting others' - Graphtronauts | Founded 16th January 2021</strong><br></br><br></br>Learn more about the Graphtronauts by listening to this <a className="cla" href="https://www.grtiq.com/grtiq-podcast-35-the-graphtronauts/" target="_blank" rel="noreferrer">GRTiQ Podcast</a> with Baghe and Chris Ewing.<br></br>And this <a className="cla" href="https://www.grtiq.com/grtiq-podcast-90-paolo-diomede/" target="_blank" rel="noreferrer">GRTiQ Podcast</a> with Paolo Diomede.<br></br>You can join the community via the following links:<br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank" rel="noreferrer">Telegram</a><br></br><a className="cla" href="https://twitter.com/graphtronauts" target="_blank" rel="noreferrer">Twitter</a><br></br><a className="cla" href="https://www.graphtronauts.com/#/" target="_blank" rel="noreferrer">Graphtronauts App</a><br></br><a className="cla" href="https://old.graphtronauts.com/" target="_blank" rel="noreferrer">Website</a><br></br><a className="cla" href="https://www.youtube.com/channel/UCPAUeNaRtBV-jdSKY8wmcXg" target="_blank" rel="noreferrer">YouTube</a><br></br><a className="cla" href="https://www.reddit.com/r/Graphtronauts/" target="_blank" rel="noreferrer">Reddit</a><hr></hr>The Graphtronauts Indexer (<a className="cla" href="https://thegraph.com/explorer/profile/0x0c3aab9f49c01070ec359aae4778fcbb01d2fbef?view=Indexing" target="_blank" rel="noreferrer">graphtronauts-indexer.eth</a>) is now live and ready for delegations! See the Tweet below for more information, join their <a className="cla" href="https://t.co/dDUb7NHaPY" target="_blank" rel="noreferrer">Discord</a> and follow on Twitter for updates.<br></br><Embed className="embed" isDark url='https://twitter.com/graphtronauts_x/status/1593310558798979072?s=20&t=2FCQMWbItkh1MnXmrHBVIA'/>
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
    this.handleQueryPython();
    this.handleButtonSubgraph();
  }}><strong>Query using Python</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
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

export default UKRActionProvider;