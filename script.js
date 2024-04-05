const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
//ssh-keygen

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please add an item ");
    return;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  itemList.appendChild(li);
  itemInput.value = "";
}
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  return button;
}
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}
itemForm.addEventListener("submit", addItem);
