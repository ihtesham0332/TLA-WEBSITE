const menuIcon = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});

function toggleText(event) {
  event.preventDefault();
  const serviceDiv = event.target.closest(".Services");
  const paragraph = serviceDiv.querySelector(".description");
  const link = event.target;

  if (paragraph.style.maxHeight) {
    paragraph.style.maxHeight = null;
    link.textContent = "Read More";
  } else {
    paragraph.style.maxHeight = paragraph.scrollHeight + "px";
    link.textContent = "Read Less";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
