window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("Navigation-Bar-Container").style.background = "white";
    document.getElementById("Navigation-Bar-Container").style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.1)";
    document.getElementById("logo-text").style.color = "black";
    document.getElementById("home-text").style.color = "black";
    document.getElementById("about-text").style.color = "black";
    document.getElementById("experience-text").style.color = "black";
    document.getElementById("projects-text").style.color = "black";
    document.getElementById("resume-text").style.color = "black";
  } else {
    document.getElementById("Navigation-Bar-Container").style.background = "none";
    document.getElementById("Navigation-Bar-Container").style.boxShadow = "none";
    document.getElementById("logo-text").style.color = "#d1d4d4";
    document.getElementById("home-text").style.color = "white";
    document.getElementById("about-text").style.color = "white";
    document.getElementById("experience-text").style.color = "white";
    document.getElementById("projects-text").style.color = "white";
    document.getElementById("resume-text").style.color = "white";
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
