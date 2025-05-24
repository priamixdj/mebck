
document.getElementById('myForm').addEventListener('submit', function(e) {
e.preventDefault();  // blocca il submit normale (rinfresco)

inviaEmail();
});

function inviaEmail() {
    console.log("Invio email...");
    var nome = document.getElementById('nome').value;
    var canzone = document.getElementById('canzone').value;
    var dove = document.getElementById('dove').value;

    var parametri = {
        nome: nome,
        canzone: canzone,
        dove: dove
    };

    conferma = confirm("Sei sicuro di voler inviare i dati? " + "Nome: " + nome + ", Canzone: " + canzone + ", Dove: " + dove);

    if(!conferma) {
        alert("Invio annullato.");
        return;
    }

    emailjs.send("service_azwqfrc", "template_9vczhb4", parametri)
        .then(function(response) {
            alert("Mail inviata con successo!");
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert("Errore durante l’invio: " + JSON.stringify(error));
            console.log('FAILED...', error);
    });
}
