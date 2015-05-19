/**
 * Created by DO on 19.05.2015.
 */

function pruefen(bookForm){

    var form = document.getElementById(bookForm);
    var fehlertext = "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben.";
    var korrekt = false;
    var fehlerspeicher = [];

    //fehlerspeicher leeren
    fehlerspeicher.length = 0;

    //felder auf richtige angaben pruefen
    var titel = form.elements['titel'];
    if (!istBuchstabe(titel.value)) {
        fehlerspeicher.push(titel);
    }

    var autor = form.elements['autor'];
    if (!istBuchstabe(autor.value)) {
        fehlerspeicher.push(autor);
    }

    var isbn = form.elements['isbn'];
    if (!istZahl(isbn.value)) {
        fehlerspeicher.push(isbn);
    }


    var kapitel = form.elements['kapitel'];
    if (!istZahl(kapitel.value)) {
        fehlerspeicher.push(kapitel);
    }

    var jahr = form.elements['jahr'];
    if (!istZahl(jahr.value)) {
        fehlerspeicher.push(jahr);
    }

    var auflage = form.elements['auflage'];
    if (!istZahl(auflage.value)) {
        fehlerspeicher.push(auflage);
    }

    //focus auf den ersten fehler setzen und fehlertext ausgeben
    if (fehlerspeicher.length != 0) {
        //alle fehler rot umranden
        for (i in fehlerspeicher) {
            fehlerspeicher[i].classList.add('fehler');
        }
        fehlerspeicher[0].focus();
        alert(fehlertext);
    }else{
        korrekt = true;
    }

    return korrekt;
}

/**
 * Diese Funktion gibt true zurueck wenn die uebergebene zeichenkette nur aus zahlen besteht
 * und false wenn nicht.
 * @param zahlen
 * @returns {boolean}
 */
function istZahl(zahlen) {
    var ergebnis = zahlen.match("[0-9]{1,}");
    return ergebnis == zahlen;
}

/**
 * Diese Funkion prueft ob die uebergebene zeichenkette NUR aus buchstaben besteht
 * @param buchstaben die uebergebene zeichenkette
 * @returns {boolean}
 */
function istBuchstabe(buchstaben){
    var ergebnis = buchstaben.match("[A-Za-z]{1,}");
    return ergebnis == buchstaben;
}