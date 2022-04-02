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
const ResumeButton = document.getElementById("Go-to-Resume");
function Resume() {
  window.open('/Files/Andrew_Lin_Resume_30-03-2022-20-11-11.pdf', '_blank')
}

const contactButton = document.getElementById("Go-to-Contact");
function Contact() {
  const el = document.getElementById("Contact-Me");
  el.scrollIntoView({behavior:"smooth", block: "start"})
}
const downArrow = document.getElementById("bounce-arrow");
function About() {
  const el = document.getElementById("About-Me");
  el.scrollIntoView({behavior:"smooth", block: "start"})
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


/*Scroll bar highlighting*/
const sections_s = document.querySelectorAll('section')
const navli = document.querySelectorAll('#NormalNavBar ul .nav-buttons a')


window.addEventListener("scroll", ()=> {
  let current = "";
  sections_s.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  })
  navli.forEach( li => {
    li.classList.remove('active')
    if (li.dataset['link'] == current) {
      li.classList.add('active')
    }
  })
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    const contact = document.getElementById("Contact-text-normal")
    const project = document.getElementById("projects-text-normal")
    project.classList.remove('active')
    contact.classList.add('active')
  }
  if (window.scrollY === 0)  {
    const home = document.getElementById("home-text-normal")
    home.classList.add('active')
  }
})