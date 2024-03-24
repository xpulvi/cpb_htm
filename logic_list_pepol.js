
function searchFunction() {
    // Prendi il valore dalla barra di ricerca
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    ul = document.getElementById('search-results');
    li = ul.getElementsByTagName('li');
  
    // Mostra solo gli elementi che corrispondono alla ricerca
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }

  // ----- roba per il colegamento lista database -----
  async function getElencoPersone() {
    try {   
        const response = await fetch('http://localhost:8080/person/list');
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

 // Chiamare la funzione per ottenere l'elenco delle pesone
 async function popolaSelect(){
  let s = document.getElementById("person-list"); 
  let persone = await getElencoPersone(); 
  console.log(persone); 
  for(let a = 0; a < persone.length; a++){
      let opt = document.createElement("option"); 
      opt.innerText = persone[a].name; 
      s.appendChild(opt); 
  }
  
}

popolaSelect();

// id per la lista dellepersone: person-list