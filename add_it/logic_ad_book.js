function submitForm() {
    /*
    const form = document.getElementById('json_ad_pepol');
    const formData = new FormData(form);
    

    */
    let requestBody = {
        "collection": "",
        "title": "",
        "author": "",
        "YearPublication": "",
        "who_get_nickname": "",
        "genre": "",
        "cover": ""

    };


    const form = document.getElementById('json_ad_book');
    const formData = new FormData(form);

    //formData.append("name", "Pomegranate");

    
    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
        if(requestBody.hasOwnProperty(pair[0]) && pair[0] != "img"){
            requestBody[pair[0]] = pair[1];
        } //else if trasforma il file img in base 64. stringa.
        
    }
    

      console.log(JSON.stringify(requestBody));
    fetch('http://localhost:8080/books', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        //body: formData,

        headers: {
            'Content-Type': 'application/json'
        }

    })
    .then(response => {
        if (response.ok) {
            alert('book data inviati con successo!');
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

const form = document.getElementById('json_ad_book');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita il comportamento predefinito di invio del form
    console.log('Form inviato correttamente!');
    submitForm(); // Chiama la funzione per inviare il form
});