
function validate() {
    var form = document.forms[0];
    var error = false;


    with(document) {
        // Autor Kontrolle
        var regText = /^[\w ]+$/;
        if(!regText.test(getElementById("autor").value)) {
            getElementById("titel").style.borderColor = "red";
            getElementById("titel").value = "";
            getElementById("titel").focus();
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben");
            error = true;
        }

        // ISBN Kontrolle
        var regIsbn = /^[0-9]+$/;
        if(!regIsbn.test(getElementById("isbn").value.length > 13 || !reg.test(getElementById("isbn").value))) {
            getElementById("isbn").style.borderColor = "red";
            getElementById("isbn").value = "";
            getElementById("isbn").focus();
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben");
            error = true;
        }
        // Kapitel Kontrolle
        var regKapitel = /^[0-9]+$/;
        if(!regKapitel.test(getElementById("kapitel").value || getElementById("kapitel").value.lentgh != 1)) {
            getElementById("kapitel").style.borderColor = "red";
            getElementById("kapitel").value = "";
            getElementById("kapitel").focus();
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben");
            error = true;
        }
        // Jahr Kontrolle
        var regJahr = /^[0-9]+$/;
        if(!reg.test(getElementById("jahr").value) || getElementById("jahr").value.length != 4) {
            getElementById("jahr").style.borderColor = "red";
            getElementById("jahr").value = "";
            getElementById("jahr").focus();
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben");
            error = true;
        }
        // Auflage Kontrolle
        var regAuflage = /^[0-9]+$/);
        if(!reg.test(getElementById("auflage").value || getElementById("auflage").value.length != 1)) {
            getElementById("auflage").style.borderColor = "red";
            getElementById("auflage").value = "";
            getElementById("auflage").focus();
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben");
            error = true;
        }
        // Vorname Kontrolle
        if(!regText.test(getElementById("vorname").value)) {
            getElementById("vorname").style.borderColor = "red";
            getElementById("vorname").value = "";
            getElementById("vorname").focus();
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben");
            error = true;
        }
        // Nachname Kontrolle
        if(!regText.test(getElementById("name").value)) {
            getElementById("name").style.borderColor = "red";
            getElementById("name").value = "";
            getElementById("name").focus();
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben");
            error = true;
        }
    }
    if(!error) {
        error = false;
        form.action = "http://martinakraus.net/createBookEntry.php";
        form.submit();
    }
};