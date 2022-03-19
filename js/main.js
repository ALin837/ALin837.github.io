window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("Navigation-Bar-Container").style.background = "#545b87";
  } else {
    document.getElementById("Navigation-Bar-Container").style.background = "none";
  }
}


const sections = document.getElementsByClassName("scroll_to");
console.log(sections)
for (var i = 0; i < sections.length; i++) {
  let element = sections[i];
  element.addEventListener("click", () => {
      const el = document.getElementById(element.getAttribute("data-link"));
      el.scrollIntoView({behavior:"smooth", block:"start"})
  })
}
