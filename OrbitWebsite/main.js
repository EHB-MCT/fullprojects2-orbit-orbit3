//laat deze lijn staan pls
"use strict";

let scrollContainer = document.querySelector(".gallery div");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// scrollContainer.addEventListener("wheel", (evt) => {
// 	evt.preventDefault();
// 	scrollContainer.scrollLeft += evt.deltaY;
// });

nextBtn.addEventListener("click", () => {
	scrollContainer.scrollLeft += scrollContainer.offsetWidth;
});

backBtn.addEventListener("click", () => {
	scrollContainer.scrollLeft -= scrollContainer.offsetWidth;
});

//BURGERMENU
let burgerButton = document.querySelector(".burger-menu");

burgerButton.addEventListener("click", toggleBurger);

function toggleBurger() {
	if (!document.body.hasAttribute("burger-active-menu")) {
		document.body.setAttribute("burger-active-menu", true);
	} else {
		document.body.removeAttribute("burger-active-menu");
	}
}
