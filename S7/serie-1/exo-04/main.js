var salarie;
function calculerSalaireHebdo()
{
   let divReponse = document.querySelector('#resultat');
   divReponse.innerHTML=`le salarié ${salarie.prenom} ${salarie.nom} gagne ${salarie.calculerSalaireHebdo()}€ par semaine`; 
}
function calculerSalaireMensuel()
{
    let divReponse = document.querySelector('#resultat');
    divReponse.innerHTML=`le salarié ${salarie.prenom} ${salarie.nom} gagne ${salarie.calculerSalaireMensuel()}€ par mois`; 
}
function creerSalarie()
{
    salarie = new Salarie(  document.querySelector('#nom').value,
                            document.querySelector('#prenom').value,
                            document.querySelector('#tauxHoraire').value,
                            document.querySelector('#nombreHeures').value)
    console.log(salarie);
    let btn_calculerSalaireHebdo = document.querySelector('#btn_calculerSalaireHebdo');
    btn_calculerSalaireHebdo.disabled = false;
    let btn_calculerSalaireMensuel = document.querySelector('#btn_calculerSalaireMensuel');
    btn_calculerSalaireMensuel.disabled = false;

}




let btn_calculerSalaireHebdo = document.querySelector('#btn_calculerSalaireHebdo');
btn_calculerSalaireHebdo.addEventListener('click',calculerSalaireHebdo);

let btn_calculerSalaireMensuel = document.querySelector('#btn_calculerSalaireMensuel');
btn_calculerSalaireMensuel.addEventListener('click',calculerSalaireMensuel);

let btn_creerSalarie = document.querySelector('#btn_creerSalarie');
btn_creerSalarie.addEventListener('click',creerSalarie)

