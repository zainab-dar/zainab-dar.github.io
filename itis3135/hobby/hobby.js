const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = 
    document.body.classList.contains("dark")
      ? "Light Mode ☀️"
      : "Toggle Theme 🌙";
});
const imgs = document.querySelectorAll("img");
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightbox-img");

imgs.forEach(img => {
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => {
    lightImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 200 ? "block" : "none";
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

