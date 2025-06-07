const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});
mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    if (
        mobileMenu.classList.contains("active") &&
        !mobileMenu.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
    ) {
        mobileMenu.classList.remove("active");
    }
});

document.querySelectorAll(".color-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        document.documentElement.style.setProperty("--primary-color", this.dataset.color);
    });
});

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