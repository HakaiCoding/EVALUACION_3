let alimentos = JSON.parse(localStorage.getItem("alimentos")) || [];

document.getElementById("addItem").addEventListener("click", function () {
let input = document.getElementById("inputItem").value;
let li = document.createElement("li");
li.textContent = input;
document.getElementById("listItem").appendChild(li);
alimentos.push(input);
localStorage.setItem("alimentos", JSON.stringify(alimentos));
});

for (let i = 0; i < alimentos.length; i++) {
let li = document.createElement("li");
li.textContent = alimentos[i];
document.getElementById("listItem").appendChild(li);
li.addEventListener("dblclick", function () {
li.remove();
alimentos.splice(i, 1);
localStorage.setItem("alimentos", JSON.stringify(alimentos));
});
}

document.getElementById("clearList").addEventListener("click", function () {
document.getElementById("listItem").innerHTML = "";
alimentos = [];
localStorage.removeItem("alimentos");
});