
let btn_addition = document.querySelector('#btn_addition');
let btn_multiplication = document.querySelector('#btn_multiplication');

btn_addition.addEventListener('click',addition);
btn_multiplication.addEventListener('click',multiplication)


function addition()
{
    let nombre1 = parseInt(document.querySelector('#nombre1').value);
    let nombre2 = parseInt(document.querySelector('#nombre2').value);
    let resultat = document.querySelector('#resultat');
    let calcul = new Calcul(nombre1,nombre2);
    resultat.innerHTML =  `${nombre1} + ${nombre2} = ${calcul.add()}`;
}
function multiplication()
{
    let nombre1 = parseInt(document.querySelector('#nombre1').value);
    let nombre2 = parseInt(document.querySelector('#nombre2').value);
    let resultat = document.querySelector('#resultat');
    let calcul = new Calcul(nombre1,nombre2);
    resultat.innerHTML =  `${nombre1} x ${nombre2} = ${calcul.multiply()}`;
}