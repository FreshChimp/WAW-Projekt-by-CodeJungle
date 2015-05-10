/**
 * Created by FreshChimp23 on 09.05.15.
 */



// ----------------------------------------------------
// JSON Object for "Roman"
// ----------------------------------------------------
var data = { "romandata" : [
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

var table = document.createElement("table");
function load(data) {
for(var i = 0; i < data.lentgh; i++) {
    // create table row
    var row = document.createElement("tr");

    // create column "Autor"
    var cell = document.createElement("td");
    cell.appendChild(document.createTextNode(data.autor));
    row.appendChild(cell);

    // create column "Titel"
    var cell = document.createElement("td");
    cell.appendChild(document.createTextNode(data.titel));
    row.appendChild(cell);

    // create column "Titel"
    var cell = document.createElement("td");
    cell.appendChild(document.createTextNode(data.kapitel));
    row.appendChild(cell);

    // create column "Titel"
    var cell = document.createElement("td");
    cell.appendChild(document.createTextNode(data.buchart));
    row.appendChild(cell);

    // create column "Titel"
    var cell = document.createElement("td");
    cell.appendChild(document.createTextNode(data.ISBN));
    row.appendChild(cell);

    // create column "Titel"
    var cell = document.createElement("td");
    cell.appendChild(document.createTextNode(data.erscheinungsjahr));
    row.appendChild(cell);

    // create column "Titel"
    var cell = document.createElement("td");
    cell.appendChild(document.createTextNode(data.auflage));
    row.appendChild(cell);

    table.appendChild(row)
}
};

load();