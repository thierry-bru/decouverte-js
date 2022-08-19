/*let stagiaire1 = ['Martin','DUPONT'];
let stagiaire2 = ['Vincent','MARTIN'];
let stagiaires = [stagiaire1,stagiaire2];
console.log(stagiaires);
console.log(stagiaires[1][0]);
let stagiaireA = new Stagiaire();
stagiaireA.nom = "DUPONT";
stagiaireA.prenom = "Martin";

let stagiaireB = new Stagiaire();
stagiaireB.nom = "MARTIN";
stagiaireB.prenom = "Vincent";
stagiaires = [stagiaireA,stagiaireB];
console.log(stagiaires);
console.log(stagiaires[1].prenom);
console.log(stagiaires[0].salutation());
let anotherStagiaire = new Stagiaire("Lucette","Anderson");
console.log(anotherStagiaire);*/

let stagiaires = new Classe("DWWM-14",new  Date (2022,9,1),new Date(2023,5,25));
stagiaires.ajouterStagiaire(new Stagiaire("Lucette","Anderson"));
stagiaires.ajouterStagiaire(new Stagiaire("Martin","Luther"));
console.log(stagiaires);
console.log(stagiaires.dateDebut.toString());
let dateNaissance = new  Date (1977,10,24);
console.log(dateNaissance.toString());

let btnCreer = document.querySelector('#btnCreer');
let btnAfficher =  document.querySelector('#btnAfficher');


var stage;
btnCreer.addEventListener('click',creerStage);
btnAfficher.addEventListener('click',afficherStage);


function creerStage()
{
    let dateDebut = document.querySelector('#dateDebut').value;
    let dateFin = document.querySelector('#dateFin').value;
    let intitule = document.querySelector('#intitule').value;
    console.log(new Date(dateDebut).toString());
 stage = new Classe(intitule,new Date(dateDebut),new Date(dateFin));
}
function afficherStage()
{
    console.log(stage);
    console.log(stage.dateDebut.toString());
}