import "bootstrap";
import "./style.css";




window.onload = function () {
  let form = document.getElementById("form");
  let alerts = document.getElementById("alerts");
  let cardValidation = document.getElementById("cardNumber");
  let cvcValidation = document.getElementById("cvc");
  let amountValidation = document.getElementById("amount");
  let firstNameValidation = document.getElementById("firstName");
  let lastNameValidation = document.getElementById("lastName");
  let cityValidation = document.getElementById("city");
  let stateValidation = document.getElementById("state");
  let postalCode = document.getElementById("postalCode");

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
    if (firstNameValidation.value === "") {
      firstNameValidation.style.backgroundColor = "#eacbcaff";
      firstNameValidation.style.borderColor = "red";
      hasError = true;
    }
    if (lastNameValidation.value === "") {
      lastNameValidation.style.backgroundColor = "pink";
      lastNameValidation.style.borderColor = "red";
      hasError = true;
    }
    if (cityValidation.value === "") {
      cityValidation.style.backgroundColor = "pink";
      cityValidation.style.borderColor = "red";
      hasError = true;
    }
    if (stateValidation.value === "") {
      stateValidation.style.backgroundColor = "pink";
      stateValidation.style.borderColor = "red";
      hasError = true;
      if (postalCode.value === "") {
        postalCode.style.backgroundColor = "pink";
        postalCode.style.borderColor = "red";
        hasError = true;
      }

      if (hasError) {
        alerts.classList.remove("d-none");
      }
    }
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInfo();
  });

}

