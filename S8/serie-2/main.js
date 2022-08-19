//https://magasin.mboudrea.tim-cstj.ca/api/produit/alea/10
function affichageDonnees(donnees)
{
    document.querySelector("#demo").innerHTML = donnees;
    console.log(JSON.parse(donnees));
}

function chargementDonnees() {
    // création de la requête HTTPAJAX
    const xhttp = new XMLHttpRequest();
    xhttp.onload =function(){affichageDonnees(this.responseText);}
    xhttp.open("GET", "https://magasin.mboudrea.tim-cstj.ca/api/produit/alea/10", true);
    xhttp.send();
  }
  chargementDonnees();