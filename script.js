const Elinput1 = document.querySelector("#input1");
const Elinput2 = document.querySelector("#input2");
const Elinput3 = document.querySelector("#input3");
const Elbtn = document.querySelector("#btn1");
const Eldelete = document.querySelector(".delete");
const Eldark = document.querySelector(".dark");
const Elresult = document.querySelector("#result");

Eldark.addEventListener("click", function () {
  document.body.classList.toggle("mod");
});

Eldelete.addEventListener("click", function () {
  Elresult.textContent = "";
});

Elbtn.addEventListener("click", function () {
  const newCard = document.createElement("div");
  const newTitle = document.createElement("h1");
  const newParaghraph = document.createElement("p");
  const newNumber = document.createElement("p");
  const Elbtn3 = document.createElement("button");

  newCard.className = "contact";
  newTitle.textContent = Elinput1.value;
  newParaghraph.textContent = Elinput2.value;
  newNumber.textContent = Number(Elinput3.value);

  Elbtn3.addEventListener("click", function () {
    Elresult.removeChild(newCard);
  });

  newCard.appendChild(newTitle);
  newCard.appendChild(newParaghraph);
  newCard.appendChild(newNumber);
  Elresult.appendChild(newCard);

  newTitle.style.color = "#000000";
  newParaghraph.style.color = "#000000";
  newNumber.style.color = "blue";
});
