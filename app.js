const load = () => {
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector(".header");
  const servicios = document.querySelector(".servicios");
  const menuModal = document.querySelector(".menu-modal");
  const overlay = document.querySelector("#bodyOverlay");
  const overlayActive = document.querySelector(".activeOverlay");
  const cerrarModal = document.querySelectorAll(".cerrarModal");
  const btnBurger = document.querySelector('.btn-burger');


  // Sticky NavBar
  window.addEventListener('scroll', function(){
      navbar.classList.toggle('sticky', window.scrollY > 400);
  });

  // Burger NavBar
  btnBurger.addEventListener('click', () => {
      btnBurger.classList.toggle('opened');
      // Menu Modal
      menuModal.classList.toggle('activeModal');
      overlay.classList.toggle('activeOverlay');

  });
  // Cerrar Modal Burger
  cerrarModal.forEach(modal => {
      modal.addEventListener('click', () => {
          btnBurger.classList.remove('opened');
          menuModal.classList.remove('activeModal');
          overlay.classList.remove('activeOverlay');
          return
      });
  })
  var glideMulti = new Glide('.slider', {
    type: 'slider',
    autoplay: 2000,
    focusAt: 'center',
    perView: 1,
    gap: 0
  });
  glideMulti.mount();

  new Accordion('.accordion-container');

}
