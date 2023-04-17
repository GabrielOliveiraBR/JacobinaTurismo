
//ZOOM
var map = L.map('map').setView([-11.181604, -40.511807], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//ICONE
var myIcon = L.icon({
    iconUrl: 'img/my-icon.png',
    iconSize: [20, 30]
});

