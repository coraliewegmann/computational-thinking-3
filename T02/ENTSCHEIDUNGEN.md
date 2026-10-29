1. Was tut dein Skript?

Das Skript liest zehn Orte mit Längen- und Breitengrad sowie Einwohnerzahl ein.Mit lonZuX und latZuY rechnet es jeden Ort in eine Pixelposition auf einer 720 × 360 großen Karte um. Daraus erzeugt es eine Datei karte.svg, in der jeder Ort ein Kreis mit Namen ist. Die Größe des Kreises hängt von der Einwohnerzahl ab, je mehr Einwohner, desto größer ist der Kreis.

2. Welche Stelle hättest du auch anders lösen können? Wie?

Man hätte die Einwohneranzahl auch auf einer farblichen Skala angeben können, je dunkler das rot, desto mehr Einwohner hat die Stadt. So könnte man die Überlappungen vermeiden, jedoch ist es so schwieriger ein Gefühl bzw. groben und schnellen Überblick zu bekommen. Außerdem könnte man auch die Karte größer skalieren, so dass die Orte nicht zu sehr aneinander kleben und überlappen und man deutlich die Städte und Einwohnerzahl ablesen kann. 

Statt den Radius mit der Wurzel zu berechnen, hätte ich die Einwohnerzahl einfach durch eine feste Zahl teilen können. Das wäre einfacher gewesen, aber die Größenunterschiede wären extrem. New York wäre sehr groß, Zandvoort mit 17.000 Einwohnern fast unsichtbar. Außerdem würde die Fläche der Kreise nicht mehr zur Einwohnerzahl passen, weil die Fläche mit dem Quadrat des Radius wächst.

3. Warum hast du es so gelöst?

Ich habe die Einwohnerzahl als Feld gewählt, weil sie sich für jeden Ort leicht finden lässt und sich gut in eine Größe übersetzen lässt. Als Darstellung habe ich die Kreisgröße genommen, da man Größenunterschiede schnell mit dem Auge erkennt.

Den Radius habe ich mit der Wurzel berechnet. Ohne Wurzel wäre New York sehr groß und Zandvoort mit 17.000 Einwohnern kaum sichtbar gewesen. Außerdem vergleicht man bei Kreisen die Fläche, und die wächst mit dem Quadrat des Radius. Mit der Wurzel ist die Fläche proportional zur Einwohnerzahl, das Bild ist dadurch ehrlicher. Die Kreise sind halbtransparent, damit man überlappende Orte in Europa noch erkennt.

4. Was fiel dir schwer bei der Aufgabe?

Es ist schwer eine gute Darstellung zu finden, wenn man viele Orte hat, die sehr nah beeinander liegen, wenn die Kartengröße konstant bleibt. 

5. Was ist dir unklar geblieben?

Wie kann man die Größe der Kreise besser berechnen/ bestimmen? 
