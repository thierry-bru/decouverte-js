class Classe
{
    intitule;
    listeStagiaire;
    dateDebut;
    dateFin;
    constructor(intitule,dateDebut,dateFin)
    {
        this.intitule = intitule;
        this.listeStagiaire = new Array();
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }
    ajouterStagiaire(stagiaire)
    {
        this.listeStagiaire.push(stagiaire);
    }
}
// déclaration et initialisation de la variable texte qui contient du texte
let texte = '';

for (let i = 0; i < 9; i++) {
    // pour chaque valeur de 1 de 0 à 9, on concatène la valeur courante de i
    // i est ici transformé en texte et non traitée comme un nombre
    texte = texte + i;
}
// affichage de la valeur finale de texte : '0123456789'
console.log(texte);

let min=1; 
let max=10;  
let random = Math.random() * (max - min) + min; 
alert(random);