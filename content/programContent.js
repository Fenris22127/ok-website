/**
 * A class representing a program point with all its transmission data.
 * @typedef {Object} ProgramItem
 * @property {string} title - The title of the program point.
 * @property {string} duration - The duration of the program point in minutes
 * @property {string[]} dateTime - An Array of strings indicating when the item will be on the program in the format YYYY-MM-dd - HH:mm
 */
class ProgramItem {
    constructor(title, duration, dateTime) {
        this.title = title
        this.duration = duration
        this.dateTime = dateTime
    }
}

/**
 * A class representing a program point with only a single date and time.
 * @typedef {Object} ProgramItemSingle
 * @property {string} title - The title of the program point.
 * @property {string} duration - The duration of the program point in minutes
 * @property {Date} date - The date and time indicating a time where this item will be on the program
 */
class ProgramItemSingle {
    constructor(title, duration, date) {
        this.title = title
        this.duration = duration
        this.date = date
    }
}

/**
 * The list that will be filled with ProgramItemSingle objects and represents the list of all items in the program for the week.
 */
var programItems = []

/**
 * The list containing all program points.
 */
const items = [
/*    new ProgramItem(
        "Meeting", 
        "30", 
        [
            "2025-06-23 - 10:00",
            "2025-06-24 - 14:00", 
            "2025-06-25 - 12:00",
            "2025-06-27 - 12:00",
        ]
    ),*/
    new ProgramItem(
        "ANMOD - Aktuelles in OKWR", 
        "5", 
        [
            "2026-03-16 - 6:55",
            "2026-03-16 - 21:55",
            "2026-03-17 - 6:55",
        ]
    ),
    new ProgramItem(
        "ANMOD - CampusTV in OKWR", 
        "30", 
        [
            "2026-03-16 - 9:55",
        ]
    ),
    new ProgramItem(
        "ANMOD - Globales in OKWR", 
        "30", 
        [
            "2026-03-16 - 15:55",
        ]
    ),
    new ProgramItem(
        "ANMOD - Regionales in OKWR", 
        "30", 
        [
            "2026-03-16 - 18:55",
        ]
    ),
    new ProgramItem(
        "ANMOD - Jugendprogramm in OKWR", 
        "30", 
        [
            "2026-03-17 - 0:55",
        ]
    ),
    new ProgramItem(
        "Break - Das Infomagazin", 
        "30", 
        [
            "2026-03-16 - 7:00",
            "2026-03-16 - 22:00",
            "2026-03-17 - 7:00",
        ]
    ),
    new ProgramItem(
        "Break - Das Infomagazin WDH", 
        "30", 
        [
            "2026-03-16 - 9:00",
            "2026-03-17 - 0:00",
            "2026-03-17 - 9:00",
        ]
    ),
    new ProgramItem(
        "Deine Heimat Hüttenrode", 
        "60", 
        [
            "2026-03-16 - 8:00",
            "2026-03-16 - 23:00",
            "2026-03-17 - 8:00",
        ]
    ),
    new ProgramItem(
        "Campus TV", 
        "180", 
        [
            "2026-03-16 - 10:00",
        ]
    ),
    new ProgramItem(
        "Karneval 2026 Teil 4", 
        "80", 
        [
            "2026-03-16 - 12:55",
        ]
    ),
    new ProgramItem(
        "2. FBL Herren - Red Devils Wernigerode vs. ESV Ingolstadt Schanzer Ducks", 
        "95", 
        [
            "2026-03-16 - 14:20",
        ]
    ),
    new ProgramItem(
        "In kleiner Runde - Der Medienpodcast", 
        "60", 
        [
            "2026-03-16 - 16:00",
        ]
    ),
    new ProgramItem(
        "Dachboden Revue", 
        "60", 
        [
            "2026-03-16 - 17:00",
        ]
    ),
    new ProgramItem(
        "HomeZone", 
        "30", 
        [
            "2026-03-16 - 18:00",
        ]
    ),
    new ProgramItem(
        "Sucht in der digitalen Welt - Teil 1 Paul", 
        "76", 
        [
            "2026-03-16 - 19:00",
        ]
    ),
    new ProgramItem(
        "Spinnstube - Lokal-Helden-März Ausgabe", 
        "99", 
        [
            "2026-03-16 - 20:16",
        ]
    ),
    new ProgramItem(
        "BRaVE - Magazin - März Ausgabe 2026", 
        "60", 
        [
            "2026-03-17 - 1:00",
        ]
    ),
    new ProgramItem(
        "Go Queer", 
        "30", 
        [
            "2026-03-17 - 2:30",
        ]
    ),
    new ProgramItem(
        "Jugendstil", 
        "30", 
        [
            "2026-03-17 - 3:00",
        ]
    ),
]

/**
 * Sorts the program points in ascending order
 */
function sortProgramPoints() {
    separate()
    programItems.sort((a, b) => {
        return a.date - b.date;
    })
}

/**
 * Separates program points that will be played multiple times this week (and therefore have more than one date) into single items with only a single date and time
 */
function separate() {
    for (let i = 0; i < items.length; i++) { // iterates through the list with all program points
        let pItem = items[i]
        for(let j = 0; j < items[i].dateTime.length; j++) { // iterates through the list of dates & creates a new program point for each date
            var newItem = 
                new ProgramItemSingle(
                    pItem.title,
                    pItem.duration,
                    splitDate(items[i].dateTime[j])
                )
            programItems.push(newItem)
        }
    }
}

/**
 * Separates the date between the date and the time, adds a 0 in front of the hour if necessary and creates a new Date object with the date and time
 * @param {string} dateTime - The string containing the date and time of when the program point will be played
 * @returns {Date} - A date object of when the program point will be played
 */
function splitDate(dateTime) {
    var dTime = dateTime.split(" - ");
    if(dTime[1].split(":")[0].length == 1) {
        dTime[1] = "0" + dTime[1]
    }
    var date = new Date(`${dTime[0]}T${dTime[1]}`);
    return date;
}
