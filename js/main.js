window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("Navigation-Bar-Container").style.background = "#5B628F";
  } else {
    document.getElementById("Navigation-Bar-Container").style.background = "none";
  }
}