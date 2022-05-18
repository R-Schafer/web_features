const myform = document.getElementById("myform");
myform.noValidate = true;

myform.addEventListener("submit", validateForm);

// validate form on submission
function validateForm(e) {
  const form = e.target;

  if (!form.checkValidity()) {
    e.preventDefault();
    // apply invalid class
    Array.from(form.elements).forEach((i) => {
      if (i.checkValidity()) {
        i.classList.remove("invalid");
      } else {
        i.classList.add("invalid");
        i.nextElementSibling.hidden = false;
      }
    });
  }
}
