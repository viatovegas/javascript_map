// JavaScript
const map = L.map('map').setView([33.606911699315376, 130.42369830849225], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const whiteIcon = L.icon({
    iconUrl: 'images/ico.png',
    shadowUrl: 'images/ico_shadow.png',

    iconSize: [40, 40], // size of the icon
    shadowSize: [40, 40], // size of the shadow
    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 40],  // the same for the shadow
    popupAnchor: [0, -42] // point from which the popup should open relative to the iconAnchor
});

L.marker([33.606911699315376, 130.42369830849225], { icon: whiteIcon }).addTo(map).bindPopup('炭化した眼球<br><img src="images/eye.jpeg">');
