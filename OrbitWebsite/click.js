const descriptions = [
	`<h2>Portie Gemengd</h2><br> Op <strong>22 maart 2025</strong> hebben we samen met enkele middenveldorganisaties uit <strong>Leuven</strong> zoals Broederlijk Delen “<strong>Portie Gemengd</strong>” 
	georganiseerd. Dit was naar aanleiding van 3 vastenperiodes die samenvielen, namelijk de Baháʼí, de Ramadan en de christelijke
	vasten. De mensen kregen op dit evenement een bingoblad waarop vragen stonden om elkaar beter te leren kennen en mensen te
	zoeken die dezelfde kenmerken als hen delen. Dit helpt mensen van verschillende levensbeschouwingen om gesprekken 
	te starten, en om te beseffen dat er veel gelijkenissen tussen levensbeschouwingen zijn. Daarnaast
	werd er ook een verbindende maaltijd georganiseerd waar iedereen gerechten van zijn of haar cultuur mocht meenemen om
	met anderen te delen om een potluck systeem te creëren.`,

	`<h2>Vier Vrede</h2><br> Het evenement <strong>Vier Vrede</strong>, georganiseerd op <strong>22 november 2025</strong> in <strong>Dendermonde</strong> kende een mooie opkomst met 90 aanwezigen uit verschillende levensbeschouwingen. Zowel de dialoog als de 
	sprekers verliepen zeer goed. Het evenement kwam tot stand in samenwerking met Salamhuis, Dendermozaïek, Pax Christi 
	en Avansa. De stad stelde de zaal ter beschikking. Voor de toekomst is er opnieuw interesse om samen te werken, 
	met de toevoeging van de Rwandese gemeenschap als nieuwe partner. Een aandachtspunt hierbij is het bewaken van de 
	eigenheid van het initiatief en het vermijden van instrumentalisering.`,

	`<h2>Solidaire Standenmarkt</h2><br> Op <strong>29/11</strong> hebben we samen met Indus en hun organisaties een <strong>solidaire standenmarkt</strong> georganiseerd in <strong>Brussel</strong>.
	Er waren in totaal 70 bezoekers langsgekomen om de kraampjes te komen zien.
	Onze motivatie is eenvoudig: een evenement creëren waar de gemeenschap samenkomt,
	ongeacht afkomst en cultuur, om een belangrijk sociaal doel te steunen
	Lokale organisaties die actief zijn in de strijd tegen armoede werden ook uitgenodigd om deel te nemen en/of de markt te bezoeken met hun leden.
	Er werden oplossingen voorzien om eventuele financiële obstakels weg te nemen, want we willen dat iedereen van dit moment kon genieten.
	Het was een warm, solidair en toegankelijk evenement voor een iets aangenamere maand november.`,

	`<h2>Interlevensbeschouwelijke Iftar</h2><br> Een <strong>intergenerationele iftar</strong> brengt jongeren en ouderen van diverse achtergronden samen om de vasten te verbreken, vaak met als doel verbinding,
 	dialoog en eenzaamheidsbestrijding. Deze evenementen, zoals georganiseerd door bijvoorbeeld Brussel Ouderenplatform vzw,
  	focussen op ontmoeting en het delen van ervaringen rond de ramadan. De maaltijd begon traditioneel met harira (soep) en dadels bij zonsondergang.
   	Dit evenement vond plaats op <strong>28 februari 2026</strong> in <strong>Brussel</strong>.`,

	`<h2>Gezamenlijke vastenmaaltijd</h2><br> Op <strong>woensdag 11 maart</strong> organiseerden de katholieke parochie Sint-Niklaas, moskee Al Khair, moskee Yunus Emre en de orthodoxe 
	parochie van de Heilige Theofanie samen een <strong>gezamenlijke vastenmaaltijd</strong>. Alle inwoners van <strong>Willebroek</strong> konden er mee aan tafel schuiven. 
	Ons doel was om mensen met verschillende achtergronden samenbrengen en de onderlinge banden versterken. De bijeenkomst start met
 	een spelletje bingo, dat moet helpen om het gesprek op gang te brengen. Daarna heten vertegenwoordigers van de organiserende
 	gemeenschappen de aanwezigen welkom en kan de maaltijd beginnen`,

	`<h2>Samen Oogsten</h2><br> Op <strong>5 november 2026</strong> organiseert Orbit vzw in <strong>Lokeren</strong> het evenement <strong>"Samen Oogsten"</strong>. Dit samenkomen brengt mensen uit 
	verschillende levensbeschouwingen en gemeenschappen bij elkaar rond het thema van de oogst, een universeel symbool van delen,
	samenwerking en dankbaarheid dat in vele culturen en tradities weerklank vindt.
	"Samen Oogsten" wil een moment van echte ontmoeting zijn, waarbij dialoog en verbinding centraal
	staan. Via activiteiten, sprekers en gedeelde ervaringen krijgen deelnemers de kans om elkaar beter te leren
	kennen en bruggen te bouwen over de grenzen van achtergrond, cultuur en geloof heen.
	Het evenement past binnen de bredere werking van Orbit vzw, die in de regio Waasland actief
	inzet op ontmoeting tussen levensbeschouwelijke gemeenschappen en het versterken van sociale cohesie.`,

	`<h2>Toekomstige Projecten</h2><br> Samenwerking met de katholieke kerk voor gebruik van leegstaande parochietuin</strong>:<br />
	Dit project is momenteel in opstart. Er wordt actief samengewerkt met de katholieke kerk rond het mogelijke gebruik van een leegstaande parochietuin. <br />
	Het is nog te vroeg om hier concrete stappen in te zetten. Dit wordt later verder opgepikt. <br />
	Er is interesse vanuit de stad voor een samenwerking. Als eerste concrete stap werd een <strong>IL-kookactiviteit</strong> ter kennismaking toegezegd.<br />
	De aanvraag werd ingediend. We wachten momenteel op de uitkomst van de bestuursvergadering in <strong>april</strong>.`,
];

const images = [
	"images/Portie-gemengd.png",
	"images/Vier-vrede.png",
	"images/solidaire-Standenmarkt.png",
	"images/interlevensbeschouwelijke-Iftar.png",
	"images/Gezamenlijke-vastenmaaltijd.png",
	"images/Samen-oogsten.png",
	"images/Toekomstige-projecten.png",
];

let display = document.querySelector("#description-display");
let infoImage = document.querySelector("#info-image");
let spans = document.querySelectorAll(".gallery span");

spans.forEach(function (span) {
	span.addEventListener("click", function () {
		let index = span.dataset.index;
		display.innerHTML = descriptions[index];
		infoImage.src = images[index];

		//test om groen hoekje waar de foto in hoort te komen te hiden
		if (infoImage.classList.contains("invisible")) {
			infoImage.classList.remove("invisible");
		}

		document.querySelector("#info-section").scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	});
});
