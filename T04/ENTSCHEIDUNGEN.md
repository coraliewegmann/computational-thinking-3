1. Wie funktionieren Ausschnitt und Zoom?

Ausschnitt: Mit AUSSCHNITT = { west, ost, nord, sued } lege ich fest, welcher Teil der Welt gezeigt wird. Statt von −180° bis 180° rechne ich nur noch zwischen West- und Ostrand um: (lon - west) / (ost - west) * breite. Genauso bei y mit Nord und Süd. Dadurch füllt Europa die ganze Karte aus, und die Orte liegen nicht mehr übereinander. Orte außerhalb werden mit imAusschnitt herausgefiltert. Die Höhe berechne ich aus dem Seitenverhältnis des Ausschnitts, damit nichts verzerrt wird.

Zoom: Erst berechne ich, wo Rom (ZOOMPUNKT) auf der Karte liegt. Dann nehme ich für jeden Ort den Abstand zu Rom und multipliziere ihn mit dem Zoomwert: mitte + (wert - mitte) * zoom. Rom hat den Abstand 0 und bleibt deshalb immer an derselben Stelle, alle anderen Orte rücken weg. Die Kreise behalten ihre Größe.

2. Welche Stolpersteine gab es bei der Umsetzung?

Da die Höhe jetzt nicht mehr fest durch breite/2 definiert wird, wurde jetzt beim Ausschnitt die Karte verzerrt. breite/2 passt nur für die ganze Weltkarte. 


3. Was ist dir unklar geblieben?

Soll Rom und der Kreis, der die Einwohnerzahl darstellt, auch größer werden? 
Wie kann man den Zoom in der Karte einstellen, ohne ihn immer im Code ändern zu müssen?
Was passiert mit den anderen Städten, die nicht im Kartenausschnitt zu sehen sind? 