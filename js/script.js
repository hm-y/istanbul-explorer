// Data Model
var data = {
    // Category: 1 - Historical 2- Museum 3- shopping  4-others
    places: ko.observableArray([
        {id:"0", name: "Gülhane Park", location: {lat: 41.015268, lng: 28.981133}, category: 4},
        {id:"1", name: "The Blue Mosque", location: {lat: 41.006203, lng: 28.976771}, category: 1},
        {id:"2", name: "Dolmabahçe Palace", location: {lat: 41.040378, lng: 29.000459}, category: 1},
        {id:"3", name: "Grand Bazaar", location: {lat: 41.011672, lng: 28.968154}, category: 3},
        {id:"4", name: "Basilica Cistern", location: {lat: 41.009404, lng: 28.977792}, category: 1},
        {id:"5", name: "Museum of Modern Art", location: {lat: 41.035135, lng: 28.983823}, category: 2},
        {id:"6", name: "Topkapi Palace Museum", location: {lat: 41.012410, lng: 28.983422}, category: 2},
        {id:"7", name: "Maiden's Tower", location: {lat: 41.022044, lng: 29.004239}, category: 4},
        {id:"8", name: "Miniatürk", location: {lat: 41.067660, lng: 28.948880}, category: 2}
    ]),

    newID: 9
};

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
