const load = () => {
  var glideMulti = new Glide('.slider', {
    type: 'slider',
    autoplay: 3000,
    focusAt: 'center',
    perView: 1,
    gap: 0
  });
  glideMulti.mount();


  var coord = { lat: -34.5956145, lng: -58.4431949 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });



}