// geting pin
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";

  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

// generating pin
const generatePin = () => {
  const pin = getPin();
  document.getElementById("generate-pin-input").value = pin;
};

// keypad functionality
document.getElementById("key-pad").addEventListener("click", (event) => {
  const clickedKey = event.target.innerText;
  const keyNumbersInputTag = document.getElementById("key-pad-input");
  const keyNumbers = keyNumbersInputTag.value;

  if (isNaN(clickedKey)) {
    if (clickedKey == "C") {
      keyNumbersInputTag.value = "";
    } else if (clickedKey == "<") {
      keyNumbersInputTag.value = keyNumbers.slice(0, -1);
    }
  } else {
    const totalKeyCount = keyNumbers + clickedKey;
    keyNumbersInputTag.value = totalKeyCount;
  }
});
// matching pin
let count = 0;

const submitMatch = () => {
  const pinNumberInputTag = document.getElementById("generate-pin-input").value;
  const keyPadInputTag = document.getElementById("key-pad-input").value;
  const notifySuccess = document.getElementById("notify-success");
  const notifyFail = document.getElementById("notify-fail");

  if (pinNumberInputTag == keyPadInputTag && pinNumberInputTag !== "") {
    notifySuccess.style.display = "block";
    notifyFail.style.display = "none";
  } else if (pinNumberInputTag === "" || keyPadInputTag === "") {
    notifyFail.style.display = "block";
  } else {
    notifySuccess.style.display = "none";
    notifyFail.style.display = "block";
  }
};
