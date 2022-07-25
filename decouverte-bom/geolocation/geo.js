function coordonnees(pos) {
    let crd = pos.coords;
  
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    
    document.getElementById('p1').innerHTML= 'Latitude : ' + latitude.toFixed(2);
    document.getElementById('p2').innerHTML= 'Longitude : ' + longitude.toFixed(2);
}
function coordonneesFailed()
{
    console.log("echec");
}
navigator.geolocation.getCurrentPosition(coordonnees,coordonneesFailed);
