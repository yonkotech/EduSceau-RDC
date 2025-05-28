document.querySelector(".reset-p").addEventListener("click", (e) => {
  e.preventDefault();
  popup(
    "mot de passe reinitialise",
    "nous avons envoye un lien de reinitialisation sur votre adresse mail ou numero de telephone."
  );
});
