const descriptions = [
	`Op <strong>29/11</strong> hebben we samen met <strong>Indus</strong> en hun organisaties een <strong>solidaire standenmarkt</strong> georganiseerd.
	Er waren in totaal <strong>70 bezoekers</strong> langsgekomen om de kraampjes te komen zien.
	Onze motivatie is eenvoudig: een <strong>evenement creëren waar de gemeenschap samenkomt</strong>,
	ongeacht afkomst en cultuur, om een belangrijk sociaal <strong>doel te steunen</strong>.
	Lokale organisaties die actief zijn in de <strong>strijd tegen armoede</strong> werden ook uitgenodigd om deel te nemen en/of de markt te bezoeken met hun leden.
	Er werden <strong>oplossingen</strong> voorzien om eventuele <strong>financiële obstakels weg te nemen</strong>, want we willen dat iedereen van dit moment kon genieten.
	Het was een <strong>warm, solidair en toegankelijk evenement</strong> voor een iets aangenamere maand november.`,

	`Een <strong>intergenerationele iftar</strong> brengt jongeren en ouderen van <strong>diverse achtergronden</strong> samen om de <strong>vasten te verbreken</strong>, vaak met als doel <strong>verbinding</strong>,
 	<strong>dialoog</strong> en <strong>eenzaamheidsbestrijding</strong>. Deze evenementen, zoals georganiseerd door bijvoorbeeld Brussel Ouderenplatform vzw,
  	focussen op <strong>ontmoeting</strong> en het <strong>delen van ervaringen</strong> rond de <strong>ramadan</strong>. De maaltijd begon traditioneel met harira (soep) en dadels bij zonsondergang.
   	Deze evenement vond plaats op 28 februari 2026.`,

	`Portie Gemengd, 2025 Leuven:
	Op 22 maart 2025 hebben we samen met enkele <strong>middenveldorganisaties uit Leuven</strong> zoals Broederlijk Delen “Portie Gemengd” 
	georganiseerd. Dit was naar aanleiding van 3 vastenperiodes die samenvielen, namelijk de Baháʼí, de Ramadan en de christelijke
	vasten. De mensen kregen op dit evenement een bingoblad waarop vragen stonden om elkaar beter te leren kennen en mensen te
	zoeken die dezelfde kenmerken als hen delen. Dit helpt mensen van verschillende levensbeschouwingen om gesprekken 
	te starten, en om te beseffen dat er veel gelijkenissen tussen levensbeschouwingen zijn. Daarnaast
	werd er ook een verbindende maaltijd georganiseerd waar iedereen gerechten van zijn of haar cultuur mocht meenemen om
	met anderen te delen om een potluck systeem te creëren.`,

	`Gezamenlijke vastenmaaltijd, 2026 Willebroek:
	Op woensdag 11 maart organiseerden de katholieke parochie Sint-Niklaas, moskee Al Khair, moskee Yunus Emre en de orthodoxe 
	parochie van de Heilige Theofanie samen een gezamenlijke vastenmaaltijd. Alle inwoners konden er mee aan tafel schuiven. 
	Ons doel was om mensen met verschillende achtergronden samenbrengen en de onderlinge banden versterken. De bijeenkomst start met
 	een spelletje bingo, dat moet helpen om het gesprek op gang te brengen. Daarna heten vertegenwoordigers van de organiserende
 	gemeenschappen de aanwezigen welkom en kan de maaltijd beginnen`,

	`Toekomstige projecten – Geraardsbergen
	Samenwerking met de katholieke kerk voor gebruik van leegstaande parochietuin
	Dit project is momenteel in opstart. Er wordt actief samengewerkt met de katholieke kerk rond het mogelijke gebruik van een leegstaande parochietuin.
	Werving van LB in het vrijwilligerskorps Crevits
	Het is nog te vroeg om hier concrete stappen in te zetten. Dit wordt later verder opgepikt.
	Gesprek met de stad over een begeleidingstraject
	Er is interesse vanuit de stad voor een samenwerking. Als eerste concrete stap werd een IL-kookactiviteit ter kennismaking toegezegd.
	Subsidieaanvraag rond het thema "Brood Delen" bij de Orde van de Prins
	De aanvraag werd ingediend. We wachten momenteel op de uitkomst van de bestuursvergadering in april.`,

	`Vier Vrede – Dendermonde, 22 november 2025
	Het evenement kende een mooie opkomst met 90 aanwezigen uit verschillende levensbeschouwingen. Zowel de dialoog als de 
	sprekers verliepen zeer goed. Het evenement kwam tot stand in samenwerking met Salamhuis, Dendermozaïek, Pax Christi 
	en Avansa. De stad stelde de zaal ter beschikking.Voor de toekomst is er opnieuw interesse om samen te werken, 
	met de toevoeging van de Rwandese gemeenschap als nieuwe partner. Een aandachtspunt hierbij is het bewaken van de 
	eigenheid van het initiatief en het vermijden van instrumentalisering.`,

	` Waasland – Lokeren, 5 november 2026
	Waasland – Lokeren, 5 november 2026
	Op 5 november 2026 organiseert Orbit vzw in Lokeren het evenement "Samen Oogsten". Dit samenkomen brengt mensen uit 
	verschillende levensbeschouwingen en gemeenschappen bij elkaar rond het thema van de oogst — een universeel symbool van delen,
	samenwerking en dankbaarheid dat in vele culturen en tradities weerklank vindt.
	"Samen Oogsten" wil een moment van echte ontmoeting zijn, waarbij dialoog en verbinding centraal
	staan. Via activiteiten, sprekers en gedeelde ervaringen krijgen deelnemers de kans om elkaar beter te leren
	kennen en bruggen te bouwen over de grenzen van achtergrond, cultuur en geloof heen.
	Het evenement past binnen de bredere werking van Orbit vzw, die in de regio Waasland actief
	inzet op ontmoeting tussen levensbeschouwelijke gemeenschappen en het versterken van sociale cohesie.`,
];

const images = [
	"images/solidaire-Standenmarkt.png",
	"images/interlevensbeschouwelijke-Iftar.png",
	"images/Portie-gemengd.png",
	"images/Gezamenlijke-vastenmaaltijd.png",
	"images/Toekomstige-projecten.png",
	"images/Vier-vrede.png",
];

let display = document.querySelector("#description-display");
let infoImage = document.querySelector("#info-image");
let spans = document.querySelectorAll(".gallery span");

spans.forEach(function (span) {
	span.addEventListener("mouseup", function () {
		let index = span.dataset.index;
		display.innerHTML = descriptions[index];
		infoImage.src = images[index];

		document.querySelector("#info-section").scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	});
});
