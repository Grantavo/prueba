document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.endsWith(".html")) {
    // Redirige a la versión sin la extensión .html
    window.location.href = window.location.pathname.slice(0, -5);
  }
});
