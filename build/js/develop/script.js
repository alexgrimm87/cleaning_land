//Begin Map
  var map;
  function initMap() {
    if ($('.contacts').length ) {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 55.736961, lng: 37.848447},
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 18,
        //отключить скорлл
        scrollwheel: false,
        disableDefaultUI: true
      });

      var marker = new google.maps.Marker({
        position: {lat: 55.736864, lng: 37.846506},
        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map
      });
    }
  }
//End Map


$(document).ready(function(){
  
  AOS.init({
    disable: 'mobile'
  });
  
  initMap();

  $('.projects-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  
});

$(window).load(function(){

});

$(window).resize(function(){

});