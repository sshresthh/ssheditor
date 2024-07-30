function insert() {
  let html_code = document.getElementById("html-code").value;
  let css_code = document.getElementById("css-code").value;
  let javascript_code = document.getElementById("javascript-code").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML =
    html_code +
    "<style>" +
    css_code +
    "</style>" +
    "<script>" +
    javascript_code +
    "</script>";
}
