var mapOptions = {
 center: [42.336004, -71.169212], //set center Lat/Long of your area of interest
 zoom: 16, //set initial zoom level
 maxZoom : 24,  //set max zoom level
 tap : false //fix popup bug on Safari
 }

//Creates map object according to map options
var map = new L.map('map', mapOptions);

//Example of an externally called basemap
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'});

Esri_WorldImagery.addTo(map);

var test= L.geoJson(Bartlett_Project).addTo(map);
