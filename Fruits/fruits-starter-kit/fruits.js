let fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }];

// Commentaires persos //


// Ici on crée deux constantes qui vont nous servir à aller chercher l'id "fruits" et la classe ".imageChanger" //
// A savoir que ces constantes sont déclarées comme des objets et ne sont pas visibles dans le code. //
const blockFruits = document.querySelector("#fruits");
const blockImage = document.querySelector(".imageChanger")

// Pour chaque élément de "fruits", on crée une boucle .forEach pour les 4 fruits avec les instructions suivantes : //
fruits.forEach(fruit => {

// On crée une div dont le nom d'objet est "fruitDiv", invisible dans le code également //
    const fruitDiv = document.createElement("div");
    // Le contenu de cet objet créé sera du texte et sera lié au contenu "name" du tableau déclaré au début //
    fruitDiv.textContent = (fruit.name);
    // On lui donne le nom de classe "boutonFruits" //
    fruitDiv.className = "boutonFruits";
    // Ici, on inclut dans "blockFruits" comme enfants les objets "fruitDiv" (qui se réfèrent à la classe déclarée avant: "boutonFruits") //
    blockFruits.appendChild(fruitDiv);
    // On ajoute ensuite l'évènement que l'on souhaite, à savoir qu'au survol : =>
    fruitDiv.addEventListener("mouseover",(event) => {
    // .. l'URL du style CSS  (sur la classe "imageChanger") de la constante déclarée au début doit être modifiée pour chaque contenu "name" du tableau.  !   Attention à la concaténation = "url("+...+")"   !
       blockImage.style.backgroundImage = "url("+fruit.image+")";

}); 
    // On ajoute enfin l'évènement en dehors du premier évènement mais toujours dans la boucle forEach pour que hors du survol.. //
    fruitDiv.addEventListener("mouseout",(event) => {
// l'URL de l'évènement précédent soit définie sur l'image initiale, à savoir ./all-fruits.jpg //
        blockImage.style.backgroundImage = "url(./all-fruits.jpg)";


 });

 
});
