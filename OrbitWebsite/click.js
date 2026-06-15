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

	"Beschrijving van foto 3",
	"Beschrijving van foto 4",
	"Beschrijving van foto 5",
	"Beschrijving van foto 6",
];

const images = [
	"images/solidaire-Standenmarkt.png",
	"images/interlevensbeschouwelijke-Iftar.png",
	"images/VBfoto3.jpg",
	"images/VBfoto5.jpg",
	"images/VBfoto4.png",
	"images/VBfoto6.jpg",
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
