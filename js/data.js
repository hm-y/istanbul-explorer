// ----- Data ----- //

// Category indexes: 0 - Historical 1- Museum 2- Shopping  3- Others
var places = ko.observableArray([
    {id:0, name: "Gülhane Park", location: {lat: 41.015268, lng: 28.981133},
        venue: "4bf13f1921072d7f4cb9208b" , category: 3},
    {id:1, name: "Rumeli Hisar Museum", location: {lat: 41.085728, lng: 29.056912},
        venue: "4eb5352b9a52ad1e3ed3ec34" ,  category: 0},
    {id:2, name: "Dolmabahçe Palace", location: {lat: 41.040378, lng: 29.000459},
        venue: "4c3220f8ac0ab713a5671c1e" ,  category: 0},
    {id:3, name: "Grand Bazaar", location: {lat: 41.011672, lng: 28.968154},
        venue: "4c09fd76009a0f476ac2e8bf" ,  category: 2},
    {id:4, name: "Basilica Cistern", location: {lat: 41.009404, lng: 28.977792},
        venue: "4b72a221f964a52055812de3" ,  category: 0},
    {id:5, name: "Museum of Modern Art", location: {lat: 41.035135, lng: 28.983823},
        venue: "4cda9d2b6ad1a093eb1ae756" ,  category: 1},
    {id:6, name: "Topkapi Palace Museum", location: {lat: 41.012410, lng: 28.983422},
        venue: "4b824a4bf964a5202dcf30e3" ,  category: 1},
    {id:7, name: "Maiden's Tower", location: {lat: 41.022044, lng: 29.004239},
        venue: "4bc599f96a3e9c74d407f648" ,  category: 3},
    {id:8, name: "Big Çamlıca Hill", location: {lat: 41.030155, lng: 29.068368},
        venue: "4ce0dd7adb1254818cf33ece" ,  category: 3}
]);

// Maps style
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
