const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li')
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
    });
    navlinks.forEach((link, index) => {
      link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2}s';
    //   console.log(index / 5 + 0.2);
    });
}
navSlide();
