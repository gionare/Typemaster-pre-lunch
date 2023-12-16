document.addEventListener("DOMContentLoaded", function () {

  const h1Element = document.querySelector('h1');

  if (h1Element) {
    h1Element.textContent = h1Element.textContent.toUpperCase();
  }
});
