
/*
// ----- roba per il colegamento lista database -----
async function getElencoPersone() {
    try {   
        const response = await fetch('http://localhost:8080/person/view/?');
        console.log(response);
        if (!response.ok) {
          throw new Error('Errore nella risposta dell\'API');
        }
        console.log(response);
        const data = await response.json();
        console.log(data); 
        return data; 

    } catch (error) {
      console.log(response);
        console.error('Errore durante la chiamata API:', error.message);
        return null; 
    }
}

*/