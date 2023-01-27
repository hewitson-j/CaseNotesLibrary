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

//Reads JSON File with note information
function readJson(callback) {
  fetch("/scripts/test.json")
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
      accountRecoveryDropdown.style.display = "block";
      break;
    case "reset-mfa":
      hideCaseDropdowns();
      mfaDropdown.style.display = "block";
      break;
    default:
      hideCaseDropdowns();
      break;
  }
}

readJson((data) => {
  textArea.value = data["notes"][0]["body"];
  console.log(data);
});

copyButton.addEventListener("click", copyText);
productDropdown.addEventListener("change", productDropdownFunction);
