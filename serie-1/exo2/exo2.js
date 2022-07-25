/**
 * Définir deux variables x et y contenant des nombres entiers et les demander à l’utilisateur
 * Afficher dans le paragraphe avec l’identifiant p1 le message suivant :
○   si x > y alors afficher “x est plus grand que y”
○   si x <= y alors afficher “x est plus petit que y”
●	Tester le rendu quand x = 10 et y = 5

 */
let x = parseInt(prompt("Combien faut X?"));
let y = parseInt(prompt("Combien faut Y?"));

let paragraphe = document.querySelector("#p1");
//let paragraphe = document.getElementById("p1");
if (x>y)
    paragraphe.innerHTML="x est plus grand que y";
else
    paragraphe.innerHTML="x est plus petit ou égal à y";
