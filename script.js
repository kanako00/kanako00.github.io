const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");
const year = document.querySelector("[data-current-year]");
const profilePhoto = document.querySelector("[data-profile-photo]");
const photoPlaceholder = document.querySelector("[data-photo-placeholder]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (profilePhoto && photoPlaceholder) {
  const showPlaceholder = () => {
    profilePhoto.hidden = true;
    photoPlaceholder.hidden = false;
  };

  photoPlaceholder.hidden = true;
  profilePhoto.addEventListener("error", showPlaceholder);

  if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {
    showPlaceholder();
  }
}

const closeMenu = () => {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
};

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) closeMenu();
});
