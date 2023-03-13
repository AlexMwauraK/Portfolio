//Menu Burger homepage
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navlinks');
  const navlinks = document.querySelectorAll('.navlinks li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      }else{
        link.style.animation = `navlinkFade 0.5s ease forward ${index / 7 + 4 }s`;
      } 
    });
    burger.classList.toggle('toggles');
  });
}
navSlide();
//Auto type
var typed = new Typed('.element', {
    strings: ["Front-End Developer", "Photographer", "ui/ux Designer"],
    typeSpeed: 50,
    backSpeed: 70,
    loop: true
  });

  //Auto scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      } else{
        entry.target.classList.remove('show');
      }
    }); 
  });

  const animateElements = document.querySelectorAll('.animate');
  const skillboxElements = document.querySelectorAll('.skillbox');
  animateElements.forEach((el) => observer.observe(el));
  skillboxElements.forEach((el) => observer.observe(el));
  