

var roman = {
    "romandata": [
        {
            "autor": "Paulo Coelho",
            "titel": "Der Alchimist",
            "kapitel": 35,
            "buchart": "Taschenbuch",
            "ISBN": 9783257237276,
            "erscheinungsjahr": 1996,
            "auflage": 3
        },
        {
            "autor": "Friedrich Dürrenmatt",
            "titel": "Die Physiker",
            "kapitel": 2,
            "buchart": "Taschenbuch",
            "ISBN": 9783257230475,
            "erscheinungsjahr": 1980,
            "auflage": 7
        },
        {
            "autor": "Hermann Hesse",
            "titel": "Der Steppenwolf",
            "kapitel": 11,
            "buchart": "Taschenbuch",
            "ISBN": 9783518366752,
            "erscheinungsjahr": 1974,
            "auflage": 55
        },
        {
            "autor": "Julia Engelmann",
            "titel": "Eines Tages, Baby",
            "kapitel": 14,
            "buchart": "Taschenbuch",
            "ISBN": 9783442482320,
            "erscheinungsjahr": 2014,
            "auflage": 5
        },
        {
            "autor": "Max Frisch",
            "titel": "Homo faber",
            "kapitel": 2,
            "buchart": "Taschenbuch",
            "ISBN": 9783518368541,
            "erscheinungsjahr": 1977,
            "auflage": 83
        },
        {
            "autor": "Hermann Hesse",
            "titel": "Wer lieben kann, ist glücklich",
            "kapitel": 22,
            "buchart": "Hardcover",
            "ISBN": 9783518033863,
            "erscheinungsjahr": 1986,
            "auflage": 16
        },
        {
            "autor": "Hermann Hesse",
            "titel": "Eigensinn macht Spaß",
            "kapitel": 11,
            "buchart": "Hardcover",
            "ISBN": 9783518035856,
            "erscheinungsjahr": 1986,
            "auflage": 14
        },
        {
            "autor": "Hermann Hesse",
            "titel": "Jedem Anfang wohnt ein Zauber inne",
            "kapitel": 11,
            "buchart": "Hardcover",
            "ISBN": 9783518035849,
            "erscheinungsjahr": 1986,
            "auflage": 20
        },
        {
            "autor": "Noah Gordon",
            "titel": "Der Medicus",
            "kapitel": 7,
            "buchart": "Taschenbuch",
            "ISBN": 9783453503946,
            "erscheinungsjahr": 1996,
            "auflage": 6
        },
        {
            "autor": "Patrick Rothfuss",
            "titel": "The name of the wind",
            "kapitel": 33,
            "buchart": "Taschenbuch",
            "ISBN": 9780575081406,
            "erscheinungsjahr": 2007,
            "auflage": 18
        },
        {
            "autor": "Cornelia Funke",
            "titel": "Tintenblut",
            "kapitel": 30,
            "buchart": "Hardcover",
            "ISBN": 9783791504674,
            "erscheinungsjahr": 2005,
            "auflage": 1
        }
    ]
}

var horror = {
    "horrordata": [
        {
            "autor": "Stephen King",
            "titel": "The Stand - Das letzte Gefecht",
            "kapitel": 36,
            "buchart": "Taschenbuch",
            "ISBN": 9783404134113,
            "erscheinungsjahr": 1992,
            "auflage": 3
        },
        {
            "autor": "Clive Barker",
            "titel": "Imagica ",
            "kapitel": 12,
            "buchart": "Taschenbuch",
            "ISBN": 9783453082069,
            "erscheinungsjahr": 1994,
            "auflage": 1
        },
        {
            "autor": "Clive Barker",
            "titel": "Gyre",
            "kapitel": 25,
            "buchart": "Taschenbuch",
            "ISBN": 9783453071698,
            "erscheinungsjahr": 1994,
            "auflage": 1
        },
        {
            "autor": "Nancy A. Collins",
            "titel": "Wildes Blut",
            "kapitel": 24,
            "buchart": "Hardcover",
            "ISBN": 9783442081172,
            "erscheinungsjahr": 1994,
            "auflage": 1
        },
        {
            "autor": "Dean R. Koontz",
            "titel": "Mitternacht",
            "kapitel": 13,
            "buchart": "Taschenbuch",
            "ISBN": 9783453056602,
            "erscheinungsjahr": 2002,
            "auflage": 1
        },
        {
            "autor": "Stephen King",
            "titel": "Schwarz",
            "kapitel": 36,
            "buchart": "Hardcover",
            "ISBN": 9783453123847,
            "erscheinungsjahr": 2000,
            "auflage": 1
        },
        {
            "autor": "Peter F. Hamilton",
            "titel": "Hannibal",
            "kapitel": 21,
            "buchart": "Hardcover",
            "ISBN": 9783404232345,
            "erscheinungsjahr": 2001,
            "auflage": 11
        }
    ]
}


