/**
 *
 * This file contains the JavaScript code for the programs page of the website. It handles the loading of job items.
 *
 * It creates the program items dynamically based on the data provided in the programContent.js file.
 *
 * @file program.js
 * @author Elisa Johanna Woelk
 * @version 1.0
 * @date 2025-04-9
 * @since 1.1
 */

/**
 * Function to load program points when the page has loaded.
 */
document.body.onload = function () {
  sortProgramPoints();
  createProgram();
};

/**
 * An array with the names of the days of the week
 */
const dayNames = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

/**
 * Creates headers for each day and adds that days program points below it
 * @returns {void}
 */
function createProgram() {
	var listCopy = programItems.slice(); // Create a copy of the program items array
    var container = document.getElementById("programContainer");
	var unique = [...new Set(listCopy.map(item => item.date.toDateString()))] // Get all unique dates in the list
	
	// Create the program for each day
	for (let i = 0; i < unique.length; i++) {
		var date = new Date(unique[i])

		// Create a header in the format "Day (DD.MM.YY)"
		var title = `${dayNames[date.getDay()]} (${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()})`
		var header = document.createElement("h2");
		header.innerHTML = title
		container.appendChild(header)
		
		// Create a list with only that days program points
		var dayList = listCopy.filter(item => compareDate(item.date, date))
		for (let j = 0; j < dayList.length; j++) {
			addItems(dayList[j])
		}

		// Remove already added items from the list
		listCopy = listCopy.filter(item => !compareDate(item.date, date))
  	}
}

/**
 * Adds the program point to the page
 * @param {ProgramItemSingle} item - The program point to be added
 * @returns {void}
 */
function addItems(item) {
    var container = document.getElementById("programContainer");

    // Create a div element for the program item and add the content
    var program = document.createElement("div");
    program.className = "program_point_grid";
    var start = document.createElement("p");
    start.className = "start"
    var end = document.createElement("p");
    end.className = "end"
    var title = document.createElement("h3");
    title.className = "title"
    var description = document.createElement("p");
    description.className = "description"
    
    // Add the content to the elements
	var fDate = formatTime(item.date)
    start.innerHTML = fDate;
	var endTime = addMinutes(item.date, item.duration)
	fDate = formatTime(endTime)
    end.innerHTML = "- " + fDate;
    title.innerHTML = checkText(item.title);

    // Add the elements to the program item div
    program.appendChild(start);
    program.appendChild(end);
    program.appendChild(title);
    // Add the program item div to the container
    container.appendChild(program);
}

/**
 * Compares two dates (while ignoring the time)
 * @param {Date} date1 - The first date to be compared
 * @param {Date} date2  - The second date to be compared
 * @returns {boolean} - True, if both dates are the same. False, if both dates are not the same.
 */
function compareDate(date1, date2) {
    return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear()
}

/**
 * Formats the time to a string showing only the hour and the minutes
 * @param {Date} time - The time to be formatted
 * @returns {string} - A string showing only the hours and minutes
 */
function formatTime(time) {
	var t = time.toLocaleTimeString().split(":")
	return t[0] + ":" + t[1]
}

/**
 * Adds a given amount of minutes to the passed date
 * @param {Date} date - The date to add minutes to
 * @param {int} minutes - The amount of minutes to be added
 * @returns {Date} - The date with the added minutes
 */
function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}


/**
 * Checks if the time is in the format HH:MM and corrects it if necessary and possible.
 * If the time is invalid, it returns "??:??".
 * @param {string} time The time to check.
 * @returns {string}    The time in the format HH:MM or "??:??" if the time is invalid.
 */
function checkTime(time) {
  //if the time is in the format HH:MM, return time
  if (time.match(/^\d{2}:\d{2}$/)) {
    return time;
  }

  //if time doesn't contain a colon but consists of 4 digits, add a colon in the middle
  if (time.match(/^\d{4}$/)) {
    return time.slice(0, 2) + ":" + time.slice(2, 4);
  }

  //if time contains letters, consists of more than 4 digits, less than 4 digits, is empty or contains special characters, return "??:??"
  return "??:??";
}
