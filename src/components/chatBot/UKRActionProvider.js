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
  <br></br><br></br>Скасування делегування займає 26 днів, оскільки це максимальна тривалість розподілу.<br></br><br></br>Graphtronauts також створили свої власні гайди:<br></br><br></br><a className="cla" href="https://blog.graphtronauts.com/%D1%8F%D0%BA-%D1%81%D1%82%D0%B5%D0%B9%D0%BA%D0%B0%D1%82%D0%B8-%D1%81%D0%B2%D0%BE%D1%97-%D1%82%D0%BE%D0%BA%D0%B5%D0%BD%D0%B8-%D0%B7-the-graph-%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D0%B3%D0%B0%D0%B9%D0%B4-%D1%8F%D0%BA-%D1%81%D1%82%D0%B0%D1%82%D0%B8-delegator-6dc4e47de204" target="_blank">Повний гайд, як стати делегатом</a><br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s" target="_blank">Як користуватися гаманцем Coinbase для стейкінгу</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/binance-staking-vs-delegating-with-the-graph-network-b4ba7e259b73" target="_blank">Стейкінг на Binance VS Делегування в мережі The Graph</a><br></br><br></br><a className="cla" href="https://blog.graphtronauts.com/faq-%D0%B4%D0%BB%D1%8F-the-graph-delegators-2ab6565c76a3" target="_blank">FAQ для делегатів The Graph</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank">Як зменшити витрати на газ для делегування своїх токенів GRT</a><br></br><br></br>Щоб дізнатися середню вартість транзакції за делегування, відвідайте <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank">Graphtronauts</a> і виберіть "Fees".</a>
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
  const message = this.createChatbotMessage(<a>Вам потрібно 100 000 GRT, щоб стати індексатором, і необхідна інфраструктура. Це мінімальна сума, яку потрібно зробити, щоб зареєструвати вузол індексатора в мережі.<br></br><br></br>Індексаторам потрібні значні навички DevOps і необхідне обладнання.<br></br ><br></br>Індексатори «караються» за зміну параметрів делегування ринком. За інших рівних умов команда очікує, що індексатори, які встановлюють менші періоди відновлення, отримають менше делегування.
  Команда також хотіла б створити інструменти, які полегшать виявлення індексаторів, які змінюють параметри делегування нерегулярно або занадто часто. Деякі з цих сигналів можуть бути включені в майбутню версію провідника.<br></br><br></br>Ви не зможете змінити свою адресу індексатора протягом наступних двох років, починаючи з грудня 2020 року.</a>
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
  const message = this.createChatbotMessage(<a>Газ - це термін для кількості ефіру (ETH), рідної криптовалюти Ethereum, необхідної мережі для взаємодії користувача з мережею.<br></br><br></br>Ціна бензину - це не те, над чим команда Graph має контроль. Ціна на бензин зростає, коли мережа Ethereum перевантажена або сильно використовується.<br></br><br></br>Щоб дізнатися середню вартість транзакції делегування прямо зараз, відвідайте <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">тут</a> додаток Graphtronauts і виберіть Комісії.<br></br><br></br>Вказівки щодо того, як знизити вартість палива, щоб делегувати свої токени GRT, дивіться <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Тарифи на газ Ethereum дивіться <a className="cla" href="https://ethereumprice.org/gas/" target="_blank" rel="noreferrer">тут</a>.</a>
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
  const message = this.createChatbotMessage(<a>Щоб переглянути карту всіх місць індексування, відвідайте програму <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> і виберіть.</a>
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
  const message = this.createChatbotMessage(<a>Щоб порівняти індексатори, відвідайте програму <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> і виберіть.<br></br><br></br>Натисніть кнопку, а потім виберіть до п’яти індексаторів, які ви хочете порівняти.<br></br ><br></br>Вибравши, натисніть кнопку нижче.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePodcast() {
  const message = this.createChatbotMessage(<a><strong>Що таке GRTiQ?</strong><br></br><br></br><a className="cla" href="https://www.grtiq.com/" target="_blank" rel="noreferrer">GRTiQ</a> генерує ринковий інтелект за допомогою аналізу, досліджень, оптимізації та освіти.<br></br><br></br>Аналіз ринку - Забезпечте аналіз ринку та продуктивність, щоб делегатори могли краще зрозуміти динаміку ринку.<br></br><br></br>Indexer Research - Проведення індексованих досліджень, які делегатори можуть використовувати для визначення можливостей і партнерства.<br></br><br></br>Оптимізація винагород – Створюйте та публікуйте дані, посібники та аналітику, щоб допомогти делегаторам оптимізувати свої прибутки.<br></br><br></br>Екосистемна освіта - Пропонуйте постійні освітні ресурси та інформацію про всі аспекти екосистеми The Graph.<hr></hr>Ви можете слухати подкасти GRTiQ <a className="cla" href="https://www.grtiq.com/podcast/" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Щоб бути в курсі GRTiQ, ви можете стежити за ними в <a className="cla" href="https://twitter.com/grt_iq" target="_blank" rel="noreferrer">Twitter</a>, <a className="cla" href="https://www.youtube.com/channel/UCxhFN47AlCDx1Qoaw1oSQ5A" target="_blank" rel="noreferrer">YouTube</a> та <a className="cla" href="https://www.instagram.com/thegraphiq/" target="_blank" rel="noreferrer">Instagram</a>.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/grt_iq/status/1617269631403831297?s=20&t=C_TtsLrGHQ0b92xQs527lQ'/></a>
   ,
   );
   this.setState((prev) => ({ 
     ...prev,
     messages: [...prev.messages, message],
   }));
 }

 handleGraphSocial() {
   const message = this.createChatbotMessage(<a><strong><a className="cla" href="https://twitter.com/graphsocial1?s=21&t=f_BFECU3y4NfkRXocWA5kQ" target="_blank" rel="noreferrer">Graph Social</a></strong><br></br><br></br>Міжнародна зустріч web3, що сприяє зростанню екосистеми Graph. Організатором виступив <a className="cla" href="https://twitter.com/Mardeni01" target="_blank" rel="noreferrer">Ahmad Mardeni</a>.<br></br><br></br>Перша зустріч Graph Social web3 відбулася в Дубаї 8 жовтня 2022 року, 6-10:XNUMX за тихоокеанським стандартним часом, де взяли участь понад 100 осіб. Подія, що висвітлює, що таке The Graph, які останні досягнуті віхи та як долучитися!<hr></hr><strong>Спікери</strong><br></br><br></br>Ahmad Mardeni<br></br>Salim Hadri<br></br>Shing Lam from <a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><br></br><a className="cla" href="https://twitter.com/9001sabella" target="_blank" rel="noreferrer">Isabella</a> from <a className="cla" href="https://twitter.com/routerprotocol" target="_blank" rel="noreferrer">Router Protocol</a><br></br><a className="cla" href="https://twitter.com/farhajmayan" target="_blank" rel="noreferrer">Farhaj Mayan</a> from <a className="cla" href="https://twitter.com/_buildspace" target="_blank" rel="noreferrer">Buildspace</a><br></br><a className="cla" href="https://twitter.com/dudhat_paresh" target="_blank" rel="noreferrer">Paresh Dudhat</a> from <a className="cla" href="https://twitter.com/infy_protocol" target="_blank" rel="noreferrer">Infy Protocol</a><br></br>Rashmi Padhy<br></br><br></br><strong>Спонсори</strong><br></br><br></br><a className="cla" href="https://twitter.com/tenderize_me" target="_blank" rel="noreferrer">Tenderize</a><br></br><a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><hr></hr>Інтерв'ю з заходу з Ахмадом Мардені та студією <a className="cla" href="https://twitter.com/MultiartStudio" target="_blank" rel="noreferrer">MultiArt</a> ви можете подивитися  нижче!<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=KFUxrs10gpI'/></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-15947" target="_blank" rel="noreferrer">The Graph Advocates</a> - це ініціатива, керована спільнотою, яка служить порталом у веб-3 для людей у всьому світі. Адвокати мають унікальну можливість навчатися та робити свій внесок у спільноту The Graph та місію web3. Будь-хто може стати адвокатом, а згодом приєднатися до Graph AdvocatesDAO.<hr></hr><strong><underline>Євангеліст Advocate Roles</underline></strong><br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12947" target="_blank" rel="noreferrer"><strong>Event</strong></a><br></br>Проводьте місцеві заходи, відвідуйте регіональні заходи та беріть участь в особистих або онлайн-заходах спільноти.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12927" target="_blank" rel="noreferrer"><strong>Творець контенту</strong></a><br></br>Створюйте контент про web3 і The Graph, включаючи статті, відео, інфографіку, меми або GIF-файли.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13207" target="_blank" rel="noreferrer"><strong>Перекладач тексту</strong></a><br></br>Перекладіть графік та іншу документацію, матеріали та соціальні дописи спільнотою на інші мови.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12667" target="_blank" rel="noreferrer"><strong>Community Care</strong></a><br></br>Опублікуйте відповіді на запитання або поділіться освітніми ресурсами на форумі Graph, Telegram, Discord або Reddit.<br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13167" target="_blank" rel="noreferrer"><strong>Технічний вчитель</strong></a><br></br>Навчайте інших, як активно брати участь та робити внесок у веб3 та екосистему The Graph. <br></br><br></br><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-13407" target="_blank" rel="noreferrer"><strong>Web3 Welcomer</strong></a>
  <br></br>Прискорення більшої освіти та прийняття web3 та The Graph у всьому світі.<hr></hr>Ви можете подати заявку на посаду адвоката графа <a className="cla" href="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Щоб дізнатися більше про те, що потрібно, щоб бути адвокатом, дивіться <a className="cla" href="https://thegraph.com/ecosystem/advocacy/" target="_blank" rel="noreferrer">тут</a>.<hr></hr>Щоб дізнатися про гранти AdvocatesDAO , <a className="cla" onClick={this.handleAdvocateGrant}><strong>натисніть на мене</strong></a>!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrant() {
  this.handleAdvocateGrantWithdraw = this.handleAdvocateGrantWithdraw.bind(this);
  const message = this.createChatbotMessage(<a><a className="cla" href="https://share-docs.clickup.com/37437860/d/h/13pgd4-12827/ffae7924a657459/13pgd4-12762" target="_blank" rel="noreferrer"><strong>Графік АдвокатиDAO Грант</strong></a><br></br><br></br>Ви можете подати заявку на  грант AdvocatesDAO <a className="cla" href="http://grants.graphadvocates.com/" target="_blank" rel="noreferrer">тут</a>.<hr></hr><strong>Початковий огляд процесу гранту</strong><br></br>Ваш грант буде розміщено на форумі Graph AdvocatesDAO <a className="cla" href="https://forum.graphadvocates.com/" target="_blank" rel="noreferrer">тут</a>. Член грантового комітету DAO оцінить відповідність вашого гранту. <br></br>Громадські обговорення - Ширша спільнота запрошується надати зворотній зв'язок щодо грантів, а також проголосувати на Форумі щодо того, чи підтримують вони його. Під час цього процесу члени спільноти або члени DAO можуть задавати питання на Форумі, щоб зібрати більше конкретики щодо гранту, щоб краще зрозуміти його обсяг. Це важлива фаза процесу, протягом якого формуються думки. <br></br>Презентація комітету - Успішна заявка на грант також включатиме живу презентацію грантовому комітету DAO. Ці зустрічі відбуваються в публічно-голосовому чаті сервера <a className="cla" href="https://discord.gg/XgT3s9XY" target="_blank" rel="noreferrer">Discord</a> від DAO і заплановані в трьох різних часових слотах (10:00 | 18:00  | 22:00 UTC) щовівторка для розміщення різних часових поясів по всьому світу. Це важливі точки дотику для членів грантового комітету, щоб отримати впевненість у тому, чи підтримувати грант чи ні. Будь ласка, приходьте підготовленими, щоб представити огляд вашого гранту та відповісти на запитання. 
  Рішення про грант - Ви побачите ряд різних голосів та опитувань, що з'являються протягом усього процесу надання гранту. Це неймовірно важливі сигнали, які інформують членів DAO під час голосування. Офіційне рішення DAO про фінансування успішних грантів відбудеться в самому кінці процесу, де всі члени DAO голосуватимуть в мережі в <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2" target="_blank" rel="noreferrer">DAOHaus</a>. (примітка: деякі менші гранти можуть бути проголосовані грантовим комітетом поза мережею) <br></br> Очікувані терміни - DAO зобов'язується належним чином перевірити всі заявки на гранти. DAO також встановив часові шкали в мережі та поза мережею, які дозволяють широко залучати спільноту, яка живе в різних часових поясах з різним ступенем доступності для участі.<br></br><br></br><hr></hr>Щоб дізнатися про відкликання  грантів AdvocatesDAO, <a className="cla" onClick={this.handleAdvocateGrantWithdraw}><strong>натисніть на мене</strong></a>!</a>
    , 
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrantWithdraw() {
  const message = this.createChatbotMessage(<a><strong>Подальший процес гранту AdvocatesDAO Отже, </strong><hr></hr>тепер ви подали свій грант через форму, він був розміщений на форумі, де спільнота та адвокати голосують та задають запитання. Що далі?<br></br><br></br>DAO має на меті обробити успішну заявку на грант протягом 1-2 місяців. Нижче наведено огляд ключових кроків, через які проходить успішна заявка на грант:Огляд спільноти: ~10 днів (залежить від залучення спільноти)<br></br>Презентація комітету: ~7 днів (включає надання часу для планування)<br></br>Голосування комітету поза мережею: ~7 днів
  <br></br><br></br>Період голосування закінчився, і ваш грант був успішним. Якщо так, то вітаємо! Чого очікувати:<br></br><br></br>Підтвердження електронною поштою - Це від Graph AdvocatesDAO, вам потрібно буде заповнити KYC (Знай свого клієнта) за посиланням в електронному листі. Вам також буде надіслано договір підряду.<br></br><br></br>Повідомлення на форумі  - Адвокат також прокоментує ваш грант на форумі, щоб підтвердити, що ви досягли успіху зі своїм грантом.<br></br><br></br>KYC & Грантова угода: ~7 днів<br></br>Онлайн-голосування: 14 днів<br></br>Ви зможете побачити свою пропозицію гранту в мережі <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2/proposals" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Через 14 днів, якщо ви досягли успіху в мережевому голосуванні, ви зможете відкликати свій грант.<br></br><br></br>Посібник з виведення вашого GRT з програми DAOhaus можна знайти <a className="cla" href="https://docs.graphadvocates.com/community-grants/getting-grant-paid" target="_blank" rel="noreferrer">тут</a>. Або ви можете подивитися відеоурок нижче. Якщо вам потрібно  перемістити свої кошти з Gnosis Chain до Ethereum, вам потрібно подолати свій GRT, ми пропонуємо використовувати OmniBridge, до якого ви можете отримати доступ <a className="cla" href="https://omni.gnosischain.com/bridge" target="_blank" rel="noreferrer">тут</a>. Щоб переглянути відео, в якому показано, як використовувати OmniBridge для переміщення своїх коштів, ви можете переглянути його <a className="cla" href="https://drive.google.com/file/d/1-YB8JfBu8mkYzc1wAqopGsBIonaLHwq6/view" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br><iframe className="embed" isDark src="https://drive.google.com/file/d/1toZih5GIO-h3deJKQz9lr_WBY3_QqX0U/preview" width="100%" height="480" allow="autoplay"></iframe></a>
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
  const message = this.createChatbotMessage(<a>
    Нижче ви знайдете контракт GRT та його деталі. Перевірте інформацію ще раз, щоб уникнути додавання зловмисного контракту.<br></br><br></br>Назва: The Graph<br></br>Символ: GRT<br></br>Мережа: Ethereum (ERC20)<br></br>Контракт: 0xc944e90c64b2c07662a292be6244bdf05cda44a7<br></br>Десяткові знаки: 18<br></br><br></br>Ви можете перевірити це на CoinMarketCap, <a className="cla" href="https://coinmarketcap.com/en/currencies/the-graph/" target="_blank" rel="noreferrer">тут</a>.</a>
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
  const message = this.createChatbotMessage(<a>Щоразу, коли делегат хоче скасувати делегування, на його токени поширюється 28-денний період від'єднання. Це означає, що вони не можуть передати свої токени або отримати винагороду протягом 28 днів.<br></br><br></br>Період делегування/відлиги існує, щоб запобігти певним економічним атакам. Він повинен відповідати максимальному терміну служби розподілу 28 епох. З огляду на те, як зараз працює система винагород, коротший період ліквідації делегування потенційно дозволить «рахувати двічі» делегування при декількох одночасних завданнях.<hr></hr>Кожен раз індексатор хоче примусово замкнути його (вручну), або автоматично кожен максимум 28 епох: максимальна тривалість завдання. Це коли винагороди розподіляються.<br></br><br></br>Одне, що слід врахувати, це також розумно вибрати індексатор. Якщо ви виберете індексатор, який не заслуговував на довіру або не виконував хорошу роботу, ви захочете делегувати повноваження, а це означає, що ви втратите багато можливостей отримати винагороду, що може бути так само погано, як і спалювання GRT.<br></br><br></br>Щоб отримати посібник з визначення делегування токенів GRT The Graph, натисніть <a className="cla" href="https://www.youtube.com/watch?v=3GPY5On7vHc" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br><a className="cla" href="https://blog.graphtronauts.com/%D1%8F%D0%BA-%D1%81%D0%BA%D0%B0%D1%81%D1%83%D0%B2%D0%B0%D1%82%D0%B8-%D0%B4%D0%B5%D0%BB%D0%B5%D0%B3%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F-%D1%81%D0%B2%D0%BE%D1%97%D1%85-%D1%82%D0%BE%D0%BA%D0%B5%D0%BD%D1%96%D0%B2-grt-%D0%B2-the-graph-55248c99bb80" target="_blank" rel="noreferrer">Як скасувати делегування своїх токенів GRT в The Graph</a>
  <br></br><br></br>Я можу допомогти вам з документацією та підручником про те, як вибрати індексатор.</a>
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
  const message = this.createChatbotMessage(<a>Графічна академія - це все про освіту та вивчення більше про The Graph. Їхні курси розроблені, щоб допомогти вам розпочати роботу з The Graph та розширити свої знання про екосистему. А в нагороду за те, що ви дізналися більше, ви отримуєте іменний сертифікат.<br></br><br></br><a className="cla" href="https://thegraph.academy/course/delegator-course/" target="_blank" rel="noreferrer">Курс делегатора</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/subgraph-developer-course/" target="_blank" rel="noreferrer">Курс розробника підграфів</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/curator-course/" target="_blank" rel="noreferrer">Кураторський курс</a><hr></hr>Щоб зареєструватися для безкоштовного облікового запису або увійти в якості гостя, відвідайте цікавий для вас курс і натисніть «Почати зараз» і «Зареєструватися». Існує покрокове <a className="cla" href="https://thegraph.academy/certificates/" target="_blank" rel="noreferrer">керівництво</a>, як це зробити.<hr></hr>Якщо ви хочете дізнатися більше про Web3, запитайте мене! "Як вивчити Web3 безкоштовно?"</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLearnWeb3() {
  const message = this.createChatbotMessage(<a>ОНОВЛЕНО -Ресурси для вивчення Web3 Dev БЕЗКОШТОВНО<br></br><br></br>Швидко відстежуйте свою кар'єру в Інтернеті3 за допомогою курсів, проектів та коду. Абсолютно безкоштовно. Дізнайтеся <a className="cla" href="https://university.alchemy.com/" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br><a className="cla" href="https://t.co/dm50GZ8lMP" target="_blank" rel="noreferrer">Ethereum</a><br></br><a className="cla" href="https://t.co/BfjoA5ynEt" target="_blank" rel="noreferrer">Solidity</a><br></br>Підібраний список чудових ресурсів, бібліотек, інструментів тощо можна знайти на <a className="cla" href="https://github.com/bkrem/awesome-solidity" target="_blank" rel="noreferrer">Awesome Solidity.</a><br></br><a className="cla" href="https://t.co/GUMDW8WAru" target="_blank" rel="noreferrer">Blockchain</a><br></br><a className="cla" href="https://t.co/kzVyI8leHK" target="_blank" rel="noreferrer">Oracles</a><br></br><a className="cla" href="https://t.co/QRwZn0CvPl" target="_blank" rel="noreferrer">CryptoZombies</a> це інтерактивна школа, яка навчить вас всьому технічному про блокчейни.<br></br>Поставте себе на випробування на <a className="cla" href="https://t.co/VVsmytm7CS" target="_blank" rel="noreferrer">SpeedRunEthereum.com</a> .<br></br>Alchemy's <a className="cla" href="https://t.co/BDni1gjuvJ" target="_blank" rel="noreferrer">Road to Web3</a>, 10-тижнева програма для розробників web3, що розвивається самостійно, щоб допомогти новим розробникам блокчейну перейти від початківця до просунутого.<br></br>Повний посібник із ланцюжка Twitter Web3 та стека блокчейну від Сухайла Какара можна знайти <a className="cla" href="https://twitter.com/suhailkakar/status/1552889172175642624?s=21&t=l_VTQ8NemlIWkCRne8f3bQ" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Якщо ви віддаєте перевагу вчитися, переглядаючи відеоуроки, то немає нікого, у кого краще вчитися, ніж у Надера Дабіта. Нижче ви знайдете підручник «Повний посібник із розробки повного стека Web3», обов'язково перегляньте решту його каналу YouTube, щоб отримати більше навчального вмісту Web3.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=nRMo5jjgCr4'/></a>
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
    <a className="cla" href="https://twitter.com/evabeylin?s=21&t=xlTfEQdph_MfbuUlhFrb0Q" target="_blank" rel="noreferrer"><strong>Eva Beylin</strong></a> є директором The Graph Foundation з жовтня 2020 року. Вона є інвестором і прихильником основної технології Ethereum через eGirl Capital і керує роботою The Graph. Вона є однією з найвпливовіших людей 2022 року за версією CoinDesk, читайте повний текст блогу <a className="cla" href="https://www.coindesk.com/consensus-magazine/2022/12/05/eva-beylin-most-influential-2022/" target="_blank" rel="noreferrer">тут</a>. Вона керувала розподілом грантів на суму понад $135 млн серед основних розробників The Graph та капіталу в розмірі $50 млн на чолі з Tiger Global. Послухати її виступ на Graph Day 2022 про те, як ми просуваємося до децентралізації, можна <a className="cla" href="https://m.youtube.com/watch?v=ef5LCku3IqQ" target="_blank" rel="noreferrer">тут</a>. Вона увійшла до списку Forbes 2023 <a className="cla" href="https://www.forbes.com/profile/eva-beylin/?sh=34d711c95444" target="_blank" rel="noreferrer">30 Under 30</a>. Ви можете познайомитися з Eva ближче, подивившись інтерв'ю <a className="cla" href="https://m.youtube.com/watch?v=IoqI6z5l9y8" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>
    <a className="cla" href="https://twitter.com/theklineventure?s=21&t=8FTTZesLJJUxAVnVbmLgQg" target="_blank" rel="noreferrer"><strong>Tegan Kline</strong></a> є співзасновницею та керівницею бізнесу в Edge & Node з 2021 року. Після того, як вона зібрала $22,5 млн, щоб допомогти The Graph створити інструмент з відкритим вихідним кодом, який дозволяє розробникам ethereum розуміти, як використовуються їхні продукти, вона стала співзасновницею Edge & Node, щоб допомогти монетизувати проєкт. Спочатку Edge & Node була профінансована шляхом 8% токенів GRT, які зараз коштують близько 650 мільйонів доларів. Kline також керувала інвестиціями Edge & Node в проєкти, суміжні з The Graph, на загальну суму $3,1 млн у 2021 році. Вона увійшла до списку Forbes 2022 <a className="cla" href="https://www.forbes.com/profile/tegan-kline/?sh=1465202462f7" target="_blank" rel="noreferrer">30 Under 30</a>. Ви можете познайомитися з нею ближче, відвідавши її сайт, <a className="cla" href="https://www.tegankline.com/" target="_blank" rel="noreferrer">тут</a>. Переглянути інтерв'ю про неї можна <a className="cla" href="https://youtu.be/yONuFNxJVrc" target="_blank" rel="noreferrer">тут</a>. Або послухати подкаст GRTiQ <a className="cla" href="https://youtu.be/ZGHwTb92Rrg" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>
    <a className="cla" href="https://twitter.com/girlcalledreem?s=21&t=h9ZItE1mnaruz2uPiHkrLQ" target="_blank" rel="noreferrer"><strong>Reem Chahrour</strong></a> працює екосистемним менеджером у The Graph з 2021 року. Всі, хто подавав заявку на грант від Graph або слідкував за роботою будь-якого отримувача гранту, вже зустрічалися з нею. Вона є важливим надбанням для спільноти The Graph, і її робота охоплює безліч важливих ініціатив. Ви можете послухати про неї в подкасті GRTiQ, 
  <a className="cla" href="https://m.youtube.com/watch?v=3xfb0n99AzI" target="_blank" rel="noreferrer">тут</a>. Вона розповідає про свій прихід в криптовалюту і роботу в The Graph Foundation, дає поради тим, хто хоче подати заявку на грант (і про те, де фонд хотів би бачити більше заявок), про різницю між RFP і грантовими програмами, а також про програму Graph Advocates, яка незабаром буде запущена.
  <br></br><br></br>Коли хтось згадує про індексаторів, вони використовують чоловічий рід займенників. "Він закриває свій розподіл". Бажаючи висвітлити жінок у Web3, які працюють у командах індексаторів або мають власний індексатор в екосистемі The Graph, Graphtronauts провели серію інтерв'ю з жінками з Web3.<br></br><br></br>
  <a className="cla" href="https://www.youtube.com/watch?v=WTdf9wEhSLg" target="_blank" rel="noreferrer">Жінки у Web3 - Ana з GraphOps
</a><br></br>
<a className="cla" href="https://www.youtube.com/watch?v=0D4_17B6ypY" target="_blank" rel="noreferrer">Жінки у Web3 - Anna з Citadel.One</a><br></br>
<a className="cla" href="https://www.youtube.com/watch?v=chvIFfPfOjY" target="_blank" rel="noreferrer">Жінки у Web3 - IIinca з Chainode Tech</a><br></br>
<a className="cla" href="https://www.youtube.com/watch?v=Z7UnQotqLVA" target="_blank" rel="noreferrer">Жінки у Web3 - Gabi з Stake2Earn</a></a>
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
  const message = this.createChatbotMessage(<a>Нижче перераховані <strong>Офіційні</strong> сервери Discord.<br></br><br></br><a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">Graph Protocol</a><br></br><br></br><a className="cla" href="https://discord.com/invite/aZtCCKPp34" target="_blank" rel="noreferrer">Graph AdvocatesDAO</a><hr></hr>Нижче представлені <strong>неофіційні</strong> сервери Discord.<br></br><br></br><a className="cla" href="https://discord.com/invite/zqrwSFFW3F" target="_blank" rel="noreferrer">Graphrica</a></a>
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
  const message = this.createChatbotMessage(<a>Нижче ви можете ознайомитися з офіційною групою в Telegram.<br></br><br></br><a className="cla" href="https://t.me/graphprotocol" target="_blank" rel="noreferrer">The Graph Official Community</a><hr></hr>Нижче ви можете знайти неофіційні Telegram-групи з усього світу.<br></br><br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank">Graphtronauts</a><br></br><a className="cla" href="https://t.me/TheGraph_Germany" target="_blank">The Graph - Germany</a><br></br><a className="cla" href="https://t.me/thegraphfrenchchannel" target="_blank">The Graph - French</a><br></br><a className="cla" href="https://t.me/thegraphenespanol" target="_blank">The Graph - Español</a><br></br><a className="cla" href="https://t.me/thegraphRu" target="_blank">The Graph - Russia</a><br></br><a className="cla" href="https://t.me/thegraphitalia" target="_blank" rel="noreferrer">The Graph - Italia</a><br></br><a className="cla" href="https://t.me/graphprotocolTR" target="_blank" rel="noreferrer">The Graph - Turkey</a><br></br><a className="cla" href="https://t.me/TheGraphBR" target="_blank" rel="noreferrer">The Graph - Brasil</a><br></br><a className="cla" href="https://t.me/GraphProtocol_VN" target="_blank" rel="noreferrer">The Graph - Vietnam</a><br></br><a className="cla" href="https://t.me/Graph_Persian" target="_blank" rel="noreferrer">The Graph - Persian</a><br></br><a className="cla" href="https://t.me/thegraphjapan" target="_blank" rel="noreferrer">The Graph - Japan</a><br></br><a className="cla" href="https://t.me/TheGraph_Dutch" target="_blank" rel="noreferrer">The Graph - Dutch</a><br></br><a className="cla" href="https://t.me/GRTARAB" target="_blank" rel="noreferrer">The Graph - Arab</a><br></br>
  <a className="cla" href="https://t.me/Thegraph_KR" target="_blank" rel="noreferrer">The Graph - Korea</a><br></br><a className="cla" href="https://t.me/thegraphpk" target="_blank" rel="noreferrer">The Graph - Pakistan</a><br></br><a className="cla" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">The Graph - Indonesia</a><br></br><a className="cla" href="https://t.me/thegraphbangladesh" target="_blank">The Graph - Bangladesh</a><br></br><a className="cla" href="https://t.me/GraphProtocolCN" target="_blank">The Graph - China</a><br></br><a className="cla" href="https://t.me/TheGraphUkrainian" rel="noreferrer">The Graph - Ukraine</a><br></br><a className="cla" href="https://t.me/thegraph_pl" target="_blank" rel="noreferrer">The Graph - Poland</a><br></br><a className="cla" href="https://t.me/TheGraph_Nigeria" target="_blank" rel="noreferrer">The Graph - Nigeria</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// Token Economics Start
handleTwitter() {
  const message = this.createChatbotMessage(<a>Нижче ви можете знайти офіційну сторінку у Twitter.<br></br><br></br><a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">The Graph</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTokenEconomics() {
  const message = this.createChatbotMessage(<a>Економічна модель токенів Graph є досить складною. Окрім розкладу випуску токенів і механізму спалювання токенів, протокол Graph розблоковує токени, що мають статус vesting, протягом періоду від 5 до 10 років.<hr></hr><table><tr className="indexer-table-header">
  <th>Загальна кількість токенів =</th>
  <th> Початкова пропозиція токенів + </th>
  <th> Щорічна емісія - </th>
  <th> Щорічне спалювання</th>
</tr>
</table><br></br>Формула щорічної емісії виглядає наступним чином:<br></br><br></br>networkGRTIssuance = 1000000011247641700<br></br><br></br>blocksYear = 2628000<br></br><br></br>Inflation = networkGRTIssuance * (10^-18) * blocksYear - 1<br></br><br></br>Inflation = 0,0299999999792... = 3% приблизно
<hr></hr><strong>Огляд економіки токена GRT</strong><br></br><br></br><table>
<tr className="indexer-table">
  <td><strong>Позначення токена</strong></td>
  <td>GRT</td>
</tr>
<tr className="indexer-table">
  <td><strong>Назва токена</strong></td>
  <td>Graph Token</td>
</tr>
<tr className="indexer-table">
  <td><strong>Початкова пропозиція токенів</strong></td>
  <td>10 млрд GRT</td>
</tr>
<tr className="indexer-table">
  <td><strong>Щорічна емісія</strong></td>
  <td>~3% (за 1-й рік)</td>
</tr>
<tr className="indexer-table">
  <td><strong>Щорічне спалювання</strong></td>
  <td>1% від комісії та зборів за запити</td>
</tr>
</table><hr></hr>Ви можете прочитати все про особливості економічної моделі токенів The Graph <a className="cla" href="https://thegraph.academy/ecosystem/graph-token-economics/" target="_blank" rel="noreferrer">тут</a>.</a>
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
  const message = this.createChatbotMessage(<a>З'ясування подальшого шляху для хостингового сервісу<br></br><br></br>Хостинговий сервіс не буде раптово припиняти підтримку усіх мереж. Хостинговий сервіс залишатиметься доступним для використання для кожного мережі до тих пір, поки не буде досягнута основна функціональність для кожної з них.<br></br><br></br>Розробники підграфів не будуть відключені від основного сервісу, на який вони покладаються у процесі використання.<br></br><br></br>Уточнення (і внесення поправок) до початкового оголошення, в якому передбачалося, що закриття хостингового сервісу відбудеться до кінця 1-го кварталу 2023 року:<br></br>Процес переходу застосовується до мереж тільки після того, як вони будуть підтримуватися в мережі The Graph(яка на момент написання цієї статті включає тільки основну мережу Ethereum, незабаром до неї приєднається мережа Gnosis Chain).<br></br><br></br>Процес визначається конкретними критеріями виходу і готовністю індексатора за допомогою програми MIPs, а не датами - розробникам не слід очікувати, що мережі пройдуть фазу занепаду до тих пір, поки в децентралізованій мережі не буде запропоновано необхідну якість послуг, основний функціонал і можливості для роботи розробників.<br></br><br></br>Розробники підграфів не повинні турбуватися про те, що підтримка їх мережі буде свавільно або швидко припинена. Крім того, зростає спільнота підтримки, яка триматиме вас за руку протягом усього процесу переходу. Основні розробники також продовжують працювати над покращенням процесу виставлення тарифів за запити, вартості запитів, якості обслуговування та загального рівня роботи розробників у мережі. Основні учасники The Graph визнають занепокоєння розробників щодо перенесення та працюють над рішеннями для створення більш безперешкодної роботи в мережі.<br></br><br></br>
  Ми завжди раді вашим відгукам через The Graph Discord, The Graph Forum та за адресою migration@thegraph.foundation. Основні розробники та контрибутори активно прислухаються до користувачів і вносять зміни відповідно до їхніх потреб.<br></br><br></br>Оголосити про плани припинити роботу хостингу без урахування потреб користувачів та надання достатньої кількості контексту було неправильним кроком. Екосистема The Graph змінює курс, щоб переконатися, що голоси людей, які залежать від The Graph, будуть почуті та зрозумілі.<br></br><br></br>
  Після майже 4 років підтримки підграфів для web3 dapps, хостинговий сервіс завершує свою роботу в 1 кварталі 2023 року, коли dapps мігрують до децентралізованої мережі. Хостинговий сервіс був критично важливим для децентралізації The Graph, досягнення відповідності продукту ринку та тестування функцій підграфів з розробниками. Закриття сервісу є найбільшою подією з моменту запуску мережі The Graph і дозволить всім web3-додаткам отримувати дані блокчейну по-справжньому децентралізовано.<br></br><br></br>
  
  Офіційну документацію можна знайти за посиланням: <a className="cla" href="https://thegraph.com/blog/sunsetting-hosted-service" target="_blank" rel="noreferrer">The Graph Foundation - The Road to Sunsetting the Hosted Service</a>.<hr></hr>Легко доступний для сприйняття, глибокий твіт <a className="cla" href="https://ahmadmardeni.substack.com/" target="_blank" rel="noreferrer">Ahmad Mardeni</a>, читайте <a className="cla" href="https://twitter.com/Mardeni01" target="_blank" rel="noreferrer">тут</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Sunsetting Hosted Service  End
handlePowerDAOS() {
  const message = this.createChatbotMessage(<a><strong>Використання The Graph для забезпечення роботи DAO: Тематичне дослідження Snapshot</strong><br></br><br></br>The Graph - це важливий протокол, який дозволяє членам ДАО точно і легко зчитувати дані, а також полегшує відстеження голосів. Децентралізовані автономні організації (ДАО) - це організації, якими керують територіально розподілені спільноти, на відміну від централізованих органів управління. Оскільки більшість рішень у ДАО приймається на основі даних, записаних на блокчейні, вони базуються на даних, що зберігаються в мережі.<br></br><br></br><a className="cla" href="https://snapshot.org/#/" target="_blank" rel="noreferrer">Snapshot</a>- це протокол децентралізованого управління, який дозволяє людям координувати та приймати колективні рішення щодо майбутнього організацій, в яких вони беруть участь. Snapshot дозволяє людям легко створювати пропозиції та голосувати за них, не сплачуючи жодних комісій за газ. Це широко використовуваний інструмент для тисяч людей, які працюють над протоколами, співпрацюють в DAO і створюють нові інноваційні проєкти в web3.<br></br><br></br>На сьогодні Snapshot зафіксував понад<br></br>8,5 млн off-chain голосувань<br></br>8 тис. інтегрованих протоколів<br></br>64,8 тис. пропозицій.<hr></hr>Читайте <a className="cla" href="https://thegraph.com/blog/using-the-graph-for-daos-snapshot/" target="_blank" rel="noreferrer">тут</a>, щоб дізнатися, як The Graph працює з Snapshot і як прокачати свій Dapp.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Tenderize Start
handleTenderize() {
  const message = this.createChatbotMessage(<a>Під час Graph Day Tenderize отримав популярність як перший ліквідний стейкінговий протокол. Користувачі можуть внести $GRT на депозит tenderGRT (tGRT), який автоматично підсумовує винагороди та обмінюється туди-сюди за бажанням. Власники $GRT можуть делегувати через Tenderize, отримуючи tGRT. Токенізована версія стейкінгової позиції, яка автоматично об'єднує винагороди та може бути миттєво обміняна назад на GRT.<br></br><br></br>Ви можете прочитати інструкцію від Graphtronauts про те, як використовувати токенізований стейк Tenderize для ваших GRT, <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-use-tenderize-tokenized-stake-for-your-grt-cf5fe38a6dc7" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Щоб почати, перейдіть на сторінку <a className="cla" href="https://app.tenderize.me/stakers/graph" target="_blank" rel="noreferrer">Tenderize</a>.<br></br><br></br>Ви також можете ознайомитися з блогом Tenderize <a className="cla" href="https://blog.tenderize.me/" target="_blank" rel="noreferrer">тут</a>.</a>
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
  const message = this.createChatbotMessage(<a>Завдяки допомозі талановитих перекладачів, The Graph охоплює ще більше людей на їхніх місцевих мовах.<br></br><br></br>Щоб дізнатися більше про спільноту GRT, читайте нижче.<br></br><br></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCommunity();
  }}><strong>Community</strong></button>
  <br></br><br></br><a className="cla" href="https://thegraph.com/blog/get-involved-with-graph-community-web3/" target="_blank" rel="noreferrer">23 способи приєднатися до екосистеми The Graph</a></a>
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
  const message = this.createChatbotMessage(<a>Geo - це децентралізований web3-браузер, побудований на основі The Graph, сторінки якого відкриті та підтримуються спільнотою. Тож ви можете голосувати за те, що є важливим, і ваш голос буде враховано. Geo усуває всі проблеми, які ми зараз маємо з нашими web2 браузерами, і відкриває нове вікно інновацій, новий інтернет, де ваша конфіденційність є найвищим пріоритетом. Вам не потрібно нічого знати про криптовалюту або блокчейн, щоб користуватися ним. Це можливість для наступних 1 мільярдів користувачів перейти на web3.<br></br><br></br>Geo знаходиться в бета-версії та наразі підтримує лише пристрої iPad та Mac, зареєструватися для участі в бета-тестуванні можна <a className="cla" href="https://edgeandnode.com/geo/" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>
  Щоб прочитати повний блог про Geo, створений <a className="cla" href="https://substack.com/profile/45913426-ahmad-mardni" target="_blank" rel="noreferrer">Ahmad Mardeni</a>, дивіться <a className="cla" href="https://ahmadmardeni.substack.com/p/geo-the-new-web3-browser-with-a-decentralization?s=r" target="_blank" rel="noreferrer">тут</a>.<hr></hr>Geo Genesis<br></br><br></br>Yaniv - П'ять років тому, група з наших колег побачила активність навколо Ethereum і вирішила зробити свій внесок, створивши The Graph. Я побачив потенціал The Graph як глобального децентралізованого графа знань, що відображає всі світові публічні відомості та інформацію. Використовуючи публічну інфраструктуру для організації та розповсюдження інформації, ми могли б мати більш відкриті та справедливі процеси впливу на те, яку інформацію вважати істиною. Сьогодні у нас є динамічна децентралізована мережа, і The Graph допомагає вирішити критично важливу проблему ефективного доступу до даних блокчейну для тисяч розробників, але нам все ще потрібно зробити ще один крок, щоб побачити, як це бачення втілиться в життя.<br></br><br></br>Я радий повідомити, що ми виділили окрему компанію під назвою Geo, яку я очолю разом з дуже талановитими інженерами та дизайнерами. Це лише початок нашої подорожі, і створення Geo у повному обсязі, безсумнівно, потребуватиме багато експериментів, ітерацій та співпраці.<br></br><br></br>Ви можете прочитати повний текст блогу <a className="cla" href="https://www.geobrowser.io/blog/post/introducing-geo-genesis?s=09" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/i/status/1532418078700580869'/></a>
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
  const message = this.createChatbotMessage(<a>StreamingFast це компанія з розробки інфраструктури протоколів, яка досягла успіху у створенні високомасштабованої, кросчейнової архітектури для потокового передавання блокчейн-даних. Грант Core Devу розмірі $60 млн є першим у своєму роді, що відкриває нову межу спільних інновацій, де спільноти та компанії об'єднуються для створення радикально відкритішого Інтернету.<br></br><br></br> StreamingFast надасть свої технології, талановитих розробників та ресурси для розвитку The Graph як протоколу та екосистеми. Відповідні IP і продукти будуть доступні з відкритим вихідним кодом у репозиторії The Graph Protocol на Github, а продукти API будуть перенесені в мережу The Graph для внутрішньої індексації та підтримки запитів.<br></br><br></br>The Graph Foundation виділив StreamingFast грант у розмірі $60 млн на приєднання до The Graph в ролі основної команди розробників, читайте <a className="cla" href="https://thegraph.com/blog/core-dev-grant" target="_blank" rel="noreferrer">тут</a>.<hr></hr>Substreams (підпотоки) - це потужна технологія блокчейн-індексації, розроблена для мережі The Graph. Вона дозволяє писати модулі на Rust, створюючи потоки даних разом зі спільнотою, і забезпечує надзвичайно високу продуктивність індексації завдяки розпаралелюванню, в першу чергу, в потоковому режимі. Він має всі переваги Firehose, такі як недороге кешування та архівування даних блокчейну, висока пропускна здатність та обробка реорганізацій на основі cursor.<br></br><br></br>Знайти документацію по підпотокам можна <a className="cla" href="https://substreams.streamingfast.io/" target="_blank" rel="noreferrer">тут</a>.<br></br>Або ви можете прочитати блог від The Graph про підпотоки: <a className="cla" href="https://thegraph.com/blog/substreams-parallel-processing" target="_blank" rel="noreferrer">Набагато швидша продуктивність індексації для підграфів</a>.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=qWxffTKpciU'/><br></br>Приєднуйтесь до сервера <a href="https://discord.com/invite/jZwqxJAvRs" target="_blank" rel="noreferrer">StreamingFast Discord</a> або ознайомтеся з ними <a className="cla" href="https://www.streamingfast.io/" target="_blank" rel="noreferrer">тут</a>.</a>
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
  const message = this.createChatbotMessage(<a><strong>Спільнота для делегатів, створена делегатами.</strong><br></br>Graphtronauts - це спільнота, створена для того, щоб полегшити спілкування для тих, хто хоче ХОЛДИТИ $GRT та обговорювати фундаментальні питання щодо проєкту The Graph. Це не тільки найбільша неофіційна спільнота довгострокових холдерів $GRT в екосистемі The Graph, їхня мета - допомагати людям на шляху до того, щоб стати делегатом The Graph.<br></br><br></br><strong>"Ми зростаємо, підтримуючи інших" - Graphtronauts | Заснована 16 січня 2021 року</strong><br></br><br></br>Дізнайтеся більше про Graphtronauts, прослухавши цей подкаст <a className="cla" href="https://www.grtiq.com/grtiq-podcast-35-the-graphtronauts/" target="_blank" rel="noreferrer">GRTiQ</a> з Baghe та Chris Ewing.<br></br>А також цей подкаст <a className="cla" href="https://www.grtiq.com/grtiq-podcast-90-paolo-diomede/" target="_blank" rel="noreferrer">GRTiQ</a> з Paolo Diomede.<br></br>Ви можете приєднатися до спільноти за наступними посиланнями:<br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank" rel="noreferrer">Telegram</a><br></br><a className="cla" href="https://twitter.com/graphtronauts" target="_blank" rel="noreferrer">Twitter</a><br></br><a className="cla" href="https://www.graphtronauts.com/#/" target="_blank" rel="noreferrer">Додаток Graphtronauts</a><br></br><a className="cla" href="https://old.graphtronauts.com/" target="_blank" rel="noreferrer">Веб-сайт</a><br></br><a className="cla" href="https://www.youtube.com/channel/UCPAUeNaRtBV-jdSKY8wmcXg" target="_blank" rel="noreferrer">YouTube</a><br></br><a className="cla" href="https://www.reddit.com/r/Graphtronauts/" target="_blank" rel="noreferrer">Reddit</a><hr></hr>Індексатор Graphtronauts (<a className="cla" href="https://thegraph.com/explorer/profile/0x0c3aab9f49c01070ec359aae4778fcbb01d2fbef?view=Indexing" target="_blank" rel="noreferrer">graphtronauts-indexer.eth</a>) тепер працює і готовий для делегацій! Перегляньте твіт нижче для отримання додаткової інформації, приєднуйтесь до їхньої спільноти в <a className="cla" href="https://t.co/dDUb7NHaPY" target="_blank" rel="noreferrer">Discord</a> та слідкуйте за оновленнями в Twitter.<br></br><Embed className="embed" isDark url='https://twitter.com/graphtronauts_x/status/1593310558798979072?s=20&t=2FCQMWbItkh1MnXmrHBVIA'/>
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
  const message = this.createChatbotMessage(<a>Якщо ви хочете делегувати GRT через Metamask. Якщо ви цього ще не зробили, <a className="cla" href="https://metamask.io/download/" target="_blank" rel="noreferrer">завантажте MetaMask</a>. Якщо вам потрібна допомога, ви можете знайти інструкцію <a className="cla" href="https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Ви можете переглянути покрокову відеоінструкцію з делегування GRT індексатору <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">тут</a>.<br></br>Якщо ви віддаєте перевагу текстовому гайду, ви можете прочитати його <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">тут</a>.<hr></hr>Ви можете використовувати WalletConnect для делегування в графічному протоколі.<br></br>Ви можете знайти покрокову інструкцію про те, як це зробити <a className="cla" href="https://thegraph.academy/delegators/delegating-walletconnect/" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Замість soft-гаманця Metamask ви також можете використовувати hard-гаманець, наприклад, Ledger, для делегування GRT. Холодні гаманці можуть додати ще один рівень безпеки, оскільки вони зазвичай вимагають підтвердження транзакцій фізичним пристроєм. Ви можете приєднати Metamask до вашого фізичного гаманця за допомогою розширення Metamask Browser Extension. Переконайтеся, що на вашому пристрої Ledger відкрито, і що дані контрактів дозволені в застосунку ETH на вашому пристрої.<br></br><br></br>Щоб делегувати токени GRT за допомогою підключеного до MetaMask апаратного гаманця, прочитайте інструкцію <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-delegate-your-grt-tokens-with-an-hardware-wallet-aec7751cd5d5" target="_blank" rel="noreferrer">тут</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCurator() {
  const message = this.createChatbotMessage(<a><a className="cla" href="https://thegraph.academy/curators/definition/" target="_blank" rel="noreferrer">Кураторам</a> не потрібно володіти складними технічними навичками або знаннями. Все, що потрібно - це вміння здійснювати транзакції за допомогою MetaMask. Аналогічно, куратори не зобов'язані володіти мінімально необхідною кількістю GRT, на відміну від індексаторів. Куратори повинні розуміти тенденції екосистеми Web3 і бачити, чи надає підграф корисну інформацію. Куратору також корисно вміти виявляти критичні проблеми, які можуть свідчити про те, що підграф не працює.<br></br><br></br>У наступних інструкціях ви знайдете всю інформацію, яку вам потрібно знати перед тим, як сигналізувати про порушення підграфа, і як зробити це з упевненістю.<br></br><br></br>Цей <a className="cla" href="https://medium.com/@paulieb.eth/tips-and-tricks-to-evaluate-and-determine-if-a-subgraph-is-legitimate-c67f16e2205a" target="_blank" rel="noreferrer">гайд</a> для кураторів "Поради та підказки для оцінки та визначення легітимності підграфа" - найкраще місце для старту. Після того, як ви прочитаєте його та переглянете наведені нижче навчальні матеріали, ви будете в чудовому стані для того, щоб подати перший сигнал щодо підграфів. <br></br><br></br>
  Також цей <a className="cla" href="https://medium.com/@paulieb.eth/the-graph-curation-bb17bf8b8fa9" target="_blank" rel="noreferrer">посібник</a> підготував PaulieB на тему "Кураторство. Стислий та зрозумілий гайд, який пояснює, що це таке, як це робити, а також корисні ресурси, які допоможуть вам стати кращими".<br></br><br></br>Приєднуйтесь до <a className="cla" href="https://t.me/CurationStation" target="_blank" rel="noreferrer">$GRT Curation Station</a>, спільноти, створеної кураторами для кураторів. За потреби ви можете звернутися сюди за підтримкою.<br></br><br></br>Наступні відеоуроки були створені <a className="cla" href="https://thegraph.com/explorer/profile?id=0x87eba079059b75504c734820d6cf828476754b83&view=Indexing" target="_blank" rel="noreferrer">DataNexus</a> про кураторство:<br></br><a className="cla" href="https://www.youtube.com/watch?v=-7qWi2do-1E" target="_blank" rel="noreferrer">Хто такий куратор в The Graph</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=unzQvSZIORg" target="_blank" rel="noreferrer">Перевірка підграфа</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=zJswFILfADg" target="_blank" rel="noreferrer">Як сигналізувати про підграф</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=u76dxQPdS9c" target="_blank" rel="noreferrer">Сигналізація про невдалу транзакцію</a><hr></hr>Якщо вам потрібні корисні інструменти щодо кураторства, просто попросіть.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCuratorTools() {
  const message = this.createChatbotMessage(<a><strong>Корисні інструменти для кураторів</strong><br></br><br></br>Дізнайтеся, як працює білінг у Subgraph Studio, <a className="cla" href="https://thegraph.com/docs/en/billing/" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Дізнайтеся, як The Graph використовує Polygon для білінгу, <a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">тут</a>.<hr></hr><a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">Перевірте </a> стан індексації підграфа<br></br><br></br>Ви можете переглянути інформацію за такими параметрами:<br></br>Mainnet Query Fees (щоденно)<br></br>Mainnet Query Fees (щомісяця)<br></br>Mainnet Query Fees (щомісяця, 30-денна Moving Average)<br></br>New Subgraphs (щомісяця)<br></br>Загальна кількість підграфів<br></br>Average Subgraph Fees (щомісяця, 30-денна Moving Average)<br></br>Subgraph Query Fees (30 днів)<br></br>Query Fee / Signal Ratio (30 днів)<br></br>Subgraph Query Fees (30 днів) - %<br></br><a className="cla" href="http://michael.lesane.net/graphdash/" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Або перевірте тарифікацію підграфів <a className="cla" href="http://michael.lesane.net/graphdash/billing" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Graph Network <a className="cla" href="https://dapplooker.com/dapp/graph-network-billing-120192" target="_blank" rel="noreferrer">Billing Dashboard</a><br></br><br></br>Graph Network <a className="cla" href="https://dapplooker.com/dapp/graph-network-user-billing-balance-120204" target="_blank" rel="noreferrer">User Billing Balance</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleHostedService() {
  const message = this.createChatbotMessage(<a>Хостинговий сервіс допоміг The Graph досягти того рівня, на якому він знаходиться сьогодні, але бачення завжди полягало у створенні децентралізованого протоколу індексації та глобального інтерфейсу API. Коли мережа The Graph запрацює, розробники нарешті отримають можливість пропонувати дійсно децентралізовані без серверні додатки, які швидко завантажуються і є надійними. Відпаде потреба в централізованій інфраструктурі, оскільки додатки зможуть підключатися безпосередньо до ефективної мережі індексаторів для обробки запитів.<br></br><br></br>Підграфи Ethereum продовжують мігрувати до децентралізованої мережі The Graph. З ростом популярності web3 зростає і попит на масштабування та продуктивність. Розробники стоять перед важливим рішенням: продовжувати покладатися на централізовані технології або перейти на децентралізовану інфраструктуру.<br></br>З точки зору довговічності та надійності, ніщо не може зрівнятися з децентралізацією. Відмовившись від централізованих точок відмови, ви пропонуєте своїм користувачам web3-додаток, до якого вони можуть отримати постійний доступ. Багато проєктів вже перевірили мережу у роботі, і зараз ідеальний час для переходу вашого проєкту на неї.<br></br><br></br>Щоб дізнатися більше про міграцію підграфів The Graph, дивіться <a className="cla" href="https://thegraph.com/blog/graph-network-migration" target="_blank" rel="noreferrer">тут</a>.<br></br>Якщо ви шукаєте покрокову інструкцію про те, як перенести підграф з хостингу в основну мережу, перегляньте <a className="cla" href="https://codex.thegraph.com/repositories-and-documentation/official-documentation/hosted-service/migrating-subgraph" target="_blank" rel="noreferrer">цю статтю</a>. Якщо ви віддаєте перевагу відеоурокам, натисніть нижче.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=syXwYEk-VnU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleChainlink() {
  const message = this.createChatbotMessage(<a>The Graph - це протокол індексації для запитів у таких мережах, як Ethereum та IPFS. Будь-хто може створювати та публікувати відкриті API, які називаються підграфами, роблячи дані легкодоступними.<hr></hr>Chainlink - це децентралізована oracle-мережа, яка дозволяє смарт-контрактам безпечно отримувати доступ до off-chain каналів даних, веб-API і традиційних банківських платежів.<hr></hr>Пропонуємо вашій увазі вступне відео з Tegan Kline і Dave Kajpust з The Graph Protocol. Вони обговорюють життєво важливе значення The Graph для побудови децентралізованого Web3 і пояснюють відмінності між Chainlink і Graph.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=HOS9g0rKP24'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIndexerOfficeHours() {
  const message = this.createChatbotMessage(<a>Indexer Office Hours - це неформальна консультація для тих, хто бажає отримати пораду щодо використання індексатора в основній або тестовій мережі. Якщо ви хочете отримати більш детальну інформацію про усунення несправностей, або навіть просто поставити запитання про індексування, то ця зустріч саме для вас.<br></br><br></br>Ви можете переглянути графік годин консультацій з індексування <a className="cla" href="https://graphops.notion.site/Indexer-Office-Hours-952e0b50a65144768aab922e2c9d102a" target="_blank" rel="noreferrer">тут</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleFireHose() {
  const message = this.createChatbotMessage(<a>Обробка даних через Firehose (розроблений StreamingFast) підвищує продуктивність лінійного індексування та швидкість синхронізації, а також максимізує гнучкість даних завдяки паралельній обробці. Firehose створює загальний інтерфейс для Graph Node з будь-яким блокчейном і значно покращує можливості обробки високопродуктивних мереж, таких як NEAR.<br></br><br></br>Ви можете прочитати опис Firehose, щоб дізнатися більше про нього, <a className="cla" href="https://firehose.streamingfast.io/" target="_blank" rel="noreferrer">тут</a>.<hr></hr>Запитайте мене про StreamingFast, щоб дізнатися більше про них.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoreDevs() {
  this.handleButtonCoreDevsChat = this.handleButtonCoreDevsChat.bind(this);
  const message = this.createChatbotMessage(<a>Core розробники The Graph - це:<br></br><br></br><a className="cla" href="https://edgeandnode.com/blog/introducing-edge-and-node/" target="_blank"><strong>Edge & Node</strong></a> - розробка децентралізованих протоколів і просування web3. Початкова команда, що стоїть позаду The Graph.<br></br><a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank"><strong>Figment</strong></a> - вдосконалення інфраструктури нод і підтримки мульти-блокчейнів.<br></br><a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank"><strong>The Graph Foundation</strong></a> - управління екосистемою, видача грантів і підтримка спільноти.<br></br><a className="cla" href="https://www.streamingfast.io/" target="_blank"><strong>StreamingFast</strong></a> - оптимізація продуктивності індексації підграфів і підтримка інструментів для розробки в web3.<br></br><a className="cla" href="https://www.semiotic.ai/" target="_blank" ><strong>Semiotic</strong></a>- вдосконалення мережі The Graph за допомогою інновацій та досліджень у галузі штучного інтелекту.<br></br><a className="cla"href="https://www.the-guild.dev/" target="_blank"><strong>The Guild</strong></a> - створення інструментів для підграфів і розробка поліпшень API GraphQL.<br></br><a className="cla" href="https://graphops.xyz/" target="_blank"><strong>GraphOps</strong></a> - вилучення, перетворення та обслуговування даних блокчейну через Graph Protocol.<br></br><a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank"><strong>Messari</strong></a> - забезпечення прозорості та створення інструментів для обґрунтованих рішень та інвестицій.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonCoreDevsChat}><strong>Core розробники</strong></button><br></br><br></br>Дізнавайтеся про зустрічі від Core розробників <a className="cla" href="https://www.youtube.com/playlist?list=PLTqyKgxaGF3Tj_A6eqV8V_aQoRwd2oHa_" target="_blank">тут</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleFigment() {
  const message = this.createChatbotMessage(<a>Figment - це зареєстрована канадська компанія з венчурним фінансуванням, що базується в Торонто. Обслуговує найбільших у світі холдерів GRT. Має більш ніж 30-річний досвід успішного масштабування інтернет-інфраструктурних компаній.<hr></hr><strong>Стейкінг</strong>- Figment управляє високозахищеною мережею валідаторів Proof-of-Stake (PoS), які дозволяють холдерами токенів забезпечувати безпеку мереж, брати участь в управлінні та отримувати дохід.<br></br>Щоб дізнатися більше про стейкінг з Figment, див <a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Software - Платформа DataHub від Figment дозволяє розробникам використовувати найпотужніші та унікальні функції блокчейну без необхідності ставати експертами з протоколів, що прискорює розробку нових Web 3 додатків.<br></br>Щоб дізнатися більше про платформу DataHub від Figment, дивіться <a className="cla" href="https://datahub.figment.io/" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br><strong>Capital</strong>- Figment Capital пропонує первинне фінансування та підтримку зростання нових, високоінноваційних PoS-проєктів.<hr></hr>Розробники, які використовують підграфи, можуть легко спостерігати за своїми підграфами в DataHub. Це допомагає розробникам покращити їх продуктивність та надійність підграфів.<br></br>DataHub, платформа для блокчейн розробників у Web 3 від Figment, інтегрує дані з підграфів з The Graph.<br></br>Це полегшує розробникам доступ до більшої кількості компонентів технологічного стека Web 3 в одному місці.<br></br>Ви можете прочитати про зв'язування підграфів на DataHub <a className="cla" href="https://www.figment.io/resources/subgraph-linking-is-now-live-on-datahub-2" target="_blank" rel="noreferrer">тут</a>.<hr></hr>Основна команда розробників Figment інтегрувала The Graph з екосистемою Cosmos. Ця інтеграція дозволила повністю децентралізовано індексувати та запитувати дані з екосистеми Cosmos на основі The Graph.<br></br>Ви можете прочитати про інтеграцію The Graph в екосистему Cosmos <a className="cla" href="https://www.figment.io/resources/the-graph-and-cosmos" target="_blank" rel="noreferrer">тут</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSemiotic() {
  const message = this.createChatbotMessage(<a>Semiotic Labs створює автоматизовані інструменти ухвалення рішень для децентралізованих ринків на блокчейні. Вони вірять, що поєднання штучного інтелекту та криптографії сприятиме розвитку Web3 - децентралізованого інтернету майбутнього. Глибоке навчання з підсиленням (Deep Reinforcement Learning, RL) - це сфера ШІ, яка використовувалася в освоєнні таких ігор, як Go, і в наукових розробках. Використовуючи Deep RL, розробляють автономних агентів, які можуть домовлятися про ціну та інші умови у двосторонніх угодах або угодах типу аукціону. Агенти з просоціальною поведінкою можуть бути навчені покращувати добробут децентралізованої мережі.<hr></hr>Імітаційні середовища мають важливе значення для ефективного навчання ШІ-агентів і тестування їхньої продуктивності за еталонними показниками.<br></br>Вони розробляють реалістичні симулятори, щоб відобразити економіку децентралізованих ринків і навчити кількох агентів, які беруть участь у мережі.<br></br>Середовища моделювання також корисні для стрес-тестування нових протоколів, щоб знайти слабкі місця (наприклад, шкідливі атаки) до того, як відбудуться реальні збої в роботі.<br></br>Homomorphic шифрування дозволяє виконувати розрахунки над зашифрованими даними.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMessari() {
  const message = this.createChatbotMessage(<a>Messari використовує свої таланти розробника і знання предметної області для розробки та підтримки високоякісних, точних, складних і стандартизованих підграфів протоколу. Всі підграфи будуть з відкритим вихідним кодом і доступні для широкої спільноти. Кожен підграф буде перенесено в децентралізовану мережу. Крім того, Messari очолить робочі групи з розробки підграфів, забезпечить зворотний зв'язок, щоб допомогти поліпшити роботу над основними протоколами, поділиться кращими практиками підграфів і допоможе створити загальнодоступні стандарти для будь-якого протоколу.<br></br><br></br>Ви можете дізнатися більше про роль Messari в екосистемі The Graph <a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank" rel="noreferrer">тут</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphQLApi() {
  const message = this.createChatbotMessage(<a><strong>GraphQL API</strong><br></br><br></br>Цей <a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/" target="_blank" rel="noreferrer">посібник</a> пояснює GraphQL Query API, який використовується для Graph Protocol.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#queries" target="_blank" rel="noreferrer">Queries (Запити)</a></strong> - У вашій схемі підграфів ви визначаєте види, які називаються Entities (Сутності). Для кожного типу сутності буде створено сутність і відповідне поле у типі запиту верхнього рівня. Зауважте, що запит не обов'язково включати у верхню частину запиту graphql при використанні The Graph.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#sorting" target="_blank" rel="noreferrer">Sorting</a></strong> - Під час запиту до колекції параметр orderBy можна використовувати для сортування за певним атрибутом. Додатково, параметр orderDirection може бути використаний для визначення напрямку упорядкування, asc для висхідного або desc для низхідного.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#pagination" target="_blank" rel="noreferrer">Pagination</a></strong> - Під час запиту до колекції перший параметр може бути використаний для переходу від початку колекції до її початку. Варто зазначити, що за замовчуванням сортування відбувається за ідентифікатором у порядку зростання, а не за часом створення.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#filtering" target="_blank" rel="noreferrer">Filtering</a></strong> - Ви можете використовувати параметр where у ваших запитах для фільтрації за різними властивостями. Ви можете відфільтрувати декілька значень в межах параметра.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#time-travel-queries" target="_blank" rel="noreferrer">Time-travel queries</a></strong> - Ви можете запитувати стан ваших entities не тільки для останнього блоку, який є за замовчуванням, але і для довільного блоку в минулому. Блок, в якому має відбутися запит, можна визначити або за номером блоку, або за хешем блоку, включивши аргумент блоку в поля запитів верхнього рівня.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleParticipantUpdate() {
  const message = this.createChatbotMessage(<a>Останнє оновлення для учасників GRT охоплює основні моменти Q3 2022 року в The Graph, включаючи основні статистичні дані, анонси та ключові етапи розвитку екосистеми. Перегляньте запис і дізнайтеся про всі нововведення та інновації, що відбуваються в екосистемі The Graph.<br></br><br></br><Embed className="embed" isDark url='https://youtu.be/58el3_9oJ6Q'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}



handleTheGuild() {
  const message = this.createChatbotMessage(<a>Передова екосистема Guild з відкритим вихідним кодом охоплює все, що вам потрібно для вашої API-інфраструктури за допомогою модульної, відкритої та повної платформи.<hr></hr><strong>Екосистема</strong><br></br><br></br>Їхні передові модульні рішення можна поступово впроваджувати як окремі бібліотеки з відкритим кодом або як повну уніфіковану платформу API. Ознайомтеся з їхнім набором стійких інструментів API з відкритим кодом, який охоплює все необхідне для масштабування вашої API-інфраструктури, <a className="cla" href="https://www.the-guild.dev/#platform" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Ви можете дізнатися більше про The Guild <a className="cla" href="https://www.the-guild.dev/about-us" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Ви можете дізнатися більше про сервіси, які вони надають <a className="cla" href="https://www.the-guild.dev/services" target="_blank" rel="noreferrer">тут</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphOps() {
  const message = this.createChatbotMessage(<a>GraphOps будує майбутнє інтернету. Їх місія: Ми керуємося метою побудови вільного від цензури, справедливого та самодостатнього Інтернету. Відкриті дані лежать в основі цієї стратегії, і ми процвітаємо, створюючи стандарти та протоколи відкритих даних, щоб розширити можливості наступної великої хвилі організацій та додатків для нашого світу.<br></br><br></br>GraphOps - компанія, що займається інфраструктурою блокчейн-даних. Вони видобувають, трансформують та обслуговують блокчейн-дані за допомогою Graph Protocol.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphDay() {
  const message = this.createChatbotMessage(<a>Пропонуємо вашій увазі огляд останнього Graph Day, який відбувся 2 червня 2022 року в історичному Palace of Fine Arts у Сан-Франциско.<hr></hr>Відвідайте <a className="cla" href="https://thegraph.com/graph-day/2022/" target="_blank" rel="noreferrer">Graph Day</a> та <a className="cla" href="https://thegraph.com/graph-hack/2022/" target="_blank" rel="noreferrer">Graph Hack</a>, щоб дізнатися більше про цю подію.<hr></hr>The Graph спільнота мала змогу долучитися та зосередитися на web3, додатках, протоколах та перспективах майбутнього інтернету. Провідні розробники протоколів та додатків продемонстрували, як спільнота web3 впроваджує абсолютно нові форми людської взаємодії.<br></br><br></br>З вступним словом виступила Eva Beylin, директор The Graph Foundation. Після неї з натхненною промовою виступив Yaniv Tal, співзасновник The Graph та CEO Edge & Node. Далі спільноті була представлена презентація Graph на тему "Чому децентралізація важлива". Після цього один за одним почали лунати цікаві анонси:<br></br>Оголошення про закриття хостингового сервісу<br></br>Оголошення щодо Substream<br></br>Оголошення про запуск GEO<br></br>Потім громада була запрошена на панельну дискусію з Diana Chen, Camila Ramos, Chris Ewing та Derek Meyer. -"It takes a Village".<br></br><br></br>Ви можете послухати подкаст GRTiQ про Graph Day та Graph Hack з Tegan Kline, який відбувся напередодні заходу, <a className="cla" href="https://www.grtiq.com/grtiq-podcast-special-release-graph-day/" target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Дізнайтеся про майбутнє інтернету в прямому ефірі з The Graph Day 2022 за посиланням нижче.<br></br>*It takes a Village - Ця фраза часто використовується для того, щоб висловити ідею, що для розв'язання складної проблеми або досягнення мети потрібна співпраця та підтримка цілої спільноти, а не лише однієї особи чи групи.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=yLQmdM5DWSk&list=PLTqyKgxaGF3T2Ginisuf2nUY6yDi_WbT3&index=11'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsTheWeb() {
  const message = this.createChatbotMessage(<a>За роки свого існування Інтернет зазнав значних змін, і сьогодні його застосування майже не відрізняється від перших днів існування. Еволюцію Інтернету часто поділяють на три окремі етапи: Web1, Web2 і Web3.<hr></hr><strong>Web1</strong><br></br> - Web 1.0 був першою ітерацією Інтернету. Більшість учасників були споживачами контенту, а творцями, як правило, були розробники, які створювали веб-сторінки, що містили інформацію, подану переважно у текстовому або графічному форматі. Web 1.0 тривав приблизно з 1991 по 2004 рік.<br></br>Web 1.0 складався з сайтів, що обслуговували статичний контент замість динамічного HTML. Дані та вміст подавалися зі статичної файлової системи, а не з бази даних, і сайти не мали особливої кількості інтерактивних функцій.<br></br>Уявіть собі Web 1.0 як мережу, призначену лише для читання.<br></br><br></br><strong>Web2</strong><br></br>
  Більшість з нас знайомі з Інтернетом у його сучасному вигляді, який зазвичай називають web2. Ви можете думати про web2 як про інтерактивну та соціальну мережу.<br></br>У світі web2 не обов'язково бути розробником, щоб брати участь у процесі створення. Багато додатків створені таким чином, що кожен може стати їхнім творцем.<br></br>Якщо ви хочете створити ідею і поділитися нею зі світом, ви можете це зробити. Якщо ви хочете завантажити відео і дозволити мільйонам людей побачити його, взаємодіяти з ним і коментувати його, ви також можете це зробити.<br></br>Web2 насправді простий, і саме через його простоту все більше людей по всьому світу стають творцями.<br></br>Інтернет в його нинішньому вигляді дійсно чудовий з усіх боків, але є деякі області, де ми можемо досягти набагато більшого успіху.<br></br><br></br><strong>Web3</strong><br></br>між web2 і web3 є кілька фундаментальних відмінностей, але в основі лежить децентралізація.<br></br>У web3 розробники зазвичай не створюють і не запускають додатки, які працюють на одному сервері або зберігають свої дані в єдиній базі даних (зазвичай розміщеній і керованій одним хмарним провайдером).<br></br>Замість цього додатки web3 працюють на блокчейні, децентралізованій мережі з багатьох рівноправних нод (серверів) або на їх комбінації, що утворює криптоекономічний протокол. Ці додатки часто називають dapps (децентралізовані додатки), і ви побачите, що цей термін часто використовується у просторі web3.<br></br><br></br>Щоб дізнатися більше про Web1, Web2 і Web3, читайте <a className="cla" href="https://www.freecodecamp.org/news/what-is-web3/" target="_blank">тут</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoinbase() {
  const message = this.createChatbotMessage(<a>Як делегувати токени GRT за допомогою Coinbase Wallet<br></br><br></br>У цій статті ви дізнаєтеся, як делегувати свої токени GRT в рамках протоколу The Graph за допомогою гаманця <a className="cla" href="https://www.coinbase.com/wallet" target="_blank">Coinbase Wallet</a>.<br></br><br></br>Щоб ознайомитися з гайдом від Graphtronauts, натисніть <a className="cla" href="https://blog.graphtronauts.com/%D1%8F%D0%BA-%D0%B4%D0%B5%D0%BB%D0%B5%D0%B3%D1%83%D0%B2%D0%B0%D1%82%D0%B8-%D1%81%D0%B2%D0%BE%D1%97-%D1%82%D0%BE%D0%BA%D0%B5%D0%BD%D0%B8-grt-%D0%B7%D0%B0-%D0%B4%D0%BE%D0%BF%D0%BE%D0%BC%D0%BE%D0%B3%D0%BE%D1%8E-%D0%B3%D0%B0%D0%BC%D0%B0%D0%BD%D1%86%D1%8F-coinbase-fea636ac3cc8" target="_blank">тут</a>. Або, якщо ви віддаєте перевагу відеоінструкції, ви знайдете її нижче.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCryptocurrencies() {
  const message = this.createChatbotMessage(<a>Назва - це поєднання, або портманто, криптографії та валюти. На відміну від класичних валют (які зазвичай називають "фіатними"), що використовують фізичні банкноти та монети, криптовалюти є повністю цифровими. Як і будь-яку іншу валюту, ви можете використовувати криптовалюту для купівлі товарів і послуг, а також переказувати її друзям і родичам по всьому світу. Однак криптовалюта має кілька додаткових функцій, які відрізняють її від традиційних валют.<br></br><br></br>Коли ви кладете фіатну валюту в банк, ви, по суті, позичаєте свої гроші цьому банку і довіряєте йому, що він поверне їх вам, коли ви попросите. Хоча це, як правило, добре працює для обох сторін, банки заробляють на ваших грошах, надаючи їх у позику іншим і отримуючи відсотки за ці позики. Крім того, банки стягують додаткові комісії, такі як комісія за зняття коштів або щомісячна плата за обслуговування рахунку, а також можуть встановлювати вимоги до мінімального залишку на рахунку.<br></br><br></br>Традиційний банк вважається централізованим, а криптовалюта децентралізована, тобто в ній немає однієї людини, яка контролює все - насправді, є тисячі людей, які допомагають перевіряти всі транзакції, що відбуваються в блокчейні - а це означає, що ви маєте середовище, яке гарантує довіру, покращене узгодження даних і менше вразливих сторін. Це багатослівний спосіб сказати, що ви самі контролюєте свої активи.<br></br><br></br>Підвищена конфіденційність, безпека, мобільність і прозорість криптовалют означає, що немає місця для маніпуляцій з транзакціями, зміни кількості грошей або коригування правил посеред гри. Криптовалюта - це не організація, вона не контролює ваші кошти; ви можете бути власним банком.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsABlockchain() {
  const message = this.createChatbotMessage(<a>Блокчейн можна уявити як записну книжку, яка слугує для відстеження криптовалютних транзакцій, так само як витрати за чековими книжками відстежуються за допомогою реєстру грошових рахунків. Блокчейн - це система для запису транзакцій, здійснених за допомогою криптовалют, таких як ETH або Bitcoin. Дані про транзакції зберігаються в блоці з безлічі транзакцій. Після заповнення блоку створюється новий блок, який посилається на попередній блок і приєднується до нього; звідси походить термін "блокчейн".<br></br><br></br>Деякі блокчейни, такі як Ethereum, підтримуються за допомогою рівноправної мережі комп'ютерів, що дозволяє будь-якому користувачеві розміщувати блокчейн і отримувати до нього доступ з будь-якої точки світу. Коли відбувається транзакція, вона реєструється і розподіляється в книзі записів кожного користувача в мережі блокчейн.<br></br><br></br>Ці окремі комп'ютери, використовувані разом, утворюють глобальну децентралізовану базу даних для зберігання всіх даних блокчейну. Децентралізованість означає, що замість того, щоб керувати даними в одному місці та контролювати їх однією компанією або особою, ними керують усі користувачі мережі.<br></br><br></br>Блокчейн розроблений таким чином, щоб бути фіксованим, тобто незмінним. Після того, як щось було записано в блокчейн, це не може бути змінено або скасовано. Це означає, що будь-які транзакції в блокчейні є постійними, і запис про них завжди буде доступний для перегляду будь-кому. Децентралізація в поєднанні зі структурою даних блокчейну створює постійну хронологію подій.<br></br><br></br>Деякі банки вимагають, щоб ви зв'язалися з ними, щоб переглянути транзакції, які були здійснені на вашому рахунку понад місяць тому. Використання блокчейну позбавить вас від необхідності звертатися до банку, оскільки всі ваші транзакції вже будуть відкриті для перегляду.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSafe() {
  const message = this.createChatbotMessage(<a><strong>Чи безпечна криптовалюта?</strong><br></br>Безпека криптовалют є предметом жвавих дискусій. З одного боку, прибічники стверджують, що криптовалюта більш безпечна, ніж традиційна валюта, оскільки вона не підлягає державному контролю або маніпуляціям. З іншого боку, скептики стверджують, що криптовалюта вразлива до хакерських атак і крадіжок.<br></br><br></br>Зрештою, безпека криптовалюти залежить від індивідуальних практик безпеки користувача та від безпеки криптовалютної мережі. Наприклад, якщо ви зберігаєте криптовалюту в цифровому гаманці, який не захищений паролем, то він піддається небезпеці злому.<br></br><br></br>Аналогічно, якщо мережа не захищена, то ваша криптовалюта може бути викрадена кіберзлочинцями. Таким чином, важливо провести дослідження, перш ніж інвестувати в криптовалюту, а також бути обережним при її зберіганні та використанні.<br></br><br></br>Щоб дізнатися про переваги та недоліки використання криптовалют, читайте <a className="cla" href="https://www.abcmoney.co.uk/2022/03/16/is-cryptocurrency-safe/" target="_blank" rel="noreferrer">тут</a>.<hr></hr><strong>Чи безпечний блокчейн?</strong><br></br>Поряд з криптовалютами, які неможливо підробити або зламати, технології блокчейн пропонують неймовірну безпеку на додаток до своєї корисності. Децентралізована природа блокчейнів і неможливість змінити інформацію в них допомагають блокчейнам бути стійкими до втручання, злому і шахрайських транзакцій. Оскільки в мережі існує багато поширених версій блокчейну, хакеру потрібно отримати контроль над незліченною кількістю комп'ютерів, щоб завдати реальної шкоди. Це робить злом блокчейну майже неможливим.<br></br><br></br>Впровадження технології блокчейн у світову економіку дозволить зробити ринки швидшими, безпечнішими та прозорішими для всіх.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleEthereum() {
  const message = this.createChatbotMessage(<a>Ethereum - це програмована технологія блокчейн, яку розробляє Vitalik Buterin з 2013 року. Ethereum дозволяє користувачам надсилати та отримувати криптовалюти, отримувати доступ до децентралізованих додатків, відомих як dapps, та створювати їх, отримувати винагороди за допомогою стейкінгу та багато іншого. Вільний доступ до фінансових послуг та більш приватний і децентралізований інтернет є одними з ключових цілей створення Ethereum.<br></br><br></br>Після свого заснування Ethereum впровадив систему децентралізованого управління, в якій немає жодної людини, яка б контролювала його. Відсутність власності робить майже неможливим для урядів чи організацій відмовити вам у доступі до послуг на Ethereum. Додаткам на Ethereum не потрібні всі ваші персональні дані для використання. Це дає користувачам більше контролю над своєю конфіденційністю і підвищує безпеку кожної транзакції.<br></br><br></br>Ethereum відкритий для будь-кого і будь-де, якщо у них є доступ до гаманця Ethereum, наприклад, до smart гаманця Loopring. Ви можете думати про гаманець Ethereum як про банківський додаток, без банку, який контролює ваші кошти. Достатньо лише підключення до інтернету, щоб користуватися Ethereum, відкриваючи доступ до банківських послуг по всьому світу.<br></br><br></br>Peer-to-peer мережа Ethereum усуває потребу в посереднику і дозволяє користувачам взаємодіяти безпосередньо один з одним для здійснення транзакцій та укладення інших угод. Завдяки смарт-контрактам користувачі мають вбудовану гарантію того, що угоди відбудуться тільки в тому випадку, якщо обидві сторони нададуть те, про що домовилися.<br></br><br></br>
  Всі транзакції в блокчейні Ethereum виконуються за допомогою власного криптовалютного ефіру, або ETH. Кожного разу, коли ETH надсилається або використовується dapp, користувачі сплачують невелику комісію в ETH за використання мережі Ethereum. Ці платежі використовуються для винагороди майнерів за перевірку операцій у блокчейні. Майнери діють як реєстратори, переконуючись, що ніхто не шахраює і не маніпулює блокчейном, а також забезпечують його безпеку. Це називається - proof of work. Майбутнє Ethereum передбачає новий метод захисту блокчейну, в якому кошти фіксуються, або стейкаються, щоб дозволити користувачам виступати в ролі хранителів записів для блокчейну. Це називається proof of stake.<br></br><br></br>Щоб дізнатися більше про Ethereum, читайте <a className="cla" href="https://desk.zoho.com/portal/loopring/en/kb/articles/what-is-ethereum" target="_blank" rel="noreferrer">тут</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOW() {
  const message = this.createChatbotMessage(<a>Proof of Work (PoW) - це алгоритм консенсусу для більшості основних криптовалют; це один зі способів забезпечення безпеки реєстру криптовалют. PoW був представлений Satoshi Nakamoto для блокчейну Bitcoin, що зробило його першим алгоритмом консенсусу, і він залишається основним на сьогодні.<br></br><br></br>Ми не вперше чуємо про PoW, адже додаток Hashcash розроблений Adam Back'om у 1997 році й використовував функцію proof-of-work. Однією з найбільших переваг цієї технології є те, що вона запобігає виникненню подвійних витрат. Цей термін використовується практично лише для цифрових грошей і криптовалют, оскільки ви не можете витратити одну і ту ж фізичну готівку двічі, тобто, якщо ви пішли в магазин і заплатили готівкою за напій, ви не зможете використати цю ж готівку в іншому магазині, тому що в першому магазині гроші були зафіксовані в касі.<br></br><br></br>У криптовалюті або будь-яких інших цифрових грошах можна швидко пересилати велику кількість даних, і без підтвердження у вас будуть люди, які зможуть витратити достатньо швидко, щоб обдурити кілька магазинів і переконати їх у тому, що їм заплатили, і бухгалтерська звітність буде швидко зіпсована. У невеликих масштабах це може спрацювати, але коли 10 і 100 тисяч людей торгують на блокчейні, це дуже швидко призводить до плутанини.<br></br><br></br>Було б нудно і неефективно додавати всі транзакції по одній при такій кількості охочих торгувати, тому ці транзакції об'єднуються в блок, який пов'язаний з попереднім і посилається на нього - звідси й назва "блокчейн". Додавання до блоку не є безплатним, є користувачі, яких називають майнерами, які допомагають перевіряти кожен блок транзакцій. Це коштує обчислювальних потужностей і реальної енергії, щоб створити хеш (уявіть собі цифровий відбиток пальця), який практично неможливо змінити.<br></br><br></br>Через високу обчислювальну потужність майнери отримують винагороду за свої послуги, а блоки передаються в мережу. Завдяки потужності криптографії в PoW, якщо ви спробуєте здійснити хибну транзакцію, вона буде автоматично відхилена мережею, але ви все одно заплатите комісію майнерам. В цьому і є вся привабливість: спроба здійснити хибну транзакцію обходиться дорого, а чесна поведінка приносить прибуток.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOS() {
  const message = this.createChatbotMessage(<a>Як і Proof of Work, Proof of Stake (PoS) - це алгоритм консенсусу, який базується на кількості стейкінгу монет. Під стейкінгом мається на увазі вкладення коштів в мережу для того, щоб стати валідатором блоків; валідатори можуть брати участь в процесі створення нових блоків, тільки якщо їхні монети заблоковані. Кошти виступають в ролі застави, тому шкідливий валідатор втратить свої кошти та позбавиться доступу до мережі.<br></br><br></br>PoS - це альтернатива PoW, яка має певні переваги та недоліки. У Proof of Work винагороду отримує лише майнер, і всі змагаються за те, хто надасть дійсний блок, витрачаючи таким чином багато енергії. Модель Proof of Stake досягає консенсусу, враховуючи розмір стейку і те, як довго він знаходиться в мережі, а потім вибирається валідатор, що економить значну кількість енергії та часу.<br></br><br></br><table><tr className="indexer-table-header">
  <th><strong>Плюси</strong></th>
  <th><strong>Мінуси</strong></th>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Ефективність: На захист блокчейну витрачається дуже мало енергії.</td>
  <td>Масштабність: Ще не існує системи PoS, яка б досягла розміру Ethereum або Bitcoin.</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Пропускна здатність: Вам не потрібно розв'язувати комплексні комп'ютерні проблеми, тому швидкість транзакцій збільшується.</td>
  <td>Менша безпека: Участь в PoS-системі може стимулювати накопичення монет для 51% атаки. У досить великих блокчейнах це набагато менш ймовірно.</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Нижчий початковий рівень: Для участі в моделі Proof of Stake вам потрібно витратити гроші лише один раз. Система PoW вимагає наявності апаратного забезпечення і безперервного часу автономної роботи.</td>
  <td>Централізація: Існує стимул холдити більше токенів в стейкінгу. Деякі блокчейни почали карати за це і стимулювати менших валідаторів.</td>
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
  const message = this.createChatbotMessage(<a><strong>Монета (Coin)</strong><br></br>У криптовалюті термін "coin" використовується для опису валюти, яка належить до власного блокчейну (наприклад, Ether для блокчейну Ethereum, Bitcoin для блокчейну Bitcoin і т.д...). Монета - це цифрова валюта, яка може використовуватися в різних сферах:<br></br>Як форма оплати (наприклад, переказ ETH іншій особі за товар або послугу), засіб заощадження (наприклад, дехто розглядає Bitcoin як "безпечний притулок" для свого капіталу), розрахункова одиниця (наприклад, такі предмети, як NFT, можуть бути оцінені в ETH), а для блокчейнів, які використовують proof-ofwork, нативна монета також використовується для оплати майнерам за обробку транзакцій і створення блоків.<br></br><br></br><strong>Токен</strong><br></br>У той час як монета є нативною для власного блокчейну, токен створюється в рамках наявного блокчейну. Кожен блокчейн має свій власний формат для токенів. Наприклад, токени, створені на блокчейні Ethereum, мають префікс ERC, за яким слідує номер (наприклад, ERC-20). Технічно будь-хто може створити токен, тому завжди рекомендується вивчити токеноміку перед покупкою.<br></br>Токен може бути взаємозамінним (fungible) або не взаємозамінним, залежно від стандарту, який він використовує. В Ethereum є кілька прикладів стандартів токенів:<br></br><br></br>ERC-20<br></br>Стандарт, який зазвичай використовується для взаємозамінних токенів, які використовуються для цифрових валют, стейкінгу і голосування.<br></br><br></br>ERC-721<br></br>Стандарт, що використовується для невзаємозамінних токенів, таких як NFT для творів мистецтва або пісень.<br></br><br></br>ERC-1155<br></br>Стандарт, який дозволяє більш ефективно здійснювати торгівлю та об'єднувати транзакції. Він може представляти та контролювати будь-яку кількість взаємозамінних і не взаємозамінних типів токенів. Це означає, що токен ERC-1155 може виконувати ту ж роль, що і токени ERC-20 і ERC-721, і навіть обидві одночасно.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStablecoin() {
  const message = this.createChatbotMessage(<a>Стейблкоїн - це криптовалюта, яка призначена для підтримки сталої ринкової ціни. Хоча конкретні механізми можуть відрізнятися в різних криптовалютах, стейблкоїни є дещо стійкими до ринкової волатильності. Вони не повинні зазнавати значних цінових змін, оскільки їхня вартість часто прив'язана до іншого активу, такого як долар США.<br></br><br></br>Основна ідея використання стейблкоїнів полягає в тому, що ви отримуєте переваги як фіатного, так і криптовалютного світів. Ви можете застрахуватися від волатильності криптовалютних ринків і надавати свої стейблкоїни в позику, щоб заробити більше відсотків, ніж у банку чи у брокера.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCEX() {
  const message = this.createChatbotMessage(<a>Централізована біржа (CEX) - це спосіб полегшити торгівлю між користувачами шляхом ведення реєстру ордерів; набір ордерів на купівлю і продаж, які розміщуються окремими інвесторами. Ордери на купівлю або продаж певної кількості криптовалюти за певною ціною - CEX об'єднує ці ордери та виконує їх.<br></br><br></br>Велика різниця між CEX і приватними гаманцями або DEX полягає в тому, що користувачі фактично не обмінюються криптовалютою або фіатом один з одним. Кошти вносяться на депозит, а біржа бере на себе зберігання активів і, по суті, видає трейдеру IOU. Це має свої переваги, такі як нижчі комісії та простіший обмін, але є й недоліки, такі як брак прозорості, що уможливлює зловмисні практики, такі як "відмивання" коштів та маніпуляції з цінами.<br></br><br></br>Оскільки всі кошти зберігаються на біржі, CEX є першочерговою мішенню для потенційних хакерів, і за останні кілька років вони були атаковані кілька разів на сотні мільйонів доларів. Крім того, оскільки CEX розміщується в певному місці, можливі технічні проблеми або атаки, які можуть призвести до простою в роботі. У деяких випадках кошти також можуть бути заморожені та арештовані через державне регулювання.<br></br><br></br>Хоча CEX вимагає проведення процедури "Знай свого клієнта" (KYC), для цілей оподаткування також корисно мати цю інформацію у вільному доступі, і більшість бірж можуть легко надати ваші податкові документи. Доручення CEX зберігати ваші кошти має переваги, якщо вам не зручно контролювати їх самостійно. Деякі користувачі зберігали кошти у своїх особистих гаманцях і забували seed-фрази або втрачали свої приватні ключі, внаслідок чого втрачали криптовалюту на мільйони доларів.<br></br><br></br>Деякі приклади популярних CEX включають Binance, Coinbase, Huobi та Kucoin.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDEX() {
  const message = this.createChatbotMessage(<a>Децентралізована біржа - це peer-to-peer ринок, де транзакції відбуваються безпосередньо між трейдерами. Децентралізованість криптовалюти лежить в основі її цінності - жодні транзакції не проходять через офіційні банки, брокерів чи будь-яких інших посередників. Існує кілька популярних DEX, таких як Uniswap та Sushiwap, які працюють на Ethereum L1.<br></br><br></br>Найбільша різниця між централізованою біржею (CEX) і DEX полягає в тому, що CEX дозволяє здійснювати обмін між фіатом і криптовалютою, в той час, як DEX не може. CEX дозволяє здійснювати маржинальну торгівлю і встановлювати лімітні ордери, які обробляються системою ордерів - це схоже на фондові біржі, такі як Nasdaq.<br></br><br></br>DEX повністю побудована на смарт-контрактах. Вони встановлюють ціни на криптовалюти алгоритмічно і використовують пули ліквідності (LP) для полегшення угод, які розраховуються безпосередньо в блокчейні. DEX зазвичай будується на основі відкритого коду, що означає, що немає нічого прихованого в тому, як він функціонує.<br></br><br></br>На DEX ви знайдете більше різноманіття, DeFi - це місце, де можна отримати доступ до ранніх LP токенів. Вони варіюються від добре відомих токенів до випадкових і іноді безглуздих, тому перед інвестуванням обов'язково проведіть власне дослідження. З усім тим, ризик злому різко знижується, оскільки кошти на DEX зберігаються в особистих гаманцях, а не в центральному сховищі; за останні роки було кілька зломів CEX.<br></br><br></br>CEX вимагає KYC (Знай свого клієнта) для ідентифікації, в той час, як DEX не вимагає ніякої особистої інформації, тому ви залишаєтесь анонімними. Крім того, в той час, як в окремих регіонах буде заборонено купувати криптовалюту, DEX відкриває таку можливість для людей в цих регіонах.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLayerTwo() {
  const message = this.createChatbotMessage(<a>Layer 2 (L2) - це вторинний фреймворк або протокол, який надбудовується над наявним блокчейном. Основна мета протоколу L2 - допомогти подолати труднощі зі швидкістю транзакцій і масштабуванням основних криптовалютних мереж, для Ethereum ми називаємо це Trilemma масштабування Ethereum - масштабування, швидкість і децентралізація.<br></br><br></br>Наразі Ethereum обробляє ~13 транзакцій в секунду, в той час, як компанії, що обслуговують кредитні картки, такі як MasterCard і Visa, обробляють понад 1700 транзакцій в секунду і стягують за це незначну комісію. Якщо ви знайомі з Square або подібними сервісами для малого бізнесу, ви ніколи не уявите собі використання лише Ethereum для здійснення транзакцій. Уявіть, що ви намагаєтесь заплатити та чекаєте 20-30 хвилин, щоб підтвердити платіж, не кажучи вже про те, що ви платите комісію за це підтвердження; ось тут і вступає в дію L2, і є кілька способів зробити це.<br></br><br></br>Це швидше, дешевше і так само безпечно, як і Ethereum. Так чому ж не всі так роблять? Ну, Optimistic Rollups страждають від більш тривалого часу завершення/виведення коштів, як правило, вони зберігають кошти протягом 7 днів. Validium і Plasma працюють off-chain, тому їм не вистачає справжньої безпеки Ethereum. zkRollups - найкращі з можливих, оскільки вони швидкі та безпечні в мережі, але технологія, необхідна для їх розробки, є дуже складною.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKProof() {
  const message = this.createChatbotMessage(<a>Zero-knowledge proof (zkProof) - це можливість довести щось комусь, не повідомляючи жодної додаткової інформації, окрім того, що це істина. Вам не потрібно доводити, що ви володієте певною інформацією, просто розкриваючи її; завдання полягає в тому, щоб довести володіння інформацією, не розкриваючи саму інформацію.<hr></hr><strong> Додатки </strong><br></br><br></br><strong> Фінанси:</strong> Ви можете використовувати zkProofs, щоб дозволити клієнтам довести, що їхнє секретне число знаходиться у відомому діапазоні. Наприклад, позичальник може довести, що його дохід знаходиться у певному діапазоні, не вказуючи точну суму своєї зарплати.<br></br><br></br><strong>Онлайн-голосування:</strong> zkProof дозволить вам голосувати анонімно і перевіряти, чи був ваш голос включений в остаточний підрахунок голосів.<br></br><br></br><strong>Аутентифікація:</strong> Ви можете входити на сайти без обміну секретною інформацією, наприклад, паролем.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?time_continue=18&v=fOGdb1CTu5c&feature=emb_logo'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSmartContract() {
  const message = this.createChatbotMessage(<a>Смарт-контракт - це просто програма, яка працює на блокчейні Ethereum. Це набір коду і даних, які знаходяться за певною адресою в блокчейні; це різновид облікового запису Ethereum. Вони можуть мати баланс і відправляти транзакції через мережу, але не залежать від користувача. Вони запрограмовані робити саме те, що їм наказано, визначаючи певні правила та автоматично дотримуючись їх на основі свого коду.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNFT() {
  const message = this.createChatbotMessage(<a>Представлений Dieter Shirley у вересні 2017 року і доопрацьований у червні 2018 року, ERC-721 був розроблений для невзаємозамінних токенів (Non-Fungible Token). Вони унікальні, жоден токен не повторює інший, і їм присвоюється змінна uint256 під назвою tokenId, яка повинна бути унікальною. Це може бути майже будь-що у світі, що є унікальним і потребує підтвердження права власності:<br></br><br></br>Цифрове мистецтво (GIF-файли, колекційні предмети, музика, відео)<br></br>Доменне ім'я<br></br>Документи на автомобіль<br></br>Квитки на реальну подію<br></br>Токенізовані інвойси<br></br>Юридичні документи<br></br>Медичні записи<br></br>Підписи<br></br><br></br>NFT мають особливі властивості:<br></br><br></br>Кожен випущений токен має унікальний ідентифікатор, який безпосередньо пов'язаний з однією адресою Ethereum.<br></br>Вони не взаємозамінні з іншими токенами 1:1. Наприклад, 1 ETH точно такий же, як і інший ETH. З NFT справа йде інакше.<br></br>Кожен токен має власника, і цю інформацію легко перевірити.<br></br>Вони існують на Ethereum і можуть купуватися і продаватися на ринку NFT, заснованому на Ethereum.<br></br><br></br>Це означає, що якщо ви володієте NFT:<br></br><br></br>Ви можете довести, що володієте ним.<br></br>Токен доводить, що ваша версія є оригіналом.<br></br>Ваш приватний ключ є доказом права власності.<br></br>Ніхто не може ніяк ним маніпулювати.<br></br>Ви можете продати його або залишити собі назавжди.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMining() {
  const message = this.createChatbotMessage(<a>Майнінг криптовалют - це процес перевірки та підтвердження транзакцій у блокчейні. Майнери розв'язують складні криптографічні рівняння і додають нові блоки до блокчейну з цими даними. Чесні та успішні майнери отримують винагороду за майнінг, яка в Ethereum називається gas fee.<br></br><br></br>Коли створюються нові транзакції в блокчейні, вони надсилаються в пул пам'яті (mempool). Майнер перевіряє дійсність транзакцій, що очікують на розгляд, і групує їх у блоки. Це схоже на те, як люди усно повідомляють вам про транзакції, а ви записуєте їх по черзі на аркуші паперу - аркуш паперу в цій метафорі є блоком. Цей блок потрібно підтвердити; це вимагає комплексного розв'язання математичних задач і потребує багато обчислювальних ресурсів. Після успішного підтвердження блок передається в мережу, а майнер отримує винагороду.<br></br><br></br>Щоб дізнатися більше про те, як працює майнінг, читайте <a className="cla" href="https://desk.zoho.com/portal/loopring/en/kb/articles/what-is-crypto-mining" target="_blank" rel="noreferrer">тут</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNodes() {
  const message = this.createChatbotMessage(<a>Ноди - це частина клієнтського програмного забезпечення. Існує 3 різних типи нод, і кожен з них по-різному споживає дані. Крім того, існують різні стратегії синхронізації, які дозволяють скоротити час синхронізації; синхронізація - це те, як швидко ви можете отримати точну інформацію про статус Ethereum.<br></br><br></br><strong>Full Node</strong><br></br><br></br>Містить повну інформацію щодо всього блокчейну.<br></br>Перевіряє всі блоки та всі стани, беручи участь у валідації блоків.<br></br>Всі статуси можуть бути отримані з full ноди.<br></br>Обслуговує мережу і надає дані за запитом.<br></br><br></br><strong>Light Node</strong><br></br><br></br>На відміну від повної ноди, легкі ноди завантажують лише заголовки блоків. Вони містять лише коротку інформацію про вміст блоків. Якщо необхідна додаткова інформація, легка нода може запросити її у повної ноди. Це дозволяє легкому вузлу звіряти отримані дані з кореневим станом у заголовках блоків.<br></br>Легкі вузли корисні тим, що вам не потрібно потужне обладнання або висока пропускна здатність, щоб запустити їх як повні ноди.<br></br><br></br><strong>Archive Node</strong><br></br><br></br>Вся інформація, що зберігається в повному вузлі, записується в історичні стани в архівній ноді. Якщо ви хочете отримати інформацію з випадкового блоку, наприклад, блоку #222,222, вам слід використовувати цю ноду. Очевидно, що дані є масивними. Терабайти даних в архівній ноді можуть бути менш привабливими для пересічного користувача, але корисними для таких сервісів, як Block Explorers, аналітика мережі та провайдерів гаманців.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTokenBurn() {
  const message = this.createChatbotMessage(<a>Спалювання токенів означає безповоротне знищення монети або токена, але навіщо це робити? Технологія блокчейн дає владу користувачам, ви можете бути самодостатніми - повністю володіти своїми активами. Вам не потрібен банк або фінансова установа, транзакції не обмежуються третіми сторонами, і в більшості випадків пропозиція обмежена можливістю дефляції, оскільки ви можете знищувати токени.<br></br><br></br>Спалювання токена означає, що ви відправляєте токен на заблоковану адресу, яка називається burn-адресою, і яку неможливо відновити. Адреса спалення не має приватного ключа, тобто є публічна адреса, на яку можна відправити токен, але немає ключів для відкриття гаманця. Це еквівалентно розміщенню ваших фізичних грошей у незламному сейфі, від якого ніхто не має пароля для відмикання.<br></br><br></br>Вартість токена залежить від попиту та пропозиції. Зазвичай, чим вищий попит, тим вища вартість. І навпаки, якщо пропозиція менша, то вартість також вища. Таким чином, коли існує фіксована пропозиція токенів, існує можливість знищити частину цієї пропозиції. Це може бути використано з кількох причин, наприклад, для збільшення вартості токенів або для забезпечення стабільності вартості.<br></br><br></br><strong>Збільшення вартості проєкту</strong><br></br>Корпоративні викупи є звичним явищем у сучасному фінансовому світі, що розвивається; компанії викуповують частину власних акцій та облігацій з ринку, щоб підвищити вартість решти емісії. Подібна подія сталася у 2021 році, коли Ethereum викупив, а потім спалив 1,3 мільйона ETH, що перебували в циркуляції. Мета полягає в тому, щоб зробити ETH дефляційним в рамках нового протоколу - гарантувати, що токени Ethereum можуть бути ефективним засобом збереження вартості та з часом зростати в ціні коштом зменшення пропозиції.<br></br><br></br><strong>Стабілізація вартості</strong><br></br>Стабільні монети мають важливе значення для криптовалют і DeFi в цілому. В екосистемі вони забезпечують середовище для розрахунків і зберігання, ізольоване від волатильності звичайних монет і токенів. Компроміс тут полягає у використанні центрального резерву, де ви втрачаєте децентралізацію. Алгоритмічні стейблкоїни намагаються подолати цю проблему, регулюючи пропозицію.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDAO() {
  const message = this.createChatbotMessage(<a><strong>Використання The Graph для забезпечення роботи DAO</strong> - читайте тематичне дослідження Snapshot, <a className="cla" href="https://thegraph.com/blog/using-the-graph-for-daos-snapshot/" target="_blank" rel="noreferrer">тут</a>.<hr></hr>Ця абревіатура розшифровується як "децентралізована автономна організація". Вона існує як система заздалегідь визначених правил, які визначають, які дії буде здійснювати організація. Вона відрізняється від звичайних компаній тим, що базується на відкритому програмному коді та повністю управляється спільнотою. Це означає, що немає жодної відповідальної особи, жодної ради директорів, а отже, немає централізації влади.<br></br><br></br>Правила побудовані у вигляді смарт-контрактів, які регулюють колективну роботу учасників і членів спільноти. Отже, хоча концепція децентралізованої організації не є особливо новою, можливість автоматизувати її робочі механізми та функції робить DAO такою цікавою концепцією.<br></br><br></br>Багато спільнот використовують DAO для автоматизованих кампаній зі збору коштів, таких як ICO (Initial Coin Offering), випуску та розподілу внесків, зібраних через протокол, або як системи прийняття рішень та голосування. Крім того, все це робиться без участі людини, щоб забезпечити надійність і безпеку процесу.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKSnark() {
  const message = this.createChatbotMessage(<a>Zero-knowledge Succinct Non-interactive Argument of Knowledge - <strong>zkSNARK</strong><br></br><br></br>Розберемо його:<br></br><br></br>Zero-knowledge - ми розглядали це в інших статтях, але коротка версія полягає в тому, що ви доводите щось, не повідомляючи нікому, як ви це довели, лише те, що це можна довести.<br></br>Succinct - Короткий і чіткий; доказ значно менший за обсяг, ніж дані, які він представляє.<br></br>Non-interactive - інформація йде від того, хто доводить, до того, хто перевіряє, а не туди-сюди.<br></br>Argument of Knowledge - доказ є обґрунтованим, не існує зловмисника, який би обдурив систему, не володіючи знаннями, що підтверджують його твердження.<br></br><br></br>SNARK вимагає наявності довіри між тим, хто доводить, і тим, хто перевіряє. Це набір публічних параметрів, які нагадують правила гри. Ці параметри генеруються під час процедури встановлення довіри. Це спільні обчислення, що виконуються у визначений час групою учасників-добровольців. Поки один верифікатор поводиться чесно, параметри надійно згенеровані, тому чим більше сторін беруть участь, тим більш надійною можна вважати цю церемонію. Цю процедуру необхідно проводити для кожної нової версії продукту.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKStark() {
  const message = this.createChatbotMessage(<a>Scalable Transparent Argument of Knowledge з zero-knowledge - <strong>zkSTARK</strong><br></br><br></br>Пояснюємо:<br></br><br></br>Scalable - Доказ відносно невеликий за розміром і перевірка займає менше часу навіть для великої кількості підтверджень, тому його можна масштабувати.<br></br>Transparent - немає вимог до надійної конфігурації.<br></br>Argument of Knowledge - доказ є надійним, не існує зловмисника, який би міг обдурити систему, не володіючи знаннями, що підтверджують його твердження.<br></br><br></br>zkSTARKs були створені Eli-Ben Sasson, професором Ізраїльського технологічного інституту Technion. Основна відмінність полягає в тому, що zkSTARK не вимагає початкового налаштування довіри - церемонії, про яку йшлося в розділі SNARK. STARK менш дорогий в обчислювальному плані, ніж SNARK, і теоретично є квантовим комп'ютером. Так в чому ж недолік? Розмір підтверджень набагато більший, ніж у SNARK, і це може підвищити вартість транзакцій в мережі.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMetaverse() {
  const message = this.createChatbotMessage(<a>Вперше це слово з'являється в науково-фантастичному романі 1992 року під назвою "Снігова катастрофа"; це поєднання слів "мета" і "всесвіт". Метасвіт часто пов'язують з передовими технологіями віртуальної реальності через збільшення попиту на глибоке занурення. Хоча метапростір не є ігровою концепцією, він отримав найбільший розвиток саме в цьому просторі. Гру під назвою Second Life часто називають першим метасвітом, а роман Ready Player One (згодом фільм) продовжив розвивати її потенціал.<br></br><br></br>В ідеалі, справжній метапростір підтримуватиме не лише ігри чи соціальні мережі, а й поєднуватиме економіку, цифрову ідентичність, децентралізоване управління та інші додатки. Подумайте про те, що Roblox - це не просто кастомна гра, вона функціонує для віртуальних подій, таких як концерти та конференції. Гра не просто для гри, вона для спілкування у віртуальному просторі.<br></br><br></br>Криптовалюта вписується в метапростір, забезпечуючи незмінність і підтвердження права власності. Подумайте, як у цьому випадку працюватимуть NFT: цифровий одяг, аксесуари тощо - все це можна буде безпечно і швидко перевірити, і все це в децентралізованому середовищі. Внутрішньоігрові валюти могли б процвітати, і користувач міг би заробляти гроші та витрачати їх там. Завдяки гаманцям метапростір стає легкодоступним, а завдяки блокчейну ми отримаємо надійне управління, подібно до того, як ми голосуємо в реальному житті за керівників.<br></br><br></br>Єдиний, цілісний метапростір, ймовірно, ще не скоро з'явиться, але є багато розробок у вірному напрямку, і блокчейн буде лідером у цьому питанні.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleArbitrum() {
  const message = this.createChatbotMessage(<a>Arbitrum - це технологія масштабування для Ethereum, яка значно зменшує витрати та зменшує затримки. Arbitrum запустив Arbitrum One в основній мережі Ethereum, і команда готується до його майбутнього публічного релізу.<br></br><br></br>Завдяки інтеграції з Arbitrum, сервіси індексації та запитів хостингу The Graph тепер доступні в мережі. Розробники на Arbitrum One тепер зможуть створювати та публікувати відкриті API (підграфи), які програми можуть запитувати за допомогою GraphQL.<br></br><br></br>The Graph вже підтримує індексування даних для Ethereum, IPFS, Celo, Avalanche, Fantom і Moonbeam. Крім того, тисячі розробників вже створили понад 10 000 підграфів для таких додатків, як DODO, MCDEX, Uniswap, Synthetic, Gnosis, Decentraland тощо. Додавши Arbitrum до цього списку, The Graph зробив ще один крок до розширення та об'єднання екосистеми Web3.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStatistics() {
  const message = this.createChatbotMessage(<a>Якщо ви шукаєте актуальні дані/статистику. Тоді, будь ласка, будьте більш конкретними. Ось список того, про що ви можете мене запитати:<br></br><br></br>Кількість активних делегатів<br></br>Кількість активних делегацій<br></br>Кількість холдерів<br></br>Кількість підграфів<br></br>Кількість кураторів<br></br>Кількість активних індексаторів<br></br>Загальна сума комісій за запити <br></br>Загальна кількість GRT, які застейкані<br></br>Загальна кількість GRT, делегованих делегатами<br></br>Загальна кількість GRT, сигналізована кураторами<br></br>Всього делеговано GRT індексаторами<br></br>Всього спалених GRT</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTMobile() {
  const message = this.createChatbotMessage(<a><strong>Deutsche Telekom та T-Mobile US запустили новий конкурс T Challenge, спрямований на розвиток Web3 за допомогою 5G</strong><br></br><br></br>Глобальний конкурс для стартапів, розробників та аналітиків, який нагороджує інноваційні рішення з використанням мереж 5G, повертається, цього разу в пошуках технологій Web3, які змінять спосіб використання інтернету у світі.<br></br><br></br>BONN, Німеччина та BELLEVUE, штат Вашингтон - 2 листопада 2022 року - Deutsche Telekom AG та T-Mobile US, Inc. (NASDAQ: TMUS) об'єдналися, щоб запустити третій щорічний конкурс T Challenge, глобальну сцену для інноваторів та проривних компаній, які змагатимуться за нагороду у номінації найкращих рішень на основі протоколу Public Blockchain для Web3. Розроблені учасниками рішення використовуватимуть можливості 5G, щоб втілити Web3 в життя, і 5G відіграватиме важливу роль у тому, як користувачі залишатимуться на зв'язку з цими інноваціями.<br></br><br></br>Заявки на участь у конкурсі офіційно приймаються до 20 січня 2023 року. Шість переможців розділять між собою 600 000 євро (приблизно стільки ж у доларах США) та оплачену поїздку до Bonn, Німеччина, щоб представити свої ідеї компаніям Deutsche Telekom та T-Mobile US.<br></br><br></br>Щоб прочитати повну версію статті, в якій згадується The Graph, дивіться <a className="cla" href="https://www.t-mobile.com/news/network/2023-t-challenge" target="_blank" rel="noreferrer">тут</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSolana() {
  this.handleSubstreams = this.handleSubstreams.bind(this);
  const message = this.createChatbotMessage(<a><strong>The Graph тепер підтримує Solana з допомогою підпотоків</strong><br></br><br></br>The Graph Foundation радий повідомити про підтримку Solana з підпотоками. Спільнота розробників Solana тепер може почати використовувати The Graph для створення швидких додатків. Використовуючи нову технологію підпотоків, розробники можуть ефективно витягувати та інтерпретувати дані в мережі з основної бета-версії Solana для своїх додатків. Підтримка підпотоків - це перший крок на шляху до впровадження підграфів в Solana.<br></br><br></br><a className="cla" onClick={this.handleSubstreams}><strong>Substreams</strong></a>, які є повністю відкритими, дають можливість розробникам Solana створювати абсолютно нові способи роботи з мережевими даними завдяки їх швидкості та ефективності. Розробники можуть використовувати модулі підпотоків, написані на Rust, для створення специфічних для протоколу потоків даних або аналітичних наборів даних по всьому ринку. Вони також можуть бути використані для створення сповіщень у форматі реального часу та відображення довготривалих часових послідовностей. Вирвавшись із замкненого кола, розробники підпотоків можуть використовувати створені іншими потоки для економії часу, а також розширювати можливості всієї екосистеми web3, роблячи свою роботу загальнодоступною і такою, що підлягає компіляції. В результаті, підпотоки породжують нові та інноваційні варіанти використання в усій спільноті розробників Solana.<br></br><br></br>Розроблені StreamingFast, основним розробником екосистеми The Graph, підпотоки дозволяють надзвичайно швидко обробляти історичні дані (в пакетному та потоковому режимі). Підпотоки відкривають двері до багатьох переваг, серед яких: живлення будь-яких систем даних через технологічні стоки, повторне використання Rust-коду вашої програми Solana для читання даних у мережі, лазерно-фокусоване налагодження, спільне та комбіноване доопрацювання потоків даних, а також надійні потоки, що враховують реорганізацію.<br></br><br></br>Справжня технологія, що змінює галузь, підпотоки готові розблокувати продуктивність підграфів завдяки паралельній обробці даних, що значно підвищить швидкість синхронізації. Завдяки горизонтально масштабованому паралельному механізму, підпотоки здатні збільшити продуктивність історичного індексування більш ніж у 100 разів.<br></br><br></br>Повну версію блогу можна прочитати, <a className="cla" href="https://thegraph.com/blog/indexing-solana-substreams/" target="_blank" rel="noreferrer">тут</a>.</a>
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
    const message = this.createChatbotMessage(<a><strong>17 грудня 2022 року The Graph виповнилося 2 роки!</strong><br></br><br></br>Багато людей з усього світу допомогли відсвяткувати запуск мережі The Graph в глобальній мережі та прихильність до децентралізації, відвідавши один з наступних шести заходів з нагоди дня народження, організованих спільнотою. FOMO був дійсно справжнім! Ви можете послухати Twitter Space <a className="cla" href="https://twitter.com/i/spaces/1vOGwMQpzPgxB" target="_blank" rel="noreferrer">тут</a>. Якщо ви пропустили його, не хвилюйтеся, ви можете наверстати втрачене, натиснувши на кнопки нижче.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
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
      const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/colsongrteacher?s=21&t=G1z0E5ndRT5F549tsuRY2A' target="_blank" rel="noreferrer"><strong>Colson</strong></a> провів святкування 2-го дня народження The Graph в Amstel Boathouse в Amsterdam.<br></br><br></br>Чекаємо на публікацію контенту з події...<br></br><br></br>Ви також можете ознайомитися з іншими подіями нижче.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
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
        const message = this.createChatbotMessage(<a>The Graph, святкування 2-го дня народження в Area3 El Salvador в місті Buenos Aires.<br></br><br></br>Ви можете слідкувати за подією за допомогою Twitter-каналу, створеного The Graph Espanol, <a className="cla" href='https://twitter.com/espanolgraph/status/1604257219628916736?s=46&t=MuGXfy1qv8hl2x-HpLcfAg' target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Ви також можете ознайомитися з іншими подіями нижче.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/Mardeni01' target="_blank" rel="noreferrer">Ahmad Mardeni</a> провів святкування 2-го дня народження The Graph в OPM Room в Dubai.<br></br><br></br>Ви можете слідкувати за подією через його Twitter, <a className="cla" href='https://twitter.com/mardeni01/status/1604127593007120384?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">тут</a> і <a className="cla" href='https://twitter.com/mardeni01/status/1604205523619946498?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Ви також можете ознайомитися з іншими подіями нижче.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/thegraphnations?s=21&t=2oybVC4qbnXUtBbgmnvSqw' target="_blank" rel="noreferrer">TheGraphNation</a> влаштували святкування 2-го дня народження The Graph у Lekki Coliseum (TLC) в Lagos.<br></br><br></br>Ви можете слідкувати за подією через їхній Twitter, <a className="cla" href='https://twitter.com/thegraphnations/status/1603831459629891585?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Ви також можете ознайомитися з іншими подіями нижче.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
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
            const message = this.createChatbotMessage(<a>The Graph, святкування 2-го дня народження в Edge & Node House of Web3 в San Francisco.<br></br><br></br>Ви можете слідкувати за подією через їхній Twitter <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603952216540213248?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">тут</a> і <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603990278322507780?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Ви також можете ознайомитися з іншими подіями нижче.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapore</strong></button></a>
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
              const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/impranavm_?s=21&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">Pranav Maheshwari</a> організував святкування 2-го дня народження The Graph у Singapore.<br></br><br></br>Ви можете слідкувати за подією через його Twitter, <a className="cla" href='https://twitter.com/impranavm_/status/1604024407789182976?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">тут</a> і <a className="cla" href='https://twitter.com/impranavm_/status/1603991615009304576?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">тут</a>.<br></br><br></br>Ви також можете ознайомитися з іншими подіями нижче.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button></a>
                ,
              );
              this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
              }));
            }

  handleNews() {
    const message = this.createChatbotMessage(<a>Якщо ви хочете бути в курсі останніх новин про The Graph, нових оголошень про партнерство та читати про те, що відбувається всередині спільноти, то посилання нижче можуть вам у цьому допомогти.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">Блог The Graph</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a><hr></hr>Переконайтеся, що ви також слідкуєте за The Graph через <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">Twitter</a>.</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

handleHello() {
  const message = this.createChatbotMessage(<a>Привіт, чим я можу допомогти вам сьогодні?</a>
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
  const message = this.createChatbotMessage(<a>Ви також можете скористатися кнопками нижче і гортати вниз, щоб знайти відповідь!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegator (Делегат)</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Куратор</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Індексатор</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Core розробники</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Підграф</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Онлайн-статистика</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Спільнота</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Останні новини</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Вивчення Web3</strong></button></a>
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
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegator (Делегат)</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Куратор</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Індексатор</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Core розробники</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Підграф</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Онлайн-статистика</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Спільнота</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Останні новини</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Вивчення Web3</strong></button></a>
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
  }}><strong>Core розробники</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFoundingMembers();
    this.handleButtonTheGraph();
  }}><strong>Члени-засновники</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHostedService();
    this.handleButtonTheGraph();
  }}><strong>Хостингові сервіси</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonTheGraph();
  }}><strong>Закриття хостингового сервісу</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonTheGraph();
  }}><strong>Децентралізовані дані</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoadMap();
    this.handleButtonTheGraph();
  }}><strong>Дорожня карта</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoles();
    this.handleButtonTheGraph();
  }}><strong>Екосистемні ролі</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMIPS();
    this.handleButtonTheGraph();
  }}><strong>MIPs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleJob();
    this.handleButtonTheGraph();
  }}><strong>Вакансії</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBirthday();
    this.handleButtonTheGraph();
  }}><strong>День народження</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphDay();
    this.handleButtonTheGraph();
  }}><strong>Graph Day</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleParticipantUpdate();
    this.handleButtonTheGraph();
  }}><strong>Інформація про учасників</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGeo();
    this.handleButtonTheGraph();
  }}><strong>Geo</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonTheGraph();
  }}><strong>GitHub</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphFunding();
    this.handleButtonTheGraph();
  }}><strong>Фінансування</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleGraphQLApi();
    this.handleButtonTheGraph();
  }}><strong>GraphQL API</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleGRTTokenAddress();
    this.handleButtonTheGraph();
  }}><strong>Адреса токена GRT</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handlePowerDAOS();
    this.handleButtonTheGraph();
  }}><strong>Snapshot</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Меню категорій</strong></button></a>
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
  
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Меню категорій</strong></button></a>
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
  }}><strong>Посібники для делегатів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDelegateWithWallet();
    this.handleButtonDelegator();
  }}><strong>Делегування за допомогою гаманця</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCoinbase();
    this.handleButtonDelegator();
  }}><strong>Делегування за допомогою гаманця Coinbase</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFeesToDelegate();
    this.handleButtonDelegator();
  }}><strong>Комісія за делегування</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleUnDelegating();
    this.handleButtonDelegator();
  }}><strong>Скасування делегування</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTenderize();
    this.handleButtonDelegator();
  }}><strong>Tenderize</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleChoosingIndexers();
    this.handleButtonDelegator();
  }}><strong>Як обрати індексатора</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonDelegator();
  }}><strong>Порівняння індексаторів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonDelegator();
  }}><strong>Кількість активних делегатів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonDelegator();
  }}><strong>Кількість активних делегацій</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonDelegator();
  }}><strong>Загальна кількість GRT, делегованих делегатами</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Меню категорій</strong></button></a>
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
  }}><strong>Роль куратора</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorTools();
    this.handleButtonCurator();
  }}><strong>Інструменти для кураторів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonCurator();
  }}><strong>Кількість кураторів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonCurator();
  }}><strong>Загальна кількість GRT сигналізованих кураторами</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Меню категорій</strong></button></a>
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
  }}><strong>Як правильно вибрати індексатора</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonIndexer();
  }}><strong>Порівняння індексаторів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBecomeIndexer();
    this.handleButtonIndexer();
  }}><strong>Як стати індексатором</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerHardwareRequirements();
    this.handleButtonIndexer();
  }}><strong>Вимоги до апаратного забезпечення індексаторів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerMap();
    this.handleButtonIndexer();
  }}><strong>Карта індексаторів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMIPS();
    this.handleButtonIndexer();
  }}><strong>MIPs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerOfficeHours();
    this.handleButtonIndexer();
  }}><strong>Indexer Office Hours</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexingRewardsAndQueryFees();
    this.handleButtonIndexer();
  }}><strong>Нагороди індексатора</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleQueryFeesAndIndexingRewardCut();
    this.handleButtonIndexer();
  }}><strong>Зниження плати за запити й винагороди за індексацію</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAllocations();
    this.handleButtonIndexer();
  }}><strong>Розподіли</strong></button><br class="no-show-monitor"></br>
 <button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonIndexer();
  }}><strong>Кількість активних індексаторів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonIndexer();
  }}><strong>Загальна кількість делегованих GRT індексаторам</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Меню категорій</strong></button></a>
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
  }}><strong>Підграфи</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonSubgraph();
  }}><strong>Підпотоки</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonSubgraph();
  }}><strong>Sunsetting хостинговий сервіс</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonSubgraph();
  }}><strong>Децентралізовані дані</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleVsSelfHosting();
    this.handleButtonSubgraph();
  }}><strong>Хостинг vs самостійне розміщення</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSoulBound();
    this.handleButtonSubgraph();
  }}><strong>SoulBound</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleFireHose();
    this.handleButtonSubgraph();
  }}><strong>FireHose</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleQueryPython();
    this.handleButtonSubgraph();
  }}><strong>Запити за допомогою Python</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonSubgraph();
  }}><strong>Messari</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonSubgraph();
  }}><strong>Кількість підграфів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonSubgraph();
  }}><strong>GitHub</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Меню категорій</strong></button></a>
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
  }}><strong>Інформація про учасників</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHoldersCount();
    this.handleButtonStatistics();
  }}><strong>Кількість холдерів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonStatistics();
  }}><strong>Кількість активних делегатів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonStatistics();
  }}><strong>Кількість активних індексаторів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonStatistics();
  }}><strong>Кількість кураторів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonStatistics();
  }}><strong>Кількість активних делегацій</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalQueryFeesCount();
    this.handleButtonStatistics();
  }}><strong>Плата за запит</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonStatistics();
  }}><strong>Кількість підграфів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonStatistics();
  }}><strong>Всього GRT, делегованих делегатами</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonStatistics();
  }}><strong>Всього GRT, делегованих індексаторами</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonStatistics();
  }}><strong>Загальна кількість GRT, сигналізованих кураторами</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalStakedGRTCount();
    this.handleButtonStatistics();
  }}><strong>Загальна кількість застейканих GRT</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTBurnedCount();
    this.handleButtonStatistics();
  }}><strong>Загальна кількість спалених GRT</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Меню категорій</strong></button></a>
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
  }}><strong>День народження Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAdvocates();
    this.handleButtonCommunity();
  }}><strong>Graph Advocates</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphSocial();
    this.handleButtonCommunity();
  }}><strong>Graph Social</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePodcast();
    this.handleButtonCommunity();
  }}><strong>Подкаст GRTiQ</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Меню категорій</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMIPS(){
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  const message = this.createChatbotMessage(<a><strong>Мульти-чейн програма стимулювання від The Graph</strong><br></br><br></br>
  Програма MIPs бутстрапить індексаторів, щоб додати підтримку нових мереж у децентралізованій мережі, дозволяючи міграцію мульти-чейн підграфів. Це критично важливе розширення підтримки dapps і міграції підграфів напередодні <a className="cla" onClick={this.handleSunsettingHostedService} target="_blank" rel="noreferrer">закриття хостингового сервісу</a>.
   <br></br><br></br>В рамках програми MIPs виділено 0,75% GRT (75 млн GRT), з яких 0,5% - на винагороду індексаторам, які сприяють бутстрапу мережі, а 0,25% - на гранти на міграцію для розробників підграфів з використанням мульти-чейн підграфів. До кінця 1 кварталу 2023 року хостинговий сервіс для всіх мереж, що підтримуються мережею, завершить свою роботу, тому програма MIPs буде працювати паралельно з міграцією підграфів.<br></br><br></br>
   Першою мережею, яка буде підтримуватися в децентралізованій мережі, стала мережа <a className="cla" href='https://twitter.com/gnosischain' target="_blank" rel="noreferrer">Gnosis</a>! Нові мережі будуть анонсовані в рамках програми MIPs, виходячи з готовності індексатора, попиту і настроїв спільноти. Щоб дізнатися більше про ефективність та оцінювання MIPs, а також про вимоги до учасників, дивіться <a className="cla" href='https://thegraph.com/blog/mips-multi-chain-indexing-incentivized-program/' target="_blank" rel="noreferrer">тут</a>.<hr></hr>Оголошені на сьогодні мережі можна знайти нижче.<br></br><br></br>Завершено інтеграцію бета-версії <a className="cla" href='https://twitter.com/graphprotocol/status/1613980493787312128?s=20&t=_FqJsNOl6vvyIYt3B0KCfg' target="_blank" rel="noreferrer"><strong>Gnosis</strong></a><br></br>Розпочато інтеграцію <a className="cla" href='https://twitter.com/graphprotocol/status/1615443632252948480' target="_blank" rel="noreferrer"><strong>Polygon</strong></a><br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772854838231040?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Arbitrum</strong></a> незабаром!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772857211961354?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Avalanche</strong></a> незабаром!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772859678457859?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Celo</strong></a> незабаром!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772862110900225?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Optimism</strong></a> незабаром!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonNews() {
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  const message = this.createChatbotMessage(<a>Якщо ви хочете бути в курсі останніх новин про The Graph, нових оголошень про партнерство та читати про те, що відбувається всередині спільноти, то посилання нижче можуть вам у цьому допомогти.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">Блог The Graph</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a><br></br><br></br>Make sure you also follow The Graph on <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">Twitter</a>.<hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Меню категорій</strong></button></a>
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
  }}><strong>Що таке Інтернет?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCourses();
    this.handleButtonLearnWeb3();
  }}><strong>Курси</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLearnWeb3();
    this.handleButtonLearnWeb3();
  }}><strong>Вивчення Web3</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWhatIsABlockchain();
    this.handleButtonLearnWeb3();
  }}><strong>Блокчейн</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSafe();
    this.handleButtonLearnWeb3();
  }}><strong>Чи безпечно це?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWeb3DApp();
    this.handleButtonLearnWeb3();
  }}><strong>Web3 DApp</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCryptocurrencies();
    this.handleButtonLearnWeb3();
  }}><strong>Криптовалюти</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>Ethereum</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGas();
    this.handleButtonLearnWeb3();
  }}><strong>Газ</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>Монета або токен</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMining();
    this.handleButtonLearnWeb3();
  }}><strong>Майнінг</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleNFT();
    this.handleButtonLearnWeb3();
  }}><strong>NFT</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMetaverse();
    this.handleButtonLearnWeb3();
  }}><strong>Metaverse</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSmartContract();
    this.handleButtonLearnWeb3();
  }}><strong>Смарт-контракт</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleStablecoin();
    this.handleButtonLearnWeb3();
  }}><strong>Стейблкоїн</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLayerTwo();
    this.handleButtonLearnWeb3();
  }}><strong>Layer Two</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenEconomics();
    this.handleButtonLearnWeb3();
  }}><strong>Економіка токенів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenBurn();
    this.handleButtonLearnWeb3();
  }}><strong>Спалювання токенів</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCoreDevs();
    this.handleButtonLearnWeb3();
  }}><strong>Ноди</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
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
  }}><strong>Жінки в Web3</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Меню категорій</strong></button></a>
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
  const message = this.createChatbotMessage(<a>Вибачте, я не знайшов відповіді. Ви можете спробувати ще раз або перефразувати питання? Якщо я все одно не зможу вам допомогти, будь ласка, приділіть 2 хвилини, щоб заповнити форму зворотного зв'язку нижче. З вашою допомогою я покращу свої знання і зможу допомогти іншим членам GRT-спільноти в майбутньому, які також можуть мати подібні запитання і шукати відповіді. Дякую!
  
  {/* help start */}

  <br></br><br></br>Ви також можете скористатися кнопками нижче і прокрутити вниз, щоб знайти відповідь!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegator (Делегат)</strong></button><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Куратор</strong></button><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Індексатор</strong></button><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Core розробники</strong></button><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Підграф</strong></button><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Онлайн-статистика</strong></button><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Спільнота</strong></button><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Останні новини</strong></button><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Вивчення Web3</strong></button>

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