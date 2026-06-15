const descriptions = [
	`Op 29/11 hebben we samen met Indus en hun organisaties een solidaire standenmarkt georganiseerd.
	Er waren in totaal 70 bezoekers langsgekomen om de kraampjes te komen zien.
	Onze motivatie is eenvoudig: een evenement creëren waar de gemeenschap samenkomt,
	ongeacht afkomst en cultuur, om een belangrijk sociaal doel te steunen.
	Lokale organisaties die actief zijn in de strijd tegen armoede werden ook uitgenodigd om deel te nemen en/of de markt te bezoeken met hun leden.
	Er werden oplossingen voorzien om eventuele financiële obstakels weg te nemen, want we willen dat iedereen van dit moment kon genieten.
	Het was een warm, solidair en toegankelijk evenement – voor een iets aangenamere maand november.`,
	"Beschrijving van foto 2",
	"Beschrijving van foto 3",
	"Beschrijving van foto 4",
	"Beschrijving van foto 5",
	"Beschrijving van foto 6",
];

const images = [
	"images/solidaire-Standenmarkt.png",
	"images/VBfoto1.jpg",
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
