let prenom = prompt('Quel est le prénom?');
let nom = prompt('Quel est le nom');
let personne = new Personne();
personne.nom = nom;
personne.prenom = prenom;
alert(`Bonjour ${personne.prenom} ${personne.nom}`);