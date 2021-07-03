let form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;
  console.log(title, category);
});
