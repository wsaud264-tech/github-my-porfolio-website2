// MOBILE MENU
let menuBtn = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav-links");

menuBtn.onclick = ()=>{
  navLinks.classList.toggle("show");
};

// SCROLL ANIMATION
let reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", ()=>{
  reveals.forEach((el)=>{
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
});

// TYPING EFFECT
let text = "Frontend Developer | HTML CSS JavaScript";
let i = 0;

function typing(){
  if(i < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

typing();
