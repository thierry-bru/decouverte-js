let largeur = prompt('Largeur du rectangle?');
let longueur = prompt('Longueur du rectangle?');

let rectangle = new Rectangle(longueur,largeur);

alert(`la surface du rectangle de longueur ${longueur}  et de largeur ${largeur} est de ${rectangle.calculerSurface()}`)
alert(`le périmètre du rectangle de longueur ${longueur}  et de largeur ${largeur} est de ${rectangle.calculerPerimetre()}`)
