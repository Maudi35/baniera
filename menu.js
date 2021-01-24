let menu_nav = document.getElementById('menu_nav');
menu_nav.addEventListener('click', menuburger);

function menuburger() {
  let doc = document.getElementById("myLinks");
  if (doc.style.display === "block") {
    doc.style.display = "none";
  } else {
    doc.style.display = "block";
  }
}



