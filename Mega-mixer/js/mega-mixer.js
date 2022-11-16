const ListeApprenants = ["BAALI Ike-David", "DETHIER Maxime", "DOMERGUE Jonathan", "FALCONIER Franck", "OZMANOV Alik", "PENTEADO Anthony", "PETIT Wilfrid", "PICHOFF Brandon", "TRAVASSOS Carl-Antoine"];



// CODE PERSO -------------------------------------- //

// On veut afficher le nombre de cartes face cachée par ligne lorsqu'on sélectionne le select "selectNumber", pour une valeur de 2, 3 et 4. Pour ça, on créera sûrement des div de même classe "front interrogation".

// Ensuite, on veut que le bouton "boutonPlacer" se comporte comme le "Bouton Toggle à effacer" et retourne un smiley aleatoire ainsi que chaque nom du tableau de façon aléatoire également parmi la liste d'images fournies et le tableau "listeApprenants", et ce pour chaque carte.

// Pour ça, on définira une fonction aléatoire qui permet le flip de la carte sur l'url source de la classe "back smiley". On remarque que c'est la div "flipcard h" qui devient "flipcard h flip" au retournement de la carte, qui permet l'interaction de retournement, on lui a attribué également l'ID "card" 

// On cherche également à faire en sorte que le "boutonInitialiser" remplisse son rôle, c'est à dire redonner à chaque carte sa position face verso initiale et fasse en sorte qu'il reset le smiley aléatoire qui s'affichera la prochaine fois que l'on utilise le bouton Placer.


// -------------------------------------------------- // 

// On sépare chaque nom et prénom du tableau pour les utiliser plus tard dans deux nouveaux tableaux //





blocSizer = document.getElementById("sizer");



ListeApprenants.forEach(nom => {

    cardFlip = document.createElement("div");
    cardFlip.classList = "flipcard h";

    cardReturn = document.createElement("div");
    cardReturn.classList = "front interrogation";
    cardReturn.textContent = "?";

    blocSizer.prepend(cardFlip);
    cardFlipped = document.createElement("div");
    cardFlipped.classList = "back smiley";
    cardFlipped.style.backgroundImage = "url(./images/smiley/smiley-1.png)";

    cardFlip.prepend(cardReturn, cardFlipped);

    prenom = document.createElement("div");
    prenom.classList = "prenom";

    nom = document.createElement("div");
    nom.classList = "nom";

    cardFlipped.prepend(prenom, nom);





});

const placerButton = document.getElementById("BoutonPlacer");


placerButton.addEventListener("click", function (event) {
    const allCards = document.querySelectorAll(".flipcard");
    const theMix = _.shuffle(ListeApprenants);
    placerButton.disabled = true;
    nbGroupes.disabled = true;
    reinitialiser.disabled = false;





    allCards.forEach((carte, index) => {
        carte.querySelector(".prenom").textContent = theMix[index].split(" ")[1];
        carte.querySelector(".nom").textContent = theMix[index].split(" ")[0];

        let smileyMix = Math.floor((Math.random() * 15) + 1)
        carte.querySelector(".smiley").style.backgroundImage = "url(./images/smiley/smiley-" + smileyMix + ".png)";

        carte.classList.toggle('flip');

    });
});

let nbGroupes = document.getElementById("numberSelect");
nbGroupes.addEventListener("change", (event) => {
    console.log(event.target.value)
    blocSizer.style.width = event.target.value + "px";

})
const allCards = document.querySelectorAll(".flipcard");

const reinitialiser = document.getElementById("BoutonInitialiser")
reinitialiser.addEventListener("click", (event) => {

    placerButton.disabled = false;
    nbGroupes.disabled = false;
    reinitialiser.disabled = true;
    allCards.forEach((carte) => {
        carte.classList.toggle('flip');
    });
});



