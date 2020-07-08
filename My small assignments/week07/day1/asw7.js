function myFunction() {
  var boxName = parseInt(document.numbering.boxname.value);

  var btn = document.createElement("div");
  btn.innerHTML = boxName;
  var colorfn = document.coloring.boxcolor.value;

  btn.style.backgroundColor = colorfn;

  document.body.appendChild(btn);
}
