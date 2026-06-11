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

// Mobile dropdown open (without immediately following link)
document.querySelectorAll(".dropbtn").forEach((btn) => {
	btn.addEventListener("click", function (e) {
		if (window.innerWidth <= 768) {
			const dropdownContent = this.nextElementSibling;

			if (!dropdownContent.classList.contains("open")) {
				e.preventDefault(); // first tap: open dropdown, don't navigate
				// EDIT
				document.querySelectorAll(".dropdown-content.open").forEach((d) => {
					d.classList.remove("open");
				});
				//EDIT
				dropdownContent.classList.add("open");
			}
		}
	});
});

// close dropdown when clicking outside
document.addEventListener("click", function (e) {
	if (!e.target.closest(".dropdown")) {
		document.querySelectorAll(".dropdown-content.open").forEach((d) => {
			d.classList.remove("open");
		});
	}
});
