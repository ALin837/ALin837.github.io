/*
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //"#2e2d2d"
    document.getElementById("Navigation-Bar-Container").style.background = "white";
    document.getElementById("Navigation-Bar-Container").style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.1)";
    
    /*
    document.getElementById("logo-text").style.color = "black";
    document.getElementById("hamburger").style.color = "black"
    let resume = document.getElementsByClassName("ResumeClass");
    for (let i = 0; i < resume.length; i++) {
      let element = resume[i];
      element.style.color="black";
    }
    let collection = document.getElementsByClassName("scroll_to");
    for (let i = 0; i < collection.length; i++) {
      let element = collection[i];
      element.style.color="black";
    }
    
    

  } else {
    document.getElementById("Navigation-Bar-Container").style.background = "white";
    document.getElementById("Navigation-Bar-Container").style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.1)";
    /*
    document.getElementById("logo-text").style.color = "#d1d4d4";
    document.getElementById("hamburger").style.color =  "#d1d4d4";
    let resume = document.getElementsByClassName("ResumeClass");
    for (let i = 0; i < resume.length; i++) {
      let element =resume[i];
      element.style.color="white";
    }
    let collection = document.getElementsByClassName("scroll_to")
    for (let i = 0; i < collection.length; i++) {
      let element = collection[i];
      element.style.color="white";
    }
    
    
  }
}
*/

const sections = document.getElementsByClassName("scroll_to");
for (var i = 0; i < sections.length; i++) {
  let element = sections[i];
  element.addEventListener("click", () => {
      const el = document.getElementById(element.getAttribute("data-link"));
      el.scrollIntoView({behavior:"smooth", block:"start"})
      let x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "none";
      }
  })

}

function DisplayOptions() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.onresize = () => {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}