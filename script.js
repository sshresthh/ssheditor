function update() {
  let html_code = document.getElementById("html-code").value;
  let css_code = document.getElementById("css-code").value;
  let javascript_code = document.getElementById("javascript-code").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML = html_code + "<style>" + css_code + "</style>";
  output.contentWindow.eval(javascript_code);
}

document.getElementById("html-code").addEventListener("input", update);
document.getElementById("css-code").addEventListener("input", update);
document.getElementById("javascript-code").addEventListener("input", update);

update();
