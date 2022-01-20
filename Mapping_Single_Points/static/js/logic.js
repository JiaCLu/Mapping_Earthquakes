// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid', {
    center: [40.7, -94.5], zoom: 4});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoiYm9ib2NvbWZ5IiwiYSI6ImNreWtjcDFmeDJ2Nmsyb3FrbHA5NXY1MHAifQ.5j2-YpSh-LSOumlOGXtCAg'
});
// Then we add our 'graymap' tile layer to the map.    
streets.addTo(map);