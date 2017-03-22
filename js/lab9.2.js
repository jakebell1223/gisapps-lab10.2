document.addEventListener('DOMContentLoaded', function() {
    /*
    your code will go here
    this is the event callback function that is called when the document content has been loaded
    we need our map container to be ready before dropping our map in, for example
    *this is new as js bin takes care of this for you
    */
var map = L.map('map').setView([40.38, -105.5], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/jakebell1223/cizqcxla000172sm771uedzte/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFrZWJlbGwxMjIzIiwiYSI6ImNpeTNkanIxZjAwMDMzM3A1eXNuajRoNzkifQ.e4eW-fO3T0rmsxFPP50jQA',
{
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

function showLatLng(e) {
  document.getElementById("whereIsThis").innerText = e.latlng.lat + " | " + e.latlng.lng;
}
map.on('mousemove', showLatLng);

document.getElementById("goToFRCCBoulder").onclick = function(){
  map.setView([40.1386, -105.12793], 16);
};

document.getElementById("goToRMNP").onclick = function(){
  map.setView([40.4, -105.8], 12);
};

function onMapClick(e) {
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent("<h4>" + e.latlng.lat + " | " + e.latlng.lng + "</h4><center><img src='http://dev.brightrain.com/recreationer/images/icon-map-marker.png'></center>")
    .openOn(map);
}

map.on('click', onMapClick);
    
});

