let reponse = window.confirm('Êtes-vous pour le miltipla by Michelin?');
console.log(reponse);
let p1 = document.getElementById("p1");
//let p1 = document.QuerySelector("#p1");
if (reponse==true)
// if (reponse)  -> cela fonctionne car reponse est égal à vrai ou faux
    p1.innerHTML="Et vous aimez la couleur?";
else
    p1.innerHTML="by vilebrequin nandidja ca aurait été mieux en rouge";
