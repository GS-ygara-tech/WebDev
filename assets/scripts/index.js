const slides = document.querySelectorAll("#problema-slideshow .slide");
const prevBtn = document.querySelector("#problema-slideshow .prev");
const nextBtn = document.querySelector("#problema-slideshow .next");
let slideIndex = 0;

function showSlide(n) {
    slides.forEach((img, i) => {
        img.style.display = (i === n) ? "block" : "none";
    });
}

prevBtn.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
});

nextBtn.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
});

setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}, 5000);

showSlide(slideIndex);