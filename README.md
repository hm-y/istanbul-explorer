# istanbul-explorer

## :key: Overview

  Istanbul Explorer is a single page application featuring a map of the outstanding places of Istanbul. It features the location pins of the places on the map and their pictures retrieved from a 3rd party resource.

## :zap: Project

:star2: The places of the base list is shown on the listview on the left menu and marked on the map.  
The navigation menu can be shown or hidden.  
  
<img src="/img/ss1.png" width="400"> <img src="/img/ss3.png" width="400">  
  
:star2: Depending on the screen size, the navigation has the filtering buttons on the top right or filtering dropdown menu left menu. The places can be filtered by clicking the buttons on wide screens or using the dropdown menu on narrow screens.  
  
<img src="/img/ss5.png" height="300">  
  
:star2: An infowindow inclucing the picture(retrieved from Foursquare) of the place is opened when it's selected from the list or clicked on the map.  
  
<img src="/img/ss2.png" width="250">  <img src="/img/ss4.png" width="400">  
  
## :earth_americas: How to run  
  
:heavy_check_mark: Fork or download the project  
:heavy_check_mark: Replace the Google Maps Api key with your own in the `index.html`  
:heavy_check_mark: Replace the Foursquare `client_id` and `client_secret` with your own ones in the `js/script.js`  
:heavy_check_mark: All data of the places, categories and the map can be modified in `js/script.js`  
:heavy_check_mark: Run `index.html` :blush:  
  
## :hammer: Built with  
  
:pushpin: HTML/CSS/JavaScript  
:pushpin: jQuery  
:pushpin: AJAX  
:pushpin: KnockoutJS  
:pushpin: Google Maps API  
:pushpin: Foursquare API  

## :trophy: Acknowledgements  
  
:gem: The navigation menu is modified from [Material Design by MIT](https://www.jqueryscript.net/menu/Material-Design-Inspired-Reveal-Navigation-with-jQuery-CSS3.html)  
:gem: Google Maps style is modified from [Julyinfo](https://snazzymaps.com/style/128056/%E5%82%91%E7%AB%8B%E8%B3%87%E8%A8%8A-julyinfo)  
:gem: Map markers are designed on [FlatIcon](https://www.flaticon.com/)  

