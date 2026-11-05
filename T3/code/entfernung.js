const fs = require("fs");

const roh = fs.readFileSync("orte.json", "utf8");
const orte = JSON.parse(roh);

function zuRad(grad) {
  return grad * Math.PI / 180;
}

function entfernungKm(ortA, ortB) {
  const R = 6371;
  const dLat = zuRad(ortB.lat - ortA.lat);
  const dLon = zuRad(ortB.lon - ortA.lon);
  const h = Math.sin(dLat / 2) ** 2 +
            Math.cos(zuRad(ortA.lat)) * Math.cos(zuRad(ortB.lat)) *
            Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

const a = orte.find(o => o.name === "Rom");
const b = orte.find(o => o.name === "New York");
console.log(entfernungKm(a, b).toFixed(1) + " km");