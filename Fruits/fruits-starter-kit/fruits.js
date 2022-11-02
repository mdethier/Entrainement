let fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }];
let selectedFruit= "";


const blockFruits = document.querySelector("#fruits");
const blockImage = document.querySelector(".imageChanger")

fruits.forEach(fruit => {

  const fruitDiv = document.createElement("div");
  fruitDiv.textContent = (fruit.name);
  fruitDiv.className = "boutonFruits";
  blockFruits.appendChild(fruitDiv);

  fruitDiv.addEventListener("mouseover", (event) => {
    blockImage.style.backgroundImage = "url(" + fruit.image + ")";

  });
  fruitDiv.addEventListener("mouseout", (event) => {

    blockImage.style.backgroundImage = "url(./all-fruits.jpg)";

  });
  fruitDiv.addEventListener("click", (event) => {
    const allDivFruits = document.querySelectorAll(".boutonFruits");
    allDivFruits.forEach(divFruit => {
      divFruit.style.backgroundColor = "";
    })

    fruitDiv.style.backgroundColor = "red";
   // blockImage.style.backgroundImage = "url("+fruit.image+")";
  });

  fruitDiv.addEventListener("mouseout", (event) => {
    blockImage.style.backgroundImage = "url(" + fruit.image + ")";
  });

});
