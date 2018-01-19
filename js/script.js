// ----- Data ----- //

// Category indexes: 0 - Historical 1- Museum 2- Shopping  3- Others
var places = ko.observableArray([
    {id:0, name: "Gülhane Park", location: {lat: 41.015268, lng: 28.981133}, category: 3},
    {id:1, name: "The Blue Mosque", location: {lat: 41.006203, lng: 28.976771}, category: 0},
    {id:2, name: "Dolmabahçe Palace", location: {lat: 41.040378, lng: 29.000459}, category: 0},
    {id:3, name: "Grand Bazaar", location: {lat: 41.011672, lng: 28.968154}, category: 2},
    {id:4, name: "Basilica Cistern", location: {lat: 41.009404, lng: 28.977792}, category: 0},
    {id:5, name: "Museum of Modern Art", location: {lat: 41.035135, lng: 28.983823}, category: 1},
    {id:6, name: "Topkapi Palace Museum", location: {lat: 41.012410, lng: 28.983422}, category: 1},
    {id:7, name: "Maiden's Tower", location: {lat: 41.022044, lng: 29.004239}, category: 3},
    {id:8, name: "Miniatürk", location: {lat: 41.067660, lng: 28.948880}, category: 1}
]);

var categories = ["Historical", "Museum", "Shopping", "Others"];


// ----- Controller ----- //
var filter = ko.observable(-1);
var listing = ko.computed(function(){
    if(filter() == -1)
        return places();

    else{
        return ko.utils.arrayFilter(places(), function(place){
            return place.category == filter();
        });
    }
});

$('.filter').change(function() {
    filter(this.value);
    map = new initMap();
});

var see = function (data, event){
    openWindow(markers[event.target.id], data);
};

$('button').click(function() {
    filter(this.value);
    map = new initMap();
});

ko.applyBindings(listing());

// ----- View ----- //

// Toggle Navigation
$(".navigator").click(function() {
    $("nav").toggleClass("open");
    $(".content").toggleClass("open");
    $(this).toggleClass("open");
});


// ----- View: Google Maps ----- //
var map;
var icon;
var markers = [];
var prevWin, infoWin;
var styles = [
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#004060"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#00557f"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#d3eaf6"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#006699"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#bfe3f5"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a1e0e8"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#9bd0ea"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#abeab2"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#9bd0ea"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffb884"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#f38e43"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f38e43"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ea6400"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dff4ff"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#006699"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#9bd0ea"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#006699"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
];

var initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.025604, lng: 28.997002},
        zoom: 13,
        styles: styles,
        disableDefaultUI: true
    });
    markers = [];
    ko.utils.arrayForEach(listing(), function(place){
        addMarkerList(place);
    });
};

var addMarkerList = function(place){
    switch (place.category) {
        case 0:
            icon = "img/mhist.png";
            break;
        case 1:
            icon = "img/mmus.png";
            break;
        case 2:
            icon = "img/mshop.png";
            break;
        case 3:
            icon = "img/moth.png";
            break;
    }
    var markerData = {
        map: map,
        icon: icon,
        position: place.location,
        name: place.name
    };
    var marker = new google.maps.Marker(markerData);

    marker.addListener("click", function() {
        openWindow(marker, markerData);
    });

    markers.push(marker);
};

var openWindow = function(marker, markerData){
    if(infoWin)
        prevWin = infoWin;
    infoWin = new google.maps.InfoWindow({
        content: markerData.name
    });
    if (prevWin)
        prevWin.close();
    infoWin.open(map, marker);
};
