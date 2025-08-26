const slides = [
	{ image: "slide1.jpg", tagLine: "Impressions tous formats <span>en boutique et en ligne</span>" },
	{ image: "slide2.jpg", tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
	{ image: "slide3.jpg", tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>" },
	{ image: "slide4.png", tagLine: "Autocollants <span>avec découpe laser sur mesure</span>" }
];

const banner = document.getElementById("banner");
const prev = banner.querySelector(".arrow_left");
const next = banner.querySelector(".arrow_right");
const img = banner.querySelector(".banner-img");
const txt = banner.querySelector("#banner > p");
const dots = banner.querySelector(".dots");

const BASE = "./assets/images/slideshow/";
let i = 0;

function render() {
	const s = slides[i];
	img.src = BASE + s.image;
	txt.innerHTML = s.tagLine;
	[...dots.children].forEach((d, k) => d.classList.toggle("dot_selected", k === i));
}

function buildDots() {
	dots.innerHTML = slides.map(() => `<div class="dot"></div>`).join("");
	dots.addEventListener("click", (e) => {
		const d = e.target.closest(".dot");
		if (!d) return;
		i = [...dots.children].indexOf(d);
		render();
	});
}

prev.addEventListener("click", () => { i = (i - 1 + slides.length) % slides.length; render(); });
next.addEventListener("click", () => { i = (i + 1) % slides.length; render(); });

buildDots();
render();
