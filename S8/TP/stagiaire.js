class Stagiaire
{
    nom;
    prenom;

    salutation()
    {
        return `je m'appelle ${this.prenom} ${this.nom}`;
    }
    constructor(pPrenom="",pNom="")
    {
        this.prenom = pPrenom;
        this.nom = pNom.toUpperCase();
    }
}
let personne = new Personne();
personne.nom = "DUPONT";
personne.prenom = "Martin";
console.log(personne.nom);
console.log(personne.prenom);
