let btA = document.querySelector('#a');
let btB = document.querySelector('#b');
let btC = document.querySelector('#c');


function boutonA()
{
 // en mode sans boucle trop moche
    btA.element.style="white";
    btB.element.style="blue";
    btC.element.style="blue";
 
 // la bonne facon
    let allBoutons = document.querySelectorAll(".monbouton");
   // console.log(allBoutons);
   //document.querySelectorAll(".monbouton").foreach(....)  PAS BIEN
    allBoutons.forEach(element => {
        element.style.backgroundColor="blue";
    });
    /*
    function changerCouleur(element)
    {
        element.style.backgroundColor="blue";
    }
    allBoutonsForEach(changerCouleur);
    */
    // a l'ancienne
   /* 
   let boutonsAlls = document.getElementsByClassName("monbouton");
    for (let index = 0; index < boutonsAlls.length; index++) 
    {
        boutonsAlls[index].style.backgroundColor="blue";     
    }*/
    btA.style.backgroundColor="white";
}

btA.addEventListener('click',boutonA);
console.log(document);