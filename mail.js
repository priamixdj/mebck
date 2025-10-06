
// confirm("Attenzione! questa pagina utilizza la tua posizione per compilare il form per questioni di sicurezza e evitare spam. Se non vuoi che venga utilizzata la tua posizione, chiudi questa pagina e contatta il proprietario del sito. Per sapere di più, leggi la privacy policy di questo sito.");

// creato con EmailJS
document.getElementById('contatti_form').addEventListener('submit', async function(e) {
    e.preventDefault();
    inviaEmail(); 
});

function inviaEmail() {
    var nome = document.getElementById('from_name').value;
    var mail = document.getElementById('from_mail').value;
    var messaggio = document.getElementById('messaggio').value; // Corretto id da 'messagio' a 'messaggio'

    var parametri = {
        from_name: nome, // EmailJS di solito usa 'from_name'
        from_mail: mail, // EmailJS di solito usa 'from_mail'
        messaggio: messaggio,
    };

    var conferma = confirm(
        "Sei sicuro di voler inviare i dati? " +
        "\nNome: " + nome + 
        ",\nMail: " + mail + 
        ",\nMessaggio: " + messaggio
    );

    if (!conferma) {
        alert("Invio annullato.");
        return;
    }

    emailjs.send("service_zhp30nj", "template_lsxnrrc", parametri)
        .then(function(response) {
            alert("Mail inviata con successo!");
            document.getElementById('contatti_form').reset(); // Pulisce il form dopo l'invio
        }, function(error) {
            alert("Errore durante l’invio: " + JSON.stringify(error));
        });
}
