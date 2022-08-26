class Salarie
{
    nom;
    prenom;
    tauxHoraire;
    nombreHeuresHebdo;
    constructor(nom,prenom,tauxHoraire,nombreHeuresHebdo)
    {
     this.nom = nom;
     this.prenom = prenom;
     this.tauxHoraire = tauxHoraire;
     this.nombreHeuresHebdo = nombreHeuresHebdo;
    }
    calculerSalaireHebdo()
    {
        return this.nombreHeuresHebdo*this.tauxHoraire;
    }
    calculerSalaireMensuel()
    {
      //  return this.nombreHeuresHebdo*this.tauxHoraire*4; 
      return this.calculerSalaireHebdo()*4;
    }
}