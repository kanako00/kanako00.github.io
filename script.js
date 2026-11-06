const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");
const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const year = document.querySelector("[data-current-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const closeMenu = () => {
  if (!menuButton || !navigation) return;

  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) closeMenu();
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) return;

    navLinks.forEach((link) => {
      const target = link.getAttribute("href")?.slice(1);
      link.classList.toggle("is-active", target === visibleEntry.target.id);
    });
  },
  {
    rootMargin: "-20% 0px -65%",
    threshold: [0, 0.1, 0.5],
  },
);

sections.forEach((section) => sectionObserver.observe(section));
