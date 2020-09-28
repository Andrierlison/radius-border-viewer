function toView() {
  let box = document.getElementById("box");

  let topLeft = document.getElementById("topLeft").value;
  box.style.borderTopLeftRadius = `${topLeft}px`;

  let topRight = document.getElementById("topRight").value;
  box.style.borderTopRightRadius = `${topRight}px`;

  let bottomRight = document.getElementById("bottomRight").value;
  box.style.borderBottomRightRadius = `${bottomRight}px`;

  let bottomLeft = document.getElementById("bottomLeft").value;
  box.style.borderBottomLeftRadius = `${bottomLeft}px`;

  document.getElementById(
    "code"
  ).innerHTML = `border-top-left-radius: ${topLeft}px;<br>
  border-top-right-radius: ${topRight}px;<br>
  border-botton-right-radius: ${bottomRight}px;<br>
  border-botton-left-radius: ${bottomLeft}px;`;
}
