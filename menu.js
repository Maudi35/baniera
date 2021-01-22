let menu_nav = document.getElementById('menu_nav');
menu_nav.addEventListener('click', menuburger);

function menuburger() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



