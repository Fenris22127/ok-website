/**
 * Class representing a sponsor.
 * @typedef {Object} Sponsor
 * @property {string} name - The name of the sponsor.
 * @property {string} logo - The logo of the sponsor.
 * @property {string} url - The URL of the sponsor.
 */
class Sponsor {
  constructor(name, logo, url) {
    this.name = name;
    this.logo = logo;
    this.url = url;
  }
}

/**
 * An array of sponsors.
 * @type {Sponsor[]}
 */
var sponsorsContent = [
  new Sponsor(
    "Aktion Mensch",
    "Aktion_Mensch",
    "www.aktion-mensch.de"
  ),
  new Sponsor(
    "Harzsparkasse",
    "Harzsparkasse",
    "https://www.harzsparkasse.de"
  ),
  new Sponsor(
    "Stadt Wernigerode",
    "Stadt_Wernigerode",
    "https://www.wernigerode.de"
  ),
  new Sponsor(
    "ÖSA Versicherungen",
    "ösa",
    "https://www.oesa.de"
  ),
  new Sponsor(
    "Stadtwerke Wernigerode",
    "Stadtwerke",
    "https://www.stadtwerke-wernigerode.de"
  ),
  new Sponsor(
    "Medienanstalt Sachsen-Anhalt",
    "MSA",
    "https://medienanstalt-sachsen-anhalt.de"
  ),
];