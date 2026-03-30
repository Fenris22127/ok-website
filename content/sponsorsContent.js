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
    "Stadtwerke Wernigerode",
    "Stadtwerke",
    "https://www.stadtwerke-wernigerode.de"
  ),
  new Sponsor(
    "Medienanstalt Sachsen-Anhalt",
    "MSA",
    "https://medienanstalt-sachsen-anhalt.de"
  ),
  new Sponsor(
    "Allianz - Pierre Pubolz",
    "Allianz",
    "https://www.allianz-pubolz.de"
  ),
  new Sponsor(
    "physis",
    "Physis",
    "https://www.physis.online"
  ),
  new Sponsor(
    "Hauskrankenpflege Dori",
    "Dori",
    "https://hauskrankenpflege-dori.de/"
  ),
  /*new Sponsor(
    "LCW Lackierzentrum Wernigerode GmbH",
    "",
    ""
  ),*/
  new Sponsor(
    "Herzenssache Floristik & Dekoration",
    "Herzenssache",
    "https://www.herzenssache-by-andrea.com/"
  ),
  new Sponsor(
    "BWG",
    "BWG",
    "https://www.bwg-blankenburg.de"
  ),
  new Sponsor(
    "Schlossberg Hotel",
    "Schlossberg",
    "https://www.schlossberg-hotel.com"
  ),
  new Sponsor(
    "ERGOwelt-Harz",
    "Ergowelt",
    "https://www.ergowelt-harz.de"
  ),
  new Sponsor(
    "Wilke Glas- und Gebäudereinigung",
    "Wilke",
    "https://www.wilke-gebaeudereinigung.com"
  ),
  new Sponsor(
    "Fliesendesign",
    "Fliesendesign",
    "https://www.fliesenleger-wernigerode.de"
  ),
  new Sponsor(
    "Crime Scene Cleaner Harz",
    "CrimeSceneCleaner",
    "https://www.rettmer-csc-harz.com/"
  ),
  new Sponsor(
    "Auto Service Wasserleben",
    "Auto_Service_Wasserleben",
    "https://www.autoservice-wasserleben.de"
  ),
  new Sponsor(
    "Cyberzone IT-Services",
    "Cyberzone",
    "https://cyberzone24.de/"
  ),
  new Sponsor(
    "Michael Joseph Baustofftransporte",
    "Baustofftransporte",
    "https://www.wernigerode-baustofftransporte.de"
  ),
  new Sponsor(
    "Heimburger Metalnacht Festival",
    "Metalnacht",
    "https://www.heimburgermetalnacht.de/"
  ),
  new Sponsor(
    "Die Autohaus Gruppe",
    "AutohausWernigerode",
    "https://www.die-atuohaus-gruppe.de"
  ),
  new Sponsor(
    "WVG Derenburg",
    "WVG",
    "https://www.wvg-derenburg.de/home.html"
  ),
  new Sponsor(
    "Radwerk",
    "Radwerk",
    "https://www.radwerk-wernigerode.de"
  ),
  new Sponsor(
    "Schreier - Harzer Sattlerei & Polsterei",
    "Schreierharzer",
    ""
  ),
  new Sponsor(
    "Regenbogen Crew Rent&Clean",
    "Regenbogen_Crew_Rent_Clean",
    ""
  ),
  /*new Sponsor(
    "Institut für Stadtmarketing",
    "",
    "https://www.ifs-marketing.de/"
  ),*/
  new Sponsor(
    "Fahrschule Sattler Pelka",
    "Sattler_Pelka",
    "https://www.fahrschule-123.de"
  ),
  /*new Sponsor(
    "Farbrausch Origins",
    "Farbrausch",
    ""
  ),*/
  new Sponsor(
    "Immobilien Impuls",
    "Immobilien_Impuls",
    "www.immobilien-impuls.de"
  ),
  new Sponsor(
    "Brandt Ilsenburg",
    "Brandt",
    "www.immobilien-impuls.de"
  ),
];