const textArea = document.querySelector("#notes-field");
const copyButton = document.querySelector("#copy-button");

const productDropdown = document.querySelector("#categories-dropdown");
const caseDropdowns = document.querySelectorAll(".case-options");

// Test

const accountRecoveryDropdown = document.querySelector(
  "#account-recovery-options"
);
const mfaDropdown = document.querySelector("#mfa-options");

function copyText() {
  textArea.select();
  navigator.clipboard.writeText(textArea.value);
}

function hideCaseDropdowns() {
  for (let i = 0; i < caseDropdowns.length; i++) {
    caseDropdowns[i].style.display = "none";
  }
}

function productDropdownFunction() {
  //   alert(productDropdown.value);
  switch (productDropdown.value) {
    case "account-recovery":
      hideCaseDropdowns();
      accountRecoveryDropdown.style.display = "block";
      break;
    case "reset-mfa":
      hideCaseDropdowns();
      mfaDropdown.style.display = "block";
      break;
  }
}

function readFile(fileName) {
  let reader = new FileReader();
}

copyButton.addEventListener("click", copyText);
productDropdown.addEventListener("change", productDropdownFunction);