function popup(title, content) {
  const popup = document.createElement("div");
  document.querySelector("body").appendChild(popup);
  popup.classList.add("popup");
  popup.innerHTML = `<div class="popup-content">
            <h2>${title}</h2>
            <p>${content}</p>
        </div>`;

  setTimeout(() => {
    popup.classList.add("show");

    // Fermer automatiquement après 5 secondes
    setTimeout(() => {
      closePopup();
    }, 8000);
  }, 100);

  function closePopup() {
    popup.classList.remove("show");
    // Optionnel: supprimer complètement la popup après l'animation
    setTimeout(() => {
      popup.style.display = "none";
    }, 500);
  }
}
