const descriptions = [
	"Beschrijving van foto 1",
	"Beschrijving van foto 2",
	"Beschrijving van foto 3",
	"Beschrijving van foto 4",
	"Beschrijving van foto 5",
	"Beschrijving van foto 6",
];

let display = document.querySelector("#description-display");
let spans = document.querySelectorAll(".gallery span");

spans.forEach(function (span) {
	span.addEventListener("click", function () {
		let index = span.dataset.index;
		display.innerText = descriptions[index];
	});
});
