const menuButton = document.querySelector(".menu");

menuButton?.addEventListener("click", function () {
  const navigation = document.querySelector(".links");
  const isOpen = navigation.classList.toggle("open");

  this.setAttribute("aria-expanded", String(isOpen));
  this.textContent = isOpen ? "✕" : "☰";
});
