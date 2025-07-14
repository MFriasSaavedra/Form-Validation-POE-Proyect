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
  let messagevalidation = document.getElementById("message-input")

  function checkInfo() {
    let hasError = false;
    alerts.classList.add("d-none");

    if (cardValidation.value.trim() === "") {
      cardValidation.style.backgroundColor = "#eacbcaff";
      cardValidation.style.borderColor = "red"
      hasError = true;
    }

    if (cvcValidation.value.trim() === "") {
      cvcValidation.style.backgroundColor = "#eacbcaff";
      cvcValidation.style.borderColor = "red";
      hasError = true;
    }
    if (amountValidation.value.trim() === "") {
      amountValidation.style.backgroundColor = "#eacbcaff";
      amountValidation.style.borderColor = "red";
      hasError = true;
    }
    if (firstNameValidation.value.trim() === "") {
      firstNameValidation.style.backgroundColor = "#eacbcaff";
      firstNameValidation.style.borderColor = "red";
      hasError = true;
    }
    if (lastNameValidation.value.trim() === "") {
      lastNameValidation.style.backgroundColor = "#eacbcaff";
      lastNameValidation.style.borderColor = "red";
      hasError = true;
    }
    if (cityValidation.value.trim() === "") {
      cityValidation.style.backgroundColor = "#eacbcaff";
      cityValidation.style.borderColor = "red";
      hasError = true;
    }
    if (stateValidation.value.trim() === "") {
      stateValidation.style.backgroundColor = "#eacbcaff";
      stateValidation.style.borderColor = "red";
      hasError = true;
      if (postalCode.value.trim() === "") {
        postalCode.style.backgroundColor = "#eacbcaff";
        postalCode.style.borderColor = "red";
        hasError = true;
      }
      if (messagevalidation.value.trim() === "") {
        messagevalidation.style.backgroundColor = "#eacbcaff";
        messagevalidation.style.borderColor = "red";
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

