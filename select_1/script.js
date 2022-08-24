const dropdown = document.querySelector(".dropdown");

dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};

function show(selected) {
  document.querySelector(".textBox").value = selected;
}
