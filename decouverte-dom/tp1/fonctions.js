function creationTuile(pTitre, pTexte) {
    //la méthode createElement crée un élément, le paramètre
    // permet de choisir le type de balise html
    let tuile = document.createElement('div');
    let titre = document.createElement('h1');
    let texte = document.createElement('p');

    // l'attribut innerHTML, défini pout toutes les balises
    // permet de changer le texte.
    titre.innerHTML = pTitre;
    texte.innerHTML = pTexte;

    // ces deux éléments html sont ajoutés dans la tuile, un div
    // le chainage est réalisé par appendChild.
    tuile.appendChild(titre);
    tuile.appendChild(texte);

    // la fonction retourne une tuile, c'est à dire un DIV contenant
    // un titre H1 et un paragraphe 
    return tuile;
}

function ajoutTuile() {
    // Pour ajouter une tuile, il faut selectionner le parent, ici MAIN
    let main = document.querySelector('main');
    if (main) {
        // si l'on trouve bien le parent, on peut ajours lui ajouter un enfant
        // la fonction creationTuile génère la tuile, cela réduit la taille
        // de la fonction ajoutTuile
        main.appendChild(creationTuile('titre', 'texte inutile'));
    }
    else {
        alert("je n'ai pas trouvé le main!");
    }
}
function reduireAgrandirParagraphes() {
    let paragraphes = document.querySelectorAll('p');
    paragraphes.forEach(element => {
        if (element.style.display == 'block')
            element.style.display = 'none';
        else
            element.style.display = 'block';
    });
}