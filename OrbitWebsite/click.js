const descriptions = [
<<<<<<< HEAD
	`Op 29/11 hebben we samen met Indus en hun organisaties een solidaire standenmarkt georganiseerd.
	Er waren in totaal 70 bezoekers langsgekomen om de kraampjes te komen zien.
	Onze motivatie is eenvoudig: een evenement creëren waar de gemeenschap samenkomt,
	ongeacht afkomst en cultuur, om een belangrijk sociaal doel te steunen.
	Lokale organisaties die actief zijn in de strijd tegen armoede werden ook uitgenodigd om deel te nemen en/of de markt te bezoeken met hun leden.
	Er werden oplossingen voorzien om eventuele financiële obstakels weg te nemen, want we willen dat iedereen van dit moment kon genieten.
	Het was een warm, solidair en toegankelijk evenement – voor een iets aangenamere maand november.`,
	`Interlevensbeschouwelijke Iftar, Brussel 2026
Een intergenerationele iftar brengt jongeren en ouderen van diverse achtergronden samen om de vasten te verbreken, vaak met als doel verbinding,
 dialoog en eenzaamheidsbestrijding. Deze evenementen, zoals georganiseerd door bijvoorbeeld Brussel Ouderenplatform vzw,
  focussen op ontmoeting en het delen van ervaringen rond de ramadan. De maaltijd begon traditioneel met harira (soep) en dadels bij zonsondergang.
   Deze evenement vond plaats op 28 februari 2026.`,

=======
	`Op <strong>29/11</strong> hebben we samen met <strong>Indus</strong> en hun organisaties een <strong>solidaire standenmarkt</strong> georganiseerd.
	Er waren in totaal <strong>70 bezoekers</strong> langsgekomen om de kraampjes te komen zien.
	Onze motivatie is eenvoudig: een <strong>evenement creëren waar de gemeenschap samenkomt</strong>,
	ongeacht afkomst en cultuur, om een belangrijk sociaal <strong>doel te steunen</strong>.
	Lokale organisaties die actief zijn in de <strong>strijd tegen armoede</strong> werden ook uitgenodigd om deel te nemen en/of de markt te bezoeken met hun leden.
	Er werden <strong>oplossingen</strong> voorzien om eventuele <strong>financiële obstakels weg te nemen</strong>, want we willen dat iedereen van dit moment kon genieten.
	Het was een <strong>warm, solidair en toegankelijk evenement</strong> voor een iets aangenamere maand november.`,
	"Beschrijving van foto 2",
>>>>>>> fa627aa9d7f2ff55f9d2ad81c973c4753484f9b2
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
