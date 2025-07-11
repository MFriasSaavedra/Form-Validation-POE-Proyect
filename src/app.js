import "bootstrap";
import "./style.css";




window.onload = function () {
  let form = document.getElementById("form");
  let alerts = document.getElementById("alerts");
  let cardValidation = document.getElementById("cardNumber");
  let cvcValidation = document.getElementById("cvc");
  let amountValidation = document.getElementById("amount");

  function checkInfo() {
    let hasError = false;

    alerts.classList.add("d-none");

    if (cardValidation.value === "") {
      cardValidation.style.backgroundColor = "#eacbcaff";
      cardValidation.style.borderColor = "red"
      hasError = true;
    }

    if (cvcValidation.value === "") {
      cvcValidation.style.backgroundColor = "#eacbcaff";
      cvcValidation.style.borderColor = "red";
      hasError = true;
    }
    if (amountValidation.value === "") {
      amountValidation.style.backgroundColor = "#eacbcaff";
      amountValidation.style.borderColor = "red";
      hasError = true;
    }
    if (hasError) {
      alerts.classList.remove("d-none");
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hola")
    checkInfo();
  });
}
