function lonToX(lon, breite) {
  const x = ((lon + 180) / 360) * breite;
  return x;
}

const x = lonToX(-180, 720);
console.log(x);

function latToY(lat, hoehe) {
  const y = ((90 - lat) / 180) * hoehe;
  return y;
}

const y = latToY(90, 360);
console.log(y);

function lonToX(lon, breite) {
  const x = ((lon + 180) / 360) * breite;
  return x;
}

function latToY(lat, hoehe) {
  const y = ((90 - lat) / 180) * hoehe;
  return y;
}

function mittelpunktZwischenOrten(orte) {
  let summeX = 0;
  let summeY = 0;

  for (const ort of orte) {
    summeX = summeX + lonToX(ort.lon, 720);
    summeY = summeY + latToY(ort.lat, 360);
  }

  const mitteX = summeX / orte.length;
  const mitteY = summeY / orte.length;

  return { x: mitteX, y: mitteY };
}

const orte = [
  { lon: 0,  lat: 0 },    // Ort A
  { lon: 90, lat: 90 }    // Ort B
];

console.log(mittelpunktZwischenOrten(orte));