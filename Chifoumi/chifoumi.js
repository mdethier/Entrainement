// On veut que lorsque l'image de gauche ou de droite soit cliquée, cette image soit remplacée aléatoirement par l'une des images fournies, avec une transition exprimée en millisecondes.

// Ensuite, on souhaite que l'ordinateur compare les deux images selon le schéma du chifoumi, à savoir : la pierre bat les ciseaux, les ciseaux battent la feuille, la feuille bat la pierre, et dans le cas de la même image, il y a égalité.

// On affiche ensuite le texte qui remplace le titre Chifoumi et le bouton Rejouer devient cliquable et permet de réinitialiser les cartes de droite et de gauche sur leur image initiale, en réaffichant le titre Chifoumi.

let joueeGauche = document.getElementById("image-gauche");
let joueeDroite = document.getElementById("image-droite");
let aleatoire = ["pierre","feuille","ciseau"];

let aleatoireGauche;
let aleatoireDroite;

joueeGauche.addEventListener("click", (event) => {
   aleatoireGauche = Math.floor(Math.random()*aleatoire.length);
    joueeGauche.style.backgroundImage = "url(./images-pfc/"+aleatoire[aleatoireGauche]+ ".jpg)" ;

});
joueeDroite.addEventListener("click", (event) => {
    aleatoireDroite = Math.floor(Math.random()*aleatoire.length);
     joueeDroite.style.backgroundImage = "url(./images-pfc/"+aleatoire[aleatoireDroite]+ ".jpg)" ;
});