/**
 * Funktion zum einblenden der Tablle für Horror-Bücher
 */
function tabSwitcherHorror() {
    document.getElementById('horrorContent').style.display="";
    document.getElementById('romanContent').style.display="none";
    document.getElementById('horror_tab').style.backgroundColor="rgb(153,217,234)";
    document.getElementById('roman_tab').style.backgroundColor="rgb(63,72,204)";
}

/**
 * Funktion zum Einblenden der Tabelle für Roman-Bücher.
 */
function tabSwitcherRoman() {
    document.getElementById('romanContent').style.display="";
    document.getElementById('horrorContent').style.display="none";
    document.getElementById('roman_tab').style.backgroundColor="rgb(153,217,234)";
    document.getElementById('horror_tab').style.backgroundColor="rgb(63,72,204)";
}

/**
 * Funktion zum Erstellen der Tabelle für Bücher vom Genre Horror
 * @param object
 */
function renderHorrorTable(object) {

    document.writeln("<table ><tr>");
    document.writeln("<th>Autor</th><th>Titel</th><th>Kapitel</th><th>Art des Buches</th><th>ISBN</th>" +
    "<th>Erscheinungsjahr</th><th>Auflage</th></tr>");
    var classN1 = "roman";

    for(var i = 0; i < horror.horrordata.length; i++) {
        document.writeln("<tr><td>" + horror.horrordata[i].autor + "</td>");
        document.writeln("<td>" + horror.horrordata[i].titel + "</td>");
        document.writeln("<td>" + horror.horrordata[i].kapitel + "</td>");
        document.writeln("<td>" + horror.horrordata[i].buchart + "</td>");
        document.writeln("<td>" + horror.horrordata[i].ISBN + "</td>");
        document.writeln("<td>" + horror.horrordata[i].erscheinungsjahr + "</td>");
        document.writeln("<td>" + horror.horrordata[i].auflage + "</td></tr>");
    }
    document.writeln("</table>");
};

/**
 * Funktion zum Erstellen der Tablle für Bücher vom Genre Roman
 * @param object
 */
function renderRomanTable(object) {

    document.writeln("<table ><tr>");
    document.writeln("<th>Autor</th><th>Titel</th><th>Kapitel</th><th>Art des Buches</th><th>ISBN</th>" +
    "<th>Erscheinungsjahr</th><th>Auflage</th></tr>");

    for(var i = 0; i < roman.romandata.length; i++) {
        document.writeln("<tr><td>" + roman.romandata[i].autor + "</td>");
        document.writeln("<td>" + roman.romandata[i].titel + "</td>");
        document.writeln("<td>" + roman.romandata[i].kapitel + "</td>");
        document.writeln("<td>" + roman.romandata[i].buchart + "</td>");
        document.writeln("<td>" + roman.romandata[i].ISBN + "</td>");
        document.writeln("<td>" + roman.romandata[i].erscheinungsjahr + "</td>");
        document.writeln("<td>" + roman.romandata[i].auflage + "</td></tr>");
    }
    document.writeln("</table>");
}

