document.querySelector(".burger-menu").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("hidden");
});

function toggleMenu() {
  let navList = document.getElementById("nav-list");
  navList.classList.toggle("hidden");
}
