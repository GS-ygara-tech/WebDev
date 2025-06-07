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