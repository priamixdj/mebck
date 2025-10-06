// EmailJS: invio dal form contatti
document.getElementById('contatti_form').addEventListener('submit', function(e) {
    e.preventDefault();
    inviaEmailContatti();
});

function inviaEmailContatti() {
    var nome = document.getElementById('from_name').value;
    var mail = document.getElementById('from_mail').value;
    var messaggio = document.getElementById('messaggio').value;

    var parametri = {
        from_name: nome,
        from_mail: mail,
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
            document.getElementById('contatti_form').reset();
        }, function(error) {
            alert("Errore durante l’invio: " + JSON.stringify(error));
        });
}

// EmailJS: invio dal form principale con geolocalizzazione
document.getElementById('myForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    var luogo = await getLocationString();
    inviaEmailPrincipale(luogo);
});

function inviaEmailPrincipale(luogo) {
    var nome = document.getElementById('nome').value;
    var canzone = document.getElementById('canzone').value;
    var dove = document.getElementById('dove').value;
    var reply = document.getElementById('reply').value || "mix.pria@gmail.com";

    var parametri = {
        nome: nome,
        canzone: canzone,
        dove: dove + " " + luogo,
        reply: reply,
    };

    var conferma = confirm(
        "Sei sicuro di voler inviare i dati? " +
        "\nNome: " + nome +
        ",\nCanzone: " + canzone +
        ",\nDove: " + dove +
        ",\nLuogo: " + luogo
    );

    if (!conferma) {
        alert("Invio annullato.");
        return;
    }

    emailjs.send("service_azwqfrc", "template_9vczhb4", parametri)
        .then(function(response) {
            alert("Mail inviata con successo!");
            document.getElementById('myForm').reset();
        }, function(error) {
            alert("Errore durante l’invio: " + JSON.stringify(error));
        });
}

// Geolocalizzazione e reverse geocoding
async function getLocationString() {
    return new Promise((resolve) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
                    const data = await response.json();
                    const city = data.address.city || data.address.town || data.address.village || '';
                    const country = data.address.country || '';
                    resolve(`${city}, ${country}`);
                } catch (error) {
                    alert("Errore durante il recupero del nome del luogo.");
                    resolve("");
                }
            }, function(error) {
                alert("Permesso negato o errore nel recupero della posizione.");
                resolve("");
            });
        } else {
            alert("Geolocalizzazione non supportata dal browser.");
            resolve("");
        }
    });
}
