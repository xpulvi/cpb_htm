function submitForm() {
    const form = document.getElementById('json_ad_pepol');
    const formData = new FormData(form);

    fetch('http://localhost:8080/person/insert', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Dati inviati con successo!');
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