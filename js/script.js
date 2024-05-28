$(document).ready(function () {
// Initialise the map and set its view to specific location and zoom level
var map = L.map('map').setView([-37.803238838395714, 144.96458127072503], 16.5);

// Tile layer to the map (OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marker for the office location
var marker = L.marker([-37.803238838395714, 144.96458127072503]).addTo(map)
.bindPopup('<b>Head Office</b><br>43/135 Cardigan St, Carlton')
.openPopup();
});