console.log('Chargement du fichier interaction.js');
//change_couleur();

function change_couleur()
{
    console.log('appel de la fonction change_couleur()');
    var paragraphe = document.getElementById('important');
    console.log(paragraphe);
    //paragraphe.style.color="red";
    paragraphe.classList.add("rouge");
}
function change_couleur_bleu()
{
    console.log('appel de la fonction change_couleur_bleu()');
    var paragraphe = document.getElementById('important');
    console.log(paragraphe);
    //paragraphe.style.color="bleu";
    paragraphe.classList.add("bleu");
}

function coloriser(couleur)
{
    console.log('appel de la fonction coloriser('+couleur+')');
    // selection du paragraphe
    var paragraphe = document.getElementById('important');
    console.log(paragraphe);
    // suivant la couleur demandée, on supprime l'autre couleur
    if (couleur=="bleu")
        paragraphe.classList.remove("rouge");
    else
        paragraphe.classList.remove("bleu");
    // on change la classe et donc la couleur
    paragraphe.classList.add(couleur);
}
function reset_couleur() {
    console.log('appel de la fonction reset_couleur()');
    var paragraphe = document.getElementById("important");
    console.log(paragraphe);
    paragraphe.classList.remove("rouge");
    paragraphe.classList.remove("bleu");
}


