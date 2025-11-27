// 1. Back-to-top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 2. Leadership toggle section
const toggleBtn = document.getElementById("toggleLeadership");
const list = document.getElementById("leadershipList");

toggleBtn.addEventListener("click", () => {
  if (list.style.display === "none") {
    list.style.display = "block";
    toggleBtn.textContent = "Hide Leadership";
  } else {
    list.style.display = "none";
    toggleBtn.textContent = "Show Leadership";
  }
});

// 3. Image hover caption
const missionImg = document.getElementById("missionImg");
const caption = document.getElementById("imgCaption");

missionImg.addEventListener("mouseenter", () => {
  caption.style.display = "block";
  caption.style.opacity = "1";
});

missionImg.addEventListener("mouseleave", () => {
  caption.style.opacity = "0";
  setTimeout(() => caption.style.display = "none", 300);
});
