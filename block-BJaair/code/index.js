let form = document.querySelector(".form");
let ul = document.querySelector("ul");

let cardData = JSON.parse(localStorage.getItem("card")) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;
  cardData.push({ title, category });
  localStorage.setItem("card", JSON.stringify(cardData));
  createUI(cardData, ul);
});

function handleEdit(event, info, id, label) {
  let elm = event.target;
  let input = document.createElement("input");
  input.value = info;
  input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      let updateValue = e.target.value;
      cardData[id][label] = updateValue;
      createUI();
      localStorage.setItem("card", JSON.stringify(cardData));
    }
  });
  input.addEventListener("blur", (e) => {
    let updateValue = e.target.value;
    cardData[id][label] = updateValue;
    createUI();
    localStorage.setItem("card", JSON.stringify(cardData));
  });
  let parent = event.target.parentElement;
  parent.replaceChild(input, elm);
}

function createUI(data = cardData, root = ul) {
  root.innerHTML = "";
  let fragment = new DocumentFragment();
  data.forEach((cardInfo, index) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = cardInfo.category;
    p.addEventListener("dblclick", (event) =>
      handleEdit(event, cardInfo.category, index, "category")
    );
    let h2 = document.createElement("h2");
    h2.innerText = cardInfo.title;
    h2.addEventListener("dblclick", (event) =>
      handleEdit(event, cardInfo.title, index, "title")
    );
    li.append(p, h2);
    fragment.appendChild(li);
  });
  root.append(fragment);
}

createUI(cardData, ul);
