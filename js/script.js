// ----- About Data ----- //

var photoSrc = ko.observable(""); //Foursquare pic src holder
var filter = ko.observable(-1); // Default filter value



// ----- Controller ----- //

// listing holds the filtered data
var listing = ko.computed(function(){
    if(filter() == -1){
        return places();
    } else {
        return ko.utils.arrayFilter(places(), function(place){
            return place.category == filter();
        });
    }
});

// When filter applied
var filtering = function(data, event){
    filter(event.target.value);
    initMap();
};

// when a place is selected, show info
var see = function (data, event){
    bounce(markers[event.target.id]);
    openWindow(markers[event.target.id], data);
};

ko.applyBindings(listing());




// ----- View ----- //
var openNav = function(){
    $("nav").toggleClass("open");
    $(".content").toggleClass("open");
    $(".navigator").toggleClass("open");
};

var mapfail = function(){
    $(".content").html("<h1>Ooops! <br/> Google Maps couldn't be loaded.</h1>");
};


// ----- View: Google Maps ----- //
var map;
var icon;
var currentMarker;
var markers = [];
var prevWin, infoWin;

// Initilize map with selected markers
var html = "";
var initMap = function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 41.025604, lng: 28.997002},
        zoom: 13,
        styles: styles,
        disableDefaultUI: true
    });
    markers = [];
    ko.utils.arrayForEach(listing(), function(place){
        addMarkerList(place);
    });
    infoWin = new google.maps.InfoWindow({
        content: html
    });
};

// Add given markers to the map
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
        animation: google.maps.Animation.DROP,
        venue: place.venue,
        position: place.location,
        name: place.name
    };

    var marker = new google.maps.Marker(markerData);

    marker.addListener("click", function() {
        bounce(marker);
        openWindow(marker, markerData);
    });

    markers.push(marker);
};

// Toggle marker bouncing
var bounce = function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
};

// ----- InfoWindow with Ajax: FourSquare ----- //
var openWindow = function(marker, markerData){

    // Stop previous marker bouncing
    if (currentMarker && currentMarker != marker) {
        currentMarker.setAnimation(null);
    }
    currentMarker = marker;

    // Close old InfoWindow when new selected
    if(infoWin) {
        prevWin = infoWin;
    }
    if (prevWin){
        prevWin.close();
    }

    map.panTo(marker.getPosition());

    // Retrieve data from FourSquare and create InfoWindow
    var address = "https://api.foursquare.com/v2/venues/" + markerData.venue +
        "/photos?&client_id=KW4TUJ5L2ZFWAZXD20ZFOEJKD5RTLNXVGALY0S03HVO13LZI" +
        "&client_secret=HA10R3RBCU4ODXIXNUWMAC45EOON4MYGR0C5XDJMKZHX3AIF&v=20180119";

    $.ajax({
        url: address,
        dataType: "json",
        success: function(data){
            var photo = data.response.photos.items[0];
            photoSrc(photo.prefix + "200x200" + photo.suffix);
        }
    }).done(function(){
        html = "<h3>" + markerData.name + "</h3>" +
            "<img src=\"" + photoSrc() + "\">";

        infoWin.setContent(html);
        infoWin.open(map, marker);

        google.maps.event.addListener(infoWin, 'closeclick', function() {
            marker.setAnimation(null);
        });
    }).fail(function(){
        html = "<h3>" + markerData.name + "</h3>" +
            "<p>Sorry, The image couldn't be loaded.</p>";

        infoWin.setContent(html);
        infoWin.open(map, marker);
        google.maps.event.addListener(infoWin, 'closeclick', function() {
            marker.setAnimation(null);
        });
    });
};
