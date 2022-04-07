
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //"#2e2d2d"
    
    document.getElementById("Navigation-Bar-Container").style.background = "#494C9E";
    /*Make Navigation Bar expand when at home*/
    let navs = document.querySelectorAll(".nav-buttons a");
    let nav =  document.querySelectorAll(".nav-button a");
    let logo =  document.querySelectorAll(".logo a");
    for (let i = 0; i < navs.length; i++) {
      navs[i].style.fontSize = "0.95rem";
    }
    for (let i = 0; i < nav.length; i++) {
      nav[i].style.fontSize = "0.95rem";
    }
    for (let i = 0; i < logo.length; i++) {
      logo[i].style.fontSize = "0.95rem";
    }


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
    */
    


  } else {
    
    document.getElementById("Navigation-Bar-Container").style.background = "none";
    document.getElementById("logo-text").style.color = "white";
    document.getElementById("hamburger").style.color =  "white";
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

    /*Make Navigation Bar shrink when at home*/
    let navs = document.querySelectorAll(".nav-buttons a");
    let nav =  document.querySelectorAll(".nav-button a");
    let logo =  document.querySelectorAll(".logo a");
    for (let i = 0; i < navs.length; i++) {
      navs[i].style.fontSize = "0.9rem";
    }
    for (let i = 0; i < nav.length; i++) {
      nav[i].style.fontSize = "0.9rem";
    }
    
    for (let i = 0; i < logo.length; i++) {
      logo[i].style.fontSize = "0.9rem";
    }
    

  }
}


/*Scroll to section for navigation bar*/

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

/*Open Resume in new tab*/
const ProjectButton = document.getElementById("Go-to-Project");
function Project() {  
  const el = document.getElementById("Projects-Me");
  el.scrollIntoView({behavior:"smooth", block: "start"})
}

function Resume() {
  window.open('/Files/Andrew_Lin_Resume_30-03-2022-20-11-11.pdf', '_blank')
}


/*Go to Contact Section*/
const contactButton = document.getElementById("Go-to-Contact");
function Contact() {
  const el = document.getElementById("Contact-Me");
  el.scrollIntoView({behavior:"smooth", block: "start"})
}

/*Go to About Section*/
const downArrow = document.getElementById("bounce-arrow");
function About() {
  const el = document.getElementById("About-Me");
  el.scrollIntoView({behavior:"smooth", block: "start"})
}



/*Hamburger menu dropdown*/
function DisplayOptions() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
/*Close dropdown on window resize*/
window.onresize = () => {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}


//Scroll bar highlighting
const sections_s = document.querySelectorAll('.top')
const navli = document.querySelectorAll('#NormalNavBar ul .nav-buttons a')
window.addEventListener("scroll", ()=> {
  let current = "";
  sections_s.forEach(section => {
    const sectionTop = section.offsetTop
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
  console.log(`right: ${window.innerHeight + window.scrollY}`)
  console.log("left:" + document.body.offsetHeight)
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


