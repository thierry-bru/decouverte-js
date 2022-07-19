let largeur = prompt('Quelle est la largeur du rectangle?');
let longueur = prompt('Quelle est la longueur du rectangle?');
let surface = parseInt(longueur)*parseInt(largeur);
alert('la surface du rectangle est de '+surface);

let rayon = prompt('Quel est le rayon du cercle ?')
let surfaceCercle = Math.PI*(parseInt(rayon)**2);

alert('la surface du rectangle est de '+surfaceCercle.toFixed(2));
