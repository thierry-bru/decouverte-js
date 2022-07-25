for (let index = 1; index <= 10; index++) 
{
     console.log("ligne n°"+index);
}
for (let index = 10; index > 0; index--) 
{
     console.log("ligne n°"+index);
}

function calculerAire(largeur, hauteur) {
    return largeur * hauteur;
  }
  
  console.log(calculerAire(5, 6));
  // résultat attendu: 30
  
  let largeurSaisie = prompt("Largeur?");
  let hauteurSaisie = prompt("Hauteur?");
  console.log(calculerAire(hauteurSaisie, 6));
let nombreHeure = 100/60;
let nombreMinutes = 100%10;

let champ = document.getElementById("champ");
alert("le champ vaut:"+champ.value)
document.getElementById("myText").value = "Johnny Bravo";