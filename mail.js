
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


// creato con EmailJS
document.getElementById('myForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    var luogo = await getLocationString();  
    console.log("Luogo rilevato:", luogo);
    inviaEmail(luogo); 
});


function inviaEmail(luogo) {
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

    var conferma = confirm("Sei sicuro di voler inviare i dati? " +
        "\nNome: " + nome + 
        ",\nCanzone: " + canzone + 
        ",\nDove: " + dove + 
        ",\nLuogo: " + luogo);

    if (!conferma) {
        alert("Invio annullato.");
        return;
    }

    emailjs.send("service_zhp30nj", "template_lsxnrrc", parametri)
        .then(function(response) {
            alert("Mail inviata con successo!");
            document.getElementById('contatti_form').reset(); // Pulisce il form dopo l'invio

    emailjs.send("service_azwqfrc", "template_9vczhb4", parametri)
        .then(function(response) {
            alert("Mail inviata con successo!");

        }, function(error) {
            alert("Errore durante l’invio: " + JSON.stringify(error));
        });
}


// function inviaEmail() {
//     console.log("Invio email...");
//     var nome = document.getElementById('nome').value;
//     var canzone = document.getElementById('canzone').value;
//     var dove = document.getElementById('dove').value;
//     var reply = document.getElementById('reply').value;

//     if(reply == "") reply = "mix.pria@gmail.com";

//     var parametri = {
//         nome: nome,
//         canzone: canzone,
//         dove: dove,
//         reply: reply + getLocationAndSubmit()
//     };

//     conferma = confirm("Sei sicuro di voler inviare i dati? " + "\nNome: " + nome + ",\nCanzone: " + canzone + ",\nDove: " + dove);

//     if(!conferma) {
//         alert("Invio annullato.");
//         return;
//     }

//     emailjs.send("service_azwqfrc", "template_9vczhb4", parametri)
//         .then(function(response) {
//             alert("Mail inviata con successo!");
//             console.log('SUCCESS!', response.status, response.text);
//         }, function(error) {
//             alert("Errore durante l’invio: " + JSON.stringify(error));
//             console.log('FAILED...', error);
//     });

// }



// geolocalizzazione 
// async function getLocationAndSubmit() {
//     if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(async function(position) {
//         const lat = position.coords.latitude;
//         const lon = position.coords.longitude;

//         // Inserisci le coordinate
//         document.getElementById('latitude').value = lat;
//         document.getElementById('longitude').value = lon;

//         // Chiamata a Nominatim (OpenStreetMap) per il reverse geocoding
//         try {
//         const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
//         const data = await response.json();

//         const city = data.address.city || data.address.town || data.address.village || '';
//         const country = data.address.country || '';

//         // Inserisci i dati nel form
//         document.getElementById('city').value = city;
//         document.getElementById('country').value = country;

//         alert(`Posizione trovata: ${city}, ${country}`);

//         // Invia il form
//         document.getElementById('locationForm').submit();

//         } catch (error) {
//         alert("Errore durante il recupero del nome del luogo.");
//         }

//     }, function(error) {
//         alert("Permesso negato o errore nel recupero della posizione.");
//     });
//     } else {
//     alert("Geolocalizzazione non supportata dal browser.");
//     }

//     return city + ", " + country;
// }