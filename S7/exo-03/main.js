/*
let rayon = prompt('Rayon du cercle?');
if (isNaN(rayon))
{
    alert("Le rayon saisi n'est pas un nombre");
}
else
{
    let cercle = new Cercle(rayon);
    alert(`le cercle de rayon ${cercle.rayon} a comme surface ${cercle.calculerSurface()}cm2 et comme perimetre ${cercle.calculerPerimetre()}cm`);
}*/
let rayon;
do 
{
    rayon = prompt('Rayon du cercle?');
    if (isNaN(rayon))
        {
            alert("Le rayon saisi n'est pas un nombre");
        }
}
while(isNaN(rayon));
let cercle = new Cercle(rayon);
alert(`le cercle de rayon ${cercle.rayon} a comme surface ${cercle.calculerSurface()}cm2 et comme perimetre ${cercle.calculerPerimetre()}cm`);