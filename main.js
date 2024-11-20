const ul = document.querySelector(".items");

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = "hello";
//ul.children[1].innerText = "brad";
//ul.lastElementChild.innerHTML = "<h4>hello</h4>";

//const btn = document.querySelector(".btn");
//btn.style.background = "red";
//btn.addEventListener("click", (e) => {
//e.preventDefault();
// document.querySelector("#my-form").style.background =
// "#ccc";
// document.querySelector("body").classlist.add("bg-dark");
//document.querySelector("items")
// .lastElementChild.innerHTML = "<h1>hello</h1>";});
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector("#msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.innerHTML = "Please enter all fields";
    msg.style.color = "red";
    //console.log(msg);
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );

    userList.appendChild(li);

    //clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
  //console.log(nameInput.value);
}
