import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";

const GraphRoadmapGER = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
            <h2 className="QB-about-page-subtitle">Diese Seite wurde aus dem Original <a className="chatbot-link" href="https://medium.com/@OG-Graphtronauts/the-graph-roadmap-for-2023-952b17d20d71" target="_blank" rel="noreferrer">hier</a> übersetzt.</h2>
            <hr className="QB-about-hr"></hr>
            <h2 className="QB-about-page-subtitle">Die Graph-Roadmap für 2023</h2>
            <h3 className="QB-about-page-text">In diesem Artikel möchten wir Ihnen vier Entwicklungsbereiche vorstellen, die 2023 das Licht der Welt erblicken und das Netzwerk von The Graph noch stärker machen werden als heute:<br></br><br></br>Der Sonnenuntergang des gehosteten Dienstes<br></br><br></br>Feuerwehrschlauch<br></br><br></br>Unterströme<br></br><br></br>Verschieben des Protokolls nach L2 mit Arbitrum One</h3>
            <hr className="QB-about-hr"></hr>
            <h2 className="QB-about-page-subtitle">1. Der Sonnenuntergang des gehosteten Dienstes</h2>
            <h3 className="QB-about-page-text">Wenn Sie mit dem Ökosystem von The Graph vertraut sind, wissen Sie bereits, dass Edge & Node (das ursprüngliche Team hinter The Graph) ein privates, kostenlos nutzbares System betreibt (als „gehosteter Dienst“ bezeichnet).</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Der kostenlose Hosted Service beginnt im ersten Quartal 2023 mit dem Sunset-Prozess.</h3>
            <br></br><br></br>
            <h2 className="QB-about-page-subtitle">Was ist der gehostete Dienst?</h2>
            <h3 className="QB-about-page-text">Der Hosted Service ist ein kostenloses System, das ursprünglich als Proof-of-Concept entwickelt wurde, um das Potenzial eines neuen Indizierungsprotokolls für Ethereum aufzuzeigen. Edge & Node stellte diesen Dienst während des ersten Graph Day in San Francisco im Januar 2019 vor. Aus diesem ursprünglichen Design wurde der Hosted Service tatsächlich zu einer Entwicklungsumgebung für neue Blockchain-Integrationen. Es begann zunächst damit, nur Ethereum zu unterstützen, ist aber seitdem auf 31 Blockchains wie Near, Avalanche, Cosmos und mehr angewachsen. Die vollständige Liste der unterstützten Ketten finden Sie hier auf der offiziellen Website von The Graph.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Der gehostete Service war ein hervorragendes Tool für das Onboarding neuer Benutzer in The Graph, da er mehr als 20.000 Subgraphen gehostet hat und es Tausenden von Entwicklern auf der ganzen Welt ermöglicht hat, mit dem The Graph-Protokoll zu experimentieren. Der Hosted Service sollte jedoch nicht die endgültige Lösung sein. Seit 2018, als The Graph angekündigt wurde, war klar, dass der Hosted Service nur als Sprungbrett gedacht war, um das ultimative Ziel zu erreichen, ein vollständig dezentralisiertes Netzwerk.</h3>
            <br></br><br></br>
            <h2 className="QB-about-page-subtitle">Das dezentrale Netzwerk</h2>
            <h3 className="QB-about-page-text">Am 17. Dezember 2020 gab The Graph den Start seines dezentralisierten Netzwerks bekannt. Dieses Netzwerk besteht aus Indexierungsknoten, die Indizierungs- und Suchfunktionen für die Ethereum-Blockchain bereitstellen. Zum Zeitpunkt des Verfassens dieses Artikels laufen 215 Indexer-Operatoren im dezentralen Netzwerk.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Im Vergleich zum gehosteten Dienst weist der dezentrale Dienst drei Hauptmerkmale auf:<br></br><br></br>Es ist ein Pay-to-Use-Service, bei dem Verbraucher (dApps) GRT bezahlen müssen, um Suchen (Abfragen) auszuführen.<br></br><br></br>Es ist ein genehmigungsloses Netzwerk, in dem jeder einen Indexer-Knoten ausführen kann, ohne eine Entität um Erlaubnis zu fragen.<br></br><br></br>Es hat keinen Single Point of Failure, da das Netzwerk dezentralisiert und über die ganze Welt verteilt ist.<br></br><br></br>Kurz gesagt, das dezentrale Netzwerk ist schneller, zuverlässiger und effizienter als der gehostete Dienst.</h3>
            <br></br><br></br>
            <h2 className="QB-about-page-subtitle">Einstellung des gehosteten Dienstes</h2>
            <h3 className="QB-about-page-text">Nach fast vier Jahren der Unterstützung von Subgraphen für web3-dApps beginnt der gehostete Dienst im ersten Quartal 2023 mit der Migration von dApps in das dezentrale Netzwerk. Dies gilt jedoch nur für Ketten, die derzeit im Netzwerk unterstützt werden. Derzeit werden zwei Chains im Decentralized Network unterstützt: Ethereum und Gnosis Chain.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Dies bedeutet, dass der kostenlose Hosted Service weiterhin als Entwicklungssystem für alle Ketten bestehen bleibt, die dabei sind, vollständig in das dezentrale Netzwerk migriert zu werden. Wenn Nicht-Mainnet-Ketten auf The Graph Network unterstützt werden, werden ihre Äquivalente für gehostete Dienste schrittweise eingestellt, um sicherzustellen, dass Entwickler Zeit haben, Untergraphen zu migrieren. In Zukunft muss jeder das dezentrale Netzwerk und den kostenpflichtigen Dienst nutzen. Mit anderen Worten, alle dApps müssen GRT kaufen, um die Indexer-Knoten für ihre Arbeit zu bezahlen.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Im Jahr 2023 werden weitere Ketten im dezentralen Netzwerk unterstützt. Welches wird das nächste sein? Nur die Zeit wird es zeigen, aber es gibt sicherlich viel, worauf man sich im kommenden Jahr freuen kann.</h3>
            <hr className="QB-about-hr"></hr>
           <h2 className="QB-about-page-subtitle">2. Firehose: Alle Daten indizieren!</h2>
            <h3 className="QB-about-page-text">Firehose ist die nächste Entwicklung der Indizierung bei The Graph und ist entscheidend für Indizierungsketten wie Arweave, Solana und Near. Firehose ermöglicht eine exponentiell schnellere Indizierung, indem Blockchain-Daten in flache Dateien konvertiert werden, die lokal gespeichert werden können, anstatt sich auf das Lesen von einem Erigon-Knoten (oder einem gleichwertigen Knoten) zu verlassen. Diese schnellere Lesezeit ermöglicht es Indexierern, effizienter zu skalieren und mehr Unterdiagramme zu verarbeiten. Es hilft auch, viele der Details zu abstrahieren, die mit der Indizierung verschiedener Ketten verbunden sind, indem es eine konsistente Schnittstelle bereitstellt, die The Graph verwenden kann. Dies beseitigt einige der Komplexitäten, mit denen Indexierer heute konfrontiert sind.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Firehose bietet einen entscheidenden Schub für die Migration vom gehosteten Dienst zum dezentralen Netzwerk, und die Teams von StreamingFast und Pinax arbeiten mit Edge & Node zusammen, um verbleibende Engpässe zu finden und zu beseitigen. Firehose ist nicht das endgültige Ziel, aber es ist ein notwendiger Schritt auf dem Weg von The Graph, „alle Daten zu indizieren“.</h3>
            <hr className="QB-about-hr"></hr>
            <h2 className="QB-about-page-subtitle">
