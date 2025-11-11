// src/data/dienstenData.js
export const dienstenPages = {
    exporteren: {
      slug: "exporteren",
      title: "Exporteren",
      image: "/container.jpg",
      imageAlt: "Export containers",
      sections: [
        {
          title: "Probleemloos exporteren",
          content: `
            <p>Wilt u goederen exporteren naar een bestemming buiten de Europese Unie? Dan zijn er bepaalde, specifieke zaken waar u rekening mee moet houden. Denk hierbij aan de benodigde bewijslast waarmee aangetoond wordt dat uw goederen naar een land buiten de EU geëxporteerd worden of, in het geval van dierlijke producten of plantmateriaal, de verplichte <strong>fytocertificaten</strong> of een <strong>Certificaat van Oorsprong</strong>. Hoe beter uw zending voorbereid is, hoe sneller en gemakkelijker de export plaatsvindt. WA Customs helpt u bij deze voorbereidingen met <strong>advies</strong> en uitvoering zodat uw goederen niet stil komen te staan bij de grens.</p>
          `
        },
        {
          title: "Van belang bij export",
          content: `
            <p>Wanneer u producten verkoopt naar een partner buiten de Europese Unie gebeurt dit tegen een BTW-percentage van 0 procent. Maar dit geldt enkel wanneer u ook daadwerkelijk kunt aantonen dat de goederen de EU hebben verlaten. Ook loont het om te werken met een <strong>EUR1</strong> of <strong>EUR-MED</strong> certificaat waarmee vrijstelling op invoerrechten kan worden verkregen. WA Customs verzorgt de documentatie die nodig is voor uw zending, koppelt eventuele bewijslast digitaal naar u terug en adviseert u graag wanneer u meer wilt weten over het hoe en waarom van bepaalde douanezaken.</p>
          `
        },
        {
          title: "Uitzonderingen en restricties",
          content: `
            <p>Zoveel landen, zoveel regels. Voor uw export is het van belang goed te weten welke (aanvullende) documenten in orde gemaakt moeten worden voor het specifieke land van bestemming. Zo stelt het Verenigd Koninkrijk sinds de <strong>Brexit</strong> bepaalde eisen aan verschillende producten. Deze zijn weer anders dan de vereisten voor bijvoorbeeld Zwitserland of Japan. Daarnaast zijn er ook landen waarvoor restricties zijn ingesteld vanwege militaire sancties. En dan verandert de regelgeving ook nog eens regelmatig…</p>
            <p>Gelukkig zijn de douane-expediteurs van WA Customs altijd op de hoogte van de meest recente ontwikkelingen en regels omtrent internationaal transport. Met hun expertise voorkomt u problemen aan de grens en weet u zeker dat uw export aan alle geldende regels en normen voldoet.</p>
          `
        },
        {
          title: "Vrijblijvend contact",
          content: `
            <p>Heeft u vragen over uw export of gaat u voor het eerst goederen uitvoeren naar een bestemming buiten de EU? Neem gerust <strong>vrijblijvend contact</strong> met ons op. We vertellen u graag wat we voor u kunnen betekenen.</p>
          `
        }
      ]
    },
  
    eur1: {
        slug: "eur1",
        title: "EUR1",
        image: "/eur1-doc.jpg",          // bạn có thể thay bằng ảnh thực tế
        imageAlt: "EUR.1 Certificaat",
        sections: [
          {
            title: "Wat is een EUR.1 certificaat?",
            content: `
              <p>Importeert of exporteert u goederen? Dan heeft u vast weleens gehoord van een <strong>EUR.1-certificaat</strong>. Maar wat is dat nu eigenlijk en waarom zou u er gebruik van maken? Een <strong>EUR.1</strong> is een oorsprongsdocument waarmee uw klant een verlaging of vrijstelling kan krijgen op invoerrechten. Om zo’n verlaging of vrijstelling te krijgen zijn er twee voorwaarden opgesteld:</p>
              <ul class="list-disc pl-6 space-y-2 mt-3">
                <li>Het land moet een <strong>vrijhandelsovereenkomst</strong> hebben met de Europese Unie. Op de website van de Kamer van Koophandel staat een <strong>overzicht</strong> van landen waarmee een handelsakkoord is gesloten.</li>
                <li>De goederen moeten van <strong>preferentiële oorsprong</strong> zijn. Dit wil zeggen dat de goederen geheel of toereikend geproduceerd, bewerkt of verwerkt zijn binnen de Europese Unie.</li>
              </ul>
            `
          },
          {
            title: "Wat is er nodig voor het verkrijgen van een EUR.1?",
            content: `
              <p>Voor de aanvraag van een <strong>EUR.1-certificaat</strong> moet voldoende bewijslast overlegd worden. Deze bewijslast toont aan dat de goederen ook daadwerkelijk van preferentiële oorsprong zijn. Welke bewijsstukken hiervoor precies nodig zijn hangt af van een aantal factoren.</p>
              <p>Allereerst de hoedanigheid van uw onderneming: bent u de <strong>producent</strong> of een <strong>handelaar</strong>? Dit is namelijk bepalend voor het type bewijslast dat nodig is. Daarnaast is het <strong>soort product</strong> dat u levert van groot belang. Aan de hand van deze zaken kijkt de KvK of een <strong>EUR.1-certificaat</strong> kan worden afgegeven. De belangrijkste bewijsstukken die hiervoor aangeleverd moeten worden zijn de <strong>handelsfactuur</strong> en het <strong>exportdocument</strong>. In de <strong>Market Access Database</strong> vindt u voor veel landen de benodigde documenten per product. Ook vindt u hier de hoogte van verschillende heffingen zoals invoerrechten, BTW en accijnzen. Om het certificaat geldig te maken moet het vooraf nog gevalideerd worden door de douane.</p>
              <p class="mt-3">Wanneer de waarde van de zending lager ligt dan <strong>€6000</strong>, hoeft geen EUR.1 aangevraagd te worden en volstaat, net als bij de <strong>EUR-MED</strong>, een <strong>factuurverklaring</strong>.</p>
            `
          },
          {
            title: "Meer informatie over EUR.1",
            content: `
              <p>Heeft u een <strong>EUR.1-certificaat</strong> nodig of wilt u hier meer informatie over? Neem gerust <strong>vrijblijvend contact</strong> met ons op. Dit kan van maandag tot en met vrijdag tussen <strong>7.00u en 21.00u</strong> en op zaterdag tussen <strong>10.00u en 14.00u</strong> op telefoonnummer <strong>+31 (0)76 596 49 21</strong>, via <a href="mailto:info@wacustoms.nl" class="text-[#f2692a] hover:underline">info@wacustoms.nl</a> of via het <strong>contactformulier</strong>.</p>
            `
          }
        ]
      },
  "eur-med": {
    slug: "eur-med",
    title: "EUR-MED",
    image: "/eur-med-doc.jpg", // bạn có thể thay bằng ảnh thực tế
    imageAlt: "EUR-MED Certificaat",
    sections: [
      {
        title: "Wat is een EUR-MED certificaat?",
        content: `
          <p>Het <strong>EUR-MED certificaat</strong> is een variatie / aanvulling op het <strong>EUR.1-certificaat</strong> en is geldig voor landen die vallen onder de <strong>Pan-Euro-Mediterrane (PEM) overeenkomst</strong>. Dit zijn de volgende landen:</p>
          <ul class="list-disc pl-6 space-y-2 mt-3">
            <li>De landen van de Europese Unie plus <strong>Turkije</strong></li>
            <li><strong>EFTA</strong> (waaronder Noorwegen, Zwitserland en IJsland)</li>
            <li>Het Middellandse Zeegebied (waaronder Marokko, Algerije, Tunesië, Egypte, Israël en Libanon)</li>
            <li><strong>Moldavië</strong></li>
            <li>De westelijke Balkan (waaronder Servië, Albanië en Bosnië-Herzegovina)</li>
          </ul>
        `
      },
      {
        title: "Het voordeel van een EUR-MED",
        content: `
          <p>Het <strong>EUR-MED certificaat</strong> maakt het mogelijk om grondstoffen en producten van <strong>preferentiële oorsprong</strong> uit de bovengenoemde landen mee te laten tellen voor de <strong>oorsprongsbepaling</strong>: de zogeheten <strong>cumulatie</strong>. Het land van oorsprong is hierbij altijd het land waar de laatste bewerking heeft plaatsgevonden.</p>
          <p>Het gebruik van een <strong>EUR-MED certificaat</strong> is niet verplicht, maar biedt meer mogelijkheden en dezelfde financiële voordelen die goederen van preferentiële oorsprong hebben voor ondernemers.</p>
          <p class="mt-3">Wanneer de waarde van de zending lager ligt dan <strong>€6000</strong>, hoeft geen EUR-MED te worden aangevraagd en volstaat, net als bij de EUR.1, een <strong>factuurverklaring</strong>.</p>
        `
      },
      {
        title: "Een EUR-MED aanvragen",
        content: `
          <p>Het aanvragen van een <strong>EUR-MED</strong> verloopt digitaal via de <strong>Kamer van Koophandel</strong>. Wanneer de aanvraag door de KvK goedgekeurd wordt kan de douane deze valideren. Mochten termen als preferentiële oorsprong en overeenkomstland u niet zoveel zeggen dan is het beter om hulp in te schakelen bij het aanvragen van een EUR-MED.</p>
          <p>Bij <strong>WA Customs</strong> helpen we u hier graag bij. Voor de aanvraag van uw <strong>EUR-MED certificaat</strong> of voor andere douanevragen kunt u bij ons terecht van maandag tot en met vrijdag tussen <strong>7.00u en 21.00u</strong> en op zaterdag tussen <strong>10.00u en 14.00u</strong>. Dit kan telefonisch <strong>+31 (0)76 596 49 21</strong>, per mail <a href="mailto:info@wacustoms.nl" class="text-[#f2692a] hover:underline">info@wacustoms.nl</a> of via het <strong>contactformulier</strong>.</p>
        `
      }
    ]
  },
  
   "certificaat-van-oorsprong": {
    slug: "certificaat-van-oorsprong",
    title: "Certificaat van Oorsprong",
    image: "/cvo-doc.jpg", // bạn có thể thay bằng ảnh thực tế
    imageAlt: "Certificaat van Oorsprong (CVO)",
    sections: [
      {
        title: "Wat is een Certificaat van Oorsprong?",
        content: `
          <p>Een <strong>Certificaat van Oorsprong (CVO)</strong> is een document dat de oorsprong van een product aangeeft. Een CVO bewijst dus in welk land een product gemaakt is. De <strong>Kamer van Koophandel</strong> geeft deze certificaten af en <strong>WA Customs</strong> kan deze digitaal voor u aanvragen.</p>
        `
      },
      {
        title: "Waarom heb ik een certificaat van oorsprong nodig?",
        content: `
          <p>Sommige landen buiten de EU vragen om een CVO vanwege handelspolitieke maatregelen, zoals <strong>boycotten</strong>, <strong>importbeperkingen</strong> en <strong>importquota</strong>. Ook heeft u in sommige landen met een CVO minder of zelfs helemaal geen invoerrechten te betalen. Daar geldt dan het <strong>MFN importtarief</strong> (<em>most favoured nation-tarief</em>). Zonder CVO kunt u tegen moeilijkheden aanlopen als u in een bepaald land producten wilt invoeren. Binnen de EU heeft u meestal <strong>geen CVO nodig</strong>.</p>
        `
      },
      {
        title: "Voordeel van een certificaat van oorsprong",
        content: `
          <p>Op basis van een CVO kan een land beslissen of u een product wel of niet mag invoeren. Ook bekijkt het land of het <strong>MFN importtarief</strong> geldt. Dit tarief is meestal lager dan het algemene tarief.</p>
        `
      },
      {
        title: "Hoe vraag ik een certificaat van oorsprong aan?",
        content: `
          <p>U moet per verzending een <strong>Certificaat van Oorsprong</strong> aanvragen. <strong>WA Customs</strong> kan dit voor u regelen. Hiervoor dient u wel het juiste bewijsmateriaal aan te leveren. Wij vullen digitaal de aanvraag in en vullen deze aan met de betreffende bewijslast. De KvK controleert en bepaalt aan de hand van de toegevoegde bewijslast de oorsprong van de goederen.</p>
          <p><strong>Bent u producent van de goederen?</strong> Dan wordt de oorsprong bepaald aan de hand van een door u afgegeven <strong>productieverklaring</strong>.</p>
          <p><strong>Produceert u de goederen niet zelf maar koopt u deze in bij een leverancier?</strong> Dan kan een <strong>Leveranciersverklaring</strong> voor goederen van <strong>niet-preferentiële oorsprong</strong> als bewijs van oorsprong dienen.</p>
          <p><strong>Koopt u de goederen in van een leverancier buiten de EU?</strong> Dan kan een CVO uit het betreffende land als bewijs dienen.</p>
          <p>De KvK heeft de mogelijkheid om in alle bovenstaande situaties aanvullende documenten te vragen. Zoals in- en/of verkoopfacturen, machtigingen en verladingopdrachten.</p>
        `
      },
      {
        title: "De oorsprong van een product bepalen",
        content: `
          <p>De oorsprong van een product wordt bepaald via oorsprongsnormen die staan in Europese en nationale wetgeving. Wanneer een product volledig in één enkel land is geproduceerd is deze bepaling vrij eenvoudig, denk aan landbouwproducten. Maar als in uw product grondstoffen en onderdelen zijn verwerkt die uit verschillende landen komen, is dit lastiger.</p>
        `
      },
      {
        title: "Meer informatie",
        content: `
          <p>Wilt u meer informatie over het CVO of wilt u deze direct aanvragen neem dan contact met ons op. Dit kan van <strong>maandag tot en met vrijdag van 7.00u tot 21.00u</strong> en op <strong>zaterdag kan dit tussen 10.00u en 14.00u</strong>. U kunt contact opnemen per telefoon <strong>+31 (0)76 596 49 21</strong>, per e-mail <a href="mailto:info@wacustoms.nl" class="text-[#f2692a] hover:underline">info@wacustoms.nl</a> of door het invullen van het <strong>contactformulier</strong>.</p>
        `
      }
    ]
  },
  "keuring-via-e-certnl": {
    slug: "keuring-via-e-certnl",
    title: "Keuring via e-CertNL",
    image: "/ecertnl-doc.jpg", // bạn có thể thay bằng ảnh thực tế
    imageAlt: "e-CertNL Keuring",
    sections: [
      {
        title: "Wanneer is een keuring nodig?",
        content: `
          <p>Voor de export van bepaalde producten is vooraf een <strong>keuring</strong> nodig. Goederen waarvoor dit geldt zijn onder meer: <strong>dieren</strong>, <strong>dierlijke producten</strong>, <strong>levensmiddelen</strong>, <strong>bijzondere eet- en drinkwaren</strong>, <strong>planten</strong>, <strong>groenten</strong>, <strong>fruit</strong> en <strong>plantaardige producten</strong>.</p>
          <p>Via <strong>e-CertNL</strong> kunnen drie verschillende certificaten afgegeven worden. Voor dieren en dierlijke producten is dit een <strong>veterinair certificaat</strong>. Voor planten, groenten, fruit en plantaardige producten een <strong>fytosanitair certificaat</strong>. En voor levensmiddelen en bijzondere eet- en drinkwaren is dit een <strong>kwaliteitscertificaat</strong>. Daarnaast kan via deze weg een <strong>exportverklaring</strong> aangevraagd worden.</p>
        `
      },
      {
        title: "Keuring aanvragen via e-CertNL",
        content: `
          <p>Bij <strong>WA Customs</strong> beschikken we over alle benodigde aansluitingen om in <strong>e-Cert</strong> te kunnen werken. Dat is handig, want dit betekent dat u <strong>zelf geen aansluiting met e-CertNL</strong> hoeft aan te vragen of aan te maken.</p>
          <p>Via <strong>e-CertNL</strong> wordt een inspectieaanvraag ingediend bij de betreffende dienst, bijvoorbeeld het <strong>Kwaliteits-Controle-Bureau (KCB)</strong> of <strong>NAK Tuinbouw</strong>.</p>
          <p>Om een certificaat te verkrijgen moeten de volgende stappen doorlopen worden:</p>
          <ol class="list-decimal pl-6 space-y-2 mt-3">
            <li>De informatie over de zending moet minimaal een <strong>exportdatum</strong>, <strong>land van bestemming</strong> en een <strong>hoofdproduct</strong> bevatten.</li>
            <li>De samenstelling van de zending moet worden aangegeven. Het systeem bepaalt op basis hiervan welke relevante eisen er zijn en zoekt naar mogelijke dekkingen.</li>
            <li>De keuring wordt gepland en vindt plaats. Wanneer alles geïnspecteerd is geeft de keurmeester de resultaten door. <strong>e-CertNL</strong> bepaalt vervolgens of het product exportwaardig is.</li>
            <li>Wanneer de zending exportwaardig is kan het <strong>fytosanitair-</strong>, <strong>kwaliteits-</strong> en/of <strong>veterinaircertificaat</strong> geprint worden en gewaarmerkt worden door de keuringsdienst.</li>
          </ol>
        `
      },
      {
        title: "Exportverklaring in e-CertNL",
        content: `
          <p><strong>Exportverklaringen</strong> kunnen ook via <strong>e-CertNL</strong> aangevraagd worden. In een exportverklaring geeft de <strong>NVWA</strong>, op verzoek van de aanvrager, aan of een product <strong>vrij verhandelbaar</strong> is binnen de Europese Unie. Daarnaast is het mogelijk om een eigen <strong>bedrijfsverklaring</strong> mee te sturen die door de NVWA getoetst kan worden en kan leiden tot een aanvullende tekst op de exportverklaring.</p>
        `
      },
      {
        title: "Vragen?",
        content: `
          <p>Wanneer u vragen heeft over het aanvragen van een <strong>keuring</strong> en/of <strong>certificaat</strong> via <strong>e-CertNL</strong> kunt u vrijblijvend contact met ons opnemen via telefoonnummer <strong>+31 (0)76 596 49 21</strong>, via <a href="mailto:info@wacustoms.nl" class="text-[#f2692a] hover:underline">info@wacustoms.nl</a> of via ons <strong>contactformulier</strong>.</p>
        `
      }
    ]
  },
  
   "fyto-certificaat": {
    slug: "fyto-certificaat",
    title: "Fyto-certificaat",
    image: "/fyto-doc.jpg", // bạn có thể thay bằng ảnh thực tế
    imageAlt: "Fytosanitair Certificaat",
    sections: [
      {
        title: "Wanneer is een fyto-certificaat nodig?",
        content: `
          <p>Wanneer u regelmatig <strong>boomkwekerijproducten</strong> exporteert komt het woord <em>fyto</em> u vast bekend voor. Een <strong>fytosanitair certificaat</strong> heeft u nodig wanneer u deze producten buiten de Europese Unie gaat exporteren. Het certificaat is een <strong>verklaring waarin autoriteiten uit het land van herkomst</strong> verklaren dat de desbetreffende producten voldoen aan de gestelde eisen.</p>
          <p>De keuringsinstantie verklaart met de afgifte van het fyto-certificaat aan de overheid van het land van bestemming dat de zending voldoet aan alle gestelde <strong>fytosanitaire eisen</strong> in dit land. Deze eisen kunt u <a href="#" class="text-[#f2692a] hover:underline">hier</a> vinden. Op basis van inspecties voorafgaand aan de export wordt het certificaat verstrekt.</p>
        `
      },
      {
        title: "Welke producten vallen er onder de fyto-norm?",
        content: `
          <p>Dit zijn <strong>planten</strong> of delen hiervan, <strong>bloembollen</strong>, <strong>snijbloemen</strong> en <strong>wortelknollen</strong>. Maar ook verschillende soorten <strong>groenten</strong> en <strong>fruit</strong>.</p>
        `
      },
      {
        title: "Een fyto aanvragen",
        content: `
          <p>Het aanvragen van een <strong>fytocertificaat</strong> verloopt tegenwoordig via <strong>e-CertNL</strong>. Via deze online omgeving worden de certificaten aangevraagd bij de <strong>Nederlandse voedsel- en warenautoriteit</strong>. Hiervoor heeft u wel een <strong>e-herkenning</strong> en <strong>inlog</strong> nodig.</p>
          <p>Wanneer u twijfelt bij het aanvragen van een certificaat kunt u dit beter overlaten aan een <strong>expert</strong>. Bij <strong>WA Customs</strong> bent u daarvoor aan het juiste adres. Door jarenlange ervaring weten onze medewerkers waar zij mee bezig zijn. Zo hoeft u zich geen zorgen te maken en scheelt u het een hoop tijd.</p>
          <p>Wanneer u meer informatie wilt kunt u altijd contact met ons opnemen, dit kan per telefoon <strong>+31 (0)76 596 49 21</strong> (Ma t/m Vrij 7.00 & 21.00, Za 10.00 & 14.00), per e-mail <a href="mailto:info@wacustoms.nl" class="text-[#f2692a] hover:underline">info@wacustoms.nl</a>, of door het <strong>contactformulier</strong> in te vullen. Een van onze medewerkers zal u proberen zo goed mogelijk te informeren.</p>
        `
      }
    ]
  },
  
   "beperkt-fiscaal-vertegenwoordiger": {
    slug: "beperkt-fiscaal-vertegenwoordiger",
    title: "Beperkt fiscaal vertegenwoordiger",
    image: "/fiscaal-vertegenwoordiger.jpg", // bạn có thể thay bằng ảnh thực tế
    imageAlt: "Beperkt fiscaal vertegenwoordiger",
    sections: [
      {
        title: "Wat is beperkt fiscaal vertegenwoordiger?",
        content: `
          <p><strong>WA Customs</strong> kan optreden als <strong>beperkt fiscaal vertegenwoordiger</strong>. Dit kan handig zijn wanneer een buitenlandse ondernemer goederen voor doorlevering wil laten inklaren in Nederland, waarvoor een <strong>Nederlands BTW-nummer</strong> nodig is. Een buitenlandse onderneming beschikt hier natuurlijk niet over. Invoeren met beperkte fiscale vertegenwoordiging kan dan een oplossing bieden.</p>
          <p>De importeur betaalt altijd invoerrechten. Maar bij beperkte fiscale vertegenwoordiging worden de daarbij horende <strong>BTW-verplichtingen</strong> voldaan door de <strong>beperkt fiscaal vertegenwoordiger</strong> die deze later afhandelt met de betreffende buitenlandse importeur. Dit geeft financiële voordelen en de goederen zijn na invoering vrij voor verder vervoer door de EU. De ontvangende partij ontvangt de goederen als <strong>intra-communautaire levering</strong>.</p>
        `
      },
      {
        title: "Optreden als beperkt fiscaal vertegenwoordiger",
        content: `
          <p>Voor beperkte fiscale vertegenwoordiging is een <strong>machtiging</strong> nodig. Deze machtiging kan verstrekt worden door zowel de <strong>verkoper</strong> als de <strong>inkopende partij</strong>. Hierna zal het <strong>BTW-nummer</strong> van de kopende partij gecheckt worden. Daarbij komt dat er een <strong>vergunning</strong> afgegeven dient te zijn aan de partij die optreedt als beperkt fiscaal vertegenwoordiger. <strong>WA Customs</strong> beschikt over deze vergunning.</p>
          <p>Beperkte fiscale vertegenwoordiging is in alle lidstaten van de EU mogelijk. Nederland is een doorvoerland en daar wordt op deze manier van geprofiteerd, met name wanneer het gaat om goederen die naar Duitsland moeten. Het zorgt voor <strong>liquiditeitsvoordelen</strong> omdat er geen invoer-BTW betaald hoeft te worden.</p>
        `
      },
      {
        title: "Vragen?",
        content: `
          <p>Heeft u vragen over het invoeren van goederen onder beperkte fiscale vertegenwoordiging, of zoekt u een partij die voor u op kan treden als beperkt fiscaal vertegenwoordiger? Twijfel dan niet en neem contact met ons op.</p>
          <p>Wij zijn te bereiken van maandag tot en met vrijdag tussen <strong>7.00 en 21.00</strong> en op zaterdag tussen <strong>10.00 en 14.00</strong>. Dit kan via telefoonnummer <strong>+31 (0)76 596 49 21</strong>, per e-mail <a href="mailto:info@wacustoms.nl" class="text-[#f2692a] hover:underline">info@wacustoms.nl</a> of door het <strong>contactformulier</strong> in te vullen.</p>
        `
      }
    ]
  },
  
    "gdb-keuring-bij-binnenkomst": {
      slug: "gdb-keuring-bij-binnenkomst",
      title: "GDB Keuring bij binnenkomst",
      sections: [
        {
            content: `
              <p>Wanneer er dierlijke producten zoals vis en vlees via Nederland binnen de Europese Unie komen dienen deze gekeurd te worden door de Nederlandse Voedsel en Waren Autoriteit (NVWA). Dit dient te gebeuren bij het eerste punt van binnenkomst binnen de Europese Unie.</p>
              <p>De NVWA controleert de producten bij binnenkomst in samenwerking met de douane. De reden hiervan is om te voorkomen dat onveilige producten of dierziekten de Europese Unie binnenkomen. Het aanleveren van het originele gezondheidscertificaat is nodig, dit certificaat dient ingediend te worden bij de NVWA. Wanneer dit niet aangeleverd wordt doet de NVWA niets.</p>
            `
          },
          {
            title: "De stappen van een GDB keuring",
            content: `
              <p>Eerst worden de documenten gecontroleerd door het GDB team. Wanneer de documentaire controle door de douane gedaan is, gaan de papieren ter controle van de juiste gegevens op het certificaat naar de NVWA. Wanneer het certificaat juist bevonden wordt, wordt er een keuropdracht uitgeschreven. De container zal dan van de terminal gehaald worden om naar de keuringslocatie gebracht te worden. Als de goederen goedgekeurd worden kan deze weggevoerd worden naar de plaats van lossing. Wanneer de container met een transitaangifte geleverd wordt zal er een vervolgtransit gemaakt moeten worden.</p>
            `
          },
          {
            title: "Vragen?",
            content: `
              <p>Wanneer u niet op de hoogte bent van het importeren van dierlijke producten, de regels en procedures die hier omheen gelden, of er niet teveel tijd aan wilt besteden kunt u contact met ons opnemen. Van vooraanmelding tot inklaring kunt u bij ons terecht.</p>
              <p>WA Customs is bereikbaar van maandag tot en met vrijdag tussen 7.00 en 21.00 en op zaterdag tussen 10.00 en 14.00. We zijn bereikbaar op het telefoonnummer +31 (0)76 596 49 21, per e-mail via info@wacustoms.nl en via het contactformulier. Wij zullen u zo snel mogelijk proberen te helpen met uw vragen.</p>
            `
          }
      ]
    },
  
    consultancy: {
      slug: "consultancy",
      title: "Consultancy",
      sections: []
    },
  
    "actieve-veredeling": {
      slug: "actieve-veredeling",
      title: "Actieve Veredeling",
      sections: [
        {
            content: `
              <p>Met de regeling actieve veredeling kunnen bepaalde goederen vanuit landen buiten de Europese Unie ingevoerd worden om hier verwerkt en bewerkt te worden, zonder dat hierover invoerrechten en btw hoeven te worden betaald. Voorwaarde is wel dat de goederen binnen de EU verwerkt worden en daarna een nieuwe douanebestemming krijgen. Ook moeten bij de toepassing actieve veredeling de belangen van de Europese producenten niet uit het oog verloren worden. De aanvrager van deze douaneregeling moet dan ook beschikken over de juiste vergunning.</p>
            `
          },
          {
            title: "Verschillende soorten vergunningen",
            content: `
              <p>Er bestaan twee soorten vergunningen voor deze regeling: de klassieke vergunning en een globalisatievergunning. Wanneer een klassieke vergunning wordt aangevraagd moeten alle douaneaangiften die onder actieve veredeling geplaatst zijn, stuk voor stuk aangezuiverd worden. Wanneer men kiest voor een globalisatievergunning worden de douaneaangiften, zoals het woord al zegt, globaal aangezuiverd. Dit wordt per kwartaal gedaan.</p>
              <p>Een bedrijf komt alleen in aanmerking voor een vergunning wanneer de veredelingsactiviteiten binnen de EU plaatsvinden en het bedrijf dat de activiteiten uitvoert ook in de Europese Unie gevestigd is.</p>
            `
          },
          {
            title: "Aanvragen vergunning actieve veredeling",
            content: `
              <p>Vanwege de complexiteit is voor het aanvragen van een dergelijke vergunning specifieke en vakinhoudelijke douanekennis vereist. Ook kan het voorkomen dat u als aanvrager getoetst wordt om te kijken of u voldoet aan de economische voorwaarden. WA Customs adviseert en helpt u graag bij alle zaken die komen kijken bij het aanvragen van de vergunning actieve veredeling.</p>
            `
          },
          {
            title: "Vragen?",
            content: `
              <p>Heeft u vragen omtrent de regeling actieve veredeling? Wilt u een vergunning aanvragen of wilt u hulp hierbij? Twijfel dan niet en neem contact op met ons. WA Customs is bereikbaar van maandag tot en met vrijdag tussen 7.00 en 21.00 en op zaterdag tussen 10.00 en 14.00. Via telefoonnummer +31 (0)76 596 49 21, per e-mail via info@wacustoms.nl of door het contactformulier te gebruiken.</p>
            `
          }
      ]
    },
  
    "beheren-van-een-douane-entrepot": {
      slug: "beheren-van-een-douane-entrepot",
      title: "Beheren van een douane-entrepot",
      sections: [
        {
            content: `
              <p>U wilt het betalen van bepaalde invoerrechten en/of btw voorkomen, uitstellen of minimaliseren? Dat kan door uw goederen op te slaan in een douane-entrepot. Dit stelt importeurs in staat om op het beste moment de producten in te klaren en/of te betalen. Ook is het een effectieve en efficiënte manier om goederen van buiten de Europese Unie weer gelijk uit te voeren naar een land buiten de Europese Unie.</p>
              <p>Het opslaan van goederen in een douane-entrepot is echter niet zo gemakkelijk als het lijkt. Het is een methode met vaak complexe controleprocedures, omdat de goederen onder toezicht blijven van de douane en dit strikte beheermaatregelen vereist. Er zijn veel verschillende soorten procedures, die voornamelijk van elkaar verschillen in omvang. Hoe groot de procedure is hangt af van de aard van de goederen, de distributieplannen, de douane-eisen in de lidstaat en het type douane-entrepot.</p>
            `
          },
          {
            title: "Type entrepots",
            content: `
              <p>Sinds de nieuwe douanewet van 1 mei 2016 wordt enkel nog onderscheid gemaakt tussen een publiek en een particulier douane-entrepot. Een publiek douane-entrepot is bestemd voor opslag van niet-Uniegoederen door iedereen. Degene die de aangifte tot plaatsing doet is dan meteen houder van de regeling, dus dit hoeft niet tevens de houder van de vergunning te zijn. Voor een particulier entrepot geldt dan uiteraard het andere, dus de houder van de vergunning is tevens de houder van de regeling. Een publiek douane-entrepot vinden we voornamelijk in zeehavens waar de zending van binnenkomende schepen wordt gelost.</p>
            `
          },
          {
            title: "Particuliere douane-entrepot",
            content: `
              <p>Bij een particulier douane-entrepot gebeurt de opslag dus onder verantwoordelijkheid van de houder van de vergunning. De houder van de vergunning hoeft echter niet de eigenaar te zijn van de opgeslagen goederen. Goederen kunnen daar opgeslagen worden totdat bekend is waar ze naar toe gaan; in het geval van een bestemming buiten de Europese Unie wordt zo voorkomen dat er onnodig invoerrechten betaald wordt. Voor de aanvraag van een dergelijke vergunning eist de douane de nodige douanekennis zodat kan worden aangetoond dat het betreffende bedrijf weet hoe met de goederen moet worden omgegaan en het belang hiervan. WA Customs begeleidt regelmatig de aanvraag van entrepotvergunningen.</p>
            `
          },
          {
            title: "Vragen?",
            content: `
              <p>Voor vragen over douane-entrepots of het beheren hiervan kunt u contact met ons opnemen. WA Customs is te bereiken van maandag tot en met vrijdag tussen 7.00 en 21.00 en op zaterdag tussen 10.00 en 14.00. Op telefoonnummer +31 (0)76 596 49 21 , per e-mail via info@wacustoms.nl en via het contactformulier.</p>
            `
          }
      ]
    },
  
    "douanevergunning-aanvragen": {
      slug: "douanevergunning-aanvragen",
      title: "Douanevergunning aanvragen",
      sections: [
        {
            content: `
              <p>Wanneer u regelmatig goederen onder een economische douaneregeling plaatst is het verstandig om een vergunning aan te vragen. Maar een douanevergunning aanvragen kost veel tijd en het is belangrijk om over de benodigde douanekennis te beschikken. Er zijn verschillende vergunningen die aangevraagd kunnen worden. Zo is er de vergunning actieve veredeling, vergunning passieve veredeling of een vergunning douane-entrepot.</p>
            `
          },
          {
            title: "Een douanevergunning aanvragen",
            content: `
              <p>Het aanvragen van een douanevergunning moet altijd schriftelijk gebeuren. Daarbij is het van belang om te controleren of het juiste formulier gebruikt is, of alle bescheiden bijgevoegd zijn en aanvullende gegevens ingevuld zijn. De aanvraag moet altijd volledig en correct worden ingevuld en ondertekend zijn door een bevoegd persoon. Wanneer dit allemaal is gebeurd kan de vergunning worden opgestuurd.</p>
              <p>Er zitten nogal wat haken en ogen aan het aanvragen van een vergunning en vaak worden er specifieke douanetermen gebruikt. Dit kan het voor een bedrijf lastig maken om alles correct aan te leveren.</p>
            `
          },
          {
            title: "Een tijdelijke douanevergunning",
            content: `
              <p>Daarnaast kan er ook een vergunning op aangifte gedaan worden. Dit kan wanneer incidenteel goederen onder een economische douaneregeling geplaatst worden. Aan de aangifte wordt dan een schrijven toegevoegd dat door de douane goedgekeurd moet worden. Wanneer dit gedaan is kunnen de goederen onder vergunning geplaatst worden, maar dit moet voor elke aangifte afzonderlijk worden gedaan. Het is dus een tijdrovende aangelegenheid.</p>
            `
          },
          {
            title: "Vragen over douanevergunningen?",
            content: `
              <p>Heeft u vragen over het aanvragen van een douanevergunning of heeft u hierbij begeleiding nodig? Neem vrijblijvend contact met ons op. WA Customs beschikt over de juiste kennis om uw aanvraag voor een douanevergunning succesvol te laten verlopen. Wij kunnen u ongetwijfeld verder helpen.</p>
              <p>Wij zijn bereikbaar via telefoonnummer +31 (0)76 596 49 21, via e-mail info@wacustoms.nl of door het contactformulier in te vullen. WA Customs is geopend van maandag tot en met vrijdag van 7.00 tot 21.00 en op zaterdag tussen 10.00 en 14.00.</p>
            `
          }
      ]
    },
  
    "geregistreerd-exporteur-rex": {
      slug: "geregistreerd-exporteur-rex",
      title: "Geregistreerd exporteur REX",
      sections: [
        {
            content: `
              <p>Het systeem van geregistreerde uitvoerders is het systeem van zelfcertificering van preferentiële oorsprong van de Europese Unie. Vanaf 1 januari 2017 kan deze methode van zelfcertificering worden toegepast in het kader van het APS(Algemeen Preferentie Stelsel voor ontwikkelingslanden) en bepaalde vrijhandelsakkoorden. Zoals recent met Japan is afgesloten, maar ook geldt dit voor het akkoord met Canada(CETA).</p>
              <p>Vanaf 1 juli 2020 mag er geen FORM A meer worden afgegeven in de ontwikkelingslanden de zo genaamde APS landen. Het systeem REX is inmiddels al in werking getreden en er zullen gefaseerd meer begunstigde landen gebruik gaan maken van het REX-systeem, tot uiteindelijk in 2020 alle begunstigde landen zijn aangesloten.</p>
              <p>De attest van oorsprong mag alleen door een geregistreerde exporteur op de factuur of ander handels document geplaatst worden. Maar wat houdt het begrip geregistreerde exporteur dan precies in? In de APS landen dienen exporteurs/leveranciers zich te registreren indien zij goederen exporteren met een waarde hoger dan €6000,-. Dit zelfde geldt overigens voor exporteurs die gevestigd zijn in een lidstaat, zij moeten geregistreerd zijn bij de Douaneautoriteiten in de betreffende lidstaat. Indien de waarde van de goederen niet hoger dan €6000,- is hoeft de exporteur niet geregistreerd te worden en kan worden volstaan met een factuurverklaring. Indien u REX nummers wil controleren op echtheid kunt u gebruik maken van deze website.</p>
              <p>Om uw bedrijf te registreren kunt u gebruik maken van een daarvoor bestemd aanvraagformulier. WA Customs kan u hierbij ondersteunen en adviseren welke stappen u kunt ondernemen.</p>
              <p>Neem daarom nu vrijblijvend contact op met ons.</p>
            `
          }
      ]
    },
  
   "leveringsvoorwaarden-incoterms": {
    slug: "leveringsvoorwaarden-incoterms",
    title: "Leveringsvoorwaarden – Incoterms",
    image: "/incoterms-doc.jpg", // bạn có thể thay bằng ảnh thực tế
    imageAlt: "Incoterms 2020",
    sections: [
      {
        title: "Wat zijn Incoterms?",
        content: `
          <p><strong>Incoterms</strong> (<em>International Commercial Terms</em>) zijn een internationale standaard over de <strong>rechten en plichten</strong> van de koper en verkoper bij internationaal transport van goederen. De Incoterms zijn ontwikkeld en gepubliceerd door de <strong>International Chamber of Commerce (ICC)</strong>.</p>
          <p>De meest recente versie is de <strong>Incoterms 2020</strong>, waarin <strong>11 regels</strong> of leveringsvoorwaarden zijn gedefinieerd. Daarvan zijn er <strong>4 gericht op enkel de zeevaart</strong>, de overige <strong>7 zijn toepasbaar op alle vormen van transport</strong>.</p>
          <p>In het contract tussen verkoper en koper wordt vastgelegd:</p>
          <ul class="list-disc pl-6 space-y-2 mt-3">
            <li>de verplichtingen van beide partijen;</li>
            <li>wie de verzekeringen, vergunningen, machtigingen en andere formaliteiten regelt;</li>
            <li>wie tot waar het transport regelt;</li>
            <li>het punt waarop de kosten en risico’s overgaan van de verkoper naar de koper.</li>
          </ul>
        `
      },
      {
        title: "EXW – Ex Works (Af fabriek)",
        content: `
          <p><strong>Ex Works – Af fabriek</strong></p>
          <p>Bij EXW heeft de koper <strong>maximale verplichtingen</strong> en de verkoper <strong>minimale verplichtingen</strong>.</p>
          <p>De koper draagt alle kosten die zijn verbonden aan het vervoer naar de eindbestemming. Ook regelt hij alle douaneformaliteiten en draagt hij het risico van verlies of schade aan de goederen vanaf het moment dat hij de goederen in ontvangst neemt op de afgesproken plaats. Deze plaats, waar het risico overgaat van verkoper op koper, noemen we binnen Incoterms ook wel de <strong>‘plaats van levering’</strong> (bij EXW dus meestal het bedrijf van de verkoper). De koper is zelfs verantwoordelijk voor het laden van de goederen in het voertuig.</p>
          <p>Omdat een vervoerder op basis van internationale vervoersverdragen beperkt aansprakelijk is, is het voor de koper verstandig een <strong>goederentransportverzekering</strong> af te sluiten.</p>
          <p>Het advies is om, zeker bij zakendoen met leveranciers of klanten buiten de EU, <strong>minimaal de Incoterm FCA</strong> af te spreken in plaats van EXW.</p>
        `
      },
      {
        title: "FCA – Free Carrier (Vrachtvrij tot vervoerder)",
        content: `
          <p><strong>Free Carrier – Vrachtvrij tot vervoerder</strong></p>
          <p>De verkoper betaalt voor vervoer naar het genoemde punt van levering en het risico gaat over wanneer de goederen worden overgedragen aan de eerste vervoerder.</p>
          <p>Een verkoper hoeft zijn goederen alleen maar op een afgesproken plaats – vaak zijn bedrijfspand of een externe locatie zoals een groupageloods of een terminal in de zeehaven van vertrek – over te dragen aan (de vervoerder van) de koper. Vanaf dat moment draagt de koper alle aan het vervoer gerelateerde kosten, en het risico van verlies of schade aan de goederen.</p>
          <p>Ligt de bestemming van de goederen buiten de Europese Unie (EU)? Naast het verzorgen van de uitvoeraangifte bij de douane is de verkoper ook verantwoordelijk voor het regelen van een <strong>uitvoervergunning</strong> of van andere uitvoerdocumenten, mocht dat nodig zijn. Voor de invoer in het bestemmingsland regelt de koper de douaneformaliteiten en de betaling van eventuele invoerbelastingen. Ook vraagt de koper, indien nodig, lokale invoerdocumenten aan (bijvoorbeeld een invoervergunning).</p>
        `
      },
      {
        title: "FAS – Free Alongside Ship (Vrij langszij schip)",
        content: `
          <p><strong>Free Alongside Ship – Vrij langszij schip</strong></p>
          <p>FAS is enkel toe te passen op transporten over water (zee en binnenwateren).</p>
          <p>De verkoper levert zodra hij de goederen in de afgesproken verschepingshaven, naast het door de koper genoemde schip, neerzet. In de praktijk betekent dit dat de verkoper de goederen aflevert op de kade, of op een binnenvaartschip gelegen naast het vertrekkende schip. Vanaf dat moment draagt de koper de kosten gerelateerd aan het vervoer en het risico van verlies of schade aan de goederen tijdens het vervoer. De koper is dus ook verantwoordelijk voor het laden van het vertrekkende schip vanaf de kade of vanaf het binnenschip. Benoem in de koopovereenkomst dan ook de exacte laadplaats, omdat daar het risico overgaat.</p>
          <p>FAS is vooral geschikt voor het vervoer van <strong>bulkgoed</strong> (zoals graan) of <strong>stukgoed</strong> (product dat je niet op elkaar stapelt in een container zoals een auto). Bij dit soort goederen is het makkelijker na te gaan in welke staat de goederen zich bevinden op het moment dat de verkoper ze heeft neergezet op de kade (of op een binnenschip).</p>
          <p>De verkoper moet, als de bestemming van de goederen buiten de Europese Unie (EU) ligt, de <strong>uitvoeraangifte</strong> bij de douane regelen. Verder is hij verantwoordelijk voor het regelen van een uitvoervergunning of van andere uitvoerdocumenten, mocht dat nodig zijn. Voor de invoer in het bestemmingsland regelt de koper de douaneformaliteiten en de betaling van eventuele invoerbelastingen. Ook vraagt de koper, indien nodig, lokale invoerdocumenten aan (bijvoorbeeld een invoervergunning).</p>
        `
      },
      {
        title: "FOB – Free on Board (Vrij aan boord)",
        content: `
          <p><strong>Free on Board – Vrij aan boord</strong></p>
          <p>FOB is enkel toe te passen op transporten over water (zee en binnenwateren).</p>
          <p>De verkoper moet de goederen aan boord van het door de koper aangewezen schip laden. De verkoper draagt het risico van verlies of schade aan de goederen en alle kosten, tot het moment dat hij de goederen aflevert aan boord van het door de koper genoemde schip in de afgesproken verschepingshaven. Vanaf het moment dat de goederen de reling zijn gepasseerd draagt de koper de kosten en het transportrisico.</p>
          <p>FOB is vooral geschikt voor het vervoer van <strong>bulkgoed</strong> (zoals graan) of <strong>stukgoed</strong> (product dat je niet op elkaar stapelt in een container zoals een auto). Bij dit soort goederen is het makkelijker na te gaan in welke staat de goederen zich bevinden op het moment dat de verkoper ze aan boord van het schip heeft geplaatst. Bij goederen die zich in een container bevinden gaat dit niet omdat de container al op een eerder moment is geladen en afgesloten.</p>
          <p>De verkoper moet, als de bestemming van de goederen buiten de Europese Unie (EU) ligt, de <strong>uitvoeraangifte</strong> bij de douane regelen. Verder is hij verantwoordelijk voor het regelen van een uitvoervergunning of van andere uitvoerdocumenten, mocht dat nodig zijn. Voor de invoer in het bestemmingsland regelt de koper de douaneformaliteiten en de betaling van eventuele invoerbelastingen. Ook vraagt de koper, indien nodig, lokale invoerdocumenten aan (bijvoorbeeld een invoervergunning).</p>
        `
      },
      {
        title: "CFR – Cost and Freight (Kostprijs en vracht)",
        content: `
          <p><strong>Cost and Freight – Kostprijs en vracht</strong></p>
          <p>CFR is enkel toe te passen op transporten over water (zee en binnenwateren).</p>
          <p>De verkoper draagt het risico van verlies of schade aan de goederen tot het moment dat hij de goederen aflevert aan boord van het schip in de afgesproken verschepingshaven (zodra de goederen de reling zijn gepasseerd). De verkoper regelt en betaalt het vervoer en daaraan gerelateerde kosten tot de afgesproken haven van bestemming.</p>
          <p>Verzekering voor de goederen is <strong>NIET</strong> inbegrepen. Ook het onderscheid tussen de bestemmingshaven en de verschepingshaven is bij CFR belangrijk. <strong>Terminal Handling Charges (THC)</strong> zijn kosten die worden aangerekend door de terminaloperator. Deze kosten kunnen al dan niet worden opgenomen door de vervoerder in hun vrachttarieven – de koper zou moeten informeren of de CFR-prijs THC omvat, om verrassingen te voorkomen.</p>
          <p>CFR is vooral geschikt voor het vervoer van <strong>bulkgoed</strong> (zoals graan) of <strong>stukgoed</strong> (product dat je niet op elkaar stapelt in een container zoals een auto). Bij dit soort goederen is het makkelijker na te gaan in welke staat de goederen zich bevinden op het moment dat de verkoper ze heeft neergezet aan boord van het schip. Bij goederen die zich in een container bevinden gaat dit niet omdat de container al op een eerder moment is geladen en afgesloten.</p>
        `
      },
      {
        title: "CIF – Cost, Insurance and Freight (Kostprijs, verzekering en vracht)",
        content: `
          <p><strong>Cost, Insurance and Freight – Kostprijs, verzekering en vracht</strong></p>
          <p>CIF is enkel toe te passen op transporten over water (zee en binnenwateren). Inhoudelijk komt deze Incoterm vrijwel geheel overeen met CFR, alleen moet de verkoper hierbij de <strong>verzekering</strong> afsluiten en betalen.</p>
          <p>De verkoper draagt het risico van verlies of schade aan de goederen tot het moment dat hij de goederen aflevert aan boord van het schip in de afgesproken verschepingshaven (zodra de goederen de reling zijn gepasseerd). De verkoper regelt en betaalt het vervoer en daaraan gerelateerde kosten tot de afgesproken haven van bestemming.</p>
          <p>Als extra verplichting geldt dat de verkoper een <strong>transportverzekering</strong> moet afsluiten met een <strong>minimale dekking</strong> die overeenkomt met de <strong>Institute Cargo Clauses</strong>. Deze bieden een dekking voor brand, explosie, stranden, zinken, kapseizen, aanvaring, het lossen van de lading in een noodhaven, averij grosse opoffering en overboord werpen. De verkoper en de koper zijn wel vrij om met wederzijds goedvinden een hogere dekkingsgraad af te spreken.</p>
          <p>Het onderscheid tussen de bestemmingshaven en de verschepingshaven is bij CIF belangrijk. <strong>Terminal Handling Charges (THC)</strong> zijn kosten die worden aangerekend door de terminaloperator. Deze kosten kunnen al dan niet worden opgenomen door de vervoerder in hun vrachttarieven – de koper zou moeten informeren of de CIF-prijs THC omvat, om verrassingen te voorkomen.</p>
          <p>CIF wordt in de praktijk zeer veel toegepast, omdat de kosten en de risico’s zeer goed verdeeld worden over de verschillende partijen.</p>
        `
      },
      {
        title: "CPT – Carriage Paid To (Vrachtvrij tot)",
        content: `
          <p><strong>Carriage Paid To – Vrachtvrij tot</strong></p>
          <p>CPT komt vooral voor bij het vervoer van goederen in containers en betekent dat het risico van verlies of schade aan de goederen overgaat op de koper zodra de verkoper de goederen in zijn bedrijfspand of op een andere afgesproken laadplaats overhandigt aan zijn vervoerder. De verkoper regelt en betaalt het vervoer en daaraan gerelateerde kosten tot de afgesproken plaats van bestemming. Risico’s worden overgedragen aan de koper bij het overhandigen van goederen aan de eerste vervoerder. CPT is de tegenhanger van CFR.</p>
          <p><strong>Terminal Handling Charges (THC)</strong> zijn kosten die worden aangerekend door de terminaloperator. Deze kosten kunnen al dan niet worden opgenomen door de vervoerder in hun vrachttarieven – de koper zou moeten informeren of de CPT-prijs THC omvat, om verrassingen te voorkomen.</p>
          <p>De voorwaarde CPT verplicht de verkoper tot <strong>uitklaring van de goederen</strong>.</p>
          <p>In Nederland wordt de term <strong>ENF (Effectief Netto Franco)</strong> ook voor CPT gebruikt.</p>
        `
      },
      {
        title: "CIP – Carriage and Insurance Paid To (Vrachtvrij inclusief verzekering tot)",
        content: `
          <p><strong>Carriage and Insurance Paid To – Vrachtvrij inclusief verzekering tot</strong></p>
          <p>Inhoudelijk komt deze Incoterm sterk overeen met CPT, alleen moet de verkoper hierbij de <strong>verzekering</strong> afsluiten en betalen. Het risico van verlies of schade aan de goederen gaat over van de verkoper op de koper zodra de verkoper de goederen in zijn bedrijfspand of op een andere afgesproken laadplaats overhandigt aan zijn vervoerder. De verkoper regelt en betaalt het vervoer en daaraan gerelateerde kosten tot de afgesproken plaats van bestemming. De verkoper sluit een <strong>verzekeringscontract</strong> af ten behoeve van de koper vanaf het punt van levering tot tenminste het punt van bestemming. Deze verzekering dient te voldoen aan de uitgebreide dekking <strong>Institute Cargo Clauses (A)</strong>.</p>
          <p>De verkoper is verplicht de klant te informeren dat de goederen onderweg zijn.</p>
          <p>De term CIP verplicht de verkoper tot <strong>uitklaring van de goederen</strong>.</p>
        `
      },
      {
        title: "DAP – Delivered At Place (Geleverd ter Bestemming)",
        content: `
          <p><strong>Delivered At Place – Geleverd ter Bestemming</strong></p>
          <p>DAP brengt veel verplichtingen mee voor de verkoper. De verkoper regelt en betaalt het vervoer tot de afgesproken plaats van bestemming. Hij draagt ook het risico van verlies of schade aan de goederen tot het moment dat hij de goederen, nog niet gelost, overdraagt aan de koper op deze afgesproken plaats van bestemming (ofwel plaats van levering). Aan de leveringsconditie moet dan ook altijd worden toegevoegd waar de overdracht van de goederen plaatsvindt. Bij DAP is dit aangegeven met: <strong>... named place (...overeengekomen plaats)</strong>.</p>
          <p>De verkoper moet tevens alle douaneformaliteiten verzorgen die voortvloeien uit de uitvoer. Voor zijn rekening zijn ook de daaraan verbonden kosten, rechten en heffingen. Voor rekening en risico van de koper zijn alle douaneformaliteiten en de daaraan verbonden kosten, rechten en heffingen die voortvloeien uit invoer in het land van bestemming.</p>
          <p>De verkoper moet, als de bestemming van de goederen buiten de Europese Unie (EU) ligt, de <strong>uitvoeraangifte</strong> bij de douane regelen. Verder is hij verantwoordelijk voor het regelen van een uitvoervergunning of van andere uitvoerdocumenten, als dit nodig is. Voor de invoer in het bestemmingsland regelt de koper de douaneformaliteiten en de betaling van eventuele invoerbelastingen. Ook vraagt de koper, indien nodig, lokale invoerdocumenten aan (bijvoorbeeld een invoervergunning).</p>
        `
      },
      {
        title: "DPU – Delivered at Place Unloaded (Geleverd ter Bestemming en Gelost)",
        content: `
          <p><strong>Delivered at Place Unloaded – Geleverd ter Bestemming en Gelost</strong></p>
          <p>De Incoterm DPU brengt veel verplichtingen mee voor de verkoper. De verkoper regelt en betaalt het vervoer tot de afgesproken plaats van bestemming. Hij draagt ook het risico van verlies of schade aan de goederen tot het moment dat hij de goederen, gelost, overdraagt aan de koper op deze afgesproken plaats van bestemming (ofwel plaats van levering). DPU is feitelijk hetzelfde als DAP inclusief lossen.</p>
          <p>Bij DPU zijn verschillende mogelijkheden als het gaat om de afgesproken plaats van bestemming. Dit kan bijvoorbeeld het bedrijf van de koper zijn in het bestemmingsland, een terminal in het bestemmingsland of een andere locatie in het bestemmingsland.</p>
          <p>Beschrijf bij DPU het punt binnen de afgesproken plaats van bestemming zo duidelijk mogelijk. Omdat dit de plaats is waar het risico van verlies of schade aan de goederen, na het lossen van de goederen, overgaat van verkoper op koper (plaats van levering). Ook moet het een plaats zijn waar het lossen van het vervoermiddel door de verkoper mogelijk is. Is lossen niet mogelijk, dan is het advies aan de verkoper om DAP af te spreken.</p>
          <p>De verkoper moet, als de bestemming van de goederen buiten de Europese Unie (EU) ligt, de <strong>uitvoeraangifte</strong> bij de douane regelen. Verder is hij verantwoordelijk voor het regelen van een uitvoervergunning of van andere uitvoerdocumenten, als dit nodig is. Voor de invoer in het bestemmingsland regelt de koper de douaneformaliteiten en de betaling van eventuele invoerbelastingen. Ook vraagt de koper, indien nodig, lokale invoerdocumenten aan (bijvoorbeeld een invoervergunning).</p>
        `
      },
      {
        title: "DDP – Delivered Duty Paid (Geleverd Rechten Betaald)",
        content: `
          <p><strong>Delivered Duty Paid – Geleverd Rechten Betaald</strong></p>
          <p>Bij DDP heeft de verkoper <strong>maximale verplichtingen</strong> en de koper <strong>minimale verplichtingen</strong>.</p>
          <p>De verkoper regelt en betaalt het vervoer tot de afgesproken plaats van bestemming. Hij is verantwoordelijk voor de inklaring en betaalt de eventuele invoerheffingen in het bestemmingsland, zoals invoerrechten en/of invoer-btw. Verder draagt hij het risico van verlies of schade aan de goederen tot het moment dat hij de goederen, nog niet gelost, overdraagt aan de koper op de afgesproken plaats van bestemming (ofwel plaats van levering).</p>
          <p>Beschrijf bij DDP het punt binnen de afgesproken plaats van bestemming zo duidelijk mogelijk. Omdat dit de plaats is waar het risico van verlies of schade aan de goederen overgaat van verkoper op koper (plaats van levering).</p>
          <p>De koper draagt de kosten van het lossen op de afgesproken plaats van bestemming, tenzij de vervoerovereenkomst tussen verkoper en vervoerder aangeeft dat deze kosten voor rekening van de verkoper komen. De koper draagt ook het risico van verlies of schade aan de goederen vanaf het moment dat de goederen, niet uitgeladen, aankomen op de afgesproken plaats van bestemming.</p>
          <p>DDP gaat verder dan DAP. Wie naar een land buiten de EU exporteert is, behalve voor het regelen van de uitvoeraangifte bij de douane en het regelen van eventuele uitvoerdocumenten, ook verantwoordelijk voor de inklaring bij de douane in het land van bestemming. Hieronder vallen de kosten verbonden aan de inklaring, inclusief de eventueel verschuldigde invoerbelastingen zoals invoerrechten, invoer-btw of andere lokale invoerheffingen.</p>
          <p>DDP wordt in het Nederlands ook aangeduid met Franco Huis.</p>
          <p>Bronnen: Evofenedex en Kamer van Koophandel</p>
          <p>Voor meer informatie kunt u vrijblijvend contact met ons opnemen.</p>
        `
      }
    ]
  },
  
 "passieve-veredeling": {
    slug: "passieve-veredeling",
    title: "Passieve Veredeling",
    image: "/passieve-veredeling.jpg", // bạn có thể thay bằng ảnh thực tế
    imageAlt: "Passieve Veredeling",
    sections: [
      {
        title: "Wat is passieve veredeling?",
        content: `
          <p>Met de regeling <strong>passieve veredeling</strong> kunt u <strong>non-EU goederen</strong> tijdelijk uit het douanegebied uitvoeren om te gebruiken bij één of meer <strong>veredelingen</strong>. Bijvoorbeeld voor <strong>bewerking</strong>, <strong>verwerking</strong>, <strong>vernietiging</strong> of <strong>herstelling</strong> in een land buiten de Europese Unie. Daarna kunt u de veredelingsproducten weer terugbrengen in het vrije verkeer van de EU, <strong>zonder dat u volledige invoerrechten</strong> hoeft te betalen.</p>
        `
      },
      {
        title: "Voorwaarden voor gebruik",
        content: `
          <p>Om gebruik te maken van de regeling passieve veredeling moet een <strong>vergunning</strong> aangevraagd te worden. Dit kan op twee manieren. Wanneer u regelmatig gebruik gaat maken van deze regeling kunt u het best een <strong>doorlopende vergunning</strong> aanvragen bij de douane. Wanneer u een enkele keer gebruik wilt maken van de regeling passieve veredeling kunt u een <strong>vergunning op aangifte</strong> doen.</p>
        `
      },
      {
        title: "Aanvragen van de vergunning passieve veredeling",
        content: `
          <p>Om een vergunning passieve veredeling te krijgen wordt eerst getoetst of aan de <strong>economische voorwaarden</strong> wordt voldaan. Zo wordt onderzocht of de veredeling de belangen van de in de Europese Unie gevestigde producent niet schaadt. Ook moet worden aangetoond dat veredeling binnen de EU <strong>economisch niet zinvol</strong> is, <strong>technisch onmogelijk</strong> is of op basis van <strong>contractuele verplichtingen</strong> niet reëel is.</p>
          <p>Bij het aanvragen van deze vergunning komt best het een en ander kijken en <strong>douane-technische kennis</strong> is hiervoor gewenst, omdat in de aanvraagprocedure met specifieke termen wordt gewerkt. <strong>WA Customs</strong> heeft al deze kennis in huis om u te helpen bij het aanvragen van de vergunning passieve veredeling.</p>
        `
      },
      {
        title: "Hulp nodig of vragen?",
        content: `
          <p>Wenst u hulp bij het aanvragen van de regeling passieve veredeling? Wilt u meer informatie over de voordelen van het werken met de regeling? Of heeft u hier vragen over? Twijfel niet en neem contact op met ons.</p>
          <p><strong>WA Customs</strong> is geopend van <strong>maandag tot en met vrijdag tussen 7.00 en 21.00</strong> en op <strong>zaterdag tussen 10.00 en 14.00</strong>. Wij zijn te bereiken per telefoon via <strong>+31 (0)76 596 49 21</strong>, per e-mail <a href="mailto:info@wacustoms.nl" class="text-[#f2692a] hover:underline">info@wacustoms.nl</a> of door het <strong>contactformulier</strong> in te vullen. Een van onze medewerkers zal u zo snel mogelijk proberen te helpen met uw vragen.</p>
        `
      }
    ]
  }
  };