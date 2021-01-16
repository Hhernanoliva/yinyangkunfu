const load = () => {
  var glideMulti = new Glide('.slider', {
    type: 'slider',
    autoplay: 2000,
    focusAt: 'center',
    perView: 1,
    gap: 0
  });
  glideMulti.mount();
}
