let addBtn = document.querySelector("#addBtn");
let Title = document.querySelector("#title");
let Description = document.querySelector("#description");
let Date = document.querySelector("#date");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

// ================================================================================================================================
//Handle button event
addBtn.addEventListener("click", () => {
  if (Title.value == "" || Description.value == "" || Date.value == "") {
    alert(`Fill all the fields`);
    return false;
  } else {
    let li = document.createElement("li");
    li.innerHTML = `
  <strong>Title</strong>: ${Title.value} <br />
  <strong>Description:</strong> ${Description.value} <br/>
  <strong>Completion Date:</strong> ${Date.value}`;
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
    // let li2 = document.querySelector(".li2");
    function crossOut() {
      li.classList.add("done");
    }
    // function complete() {
    //   li2.classList.add("done");
    // }

    li.addEventListener("click", crossOut);
  }
});
// let completed = document.querySelector(".completed");
// completed.addEventListener("click", () => {
//   return done;
// });
// ===========================================================================================================================
let list2 = document.querySelector(".list2");
// let li2 = document.createElement("li");

list2.innerHTML = `
       <li>
          <strong>Title:</strong> Code <br />
          <strong>Description:</strong> <br />
          <strong>Completion Date:</strong> Expired!
          <button>X</button>
        </li>
        <li>
          <strong>Title:</strong> Finish assignment <br />
          <strong>Description:</strong> <br />
          <strong>Completion Date:</strong> Expired!
          <button>X</button>
        </li>
        <li>
          <strong>Title:</strong> Code the insurance <br />
          <strong>Description:</strong> Front end based assignment<br />
          <strong>Completion Date:</strong> On progress!
          <button>X</button>
        </li>`;

function crossOut() {
  li.classList.add("done");
}
let li = document.querySelector("li");
list2.addEventListener("click", crossOut);
console.log(li);
//============================================================================================================================
