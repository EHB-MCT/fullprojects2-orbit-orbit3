const descriptions = [
	"Uilen (Strigiformes) zijn een orde van nactroofvogels die voornamelijk s'avonds en 's nachts actief zijn.  Ze hebben een uniek uiterlijk met een rond, afgeplat gezicht en grote, naar voren gerichte ogen die vast in de schedel staan; hierdoor kunnen ze niet knipperen of hun ogen bewegen, maar draaien ze hun kop wel tot 270° rond. ",
];

console.log("hello world!");

let display = document.querySelector("#description-display");
let button = document.querySelector("#img-btn");

button.addEventListener("click", function () {
	console.log("geklikt");

	display.innerText = descriptions;
});
