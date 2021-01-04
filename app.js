const load = () => {
  var glideMulti = new Glide('.slider', {
    type: 'slider',
    autoplay: 3000,
    focusAt: 'center',
    perView: 1,
    gap: 0
  });
  glideMulti.mount();

  var glideClases = new Glide('.slider-clases', {
    type: 'slider',
    autoplay: 3000,
    focusAt: 'center',
    perView: 1,
    gap: 0
  });
  glideClases.mount();

}
