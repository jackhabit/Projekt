window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.getElementById("myLinks").style.display = "block";
  } else {
    document.getElementById("myLinks").style.display = "none";
  }
});
function toggleMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function randomLink() {
  const links = [
    "Emuwar.html",
    "dancingplague.html",
    "strawriot.html",
    "deadpope.html",
    "fathertragedy.html",
    "beerflood.html",
  ];
  const randomIndex = Math.floor(Math.random() * links.length);
  window.location.href = links[randomIndex];
}
