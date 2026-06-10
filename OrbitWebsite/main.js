let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// scrollContainer.addEventListener("wheel", (evt) => {
// 	evt.preventDefault();
// 	scrollContainer.scrollLeft += evt.deltaY;
// });

nextBtn.addEventListener("click", () => {
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft += 1250;
});

backBtn.addEventListener("click", () => {
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft -= 1250;
});
