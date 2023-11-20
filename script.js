// JavaScript
const map = L.map('map').setView([33.606911699315376, 130.42369830849225], 13);


L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);


// L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
//   maxZoom: 18,
//   attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
// }).addTo(map);

// const whiteIcon = L.icon({
//     iconUrl: 'images/ico.png',
//     shadowUrl: 'images/ico_shadow.png',

//     iconSize: [40, 40], // size of the icon
//     shadowSize: [40, 40], // size of the shadow
//     iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
//     shadowAnchor: [20, 40],  // the same for the shadow
//     popupAnchor: [0, -42] // point from which the popup should open relative to the iconAnchor
// });

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
    blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });
  
  
L.marker([33.606911699315376, 130.42369830849225], { icon: whiteIcon }).addTo(map)
  .bindPopup('炭化した眼球<br><img src="images/eye.jpeg">');

L.marker([33.65958150849491, 130.4440143454105], { icon: pinkIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

L.marker([33.6134681295991, 130.4777043495294], { icon: blueIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

const circle = L.circle([33.606911699315376, 130.42369830849225], {
    color: 'red', //円の輪郭線の色
    fillColor: '#f03', //円の塗りつぶしの色
    fillOpacity: 0.1, //塗りつぶしの不透明度
    radius: 4000 //半径、メートルで指定
  }).addTo(map);

  circle.bindPopup("4km圏内");

  // 多角形の表示
const polygon = L.polygon([
    [33.649229567292764, 130.44060269083636],
    [33.6320244050522, 130.42560015800353],
    [33.606911699315376, 130.42369830849225],
    [33.6134681295991, 130.4777043495294],
    [33.63701151064643, 130.44060269083636],
    [33.61720382112516, 130.44060269083636],
    [33.635023141747766, 130.465979321064]
  ], {
    color: 'blue',
    fillColor: '#30f',
    fillOpacity: 0.2
  }).addTo(map);

  // クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは " + e.latlng.toString() + " です")
    .openOn(map);
}

map.on('click', onMapClick);