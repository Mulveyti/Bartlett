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

var bartlettPoints = L.geoJson(bartlettSpatial,{
  onEachFeature: popUp
});

//Cluster of same points at different times
var clusterGroup = L.markerClusterGroup();
clusterGroup.addLayer(bartlettPoints);
map.addLayer(clusterGroup);

function popUp(feature, layer) {
    var out = [];
		if (feature.properties){
		     out.push("<b>The name of location is: </b>" + feature.properties.Location);
		     //out.push("<b>The description of the location is: </b>" + feature.properties.Description);

         out.push("<b>Latitude: </b>" + feature.properties.Latitude);
         out.push("<b>Longitude </b>" + feature.properties.Longitude);

         out.push("<b>Ship: </b>" + feature.properties.Ship);
         out.push("<b>The Captain of the Ship is: </b>" + feature.properties.Captain);

         out.push("<b>Date of entry: </b>" + feature.properties.Date);
         out.push("<b>The description of this location is: </b>" + feature.properties.);
         out.push("<b>The page of this entry is: </b>" + feature.properties.Page);

         // out.push("<b> </b>"" + feature.properties.XYZ);

         out.push("<img src= ' " + feature.properties.Images + " ' border='0' alt='60' width='100%' />"); //Images allowed to be locally referenced from Images folder
		}
		layer.bindPopup(out.join("<br />"));
}
