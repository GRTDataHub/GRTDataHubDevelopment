import React from 'react';
import '../../App.css';
import { ChatBotActiveDelegatorCountBar ,  ChatBotHoldersCountBar, ChatBotActiveDelegationCountBar, ChatBotSubgraphsCountBar, ChatBotCuratorsCountBar, ChatBotActiveIndexerCountBar, ChatBotTotalGRTDelegatedByDelegatorsBar, ChatBotTotalQueryFeesCountBar, ChatBotTotalGRTSignalledByCuratorsBar, ChatBotTotalStakedGRTCountBar, ChatBotTotalDelegatedGRTByIndexersCountBar, ChatBotTotalGRTBurnedCountBar } from "../mainBarCharts/BarChartsData";
import Embed from 'react-embed';

class GERActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
// Charts / Graphs Start
handleActiveDelegatorCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Die Anzahl der aktiven Delegierenden beträgt <ChatBotActiveDelegatorCountBar />.</h4>
  <a className="cla" href="https://grtdatahub.com/ActiveDelegatorCount" target="_blank" rel="noreferrer">Klicken Sie hier</a> um die Anzahl der aktiven Delegierten in voller Ansicht anzuzeigen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveDelegationCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Die Anzahl der aktiven Delegationen beträgt <ChatBotActiveDelegationCountBar />.</h4>
  <a className="cla" href="https://grtdatahub.com/ActiveDelegationCount" target="_blank" rel="noreferrer">Klicken Sie hier</a> um die Anzahl der aktiven Delegierungen in voller Ansicht anzuzeigen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleHoldersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Der Holders Zahlen ist <ChatBotHoldersCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/HoldersCount" target="_blank" rel="noreferrer">Klicken Sie hier</a> um Holders Zahlen in voller Ansicht anzuzeigen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleSubgraphsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Die Subgraph Zahlen ist <ChatBotSubgraphsCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/SubgraphsCount" target="_blank" rel="noreferrer">Klicken Sie hier</a> um Subgraph Zahlen in voller Ansicht anzuzeigen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleCuratorsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Der Curator Zahlen ist <ChatBotCuratorsCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/CuratorsCount" target="_blank" rel="noreferrer">Klicken Sie hier</a> um Curator Zahlen in voller Ansicht anzuzeigen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveIndexerCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Der Aktiven Indexer ist  <ChatBotActiveIndexerCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/ActiveIndexerCount" target="_blank" rel="noreferrer">Klicken Sie hier</a> um die Anzahl der Aktiven Indexer vollständig anzuzeigen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTDelegatedByDelegators() {
  const message = this.createChatbotMessage(<a> 
  <h4>Der Gesamtbetrag der von den Delegierenden delegierten GRT beträgt <ChatBotTotalGRTDelegatedByDelegatorsBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalGRTDelegatedByDelegators" target="_blank" rel="noreferrer">Klicken Sie hier</a> um den Gesamtbetrag der von den Delegierenden delegierten GRT in voller Ansicht anzuzeigen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalQueryFeesCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Die Gesamtanzahl der Abfragegebühren beträgt <ChatBotTotalQueryFeesCountBar/> GRT.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalQueryFeesCount" target="_blank" rel="noreferrer">Klicken Sie hier</a> um die Gesamtanzahl der Abfragegebühren in voller Ansicht anzuzeigen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTSignalledByCurators() {
  const message = this.createChatbotMessage(<a> 
  <h4>Die Gesamtmenge der von Kuratoren signalisierten GRT beträgt <ChatBotTotalGRTSignalledByCuratorsBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalGRTSignalledByCurators" target="_blank" rel="noreferrer">Klicken Sie hier</a> um den Gesamtbetrag der von Kuratoren signalisierten GRT in voller Ansicht anzuzeigen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalStakedGRTCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Der Gesamtbetrag der eingesetzten BRT beträgt <ChatBotTotalStakedGRTCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalStakedGRTCount" target="_blank" rel="noreferrer">Klicken Sie hier</a> um den Gesamtbetrag der eingesetzten BRT in voller Ansicht anzuzeigen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalDelegatedGRTByIndexersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Der Gesamtbetrag der von Indexern delegierten GRT beträgt <ChatBotTotalDelegatedGRTByIndexersCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalDelegatedGRTByIndexersCount" target="_blank" rel="noreferrer">Klicken Sie hier</a> um den Gesamtbetrag der delegierten GRT von Indexern in voller Ansicht anzuzeigen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTotalGRTBurnedCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Die Gesamtmenge der verbrannten BRT beträgt <ChatBotTotalGRTBurnedCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalGRTBurnedCount" target="_blank" rel="noreferrer">Klicken Sie hier</a> um die Gesamtmenge der verbrannten BRT in voller Ansicht anzuzeigen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// Choosing Indexer Start
handleChoosingIndexers() {
  const message = this.createChatbotMessage(<a>Es kann eine schwierige Entscheidung sein, einen Indexer auszuwählen, an den delegiert werden soll. Die folgenden Informationen und Ressourcen werden Ihnen dabei helfen. Nur weil ein Indexer den höchsten APY hat, bedeutet das nicht, dass er der Beste für Sie ist. Recherchieren Sie selbst, nehmen Sie sich Zeit und erfahren Sie, worauf Sie achten müssen, wenn Sie einen Indexer auswählen, an den Sie delegieren können. So können Sie sicher sein, bevor Sie delegieren.<hr></hr>Wenn Sie sich das <a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">Tutorial</a> zur Auswahl von Indexern ansehen, können Sie besser verstehen, wonach Sie suchen müssen.<br></br><br></br>Die <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts-App</a> ermöglicht es den Delegierenden, nützliche Einblicke in den Indexer ihrer Wahl zu gewinnen. Geben Sie einfach die ETH-Adresse des Indexers Ihrer Wahl ein oder schauen Sie sich die Bewertungen an. Sie können Indexer auch innerhalb der App vergleichen.<br></br><br></br>Sobald Sie bereit sind zu delegieren, fragen Sie bitte und ich werde Ihnen Text- und Video-Tutorials zur Verfügung stellen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Choosing Indexers End
handleJob() {
  const message = this.createChatbotMessage(<a>Möchten Sie in web3 arbeiten? Gute Nachrichten, das Graph-Ökosystem stellt ein! Es gibt Möglichkeiten bei The Graph Foundation und den Kernentwicklerteams. Schauen Sie <a className="cla" href="https://thegraph.com/jobs/#open-positions" target="_blank" rel="noreferrer">hier</a> nach aktuellen offenen Stellen.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// Network Roles Start
handleRoles() {
  this.handleBecomeIndexer = this.handleBecomeIndexer.bind(this);
  this.handleCurator = this.handleCurator.bind(this);
  this.handleDelegateGuides = this.handleDelegateGuides.bind(this);
  const message = this.createChatbotMessage(<a>
    Das Graph Network besteht aus drei Rollen, die Dienste für das Ökosystem bereitstellen und Daten für Web3-Anwendungen wie Uniswap, Aave und Synthetix bereitstellen: Indexer, Kuratoren und Delegatoren. Nachfolgend finden Sie eine ausführliche Dokumentation für jede der Rollen.<br></br><a className="cla" onClick={this.handleBecomeIndexer}><strong>Indexers</strong></a><br></br><a className="cla" onClick={this.handleCurator}><strong>Curators</strong></a><br></br><a className="cla" onClick={this.handleDelegateGuides}><strong>Delegators</strong></a><br></br><br></br>Um die wirtschaftliche Sicherheit von The Graph Network und die Integrität der abgefragten Daten zu gewährleisten, setzen und verwenden die Teilnehmer Graph Tokens (GRT). GRT ist ein Arbeitstoken, das ein ERC-20 auf der Ethereum-Blockchain ist, das verwendet wird, um Ressourcen im Netzwerk zuzuweisen. Aktive Indexer, Kuratoren und Delegatoren können Dienstleistungen erbringen und Einnahmen aus dem Netzwerk erzielen, die proportional zu der von ihnen geleisteten Arbeit und ihrem GRT-Anteil sind.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleBecomeIndexer() {
  const message = this.createChatbotMessage(<a><strong>So werden Sie ein effektiver Indexer im The Graph Network</strong><hr></hr>Mindestanforderungen für Indexer - Es gibt vier Hauptanforderungen, die erforderlich sind, um ein effektiver Indexer im The Graph Network zu sein.<br></br>< br></br><strong>Einsatz</strong> - Sie müssen mindestens 100.000 GRT einsetzen, um Indexer zu werden.<br></br><br></br><strong>Fähigkeiten</strong> - Idealerweise sollten Indexer einen Hintergrund in DevOps haben oder Erfahrung im Betrieb von Blockchain-Knoten haben. Indexierer sollten mit der Bereitstellung von Cloud- oder gehosteten Servern oder dem Betrieb ihrer eigenen Serverhardware vertraut sein. Vertrautheit mit der Ausführung eines Validierungsknotens und der Arbeit unter Linux wird ebenfalls empfohlen.<br></br><br></br><strong>Hardware</strong> – Um Effizienz, Abfrageleistung und Geschwindigkeit in Einklang zu bringen, viele Indexer beginnen häufig mit einem Setup aus 16 CPUs, einer 1-TB-Festplatte und 32 GB RAM.<br></br><br></br><strong>Infrastruktursoftware</strong> – Vertrautheit mit Container und Skalierung Technologien wie Docker und Kubernetes sind von Vorteil, es ist jedoch auch möglich, die Graph-Software auf Bare Metal bereitzustellen. Die Anforderungen an die Infrastruktursoftware umfassen eine PostgreSQL-Datenbank, einen Graphknoten, einen Indexer-Agenten, einen Indexer-Dienst, einen Prometheus-Metrikserver und möglicherweise mehr, abhängig von Ihren spezifischen Anforderungen und Ihrer Einrichtung.<br></br><br></br>Um mehr über die zu erfahren Best Practices für Indexer auf The Graph Network, ideale Teilnahme an der Indexer-Community, ein empfohlenes Indexer-Tech-Setup, Ressourcen und Leitfäden und beginnen Sie Ihre <strong>Indexierungsreise</strong> mit The Graph.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleEdgeAndNode() {
  const message = this.createChatbotMessage(<a>
    Die Idee hinter The Graph Network wurde von Graph Protocol, Inc. konzipiert und gestaltet. Nachdem das Mainnet von The Graph Network am 17. Dezember 2020 gestartet wurde, beschloss Graph Protocol, Inc., seinen Namen in Edge & Node zu ändern. Die Absicht hinter der Namensänderung war es, die fortschreitende Dezentralisierung im Netzwerk hervorzuheben. Daher ist Edge & Node nicht mehr das zentrale Team, das das Protokoll entwickelt und fördert. Stattdessen wird Edge & Node Dienste für das Ökosystem bereitstellen und am Protokoll beteiligt sein.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTheGraphFoundation() {
  const message = this.createChatbotMessage(<a>
    Die Gründung von The Graph Foundation wurde im Oktober 2020 bekannt gegeben. <a className="cla" href="https://ca.linkedin.com/in/evabeylin?original_referer=https%3A%2F%2Fdocs.thegraph.academy%2Fthe-graph-ecosystem%2Forganizational-structure%2Fthe-graph-foundation" target="_blank" rel="noreferrer">Eva Beylin</a> fungiert als Direktor von The Graph Foundation. Die Graph Foundation ist für die Verwaltung des Protokolls verantwortlich und wird das Ökosystem koordinieren und unterstützen. Die Gründung der Stiftung war Teil der Strategie, eine unabhängige, dezentralisierte Organisationsstruktur zu schaffen.<hr></hr>Ratsmitglieder:<br></br>Indexer<br></br>Jim Cousins & Gary Morris <br></br>Nutzer<br></br>Justin J Moses & Kayvon Teheranian<br></br>Forscher<br></br>Santiago Palladino & Yondon Fu<br></br>Unterstützer< br></br>Michael Anderson & Spencer Noon<br></br>Anfangsteam<br></br>Brandon Ramirez & Yaniv Tal</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTheGraphCouncil() {
  const message = this.createChatbotMessage(<a>
    Der Graph Council wurde im Oktober 2020 als Teil der Pläne zur Dezentralisierung des Protokolls eingeführt. Die Mitglieder des Graph Council wurden im Dezember 2020 eingeweiht. Der Graph Council regiert das dezentrale Graph-Netzwerk. Eine 6-von-10-Multisig gleicht die Interessen von fünf verschiedenen Interessengruppen im Ökosystem aus: Indexer, Token-Inhaber, Anfangsteam, Benutzer und Experten für technische Domänen.<br></br><br></br>Das Mandat von Das Graph Council umfasst die folgenden Kernfunktionen:<br></br>Operationen der Graph Foundation<br></br>Zuschüsse und Ökosystemfinanzierung<br></br>Protokoll-Upgrades<br></br>Protokollparametrisierung< br></br>Emergency Protocol Operations<br></br><br></br>In Zukunft ist geplant, die Governance von The Graph weiter zu dezentralisieren, indem beispielsweise einzelne Mitglieder durch verschachtelte Multisigs oder DAOs ersetzt werden.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Networok Roles End
// Discord and Telegram Start
handleGraphDiscord() {
  const message = this.createChatbotMessage(<a>Den Graph Official Discord Server findet ihr <a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">hier</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Discord and Reddit End

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
// Rewards Start 
handleRewards() {
  const message = this.createChatbotMessage(<a>Indexierungsbelohnungen werden gesammelt und verteilt, wenn Indexierer ihre Zuweisungen schließen. Während sie aktiv sind, sammeln Zuweisungen kontinuierlich Belohnungen an. Indexer können das Schließen ihrer Zuordnungen entweder manuell erzwingen oder nach Ablauf der maximalen Zuordnungslebensdauer (alle 28 Epochen) automatisch schließen lassen.<br></br><br></br>28 Epoche = ca. 26 Tage<br></ br><br></br>Zuweisungen sammeln kontinuierlich Belohnungen an, während sie aktiv sind. Belohnungen werden von den Indexierern gesammelt und verteilt, wenn ihre Zuweisungen geschlossen sind. Das geschieht entweder manuell, wenn der Indexer das Schließen erzwingen möchte, oder automatisch alle maximal 28 Epochen - maximale Lebensdauer der Zuweisung.<hr></hr>Um Ihre ausstehenden Belohnungen zu sehen, besuchen Sie <a className="cla" href="https://www.graphtronauts.com/#/profile" target="_blank" rel="noreferrer">Graphtronauts App</a> und Wallet hinzufügen.</a>
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
  const message = this.createChatbotMessage(<a>Immer wenn eine Zuweisung geschlossen wird (entweder manuell durch einen Indexer oder automatisch nach Ablauf der maximalen Zuweisungslebensdauer), werden vom Gateway des Protokolls Abfragegebühren erhoben. Die Abfragegebühren werden im Abfragegebühren-Rückvergütungspool des Unterdiagramms angesammelt. Der verteilte Betrag der Abfragegebühren aus dem Rabattpool wird basierend auf den Beiträgen des Indexers zum Rabattpool und seinem zugewiesenen Einsatz auf dem Unterdiagramm berechnet.<br></br><br></br>Nachdem eine Zuweisung geschlossen wurde, Abfrage Gebühren können von Indexern erst nach Ablauf der Einspruchsfrist geltend gemacht werden. Sobald ein Indexer die Abfragegebühren erfolgreich geltend gemacht hat, werden Rabatte an den Indexer und seine Delegatoren verteilt.<br></br><br></br>Gemäß der <a className="cla" href="https://en.wikipedia.org/wiki/Cobb%E2%80%93Douglas_production_function" target="_blank" rel="noreferrer">Cobb-Douglas-Produktionsfunktion</a> wird ein Rabattpool erstellt, der alle Netzwerkteilnehmer (wie Indexer) basierend auf ihren Beiträgen zu The Graph Network belohnt. Die Absicht hinter dem Rebate Pool ist es, Indexer dazu zu ermutigen, GRT in ungefährem Verhältnis zu den Abfragegebühren einzusetzen, die sie für das Netzwerk verdienen. Der Rebate Pool erhält einen festen Anteil an Abfragegebühren, die ihm zugeführt werden.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleIndexingRewardsAndQueryFees() {
  const message = this.createChatbotMessage(<a>Indizierungsbelohnungen werden proportional zum Kurationssignal des Unterdiagramms auf die Unterdiagramme verteilt. Indexierer erhalten ihre Indizierungsprämien proportional zu dem Einsatz, den sie einem bestimmten Unterdiagramm zugeteilt haben.<br></br><br></br>Indexierungsprämien werden durch die Protokollinflation generiert, die auf 3 % der jährlichen Ausgabe festgelegt ist.<br></br><br></br>Alle Zuordnungen müssen mit einem gültigen Indizierungsnachweis (POI) abgeschlossen werden.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handlePOI() {
  const message = this.createChatbotMessage(<a>Der sogenannte Proof of Indexing (POI) verifiziert, dass Indexer die Subgraphen, auf die sie ihren Anteil vergeben haben, tatsächlich indexiert haben. Der POI für einen Block ist ein Digest für alle Entity-Store-Transaktionen, der die Bereitstellung in einem Subgraph detailliert beschreibt. Um Indizierungsprämien zu erhalten, müssen Indexer eine Zuteilung mit einem gültigen Indizierungsnachweis (POI) schließen, der den in der Schiedscharta festgelegten Standards entspricht. Indexer haben keinen Anspruch auf Prämien ohne einen gültigen POI. Beim Schließen einer Zuweisung muss ein POI für den ersten Block der aktuellen Epoche vom Indexer eingereicht werden.<br></br><br></br>Indexierungsbelohnungen werden gesammelt und verteilt, wenn Indexer ihre Zuweisungen schließen. Während sie aktiv sind, sammeln Zuweisungen kontinuierlich Belohnungen an. Indexer können das Schließen ihrer Zuordnungen entweder manuell erzwingen oder nach Ablauf der maximalen Zuordnungslebensdauer (alle 28 Epochen) automatisch schließen lassen.<br></br><br></br>28 Epoche = ca. 26 Tage</a>
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
  const message = this.createChatbotMessage(<a>Die Hardwarevoraussetzungen für die Teilnahme am Netzwerk als Indexer finden Sie in der folgenden Tabelle.<hr></hr><table><tr className="indexer-table-header">
    <th>Konfiguration</th>
    <th>Postgres (CPUs)</th>
    <th>Postgres (memory in GB) </th>
    <th>Postgres  (disk in TBs) </th>
    <th>VMs  (CPUs) </th>
    <th>VMs  (memory in GB) </th>
  </tr>
  <tr className="indexer-table">
    <td>Klein</td>
    <td>4</td>
    <td>8</td>
    <td>1</td>
    <td>4</td>
    <td>16</td>
  </tr>
  <tr className="indexer-table">
    <td>Standard</td>
    <td>8</td>
    <td>30</td>
    <td>1</td>
    <td>12</td>
    <td>48</td>
  </tr>
  <tr className="indexer-table">
    <td>Mittel</td>
    <td>16</td>
    <td>64</td>
    <td>2</td>
    <td>32</td>
    <td>64</td>
  </tr>
  <tr className="indexer-table">
    <td>Groß</td>
    <td>72</td>
    <td>468</td>
    <td>3.5</td>
    <td>48</td>
    <td>184</td>
  </tr>
</table>
<br></br><br></br>Klein = genug, um mit der Indizierung mehrerer Untergrafiken zu beginnen<br></br>Standard = Standardeinstellung<br></br>Mittel = erforderlich für die Indizierung von 100 Untergrafiken und die Ausführung von 200–500 Anfragen pro Sekunde<br></br> Groß = Erforderlich für die Indizierung aller derzeit verwendeten Subgraphen und die Bereitstellung von Anfragen für den zugehörigen Datenverkehr
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
  const message = this.createChatbotMessage(<a>Zuweisungen sammeln kontinuierlich Belohnungen an, während sie aktiv sind. Belohnungen werden von den Indexierern gesammelt und verteilt, wenn ihre Zuweisungen geschlossen sind. Das geschieht entweder manuell, wenn der Indexer das Schließen erzwingen möchte, oder automatisch alle maximal 28 Epochen - maximale Lebensdauer der Zuordnung.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Allocations End
handleTools() {
  const message = this.createChatbotMessage(<a>Die <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts-App</a> ermöglicht es den Delegierenden, nützliche Einblicke in den Indexer ihrer Wahl zu gewinnen. Geben Sie einfach die ETH-Adresse des Indexers Ihrer Wahl ein oder sehen Sie sich die Bewertungen unten an.<br></br><br></br>Andere sehr nützliche Seiten sind:<br></br><br></br><a className="cla" href="http://ww25.oracleminer.com/graph/indexer/0x7ab4cf25330ed7277ac7ab59380b68eea68abb0e?subid1=20220530-2214-27fd-afb4-5d675e9469e5s" target="_blank" rel="noreferrer">OracleMiner.com</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://graphscan.io/" target="_blank" rel="noreferrer">GraphScan.io</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://thegraph.live/" target="_blank" rel="noreferrer">TheGraph.Live</a><br></br><br></br><a className="cla" href="https://www.notion.so/Community-Guides-abbb10f4dba040d5ba81648ca093e70c" target="_blank" rel="noreferrer">Community Tools and Guides</a></a>
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
  const message = this.createChatbotMessage(<a>Jedes Mal, wenn Sie GRT an einen Indexer delegieren, müssen Sie eine Delegierungsgebühr von <strong>0,5 %</strong> berücksichtigen. Wenn Sie beispielsweise 10.000 BRT delegieren, werden Ihnen 50 BRT berechnet. Wenn Ihr gewählter Indexer Ihnen ein Verdienstpotential von 2 GRT pro Tag bietet. Unter dieser Annahme würden Sie 25 Tage (50 BRT / 2 BRT) benötigen, um die Gewinnschwelle zu erreichen. Um wirtschaftlich fundierte Entscheidungen zu treffen, müssen Sie berechnen, wie lange es dauert, bis Sie die 0,5 %-Steuer auf Ihre Delegation zurückerhalten.<br></br><br></br>Wenn Sie an einen Indexer delegieren, müssen Sie unterschreiben <strong>zwei ETH-Transaktionen</strong>. Dasselbe gilt für das Undelegieren Ihrer GRT. Bei hohen Gaspreisen müssen Sie sorgfältig kalkulieren, ob es wirtschaftlich sinnvoll ist, kleine BRT-Beträge zu delegieren.<br></br>Nehmen wir zum Beispiel an, dass Sie die Unterzeichnung von zwei ETH-Transaktionen 25 US-Dollar kosten wird. Nehmen wir außerdem an, dass Sie nur 100 $ delegieren möchten. In diesem Fall würden die Transaktionskosten des Delegierens insgesamt 25 % Ihres BRT-Stacks ausmachen. Das bedeutet, dass die Zeit bis zum Erreichen der Gewinnschwelle erheblich verlängert würde.<br></br><br></br>Wenn Delegatoren die Delegierung aufheben möchten, können sie nicht sofort auf ihre Token zugreifen. Nicht delegierte Token unterliegen einer 28-tägigen Auftauzeit, erst dann können Delegierende ihre Token frei übertragen oder an einen anderen Indexer weiterdelegieren.<br></br><br></br>Auswahl eines seriösen, vertrauenswürdigen und effektiven Indexers ist eine wichtige Entscheidung, die nicht auf die leichte Schulter genommen werden sollte. Delegierende, die ihrer Sorgfaltspflicht nicht nachkommen, laufen Gefahr, an einen Indexer mit schlechter Leistung zu delegieren. Ebenso riskieren sie, einen Indexer zu wählen, der zweifelhafte Praktiken anwendet oder Delegatoren für kurze Zeit subventioniert, um für einen attraktiven APY (Annual Percentage Yield) zu werben, der auf lange Sicht nicht realistisch ist.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Delegate Guides Start
handleDelegateGuides() {
  const message = this.createChatbotMessage(<a>Es kann eine schwierige Entscheidung sein, einen Indexer auszuwählen, an den delegiert werden soll. Die folgenden Informationen und Ressourcen werden Ihnen dabei helfen.<hr></hr>Wenn Sie sich das <a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">Tutorial</a> zur Auswahl von Indexern ansehen, können Sie besser verstehen, wonach Sie suchen müssen. Um sicherzustellen, dass Sie vor dem Delegieren sicher sind, sehen Sie sich die folgenden Tutorials an, um ein besseres Verständnis zu erlangen.<br></br><br></br><a className="cla" href="https://blog.graphtronauts.com/das-einsetzen-staken-der-token-bei-the-graph-vollst%C3%A4ndiger-leitfaden-wie-werde-ich-delegator-a7784726e132" target="_blank">Das Einsetzen (Staken) der Token bei The Graph: Vollständiger Leitfaden wie werde ich Delegator</a><br></br><br></br>Lesen Sie diesen Graphtronauts-Leitfaden zur <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-chose-an-indexer-for-delegation-in-graph-protocol-a59725c16062" target="_blank">Auswahl eines Indexers für die Delegation im Graph-Protokoll</a> und sehen Sie sich das Tutorial zur <a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">Auswahl von Indexern</a> an, um zu verstehen, wonach Sie suchen müssen.<br></br><br></br>Das Aufheben der Delegation dauert 28 Tage, da dies die maximale Dauer einer Zuordnung ist.<br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s" target="_blank">Coinbase Wallet Staking</a><br></br><br></br><a className="cla" href="/Binance_Staking_GER" target="_blank">Binance Staking vs. Delegieren mit dem Graph-Netzwerk</a><br></br><br></br><a className="cla" href="https://blog.graphtronauts.com/the-graph-bewegt-sich-nach-arbitrum-der-vollst%C3%A4ndige-leitfaden-f%C3%BCr-delegierte-95b29d73c8ea" target="_blank">The Graph bewegt sich nach Arbitrum: Der vollständige Leitfaden für Delegierte</a><br></br><br></br><a className="cla" href="https://blog.graphtronauts.com/faq-f%C3%BCr-die-the-graph-delegatoren-743acd12f502" target="_blank">FAQ für die The Graph-Delegatoren</a><br></br><br></br><a className="cla" href="https://blog.graphtronauts.com/wie-ihr-eure-grt-token-in-the-graph-mit-einer-hardware-wallet-delegiert-6d1cdae94a2f" target="_blank" rel="noreferrer">Wie Ihr Eure GRT-Token in The Graph mit einer Hardware-Wallet delegiert</a><br></br><br></br><a className="cla" href="https://blog.graphtronauts.com/wie-sie-ihre-grt-token-mit-coinbase-wallet-delegieren-d1bf5aaa80fd" target="_blank" rel="noreferrer">Wie Sie Ihre GRT-Token mit Coinbase Wallet delegieren</a></a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleQueryPython() {
  const message = this.createChatbotMessage(<a><strong>So fragen Sie das Graph-Protokoll für On-Chain-Daten mit Python ab</strong><br></br><br></br><a className="cla" href="https://hashnode.com/@townee" target="_blank">Tony Kipkemboi</a> hat eine erstaunliche Schritt-für-Schritt-Anleitung zum Abfragen von Subgraphs mit <strong>Python</strong>, GraphQL und Subgrounds geschrieben.<br></br><br></br>Den vollständigen Blog finden Sie <a className="cla" href="https://townee.hashnode.dev/how-to-query-the-graph-protocol-for-on-chain-data-using-python" target="_blank">hier</a>.<br></br><br></br>You can follow <a className="cla" href="https://twitter.com/ynot_kip" target="_blank">Tony</a> Sie können Liam auf Twitter folgen, um auf dem Laufenden zu bleiben, wenn sein zweiter Blog für die Community veröffentlicht wird: „How do I use subgrounds when the Hosted Service is Sunsetted?“.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWeb3DApp() {
  const message = this.createChatbotMessage(<a>Wie funktionieren Web3-dApps?<br></br><br></br>Sie finden "Ein vollständiger Leitfaden zur Web3-Architektur" <a className="cla" href="https://twitter.com/suhailkakar/status/1555894207570513920?s=21&t=FoLxHgWLO78VA_3VheV_DQ" target="_blank">hier</a> in einem äußerst hilfreichen Twitter-Thread.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSoulBound() {
  const message = this.createChatbotMessage(<a>Das Erstellen von dApps sollte nicht schmerzhaft sein.<br></br><strong><a className="cla" href="https://soulbound.xyz/" target="_blank">Soulbound Studio</a></strong> macht es einfach.<br></br>Keine Programmierung erforderlich.<br></br><br></br>Eine einheitliche Oberfläche zum Entwerfen, Iterieren und Veröffentlichen vollständig dezentralisierter Web3-APIs und -Frontends.<br></br><br></br>If Sie ihnen helfen möchten, Soulbound Studio zu entwerfen, indem Sie Ihre gewünschten Funktionen und Fehlerberichte teilen, dann treten Sie bitte ihrem <a className="cla" href="https://discord.com/invite/Eu3Eeh4J6a" target="_blank">Discord</a> bei.<br></br><br></br>Folgen Sie Soulbound Labs auf <a className="cla" href="https://twitter.com/SoulboundLabs" target="_blank">Twitter</a>, um über die neuesten Veröffentlichungen und Neuigkeiten auf dem Laufenden zu bleiben.<br></br><br></br>Sehen Sie sich unten ein Video-Tutorial an, wie Sie Subgraphs dApps und Analysen in Minuten mit Soulbound Studio ohne jegliche Programmierung erstellen können.<br></br><br></br>
  <Embed className="embed" isDark url='https://www.youtube.com/watch?v=IEmr280lGSU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIPhone() {
  const message = this.createChatbotMessage(<a>Bewahren Sie nicht das große Geld und die gelangweilten Affen auf Ihrem Telefon in einer heißen Brieftasche auf! Weil Ihr iPhone wahrscheinlich Ihre MetaMask-Informationen mit iCloud synchronisiert. Es ist standardmäßig eingeschaltet, <a className="cla" href="/IPhone_GER" target="_blank">hier</a> ist ein äußerst hilfreicher Twitter-Thread, wie man das ausschaltet!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Query Fees Cut and indexing reward cut Start
handleQueryFeesAndIndexingRewardCut() {
  const message = this.createChatbotMessage(<a>Die Werte queryFeeCut und indexingRewardCut sind Delegierungsparameter, die der Indexer zusammen mit cooldownBlocks festlegen kann, um die Verteilung von GRT zwischen dem Indexer und seinen Delegatoren zu steuern. Anweisungen zum Festlegen der Delegierungsparameter finden Sie in den letzten Schritten unter Staking im Protokoll.<br></br><br></br>queryFeeCut – der Prozentsatz der Rückvergütungen für Abfragegebühren, die in einem Unterdiagramm angesammelt wurden und an den Indexer verteilt werden . Wenn dies auf 95 % festgelegt ist, erhält der Indexierer 95 % des Rückvergütungspools für die Abfragegebühr, wenn eine Zuweisung beansprucht wird, wobei die anderen 5 % an die Delegierenden gehen.<br></br><br></br>indexingRewardCut - der Prozentsatz der Indizierungsbelohnungen, die auf einem Unterdiagramm angesammelt wurden und an den Indexierer verteilt werden. Wenn dies auf 95 % eingestellt ist, erhält der Indexer 95 % des Indexierungs-Belohnungspools, wenn eine Zuweisung geschlossen wird, und die Delegierenden teilen die anderen 5 % auf.</a>
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
  const message = this.createChatbotMessage(<a>Graph Protocol, Inc. wurde im April 2018 von Jannis Pohlmann, Brandon Ramires und Yaniv Tal gegründet<br></br><br></br><strong>Jannis Pohlmann</strong>, technischer Leiter und Mitbegründer. <a className="cla" href="https://de.linkedin.com/in/jannispohlmann" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/jannispohlmann" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br><strong>Brandon Ramirez</strong>,  Forschungsleiter & Mitbegründer. <a className="cla" href="https://www.linkedin.com/in/1stramirez" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/rezbrandon?lang=en" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br><strong>Yaniv Tal</strong>, Projektleiter & Mitbegründer. <a className="cla" href="https://www.linkedin.com/in/yanivtal9" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla"  href="https://twitter.com/yanivgraph" target="_blank" rel="noreferrer">Twitter</a></a>
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
  const message = this.createChatbotMessage(<a>Laut <a className="cla" href="https://www.crunchbase.com/organization/the-graph/investor_financials" target="_blank" rel="noreferrer">Crunchbase.com</a>hat The Graph in 7 Runden insgesamt 69,6 Millionen Dollar an Finanzmitteln gesammelt. Ihre letzte Finanzierung wurde am 21. Januar 2022 aus einer Venture - Series Unknown-Runde aufgebracht.<br></br><br></br>The Graph wird von 27 Investoren finanziert. Blockwall Management und FinTech Collective sind die jüngsten Investoren.<br></br><br></br>The Graph hat insgesamt 205 Millionen US-Dollar in einem einzigen Risikofonds, dem Graph Ecosystem Fund, aufgebracht. Dieser Fonds wurde am 18. Februar 2022 angekündigt und brachte insgesamt 205 Millionen US-Dollar ein.</a>
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
  const message = this.createChatbotMessage(<a>The Graph $GRT ist ein Indizierungsprotokoll zum Abfragen von Netzwerken wie Ethereum und IPFS. Jeder kann offene APIs, sogenannte Subgraphen, erstellen und veröffentlichen, um Daten leicht zugänglich zu machen. Kurz gesagt, The Graph bietet Daten, die transformiert, organisiert und anwendungsübergreifend geteilt werden können, damit jeder sie mit nur wenigen Tastenanschlägen abfragen kann.<br></br><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/" target="_blank" rel="noreferrer">Wie der Graph gesteuert wird</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-council" target="_blank" rel="noreferrer">The Graph Rat</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-foundation" target="_blank" rel="noreferrer">The Graph Stiftung</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#advocates-dao" target="_blank" rel="noreferrer">Graph Advocates­DAO</a><br></br><br></br>Hier können Sie „The Graph history (2017–2020)“ von den Graphtronauts, <a className="cla" href="https://blog.graphtronauts.com/the-graph-history-2017-2020-75cc40132992" target="_blank" rel="noreferrer">lesen.</a>.<br></br><br></br>Hier können Sie „Was ist The Graph und warum ist es das nächste große Ding in der Technologiebranche“ von den Graphtronauts, <a className="cla" href="https://blog.graphtronauts.com/what-is-the-graph-and-why-is-the-next-big-thing-in-the-technology-industry-25051fae4256" target="_blank" rel="noreferrer">lesen</a>.<br></br><br></br>Eine Videoerklärung dazu, was das „Google der Blockchains“ ist, finden Sie <a className="cla" href="https://youtu.be/7gC7xJ_98r8" target="_blank" rel="noreferrer">hier</a>.</a>
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
  const message = this.createChatbotMessage(<a>In Bezug auf Airdrops ist The Graph eines der wenigen Projekte, bei denen Menschen tatsächlich für ihre Token arbeiten mussten. Das Kuratorenprogramm war sehr intensiv und die Leute verbrachten viel Zeit damit, sich mit Subgraphen vertraut zu machen, Daten zu organisieren und zum Netzwerk beizutragen. Dies versetzt das Team in eine unglaubliche Position, eine gut ausgebildete und motivierte Community von Entwicklern zu haben, die sich dem Ausbau von Web3 auf The Graph widmen. Derzeit sind keine Airdrops geplant.</a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://twitter.com/CoinMarketCap/status/1341310792461918210" target="_blank" rel="noreferrer">CoinMarketCap Earn</a> and <a className="cla" href="https://twitter.com/coinbase/status/1339723594566406156?s=20" target="_blank" rel="noreferrer">Coinbase Earn</a> verschenken kostenlose GRT-Token an Teilnehmer, die sich über das Netzwerk informieren und Fragen beantworten.<hr></hr>Psst! Der beste Weg, um kostenlose GRT zu verdienen, ist das Delegieren und Verdienen von Belohnungen.</a>
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
  const message = this.createChatbotMessage(<a>Die Github-Adresse von The Graph finden Sie hier: <a className="cla" href="https://github.com/graphprotocol/" target="_blank" rel="noreferrer">github.com/graphprotocol/</a></a>
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
  const message = this.createChatbotMessage(<a>The Graph R&D Roadmap finden Sie <a className="cla" href="https://thegraph.com/blog/roadmap-2022" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br><strong>Die Graph-Roadmap für 2023</strong>, geschrieben von The Graphtronauts, ist zu finden unter <a className="cla" href="/Graph_Roadmap_GER" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br>In In diesem Artikel lernen Sie vier Entwicklungsbereiche kennen, die 2023 das Licht der Welt erblicken und das The Graph-Netzwerk noch stärker machen als heute:<br></br>Der Sonnenuntergang des gehosteten Dienstes<br></br> Firehose<br></br>Substreams<br></br>Verschieben des Protokolls nach L2 mit Arbitrum One</a>
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
  const message = this.createChatbotMessage(<a>Die Grafik verwendet GraphQL, eine von Facebook entwickelte Open-Source-Abfragesprache. Jedes Element im Schema hat eine Beschreibung. Lernen Sie GraphQL und Sie können dann alle gewünschten Daten aus der Blockchain abrufen.<hr></hr>GraphQL ist eine Abfragesprache und eine serverseitige Laufzeitumgebung für Anwendungsprogrammierschnittstellen (APIs), die Prioritäten setzen, um Clients genau die Daten bereitzustellen, die sie anfordern und nicht mehr. GraphQL wurde entwickelt, um APIs schnell, flexibel und entwicklerfreundlich zu machen. GraphQL API ist die API, die Entwickler verwenden können, um auf die indizierten Daten von The Graph zuzugreifen.</a>
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
  const message = this.createChatbotMessage(<a>Sie können den Preis und alle offenen Märkte auf <a className="cla" href="https://coinmarketcap.com/de/currencies/the-graph/markets/" target="_blank" rel="noreferrer">CoinMarketCap</a> sehen.</a>
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
  const message = this.createChatbotMessage(<a>Subgraphen sind Datenstrukturen zum Organisieren von Daten, die Sie aus einer Blockchain ziehen. Sie sind eine Möglichkeit zu definieren, welche Daten indiziert werden sollen und wie sie gespeichert werden sollen. Einige von ihnen führen Vorabaggregationen oder Berechnungen auf ihren Zuordnungen durch, andere speichern nur einfache Daten, ähnlich denen, die Sie in der Kette finden könnten. Dann fragt eine Entität diese Daten ab. Diese Entität könnte eine DApp (Firma/Entwickler usw.) oder ein Telegram-Bot oder ein Discord-Bot oder sogar ein einfacher Benutzer sein, der eine Abfrage durchführt, um Informationen zu finden.<br></br><br></br >Das Abfragen von Subgraphen aus dem gehosteten Dienst ist derzeit für alle kostenlos. Für das dezentralisierte Protokoll rechnet das Team mit Abfragekosten von etwa 0,00001 $ pro Abfrage, aber es ist ein freier Markt, und jeder Indexierer kann seine eigenen Kostenmodelle festlegen.<br></br><br></br>Ein Spickzettel für Entwickler, mit dem Sie sich in 15 Minuten mit Untergrafiken vertraut machen können, finden Sie unter <a className="cla" href="https://drive.google.com/file/d/1J2zm06wZV0EwMEGBD48fGbaFKPPcCdZT/view" target="_blank " rel="noreferrer">hier</a>.<br></br><br></br>A Tutorial zum Erstellen eines Subgraphen mit dem Subgraph Studio finden Sie <a className="cla" href="https://www.youtube.com/watch?v=HfDgC2oNnwo" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br>Eine Übersicht und Schritt-für-Schritt-Anleitung zum Erstellen eines von <a className="cla" href="https://hashnode.com/@camiinthisthang" target="_blank" rel="noreferrer">Camila Ramos</a> erstellten Unterdiagramms finden Sie <a className="cla" href="https://camiinthisthang.hashnode.dev/the-complete-guide-to-getting-started-with-the-graph" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br>Wenn Sie nach einem Unterdiagramm suchen oder diejenigen erkunden möchten, die ins Mainnet migriert wurden, besuchen Sie die <a className="cla" href="https://www.graphtronauts.com/#/subgraphs" target="_blank" rel="noreferrer">Graphtronauts-App.</a><br></br><br></br>Sie können sich auch für den <a className="cla" href="https://thegraph.academy/course/subgraph-developer-course/" target="_blank" rel="noreferrer">Subgraph Developer</a>.</a>
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
  const message = this.createChatbotMessage(<a>Sie benötigen 100.000 BRT, um Indexer zu werden, und die notwendige Infrastruktur. Dies ist der Mindestbetrag, den Sie einsetzen müssen, um einen Indexer-Knoten in der Kette zu registrieren.<br></br><br></br>Indexer benötigen umfassende DevOps-Kenntnisse und die erforderliche Hardware.<br></br ><br></br>Indexer werden vom Markt „bestraft“, wenn sie Delegationsparameter ändern. Wenn alle anderen Dinge gleich sind, würde das Team erwarten, dass Indexer, die kürzere Cooldown-Zeiten festlegen, weniger Delegierungen erhalten.
  Das Team möchte auch Tools entwickeln, die es einfacher machen, Indexer zu erkennen, die Delegationsparameter unregelmäßig oder zu häufig ändern. Einige dieser Signale könnten in eine zukünftige Version des Explorers integriert werden.<br></br><br></br>Sie können Ihre Indexer-Adresse in den nächsten zwei Jahren ab Dezember 2020 nicht ändern.</a>
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
  const message = this.createChatbotMessage(<a>Gas ist der Begriff für die Menge an Ether (ETH) – die native Kryptowährung von Ethereum – die vom Netzwerk benötigt wird, damit ein Benutzer mit dem Netzwerk interagieren kann.<br></br><br></br>Der Gaspreis ist nicht etwas, worüber das Graph-Team die Kontrolle hat. Der Gaspreis steigt, wenn das Ethereum-Netzwerk überlastet oder stark ausgelastet ist.<br></br><br></br>Die durchschnittlichen Kosten einer Delegationstransaktion zu diesem Zeitpunkt finden Sie in der <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts-App</a> und wählen Sie Gebühren aus.<br></br><br></br>Eine Anleitung zur Reduzierung der Gaskosten für die Delegierung Ihrer GRT-Token finden Sie <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br>Informationen zu Ethereum-Gasgebühren finden Sie <a className="cla" href="https://ethereumprice.org/gas/" target="_blank" rel="noreferrer">hier</a>.</a>
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
  const message = this.createChatbotMessage(<a>Um eine Karte aller Indexer-Standorte anzuzeigen, besuchen Sie die <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts-App</a> und wählen Sie Karte.</a>
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
  const message = this.createChatbotMessage(<a>Besuchen Sie zum Vergleichen von Indexern die <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts-App</a> und wählen Sie Liste aus.<br></br><br></br>Klicken Sie auf die Schaltfläche Vergleichen und wählen Sie dann bis zu fünf Indexer aus, die Sie vergleichen möchten.<br></br ><br></br>Klicken Sie nach der Auswahl unten auf die Schaltfläche "Vergleichen".</a>
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
  const message = this.createChatbotMessage(<a>The Graph Advocates ist eine von der Community betriebene Initiative, die Menschen auf der ganzen Welt als Portal zu web3 dient. Befürworter haben die einzigartige Gelegenheit, zu lernen und zur The Graph-Community und der web3-Mission beizutragen. Jeder kann Advocate werden und anschließend dem Graph AdvocatesDAO beitreten.<hr></hr><strong><underline>Advocate Roles</underline></strong><br></br><br></br><br></br><strong>Event Evangelist</strong><br></br>Veranstalten Sie lokale Events, nehmen Sie an regionalen Events teil und nehmen Sie an persönlichen oder Online-Community-Events teil.<br></br><br></br><strong >Content Creator</strong><br></br>Erstellen Sie Inhalte über web3 und The Graph, einschließlich Artikel, Videos, Infografiken, Memes oder GIFs.<br></br><br></br><strong> Textübersetzer</strong><br></br>Übersetzen Sie The Graph und andere Community-Dokumentationen, Materialien und soziale Beiträge in andere Sprachen.<br></br><br></br><strong>Community Care</strong><br></br>Posten Sie Antworten auf Fragen oder teilen Sie Bildungsressourcen in The Graph Forum, Telegram, Discord oder Reddit.<br></br><br></br><strong>Technischer Lehrer</strong><br></br>Bringen Sie anderen bei, wie sie sich aktiv an web3 und dem The Graph-Ökosystem beteiligen und dazu beitragen können.<br></br><br></br><strong>Web3 Welcomer</strong><br></br>Weiterbildung beschleunigen und Einführung von web3 und The Graph auf der ganzen Welt.<hr></hr>Sie können sich als Fürsprecher für The Graph bewerben, siehe <a className="cla" href="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7" target="_blank" rel="noreferrer">hier.</a>.<br></br><br></br>Um mehr darüber zu erfahren, was es braucht, um ein Advocate zu sein, siehe <a className="cla" href="https://thegraph.com/ecosystem/advocacy/" target="_blank" rel="noreferrer">hier</a>.<hr></hr>Fragen Sie mich nach den AdvocatesDAO-Stipendien!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrant() {
  const message = this.createChatbotMessage(<a><strong>Graph AdvocatesDAO Grant</strong><br></br><br></br><a className="cla" href="http://grants.graphadvocates.com/" target="_blank" rel="noreferrer">Hier</a> können Sie ein AdvocatesDAO-Stipendium beantragen.<hr></hr><strong>Das Erteilungsverfahren</strong><br></br>Erstprüfung – Ihr Stipendium wird hier im Graph <a className="cla" href="https://forum.graphadvocates.com/" target="_blank" rel="noreferrer">AdvocatesDAO-Forum</a> veröffentlicht.<br></br>Öffentliche Diskussionen - Die breitere Community ist eingeladen, Feedback zu Zuschüssen zu geben und auch im Forum darüber abzustimmen, ob sie sie unterstützen. Während dieses Prozesses können Community-Mitglieder oder DAO-Mitglieder im Forum Fragen stellen, um mehr Einzelheiten über die Förderung zu erfahren und ihren Umfang besser zu verstehen. Dies ist eine wichtige Phase des Meinungsbildungsprozesses.<br></br>Ausschusspräsentation – Ein erfolgreicher Förderantrag umfasst auch eine Live-Präsentation vor dem Förderausschuss der DAO. Diese Treffen finden im Public-Voice-Chat des <a className="cla" href="https://discord.gg/XgT3s9XY" target="_blank" rel="noreferrer">Discord-Servers</a> von DAO statt und sind jeden Dienstag zu drei verschiedenen Zeitfenstern (10:00 | 18:00 | 22:00 UTC) geplant, um den verschiedenen Zeitzonen auf der ganzen Welt Rechnung zu tragen.<br></br>Bewilligungsentscheidung – Sie werden während des Bewilligungsverfahrens eine Reihe verschiedener Abstimmungen und Umfragen sehen. Dies sind unglaublich wichtige Signale, die DAO-Mitglieder bei ihrer Abstimmung informieren. Die offizielle DAO-Förderentscheidung für erfolgreiche Zuschüsse erfolgt ganz am Ende des Prozesses, wenn alle DAO-Mitglieder online im <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2" target="_blank" rel="noreferrer">DAOHaus</a> abstimmen. (Hinweis: Einige kleinere Zuschüsse können vom Zuschussausschuss außerhalb der Kette gewählt werden.)<br></br>Erwarteter Zeitplan - Die DAO verpflichtet sich, alle Zuschussanträge angemessen zu prüfen. Das DAO hat auch On-Chain- und Off-Chain-Zeitpläne festgelegt, die ein breites Engagement der Community ermöglichen, die in verschiedenen Zeitzonen mit unterschiedlichem Grad an Verfügbarkeit zur Teilnahme lebt.<hr></hr>Fragen Sie mich nach dem Widerruf von AdvocatesDAO-Zuschüssen!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrantWithdraw() {
  const message = this.createChatbotMessage(<a><strong>Weitere Befürworter des DAO-Zuschussverfahrens</strong><br></br>Sie haben jetzt Ihren Zuschuss über das Formular eingereicht, er wurde im Forum veröffentlicht, wo die Community und die Befürworter abstimmen und Fragen stellen. Was kommt als nächstes?<hr></hr>Die DAO strebt an, einen erfolgreichen Förderantrag innerhalb von 1-2 Monaten zu bearbeiten. Nachfolgend finden Sie eine Übersicht über die wichtigsten Schritte, die ein erfolgreicher Förderantrag durchläuft:<br></br>Community Review: ~10 Tage (variiert je nach Community-Engagement)<br></br>Komitee-Präsentation: ~7 Tage (einschließlich Planungszeit)<br></br>Ausschuss-Off-Chain-Abstimmung: ~7 Tage<hr></hr>Der Abstimmungszeitraum ist beendet und Ihre Förderung war erfolgreich. Wenn ja, herzlichen Glückwunsch! Was zu erwarten ist:<br></br><br></br><strong>E-Mail-Bestätigung</strong> - 
  Dies ist von Graph AdvocatesDAO, Sie müssen KYC (Know Your Customer) über den Link in der E-Mail abschließen. Sie erhalten auch eine Vertragsvereinbarung.<br></br><strong>Forumsbeitrag</strong> - Ein Fürsprecher wird Ihren Zuschuss auch innerhalb des Forums kommentieren, um zu bestätigen, dass Sie mit Ihrem Zuschuss erfolgreich waren.<br></br>KYC & Zuschussvereinbarung: ~7 Tage<br></br>
On-Chain-Abstimmung: 14 Tage<br></br><a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2/proposals" target="_blank" rel="noreferrer">Hier</a> können Sie Ihren On-Chain-Förderantrag einsehen.<br></br>Wenn Sie nach den 14 Tagen mit der On-Chain-Abstimmung erfolgreich waren, können Sie Ihr Stipendium zurückziehen.<hr></hr>Eine Anleitung zum Abheben Ihrer GRT aus der DAOhaus-App finden Sie <a className="cla" href="https://docs.graphadvocates.com/community-grants/getting-grant-paid" target="_blank" rel="noreferrer">hier</a>. Oder Sie können sich das <strong>Video-Tutorial</strong> unten ansehen. Wenn Sie Ihre Gelder von Gnosis Chain zu Ethereum verschieben müssen, müssen Sie Ihre GRT überbrücken, wir empfehlen die Verwendung von OmniBridge, auf die Sie <a className="cla" href="https://omni.gnosischain.com/bridge" target="_blank" rel="noreferrer">hier</a> zugreifen können. Um ein Video anzusehen, das zeigt, wie Sie OmniBridge verwenden, um Ihre Gelder zu bewegen, können Sie es sich <a className="cla" href="https://drive.google.com/file/d/1-YB8JfBu8mkYzc1wAqopGsBIonaLHwq6/view" target="_blank" rel="noreferrer">hier</a> ansehen.<br></br><br></br><iframe className="embed" isDark src="https://drive.google.com/file/d/1toZih5GIO-h3deJKQz9lr_WBY3_QqX0U/preview" width="100%" height="480" allow="autoplay"></iframe></a>
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
  const message = this.createChatbotMessage(<a>Nachfolgend finden Sie den GRT-Vertrag und seine Details. Überprüfen Sie die Informationen sorgfältig, um das Hinzufügen eines böswilligen Vertrags zu vermeiden.<br></br><br></br>Name: The Graph<br></br>Symbol: GRT<br></br>Netzwerk: Ethereum (ERC20)<br></br>Vertrag: 0xc944e90c64b2c07662a292be6244bdf05cda44a7<br></br>Dezimalstellen: 18<br></br><br></br>Sie können es sich <a className="cla" href="https://coinmarketcap.com/de/currencies/the-graph/" target="_blank" rel="noreferrer">hier</a> auf CoinMarketCap ansehen.</a>
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
  const message = this.createChatbotMessage(<a>Wann immer ein Delegator die Delegierung aufheben möchte, unterliegen seine Token einer 26-tägigen Entbindungsfrist. Das bedeutet, dass sie 26 Tage lang weder ihre Token übertragen noch Belohnungen verdienen können.<br></br><br></br>Die Undelegierungs-/Auftauperiode dient dazu, bestimmte wirtschaftliche Angriffe zu vermeiden. Sie muss mit der maximalen Zuweisungslebensdauer von 28 Epochen übereinstimmen. In Anbetracht dessen, wie das Belohnungssystem derzeit funktioniert, würde ein kürzerer Zeitraum des Nichtdelegierens möglicherweise dazu führen, dass Delegieren über mehrere gleichzeitige Zuweisungen hinweg „doppelt gezählt“ wird.<hr></hr>Wann auch immer Indexer möchte sie erzwingen (manuell) oder automatisch alle maximal 28 Epochen - maximale Lebensdauer der Zuweisung. Dies ist, wenn Belohnungen verteilt werden. <br></br><br></br>Eine Sache, die Sie ebenfalls berücksichtigen sollten, ist die kluge Auswahl eines Indexers. Wenn Sie sich für einen Indexer entscheiden, der nicht vertrauenswürdig war oder keine gute Arbeit leistet, werden Sie die Delegation aufheben wollen, was bedeutet, dass Sie viele Gelegenheiten verpassen, Belohnungen zu verdienen, was genauso schlimm sein kann wie das Verbrennen von GRT.<br></br><br></br>Um ein Tutorial zum Undelegating von GRT-Tokens von The Graph anzusehen, klicken Sie <a className="cla" href="https://www.youtube.com/watch?v=3GPY5On7vHc" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br><a className="cla" href="https://blog.graphtronauts.com/wie-sie-ihre-grt-tokens-in-the-graph-wieder-freigeben-e9b8ebbba145" target="_blank" rel="noreferrer">Wie Sie Ihre GRT-Tokens in The Graph wieder freigeben</a><br></br><br></br>
  
  Ich kann Ihnen mit Dokumentation und Anleitung zur Auswahl eines Indexers helfen.<hr></hr>Undelegation dauert 28 Epochen (nicht Tage).<br></br>Jede Epoche ist 6646 Blöcke lang.<br></br><br></br>Vor ETH PoS war jeder Block etwa 13 Sekunden lang, aus diesem Grund waren 28 Epochen etwa 28 Tage.<br></br>13s * 6646b * 28e = ~28 Tage<br></br><br></br>Jetzt dauert jeder Block etwa 12,06 Sekunden.<br></br>12s * 6646b * 28e = 26 Tage</a>
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
  const message = this.createChatbotMessage(<a>Bei der Graph Academy dreht sich alles um Bildung und darum, mehr über The Graph zu erfahren. Ihre Kurse sollen Ihnen beim Einstieg in The Graph helfen und Ihr Wissen über das Ökosystem erweitern. Und als Belohnung dafür, dass Sie mehr gelernt haben, erhalten Sie ein individuelles Zertifikat.<br></br><br></br><a className="cla" href="https://thegraph.academy/course/delegator-course/" target="_blank" rel="noreferrer">Delegator Course</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/subgraph-developer-course/" target="_blank" rel="noreferrer">Subgraph Developer Course</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/curator-course/" target="_blank" rel="noreferrer">Curator Course</a><hr></hr>Um ein kostenloses Konto zu registrieren oder sich als Gast anzumelden, besuchen Sie den Kurs, an dem Sie interessiert sind, und klicken Sie auf „Jetzt starten“ und „Anmelden“.<hr></hr>Wenn Sie mehr über Web3 erfahren möchten, fragen Sie einfach mich! "Wie lerne ich Web3 kostenlos?"</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLearnWeb3() {
  const message = this.createChatbotMessage(<a>Ressourcen zum Erlernen von Web3 Dev <strong>KOSTENLOS</strong><br></br><br></br><a className="cla" href="https://t.co/dm50GZ8lMP" target="_blank" rel="noreferrer">Ethereum</a><br></br><a className="cla" href="https://t.co/BfjoA5ynEt" target="_blank" rel="noreferrer">Solidity</a><br></br>Eine kuratierte Liste großartiger Solidity-Ressourcen, -Bibliotheken, -Tools und mehr finden Sie unter <a className="cla" href="https://github.com/bkrem/awesome-solidity" target="_blank" rel="noreferrer">Awesome Solidity.</a><br></br><a className="cla" href="https://t.co/GUMDW8WAru" target="_blank" rel="noreferrer">Blockchain</a><br></br><a className="cla" href="https://t.co/kzVyI8leHK" target="_blank" rel="noreferrer">Oracles</a><br></br><a className="cla" href="https://t.co/QRwZn0CvPl" target="_blank" rel="noreferrer">CryptoZombies</a> ist eine interaktive Schule, die Ihnen alles Technische über Blockchains beibringt.<br></br>Stellen Sie sich auf <a className="cla" href="https://t.co/VVsmytm7CS" target="_blank" rel="noreferrer">SpeedRunEthereum.com</a> auf die Probe.<br></br>Alchemy's <a className="cla" href="https://t.co/BDni1gjuvJ" target="_blank" rel="noreferrer">Weg zum Web3</a> -Serie, ein 10-wöchiges Web3-Entwicklerprogramm zum Selbststudium, das neuen Blockchain-Entwicklern hilft, vom Anfänger zum Fortgeschrittenen zu werden.<br></br>Ein vollständiger Leitfaden für Web3 und Blockchain-Stack Twitter-Thread von Suhail Kakar finden Sie <a className="cla" href="https://twitter.com/suhailkakar/status/1552889172175642624?s=21&t=l_VTQ8NemlIWkCRne8f3bQ" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br>Wenn Sie lieber lernen, indem Sie sich Video-Tutorials ansehen, gibt es niemanden, von dem Sie besser lernen können als Nader Dabit. Unten finden Sie das Tutorial „The Complete Guide to Full Stack Web3 Development“. Sehen Sie sich auch den Rest seines YouTube-Kanals an, um weitere Web3-Lerninhalte zu erhalten.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=nRMo5jjgCr4'/></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://twitter.com/evabeylin?s=21&t=xlTfEQdph_MfbuUlhFrb0Q" target="_blank" rel="noreferrer"><strong>Eva Beylin</strong></a> ist seit Oktober 2020 Direktorin der The Graph Foundation. Sie ist eine Investorin und Unterstützerin der Ethereum-Kerntechnologie durch eGirl Capital und leitet das Wachstum von The Graph. Sie ist eine der einflussreichsten 2022 von CoinDesk, lesen Sie den vollständigen Blog <a className="cla" href="https://www.coindesk.com/consensus-magazine/2022/12/05/eva-beylin-most-influential-2022/" target="_blank" rel="noreferrer">hier</a>. Sie hat die Verteilung von Zuschüssen in Höhe von über 135 Millionen US-Dollar an die Kernentwickler von The Graph und das Kapital der Stiftung in Höhe von 50 Millionen US-Dollar unter der Leitung von Tiger Global geleitet. Sehen Sie sich hier ihren Vortrag beim Graph Day 2022 über <a className="cla" href="https://m.youtube.com/watch?v=ef5LCku3IqQ" target="_blank" rel="noreferrer">Our Decenrization Journey</a> an. Sie machte Forbes 2023 <a className="cla" href="https://www.forbes.com/profile/eva-beylin/?sh=34d711c95444" target="_blank" rel="noreferrer">30 unter 30</a>. <a className="cla" href="https://m.youtube.com/watch?v=IoqI6z5l9y8" target="_blank" rel="noreferrer">Hier</a> können Sie Eva in einem Interview kennenlernen.<br></br><br></br><a className="cla" href="https://twitter.com/theklineventure?s=21&t=8FTTZesLJJUxAVnVbmLgQg" target="_blank" rel="noreferrer"><strong>Tegan Kline</strong></a> ist seit 2021 Mitbegründerin und Geschäftsleiterin bei Edge & Node. Nachdem sie 22,5 Millionen US-Dollar gesammelt hatte, um The Graph beim Aufbau eines Open-Source-Tools zu unterstützen, mit dem Ethereum-Entwickler verstehen können, wie ihre Produkte verwendet werden, war sie Mitbegründerin von Edge & Node. Knoten, um das Projekt zu monetarisieren. Edge & Node wurde ursprünglich mit einem Anteil von 8 % am GRT-Token finanziert, der jetzt einen Wert von etwa 650 Millionen US-Dollar hat. Kline hat auch die Investitionen von Edge & Node in Projekte neben The Graph geleitet, die sich im Jahr 2021 auf insgesamt 3,1 Millionen US-Dollar beliefen. Sie machte Forbes 2022 <a className="cla" href="https://www.forbes.com/profile/tegan-kline/?sh=1465202462f7" target="_blank" rel="noreferrer">30 Under 30</a>. Sie können Kline kennenlernen, indem Sie ihre Website <a className="cla" href="https://www.tegankline.com/" target="_blank" rel="noreferrer">hier</a> besuchen. Sehen Sie sich <a className="cla" href="https://youtu.be/yONuFNxJVrc" target="_blank" rel="noreferrer">hier</a> ein Interview mit ihr an. Oder Sie können sich <a className="cla" href="https://youtu.be/ZGHwTb92Rrg" target="_blank" rel="noreferrer">hier</a> einen GRTiQ-Podcast anhören.<br></br><br></br><a className="cla" href="https://twitter.com/girlcalledreem?s=21&t=h9ZItE1mnaruz2uPiHkrLQ" target="_blank" rel="noreferrer"><strong>Reem Chahrour</strong></a> ist seit 2021 Ecosystem Manager bei The Graph. Jeder, der sich um ein Graph-Stipendium beworben oder die Arbeit eines Stipendiaten verfolgt hat, ist Reem bereits begegnet. Sie ist eine wichtige Bereicherung für die The Graph-Community und ihre Arbeit umfasst eine Vielzahl wichtiger Initiativen. Sie können sie <a className="cla" href="https://m.youtube.com/watch?v=3xfb0n99AzI" target="_blank" rel="noreferrer">hier</a> im GRTiQ-Podcast hören. Sie spricht über ihren Einstieg in Krypto und ihre Arbeit bei The Graph Foundation, ihren Rat für diejenigen, die sich um ein Stipendium bewerben möchten (und wo die Stiftung mehr Einreichungen sehen möchte), den Unterschied zwischen dem RFP- und dem Stipendienprogramm und dem Bald - zum Starten des Graph Advocates-Programms.<br></br><br></br>Wenn jemand einen Indexer erwähnt, verwendet er die männlichen Pronomen. „Er schließt seine Allokation“. Um Frauen in Web3 hervorzuheben, die in Indexer-Teams arbeiten oder ihren eigenen Indexer innerhalb des Graph-Ökosystems betreiben, führten die Graphtronauten eine Reihe von Interviews mit Frauen von Web3.<br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=WTdf9wEhSLg" target="_blank" rel="noreferrer">Frauen von Web3 – Ana von GraphOps</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=0D4_17B6ypY" target="_blank" rel="noreferrer">Frauen von Web3 - Anna von Citadel.One</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=chvIFfPfOjY" target="_blank" rel="noreferrer">Frauen von Web3 - IIinca von Chainode Tech</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=Z7UnQotqLVA" target="_blank" rel="noreferrer">Frauen von Web3 - Gabi von Stake2Earn</a></a>
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
  const message = this.createChatbotMessage(<a>BUnten findest du die <strong>offiziellen</strong> Discord-Server.<br></br><br></br><a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">Graph Protocol</a><br></br><br></br><a className="cla" href="https://discord.com/invite/aZtCCKPp34" target="_blank" rel="noreferrer">Graph AdvocatesDAO</a><hr></hr>Unten findest du die <strong>inoffiziellen</strong> Discord-Server.<br></br><br></br><a className="cla" href="https://discord.com/invite/zqrwSFFW3F" target="_blank" rel="noreferrer">Graphrica</a></a>
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
  const message = this.createChatbotMessage(<a>Unten finden Sie die <strong>offizielle</strong> Telegram-Gruppe.<br></br><br></br><a className="cla" href="https://t.me/graphprotocol" target="_blank" rel="noreferrer">The Graph Official Community</a><hr></hr>Nachfolgend finden Sie die <strong>inoffiziellen</strong> Telegrammgruppen aus der ganzen Welt.<br></br><br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank">Graphtronauts</a><br></br><a className="cla" href="https://t.me/TheGraph_Germany" target="_blank">The Graph - Germany</a><br></br><a className="cla" href="https://t.me/thegraphfrenchchannel" target="_blank">The Graph - French</a><br></br><a className="cla" href="https://t.me/thegraphenespanol" target="_blank">The Graph - Español</a><br></br><a className="cla" href="https://t.me/thegraphRu" target="_blank">The Graph - Russia</a><br></br><a className="cla" href="https://t.me/thegraphitalia" target="_blank" rel="noreferrer">The Graph - Italia</a><br></br><a className="cla" href="https://t.me/graphprotocolTR" target="_blank" rel="noreferrer">The Graph - Turkey</a><br></br><a className="cla" href="https://t.me/TheGraphBR" target="_blank" rel="noreferrer">The Graph - Brasil</a><br></br><a className="cla" href="https://t.me/GraphProtocol_VN" target="_blank" rel="noreferrer">The Graph - Vietnam</a><br></br><a className="cla" href="https://t.me/Graph_Persian" target="_blank" rel="noreferrer">The Graph - Persian</a><br></br><a className="cla" href="https://t.me/IndianGraphCommunity" target="_blank" rel="noreferrer">The Graph - Indian</a><br></br><a className="cla" href="https://t.me/thegraphjapan" target="_blank" rel="noreferrer">The Graph - Japan</a><br></br><a className="cla" href="https://t.me/TheGraph_Dutch" target="_blank" rel="noreferrer">The Graph - Dutch</a><br></br><a className="cla" href="https://t.me/GRTARAB" target="_blank" rel="noreferrer">The Graph - Arab</a><br></br><a className="cla" href="https://t.me/Thegraph_KR" target="_blank" rel="noreferrer">The Graph - Korea</a><br></br><a className="cla" href="https://t.me/thegraphpk" target="_blank" rel="noreferrer">The Graph - Pakistan</a><br></br><a className="cla" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">The Graph - Indonesia</a><br></br><a className="cla" href="https://t.me/thegraphbangladesh" target="_blank">The Graph - Bangladesh</a><br></br><a className="cla" href="https://t.me/GraphProtocolCN" target="_blank">The Graph - China</a><br></br><a className="graphiql-link" href="https://t.me/TheGraphUkrainian" rel="noreferrer">The Graph - Ukraine</a><br></br><a className="graphiql-link" href="https://t.me/thegraph_pl" target="_blank" rel="noreferrer">The Graph - Poland</a><br></br><a className="graphiql-link" href="https://t.me/TheGraph_Nigeria" target="_blank" rel="noreferrer">The Graph - Nigeria</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Telegram End
handleTelegram() {
  const message = this.createChatbotMessage(<a>Unten finden Sie die <strong>offizielle</strong> Telegram-Gruppe.<br></br><br></br><a className="cla" href="https://t.me/graphprotocol" target="_blank" rel="noreferrer">The Graph Official Community</a><hr></hr>Nachfolgend finden Sie die <strong>inoffiziellen</strong> Telegrammgruppen aus der ganzen Welt.<br></br><br></br><a className="cla" href="https://t.me/TheGraph_Germany" target="_blank" rel="noreferrer">The Graph - Germany</a><br></br><a className="cla" href="https://t.me/thegraphfrenchchannel" target="_blank" rel="noreferrer">The Graph - French</a><br></br><a className="cla" href="https://t.me/thegraphenespanol" target="_blank" rel="noreferrer">The Graph - Español</a><br></br><a className="cla" href="https://t.me/thegraphRu" target="_blank" rel="noreferrer">The Graph - Russia</a><br></br><a className="cla" href="https://t.me/thegraphitalia" target="_blank" rel="noreferrer">The Graph - Italia</a><br></br><a className="cla" href="https://t.me/graphprotocolTR" target="_blank" rel="noreferrer">The Graph - Turkey</a><br></br><a className="cla" href="https://t.me/TheGraphBR" target="_blank" rel="noreferrer">The Graph - Brasil</a><br></br><a className="cla" href="https://t.me/GraphProtocol_VN" target="_blank" rel="noreferrer">The Graph - Vietnam</a><br></br><a className="cla" href="https://t.me/Graph_Persian" target="_blank" rel="noreferrer">The Graph - Persian</a><br></br><a className="cla" href="https://t.me/IndianGraphCommunity" target="_blank" rel="noreferrer">The Graph - Indian</a><br></br><a className="cla" href="https://t.me/thegraphjapan" target="_blank" rel="noreferrer">The Graph - Japan</a><br></br><a className="cla" href="https://t.me/TheGraph_Dutch" target="_blank" rel="noreferrer">The Graph - Dutch</a><br></br><a className="cla" href="https://t.me/GRTARAB" target="_blank" rel="noreferrer">The Graph - Arab</a><br></br><a className="cla" href="https://t.me/Thegraph_KR" target="_blank" rel="noreferrer">The Graph - Korea</a><br></br><a className="cla" href="https://t.me/thegraphpk" target="_blank" rel="noreferrer">The Graph - Pakistan</a><br></br><a className="cla" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">The Graph - Indonesia</a><br></br><a className="cla" href="https://t.me/thegraphbangladesh" target="_blank">The Graph - Bangladesh</a><br></br><a className="cla" href="https://t.me/GraphProtocolCN" target="_blank">The Graph - China</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Token Economics Start
handleTwitter() {
  const message = this.createChatbotMessage(<a>Unten finden Sie die <strong>offizielle</strong> Twitter-Seite.<br></br><br></br><a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">The Graph</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTokenEconomics() {
  const message = this.createChatbotMessage(<a>Die Token-Ökonomie des Graphen ist ziemlich komplex. Abgesehen von einem Token-Ausgabeplan und einem Token-Burn-Mechanismus schaltet The Graph Protocol Vesting-Token während einer Zeitspanne von 5 bis 10 Jahren frei.<hr></hr><table><tr className="indexer-table-header">
  <th>Gesamtes Token-Angebot = </th>
  <th> Anfängliche Token-Versorgung + </th>
  <th> Jährliche Ausgabe - </th>
  <th> Jährliche Verbrennung</th>
</tr>
</table>
{/* <br></br>The <strong>Annual Issuance</strong> formula is as follows:<br></br><br></br>networkGRTIssuance = 1000000011247641700<br></br><br></br>blocksYear = 2628000<br></br><br></br>Inflation = networkGRTIssuance * (10^-18) * blocksYear - 1<br></br><br></br>Inflation = 0,0299999999792... = 3% approx */}
<hr></hr><strong>GRT Überblick über die Token-Ökonomie</strong><br></br><br></br><table>
<tr className="indexer-table">
  <td><strong>Token Symbol</strong></td>
  <td>GRT</td>
</tr>
<tr className="indexer-table">
  <td><strong>Token Name</strong></td>
  <td>Graph Token</td>
</tr>
<tr className="indexer-table">
  <td><strong>Anfängliche Token-Versorgung</strong></td>
  <td>110 Milliarden GRT</td>
</tr>
<tr className="indexer-table">
  <td><strong>Jährliche Ausgabe</strong></td>
  <td>~3% (für das 1. Jahr)</td>
</tr>
<tr className="indexer-table">
  <td><strong>Jährliche Verbrennung</strong></td>
  <td>~1 % der Abfragegebühren und Steuern</td>
</tr>
</table>
  <hr></hr><table><tr className="indexer-table-header">
  <th>Gesamtes Token-Angebot = </th>
  <th> Anfängliche Token-Versorgung + </th>
  <th> Jährliche Ausgabe - </th>
  <th> Jährliche Verbrennung</th>
</tr>
</table><hr></hr><strong>Meilensteine zum Freischalten von Token</strong> - Überblick über den Fortschritt der Token-Entsperrung zu bestimmten Daten<br></br><br></br><table><tr className="indexer-table-header">
  <th>Datum</th>
  <th>Zunahme (%)</th>
  <th>Kumulative Freischaltung (%)</th>
  <th>Kumulative GRT Freischaltung</th>
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
</table><br></br>Sie können alles über die Token-Ökonomie von The Graph lesen, siehe <a className="cla" href="https://thegraph.academy/ecosystem/graph-token-economics/" target="_blank" rel="noreferrer">hier</a>.</a>
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
  const message = this.createChatbotMessage(<a><strong>AKTUALISIERT</strong> – Klärung des weiteren Weges für den gehosteten Dienst<br></br><br></br>Der gehostete Dienst wird die Unterstützung nicht abrupt für alle Ketten beenden. Der gehostete Dienst bleibt für jede Kette kostenlos nutzbar, bis die Kernfunktionalität für jede Kette erreicht ist.<br></br><br></br>Subgraph-Entwickler werden nicht von einem Wesentlichen abgehalten Service, auf den sie sich in der Produktion verlassen.<br></br><br></br>Um die ursprüngliche Ankündigung zu erläutern (und zu korrigieren), in der die Einstellung des gehosteten Service für Ende des ersten Quartals 2023 geschätzt wurde :<br></br>Der Übergangsprozess gilt nur für Chains, sobald sie auf The Graph Network unterstützt werden (das zum Zeitpunkt der Erstellung dieses Artikels nur das Ethereum-Mainnet umfasst, wobei Gnosis Chain in Kürze verfügbar ist).<br></br><br></br>Der Prozess wird durch spezifische Ausstiegskriterien und Indexer-Bereitschaft über das MIPs-Programm gesteuert, nicht mehr durch Datumsangaben – Entwickler sollten nicht damit rechnen, dass Chains Verfallsphasen durchlaufen, bis die erforderliche Servicequalität, Kernfunktionalität und Entwicklererfahrung erreicht sind im dezentralen Netzwerk angeboten.
  Subgraph-Entwickler sollten sich keine Sorgen machen, dass der Support für ihre Kette willkürlich oder schnell eingestellt wird. Darüber hinaus gibt es eine wachsende Support-Community, die Sie während des gesamten Migrationsprozesses an der Hand hält. Core-Entwickler arbeiten auch weiterhin an Verbesserungen des Abrechnungsprozesses für Abfragegebühren, Abfragekosten, Servicequalität und die allgemeine Entwicklererfahrung im Netzwerk. Die wichtigsten Mitwirkenden von The Graph erkennen die Bedenken der Entwickler bezüglich der Migration an und arbeiten an Lösungen, um ein nahtloseres Netzwerkerlebnis zu schaffen.<br></br><br></br>Feedback ist immer willkommen über The Graph Discord, The Graph Forum und indem Sie sich an migration@thegraph.foundation wenden. Kernentwickler und Mitwirkende hören den Benutzern aktiv zu und integrieren Änderungen, um ihren Bedürfnissen gerecht zu werden.<br></br><br></br>Die Ankündigung von Plänen, den gehosteten Dienst einzustellen, ohne auf die Bedürfnisse der Benutzer einzugehen oder eine Fülle von Kontext bereitzustellen, war das Richtige falsche Bewegung. Das Graph-Ökosystem ändert seinen Kurs, um sicherzustellen, dass die Stimmen der Menschen, die von The Graph abhängig sind, gehört und verstanden werden.<br></br><br></br>Nach fast 4 Jahren der Unterstützung von Subgraphen für Web3-Dapps wird der gehostete Dienst im ersten Quartal 2023 eingestellt, wobei DApps in das dezentrale Netzwerk migrieren. Der gehostete Service war entscheidend für die Dezentralisierung von The Graph, das Erreichen der Produktmarkttauglichkeit und das Testen von Subgraph-Funktionen mit Entwicklern. Die Einstellung des Dienstes ist der größte Meilenstein seit dem Start von The Graph Network und wird es allen web3-Anwendungen ermöglichen, Blockchain-Daten auf wirklich dezentralisierte Weise abzurufen.<br></br><br></br>Für die offizielle Dokumentation besuchen Sie <a className="cla" href="https://thegraph.com/blog/sunsetting-hosted-service" target="_blank" rel="noreferrer">The Graph Stiftung - Der Weg zur Einstellung des gehosteten Dienstes</a>.</a>
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
  const message = this.createChatbotMessage(<a>Während des Graph Day wurde Tenderize als erstes Liquid-Staking-Protokoll gelobt. Benutzer können $GRT für TenderGRT (tGRT) einzahlen, wodurch Belohnungen automatisch zusammengesetzt und nach Belieben hin und her getauscht werden. $GRT-Inhaber können über Tenderize delegieren und ihnen tGRT geben. Eine tokenisierte Version der abgesteckten Position, die automatisch Belohnungen zusammensetzt und die sofort zu GRT zurückgetauscht werden kann.<br></br><br></br>Sie können einen von den Graphtronauten verfassten Leitfaden zur Verwendung von Tenderize Tokenized lesen Einsatz für Ihr GRT, <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-use-tenderize-tokenized-stake-for-your-grt-cf5fe38a6dc7" target= "_blank" rel="noreferrer">hier</a>.<br></br><br></br>Um anzufangen, besuchen Sie <a className="cla" href="https://app. tenderize.me/stakers/graph" target="_blank" rel="noreferrer">Tenderize</a>.<br></br><br></br>Sie können auch den Tenderize-Blog <a className="cla" href="https://blog.tenderize.me/" target="_blank" rel="noreferrer">hier</a>.</a>
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
  const message = this.createChatbotMessage(<a>Dank der Hilfe talentierter Übersetzer erreicht The Graph jetzt noch mehr Menschen in ihren Hauptsprachen.<br></br><br></br>Um mehr über die GRT-Community zu erfahren, siehe unten.<br></br><br></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCommunity();
  }}><strong>Community</strong></button>
  <br></br><br></br><a className="cla" href="https://thegraph.com/blog/get-involved-with-graph-community-web3/" target="_blank" rel="noreferrer">23 Möglichkeiten zur Teilnahme am Graph-Ökosystem</a></a>
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
  const message = this.createChatbotMessage(<a>Geo ist ein dezentraler Web3-Browser, der auf The Graph basiert, die Seiten sind offen und werden von der Community gepflegt. So können Sie abstimmen, was wertvoll ist und Ihre Stimme zählt. Geo löst alle Probleme, die wir derzeit mit unseren Web2-Browsern haben, und öffnet ein neues Fenster der Innovation, ein neues Internet, in dem Ihre Privatsphäre oberste Priorität hat. Sie müssen nichts über Krypto oder Blockchain wissen, um es verwenden zu können. Dies ist eine Erfahrung, um die nächsten 1 Mrd. Benutzer in web3 einzubinden.<br></br><br></br>Geo befindet sich in der Beta-Phase und unterstützt derzeit nur iPad- und Mac-Geräte. Melden Sie sich <a className="cla" href="https://edgeandnode.com/geo/" target="_blank" rel="noreferrer">hier</a> für die Beta-Warteliste an.<hr></hr><strong>AKTUALISIERT</strong> - Geo Genesis<br></br><br></br>Yaniv – Vor fünf Jahren sah eine Gruppe von uns die Aktivitäten rund um Ethereum und beschloss, durch den Aufbau von The Graph einen Beitrag zu leisten. Ich sah das Potenzial von The Graph, ein globaler, dezentralisierter Wissensgraph für das gesamte öffentliche Wissen und die Informationen der Welt zu sein. Durch die Nutzung öffentlicher Infrastrukturen zum Organisieren und Bereitstellen von Informationen könnten wir bessere offene und faire Prozesse haben, um zu beeinflussen, welche Informationen als wahr gelten. Heute haben wir ein lebendiges dezentrales Netzwerk und The Graph löst das kritische Problem des effizienten Zugriffs auf Blockchain-Daten für Tausende von Entwicklern, aber wir müssen noch einen Schritt weiter gehen, um die vollständige Vision zum Leben zu erwecken.<br></br><br></br>Heute freue ich mich, Ihnen mitteilen zu können, dass wir ein separates Unternehmen namens Geo gegründet haben, das ich zusammen mit einigen sehr talentierten Ingenieuren und Designern leiten werde. Dies ist der Anfang dieser Reise, und der Aufbau von Geo in seiner vollen Form wird zweifellos viel Experimentieren, Iterieren und Zusammenarbeit erfordern.<br></br><br></br>Den vollständigen Blog können Sie <a className="cla" href="https://www.geobrowser.io/blog/post/introducing-geo-genesis?s=09" target="_blank" rel="noreferrer">hier</a> lesen.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/i/status/1532418078700580869'/></a>
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
  const message = this.createChatbotMessage(<a>StreamingFast ist ein Protokollinfrastrukturunternehmen, das sich durch den Aufbau einer hochskalierbaren, kettenübergreifenden Architektur für das Streamen von Blockchain-Daten auszeichnet. Der Core Dev Grant in Höhe von 60 Millionen US-Dollar ist der erste seiner Art und ebnet den Weg für eine neue Grenze der kollaborativen Innovation, bei der Community und Unternehmen zusammenkommen, um ein radikal offeneres Internet aufzubauen.<br></br><br></br> StreamingFast wird dies tun seine Technologie, sein Entwicklertalent und seine Ressourcen einbringen, um The Graph als Protokoll und Ökosystem voranzubringen. Relevantes geistiges Eigentum und Produkte werden unter dem Github-Repo von The Graph Protocol Open Source sein, und API-Produkte werden zur Backend-Indexierung und -Abfrageunterstützung zu The Graph Network migriert.<br></br><br></br>Die Graph Foundation gewährt StreamingFast einen Zuschuss in Höhe von 60 Millionen US-Dollar, um The Graph als Kernentwicklerteam beizutreten, lesen Sie <a className="cla" href="https://thegraph.com/blog/core-dev-grant" target="_blank" rel="noreferrer">hier</a>.<hr></hr>Substreams ist eine leistungsstarke Blockchain-Indizierungstechnologie, die für The Graph Network entwickelt wurde. Es ermöglicht Ihnen, Rust-Module zu schreiben, Datenströme zusammen mit der Community zu erstellen, und bietet aufgrund der Parallelisierung eine extrem leistungsstarke Indizierung auf Streaming-First-Weise. Es bietet alle Vorteile von Firehose, wie z. B. kostengünstiges Caching und Archivieren von Blockchain-Daten, Verarbeitung mit hohem Durchsatz und Cursor-basiertes Reorgs-Handling.<br></br><br></br>Dokumentation zu SubStreams finden Sie <a className="cla" href="https://substreams.streamingfast.io/" target="_blank" rel="noreferrer">hier</a>.<br></br>Oder lesen Sie den Blog von The Graph über <a className="cla" href="https://thegraph.com/blog/substreams-parallel-processing" target="_blank" rel="noreferrer">Substreams: Massively Faster Indexing Performance for Subgraphs</a>.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=qWxffTKpciU'/><br></br>Tritt dem <a href="https://discord.com/invite/jZwqxJAvRs" target="_blank" rel="noreferrer">StreamingFast Discord-Server</a> bei oder schaue sie dir <a className="cla" href="https://www.streamingfast.io/" target="_blank" rel="noreferrer">hier</a> an. Deutsche Dokumentation folgt in Kürze!</a>
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
  const message = this.createChatbotMessage(<a><strong>Eine Community für Delegatoren, gebaut von Delegatoren.</strong><br></br>Die Graphtronauten sind eine Gruppe, die sich dafür einsetzt, den Chat für diejenigen zu erleichtern, die $GRT halten und über die Grundlagen des The Graph-Projekts sprechen möchten. Sie sind nicht nur die größte nicht offizielle Community von langfristigen $GRT-Inhabern für das The Graph-Ökosystem, ihr Ziel ist es auch, Menschen auf ihrem Weg zu einem Delegierten für The Graph zu helfen.<br></br><br></br ><strong>'Wir steigen auf, indem wir andere hochheben' - Graphtronauts | Gegründet am 16. Januar 2021</strong><br></br><br></br>Erfahren Sie mehr über die Graphtronauten, indem Sie sich diesen <a className="cla" href="https://www.grtiq.com/grtiq-podcast-35-the-graphtronauts/" target="_blank" rel="noreferrer">GRTiQ-Podcast</a> mit Baghe und Chris Ewing anhören.<br></br>Und dieser <a className="cla" href="https://www.grtiq.com/grtiq-podcast-90-paolo-diomede/" target="_blank" rel="noreferrer">GRTiQ-Podcast</a> mit Paolo Diomede.<br></br>Sie können der Community über die folgenden Links beitreten:<br></br><br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank" rel="noreferrer">Telegram</a><br></br><a className="cla" href="https://twitter.com/graphtronauts" target="_blank" rel="noreferrer">Twitter</a><br></br><a className="cla" href="https://www.graphtronauts.com/#/" target="_blank" rel="noreferrer">Graphtronauts App</a><br></br><a className="cla" href="https://old.graphtronauts.com/" target="_blank" rel="noreferrer">Webseite</a><br></br><a className="cla" href="https://www.youtube.com/channel/UCPAUeNaRtBV-jdSKY8wmcXg" target="_blank" rel="noreferrer">YouTube</a><br></br><a className="cla" href="https://www.reddit.com/r/Graphtronauts/" target="_blank" rel="noreferrer">Reddit</a><hr></hr>Die Graphtronauten starten bald ihren eigenen Indexer, sehen Sie sich den Tweet unten für weitere Informationen an und folgen Sie ihm auf Twitter.<br></br><Embed className="embed" isDark url='https://twitter.com/graphtronauts_x/status/1593310558798979072?s=20&t=2FCQMWbItkh1MnXmrHBVIA'/>
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
 handleBirthday() {
  this.handleButtonAmsterdam = this.handleButtonAmsterdam.bind(this);
  this.handleButtonBuenosAires = this.handleButtonBuenosAires.bind(this);
  this.handleButtonDubai = this.handleButtonDubai.bind(this);
  this.handleButtonLagos = this.handleButtonLagos.bind(this);
  this.handleButtonSanFrancisco = this.handleButtonSanFrancisco .bind(this);
  this.handleButtonSingapore = this.handleButtonSingapore .bind(this);
    const message = this.createChatbotMessage(<a><strong>The Graph wurde am 17. Dezember 2022 2 Jahre alt!</strong><br></br><br></br>Viele Menschen aus der ganzen Welt halfen dabei, den Start von The Graph Network im Mainnet und das Engagement für die Dezentralisierung zu feiern, indem sie an einer der folgenden sechs von der Community geleiteten Geburtstagsveranstaltungen teilnahmen. Das <strong>FOMO</strong> war echt! <a className="cla" href="https://twitter.com/i/spaces/1vOGwMQpzPgxB" target="_blank" rel="noreferrer">Hier</a> können Sie sich den Twitter Space anhören. Wenn Sie es verpasst haben, machen Sie sich keine Sorgen, Sie können es nachholen, indem Sie auf die Schaltflächen unten klicken.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapur</strong></button><br></br><br></br>Wenn mehr Inhalte geteilt werden, werden diese aktualisiert.</a>
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
      const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/colsongrteacher?s=21&t=G1z0E5ndRT5F549tsuRY2A' target="_blank" rel="noreferrer"><strong>Colson</strong></a> war Gastgeber von The Graph, 2 Year Birthday Celebration im Amstel Boathouse in Amsterdam.<br></br><br></br>Warten auf die Veröffentlichung von Inhalten der Veranstaltung...<br></br><br></br>Sie können sich auch die anderen Veranstaltungen unten ansehen.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapur</strong></button></a>
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
        const message = this.createChatbotMessage(<a>The Graph, 2-jährige Geburtstagsfeier im Area3 El Salvador in Buenos Aires.<br></br><br></br>Sie können die Veranstaltung über diesen Twitter-Feed von The Graph Espanol <a className="cla" href='https://twitter.com/espanolgraph/status/1604257219628916736?s=46&t=MuGXfy1qv8hl2x-HpLcfAg' target="_blank" rel="noreferrer">hier</a> verfolgen.<br></br><br></br>Sie können sich auch die anderen Veranstaltungen unten ansehen.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapur</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/Mardeni01' target="_blank" rel="noreferrer">Ahmad Mardeni</a> war Gastgeber von The Graph, 2 Year Birthday Celebration im OPM Room in Dubai.<br></br><br></br>Sie können die Veranstaltung über seinen Twitter-Feed <a className="cla" href='https://twitter.com/mardeni01/status/1604127593007120384?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">hier</a> und <a className="cla" href='https://twitter.com/mardeni01/status/1604205523619946498?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">hier</a> verfolgen.<br></br><br></br>Sie können sich auch die anderen Veranstaltungen unten ansehen.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapur</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/thegraphnations?s=21&t=2oybVC4qbnXUtBbgmnvSqw' target="_blank" rel="noreferrer">TheGraphNation</a> war Gastgeber der 2-jährigen Geburtstagsfeier von The Graph im Lekki Coliseum (TLC) in Lagos.<br></br><br></br>Sie können die Veranstaltung über ihren Twitter-Feed <a className="cla" href='https://twitter.com/thegraphnations/status/1603831459629891585?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">hier</a> verfolgen.<br></br><br></br>Sie können sich auch die anderen Veranstaltungen unten ansehen.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapur</strong></button></a>
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
            const message = this.createChatbotMessage(<a>The Graph, 2-jährige Geburtstagsfeier im Edge & Node House von Web3 in San Francisco.<br></br><br></br>Sie können die Veranstaltung über ihr Twitter <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603952216540213248?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">hier</a> und <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603990278322507780?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">hier</a> verfolgen.<br></br><br></br>Sie können sich auch die anderen Veranstaltungen unten ansehen.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapur</strong></button></a>
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
              const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/impranavm_?s=21&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">Pranav Maheshwari</a> moderierte The Graph, 2 Year Birthday Celebration in Singapur.<br></br><br></br>Sie können die Veranstaltung über seinen Twitter-Feed <a className="cla" href='https://twitter.com/impranavm_/status/1604024407789182976?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">hier</a> und <a className="cla" href='https://twitter.com/impranavm_/status/1603991615009304576?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">hier</a> verfolgen.<br></br><br></br>Sie können sich auch die anderen Veranstaltungen unten ansehen.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button></a>
                ,
              );
              this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
              }));
            }

handleDelegateWithWallet() {
  const message = this.createChatbotMessage(<a>Wenn Sie GRT über Metamask delegieren möchten. Wenn Sie es noch nicht getan haben, laden Sie <a className="cla" href="https://metamask.io/download/" target="_blank" rel="noreferrer">MetaMask herunter.</a>. Wenn Sie dabei Hilfe benötigen, finden Sie <a className="cla" href="https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047" target="_blank" rel="noreferrer">hier</a> eine Anleitung.<br></br>Wenn Sie lieber der Textanleitung folgen möchten, können Sie diese <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">hier</a> nachlesen. Deutscher Reiseführer kommt bald!<hr></hr>Sie können <strong>WalletConnect</strong> verwenden, um auf The Graph Protocol zu delegieren.<br></br>Eine Schritt-für-Schritt-Anleitung dazu finden Sie <a className="cla" href="https://thegraph.academy/delegators/delegating-walletconnect/" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br><a className="cla" href="https://blog.graphtronauts.com/wie-ihr-eure-grt-token-in-the-graph-mit-einer-hardware-wallet-delegiert-6d1cdae94a2f" target="_blank" rel="noreferrer">Wie Ihr Eure GRT-Token in The Graph mit einer Hardware-Wallet delegiert</a><br></br><br></br>Anstelle der Soft Wallet von Metamask können Sie auch eine Hard Wallet wie Ledger verwenden, um Ihre GRT zu delegieren. Hard Wallets können eine weitere Sicherheitsebene hinzufügen, da sie normalerweise eine physische Gerätebestätigung von Transaktionen erfordern. Sie können Metamask über die Metamask Browser Extension mit Ihrer Hardware Wallet verbinden. Stellen Sie sicher, dass die ETH-App auf Ihrem Ledger-Gerät geöffnet ist und Vertragsdaten in der ETH-App auf Ihrem Gerät erlaubt sind.<br></br><br></br>Um eine Hardware-Wallet in Metamask zu verbinden, befolgen Sie diese einfachen Schritte Anweisungen. Wählen Sie die MetaMask-Erweiterung in Ihrem Browser aus, scrollen Sie nach unten und wählen Sie Connect Hardware Wallet.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCurator() {
  const message = this.createChatbotMessage(<a><a className="cla" href="https://thegraph.academy/curators/definition/" target="_blank" rel="noreferrer">Kuratoren</a> müssen keine komplexen technischen Fähigkeiten oder Kenntnisse besitzen. Alles, was Sie brauchen, ist die Möglichkeit, Transaktionen über MetaMask durchzuführen. Ebenso müssen Kuratoren im Gegensatz zu Indexern nicht einen erforderlichen Mindestbetrag an GRT einsetzen. Kuratoren sollten die Trends des Web3-Ökosystems verstehen und prüfen, ob ein Unterdiagramm nützliche Informationen liefert. Es ist auch hilfreich für einen Kurator, kritische Probleme zu identifizieren, die bedeuten könnten, dass ein Unterdiagramm defekt ist.<br></br><br></br>Die folgenden Leitfäden geben Ihnen alle Informationen, die Sie vorher wissen müssen wie man einen Untergraphen signalisiert und wie man es mit Zuversicht macht.<br></br><br></br>Dieser Kurator <a className="cla" href="https://medium.com/@paulieb.eth/tips-and-tricks-to-evaluate-and-determine-if-a-subgraph-is-legitimate-c67f16e2205a" target="_blank" rel="noreferrer">Leitfaden</a> zu "Tipps und Tricks zur Bewertung". und feststellen, ob ein Teilgraph legitim ist' ist der beste Ausgangspunkt. Sobald Sie den Leitfaden gelesen und die Tutorials unten angesehen haben, sind Sie in einer hervorragenden Position, um Ihren ersten Subgraphen zu signalisieren.<br></br><br></br>Dieser <a className="cla" href="https://medium.com/@paulieb.eth/the-graph-curation-bb17bf8b8fa9" target="_blank" rel="noreferrer">Leitfaden</a> wurde ebenfalls von PaulieB zu „Curation. Ein kurzer und süßer Leitfaden, der erklärt, was es ist, wie man es macht, und hilfreiche Ressourcen, die Ihnen helfen, erfolgreich zu werden.'<br></br><br></br>Treten Sie <a className="cla" href=" bei https://t.me/CurationStation" target="_blank" rel="noreferrer">$GRT Curation Station</a>, eine Community, die von Kuratoren für Kuratoren erstellt wurde. Hier können Sie bei Bedarf weitere Hilfe suchen.<br></br><br></br>Die folgenden Video-Tutorials wurden erstellt von <a className="cla" href="https://thegraph.com/explorer/ profile?id=0x87eba079059b75504c734820d6cf828476754b83&view=Indexing" target="_blank" rel="noreferrer">DataNexus</a> über Kuration:<br></br><a className="cla" href="https://www. youtube.com/watch?v=-7qWi2do-1E" target="_blank" rel="noreferrer">Was ist ein Kurator für die Grafik</a><br></br><a className="cla" href ="https://www.youtube.com/watch?v=unzQvSZIORg" target="_blank" rel="noreferrer">Unterdiagramm verifizieren</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=zJswFILfADg" target="_blank" rel="noreferrer">Wie man einen Untergraphen signalisiert</a><br></br><a className= "cla" href="https://www.youtube.com/watch?v=u76dxQPdS9c" target="_blank" rel="noreferrer">Signaltransaktionsfehler</a><hr></hr></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCuratorTools() {
  const message = this.createChatbotMessage(<a><strong>Hilfreiche Tools für Kuratoren</strong><br></br><br></br>Erfahren Sie, wie die Abrechnung in Subgraph Studio funktioniert, <a className="cla" href="https://thegraph.com/docs /en/billing/" target="_blank" rel="noreferrer">hier.</a><br></br><br></br>Erfahren Sie, wie The Graph Polygon für sein Abrechnungssystem verwendet, <a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">hier</a>.<hr></hr><a className="cla" href ="https://okgraph.xyz/" target="_blank" rel="noreferrer">Überprüfen</a> Sie den Indexierungsstatus eines Unterdiagramms<br></br><br></br>Sie können sehen Daten für:<br></br>Mainnet-Abfragegebühren (täglich)<br></br>Mainnet-Abfragegebühren (monatlich)<br></br>Mainnet-Abfragegebühren (monatlich, gleitender 30-Tage-Durchschnitt)<br></br>Neue Unterdiagramme (monatlich)<br></br>Unterdiagramme insgesamt<br></br>Durchschnittliche Gebühren für Unterdiagramme (monatlich, gleitender 30-Tage-Durchschnitt)<br></br>Abfragegebühren für Unterdiagramme (30 Tage) <br></br>Abfragegebühr/Signalverhältnis (30 Tage)<br></br>Subgraph-Abfragegebühren (30 Tage) – %<br></br><a className="cla" href="http ://michael.lesane.net/graphdash/" target="_b lank" rel="noreferrer">hier</a>.<br></br><br></br>Oder überprüfen Sie die Abrechnung von Subgraphen, <a className="cla" href="http://michael .lesane.net/graphdash/billing" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br>Graph Network <a className="cla" href ="https://dapplooker.com/dapp/graph-network-billing-120192" target="_blank" rel="noreferrer">Abrechnungs-Dashboard</a><br></br><br></br >Graph Network <a className="cla" href="https://dapplooker.com/dapp/graph-network-user-billing-balance-120204" target="_blank" rel="noreferrer">Rechnungsguthaben des Benutzers</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleHostedService() {
  const message = this.createChatbotMessage(<a>Der gehostete Dienst war maßgeblich daran beteiligt, The Graph dahin zu bringen, wo es heute ist, aber die Vision war immer, ein dezentralisiertes Indexierungsprotokoll und eine globale API zu erstellen. Wenn The Graph Network live geht, werden Entwickler endlich in der Lage sein, wirklich serverlose dezentrale Anwendungen anzubieten, die schnell zu laden und zuverlässig sind. Eine zentralisierte Infrastruktur ist nicht erforderlich, da sich Anwendungen direkt mit einem effizienten Netzwerk von Indexern verbinden können, um Abfragen zu verarbeiten.<br></br><br></br>Ethereum-Subgraphen werden weiterhin in das dezentrale Netzwerk von The Graph migriert. Mit der zunehmenden Einführung von web3 steigt auch die Nachfrage nach Skalierbarkeit und Leistung. Entwickler stehen vor einer wichtigen Entscheidung: sich weiterhin auf zentralisierte Technologie zu verlassen oder auf eine dezentralisierte Infrastruktur umzusteigen.<br></br>Für Langlebigkeit und Zuverlässigkeit geht nichts über Dezentralisierung. Indem Sie zentralisierte Fehlerquellen vermeiden, bieten Sie Ihren Benutzern eine Web3-App, auf die sie konsistent zugreifen können. Viele Projekte haben das Netzwerk bereits in der Produktion validiert und jetzt ist der perfekte Zeitpunkt für die Migration Ihres Projekts.<br></br><br></br>Weitere Informationen über die Graph-Subgraph-Migration finden Sie <a className="cla" href="https://thegraph.com/blog/graph-network-migration" target="_blank" rel="noreferrer">hier</a>.<br></br>Wenn Sie nach einer Schritt-für-Schritt-Anleitung zum Migrieren eines Subgraphen vom gehosteten Dienst zum Mainnet suchen, lesen Sie <a className="cla" href="https://codex.thegraph.com/repositories-and-documentation/official-documentation/hosted-service/migrating-subgraph" target="_blank" rel="noreferrer">hier</a>. Wenn Sie Video-Tutorials bevorzugen, siehe unten. Deutsche Tutorials folgen in Kürze!<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=syXwYEk-VnU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleChainlink() {
  const message = this.createChatbotMessage(<a>The Graph ist ein Indizierungsprotokoll zum Abfragen von Netzwerken wie Ethereum und IPFS. Jeder kann offene APIs, sogenannte Subgraphen, erstellen und veröffentlichen, die Daten leicht zugänglich machen.<hr></hr>Chainlink ist ein dezentralisiertes Orakelnetzwerk, das Smart Contracts den sicheren Zugriff auf Off-Chain-Datenfeeds, Web-APIs und traditionelle Bankzahlungen ermöglicht. <hr></hr>Hier ist eine Videoerklärung mit Tegan Kline und Dave Kajpust von The Graph Protocol. Sie diskutieren die entscheidende Bedeutung von The Graph für den Aufbau eines dezentralen Web3 und erklären die Unterschiede zwischen Chainlink und dem Graph.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=HOS9g0rKP24'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIndexerOfficeHours() {
  const message = this.createChatbotMessage(<a>Indexer Office Hours ist eine informelle Drop-in-Klinik, in der jeder Rat zu seiner Indexer-Bereitstellung erhalten kann, sei es im Mainnet oder im Testnet. Wenn Sie mehr Augen auf ein Fehlerbehebungsproblem werfen oder einfach nur Fragen zur Indizierung stellen möchten, dann ist dies die richtige Klinik für Sie.<br></br><br></br>Sie können sich informieren alle Indexer-Sprechzeiten, <a className="cla" href="https://graphops.notion.site/Indexer-Office-Hours-952e0b50a65144768aab922e2c9d102a" target="_blank" rel="noreferrer">siehe hier</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleFireHose() {
  const message = this.createChatbotMessage(<a>Die Verarbeitung von Daten über Firehose (entwickelt von StreamingFast) erhöht die lineare Indizierungsleistung und die Synchronisierungsgeschwindigkeit und maximiert die Datenagilität durch die Möglichkeit der parallelen Verarbeitung. Firehose erstellt eine generische Schnittstelle für Graph Node mit jeder Blockchain und verbessert die Fähigkeit zur Handhabung von Ketten mit hohem Durchsatz wie NEAR erheblich.<br></br><br></br>Sie können den Vorschlag der Firehose lesen, um mehr darüber zu erfahren, <a className="cla" href="https://firehose.streamingfast.io/" target="_blank" rel="noreferrer">siehe hier</a>.<hr></hr>Fragen Sie mich nach StreamingFast, um mehr darüber zu erfahren.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoreDevs() {
  const message = this.createChatbotMessage(<a>Die Kernentwickler von The Graph sind:<br></br><br></br><a className="cla" href="https://edgeandnode.com/blog/introducing-edge-and-node/" target="_blank"><strong>Edge & Node</strong></a> - Entwicklung dezentraler Protokolle und Weiterentwicklung von web3. Ursprüngliches Team hinter The Graph.<br></br><a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank"><strong>Figment</strong></a> - Verbesserung der Knoteninfrastruktur und Multi-Blockchain-Unterstützung.<br></br><a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank"><strong>The Graph Foundation</strong></a> - Verwaltung des Ökosystems, Vergabe von Zuschüssen und Unterstützung der Community.<br></br><a className="cla" href="https://www.streamingfast.io/" target="_blank"><strong>StreamingFast</strong></a> - Optimierung der Indizierungsleistung von Subgraphen und Unterstützung von Web3-Entwicklungstools..<br></br><a className="cla" href="https://www.semiotic.ai/" target="_blank" ><strong>Semiotic</strong></a>- Verbesserung des Graph-Netzwerks durch KI-Innovationen und Forschung und Entwicklung.<br></br><a className="cla"href="https://www.the-guild.dev/" target="_blank"><strong>The Guild</strong></a> - Erstellen von Subgraph-Tools und Entwickeln von GraphQL-API-Verbesserungen.<br></br><a className="cla" href="https://graphops.xyz/" target="_blank"><strong>GraphOps</strong></a> - Extrahieren, Transformieren und Bereitstellen von Blockchain-Daten über das Graph-Protokoll.<br></br><a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank"><strong>Messari</strong></a> - Transparenz schaffen und Tools für fundierte Entscheidungen und Investitionen aufbauen.<br></br><br></br>Fragen Sie nach einem der Kernentwickler, um mehr zu erfahren.<br></br><br></br>Informieren Sie sich über alle <a className="cla" href="https://www.youtube.com/playlist?list=PLTqyKgxaGF3Tj_A6eqV8V_aQoRwd2oHa_" target="_blank">Core Devs Calls</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleFigment() {
  const message = this.createChatbotMessage(<a>Figment ist ein mit Risikokapital finanziertes, registriertes kanadisches Unternehmen mit Sitz in Toronto. Im Dienste der weltweit größten BRT-Besitzer. Mit mehr als 30 Jahren Erfahrung in der erfolgreichen Skalierung von Internetinfrastrukturunternehmen.<hr></hr><strong>Staking</strong> – Figment betreibt ein hochsicheres Netzwerk von Proof-of-Stake (PoS)-Validierern, die es Token-Inhabern ermöglichen, sich zu sichern Netzwerke, beteiligen Sie sich an der Governance und verdienen Sie Erträge.<br></br>Um mehr über das Staking mit Figment zu erfahren, siehe <a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br><strong>Software</strong>- Mit der DataHub-Plattform von Figment können Entwickler die leistungsfähigsten und einzigartigsten Funktionen einer Blockchain nutzen, ohne Protokollexperten werden zu müssen, was die Entwicklung neuer Web 3-Anwendungen beschleunigt.<br></br>Weitere Informationen zur DataHub-Plattform von Figment finden Sie <a className="cla" href="https://datahub.figment.io/" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br><strong>Capital</strong>- Figment Capital bietet Seed-Finanzierung und Wachstumsunterstützung für neue, hochinnovative PoS-Projekte.<hr></hr>Entwickler, die Subgraphen verwenden, können ihre Subgraphen einfach in DataHub überwachen. Dies hilft Entwicklern, die Leistung und Zuverlässigkeit ihrer Unterdiagramme zu verbessern.<br></br>DataHub, die Web 3-Blockchain-Entwicklerplattform von Figment, integriert Unterdiagrammdaten aus The Graph.<br></br>Dies erleichtert Entwicklern den Zugriff auf mehr Komponenten ihres Web 3-Tech-Stacks an einem Ort.<hr></hr>Das zentrale Entwicklungsteam von Figment integrierte The Graph in das Cosmos-Ökosystem. Diese Integration ermöglichte die Indizierung und Abfrage von Cosmos-Ökosystemdaten auf vollständig dezentralisierte Weise, unterstützt von The Graph.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePodcast() {
  const message = this.createChatbotMessage(<a><strong>Was ist GRTiQ?</strong><br></br><br></br><a className="cla" href="https://www.grtiq.com/" target="_blank " rel="noreferrer">GRTiQ</a> generiert Marktinformationen durch Analysen, Forschung, Optimierung und Bildung.<br></br><br></br><strong>Markt
  Analytik</strong> – Sie bieten Marktleistung und Analysen, damit Delegierende die Marktdynamik besser verstehen können.<br></br><br></br><strong>Indexer
Recherche</strong> – Sie führen Indexrecherchen durch, die Delegierende verwenden können, um Möglichkeiten und Partnerschaften zu identifizieren.<br></br><br></br><strong>Belohnungen
Optimierung</strong> – Sie erstellen und veröffentlichen Daten, Leitfäden und Analysen, um Delegierenden dabei zu helfen, ihre Prämieneinnahmen zu optimieren.<br></br><br></br><strong>Ökosystem
Bildung</strong> – Sie bieten fortlaufende Bildungsressourcen und Informationen zu allen Aspekten des The Graph-Ökosystems.<hr></hr>Sie können sich die GRTiQ-Podcasts anhören, <a className="cla" href="https:// www.grtiq.com/podcast/" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br>Um über GRTiQ auf dem Laufenden zu bleiben, kannst du folgen sie auf <a className="cla" href="https://twitter.com/grt_iq" target="_blank" rel="noreferrer">Twitter</a>, <a className="cla" href="https ://www.youtube.com/channel/UCxhFN47AlCDx1Qoaw1oSQ5A" target="_blank" rel="noreferrer">YouTube</a> und <a className="cla" href="https://www.instagram.com/ thegraphiq/" target="_blank" rel="noreferrer">Instagram</a>.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/grt_iq/status/1617269631403831297?s=20&t=C_TtsLrGHQ0b92xQs527lQ'/></a>
,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphSocial() {
const message = this.createChatbotMessage(<a><strong><a className="cla" href="https://twitter.com/graphsocial1?s=21&t=f_BFECU3y4NfkRXocWA5kQ" target="_blank" rel="noreferrer">Graph Sozial</a></strong><br></br><br></br>Ein internationales Web3-Treffen, das das Wachstum des The Graph-Ökosystems vorantreibt. Organisiert von <a className="cla" href="https://twitter.com/Mardeni01" target="_blank" rel="noreferrer">Ahmad Mardeni</a>.<br></br><br></br>Das erste Graph Social web3-Treffen fand am 8. Oktober 2022 von 18:00 bis 22:00 Uhr GST in Dubai mit mehr als 100 Teilnehmern statt. Die Veranstaltung behandelt, was The Graph ist, was die kürzlich erreichten Meilensteine ​​sind und wie man sich beteiligen kann!<hr></hr><strong>Sprecher</strong><br></br><br></br>Ahmad Mardeni<br></br>Salim Hadri<br></br>Shing Lam von <a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><br></br><a className="cla" href="https://twitter.com/9001sabella" target="_blank" rel="noreferrer">Isabella</a> vom <a className="cla" href="https://twitter.com/routerprotocol" target="_blank" rel="noreferrer">Router Protocol</a><br></br><a className="cla" href="https://twitter.com/farhajmayan" target="_blank" rel="noreferrer">Farhaj Mayan</a> von <a className="cla" href="https://twitter.com/_buildspace" target="_blank" rel="noreferrer">Buildspace</a><br></br><a className="cla" href="https://twitter.com/dudhat_paresh" target="_blank" rel="noreferrer">Paresh Dudhat</a> von <a className="cla" href="https://twitter.com/infy_protocol" target="_blank" rel="noreferrer">Infy Protocol</a><br></br>Rashmi Padhy<br></br><br></br><strong>Sponsoren</strong><br></br><br></br><a className="cla" href="https://twitter.com/tenderize_me" target="_blank" rel="noreferrer">Tenderize</a><br></br><a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><hr></hr>Unten können Sie sich ein Interview von der Veranstaltung mit Ahmad Mardeni und <a className="cla" href="https://twitter.com/MultiartStudio" target="_blank" rel="noreferrer">MultiArt Studio</a> ansehen!<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=KFUxrs10gpI'/></a>
    ,
  );
  this.setState((prev) => ({ 
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSemiotic() {
  const message = this.createChatbotMessage(<a>Semiotic Labs baut automatisierte Entscheidungsfindungstools für dezentralisierte Märkte auf der Blockchain. Sie glauben, dass die Konvergenz von KI und Kryptographie Web3, das dezentralisierte Internet der Zukunft, vorantreiben wird.<hr></hr><strong>Deep Reinforcement Learning (RL)</strong> ist ein Bereich der KI, der beim Mastering eingesetzt wurde Spiele wie Go und in der wissenschaftlichen Entdeckung.<br></br>Mit Deep RL entwickeln sie autonome Agenten, die Preise und andere Bedingungen in bilateralen oder Auktionsgeschäften aushandeln können.<br></br>Agenten mit prosozialem Verhalten können das sein geschult, um das Wohlergehen des dezentralisierten Netzwerks zu verbessern.<br></br><br></br><strong>Simulationsumgebungen</strong> sind unerlässlich, um KI-Agenten effizient zu schulen und ihre Leistung anhand von Benchmarks zu testen.<br></br>Sie entwickeln realistische Simulatoren, um die Wirtschaftlichkeit dezentralisierter Märkte zu erfassen und mehrere Agenten zu schulen, die am Netzwerk teilnehmen.<br></br>Simulationsumgebungen sind auch nützlich, um neue Protokolle unter Stress zu testen, um Schwachstellen (z. B. gegnerische Angriffe) vorher zu finden Fehler in der realen Welt treten auf.<br></br><strong>Homomorphe Verschlüsselung on</strong> ermöglicht es, Berechnungen mit verschlüsselten Daten durchzuführen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMessari() {
  const message = this.createChatbotMessage(<a>Messari bringt sein Entwicklertalent und seine Fachkompetenz ein, um qualitativ hochwertige, genaue, komplexe und standardisierte Protokoll-Subgraphen zu entwickeln und zu pflegen. Alle Subgraphen werden Open Source und für die breitere Community verfügbar sein. Jeder Subgraphen wird in das dezentrale Netzwerk migriert. Darüber hinaus wird Messari Subgraphen-Arbeitsgruppen leiten, Feedback geben, um die Bemühungen um Kernprotokolle zu informieren, Best Practices für Subgraphen auszutauschen und bei der Erstellung gemeinschaftsweiter Standards für jedes Protokoll zu helfen.<br></br><br></br>Sie können mehr über Messaris Rolle innerhalb des The Graph-Ökosystems erfahren, <a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank" rel="noreferrer">hier</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphQLApi() {
  const message = this.createChatbotMessage(<a><strong>GraphQL API</strong><br></br><br></br>In <a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/" target="_blank" rel="noreferrer">diesem</a> Handbuch wird die GraphQL-Abfrage-API erläutert, die für das Graph-Protokoll verwendet wird.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#queries" target="_blank" rel="noreferrer">Queries</a></strong> - In Ihrem Subgraph-Schema definieren Sie Typen, die Entitäten genannt werden. Für jeden Entitätstyp werden eine Entität und ein Entitätsfeld für den Abfragetyp der obersten Ebene generiert. Beachten Sie, dass die Abfrage nicht oben in der graphql-Abfrage enthalten sein muss, wenn Sie The Graph verwenden.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#sorting" target="_blank" rel="noreferrer">Sortierung</a></strong> - Beim Abfragen einer Sammlung kann der Parameter orderBy verwendet werden, um nach einem bestimmten Attribut zu sortieren. Zusätzlich kann die orderDirection verwendet werden, um die Sortierrichtung anzugeben, asc für aufsteigend oder desc für absteigend.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#pagination" target="_blank" rel="noreferrer">Seitennummerierung</a></strong> - Beim Abfragen einer Sammlung kann der erste Parameter verwendet werden, um vom Beginn der Sammlung an zu paginieren. Beachten Sie, dass die Standardsortierreihenfolge nach ID in aufsteigender alphanumerischer Reihenfolge und nicht nach Erstellungszeit erfolgt.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#filtering" target="_blank" rel="noreferrer">Filtern</a></strong> - Sie können den where-Parameter in Ihren Abfragen verwenden, um nach verschiedenen Eigenschaften zu filtern. Sie können innerhalb des where-Parameters nach mehreren Werten filtern.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#time-travel-queries" target="_blank" rel="noreferrer">Fragen zu Zeitreisen</a></strong> - Sie können den Status Ihrer Entitäten nicht nur für den letzten Block, der standardmäßig der ist, abfragen, sondern auch für einen beliebigen Block in der Vergangenheit.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleParticipantUpdate() {
  const message = this.createChatbotMessage(<a>Das neueste GRT-Teilnehmer-Update enthält Highlights aus dem dritten Quartal 2022 von The Graph, darunter wichtige Statistiken, Ankündigungen und Meilensteine. Sehen Sie sich die Aufzeichnung an und erfahren Sie mehr über den Aufbau und die Innovation innerhalb von The Graph Ecosystem.<br></br><br></br><Embed className="embed" isDark url='https://youtu.be/58el3_9oJ6Q'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}



handleTheGuild() {
  const message = this.createChatbotMessage(<a>Das fortschrittliche Open-Source-Ökosystem von The Guild deckt mit einer modularen, quelloffenen und vollständigen Plattform alles ab, was Sie für Ihre API-Infrastruktur benötigen.<hr></hr><strong>Das Ökosystem</strong><br></br><br></br>Ihre fortschrittlichen, modularen Lösungen können schrittweise als einzelne Open-Source-Bibliotheken oder als vollständige einheitliche API-Plattform übernommen werden. Entdecken Sie <a className="cla" href="https://www.the-guild.dev/#platform" target="_blank" rel="noreferrer">hier</a> ihre Suite nachhaltiger Open-Source-API-Tools, die alles abdeckt, was Sie zum Skalieren Ihrer API-Infrastruktur benötigen.<br></br><br></br>Sie können mehr über die Gilde erfahren, <a className="cla" href="https://www.the-guild.dev/about-us" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br>Sie können mehr über die von ihnen angebotenen Dienstleistungen erfahren, <a className="cla" href="https://www.the-guild.dev/services" target="_blank" rel="noreferrer">hier</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphOps() {
  const message = this.createChatbotMessage(<a>GraphOps gestaltet die Zukunft des Webs. Ihre Mission ist: Wir sind von der Mission getrieben, ein unzensierbares, gerechtes und selbstbestimmtes Netz aufzubauen. Öffentliche Daten stehen im Mittelpunkt dieser Mission, und wir leben davon, offene Datenstandards und -protokolle zu entwickeln, um die nächste große Welle von Institutionen und Anwendungen für unsere Welt zu stärken.<br></br><br></br>GraphOps sind es ein Blockchain-Dateninfrastrukturunternehmen. Sie extrahieren, transformieren und liefern Blockchain-Daten über das Graph-Protokoll.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphDay() {
  const message = this.createChatbotMessage(<a>Hier ist eine Zusammenfassung des letzten Graph Day, der am 2. Juni 2022 im historischen Palace of Fine Arts in San Francisco stattfand.<hr></hr>Besuch <a className="cla" href="https://thegraph.com/graph-day/2022/" target="_blank" rel="noreferrer">Graph Tag</a> und <a className="cla" href="https://thegraph.com/graph-hack/2022/" target="_blank" rel="noreferrer">Graph Hacken</a> um mehr über die gesamte Veranstaltung zu erfahren.<hr></hr>Die Graph-Community konnte mitmachen und sich auf web3, dapps, Protokolle und die Zukunft des Internets konzentrieren. Die führenden Protokoll- und DApp-Entwickler zeigten, wie die web3-Community brandneue Formen der menschlichen Koordination vorantreibt.<br></br><br></br>Begrüßt von Eva Beylin, Direktorin der Graph Foundation. Gefolgt von einem inspirierenden Vortrag von Yaniv Tal, Mitbegründer von The Graph und CEO von Edge & Node. Als nächstes wurde der Community eine Graph-Präsentation zum Thema „Warum Dezentralisierung wichtig ist“ geboten. Dann rollten nacheinander die aufregenden Ankündigungen herein:<br></br>Ankündigung der Einstellung des gehosteten Dienstes<br></br>Substream-Ankündigung<br></br>GEO-Einführungsankündigung<br></br> Die Community wurde dann zu einem Podiumsgespräch mit Diana Chen, Camila Ramos, Chris Ewing und Derek Meyer eingeladen. -"It takes a Village".<br></br><br></br>Sie können sich den GRTiQ-Podcast zum Graph Day und Graph Hack mit Tegan Kline anhören, die kurz vor der Veranstaltung stattfanden, <a className="cla" href="https://www.grtiq.com/grtiq-podcast-special-release-graph-day/" target="_blank" rel="noreferrer">hier</a>.<br></br><br></br>Sehen Sie sich die Zukunft des Internets an, wie sie unten live im The Graph Day 2022 Livestream enthüllt wird.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=yLQmdM5DWSk&list=PLTqyKgxaGF3T2Ginisuf2nUY6yDi_WbT3&index=11'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsTheWeb() {
  const message = this.createChatbotMessage(<a>Das Web hat sich im Laufe der Jahre stark weiterentwickelt, und die heutigen Anwendungen sind aus den Anfängen kaum wiederzuerkennen. Die Entwicklung des Webs wird oft in drei separate Phasen unterteilt: Web1, Web2 und Web3.<hr></hr><strong>Web1</strong><br></br>Web 1.0 war die erste Iteration des Netz. Die meisten Teilnehmer waren Verbraucher von Inhalten, und die Ersteller waren in der Regel Entwickler, die Websites erstellten, die Informationen enthielten, die hauptsächlich im Text- oder Bildformat bereitgestellt wurden. Web 1.0 bestand ungefähr von 1991 bis 2004.<br></br>Web 1.0 bestand aus Websites, die statischen Inhalt anstelle von dynamischem HTML bereitstellten. Daten und Inhalte wurden von einem statischen Dateisystem und nicht von einer Datenbank bereitgestellt, und Websites hatten überhaupt nicht viel Interaktivität.<br></br>Man kann sich Web 1.0 als schreibgeschütztes Web vorstellen.<br></br><br></br><strong>Web2</strong><br></br>In der Web2-Welt müssen Sie kein Entwickler sein, um am Erstellungsprozess teilzunehmen. Viele Apps sind so aufgebaut, dass jeder leicht kreativ werden kann.<br></br>Wenn Sie einen Gedanken entwickeln und mit der Welt teilen möchten, können Sie das tun. Wenn Sie ein Video hochladen und es Millionen von Menschen ermöglichen möchten, es zu sehen, damit zu interagieren und es zu kommentieren, können Sie das auch tun.<br></br>Web2 ist wirklich einfach und aufgrund seiner Einfachheit noch mehr und immer mehr Menschen auf der ganzen Welt werden zu Kreativen.<br></br>Das Web in seiner jetzigen Form ist in vielerlei Hinsicht wirklich großartig, aber es gibt einige Bereiche, in denen wir noch viel besser werden können.<br></br><br></br><strong>Web3</strong><br></br>In Web3 erstellen und implementieren Entwickler normalerweise keine Anwendungen, die auf einem einzelnen Server ausgeführt werden oder ihre Daten in einer einzelnen Datenbank speichern ( normalerweise auf einem einzigen Cloud-Anbieter gehostet und verwaltet).<br></br>Stattdessen laufen Web3-Anwendungen entweder auf Blockchains, dezentralisierten Netzwerken mit vielen Peer-to-Peer-Knoten (Servern) oder einer Kombination aus beiden, die eine Kryptoökonomie bilden Protokoll. Diese Apps werden oft als Dapps (dezentralisierte Apps) bezeichnet, und dieser Begriff wird häufig im Web3-Bereich verwendet.<br></br><br></br>Um mehr über Web1, Web2 und Web3 zu erfahren, Lies hier.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoinbase() {
  const message = this.createChatbotMessage(<a>So delegieren Sie Ihre GRT-Token mit Coinbase Wallet<br></br><br></br>In diesem Artikel erfahren Sie, wie Sie Ihre GRT-Token innerhalb des The Graph-Protokolls mit <a className="cla" href="https://www.coinbase.com/wallet" target="_blank">Coinbase Wallet </a>delegieren.<br></br><br></br>Um die von den Graphtronauten erstellte Anleitung zu lesen, siehe <a className="cla" href="https://blog.graphtronauts.com/wie-sie-ihre-grt-token-mit-coinbase-wallet-delegieren-d1bf5aaa80fd" target="_blank">hier</a>. Deutsche Guides folgen in Kürze! Oder wenn Sie sich lieber ein Video-Tutorial ansehen möchten, finden Sie das unten. Deutsches Video folgt in Kürze, bitte verwenden Sie bei Bedarf Untertitel.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCryptocurrencies() {
  const message = this.createChatbotMessage(<a>Der Name ist eine Kombination oder ein Portmanteau aus Kryptografie und Währung. Im Gegensatz zu herkömmlichen Währungen (normalerweise als „Fiat-Währungen“ bezeichnet), die physische Scheine und Münzen verwenden, sind Kryptowährungen vollständig digital. Wie jede andere Währung können Sie mit Kryptowährung Waren und Dienstleistungen kaufen und sie zwischen Freunden und Familie weltweit übertragen. Kryptowährung hat jedoch einige zusätzliche Merkmale, die sie von traditionellen Währungen unterscheiden.<br></br><br></br>Wenn Sie Fiat-Währung bei einer Bank einzahlen, leihen Sie Ihr Geld im Wesentlichen dieser Bank und vertrauen darauf dass sie es Ihnen zurückgeben, wenn Sie danach fragen. Während dies im Allgemeinen für beide Parteien gut funktioniert, profitieren die Banken von Ihrem Geld, indem sie es dann an andere verleihen und Zinsen für diese Kredite kassieren. Darüber hinaus erheben Banken zusätzliche Gebühren, wie z. B. Abhebungsgebühren oder monatliche Kontogebühren, und können auch Mindestguthabenanforderungen haben.<br></br><br></br>Eine traditionelle Bank würde als zentralisiert gelten, Kryptowährung ist dezentralisiert Es hat nicht eine einzige Person, die alles kontrolliert – tatsächlich gibt es Tausende von Menschen, die helfen, alle Transaktionen zu validieren, die auf einer Blockchain stattfinden – und das bedeutet, dass Sie eine vertrauenswürdige Umgebung, einen verbesserten Datenabgleich und weniger Schwachstellen haben . Das ist eine wortreiche Art zu sagen, dass Sie Ihr eigenes Vermögen kontrollieren.<br></br><br></br>Die erhöhte Privatsphäre, Sicherheit, Übertragbarkeit und Transparenz der Kryptowährung bedeutet, dass es keinen Raum gibt, Transaktionen zu manipulieren und das Geld zu wechseln liefern oder die Regeln während des Spiels anpassen. Kryptowährungen sind keine Organisation, sie kontrollieren Ihre Gelder nicht; Sie können Ihre eigene Bank sein.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsABlockchain() {
  const message = this.createChatbotMessage(<a>Blockchain kann als ein Rekordbuch betrachtet werden, das zur Verfolgung von Kryptowährungstransaktionen auf die gleiche Weise verwendet wird, wie Scheckbuchausgaben mit einem Scheckbuchregister verfolgt werden. Eine Blockchain ist ein System zur Aufzeichnung von Transaktionen mit Kryptowährungen wie ETH oder Bitcoin. Transaktionsdaten werden in einem Block von vielen Transaktionen gespeichert. Nachdem ein Block voll ist, wird ein neuer Block, der auf den vorherigen Block verweist, erstellt und mit dem vorherigen Block verkettet; daher der Begriff Blockchain.<br></br><br></br>Einige Blockchains, wie Ethereum, werden über ein Peer-to-Peer-Netzwerk von Computern verwaltet, sodass jeder Benutzer von überall aus die Blockchain hosten und darauf zugreifen kann die Welt. Wenn eine Transaktion stattfindet, wird sie aufgezeichnet und an das Aufzeichnungsbuch jedes Benutzers im Blockchain-Netzwerk verteilt.<br></br><br></br>Diese einzelnen Computer bilden bei gemeinsamer Verwendung eine globale dezentrale Datenbank zur Speicherung der gesamten Blockchain Daten. Dezentral bedeutet, dass die Daten nicht an einem Ort verwaltet und von einem einzelnen Unternehmen oder einer einzelnen Person kontrolliert werden, sondern von allen Benutzern des Netzwerks.<br></br><br></br>Blockchains sind so konzipiert, dass sie unveränderlich sind , was unveränderlich bedeutet. Nachdem etwas in der Blockchain aufgezeichnet wurde, kann es nicht mehr geändert oder rückgängig gemacht werden. Das bedeutet, dass alle Transaktionen in der Blockchain dauerhaft sind und eine Aufzeichnung davon immer für jedermann einsehbar ist. Die Dezentralisierung in Kombination mit der Blockchain-Datenstruktur schafft eine permanente Zeitleiste der Ereignisse.<br></br><br></br>Einige Banken verlangen, dass Sie sie kontaktieren, um Transaktionen zu sehen, die älter als einen Monat auf Ihrem Konto sind. Die Verwendung der Blockchain würde die Notwendigkeit beseitigen, Ihre Bank zu kontaktieren, da alle Ihre Transaktionen bereits für Sie einsehbar sind.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSafe() {
  const message = this.createChatbotMessage(<a><strong>Ist Krypto sicher?</strong><br></br>Die Sicherheit von Kryptowährung ist ein heiß diskutiertes Thema. Auf der einen Seite argumentieren die Befürworter, dass Kryptowährung sicherer als traditionelle Währung ist, da sie keiner staatlichen Kontrolle oder Manipulation unterliegt. Andererseits behaupten Skeptiker, dass Kryptowährung anfällig für Hacking und Diebstahl ist.<br></br><br></br>Letztendlich hängt die Sicherheit von Kryptowährung von den Sicherheitspraktiken des einzelnen Benutzers und von der Sicherheit der Kryptowährung ab Netzwerk. Wenn Sie beispielsweise Ihre Kryptowährung in einer nicht passwortgeschützten digitalen Geldbörse aufbewahren, besteht die Gefahr, dass sie gehackt wird.<br></br><br></br>In ähnlicher Weise gilt: Wenn das Netzwerk nicht sicher ist, dann kann Ihre Kryptowährung von Cyberkriminellen gestohlen werden. Daher ist es wichtig, dass Sie Ihre Nachforschungen anstellen, bevor Sie in Kryptowährung investieren, und bei der Speicherung oder Verwendung Vorsicht walten lassen.<br></br><br></br>Um mehr über die Vor- und Nachteile von Krypto zu erfahren, lesen Sie <a className="cla" href="https://www.abcmoney.co.uk/2022/03/16/is-cryptocurrency-safe/" target="_blank" rel="noreferrer">hier</a>. Deutscher Artikel kommt bald!<hr></hr><strong>Ist Blockchain sicher?</strong><br></br>Neben Kryptowährungen, die nicht gefälscht oder gehackt werden können, bieten Blockchain-Technologien zusätzlich zu ihrem Nutzen eine unglaubliche Sicherheit. Die dezentrale Natur von Blockchains und die Unfähigkeit, die darin enthaltenen Informationen zu ändern, tragen dazu bei, dass Blockchains resistent gegen Manipulationen, Hacking und betrügerische Transaktionen sind. Bei vielen über das Netzwerk verteilten Versionen der Blockchain müsste ein Hacker die Kontrolle über unzählige Computer erlangen, um wirklichen Schaden anzurichten. Das macht das Hacken einer Blockchain nahezu unmöglich.<br></br><br></br>Die Implementierung der Blockchain-Technologie zur Stromversorgung der Welt ermöglicht schnellere, sicherere und transparentere Märkte für alle.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleEthereum() {
  const message = this.createChatbotMessage(<a>Ethereum ist eine programmierbare Blockchain-Technologie, die ab 2013 von Vitalik Buterin entwickelt wurde. Ethereum ermöglicht es Benutzern, Kryptowährungen zu senden und zu empfangen, auf dezentrale Anwendungen, die als Dapps bekannt sind, zuzugreifen und diese zu erstellen, Belohnungen durch Staking zu verdienen und vieles mehr. Freier Zugang zu Finanzdienstleistungen und ein privateres und dezentraleres Internet sind einige der Hauptziele der Ethereum-Stiftung.<br></br><br></br>Nach seiner Konzeption implementierte Ethereum ein System der dezentralen Governance mit No eine Person in Kontrolle. Dieser Mangel an Eigentum macht es Regierungen oder Organisationen fast unmöglich, Ihnen den Zugang zu Diensten auf Ethereum zu verweigern. Anwendungen auf Ethereum erfordern nicht alle Ihre persönlichen Daten, um sie zu verwenden. Dies gibt Benutzern mehr Kontrolle über ihre Privatsphäre und schützt sie bei jeder Transaktion.<br></br><br></br>Ethereum steht jedem überall offen, solange er Zugriff auf eine Ethereum-Brieftasche wie die hat Smart Wallet von Loopring. Sie können sich eine Ethereum-Brieftasche als Banking-App vorstellen, ohne eine Bank, die Ihre Gelder kontrolliert. Mit nur einer Internetverbindung ist Ethereum für jeden verfügbar und bietet Zugang zu Bankdienstleistungen weltweit.<br></br><br></br>Das Peer-to-Peer-Netzwerk von Ethereum macht eine Vermittlungsstelle überflüssig man und ermöglicht es Benutzern, für Zahlungen und andere Vereinbarungen direkt miteinander zu interagieren. Dank intelligenter Verträge haben Benutzer eine eingebaute Garantie, dass Geschäfte nur zustande kommen, wenn beide Seiten das liefern, was vereinbart wurde.<br></br><br></br> Wann immer ETH gesendet oder eine DApp verwendet wird , zahlen Benutzer eine kleine Gebühr in der ETH für die Nutzung des Ethereum-Netzwerks. Diese Gebühren werden verwendet, um Miner für die Überprüfung von Aktionen in der Blockchain zu belohnen. Bergleute fungieren als Protokollführer, die sicherstellen, dass niemand die Blockchain betrügt oder manipuliert, und sie sicher halten. Dies wird als Arbeitsnachweis bezeichnet. Die Zukunft von Ethereum bringt eine neue Methode zur Sicherung der Blockchain, in der Gelder gebunden oder eingesetzt werden, damit die Benutzer als Aufzeichnungen für die Blockchain fungieren können. Dies wird als Proof of Stake bezeichnet.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOW() {
  const message = this.createChatbotMessage(<a>Proof of Work (PoW) ist ein Konsensalgorithmus für die meisten wichtigen Kryptowährungen; Es ist eine Möglichkeit, das Hauptbuch einer Kryptowährung zu sichern. PoW wurde von Satoshi Nakamoto für die Bitcoin-Blockchain eingeführt und ist damit der erste Konsensalgorithmus, der bis heute der dominierende ist.<br></br><br></br>Das war nicht das erste Mal, dass wir das gemacht haben Obwohl ich von PoW gehört hatte, wurde die Hashcash-App von Adam Back 1997 erfunden und verwendete eine Proof-of-Work-Funktion. Einer der großen Vorteile dieses Systems ist, dass es Doppelausgaben verhindert. Dieser Begriff wird fast ausschließlich für digitales Geld und Kryptowährung verwendet, da Sie dasselbe physische Geld nicht zweimal ausgeben können, das heißt; Wenn Sie in ein Geschäft gingen und ein Getränk bar bezahlten, konnten Sie dasselbe Bargeld nicht in einem anderen Geschäft verwenden, da das erste Geschäft das Geld in der Kasse eingesperrt hatte.<br></br><br></br >In Kryptowährung oder jedem digitalen Geld ist es möglich, viele Daten schnell und ohne Validierung herumzuschicken, Sie hätten Leute, die schnell genug ausgeben könnten, um mehrere Geschäfte dazu zu bringen, zu glauben, dass sie bezahlt wurden, und das Hauptbuch würde schnell ruiniert. Im kleinen Rahmen mag das funktionieren, aber wenn Zehn- und Hunderttausende von Menschen auf einer Blockchain handeln, wird es schnell chaotisch.<br></br><br></br>Es wäre mühsam und ineffizient, dies hinzuzufügen alle Transaktionen einzeln mit so vielen Leuten, die handeln wollen, also werden diese Transaktionen in einen Block geworfen, der mit der vorherigen verknüpft ist und darauf verweist – daher der Name Blockchain. Das Hinzufügen zu einem Block ist jedoch nicht kostenlos, es gibt Benutzer, die Miner genannt werden, die helfen, jeden Transaktionsblock zu validieren. Dies kostet Rechenleistung und reale Energie, um einen Hash zu erstellen (denken Sie an einen digitalen Fingerabdruck), der praktisch unmöglich rückgängig gemacht werden kann.<br></br><br></br>Aufgrund der hohen Rechenleistung sind Miner eine Gebühr für ihre Dienste bezahlt, und die Blöcke werden an die Kette übermittelt. Wenn Sie versuchen, eine ungültige Transaktion durchzuführen, wird diese mit der Leistungsfähigkeit der Kryptografie in PoW automatisch vom Netzwerk abgelehnt und Sie zahlen trotzdem die Miner-Gebühr.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOS() {
  const message = this.createChatbotMessage(<a>Ähnlich wie Proof of Work ist Proof of Stake (PoS) ein Konsensalgorithmus, der auf der Anzahl der Coins basiert, die gestaket werden. Staking bezieht sich auf die Bereitstellung von Geldern für das System, um ein Blockvalidator zu sein; Validatoren können nur dann am Prozess der Produktion neuer Blöcke teilnehmen, wenn ihre Coins gesperrt sind. Die Gelder fungieren dann als Sicherheit, was bedeutet, dass ein böswilliger Validierer seine eingesetzten Gelder und den Zugang zum Netzwerk verlieren würde.<br></br><br></br>PoS ist eine Alternative zu PoW, die bestimmte Vor- und Nachteile mit sich bringt . Beim Proof of Work wird nur der Miner belohnt und alle konkurrieren darum, derjenige zu sein, der den gültigen Block einreicht, wodurch viel Energie verschwendet wird. Das Proof-of-Stake-Modell erzielt einen Konsens, indem es die Staking-Größe und die Dauer des Stakes berücksichtigt und dann den Validator auswählt, der beträchtliche Mengen an Energie und Zeit spart.<br></br><br></br><table><tr className="indexer-table-header">
  <th><strong>Vorteile</strong></th>
  <th><strong>Nachteile</strong></th>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Effizienz: Es wird sehr wenig Energie verbraucht, um eine Blockchain zu sichern.</td>
   <td>Größe: Es muss noch ein PoS-System geben, das die Größe von Ethereum oder Bitcoin erreicht.</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Durchsatz: Sie müssen keine komplexen Computerprobleme lösen, daher werden die Transaktionsgeschwindigkeiten erhöht.</td>
   <td>Weniger sicher: Die Teilnahme an einem PoS-System kann das Horten von Münzen zu einem 51-%-Angriff anregen. In ausreichend großen Blockchains wird dies viel unwahrscheinlicher.</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Niedrigeres Einstiegsniveau: Sie müssen immer nur einmal Geld ausgeben, um an einem Proof-of-Stake-Modell teilzunehmen. Ein PoW-System erfordert Hardware-Ausstattung und kontinuierliche Betriebszeit.</td>
   <td>Zentralisierung: Es besteht ein Anreiz, mehr Token für das Staking zu halten. Einige Blockchains haben damit begonnen, dies zu bestrafen und Anreize für kleinere Validierer zu schaffen.</td>
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
  const message = this.createChatbotMessage(<a><strong>Coin</strong><br></br>In der Kryptowährung wird der Begriff „Coin“ verwendet, wenn eine Währung beschrieben wird, die ihrer eigenen Blockchain eigen ist (z. B. Ether für die Ethereum-Blockchain, Bitcoin für die Bitcoin-Blockchain , etc…). Eine Münze ist eine digitale Währung, die auf verschiedene Weise verwendet werden kann:<br></br>Als Zahlungsmittel (z. B. die Übertragung von ETH an einen anderen für einen Artikel oder eine Dienstleistung), ein Wertaufbewahrungsmittel (z. B. eine Ansicht Bitcoin als „sicherer Hafen“ für das eigene Vermögen), Rechnungseinheit (z. B. Artikel wie NFTs können in ETH bewertet werden) und für Blockchains, die Proof-of-Work verwenden, wird die einheimische Münze auch verwendet, um die Miner zu bezahlen Verarbeitung von Transaktionen und Erzeugung von Blöcken.<br></br><br></br><strong>Token</strong><br></br>Während eine Münze in ihrer eigenen Blockchain nativ ist, wird ein Token darauf erstellt eine bestehende Blockchain. Jede Blockchain hat ihr eigenes Format für Token. Beispielsweise haben Token, die auf der Ethereum-Blockchain erstellt wurden, das Präfix ERC, gefolgt von einer Nummer (z. B. ERC-20). Technisch gesehen kann jeder einen Token erstellen, daher wird vor dem Kauf immer empfohlen, die Tokenomik zu recherchieren und durchzulesen.<br></br>Ein Token kann je nach verwendetem Standard fungibel (austauschbar) oder nicht fungibel sein. Auf Ethereum sind einige Beispiele für Token-Standards:<br></br><br></br>ERC-20<br></br>Standard, der häufig für vertretbare Token verwendet wird, solche, die für digitale Währungen, Staking und Abstimmung.<br></br><br></br>ERC-721<br></br>Standard, der für nicht vertretbare Token verwendet wird, wie ein NFT für Kunstwerke oder einen Song.<br></br><br></br>ERC-1155<br></br>Standard, der effizienteren Handel und Bündelung von Transaktionen ermöglicht. Es kann eine beliebige Anzahl von fungiblen und nicht fungiblen Token-Typen darstellen und kontrollieren. Das bedeutet, dass der ERC-1155-Token die gleiche Rolle wie ein ERC-20- und ERC-721-Token spielen kann, und sogar beide gleichzeitig.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStablecoin() {
  const message = this.createChatbotMessage(<a>Ein Stablecoin ist eine Kryptowährung, die darauf ausgelegt ist, einen konstanten Marktpreis aufrechtzuerhalten. Während die genauen Mechanismen von einem zum anderen variieren können, sind Stablecoins etwas resistent gegen Marktvolatilität. Sie sollten keine signifikanten Preisänderungen erfahren, da ihre Werte oft an einen anderen Vermögenswert wie den US-Dollar gekoppelt sind.<br></br><br></br>Die Hauptidee bei der Verwendung einer Stablecoin ist, dass Sie von den Vorteilen profitieren sowohl Fiat- als auch Kryptowährungswelten. Sie können sich gegen die Volatilität der Kryptomärkte absichern und Ihre Stablecoins ausleihen, um Zinsen besser zu verdienen als bei einer Bank oder einem Broker.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCEX() {
  const message = this.createChatbotMessage(<a>Eine zentralisierte Börse (CEX) ist eine Möglichkeit, den Handel zwischen Benutzern zu erleichtern, indem ein Orderbuch geführt wird; eine Sammlung von Kauf- und Verkaufsaufträgen, die von einzelnen Anlegern platziert werden. Die Aufträge bestehen darin, eine bestimmte Menge Krypto zu einem bestimmten Preis zu kaufen oder zu verkaufen – ein CEX wird diese Aufträge aggregieren und die Aufträge ausführen.<br></br><br></br>Ein großer Unterschied zwischen einem CEX und einem persönlichen Wallets oder ein DEX ist, dass Benutzer nicht wirklich Krypto oder Fiat untereinander austauschen. Die Gelder werden eingezahlt und die Börse übernimmt die Verwahrung der Vermögenswerte und stellt dem Händler im Grunde einen Schuldschein aus. Das hat Vorteile wie niedrigere Gebühren und einfacheres Tauschen, aber es gibt auch Nachteile wie einen Mangel an Transparenz, der böswillige Praktiken wie Wash Trading und Preismanipulation ermöglicht.<br></br><br></br>Da alle Gelder sind Da sie von der Börse verwahrt werden, sind CEXs ein Hauptziel für potenzielle Hacks und wurden in den letzten Jahren mehrmals für Hunderte von Millionen Dollar getroffen. Da ein CEX irgendwo gehostet wird, ist es außerdem möglich, dass technische Probleme oder Angriffe auftreten, die zu Ausfallzeiten führen können. Gelder können in einigen Fällen auch aufgrund staatlicher Vorschriften eingefroren und beschlagnahmt werden.<br></br><br></br>Während eine CEX die Durchführung von Know Your Customer (KYC) erfordert, ist sie auch für Steuerzwecke nützlich um diese Informationen leicht verfügbar zu haben, und die meisten Börsen können Ihnen problemlos Steuerdokumente zur Verfügung stellen. Die Verwahrung Ihrer Gelder durch eine CEX hat Vorteile, wenn Sie sie nicht selbst kontrollieren möchten. Einige Benutzer haben Gelder in ihren persönlichen Brieftaschen gespeichert und Seed-Phrasen vergessen oder ihre privaten Schlüssel verloren, wodurch sie Krypto im Wert von mehreren Millionen Dollar verloren haben.<br></br><br></br>Einige Beispiele für beliebte CEXs sind Binance, Coinbase , FTX, Huobi und Kucoin.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDEX() {
  const message = this.createChatbotMessage(<a>Eine dezentrale Börse ist ein Peer-to-Peer-Marktplatz, auf dem Transaktionen direkt zwischen Händlern stattfinden. Dies ist der Kern der Werte von Crypto, dezentralisiert zu sein – keine Transaktionen werden von offiziellen Banken, Maklern oder anderen Vermittlern gefördert. Es gibt einige beliebte DEXs wie Uniswap und Sushiwap, die auf Ethereum L1 laufen.<br></br><br></br>Der größte Unterschied zwischen einer zentralisierten Börse (CEX) und einer DEX besteht darin, dass eine CEX den Austausch zulässt zwischen Fiat und Krypto, während ein DEX dies nicht kann. Ein CEX ermöglicht Margin-Trades und das Festlegen von Limitaufträgen, die vom Auftragsbuch abgewickelt werden – dies ist ähnlich wie bei Börsen wie Nasdaq.<br></br><br></br>Ein DEX basiert vollständig auf Smart Contracts . Sie legen die Preise von Kryptowährungen algorithmisch fest und verwenden Liquiditätspools (LP), um Trades zu erleichtern, die direkt auf der Blockchain abgewickelt werden. Ein DEX basiert normalerweise auf Open-Source-Code, was bedeutet, dass nichts über seine Funktionsweise verborgen wird.<br></br><br></br>Sie werden mehr Vielfalt bei einem DEX finden, DeFi ist es der richtige Ort, um in frühe Token-LPs einzusteigen. Dies reicht von bekannten Token bis hin zu zufälligen und manchmal nutzlosen Token. Stellen Sie sicher, dass Sie bei der Investition Ihre eigenen Nachforschungen anstellen. Das Hacking-Risiko wird jedoch drastisch reduziert, da die Gelder auf einem DEX in persönlichen Wallets und nicht in einem zentralen Speicher gespeichert werden; Im Laufe der Jahre gab es mehrere Hacks auf CEXs.<br></br><br></br>Ein CEX benötigt KYC (Know Your Customer), um Sie zu identifizieren, ein DEX erfordert keine personenbezogenen Daten, also Sie anonym bleiben. Während einige Standorte Krypto-Käufe nicht zulassen werden, eröffnet ein DEX den Menschen in diesen Regionen die Möglichkeit.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLayerTwo() {
  const message = this.createChatbotMessage(<a>Layer 2 (L2) bezieht sich auf ein sekundäres Framework oder Protokoll, das auf einer bestehenden Blockchain aufbaut. Das Hauptziel eines L2-Protokolls ist es, die Transaktionsgeschwindigkeit und Skalierungsschwierigkeiten großer Kryptowährungsnetzwerke zu lösen. Für Ethereum nennen wir dies das Ethereum-Skalierungs-Trilemma – Skalierung, Geschwindigkeit und Dezentralisierung.<br></br><br></br>Ethereum verarbeitet derzeit ~13 Transaktionen pro Sekunde, während Kreditkartenunternehmen wie MasterCard und Visa über 1700 tps verarbeiten und eine geringe Gebühr erheben. Wenn Sie mit Square oder ähnlichen Diensten für kleine Unternehmen vertraut sind, würden Sie sich niemals vorstellen, nur Ethereum für Transaktionen zu verwenden. Stellen Sie sich vor, Sie versuchen zu bezahlen und warten 20-30 Minuten, um die Zahlung zu validieren, ganz zu schweigen davon, dass Sie eine Tankgebühr für diese Validierung zahlen; Hier kommt L2 ins Spiel und es gibt einige Möglichkeiten, dies zu tun.<br></br><br></br>Es ist schneller, billiger und genauso sicher wie Ethereum. Warum tun es also nicht alle? Nun, optimistische Rollups leiden unter längeren Finalitäts-/Auszahlungszeiten und halten normalerweise Gelder für 7 Tage. Validium und Plasma sind Off-Chain und haben daher nicht die wahre Sicherheit von Ethereum. zkRollups sind die beste aller Welten, da sie schnell und sicher on-chain sind, aber die Technologie, die zu ihrer Entwicklung erforderlich ist, ist sehr herausfordernd.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKProof() {
  const message = this.createChatbotMessage(<a>Ein Zero-Knowledge-Beweis (zkProof) ist in der Lage, jemandem etwas zu beweisen, ohne zusätzliche Informationen zu übermitteln, außer der Tatsache, dass es wahr ist. Sie müssen nicht beweisen, dass Sie das Wissen über bestimmte Informationen besitzen, indem Sie es einfach preisgeben; Die Herausforderung besteht darin, den Besitz des Wissens nachzuweisen, ohne die Informationen selbst preiszugeben.<hr></hr><strong>Anwendungen</strong><br></br><br></br><strong>Finanzen:</strong> Mit zkProofs können Kunden nachweisen, dass ihre Geheimnummer in einem bekannten Bereich liegt. Beispielsweise kann ein Kreditantragsteller nachweisen, dass sein Einkommen in einem qualifizierenden Bereich liegt, ohne sein genaues Gehalt preiszugeben.<br></br><br></br><strong>Online-Voting:</strong>Ein zkProof würde ermöglichen es Ihnen, anonym abzustimmen und zu überprüfen, ob Ihre Stimme in die Endauswertung aufgenommen wurde.<br></br><br></br><strong>Authentifizierung:</strong>Sie könnten sich bei Websites anmelden, ohne geheime Informationen wie ein Passwort auszutauschen.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?time_continue=18&v=fOGdb1CTu5c&feature=emb_logo'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSmartContract() {
  const message = this.createChatbotMessage(<a>Ein Smart Contract ist einfach ein Programm, das auf der Ethereum-Blockchain läuft. Es ist eine Sammlung von Code und Daten, die sich an einer bestimmten Adresse in der Blockchain befindet; es ist eine Art Ethereum-Konto. Sie können ein Guthaben halten und Transaktionen über das Netzwerk senden, aber sie werden nicht von einem Benutzer kontrolliert. Sie sind so programmiert, dass sie genau das tun, was ihnen gesagt wird, indem sie Regeln definieren und sie basierend auf ihrem Code automatisch durchsetzen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNFT() {
  const message = this.createChatbotMessage(<a>Der von Dieter Shirley im September 2017 eingeführte und im Juni 2018 fertiggestellte ERC-721 wurde für nicht vertretbare Token entwickelt. Sie sind eindeutig, kein Token ist genau gleich und ihnen wird eine uint256-Variable namens tokenId zugewiesen, die eindeutig sein muss. Dies könnte fast alles auf der Welt darstellen, das einzigartig ist und einen nachweisbaren Besitz erfordert:<br></br><br></br>Digitale Kunst (GIFs, Sammlerstücke, Musik, Videos)<br></br>Eine Domain Name<br></br>Urkunden für ein Auto<br></br>Tickets für eine reale Veranstaltung<br></br>Tokenisierte Rechnungen<br></br>Rechtliche Dokumente<br></br >Krankenakten<br></br>Unterschriften<br></br><br></br>NFTs haben besondere Eigenschaften:<br></br><br></br>Jeder geprägte Token hat ein Unikat Identifikator, der direkt mit einer Ethereum-Adresse verknüpft ist.<br></br>Sie sind nicht direkt 1:1 mit anderen Token austauschbar. Zum Beispiel ist 1 ETH genau dasselbe wie eine andere ETH. Bei NFTs ist dies nicht der Fall.<br></br>Jeder Token hat einen Besitzer und diese Information ist leicht nachprüfbar.<br></br>Sie leben auf Ethereum und können auf Ethereum-Basis gekauft und verkauft werden NFT-Markt.<br></br><br></br>Das bedeutet, wenn Sie ein NFT besitzen:<br></br><br></br>Sie können beweisen, dass Sie es besitzen.<br></br>Das Token beweist, dass Ihre Kopie das Original ist.<br></br>Ihr privater Schlüssel ist ein Eigentumsnachweis.<br></br>Niemand kann ihn in irgendeiner Weise manipulieren.<br></br >Sie können es verkaufen oder für immer behalten.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMining() {
  const message = this.createChatbotMessage(<a>Kryptowährungs-Mining bezieht sich auf den Prozess der Verifizierung und Validierung von Blockchain-Transaktionen. Miner lösen intensive kryptografische Gleichungen und übermitteln mit diesen Daten neue Blöcke an die Blockchain. Ehrliche und erfolgreiche Miner werden mit einer Mining-Gebühr belohnt, diese Gebühr wird in Ethereum als Gas-Gebühr bezeichnet.<br></br><br></br>Wenn neue Blockchain-Transaktionen durchgeführt werden, werden sie an einen Speicherpool gesendet (Speicher). Der Miner überprüft die Gültigkeit der ausstehenden Transaktionen und organisiert sie in Blöcken. Dies ist vergleichbar mit Personen, die Ihnen Transaktionen mündlich übermitteln, und Sie schreiben sie alle der Reihe nach auf ein Blatt Papier – das Blatt Papier in dieser Metapher ist ein Block. Diese Sperre muss bestätigt werden; Dies erfordert eine komplexe mathematische Problemlösung und erfordert viele Rechenressourcen. Bei Erfolg wird der Block an die Kette übermittelt und der Miner erhält Belohnungen.<br></br><br></br>Um mehr darüber zu erfahren, wie Mining funktioniert, siehe <a className="cla" href="https://desk.zoho.com/portal/loopring/en/kb/articles/what-is-crypto-mining" target="_blank" rel="noreferrer">hier</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNodes() {
  const message = this.createChatbotMessage(<a>Knoten sind ein Teil der Client-Software. Es gibt 3 verschiedene Arten von Knoten, die Daten unterschiedlich verbrauchen. Darüber hinaus gibt es verschiedene Synchronisierungsstrategien, die eine schnellere Synchronisierungszeit ermöglichen; Synchronisierung ist, wie schnell Sie genaue Informationen über den Status von Ethereum erhalten können.<br></br><br></br><strong>Vollständiger Knoten</strong><br></br><br></br> Speichert vollständige Blockchain-Daten.<br></br>Überprüft alle Blöcke und alle Zustände während der Teilnahme an der Blockvalidierung.<br></br>Alle Zustände können von einem vollständigen Knoten abgeleitet werden.<br></br>Dient der Netzwerk und stellt Daten auf Anfrage bereit.<br></br><br></br><strong>Light Node</strong><br></br><br></br>Im Gegensatz zu einem Full Node, Light Knoten laden nur Blockheader herunter. Diese enthalten nur eine Zusammenfassung von Informationen über den Inhalt der Blöcke. Wenn zusätzliche erforderliche Informationen vorhanden sind, kann ein Light Node diese von einem Full Node anfordern. Dadurch kann der Light-Knoten die empfangenen Daten mit einem Statusstamm in den Block-Headern vergleichen.<br></br>Light-Knoten sind nützlich, da Sie keine leistungsstarke Hardware oder hohe Bandbreite benötigen, um sie wie einen vollständigen Knoten auszuführen. <br></br><br></br><strong>Archivknoten</strong><br></br><br></br>Alle in einem vollständigen Knoten gespeicherten Informationen werden in historischen Zuständen archiviert ein Archivknoten. Wenn Sie Informationen von einem zufälligen Block wie Block Nr. 222.222 abfragen möchten, würden Sie diesen Knoten verwenden. Die Datenmenge ist offensichtlich riesig. Terabyte an Daten in einem Archivknoten können für den durchschnittlichen Benutzer weniger attraktiv sein, aber nützlich für Dienste wie Block-Explorer, Kettenanalysen und Wallet-Anbieter.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTokenBurn() {
  const message = this.createChatbotMessage(<a>Token Burning bedeutet, eine Münze oder einen Token dauerhaft zu zerstören, aber warum sollten Sie das tun? Die Blockchain-Technologie gibt den Benutzern Macht, Sie können sich selbst verwahren – vollständiges Eigentum an Ihrem Vermögen. Sie benötigen keine Bank oder Finanzinstitution, Transaktionen sind nicht durch Dritte begrenzt, und in den meisten Fällen ist das Angebot mit der Macht begrenzt, deflationär zu sein, weil Sie Token zerstören können.<br></br><br ></br>Das Brennen eines Tokens bedeutet speziell, dass Sie ein Token an eine eingefrorene Adresse, die so genannte Brennadresse, senden, die nicht wiederhergestellt werden kann. Eine Burn-Adresse hat keinen privaten Schlüssel, es gibt eine öffentliche Adresse zum Senden, aber keine Schlüssel zum Entsperren der Brieftasche. Es ist gleichbedeutend damit, Ihr physisches Geld in einen unknackbaren Tresor zu legen, den niemand entsperren kann.<br></br><br></br>Der Wert eines Tokens basiert auf Angebot und Nachfrage. Normalerweise gilt: Je höher die Nachfrage, desto höher der Wert. Wenn das Angebot kleiner ist, ist der Wert ebenfalls höher. Wenn es also einen festen Vorrat an Token gibt, hat dies Auswirkungen auf die Zerstörung eines Teils dieses Vorrats. Dies kann für eine Reihe von Gründen verwendet werden, z. B. zur Erhöhung des Token-Werts oder zur Herstellung von Wertstabilität.<br></br><br></br><strong>Erhöhung des Projektwerts</strong><br></br>Unternehmen Rückkäufe sind in der wachsenden Finanzwelt von heute alltäglich; Unternehmen kaufen einige ihrer eigenen Aktien und Aktien vom Markt zurück, um den Wert des verbleibenden Angebots zu steigern. Ein ähnliches Ereignis ereignete sich im Jahr 2021, als Ethereum 1,3 Millionen im Umlauf befindliche ETH zurückkaufte und dann damit fortfuhr, sie zu verbrennen. Ziel ist es, die ETH im Rahmen eines neuen Protokolls deflationär zu machen – um sicherzustellen, dass Ethereum-Token ein effektiver Wertaufbewahrer sein und im Laufe der Zeit an Wert gewinnen können, indem das Angebot reduziert wird.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDAO() {
  const message = this.createChatbotMessage(<a>Dieses Akronym steht für Decentralized Autonomous Organization. Es besteht aus einem System vordefinierter Regeln, die bestimmen, welche Maßnahmen eine Organisation ergreifen wird. Diese unterscheidet sich von herkömmlichen Unternehmen und basiert stattdessen auf Open-Source-Code und wird vollständig von der Community betrieben. Das bedeutet, dass es keine einzelne zuständige Einheit, kein Verzeichnis und somit keine Machtzentralisierung gibt.<br></br><br></br>Die Regeln sind als Smart Contracts aufgebaut, die die kollektive Arbeit dieser regeln Mitwirkende und Community-Mitglieder. Obwohl das Konzept einer dezentralisierten Organisation nicht besonders neu ist, macht die Möglichkeit, ihre Arbeitsmechanismen und Funktionen zu automatisieren, ein DAO zu einem so interessanten Konzept.<br></br><br></br>Viele Community verwenden DAOs für automatisierte Fundraising-Kampagnen wie ein ICO (Initial Coin Offering), die Ausgabe und Verteilung von Gebühren, die auf einem Protokoll erhoben werden, oder als Entscheidungs- und Abstimmungssysteme. Darüber hinaus erfolgt all dies ohne menschliche Interaktion, um einen vertrauenswürdigen und sicheren Prozess zu gewährleisten.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKSnark() {
  const message = this.createChatbotMessage(<a>Ein Zero-Knowledge Prägnantes, nicht interaktives Argument des Wissens - <strong>zkSNARK</strong><br></br><br></br>Lassen Sie es uns aufschlüsseln:<br></br><br></br>Zero-Knowledge - Wir haben dies in anderen Artikeln besprochen, aber die Kurzversion beweist etwas, ohne jemand anderen wissen zu lassen, wie Sie es bewiesen haben, nur dass es beweisbar ist.<br></br>Prägnant - Kurz und klar ; der Beweis ist deutlich kleiner als die Daten, die er darstellt.<br></br>Nicht interaktiv - Informationen gehen vom Beweiser zum Verifizierer, es gibt kein Hin und Her.<br></br>Argument des Wissens - Das Der Beweis ist solide, es gibt keinen böswilligen Beweiser, der das System betrügt, ohne das Wissen zu besitzen, um seine Aussage zu untermauern.<br></br><br></br>Ein SNARK erfordert eine vertrauenswürdige Einrichtung zwischen Beweiser und Verifizierer. Dies ist eine Reihe öffentlicher Parameter, die den Regeln eines Spiels ähneln. Diese Parameter werden während einer vertrauenswürdigen Einrichtungszeremonie generiert. Dies ist eine gemeinsame Berechnung, die von einer Gruppe freiwilliger Teilnehmer zu einem festgelegten Zeitpunkt durchgeführt wird. Solange sich ein Verifizierer ehrlich verhält, werden die Parameter sicher generiert, sodass diese Zeremonie als vertrauenswürdiger angesehen werden kann, je mehr Parteien teilnehmen. Diese Zeremonie muss für jede neue Version des Produkts durchgeführt werden.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKStark() {
  const message = this.createChatbotMessage(<a>Ein skalierbares, transparentes Wissensargument ohne Wissen – <strong>zkSTARK</strong><br></br><br></br>Lassen Sie uns erklären:<br></br><br></br>Skalierbar - Der Proof ist relativ klein und die Verifizierung dauert auch bei großen Proofmengen weniger Zeit, ist also skalierbar.<br></br>Transparent - Es gibt keine Anforderungen an eine zuverlässige Konfiguration.<br></br >Argument des Wissens - Der Beweis ist solide, es gibt keinen böswilligen Beweiser, der das System betrügt, ohne das Wissen zu besitzen, um seine Aussage zu untermauern.<br></br><br></br>zkSTARKs wurden von Eli-Ben Sasson erstellt , Professor am Technion-Israel Institute of Technology. Der große Unterschied macht hier, dass ein zkSTARK keine anfängliche vertrauenswürdige Einrichtung erfordert – die Zeremonie, die im Abschnitt SNARK besprochen wird. Ein STARKs ist weniger rechenintensiv als ein SNARK und theoretisch Quantencomputer. Was ist also der Nachteil? Die Größe der Proofs ist viel größer als ein SNARK und das kann die Kosten für On-Chain-Transaktionen in die Höhe treiben.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMetaverse() {
  const message = this.createChatbotMessage(<a>Die erste Verwendung des Wortes findet sich in einem Science-Fanfiction-Roman von 1992 mit dem Titel Snow Crash; es ist eine Kombination aus den Wörtern Meta und Universum. Das Metaverse wird aufgrund der steigenden Nachfrage nach Immersion oft mit fortschrittlicher Virtual-Reality-Technologie verbunden. Das Metaversum ist zwar kein Spielkonzept, aber in diesem Bereich ist es am stärksten gewachsen. Ein Spiel namens Second Life wird oft als erstes Metaversum beschrieben, und der Roman Ready Player One (später ein Film) erweiterte die Möglichkeiten weiter.<br></br><br></br>Im Idealfall unterstützt ein echtes Metaverse nicht nur Spiele oder soziale Medien, sondern kombiniert Ökonomien, digitale Identität, dezentrale Governance und andere Anwendungen. Denken Sie daran, dass Roblox nicht nur benutzerdefinierte Spiele ist, sondern auch für virtuelle Veranstaltungen wie Konzerte und Treffen funktioniert. Das Spiel ist nicht nur zum Spielen da, sondern zum Abhängen in einem virtuellen Raum.<br></br><br></br>Krypto passt in das Metaverse, indem es Unveränderlichkeit und Eigentumsnachweis bietet. Denken Sie darüber nach, wie NFTs in diesem Fall funktionieren würden; digitale Kleidung, Accessoires usw. wären alle sicher und schnell verifizierbar, alles in einer dezentralen Umgebung. Währungen im Spiel könnten florieren, und ein Benutzer könnte Geld verdienen und es dort ausgeben. Mit Wallets ist das Metaversum leicht zugänglich und mit der Blockchain hätten wir eine zuverlässige Governance, ähnlich wie wir im wirklichen Leben für die Führung stimmen.<br></br><br></br>Ein einziges, einheitliches Metaverse ist wahrscheinlich noch ein gutes Stück entfernt, aber dafür gibt es viele Entwicklungen in die richtige Richtung, und die Blockchain wird den Weg weisen.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleArbitrum() {
  const message = this.createChatbotMessage(<a>Arbitrum ist eine Skalierungslösung für Ethereum, die Kosten und Latenz drastisch reduziert. Arbitrum hat Arbitrum One im Ethereum-Mainnet gestartet, und das Team bereitet sich auf die bevorstehende Veröffentlichung für die Öffentlichkeit vor.<br></br><br></br>Dank der Integration mit Arbitrum sind die Indizierungs- und Abfragedienste von The Graph jetzt live im Netzwerk verfügbar. Entwickler auf Arbitrum One können jetzt offene APIs (Subgraphen) erstellen und veröffentlichen, die Anwendungen mit GraphQL abfragen können.<br></br><br></br>Der Graph unterstützt bereits die Indizierung von Daten für Ethereum, IPFS, Celo, Avalanche, Fantom und Moonbeam. Darüber hinaus haben Tausende von Entwicklern bereits über 10.000 Subgraphen für Anwendungen wie DODO, MCDEX, Uniswap, Synthetic, Gnosis, Decentraland usw. erstellt. Durch die Aufnahme von Arbitrum in diese Liste haben die Expansionsbemühungen von The Graph einen weiteren Schritt zur Vereinigung des Web3-Ökosystems getan.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStatistics() {
  const message = this.createChatbotMessage(<a>Wenn Sie nach den Live-Daten / Statistiken suchen. Dann bitte konkreter werden. Hier ist eine Liste dessen, was Sie mich fragen können:<br></br><br></br>Active Delegator Zahlen<br></br>Active Delegation Zahlen<br></br>Halter Zahlen<br></br>Anzahl der Subgraphen<br></br>Curators Zahlen<br></br>Active Indexers Zahlen<br></br>Total Query Fees Zahlen<br></br>Total Staked GRT<br></br>Total GRT Delegated by Delegators<br></br>Total GRT Signalled by Curators<br></br>Total Delegated GRT by Indexers<br></br>Total GRT Burned</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSolana() {
  this.handleSubstreams = this.handleSubstreams.bind(this);
  const message = this.createChatbotMessage(<a><strong>Der Graph unterstützt jetzt Solana mit Substreams</strong><br></br><br></br>Die Graph Foundation freut sich, die Unterstützung von Solana mit  <a className="cla" onClick={this.handleSubstreams}><strong>Substreams</strong></a> bekannt zu geben. Die Solana-Entwicklergemeinschaft kann jetzt damit beginnen, The Graph zu verwenden, um blitzschnelle Dapps zu erstellen. Durch den Einsatz der neuen Substream-Technologie können Entwickler On-Chain-Daten aus Solanas Mainnet-Beta effizient extrahieren und interpretieren, um sie in ihre Anwendungen einzuspeisen. Die Bereitstellung von Support für Substreams ist der erste Schritt, um Subgraphen zu Solana zu bringen.<br></br><br></br>Substreams, die vollständig Open-Source sind, ermöglichen es Solana-Entwicklern, dank ihrer Geschwindigkeit und Effizienz auf völlig neue Weise mit On-Chain-Daten zu bauen. Entwickler können in Rust codierte Substreams-Module verwenden, um protokollspezifische Datenströme oder marktweite analytische Datensätze zu erstellen. Sie können auch verwendet werden, um Echtzeitbenachrichtigungen bereitzustellen und lange Zeitreiheninformationen anzuzeigen. Substream-Entwickler können aus Walled Gardens ausbrechen und von anderen erstellte Streams nutzen, um Zeit zu sparen, und das gesamte Web3-Ökosystem stärken, indem sie ihre Arbeit offen verfügbar und kombinierbar machen. Infolgedessen führen Substreams zu neuen und innovativen Anwendungsfällen in der gesamten Solana-Entwicklergemeinschaft.<br></br><br></br>Substreams sind eine echte branchenverändernde Technologie und bereit, die Leistung von Subgraphen mit paralleler Datenverarbeitung freizusetzen, um die Synchronisierungsgeschwindigkeiten erheblich zu erhöhen. Durch eine horizontal skalierbare Parallel-Engine sind Substreams in der Lage, die historische Indizierungsleistung um mehr als das 100-fache zu multiplizieren.<br></br><br></br>Lesen Sie <a className="cla" href="https://thegraph.com/blog/indexing-solana-substreams/" target="_blank" rel="noreferrer">hier</a> den vollständigen Blog.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTMobile() {
  const message = this.createChatbotMessage(<a><strong>Deutsche Telekom und T-Mobile US starten neue T-Challenge Seeking Web3 Development Through 5G</strong><br></br><br></br>Der globale Wettbewerb für Startups, Entwickler und Forscher, der innovative Lösungen mit 5G-Netzen auszeichnet, ist zurück, diesmal auf der Suche nach Web3-Technologien, um die Art und Weise zu verändern, wie die Welt das Internet nutzt.<br></br><br></br>BONN, Deutschland und BELLEVUE, Washington – 2. November 2022 – Die Deutsche Telekom AG und T-Mobile US, Inc. (NASDAQ: TMUS) haben sich zusammengetan, um die dritte jährliche T Challenge zu starten, die globale Bühne für Innovatoren und Disruptoren, um gegeneinander anzutreten für eine Auszeichnung für die besten Lösungen für öffentliche Blockchain-Protokolle für Web3. Die von den Teilnehmern entwickelten Lösungen werden die Leistungsfähigkeit von 5G nutzen, um Web3 zum Leben zu erwecken, wobei 5G eine wichtige Rolle dabei spielt, wie Benutzer mit diesen Innovationen in Verbindung bleiben.<br></br><br></br>Einreichungen sind offiziell bis zum 20. Januar 2023 möglich. Sechs Gewinner teilen sich 600.000 Euro (in etwa gleich viel in US-Dollar) und eine Reise nach Bonn, Deutschland, um ihre Ideen der Deutschen Telekom und T-Mobile US vorzustellen.<br></br><br></br>Den vollständigen Artikel, in dem The Graph erwähnt wird, finden Sie <a className="cla" href="https://www.t-mobile.com/news/network/2023-t-challenge" target="_blank" rel="noreferrer">hier</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNews() {
  const message = this.createChatbotMessage(<a>Wenn Sie mit den neuesten Nachrichten über The Graph und neuen Partnerschaftsankündigungen auf dem Laufenden bleiben und lesen möchten, was in der Community vor sich geht, dann können Ihnen die folgenden Links dabei helfen.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">The Graph Blog</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a><hr></hr>Folgen Sie The Graph auch auf <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">Twitter</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleHello() {
  const message = this.createChatbotMessage(
    "Hallo, wie kann ich Ihnen heute helfen?",
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
const message = this.createChatbotMessage(<a>Sie können auch die Schaltflächen unten verwenden und nach unten scrollen, um eine Antwort zu finden!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegator</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Curator</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Indexer</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Core Devs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgraphen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Live-Statistiken</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Community</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Nachrichten</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Lernen Sie web3</strong></button></a>
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
const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegator</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Curator</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Indexer</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Core Devs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgraphen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Live-Statistiken</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Community</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Nachrichten</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Lernen Sie web3</strong></button></a>
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
this.handleGRTTokenAddress = this.handleGRTTokenAddress.bind(this);
const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
  this.handleTheGraphCouncil();
  this.handleButtonTheGraph();
}}><strong>Rat</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleButtonCoreDevs();
}}><strong>Core Devs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleFoundingMembers();
  this.handleButtonTheGraph();
}}><strong>Gründungsmitglieder</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleHostedService();
  this.handleButtonTheGraph();
}}><strong>Gehosteter Dienst</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleSunsettingHostedService();
  this.handleButtonTheGraph();
}}><strong>Sunsetting Hosted Service</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleRoadMap();
  this.handleButtonTheGraph();
}}><strong>Roadmap</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleRoles();
  this.handleButtonTheGraph();
}}><strong>Ökosystemrollen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleJob();
  this.handleButtonTheGraph();
}}><strong>Jobangebote</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleBirthday();
  this.handleButtonTheGraph();
}}><strong>Geburtstag</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleGraphDay();
  this.handleButtonTheGraph();
}}><strong>Graph Tag</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleParticipantUpdate();
  this.handleButtonTheGraph();
}}><strong>Teilnehmer-Update</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleGeo();
  this.handleButtonTheGraph();
}}><strong>Geo</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleGitHub();
  this.handleButtonTheGraph();
}}><strong>GitHub</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleGraphFunding();
  this.handleButtonTheGraph();
}}><strong>Finanzierung</strong></button><br class="no-show-monitor"></br>
<button className="chatbot-button" onClick={() => {
  this.handleGraphQLApi();
  this.handleButtonTheGraph();
}}><strong>GraphQL API</strong></button><br class="no-show-monitor"></br>
<button className="chatbot-button" onClick={() => {
  this.handleGRTTokenAddress();
  this.handleButtonTheGraph();
}}><strong>GRT Adresse</strong></button>

<hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategorien-Menü</strong></button></a>
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
}}><strong>Edge und Node</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
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
}}><strong>Edge und Node</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
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

<hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategorien-Menü</strong></button></a>
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
}}><strong>Delegator das Handbuch</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleDelegateWithWallet();
  this.handleButtonDelegator();
}}><strong>Delegate mit Wallet</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleCoinbase();
  this.handleButtonDelegator();
}}><strong>Delegate aus der Coinbase-Wallet</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleFeesToDelegate();
  this.handleButtonDelegator();
}}><strong>Delegation Gebühr</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleUnDelegating();
  this.handleButtonDelegator();
}}><strong>Undelegating</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleTenderize();
  this.handleButtonDelegator();
}}><strong>Tenderize</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleChoosingIndexers();
  this.handleButtonDelegator();
}}><strong>Auswahl eines Indexer</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleIndexerCompare();
  this.handleButtonDelegator();
}}><strong>Vergleichen Indexers</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleActiveDelegatorCount();
  this.handleButtonDelegator();
}}><strong>Active Delegator Zahlen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleActiveDelegationCount();
  this.handleButtonDelegator();
}}><strong>Active Delegation Zahlen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleTotalGRTDelegatedByDelegators();
  this.handleButtonDelegator();
}}><strong>Total GRT Delegated von Delegators</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategorien-Menü</strong></button></a>
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
}}><strong>Curator Rolle</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleCuratorTools();
  this.handleButtonCurator();
}}><strong>Curator Werkzeug</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleCuratorsCount();
  this.handleButtonCurator();
}}><strong>Curator Zahlen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleTotalGRTSignalledByCurators();
  this.handleButtonCurator();
}}><strong>Total GRT Signalled von Curators</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategorien-Menü</strong></button></a>
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
}}><strong>Wählen Indexers</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleIndexerCompare();
  this.handleButtonIndexer();
}}><strong>Vergleichen Indexers</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleBecomeIndexer();
  this.handleButtonIndexer();
}}><strong>Werden Indexer</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleIndexerHardwareRequirements();
  this.handleButtonIndexer();
}}><strong>Indexer Hardware-Anforderungen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleIndexerMap();
  this.handleButtonIndexer();
}}><strong>Indexer Karte</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleIndexerOfficeHours();
  this.handleButtonIndexer();
}}><strong>Indexer Office Hours</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleIndexingRewardsAndQueryFees();
  this.handleButtonIndexer();
}}><strong>Indexer Belohnung</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleQueryFeesAndIndexingRewardCut();
  this.handleButtonIndexer();
}}><strong>Query Gebühr And Indexing Belohnungsschnitt</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleAllocations();
  this.handleButtonIndexer();
}}><strong>Allocations</strong></button><br class="no-show-monitor"></br>
<button className="chatbot-button" onClick={() => {
  this.handleActiveIndexerCount();
  this.handleButtonIndexer();
}}><strong>Active Indexer Zahlen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleTotalDelegatedGRTByIndexersCount();
  this.handleButtonIndexer();
}}><strong>Total Delegated GRT von Indexers Zahlen</strong></button>
<hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategorien-Menü</strong></button></a>
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
this.handleQueryPython = this.handleQueryPython.bind(this);
const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
  this.handleSubgraph();
  this.handleButtonSubgraph();
}}><strong>Subgraphen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleSubstreams();
  this.handleButtonSubgraph();
}}><strong>Substreams</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleSunsettingHostedService();
  this.handleButtonSubgraph();
}}><strong>Sunsetting Hosted Service</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
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
}}><strong>Anzahl der Subgraphen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleGitHub();
  this.handleButtonSubgraph();
}}><strong>GitHub</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategorien-Menü</strong></button></a>
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
}}><strong>Teilnehmer-Update</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleHoldersCount();
  this.handleButtonStatistics();
}}><strong>Holders Zahlen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleActiveDelegatorCount();
  this.handleButtonStatistics();
}}><strong>Active Delegator Zahlen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleActiveIndexerCount();
  this.handleButtonStatistics();
}}><strong>Active Indexer Zahlen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleCuratorsCount();
  this.handleButtonStatistics();
}}><strong>Curator Zahlen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleActiveDelegationCount();
  this.handleButtonStatistics();
}}><strong>Active Delegation Zahlen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleTotalQueryFeesCount();
  this.handleButtonStatistics();
}}><strong>Query Gebühr</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleSubgraphsCount();
  this.handleButtonStatistics();
}}><strong>Anzahl der Subgraphen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleTotalGRTDelegatedByDelegators();
  this.handleButtonStatistics();
}}><strong>Total GRT Delegated von Delegators</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleTotalDelegatedGRTByIndexersCount();
  this.handleButtonStatistics();
}}><strong>Total GRT Delegated von Indexers</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleTotalGRTSignalledByCurators();
  this.handleButtonStatistics();
}}><strong>Total GRT Signalled von Curators</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleTotalStakedGRTCount();
  this.handleButtonStatistics();
}}><strong>Total Staked GRT Zahlen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleTotalGRTBurnedCount();
  this.handleButtonStatistics();
}}><strong>Total GRT Burned Zahlen</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategorien-Menü</strong></button></a>
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
}}><strong>Graph Tag 2022</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleBirthday();
  this.handleButtonCommunity();
}}><strong>Graph Geburtstag</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleAdvocates();
  this.handleButtonCommunity();
}}><strong>Graph Advocates</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleGraphSocial();
  this.handleButtonCommunity();
}}><strong>Graph Sozial</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handlePodcast();
  this.handleButtonCommunity();
}}><strong>GRTiQ Podcast</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategorien-Menü</strong></button></a>
  ,
);
this.setState((prev) => ({
  ...prev,
  messages: [...prev.messages, message],
}));
}

handleButtonNews() {
this.handleButtonMenu = this.handleButtonMenu.bind(this);
const message = this.createChatbotMessage(<a>Wenn Sie mit den neuesten Nachrichten über The Graph und neuen Partnerschaftsankündigungen auf dem Laufenden bleiben und lesen möchten, was in der Community vor sich geht, dann können Ihnen die folgenden Links dabei helfen.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">The Graph Blog</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a><br></br><br></br>Folgen Sie The Graph auch auf <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">Twitter</a>.<hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategorien-Menü</strong></button></a>
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
}}><strong>Was ist das Netz?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleCourses();
  this.handleButtonLearnWeb3();
}}><strong>Vorlesung</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleLearnWeb3();
  this.handleButtonLearnWeb3();
}}><strong>Lernen Web3</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleWhatIsABlockchain();
  this.handleButtonLearnWeb3();
}}><strong>Blockchain</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleSafe();
  this.handleButtonLearnWeb3();
}}><strong>Ist es sicher?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleWeb3DApp();
  this.handleButtonLearnWeb3();
}}><strong>Web3 DApp</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleCryptocurrencies();
  this.handleButtonLearnWeb3();
}}><strong>Kryptowährungen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleEthereum();
  this.handleButtonLearnWeb3();
}}><strong>Ethereum</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleGas();
  this.handleButtonLearnWeb3();
}}><strong>Gas</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleEthereum();
  this.handleButtonLearnWeb3();
}}><strong>Münze oder Wertmarke</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleMining();
  this.handleButtonLearnWeb3();
}}><strong>Bergbau ( Nodes )</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
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
}}><strong>Layer Zwei</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleTokenEconomics();
  this.handleButtonLearnWeb3();
}}><strong>Token Ökonomie</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
  this.handleTokenBurn();
  this.handleButtonLearnWeb3();
}}><strong>Token Verbrennen</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
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
}}><strong>Frauen im Web3</strong></button>
<hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Kategorien-Menü</strong></button></a>
  ,
);
this.setState((prev) => ({
  ...prev,
  messages: [...prev.messages, message],
}));
}
// help finish

noAnswer() {
  {/* help start */}
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
{/* help end */}
  const message = this.createChatbotMessage(<a>Entschuldigung, ich konnte die Antwort nicht finden. Kannst du es nochmal versuchen oder die Frage anders formulieren? Wenn ich Ihnen immer noch nicht helfen kann, nehmen Sie sich bitte 2 Minuten Zeit, um das Feedback-Formular unten auszufüllen. Mit Ihrer Hilfe wird dies mein Wissen verbessern und es mir ermöglichen, anderen Mitgliedern der GRT-Community in Zukunft zu helfen, die möglicherweise auch die gleichen Fragen haben und nach Antworten suchen. Vielen Dank!
  
  {/* help start */}
  <br></br><br></br>Sie können auch die Schaltflächen unten verwenden und nach unten scrollen, um eine Antwort zu finden!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegator</strong></button><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Curator</strong></button><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Indexer</strong></button><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Core Devs</strong></button><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgraphen</strong></button><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Live-Statistiken</strong></button><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Community </strong></button><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Nachrichten</strong></button><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Lernen Sie web3</strong></button>
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

export default GERActionProvider;