// selection du titre H1 dont l'identifiant est 'important'
let titre = document.querySelector("#important");
// selections de tous les titres H1 dont la classe est 'titre'
let lesTitres = document.querySelectorAll(".titre");

alert(titre.innerHTML);
alert("ca VA CHANGEEEER !");
titre.innerHTML+=" grave!"
for (let index = 0; index < lesTitres.length; index++) 
{
    var element = lesTitres[index];
    element.innerHTML+= " grave cousin!";
}
alert("et voila");