// Script comes here

// Toggle Navigation
$(".navigator").click(function() {
    $("nav").toggleClass("open");
    $(".content").toggleClass("open");
    $(this).toggleClass("open");
});

var initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.005604, lng: 28.997002},
      zoom: 12,
      disableDefaultUI: true
    });
}
