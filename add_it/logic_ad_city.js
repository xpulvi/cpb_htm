function submitFormCity() {

    let requestBody = {
        "name": "",
        "create_date": "",
        "destroi_date": "",
        "fondatore_city": "",
        "nait": "",
        "pawns_of_nait": "",
        "name_now": ""
    };


    const form = document.getElementById('json_ad_city');
    const formData = new FormData(form);

  /*  
    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
        if(requestBody.hasOwnProperty(pair[0]) && pair[0] != "img"){
            requestBody[pair[0]] = pair[1];
        } //else if trasforma il file img in base 64. stringa.
        
    }

    */
    

      console.log(JSON.stringify(requestBody));
    fetch('http://localhost:8080/city', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        //body: formData,

        headers: {
            'Content-Type': 'application/json'
        }

    })
    .then(response => {
        if (response.ok) {
            alert('Dati city inviati con successo!');
            form.reset(); // Resetta il modulo dopo l'invio
        } else {
            alert('Si è verificato un errore durante l\'invio dei dati.');
        }
    })
    .catch(error => {
        console.error('Si è verificato un errore:', error);
        alert('Si è verificato un errore durante l\'invio dei dati.');
    });
}

const form = document.getElementById('json_ad_city');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita il comportamento predefinito di invio del form
    console.log('Form inviato correttamente!');
    submitFormCity(); // Chiama la funzione per inviare il form
});