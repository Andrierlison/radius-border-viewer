let code = document.getElementById("code");
let box = document.getElementById("box");
let copyButton = document.getElementById("copy-button");
let hiddenInput = document.getElementById("hidden-input");

code.style.display = "none";

function getInputsValues() {
  let topLeft = document.getElementById("topLeft").value;
  let topRight = document.getElementById("topRight").value;
  let bottomRight = document.getElementById("bottomRight").value;
  let bottomLeft = document.getElementById("bottomLeft").value;
  let boxWidth = document.getElementById("inputWidth").value;
  let boxHeight = document.getElementById("inputHeight").value;

  changeValues(topLeft, topRight, bottomRight, bottomLeft, boxWidth, boxHeight);
}

function changeValues(
  topLeft,
  topRight,
  bottomRight,
  bottomLeft,
  boxWidth,
  boxHeight
) {
  box.style.borderTopLeftRadius = `${topLeft}px`;
  box.style.borderTopRightRadius = `${topRight}px`;
  box.style.borderBottomRightRadius = `${bottomRight}px`;
  box.style.borderBottomLeftRadius = `${bottomLeft}px`;
  box.style.width = `${boxWidth}px`;
  box.style.height = `${boxHeight}px`;

  copyButton.innerText = "Copy";

  showValues(topLeft, topRight, bottomRight, bottomLeft, boxWidth, boxHeight);
}

function showValues(
  topLeft,
  topRight,
  bottomRight,
  bottomLeft,
  boxWidth,
  boxHeight
) {
  code.innerHTML = `
  <p>width: ${boxWidth}px;<br>
  <p>height: ${boxHeight}px;<br>
  <p>border-top-left-radius: ${topLeft}px;</p>
  <p>border-top-right-radius: ${topRight}px;</p>
  <p>border-botton-right-radius: ${bottomRight}px;</p>
  <p>border-botton-left-radius: ${bottomLeft}px;</p>
  `;

  code.value = code;

  code.style.display = "block";
}

function copy() {
  hiddenInput.value = code.innerText;

  let copyText = hiddenInput;

  copyText.select();

  document.execCommand("copy");

  copyButton.innerText = "Copied!";
}

copyButton.addEventListener("click", copy);
