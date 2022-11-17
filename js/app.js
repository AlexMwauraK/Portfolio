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
