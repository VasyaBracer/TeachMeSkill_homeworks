var mymap = L.map('map').setView([53.924, 27.509], 15);
  
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZ2xlYmFucyIsImEiOiJjanhxYmJwOGswN243M29yM20xMTIxZXA4In0.1DRDmSQV_H1sEDX3FJAK1w'
}).addTo(mymap);

var marker = L.marker([53.924, 27.509]).addTo(mymap);

marker.bindPopup("53.924, 27.509").openPopup();
