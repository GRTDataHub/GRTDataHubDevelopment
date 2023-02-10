import React from 'react';
import '../../App.css';
import { ChatBotActiveDelegatorCountBar ,  ChatBotHoldersCountBar, ChatBotActiveDelegationCountBar, ChatBotSubgraphsCountBar, ChatBotCuratorsCountBar, ChatBotActiveIndexerCountBar, ChatBotTotalGRTDelegatedByDelegatorsBar, ChatBotTotalQueryFeesCountBar, ChatBotTotalGRTSignalledByCuratorsBar, ChatBotTotalStakedGRTCountBar, ChatBotTotalDelegatedGRTByIndexersCountBar, ChatBotTotalGRTBurnedCountBar } from "../mainBarCharts/BarChartsData";
import Embed from 'react-embed';

class ESPActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
// Charts / Graphs Start
handleActiveDelegatorCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>El recuento de Delegadores activos es <ChatBotActiveDelegatorCountBar />.</h4>
  <a className="cla" href="https://grtdatahub.com/ActiveDelegatorCount" target="_blank" rel="noreferrer">Haz clic aquí</a> para ver el recuento de Delegadores activos en vista completa.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveDelegationCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>El número de delegaciones activas es <ChatBotActiveDelegationCountBar />.</h4>
  <a className="cla" href="https://grtdatahub.com/ActiveDelegationCount" target="_blank" rel="noreferrer">Haz clic aquí</a> para ver el recuento de delegaciones activas en vista completa.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleHoldersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>El total de Holders es <ChatBotHoldersCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/HoldersCount" target="_blank" rel="noreferrer">Haz clic aquí</a> para ver el recuento de Holders en vista completa.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleSubgraphsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>El recuento de subgrafos es <ChatBotSubgraphsCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/SubgraphsCount" target="_blank" rel="noreferrer">Haz clic aquí</a> para ver el recuento de subgrafos en vista completa.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleCuratorsCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>El recuento de Curadores es <ChatBotCuratorsCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/CuradoresCount" target="_blank" rel="noreferrer">Haz clic aquí</a> para ver el recuento de Curadores en vista completa.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleActiveIndexerCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>El recuento de Indexadores activos es <ChatBotActiveIndexerCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/ActiveIndexerCount" target="_blank" rel="noreferrer">Haz clic aquí</a> para ver el recuento de Indexadores activos en vista completa.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTDelegatedByDelegators() {
  const message = this.createChatbotMessage(<a> 
  <h4>El importe Total de GRT Delegado por los Delegadores es de <ChatBotTotalGRTDelegatedByDelegatorsBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalGRTDelegatedByDelegators" target="_blank" rel="noreferrer">Haz clic aquí</a> para ver la cantidad total de GRT delegados por los Delegadores en vista completa.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalQueryFeesCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>El recuento total de tarifas de consulta es <ChatBotTotalQueryFeesCountBar/> GRT.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalQueryFeesCount" target="_blank" rel="noreferrer">Haz clic aquí</a> para ver el recuento total de tarifas de consulta en vista completa.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalGRTSignalledByCurators() {
  const message = this.createChatbotMessage(<a> 
  <h4>El Importe Total de GRT Señalado por los Curadores es de <ChatBotTotalGRTSignalledByCuratorsBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalGRTSignalledByCuradores" target="_blank" rel="noreferrer">Haz clic aquí</a> para ver la cantidad total de GRT señalada por los Curadores en vista completa.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalStakedGRTCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>La cantidad total de GRT en stake es <ChatBotTotalStakedGRTCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalStakedGRTCount" target="_blank" rel="noreferrer">Haz clic aquí</a> para ver la cantidad total de GRT en stake en vista completa.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTotalDelegatedGRTByIndexersCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>La cantidad Total de GRT Delegado por los Indexadores es de <ChatBotTotalDelegatedGRTByIndexersCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalDelegatedGRTByIndexersCount" target="_blank" rel="noreferrer">Haz clic aquí</a> para ver la cantidad total de GRT delegada por IIndexadores en vista completa.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTotalGRTBurnedCount() {
  const message = this.createChatbotMessage(<a> 
  <h4>La cantidad total de GRT quemada es <ChatBotTotalGRTBurnedCountBar/>.</h4>
  <a className="cla" href="https://grtdatahub.com/TotalGRTBurnedCount" target="_blank" rel="noreferrer">Haz clic aquí</a> para ver la cantidad total de GRT quemada en vista completa.</a>
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
  const message = this.createChatbotMessage(<a>Puedes ser una decisión difícil elegir un Indexador en quien delegar. La siguiente información y recursos le ayudarán. El hecho de que un Indexer tenga el APY más alto no significa que sea el mejor para usted. Haga su propia investigación, tómese su tiempo y aprenda qué buscar al elegir un Indexador en quien delegar. Esto asegurará que tenga confianza antes de delegar.<hr></hr>Ver el tutorial <a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">Elegir Indexadores</a> te ayudará a comprender lo que debes buscar.<br></br><br></br>La aplicación Graphtronauts permite a los Delegadores obtener información útil sobre el <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-chose-an-indexer-for-delegation-in-graph-protocol-a59725c16062" target="_blank">Indexador de su elección</a>. Simplemente inserta la dirección ETH del IIndexador de tu elección o echa un vistazo a las reseñas. También puedes comparar Indexadores dentro de la aplicación.<br></br><br></br>Una vez que estés listo para delegar, haz <a className="cla" onClick={this.handleDelegateGuides}><strong>clic en mí</strong></a> y te proporcionaré tutoriales de texto y video.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Choosing Indexers End
handleJob() {
  const message = this.createChatbotMessage(<a>¿Quieres trabajar en web3? ¡Buenas noticias, el ecosistema Graph está contratando! Hay oportunidades en The Graph Foundation y los equipos de core devs.Echa un vistazo <a className="cla" href="https://thegraph.com/jobs/#open-positions" target="_blank" rel="noreferrer">aquí</a> para ver las posiciones abiertas actuales.</a>
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
   Graph Network consta de tres roles que proveen servicios al ecosistema y brindan datos a aplicaciones Web3 como Uniswap, Aave y Synthetix: Indexadores, Curadores y Delegadores. Puedess encontrar documentación detallada para cada uno de los roles a continuación.<br></br><a className="cla" onClick={this.handleBecomeIndexer}>Indexadores</a><br></br><a className="cla" onClick={this.handleCurator}>Curadores</a><br></br><a className="cla" onClick={this.handleDelegateGuides}>Delegadores</a><br></br><br></br>Para garantizar la seguridad económica de The Graph Network y la integridad de los datos que se consultan, los participantes realizan stake usando Graph Tokens (GRT). GRT es un token de trabajo que es un ERC-20 en la blockchain de Ethereum, que se utiliza para asignar recursos en la red. Los Indexadores, Curadores y Delegadores activos pueden brindar servicios y obtener ingresos de la red, proporcionales a la cantidad de trabajo que realizan y su participación en GRT.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleEdgeAndNode() {
  const message = this.createChatbotMessage(<a>
    La idea detrás de The Graph Network fue concebida y moldeada por Graph Protocol, Inc. Después de haber lanzado la red principal de The Graph Network el 17 de diciembre de 2020, Graph Protocol, Inc. decidió cambiar su nombre a Edge & Node. La intención detrás del cambio de nombre fue resaltar la descentralización en curso en la red. Como tal, Edge & Node ya no es el equipo central que desarrolla y promueve el protocolo. En cambio, Edge & Node brinda servicios al ecosistema y esta involucrado con el protocolo.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTheGraphFoundation() {
  const message = this.createChatbotMessage(<a>
    La creación de The Graph Foundation se <a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank" rel="noreferrer">anunció</a> en octubre de 2020.<a className="cla" href="https://ca.linkedin.com/in/evabeylin?original_referer=https%3A%2F%2Fdocs.thegraph.academy%2Fthe-graph-ecosystem%2Forganizational-structure%2Fthe-graph-foundation" target="_blank" rel="noreferrer">Eva Beylin</a> se desempeña como directora de The Graph Foundation. Responsable de administrar el protocolo, The Graph Foundation proporciona coordinación y apoyo al ecosistema. El establecimiento de la fundación fue parte de la estrategia para crear una estructura organizativa independiente que esté descentralizada.<hr></hr>Miembros del Consejo:<br></br>Indexadores<br></br>Jim Cousins y Gary Morris<br></br>Usuarios<br></br>Justin J Moses y Kayvon Tehranian<br></br>Investigadores<br></br>Santiago Palladino y Yondon Fu<br></br>Sponsors<br></br>Michael Anderson y Spencer Noon<br></br>Equipo Inicial<br></br>Brandon Ramirez y Yaniv Tal</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTheGraphCouncil() {
  const message = this.createChatbotMessage(<a>
    The Graph Council <a className="cla" href="https://thegraph.com/blog/introducing-the-graph-council" target="_blank" rel="noreferrer">se introdujo</a> en octubre de 2020 como parte de los planes para descentralizar el protocolo. Los <a className="cla" href="https://thegraph.com/blog/inaugurating-council-and-grants" target="_blank" rel="noreferrer">miembros de The Graph Council</a> asumieron en diciembre de 2020. Council gobierna la red descentralizada de The Graph. Una multisig 6 de 10 equilibra los intereses de cinco grupos diferentes de partes interesadas en el ecosistema: Indexadores, holders de tokens, equipo inicial, usuarios y expertos en dominios técnicos.<br></br><br></br>El mandato de The Graph Council incluye las siguientes funciones básicas:<br></br>Las operaciones de The Graph Foundation<br></br>Grants y financiación del ecosistema<br></br>Actualizaciones del protocolo<br></br>Parametrización del protocolo<br></br>En el futuro, se planea descentralizar aún más el gobierno de The Graph, por ejemplo, reemplazando miembros individuales con nested multisigs o DAOs.</a>
    ,
  );
  
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Networok Roles End

handleBecomeIndexer() {
  const message = this.createChatbotMessage(<a><strong>Cómo convertirte  en un Indexador eficaz en The Graph Network</strong><hr></hr>Requisitos mínimos para Indexadores: hay cuatro requisitos principales necesarios para ser un Indexador eficaz en The Graph Network<br></br><br></br><strong>Stake</strong> -  Debes realizar stake de  al menos 100,000 GRT para ser un Indexador.<br></br><br></br><strong>Habilidades</strong> - Idealmente, los Indexadores deben tener experiencia en DevOps o experiencia en la operación de nodos de blockchain. Los Indexadores deben sentirse cómodos implementando servidores alojados o en la nube, o ejecutando su propio hardware de servidor. También se sugiere familiaridad con la ejecución de un nodo de validación y el trabajo en Linux.<br></br><br></br><strong>Hardware</strong> - Para equilibrar la eficiencia, el resultado de las consultas y la velocidad, muchos Indexadores suelen comenzar con una configuración de 16 CPU, un disco de 1 TB y 32 GB de RAM.<br></br><br></br><strong>Software de Infraestructura</strong> -  La familiaridad con las tecnologías de conholders y escalabilidad, como Docker y Kubernetes, es ventajosa; sin embargo, también es posible deployar el software de The Graph directamente en el hardware. Los requisitos de software de infraestructura incluyen una base de datos PostgreSQL, un Graph Node, un agente Indexador, un servicio Indexador, un servidor de métricas de Prometheus y potencialmente más, según sus requisitos y configuración específicos.<br></br><br></br>Para obtener información sobre las mejores prácticas para los Indexadores en The Graph Network, la participación ideal en la comunidad de Indexers, una configuración técnica de Indexer recomendada, recursos y guías, y comience su <strong>viaje de indexación</strong> con The Graph.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/c%C3%B3mo-convertirse-en-un-Indexador-eficaz-en-the-graph-network-77cd403b5004" target="_blank" rel="noreferrer">Cómo convertirse en un Indexador eficaz en The Graph Network</a></a>
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
  const message = this.createChatbotMessage(<a>Las recompensas de indexación se recopilan y distribuyen cada vez que los Indexadores cierran sus allocations. Mientras están activas, las allocations siguen acumulando recompensas continuamente. Los Indexadores pueden forzar el cierre de sus allocations manualmente o dejar que se cierren automáticamente después de la duración máxima de la allocations (cada 28 épocas).<br></br><br></br>28 épocas = ~26 dias<br></br><br></br>Las allocations acumulan recompensas continuamente mientras están activas. Las recompensas son recolectadas por los Indexadores y distribuidas cada vez que se cierran sus allocations. Eso sucede manualmente, cada vez que el Indexador quiere forzar el cierre, o automáticamente cada 28 épocas como máximo: vida útil máxima de allocations.<hr></hr>Para ver sus recompensas pendientes, visita la <a className="cla" href="https://www.graphtronauts.com/#/profile" target="_blank" rel="noreferrer">Graphtronauts</a> y agrega una billetera.</a>
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
  const message = this.createChatbotMessage(<a>Cada vez que se cierra una allocations (ya sea manualmente por un Indexador o automáticamente después de la duración máxima de la allocations), las tarifas de consulta son recogidas por el Gateway del protocolo. Las tarifas de consulta se acumulan en el Rebate Pool de tarifas de consulta del subgrafo. La cantidad distribuida de tarifas de consulta del Rebate Pool se calcula en función de las contribuciones de Indexer al Rebate Pool y su stake alocado en el subgrafo.<br></br><br></br>Una vez que se ha cerrado una allocations, los Indexadores solo pueden reclamar las tarifas de consulta después de que haya pasado el período de disputa. Una vez que un Indexador reclama con éxito las tarifas de consulta, los reembolsos se distribuyen al Indexador y sus Delegadores.<br></br><br></br>Siguiendo la función de producción de <a className="cla" href="https://en.wikipedia.org/wiki/Cobb%E2%80%93Douglas_production_function" target="_blank" rel="noreferrer">Cobb-Douglas </a>, Cobb-Douglas, se crea un fondo de reembolso que recompensa a todos los participantes de la red (como los Indexadores) en función de sus contribuciones a The Graph Network. La intención detrás del Rebate Pool es alentar a los Indexadores a realizar stake de GRT en una proporción aproximada a la cantidad de tarifas de consulta que ganan para la red. El Rebate Pool recibe una parte fija de las tarifas de consulta que se le aportan.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOI() {
  const message = this.createChatbotMessage(<a>La llamada Prueba de indexación (POI) verifica que los Indexadores hayan indexado de hecho los subgrafos en los que han alocado su stake. El POI de un bloque es un resumen de todas las transacciones del conjunto de entidades que detalla el deploy de un subgrafo. Para recibir recompensas de indexación, los Indexadores deben cerrar una allocation con una prueba de indexación (POI) válida que cumpla con los estándares establecidos por el estatuto de arbitraje. Los Indexadores no son elegibles para recompensas sin un POI válido. Al cerrar una allocation, el Indexador debe enviar un POI para el primer bloque de la época actual.<br></br><br></br>Las recompensas de indexación se recopilan y distribuyen cada vez que los Indexadores cierran sus allocations. Mientras están activas, las allocations siguen acumulando recompensas continuamente. Los Indexadores pueden forzar el cierre de sus allocations manualmente o dejar que se cierren automáticamente después de la duración máxima de la allocation (cada 28 épocas).<br></br><br></br>28 épocas = ~26 dias</a>
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
  const message = this.createChatbotMessage(<a>Los requisitos de hardware para participar en la red como Indexador se pueden encontrar en la siguiente tabla.<hr></hr><table><tr className="indexer-table-header">
    <th>Configuración</th>
    <th>Postgres (CPUs)</th>
    <th>Postgres (memoria en GB) </th>
    <th>Postgres (disco en TB) Máquinas virtuales (CPU) </th>
    <th>VMs  (CPUs) </th>
    <th>VMs (memoria en GB) </th>
  </tr>
  <tr className="indexer-table">
    <td>Pequeña</td>
    <td>4</td>
    <td>8</td>
    <td>1</td>
    <td>4</td>
    <td>16</td>
  </tr>
  <tr className="indexer-table">
    <td>Estándar</td>
    <td>8</td>
    <td>30</td>
    <td>1</td>
    <td>12</td>
    <td>48</td>
  </tr>
  <tr className="indexer-table">
    <td>Medio</td>
    <td>16</td>
    <td>64</td>
    <td>2</td>
    <td>32</td>
    <td>64</td>
  </tr>
  <tr className="indexer-table">
    <td>Largo</td>
    <td>72</td>
    <td>468</td>
    <td>3.5</td>
    <td>48</td>
    <td>184</td>
  </tr>
</table>
<br></br><br></br>Pequeño = suficiente para comenzar a indexar varios subgrafos<br></br>Estándar = configuración predeterminada<br></br>Medio = necesario para indexar 100 subgrafos y realizar entre 200 y 500 solicitudes por segundo<br></br>Grande = Requerido para indexar todos los subgrafos utilizados actualmente y atender solicitudes para el tráfico relacionado
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
  const message = this.createChatbotMessage(<a>Las allocations acumulan recompensas continuamente mientras están activas. Las recompensas son recolectadas por los Indexadores y distribuidas cada vez que se cierran sus allocations. Eso sucede manualmente, cada vez que el Indexador quiere forzar el cierre, o automáticamente cada 28 épocas como máximo: vida útil máxima de allocation.</a>
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
  const message = this.createChatbotMessage(<a>La documentación para Indexadores sobre cómo obtener el hash IPFS de un subgrafo a partir del id y viceversa se puede encontrar <a className="cla" href="https://thegraph.com/docs/es/developing/assemblyscript-api/" target="_blank" rel="noreferrer">aquí</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// IPFS End
handleTools() {
  const message = this.createChatbotMessage(<a>La <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">aplicación Graphtronauts</a> permite a los Delegadores obtener información útil sobre el Indexador de su elección. Simplemente inserta la dirección ETH del Indexador de su elección o eche un vistazo a las revisiones a continuación.<br></br><br></br>Otros sitios muy útiles son:<br></br><br></br><a className="cla" href="http://ww25.oracleminer.com/graph/indexer/0x7ab4cf25330ed7277ac7ab59380b68eea68abb0e?subid1=20220530-2214-27fd-afb4-5d675e9469e5s" target="_blank" rel="noreferrer">OracleMiner.com</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://graphscan.io/" target="_blank" rel="noreferrer">GraphScan.io</a><br></br><br></br><a className="cla" href="https://thegraph.stake-machine.com/d/-3BUUtbMz/thegraph-overview?orgId=1&refresh=5m" target="_blank" rel="noreferrer">Stake-machine.com</a><br></br><br></br><a className="cla" href="https://thegraph.live/" target="_blank" rel="noreferrer">TheGraph.Live</a><br></br><br></br><a className="cla" href="https://www.notion.so/Community-Guides-abbb10f4dba040d5ba81648ca093e70c" target="_blank" rel="noreferrer">Herramientas y guías comunitarias</a></a>
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
  const message = this.createChatbotMessage(<a>Cada vez que delegas GRT a un Iindexador, debes tener en cuenta una tarifa de <strong>delegación del 0,5%.</strong>  Por ejemplo, si delegas 10.000 GRT, se te cobrarán 50 GRT. Si tu Indexador elegido te ofrece un potencial de ganancias de 2 GRT por día. Bajo este supuesto, le tomaría 25 días (50 GRT / 2 GRT) para alcanzar el punto de equilibrio. Para tomar decisiones económicamente acertadas, debes calcular cuánto tiempo te llevará recuperar el impuesto del 0,5% de tu delegación.<br></br><br></br>Delegar a un Indexadorrequerirá que firmes <strong>dos transacciones ETH.</strong>. Supongamos también que solo deseas delegar $100. En este caso, los costos de transacción de delegar constituirían un total del 25 % de su cantidad de GRT. Esto significa que el tiempo hasta el punto de equilibrio aumentaría significativamente.<br></br><br></br>Si los Delegadores desean anular la delegación, no pueden acceder inmediatamente a sus tokens. Los tokens retirados de delegación están sujetos a un período de desbloqueo de 26 días, solo entonces los Delegadores pueden transferir libremente sus tokens o volver a delegarlos a otro Indexador.<br></br><br></br>La elección de un Indexador respetable, fiable y eficaz es una decisión importante que no debe tomarse a la ligera. Los Delegadores que no hacen su debida diligencia corren el riesgo de delegar a un Indexador con un desempeño deficiente. Del mismo modo, pueden correr el riesgo de elegir un Indexador que se involucre en prácticas dudosas o subsidie ​​a los Delegadores por un corto tiempo para publicitar un APY (Rendimiento Porcentual Anual) atractivo que no es realista a largo plazo.<br></br><br></br>Puedess encontrar documentación sobre los riesgos de ser un Delegador <a className="cla" href="https://thegraph.com/docs/es/network/delegating/#riesgos-de-la-delegacion" target="_blank">aquí</a>.<br></br>Para conocer el costo promedio de una transacción de delegación en este momento, visita la aplicación <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> y selecciona Tarifas.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Delegate Guides Start
handleDelegateGuides() {
  const message = this.createChatbotMessage(<a>Te proporcionaré lo que necesitas para convertirte en Delegador. La siguiente información y recursos te ayudarán.<hr></hr>Ver el <a className="cla" href="https://www.youtube.com/watch?v=oQijzTv7EQQ" target="_blank">tutorial Elegir Indexadores</a> te ayudará a comprender lo que debes buscar. Para asegurarte de tener confianza antes de delegar, ve los tutoriales a continuación para comprender mejor.<br></br><br></br> Puedess realizar stake de tus GRT en <a className="cla" href="https://thegraph.com/explorer/participants/indexers" target="_blank">network.thegraph.com</a> delegándolos a un Indexador de tu elección.<br></br>La cancelación de la delegación lleva 26 días porque esa es la duración máxima de una allocations.<br></br><br></br><hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/c%C3%B3mo-delegar-28cd43455c0f" target="_blank" rel="noreferrer">¿Cómo Delegar?</a><br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/la-guia-de-delegacion-the-graph-8b5f7f979671" target="_blank">La guía de delegación</a><br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/c%C3%B3mo-ganar-en-the-graph-network-da6f01bf4185" target="_blank">Cómo Ganar en The Graph Network</a><br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s" target="_blank">Staking con billetera Coinbase</a><br></br><br></br>Para conocer el costo promedio de una transacción de delegación, visite <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank">Graphtronauts</a> y seleccione Tarifas.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleQueryPython() {
  const message = this.createChatbotMessage(<a><strong>Cómo consultar el protocolo The Graph para datos on-chain usando Python</strong><br></br><br></br><a className="cla" href="https://hashnode.com/@townee" target="_blank">Tony Kipkemboi</a> ha escrito una increíble guía paso a paso sobre cómo consultar Subgraphs usando <strong>Python</strong>, GraphQL, y Subgrounds.<br></br><br></br>El blog completo se puede encontrar <a className="cla" href="https://townee.hashnode.dev/how-to-query-the-graph-protocol-for-on-chain-data-using-python" target="_blank">aquí</a>.<br></br><br></br>Puedes seguir a <a className="cla" href="https://twitter.com/ynot_kip" target="_blank">Tony</a> en Twitter para estar actualizado cuando su segundo blog se lance a la comunidad, "¿Cómo uso subgrounds cuando el Servicio Alojado esta limitado?".</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWeb3DApp() {
  const message = this.createChatbotMessage(<a>¿Cómo funcionan las dApps Web3?<br></br><br></br>Puedess encontrar "Una guía completa para la arquitectura Web3" <a className="cla" href="https://twitter.com/suhailkakar/status/1555894207570513920?s=21&t=FoLxHgWLO78VA_3VheV_DQ" target="_blank">aquí</a> en un hilo de Twitter extremadamente útil.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSoulBound() {
  const message = this.createChatbotMessage(<a>Construir dApps no debería ser doloroso.<br></br><strong><a className="cla" href="https://soulbound.xyz/" target="_blank">Soulbound Studio</a></strong> lo hace fácil.<br></br>No se requiere codificación.<br></br><br></br>Una interfaz unificada para diseñar, iterar y publicar interfaces y APIs Web3 completamente descentralizadas.<br></br><br></br>Si deseas ayudarlos a diseñar Soulbound Studio compartiendo las funciones deseadas y los informes de errores, únete a su <a className="cla" href="https://discord.com/invite/Eu3Eeh4J6a" target="_blank">Discord</a>.<br></br><br></br>Para mantenerte al día con sus últimos lanzamientos y noticias, siga a Soulbound Labs en <a className="cla" href="https://twitter.com/SoulboundLabs" target="_blank">Twitter</a>.<br></br><br></br>Para ver un tutorial en video sobre cómo puede crear Subgraphs dApps y Analytics en minutos usando Soulbound Studio sin ningún tipo de codificación, mire a continuación.<br></br><br></br>
  <Embed className="embed" isDark url='https://www.youtube.com/watch?v=IEmr280lGSU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIPhone() {
  const message = this.createChatbotMessage(<a>¡No guarde mucho dinero y Bored Apes en su teléfono en una hot wallet! Porque tu iPhone probablemente esté sincronizando tu información de MetaMask con iCloud. Está activado de forma predeterminada, <a className="cla" href="https://twitter.com/plumferno/status/1556187973200351234?s=21&t=a-4X_QM7BzHRKcJe8aPc_w" target="_blank">¡aquí</a> hay un hilo de Twitter extremadamente útil sobre cómo desactivarlo!</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Query Fees Cut and indexing reward cut Start
handleQueryFeesAndIndexingRewardCut() {
  const message = this.createChatbotMessage(<a>Los valores QueryFeeCut e IndexingRewardCut son parámetros de delegación que el Indexador puede establecer junto con cooldownBlocks para controlar la distribución de GRT entre el Indexador y sus Delegadores. Consulte los últimos pasos en Staking del protocolo para obtener instrucciones sobre cómo configurar los parámetros de delegación.<br></br><br></br>QueryFeeCut: el % de reembolsos de tarifas de consulta acumulados en un subgrafo que se distribuirá al Indexador. Si se establece en 95 %, de las tarifas de consulta del Rebate Pool de la tarifa de consulta cuando se reclame una allocation y el otro 5 % se destinará a los Delegadores.<br></br><br></br>IndexingRewardCut: el % de recompensas de indexación acumuladas en un subgrafo que se distribuirá al Indexador. Si se establece en 95 %, el Indexador recibirá el 95 % del pool de recompensas de indexación cuando se cierre una allocations y los Delegadores recibirán el otro 5 %.</a>
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
  const message = this.createChatbotMessage(<a>Graph Protocol, Inc. fue fundada en abril de 2018 por Jannis Pohlmann, Brandon Ramires y Yaniv Tal<br></br><br></br><strong>Jannis Pohlmann</strong>, Tech Lead & Co-Founder. <a className="cla" href="https://de.linkedin.com/in/jannispohlmann" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/jannispohlmann" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br><strong>Brandon Ramirez</strong>, Research Lead & Co-Founder. <a className="cla" href="https://www.linkedin.com/in/1stramirez" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla" href="https://twitter.com/rezbrandon?lang=en" target="_blank" rel="noreferrer">Twitter</a><br></br><br></br><strong>Yaniv Tal</strong>, Project Lead & Co-Founder. <a className="cla" href="https://www.linkedin.com/in/yanivtal9" target="_blank" rel="noreferrer">Linkedin.com</a> | <a className="cla"  href="https://twitter.com/yanivgraph" target="_blank" rel="noreferrer">Twitter</a></a>
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
  const message = this.createChatbotMessage(<a>Según Crunchbase.com <a className="cla" href="https://www.crunchbase.com/organization/the-graph/investor_financials" target="_blank" rel="noreferrer">Crunchbase.com</a>, The Graph ha recaudado un total de 69,6 millones de dólares en financiación en 7 rondas. Su último financiamiento se recaudó el 21 de enero de 2022 a partir de una ronda Venture - Series Unknown.<br></br><br></br>The Graph está financiado por 27 inversores. Blockwall Management y FinTech Collective son los inversores más recientes.<br></br><br></br>The Graph ha recaudado un total de $ 205 millones en un solo fondo de riesgo, The Graph Ecosystem Fund. Este fondo se anunció el 18 de febrero de 2022 y recaudó un total de $205 millones.</a>
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
  const message = this.createChatbotMessage(<a>The Graph es un protocolo de indexación para consultar redes como Ethereum e IPFS. Cualquiera puede crear y publicar API abiertas, llamadas subgrafos, lo que facilita el acceso a los datos. En resumen, The Graph proporciona datos que se pueden transformar, organizar y compartir entre aplicaciones para que cualquiera pueda consultarlos con solo presionar unas pocas teclas.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/introducci%C3%B3n-a-web3-y-the-graph-para-nuevos-usuarios-cb717d66184d" target="_blank" rel="noreferrer">Introducción a Web3 y The Graph para nuevos usuarios</a><hr></hr><br></br><a className="cla" href="https://fabris-86569.medium.com/network-the-graph-dd74e47ad96b" target="_blank" rel="noreferrer">The Graph Network</a><br></br><a className="cla" href="https://fabris-86569.medium.com/the-graph-network-en-profundidad-e8b749f4d282" target="_blank" rel="noreferrer">The Graph Network en Profundidad</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#graph-foundation" target="_blank" rel="noreferrer">The Graph Foundation</a><br></br><a className="cla" href="https://thegraph.com/ecosystem/governance/#advocates-dao" target="_blank" rel="noreferrer">Graph Advocates­DAO</a><br></br><br></br>Puedess leer 'La historia de Graph (2017–2020)' realizada por Graphtronauts, <a className="cla" href="https://blog.graphtronauts.com/the-graph-history-2017-2020-75cc40132992" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>Puedes leer 'Qué es The Graph y por qué es el próximo gran avance en la industria de la tecnología' elaborado por Graphtronauts, <a className="cla" href="https://blog.graphtronauts.com/what-is-the-graph-and-why-is-the-next-big-thing-in-the-technology-industry-25051fae4256" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>Para ver una explicación en video de lo que es el 'Google de blockchains', consulta <a className="cla" href="https://youtu.be/7gC7xJ_98r8" target="_blank" rel="noreferrer">aquí</a>.</a>
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
  const message = this.createChatbotMessage(<a>Con respecto a los airdrops, The Graph es uno de los pocos proyectos que realmente hizo que las personas trabajaran por sus tokens. El programa de Curadores fue muy intensivo y la gente pasó mucho tiempo aprendiendo sobre subgrafos, organizando datos y contribuyendo a la red. Esto coloca al equipo en una posición increíble de tener una comunidad bien capacitada e incentivada de constructores dedicados al crecimiento de Web3 en The Graph. En este momento, no hay airdrops planeados.</a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://twitter.com/CoinMarketCap/status/1341310792461918210" target="_blank" rel="noreferrer">CoinMarketCap Earn</a> y <a className="cla" href="https://twitter.com/coinbase/status/1339723594566406156?s=20" target="_blank" rel="noreferrer">Coinbase Earn</a> están regalando tokens GRT gratuitos para los participantes que aprendan sobre la red y respondan preguntas.<hr></hr>¡Psst! La mejor manera de ganar GRT gratis es delegando y ganando recompensas.</a>
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
  const message = this.createChatbotMessage(<a>Puedess encontrar la dirección de The Graph Github aquí: <a className="cla" href="https://github.com/graphprotocol/" target="_blank" rel="noreferrer">github.com/graphprotocol/</a></a>
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
  const message = this.createChatbotMessage(<a>La hoja de ruta oficial de I+D de Graph se puede encontrar <a className="cla" href="https://thegraph.com/blog/roadmap-2022" target="_blank" rel="noreferrer">aquí</a><hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/la-hoja-de-ruta-de-i-d-de-the-graph-8ba2fec1446b" target="_blank" rel="noreferrer">La hoja de ruta de I+D de The Graph</a><hr></hr><br></br><br></br>En este artículo, aprenderás cuatro áreas de desarrollo que verán la luz en 2023 y harán que la red The Graph sea aún más fuerte de lo que es hoy:<br></br>El ocaso del Servicio Alojado<br></br>Firehose<br></br>Substreams<br></br>Mover el protocolo a L2 con Arbitrum One</a>
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
  const message = this.createChatbotMessage(<a>The Graph utiliza GraphQL, un lenguaje de consulta de código abierto desarrollado por Facebook. Cada elemento del esquema tiene una descripción. Aprende GraphQL y luego podrás recuperar todos los datos que desees de la blockchain.<hr></hr>GraphQL es un lenguaje de consulta y tiempo de ejecución del lado del servidor para interfaces de programación de aplicaciones (API) que prioriza brindar a los clientes exactamente los datos que solicitan y nada más. GraphQL está diseñado para hacer que las API sean rápidas, flexibles y fáciles de usar para los desarrolladores. GraphQL API es la API que los desarrolladores pueden usar para acceder a los datos indexados por The Graph.</a>
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
  const message = this.createChatbotMessage(<a>Puedess ver el precio y todos los mercados abiertos en <a className="cla" href="https://coinmarketcap.com/es/currencies/the-graph/markets/" target="_blank" rel="noreferrer">CoinMarketCap</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDecentralisedData() {
  const message = this.createChatbotMessage(<a><strong>El amanecer de los datos descentralizados</strong><br></br><br></br>El ecosistema The Graph está tomando medidas para cumplir con las expectativas de los usuarios y al mismo tiempo dar la bienvenida al futuro vibrante y descentralizado. Para lograr este equilibrio, la interrupción del soporte del Servicio Alojado se divide en tres fases de transición por cadena que dependen de varios criterios de salida, incluidos, entre otros, la usabilidad, la estabilidad y la funcionalidad principal.<br></br><br></br>Las cadenas en el Servicios Alojados harán una transición gradual, lo que dará a los desarrolladores el tiempo adecuado para familiarizarse con la red descentralizada y migrar sus subgrafos.<br></br><br></br>Para brindar un mejor soporte a los desarrolladores, no se asignarán fechas específicas para cada fase  de transición de las cadenas del Servicio Alojado a The Graph Network. Abordar las necesidades de los desarrolladores y lograr los criterios clave de salida supera la finalización del soporte del Servicio Alojado. A medida que se alcancen los criterios de salida por cadena en el Servicios Alojado, esa cadena realizará la transición en tres fases. Mira el progreso del programa MIP para comprender cuándo los Indexadores están probando las cadenas, cuándo se admiten en la red y cuándo han comenzado las migraciones por cadena.<br></br><br></br>Para cada cadena en el Servicio Alojada, las tres fases de transición para habilitar el soporte en The Graph Network son:<br></br>Fase 1 (The Sunray): deshabilitar la creación de nuevos subgrafos en el Servicios Alojados para blockchains que tengan suficiente funcionalidad central en la red.<br></br>Fase 2 (The Sunbeam): deshabilitar las actualizaciones de subgrafos en el Servicios Alojados.<br></br>Fase 3 (The Sunrise): deshabilitar la consulta de subgrafos en el Servicios Alojados.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleVsSelfHosting() {
  const message = this.createChatbotMessage(<a><strong>Graph Network vs. Self Hosting</strong><br></br><br></br><underline>Alerta de spoiler:</underline> Graph Network es menos costoso, más fácil de usar y produce resultados superiores en comparación con la ejecución local de un graph node.<br></br><br></br>La red descentralizada de The Graph ha sido diseñada y perfeccionada para crear una sólida experiencia de indexación y consulta, y mejora cada día gracias a miles de colaboradores en todo el mundo. Los beneficios de este protocolo descentralizado no se pueden replicar ejecutando un graph node localmente. Graph Network es más confiable, más eficiente y menos costosa. Aquí hay un análisis:<br></br><br></br><strong>Por qué deberías usar The Graph Network</strong><br></br>60-98% menor costo mensual<br></br>Costos de configuración de infraestructura de $0<br></br>Tiempo de funcionamiento superior<br></br>Acceso a <ChatBotActiveIndexerCountBar/> Indexadores (y contando)<br></br>Soporte técnico 24/7 por parte de la comunidad global<br></br><br></br>Para leer un desglose de los beneficios de usar The Graph Network, lee <a className="cla" href="https://thegraph.com/docs/en/network/benefits/#breaking-down-the-benefits-of-using-the-graph-network" target="_blank" rel="noreferrer">aquí.</a>.<br></br><br></br><strong>Sin costos de configuración y mayor eficiencia operativa.</strong>Tarifas de instalación cero.<br></br>Comienza de inmediato sin costos generales ni de instalación.<br></br>Sin requisitos de hardware.<br></br>Sin interrupciones propias de la infraestructura centralizada y más tiempo para concentrarse en su producto principal.<br></br>No se necesitan servidores de respaldo, resolución de problemas ni costosos recursos de ingeniería.<br></br><br></br><strong>Confiabilidad y resiliencia</strong>La red descentralizada de The Graph brinda a los usuarios acceso a una redundancia geográfica que no existe cuando se hospeda un graph node. Las consultas se atienden de manera confiable gracias a un tiempo de actividad superior al 99,9 %, logrado por los Indexadores que aseguran la red a nivel mundial.</a>
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
   const message = this.createChatbotMessage(<a>Los subgrafos son estructuras de datos para organizar los datos que extraes de una blockchain. Son una forma de definir qué datos deseas indexar y cómo almacenarlos. Algunos de ellos hacen preagregaciones o cálculos en sus allocations, algunos simplemente almacenan datos simples similares a los que podrías encontrar on-chain. Luego, una entidad consulta esos datos. Esta entidad podría ser una dapp (empresa/desarrollador, etc.), un bot de Telegram, un bot de Discord o incluso un simple usuario que realiza una consulta para encontrar información.<br></br><br></br>La consulta de subgrafos desde el Servicio Alojado es actualmente de uso gratuito para todos. Para el protocolo descentralizado, el equipo espera que los costos de consulta estén alrededor de $0.00001 por consulta, pero es un mercado libre y cada Indexador puede establecer sus propios modelos de costos.<br></br><br></br>Puedess encontrar una hoja de referencia para desarrolladores para ponerte al día con los subgrafos en 15 minutos <a className="cla" href="https://drive.google.com/file/d/1J2zm06wZV0EwMEGBD48fGbaFKPPcCdZT/view" target="_blank" rel="noreferrer">aquí</a>.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/c%C3%B3mo-migrar-tu-subgrafo-de-ethereum-a-la-red-descentralizada-una-gu%C3%ADa-paso-a-paso-d5b67c14d90c" target="_blank" rel="noreferrer">Cómo Migrar Tu Subgrafo de Ethereum a la Red Descentralizada: Una Guía Paso a Paso</a><hr></hr><br></br><br></br>Puedes encontrar un tutorial para crear un subgrafo con Subgraph Studio <a className="cla" href="https://www.youtube.com/watch?v=HfDgC2oNnwo" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>Para obtener una descripción general y una guía paso a paso sobre la creación de un subgrafo realizada por <a className="cla" href="https://hashnode.com/@camiinthisthang" target="_blank" rel="noreferrer">Camila Ramos</a>, consulta <a className="cla" href="https://camiinthisthang.hashnode.dev/the-complete-guide-to-getting-started-with-the-graph" target="_blank" rel="noreferrer">aquí</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Subgraph End
// Gas Start
handleGas() {
  const message = this.createChatbotMessage(<a>Gas es el término para la cantidad de Ether (ETH), la criptomoneda nativa de Ethereum, requerida por la red para que un usuario interactúe con la red.<br></br><br></br>El precio del gas no es algo sobre lo que el equipo de The Graph tenga control. El precio del gas sube cuando la red Ethereum está congestionada o se usa mucho.<br></br><br></br>Para conocer el costo promedio de una transacción de delegación en este momento, visita la aplicación Graphtronauts <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">aquí</a> y selecciona Tarifas.<br></br><br></br>Para obtener una guía sobre cómo reducir el costo del gas para delegar sus tokens GRT, consulta <a className="cla" href="./ReduceGasESP" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>Para conocer las tarifas de gas de Ethereum, consulta <a className="cla" href="https://ethereumprice.org/gas/" target="_blank" rel="noreferrer">aquí</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePodcast() {
  const message = this.createChatbotMessage(<a><strong>¿Qué es GRTiQ?</strong><br></br><br></br><a className="cla" href="https://www.grtiq.com/" target="_blank" rel="noreferrer">GRTiQ</a> genera inteligencia de mercado a través de análisis, investigación, optimización y educación.<br></br><br></br><strong>Análisis de mercado</strong> - Proporcionan análisis y rendimiento del mercado para que los Delegadores puedan comprender mejor la dinámica del mercado.<br></br><br></br><strong>Investigación del Indexador</strong> - Realizan investigacion de Indexadores que los Delegadores pueden usar para identificar oportunidades y asociaciones.<br></br><br></br><strong>Optimización de recompensas</strong> - Crean y publican datos, guías y análisis para ayudar a los Delegadores a optimizar sus ganancias de recompensas.<br></br><br></br><strong>Educación del Ecosistema</strong> - Ofrecen recursos educativos continuos e información sobre todos los aspectos del ecosistema The Graph.<hr></hr>Puedess escuchar los podcasts de GRTiQ <a className="cla" href="https://www.grtiq.com/podcast/" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>Para mantenerte al día con GRTiQ, puedes seguirlos en <a className="cla" href="https://twitter.com/grt_iq" target="_blank" rel="noreferrer">Twitter</a>, <a className="cla" href="https://www.youtube.com/channel/UCxhFN47AlCDx1Qoaw1oSQ5A" target="_blank" rel="noreferrer">YouTube</a> e <a className="cla" href="https://www.instagram.com/thegraphiq/" target="_blank" rel="noreferrer">Instagram</a>.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/grt_iq/status/1617269631403831297?s=20&t=C_TtsLrGHQ0b92xQs527lQ'/></a>
   ,
   );
   this.setState((prev) => ({ 
     ...prev,
     messages: [...prev.messages, message],
   }));
 }

 handleIndexerMap() {
  const message = this.createChatbotMessage(<a>Para ver un mapa de todas las ubicaciones de los Indexadores, visite la aplicación <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> y seleccione Mapa.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

 handleIndexerCompare() {
  const message = this.createChatbotMessage(<a>Para comparar Indexadores, visite la aplicación <a className="cla" href="https://www.graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">Graphtronauts</a> y seleccione Lista.<br></br><br></br>Haga clic en el botón Comparar y luego seleccione hasta cinco Indexadores que le gustaría comparar.<br></br><br></br>Una vez que haya seleccionado, haga clic en el botón Comparar a continuación.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


 handleGraphSocial() {
   const message = this.createChatbotMessage(<a><strong><a className="cla" href="https://twitter.com/graphsocial1?s=21&t=f_BFECU3y4NfkRXocWA5kQ" target="_blank" rel="noreferrer">Graph Social</a></strong><br></br><br></br>Una reunión web3 internacional que impulsa el crecimiento del ecosistema The Graph. Organizado por <a className="cla" href="https://twitter.com/Mardeni01" target="_blank" rel="noreferrer">Ahmad Mardeni</a>.<br></br><br></br>La primera reunión de Graph Social web3 fue en Dubái el 8 de octubre de 2022, de 6 p. m. a 10 p. m. GST, con la asistencia de más de 100 personas. El evento cubre qué es The Graph, cuáles son los hitos logrados recientemente y cómo participar.<hr></hr><strong>Speakers</strong><br></br><br></br>Ahmad Mardeni<br></br>Salim Hadri<br></br>Shing Lam de <a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><br></br><a className="cla" href="https://twitter.com/9001sabella" target="_blank" rel="noreferrer">Isabella</a> from <a className="cla" href="https://twitter.com/routerprotocol" target="_blank" rel="noreferrer">Router Protocol</a><br></br><a className="cla" href="https://twitter.com/farhajmayan" target="_blank" rel="noreferrer">Farhaj Mayan</a> de <a className="cla" href="https://twitter.com/_buildspace" target="_blank" rel="noreferrer">Buildspace</a><br></br><a className="cla" href="https://twitter.com/dudhat_paresh" target="_blank" rel="noreferrer">Paresh Dudhat</a> de <a className="cla" href="https://twitter.com/infy_protocol" target="_blank" rel="noreferrer">Infy Protocol</a><br></br>Rashmi Padhy<br></br><br></br><strong>Sponsors</strong><br></br><br></br><a className="cla" href="https://twitter.com/tenderize_me" target="_blank" rel="noreferrer">Tenderize</a><br></br><a className="cla" href="https://twitter.com/OOKCLabs" target="_blank" rel="noreferrer">OOKC Labs</a><hr></hr>¡Puedess ver una entrevista del evento con Ahmad Mardeni y <a className="cla" href="https://twitter.com/MultiartStudio" target="_blank" rel="noreferrer">MultiArt Studio</a> a continuación!<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=KFUxrs10gpI'/></a>
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
  const message = this.createChatbotMessage(<a>The Graph Advocates es una iniciativa impulsada por la comunidad que sirve como un portal en web3 para personas de todo el mundo. Los Advocates tienen la oportunidad única de aprender y contribuir con la comunidad de The Graph y la misión de web3. Cualquiera puede convertirse en Advocate y posteriormente unirse a Graph AdvocatesDAO.<hr></hr><strong><underline>Roles de Advocate</underline></strong><br></br><br></br><strong>Evangelista de eventos</strong><br></br>Organiza eventos locales, asista e eventos regionales y participa en eventos comunitarios en persona o en línea.<br></br><br></br><strong>Creador de contenido</strong><br></br>Crea contenido sobre web3 y The Graph, incluidos artículos, videos, infografías, memes o GIF.<br></br><br></br><strong>Traduce de texto</strong><br></br>Traduzca The Graph y otra documentación, material y publicaciones sociales de la comunidad a otros idiomas.<br></br><br></br><strong>Cuidado de la comunidad</strong><br></br>Publica respuestas a preguntas o comparte recursos educativos en The Graph Forum, Telegram, Discord o Reddit.<br></br><br></br><strong>Profesor Técnico</strong><br></br>Enseña a otros cómo participar activamente y contribuir en web3 y el ecosistema The Graph.<br></br><br></br><strong>Web3 welcomer</strong><br></br>Acelerar una mayor educación y adopción de web3 y The Graph en todo el mundo.<hr></hr>Puedes solicitar ser un advocate de The Graph <a className="cla" href="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7" target="_blank" rel="noreferrer">aquí</a>.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/presentaci%C3%B3n-de-graph-advocatesdao-un-organismo-descentralizado-que-supervisa-las-subvenciones-ef8f00a7d382" target="_blank" rel="noreferrer">Presentación de Graph AdvocatesDAO: un Organismo Descentralizado que Supervisa las Subvenciones para la Comunidad y el programa Advocates</a><hr></hr>Para obtener más información sobre las subvenciones AdvocatesDAO, <a className="cla" onClick={this.handleAdvocateGrant}><strong>¡haz clic en mí!</strong></a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrant() {
  this.handleAdvocateGrantWithdraw = this.handleAdvocateGrantWithdraw.bind(this);
  const message = this.createChatbotMessage(<a><strong>Grants Graph AdvocatesDAO</strong><br></br><br></br>Puedes solicitar un grant de AdvocatesDAO <a className="cla" href="http://grants.graphadvocates.com/" target="_blank" rel="noreferrer">aquí</a>.<hr></hr><strong>El proceso de concesión</strong><br></br>Revisión inicial - Tu grant se publicará en el foro Graph AdvocatesDAO <a className="cla" href="https://forum.graphadvocates.com/" target="_blank" rel="noreferrer">aquí</a>. Un miembro de la DAO del Comité de Grants evaluará la elegibilidad de tu grant.<br></br>Debates públicos - Se invita a la comunidad en general a proporcionar comentarios sobre los grant y también a votar en el foro si la apoyan. Durante este proceso, los miembros de la comunidad o miembros de AdvocatesDAO pueden hacer preguntas en el Foro para recopilar más detalles sobre  el grant para comprender mejor su alcance. Esta es una fase importante del proceso a través del cual se forman las opiniones.<br></br>Presentación del Comité - Una solicitud de grant exitosa también incluirá una presentación en vivo ante el Comité de la DAO. Estas reuniones tienen lugar en el chat de voz pública del servidor <a className="cla" href="https://discord.gg/XgT3s9XY" target="_blank" rel="noreferrer">Discord de AdvocatesDAO</a> y están programadas en tres franjas horarias diferentes (10:00 | 18:00 | 22:00 UTC) todos los martes para adaptarse a diferentes zonas horarias en todo el mundo. Estos son puntos de contacto importantes para que los miembros del Comité de Grants ganen confianza sobre si apoyar o no un grant. Ven preparado para presentar una descripción general de tu grant y responder preguntas.<br></br>Decisión de concesión - Verás una serie de diferentes votos y encuestas que surgen a lo largo del proceso de concesión. Estas son señales increíblemente importantes que informan a los miembros de AdvocatesDAO en su voto. La decisión oficial de financiación de AdvocatesDAO para los grants exitoso tendrá lugar al final del proceso, donde todos los miembros de AdvocatesDAO votarán on-chain en <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2" target="_blank" rel="noreferrer">DAOHaus</a>. (nota: algunos grants más pequeñas pueden ser votadas  off-chain por el Comité de Grants)
  <br></br>Calendario previsto: la DAO se compromete a examinar adecuadamente todas las solicitudes de grant. La DAO también ha establecido plazos on-chain y off-chain que permiten una amplia participación de la comunidad que vive en diferentes zonas horarias con diversos grados de disponibilidad para participar.<hr></hr>Para obtener información sobre cómo retirar las subvenciones de AdvocatesDAO, <a className="cla" onClick={this.handleAdvocateGrantWithdraw}><strong>¡haz clic en mí!</strong></a></a>
    , 
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleAdvocateGrantWithdraw() {
  const message = this.createChatbotMessage(<a><strong>Proceso adicional de un AdvocatesDAO grant</strong><hr></hr>AdvocatesDAO tiene como objetivo procesar una solicitud de grant exitosa dentro de 1-2 meses. A continuación se muestra una descripción general de los pasos clave por los que pasa una solicitud de grant exitosa:<br></br>Revisión de la comunidad: ~10 días (varía según la participación de la comunidad)<br></br>Presentación del comité: ~7 días (incluye el tiempo permitido para la programación)<br></br>Votación off-chain del comité: ~7 días<hr></hr>El período de votación ha finalizado y tu solicitud de grant ha sido exitosa. Si es así, ¡Felicidades! Que esperar:<br></br><br></br><strong>Confirmación por correo electrónico</strong> - Esto es de Graph AdvocatesDAO, se te pedirá que completes KYC (Conozca a su cliente) a través del enlace dentro del correo electrónico. También se te enviará un Acuerdo de Contrato.<br></br><strong>Publicación en el foro</strong> - Un advocate también comentará sobre tu grant dentro del foro para confirmar que ha tenido éxito con tu grant.<br></br>KYC y acuerdo de grant: ~7 días<br></br>Votación on-chain: 14 días<br></br>Podrás ver tu propuesta de grant on-chain <a className="cla" href="https://app.daohaus.club/dao/0x64/0x3f0ad15fb1ee96f649499c6198713d11781d93f2/proposals" target="_blank" rel="noreferrer">aquí</a>.<br></br>Después de los 14 días, si has tenido éxito con la votación on-chain, podrás retirar tu grant.<hr></hr>Puedes encontrar una guía sobre cómo retirar tu GRT de la aplicación DAOhaus <a className="cla" href="https://docs.graphadvocates.com/community-grants/getting-grant-paid" target="_blank" rel="noreferrer">aquí</a>. O puedes ver el <strong>video tutorial a continuación.</strong>.Si necesitas mover tus fondos de Gnosis Chain a Ethereum, necesitas unir tu GRT, le sugerimos usar OmniBridge, al que puedes acceder <a className="cla" href="https://omni.gnosischain.com/bridge" target="_blank" rel="noreferrer">aquí</a>. Para ver un video que muestra cómo usar OmniBridge para mover tus fondos, puedes verlo <a className="cla" href="https://drive.google.com/file/d/1-YB8JfBu8mkYzc1wAqopGsBIonaLHwq6/view" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br><iframe className="embed" isDark src="https://drive.google.com/file/d/1toZih5GIO-h3deJKQz9lr_WBY3_QqX0U/preview" width="100%" height="480" allow="autoplay"></iframe></a>
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
  const message = this.createChatbotMessage(<a>A continuación encontrará el contrato GRT y sus detalles, asegúrese de verificar la información para evitar agregar un contrato malicioso.<br></br><br></br>Nombre: The Graph<br></br>Símbolo: GRT<br></br>Red: Ethereum (ERC20)<br></br>Contrato: 0xc944e90c64b2c07662a292be6244bdf05cda44a7<br></br>Decimales: 18<br></br><br></br>Puedes consultarlo en CoinMarketCap, <a className="cla" href="https://coinmarketcap.com/es/currencies/the-graph/" target="_blank" rel="noreferrer">aquí</a>.</a>
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
  const message = this.createChatbotMessage(<a>Cada vez que un Delegador quiere cancelar la delegación, sus tokens están sujetos a un período de desbloqueo de 26 días. Esto significa que no pueden transferir sus tokens ni ganar recompensas durante 26 días.<br></br><br></br>El período de lockup/desbloqueo está ahí para evitar que se produzcan ciertos ataques económicos. Tiene que coincidir con la vida útil máxima de allocations de 28 épocas. Dada la forma en que funciona actualmente el sistema de recompensas, un período más corto de desbloqueo de la delegación permitiría potencialmente que la delegación se "contabilice dos veces" en múltiples allocations simultáneas.<hr></hr>Cada vez que el Indexador quiera forzar su cierre (manualmente), o automáticamente cada máximo de 28 épocas: duración máxima de la allocation. Aquí es cuando se distribuyen las recompensas.<br></br><br></br>Una cosa a considerar también es elegir sabiamente un Indexador. Si elige un Indexador que no era confiable o que no estaba haciendo un buen trabajo, querrás cancelar la delegación, lo que significa que perderá muchas oportunidades de obtener recompensas, lo que puede ser tan malo como quemar GRT.<br></br><br></br>Para ver un tutorial sobre la anulación de la delegación de tokens GRT de The Graph, haz clic <a className="cla" href="https://www.youtube.com/watch?v=3GPY5On7vHc" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>Puedo ayudarte con la documentación y el tutorial sobre cómo elegir un Indexador.</a>
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
  const message = this.createChatbotMessage(<a>The Graph Academy tiene que ver con la educación y aprender más sobre The Graph. Sus cursos están diseñados para ayudarte a comenzar con The Graph y ampliar tu conocimiento sobre el ecosistema. Y como recompensa por aprender más, obtienes un certificado personalizado.<br></br><br></br><a className="cla" href="https://thegraph.academy/course/delegator-course/" target="_blank" rel="noreferrer">Curso de Delegador</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/subgraph-developer-course/" target="_blank" rel="noreferrer">Curso de desarrollador de subgrafos</a><br></br><br></br><a className="cla" href="https://thegraph.academy/course/curator-course/" target="_blank" rel="noreferrer">Curso de Curador</a><hr></hr>Para registrar una cuenta gratuita o iniciar sesión como invitado, visita el curso que te interesa y haz clic en "Empezar ahora" y "Registrarse". Hay una guía paso a paso <a className="cla" href="https://thegraph.academy/certificates/" target="_blank" rel="noreferrer">sobre</a> cómo hacer esto.<hr></hr>Si desea obtener más información sobre Web3, ¡pregúntame! "¿Cómo aprendo Web3 gratis?"</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLearnWeb3() {
  const message = this.createChatbotMessage(<a><strong>ACTUALIZADO</strong> - Recursos para aprender Web3 Dev <strong>GRATIS</strong><br></br><br></br>Acelera tu carrera en web3 a través de cursos, proyectos y código. Totalmente libre. Descúbrelo <a className="cla" href="https://university.alchemy.com/" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br><a className="cla" href="https://t.co/dm50GZ8lMP" target="_blank" rel="noreferrer">Ethereum</a><br></br><a className="cla" href="https://t.co/BfjoA5ynEt" target="_blank" rel="noreferrer">Solidity</a><br></br>Puedes encontrar una lista seleccionada de increíbles recursos, bibliotecas, herramientas y más de Solidity en <a className="cla" href="https://github.com/bkrem/awesome-solidity" target="_blank" rel="noreferrer">Awesome Solidity.</a><br></br><a className="cla" href="https://t.co/GUMDW8WAru" target="_blank" rel="noreferrer">Blockchain</a><br></br><a className="cla" href="https://t.co/kzVyI8leHK" target="_blank" rel="noreferrer">Oracles</a><br></br><a className="cla" href="https://t.co/QRwZn0CvPl" target="_blank" rel="noreferrer">CryptoZombies</a> es una escuela interactiva que te enseña todos los aspectos técnicos de las blockchains.<br></br>Ponte a prueba en <a className="cla" href="https://t.co/VVsmytm7CS" target="_blank" rel="noreferrer">SpeedRunEthereum.com</a> .<br></br>La serie <a className="cla" href="https://t.co/BDni1gjuvJ" target="_blank" rel="noreferrer">Road to Web3 </a> de Alchemy, un programa de desarrollo web3 de 10 semanas a su propio ritmo para ayudar a los nuevos desarrolladores de blockchain a pasar de principiantes a avanzados.<br></br>Puedes encontrar una guía completa de Web3 y el hilo de Twitter de la pila Blockchain de Suhail Kakar <a className="cla" href="https://twitter.com/suhailkakar/status/1552889172175642624?s=21&t=l_VTQ8NemlIWkCRne8f3bQ" target="_blank" rel="noreferrer">aquí</a>.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/la-gu%C3%ADa-completa-para-el-desarrollo-web3-de-pila-completa-593b35ffb7ea" target="_blank" rel="noreferrer">La Guía Completa para el Desarrollo Web3 de Pila Completa</a><br></br><br></br>Si prefiere aprender viendo tutoriales en video, entonces no hay nadie mejor para aprender que Nader Dabit. Encontrará el tutorial 'La guía completa para el desarrollo de Full Stack Web3' a continuación, asegúrate de consultar el resto de su canal de YouTube para obtener más contenido de aprendizaje de Web3.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=nRMo5jjgCr4'/></a>
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
  const message = this.createChatbotMessage(<a><a className="cla" href="https://twitter.com/evabeylin?s=21&t=xlTfEQdph_MfbuUlhFrb0Q" target="_blank" rel="noreferrer"><strong>Eva Beylin</strong></a> ha sido directora de The Graph Foundation desde octubre de 2020. Es inversionista y partidaria de la tecnología central de Ethereum a través de eGirl Capital y lidera el crecimiento de The Graph. Ella es una de las más influyentes de 2022 de CoinDesk, lea el blog completo <a className="cla" href="https://www.coindesk.com/consensus-magazine/2022/12/05/eva-beylin-most-influential-2022/" target="_blank" rel="noreferrer">aquí</a>. Ha liderado la distribución de más de $135 millones en subvenciones a los principales desarrolladores de The Graph y el capital de $50 millones de la fundación, dirigido por Tiger Global. Mírala hablar en Graph Day 2022 sobre Our Decenralization Journey, <a className="cla" href="https://m.youtube.com/watch?v=ef5LCku3IqQ" target="_blank" rel="noreferrer">aquí</a>. Hizo Forbes 2023 <a className="cla" href="https://www.forbes.com/profile/eva-beylin/?sh=34d711c95444" target="_blank" rel="noreferrer">30 Under 30</a>. Puedess conocer a Eva viendo una entrevista, <a className="cla" href="https://m.youtube.com/watch?v=IoqI6z5l9y8" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br><a className="cla" href="https://twitter.com/theklineventure?s=21&t=8FTTZesLJJUxAVnVbmLgQg" target="_blank" rel="noreferrer"><strong>Tegan Kline</strong></a> ha sido cofundadora y jefa de negocios de Edge & Node desde 2021. Después de recaudar $22,5 millones para ayudar a The Graph a construir una herramienta de código abierto que permita a los desarrolladores de ethereum entender cómo se usan sus productos, cofundó Edge & Nodo para ayudar a monetizar el proyecto. Edge & Node se financió originalmente con una participación del 8% del token GRT, que ahora vale alrededor de $ 650 millones. Kline también lideró las inversiones de Edge & Node en proyectos adyacentes a The Graph, por un total de $ 3.1 millones en 2021. Hizo Forbes 2022 <a className="cla" href="https://www.forbes.com/profile/tegan-kline/?sh=1465202462f7" target="_blank" rel="noreferrer">30 Under 30</a>. Puedes conocer a Kline visitando su sitio web, <a className="cla" href="https://www.tegankline.com/" target="_blank" rel="noreferrer">aquí</a>. Mira una entrevista con ella, <a className="cla" href="https://youtu.be/yONuFNxJVrc" target="_blank" rel="noreferrer">aquí</a>. O puede escuchar un podcast de GRTiQ <a className="cla" href="https://youtu.be/ZGHwTb92Rrg" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br><a className="cla" href="https://twitter.com/girlcalledreem?s=21&t=h9ZItE1mnaruz2uPiHkrLQ" target="_blank" rel="noreferrer"><strong>Reem Chahrour</strong></a> ha sido Gerente de Ecosistemas en The Graph desde 2021. Cualquiera que haya solicitado una Beca Graph o haya seguido el trabajo de cualquier beneficiario, ya se habrá encontrado con Reem. Es un activo importante para la comunidad de The Graph y su trabajo cubre una variedad de iniciativas importantes. Puedess escucharla en el Podcast de GRTiQ, <a className="cla" href="https://m.youtube.com/watch?v=3xfb0n99AzI" target="_blank" rel="noreferrer"> aquí</a>. Habla sobre su ingreso a las criptomonedas y su trabajo en The Graph Foundation, su consejo para aquellos que buscan solicitar una grant (y dónde a la fundación le gustaría ver más presentaciones), la diferencia entre los programas RFP y Grants, y el pronto -para lanzar el programa Graph Advocates.<br></br><br></br>Cuando alguien menciona a un Indexador, usa los pronombres masculinos. Con el deseo de destacar a las mujeres en Web3 que trabajan en equipos de Indexador o que ejecutan su propio Indexador dentro del ecosistema de The Graph, los Graphtronauts realizaron una serie de entrevistas con mujeres de Web3.<br></br><br></br><a className="cla" href="https://www.youtube.com/watch?v=WTdf9wEhSLg" target="_blank" rel="noreferrer">Mujeres de Web3 - Ana de GraphOps</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=0D4_17B6ypY" target="_blank" rel="noreferrer">Mujeres de Web3 - Anna de Citadel.One</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=chvIFfPfOjY" target="_blank" rel="noreferrer">Mujeres de Web3 - IIinca de Chainode Tech</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=Z7UnQotqLVA" target="_blank" rel="noreferrer">Mujeres de Web3 - Gabi de Stake2Earn</a></a>
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
  const message = this.createChatbotMessage(<a>A continuación encontrarás los servidores <strong>Oficiales</strong> de Discord.<br></br><br></br><a className="cla" href="https://discord.com/invite/vtvv7FP" target="_blank" rel="noreferrer">Graph Protocol</a><br></br><br></br><a className="cla" href="https://discord.com/invite/aZtCCKPp34" target="_blank" rel="noreferrer">Graph AdvocatesDAO</a><hr></hr>A continuación encontrará los servidores de Discord <strong>no oficiales</strong>.<br></br><br></br><a className="cla" href="https://discord.com/invite/zqrwSFFW3F" target="_blank" rel="noreferrer">Graphrica</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Discord End
// Telegram End
handleTelegram() {
  const message = this.createChatbotMessage(<a>A continuación encontrará el grupo <strong>Oficial </strong> de Telegram.<br></br><br></br><a className="cla" href="https://t.me/graphprotocol" target="_blank" rel="noreferrer">La comunidad oficial de Graph</a><hr></hr>A continuación encontrará los grupos de Telegram <strong>no oficiales</strong> de todo el mundo.<br></br><br></br><a className="cla" href="https://t.me/TheGraph_Germany" target="_blank" rel="noreferrer">The Graph - Alemania</a><br></br><a className="cla" href="https://t.me/thegraphfrenchchannel" target="_blank" rel="noreferrer">The Graph - Francés</a><br></br><a className="cla" href="https://t.me/thegraphenespanol" target="_blank" rel="noreferrer">The Graph - Español</a><br></br><a className="cla" href="https://t.me/thegraphRu" target="_blank" rel="noreferrer">The Graph - Rusia</a><br></br><a className="cla" href="https://t.me/thegraphitalia" target="_blank" rel="noreferrer">The Graph - Italia</a><br></br><a className="cla" href="https://t.me/graphprotocolTR" target="_blank" rel="noreferrer">The Graph - Turquía</a><br></br><a className="cla" href="https://t.me/TheGraphBR" target="_blank" rel="noreferrer">The Graph - Brasil</a><br></br><a className="cla" href="https://t.me/GraphProtocol_VN" target="_blank" rel="noreferrer">The Graph - Vietnam</a><br></br><a className="cla" href="https://t.me/Graph_Persian" target="_blank" rel="noreferrer">The Graph - Persa</a><br></br><a className="cla" href="https://t.me/IndianGraphCommunity" target="_blank" rel="noreferrer">The Graph - Indio</a><br></br><a className="cla" href="https://t.me/thegraphjapan" target="_blank" rel="noreferrer">The Graph - Japón</a><br></br><a className="cla" href="https://t.me/TheGraph_Dutch" target="_blank" rel="noreferrer">The Graph - Holandés</a><br></br><a className="cla" href="https://t.me/GRTARAB" target="_blank" rel="noreferrer">The Graph - Árabe</a><br></br><a className="cla" href="https://t.me/Thegraph_KR" target="_blank" rel="noreferrer">The Graph - Corea</a><br></br><a className="cla" href="https://t.me/thegraphpk" target="_blank" rel="noreferrer">The Graph - Pakistán</a><br></br><a className="cla" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">The Graph - Indonesia</a><br></br><a className="cla" href="https://t.me/thegraphbangladesh" target="_blank">The Graph - Bangladés</a><br></br><a className="cla" href="https://t.me/GraphProtocolCN" target="_blank">The Graph - China</a><br></br><a className="graphiql-link" href="https://t.me/TheGraphUkrainian" rel="noreferrer">The Graph - Ukraine</a><br></br><a className="graphiql-link" href="https://t.me/thegraph_pl" target="_blank" rel="noreferrer">The Graph - Poland</a><br></br><a className="graphiql-link" href="https://t.me/TheGraph_Nigeria" target="_blank" rel="noreferrer">The Graph - Nigeria</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
// Token Economics Start
handleTwitter() {
  const message = this.createChatbotMessage(<a>A continuación encontrará la página <strong>oficial</strong> de Twitter.<br></br><br></br><a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">The Graph</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}
handleTokenEconomics() {
  const message = this.createChatbotMessage(<a>El tokenomic de The Graph es bastante complejo. Además de un cronograma de emisión de tokens y un mecanismo de quema de tokens, The Graph Protocol desbloquea tokens adquiridos durante un período de 5 a 10 años.<hr></hr><table><tr className="indexer-table-header">
  <th>Suministro total de tokens = </th>
  <th> Suministro inicial de tokens + </th>
  <th> Emisión anual - </th>
  <th> Quema anual</th>
</tr>
</table>
{/* <br></br>The <strong>Annual Issuance</strong> formula is as follows:<br></br><br></br>networkGRTIssuance = 1000000011247641700<br></br><br></br>blocksYear = 2628000<br></br><br></br>Inflation = networkGRTIssuance * (10^-18) * blocksYear - 1<br></br><br></br>Inflation = 0,0299999999792... = 3% approx */}
<hr></hr><strong>Descripción general de la economía del token GRT</strong><br></br><br></br><table>
<tr className="indexer-table">
  <td><strong>Símbolo del token</strong></td>
  <td>GRT</td>
</tr>
<tr className="indexer-table">
  <td><strong>Nombre del Token</strong></td>
  <td>Graph Token</td>
</tr>
<tr className="indexer-table">
  <td><strong>Suministro inicial de tokens</strong></td>
  <td>10 mil millones de GRT</td>
</tr>
<tr className="indexer-table">
  <td><strong>Emisión Anual</strong></td>
  <td>~3% (para el año 1)</td>
</tr>
<tr className="indexer-table">
  <td><strong>Quema anual</strong></td>
  <td>~1% de tarifas e impuestos de consulta</td>
</tr>
</table>
  <hr></hr><table><tr className="indexer-table-header">
  <th>Suministro total de tokens = </th>
  <th> Suministro inicial de tokens + </th>
  <th> Emisión anual - </th>
  <th> Quema anual</th>
</tr>
</table><hr></hr><strong>Hitos de desbloqueo de tokens</strong> - Descripción general del progreso de desbloqueo de tokens en fechas específicas<br></br><br></br><table><tr className="indexer-table-header">
  <th>Aumento</th>
  <th>Aumentar (%)</th>
  <th>Desbloqueo acumulativo (%)</th>
  <th>Desbloqueo de GRT acumulativo</th>
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
</table><br></br><a className="cla" href="https://fabris-86569.medium.com/la-econom%C3%ADa-del-token-the-graph-grt-86c63b993239" target="_blank" rel="noreferrer">La economía del Token The Graph GRT</a></a>
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
  const message = this.createChatbotMessage(<a><strong>ACTUALIZADO</strong> - Aclarando el camino a seguir para el Servicio Alojado<br></br><br></br>El Servicio Alojado no finalizará abruptamente el soporte para todas las cadenas de manera abrupta. El Servicio Alojado seguirá siendo de uso gratuito por cadena, hasta que se alcance la funcionalidad principal para cada cadena.<br></br><br></br>Los desarrolladores de subgrafos no se verán privados de un servicio esencial del que dependen en la producción.<br></br><br></br>Para elaborar (y hacer una corrección) sobre el anuncio original que estimaba que la extinción del Servicio Alojado ocurriría a fines del primer trimestre de 2023:<br></br>El proceso de transición solo se aplica a las cadenas una vez que son compatibles con The Graph Network (que solo incluye la red principal de Ethereum en el momento de escribir este artículo, con Gnosis Chain próximamente).<br></br><br></br>Los comentarios siempre son bienvenidos a través de The Graph Discord, The Graph Forum y poniéndose en contacto conmigration@thegraph.foundation.<br></br><br></br>Después de casi 4 años de admitir subgrafos para dapps web3, el Servicio Alojado se cerrará en el primer trimestre de 2023 con la migración de dapps a la red descentralizada. El Servicio Alojado fue fundamental para el viaje de descentralización de The Graph, logrando el ajuste del producto al mercado y probando las características de los subgrafos con los desarrolladores.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/the-graph-network-el-amanecer-de-los-datos-descentralizados-649f5cd23f56" target="_blank" rel="noreferrer">The Graph Network: El amanecer de los datos descentralizados</a><hr></hr><br></br><br></br>Para la visita de documentación oficial, <a className="cla" href="https://thegraph.com/blog/sunsetting-hosted-service" target="_blank" rel="noreferrer">The Graph Foundation - The Road to Sunsetting the Hosted Service</a>.</a>
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
  const message = this.createChatbotMessage(<a>Durante Graph Day, Tenderize recibió un reconocimiento como el primer protocolo de staking líquido. Los usuarios pueden depositar $GRT y obtener tenderGRT (tGRT), que automáticamente acumula recompensas y se intercambia 1:1 por GRT a voluntad. Los holders de $GRT pueden delegar a través de Tenderize, otorgándoles tGRT. Una versión tokenizada de la posición en stake que combina automáticamente las recompensas y que se puede volver a cambiar instantáneamente a GRT.<br></br><br></br>Para comenzar, visita <a className="cla" href="https://app.tenderize.me/stakers/graph" target="_blank" rel="noreferrer">Tenderize</a>.<br></br><br></br>También puedes leer el blog Tenderize <a className="cla" href="https://blog.tenderize.me/" target="_blank" rel="noreferrer">aquí</a>.</a>
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
  const message = this.createChatbotMessage(<a>The Graph ahora llega a más personas en sus idiomas principales gracias a la ayuda de traductores talentosos.<br></br><br></br>Para obtener más información sobre la comunidad GRT, consulte a continuación.<br></br><br></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCommunity();
  }}><strong>Comunidad</strong></button>
  <br></br><br></br><a className="cla" href="https://thegraph.com/blog/get-involved-with-graph-community-web3/" target="_blank" rel="noreferrer">23 formas de participar en The Graph Ecosystem</a></a>
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
  const message = this.createChatbotMessage(<a>Geo es un navegador web3 descentralizado basado en The Graph, las páginas son abiertas y seleccionadas por la comunidad. Así que puedes votar sobre lo que es valioso y tu voto cuenta. Geo está resolviendo todos los problemas que tenemos actualmente con nuestros navegadores web2 y está abriendo una nueva ventana de innovación, una nueva Internet donde su privacidad es la máxima prioridad. No tienes que saber nada sobre criptografía o blockchain para poder usarlo. Esta es una experiencia para incorporar a los próximos 1.000 millones de usuarios a web3.<br></br><br></br>Geo está en versión beta y solo es compatible con dispositivos iPad y Mac en este momento, regístrate para la lista de espera beta <a className="cla" href="https://edgeandnode.com/geo/" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>Para leer un blog completo sobre Geo creado por <a className="cla" href="https://substack.com/profile/45913426-ahmad-mardni" target="_blank" rel="noreferrer">Ahmad Mardeni</a> consulta <a className="cla" href="https://ahmadmardeni.substack.com/p/geo-the-new-web3-browser-with-a-decentralization?s=r" target="_blank" rel="noreferrer">aquí</a>.<hr></hr><strong>ACTUALIZADO</strong> - Geo Génesis<br></br><br></br>Yaniv - Hace cinco años, un grupo de nosotros vimos la actividad que sucedía alrededor de Ethereum y decidimos contribuir construyendo The Graph. Vi el potencial de The Graph para ser un grafo de conocimiento global descentralizado de todo el conocimiento y la información públicos del mundo. Al utilizar la infraestructura pública para organizar y brindar información, podríamos tener mejores procesos abiertos y justos para influir en qué información se considera verdadera. Hoy tenemos una red descentralizada vibrante y The Graph está resolviendo el problema crítico de acceder de manera eficiente a los datos de la blockchain para miles de desarrolladores, pero aún tenemos que dar un paso más para que la visión completa cobre vida.<br></br><br></br>Puedess leer el blog completo, <a className="cla" href="https://www.geobrowser.io/blog/post/introducing-geo-genesis?s=09" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br><Embed className="embed" isDark url='https://twitter.com/i/status/1532418078700580869'/></a>
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
  const message = this.createChatbotMessage(<a>StreamingFast es una empresa de infraestructura de protocolo que se destaca en la construcción de una arquitectura cross-chain altamente escalable para la transmisión de datos de blockchain. El grant Core Dev de $ 60 millones es la primera de su tipo, pionera en una nueva frontera de innovación colaborativa donde las comunidades y las empresas se alinean para construir una Internet radicalmente más abierta.<br></br><br></br>The Graph Foundation otorga un grant de $ 60 millones a StreamingFast para unirse a The Graph como un equipo de Core Dev, lee <a className="cla" href="https://thegraph.com/blog/core-dev-grant" target="_blank" rel="noreferrer">aquí</a>.<hr></hr>Substreams es una poderosa tecnología de indexación de blockchain, desarrollada para The Graph Network.<br></br><br></br>Para encontrar documentación sobre SubStreams, consulte <a className="cla" href="https://substreams.streamingfast.io/" target="_blank" rel="noreferrer">aquí</a>.<br></br>Únete al servidor <a href="https://discord.com/invite/jZwqxJAvRs" target="_blank" rel="noreferrer">StreamingFast Discord server</a> o échales un vistazo <a className="cla" href="https://www.streamingfast.io/" target="_blank" rel="noreferrer">aquí</a>.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a href="https://fabris-86569.medium.com/streamingfacts-comprendiendo-los-costos-de-actualizar-un-subgrafo-ad1f1f6c8514" target="_blank" rel="noreferrer">StreamingFacts: Comprendiendo los Costos de Actualizar un Subgrafo</a><br></br><br></br><a href="https://fabris-86569.medium.com/the-graph-foundation-otorga-una-subvenci%C3%B3n-de-60-millones-a-streamingfast-para-unirse-a-the-graph-b981ddd2ee2b" target="_blank" rel="noreferrer">The Graph Foundation otorga un grant de $ 60 millones a StreamingFast para unirse a The Graph como un equipo Core Dev.</a><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=qWxffTKpciU'/></a>
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
  const message = this.createChatbotMessage(<a><strong>Una comunidad para Delegadores, construida por Delegadores.</strong><br></br>Los Graphtronauts son un grupo dedicado a facilitar el chat para aquellos que desean holder $ GRT y hablar sobre los fundamentos del proyecto The Graph. No solo son la comunidad no oficial más grande de holders de $GRT a largo plazo para el ecosistema The Graph, sino que su objetivo es ayudar a las personas en su viaje para convertirse en Delegadores de The Graph.<br></br><br></br><strong>'Nos levantamos levantando a otros' - Graphtronauts | Fundada el 16 de enero de 2021</strong><br></br><br></br>Obtén más información sobre los Graphtronauts escuchando este <a className="cla" href="https://www.grtiq.com/grtiq-podcast-35-the-graphtronauts/" target="_blank" rel="noreferrer">podcast de GRTiQ</a> con Baghe y Chris Ewing.<br></br>Y este <a className="cla" href="https://www.grtiq.com/grtiq-podcast-90-paolo-diomede/" target="_blank" rel="noreferrer">podcast de GRTiQ</a> con Paolo Diomede.<br></br>Puedess unirte a la comunidad a través de los siguientes enlaces:<br></br><a className="cla" href="https://t.me/graphtronauts" target="_blank" rel="noreferrer">Telegram</a><br></br><a className="cla" href="https://twitter.com/graphtronauts" target="_blank" rel="noreferrer">Twitter</a><br></br><a className="cla" href="https://www.graphtronauts.com/#/" target="_blank" rel="noreferrer">Aplicación Graphtronauts</a><br></br><a className="cla" href="https://old.graphtronauts.com/" target="_blank" rel="noreferrer">Sitio web</a><br></br><a className="cla" href="https://www.youtube.com/channel/UCPAUeNaRtBV-jdSKY8wmcXg" target="_blank" rel="noreferrer">YouTube</a><br></br><a className="cla" href="https://www.reddit.com/r/Graphtronauts/" target="_blank" rel="noreferrer">Reddit</a><hr></hr>¡El Graphtronauts Indexador (<a className="cla" href="https://thegraph.com/explorer/profile/0x0c3aab9f49c01070ec359aae4778fcbb01d2fbef?view=Indexing" target="_blank" rel="noreferrer">graphtronauts-indexer.eth</a>) ya está disponible y listo para las delegaciones! Vea el Tweet a continuación para obtener más información, únase a su <a className="cla" href="https://t.co/dDUb7NHaPY" target="_blank" rel="noreferrer">Discord</a> y síganos en Twitter para obtener actualizaciones.<br></br><Embed className="embed" isDark url='https://twitter.com/graphtronauts_x/status/1593310558798979072?s=20&t=2FCQMWbItkh1MnXmrHBVIA'/>
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
  const message = this.createChatbotMessage(<a>Si desea delegar GRT a través de Metamask. Si aún no lo ha hecho, <a className="cla" href="https://metamask.io/download/" target="_blank" rel="noreferrer">descarga MetaMask</a>. Si necesitas ayuda con esto, puede encontrar una guía <a className="cla" href="https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>Puedes ver un video tutorial paso a paso sobre cómo delegar GRT a un Indexador <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">aquí</a>.<br></br>Si prefieres seguir la guía de texto, puedes leerla <a className="cla" href="https://thegraph.academy/delegators/how-to-delegate-grt-tokens/" target="_blank" rel="noreferrer">aquí</a>.<hr></hr>Puedes usar <strong>WalletConnect</strong> para delegar en The Graph Protocol.<br></br>Puedes encontrar una guía paso a paso sobre cómo hacer esto <a className="cla" href="https://thegraph.academy/delegators/delegating-walletconnect/" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>En lugar de la hot wallet de Metamask, también puede usar una cold wallet, como Ledger, para delegar tu GRT. Las cold wallet pueden agregar otra capa de seguridad, ya que generalmente requieren la confirmación de transacciones del dispositivo físico. Puedes conectar Metamask a tu billetera de hardware a través de Metamask Browser Extension. Asegúrate de tener abierta la aplicación ETH en tu dispositivo Ledger y de tener permitidos los datos de contrato dentro de la aplicación ETH de tu dispositivo.<br></br><br></br>Para delegar tus tokens GRT usando una billetera de hardware conectada a MetaMask, lee un tutorial <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-delegate-your-grt-tokens-with-an-hardware-wallet-aec7751cd5d5" target="_blank" rel="noreferrer">aquí</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCurator() {
  const message = this.createChatbotMessage(<a><a className="cla" href="https://thegraph.com/docs/es/network/curating/" target="_blank" rel="noreferrer">Los Curadores </a> no necesitan poseer habilidades o conocimientos técnicos complejos. Todo lo que se necesita es la capacidad de realizar transacciones a través de MetaMask. Del mismo modo, los Curadores no están obligados a realizar stake de una cantidad mínima requerida de GRT, a diferencia de los Indexadores. Los Curadores deben comprender las tendencias del ecosistema Web3 y ver si un subgrafo proporciona información útil. También es útil para un curador poder identificar problemas críticos que podrían significar que un subgrafo este roto.<br></br><br></br>Las siguientes guías te brindarán toda la información que necesita saber antes de señalar un subgrafo y cómo hacerlo con confianza.<br></br><br></br>Esta <a className="cla" href="https://medium.com/@paulieb.eth/tips-and-tricks-to-evaluate-and-determine-if-a-subgraph-is-legitimate-c67f16e2205a" target="_blank" rel="noreferrer">guía</a> del curador sobre "Consejos y trucos para evaluar y determinar si un subgrafo es legítimo" es el mejor lugar para comenzar. Una vez que haya leído la guía y haya visto los tutoriales a continuación, estará en una excelente posición para señalar tu primer subgrafo.<br></br><br></br>Esta <a className="cla" href="https://medium.com/@paulieb.eth/the-graph-curation-bb17bf8b8fa9" target="_blank" rel="noreferrer">guía</a> también hecha por PaulieB sobre 'Curación. Una guía breve y dulce que explica qué es, cómo hacerlo y recursos útiles para ayudarlo a tener éxito.'<br></br><br></br>Únete a <a className="cla" href="https://t.me/CurationStation" target="_blank" rel="noreferrer">$GRT Curation Station</a>, una comunidad creada por Curadores, para Curadores. Puedes buscar más ayuda aquí si es necesario.<br></br><br></br>Los siguientes videos tutoriales fueron creados por <a className="cla" href="https://thegraph.com/explorer/profile?id=0x87eba079059b75504c734820d6cf828476754b83&view=Indexing" target="_blank" rel="noreferrer">DataNexus</a> sobre  Curación:<br></br><a className="cla" href="https://www.youtube.com/watch?v=-7qWi2do-1E" target="_blank" rel="noreferrer">¿Qué es un Curador para The Graph?</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=unzQvSZIORg" target="_blank" rel="noreferrer">Verificación de un subgrafo</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=zJswFILfADg" target="_blank" rel="noreferrer">Cómo señalar un subgrafo</a><br></br><a className="cla" href="https://www.youtube.com/watch?v=u76dxQPdS9c" target="_blank" rel="noreferrer">en la transacción de señal</a><hr></hr>Si deseas algunas herramientas útiles de Curator, solo pregunta.<hr></hr>La delegación toma 28 épocas (no días).<br></br>Cada época tiene una longitud de 6646 bloques.<br></br><br></br>Antes de ETH PoS, cada bloque tenía una duración de aproximadamente 13 segundos, por esta razón, 28 épocas tenían aproximadamente 28 días.<br></br>13s * 6646b * 28e = ~28 días<br></br><br></br>Ahora cada bloque tarda unos 12,06 segundos.<br></br>12s * 6646b * 28e = 26 días</a>
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
//   const message = this.createChatbotMessage(<a><strong>The Graph’s Multi-Chain Incentivized Program</strong><br></br><br></br>The MIPs program bootstraps Indexers to add support for new chains on the decentralized network, enabling migration of multi-chain subgraphs. This is a critical expansion of support for dapps and subgraph migration ahead of the <a className="cla" onClick={this.handleSunsettingHostedService} target="_blank" rel="noreferrer">sunsetting of the hosted service</a>.<br></br>The MIPs program has allocated 0.75% of the GRT supply (75M GRT), with 0.5% to reward Indexers who contribute to bootstrapping the network and 0.25% allocated to migration grants for subgraph developers using multi-chain subgraphs. By the end of Q1 2023, the hosted service for all network-supported chains will be sunset, so the MIPs program will work in parallel to subgraph migration efforts.<br></br>The first chain to be supported on the decentralized network was the <a className="cla" href='https://twitter.com/gnosischain' target="_blank" rel="noreferrer">Gnosis</a>Chain! New chains will be announced throughout the MIPs program, based on Indexer readiness, demand, and community sentiment. To read more about MIPs Performance & Scoring and Eligibility Requirements, see <a className="cla" href='https://thegraph.com/blog/mips-multi-chain-indexing-incentivized-program/' target="_blank" rel="noreferrer">here</a>.<hr></hr>The announced chains so far can be found below.<br></br><br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1613980493787312128?s=20&t=_FqJsNOl6vvyIYt3B0KCfg' target="_blank" rel="noreferrer"><strong>Gnosis</strong></a> beta integration complete<br></br>
//   <a className="cla" href='https://twitter.com/graphprotocol/status/1615443632252948480' target="_blank" rel="noreferrer"><strong>Polygon</strong></a> integration underway<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772854838231040?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Arbitrum</strong></a> coming soon!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772857211961354?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Avalanche</strong></a> coming soon!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772859678457859?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Celo</strong></a> coming soon!<br></br><a className="cla" href='https://twitter.com/graphprotocol/status/1615772862110900225?s=20&t=Fz_wzPtpk2ZKpTmWN1xNbA' target="_blank" rel="noreferrer"><strong>Optimism</strong></a> coming soon!</a>
//     ,
//   );
//   this.setState((prev) => ({
//     ...prev,
//     messages: [...prev.messages, message],
//   }));
// }

handleCuratorTools() {
  const message = this.createChatbotMessage(<a><strong>Herramientas útiles para Curadores</strong><br></br><br></br>Aprende cómo funciona la facturación en Subgraph Studio, <a className="cla" href="https://thegraph.com/docs/es/cookbook/migrating-a-subgraph/#querying-a-subgraph-billing-on-the-graph-network" target="_blank" rel="noreferrer">aquí.</a><br></br><br></br>Descubre cómo The Graph utiliza Polygon para su sistema de facturación <a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">aquí.</a>.<hr></hr><a className="cla" href="https://okgraph.xyz/" target="_blank" rel="noreferrer">Comprobar</a> el estado de indexación de un subgrafo<br></br><br></br>Puedess ver datos de:<br></br>Tarifas de consulta de Mainnet (diarias)<br></br>Tarifas de consulta de Mainnet (mensual)<br></br>Tarifas de consulta de Mainnet (mensual, promedio móvil de 30 días)<br></br>Nuevos subgrafos (mensual)<br></br>Subgrafos totales<br></br>Tarifas promedio de subgrafos (mensual, promedio móvil de 30 días)<br></br>Tarifas de consulta de subgrafos (30 días)<br></br>Tasa de consulta / Ratio de señal (30 días)<br></br>Tarifas de consulta de subgrafos (30 días) - % <a className="cla" href="http://michael.lesane.net/graphdash/" target="_blank" rel="noreferrer">aquí.</a>.<br></br><br></br>O consulta la Facturación de Subgrafos, <a className="cla" href="http://michael.lesane.net/graphdash/billing" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>Tablero de facturación de <a className="cla" href="https://dapplooker.com/dapp/graph-network-billing-120192" target="_blank" rel="noreferrer">Graph Network</a><br></br><br></br>Graph Network <a className="cla" href="https://dapplooker.com/dapp/graph-network-user-billing-balance-120204" target="_blank" rel="noreferrer">Saldo de facturación del usuario</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleHostedService() {
  const message = this.createChatbotMessage(<a>El Servicio Alojado ha sido fundamental para llevar a The Graph a donde está hoy, pero la visión siempre ha sido crear un protocolo de indexación descentralizado y una API global. Cuando The Graph Network entre en funcionamiento, los desarrolladores finalmente tendrán la capacidad de ofrecer aplicaciones descentralizadas verdaderamente sin servidor que son rápidas de cargar y confiables. No habrá necesidad de una infraestructura centralizada ya que las aplicaciones pueden conectarse directamente a una red eficiente de Indexadores para procesar consultas.<br></br><br></br>Los subgrafos de Ethereum continúan migrando a la red descentralizada de The Graph. A medida que crece la adopción de web3, también crece la demanda de escala y rendimiento. Los desarrolladores se enfrentan a una decisión importante: seguir confiando en la tecnología centralizada o cambiar a una infraestructura descentralizada.<br></br>Para longevidad y confiabilidad, nada supera a la descentralización. Al evitar los puntos de falla centralizados, está ofreciendo a sus usuarios una aplicación web3 a la que pueden acceder de manera constante. Muchos proyectos ya han validado la red en producción y ahora es el momento perfecto para que su proyecto migre.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/the-graph-network-la-migraci%C3%B3n-de-subgrafos-est%C3%A1-en-pleno-apogeo-ceb71668f51d" target="_blank" rel="noreferrer">The Graph Network: La Migración de Subgrafos Está en Pleno Apogeo</a><hr></hr><br></br>Si prefiere tutoriales en video, ve a continuación.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=syXwYEk-VnU'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleChainlink() {
  const message = this.createChatbotMessage(<a>The Graph es un protocolo de indexación para consultar redes como Ethereum e IPFS. Cualquiera puede crear y publicar API abiertas, llamadas subgrafos, lo que facilita el acceso a los datos.<hr></hr>Chainlink es una red Oracle descentralizada que permite que los contratos inteligentes accedan de forma segura a fuentes de datos  off-chain, API web y pagos bancarios tradicionales.<hr></hr>Aquí hay una explicación en video con Tegan Kline y Dave Kajpust de The Graph Protocol. Discuten la importancia vital de The Graph para construir una Web3 descentralizada y explican las diferencias entre Chainlink y The Graph.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=HOS9g0rKP24'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleIndexerOfficeHours() {
  const message = this.createChatbotMessage(<a>Indexer Office Hours es una clínica informal sin cita previa para que cualquiera pueda obtener asesoramiento sobre la implementación de Indexer, ya sea en Mainnet o Testnet. Si desea obtener más información sobre la solución de problemas, o simplemente desea hacer preguntas sobre la indexación, esta es la clínica para ti.<br></br><br></br>Puedes ponerte al día con todos los horarios de oficina de Indexer <a className="cla" href="https://graphops.notion.site/Indexer-Office-Hours-952e0b50a65144768aab922e2c9d102a" target="_blank" rel="noreferrer">aquí</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleFireHose() {
  const message = this.createChatbotMessage(<a>El procesamiento de datos a través de Firehose (desarrollado por StreamingFast), aumenta el rendimiento de la indexación lineal y la velocidad de sincronización, y maximiza la agilidad de los datos al permitir el procesamiento paralelo. Firehose crea una interfaz genérica para Graph Node con cualquier blockchain y mejora enormemente la capacidad de manejar cadenas de alto rendimiento como NEAR.<br></br><br></br>Puedes leer la propuesta de Firehose para obtener más información al respecto, <a className="cla" href="https://firehose.streamingfast.io/" target="_blank" rel="noreferrer">aquí</a>.<hr></hr>Pregúntame sobre StreamingFast para obtener más información sobre ellos.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoreDevs() {
  const message = this.createChatbotMessage(<a>Los Core Devs de The Graph son:<br></br><br></br><a className="cla" href="https://edgeandnode.com/blog/introducing-edge-and-node/" target="_blank"><strong>Edge & Node</strong></a> - Desarrollo de protocolos descentralizados y avance web3. Equipo inicial detrás de The Graph.<br></br><a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank"><strong>Figment</strong></a> - Mejora de la infraestructura de nodos y soporte multi-blockchain.<br></br><a className="cla" href="https://thegraph.com/blog/announcing-the-graph-foundation" target="_blank"><strong>The Graph Foundation</strong></a> - Administración el ecosistema, otorgamientos grants y apoyo a la comunidad.<br></br><a className="cla" href="https://www.streamingfast.io/" target="_blank"><strong>StreamingFast</strong></a> - Optimización del rendimiento de indexación de subgrafos y soporte de herramientas de desarrollo web3.<br></br><a className="cla" href="https://www.semiotic.ai/" target="_blank" ><strong>Semiotic</strong></a>- Mejorando The Graph Network a través de innovaciones de R&D.<br></br><a className="cla"href="https://www.the-guild.dev/" target="_blank"><strong>The Guild</strong></a> - Crear herramientas de subgrafos y desarrollar mejoras en la API de GraphQL.<br></br><a className="cla" href="https://graphops.xyz/" target="_blank"><strong>GraphOps</strong></a> - Extracción, transformación y servicio de datos de blockchain a través del Graph Protocol.<br></br><a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank"><strong>Messari</strong></a> - Aportando transparencia y construyendo herramientas para decisiones e inversiones informadas.<br></br><br></br>Pregunta acerca de cualquiera de los desarrolladores principales para obtener más información.<br></br><br></br>Pónte al día con todas las llamadas de Core Devs <a className="cla" href="https://www.youtube.com/playlist?list=PLTqyKgxaGF3Tj_A6eqV8V_aQoRwd2oHa_" target="_blank">aquí</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleFigment() {
  const message = this.createChatbotMessage(<a>Figment es una empresa canadiense registrada y financiada con capital de riesgo con sede en Toronto. Sirviendo a los holders de GRT más grandes del mundo. Con más de 30 años de experiencia escalando con éxito empresas de infraestructura de Internet.<hr></hr><strong>Staking</strong>- Figment opera una red altamente segura de validadores de Proof of Stake (PoS) que permiten a los poseedores de tokens asegurar redes, participar en la gobernanza y obtener rendimiento.<br></br>Para obtener más información sobre Staking con Figment, consulta <a className="cla" href="https://www.figment.io/protocols/the-graph" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br><strong>Software</strong>- La plataforma DataHub de Figment permite a los desarrolladores utilizar las funciones más potentes y exclusivas de una blockchain sin tener que convertirse en expertos en protocolos, lo que acelera el desarrollo de nuevas aplicaciones Web 3.<br></br>Para obtener más información sobre la plataforma DataHub de Figment, consulta <a className="cla" href="https://datahub.figment.io/" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br><strong>Capital</strong>- Figment Capital ofrece financiación inicial y apoyo al crecimiento de proyectos PoS nuevos y altamente innovadores.<hr></hr>Los desarrolladores que usan subgrafos pueden monitorear fácilmente sus subgrafos dentro de DataHub. Esto ayuda a los desarrolladores a mejorar el rendimiento y la confiabilidad de sus subgrafos.<br></br>Puedes leer acerca de Llevar The Graph al ecosistema del cosmos, <a className="cla" href="https://www.figment.io/resources/the-graph-and-cosmos" target="_blank" rel="noreferrer">aquí</a>.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/figment-se-une-a-the-graph-en-una-de-las-mayores-fusiones-en-un-protocolo-descentralizado-se-3365717c8016" target="_blank" rel="noreferrer">Figment se une a The Graph en Una de las Mayores Fusiones en un Protocolo Descentralizado; Se otorga una grant para Core Devs de 80 Millones de GRT</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSemiotic() {
  const message = this.createChatbotMessage(<a>Semiotic Labs está construyendo herramientas de toma de decisiones automatizadas para mercados descentralizados en blockchain. Creen que la convergencia de la IA y la criptografía impulsará Web3, la Internet descentralizada del futuro.<hr></hr><strong>Deep Reinforcement Learning (RL)</strong> es un campo de la IA que se utilizó para dominar juegos como Go y en el descubrimiento científico.<br></br>Utilizando Deep RL, desarrollan agentes autónomos que pueden negociar el precio y otros términos en acuerdos bilaterales o de tipo subasta.<br></br>Se pueden entrenar agentes con conductas prosociales para mejorar el bienestar de la red descentralizada.<br></br><br></br><strong>Los entornos de simulación</strong> son esenciales para capacitar a los agentes de IA de manera eficiente y probar su desempeño en comparación con los puntos de referencia.<br></br>Desarrollan simuladores realistas para capturar la economía de los mercados descentralizados y capacitar a múltiples agentes que participan en la red.<br></br>Los entornos de simulación también son útiles en las pruebas de estrés de nuevos protocolos para encontrar debilidades (por ejemplo, ataques de adversarios) antes de que ocurran fallas en el mundo real.<br></br><strong>El cifrado homomórfico</strong> hace posible realizar cálculos en datos cifrados.<br></br><br></br><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/the-graph-concede-una-subvenci%C3%B3n-de-60-millones-de-d%C3%B3lares-a-semiotic-ai-para-que-se-una-a-the-4fa02bfa6221" target="_blank" rel="noreferrer">The Graph Concede una Grants de 60 Millones de Dólares a Semiotic AI para que se Una a The Graph como Desarrollador Principal</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMessari() {
  const message = this.createChatbotMessage(<a>Messari aporta su talento de desarrollador y su experiencia en el campo para desarrollar y mantener subgrafos de protocolo estandarizados, complejos, precisos y de alta calidad. Todos los subgrafos serán de código abierto y estarán disponibles para la comunidad en general. Cada subgrafo se migrará a la red descentralizada. Además, Messari liderará grupos de trabajo de subgrafos, proporcionará comentarios para ayudar a informar los esfuerzos del protocolo central, compartirá las mejores prácticas de subgrafos y ayudará a crear estándares comunitarios para cualquier protocolo.<br></br><br></br>Puedes obtener más información sobre el papel de Messari dentro del ecosistema The Graph <a className="cla" href="https://messari.io/report/the-graph-foundation-awards-messari-usd12-5mm-in-first-ever-core-subgraph-developer-grant-to-build-and-standardize-subgraphs" target="_blank" rel="noreferrer">aquí</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphQLApi() {
  const message = this.createChatbotMessage(<a><strong>API GraphQL</strong><br></br><br></br>Esta <a className="cla" href="https://thegraph.com/docs/es/querying/graphql-api/" target="_blank" rel="noreferrer">guía</a> explica la API de consulta de GraphQL que se utiliza para el protocolo The Graph.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/es/querying/graphql-api/#queries" target="_blank" rel="noreferrer">Consultas</a></strong> - En tu esquema de subgrafo, define tipos llamados Entidades. Para cada tipo de entidad, se generará un campo de entidad y entidades en el tipo de consulta de nivel superior.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/es/querying/graphql-api/#sorting" target="_blank" rel="noreferrer">Clasificación</a></strong> - Al consultar una colección, el parámetro orderBy puede usarse para ordenar por un atributo específico. Además, orderDirection se puede usar para especificar la dirección de clasificación, asc para ascender o desc para descender.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/es/querying/graphql-api/#pagination" target="_blank" rel="noreferrer">Paginación</a></strong> - Al consultar una colección, el primer parámetro se puede usar para paginar desde el principio de la colección.<br></br><br></br>
<strong><a className="cla" href="https://thegraph.com/docs/es/querying/graphql-api/#filtering" target="_blank" rel="noreferrer">Filtrado</a></strong> - Puedes usar el parámetro where en tus consultas para filtrar por diferentes propiedades.<br></br><br></br><strong><a className="cla" href="https://thegraph.com/docs/es/querying/graphql-api/#time-travel-queries" target="_blank" rel="noreferrer">Consultas sobre viajes en el tiempo</a> (Time-travel queries)</strong> - Puedes consultar el estado de tus entidades no solo para el último bloque, que es el predeterminado, sino también para un bloque arbitrario en el pasado.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/construir-apis-graphql-en-ethereum-4cc6645d1360" target="_blank" rel="noreferrer">Construir APIs GraphQL en Ethereum</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleParticipantUpdate() {
  const message = this.createChatbotMessage(<a>La última Actualización de participantes de GRT cubre los aspectos más destacados del tercer trimestre de 2022 de The Graph, incluidas estadísticas clave, anuncios e hitos. Mira la quema y aprende sobre toda la construcción e innovación que sucede dentro de The Graph Ecosystem.<br></br><br></br><Embed className="embed" isDark url='https://youtu.be/58el3_9oJ6Q'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}



handleTheGuild() {
  const message = this.createChatbotMessage(<a>El ecosistema avanzado de código abierto de The Guild cubre todo lo que necesitas para tu infraestructura API con una plataforma modular, de código abierto y completa.<hr></hr><strong>El Ecosistema</strong><br></br><br></br>Sus soluciones modulares avanzadas se pueden adoptar gradualmente como bibliotecas de código abierto individuales o como una plataforma API unificada completa. Explora su conjunto de herramientas de API sostenibles y de código abierto que cubren todo lo que necesitas para escalar tu infraestructura de API <a className="cla" href="https://www.the-guild.dev/#platform" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>Puedes obtener más información sobre The Guild <a className="cla" href="https://www.the-guild.dev/about-us" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>Puedes obtener más información sobre los servicios que brindan <a className="cla" href="https://www.the-guild.dev/services" target="_blank" rel="noreferrer">aquí</a>.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/the-graph-foundation-concede-una-subvenci%C3%B3n-de-48-millones-de-d%C3%B3lares-a-the-guild-para-que-se-una-a-5b0faba979b0" target="_blank" rel="noreferrer">The Graph Foundation Concede una Grants de 48 Millones de Dólares a The Guild para que se Una a The Graph como Desarrollador Principal</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphOps() {
  const message = this.createChatbotMessage(<a>GraphOps está construyendo el futuro de la web. Su misión es: Nos impulsa la misión de construir una red sin censura, equitativa y auto-soberana. Los datos públicos están en el corazón de esa misión, y prosperamos en la creación de estándares y protocolos de datos abiertos para potenciar la próxima gran ola de instituciones y aplicaciones para nuestro mundo.<br></br><br></br>GraphOps es una empresa de infraestructura de datos de blockchain. Extraen, transforman y sirven datos de blockchain a través del protocolo The Graph.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/the-graph-foundation-concede-un-grant-para-core-devs-a-graphops-c54f612a2bca" target="_blank" rel="noreferrer">The Graph Foundation Concede un Grant para Core Devs a GraphOps</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleGraphDay() {
  const message = this.createChatbotMessage(<a>Aquí hay un resumen del Graph Day más reciente que tuvo lugar el 2 de junio de 2022 en el histórico Palacio de Bellas Artes de San Francisco.<hr></hr>Visita <a className="cla" href="https://thegraph.com/graph-day/2022/" target="_blank" rel="noreferrer">Graph Day</a> y <a className="cla" href="https://thegraph.com/graph-hack/2022/" target="_blank" rel="noreferrer">Graph Hack</a> para obtener más información sobre todo el evento.<hr></hr>La comunidad de The Graph pudo unirse y centrarse en web3, dapps, protocolos y el futuro de Internet. Los principales desarrolladores de protocolos y dapps mostraron cómo la comunidad web3 es pionera en nuevas formas de coordinación humana.<br></br><br></br>Eva Beylin, Directora de The Graph Foundation, dio la bienvenida. Seguido de una charla inspiradora de Yaniv Tal, cofundador de The Graph y director ejecutivo de Edge & Node. A continuación, la comunidad recibió una presentación de The Graph sobre 'Por qué es importante la descentralización'. Luego llegaron los emocionantes anuncios, uno tras otro:<br></br>Anuncio de extinción del Servicio Alojado<br></br>Anuncio Substreams<br></br>Anuncio del lanzamiento de GEO<br></br>Luego, la comunidad fue invitada a una charla de panel con Diana Chen, Camila Ramos, Chris Ewing y Derek Meyer. -"It takes a Village”(“Se necesita un pueblo").<br></br><br></br>Puedes escuchar el podcast de GRTiQ en Graph Day y Graph Hack con Tegan Kline, que tuvo lugar justo antes del evento, <a className="cla" href="https://www.grtiq.com/grtiq-podcast-special-release-graph-day/" target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>Vea el futuro de Internet a medida que se presenta en vivo desde The Graph Day 2022 Livestream a continuación.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=yLQmdM5DWSk&list=PLTqyKgxaGF3T2Ginisuf2nUY6yDi_WbT3&index=11'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsTheWeb() {
  const message = this.createChatbotMessage(<a>La web ha evolucionado mucho a lo largo de los años, y sus aplicaciones hoy en día son casi irreconocibles desde sus primeros días. La evolución de la web a menudo se divide en tres etapas separadas: Web1, Web2 y Web3.<hr></hr><strong>Web1</strong><br></br>Web 1.0 fue la primera iteración de la web. La mayoría de los participantes eran consumidores de contenido y los creadores solían ser desarrolladores que creaban sitios web que contenían información presentada principalmente en formato de texto o imagen. La web 1.0 duró aproximadamente desde 1991 hasta 2004.<br></br>La Web 1.0 consistía en sitios que ofrecían contenido estático en lugar de HTML dinámico. Los datos y el contenido se servían desde un sistema de archivos estático en lugar de una base de datos, y los sitios no tenían mucha interactividad.<br></br><br></br><strong>Web2</strong><br></br>La mayoría de nosotros hemos experimentado principalmente la web en su forma actual, comúnmente conocida como web2. Puedes pensar en web2 como la web interactiva y social.<br></br>En el mundo web2, no es necesario ser desarrollador para participar en el proceso de creación. Muchas aplicaciones están diseñadas de una manera que permite que cualquier persona sea un creador.<br></br>Si quieres crear un pensamiento y compartirlo con el mundo, puedes hacerlo. Si desea cargar un video y permitir que millones de personas lo vean, interactúen con él y lo comenten, también puede hacerlo.<br></br>Web2 es simple, en realidad, y debido a su simplicidad, cada vez más personas en todo el mundo se están convirtiendo en creadores.<br></br>La web en su forma actual es realmente genial en muchos sentidos, pero hay algunas áreas en las que podemos hacerlo mucho mejor.<br></br><br></br><strong>Web3</strong><br></br>Existen algunas diferencias fundamentales entre web2 y web3, pero la descentralización está en el centro.<br></br>En cambio, las aplicaciones web3 se ejecutan en blockchains, redes descentralizadas de muchos nodos (servidores) peer-to-peer (de par par), o una combinación de los dos que forman un protocolo criptoeconómico. Estas aplicaciones a menudo se denominan dapps (aplicaciones descentralizadas), y verás que ese término se usa con frecuencia en el espacio web3.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCoinbase() {
  const message = this.createChatbotMessage(<a>Cómo delegar tus tokens GRT con Coinbase Wallet<br></br><br></br>En este artículo, te enseñará cómo delegar tus tokens GRT dentro del protocolo The Graph, utilizando <a className="cla" href="https://www.coinbase.com/wallet" target="_blank">Coinbase Wallet</a>.<br></br><br></br>Para leer la guía realizada por Graphtronauts, ver <a className="cla" href="https://medium.com/@OG-Graphtronauts/how-to-delegate-your-grt-tokens-with-coinbase-wallet-85168f84e95e" target="_blank">aquí</a>. O si prefieres ver un video tutorial, lo encontrarás a continuación.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?v=1KU_mVDStIk&t=2s'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCryptocurrencies() {
  const message = this.createChatbotMessage(<a>El nombre es una combinación, o un acrónimo, de criptografía y moneda. A diferencia de las monedas tradicionales (generalmente denominadas "monedas fiduciarias"), que usan billetes y monedas físicos, las criptomonedas son completamente digitales. Al igual que cualquier otra moneda, puedes usar la criptomoneda para comprar bienes y servicios, y puedes transferirla entre amigos y familiares en todo el mundo. Sin embargo, las criptomonedas tienen algunas características adicionales que las diferencian de las monedas tradicionales.<br></br><br></br>Cuando depositas moneda fiduciaria en un banco, esencialmente estás prestando tu dinero a ese banco y confiando en que te lo devolverán cuando lo solicites. Si bien esto generalmente funciona bien para ambas partes, los bancos se benefician de tu dinero prestándolo a otros y cobrando intereses sobre estos préstamos. Además, los bancos cobran tarifas adicionales, como tarifas de retiro o tarifas de cuenta mensuales, y también pueden tener requisitos de saldo mínimo.<br></br><br></br>Un banco tradicional se consideraría centralizado, las criptomonedas están descentralizadas, lo que significa que no tienen una sola persona que controle todo; de hecho, hay miles de personas que ayudan a validar todas las transacciones que ocurren en una blockchain, y eso significa que tienes un entorno sin confianza, reconciliación de datos mejorada y puntos débiles reducidos. Esa es una manera prolija de decir que controlas tus propios activos.<br></br><br></br>La mayor privacidad, seguridad, portabilidad y transparencia de las criptomonedas significa que no hay espacio para manipular transacciones, cambiar el suministro de dinero o ajustar las reglas a mitad del juego. Las criptomonedas no son una organización, no controlan tus fondos; puedes ser tu propio banco.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleWhatIsABlockchain() {
  const message = this.createChatbotMessage(<a>Blockchain se puede considerar como un libro de registro que se utiliza para rastrear transacciones de criptomonedas de la misma manera que se rastrea el gasto de la chequera con un registro de chequera. Una blockchain es un sistema para registrar transacciones realizadas con criptomonedas, como ether o bitcoin. Los datos de transacciones se almacenan en un bloque de muchas transacciones. Una vez que un bloque está lleno, se crea un nuevo bloque que hace referencia al bloque anterior y se encadena al bloque anterior; de ahí el término  blockchain (cadena de bloques).<br></br><br></br>Algunas blockchains, como Ethereum, se mantienen utilizando una red de computadoras peer-to-peer, lo que permite que cualquier usuario aloje y acceda a la blockchain desde cualquier parte del mundo. A medida que ocurre una transacción, se registra y distribuye al libro de registro de cada usuario en la red blockchain.<br></br><br></br>Estas computadoras individuales, cuando se usan juntas, forman una base de datos global descentralizada para almacenar todos los datos de la blockchain. Descentralizado significa que, en lugar de que los datos se administren en una ubicación y sean controlados por una sola empresa o persona, todos los que usan la red los administran.<br></br><br></br>Las blockchains están diseñadas para ser inmutables, es decir, inalterable. Una vez que algo se ha registrado en la blockchain, no se puede cambiar ni revertir. Esto significa que cualquier transacción en la blockchain es permanente y siempre habrá un registro disponible para que cualquiera lo vea. La descentralización combinada con la estructura de datos de blockchain crea una línea de tiempo permanente de eventos.<br></br><br></br>Algunos bancos requieren que te comuniques con ellos para ver las transacciones que tienen más de un mes en tu cuenta. El uso de la blockchain eliminaría la necesidad de ponerte en contacto con tu banco porque todas tus transacciones ya estarán disponibles para que las veas.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSafe() {
  const message = this.createChatbotMessage(<a><strong>¿Es cripto seguro?</strong><br></br>La seguridad de las criptomonedas es un tema muy debatido. Por un lado, los advocatees argumentan que las criptomonedas son más seguras que las monedas tradicionales porque no están sujetas al control o manipulación del gobierno. Por otro lado, los escépticos afirman que las criptomonedas son vulnerables a la piratería y el robo.<br></br><br></br>En última instancia, la seguridad de las criptomonedas depende de las prácticas de seguridad del usuario individual y de la seguridad de la red de criptomonedas. Por ejemplo, si almacenas tus criptomonedas en una billetera digital que no está protegida con contraseña, corres el riesgo de ser pirateada.<br></br><br></br>Del mismo modo, si la red no es segura, los ciberdelincuentes pueden robar tus criptomonedas. Por lo tanto, es importante investigar antes de invertir en criptomonedas y tener cuidado al almacenarlas o usarlas.<br></br><br></br><strong>¿Es seguro Blockchain?</strong><br></br>Junto con las criptomonedas que no se pueden falsificar ni piratear, las tecnologías de blockchain ofrecen una seguridad increíble además de su utilidad. La naturaleza descentralizada de las blockchains y la incapacidad de cambiar la información dentro de ellas ayudan a que las blockchains sean resistentes a la manipulación, la piratería y las transacciones fraudulentas. Con muchas versiones distribuidas de blockchain en la red, un pirata informático necesitaría obtener el control de innumerables computadoras para causar daños reales. Esto hace que piratear una blockchain sea casi imposible.<br></br><br></br>La implementación de la tecnología blockchain para impulsar el mundo permite mercados más rápidos, más seguros y más transparentes para todos.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleEthereum() {
  const message = this.createChatbotMessage(<a>Ethereum es una tecnología de blockchain programable desarrollada por Vitalik Buterin a partir de 2013. Ethereum permite a los usuarios enviar y recibir criptomonedas, acceder y crear aplicaciones descentralizadas conocidas como dapps, ganar recompensas a través del staking y mucho más. El acceso gratuito a los servicios financieros y una Internet más privada y descentralizada son algunos de los objetivos clave de la fundación Ethereum.<br></br><br></br>Después de su concepción, Ethereum implementó un sistema de gobernanza descentralizado sin una sola persona en control. Esta falta de propiedad hace que sea casi imposible que los gobiernos u organizaciones le nieguen el acceso a los servicios en Ethereum. Las aplicaciones en Ethereum no requieren todos tus datos personales para usarlas. Esto brinda a los usuarios más control sobre su privacidad y los mantiene más seguros en cada transacción.<br></br><br></br>Ethereum está abierto a cualquier persona, en cualquier lugar, siempre que tenga acceso a una billetera Ethereum, como Loopring Smart Wallet. Puedes pensar en una billetera Ethereum como una aplicación bancaria, sin un banco que controle tus fondos. Con solo una conexión a Internet, Ethereum está disponible para que todos lo usen, brindando acceso a servicios bancarios en todo el mundo.<br></br><br></br>Todas las transacciones en la blockchain de Ethereum funcionan con la criptomoneda nativa ether o ETH. Cada vez que se envía ETH o se usa una dapp, los usuarios pagan una pequeña tarifa en ETH por usar la red Ethereum. Estas tarifas se utilizan para ayudar a recompensar a los mineros por verificar acciones en la blockchain. Los mineros actúan como encargados de los registros asegurándose de que nadie esté haciendo trampa o manipulando la blockchain y manteniéndola segura. Esto se conoce como Proof of Work (Prueba de Trabajo). El futuro de Ethereum trae un nuevo método para proteger la blockchain en el que se comprometen o depositan fondos para permitir que los usuarios actúen como encargados de los registros de la blockchain. Esto se conoce como Proof of Stake (Prueba de Participación).</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOW() {
  const message = this.createChatbotMessage(<a>La  Proof of Work (PoW) es un algoritmo de consenso para la mayoría de las principales criptomonedas; es una forma de asegurar el libro mayor de una criptomoneda. PoW fue presentado por Satoshi Nakamoto para la blockchain de Bitcoin, convirtiéndolo en el primer algoritmo de consenso, y sigue siendo el dominante hasta la fecha.<br></br><br></br>Sin embargo, no era la primera vez que oíamos hablar de PoW, la aplicación Hashcash de Adam Back se inventó en 1997 y utilizó una función de  Proof of Work. Uno de los grandes beneficios de este sistema es que evita el doble gasto. Este término se usa casi exclusivamente para dinero digital y criptomonedas porque no se puede gastar el mismo dinero físico dos veces, es decir; si fue a una tienda y pagó en efectivo por una bebida, no podría usar ese mismo efectivo en una tienda diferente porque la primera tienda encerró el dinero en la caja registradora.<br></br><br></br>En criptomonedas o cualquier dinero digital, es posible enviar una gran cantidad de datos rápidamente y sin validación, tendría personas que podrían gastar lo suficientemente rápido como para engañar a varias tiendas haciéndoles creer que les pagaron y el libro de contabilidad se arruinaría rápidamente. A pequeña escala, esto podría funcionar, pero cuando 10 y 100 de miles de personas están operando en una blockchain, se complica rápidamente.<br></br><br></br>Sería tedioso e ineficiente agregar todas las transacciones una a la vez con tantas personas que desean comerciar, por lo que estas transacciones se agrupan en un bloque que se vincula con el anterior y hace referencia a él, de ahí el nombre Blockchain. Sin embargo, agregar a un bloque no es gratis, hay usuarios llamados mineros que ayudan a validar cada bloque de transacciones. Esto cuesta poder de cómputo y energía del mundo real para crear un hash (piense en una huella digital) que es prácticamente imposible de revertir.<br></br><br></br>Debido a la alta potencia informática, a los mineros se les paga una tarifa por sus servicios y los bloques se envían a la cadena. Con el poder de la criptografía en PoW, si intenta realizar una transacción no válida, la red la rechazará automáticamente y seguirá pagando la tarifa del minero. Esa es la belleza de esto: se vuelve costoso intentar transacciones inválidas pero es rentable actuar honestamente.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handlePOS() {
  const message = this.createChatbotMessage(<a>Al igual que la Proof of Work, la Proof of Stake (PoS) es un algoritmo de consenso que se basa en la cantidad de monedas que están en stake. Staking se refiere a comprometer fondos en el sistema para ser un validador de bloques; los validadores solo pueden participar en el proceso de producción de nuevos bloques si sus monedas están bloqueadas. Luego, los fondos actúan como garantía, lo que significa que un validador malicioso perdería sus fondos en stake y perdería el acceso a la red.<br></br><br></br>PoS es una alternativa a PoW que viene con ciertas ventajas y desventajas. En Proof of Work solo se premia al minero y todos compiten por ser el que presenta el bloque válido, desperdiciando así mucha energía. El modelo de Proof of Stake logra el consenso al considerar el tamaño del staking y cuánto tiempo han estado en stake, luego seleccionando el validador que ahorra una cantidad considerable de energía y tiempo.<br></br><br></br><table><tr className="indexer-table-header">
  <th><strong>Ventajas</strong></th>
  <th><strong>Contras</strong></th>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Eficiencia: se utiliza muy poca energía para proteger una blockchain.</td>
  <td>Escala: Todavía tiene que haber un sistema PoS para alcanzar el tamaño de Ethereum o Bitcoin.</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Rendimiento: no tiene que resolver problemas informáticos complejos, por lo que aumenta la velocidad de las transacciones.</td>
  <td>Menos seguro: participar en un sistema PoS puede incentivar el acaparamiento de monedas para tener un ataque del 51 %. En blockchains lo suficientemente grandes, esto se vuelve mucho menos probable.</td>
</tr>
<br></br><br></br>
<tr className="indexer-table">
  <td>Barrera de entrada menor: solo necesitas gastar dinero una vez para participar en un modelo de Proof of Stake. Un sistema PoW requiere equipo de hardware y tiempo de actividad continuo.</td>
  <td>Centralización: existe un incentivo para tener más tokens para staking. Algunas blockchains han comenzado a castigar esto e incentivar validadores más pequeños.</td>
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
  const message = this.createChatbotMessage(<a><strong>Moneda</strong><br></br>En criptomoneda, el término "moneda" se usa para describir una moneda que es nativa de su propia blockchain (por ejemplo, ether para la blockchain de Ethereum, bitcoin para la blockchain de bitcoin, etc.). Una moneda es una moneda digital que se puede usar de varias maneras:<br></br>Como forma de pago (p. ej., transferir ETH a otro por un artículo o servicio), depósito de valor (p. ej., algunos ven a Bitcoin como un "refugio seguro" para la riqueza de uno), unidad de cuenta (p. ej., artículos como NFT pueden tener un precio en ETH) y para las blockchains que usan Proof of Work, la moneda nativa también se usa para pagar a los mineros por procesar transacciones y producir bloques.<br></br><br></br><strong>Token</strong><br></br>Mientras que una moneda es nativa de su propia blockchain, un token se crea en una blockchain existente. Cada blockchain tiene su propio formato para tokens. Por ejemplo, los tokens creados en la blockchain de Ethereum tienen el prefijo ERC seguido de un número (por ejemplo, ERC-20). Técnicamente, cualquiera puede crear un token, por lo que siempre se recomienda investigar y leer el tokenomics antes de comprar. Un token puede ser fungible (intercambiable) o no fungible según el estándar que utilice. En Ethereum, algunos ejemplos de tokens estándar son:<br></br><br></br>ERC-20<br></br>Estándar comúnmente utilizado para tokens fungibles, los que se utilizan para monedas digitales, staking y votaciones.<br></br><br></br>ERC-721<br></br>Estándar utilizado para tokens no fungibles, como un NFT para una obra de arte o una canción.<br></br><br></br>ERC-1155<br></br>Estándar que permite operaciones más eficientes y agrupación de transacciones. Puedes representar y controlar cualquier número de tipos de tokens fungibles y no fungibles. Es decir, el token ERC-1155 puede desempeñar la misma función que un token ERC-20 y ERC-721, e incluso ambos al mismo tiempo.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStablecoin() {
  const message = this.createChatbotMessage(<a>Una moneda estable es una criptomoneda que está diseñada para mantener un precio de mercado constante. Si bien los mecanismos exactos pueden variar de uno a otro, las monedas estables son algo resistentes a la volatilidad del mercado. No deberían experimentar cambios de precio significativos ya que sus valores a menudo están vinculados a otro activo como el dólar estadounidense.<br></br><br></br>La idea principal de usar una moneda estable es que obtenga los beneficios de los mundos fiduciario y de criptomonedas. Puedes protegerse contra la naturaleza volátil de los criptomercados y prestar tus monedas estables para ganar intereses mejor de lo que lo harías con un banco o corredor.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleCEX() {
  const message = this.createChatbotMessage(<a>Un exchange centralizado (CEX) es una forma de facilitar los exchanges entre usuarios manteniendo un libro de órdenes; una colección de órdenes de compra y venta que colocan los inversores individuales. Las órdenes son para comprar o vender una cierta cantidad de criptomonedas a un precio específico: un CEX agregará estas órdenes y las ejecutará.<br></br><br></br>Una gran diferencia entre un CEX y las billeteras personales o un DEX es que los usuarios en realidad no intercambian criptomonedas o fiat entre sí. Los fondos se depositan y el exchange se hace cargo de la custodia de los activos y básicamente emite un pagaré al comerciante. Esto tiene ventajas, como tarifas más bajas y un exchange más simple, pero también desventajas, como la falta de transparencia que permite prácticas maliciosas como el comercio de lavado y la manipulación de precios.<br></br><br></br>Dado que todos los fondos están bajo custodia del exchange, los CEX son un objetivo principal para posibles ataques y han sido atacados varias veces en los últimos años por cientos de millones de dólares. Además, debido a que un CEX está alojado en algún lugar, es posible que haya problemas técnicos o ataques que pueden generar tiempo de inactividad. Los fondos también pueden congelarse y confiscarse debido a las regulaciones gubernamentales en algunos casos.<br></br><br></br>Si bien un CEX requerirá que se lleve a cabo KYC (Conozca a su cliente), también es útil para fines fiscales tener esta información fácilmente disponible y la mayoría de los exchanges pueden proporcionar documentos fiscales fácilmente. Tener un CEX que tome la custodia de tus fondos tiene ventajas si no te sientes cómodo controlándolos tu mismo. Algunos usuarios han almacenado fondos en sus billeteras personales y han olvidado la frase semilla o han perdido sus claves privadas, perdiendo millones de dólares en criptomonedas.<br></br><br></br>Algunos ejemplos de CEX populares incluyen Binance, Coinbase, Huobi y Kucoin.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDEX() {
  const message = this.createChatbotMessage(<a>Un exchange descentralizado es un mercado entre pares donde las transacciones van directamente entre los comerciantes. Esto es fundamental para los valores de Cripto de ser descentralizado: ninguna transacción es ejecutada por los bancos, corredores o cualquier otro intermediario oficial no fomentan las transacciones. Hay algunos DEX populares como Uniswap y Sushiwap que se ejecutan en Ethereum L1.<br></br><br></br>La mayor diferencia entre un exchange centralizado (CEX) y un DEX es que un CEX permitirá exchanges entre moneda fiduciaria y criptomonedas mientras que un DEX no. Un CEX permitirá operaciones de margen y establecer órdenes de limit que son manejadas por el libro de órdenes; esto es similar a las bolsas de valores como Nasdaq.<br></br><br></br>Un DEX se basa completamente en contratos inteligentes. Establecen los precios de las criptomonedas algorítmicamente y utilizan fondos de liquidez (LP) para facilitar las operaciones que se liquidan directamente en la blockchain. Un DEX normalmente se basa en un código de fuente abierto, lo que significa que no hay nada oculto sobre su funcionamiento.<br></br><br></br>Encontrará más variedad en un DEX, DeFi es el lugar ideal para ingresar a los primeros LP de token. Esto va desde tokens conocidos hasta aleatorios y, a veces, asegúrate, asegúrese de hacer tu propia investigación al invertir. Dicho esto, el riesgo de piratería se reduce drásticamente porque los fondos en un DEX se almacenan en billeteras personales y no en un almacenamiento central; ha habido varios hacks en CEX a lo largo de los años.<br></br><br></br>Un CEX requerirá KYC (Conozca a su cliente) para identificarte, un DEX no requerirá ninguna información de identificación personal para que permanezca en el anonimato. Además, aunque algunas ubicaciones no podrán permitir compras de criptomonedas, un DEX abre la posibilidad a las personas de estas regiones.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleLayerTwo() {
  const message = this.createChatbotMessage(<a>La capa 2 (L2) se refiere a un marco o protocolo secundario que se construye sobre una blockchain existente. El objetivo principal de un protocolo L2 es ayudar a resolver la velocidad de transacción y las dificultades de escalabilidad de las principales redes de criptomonedas, para Ethereum lo llamamos el Trilema de la escalabilidad de Ethereum: escalabilidad, velocidad y descentralización.<br></br><br></br>Ethereum actualmente procesa ~13 transacciones por segundo, mientras que las compañías de tarjetas de crédito como MasterCard y Visa procesan más de 1700 transacciones por segundo y cobran una pequeña tarifa. Si está familiarizado con Square o servicios similares para pequeñas empresas, nunca te imaginaría usar solo Ethereum para realizar transacciones. Imagínate tratando de pagar y esperando de 20 a 30 minutos para validar el pago, sin mencionar que pagas una tarifa de gas por esa validación; ahí es donde interviene L2 y hay algunas formas de hacerlo.<br></br><br></br>Es más rápido, más barato y tan seguro como Ethereum. Entonces, ¿por qué no todos lo hacen? Bueno, Optimistic Rollups sufre de tiempos de finalización/retiro más largos, por lo general retienen fondos durante 7 días. Validium y Plasma están off-chain y, por lo tanto, carecen de la verdadera seguridad de Ethereum. Los zkRollups son lo mejor de todos los mundos porque son rápidos y seguros on-chain, pero la tecnología requerida para desarrollarlos es muy desafiante.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKProof() {
  const message = this.createChatbotMessage(<a>Una  Zero-knowledge Proof (prueba de conocimiento cero) o (zkProof) es poder probar algo a alguien sin transmitir ninguna información adicional excepto el hecho de que es verdad. No necesita demostrar que posee el conocimiento de cierta información simplemente revelándola; el desafío es probar la posesión del conocimiento sin revelar la información misma.<hr></hr><strong>Aplicaciones</strong><br></br><br></br><strong>Finanzas:</strong> Puedes usar zkProofs para permitir que los clientes demuestren que su número secreto se encuentra en un rango conocido. Por ejemplo, un solicitante de préstamo puede demostrar que sus ingresos se encuentran en un rango de calificación sin revelar su salario exacto.<br></br><br></br><strong>Votación en línea:</strong>Un zkProof te permitiría votar de forma anónima y verificar que tu voto se incluyó en el recuento final.<br></br><br></br><strong>Autenticación:</strong>Puedes iniciar sesión en sitios sin intercambiar información secreta como una contraseña.<br></br><br></br><Embed className="embed" isDark url='https://www.youtube.com/watch?time_continue=18&v=fOGdb1CTu5c&feature=emb_logo'/></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleSmartContract() {
  const message = this.createChatbotMessage(<a>Un "contrato inteligente" es simplemente un programa que se ejecuta en la blockchain de Ethereum. Es una colección de código y datos que reside en una dirección específica en la blockchain; es un tipo de cuenta de Ethereum. Puedesn mantener un saldo y enviar transacciones a través de la red, pero no están controlados por un usuario. Están programados para hacer exactamente lo que se les dice, definiendo reglas y aplicándolas automáticamente en función de su código.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNFT() {
  const message = this.createChatbotMessage(<a>Presentado por Dieter Shirley en septiembre de 2017 y finalizado en junio de 2018, el ERC-721 fue diseñado para tokens no fungibles. Son únicos, ningún token es exactamente igual y se les asigna una variable uint256 llamada tokenId que debe ser única. Esto podría representar casi cualquier cosa en el mundo que sea única y que necesite una propiedad demostrable:<br></br><br></br>Arte digital (GIF, coleccionables, música, videos)<br></br>Un nombre de dominio<br></br>Escrituras de un coche<br></br>Entradas para un evento del mundo real<br></br>Facturas tokenizadas<br></br>Documentos legales<br></br>Registros médicos<br></br>firmas<br></br><br></br>Los NFT tienen propiedades especiales:<br></br><br></br>Cada token acuñado tiene un identificador único que está directamente vinculado a una dirección de Ethereum.<br></br>No son directamente intercambiables con otros tokens 1:1. Por ejemplo, 1 ETH es exactamente lo mismo que otro ETH. Este no es el caso de los NFT.<br></br>Cada token tiene un propietario y esta información es fácilmente verificable.<br></br>Viven en Ethereum y se pueden comprar y vender en un mercado NFT basado en Ethereum.<br></br><br></br>Eso significa que si posee un NFT:<br></br><br></br>Puedess demostrar que lo posees.<br></br>El token prueba que su copia es el original.<br></br>Su clave privada es prueba de propiedad.<br></br>Nadie puede manipularlo de ninguna manera.<br></br>Puedess venderlo o mantenerlo para siempre.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMining() {
  const message = this.createChatbotMessage(<a>La minería de criptomonedas se refiere al proceso de verificación y validación de transacciones de blockchain. Los mineros resuelven intensas ecuaciones criptográficas y envían nuevos bloques a la blockchain con estos datos. Los mineros honestos y exitosos reciben una tarifa de minería, esta tarifa se conoce como tarifa de gas en Ethereum.<br></br><br></br>A medida que se realizan nuevas transacciones en la blockchain, se envían a un grupo de memoria (mempool). El minero verifica la validez de las transacciones pendientes y las organiza en bloques. Esto es similar a las personas que le envían transacciones oralmente y tu las escribe todas en una hoja de papel en orden: la hoja de papel en esta metáfora es un bloque. Este bloque necesita ser confirmado; esto requiere la resolución de problemas matemáticos complejos y requiere muchos recursos computacionales. Una vez que tiene éxito, el bloque se envía a la cadena y el minero recibe recompensas.<br></br><br></br>Para obtener más información sobre cómo funciona la minería, consulta <a className="cla" href="https://desk.zoho.com/portal/loopring/en/kb/articles/what-is-crypto-mining" target="_blank" rel="noreferrer">aquí</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleNodes() {
  const message = this.createChatbotMessage(<a>Los nodos son una pieza de software cliente. Hay 3 tipos diferentes de nodos y cada uno consume datos de manera diferente. Además, existen diferentes estrategias de sincronización que permiten un tiempo de sincronización más rápido; la sincronización es qué tan rápido puede obtener información precisa sobre el estado de Ethereum.<br></br><br></br><strong>Nodo completo</strong><br></br><br></br>Almacena datos completos de blockchain.<br></br>Verifica todos los bloques y todos los estados mientras participa en la validación de bloques.<br></br>Todos los estados se pueden derivar de un nodo completo.<br></br>Sirve a la red y proporciona datos a pedido.<br></br><br></br><strong>Nodo ligero</strong><br></br><br></br>A diferencia de un nodo completo, los nodos ligeros solo descargan encabezados de bloque. Estos contienen solo un resumen de información sobre el contenido de los bloques. Si hay información requerida adicional, un nodo ligero puede solicitarla desde un nodo completo. Esto permite que el nodo ligero verifique los datos que recibe contra una raíz de estado en los encabezados de bloque.<br></br>Los nodos ligeros son útiles porque no necesitan un hardware potente ni un gran ancho de banda para ejecutarlos como un nodo completo.<br></br><br></br><strong>Nodo de archivo</strong><br></br><br></br>Toda la información almacenada en un nodo completo se archiva en estados históricos en un nodo de archivo. Si quisiera consultar información de un bloque aleatorio como el bloque #222,222, usaría este nodo. Los datos son obviamente masivos. Los terabytes de datos en un nodo de archivo pueden ser menos atractivos para el usuario promedio pero útiles para servicios como exploradores de bloques, análisis de cadenas y proveedores de billeteras.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTokenBurn() {
  const message = this.createChatbotMessage(<a>La quema de tokens significa destruir una moneda o un token de forma permanente, pero ¿por qué harías esto? La tecnología Blockchain les da poder a los usuarios, tu puedes ser autocustodio: propiedad total de tus activos. No necesitas un banco o institución financiera, las transacciones no están limitadas por terceros y, en la mayoría de los casos, la oferta está limitada con el poder de ser deflacionario porque puede destruir tokens.<br></br><br></br>Quemar un token significa específicamente que está enviando un token a una dirección congelada, llamada dirección de quema, que no se puede recuperar. Una dirección de quema no tendrá clave privada, hay una dirección pública para enviar pero no hay claves para desbloquear la billetera. Es el equivalente a colocar tu dinero físico en una caja fuerte indescifrable de la que nadie tiene el código de acceso para desbloquear.<br></br><br></br>El valor de un token se basa en la oferta y la demanda. Por lo general, cuanto mayor sea la demanda, mayor será el valor. Asimismo, si la oferta es menor el valor también es mayor. Entonces, cuando hay un suministro fijo de un token, hay un impacto en la destrucción de parte de ese suministro. Esto se puede usar por varias razones, como aumentar el valor del token o producir estabilidad del valor.<br></br><br></br><strong>Aumentar el valor del proyecto</strong><br></br>Las recompras corporativas son comunes en el creciente mundo financiero actual; las empresas recompran algunas de sus propias acciones y participaciones en el mercado para ayudar a aumentar el valor de la oferta restante. Un evento similar ocurrió en 2021 cuando Ethereum volvió a comprar y luego procedió a quemar 1,3 millones de ETH que estaban en circulación. El objetivo es hacer que ETH sea deflacionario como parte de un nuevo protocolo, para garantizar que los tokens de Ethereum puedan ser un depósito de valor efectivo y aumentar su valor con el tiempo al reducir el suministro.<br></br><br></br><strong>Estabilizar valor</strong><br></br>Las monedas estables son esenciales para las criptomonedas y DeFi en su conjunto. Dentro del ecosistema, proporcionan un medio tanto para la liquidación como para la tenencia, aislado de la volatilidad de las monedas y tokens regulares. El compromiso aquí es usar una reserva central en la que pierde la descentralización. Las monedas estables algorítmicas intentan superar este problema controlando el suministro.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleDAO() {
  const message = this.createChatbotMessage(<a>Este acrónimo significa Organización Autónoma Descentralizada. Existe como un sistema de reglas predefinidas que determinan qué acciones tomará una organización. Esto es diferente de las empresas convencionales y, en cambio, se basa en un código fuente abierto y es operado completamente por la comunidad. Esto significa que no hay una sola entidad a cargo, ningún directorio y, por lo tanto, no hay centralización del poder.<br></br><br></br>Las reglas se construyen como contratos inteligentes que rigen el trabajo colectivo de sus colaboradores y miembros de la comunidad. Entonces, si bien el concepto de una organización descentralizada no es particularmente nuevo, ser capaz de automatizar sus mecanismos de trabajo y funciones hace que una DAO sea un concepto tan interesante.<br></br><br></br>Muchas comunidades usan DAOs para campañas automatizadas de recaudación de fondos como una ICO (oferta inicial de monedas), la emisión y distribución de tarifas recaudadas en un protocolo, o como sistemas de toma de decisiones y votación. Además, todo esto se hace sin interacción humana para garantizar un proceso confiable y seguro.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKSnark() {
  const message = this.createChatbotMessage(<a>Un argumento de conocimiento sucinto no interactivo de conocimiento cero - <strong>zkSNARK</strong><br></br><br></br>Vamos a desglosarlo:<br></br><br></br>Conocimiento cero: hemos revisado esto en otros artículos, pero la versión corta está demostrando algo sin que nadie más sepa cómo lo demostró, solo que es demostrable.<br></br>Sucinto - Breve y claro; la prueba es significativamente más pequeña que los datos que representa.<br></br>No interactivo: la información va del probador al verificador, no hay ida y vuelta.<br></br>Argumento del conocimiento: la prueba es sólida, no hay probador malicioso para engañar al sistema sin poseer el conocimiento para respaldar su declaración.<br></br><br></br>Un SNARK requiere una configuración de confianza entre el probador y el verificador. Este es un conjunto de parámetros públicos que se asemejan a las reglas de un juego. Estos parámetros se generan durante una ceremonia de configuración de confianza. Este es un cálculo conjunto realizado en un tiempo determinado por un grupo de participantes voluntarios. Siempre que un verificador se comporte con honestidad, los parámetros se generan de forma segura, por lo que cuantas más partes participen, más confiable se puede considerar esta ceremonia. Esta ceremonia debe llevarse a cabo para cada nueva versión del producto.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleZKStark() {
  const message = this.createChatbotMessage(<a>Un argumento de conocimiento transparente escalable de conocimiento cero - <strong>zkSTARK</strong><br></br><br></br>Expliquemos:<br></br><br></br>Escalable: la prueba tiene un tamaño relativamente pequeño y la verificación lleva menos tiempo, incluso para grandes cantidades de pruebas, por lo que es escalable.<br></br>Transparente: no hay requisitos para una configuración confiable.<br></br>Argumento del conocimiento: la prueba es sólida, no hay probador malicioso para engañar al sistema sin poseer el conocimiento para respaldar su declaración.<br></br><br></br>Los zkSTARK fueron creados por Eli-Ben Sasson, profesor del Technion-Israel Institute of Technology. La gran diferencia aquí es que un zkSTARK no requiere una configuración inicial confiable: la ceremonia se analiza en la sección SNARK. Un STARK es menos costoso computacionalmente que un SNARK y, en teoría, son computadoras cuánticas. Entonces, ¿cuál es el inconveniente? El tamaño de las pruebas es mucho mayor que un SNARK y eso puede aumentar el costo de las transacciones on-chain.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleMetaverse() {
  const message = this.createChatbotMessage(<a>El primer uso de la palabra es en una novela de ciencia ficción de 1992 llamada Snow Crash; es una combinación de las palabras meta y universo. El metaverso a menudo está vinculado a la tecnología avanzada de realidad virtual debido a las crecientes demandas de inmersión. Si bien el metaverso no es un concepto de juego, ha crecido más en ese espacio. Un juego llamado Second Life a menudo se describe como el primer metaverso y la novela Ready Player One (más tarde una película) continuó aumentando las posibilidades.<br></br><br></br>Idealmente, un verdadero Metaverso no admitirá solo juegos o redes sociales, sino que combinará economías, identidad digital, gobierno descentralizado y otras aplicaciones. Piense en cómo Roblox no es solo un juego personalizado, funciona para eventos virtuales como conciertos y reuniones. El juego no es solo para jugar, es para pasar el rato en un espacio virtual.<br></br><br></br>Crypto encaja en el metaverso al proporcionar inmutabilidad y prueba de propiedad. Piense en cómo funcionarían los NFT en este caso; la ropa digital, los accesorios, etc. serían verificables de forma segura y rápida, todo en un entorno descentralizado. Las monedas en el juego podrían prosperar y un usuario podría ganar dinero y gastarlo allí. Con las billeteras, el metaverso es muy accesible y con la blockchain en su lugar, tendríamos un gobierno confiable de la misma manera que votamos en la vida real por el liderazgo.<br></br><br></br>Es probable que un metaverso único y unificado esté un poco lejos, pero hay muchos desarrollos en la dirección correcta para esto y blockchain liderará el camino.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleArbitrum() {
  const message = this.createChatbotMessage(<a>Arbitrum es una solución de escalabilidad para Ethereum que reduce drásticamente los costos y la latencia. Arbitrum ha lanzado Arbitrum One en la red principal de Ethereum, y el equipo se está preparando para su próximo lanzamiento al público.<br></br><br></br>Gracias a la integración con Arbitrum, los servicios de consulta, alojamiento e indexación de The Graph ahora están disponibles en la red. Los desarrolladores de Arbitrum One ahora podrán crear y publicar API abiertas (subgrafos) que las aplicaciones pueden consultar usando GraphQL.<br></br><br></br>Graph ya admite datos de indexación para Ethereum, IPFS, Celo, Avalanche, Fantom y Moonbeam. Además, miles de desarrolladores ya han creado más de 10 000 subgrafos para aplicaciones como DODO, MCDEX, Uniswap, Synthetic, Gnosis, Decentraland, etc. Al agregar Arbitrum a esa lista, los esfuerzos de expansión de The Graph han dado otro paso para unir el ecosistema Web3.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/arbitrum-integra-the-graph-datos-abiertos-indexados-ahora-activos-en-la-capa-2-arbitrum-rollup-47ad397d01e0" target="_blank" rel="noreferrer">Arbitrum Integra The Graph, Datos Abiertos Indexados Ahora Activos en la capa 2 Arbitrum Rollup</a></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleStatistics() {
  const message = this.createChatbotMessage(<a>Si estás buscando datos / estadísticas en vivo. Entonces, por favor se más específico. Aquí hay una lista de lo que puedes preguntarme:<br></br><br></br>Recuento de Delegadores activos<br></br>Recuento de delegaciones activas<br></br>Recuento de holders<br></br>Recuento de subgrafos<br></br>Conteo de Curadores<br></br>Recuento de Indexadores activos<br></br>Recuento total de tarifas de consulta<br></br>GRT total en stake<br></br>GRT total delegado por los Delegadores<br></br>GRT total señalado por Curadores<br></br>GRT total delegado por Indexadores<br></br>GRT total quemado</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleTMobile() {
  const message = this.createChatbotMessage(<a><strong>Deutsche Telekom y T‑Mobile EE. UU. lanzan un nuevo desafío T que busca el desarrollo de Web3 a través de 5G</strong><br></br><br></br>Vuelve la competencia global para startups, desarrolladores e investigadores que premian soluciones innovadoras que utilizan redes 5G, esta vez en busca de tecnologías Web3 para cambiar la forma en que el mundo usa Internet.<br></br><br></br>BONN, Alemania y BELLEVUE, Wash. — 2 de noviembre de 2022 — Deutsche Telekom AG y T-Mobile US, Inc. (NASDAQ: TMUS) se unieron para lanzar el tercer T Challenge anual, el escenario global para que los innovadores y disruptores compitan por un premio a las mejores soluciones de Public Blockchain Protocol para Web3. Las soluciones creadas por los participantes aprovecharán el poder de 5G para dar vida a Web3, con 5G desempeñando un papel importante en la forma en que los usuarios se mantienen conectados a estas innovaciones.<br></br><br></br>Las presentaciones están oficialmente abiertas desde ahora hasta el 20 de enero de 2023. Seis ganadores dividirán 600 000 euros (aproximadamente lo mismo en dólares estadounidenses) y un viaje con todos los gastos pagados a Bonn, Alemania, para presentar sus ideas a Deutsche Telekom y T-Mobile US.<br></br><br></br>Para leer el artículo completo que menciona The Graph, consulta <a className="cla" href="https://www.t-mobile.com/news/network/2023-t-challenge" target="_blank" rel="noreferrer">aquí</a>.</a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}


handleSolana() {
  this.handleSubstreams = this.handleSubstreams.bind(this);
  const message = this.createChatbotMessage(<a><strong>The Graph ahora es compatible con Solana con Substreams</strong><br></br><br></br>The Graph Foundation se complace en anunciar el apoyo a Solana con <a className="cla" onClick={this.handleSubstreams}><strong>Substreams</strong></a>. La comunidad de desarrolladores de Solana ahora puede comenzar a usar The Graph para crear dapps ultrarrápidos. Mediante el uso de la nueva tecnología de substreams, los desarrolladores pueden extraer e interpretar de manera eficiente los datos on-chain de la red principal beta de Solana para alimentar sus aplicaciones. Brindar soporte con substreams es el primer paso para traer subgrafos a Solana.<br></br><br></br>Substreams, que son completamente de código abierto, permiten a los desarrolladores de Solana construir con datos on-chain de formas completamente nuevas, gracias a su velocidad y eficiencia. Los desarrolladores pueden usar módulos de subflujos, codificados en Rust, para crear flujos de datos específicos del protocolo o conjuntos de datos analíticos de todo el mercado. También se pueden usar para generar notificaciones en tiempo real y mostrar información de series temporales extensas. Saliendo de jardines amurallados, los desarrolladores de substreams pueden aprovechar los streams creados por otros para ahorrar tiempo y pueden potenciar todo el ecosistema web3 al hacer que su trabajo esté abiertamente disponible y componible. Como resultado, los flujos secundarios dan lugar a casos de uso nuevos e innovadores en toda la comunidad de desarrolladores de Solana.<br></br><br></br>Desarrollado por StreamingFast, un Core Dev en el ecosistema The Graph, Substreams abre la puerta a muchos beneficios, que incluyen: alimentar cualquier sistema de datos a través de vehículos específicos de tecnología, reutilizar el código Rust de su programa Solana para leer datos on-chain, una experiencia de depuración enfocada en láser, refinamiento comunitario y componible de flujos de datos y reorganización confiable -corrientes conscientes.<br></br><br></br>Una verdadera tecnología que cambia la industria, los substreams están preparados para desbloquear el rendimiento de los subgrafos con el procesamiento de datos en paralelo para aumentar considerablemente las velocidades de sincronización. A través de un motor paralelo escalable horizontalmente, substreams son capaces de multiplicar el rendimiento histórico de la indexación por más de 100 veces.<hr></hr><a className="cla" href="https://twitter.com/blockya_?s=21&t=_AHHnNQtdCGiQCZd0gn2MA" target="_blank" rel="noreferrer">Lorena Fabris</a> de <a className="cla" href="https://twitter.com/espanolgraph?s=21&t=mAEXMZH5ZSdPi-3W3mSb_Q" target="_blank" rel="noreferrer">The Graph Español</a> ha creado los siguientes tutoriales para la comunidad.<br></br><br></br><a className="cla" href="https://fabris-86569.medium.com/the-graph-ahora-soporta-solana-con-substreams-5b4893c8469c" target="_blank" rel="noreferrer">The Graph ahora soporta Solana con Substreams</a></a>
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
    const message = this.createChatbotMessage(<a><strong>¡The Graph cumplió 2 años el 17 de diciembre de 2022!</strong><br></br><br></br>Muchas personas de todo el mundo ayudaron a celebrar el lanzamiento de The Graph Network en mainnet y el compromiso con la descentralización asistiendo a uno de los siguientes seis eventos de cumpleaños dirigidos por la comunidad. ¡El <strong>FOMO</strong>era real! Puedess escuchar el Twitter Space <a className="cla" href="https://twitter.com/i/spaces/1vOGwMQpzPgxB" target="_blank" rel="noreferrer">aquí</a>. Si te lo perdiste, no te preocupes, puedes ponerte al día haciendo clic en los botones a continuación.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Ámsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubái</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapur</strong></button><br></br><br></br>A medida que se comparta más contenido, estos se actualizarán.</a>
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
      const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/colsongrteacher?s=21&t=G1z0E5ndRT5F549tsuRY2A' target="_blank" rel="noreferrer"><strong>Colson</strong></a> fue el anfitrión de The Graph, celebración del segundo cumpleaños en Amstel Boathouse en Amsterdam.<br></br><br></br>Esperando que se publique el contenido del evento...<br></br><br></br>También puedes consultar los otros eventos a continuación.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubái</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapur</strong></button></a>
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
        const message = this.createChatbotMessage(<a>The Graph, celebración del segundo cumpleaño en Area3 El Salvador en Buenos Aires.<br></br><br></br>Puedes ponerte al día sobre el evento a través de este feed de Twitter hecho por The Graph Español, <a className="cla" href='https://twitter.com/espanolgraph/status/1604257219628916736?s=46&t=MuGXfy1qv8hl2x-HpLcfAg' target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>También puede consultar los otros eventos a continuación.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Ámsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubái</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapur</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/Mardeni01' target="_blank" rel="noreferrer">Ahmad Mardeni</a> fue el anfitrión de The Graph, celebración del segundo cumpleaños en OPM Room en Dubai.<br></br><br></br>Puedes ponerte al día con el evento a través de su cuenta de Twitter, <a className="cla" href='https://twitter.com/mardeni01/status/1604127593007120384?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">aquí</a> y <a className="cla" href='https://twitter.com/mardeni01/status/1604205523619946498?s=46&t=vRjcr-wI108PYfUsXdjW8A' target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>También puede consultar los otros eventos a continuación.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Ámsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapur</strong></button></a>
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
          const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/thegraphnations?s=21&t=2oybVC4qbnXUtBbgmnvSqw' target="_blank" rel="noreferrer">TheGraphNation</a> organizó The Graph, celebración del segundo cumpleaños en The Lekki Coliseum (TLC) en Lagos.<br></br><br></br>Puedes ponerte al día con el evento a través de su cuenta de Twitter, <a className="cla" href='https://twitter.com/thegraphnations/status/1603831459629891585?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>También puedes consultar los otros eventos a continuación.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Ámsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubái</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapur</strong></button></a>
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
            const message = this.createChatbotMessage(<a>The Graph, celebración del segundo cumpleaños en Edge & Node House de Web3 en San Francisco.<br></br><br></br>Puedes ponerte al día sobre el evento a través de su Twitter, <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603952216540213248?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">aquí</a> y <a className="cla" href='https://twitter.com/thehouseofweb3/status/1603990278322507780?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>También puedes consultar los otros eventos a continuación.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Ámsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubái</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSingapore}><strong>Singapur</strong></button></a>
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
              const message = this.createChatbotMessage(<a><a className="cla" href='https://twitter.com/impranavm_?s=21&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">Pranav Maheshwari</a> fue el anfitrión de The Graph, la celebración del segundo cumpleaños en Singapur.<br></br><br></br>Puedes ponerte al día con el evento a través de su cuenta de Twitter, <a className="cla" href='https://twitter.com/impranavm_/status/1604024407789182976?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">aquí</a> y <a className="cla" href='https://twitter.com/impranavm_/status/1603991615009304576?s=46&t=r4peiYyrFwivfoMTxM5ngA' target="_blank" rel="noreferrer">aquí</a>.<br></br><br></br>También puedes consultar los otros eventos a continuación.<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonAmsterdam}><strong>Ámsterdam</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonBuenosAires}><strong>Buenos Aires</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDubai}><strong>Dubái</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLagos}><strong>Lagos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSanFrancisco}><strong>San Francisco</strong></button></a>
                ,
              );
              this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
              }));
            }

  handleNews() {
    const message = this.createChatbotMessage(<a>Si deseas mantenerte al día con las últimas noticias sobre The Graph, nuevos anuncios de asociación y leer sobre lo que está sucediendo dentro de la comunidad, los enlaces a continuación pueden ayudarte con eso.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">The Graph Blog</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a><hr></hr>Asegúrate de seguir también a The Graph en <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">Twitter</a>.</a>
      ,
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

handleHello() {
  const message = this.createChatbotMessage(
    "Hola, ¿cómo puedo ayudarte hoy?",
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
  const message = this.createChatbotMessage(<a>¡También puede usar los botones a continuación y desplazarte hacia abajo para encontrar una respuesta!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Curador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Indexador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Core Devs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgrafo</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Estadísticas en tiempo real</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Comunidad</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Noticias</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Aprende sobre Web3</strong></button></a>
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
  const message = this.createChatbotMessage(<a><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Curador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Indexador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Core Devs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgrafo</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Estadísticas en tiempo real</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Comunidad</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Noticias</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Aprende sobre Web3</strong></button></a>
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
  this.handleGraphQLApi = this.handleGraphQLApi.bind(this);
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
  }}><strong>Council</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCoreDevs();
  }}><strong>Core Devs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFoundingMembers();
    this.handleButtonTheGraph();
  }}><strong>Miembros Fundacionales</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHostedService();
    this.handleButtonTheGraph();
  }}><strong>Servicio Alojado</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonTheGraph();
  }}><strong>Desaparición del Servicio Alojado</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonTheGraph();
  }}><strong>Datos descentralizados</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoadMap();
    this.handleButtonTheGraph();
  }}><strong>Roadmap</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleRoles();
    this.handleButtonTheGraph();
  }}><strong>Roles del ecosistema</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleJob();
    this.handleButtonTheGraph();
  }}><strong>Trabajo</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBirthday();
    this.handleButtonTheGraph();
  }}><strong>Cumpleaños</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphDay();
    this.handleButtonTheGraph();
  }}><strong>Graph Day</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleParticipantUpdate();
    this.handleButtonTheGraph();
  }}><strong>Actualización de Participantes</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
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
  }}><strong>Dirección del contrato de GRT</strong></button>
  
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menú Categorías</strong></button></a>
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
  
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menú Categorías</strong></button></a>
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
  }}><strong>Guías de Delegación</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDelegateWithWallet();
    this.handleButtonDelegator();
  }}><strong>Delegar utilizando una wallet</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCoinbase();
    this.handleButtonDelegator();
  }}><strong>Delegar desde Coinbase Wallet</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleFeesToDelegate();
    this.handleButtonDelegator();
  }}><strong>Tarifas de Delegación</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleUnDelegating();
    this.handleButtonDelegator();
  }}><strong>Cancelar la delegación</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTenderize();
    this.handleButtonDelegator();
  }}><strong>Tenderize</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleChoosingIndexers();
    this.handleButtonDelegator();
  }}><strong>Seleccionar un Indexador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonDelegator();
  }}><strong>Comparar Indexadores</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonDelegator();
  }}><strong>Cantidad de Delegadores activos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonDelegator();
  }}><strong>Cantidad de delegación activa</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonDelegator();
  }}><strong>Cantidad total de GRT delegado por los Delegadores</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menú Categorías</strong></button></a>
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
  }}><strong>Rol de Curador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorTools();
    this.handleButtonCurator();  
  }}><strong>Herramientas para Curadores</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonCurator();
  }}><strong>Cantidad de Curadores</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonCurator();
  }}><strong>Cantidad total de GRT señalado por los Curadores</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menú Categorías</strong></button></a>
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
  }}><strong>Seleccionar un Indexador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerCompare();
    this.handleButtonIndexer();
  }}><strong>Comparar Indexadores</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBecomeIndexer();
    this.handleButtonIndexer();
  }}><strong>Conviértete en Indexador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerHardwareRequirements();
    this.handleButtonIndexer();
  }}><strong>Requerimientos de hardware para Indexadores</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerMap();
    this.handleButtonIndexer();
  }}><strong>Mapa de los Indexadores</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexerOfficeHours();
    this.handleButtonIndexer();
  }}><strong>Indexer Office Hours</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleIndexingRewardsAndQueryFees();
    this.handleButtonIndexer();
  }}><strong>Recompensas de indexación</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleQueryFeesAndIndexingRewardCut();
    this.handleButtonIndexer();
  }}><strong>Recortes en las Tarifas de Consulta y Recompensas de Indexación</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAllocations();
    this.handleButtonIndexer();
  }}><strong>Allocations</strong></button><br class="no-show-monitor"></br>
 <button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonIndexer();
  }}><strong>Cantidad de Indexadores Activos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonIndexer();
  }}><strong>Cantidad Total de GRT Delegado por Indexadores</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menú Categorías</strong></button></a>
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
  }}><strong>Subgrafos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubstreams();
    this.handleButtonSubgraph();
  }}><strong>Substreams</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSunsettingHostedService();
    this.handleButtonSubgraph();
  }}><strong>Desaparición del Servicio Alojado</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleDecentralisedData();
    this.handleButtonSubgraph();
  }}><strong>Datos Descentralizados</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleVsSelfHosting();
    this.handleButtonSubgraph();
  }}><strong>Servicio Alojado VS Hosteo Independiente</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSoulBound();
    this.handleButtonSubgraph();
  }}><strong>SoulBound</strong></button><br class="no-show-monitor"></br>
  <button className="chatbot-button" onClick={() => {
    this.handleFireHose();
    this.handleButtonSubgraph();
  }}><strong>FireHose</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleQueryPython();
    this.handleButtonSubgraph();
  }}><strong>Consultar utilizando Python</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMessari();
    this.handleButtonSubgraph();
  }}><strong>Messari</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonSubgraph();
  }}><strong>Cantidad de Subgrafos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGitHub();
    this.handleButtonSubgraph();
  }}><strong>GitHub</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menú Categorías</strong></button></a>
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
  }}><strong>Actualización de los Participantes</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleHoldersCount();
    this.handleButtonStatistics();
  }}><strong>Cantidad de Holders</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegatorCount();
    this.handleButtonStatistics();
  }}><strong> Cantidad de Delegadores Activos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveIndexerCount();
    this.handleButtonStatistics();
  }}><strong>Cantidad de Indexadores Activos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCuratorsCount();
    this.handleButtonStatistics();
  }}><strong>Cantidad de Curadores</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleActiveDelegationCount();
    this.handleButtonStatistics();
  }}><strong> Cantidad de Delegación Activa</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalQueryFeesCount();
    this.handleButtonStatistics();
  }}><strong>Tarifas de Consulta</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSubgraphsCount();
    this.handleButtonStatistics();
  }}><strong>Cantidad de Subgrafos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTDelegatedByDelegators();
    this.handleButtonStatistics();
  }}><strong> Cantidad Total de GRT Delegado por los Delegadores</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalDelegatedGRTByIndexersCount();
    this.handleButtonStatistics();
  }}><strong>Cantidad total de GRT Delegado por los Indexadores</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTSignalledByCurators();
    this.handleButtonStatistics();
  }}><strong>Cantidad Total de GRT Señalado por los Curadores</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalStakedGRTCount();
    this.handleButtonStatistics();
  }}><strong>Cantidad Total de GRT en Stake</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTotalGRTBurnedCount();
    this.handleButtonStatistics();
  }}><strong>Cantidad Total de GRT Quemado</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menú Categorías</strong></button></a>
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
  }}><strong>Graph Día 2022</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleBirthday();
    this.handleButtonCommunity();
  }}><strong>Graph Cumpleaños</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleAdvocates();
    this.handleButtonCommunity();
  }}><strong>Graph Advocates</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGraphSocial();
    this.handleButtonCommunity();
  }}><strong>Graph Social</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handlePodcast();
    this.handleButtonCommunity();
  }}><strong>GRTiQ Pódcast</strong></button><hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menú Categorías</strong></button></a>
    ,
  );
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, message],
  }));
}

handleButtonNews() {
  this.handleButtonMenu = this.handleButtonMenu.bind(this);
  const message = this.createChatbotMessage(<a>Si deseas mantenerte al día con las últimas noticias sobre The Graph, nuevos anuncios de asociación y leer sobre lo que está sucediendo dentro de la comunidad, los enlaces a continuación pueden ayudarte con eso.<br></br><br></br><a className="cla" href="https://thegraph.com/blog/" target="_blank" rel="noreferrer">The Graph Blog</a><br></br><br></br><a className="cla" href="/GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a><br></br><br></br>Asegúrate de seguir también a The Graph en <a className="cla" href="https://twitter.com/graphprotocol" target="_blank" rel="noreferrer">Twitter</a>.<hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menú Categorías</strong></button></a>
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
  }}><strong>¿Qué es Web3?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCourses();
    this.handleButtonLearnWeb3();
  }}><strong>Cursos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLearnWeb3();
    this.handleButtonLearnWeb3();
  }}><strong>Aprende sobre Web3</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWhatIsABlockchain();
    this.handleButtonLearnWeb3();
  }}><strong>Blockchain</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSafe();
    this.handleButtonLearnWeb3();
  }}><strong>¿Es seguro?</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleWeb3DApp();
    this.handleButtonLearnWeb3();
  }}><strong>DApp Web3</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleCryptocurrencies();
    this.handleButtonLearnWeb3();
  }}><strong>Criptomonedas</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>Ethereum</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleGas();
    this.handleButtonLearnWeb3();
  }}><strong>Gas</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleEthereum();
    this.handleButtonLearnWeb3();
  }}><strong>Moneda o Token</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMining();
    this.handleButtonLearnWeb3();
  }}><strong>Minería</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleNFT();
    this.handleButtonLearnWeb3();
  }}><strong>NFT</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleMetaverse();
    this.handleButtonLearnWeb3();
  }}><strong>Metaverso</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleSmartContract();
    this.handleButtonLearnWeb3();
  }}><strong>Contrato Inteligente</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleStablecoin();
    this.handleButtonLearnWeb3();
  }}><strong>Stablecoin</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleLayerTwo();
    this.handleButtonLearnWeb3();
  }}><strong>Capa 2</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenEconomics();
    this.handleButtonLearnWeb3();
  }}><strong>Economía de tokens</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleTokenBurn();
    this.handleButtonLearnWeb3();
  }}><strong>Quema de tokens</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
    this.handleButtonCoreDevs();
    this.handleButtonLearnWeb3();
  }}><strong>Nodos</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={() => {
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
  }}><strong>Mujeres en Web3</strong></button>
  <hr></hr><button className="chatbot-button" onClick={this.handleButtonMenu}><strong>Menú Categorías</strong></button></a>
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
  const message = this.createChatbotMessage(<a>Lo siento, no pude encontrar la respuesta. ¿Puedess intentarlo de nuevo o reformular la pregunta? Si aún no puedo ayudarte, toma 2 minutos para completar el formulario de comentarios a continuación. Con tu ayuda, esto mejorará mi conocimiento y me permitirá ayudar a otros miembros de la comunidad GRT en el futuro que también puedan tener las mismas preguntas y buscar respuestas. ¡Gracias!
  
  {/* help start */}

  <br></br><br></br>¡También puede usar los botones a continuación y desplazarte hacia abajo para encontrar una respuesta!<br></br><br></br><button className="chatbot-button" onClick={this.handleButtonTheGraph}><strong>The Graph</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonDelegator}><strong>Delegador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCurator}><strong>Curador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonIndexer}><strong>Indexador</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCoreDevs}><strong>Core Devs</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonSubgraph}><strong>Subgrafo</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonStatistics}><strong>Estadísticas en tiempo real</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonCommunity}><strong>Comunidad</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonNews}><strong>Noticias</strong></button><br class="no-show-monitor"></br><button className="chatbot-button" onClick={this.handleButtonLearnWeb3}><strong>Aprende sobre Web3</strong></button>

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

export default ESPActionProvider;