3. Substreams: Indizierung schneller machen!</h2>
            <h3 className="QB-about-page-text">Das Indizieren von Blockchain-Daten ist die Kernfunktionalität von The Graph Network, und aus diesem Grund muss es eine extrem schnelle Operation sein, die ausgeführt werden kann.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Einer der Engpässe des dezentralen Netzwerks ist die Geschwindigkeit der Indizierung für Subgraphen, insbesondere für dApps, die eine riesige Datenmenge auf Blockchains scannen müssen (denken Sie z. B. an NFT-Sammlungen). Stellen Sie sich vor, wie lange es dauern würde, einen Teilgraphen vollständig zu synchronisieren (mit anderen Worten, alle verfügbaren Daten auf einer Blockchain wie Ethereum zu indizieren). Dies könnte Wochen, sogar einen Monat dauern, um seine Arbeit zu erledigen. Hier kommen Substreams ins Spiel!</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Substreams ist das Hauptprojekt von StreamingFast, einem der sechs Kernentwicklungsteams, die an The Graph arbeiten.</h3>
            <br></br><br></br>
            <h2 className="QB-about-page-subtitle">Aber was sind Substreams?</h2>
            <h3 className="QB-about-page-text">Substreams ist ein neuer Baustein für eine leistungsstarke, parallelisierte Stream-Verarbeitung. Durch die Verwendung von Substreams als Eingabedatenquelle können Entwickler mit bis zu 100-mal schnelleren Indizierungsgeschwindigkeiten für ihre Subgraphen rechnen. Und das ist kein Tippfehler! Dies bedeutet, dass Entwickler den Zeitaufwand für die Indizierung massiver Subgraphen drastisch reduzieren können (z. B. von 28 Tagen auf nur 6 Stunden für einen der größten Subgraphen). Zum Zeitpunkt der Erstellung dieses Artikels befindet sich Substreams in der Beta-Phase und strebt an, im Jahr 2023 vollständig verfügbar zu sein.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Kurz gesagt, mit Substreams wechseln wir, anstatt ein lineares Indizierungsmodell durchzuführen, zu einem parallelisierten Modell, das die Geschwindigkeit der Synchronisierung und Indizierung dramatisch erhöht. Substreams arbeitet mit Firehose zusammen, da die zu manipulierenden Daten von Firehose stammen.</h3>
            <hr className="QB-about-hr"></hr>
            <h2 className="QB-about-page-subtitle">4. Wechseln zu Layer-2 (Arbitrum One)</h2>
            <h3 className="QB-about-page-text">Ein weiterer großer Meilenstein im Jahr 2023 wird die Verlagerung des gesamten Graph-Protokolls zu Arbitrum sein, einer der am häufigsten verwendeten L2-Ketten. Um die Auswirkungen dieses wichtigen Meilensteins besser zu verstehen, lassen Sie uns näher darauf eingehen.</h3>
            <br></br><br></br>
            <h2 className="QB-about-page-subtitle">Was ist eine Layer-2- oder L2-Blockchain?</h2>
            <h3 className="QB-about-page-text">Layer 2 (L2) ist ein Begriff, der verwendet wird, um eine Sammlung von Ethereum-Skalierungslösungen zu beschreiben. Eine Schicht 2 ist eigentlich eine separate Blockchain, die dazu beiträgt, Schicht 1 wie Ethereum zu erweitern, während sie ihnen dennoch erlaubt, die Sicherheitsgarantien der Schicht 1 zu erben. </h3>
            <br></br><br></br>
            <h2 className="QB-about-page-subtitle">Was ist also eine Schicht 1?</h2>
            <h3 className="QB-about-page-text">Eine Schicht 1 (L1) ist eine Basisblockkette wie Ethereum oder Bitcoin. Wir nennen sie L1-Blockchains, weil sie die zugrunde liegende Grundlage der gesamten Web3-Welt sind. L1-Ketten wie Ethereum und Bitcoin bieten zum Teil aufgrund ihres stark dezentralisierten Zustands absolut solide Sicherheit. Wo diese L1-Ketten jedoch nicht sehr gut abschneiden, ist die Skalierbarkeit und damit die Ausführungsgeschwindigkeit. Aus diesem Grund haben wir jetzt verschiedene Layer-2-Netzwerke (oder L2s), die auf den L1-Netzwerken aufbauen. Beispiele für Layer-2-Projekte sind „Rollups“ auf Ethereum (Arbitrum, Optimism, Polygon) und das Lightning Network auf Bitcoin.</h3>
            <br></br><br></br>
            <h2 className="QB-about-page-subtitle">Was ist Arbitrum One?</h2>
            <h3 className="QB-about-page-text">Arbitrum One ist eine L2-Blockchain, die Ethereum erweitert und gleichzeitig die Sicherheitsgarantien von Ethereum selbst erbt. Arbitrum (L2) reduziert Transaktionsgebühren und Staus drastisch, indem es einen großen Teil der Berechnung und Datenspeicherung aus dem Hauptnetzwerk von Ethereum (L1) verlagert.</h3>
            <br></br><br></br>
            <h2 className="QB-about-page-subtitle">Warum ist es wichtig, zu L2 zu wechseln?</h2>
            <h3 className="QB-about-page-text">The Graph kündigte während des letzten Graph Day im Juni 2022 an, das gesamte Netzwerk und die Funktionalitäten auf Arbitrum zu migrieren. Das Hochgebührenumfeld von Ethereum hat es den Netzwerkteilnehmern erschwert, effektiv und profitabel zu arbeiten. Aus diesem Grund bietet der Wechsel zu Arbitrum eine enorme Chance, das Graph-Netzwerk zu erweitern. Dies ist äußerst wichtig für Knotenbetreiber, die die Indexer-Knoten ausführen, sowie für intensive Benutzer des Protokolls.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Nehmen Sie zum Beispiel einen Indexer. Jedes Mal, wenn sie Zuordnungen zu Subgraphen öffnen und schließen müssen, fallen hohe Netzwerkgebühren an. Bei Ethereum können Sie sich glücklich schätzen, 3 $ auszugeben, um eine Aktion auszuführen. Stellen Sie sich nun diese einzelne Transaktion auf Arbitrum vor, bei der die Kosten etwa 0,10 $ betragen könnten. Der Einsatz der L2-Technologie könnte Ihre Kosten um ca. 3.000 % senken! Multiplizieren Sie diese Überstunden mit Hunderten oder Tausenden von Transaktionen und Sie werden massive Kosteneinsparungen feststellen.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Der Wechsel zu Arbitrum wird auch für Delegatoren und Kuratoren von Vorteil sein, da diese wichtigen Rollen im Ökosystem niedrigere Netzwerkgebühren nach sich ziehen könnten.</h3>
        </div>
</div>
       </>
    );
  }});

export default GraphRoadmapGER;