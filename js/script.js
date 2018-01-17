// Script comes here

// Toggle Navigation
$(".openNav").click(function() {
    $("body").toggleClass("navOpen");
    $("nav").toggleClass("open");
    $(".wrapper").toggleClass("open");
    $(this).toggleClass("open");
});

var initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.653226, lng: -79.383184},
      zoom: 13
    });
}
