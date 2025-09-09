let navegador = navigator.userAgent;
let mensaje = document.getElementById("mensaje");

if (navegador.includes("MSIE") || navegador.includes("Trident")) {
  window.location.href = "http://www.microsoft.com/ie";
} else if (navegador.includes("Firefox")) {
  window.location.href = "http://www.mozilla.com/firefox/";
} else if (navegador.includes("Konqueror")) {
  window.location.href = "http://konqueror.org";
} else {
  mensaje.textContent = "Browser desconocido";
}
