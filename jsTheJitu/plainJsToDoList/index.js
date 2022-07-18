let addBtn = document.querySelector("#addBtn");
let Title = document.querySelector("#title");
let Description = document.querySelector("#description");
let Date = document.querySelector("#date");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

// ============================================================================================================
addBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML += `
  <strong>Title</strong>: ${Title.value} <br />
  <strong>Description:</strong> ${Description.value} <br/>
  <strong>Date:</strong> ${Date.value}`;
  ul.appendChild(li);

  Title.value = "";
  Description.value = "";
  Date.value = "";

  const dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }
});
let delItem = document.querySelector(".del");
function delListItem() {
  delItem.style.Display = "none";
}
