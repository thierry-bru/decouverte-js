let largeur = prompt('Quelle est la largeur du rectangle?');
let longueur = prompt('Quelle est la longueur du rectangle?');
let surface = parseInt(longueur)*parseInt(largeur);
alert('la surface du rectangle est de '+surface);

let rayon = prompt('Quel est le rayon du cercle ?')
let surfaceCercle = Math.PI*(parseInt(rayon)**2);
let rayonCercle = 50;
let message = "le cercle est de rayon " + rayonCercle;
// message contient "le cercle est de rayon 50"

let age = "44";
age +=1;
// attention que age contient "441";
let ageEnNombre = parseInt(age);
ageEnNombre +=1
//ageEnNombre contientdra bien 45

let resultat = rayonCercle + 10;
// resultat vaut 50+10 soit 60
resultat = rayonCercle - 5;
// resultat vaut 50-5 soit 45
resultat = rayonCercle * 2;
// resultat vaut 50*2 soit 100
resultat = rayonCercle / 10;
// resultat vaut 50/10 soit 5

alert('la surface du rectangle est de '+surfaceCercle.toFixed(2));


