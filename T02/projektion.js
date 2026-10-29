const fs = require("fs"); // ganz oben

const BREITE_SVG = 720;
const HOEHE_SVG = 360;

function lonZuX(lon, breite) {
  return ((lon + 180) / 360) * breite;
}

// 90 - lat, weil y auf dem Bildschirm nach unten wächst.
function latZuY(lat, hoehe) {
  return ((90 - lat) / 180) * hoehe;
}

// Wurzel, damit die Fläche des Kreises zur Einwohnerzahl passt, nicht der Radius.
function einwohnerZuRadius(einwohner) {
  return Math.sqrt(einwohner) / 100;
}
// function einwohnerZuRadius(einwohner) {
//   return einwohner / 300000;
// }

// const orte = [
//   { "name": "Sarajevo",     "lat": 43.86, "lon": 18.41,  "einwohner": 275000 },
//   { "name": "Budapest",     "lat": 47.50, "lon": 19.04,  "einwohner": 1750000 },
//   { "name": "New York",     "lat": 40.71, "lon": -74.01, "einwohner": 8300000 },
//   { "name": "Rom",          "lat": 41.90, "lon": 12.50,  "einwohner": 2800000 },
//   { "name": "Zandvoort",    "lat": 52.37, "lon": 4.53,   "einwohner": 17000 },
//   { "name": "Prag",         "lat": 50.08, "lon": 14.44,  "einwohner": 1300000 },
//   { "name": "Helsinki",     "lat": 60.17, "lon": 24.94,  "einwohner": 680000 },
//   { "name": "Montego Bay",  "lat": 18.47, "lon": -77.92, "einwohner": 110000 },
//   { "name": "Montpellier",  "lat": 43.61, "lon": 3.88,   "einwohner": 300000 },
//   { "name": "Porto",        "lat": 41.15, "lon": -8.61,  "einwohner": 230000 }
// ];

const roh = fs.readFileSync("orte.json", "utf-8");
const orte = JSON.parse(roh);
console.log(roh);
console.log(orte);

for (const ort of orte) {
  const x = lonZuX(ort.lon, BREITE_SVG);
  const y = latZuY(ort.lat, HOEHE_SVG);
  console.log(ort.name, "→ x:", x, "y:", y);
}

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${BREITE_SVG}" height="${HOEHE_SVG}">
  <rect width="${BREITE_SVG}" height="${HOEHE_SVG}" fill="#f4f1ea" stroke="#222"/>`;

for (const ort of orte) {
  const x = lonZuX(ort.lon, BREITE_SVG);
  const y = latZuY(ort.lat, HOEHE_SVG);
  const r = einwohnerZuRadius(ort.einwohner);
  svg += `
  <circle cx="${x}" cy="${y}" r="${r}" fill="#c0392b" fill-opacity="0.5"/>
  <text x="${x + r + 3}" y="${y + 4}" font-family="sans-serif" font-size="11">${ort.name}</text>`;
}

svg += `
</svg>`;

fs.writeFileSync("karte.svg", svg);