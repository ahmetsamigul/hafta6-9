console.log(window.location.pathname);
const activeMenuItem = document.getElementById(window.location.pathname.replace("/","").split(".")[0]);
activeMenuItem.style.color = "gold";