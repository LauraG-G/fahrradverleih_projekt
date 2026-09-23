// Das Dateisystem-Modul (fs) von Node.js laden
const fs = require('fs');

// Funktion zum Einlesen und Anzeigen der Daten
function ladeUndZeigeFahrraeder() {
  try {
    // 1. JSON-Datei einlesen (Part 2)
    const rawData = fs.readFileSync('fahrraeder.json', 'utf8');
    const fahrraeder = JSON.parse(rawData);

    console.log("=== FAHRRAD-DATENSÄTZE ===");
    
    // 2. Einzelne Objekte nacheinander ausgeben (Part 3)
    fahrraeder.forEach((fahrrad, index) => {
      console.log(`\nFahrrad #${index + 1}:`);
      console.log(`  ID:            ${fahrrad.fahrrad_id}`);
      console.log(`  Modell:        ${fahrrad.modell}`);
      console.log(`  Farbe:         ${fahrrad.farbe}`);
      console.log(`  Stundenpreis:  ${fahrrad.preis_pro_stunde} €`);
      console.log(`  Tagespreis:    ${fahrrad.preis_pro_tag} €`);
      console.log(`  Status:        ${fahrrad.status}`);
    });

  } catch (error) {
    console.error("Fehler beim Lesen der Datei:", error.message);
  }
}

// Funktion ausführen
ladeUndZeigeFahrraeder();

//yippie geschafft