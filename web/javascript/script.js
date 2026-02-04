const data = {
  akce1: {
    title: "Společné čtení",
    description: "Velmi specifická akce."
  },
  akce2: {
    title: "Dětské mluvení",
    description: "Kurz zaměřený na děti."
  }

};

function showDetail(id) {
  document.getElementById("detail-title").textContent = data[id].title;
  document.getElementById("detail-description").textContent = data[id].description;

  document.getElementById("detail").classList.remove("hidden");
}

function prihlasitSe() {
  alert("Přihlášení proběhlo (zatím jenom ukázka)");
}