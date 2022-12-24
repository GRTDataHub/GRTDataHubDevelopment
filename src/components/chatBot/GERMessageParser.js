// in MessageParser.js
class GERMessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase()
    // data and charts start
    if (lowercase.includes('active delegator count') || lowercase.includes('delegator count') || lowercase.includes('what is the active delegator count') || lowercase.includes('what is the active delegator count?') || lowercase.includes('active delegatos') || lowercase.includes('Anzahl der aktiven Delegierenden') || lowercase.includes('anzahl der delegierten')  || lowercase.includes('wie hoch ist die anzahl der aktiven delegierenden') || lowercase.includes('wie hoch ist die anzahl der aktiven delegierenden?')  || lowercase.includes('wie viele delegierte')  || lowercase.includes('wie viele delegierte?'))  {
      this.actionProvider.handleActiveDelegatorCount();
    }

    else if (lowercase.includes('coinbase') || lowercase.includes('coinbase wallet') || lowercase.includes('münzbasis') || lowercase.includes('munzbasis')) {
      this.actionProvider.handleCoinbase();
    }

    else if (lowercase.includes('soulbound') || lowercase.includes('no code subgraph') || lowercase.includes('soul bound') || lowercase.includes('kein code-subgraph') || lowercase.includes('kein code')) {
      this.actionProvider.handleSoulBound();
    }

    else if (lowercase.includes('web3 dapp') || lowercase.includes('web 3 dapp')) {
      this.actionProvider.handleWeb3DApp();
    }

    else if (lowercase.includes('birthday') || lowercase.includes('geburtstag') || lowercase.includes('jobangebote')) {
      this.actionProvider.handleBirthday();
    }


    else if (lowercase.includes('iphone') || lowercase.includes('iphone syncing metamask') || lowercase.includes('iphone syncing') || lowercase.includes('iphone metamaske synchronisieren') || lowercase.includes('iphone metamaske')) {
      this.actionProvider.handleIPhone();
    }

    
    else if (lowercase.includes('python') || lowercase.includes('how to use python to query the graph') || lowercase.includes('python to query') || lowercase.includes('query with python') || lowercase.includes('query using python') || lowercase.includes('query in python') || lowercase.includes('wie man python verwendet, um den graphen abzufragen') || lowercase.includes('python abzufragen') || lowercase.includes('abfrage mit python')) {
      this.actionProvider.handleQueryPython();
    }

    else if (lowercase.includes('graphqlapi') || lowercase.includes('graphql api') || lowercase.includes('graph ql api') || lowercase.includes('graphql')) {
      this.actionProvider.handleGraphQLApi();
    }

    else if (lowercase.includes('quarterly grt participant update') || lowercase.includes('grt participant update') || lowercase.includes('participant update') || lowercase.includes('vierteljährliche GRT teilnehmeraktualisierung') || lowercase.includes('grt teilnehmer-update') || lowercase.includes('teilnehmer aktualisieren')) {
      this.actionProvider.handleParticipantUpdate();
    }

    else if (lowercase.includes('grtiq') || lowercase.includes('podcast')) {
      this.actionProvider.handlePodcast();
    } 

    else if (lowercase.includes('graph social') || lowercase.includes('sozial')) {
      this.actionProvider.handleGraphSocial();
    } 

    else if (lowercase.includes('statistiken') || lowercase.includes('daten') || lowercase.includes('tägliche daten') || lowercase.includes('tagliche daten')) {
      this.actionProvider.handleStatistics();
    }

    else if (lowercase.includes('arbeit') || lowercase.includes('arbeitsplätze')) {
      this.actionProvider.handleJob();
    }

    else if (lowercase.includes('active delegation count') || lowercase.includes('what is the active delegation count') || lowercase.includes('what is the active delegation count?') || lowercase.includes('active delegations') || lowercase.includes('anzahl der aktiven delegationen') || lowercase.includes('aktive delegationen')) {
      this.actionProvider.handleActiveDelegationCount();
    }

    else if (lowercase.includes('holders count') || lowercase.includes('what is the holders count') || lowercase.includes('what is the holders count?') || lowercase.includes('holders')|| lowercase.includes('what is the holder count') || lowercase.includes('what is the holder count?') || lowercase.includes('holder') || lowercase.includes('holder count')  || lowercase.includes('how many holders') || lowercase.includes('how many holders?') || lowercase.includes('how many grt holders') || lowercase.includes('how many grt holders?') || lowercase.includes('halter zählen') || lowercase.includes('halter zahlen') || lowercase.includes('halter'))  {
      this.actionProvider.handleHoldersCount();
    }

    else if (lowercase.includes('subgraphs count') ||  lowercase.includes('what is the subgraphs count') || lowercase.includes('what is the subgraphs count?') || lowercase.includes('what is the subgraph count?') || lowercase.includes('subgraph count')|| lowercase.includes('what is the subgraph count?') || lowercase.includes('what is the subgraph count') || lowercase.includes('how many subgraphs') || lowercase.includes('how many subgraphs?') || lowercase.includes('untergraphen zählen') || lowercase.includes('untergraphen zahlen'))  {
      this.actionProvider.handleSubgraphsCount();
    }

    else if (lowercase.includes('curators count') ||  lowercase.includes('what is the curators count') || lowercase.includes('what is the curators count?') || lowercase.includes('what is the curator count?') || lowercase.includes('curator count')|| lowercase.includes('what is the curator count?') || lowercase.includes('what is the curator count') || lowercase.includes('how many curators') || lowercase.includes('how many curators?') || lowercase.includes('kuratoren zählen') || lowercase.includes('kuratoren zahlen'))  {
      this.actionProvider.handleCuratorsCount();
    }

    else if (lowercase.includes('active indexers count') ||  lowercase.includes('what is the active indexers count') || lowercase.includes('what is the active indexers count?') || lowercase.includes('what is the active indexers count?') || lowercase.includes('active indexer count')|| lowercase.includes('what is the active indexer count?') || lowercase.includes('what is the active indexer count') || lowercase.includes('how many indexers') || lowercase.includes('how many indexers?') || lowercase.includes('aktive indexer zählen') || lowercase.includes('aktive indexer zahlen') || lowercase.includes('wie viele indexer'))  {
      this.actionProvider.handleActiveIndexerCount();
    }

    else if (lowercase.includes('total grt delegated by delegators') ||  lowercase.includes('what is the total grt delegated by delegators') || lowercase.includes('what is the total grt delegated by delegators?') || lowercase.includes('what is the total amount of grt delegated by delegators?') || lowercase.includes('insgesamt von delegierenden delegiert') || lowercase.includes('delegierenden delegiert'))  {
      this.actionProvider.handleTotalGRTDelegatedByDelegators();
    }

    else if (lowercase.includes('total query fees count') ||  lowercase.includes('what is the total query fees count') || lowercase.includes('what is the total query fees count?') || lowercase.includes('what are the total query fees count?') || lowercase.includes('what are the total query fees count?') || lowercase.includes('what is the total query fees?') || lowercase.includes('what are the total query fees?') || lowercase.includes('gesamtabfragegebühren zählen')  ||  lowercase.includes('gesamtabfragegebühren zahlen'))  {
      this.actionProvider.handleTotalQueryFeesCount();
    }

    else if (lowercase.includes('total grt signalled by curators') ||  lowercase.includes('what is the total grt signalled by curators') || lowercase.includes('what is the total grt signalled by curators?') || lowercase.includes('what the total amount of grt signalled by curators?') || lowercase.includes('what the total amount of grt signalled by curators') || lowercase.includes('how many signalled') || lowercase.includes('how many signalled?') || lowercase.includes('how many signalled grt') || lowercase.includes('how many signalled grt?') || lowercase.includes('gesamtgrt von kuratoren signalisiert') || lowercase.includes('signalisiert'))  {
      this.actionProvider.handleTotalGRTSignalledByCurators();
    }

    else if (lowercase.includes('total staked grt') ||  lowercase.includes('what is the total staked grt') || lowercase.includes('what is the total staked grt?') || lowercase.includes('what the total amount of staked grt?') || lowercase.includes('what the total amount of staked grt') ||  lowercase.includes('what is the total grt staked') || lowercase.includes('what is the total grt staked?') || lowercase.includes('what the total amount of grt staked?') || lowercase.includes('what the total amount of grt staked') || lowercase.includes('total grt staked') || lowercase.includes('how many staked') || lowercase.includes('how many staked?') || lowercase.includes('how many total staked') || lowercase.includes('how many total staked?') || lowercase.includes('how many grt staked') || lowercase.includes('how many grt staked') || lowercase.includes('how many total staked') || lowercase.includes('how many total staked?') || lowercase.includes('how many grt staked') || lowercase.includes('insgesamt abgesteckt') || lowercase.includes('abgesteckt'))  {
      this.actionProvider.handleTotalStakedGRTCount();
    }

    else if (lowercase.includes('total delegated grt by indexers') ||  lowercase.includes('what is the total delegated grt by indexers') || lowercase.includes('what is the total delegated grt by indexers?') || lowercase.includes('what the amount of grt delegated by indexers?') || lowercase.includes('what the amount of grt delegated by indexers') ||  lowercase.includes('total grt delegated by indexers') || lowercase.includes('what is the total grt delegated by indexers?') || lowercase.includes('insgesamt von indexern delegiert') || lowercase.includes('von indexierern delegiert'))  {
      this.actionProvider.handleTotalDelegatedGRTByIndexersCount();
    }
    
    else if (lowercase.includes('total grt burned') ||  lowercase.includes('what is the total grt burned') || lowercase.includes('what is the total grt burned?') || lowercase.includes('what the amount of total grt burned?') || lowercase.includes('what the amount of total grt burned') ||  lowercase.includes('total burnt burned') || lowercase.includes('what is the total burnt burned?') || lowercase.includes('what is the total burnt burned') || lowercase.includes('how many burned') || lowercase.includes('how many burned?') || lowercase.includes('how many grt burned') || lowercase.includes('how many grt burned?') || lowercase.includes('how much burned') || lowercase.includes('how much burned?')  || lowercase.includes('total burned grt') || lowercase.includes('total burnt grt') || lowercase.includes('total verbrannt') || lowercase.includes('verbrannt'))  {
      this.actionProvider.handleTotalGRTBurnedCount();
    }
      // data and charts end

      else if (lowercase.includes('undelegating') || lowercase.includes('undelegation') || lowercase.includes('undelegate') || lowercase.includes('unstake') || lowercase.includes('unstaking') || lowercase.includes('what is undelegating') || lowercase.includes('what is undelegating?') || lowercase.includes('what is undelegation?') || lowercase.includes('what is undelegation') || lowercase.includes('how long to undelegate') || lowercase.includes('how long to undelegate?') || lowercase.includes('how long to unstake?') || lowercase.includes('how long to unstake') || lowercase.includes('28 days') || lowercase.includes('why is undelegation period 28 days?') || lowercase.includes('thaw') || lowercase.includes('what is an epoch?') || lowercase.includes('what is an epoch') || lowercase.includes('epoch?') || lowercase.includes('epoch') || lowercase.includes('how long is a epoch') || lowercase.includes('how long is a epoch?') || lowercase.includes('undelegieren')) {
        this.actionProvider.handleUnDelegating();
      } 

      else if (lowercase.includes('choose indexer') || lowercase.includes('choose indexers')|| lowercase.includes('how to choose indexer') || lowercase.includes('how to choose indexer?') || lowercase.includes('how do i choose indexer')|| lowercase.includes('how do i choose indexer?') || lowercase.includes('how do i choose indexers') || lowercase.includes('how do i choose indexers') || lowercase.includes('how to find indexer') || lowercase.includes('how to find indexer?') || lowercase.includes('find indexer')  || lowercase.includes('find good indexer') || lowercase.includes('how to find a good indexer') || lowercase.includes('how to find a good indexer?') || lowercase.includes('how to find a profitable indexer') || lowercase.includes('how to find a profitable indexer?')  || lowercase.includes('how to find a profitable indexers') || lowercase.includes('how to find a profitable indexers?') || lowercase.includes('compare indexer') || lowercase.includes('compare indexers') || lowercase.includes('compare')  || lowercase.includes('how do i compare indexers') || lowercase.includes('how do i compare indexers?') || lowercase.includes('indexierer wählen') || lowercase.includes('indexierer wahlen') || lowercase.includes('indexierer finden') || lowercase.includes('apy')) {
        this.actionProvider.handleChoosingIndexers();
      } 

      else if (lowercase.includes('effective indexer') || lowercase.includes('good indexer')|| lowercase.includes('be an indexer') || lowercase.includes('be a indexer') || lowercase.includes('guter indexierer')|| lowercase.includes('ein Indexer sein') || lowercase.includes('Wie man ein effektiver Indexer wird') || lowercase.includes('effektiver')) {
        this.actionProvider.handleBecomeIndexer(); 
      } 

    else if (lowercase.includes('edge and node') || lowercase.includes('edge & node')|| lowercase.includes('what is edge and node') || lowercase.includes('what is edge & node') || lowercase.includes('what is edge and node?') || lowercase.includes('what is edge & node') || lowercase.includes('who are edge & node?') || lowercase.includes('who are edge & node') || lowercase.includes('who are edge and node') || lowercase.includes('who are edge and node?') || lowercase.includes('kante und knoten') || lowercase.includes('edge und node')) {
      this.actionProvider.handleEdgeAndNode();
    } 

    else if (lowercase.includes('graphtronauts') || lowercase.includes('who are the graphtronauts')|| lowercase.includes('who are the graphtronauts?') || lowercase.includes('what are the graphtronauts?') || lowercase.includes('what are the graphtronauts')) {
      this.actionProvider.handleGraphtronauts();
    } 

    else if (lowercase.includes('graph day') || lowercase.includes('graph hack') || lowercase.includes('graph tag') || lowercase.includes('graph hacken')) {
      this.actionProvider.handleGraphDay();
    } 

    else if (lowercase.includes('the graph foundation') || lowercase.includes('graph foundation')|| lowercase.includes('what is the graph foundation') || lowercase.includes('what is the graph foundation?') || lowercase.includes('what is graph foundation?') || lowercase.includes('what is graph foundation') || lowercase.includes('who are the graph foundation?') || lowercase.includes('who are the graph foundation') || lowercase.includes('who are graph foundation') || lowercase.includes('who are graph foundation?') || lowercase.includes('die graph grundlage')) { 
      this.actionProvider.handleTheGraphFoundation();
    } 
    else if (lowercase.includes('the graph council') || lowercase.includes('graph council')|| lowercase.includes('what is the graph council') || lowercase.includes('what is the graph council?') || lowercase.includes('what is graph council?') || lowercase.includes('what is graph council') || lowercase.includes('who are the graph council?') || lowercase.includes('who are the graph council') || lowercase.includes('who are graph council') || lowercase.includes('who are graph council?') || lowercase.includes('who are graph council?') || lowercase.includes('der graph rat')) {
      this.actionProvider.handleTheGraphCouncil(); 
    } 

    else if (lowercase.includes('the graph discord') || lowercase.includes('graph discord')|| lowercase.includes('what is the graph discord') || lowercase.includes('what is the graph discord?') || lowercase.includes('what is graph discord channel?') || lowercase.includes('what is graph discord channel') || lowercase.includes('what is the official discord') || lowercase.includes('what is the official discord?') || lowercase.includes('what is the official discord channel?') || lowercase.includes('what is the official discord channel') || lowercase.includes('what is the graph official discord?') || lowercase.includes('what is the graph official discord')|| lowercase.includes('what is the graph official discord channel?') || lowercase.includes('what is the graph official discord channel') || lowercase.includes('what is the official discord server?') || lowercase.includes('what is the official discord server') || lowercase.includes('what is the official discord server address') || lowercase.includes('what is the official discord server address?') || lowercase.includes('what is the graph official discord server?')|| lowercase.includes('what is the graph official discord server') || lowercase.includes('what is the graph official discord server address?') || lowercase.includes('what is the graph official discord server address') || lowercase.includes('der graph discord')) {
      this.actionProvider.handleGraphDiscord();
    } 

    else if (lowercase.includes('rewards') || lowercase.includes('indexing rewards')|| lowercase.includes('what are rewards') || lowercase.includes('what are rewards?') || lowercase.includes('what are indexing rewards?') || lowercase.includes('what are indexing rewards') || lowercase.includes('delegator rewards') || lowercase.includes('what are delegator rewards?') || lowercase.includes('what are deleagtor rewards') || lowercase.includes('when will i get rewards') || lowercase.includes('when will i get rewards?') || lowercase.includes('when will i recieve rewards')|| lowercase.includes('when will i recieve rewards?') || lowercase.includes('when rewards') || lowercase.includes('when rewards?') || lowercase.includes('how long until i get rewards') || lowercase.includes('how long until i get rewards?') || lowercase.includes('belohnung') || lowercase.includes('belohnen')) {
      this.actionProvider.handleRewards();  
    } 

    else if (lowercase.includes('query fees') || lowercase.includes('what are query fees')|| lowercase.includes('what are query fees?') || lowercase.includes('what is a query fee') || lowercase.includes('what is a query fee?') || lowercase.includes('explain query fees') || lowercase.includes('abfragegebühren') || lowercase.includes('anfrage honorare')) {
      this.actionProvider.handleQueryFees();  
    } 

    else if (lowercase.includes('how are indexing rewards distributed') || lowercase.includes('how are indexing rewards distributed?')|| lowercase.includes('how are query fees distributed') || lowercase.includes('how are query fees distributed?') || lowercase.includes('how are indexing rewards and query fees distributed') || lowercase.includes('how are indexing rewards and query fees distributed?') || lowercase.includes('belohnungen verteilt')) {
      this.actionProvider.handleIndexingRewardsAndQueryFees();  
    } 

    else if (lowercase.includes('poi') || lowercase.includes('po?')|| lowercase.includes('what is poi') || lowercase.includes('what is poi?') || lowercase.includes('proof of indexing') || lowercase.includes('proof of indexing?') || lowercase.includes('proof of index') || lowercase.includes('proof of index?') || lowercase.includes('what is proof of index') || lowercase.includes('what is proof of index?') || lowercase.includes('what is proof of indexing') || lowercase.includes('what is proof of indexing?') || lowercase.includes('nachweis der indizierung') || lowercase.includes('indexnachweis')) { 
      this.actionProvider.handlePOI();   
    } 

    else if (lowercase.includes('hardware needed for indexing') || lowercase.includes('hardware required for indexing')|| lowercase.includes('indexing hardware requirements') || lowercase.includes('what are the indexing hardware requirements?') || lowercase.includes('hardware required for indexer')|| lowercase.includes('indexer hardware requirements') || lowercase.includes('what are the indexer hardware requirements?') || lowercase.includes('what are the indexer hardware requirements') || lowercase.includes('what is the indexer hardware requirements?') || lowercase.includes('what is the indexer hardware requirements') || lowercase.includes('what are the hardware requirements?') || lowercase.includes('what is the hardware requirements') || lowercase.includes('what are the hardware requirements?') || lowercase.includes('hardware requirements for indexing') || lowercase.includes('hardware requirements for indexing?') || lowercase.includes('what is the hardware requirements for indexing') || lowercase.includes('what is the hardware requirements for indexing?') || lowercase.includes('what are the hardware requirements for indexing') || lowercase.includes('what are the hardware requirements for indexing?') || lowercase.includes('what is the required indexing hardware?') || lowercase.includes('what is the required indexing hardware') || lowercase.includes('hardware')) {
      this.actionProvider.handleIndexerHardwareRequirements();
    } 

    
    else if (lowercase.includes('allocation') || lowercase.includes('allocations')|| lowercase.includes('what is allocation?') || lowercase.includes('what is allocation') || lowercase.includes('what is a allocation')|| lowercase.includes('what is a allocation?') || lowercase.includes('what is an allocation') || lowercase.includes('what is an allocation?') || lowercase.includes('what are allocations') || lowercase.includes('what are allocations?') || lowercase.includes('when do allocations close')  || lowercase.includes('what does an allocation mean?') || lowercase.includes('what does an allocation mean') || lowercase.includes('closing allocation') || lowercase.includes('closing allocations') || lowercase.includes('zuweisung') || lowercase.includes('zuweisungen')) {  
      this.actionProvider.handleAllocations();
    } 

    else if (lowercase.includes('curator tools') || lowercase.includes('tools for curator')|| lowercase.includes('curator tool') || lowercase.includes('tool for curator') || lowercase.includes('tool for curators') || lowercase.includes('tools for curators') || lowercase.includes('kurator-tools') || lowercase.includes('kurator tools') || lowercase.includes('werkzeuge für kuratoren') || lowercase.includes('werkzeuge fur kuratoren'))  {
      this.actionProvider.handleCuratorTools(); 
    } 

    else if (lowercase.includes('tools') || lowercase.includes('tools to find indexer')|| lowercase.includes('what tools can i use to find an indexer?') || lowercase.includes('what tools can i use to find an indexer') || lowercase.includes('what tools can i use?') || lowercase.includes('werkzeug')) {
      this.actionProvider.handleTools(); 
    } 

    else if (lowercase.includes('curator') || lowercase.includes('what is a curator')|| lowercase.includes('what is a curator?') || lowercase.includes('curators') || lowercase.includes('curation') || lowercase.includes('bonding curve') || lowercase.includes('bonding curves') || lowercase.includes('signal subgraph') || lowercase.includes('signal a subgraph') || lowercase.includes('signalling a subgraph') || lowercase.includes('bonding curves') || lowercase.includes('verify subgraph') || lowercase.includes('verify a subgraph') || lowercase.includes('verifying a subgraph') || lowercase.includes('legit subgraph') || lowercase.includes('real subgraph') || lowercase.includes('check subgraph') || lowercase.includes('legitimate subgraph') || lowercase.includes('subgraph is legitimate') || lowercase.includes('kurator') || lowercase.includes('kuratorin') || lowercase.includes('kuratoren') || lowercase.includes('kuratorinnen') || lowercase.includes('bindungskurve') || lowercase.includes('singal einen untergraphen') || lowercase.includes('signalisierung eines untergraphen') || lowercase.includes('bindungskurven') || lowercase.includes('verifizieren') || lowercase.includes('verifizieren') || lowercase.includes('legitim') || lowercase.includes('überprüfen') || lowercase.includes('uberprüfen'))  {
      this.actionProvider.handleCurator();  
    } 

    else if (lowercase.includes('guide') || lowercase.includes('help guide')|| lowercase.includes('guides') || lowercase.includes('help guides') || lowercase.includes('staking') || lowercase.includes('staking guide') || lowercase.includes('what is delegating?') || lowercase.includes('what is delegating') || lowercase.includes('where do i stake') || lowercase.includes('where do i stake?') || lowercase.includes('where do i delegate') || lowercase.includes('where do i delegate?') || lowercase.includes('how do i stake?') || lowercase.includes('how do i stake') || lowercase.includes('how do i delegate') || lowercase.includes('how do i delegate?') || lowercase.includes('delegator') || lowercase.includes('delegation') || lowercase.includes('what indexer to choose') || lowercase.includes('what indexer to choose?') || lowercase.includes('what indexer do i choose?') || lowercase.includes('what indexer do i choose') || lowercase.includes('choose an indexer') || lowercase.includes('how do i find an indexer') || lowercase.includes('how do i find an indexer?') || lowercase.includes('is it hard to delegate?') || lowercase.includes('is it hard to delegate') || lowercase.includes('how hard is it to delegate?') || lowercase.includes('how hard is it to delegate') || lowercase.includes('is delegating hard') || lowercase.includes('is delegating hard?') || lowercase.includes('is delegating hard') || lowercase.includes('is delegating easy?') || lowercase.includes('is it easy to delegate?')  || lowercase.includes('is it easy to delegate') || lowercase.includes('delegate') || lowercase.includes('stake') || lowercase.includes('safe to delegate') || lowercase.includes('führen') || lowercase.includes('abstecken') || lowercase.includes('einsatz') || lowercase.includes('delegieren') || lowercase.includes('delegiere')) {
      this.actionProvider.handleDelegateGuides(); 
    }
    
    else if (lowercase.includes('indexer office hours') || lowercase.includes('office hours') || lowercase.includes('indexers office hours') || lowercase.includes('indexer office hour') || lowercase.includes('indexers office hour') || lowercase.includes('geschäftszeiten') || lowercase.includes('geschaftszeiten') || lowercase.includes('ioh')) {
      this.actionProvider.handleIndexerOfficeHours(); 
    }

    else if (lowercase.includes('chainlink') || lowercase.includes('graph like chainlink') || lowercase.includes('graph similar to chainlink') || lowercase.includes('graph vs chainlink') || lowercase.includes('the graph like chainlink')) {
      this.actionProvider.handleChainlink();
    }
    else if (lowercase.includes('how do i create a subgraph') || lowercase.includes('how do i create a subgraph?') || lowercase.includes('what is a subgraph') || lowercase.includes('what is a subgraph?') || lowercase.includes('what are subgraphs') || lowercase.includes('what are subgraphs?') || lowercase.includes('how to make subgraph') || lowercase.includes('how to make subgraph?') || lowercase.includes('create subgraph') || lowercase.includes('deploy subgraph') || lowercase.includes('deploying subgraph') || lowercase.includes('how to deploy subgraph') || lowercase.includes('how to deploy subgraph?') || lowercase.includes('how to deploy subgraphs?') || lowercase.includes('how to deploy a subgraphs') || lowercase.includes('how to create a subgraph') || lowercase.includes('how to create a subgraph?') || lowercase.includes('how to create subgraph') || lowercase.includes('how to create subgraph') || lowercase.includes('how to build a subgraph?') || lowercase.includes('how to build subgraph') || lowercase.includes('how do i build subgraph') || lowercase.includes('how do i build subgraph?') || lowercase.includes('how to build a subgraph?') || lowercase.includes('how to build a subgraph') || lowercase.includes('how do i build a subgraph') || lowercase.includes('how do i build a subgraph?') || lowercase.includes('subgraph') || lowercase.includes('subgraphs')  || lowercase.includes('how do i deploy a subgraph')  || lowercase.includes('how do i deploy a subgraph?') || lowercase.includes('schaffen') || lowercase.includes('einsetzen') || lowercase.includes('verteilen')) {
      this.actionProvider.handleSubgraph(); 
    } 

    else if (lowercase.includes('what are the roles') || lowercase.includes('what are the roles?')|| lowercase.includes('what are the GRT roles') || lowercase.includes('what are the GRT roles?') || lowercase.includes('roles') || lowercase.includes('GRT roles') || lowercase.includes('what are the indexers in the graph network') || lowercase.includes('what are indexers in the graph network?') || lowercase.includes('what are curators in the graph network') || lowercase.includes('what are curators in the graph network?') || lowercase.includes('what are delegators in the graph network?') || lowercase.includes('what are delegators in the graph network') || lowercase.includes('what are delegators?') || lowercase.includes('what are delegators') || lowercase.includes('what are curators?') || lowercase.includes('what are curators') || lowercase.includes('what are indexers?') || lowercase.includes('curator') || lowercase.includes('curators')|| lowercase.includes('delegators') || lowercase.includes('what is a indexer?') || lowercase.includes('what is a indexer') || lowercase.includes('what is an indexer?') || lowercase.includes('what is an indexer') || lowercase.includes('what is a delegator') || lowercase.includes('what is a delegator?') || lowercase.includes('what is a indexer') || lowercase.includes('what is an indexer') || lowercase.includes('what is a indexer?') || lowercase.includes('what is a indexer?') || lowercase.includes('indexer')  || lowercase.includes('what can i do with grt?') || lowercase.includes('what can i do with grt?') || lowercase.includes('rollen')) {
      this.actionProvider.handleRoles(); 
    } 

    else if (lowercase.includes('fees to delegate') || lowercase.includes('delegation fees')|| lowercase.includes('cost to delegate') | lowercase.includes('delegate cost') ||  lowercase.includes('what are fees to delegate') || lowercase.includes('what are fees to delegate?') || lowercase.includes('what are the fees to delegate') || lowercase.includes('what are the fees to delegate?') || lowercase.includes('what are the delegation fees')  || lowercase.includes('what are the delegation fees') || lowercase.includes('what are the delegation fees?')  || lowercase.includes('delegation fees?') || lowercase.includes('what are the costs to delegate') || lowercase.includes('what are the costs to delegate?') || lowercase.includes('risks to delegating') || lowercase.includes('is it expensive to delegate') || lowercase.includes('is it expensive to delegate?') || lowercase.includes('expensive to delegate') || lowercase.includes('delegator expenses') || lowercase.includes('delegation expenses') || lowercase.includes('gebühren zu delegieren') || lowercase.includes('gebuhren zu delegieren') || lowercase.includes('delegationsgebühren') || lowercase.includes('delegator honorare') || lowercase.includes('delegation honorare')) {
      this.actionProvider.handleFeesToDelegate();   
    } 

    else if (lowercase.includes('can i delegate with a wallet') || lowercase.includes('can i delegate with a wallet?')|| lowercase.includes('delegate with wallet') | lowercase.includes('delegate with a wallet') ||  lowercase.includes('wallet to delegate') || lowercase.includes('delegating with wallet') || lowercase.includes('delegating with a wallet') || lowercase.includes('wallet')  || lowercase.includes('metamask') || lowercase.includes('deposit') || lowercase.includes('geldbörse') || lowercase.includes('geldborse') || lowercase.includes('hinterlegung')) {
      this.actionProvider.handleDelegateWithWallet(); 
    }  

    else if (lowercase.includes('query fees cut') || lowercase.includes('indexer reward cut')|| lowercase.includes('indexing reward cut') || lowercase.includes('query fee cut') || lowercase.includes('what is the query fee cut')|| lowercase.includes('what is the query fee cut?') || lowercase.includes('what is the indexer reward cut') || lowercase.includes('what is the indexer reward cut?') || lowercase.includes('what is the indexing reward cut?') || lowercase.includes('what is the indexer reward cut') || lowercase.includes('abfragegebühren gesenkt') || lowercase.includes('belohnungsschnitt')) { 
      this.actionProvider.handleQueryFeesAndIndexingRewardCut();
    }  

    else if (lowercase.includes('founding') || lowercase.includes('founding members of graph protocol')|| lowercase.includes('founding members of grt') || lowercase.includes('tech lead') || lowercase.includes('co-founder')|| lowercase.includes('co founder') || lowercase.includes('research lead') || lowercase.includes('project lead') || lowercase.includes('founding members of the graph') || lowercase.includes('founders') || lowercase.includes('founded') || lowercase.includes('the graph founders') || lowercase.includes('who created') || lowercase.includes('created') || lowercase.includes('graph created') || lowercase.includes('founders') || lowercase.includes('jannis pohlmann') || lowercase.includes('jannis') || lowercase.includes('pohlmann') || lowercase.includes('brandon ramirez') || lowercase.includes('brandon') || lowercase.includes('ramirez') || lowercase.includes('yaniv tal')  || lowercase.includes('yaniv')  || lowercase.includes('tal') || lowercase.includes('who are the founding members of the graph?') || lowercase.includes('gründung') || lowercase.includes('grundung') || lowercase.includes('gründungsmitglieder') || lowercase.includes('grundungsmitglieder') || lowercase.includes('gegründet') || lowercase.includes('gegrundet') || lowercase.includes('erstellt')) { 
      this.actionProvider.handleFoundingMembers();  
    } 

    else if (lowercase.includes('the graph funding') || lowercase.includes('who funds the graph')|| lowercase.includes('who gave the graph funding') || lowercase.includes('who provides funding to the graph') || lowercase.includes('who funds the graph?')|| lowercase.includes('who gave the graph funding?') || lowercase.includes('who provides funding to the graph?') || lowercase.includes('graph finanzierung')) {
      this.actionProvider.handleGraphFunding(); 
    } 
    
    else if (lowercase.includes('airdrop') || lowercase.includes('airdrops') || lowercase.includes('the graph air drop') || lowercase.includes('air drops') || lowercase.includes('the graph air drop') || lowercase.includes('does the graph air drop') || lowercase.includes('does the graph airdrop') || lowercase.includes('does the graph airdrop?') || lowercase.includes('does the graph air drop?')  || lowercase.includes('does the graph do air drops?')  || lowercase.includes('does the graph do air drops') || lowercase.includes('does the graph do airdrops?')  || lowercase.includes('does the graph do airdrops') || lowercase.includes('lufttropfen')) {
      this.actionProvider.handleAirdrop();  
    } 
    
    else if (lowercase.includes('free grt') || lowercase.includes('how to get free grt') || lowercase.includes('can i have free grt') || lowercase.includes('can i get free get') || lowercase.includes('can i have free grt?') || lowercase.includes('can i get free grt?') || lowercase.includes('give me grt') || lowercase.includes('give me grt?') || lowercase.includes('send me grt?')  || lowercase.includes('send me grt')  || lowercase.includes('give me free grt?') || lowercase.includes('give me free grt')  || lowercase.includes('is there a way to get free grt?')  || lowercase.includes('is there a way to get free grt') || lowercase.includes('kostenlos')) {
      this.actionProvider.handleFreeGRT(); 
    } 

    else if (lowercase.includes('grt github') || lowercase.includes('the graph github') || lowercase.includes('what is the graph github') || lowercase.includes('what is the graph github?') || lowercase.includes('what is the graph github address?') || lowercase.includes('what is the graph github address') || lowercase.includes('what is the github address') || lowercase.includes('what is the github address?') || lowercase.includes('what is the github address for the graph?')  || lowercase.includes('what is the github address for the graph') || lowercase.includes('github address')) {
      this.actionProvider.handleGitHub();
    } 

    else if (lowercase.includes('roadmap') || lowercase.includes('is there a roadmap?') || lowercase.includes('is there a roadmap') || lowercase.includes('is there a road map') || lowercase.includes('is there a road map?') || lowercase.includes('where can i find a roadmap') || lowercase.includes('where can i find a roadmap?') || lowercase.includes('where can i find the road map?') || lowercase.includes('where can i find the road map')  || lowercase.includes('what is the roadmap?')  || lowercase.includes('what is the roadmap')  || lowercase.includes('what is the road map?')  || lowercase.includes('what is the road map') || lowercase.includes('fahrplan')) {  
      this.actionProvider.handleRoadMap();
    } 

    else if (lowercase.includes('schema') || lowercase.includes('what is a schema') || lowercase.includes('what is a schema?') || lowercase.includes('what is a schema used by grt') || lowercase.includes('what is a schema used by grt?') || lowercase.includes('what is the schema used by grt?') || lowercase.includes('what is the schema used by grt') || lowercase.includes('what is the schema used by the graph?') || lowercase.includes('what is the schema used by the graph') || lowercase.includes('what is graphql') || lowercase.includes('what is graphql?') || lowercase.includes('what is graphql api') || lowercase.includes('what is the graphql?') || lowercase.includes('what is the graphql') || lowercase.includes('what is the graphql api?') || lowercase.includes('what is the graphql api')) {
      this.actionProvider.handleWhatIsSchema();
    } 

    else if (lowercase.includes('how do i buy') || lowercase.includes('how do i buy?') || lowercase.includes('how can i buy') || lowercase.includes('how can i buy?') || lowercase.includes('where can i buy?') || lowercase.includes('where can i buy') || lowercase.includes('buy grt') || lowercase.includes('when can i buy grt') || lowercase.includes('where can i buy grt?') || lowercase.includes('i want to buy') || lowercase.includes('i want to buy grt') || lowercase.includes('how much is grt') || lowercase.includes('how much is grt?') || lowercase.includes('wher can i pick up grt') || lowercase.includes('where can i pick up grt?') || lowercase.includes('i want more grt') || lowercase.includes('where to buy') || lowercase.includes('buy') || lowercase.includes('kaufen')) {
      this.actionProvider.handleBuy();
    } 

    else if (lowercase.includes('how many GRT tokens do I need to become an indexer') || lowercase.includes('how many GRT tokens do I need to become an indexer?') || lowercase.includes('how much GRT tokens do I need to become an indexer') || lowercase.includes('how much GRT tokens do I need to become an indexer?') || lowercase.includes('how many GRT do I need to become an indexer') || lowercase.includes('how GRT tokens do I need to become an indexer?') || lowercase.includes('how much GRT do I need to become an indexer') || lowercase.includes('how much GRT do I need to become an indexer?') || lowercase.includes('how many GRT to become an indexer') || lowercase.includes('how many GRT to become an indexer?') || lowercase.includes('how much GRT to become an indexer') || lowercase.includes('how much GRT to become an indexer?') || lowercase.includes('amount of GRT to become an indexer') || lowercase.includes('amount of GRT to become an indexer?') || lowercase.includes('amount of GRT needed to become an indexer') || lowercase.includes('amount of GRT needed to become an indexer?')) {
      this.actionProvider.handleIndexerQs();
    } 
    
    
    else if (lowercase.includes('gas') || lowercase.includes('gas price') || lowercase.includes('what is gas') || lowercase.includes('what is gas?') || lowercase.includes('what is the gas?') || lowercase.includes('what is gas?') || lowercase.includes('why is the gas cost so high') || lowercase.includes('why is the gas cost so high?') || lowercase.includes('why is the gas so high') || lowercase.includes('why is the gas cost so high?') || lowercase.includes('how much for gas') || lowercase.includes('how much for gas?') || lowercase.includes('gaspreis')) { 
      this.actionProvider.handleGas();
    } 

    else if (lowercase.includes('indexer location') || lowercase.includes('indexers location') || lowercase.includes('indexer map') || lowercase.includes('indexer maps') || lowercase.includes('lage')) {
      this.actionProvider.handleIndexerMap(); 
    } 

    else if (lowercase.includes('compare') || lowercase.includes('vergleichen')) {
      this.actionProvider.handleIndexerCompare(); 
    } 

    else if (lowercase.includes('withdraw') || lowercase.includes('withdrawal') || lowercase.includes('withdrawing') || lowercase.includes('abheben') || lowercase.includes('rückzug') || lowercase.includes('ruckzug') || lowercase.includes('zurückziehen') || lowercase.includes('zuruckziehen')) {
      this.actionProvider.handleAdvocateGrantWithdraw();
    } 

    else if (lowercase.includes('grant') || lowercase.includes('advocatesdao grants') || lowercase.includes('grants') || lowercase.includes('gewähren') || lowercase.includes('gewahren') || lowercase.includes('zuschüsse') || lowercase.includes('zuschusse')) {
      this.actionProvider.handleAdvocateGrant();
    }  
    
    else if (lowercase.includes('advocate') || lowercase.includes('advocates') || lowercase.includes('what is a advocate') || lowercase.includes('what is a advocate?') || lowercase.includes('what is an advocate') || lowercase.includes('what is a advocate?') || lowercase.includes('become a advocate') || lowercase.includes('i want to be a advocate') || lowercase.includes('i want to be a advocate') || lowercase.includes('what is an advocate?') || lowercase.includes('how do i become an advocate') || lowercase.includes('how do i become an advocate?') || lowercase.includes('Fürsprecher') || lowercase.includes('fursprecher')) {
      this.actionProvider.handleAdvocates(); 
    } 

    else if (lowercase.includes('token economics') || lowercase.includes('economics') || lowercase.includes('tokenomics') ||lowercase.includes('what are the token economics') || lowercase.includes('what are the token economics?') || lowercase.includes('what are token unlocks')  || lowercase.includes('what are token unlocks?')  || lowercase.includes('token unlocks')  || lowercase.includes('tokens unlocked')  || lowercase.includes('what are token unlocks')  || lowercase.includes('what are token unlocks?') || lowercase.includes('what is token supply') || lowercase.includes('what is token supply?') || lowercase.includes('token supply') || lowercase.includes('grt token supply') || lowercase.includes('what is the grt token supply') || lowercase.includes('what is the grt token supply') || lowercase.includes('what are the tokenonomics?') || lowercase.includes('token-Ökonomie') || lowercase.includes('token-okonomie') || lowercase.includes('token okonomie') || lowercase.includes('token Ökonomie') || lowercase.includes('wirtschaft') || lowercase.includes('Ökonomie') || lowercase.includes('okonomie')) { 
      this.actionProvider.handleTokenEconomics(); 
    }

    else if (lowercase.includes('grt token') || lowercase.includes('grt token address') || lowercase.includes('grt address') || lowercase.includes('token address') || lowercase.includes('what is the token address') || lowercase.includes('what is the token address?') || lowercase.includes('what is the grt token address') || lowercase.includes('what is the grt token address?') || lowercase.includes('what is grt token address') || lowercase.includes('what is grt token address?') || lowercase.includes('contract address') || lowercase.includes('zeichen')) { 
      this.actionProvider.handleGRTTokenAddress();
    } 

    else if (lowercase.includes('learn web3') || lowercase.includes('learn web 3') || lowercase.includes('learn web three') || lowercase.includes('lernen') || lowercase.includes('erlernen')) { 
      this.actionProvider.handleLearnWeb3();
    } 

    else if (lowercase.includes('course') || lowercase.includes('courses') || lowercase.includes('learn') || lowercase.includes('i want to learn') || lowercase.includes('academy') || lowercase.includes('teach me') || lowercase.includes('what courses are there') || lowercase.includes('what courses are there?') || lowercase.includes('what courses are available?') || lowercase.includes('what courses are available') || lowercase.includes('akademie')) {
      this.actionProvider.handleCourses(); 
    } 

    else if (lowercase.includes('arbitrum')) {
      this.actionProvider.handleArbitrum();
    } 

    else if (lowercase.includes('women in web3') || lowercase.includes('women in web 3') || lowercase.includes('wiw3') || lowercase.includes('women') || lowercase.includes('wow3') || lowercase.includes('frauen')) {
      this.actionProvider.handleWomenInWeb3(); 
    } 

    else if (lowercase.includes('discord') || lowercase.includes('discord chat') || lowercase.includes('discord server') || lowercase.includes('what is the discord') || lowercase.includes('what is the discord?') || lowercase.includes('zwietracht')) {
      this.actionProvider.handleDiscord(); 
    } 

    else if (lowercase.includes('telegram') || lowercase.includes('telegram chat') || lowercase.includes('telegram server') || lowercase.includes('what is the telegram') || lowercase.includes('what is the graph telegram?') || lowercase.includes('telegram groups') || lowercase.includes('telegramm')) {
      this.actionProvider.handleTelegram();
    }  

    else if (lowercase.includes('sunsetting hosted service') || lowercase.includes('sun setting hosted service') || lowercase.includes('what is sunsetting the hosted service?') || lowercase.includes('what is sunsetting the hosted service') || lowercase.includes('sunsetting the hosted service') || lowercase.includes('sun setting the hosted service') || lowercase.includes('sun set') || lowercase.includes('sunset') || lowercase.includes('sonnenuntergang')) {  
      this.actionProvider.handleSunsettingHostedService(); 
    } 

    else if (lowercase.includes('hosted service') || lowercase.includes('what is the hosted service') || lowercase.includes('what is the hosted service?') || lowercase.includes('explain the hosted service') || lowercase.includes('hosted vs mainnet') || lowercase.includes('what is the difference between hosted and mainnet') || lowercase.includes('what is the difference between hosted and mainnet?') || lowercase.includes('what is the difference between the hosted service and mainnet') || lowercase.includes('what is the difference between the hosted service and mainnet?') || lowercase.includes('hosted') || lowercase.includes('how to migrate subgraph from hosted to mainnet') || lowercase.includes('how to migrate subgraph') || lowercase.includes('mainnet') || lowercase.includes('how do i migrate a subgraph from hosted service to mainnet') || lowercase.includes('how do i migrate a subgraph from hosted service to mainnet?') || lowercase.includes('bereitgestellt') || lowercase.includes('gehosteter dienst')) { 
      this.actionProvider.handleHostedService();
    } 

     else if (lowercase.includes('tenderize') || lowercase.includes('liquid staking') || lowercase.includes('what is liquid staking') || lowercase.includes('what is liquid staking?') || lowercase.includes('tokenized stake') || lowercase.includes('flüssigkeit') || lowercase.includes('flussigkeit')) {
      this.actionProvider.handleTenderize(); 
    } 

    else if (lowercase.includes('community') || lowercase.includes('where can i find the graph community?') || lowercase.includes('where can i find the graph community') || lowercase.includes('gemeinschaft') || lowercase.includes('bevölkerungsgruppe') || lowercase.includes('bevolkerungsgruppe')) {
      this.actionProvider.handleCommunity(); 
    } 

    else if (lowercase.includes('geo') || lowercase.includes('what is geo?') || lowercase.includes('what is geo') || lowercase.includes('when is geo')) {
      this.actionProvider.handleGeo();
    } 
    
    else if (lowercase.includes('substreams') || lowercase.includes('sub streams') || lowercase.includes('substreaming') || lowercase.includes('sub streaming') || lowercase.includes('streaming') || lowercase.includes('streaming fast') || lowercase.includes('streamingfast')  || lowercase.includes('substream') || lowercase.includes('sub stream') || lowercase.includes('unterstrom')) {
      this.actionProvider.handleSubstreams(); 
    }

    else if (lowercase.includes('fire hose') || lowercase.includes('firehose') || lowercase.includes('feuerwehrschlauch')) {
      this.actionProvider.handleFireHose(); 
    }

    else if (lowercase.includes('figment')) {
      this.actionProvider.handleFigment();
    }

    else if (lowercase.includes('semiotic')) {
      this.actionProvider.handleSemiotic();
    }
   
    else if (lowercase.includes('guild') || lowercase.includes('the guild')) {
      this.actionProvider.handleTheGuild();
    }

    else if (lowercase.includes('graph ops') || lowercase.includes('graphops')) {
      this.actionProvider.handleGraphOps();
    }

    else if (lowercase.includes('core devs') || lowercase.includes('core developers') || lowercase.includes('core teams') || lowercase.includes('core') || lowercase.includes('devs') || lowercase.includes('core-entwickler') || lowercase.includes('entwickler')) {
      this.actionProvider.handleCoreDevs();  
    }

    else if (lowercase.includes('messari')) {
      this.actionProvider.handleMessari();
    }
    

    else if (lowercase.includes('twitter')) {
      this.actionProvider.handleTwitter();
    }

    else if (lowercase.includes('what is the graph') || lowercase.includes('what is the graph?')  || lowercase.includes('the graph') || lowercase.includes('what is grt?') || lowercase.includes('what is grt') || lowercase.includes('graph') || lowercase.includes('google') || lowercase.includes('google of blockchain') || lowercase.includes('google of blockchains') || lowercase.includes('was ist der graph') || lowercase.includes('was ist the graph')) {
      this.actionProvider.handleWhatIsTheGraph(); 
    } 

    else if (lowercase.includes('web1') || lowercase.includes('web1?')  || lowercase.includes('web 1?') || lowercase.includes('web 1?') || lowercase.includes('web one') || lowercase.includes('web one?') || lowercase.includes('web2') || lowercase.includes('web2?') || lowercase.includes('web 2?') || lowercase.includes('web 2') || lowercase.includes('web two?') || lowercase.includes('web two') || lowercase.includes('web3') || lowercase.includes('web3?') || lowercase.includes('web 3?') || lowercase.includes('web 3') || lowercase.includes('web three') || lowercase.includes('web three?')) {
      this.actionProvider.handleWhatIsTheWeb();
    } 

    else if (lowercase.includes('is blockchain safe?') || lowercase.includes('is blockchain safe') || lowercase.includes('crypto safe') || lowercase.includes('cryptocurrency safe') || lowercase.includes('safe')) {
      this.actionProvider.handleSafe();
    } 

    else if (lowercase.includes('what is crypto') || lowercase.includes('what is crypto?')  || lowercase.includes('what is cryptocurrency') || lowercase.includes('what is cryptocurrency?') || lowercase.includes('cryptocurrency') || lowercase.includes('crypto') || lowercase.includes('cryptocurrencies') || lowercase.includes('krypto') || lowercase.includes('kryptowährungen') || lowercase.includes('kryptowahrungen') || lowercase.includes('kryptowährung') || lowercase.includes('kryptowahrung')) {
      this.actionProvider.handleCryptocurrencies(); 
    } 

    else if (lowercase.includes('blockchain') || lowercase.includes('blockchain?')) {
      this.actionProvider.handleWhatIsABlockchain();
    } 

    else if (lowercase.includes('ethereum')) {
      this.actionProvider.handleEthereum();
    } 

    else if (lowercase.includes('pow') || lowercase.includes('proof of work') || lowercase.includes('arbeitsnachweis')) {
      this.actionProvider.handlePOW(); 
    } 

    else if (lowercase.includes('pos') || lowercase.includes('proof of stake') || lowercase.includes('nachweis der beteiligung')) {
      this.actionProvider.handlePOS(); 
    } 

    else if (lowercase.includes('stable coin') || lowercase.includes('stablecoin') || lowercase.includes('stabil') || lowercase.includes('beständig') || lowercase.includes('bestandig') || lowercase.includes('stabile münze') || lowercase.includes('stabile munze')) {
      this.actionProvider.handleStablecoin(); 
    } 
  
    else if (lowercase.includes('coin') || lowercase.includes('token') || lowercase.includes('münze') || lowercase.includes('munze') || lowercase.includes('münzen') || lowercase.includes('munzen')) {
      this.actionProvider.handleCoinOrToken();  
    } 

    else if (lowercase.includes('dex') || lowercase.includes('decentralised exchange') || lowercase.includes('dezentraler austausch')) {
      this.actionProvider.handleDEX(); 
    } 

    else if (lowercase.includes('cex') || lowercase.includes('centralised exchange') || lowercase.includes('zentralisierter austausch')) {
      this.actionProvider.handleCEX(); 
    } 

    else if (lowercase.includes('layer2') || lowercase.includes('layer 2') || lowercase.includes('layer two')) {
      this.actionProvider.handleLayerTwo();
    } 

    else if (lowercase.includes('zero-knowledge proof') || lowercase.includes('zero-knowledge proof') || lowercase.includes('zkproof')  || lowercase.includes('z-kproof')  || lowercase.includes('zk proof') || lowercase.includes('null wissen')) {
      this.actionProvider.handleZKProof();
    }  

    else if (lowercase.includes('smart contract') || lowercase.includes('intelligenter vertrag')) {
      this.actionProvider.handleSmartContract(); 
    } 

    else if (lowercase.includes('nft') || lowercase.includes('non-fungible tokens') || lowercase.includes('non-fungible token') || lowercase.includes('non fungible tokens') || lowercase.includes('nicht fungibel')) { 
      this.actionProvider.handleNFT();
    } 

    else if (lowercase.includes('mining') || lowercase.includes('mine') || lowercase.includes('bergbau')) {
      this.actionProvider.handleMining();
    } 
   
    else if (lowercase.includes('node') || lowercase.includes('nodes') || lowercase.includes('knoten') || lowercase.includes('netzknoten')) {
      this.actionProvider.handleNodes(); 
    } 
    
    else if (lowercase.includes('token burn') || lowercase.includes('token burning') || lowercase.includes('brennen') || lowercase.includes('verbrennen') || lowercase.includes('verbrennung')) {
      this.actionProvider.handleTokenBurn(); 
    } 

    else if (lowercase.includes('dao') || lowercase.includes('decentralised autonomous organization')) {
      this.actionProvider.handleDAO();
    } 

    else if (lowercase.includes('zksnark') || lowercase.includes('zk snark') || lowercase.includes('zero-knowledge succinct non-interactive argument of knowledge')) {
      this.actionProvider.handleZKSnark();
    }

    else if (lowercase.includes('zkstark') || lowercase.includes('zk stark') || lowercase.includes('zero-knowledge scalable transparent argument of knowledge')) {
      this.actionProvider.handleZKStark();
    }

    else if (lowercase.includes('meta') || lowercase.includes('metaverse') || lowercase.includes('meta verse')) {
      this.actionProvider.handleMetaverse();
    }

    else if (lowercase.includes('solana')) {
      this.actionProvider.handleSolana();
    }

    else if (lowercase.includes('tmobile') || lowercase.includes('t-mobile')) {
      this.actionProvider.handleTMobile();
    }

    else if (lowercase.includes('news') || lowercase.includes('spotlight') || lowercase.includes('blog') || lowercase.includes('graph advocates spotlight') || lowercase.includes('nachrichten') || lowercase.includes('bloggen')) {
      this.actionProvider.handleNews();
    }

    // help start

    else if (lowercase.includes('help') || lowercase.includes('hilfe') || lowercase.includes('taste')) {
      this.actionProvider.handleHelp();
    }

    // help end
    // **********
    // **********
    // Chit Chat KEEP AT END Start
    else if(lowercase.includes('hello')  || lowercase.includes('good morning') || lowercase.includes('good afternoon') || lowercase.includes('it’s nice to meet you') || lowercase.includes('it is nice to meet you') || lowercase.includes('it’s a pleasure to meet you') || lowercase.includes('it is a pleasure to meet you') || lowercase.includes('greetings') || lowercase.includes('good day to you') || lowercase.includes('hi') || lowercase.includes('hi there') || lowercase.includes('morning') || lowercase.includes('afternoon') || lowercase.includes('evening') || lowercase.includes('g’day') || lowercase.includes('good day') || lowercase.includes('howdy') || lowercase.includes('hey, what’s up') || lowercase.includes('hey') || lowercase.includes('help') || lowercase.includes('hallo') || lowercase.includes('morgen') || lowercase.includes('tag') || lowercase.includes('abend') || lowercase.includes('nacht') || lowercase.includes('hilfe') || lowercase.includes('freut mich sie kennenzulernen') || lowercase.includes('freut mich, sie kennenzulernen')) {
      this.actionProvider.handleHello();
    }
    // Chit Chat KEEP AT END End

    else {
      this.actionProvider.noAnswer();
    }
  }
}

export default GERMessageParser;