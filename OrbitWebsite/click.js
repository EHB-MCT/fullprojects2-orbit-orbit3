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
   	Dit evenement vond plaats op 28 februari 2026.`,

	`Op 22 maart 2025 hebben we samen met enkele <strong>middenveldorganisaties uit Leuven</strong> zoals Broederlijk Delen “Portie Gemengd” 
	georganiseerd. Dit was naar aanleiding van <strong>3 vastenperiodes</strong> die samenvielen, namelijk de <strong>Baháʼí, de Ramadan en de christelijke
	vasten</strong>. De mensen kregen op dit evenement een <strong>bingoblad</strong> waarop vragen stonden om <strong>elkaar beter te leren kennen</strong> en mensen te
	zoeken die dezelfde kenmerken als hen delen. Dit helpt mensen van verschillende levensbeschouwingen om gesprekken 
	te starten, en om te beseffen dat er veel <strong>gelijkenissen tussen levensbeschouwingen</strong> zijn. Daarnaast
	werd er ook een <strong>verbindende maaltijd</strong> georganiseerd waar iedereen <strong>gerechten van zijn of haar cultuur</strong> mocht meenemen om
	met anderen te delen om een <strong>potluck systeem</strong> te creëren.`,

	`Op <strong>woensdag 11 maart</strong> organiseerden de katholieke parochie Sint-Niklaas, moskee Al Khair, moskee Yunus Emre en de orthodoxe 
	parochie van de Heilige Theofanie samen een <strong>gezamenlijke vastenmaaltijd</strong>. Alle inwoners konden er mee aan tafel schuiven. 
	Ons doel was om mensen met <strong>verschillende achtergronden samenbrengen</strong> en de onderlinge <strong>banden versterken</strong>. De bijeenkomst start met
 	een <strong>spelletje bingo</strong>, dat moet helpen om het <strong>gesprek</strong> op gang te brengen. Daarna heten vertegenwoordigers van de organiserende
 	gemeenschappen de aanwezigen welkom en kan de maaltijd beginnen`,

	`<strong>Samenwerking met de katholieke kerk</strong> voor gebruik van leegstaande parochietuin</strong>:<br />
	Dit project is momenteel in opstart. Er wordt actief samengewerkt met de katholieke kerk rond het mogelijke gebruik van een leegstaande parochietuin. <br />
	Het is nog <strong>te vroeg</strong> om hier concrete stappen in te zetten. Dit wordt <strong>later</strong> verder opgepikt. <br />
	Er is interesse vanuit de stad voor een <strong>samenwerking</strong>. Als eerste concrete stap werd een IL-kookactiviteit ter <strong>kennismaking</strong> toegezegd.<br />
	De aanvraag werd ingediend. We <strong>wachten</strong> momenteel op de <strong>uitkomst</strong> van de bestuursvergadering in april.`,

	`Het evenement kende een mooie opkomst met <strong>90 aanwezigen</strong> uit <strong>verschillende levensbeschouwingen</strong>. Zowel de dialoog als de 
	sprekers verliepen zeer goed. Het evenement kwam tot stand in <strong>samenwerking met Salamhuis, Dendermozaïek, Pax Christi 
	en Avansa</strong>. De stad stelde de zaal ter beschikking. Voor de toekomst is er opnieuw interesse om samen te werken, 
	met de toevoeging van de <strong>Rwandese gemeenschap</strong> als nieuwe partner. Een aandachtspunt hierbij is het <strong>bewaken van de 
	eigenheid van het initiatief</strong> en het <strong>vermijden van instrumentalisering</strong>.`,

	`Op <strong>5 november 2026</strong> organiseert Orbit vzw in Lokeren het evenement <strong>"Samen Oogsten"</strong>. Dit samenkomen brengt mensen uit 
	<strong>verschillende levensbeschouwingen en gemeenschappen</strong> bij elkaar rond het thema van de <strong>oogst</strong>, een universeel symbool van delen,
	<strong>samenwerking en dankbaarheid</strong> dat in vele culturen en tradities weerklank vindt.
	"Samen Oogsten" wil een moment van <strong>echte ontmoeting</strong> zijn, waarbij dialoog en verbinding centraal
	staan. Via <strong>activiteiten</strong>, sprekers en gedeelde ervaringen krijgen deelnemers de kans om <strong>elkaar beter te leren
	kennen</strong> en bruggen te bouwen over de grenzen van achtergrond, cultuur en geloof heen.
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
	"images/Samen-oogsten.png",
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
