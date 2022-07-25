function openIt()
{
    console.log("open");
     // fonctionne toujours
    window.open('https://www.google.com');
}
function closeIt()
{
    console.log(fenetre);
    console.log("close");
    // fonctionne toujours
    fenetre.close();
}
function resizeToIt()
{
    console.log("resizeTo");
    // ne fonctionne plus: pb de sécurité
    fenetre.resizeTo(400,400)
}
function resizeByIt()
{
    console.log("resizeBy");
    // ne fonctionne plus: pb de sécurité
    fenetre.resizeBy("50,50");
}
let btnOpen = document.getElementById("btnOpen");
btnOpen.addEventListener('click',openIt);
let btnClose = document.getElementById("btnClose");
btnClose.addEventListener('click',closeIt);
let btnResizeBy = document.getElementById("btnResizeBy");
btnResizeBy.addEventListener('click',resizeByIt);
let btnResizeTo = document.getElementById("btnResizeTo");
btnResizeTo.addEventListener('click',resizeToIt);
let fenetre =  window.open('https://www.amazon.com',"_blank")
