function submitForm() {
    const form = document.getElementById('json_ad_pepol');
    const formData = new FormData(form);

    console.log(formData); 
    fetch('http://localhost:8080/person/insert', {
        method: 'POST',
        body: JSON.stringify({
            "name":name,
            "descriptib_name":descriptib_name,
            "surname":surname,
            "nikename":nikename,
            "who_get_nickname":who_get_nickname,
            "work":work,
            "and_wealthy":and_wealthy,
            "age_at_death":age_at_death,
            "first_appears":first_appears,
            "img":img
        }),
        headers: {
            'Content-Type': 'application/json'
        }

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