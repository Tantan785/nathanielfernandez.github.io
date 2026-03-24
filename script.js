const reveals = document.querySelectorAll(".reveal");
const skillFills = document.querySelectorAll(".skill-fill");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach((item) => revealObserver.observe(item));

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll(".skill-fill");
        fills.forEach((fill) => {
          fill.style.width = fill.getAttribute("data-width");
        });
      }
    });
  },
  {
    threshold: 0.25,
  }
);

document.querySelectorAll("#skills .card").forEach((card) => {
  skillObserver.observe(card);
});
