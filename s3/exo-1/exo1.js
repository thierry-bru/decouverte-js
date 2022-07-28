let tableau=[5,1,8,12];
let tableauNotes=[14,12,18,12];
console.log(sommeTableau(tableau));
console.log(sommeTableau(tableauNotes));
console.log(moyenne(tableauNotes));
/*
let somme = 0;
tableau.forEach(element=>
    {
        somme+=element;
    });
console.log(somme);
let somme2 = 0;
tableauNotes.forEach(element=>
    {
        somme2+=element;
    });
console.log(somme2);
*/

function sommeTableau(tab)
{
    let somme = 0;
    tab.forEach(element=>
        {
            somme+=element;
        });
        return somme;
}
function moyenne(tab)
{
    return sommeTableau(tab)/tab.length;
}
//console.log(somme);