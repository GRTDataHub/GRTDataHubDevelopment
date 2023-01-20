import React from 'react';
import '../../App.css';
import { ChatBotActiveDelegatorCountBar ,  ChatBotHoldersCountBar, ChatBotActiveDelegationCountBar, ChatBotSubgraphsCountBar, ChatBotCuratorsCountBar, ChatBotActiveIndexerCountBar, ChatBotTotalGRTDelegatedByDelegatorsBar, ChatBotTotalQueryFeesCountBar, ChatBotTotalGRTSignalledByCuratorsBar, ChatBotTotalStakedGRTCountBar, ChatBotTotalDelegatedGRTByIndexersCountBar, ChatBotTotalGRTBurnedCountBar } from "../mainBarCharts/BarChartsData";
import Embed from 'react-embed';

class FRAActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
// Charts / Graphs Start
handleActiveDelegatorCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Le nombre de délégateurs actifs est de <ChatBotActiveDelegatorCountBar />.</h4>
  <a className="cla" href="https://grtdatahub.com/ActiveDelegatorCount" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir le nombre de délégateurs actifs en plein écran.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveDelegationCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Le nombre de délégations actives est de <ChatBotActiveDelegationCountBar />.</h4>
  <a className="cla" href="https://grtdatahub.com/ActiveDelegationCount" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir le nombre de délégations actives en plein écran.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleHoldersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Le nombre de détenteurs est de <ChatBotHoldersCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/HoldersCount" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir le nombre de détenteurs en plein écran.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleSubgraphsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Le nombre de subgraphes est <ChatBotSubgraphsCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/SubgraphsCount" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir le nombre de subgraphes en plein écran.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleCuratorsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Le nombre de curateurs est de <ChatBotCuratorsCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/CuratorsCount" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir le nombre de curateurs en plein écran.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveIndexerCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Le nombre d’indexeurs actifs est de <ChatBotActiveIndexerCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/ActiveIndexerCount" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir le nombre d’indexeurs actifs en plein écran.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTDelegatedByDelegators() {
  const message = this.createChatbotMessage(<a> 
  <h4>Le montant total de la GRT déléguée par les délégateurs est de <ChatBotTotalGRTDelegatedByDelegatorsBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalGRTDelegatedByDelegators" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir le montant total de GRT délegateurpar les délégateurs en plein écran.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalQueryFeesCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Le décompte total de frais de requête est de <ChatBotTotalQueryFeesCountBar/> GRT.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalQueryFeesCount" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir le décompte total de frais de requête en plein écran.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTSignalledByCurators() {
  const message = this.createChatbotMessage(<a> 
  <h4>La quantité totale de GRT signalée par les curateurs est de <ChatBotTotalGRTSignalledByCuratorsBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalGRTSignalledByCurators" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir la quantité totale de GRT signalée par les curateurs en plein écran.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalStakedGRTCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Le montant total de GRT engagé est de <ChatBotTotalStakedGRTCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalStakedGRTCount" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir le montant total de GRT engagé en plein écran.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalDelegatedGRTByIndexersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>Le montant total de GRT déléguée par les indexeurs est de <ChatBotTotalDelegatedGRTByIndexersCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalDelegatedGRTByIndexersCount" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir le montant total de GRT délegateurpar les indexeurs en plein écran.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTotalGRTBurnedCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>La quantité totale de GRT brûlée est de <ChatBotTotalGRTBurnedCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalGRTBurnedCount" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir la quantité totale de GRT brûlée en plein écran.</a>
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
  const message = this.createChatbotMessage(<a>Il peut être difficile de choisir un indexeur à qui déléguer. Les informations et ressources suivantes vous aideront dans votre recherche. Ce n’est pas parce qu’un indexeur a le meilleur APY qu’il est nécessairement le meilleur pour vous. Faites vos propres recherches, prenez votre temps et apprenez ce qu’il faut rechercher lors du choix d’un indexeur à qui déléguer. Cela vous assurera d’être confiant avant de déléguer.<hr></hr>La lecture du guide Graphtronauts sur <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-chose-an-indexer-for-delegation-in-graph-protocol-a59725c16062" target="_blank">Le choix d'un indexeur pour la délégation dans The Graph Protocol</a> et le visionnement du tutoriel sur <a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">Le mode de sélection des indexeurs</a> vous  aidera à comprendre ce que vous devez rechercher.<br></br><br></br>L’application <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> permet aux délégateurs d’obtenir des informations utiles sur l’indexeur de leur choix. Insérez simplement l’adresse ETH de l’indexeur de votre choix ou jetez un coup d’œil aux avis. Vous pouvez également comparer les indexeurs dans l’application.<br></br><br></br>Une fois que vous êtes prêt à déléguer, veuillez <a className="cla" onClick={this.handleDelegateGuides}><strong>cliquer sur moi</strong></a> et je vous fournirai des tutoriels sous forme de texte et de vidéo.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Choosing Indexers End
handleJob() {
  const message = this.createChatbotMessage(<a>Envie de travailler dans le web3? Bonne nouvelle, l’écosystème The Graph recrute! Il existe des opportunités au sein de la fomdation The Graph et des principales équipes de développement. Jetez un coup d’œil <a className="cla" href="https://thegraph.com/jobs/#open-positions" target="_blank" rel="noreferrer">ici</a> pour les postes vacants actuels.</a>
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
   Le réseau de The Graph se compose de trois rôles qui fournissent des services à l’écosystème et fournissent des données aux applications Web3 telles que Uniswap, Aave  et Synthetix : indexeurs, curateurs et délégateurs. Vous trouverez ci-dessous une documentation détaillée pour chacun des rôles.<br></br><a className="cla" onClick={this.handleBecomeIndexer}><strong>Indexeurs</strong></a><br></br><a className="cla" onClick={this.handleCurator}><strong>Curateurs</strong></a><br></br><a className="cla" onClick={this.handleDelegateGuides}><strong>Délégateur</strong></a><br></br><br></br>Pour assurer la sécurité économique du réseau de The Graph et l’intégrité des données interrogées, les participants misent et utilisent des jetons natif du réseau (GRT). Le GRT est un jeton de travail qui est un ERC-20 sur la blockchain Ethereum, utilisé pour allouer des ressources dans le réseau. Les indexeurs, les curateurs et les délégateurs actifs peuvent fournir des services et gagner un revenu sur le réseau, proportionnel à la quantité de travail qu’ils effectuent et à leur participation en GRT.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleEdgeAndNode() {
  const message = this.createChatbotMessage(<a>
    L’idée derrière réseau The Graph a été conçue et façonnée par Graph Protocol Inc. Après avoir lancé le réseau principal de  The Graph Network le 17 décembre 2020, Graph Protocol, Inc. a décidé de changer son nom en Edge & Node. L’intention derrière le changement de nom était de souligner la décentralisation en cours dans le réseau. En tant que tel, Edge & Node n’est plus l’équipe principale qui développe et promeut le protocole. Au lieu de cela, Edge & Node fournira des services à l’écosystème et sera impliqué dans le protocole.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTheGraphFoundation() {
  const message = this.createChatbotMessage(<a>
    La création de The Graph Foundation a été <a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank" rel="noreferrer">annoncée</a> en octobre 2020. <a className="cla" href="https://ca.linkedin.com/in/evabeylin?original_referer=https%3A%2F%2Fdocs.thegraph.academy%2Fthe-graph-ecosystem%2Forganizational-structure%2Fthe-graph-foundation" target="_blank" rel="noreferrer">Eva Beylin</a> est directrice de The Graph Foundation. Responsable de la gestion du protocole, la Fondation Graph assurera la coordination et le soutien à l'écosystème. La création de la fondation faisait partie de la stratégie visant à créer une structure organisationnelle indépendante et décentralisée.<hr></hr>Membres du Conseil:<br></br>Indexeurs<br></br>Jim Cousins & Gary Morris<br></br>Utilisateurs<br></br>Justin J Moses & Kayvon Tehranian<br></br>Des chercheurs<br></br>Santiago Palladino & Yondon Fu<br></br>Bailleurs de fonds<br></br>Michael Anderson & Spencer Noon<br></br>Équipe initiale<br></br>Brandon Ramirez & Yaniv Tal</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTheGraphCouncil() {
  const message = this.createChatbotMessage(<a>
    The Graph Council a été <a className="cla" href="https://thegraph.com/blog/introducing-the-graph-council" target="_blank" rel="noreferrer">introduit</a>en octobre 2020 dans le cadre des plans de décentralisation du protocole. Les <a className="cla" href="https://thegraph.com/blog/inaugurating-council-and-grants" target="_blank" rel="noreferrer">membres du Graph Council</a> ont été investis en décembre 2020. The Graph Council régit le réseau de décentralisé The Graph. Un multisig 6 sur 10  équilibre les intérêts de cinq groupes de parties prenantes différents dans l’écosystème: les indexeurs, les détenteurs de jetons, l’équipe initiale, les utilisateurs et les experts techniques du domaine.<br></br><br></br>Le mandat du Graph Council comprend les fonctions de base suivantes :<br></br>Les opérations de la Fondation Graph<br></br>Subventions et financement de l’écosystème<br></br>Mises à niveau du protocole<br></br>Paramétrage du protocole<br></br>Protocole d’urgence<br></br><br></br>À l’avenir, il est prévu de décentraliser davantage la gouvernance de The Graph, par exemple en remplaçant les membres individuels par des multisigs imbriqués ou des DAO.
</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Networok Roles End

handleBecomeIndexer() {
  const message = this.createChatbotMessage(<a><strong>Comment devenir un indexeur efficace sur The Graph Network</strong><hr></hr>Configuration minimale requise pour les indexeurs - Quatre exigences principales sont nécessaires pour être un indexeur efficace sur The Graph Network.<br></br><br></br><strong>Mise</strong> - Vous devez miser au moins 100 000 GRT pour être un indexeur.<br></br><br></br><strong>Compétences</strong> - Idéalement, les indexeurs devraient avoir une formation en DevOps ou de l’expérience dans l’exploitation de node blockchain. Les indexeurs doivent être à l’aise avec le déploiement de serveurs cloud ou hébergés, ou l’exécution de leur propre matériel serveur. La familiarité avec l’exécution d’un nœud de validation et le travail sous Linux est également suggérée.<br></br><br></br><strong>Matériel</strong> - Afin d’équilibrer l’efficacité, la sortie des requêtes et la vitesse, de nombreux indexeurs commencent souvent par une configuration de 16 processeurs, un disque de 1 To et 32 Go de RAM.<br></br><br></br><strong>Logiciel d’infrastructure</strong> - La familiarité avec les technologies de conteneur et de mise à l’échelle telles que Docker et Kubernetes est un avantage, mais il est également possible de déployer le logiciel The Graph sur du bare metal. Les logiciels d’infrastructure requis incluent une base de données PostgreSQL, un Graph Node, un agent d’indexation, un service d’indexeur, un serveur métriques Prometheus et potentiellement plus encore en fonction de vos besoins spécifiques et de votre configuration.<br></br><br></br>Pour en savoir plus sur les meilleures pratiques pour les indexeurs sur The Graph Network, la participation idéale de la communauté des indexeurs, la configuration technique recommandée pour les indexeurs, les ressources et les guides et pour commencer votre <strong>parcours d’indexation</strong> avec The Graph.<br></br><br></br>Ce <a className="cla" href="https://thegraph.com/blog/how-to-become-indexer/" target="_blank" rel="noreferrer">guide</a> vous aide à apprendre les exigences opérationnelles, les meilleures pratiques et les tactiques de communication pour devenir l’un des meilleurs indexeurs sur le réseau.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

// Rewards Start 
handleRewards() {
  const message = this.createChatbotMessage(<a>Les récompenses d’indexation sont collectées et distribuées chaque fois que les indexeurs clôturent leurs affectations. Lorsqu’elles sont actives, les affectations continuent d’accumuler des récompenses en permanence. Les indexeurs peuvent soit forcer la fermeture manuelle de leurs allocations, soit les laisser fermer automatiquement après la durée maximale d’allocation (toutes les 28 epoch).<br></br><br></br>28 epoch = ~26 journées<br></br><br></br>Les affectations accumulent continuellement des récompenses pendant qu’elles sont actives. Les primes sont collectées par les indexeurs et distribuées chaque fois que leurs allocations sont fermées. Cela se produit manuellement, chaque fois que l’indexeur veut forcer la fermeture, ou automatiquement toutes les 28 epoch au maximum - durée de vie maximale de l’allocation (à l’heure actuelle, 28 epoch dure ~26 journées).<hr></hr>Pour voir vos récompenses en attente, visitez <a className="cla" href="https://www.graphtronauts.com/#/profile" target="_blank" rel="noreferrer">Graphtronauts</a> et ajoutez un portefeuille.</a>
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
  const message = this.createChatbotMessage(<a>Chaque fois qu’un mappage est fermé (manuellement par un indexeur ou automatiquement après la durée de vie maximale du mappage), des frais de requête sont facturés par la passerelle de protocole. Les frais de requête sont accumulés dans le pool de remboursement des frais de requête du subgraphe. Le montant distribué des frais de requête du pool de remboursement est calculé en fonction des contributions de l’indexeur au pool de remboursement et de sa part allouée dans le subgraphe.<br></br><br></br>Une fois qu’une affectation a été clôturée, les indexeurs ne peuvent réclamer les frais de requête qu’une fois la période de litige écoulée. Une fois qu’un indexeur a réussi à réclamer des frais de requête, des remboursements sont distribués à l’indexeur et à ses délégateurs.<br></br><br></br>À la suite de la <a className="cla" href="https://en.wikipedia.org/wiki/Cobb%E2%80%93Douglas_production_function" target="_blank" rel="noreferrer">fonction de production Cobb-Douglas</a>, un pool de rachat est créé qui récompense tous les participants au réseau (tels que les indexeurs) en fonction de leurs contributions à The Graph Network. L’intention derrière le pool de remises est d’encourager les indexeurs à miser GRT dans une proportion approximative du montant des frais de requête qu’ils gagnent pour le réseau. Le fonds de remboursement reçoit une partie fixe des frais de consultation qui y sont versés.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOI() {
  const message = this.createChatbotMessage(<a>La preuve d’indexation (POI) vérifie que les indexeurs ont effectivement indexé les subgraphes dans lesquels ils ont attribué leur part. Le POI d’un bloc est un résumé de toutes les transactions du magasin d’entités détaillant l’implémentation dans un subgraphe. Pour recevoir des récompenses d’indexation, les indexeurs doivent clôturer une affectation avec une preuve d’indexation (POI) valide qui répond aux normes établies par la loi sur l’arbitrage. Les indexeurs ne sont pas admissibles à des récompenses sans point d’intérêt valide. Lors de la clôture d’une allocation, l’indexeur doit envoyer un POI pour le premier bloc de l’epoch actuelle.<br></br><br></br>Les récompenses d’indexation sont collectées et distribuées chaque fois que les indexeurs clôturent leurs affectations. Lorsqu’elles sont actives, les affectations continuent d’accumuler des récompenses en permanence. Les indexeurs peuvent soit forcer la fermeture manuelle de leurs allocations, soit les laisser fermer automatiquement après la durée maximale d’allocation (toutes les 28 epoch).<br></br><br></br>28 epoch = ~26 journées</a>
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
  const message = this.createChatbotMessage(<a>La configuration matérielle requise pour participer au réseau en tant qu’indexeur se trouve dans le tableau suivant.<hr></hr><table><tr className="indexer-table-header">
    <th>Settings</th>
    <th>Postgres (CPUs)</th>
    <th>Postgres (mémoire en Go) </th>
    <th>Postgres (disque en To) Machines virtuelles (CPU) </th>
    <th>VMs  (CPUs) </th>
    <th>VMs (mémoire en Go) </th>
  </tr>
  <tr className="indexer-table">
    <td>Small</td>
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
    <td>Moyen</td>
    <td>16</td>
    <td>64</td>
    <td>2</td>
    <td>32</td>
    <td>64</td>
  </tr>
  <tr className="indexer-table">
    <td>Longueur</td>
    <td>72</td>
    <td>468</td>
    <td>3.5</td>
    <td>48</td>
    <td>184</td>
  </tr>
</table>
<br></br><br></br>Petit = suffisant pour commencer à indexer plusieurs subgraphes<br></br>Standard = paramètre par défaut<br></br>Moyen = Nécessaire pour indexer 100 subgraphes et faire entre 200 et 500 requêtes par seconde<br></br>Large = Requis pour indexer tous les subgraphes actuellement utilisés et traiter les demandes de trafic connexe
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
  const message = this.createChatbotMessage(<a>Les affectations accumulent continuellement des récompenses lorsqu’elles sont actives. Les récompenses sont collectées par les indexeurs et distribuées chaque fois que leurs affectations sont clôturées. Cela se produit manuellement, chaque fois que l’indexeur veut forcer l’arrêt, ou automatiquement toutes les 28 epoch au maximum: durée de vie maximale de l’allocation.</a>
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
  const message = this.createChatbotMessage(<a>La documentation pour les indexeurs sur la façon d’obtenir le hachage ipfs du subgraphe à partir de l'identifiant et vice versa peut être trouvée <a className="cla" href="https://docs.thegraph.academy/network/indexers/technical-documentation/get-ipfs-hash-from-deployment-id" target="_blank" rel="noreferrer">ici</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// IPFS End
handleTools() {
  const message = this.createChatbotMessage(<a>L’application <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> permet aux délégateurs d’obtenir des informations utiles sur l’indexeur de leur choix. Insérez simplement l’adresse ETH de l’indexeur de votre choix ou jetez un coup d’œil aux avis ci-dessous.<br></br><br></br>D’autres sites très utiles sont:<br></br><br></br><a className="cla" href="http://ww25.oracleminer.com/graph/indexer/0x7ab4cf25330ed7277ac7ab59380b68eea68abb0e?subid1=20220530-2214-27fd-afb4-5d675e9469e5s" target="_blank" rel="noreferrer">OracleMiner.com</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://graphscan.io/" target="_blank" rel="noreferrer">GraphScan.io</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://thegraph.live/" target="_blank" rel="noreferrer">TheGraph.Live</a><br></br><br></br><a className="cla" href="https://www.notion.so/Community-Guides-abbb10f4dba040d5ba81648ca093e70c" target="_blank" rel="noreferrer">Outils et guides communautaires</a></a>
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
  const message = this.createChatbotMessage(<a>Chaque fois que vous déléguez GRT à un indexeur, vous devez envisager des frais de délégation <strong>de 0,5%</strong>. Par exemple, si vous déléguez 10 000 GRT, 50 GRT vous seront facturés. Si l’indexeur que vous avez choisi vous offre un potentiel de profit de 2 GRT par jour. Dans cette hypothèse, il vous faudrait 25 jours (50 GRT/2 GRT) pour atteindre le seuil de rentabilité. Pour prendre des décisions éclairées sur le plan économique, vous devez calculer combien de temps il vous faudra pour récupérer la taxe de 0,5 % auprès de votre délégation.<br></br><br></br>La délégation d’un indexeur vous obligera à signer deux transactions ETH. Supposons également que vous ne souhaitiez déléguer que 100 $. Dans ce cas, les coûts de transaction de la délégation totaliseraient 25% de votre pile TSO. Cela signifie que le temps jusqu’au seuil de rentabilité augmenterait considérablement.<br></br>Si les délégateurs souhaitent déléguer, ils ne peuvent pas accéder immédiatement à leurs jetons. Les jetons non délégateursont soumis à une période de dégel de 26 jours, ce n’est qu’alors que les délégateurs peuvent librement transférer leurs jetons ou les redéléguer à un autre indexeur.<br></br><br></br>Choisir un indexeur respectable, fiable et efficace est une décision importante qui ne doit pas être prise à la légère. Les délégateurs qui ne font pas preuve de diligence raisonnable courent le risque de déléguer à un indexeur peu performant. De même, ils peuvent courir le risque de choisir un indexeur qui se livre à des pratiques douteuses ou subventionne les délégateurpendant une courte période pour annoncer un APY (Annual Percent Return) attrayant qui est irréaliste à long terme.<br></br><br></br>Vous pouvez trouver de la documentation sur les risques d’être un délégateur <a className="cla" href="https://thegraph.academy/delegators/risks/" target="_blank">ici</a>.<br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank" rel="noreferrer">Comment réduire le coût du gaz pour déléguer vos jetons GRT</a><br></br><br></br>Pour connaître le coût moyen d’une transaction de délégation dès maintenant, visitez l’application <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> et sélectionnez Frais.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Delegate Guides Start
handleDelegateGuides() {
  const message = this.createChatbotMessage(<a>Je vous fournirai ce dont vous avez besoin pour devenir délégateur. Les informations et ressources suivantes vous aideront.<hr></hr>Regarder le didacticiel <a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">Selection des indexeurs</a> vous aidera à comprendre ce que vous devez rechercher. Pour vous assurer que vous êtes confiant avant de déléguer, regardez les tutoriels ci-dessous pour mieux comprendre.<br></br><br></br>Vous pouvez miser vos jetons GRT  sur <a className="cla" href="https://thegraph.com/explorer/participants/indexers" target="_blank">network.thegraph.com</a> network.thegraph.com en les déléguant à un indexeur de votre choix.<br></br>Il y a une taxe de délégation de 0,5% qui est encourue au moment de la délégation pour inciter les délégateurs à s’engager avec un bon indexeur.<br></br><br></br>Vous pouvez trouver des guides sur la façon de déléguer ou de miser vos GRT <a className="cla" href="https://docs.thegraph.academy/network/delegators/general-documentation-1/choosing-indexers/guides" target="_blank">ici</a>.<br></br><br></br>La retrait de la délégation prend 26 jours parce que c’est la durée maximale d’une allocation.<br></br><br></br>Les  Graphtronauts  ont également fait leurs propres guides :<br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-stake-your-tokens-with-the-graph-the-complete-guide-to-become-a-delegator-3f723e6420b1" target="_blank">Le guide complet pour devenir un délégateur</a><br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s" target="_blank">Coinbase Wallet Staking</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/binance-staking-vs-delegating-with-the-graph-network-b4ba7e259b73" target="_blank">Binance Staking vs Déléguer avec le réseau The Graph</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/faq-for-the-graph-delegators-2b4a03a830f2" target="_blank">FAQ pour The Graph Delegators</a><br></br><br></br><a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank">Comment réduire le coût du gaz pour déléguer vos jetons GRT</a><br></br><br></br>Pour connaître le coût moyen d’une transaction de délégation, visitez <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank">Graphtronauts</a> et sélectionnez Frais.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleQueryPython() {
  const message = this.createChatbotMessage(<a><strong>Comment interroger le protocole The Graph pour les données de string à l’aide de Python.</strong><br></br><br></br><a className="cla" href="https://hashnode.com/@townee" target="_blank">Tony Kipkemboi</a> a rédigé un guide remarquable expliquant, étape par étape, comment interroger des subgraphes à l'aide de <strong>Python</strong>, GraphQL, et Subgrounds.<br></br><br></br>Le blog complet peut être trouvé <a className="cla" href="https://townee.hashnode.dev/how-to-query-the-graph-protocol-for-on-chain-data-using-python" target="_blank">ici</a>.<br></br><br></br>Vous pouvez suivre <a className="cla" href="https://twitter.com/ynot_kip" target="_blank">Tony</a> sur Twitter pour rester à jour lorsque son deuxième blog sera disponible à la communauté, "Comment puis-je utiliser les subfloor lorsque le service hébergé est annulé?"</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWeb3DApp() {
  const message = this.createChatbotMessage(<a>HComment  fonctionne Web3 dApps?<br></br><br></br>Vous pouvez trouver "Un guide complet de l’architecture Web3" <a className="cla" href="https://twitter.com/suhailkakar/status/1555894207570513920?s=21&t=FoLxHgWLO78VA_3VheV_DQ" target="_blank">ici</a> dans un fil Twitter extrêmement utile.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSoulBound() {
  const message = this.createChatbotMessage(<a>Construire des dApps ne devrait pas être pénible.<br></br><strong><a className="cla" href="https://soulbound.xyz/" target="_blank">Soulbound Studio</a></strong> vous facilite la tâche.<br></br>Aucun codage n’est requis.<br></br><br></br>Une interface unifiée pour concevoir, itérer et publier des interfaces Web3 et des API entièrement décentralisées.<br></br><br></br>Si vous voulez les aider à concevoir Soulbound Studio en partageant les fonctionnalités souhaitées et les rapports de bogues, rejoignez leur <a className="cla" href="https://discord.com/invite/Eu3Eeh4J6a" target="_blank">Discord</a>.<br></br><br></br>Pour suivre leurs dernières sorties et actualités, suivez Soulbound Labs sur <a className="cla" href="https://twitter.com/SoulboundLabs" target="_blank">Twitter</a>.<br></br><br></br>Pour un didacticiel vidéo sur la façon dont vous pouvez créer des subgraphes dApps et Analytics en quelques minutes à l’aide de Soulbound Studio sans aucun codage, regardez ci-dessous<br></br><br></br>
  <Embed className="embed" isDark url='https://www.youtube.com/watch?v=IEmr280lGSU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIPhone() {
  const message = this.createChatbotMessage(<a>Ne gardez pas beaucoup d’argent et de singes ennuyeux sur votre téléphone dans un hot wallet! Parce que votre iPhone synchronise probablement vos informations MetaMask avec iCloud. Il est activé par défaut, voici un fil <a className="cla" href="https://twitter.com/plumferno/status/1556187973200351234?s=21&t=a-4X_QM7BzHRKcJe8aPc_w" target="_blank">Twitter</a> extrêmement pratique sur la façon de le désactiver.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Query Fees Cut and indexing reward cut Start
handleQueryFeesAndIndexingRewardCut() {
  const message = this.createChatbotMessage(<a>Les valeurs queryFeeCut  et indexingRewardCut sont des paramètres de délégation que l’indexeur peut définir avec cooldownBlocks pour contrôler la distribution des GRT entre  l’indexeur  et ses délégateurs. Consultez les dernières étapes de Stakingde protocole pour obtenir des instructions sur la configuration des paramètres de délégation.<br></br><br></br>queryFeeCut : % des remboursements de frais de requête accumulés dans un subgraphe à distribuer à l’indexeur. S’il est défini sur 95 %, l’indexeur recevra 95 % du groupe de remboursement des frais de requête lorsqu’une affectation est réclamée et les 5 % restants iront aux délégués.<br></br><br></br>indexingRewardCut : % des récompenses d’indexation accumulées dans un subgraphe qui sera distribué à l’indexeur. S’il est défini sur 95 %, l’indexeur recevra 95 % du pool de récompenses d’indexation lorsqu’une affectation sera clôturée, et les délégateur se partageront les 5 % restants.</a>
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
  const message = this.createChatbotMessage(<a>The Graph Protocol, Inc. a été fondée en avril 2018 par Jannis Pohlmann, Brandon Ramires et Yaniv Tal<br></br><br></br><strong>Jannis Pohlmann</strong>, leader technologique et co-fondateur. <a className="cla" href="https://de.linkedin.com/in/jannispohlmann" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/jannispohlmann" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br><strong>Brandon Ramirez</strong>, Chargé de recherche et co-fondateur. <a className="cla" href="https://www.linkedin.com/in/1stramirez" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/rezbrandon?lang=en" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br><strong>Yaniv Tal</strong>, chef de projet et co-fondateur. <a className="cla" href="https://www.linkedin.com/in/yanivtal9" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla"  href="https://twitter.com/yanivgraph" target="_blank" rel="noreferrer">Twitter</a></a>
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
  const message = this.createChatbotMessage(<a>Selon <a className="cla" href="https://www.crunchbase.com/organization/the-graph/investor_financials" target="_blank" rel="noreferrer">Crunchbase.com</a>, The Graph a recueilli un total de 69,6 millions de dollars en financement sur 7 cycles. Son dernier financement a été levé le 21 janvier 2022 à partir d’une ronde de financement Venture - Series Unknown.<br></br><br></br>The Graph est financé par 27 investisseurs. Blockwall Management et FinTech Collective sont les nouveaux investisseurs.<br></br><br></br>The Graph a levé un total de 205 millions de dollars dans un seul fonds de capital-risque, The Graph Ecosystem Fund. Ce fonds a été annoncé le 18 février 2022 et a permis de recueillir un total de 205 millions de dollars.</a>
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
  const message = this.createChatbotMessage(<a>The Graph $GRT est un protocole d’indexation permettant d’interroger des réseaux tels que Ethereum et IPFS. N’importe qui peut créer et publier des API ouvertes, appelées subgraphes, rendant les données facilement accessibles. En bref, The Graph fournit des données qui peuvent être transformées, organisées et partagées entre les applications pour que quiconque puisse les interroger en quelques frappes.<br></br><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/" target="_blank" rel="noreferrer">Comment The Graph est gouverné</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-council" target="_blank" rel="noreferrer">Le Conseil The Graph</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-foundation" target="_blank" rel="noreferrer">The Graph Fondation</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#advocates-dao" target="_blank" rel="noreferrer">Graph Advocates­DAO</a><br></br><br></br>Vous pouvez lire 'L’histoire de The Graphe (2017-2020)' faite par les graphtronautes, <a className="cla" href="https://blog.graphtronauts.com/the-graph-history-2017-2020-75cc40132992" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Vous pouvez lire "Qu’est-ce que The Graphe et pourquoi est-ce la prochaine grande innovation dans l’industrie de la technologie" fait par les Graphtronauts, <a className="cla" href="https://blog.graphtronauts.com/what-is-the-graph-and-why-is-the-next-big-thing-in-the-technology-industry-25051fae4256" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Pour une explication vidéo de ce qu’est le "google des blockchains", voir <a className="cla" href="https://youtu.be/7gC7xJ_98r8" target="_blank" rel="noreferrer">ici</a>.</a>
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
  const message = this.createChatbotMessage(<a>En ce qui concerne les Airdrops, The Graph est l’un des rares projets qui a réellement fait travailler les gens pour leurs jetons. Le programme des curateurs était très intensif et les gens ont passé beaucoup de temps à apprendre sur les subgraphes, à organiser les données et à contribuer au réseau. Cela place l’équipe dans une position incroyable pour avoir une communauté de constructeurs bien formés et motivés dédiés à la croissance de Web3 chez The Graph. Pour le moment, aucun airdrop n’est prévu.</a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://twitter.com/CoinMarketCap/status/1341310792461918210" target="_blank" rel="noreferrer">CoinMarketCap Earn</a> et <a className="cla" href="https://twitter.com/coinbase/status/1339723594566406156?s=20" target="_blank" rel="noreferrer">Coinbase Earn</a> offrent des jetons GRT gratuits aux participants qui en apprennent davantage sur le réseau et répondent aux questions.<hr></hr>Psst! La meilleure façon de gagner du GRT gratuitement est de déléguer et de gagner des récompenses.</a>
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
  const message = this.createChatbotMessage(<a>Vous pouvez trouver l’adresse de The Graph Github ici : <a className="cla" href="https://github.com/graphprotocol/" target="_blank" rel="noreferrer">github.com/graphprotocol/</a></a>
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
  const message = this.createChatbotMessage(<a>La feuille de route R&D officielle The Graph est disponible <a className="cla" href="https://thegraph.com/blog/roadmap-2022" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br><strong>La feuille de route Graph pour 2023</strong> écrite par The Graphtronauts peut être trouvée <a className="cla" href="https://medium.com/@OG-Graphtronauts/the-graph-roadmap-for-2023-952b17d20d71" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Dans cet article, vous apprendrez quatre domaines de développement qui verront le jour en 2023 et rendront le réseau The Graph encore plus fort qu’il ne l’est aujourd’hui:<br></br>Le crépuscule du service hébergé<br></br>Firehose<br></br>Substreams<br></br>Déplacer le protocole vers un L2 avec Arbitrum One</a>
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
  const message = this.createChatbotMessage(<a>The Graphe utilise GraphQL, un langage de requête open-source développé par Facebook. Chaque élément du schéma a une description. Apprenez GraphQL et vous pourrez récupérer toutes les données que vous souhaitez à partir de la blockchain.<hr></hr>GraphQL est un langage de requête et d’exécution côté serveur pour les interfaces de programmation d’applications (API) qui donne la priorité à donner aux clients exactement les données qu’ils demandent et rien de plus.  GraphQL est conçu pour rendre les API rapides, flexibles et faciles à utiliser pour les développeurs. L’API GraphQL est l’API que les développeurs peuvent utiliser pour accéder aux données indexées par The Graph.</a>
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
  const message = this.createChatbotMessage(<a>Vous pouvez voir le prix et tous les marchés ouverts sur <a className="cla" href="https://coinmarketcap.com/currencies/the-graph/markets/" target="_blank" rel="noreferrer">CoinMarketCap</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDecentralisedData() {
  const message = this.createChatbotMessage(<a><strong>L’aube des données décentralisées</strong><br></br><br></br>L’écosystème Graph prend des mesures pour répondre aux attentes des utilisateurs tout en accueillant l’avenir dynamique et décentralisé. Pour atteindre cet équilibre, l’interruption du support du service d’hébergement est divisée en trois phases de transition de la chaîne qui dépendent de divers critères de sortie, y compris, mais sans s’y limiter, la convivialité, la stabilité et les fonctionnalités de base.<br></br><br></br>Les chaînes de services hébergées effectueront une transition progressive, ce qui laissera aux développeurs suffisamment de temps pour se familiariser avec le réseau décentralisé et migrer leurs subgraphes.<br></br><br></br>Pour mieux soutenir les développeurs, aucune date spécifique à la phase ne sera attribuée dans les chaînes de transition du service hébergé du réseau The Graph. La prise en charge des besoins des développeurs et l’atteinte des critères de sortie clés remplacent la fin du support des services hébergés. Au fur et à mesure que les critères de sortie par chaîne de services hébergés sont atteints, cette chaîne sera transférée en trois phases. Observez la progression du programme MIP pour comprendre quand les indexeurs testent les chaînes, quand elles sont prises en charge sur le réseau et quand les migrations de chaînes ont commencé.<br></br><br></br>Pour chaque chaîne de services hébergée, les trois phases de transition pour activer le support sur The Graph Network sont les suivantes :<br></br>Phase 1 (The Sunray): Désactiver la création de subgraphes de nouveaux services hébergés pour les blockchains qui ont suffisamment de fonctionnalités de base sur le réseau.<br></br>Phase 2 (The Sunbeam) : désactivez les mises à jour des subgraphes pour les services hébergés.<br></br>Phase 3 (The Sunrise) : Désactiver l’interrogation des subgraphes des services hébergés.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleVsSelfHosting() {
  const message = this.createChatbotMessage(<a><strong>Réseau The Graph vs auto-hébergement</strong><br></br><br></br><underline>Alerte spoiler:</underline> The Graph Network est moins coûteux, plus facile à utiliser et produit des résultats supérieurs à l’exécution locale d’un nœud graphique.<br></br><br></br>Le réseau décentralisé de The Graph a été conçu et affiné pour créer une expérience d’indexation et d’interrogation robuste, et s’améliore chaque jour grâce à des milliers de contributeurs à travers le monde. Les avantages de ce protocole décentralisé ne peuvent pas être répliqués en exécutant un nœud The Graph localement. Le réseau The Graph Network est plus fiable, plus efficace et moins coûteux. Voici une analyse :<br></br><br></br><strong>Pourquoi utiliser le réseau The Graph</strong><br></br> Coût mensuel inférieur de 60 à 98 %<br></br>Temps de fonctionnement supérieur<br></br>Accès aux indexeurs <ChatBotActiveIndexerCountBar/> (et comptage)<br></br>Assistance technique 24h/7 de la communauté mondiale<br></br><br></br>Pour lire une ventilation des avantages de l’utilisation du réseau, lisez <a className="cla" href="https://thegraph.com/docs/en/network/benefits/#breaking-down-the-benefits-of-using-the-graph-network" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br><strong>Pas de coûts d’installation et une efficacité opérationnelle accrue</strong>Zéro frais d’installation.<br></br>Commencez tout de suite sans frais généraux ou d’installation.<br></br>Aucune configuration matérielle requise.<br></br>Aucune interruption grâce à une infrastructure centralisée et plus de temps pour vous concentrer sur votre produit principal.<br></br>Aucun serveur de sauvegarde, dépannage ou ressources d’ingénierie coûteuses n’est nécessaire.<br></br><br></br><strong>Fiabilité et résilience</strong> Le réseau décentralisé de Graph permet aux utilisateurs d’accéder à une redondance géographique qui n’existe pas lors de l’hébergement d’un nœud de graphe. Les requêtes sont traitées de manière fiable avec un temps de disponibilité de plus de 99,9 % atteint par les indexeurs sécurisant le réseau mondial.</a>
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
   const message = this.createChatbotMessage(<a>Les subgraphes sont des structures de données permettant d’organiser les données que vous extrayez d’une blockchain. Ils sont un moyen de définir quelles données vous souhaitez indexer et comment les stocker. Certains d’entre eux font des pré-agrégations ou des calculs sur leurs affectations, d’autres stockent simplement des données simples similaires à ce que vous pourriez trouver dans la chaîne. Une entité interroge ensuite ces données. Cette entité peut être un dapp (entreprise/développeur, etc.), un bot Telegram, un bot Discord, ou même un simple utilisateur faisant une requête pour trouver des informations.<br></br><br></br>La consultation des subgraphes du service hébergé est actuellement gratuite pour tous. Pour le protocole décentralisé, l’équipe s’attend à ce que les coûts de requête soient d’environ 0,00001 USD par requête, mais il s’agit d’un marché libre et chaque indexeur peut définir ses propres modèles de coûts.<br></br><br></br>Vous pouvez trouver un pense-bête de développeur pour vous familiariser avec les subgraphes en 15 minutes <a className="cla" href="https://drive.google.com/file/d/1J2zm06wZV0EwMEGBD48fGbaFKPPcCdZT/view" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Un tutoriel pour créer un subgraphe avec Subgraph Studio peut être trouvé <a className="cla" href="https://www.youtube.com/watch?v=HfDgC2oNnwo" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Pour un aperçu et un guide étape par étape sur la création d’un subgraphe par <a className="cla" href="https://hashnode.com/@camiinthisthang" target="_blank" rel="noreferrer">Camila Ramos</a>, voir <a className="cla" href="https://camiinthisthang.hashnode.dev/the-complete-guide-to-getting-started-with-the-graph" target="_blank" rel="noreferrer">ici</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGas() {
  const message = this.createChatbotMessage(<a>Le gaz est le terme désignant la quantité d’éther (ETH), la crypto-monnaie native d’Ethereum, requise par le réseau pour qu’un utilisateur interagisse avec le réseau.<br></br><br></br>Les frais de transactions n’est pas quelque chose sur lequel l’équipe de Graph a le contrôle. Les frais augmente lorsque le réseau Ethereum est congestionné ou fortement utilisé.<br></br><br></br>Pour connaître le coût moyen d’une transaction de délégation dès maintenant, visitez l’application Graphtronauts <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">ici</a> et sélectionnez Frais..<br></br><br></br>Pour obtenir des conseils sur la façon de réduire le coût du carburant pour déléguer vos jetons GRT, voir <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Pour les tarifs de gaz Ethereum, voir <a className="cla" href="https://ethereumprice.org/gas/" target="_blank" rel="noreferrer">ici</a>.</a>
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
  const message = this.createChatbotMessage(<a>Pour voir une carte de tous les emplacements des indexeurs, visitez l'application <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> et sélectionnez Carte.</a>
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
  const message = this.createChatbotMessage(<a>Pour comparer les indexeurs, visitez l'application <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> et sélectionnez List.<br></br><br></br>Cliquez sur le bouton Comparer, puis sélectionnez jusqu'à cinq indexeurs que vous souhaitez comparer.<br></br><br></br>Une fois que vous avez sélectionné, cliquez sur le bouton Comparer ci-dessous.</a>
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
  const message = this.createChatbotMessage(<a><strong>Qu’est-ce que GRTiQ?</strong><br></br><br></br><a className="cla" href="https://www.grtiq.com/" target="_blank" rel="noreferrer">GRTiQ</a> génère des renseignements sur le marché par l’analyse, la recherche, l’optimisation et l’éducation.<br></br><br></br><strong>Analyse de marché</strong> - Fournir une analyse et une performance du marché afin que les délégateurs puissent mieux comprendre la dynamique du marché.<br></br><br></br><strong>Recherche indexée</strong> - Mener des recherches indexées que les délégateurs peuvent utiliser pour identifier les opportunités et les partenariats.<br></br><br></br><strong>Optimisation des récompenses</strong> - Créez et publiez des données, des guides et des analyses pour aider les délégateurs à optimiser leurs gains de récompenses.<br></br><br></br><strong>Éducation écosystémique</strong> - Offrir des ressources éducatives continues et des informations sur tous les aspects de l’écosystème The Graph.<hr></hr>Vous pouvez écouter les podcasts de GRTiQ <a className="cla" href="https://www.grtiq.com/podcast/" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Pour suivre GRTiQ, vous pouvez les suivre sur <a className="cla" href="https://twitter.com/grt_iq" target="_blank" rel="noreferrer">Twitter</a>, <a className="cla" href="https://www.youtube.com/channel/UCxhFN47AlCDx1Qoaw1oSQ5A" target="_blank" rel="noreferrer">YouTube</a> et <a className="cla" href="https://www.instagram.com/thegraphiq/" target="_blank" rel="noreferrer">Instagram</a>.</a>
   ,
   );
   this.setState((prev) => ({ 
     ...prev,
     messages: [...prev.messages, message],
   }));
 }

 handleGraphSocial() {
   const message = this.createChatbotMessage(<a><strong><a className="cla" href="https://twitter.com/graphsocial1?s=21&t=f_BFECU3y4NfkRXocWA5kQ" target="_blank" rel="noreferrer">Graph Social</a></strong><br></br><br></br>Une rencontre internationale web3 qui stimule la croissance de l’écosystème The Graph. Organisé par <a className="cla" href="https://twitter.com/Mardeni01" target="_blank" rel="noreferrer">Ahmad Mardeni</a>.<br></br><br></br>La première rencontre Graph Social web3 a eu lieu à Dubaï le 8 octobre 2022, de 18h à 22h GST, avec une participation de plus de 100 personnes. L’événement couvrant ce qu’est The Graph, quels sont les jalons récemment franchis et comment s’impliquer!<hr></hr><strong>Conférenciers</strong><br></br><br></br>Ahmad Mardeni<br></br>Salim Hadri<br></br>Shing Lam de <a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><br></br><a className="cla" href="https://twitter.com/9001sabella" target="_blank" rel="noreferrer">Isabella</a> de <a className="cla" href="https://twitter.com/routerprotocol" target="_blank" rel="noreferrer">Router Protocol</a><br></br><a className="cla" href="https://twitter.com/farhajmayan" target="_blank" rel="noreferrer">Farhaj Mayan</a> de <a className="cla" href="https://twitter.com/_buildspace" target="_blank" rel="noreferrer">Buildspace</a><br></br><a className="cla" href="https://twitter.com/dudhat_paresh" target="_blank" rel="noreferrer">Paresh Dudhat</a> de <a className="cla" href="https://twitter.com/infy_protocol" target="_blank" rel="noreferrer">Infy Protocol</a><br></br>Rashmi Padhy<br></br><br></br><strong>Sponsorise</strong><br></br><br></br><a className="cla" href="https://twitter.com/tenderize_me" target="_blank" rel="noreferrer">Tenderize</a><br></br><a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><hr></hr>Vous pouvez regarder une interview de l’événement avec Ahmad Mardeni et <a className="cla" href="https://twitter.com/MultiartStudio" target="_blank" rel="noreferrer">MultiArt Studio</a> ci-dessous!<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=KFUxrs10gpI'/></a>
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
  const message = this.createChatbotMessage(<a>The Graph Advocates est une initiative communautaire servant de portail vers le web3 pour les gens du monde entier. Les Advocates ont l’occasion unique d’apprendre et de contribuer à la communauté The Graph et à la mission web3. N’importe qui peut devenir un Advocate et par la suite rejoindre le Graph AdvocatesDAO.<hr></hr><strong><underline>Rôles d'un Advocate</underline></strong><br></br><br></br><strong>Évangéliste événementiel</strong><br></br>Organisez des événements locaux, assistez à des événements régionaux et participez à des événements communautaires en personne ou en ligne.<br></br><br></br><strong>Créateur de contenu</strong><br></br>Créez du contenu sur web3 et The Graph, y compris des articles, des vidéos, des infographies, des mèmes ou des GIF.<br></br><br></br><strong>Traducteur de texte</strong><br></br>Traduisez The Graph et d’autres documents, documents et publications sociales de la communauté dans d’autres langues.<br></br><br></br><strong>Community Care</strong><br></br>Publiez des réponses aux questions ou partagez des ressources éducatives dans The Graph Forum, Telegram, Discord ou Reddit.<br></br><br></br><strong>Instructeur technique</strong><br></br>Enseignez aux autres comment participer activement et contribuer à l’écosystème web3 et The Graph.<br></br><br></br><strong>Web3 Welcomer</strong><br></br>Accélérez l’éducation et l’adoption de web3 et The Graph dans le monde entier.<hr></hr>Vous pouvez postuler pour devenir un Advocate de The Graph <a className="cla" href="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Pour en savoir plus sur ce qu’il faut pour être un Advocate, voir <a className="cla" href="https://thegraph.com/ecosystem/advocacy/" target="_blank" rel="noreferrer">ici</a>.<hr></hr>Pour en savoir plus sur les subventions AdvocatesDAO , <a className="cla" onClick={this.handleAdvocateGrant}><strong>cliquez sur moi</strong></a>!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrant() {
  this.handleAdvocateGrantWithdraw = this.handleAdvocateGrantWithdraw.bind(this);
  const message = this.createChatbotMessage(<a><strong>Graph AdvocatesDAO Grant</strong><br></br><br></br>Vous pouvez demander une subvention AdvocatesDAO <a className="cla" href="http://grants.graphadvocates.com/" target="_blank" rel="noreferrer">ici</a>.<hr></hr><strong>Le processus de subvention</strong><br></br>L’examen initial du processus de subvention - Votre subvention sera publiée dans le forum Graph AdvocatesDAO <a className="cla" href="https://forum.graphadvocates.com/" target="_blank" rel="noreferrer">ici</a>. Un membre du DAO du comité des subventions évaluera l’admissibilité de votre subvention.<br></br>Discussions publiques - La communauté élargie est invitée à fournir des commentaires sur les subventions et à voter au Forum pour savoir si elle les soutient. Au cours de ce processus, les membres de la communauté ou les membres du DAO peuvent poser des questions dans le Forum pour recueillir plus de détails sur la subvention afin de mieux comprendre sa portée. Il s’agit d’une phase importante du processus tout au long duquel les opinions sont formées.<br></br>Présentation du comité - Une demande de subvention retenue comprendra également une présentation en direct au comité des subventions du DAO. Ces réunions ont lieu dans le chat vocal public  du <a className="cla" href="https://discord.gg/XgT3s9XY" target="_blank" rel="noreferrer">serveur Discord du DAO</a> et sont programmées à trois créneaux horaires différents (10h00 | 18h00 | 22h00 UTC) tous les mardis pour s’adapter aux différents fuseaux horaires à travers le monde. Ce sont des points de contact importants pour que les membres du comité des subventions acquièrent confiance quant au soutien ou non d’une subvention. Veuillez vous préparer à présenter un aperçu de votre subvention et à répondre à vos questions.<br></br>Décision de subvention - Vous verrez un certain nombre de votes et de sondages différents émerger tout au long du processus de subvention. Ce sont des signaux extrêmement importants qui informent les membres du DAO du vote. La décision officielle de financement du DAO pour les subventions réussies aura lieu à la toute fin du processus, où tous les membres du DAO voteront en chaîne dans <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2" target="_blank" rel="noreferrer">DAOHaus</a>. (remarque : certaines subventions plus petites peuvent être votées hors chaîne par le Comité des subventions)
  <br></br>Calendrier prévu - Le DAO s’engage à examiner de manière appropriée toutes les demandes de subvention. Le DAO a également établi des calendriers en chaîne et hors chaîne qui permettent un large engagement de la communauté vivant dans différents fuseaux horaires avec différents degrés de disponibilité pour participer.<hr></hr>Pour en savoir plus sur le retrait  des subventions AdvocatesDAO, <a className="cla" onClick={this.handleAdvocateGrantWithdraw}><strong>cliquez sur moi</strong></a>!</a>
    , 
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrantWithdraw() {
  const message = this.createChatbotMessage(<a><strong>Autres AdvocatesDAO de subvention</strong><br></br>Vous avez donc maintenant soumis votre subvention via le formulaire, elle a été publiée dans le forum où la communauté et les Advocates votent et posent des questions. Quelle est la prochaine étape?<hr></hr>Le DAO vise à traiter une demande de subvention réussie dans un délai de 1 à 2 mois. Vous trouverez ci-dessous un aperçu des principales étapes par lesquelles passe une demande de subvention réussie:<br></br>Examen communautaire: ~10 10 jours (varie selon l’engagement communautaire)<br></br>Présentation du comité: ~7 jours (comprend le temps alloué à la planification)<br></br>Vote hors chaîne du comité: ~7 jours<hr></hr>La période de vote est terminée et votre subvention a été réussie. Si oui, félicitations! À quoi s’attendre:<br></br><br></br><strong>Confirmation par e-mail</strong> - Ceci est à partir du graphique AdvocatesDAO, vous devrez remplir KYC (Know Your Customer) via le lien dans l’e-mail. Vous recevrez également un accord contractuel.<br></br><strong>Message sur le forum</strong> - - Un Advocate commentera également votre subvention dans le forum pour confirmer que vous avez réussi votre subvention.<br></br>KYC & Grant Agreement: ~7 jours<br></br>Vote en chaîne: 14 jours<br></br>Vous pourrez voir votre proposition de subvention en chaîne, <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2/proposals" target="_blank" rel="noreferrer">ici</a>.<br></br>Après les 14 jours, si vous avez réussi le vote en chaîne, vous pourrez retirer votre subvention.<hr></hr>Un guide sur le retrait de votre GRT de l’application DAOhaus peut être trouvé <a className="cla" href="https://docs.graphadvocates.com/community-grants/getting-grant-paid" target="_blank" rel="noreferrer">ici</a>. Ou vous pouvez regarder le tutoriel vidéo ci-dessous. Si vous  avez besoin de transférer vos fonds de Gnosis Chain à Ethereum, vous devez combler votre GRT, nous vous suggérons d’utiliser OmniBridge, auquel vous pouvez accéder <a className="cla" href="https://omni.gnosischain.com/bridge" target="_blank" rel="noreferrer">ici</a>. Pour regarder une vidéo montrant comment utiliser l’OmniBridge pour transférer vos fonds, vous pouvez la regarder <a className="cla" href="https://drive.google.com/file/d/1-YB8JfBu8mkYzc1wAqopGsBIonaLHwq6/view" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br><iframe className="embed" isDark src="https://drive.google.com/file/d/1toZih5GIO-h3deJKQz9lr_WBY3_QqX0U/preview" width="100%" height="480" allow="autoplay"></iframe></a>
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
  const message = this.createChatbotMessage(<a>Vous trouverez ci-dessous le contrat GRT et ses détails, assurez-vous de bien vérifier les informations afin d'éviter d'ajouter un contrat malveillant.<br></br><br></br>Nom: The Graph<br></br>Symbole: GRT<br></br>Réseau: Ethereum (ERC20)<br></br>Contrat: 0xc944e90c64b2c07662a292be6244bdf05cda44a7<br></br>Décimales: 18<br></br><br></br>Vous pouvez le vérifier sur CoinMarketCap, <a className="cla" href="https://coinmarketcap.com/fr/currencies/the-graph/" target="_blank" rel="noreferrer">ici</a>.</a>
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
  const message = this.createChatbotMessage(<a>Chaque fois qu’un délegateur souhaite annuler la délégation, ses jetons sont soumis à une période de dissociation de 26 jours. Cela signifie qu’ils ne peuvent pas transférer leurs jetons ou gagner des récompenses pendant 26 jours.<br></br><br></br>La période de délégation/dégel est là pour prévenir certaines attaques économiques. Il doit correspondre à la durée de vie maximale de l’allocation de 28 epoch. Compte tenu de la façon dont le système de récompense fonctionne actuellement, une période plus courte d’élimination de la délégation permettrait potentiellement d’être "comptée deux fois" dans plusieurs affectations simultanées.<hr></hr>Chaque fois que l’indexeur veut forcer sa fermeture (manuellement), ou automatiquement tous les 28 epoch maximum: durée maximale de l’affectation. C’est à ce moment que les récompenses sont distribuées.<br></br><br></br>Une chose à considérer est également de choisir judicieusement un indexeur. Si vous choisissez un indexeur qui n’était pas digne de confiance ou qui ne faisait pas du bon travail, vous voudrez déléguer, ce qui signifie que vous manquerez beaucoup d’occasions d’obtenir des récompenses, ce qui peut être aussi mauvais que de brûler vos GRT.<br></br><br></br>Pour un tutoriel sur un changement de délégation de jetons GRT de The Graph, cliquez <a className="cla" href="https://www.youtube.com/watch?v=3GPY5On7vHc" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Je peux vous aider avec la documentation et le tutoriel sur la façon de choisir un indexeur.<hr></hr>La non-délégation prend 28 époques (et non des jours).<br></br>Chaque époque a une longueur de 6646 blocs.<br></br><br></br>Avant ETH PoS, chaque bloc durait environ 13 secondes, c'est pourquoi 28 époques duraient environ 28 jours.<br></br>13s * 6646b * 28e = ~28 jours<br></br><br></br>Maintenant, chaque bloc prend environ 12,06 secondes.<br></br>12s * 6646b * 28e = 26 jours</a>
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
  const message = this.createChatbotMessage(<a>The Graph Academy est axée sur l’éducation et l’apprentissage de The Graph. Leurs cours sont conçus pour vous aider à démarrer avec The Graph et à élargir vos connaissances sur l’écosystème. Et en récompense d’en apprendre davantage, vous obtenez un certificat personnalisé.<br></br><br></br><a className="cla" href="https://thegraph.academy/course/delegator-course/" target="_blank" rel="noreferrer">Cours pour délégateur</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/subgraph-developer-course/" target="_blank" rel="noreferrer">Cours pour développeurs de subgraphes</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/curator-course/" target="_blank" rel="noreferrer">Cours de curateur</a><hr></hr>Pour créer un compte gratuit ou vous connecter en tant qu’invité, visitez le cours qui vous intéresse et cliquez sur "Commencer maintenant" et "S’inscrire". Il existe un <a className="cla" href="https://thegraph.academy/certificates/" target="_blank" rel="noreferrer">guide</a> étape par étape sur la façon de procéder.<hr></hr>Si vous voulez en savoir plus sur Web3, demandez-moi! "Comment puis-je apprendre Web3 gratuitement?"</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLearnWeb3() {
  const message = this.createChatbotMessage(<a><strong>MISE À JOUR</strong> -Ressources pour apprendre Web3 Dev <strong>GRATUITEMENT</strong><br></br><br></br>Accélérez votre carrière web3 grâce à des cours, des projets et du code. Totalement gratuit. Découvrez-le <a className="cla" href="https://university.alchemy.com/" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br><a className="cla" href="https://t.co/dm50GZ8lMP" target="_blank" rel="noreferrer">Ethereum</a><br></br><a className="cla" href="https://t.co/BfjoA5ynEt" target="_blank" rel="noreferrer">Solidity</a><br></br>Vous trouverez une liste remarquable de ressources, de bibliothèques, d'outils et d'autres éléments Solidity à l'adresse <a className="cla" href="https://github.com/bkrem/awesome-solidity" target="_blank" rel="noreferrer">Awesome Solidity.</a><br></br><a className="cla" href="https://t.co/GUMDW8WAru" target="_blank" rel="noreferrer">Blockchain</a><br></br><a className="cla" href="https://t.co/kzVyI8leHK" target="_blank" rel="noreferrer">Oracles</a><br></br><a className="cla" href="https://t.co/QRwZn0CvPl" target="_blank" rel="noreferrer">CryptoZombies</a> est  une école interactive qui vous apprend tout ce qui est technique sur les blockchains.<br></br>Mettez-vous à l’épreuve sur <a className="cla" href="https://t.co/VVsmytm7CS" target="_blank" rel="noreferrer">SpeedRunEthereum.com</a> .<br></br>Alchemy's <a className="cla" href="https://t.co/BDni1gjuvJ" target="_blank" rel="noreferrer">Road to Web3</a> series, un programme de développement web3 de 10 semaines à son rythme pour aider les nouveaux développeurs blockchain à passer de débutant à avancé.<br></br>Un guide complet du fil Twitter Web3 et Blockchain stack par Suhail Kakar peut être trouvé <a className="cla" href="https://twitter.com/suhailkakar/status/1552889172175642624?s=21&t=l_VTQ8NemlIWkCRne8f3bQ" target="_blank" rel="noreferrer">ici</a> .<br></br><br></br>Si vous préférez apprendre en regardant des tutoriels vidéo, il n’y a pas de meilleur instructeur que Nader Dabit. Vous trouverez le tutoriel 'The Complete Guide to Full Stack Web3 Development' ci-dessous, assurez-vous de consulter le reste de sa chaîne YouTube pour plus de contenu d’apprentissage Web3.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=nRMo5jjgCr4'/></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://twitter.com/evabeylin?s=21&t=xlTfEQdph_MfbuUlhFrb0Q" target="_blank" rel="noreferrer"><strong>Eva Beylin</strong></a> est directrice de The Graph Foundation depuis octobre 2020. Elle est investisseur, et partisane, de la technologie de base d’Ethereum par le biais d’eGirl Capital et dirige le grwoth de The Graph. Elle est l’une des plus influentes de CoinDesk en 2022, lisez le blog complet <a className="cla" href="https://www.coindesk.com/consensus-magazine/2022/12/05/eva-beylin-most-influential-2022/" target="_blank" rel="noreferrer">ici</a>. Elle a dirigé la distribution de plus de 135 millions de dollars en subventions aux principaux développeurs de The Graph et au capital de 50 millions de dollars de la fondation, dirigé par Tiger Global. Regardez sa conférence au Graph Day 2022 sur notre  parcours de décenralisation, <a className="cla" href="https://m.youtube.com/watch?v=ef5LCku3IqQ" target="_blank" rel="noreferrer">ici</a>. Elle a fait Forbes 2023 <a className="cla" href="https://www.forbes.com/profile/eva-beylin/?sh=34d711c95444" target="_blank" rel="noreferrer">30 Under 30</a>. Vous pouvez apprendre à connaître Eva en regardant une interview, <a className="cla" href="https://m.youtube.com/watch?v=IoqI6z5l9y8" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br><a className="cla" href="https://twitter.com/theklineventure?s=21&t=8FTTZesLJJUxAVnVbmLgQg" target="_blank" rel="noreferrer"><strong>Tegan Kline</strong></a> est cofondateur et responsable commercial d’Edge & Node depuis 2021. Après avoir levé 22,5 millions de dollars pour aider The Graph à créer un outil open source permettant  aux  développeurs d’ethereum de comprendre comment leurs produits sont utilisés, elle a cofondé Edge & Node pour aider à monétiser le projet. Edge & Node a été financé à l’origine avec une participation de 8% du jeton GRT, qui vaut maintenant environ 650 millions de dollars. Kline a également dirigé les investissements d’Edge & Node dans des projets adjacents à The Graph, totalisant 3,1 millions de dollars en 2021. Elle a fait Forbes 2022 <a className="cla" href="https://www.forbes.com/profile/tegan-kline/?sh=1465202462f7" target="_blank" rel="noreferrer">30 Under 30</a>. Vous pouvez apprendre à connaître Kline en visitant son site Web, <a className="cla" href="https://www.tegankline.com/" target="_blank" rel="noreferrer">ici</a>. Regardez une interview avec elle, <a className="cla" href="https://youtu.be/yONuFNxJVrc" target="_blank" rel="noreferrer">ici</a>. Ou vous pouvez écouter un  podcast GRTiQ, <a className="cla" href="https://youtu.be/ZGHwTb92Rrg" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br><a className="cla" href="https://twitter.com/girlcalledreem?s=21&t=h9ZItE1mnaruz2uPiHkrLQ" target="_blank" rel="noreferrer"><strong>Reem Chahrour</strong></a> est gestionnaire d’écosystème chez The Graph depuis 2021. Pour tous ceux qui ont postulé pour une subvention The Graph, ou suivi le travail de l’un des bénéficiaires, alors ils ont déjà rencontré Reem. Elle est un atout important pour la communauté The Graph et son travail couvre une variété d’initiatives importantes. Vous pouvez l’écouter sur le  podcast GRTiQ, <a className="cla" href="https://m.youtube.com/watch?v=3xfb0n99AzI" target="_blank" rel="noreferrer">ici</a>. Elle parle de son entrée dans la crypto et de son travail à la Graph Foundation, de ses conseils pour ceux qui cherchent à demander une subvention (et où la fondation aimerait voir plus de soumissions), de la différence entre les programmes RFP et Grants, et du programme Graph Advocates qui sera bientôt lancé.<br></br><br></br>Lorsque quelqu’un mentionne un indexeur, il utilise les pronoms masculins. « Il ferme son allocation ». Voulant mettre en avant les femmes dans le Web3 travaillant sur des équipes d’indexeurs ou gérant leur propre indexeur au sein de l’écosystème The Graph, les graphtronautes ont mené une série d’entretiens avec Femmes du Web3.<br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=WTdf9wEhSLg" target="_blank" rel="noreferrer">Femmes du Web3 - Ana from GraphOps</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=0D4_17B6ypY" target="_blank" rel="noreferrer">Femmes du Web3 - Anna from Citadel.One</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=chvIFfPfOjY" target="_blank" rel="noreferrer">Femmes du Web3 - IIinca from Chainode Tech</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=Z7UnQotqLVA" target="_blank" rel="noreferrer">Femmes du Web3 - Gabi from Stake2Earn</a></a>
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
  const message = this.createChatbotMessage(<a>Vous trouverez ci-dessous les serveurs <storng>Officiels</storng> de Discord.<br></br><br></br><a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">Graph Protocol</a><br></br><br></br><a className="cla" href="https://discord.com/invite/aZtCCKPp34" target="_blank" rel="noreferrer">Graph AdvocatesDAO</a><hr></hr>Vous trouverez ci-dessous les serveurs Discord <strong>non-officiels</strong>.<br></br><br></br><a className="cla" href="https://discord.com/invite/zqrwSFFW3F" target="_blank" rel="noreferrer">Graphrica</a></a>
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
  const message = this.createChatbotMessage(<a> Vous trouverez ci-dessous le groupe Telegram <strong>Officiel</strong>.<br></br><br></br><a className="cla" href="https://t.me/graphprotocol" target="_blank" rel="noreferrer">La communauté officielle de The Graph</a><hr></hr>Vous trouverez ci-dessous les groupes Telegram <strong>non officiels</strong> du monde entier.<br></br><br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank">Graphtronauts</a><br></br><a className="cla" href="https://t.me/TheGraph_Germany" target="_blank">The Graph - Germany</a><br></br><a className="cla" href="https://t.me/thegraphfrenchchannel" target="_blank">The Graph - French</a><br></br><a className="cla" href="https://t.me/thegraphenespanol" target="_blank">The Graph - Español</a><br></br><a className="cla" href="https://t.me/thegraphRu" target="_blank">The Graph - Russia</a><br></br><a className="cla" href="https://t.me/thegraphitalia" target="_blank" rel="noreferrer">The Graph - Italia</a><br></br><a className="cla" href="https://t.me/graphprotocolTR" target="_blank" rel="noreferrer">The Graph - Turkey</a><br></br><a className="cla" href="https://t.me/TheGraphBR" target="_blank" rel="noreferrer">The Graph - Brasil</a><br></br><a className="cla" href="https://t.me/GraphProtocol_VN" target="_blank" rel="noreferrer">The Graph - Vietnam</a><br></br><a className="cla" href="https://t.me/Graph_Persian" target="_blank" rel="noreferrer">The Graph - Persian</a><br></br><a className="cla" href="https://t.me/IndianGraphCommunity" target="_blank" rel="noreferrer">The Graph - Indian</a><br></br><a className="cla" href="https://t.me/thegraphjapan" target="_blank" rel="noreferrer">The Graph - Japan</a><br></br><a className="cla" href="https://t.me/TheGraph_Dutch" target="_blank" rel="noreferrer">The Graph - Dutch</a><br></br><a className="cla" href="https://t.me/GRTARAB" target="_blank" rel="noreferrer">The Graph - Arab</a><br></br><a className="cla" href="https://t.me/Thegraph_KR" target="_blank" rel="noreferrer">The Graph - Korea</a><br></br><a className="cla" href="https://t.me/thegraphpk" target="_blank" rel="noreferrer">The Graph - Pakistan</a><br></br><a className="cla" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">The Graph - Indonesia</a><br></br><a className="cla" href="https://t.me/thegraphbangladesh" target="_blank">The Graph - Bangladesh</a><br></br><a className="cla" href="https://t.me/GraphProtocolCN" target="_blank">The Graph - China</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Token Economics Start
handleTwitter() {
  const message = this.createChatbotMessage(<a>Vous trouverez ci-dessous la page Twitter <strong>officielle</strong>.<br></br><br></br><a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">The Graph</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTokenEconomics() {
  const message = this.createChatbotMessage(<a>L’économie symbolique de Graph est assez complexe. En plus d’un calendrier d’émission de jetons et d’un mécanisme de gravure de jetons, The Graph Protocol déverrouille les jetons acquis sur une période de 5 à 10 ans.<hr></hr><table><tr className="indexer-table-header">
  <th>Offre totale de jetons = </th>
  <th> Approvisionnement initial en jetons + </th>
  <th> Numéro annuel - </th>
  <th> Brûlage annuel</th>
</tr>
</table><hr></hr><strong>Vue d’ensemble de l’économie des jetons GRT</strong><br></br><br></br><table>
<tr className="indexer-table">
  <td><strong>Symbol tab</strong></td>
  <td>GRT</td>
</tr>
<tr className="indexer-table">
  <td><strong>Jeton de nom</strong></td>
  <td>Graph Token</td>
</tr>
<tr className="indexer-table">
  <td><strong>Fourniture initiale de jetons</strong></td>
  <td>10 milliards de GRT</td>
</tr>
<tr className="indexer-table">
  <td><strong>Numéro annuel</strong></td>
  <td>~3 % (pour l’année 1)</td>
</tr>
<tr className="indexer-table">
  <td><strong>Brûlage annuel</strong></td>
  <td>~1 % Frais de consultation et taxes</td>
</tr>
</table>
  <hr></hr><table><tr className="indexer-table-header">
  <th>Offre totale de jetons = </th>
  <th> Approvisionnement initial en jetons + </th>
  <th> Numéro annuel - </th>
  <th> Brûlage annuel</th>
</tr>
</table><hr></hr><strong>Étapes de déblocage des jetons</strong> - Aperçu des progrès du déverrouillage de jetons à des dates spécifiques.<br></br><br></br><table><tr className="indexer-table-header">
  <th>Date</th>
  <th>Augmentation (%)</th>
  <th>Déverrouillage cumulé (%)</th>
  <th>Cumulative GRT Unlock</th>
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
</table><br></br>L’économie du <a className="cla" href="https://thegraph.academy/ecosystem/graph-token-economics/" target="_blank" rel="noreferrer">jeton</a> GRT de The Graph.</a>
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
  const message = this.createChatbotMessage(<a><strong>MISE À JOUR</strong> - Clarifier les perspectives pour le service hébergé<br></br><br></br>Le service hébergé ne mettra pas fin brusquement à la prise en charge de toutes les chaînes. Le service hébergé restera libre d’utilisation jusqu’à ce que la fonctionnalité de base soit atteinte pour chaque chaîne.<br></br><br></br>Les développeurs de subgraphes ne seront pas privés d’un service essentiel dont ils dépendent en production.<br></br><br></br>Pour élaborer (et apporter une correction) à l’annonce initiale qui prévoyait que la résiliation du service hébergé interviendrait à la fin du premier trimestre de 2023 :<br></br>Le processus de transition ne s’applique qu’aux chaînes une fois qu’elles sont prises en charge par The Graph Network (qui n’inclut que le réseau principal Ethereum  au moment de la rédaction, avec Gnosis Chain à venir).<br></br><br></br>Les commentaires sont toujours les bienvenus via The Graph Discord, The Graph Forum et en contactant migration@thegraph.foundation.<br></br><br></br>Après presque 4 ans de prise en charge des subgraphes pour les dapps web3, le service hébergé sera fermé au premier trimestre 2023 avec la migration des dapps vers le réseau décentralisé. Le service hébergé a joué un rôle central dans le parcours de décentralisation de The Graph, en adaptant le produit au marché et en testant les fonctionnalités de subgraph avec les développeurs.<br></br><br></br>Pour la documentation officielle, visitez <a className="cla" href="https://thegraph.com/blog/sunsetting-hosted-service" target="_blank" rel="noreferrer">The Graph Foundation - The Road to Sunsetting the Hosted Service</a>.</a>
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
  const message = this.createChatbotMessage(<a>Au cours du Graph Day, Tenderize a été reconnu comme le premier protocole d’engagement liquide. Les utilisateurs peuvent déposer des $GRT par tenderGRT  (tGRT), qui accumule automatiquement les récompenses et est échangé à volonté. $GRT titulaires peuvent déléguer via Tenderize, en leur accordant tGRT. Une version tokenisée de la position misée qui combine automatiquement les récompenses et peut être instantanément renvoyée à GRT.<br></br><br></br>Vous pouvez lire un guide écrit par les Graphtronautes sur Comment utiliser Tenderize Tokenized Stake pour votre GRT, <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-use-tenderize-tokenized-stake-for-your-grt-cf5fe38a6dc7" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Pour commencer, visitez <a className="cla" href="https://app.tenderize.me/stakers/graph" target="_blank" rel="noreferrer">Tenderize</a>.<br></br><br></br>Vous pouvez également lire le blog Tenderize <a className="cla" href="https://blog.tenderize.me/" target="_blank" rel="noreferrer">ici</a>.</a>
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
  const message = this.createChatbotMessage(<a>The Graph touche désormais encore plus de personnes dans leur langue principale grâce à l’aide de traducteurs talentueux. <br></br><br></br>Pour en savoir plus sur la communauté GRT, voir ci-dessous.<br></br><br></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCommunity();
  }}><strong>Communauté</strong></button>
  <br></br><br></br><a className="cla" href="https://thegraph.com/blog/get-involved-with-graph-community-web3/" target="_blank" rel="noreferrer">23 façons de participer à l’écosystème Graph</a></a>
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
  const message = this.createChatbotMessage(<a>Geo est un navigateur web décentralisé3 basé sur The Graph, les pages sont ouvertes et sélectionnées par la communauté. Ainsi, vous pouvez voter sur ce qui a de la valeur et votre vote a de la valeur. Geo résout tous les problèmes que nous avons actuellement avec nos navigateurs Web2 et ouvre une nouvelle fenêtre d’innovation, un nouvel Internet où votre vie privée est la priorité absolue. Vous n’avez pas besoin de connaître quoi que ce soit sur la cryptographie ou la blockchain pour pouvoir l’utiliser. Il s’agit d’une expérience pour intégrer les 1 milliard d’utilisateurs suivants à web3.<br></br><br></br>Geo est en version bêta et n’est pris en charge que sur les appareils iPad et Mac pour le moment, inscrivez-vous à la liste d’attente bêta <a className="cla" href="https://edgeandnode.com/geo/" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Pour lire un blog complet sur Geo créé par <a className="cla" href="https://substack.com/profile/45913426-ahmad-mardni" target="_blank" rel="noreferrer">Ahmad Mardeni</a> , voir <a className="cla" href="https://ahmadmardeni.substack.com/p/geo-the-new-web3-browser-with-a-decentralization?s=r" target="_blank" rel="noreferrer">ici</a>.<hr></hr><strong>MISE À JOUR</strong> - Geo Genesis<br></br><br></br>Yaniv - Il y a cinq ans, un groupe d’entre nous a vu l’activité se dérouler autour d’Ethereum et a décidé de contribuer en construisant The Graph. J’ai vu le potentiel de The Graph pour être un graphe de connaissances mondial décentralisé de toutes les connaissances et informations publiques du monde. En utilisant l’infrastructure publique pour organiser et fournir l’information, nous pourrions avoir des processus plus ouverts et équitables pour influencer l’information qui est considérée comme vraie. Aujourd’hui, nous avons un réseau décentralisé dynamique et The Graph résout le problème critique de l’accès efficace aux données blockchain pour des milliers de développeurs, mais nous devons encore franchir une autre étape pour donner vie à l’image complète.<br></br><br></br>Vous pouvez lire le blog complet, <a className="cla" href="https://www.geobrowser.io/blog/post/introducing-geo-genesis?s=09" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/i/status/1532418078700580869'/></a>
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
  const message = this.createChatbotMessage(<a>StreamingFast est une société d’infrastructure de protocole qui excelle dans la construction d’une architecture cross-chain hautement évolutive pour la transmission de données blockchain. La subvention Core Dev de 60 millions de dollars est la première du genre, ouvrant la voie à une nouvelle frontière de l’innovation collaborative où les communautés et les entreprises s’alignent pour construire un Internet radicalement plus ouvert.<br></br><br></br>La Graph Foundation accorde une subvention de 60 millions de dollars à StreamingFast pour rejoindre The Graph en tant qu’équipe de développement principale, lire <a className="cla" href="https://thegraph.com/blog/core-dev-grant" target="_blank" rel="noreferrer">ici</a>.<hr></hr>Substreams est une puissante technologie d’indexation blockchain, développée pour The Graph Network.<br></br><br></br>Pour trouver de la documentation sur SubStreams, cliquez <a className="cla" href="https://substreams.streamingfast.io/" target="_blank" rel="noreferrer">ici</a>.<br></br>Ou vous pouvez lire le blog de The Graph sur <a className="cla" href="https://thegraph.com/blog/substreams-parallel-processing" target="_blank" rel="noreferrer">Substreams: Massively Faster Indexing Performance for Subgraphs</a>.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=qWxffTKpciU'/><br></br>Rejoignez le <a href="https://discord.com/invite/jZwqxJAvRs" target="_blank" rel="noreferrer">serveur StreamingFast Discord</a> ou consultez-les <a className="cla" href="https://www.streamingfast.io/" target="_blank" rel="noreferrer">ici</a>.</a>
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
  const message = this.createChatbotMessage(<a><strong>Une communauté pour les délégateurs, construite par les délégateurs.</strong><br></br>Les Graphtronauts sont un groupe dédié à faciliter le chat pour ceux qui souhaitent tenir $GRT et parler des principes fondamentaux du projet The Graph. Non seulement ils sont la plus grande  communauté non officielle de  détenteurs de $GRT à long terme pour l’écosystème The Graph, mais leur objectif est d’aider les gens dans leur parcours pour devenir un délégateur pour The Graph.<br></br><br></br><strong>'Nous nous élevons en élevant les autres' - Graphtronauts | Fondée le 16 janvier 2021</strong><br></br><br></br>Apprenez-en plus sur les graphtronautes en écoutant ce <a className="cla" href="https://www.grtiq.com/grtiq-podcast-35-the-graphtronauts/" target="_blank" rel="noreferrer">podcast GRTiQ</a> avec Baghe et Chris Ewing.<br></br>Et ce <a className="cla" href="https://www.grtiq.com/grtiq-podcast-90-paolo-diomede/" target="_blank" rel="noreferrer">podcast GRTiQ</a> avec Paolo Diomede.<br></br>Vous pouvez rejoindre la communauté via les liens suivants:<br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank" rel="noreferrer">Telegram</a><br></br><a className="cla" href="https://twitter.com/graphtronauts" target="_blank" rel="noreferrer">Twitter</a><br></br><a className="cla" href="https://www.graphtronauts.com/#/" target="_blank" rel="noreferrer">Graphtronauts App</a><br></br><a className="cla" href="https://old.graphtronauts.com/" target="_blank" rel="noreferrer">Website</a><br></br><a className="cla" href="https://www.youtube.com/channel/UCPAUeNaRtBV-jdSKY8wmcXg" target="_blank" rel="noreferrer">YouTube</a><br></br><a className="cla" href="https://www.reddit.com/r/Graphtronauts/" target="_blank" rel="noreferrer">Reddit</a><hr></hr> L’indexeur Graphtronauts (<a className="cla" href="https://thegraph.com/explorer/profile/0x0c3aab9f49c01070ec359aae4778fcbb01d2fbef?view=Indexing" target="_blank" rel="noreferrer">graphtronauts-indexer.eth</a>) est maintenant en ligne et prêt pour les délégations! Consultez le Tweet ci-dessous pour plus d’informations, rejoignez leur <a className="cla" href="https://t.co/dDUb7NHaPY" target="_blank" rel="noreferrer">Discord</a> et suivez-les sur Twitter pour les mises à jour.<br></br><Embed className="embed" isDark url='https://twitter.com/graphtronauts_x/status/1593310558798979072?s=20&t=2FCQMWbItkh1MnXmrHBVIA'/>
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
  const message = this.createChatbotMessage(<a>Si vous souhaitez déléguer GRT via Metamask. Si vous ne l’avez pas déjà fait, <a className="cla" href="https://metamask.io/download/" target="_blank" rel="noreferrer">téléchargez MetaMask</a>. Si vous avez besoin d’aide pour cela, vous pouvez trouver un guide <a className="cla" href="https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Vous pouvez regarder un didacticiel vidéo étape par étape sur la façon de déléguer GRT à un indexeur <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">ici</a>.<br></br>Si vous préférez suivre le guide texte, vous pouvez le lire <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">ici</a>.<hr></hr>Vous pouvez utiliser <strong>WalletConnect</strong> pour déléguer au protocole The Graph.<br></br>Vous pouvez trouver un guide étape par étape sur la façon de le faire <a className="cla" href="https://thegraph.academy/delegators/delegating-walletconnect/" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Au lieu du soft wallet de Metamask,  vous pouvez également utiliser un hard wallet tel que Ledger, pour déléguer votre GRT. Les hard wallet peuvent ajouter une autre couche de sécurité, car ils nécessitent généralement la confirmation des transactions à partir de l’appareil physique. Vous pouvez connecter  Metamask  à votre portefeuille matériel via l’extension de navigateur Metamask. Assurez-vous que l’application ETH est ouverte sur votre appareil Ledger et que vous êtes autorisé à utiliser des données contractuelles dans l’application ETH de votre appareil.<br></br><br></br>Pour déléguer vos jetons GRT à l’aide d’un portefeuille matériel connecté à MetaMask, lisez un tutoriel <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-delegate-your-grt-tokens-with-an-hardware-wallet-aec7751cd5d5" target="_blank" rel="noreferrer">ici</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCurator() {
  const message = this.createChatbotMessage(<a><a className="cla" href="https://thegraph.academy/curators/definition/" target="_blank" rel="noreferrer">Les curateurs </a> n’ont pas besoin de posséder des compétences ou des connaissances techniques complexes. Tout ce qui est nécessaire est la possibilité de traiter via MetaMask. De même, les curateurs ne sont pas tenus de miser un montant minimum requis de GRT, contrairement aux indexeurs. Les curateurs doivent comprendre les tendances de l’écosystème Web3 et voir si un subgraph fournit des informations utiles. Il est également utile pour un curateur d’être en mesure d’identifier les problèmes critiques qui pourraient signifier qu’un subgraphe est défaillant.<br></br><br></br>Les guides suivants vous donneront toutes les informations dont vous avez besoin avant de pointer vers un subgrapheet comment le faire en toute confiance.<br></br><br></br>Ce <a className="cla" href="https://medium.com/@paulieb.eth/tips-and-tricks-to-evaluate-and-determine-if-a-subgraph-is-legitimate-c67f16e2205a" target="_blank" rel="noreferrer">guide</a> du conservateur intitulé "Trucs et astuces pour évaluer et déterminer si un subgrapheest légitime" est le meilleur point de départ. Une fois que vous aurez lu le guide et regardé les tutoriels ci-dessous, vous serez dans une excellente position pour pointer vers votre premier subgraphe.<br></br><br></br>Ce<a className="cla" href="https://medium.com/@paulieb.eth/the-graph-curation-bb17bf8b8fa9" target="_blank" rel="noreferrer">guide</a> également réalisé par PaulieB sur 'Curation. Un guide court et agréable expliquant ce que c'est, comment le faire et des ressources utiles pour vous aider à réussir.<br></br><br></br>Rejoignez <a className="cla" href="https://t.me/CurationStation" target="_blank" rel="noreferrer">$GRT Curation Station</a>,  une communauté créée par des curateurs, pour les curateurs. Vous pouvez demander de l’aide supplémentaire ici si nécessaire.<br></br><br></br>Les tutoriels vidéo suivants ont été créés par <a className="cla" href="https://thegraph.com/explorer/profile?id=0x87eba079059b75504c734820d6cf828476754b83&view=Indexing" target="_blank" rel="noreferrer">DataNexus</a>  sur la curation :<br></br><a className="cla" href="https://www.youtube.com/watch?v=-7qWi2do-1E" target="_blank" rel="noreferrer">Qu’est-ce qu’un curateur pour The Graph?</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=unzQvSZIORg" target="_blank" rel="noreferrer">Vérification d’un subgraphe</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=zJswFILfADg" target="_blank" rel="noreferrer">Comment pointer vers un subgraphe</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=u76dxQPdS9c" target="_blank" rel="noreferrer">Erreur de signature de transaction</a><hr></hr>Si vous voulez des outils de curateur utiles, il suffit de demander.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCuratorTools() {
  const message = this.createChatbotMessage(<a><strong>Outils utiles pour les curateurs</strong><br></br><br></br>Découvrez comment fonctionne la facturation dans Subgraph Studio, <a className="cla" href="https://thegraph.com/docs/en/billing/" target="_blank" rel="noreferrer">ici.</a><br></br><br></br>Découvrez comment The Graph utilise Polygon pour son système de facturation <a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">ici</a>.<hr></hr><a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">Vérifier </a> l’état d’indexation d’un subgraphe<br></br><br></br>Vous pouvez voir les données de :<br></br>Taux de consultation du réseau principal (quotidien)<br></br>Frais de consultation réseau principal (mensuels)<br></br>Frais de requête Mainnet (mensuel, moyenne mobile sur 30 jours)<br></br>Nouveaux sous-graphiques (mensuels)<br></br>Total des subgraphes<br></br>Frais de requête Mainnet (mensuel, moyenne mobile sur 30 jours)<br></br>Nouveaux sous-graphiques (mensuels)<br></br>Taux de requête / Taux de signal (30 jours)<br></br>Frais de consultation du subgraphe (30 jours) - % <br></br><a className="cla" href="http://michael.lesane.net/graphdash/" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Ou vérifiez la facturation des abonnements, <a className="cla" href="http://michael.lesane.net/graphdash/billing" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Graph Network <a className="cla" href="https://dapplooker.com/dapp/graph-network-billing-120192" target="_blank" rel="noreferrer">Billing Dashboard</a><br></br><br></br>Graph Network <a className="cla" href="https://dapplooker.com/dapp/graph-network-user-billing-balance-120204" target="_blank" rel="noreferrer">User Billing Balance</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleHostedService() {
  const message = this.createChatbotMessage(<a>Le service hébergé a joué un rôle déterminant dans l’arrivée de The Graph là où il est aujourd’hui, mais la vision a toujours été de créer un protocole d’indexation décentralisé et une API globale. Lorsque The Graph Network sera mis en ligne, les développeurs auront enfin la possibilité de fournir des applications décentralisées véritablement sans serveur, rapides à charger et fiables. Il n’y aura pas besoin d’une infrastructure centralisée car les applications peuvent se connecter directement à un réseau efficace d’indexeurs pour traiter les requêtes.<br></br><br></br>Les subgraphes Ethereum continuent de migrer vers le réseau décentralisé de The Graph. À mesure que l’adoption du web3 augmente, la demande d’évolutivité et de performances augmente également. Les développeurs sont confrontés à un choix important : continuer à s’appuyer sur une technologie centralisée ou passer à une infrastructure décentralisée.<br></br>Pour la longévité et la fiabilité, rien ne vaut la décentralisation. En évitant les points de défaillance centralisés, vous offrez à vos utilisateurs une application web3 à laquelle ils peuvent accéder de manière cohérente. De nombreux projets ont déjà validé le réseau en production et c’est le moment idéal pour migrer votre projet.<br></br><br></br>Pour en savoir plus sur la migration des sous-graphes de graphes, cliquez <a className="cla" href="https://thegraph.com/blog/graph-network-migration" target="_blank" rel="noreferrer">ici</a>.<br></br>Si vous recherchez un guide étape par étape sur la migration d'un sous-graphe du service hébergé vers le réseau principal, cliquez <a className="cla" href="https://codex.thegraph.com/repositories-and-documentation/official-documentation/hosted-service/migrating-subgraph" target="_blank" rel="noreferrer">ici</a>.Si vous préférez les tutoriels vidéo, voir ci-dessous.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=syXwYEk-VnU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleChainlink() {
  const message = this.createChatbotMessage(<a>The Graph est un protocole d’indexation permettant d’interroger des réseaux tels que Ethereum et IPFS. Tout le monde peut créer et publier des API ouvertes, appelées subgraphes, ce qui facilite l’accès aux données. Chainlink est un réseau Oracle décentralisé qui permet aux contrats intelligents d’accéder en toute sécurité aux sources de données hors chaîne, aux API Web et aux paiements bancaires traditionnels.<hr></hr>Voici une explication vidéo avec Tegan Kline et Dave Kajpust de The Graph Protocol. Ils discutent de l’importance vitale de The Graph dans la construction d’un Web3 décentralisé et expliquent les différences entre Chainlink et Graph.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=HOS9g0rKP24'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIndexerOfficeHours() {
  const message = this.createChatbotMessage(<a>Indexer Office Hours est une clinique informelle sans rendez-vous permettant à quiconque d’obtenir des conseils sur la mise en œuvre d’Indexer, que ce soit sur le réseau principal ou réseau de test. Si vous voulez en savoir plus sur le dépannage, ou si vous voulez simplement poser des questions sur l’indexation, cette clinique est faite pour vous.<br></br><br></br>Vous pouvez rattraper toutes les heures de bureau d’Indexer <a className="cla" href="https://graphops.notion.site/Indexer-Office-Hours-952e0b50a65144768aab922e2c9d102a" target="_blank" rel="noreferrer">ici</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleFireHose() {
  const message = this.createChatbotMessage(<a>Le traitement des données via Firehose (développé par StreamingFast) augmente les performances d’indexation linéaire et la vitesse de synchronisation, et maximise l’agilité des données en permettant un traitement parallèle. Firehose crée une interface générique pour Graph Node avec n’importe quelle blockchain et améliore considérablement la capacité à gérer des chaînes hautes performances comme NEAR.<br></br><br></br>Vous pouvez lire la proposition de Firehose pour en savoir plus à ce sujet <a className="cla" href="https://firehose.streamingfast.io/" target="_blank" rel="noreferrer">ici</a>.<hr></hr>Posez-moi des questions sur StreamingFast pour en savoir plus à leur sujet.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoreDevs() {
  this.handleButtonCoreDevsChat = this.handleButtonCoreDevsChat.bind(this);
  const message = this.createChatbotMessage(<a>Les principaux développeurs de The Graph sont :<br></br><br></br><a className="cla" href="https://edgeandnode.com/blog/introducing-edge-and-node/" target="_blank"><strong>Edge & Node</strong></a> - Développement de protocoles décentralisés et avancement du web3. Équipe initiale derrière The Graph.<br></br><a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank"><strong>Figment</strong></a> - Amélioration de l’infrastructure des node et de la prise en charge multi-blockchain.<br></br><a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank"><strong>The Graph Foundation</strong></a> - Gérer l’écosystème, accorder des subventions et soutenir la communauté.<br></br><a className="cla" href="https://www.streamingfast.io/" target="_blank"><strong>StreamingFast</strong></a> - Optimisation des performances d’indexation des subgraphes et prise en charge des outils de développement web3.<br></br><a className="cla" href="https://www.semiotic.ai/" target="_blank" ><strong>Semiotic</strong></a>- Améliorer le réseau de graphes grâce aux innovations en matière d’IA et de R&D.<br></br><a className="cla"href="https://www.the-guild.dev/" target="_blank"><strong>The Guild</strong></a> - Création d’outils de subgraphes et développement d’améliorations de l’API GraphQL.<br></br><a className="cla" href="https://graphops.xyz/" target="_blank"><strong>GraphOps</strong></a> - Extraire, transformer et servir des données blockchain via le protocole Graph.<br></br><a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank"><strong>Messari</strong></a> - Apporter de la transparence et créer des outils pour des décisions et des investissements éclairés.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonCoreDevsChat}><strong>Développeurs principaux</strong></button><br></br><br></br>Rattrapez tous les appels Core Devs <a className="cla" href="https://www.youtube.com/playlist?list=PLTqyKgxaGF3Tj_A6eqV8V_aQoRwd2oHa_" target="_blank">ici</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleFigment() {
  const message = this.createChatbotMessage(<a>Figment est une société canadienne enregistrée et financée par du capital de risque basée à Toronto. Au service des plus grands détenteurs de GRT au monde. Avec plus de 30 ans d’expérience dans la mise à l’échelle réussie d’entreprises d’infrastructure Internet.<hr></hr><strong>Stakeout</strong> - Figment exploite un réseau hautement sécurisé de validateurs de preuve d’enjeu (PoS) qui permettent aux détenteurs de jetons de sécuriser les réseaux, de participer à la gouvernance et de gagner en performance.<br></br>Pour plus d'informations sur le stacking avec Figment, voir <a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br><strong>Logiciel</strong> - La plate-forme DataHub de Figment  permet aux développeurs d’utiliser les fonctionnalités les plus puissantes et uniques d’une blockchain sans avoir à devenir des experts en protocole, accélérant ainsi le développement de nouvelles applications Web 3.<br></br>Pour en savoir plus sur la plateforme DataHub de Figment, cliquez <a className="cla" href="https://datahub.figment.io/" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br><strong>Capital</strong> - Figment Capital fournit un financement de démarrage et un soutien à la croissance pour de nouveaux projets PoS très innovants.<hr></hr>Figment rejoint The Graph dans l’une des plus grandes fusions dans un protocole décentralisé; Une subvention de développeur principal de 80 millions de GRT est accordée.<br></br>Vous pouvez en savoir plus sur Bringing The Graph dans l’écosystème du cosmos <a className="cla" href="https://www.figment.io/resources/the-graph-and-cosmos" target="_blank" rel="noreferrer">ici</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSemiotic() {
  const message = this.createChatbotMessage(<a>Semiotic Labs Labs construit des outils de prise de décision automatisés pour les marchés décentralisés sur blockchain. Ils croient que la convergence de l’IA et de la cryptographie conduira Web3, l’Internet décentralisé du futur. L’apprentissage par renforcement profond (RL) est un domaine de l’IA qui a été utilisé pour dominer des jeux comme Go et dans la découverte scientifique.<hr></hr>En utilisant Deep RL, ils développent des agents autonomes qui peuvent négocier les prix et d’autres conditions dans le cadre d’accords bilatéraux ou de type enchères.<br></br>Les agents ayant des comportements prosociaux peuvent être formés pour améliorer le bien-être du réseau décentralisé.<br></br>Les environnements de simulation sont essentiels pour former efficacement les agents d’IA et tester leurs performances par rapport aux benchmarks.<br></br><br></br>Ils développent des simulateurs réalistes pour saisir l’économie des marchés décentralisés et former plusieurs agents participant au réseau.<br></br>Les environnements de simulation sont également utiles pour tester les nouveaux protocoles afin de détecter les faiblesses (par exemple, les attaques adverses) avant que des défaillances réelles ne se produisent.<br></br>Le chiffrement homomorphe permet d’effectuer des calculs sur des données chiffrées.<br></br>The Graph accorde une subvention de 60 millions de dollars à Semiotic AI pour rejoindre The Graph en tant que développeur principal.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMessari() {
  const message = this.createChatbotMessage(<a>Messari apporte son talent de développeur et son expertise du domaine pour développer et maintenir des subgraphes de protocole standardisés, complexes, précis et de haute qualité. Tous les subgraphes seront open source et disponibles pour la communauté en général. Chaque subgraphe sera migré vers le réseau décentralisé. En outre, Messari dirigera des groupes de travail sur les subgraphes  , fournira des commentaires pour aider à éclairer les efforts de protocole de base, partagera les meilleures pratiques en matière de subgraphes et aidera à créer des normes communautaires pour tout protocole.<br></br><br></br>Vous pouvez en savoir plus sur le rôle de Messari au sein de l’écosystème The Graph <a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank" rel="noreferrer">ici</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphQLApi() {
  const message = this.createChatbotMessage(<a><strong>API GraphQL</strong><br></br><br></br>Ce <a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/" target="_blank" rel="noreferrer">guide</a> explique l’API de requête GraphQL utilisée pour le protocole The Graph.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#queries" target="_blank" rel="noreferrer">Requêtes</a></strong> - Dans votre schéma de subgraphe, vous définissez des types appelés Entités. Pour chaque type d’entité, une entité et un champ d’entité seront générés dans le type de requête de niveau supérieur.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#sorting" target="_blank" rel="noreferrer">Classification</a></strong> - Lors de l’interrogation d’une collection, le paramètre orderBy peut être utilisé pour trier en fonction d’un attribut spécifique. En outre, orderDirection peut être utilisé pour spécifier la direction de classification, asc  à  monter ou desc à descendre.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#pagination" target="_blank" rel="noreferrer">Pagination</a></strong> - Lors de l’interrogation d’une collection, le premier paramètre peut être utilisé pour la pagination à partir du début de la collection.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#filtering" target="_blank" rel="noreferrer">Filtrage</a></strong> - Vous pouvez utiliser le paramètre where dans vos requêtes pour filtrer par différentes propriétés.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/en/querying/graphql-api/#time-travel-queries" target="_blank" rel="noreferrer">Requêtes de voyage dans le temps</a></strong> - Vous pouvez vérifier l’état de vos entités non seulement pour le dernier bloc, qui est la valeur par défaut, mais aussi pour un bloc arbitraire dans le passé.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleParticipantUpdate() {
  const message = this.createChatbotMessage(<a>La dernière mise à jour des participants au GRT couvre les faits marquants du T3 2022 de The Graph, y compris les statistiques clés, les annonces et événement marquant. Regardez l’enregistrement et découvrez tout le bâtiment et l’innovation qui se produisent au sein de The Graph Ecosystem.<br></br><br></br><Embed className="embed" isDark url='https://youtu.be/58el3_9oJ6Q'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}



handleTheGuild() {
  const message = this.createChatbotMessage(<a> L’écosystème open source avancé de The Guild couvre tout ce dont vous avez besoin pour votre infrastructure API avec une plate-forme modulaire, open source et complète.<hr></hr><strong>L’écosystème</strong><br></br><br></br>Ses solutions modulaires avancées peuvent être progressivement adoptées en tant que bibliothèques open source individuelles ou en tant que plate-forme API unifiée complète. Découvrez leur boîte à outils API open source et durable qui couvre tout ce dont vous avez besoin pour faire évoluer votre infrastructure API  <a className="cla" href="https://www.the-guild.dev/#platform" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Vous pouvez en savoir plus sur The Guild <a className="cla" href="https://www.the-guild.dev/about-us" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Vous pouvez en savoir plus sur les services qu’ils fournissent <a className="cla" href="https://www.the-guild.dev/services" target="_blank" rel="noreferrer">ici</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphOps() {
  const message = this.createChatbotMessage(<a>GraphOps construit l’avenir du web. Sa mission est la suivante : Nous sommes motivés par la mission de construire un réseau non censuré, équitable et auto-souverain. Les données publiques sont au cœur de cette mission,  et nous nous épanouissons en créant des normes et des protocoles de données ouvertes pour alimenter la prochaine grande vague d’institutions et d’applications pour notre monde.<br></br><br></br>GraphOps est une société d’infrastructure de données blockchain. Ils extraient, transforment et servent les données blockchain via le protocole Graph.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphDay() {
  const message = this.createChatbotMessage(<a>Voici un récapitulatif du dernier Graph Day qui a eu lieu le 2 juin 2022 au Palais des Beaux-Arts historique de San Francisco.<hr></hr>Visitez <a className="cla" href="https://thegraph.com/graph-day/2022/" target="_blank" rel="noreferrer">Graph Day</a> et <a className="cla" href="https://thegraph.com/graph-hack/2022/" target="_blank" rel="noreferrer">Graph Hack</a> pour en savoir plus sur l’ensemble de l’événement.<hr></hr>La communauté Graph a pu se réunir et se concentrer sur le web3, les dapps, les protocoles et l’avenir d’Internet. Les principaux développeurs de protocoles et  de dapps ont montré comment la communauté web3 est pionnière de nouvelles formes de coordination humaine.<br></br><br></br>Mot de bienvenue par Eva Beylin, directrice de The Graph Foundation. Suivi d’une conférence inspirante de Yaniv Tal, co-fondateur de The Graph et PDG de Edge & Node. Ensuite, la communauté a reçu une présentation de Graph sur "Pourquoi la décentralisation est importante". Puis vinrent les annonces passionnantes, l’une après l’autre :<br></br>Avis de résiliation du Service hébergé<br></br>Annonce de Substream<br></br>Annonce de sortie de GEO<br></br>La communauté a ensuite été invitée à une table ronde avec Diana Chen, Camila Ramos, Chris Ewing et Derek Meyer. "Vous avez besoin d’un peuple."<br></br><br></br>Vous pouvez écouter le podcast de GRTiQ sur Graph Day et Graph Hack avec Tegan Kline, qui a eu lieu juste avant l’événement, <a className="cla" href="https://www.grtiq.com/grtiq-podcast-special-release-graph-day/" target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Découvrez l’avenir d’Internet en direct de la diffusion en direct du Graph Day 2022 Livestream ci-dessous.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=yLQmdM5DWSk&list=PLTqyKgxaGF3T2Ginisuf2nUY6yDi_WbT3&index=11'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsTheWeb() {
  const message = this.createChatbotMessage(<a>Le Web a beaucoup évolué au fil des ans, et ses applications aujourd’hui sont presque méconnaissables depuis ses débuts. L’évolution du Web est souvent divisée en trois étapes distinctes : Web1, Web2 et Web3.<hr></hr><strong>Web1</strong><br></br>Le Web 1.0 a été la première itération du Web. La plupart des participants étaient des consommateurs de contenu et les créateurs avaient tendance à être des développeurs qui créaient des sites Web contenant de l’information présentée principalement sous forme de texte ou d’image. Le Web 1.0 a duré approximativement de 1991 à 2004.<br></br>Web 1.0 consistait en des sites qui offraient du contenu statique au lieu de HTML dynamique. Les données et le contenu étaient servis à partir d’un système de fichiers statique plutôt que d’une base de données, et les sites n’avaient pas beaucoup d’interactivité.<br></br><br></br><strong>Web2</strong><br></br>La plupart d’entre nous ont principalement expérimenté le Web sous sa forme actuelle, communément appelée web2. Vous pouvez considérer web2 comme le web interactif et social.<br></br>Dans le monde web2, vous n’avez pas besoin d’être développeur pour participer au processus de création. De nombreuses applications sont conçues de manière à permettre à quiconque d’être un créateur.<br></br>Si vous voulez créer une pensée et la partager avec le monde, vous pouvez le faire. Si vous souhaitez télécharger une vidéo et permettre à des millions de personnes de la regarder, d’interagir et de la commenter, vous pouvez le faire aussi.<br></br>Web2 est simple, en fait, et en raison de sa simplicité, de plus en plus de gens à travers le monde deviennent des créateurs.<br></br>Le Web dans sa forme actuelle est vraiment génial à bien des égards, mais il y a certains domaines où nous pouvons faire beaucoup mieux.<br></br><br></br><strong>Web3</strong><br></br>Il existe des différences fondamentales entre web2 et web3, mais la décentralisation est au cœur de la situation.
  Au lieu de cela, les applications web3 fonctionnent sur des blockchains, des réseaux décentralisés de nombreux node (serveurs) peer-to-peer, ou une combinaison des deux qui forment un protocole crypto-économique. Ces applications sont souvent appelées dapps (applications décentralisées), et vous verrez ce terme fréquemment utilisé dans l’espace Web3
  <br></br><br></br>Pour en savoir plus sur Web1, Web2 et Web3, lisez <a className="cla" href="https://www.freecodecamp.org/news/what-is-web3/" target="_blank">ici</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoinbase() {
  const message = this.createChatbotMessage(<a>Comment déléguer vos jetons GRT avec Coinbase Wallet<br></br><br></br>Dans cet article, il vous apprendra à déléguer vos jetons GRT dans le protocole The Graph, en utilisant <a className="cla" href="https://www.coinbase.com/wallet" target="_blank">Coinbase Wallet</a>.<br></br><br></br>Pour lire le guide réalisé par les Graphtronautes, voir <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-delegate-your-grt-tokens-with-coinbase-wallet-85168f84e95e" target="_blank">ici</a>. Ou si vous préférez regarder un tutoriel vidéo, vous le trouverez ci-dessous.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCryptocurrencies() {
  const message = this.createChatbotMessage(<a>Le nom est une combinaison, ou acronyme, de cryptographie et de monnaie. Contrairement aux monnaies traditionnelles (généralement appelées « monnaies fiduciaires »), qui utilisent des billets et des pièces physiques, les crypto-monnaies sont entièrement numériques. Comme toute autre devise, vous pouvez utiliser la crypto-monnaie pour acheter des biens et des services, et vous pouvez la transférer entre amis et famille dans le monde entier. Cependant, la crypto-monnaie a quelques caractéristiques supplémentaires qui la distinguent des devises traditionnelles.<br></br><br></br>Lorsque vous déposez de la monnaie fiduciaire dans une banque, vous prêtez essentiellement votre argent à cette banque et vous avez confiance qu’elle vous le remboursera lorsque vous le demanderez. Bien que cela fonctionne généralement bien pour les deux parties, les banques profitent de votre argent en le prêtant à d’autres et en facturant des intérêts sur ces prêts. En outre, les banques facturent des frais supplémentaires, tels que des frais de retrait ou des frais de compte mensuels, et peuvent également avoir des exigences de solde minimum.<br></br><br></br>Une banque traditionnelle serait considérée comme centralisée, la crypto-monnaie est décentralisée, ce qui signifie qu’elle n’a pas une seule personne contrôlant tout; En fait, il y a des milliers de personnes qui aident à valider chaque transaction qui se produit sur une blockchain, ce qui signifie que vous avez un environnement sans confiance, un rapprochement amélioré des données et des risques. C’est une belle façon de dire que vous contrôlez vos propres actifs.<br></br><br></br>La confidentialité, la sécurité, la portabilité et la transparence accrues des crypto-monnaies signifient qu’il n’y a pas de place pour manipuler les transactions, modifier la masse monétaire ou ajuster les règles en cours de partie. Les crypto-monnaies ne sont pas une organisation, elles ne contrôlent pas leurs fonds; Vous pouvez être votre propre banque.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsABlockchain() {
  const message = this.createChatbotMessage(<a>La blockchain peut être considérée comme un registre utilisé pour suivre les transactions de crypto-monnaie de la même manière que les dépenses du chéquier sont suivies avec un enregistrement de chéquier. Une blockchain est un système d’enregistrement des transactions effectuées avec des crypto-monnaies, telles que l’ETH ou le Bitcoin. Les données de transaction sont stockées dans un bloc. Une fois qu’un bloc est plein, un nouveau bloc est créé qui fait référence au bloc précédent et s’enchaîne au bloc précédent ; d’où le terme blockchain.<br></br><br></br>Certaines blockchains, telles que Ethereum, sont maintenues à l’aide d’un réseau informatique peer-to-peer, permettant à tout utilisateur d’héberger et d’accéder à la blockchain de n’importe où dans le monde. Au fur et à mesure qu’une transaction se produit, elle est enregistrée et distribuée dans le grand livre de chaque utilisateur sur le réseau blockchain.<br></br><br></br>Ces ordinateurs individuels, lorsqu’ils sont utilisés ensemble, forment une base de données mondiale décentralisée pour stocker toutes les données de la blockchain. Décentralisé signifie qu’au lieu que les données soient gérées en un seul endroit et contrôlées par une seule entreprise ou personne, tous ceux qui utilisent le réseau les gèrent.<br></br><br></br>Les blockchains sont conçues pour être immuables, c’est-à-dire inaltérables. Une fois que quelque chose a été enregistré sur la blockchain, il ne peut pas être modifié ou inversé. Cela signifie que toute transaction sur la blockchain est permanente et qu’il y aura toujours un enregistrement disponible pour que tout le monde puisse le voir. La décentralisation combinée à la structure de données de la blockchain crée une chronologie permanente des événements.<br></br><br></br>Certaines banques exigent que vous les contactiez pour voir les transactions qui ont plus d’un mois dans votre compte. L’utilisation de la blockchain éliminerait le besoin de contacter votre banque, car toutes vos transactions seront déjà disponibles pour que vous puissiez les consulter.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSafe() {
  const message = this.createChatbotMessage(<a><strong>Est-ce cryptographique sécurisé?</strong><br></br>La sécurité des crypto-monnaies est un sujet très débattu. D’une part, les partisans soutiennent que la crypto-monnaie est plus sûre que la monnaie traditionnelle parce qu’elle n’est pas soumise au contrôle ou à la manipulation du gouvernement. D’autre part, les sceptiques affirment que la crypto-monnaie est vulnérable au piratage et au vol.<br></br><br></br>En fin de compte, la sécurité des crypto-monnaies dépend des pratiques de sécurité de l’utilisateur individuel et de la sécurité du réseau de crypto-monnaies. Par exemple, si vous stockez votre crypto-monnaie dans un portefeuille numérique qui n’est pas protégé par mot de passe, vous risquez d’être piraté.<br></br><br></br>De même, si le réseau n’est pas sécurisé, les cybercriminels peuvent voler vos crypto-monnaies. Par conséquent, il est important de faire des recherches avant d’investir dans des crypto-monnaies et d’être prudent lors de leur stockage ou de leur utilisation.<hr></hr><strong>La blockchain est-elle sécurisée?</strong><br></br>Avec les crypto-monnaies qui ne peuvent pas être contrefaites ou piratées, les technologies blockchain offrent une sécurité incroyable en plus de leur utilité. La nature décentralisée des blockchains et l’incapacité de modifier les informations qu’elles contiennent contribuent à rendre les blockchains résistantes à la manipulation, au piratage et aux transactions frauduleuses. Avec de nombreuses versions distribuées de blockchain sur le réseau, un pirate informatique aurait besoin de prendre le contrôle d’innombrables ordinateurs pour causer de réels dommages. Cela rend le piratage d’une blockchain presque impossible.<br></br><br></br>La mise en œuvre de la technologie blockchain pour alimenter le monde permet des marchés plus rapides, plus sûrs et plus transparents pour tous.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleEthereum() {
  const message = this.createChatbotMessage(<a>Ethereum est une technologie blockchain programmable développée par Vitalik Buterin à partir de 2013. Ethereum permet aux utilisateurs d’envoyer et de recevoir des crypto-monnaies, d’accéder et de créer des applications décentralisées connues sous le nom  de dapps, de gagner des récompenses grâce au staking et bien plus encore. L’accès gratuit aux services financiers et un accès internet plus privé et décentralisé sont quelques-uns des principaux objectifs de la fondation Ethereum.<br></br><br></br>Après sa conception, Ethereum a mis en place un système de gouvernance décentralisé sans une seule personne aux commandes. Ce manque de propriété rend presque impossible pour les gouvernements ou les organisations de vous refuser l’accès aux services sur Ethereum. Les applications sur Ethereum ne nécessitent pas toutes vos données personnelles pour les utiliser. Cela donne aux utilisateurs plus de contrôle sur leur vie privée et les garde en sécurité dans chaque transaction.<br></br><br></br>Ethereum est ouvert à tous, n’importe où, tant qu’ils ont accès à un portefeuille Ethereum, tel que Loopring Smart Wallet. Vous pouvez considérer un portefeuille Ethereum comme une application bancaire, sans qu’une banque ne contrôle vos fonds. Avec juste une connexion Internet, Ethereum est disponible pour tout le monde, offrant un accès aux services bancaires dans le monde entier.<br></br><br></br>Toutes les transactions sur la blockchain Ethereum sont alimentées par la crypto-monnaie native ether ou ETH. Chaque fois qu’un ETH est envoyé ou qu’un dapp est utilisé, les utilisateurs paient une somme modique dans ETH pour utiliser le réseau Ethereum. Ces frais sont utilisés pour aider à récompenser les mineurs pour la vérification des actions sur la blockchain. Les mineurs agissent en tant que gardiens en s’assurant que personne ne triche ou ne falsifie la blockchain et la sécurise. C’est ce qu’on appelle la preuve de travail. L’avenir d’Ethereum apporte une nouvelle méthode de protection de la blockchain dans laquelle les fonds sont promis ou déposés pour permettre aux utilisateurs d’agir en tant que gardiens des enregistrements blockchain. C’est ce qu’on appelle la preuve d’enjeu.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOW() {
  const message = this.createChatbotMessage(<a>La preuve de travail (PoW) est un algorithme de consensus pour la plupart des principales crypto-monnaies; C’est un moyen de sécuriser le registre d’une crypto-monnaie. PoW a été introduit par Satoshi Nakamoto pour la blockchain Bitcoin, ce qui en fait le premier algorithme de consensus, et reste dominant à ce jour.<br></br><br></br>Cependant, ce n’était pas la première fois que nous entendions parler de PoW, l’application Hashcash d’Adam Back  a été inventée en 1997 et utilisait une fonction de preuve de travail. L’un des grands avantages de ce système est qu’il évite les doubles dépenses. Ce terme est utilisé presque exclusivement pour l’argent numérique et les crypto-monnaies parce que vous ne pouvez pas dépenser le même argent physique deux fois, c’est-à-dire; Si vous alliez dans un magasin et payiez comptant pour un verre, vous ne seriez pas en mesure d’utiliser ce même argent dans un autre magasin parce que le premier magasin verrouillait l’argent dans la caisse enregistreuse.<br></br><br></br>Dans les crypto-monnaies ou toute monnaie numérique, il est possible d’envoyer une grande quantité de données rapidement et sans validation, vous auriez des gens qui pourraient dépenser assez vite pour tromper divers magasins en leur faisant croire qu’ils ont été payés et le grand livre serait rapidement ruiné. À petite échelle, cela pourrait fonctionner, mais lorsque 10 et 100 000 personnes opèrent sur une blockchain, cela devient rapidement compliqué.<br></br><br></br>Il serait fastidieux et inefficace d’agréger toutes les transactions une à la fois avec autant de personnes qui veulent trader, de sorte que ces transactions sont regroupées dans un bloc qui renvoie à la précédente et la référence, d’où le nom Blockchain. Cependant, ajouter à un bloc n’est pas gratuit, il y a des utilisateurs appelés mineurs qui aident à valider chaque bloc de transactions. Cela coûte de la puissance de calcul et de l’énergie réelle pour créer un hachage (pensez à une empreinte digitale) qui est pratiquement impossible à inverser.<br></br><br></br>En raison de la puissance de calcul élevée, les mineurs sont payés pour leurs services et les blocs sont envoyés à la chaîne. Avec la puissance de la crypto dans PoW, si vous essayez d’effectuer une transaction invalide, le réseau la rejettera automatiquement et paiera toujours les frais du mineur. C’est la beauté de la chose: il devient coûteux de tenter des transactions invalides, mais il est rentable d’agir honnêtement.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOS() {
  const message = this.createChatbotMessage(<a>Comme la preuve de travail, la preuve d’enjeu (PoS) est un algorithme de consensus basé sur le nombre de pièces misées. Le staking fait référence à l’engagement de fonds dans le système pour être un validateur de bloc; Les validateurs ne peuvent participer au processus de production de nouveaux blocs que si leurs pièces sont verrouillées. Les  fonds agissent alors comme garantie, ce qui signifie qu’un validateur malveillant perdrait vos fonds misés et perdrait l’accès au réseau.<br></br><br></br>PoS est une alternative au PoW qui présente certains avantages et inconvénients. Dans Proof of Work, seul le mineur est récompensé et tout le monde rivalise pour être celui qui présente le bloc valide, gaspillant ainsi beaucoup d’énergie. Le modèle de preuve d’enjeu atteint un consensus en tenant compte de la taille de la mise et de la durée de sa mise, puis en sélectionnant le validateur qui permet d’économiser beaucoup d’énergie et de temps.<br></br><br></br><table><tr className="indexer-table-header">
  <th><strong>Avantages</strong></th>
  <th><strong>Contre</strong></th>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Efficacité : Très peu d’énergie est utilisée pour protéger une chaîne de blocs.</td>
  <td>Scale: Il doit encore y  avoir un système PoS pour atteindre la taille d’Ethereum ou de Bitcoin.</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Rendement : Vous n’avez pas à résoudre des problèmes informatiques complexes, vous augmentez donc la vitesse des transactions.</td>
  <td>Moins sécurisé : Participer à un système PoS peut inciter la thésaurisation de pièces à avoir une attaque de 51%. Sur des blockchains suffisamment grandes, cela devient beaucoup moins probable.</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>LNivel : Vous n’avez besoin de dépenser de l’argent qu’une seule fois pour participer à un modèle de preuve d’enjeu. Un  système PoW nécessite un équipement matériel et une disponibilité continue.</td>
  <td>Centralisation: Il y a une incitation à avoir plus de jetons sur lesquels parier. Certaines blockchains ont commencé à punir cela et à inciter les petits validateurs.</td>
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
  const message = this.createChatbotMessage(<a><strong>Pièce</strong><br></br>En crypto-monnaie, le terme "monnaie" est utilisé pour décrire une monnaie native de sa propre blockchain (par exemple, Ether pour la blockchain Ethereum, Bitcoin pour la blockchain Bitcoin, etc.). Une monnaie est une monnaie numérique qui peut être utilisée de plusieurs façons :<br></br>En tant que forme de paiement (par exemple, transférer l’ETH à un autre pour un article ou un service), réserve de valeur (par exemple, certains considèrent Bitcoin comme un « refuge sûr » pour sa richesse), unité de compte (par exemple, des articles comme NFT peuvent être tarifés en ETH), et pour les blockchains qui utilisent la preuve de travail, la monnaie native est également utilisée pour payer les mineurs pour le traitement des transactions et la production de blocs.<br></br><br></br><strong>Symbolique</strong><br></br>Alors qu’une pièce est native de sa propre blockchain, un jeton est créé sur une blockchain existante. Chaque blockchain a son propre format pour les jetons. Par exemple, les jetons créés sur la blockchain Ethereum ont le préfixe ERC suivi d’un nombre (par exemple, ERC-20). Techniquement, n’importe qui peut créer un jeton, il est donc toujours recommandé de rechercher et de lire la tokenomique avant d’acheter.<br></br>Un jeton peut être fongible (échangeable) ou non fongible selon la norme que vous utilisez. Sur Ethereum, quelques exemples de jetons standard sont:<br></br><br></br>ERC-20<br></br>Standard couramment utilisé pour les jetons fongibles, ceux utilisés pour les monnaies numériques, les paris et le vote.<br></br><br></br>ERC-721<br></br>Standard utilisé pour les jetons non fongibles, tels qu’un NFT pour une œuvre d’art ou une chanson.<br></br><br></br>ERC-1155<br></br>Standard qui permet des opérations et des regroupements de transactions plus efficaces. Il peut représenter et contrôler n’importe quel nombre de types de jetons fongibles et non fongibles. Autrement dit, le jeton ERC-1155 peut remplir la même fonction qu’un jeton ERC-20 et ERC-721, et même les deux en même temps.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStablecoin() {
  const message = this.createChatbotMessage(<a>Un stablecoin est une crypto-monnaie conçue pour maintenir un prix de marché constant. Bien que les mécanismes exacts puissent varier de l’un à l’autre, les stablecoins résistent quelque peu à la volatilité du marché. Ils ne devraient pas subir de changements de prix importants, car leurs titres sont souvent rattachés à un autre actif tel que le dollar américain.<br></br><br></br>L’idée principale de l’utilisation d’un stablecoin est que vous obteniez les avantages des mondes fiat et crypto-monnaie. Vous pouvez vous protéger contre la nature volatile des marchés de la cryptographie et prêter vos stablecoins pour gagner des intérêts mieux que vous ne le feriez avec une banque ou un courtier.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCEX() {
  const message = this.createChatbotMessage(<a>Un échange centralisé (CEX) est un moyen de faciliter les échanges entre utilisateurs en maintenant un carnet d’ordres; Collection d’ordres d’achat et de vente passés par des investisseurs individuels. Les ordres sont d’acheter ou de vendre une certaine quantité de crypto-monnaie à un prix spécifique: un CEX agrégera ces ordres et les exécutera.<br></br><br></br>Une grande différence entre un CEX et les portefeuilles personnels ou un DEX est que les utilisateurs n’échangent pas réellement de crypto-monnaies ou de fiat entre eux. Les fonds sont déposés et l’échange prend en charge la garde des actifs et émet essentiellement un billet à ordre au commerçant. Cela présente des avantages, tels que des frais moins élevés et des échanges plus simples, mais aussi des inconvénients, tels qu’un manque de transparence qui permet des pratiques malveillantes telles que le blanchiment de trading et la manipulation des prix.<br></br><br></br>Étant donné que tous les fonds sont sous la garde de la bourse, les CEX sont une cible de choix pour les attaques potentielles et ont été attaqués à plusieurs reprises ces dernières années pour des centaines de millions de dollars. De plus, comme un CEX est hébergé quelque part, il peut y avoir des problèmes techniques ou des attaques qui peuvent entraîner des temps d’arrêt. Les fonds peuvent également être gelés et confisqués en raison de réglementations gouvernementales dans certains cas.<br></br><br></br> Bien qu’un CEX vous oblige à effectuer une connaissance du client, il est également utile à des fins fiscales d’avoir cette information facilement disponible et la plupart des échanges peuvent vous fournir facilement des documents fiscaux . Avoir un CEX prendre la garde de vos fonds présente des avantages si vous ne vous sentez pas à l’aise de les contrôler vous-même. Certains utilisateurs ont stocké des fonds dans leurs portefeuilles personnels et oublié des phrases initiales ou perdu leurs clés privées, perdant des millions de dollars en crypto-monnaies.<br></br><br></br> Quelques exemples de CEX populaires incluent Binance, Coinbase, Huobi et Kucoin.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDEX() {
  const message = this.createChatbotMessage(<a>Un échange décentralisé est un marché peer-to-peer où les transactions vont directement entre les traders. C’est le cœur de la décentralisation des crypto-titres: les banques, les courtiers ou tout autre intermédiaire officiel n’encouragent pas les transactions. Il existe des DEX populaires comme Uniswap et Sushiwap qui fonctionnent sur Ethereum L1.<br></br><br></br>La plus grande différence entre un échange centralisé (CEX) et un DEX est qu’un CEX permettra les échanges entre la monnaie fiduciaire et la crypto alors qu’un DEX ne le fera pas. Un CEX permettra le trading sur marge et fixera des ordres à cours limité qui sont traités par le carnet d’ordres; c’est similaire aux bourses comme le Nasdaq.<br></br><br></br>Un DEX est entièrement basé sur des contrats intelligents. Ils fixent les prix des crypto-monnaies de manière algorithmique et utilisent des fonds de liquidité (LP) pour faciliter les transactions qui s’installent directement sur la blockchain. Un DEX est normalement basé sur du code open source, ce qui signifie qu’il n’y a rien de caché sur son fonctionnement.<br></br><br></br>Vous trouverez plus de variété dans un DEX, DeFi est l’endroit idéal pour entrer les premiers LPs token. Cela va des jetons connus aux jetons aléatoires et parfois inutiles, assurez-vous de faire vos propres recherches lorsque vous investissez. Cela dit, le risque de piratage est considérablement réduit car les fonds d’un DEX sont stockés dans des portefeuilles personnels et non dans un magasin central; il y a eu plusieurs piratages sur CEX au fil des ans.<br></br><br></br>Un CEX exigera que vous connaissiez votre client l’identifie, un DEX n’exigera aucune information personnellement identifiable pour que vous restiez anonyme. De plus, bien que certains endroits ne puissent pas autoriser les achats de crypto-monnaie, un DEX ouvre la possibilité pour les personnes de ces régions.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLayerTwo() {
  const message = this.createChatbotMessage(<a>La couche 2 (L2) fait référence à un cadre ou un protocole secondaire qui s’appuie sur une blockchain existante. L’objectif principal d’un protocole L2 est d’aider à résoudre la vitesse de transaction et les difficultés de mise à l’échelle des principaux réseaux de crypto-monnaie, pour Ethereum, nous l’appelons le trilemme de mise à l’échelle Ethereum: mise à l’échelle, vitesse et décentralisation.<br></br><br></br>Ethereum traite actuellement ~ 13 transactions par seconde, tandis que les sociétés de cartes de crédit comme MasterCard et Visa traitent plus de 1700 tps et facturent des frais minimes. Si vous connaissez Square ou des services similaires pour les petites entreprises, vous n’imaginez jamais utiliser Ethereum seul pour effectuer des transactions. Imaginez essayer de payer et attendre 20 à 30 minutes pour valider le paiement, sans parler de payer des frais d’essence pour cette validation; c’est là que L2 entre en jeu et il y a plusieurs façons de le faire.<br></br><br></br>C’est plus rapide, moins cher et tout aussi sûr qu’Ethereum. Alors pourquoi tout le monde ne le fait-il pas? Eh bien, Optimistic Rollups souffre de délais d’achèvement / retrait plus longs, retenant généralement les fonds pendant 7 jours. Validium et  Plasma sont hors chaîne et n’ont donc pas la véritable sécurité d’Ethereum.  Les zkRollups sont  les meilleurs options car ils sont rapides et sécurisés dans la chaîne, mais la technologie requise pour les développer est très difficile.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKProof() {
  const message = this.createChatbotMessage(<a>Une preuve à divulgation nulle de connaissance (zkProof) est de pouvoir prouver quelque chose à quelqu’un sans transmettre aucune information supplémentaire, sauf le fait que c’est vrai. Vous n’avez pas besoin de prouver que vous avez connaissance de certains renseignements simplement en les divulguant; Le défi consiste à prouver la possession de connaissances sans révéler l’information elle-même.<hr></hr><strong> Applications</strong><br></br><br></br><strong>Finance:</strong> Vous pouvez utiliser zkProofs pour permettre aux clients de prouver que leur numéro secret se situe dans une plage connue. Par exemple, un demandeur de prêt peut prouver que son revenu se situe dans une fourchette admissible sans divulguer son salaire exact.<br></br><br></br><strong>Vote en ligne:</strong> Un zkProof vous permettrait de voter anonymement et de vérifier que votre vote a été inclus dans le décompte final.<br></br><br></br><strong>Authentification:</strong>Vous pouvez vous connecter à des sites sans échanger d’informations secrètes telles qu’un mot de passe.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?time_continue=18&v=fOGdb1CTu5c&feature=emb_logo'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSmartContract() {
  const message = this.createChatbotMessage(<a>Un "contrat intelligent" est simplement un programme qui fonctionne sur la blockchain Ethereum. Il s’agit d’une collection de code et de données qui réside à une adresse spécifique sur la blockchain; est un type de compte Ethereum. Ils peuvent maintenir un solde et envoyer des transactions sur le réseau, mais ils ne sont pas contrôlés par un utilisateur. Ils sont programmés pour faire exactement ce qu’on leur dit, en définissant des règles et en les appliquant automatiquement en fonction de leur code.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNFT() {
  const message = this.createChatbotMessage(<a>Introduit par Dieter Shirley en septembre 2017 et finalisé en juin 2018, l’ERC-721 a été conçu pour les jetons non fongibles. Ils sont uniques, aucun jeton n’est exactement le même, et ils se voient attribuer une variable uint256 appelée tokenId qui doit être unique. Cela pourrait représenter presque tout ce qui est unique au monde et nécessite une propriété démontrable:<br></br><br></br>Art numérique (GIF, objets de collection, musique, vidéos)<br></br>Un nom de domaine<br></br>Données d'une voiture<br></br>Billets pour un événement réel<br></br>Factures tokenisées<br></br>Documents juridiques<br></br>Dossiers médicaux<br></br>Signatures<br></br><br></br>Les NFT ont des propriétés spéciales:<br></br><br></br>Chaque jeton frappé a un identifiant unique qui est directement lié à une adresse Ethereum.<br></br>Ils ne sont pas directement échangeables avec d’autres jetons 1:1. Par exemple, 1 ETH est exactement la même chose qu’un autre ETH. Ce n’est pas le cas des NFT.<br></br>Chaque jeton a un propriétaire et cette information est facilement vérifiable.<br></br>Ils vivent sur Ethereum et peuvent être achetés et vendus sur un marché NFT basé sur Ethereum.<br></br><br></br>Cela signifie que si vous possédez un NFT:<br></br><br></br>Vous pouvez prouver que vous en êtes propriétaire.<br></br>Le jeton prouve que sa copie est l’original.<br></br>Votre clé privée est une preuve de propriété.<br></br>Personne ne peut le manipuler de quelque manière que ce soit.<br></br>Vous pouvez le vendre ou le garder pour toujours.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMining() {
  const message = this.createChatbotMessage(<a>L’extraction de crypto-monnaie fait référence au processus de vérification et de validation des transactions blockchain. Les mineurs résolvent des équations cryptographiques intenses et envoient de nouveaux blocs à la blockchain avec ces données. Les mineurs honnêtes et prospères reçoivent des frais de minage, ces frais sont connus sous le nom de frais de gaz sur Ethereum.<br></br><br></br> Au fur et à mesure que de nouvelles transactions blockchain sont effectuées, elles sont envoyées à un pool de mémoire (mempool). Le mineur vérifie la validité des transactions en attente et les organise en blocs. C’est comme si les gens vous envoyaient des transactions oralement et que vous les écrivez toutes sur un morceau de papier dans l’ordre: la feuille de papier dans cette métaphore est un bloc. Ce blocage doit être confirmé; Cela nécessite la résolution de problèmes mathématiques complexes et nécessite de nombreuses ressources de calcul. Une fois réussi, le bloc est envoyé à la chaîne et le mineur reçoit des récompenses.<br></br><br></br> Pour plus d’informations sur le fonctionnement de l’exploitation minière, voir <a className="cla" href="https://desk.zoho.com/portal/loopring/en/kb/articles/what-is-crypto-mining" target="_blank" rel="noreferrer">ici</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNodes() {
  const message = this.createChatbotMessage(<a>Les node sont un logiciel client. Il existe 3 types de node différents et chacun consomme des données différemment. En outre, il existe différentes stratégies de synchronisation qui permettent un temps de synchronisation plus rapide ; La synchronisation est la vitesse à laquelle vous pouvez obtenir des informations précises sur l’état d’Ethereum.<br></br><br></br><strong>Node complet</strong><br></br><br></br>Stocke des données complètes de la blockchain.<br></br>Vérifiez tous les blocs et tous les états tout en participant à la validation des blocs. Tous les états peuvent être dérivés d’un nœud complet.<br></br>Il dessert le réseau et fournit des données à la demande.<br></br>Les node partiels sont utiles car vous n’avez pas besoin de matériel puissant ou d’une bande passante élevée pour les exécuter en tant que nœud complet.<br></br><br></br><strong>Node partiel</strong><br></br><br></br>Contrairement à un nœud complet, les node partiels ne téléchargent que les en-têtes de bloc. Ceux-ci ne contiennent qu’un résumé des informations sur le contenu des blocs. S’il existe des informations supplémentaires requises, un node partiels peut les demander à partir d’un nœud complet. Cela permet au node partiels de vérifier les données qu’il reçoit par rapport à une racine d’état dans les en-têtes de bloc.<br></br><br></br><strong>Node d’archivage</strong><br></br><br></br>Toutes les informations stockées sur un nœud complet sont archivées dans des états historiques sur un nœud d’archivage. Si je voulais interroger des informations à partir d’un bloc aléatoire comme le bloc #222,222, j’utiliserais ce nœud. Les données sont évidemment massives. Les téraoctets de données dans un nœud de fichier peuvent être moins attrayants pour l’utilisateur moyen, mais utiles pour des services tels que les explorateurs de blocs, l’analyse de chaîne et les fournisseurs de portefeuille.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTokenBurn() {
  const message = this.createChatbotMessage(<a>Brûler des jetons signifie détruire une pièce ou un jeton de façon permanente, mais pourquoi feriez-vous cela? La technologie Blockchain responsabilise les utilisateurs, vous pouvez être auto-dépositaire: plein propriété de vos actifs. Vous n’avez pas besoin d’une banque ou d’une institution financière, les transactions ne sont pas limitées par des tiers et, dans la plupart des cas, l’offre est limitée avec le pouvoir d’être déflationniste car elle peut détruire des jetons.<br></br><br></br> L’enregistrement d’un jeton signifie spécifiquement que vous envoyez un jeton à une adresse gelée, appelée adresse d’enregistrement, qui ne peut pas être récupérée. Une adresse d’enregistrement n’aura pas de clé privée, il y a une adresse publique à envoyer mais pas de clés pour déverrouiller le portefeuille. C’est l’équivalent de placer votre argent physique dans un coffre-fort indéchiffrable que personne n’a le code d’accès pour déverrouiller.<br></br><br></br>La valeur d’un jeton est basée sur l’offre et la demande. Habituellement, plus la demande est élevée, plus la valeur est élevée. De plus, si l’offre est inférieure, la valeur est également plus élevée. Donc, quand il y a une offre fixe d’un jeton, il y a un impact sur la destruction d’une partie de cette fourniture. Cela peut être utilisé pour diverses raisons, telles que l’augmentation de la valeur du jeton ou la production de stabilité de la valeur.<br></br><br></br><strong>Augmenter la valeur du projet</strong><br></br>Les rachats d’entreprises sont courants dans le monde financier en plein croissance d’aujourd’hui; Les entreprises rachètent une partie de leurs propres actions et avoirs sur le marché pour aider à augmenter la valeur de l’offre restante. Un événement similaire s’est produit en 2021 lorsque Ethereum a racheté puis brûlé 1,3 million d’ETH qui étaient en circulation. L’objectif est de rendre l’ETH déflationniste dans le cadre d’un nouveau protocole, afin de s’assurer que les jetons Ethereum peuvent être une réserve de valeur efficace et augmenter en valeur au fil du temps en réduisant l’offre.<br></br><br></br><strong>Stabiliser la valeur</strong><br></br>Les stablecoins sont essentiels pour les crypto-monnaies et la DeFi dans son ensemble. Au sein de l’écosystème, ils fournissent un moyen de règlement et de détention, isolé de la volatilité des pièces et jetons ordinaires. Le compromis ici est d’utiliser une réserve centrale dans laquelle vous perdez la décentralisation. Les stablecoins algorithmiques  tentent de surmonter ce problème en contrôlant l’offre.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDAO() {
  const message = this.createChatbotMessage(<a>Cet acronyme signifie Decentralized Autonomous Body (Organisme autonome décentralisé). Il existe en tant que système de règles prédéfinies qui déterminent les actions qu’une organisation prendra. Ceci est différent des entreprises conventionnelles et repose plutôt sur du code open source et est entièrement exploité par la communauté. Cela signifie qu’il n’y a pas d’entité unique en charge, pas de conseil d’administration, et donc pas de centralisation du pouvoir.<br></br><br></br>Les règles sont construites comme des contrats intelligents qui régissent le travail collectif de leurs collaborateurs et des membres de la communauté. Ainsi, bien que le concept d’organisation décentralisée ne soit pas particulièrement nouveau, être capable d’automatiser ses mécanismes de travail et ses fonctions fait d’un DAO un concept si intéressant.<br></br><br></br> De nombreuses communautés utilisent les DAO pour des campagnes de collecte de fonds automatisées telles qu’une ICO (offre initiale de pièces), l’émission et la distribution de frais perçus sur un protocole, ou comme systèmes de prise de décision et de vote. De plus, tout cela se fait sans interaction humaine pour assurer un processus fiable et sûr.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKSnark() {
  const message = this.createChatbotMessage(<a>A zero-knowledge Succinct Non-interactive Argument of Knowledge - <strong>zkSNARK</strong><br></br><br></br>Décomposons-le:<br></br><br></br>Zero-knowledge - Nous avons examiné cela dans d’autres articles, mais la version courte prouve quelque chose sans que personne d’autre ne sache comment elle l’a prouvé, seulement que c’est prouvable.<br></br>Succinct - Bref et clair; Le test est nettement plus petit que les données qu’il représente.<br></br>Non-interactive - l’information va du testeur au vérificateur, il n’y a pas d’aller-retour.<br></br>Argument of Knowledge - La preuve est solide, il n’y a pas de testeur malveillant pour tromper le système sans posséder les connaissances pour sauvegarder sa déclaration.<br></br><br></br>Un SNARK nécessite un paramètre de confiance entre le testeur et le vérificateur. Il s’agit d’un ensemble de paramètres publics qui ressemblent aux règles d’un jeu. Ces paramètres sont générés lors d’une cérémonie de configuration de confiance. Il s’agit d’un calcul conjoint effectué dans un certain temps par un groupe de participants volontaires. Tant qu’un vérificateur se comporte honnêtement, les paramètres sont générés en toute sécurité, de sorte que plus il y a de parties impliquées, plus cette cérémonie peut être considérée comme fiable. Cette cérémonie doit avoir lieu pour chaque nouvelle version du produit.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKStark() {
  const message = this.createChatbotMessage(<a>A zero-knowledge Scalable Transparent Argument of Knowledge - <strong>zkSTARK</strong><br></br><br></br>Expliquer:<br></br><br></br>Scalable - Le test est relativement petit et la vérification prend moins de temps, même pour un grand nombre de tests, il est donc évolutif.<br></br>Transparent - Il n’y a aucune exigence pour une configuration fiable.<br></br>Argument of Knowledge - La preuve est solide, il n’y a pas de testeur malveillant pour tromper le système sans posséder les connaissances pour sauvegarder sa déclaration.<br></br><br></br>Les zkSTARK ont été créés par Eli-Ben Sasson, professeur au Technion-Israel Institute of Technology. La grande différence ici est qu’un zkSTARK ne nécessite pas une configuration initiale fiable: la cérémonie est discutée dans la section SNARK. Un STARK est moins coûteux en calcul qu’un SNARK et, en théorie, ce sont des ordinateurs quantiques. Alors, quel est l’inconvénient? La taille des tests est beaucoup plus grande qu’un SNARK et cela peut augmenter le coût des transactions en chaîne.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMetaverse() {
  const message = this.createChatbotMessage(<a>La première utilisation du mot est dans un roman de science-fiction de 1992 intitulé Snow Crash; C’est une combinaison des mots méta et univers. Le métavers est souvent lié à la technologie avancée de réalité virtuelle en raison des exigences croissantes de l’immersion. Bien que le métavers ne soit pas un concept de jeu, il s’est développé davantage dans cet espace. Un jeu appelé Second Life est souvent décrit comme le premier métavers et le roman Ready Player One (plus tard un film) a continué à augmenter les possibilités.<br></br><br></br>Idéalement, un vrai Metaverse ne prendra pas seulement en charge les jeux ou les médias sociaux, mais combinera les économies, l’identité numérique, le gouvernement décentralisé et d’autres applications. Pensez à la façon dont Roblox n’est pas seulement un jeu personnalisé, il fonctionne pour les événements virtuels comme les concerts et les réunions. Le jeu n’est pas seulement pour jouer, c’est pour traîner dans un espace virtuel.<br></br><br></br> La crypto s’intègre dans le métavers en fournissant l’immuabilité et la preuve de propriété. Pensez à la façon dont les NFT fonctionneraient dans ce cas; Les vêtements, accessoires, etc. numériques seraient vérifiables de manière sécurisée et rapide, le tout dans un environnement décentralisé. Les pièces dans le jeu pourraient prospérer et un utilisateur pourrait gagner de l’argent et le dépenser là-bas. Avec les portefeuilles, le métavers est très accessible et avec la blockchain en place, nous aurions un gouvernement digne de confiance de la même manière que nous votons dans la vie réelle pour des dirigeants.<br></br><br></br>Un seul métavers unifié est probablement un peu loin, mais il y a beaucoup de développements dans la bonne direction pour cela et la blockchain ouvrira la voie.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleArbitrum() {
  const message = this.createChatbotMessage(<a>Arbitrum est une solution de mise à l’échelle pour Ethereum qui réduit considérablement les coûts et la latence.  Arbitrum  a lancé Arbitrum One sur le réseau principal Ethereum, et l’équipe se prépare pour sa prochaine sortie publique. <br></br><br></br>Grâce à l’intégration avec Arbitrum, les services de requête d’hébergement et d’indexation de The Graph sont désormais disponibles en ligne.  Les développeurs d’Arbitrum One pourront désormais créer et publier des API ouvertes (subgraphes) que les applications pourront interroger à l’aide de GraphQL.<br></br><br></br>The Graph prend déjà en charge les données d’indexation pour Ethereum, IPFS, Celo, Avalanche, Fantom et Moonbeam. En outre, des milliers de développeurs ont déjà créé plus de 10 000 subgraphes pour des applications telles que DODO, MCDEX, Uniswap, Synthetic, Gnosis, Decentraland, etc. En ajoutant Arbitrum à cette liste, les efforts d’expansion de The Graph ont franchi une nouvelle étape pour unir l’écosystème Web3.Graph prend déjà en charge l’indexation des données pour Ethereum, IPFS, Celo, Avalanche, Fantom et Moonbeam. En outre, des milliers de développeurs ont déjà créé plus de 10 000 subgraphes pour des applications telles que DODO, MCDEX, Uniswap, Synthetic, Gnosis, Decentraland, etc. En ajoutant Arbitrum à cette liste, les efforts d’expansion de The Graph ont franchi une nouvelle étape vers l’unification de l’écosystème Web3.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStatistics() {
  const message = this.createChatbotMessage(<a>Si vous recherchez les données / statistiques en direct. Alors s’il vous plaît, soyez plus précis. Voici une liste de ce que vous pouvez demander:<br></br><br></br>Nombre de délégateurs actifs <br></br>Nombre de délégations actives<br></br>Nombre de détenteurs<br></br>Nombre de sugraphes<br></br>Nombre de curateurs<br></br>Nombre d'indexeurs actifs<br></br>Nombre total de frais de requête<br></br>Total des GRT détenus<br></br>Total de la GRT déléguée par les déléguateurs<br></br>Total des GRT signalés par les curateurs<br></br>Total des GRT délégués par les indexeurs<br></br> Total des GRT brûlés</a>
    ,    
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTMobile() {
  const message = this.createChatbotMessage(<a><strong>Deutsche Telekom et T-Mobile USA lancent un nouveau ChallengeT à  la recherche du développement Web3 grâce à la 5G</strong><br></br><br></br>La concurrence mondiale est de retour pour les startups, les développeurs et les chercheurs récompensant des solutions innovantes utilisant les réseaux 5G, cette fois à la recherche de technologies Web3 pour changer la façon dont le monde utilise Internet.<br></br><br></br>BONN, Allemagne et BELLEVUE, Washington - 2 novembre 2022 - Deutsche Telekom AG et T-Mobile US, Inc. (NASDAQ: TMUS) se sont associés pour lancer le troisième T Challenge annuel, la scène mondiale permettant aux innovateurs et aux perturbateurs de concourir pour un prix pour les meilleures solutions de protocole Blockchain public pour Web3. Les solutions créées par les participants exploiteront la puissance de la 5G pour donner vie au Web3, la 5G jouant un rôle important dans la façon dont les utilisateurs restent connectés à ces innovations.<br></br><br></br>Les soumissions sont officiellement ouvertes jusqu’au 20 janvier 2023. Six gagnants se partageront 600 000 € (à peu près le même montant en dollars américains) et un voyage tous frais payés à Bonn, en Allemagne, pour présenter leurs idées à Deutsche Telekom et T-Mobile US.<br></br><br></br> Pour lire l’article complet mentionné par The Graph, voir <a className="cla" href="https://www.t-mobile.com/news/network/2023-t-challenge" target="_blank" rel="noreferrer">ici</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSolana() {
  this.handleSubstreams = this.handleSubstreams.bind(this);
  const message = this.createChatbotMessage(<a><strong>The Graph Now Supports Solana with Substreams</strong><br></br><br></br>The Graph Foundation est heureuse d’annoncer son soutien à Solana avec <a className="cla" onClick={this.handleSubstreams}><strong>Substreams</strong></a>. La communauté des développeurs Solana peut maintenant commencer à utiliser The Graph pour créer des dapps ultra-rapides. En utilisant cette nouvelle technologie appelée  Substreams, les développeurs peuvent extraire et interpréter efficacement les données on-chain du réseau principal bêta de Solana  pour alimenter leurs applications. Fournir un soutien avec Substreams est la première étape pour apporter des subgraphes à Solana.<br></br><br></br>Les Substream, qui sont entièrement open source, permettent aux développeurs Solana de construire avec des données on-chain de manière entièrement nouvelle, grâce à leur rapidité et à leur efficacité. Les développeurs peuvent utiliser  des modules de subflow,  codés dans Rust, pour créer des flux de données spécifiques au protocole ou des ensembles de données analytiques de l’ensemble du marché. Ils peuvent également être utilisés pour générer des notifications en temps réel et afficher des informations de séries chronologiques détaillées. En sortant des jardins clos, les développeurs de streaming peuvent tirer parti des flux créés par d’autres pour gagner du temps et peuvent alimenter l’ensemble de l’écosystème web3 en rendant leur travail librement disponible et composable. En conséquence, les flux secondaires donnent lieu à des cas d’utilisation nouveaux et innovants au sein de la communauté des développeurs Solana.<br></br><br></br>Développé par StreamingFast, l’un des principaux développeurs de l’écosystème The Graph, Substreams ouvre la porte à de nombreux avantages, notamment : alimenter n’importe quel système de données via des récepteurs spécifiques à la technologie, réutiliser le code Rust de son programme Solana pour lire les données en chaîne, une expérience de débogage axée sur le laser, un raffinement communautaire et composable des flux de données et une réorganisation fiable – flux conscients.<br></br><br></br>Véritable technologie révolutionnaire, les subtransmission sont sur le point de débloquer les performances des subgraphes avec le traitement parallèle des données pour augmenter considérablement les vitesses de synchronisation. Grâce à un moteur parallèle évolutif horizontalement,  les subtransmission sont capables de multiplier par plus de 100 les performances d’indexation historiques.<br></br><br></br>Lire le blog complet, <a className="cla" href="https://thegraph.com/blog/indexing-solana-substreams/" target="_blank" rel="noreferrer">ici</a>.</a>
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
    const message = this.createChatbotMessage(<a><strong>The Graph a eu 2 ans le 17 décembre 2022!</strong><br></br><br></br>De nombreuses personnes du monde entier ont aidé à célébrer le lancement de The Graph Network sur le réseau principal et son engagement en faveur de la décentralisation en assistant à l'un des six événements d'anniversaire suivants organisés par la communauté. Le <strong>FOMO</strong> était réel! Vous pouvez écouter l'espace Twitter, <a className="cla" href="https://twitter.com/i/spaces/1vOGwMQpzPgxB" target="_blank" rel="noreferrer">ici</a>. Si vous l'avez manqué, ne vous inquiétez pas, vous pouvez vous rattraper en cliquant sur les boutons ci-dessous.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapour</strong></button><br></br><br></br>Au fur et à mesure que davantage de contenu sera partagé, ceux-ci seront mis à jour.</a>
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
      const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/colsongrteacher?s=21&t=G1z0E5ndRT5F549tsuRY2A' target="_blank" rel="noreferrer"><strong>Colson</strong></a> a accueilli The Graph, 2 Year Birthday Celebration à Amstel Boathouse à Amsterdam.<br></br><br></br>En attente de la publication du contenu de l'événement...<br></br><br></br>Vous pouvez également consulter les autres événements ci-dessous.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapour</strong></button></a>
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
        const message = this.createChatbotMessage(<a>The Graph, célébration d'anniversaire de 2 ans à Area3 El Salvador à Buenos Aires.<br></br><br></br>Vous pouvez suivre l'événement via ce fil Twitter réalisé par The Graph Espanol, <a className="cla" href='https://twitter.com/espanolgraph/status/1604257219628916736?s=46&t=MuGXfy1qv8hl2x-HpLcfAg' target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Vous pouvez également consulter les autres événements ci-dessous.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapour</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/Mardeni01' target="_blank" rel="noreferrer">Ahmad Mardeni</a> a animé The Graph, 2 Year Birthday Celebration à OPM Room à Dubaï.<br></br><br></br> Vous pouvez suivre l'événement via son fil Twitter, <a className="cla" href='https://twitter.com/mardeni01/status/1604127593007120384?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">ici</a> et <a className="cla" href='https://twitter.com/mardeni01/status/1604205523619946498?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Vous pouvez également consulter les autres événements ci-dessous.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapour</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/thegraphnations?s=21&t=2oybVC4qbnXUtBbgmnvSqw' target="_blank" rel="noreferrer">TheGraphNation</a> a accueilli The Graph, 2 Year Birthday Celebration au Lekki Coliseum (TLC) à Lagos.<br></br><br></br>Vous pouvez suivre l'événement via leur fil Twitter, <a className="cla" href='https://twitter.com/thegraphnations/status/1603831459629891585?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Vous pouvez également consulter les autres événements ci-dessous.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapour</strong></button></a>
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
            const message = this.createChatbotMessage(<a>The Graph, 2 Year Birthday Celebration à Edge & Node House of Web3 à San Francisco.<br></br><br></br>Vous pouvez suivre l'événement via leur Twitter<a className="cla" href='https://twitter.com/thehouseofweb3/status/1603952216540213248?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">ici</a> et <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603990278322507780?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Vous pouvez également consulter les autres événements ci-dessous.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapour</strong></button></a>
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
              const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/impranavm_?s=21&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">Pranav Maheshwari</a> a animé The Graph, 2 Year Birthday Celebration à Singapour.<br></br><br></br>Vous pouvez suivre l'événement via son fil Twitter, <a className="cla" href='https://twitter.com/impranavm_/status/1604024407789182976?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">ici</a> et <a className="cla" href='https://twitter.com/impranavm_/status/1603991615009304576?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">ici</a>.<br></br><br></br>Vous pouvez également consulter les autres événements ci-dessous.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Amsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubai</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button></a>
                ,
              );
              this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
              }));
            }




  handleNews() {
    const message = this.createChatbotMessage(<a>Si vous souhaitez vous tenir au courant des dernières nouvelles sur The Graph, des annonces de nouveaux partenariats et lire ce qui se passe au sein de la communauté, les liens ci-dessous peuvent vous aider.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">Le blog The Graph</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a><hr></hr>Assurez-vous également de suivre The Graph sur <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">Twitter</a>.</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

handleHello() {
  const message = this.createChatbotMessage(<a>Bonjour, comment puis-je vous aider aujourd’hui?</a>
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
  const message = this.createChatbotMessage(<a>Vous pouvez également utiliser les boutons ci-dessous et faire défiler vers le bas pour trouver une réponse!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Délégateur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Curateur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Indexeur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Dév de base</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgraph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Statistiques en direct</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Communauté</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Actualités</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Apprentissage de Web3</strong></button></a>
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
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Délégateur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Curateur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Indexeur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Dév de base</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgraph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Statistiques en direct</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Communauté</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Actualités</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Apprentissage de Web3</strong></button></a>
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
  }}><strong>Conseil</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCoreDevs();
  }}><strong>Dév de base</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFoundingMembers();
    this.handleButtonTheGraph();
  }}><strong>Membres fondateurs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHostedService();
    this.handleButtonTheGraph();
  }}><strong>Service hébergé</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonTheGraph();
  }}><strong>Sunsetting service hébergé</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonTheGraph();
  }}><strong>Données décentralisées</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoadMap();
    this.handleButtonTheGraph();
  }}><strong>Feuille de route</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoles();
    this.handleButtonTheGraph();
  }}><strong>Rôles de l'écosystème</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleJob();
    this.handleButtonTheGraph();
  }}><strong>Emplois</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBirthday();
    this.handleButtonTheGraph();
  }}><strong>Anniversaire</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphDay();
    this.handleButtonTheGraph();
  }}><strong>Graph Day</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleParticipantUpdate();
    this.handleButtonTheGraph();
  }}><strong>Mise à jour des participants</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGeo();
    this.handleButtonTheGraph();
  }}><strong>Geo</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonTheGraph();
  }}><strong>GitHub</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphFunding();
    this.handleButtonTheGraph();
  }}><strong>Financement</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleGraphQLApi();
    this.handleButtonTheGraph();
  }}><strong>API GraphQL</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleGRTTokenAddress();
    this.handleButtonTheGraph();
  }}><strong>Adresse du jeton GRT</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menu Catagories</strong></button></a>
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
  
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menu Catagories</strong></button></a>
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
  }}><strong>Guide du délégateurs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDelegateWithWallet();
    this.handleButtonDelegator();
  }}><strong> Déléguer avec portefeuille</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCoinbase();
    this.handleButtonDelegator();
  }}><strong> Déléguer á partir d´un portefeuille Coinbase</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFeesToDelegate();
    this.handleButtonDelegator();
  }}><strong>Frais de délégation</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleUnDelegating();
    this.handleButtonDelegator();
  }}><strong>Déléguer</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTenderize();
    this.handleButtonDelegator();
  }}><strong>Tenderize</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleChoosingIndexers();
    this.handleButtonDelegator();
  }}><strong>Choix d’un indexeur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonDelegator();
  }}><strong>Comparer les indexeurs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonDelegator();
  }}><strong>Nombre de délégateurs actifs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonDelegator();
  }}><strong>Nombre de délégations actives</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonDelegator();
  }}><strong> Total GRT délégués par les délégateurs</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menu Catagories</strong></button></a>
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
  }}><strong>Rôle du conservateur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorTools();
    this.handleButtonCurator();
  }}><strong>Outils de conservation</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonCurator();
  }}><strong>Nombre des curateurs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonCurator();
  }}><strong>GRT total signalé par les curateurs</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menu Catagories</strong></button></a>
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
  this.handleQueryFeesAndIndexingRewardCut = this.handleQueryFeesAndIndexingRewardCut.bind(this);
  this.handleActiveIndexerCount = this.handleActiveIndexerCount.bind(this);
  this.handleTotalDelegatedGRTByIndexersCount = this.handleTotalDelegatedGRTByIndexersCount.bind(this);
  this.handleAllocations = this.handleAllocations.bind(this);
  this.handle = this.handleAllocations.bind(this);

  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={() => {
    this.handleCurator();
    this.handleButtonIndexer();
  }}><strong>Choix des indexeurs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonIndexer();
  }}><strong>Comparer les indexeurs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBecomeIndexer();
    this.handleButtonIndexer();
  }}><strong>Devenir indexeur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerHardwareRequirements();
    this.handleButtonIndexer();
  }}><strong>Configuration matérielle requise pour un indexeur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerMap();
    this.handleButtonIndexer();
  }}><strong>Feuille de route de l’indexeur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerOfficeHours();
    this.handleButtonIndexer();
  }}><strong>Heures de bureau de l’indexeur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleQueryFeesAndIndexingRewardCut();
    this.handleButtonIndexer();
  }}><strong>Frais de requête et réduction des récompenses d’indexation</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAllocations();
    this.handleButtonIndexer();
  }}><strong>Affectations</strong></button><br class="no-show-monitor"></br>
 <button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonIndexer();
  }}><strong>Nombre d’indexeurs actifs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonIndexer();
  }}><strong>Total des GRT déléguer par rapport nombre d’indexeurs</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menu Catagories</strong></button></a>
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
  }}><strong>Subgraphes</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonSubgraph();
  }}><strong>Substreams</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonSubgraph();
  }}><strong>Service hébergé temporisé</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonSubgraph();
  }}><strong>Données décentralisées</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleVsSelfHosting();
    this.handleButtonSubgraph();
  }}><strong>Hébergé VS auto-hébergement</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSoulBound();
    this.handleButtonSubgraph();
  }}><strong>SoulBound</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleFireHose();
    this.handleButtonSubgraph();
  }}><strong>FireHose</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleQueryPython();
    this.handleButtonSubgraph();
  }}><strong>Requête utilisant Python</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonSubgraph();
  }}><strong>Messari</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonSubgraph();
  }}><strong>Nombre de subgraphes</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonSubgraph();
  }}><strong>GitHub</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menu Catagories</strong></button></a>
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
  }}><strong>Mise à jour des participants</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHoldersCount();
    this.handleButtonStatistics();
  }}><strong>Nombre de détenteurs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonStatistics();
  }}><strong>Nombre de délégateurs actifs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonStatistics();
  }}><strong>Nombre d’indexeurs actifs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonStatistics();
  }}><strong>Nombre des curateurs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonStatistics();
  }}><strong>Nombre de délégations actives</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalQueryFeesCount();
    this.handleButtonStatistics();
  }}><strong>Frais de requête</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonStatistics();
  }}><strong>Nombre de subgraphes</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonStatistics();
  }}><strong>Total GRT délegateur par les délégateurs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonStatistics();
  }}><strong>Total des GRT délégateur par les indexeurs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonStatistics();
  }}><strong>GRT total signalé par les curateurs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalStakedGRTCount();
    this.handleButtonStatistics();
  }}><strong>Nombre total de GRT enquêtés</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTBurnedCount();
    this.handleButtonStatistics();
  }}><strong>Nombre total de GRT brûlés</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menu Catagories</strong></button></a>
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
  }}><strong>Anniversaire de The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAdvocates();
    this.handleButtonCommunity();
  }}><strong>Graph Advocates</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphSocial();
    this.handleButtonCommunity();
  }}><strong>Graph Social</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePodcast();
    this.handleButtonCommunity();
  }}><strong>Podcast GRTiQ</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menu Catagories</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonNews() {
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  const message = this.createChatbotMessage(<a>Si vous souhaitez vous tenir au courant des dernières nouvelles concernant The Graph, des annonces de nouveaux partenariats et en savoir plus sur ce qui se passe au sein de la communauté, les liens ci-dessous peuvent vous aider.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">The Graph Blog</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a><br></br><br></br>Assurez-vous également de suivre The Graph sur <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">Twitter</a>.<hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menu Catagories</strong></button></a>
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
  }}><strong>Qu’est-ce que le Web?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCourses();
    this.handleButtonLearnWeb3();
  }}><strong>Cours</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLearnWeb3();
    this.handleButtonLearnWeb3();
  }}><strong>Apprendre Web3</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWhatIsABlockchain();
    this.handleButtonLearnWeb3();
  }}><strong>Chaîne de blocs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSafe();
    this.handleButtonLearnWeb3();
  }}><strong>Est-ce fiable?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWeb3DApp();
    this.handleButtonLearnWeb3();
  }}><strong>Web3 DApp</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCryptocurrencies();
    this.handleButtonLearnWeb3();
  }}><strong>Crypto-monnaies</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>Ethereum</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGas();
    this.handleButtonLearnWeb3();
  }}><strong>Gaz</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>Pièce ou jeton</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMining();
    this.handleButtonLearnWeb3();
  }}><strong>Miner</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleNFT();
    this.handleButtonLearnWeb3();
  }}><strong>NFT</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMetaverse();
    this.handleButtonLearnWeb3();
  }}><strong>Métavers</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSmartContract();
    this.handleButtonLearnWeb3();
  }}><strong> Contrat intelligent</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleStablecoin();
    this.handleButtonLearnWeb3();
  }}><strong>Stablecoin</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLayerTwo();
    this.handleButtonLearnWeb3();
  }}><strong>Deuxième couche</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenEconomics();
    this.handleButtonLearnWeb3();
  }}><strong>Économie des jetons</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenBurn();
    this.handleButtonLearnWeb3();
  }}><strong>Brûler les jetons</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
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
  }}><strong>Les femmes dans le Web3</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menu Catagories</strong></button></a>
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
  const message = this.createChatbotMessage(<a>Désolé, je n’ai pas trouvé la réponse. Pouvez-vous réessayer ou reformuler la question? Vous pouvez toujours consulter la banque de questions. Si par malheur je ne peux toujours pas vous aider, veuillez prendre 2 minutes pour remplir le formulaire de commentaires ci-dessous. Avec votre aide, cela améliorera mes connaissances et me permettra d’aider d’autres membres de la communauté GRT à l’avenir qui pourraient également avoir les mêmes questions et chercher des réponses. Merci
  
  {/* help start */}

  <br></br><br></br>Vous pouvez également utiliser les boutons ci-dessous et faire défiler vers le bas pour trouver une réponse!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Délégateur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Curateur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Indexeur</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Dév de base</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgraph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Statistiques en direct</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Communauté</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Actualités</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Apprentissage de Web3</strong></button>

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

export default FRAActionProvider;