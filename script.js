// JavaScript
var map = L.map('map').setView([33.6679841572087,130.4407160549846],15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



//アイコン
const pink = L.icon({
    iconUrl: 'images/ico_pink.png',
    shadowUrl: 'images/ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });
  
  L.marker([33.67345752177457, 130.44140661378802], { icon: pink }).addTo(map).bindPopup('Have a good day！').openPopup();