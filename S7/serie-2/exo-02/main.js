let requete = new XMLHttpRequest();
requete.onload = function()
{
    afficherResultat(this.responseText);
    //console.log(this.responseText);
}
requete.open('GET','https://magasin.mboudrea.tim-cstj.ca/api/produit/alea/10');
requete.send();

function afficherResultat(resultat)
{
    let resultats = JSON.parse(resultat);
    console.log(resultats);
    resultats.produits.forEach(element => {
        document.querySelector('#demo').innerHTML += `<li> 
        ${element.titre} <img src='${element.image.url}'>
        </li>`;
    });
   // document.querySelector('#demo').innerHTML = resultat;
}