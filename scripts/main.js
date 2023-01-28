const textArea = document.querySelector("#notes-field");
const copyButton = document.querySelector("#copy-button");

// Product Dropdown and all Case Dropdowns
const productDropdown = document.querySelector("#categories-dropdown");
const caseDropdowns = document.querySelectorAll(".case-options");

// Case displays
const accountRecoveryDisplay = document.querySelector(
  "#account-recovery-options"
);
const mfaDisplay = document.querySelector("#mfa-options");

// Case Dropdowns
const accountRecoveryDropdown = document.querySelector(
  "#account-recovery-dropdown"
);
const mfaDropdown = document.querySelector("#mfa-dropdown");

// Copies Text to clipboard
function copyText() {
  textArea.select();
  navigator.clipboard.writeText(textArea.value);
}

// Hides Case Dropdown
function hideCaseDropdowns() {
  for (let i = 0; i < caseDropdowns.length; i++) {
    caseDropdowns[i].style.display = "none";
  }
}

//Reads JSON File with note information
function readJson(callback) {
  fetch("/scripts/responses.json")
    .then((response) => response.json())
    .then((data) => callback(data));
  // data = object
  // data.
}

// Opens Product Case Dropdown
function productDropdownFunction() {
  switch (productDropdown.value) {
    case "account-recovery":
      hideCaseDropdowns();
      accountRecoveryDisplay.style.display = "block";
      break;
    case "reset-mfa":
      hideCaseDropdowns();
      mfaDisplay.style.display = "block";
      break;
    default:
      hideCaseDropdowns();
      textArea.value = "Text will appear here...";
      break;
  }
}

// Account Recovery Dropdown Function, populates text area with data from json based on selection
function accountRecoveryDropdownFunction() {
  switch (accountRecoveryDropdown.value) {
    case "regular-reset":
      readJson((data) => {
        textArea.value = data["notes"][0]["body"];
      });
      break;
    case "email-reset":
      readJson((data) => {
        textArea.value = data["notes"][1]["body"];
      });
      break;
    case "parent-reset":
      readJson((data) => {
        textArea.value = data["notes"][3]["body"];
      });
      break;
    default:
      textArea.value = "Text will appear here...";
      break;
  }
}

function mfaDropdownFunction() {
  switch (mfaDropdown.value) {
    case "mfa-setup":
      readJson((data) => {
        textArea.value = data["notes"][2]["body"];
      });
      break;
    case "mfa-reset":
      readJson((data) => {
        textArea.value = data["notes"][4]["body"];
      });
      break;
    default:
      textArea.value = "Text will appear here...";
      break;
  }
}

// readJson((data) => {
//   textArea.value = data["notes"][0]["body"];
//   console.log(data);
// });

copyButton.addEventListener("click", copyText);
productDropdown.addEventListener("change", productDropdownFunction);
accountRecoveryDisplay.addEventListener(
  "change",
  accountRecoveryDropdownFunction
);
mfaDropdown.addEventListener("change", mfaDropdownFunction);
