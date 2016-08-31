// opmerking: Dit is geen mooie code. Ze maakt te veel gebruik van globale variabelen.

var achternaamInput = document.getElementsByName("achternaamInput")[0];
var voornaamInput = document.getElementsByName("voornaamInput")[0];
var accountnameOutput = document.getElementById("accountnameOutput");
var achternaam = "";
var voornaam = "";

achternaamInput.addEventListener("keyup", function() {
    achternaam = achternaamInput.value;
    console.log("Gevonden achternaam: " + achternaam);
    var naam = generateAccountName();
    accountnameOutput.innerHTML = naam;
})

voornaamInput.addEventListener("keyup", function() {
    voornaam = voornaamInput.value;
    console.log("Gevonden voornaam: " + voornaam);
    var naam = generateAccountName();
    accountnameOutput.innerHTML = naam;
})

function generateAccountName() {
    console.log("Generating account naam voor");
    console.log("achternaam: " + achternaam);
    console.log("voornaam: " + voornaam);

    var vn = "";
    var an = "";

    // als er meerdere voornamen zijn, plaatsen we ze tegen elkaar
    voornamen = voornaam.split(" ");
    for(var i=0; i<voornamen.length; i++) {
        vn += voornamen[i];
    }

    // we gebruiken enkel de eerste letters van alle woorden van de achternaam
    achternamen = achternaam.split(" ");
    for(var i=0; i<achternamen.length; i++) {
        an += achternamen[i][0];
    }

    return vn + an + "_immalle";
}
