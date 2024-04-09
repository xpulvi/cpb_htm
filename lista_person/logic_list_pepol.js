
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
  const userCardsContainer = document.getElementById('person-list');

  // Itera sugli utenti e crea una card per ognuno
  persone.map(user => {
    const card = document.createElement('div');
    card.classList.add('card');

    const fullName = `${user.name} ${user.surname}`;
    const nickname = user.who_get_nickname ? `(${user.who_get_nickname})` : '';
    const age = user.age_at_death === 1000 ? '∞' : user.age_at_death; // "∞" per indicare età infinita
    // non tocare gli ` apici
    card.innerHTML = `
    
      <center> <img src="/imeg/icons8-user-96.png" alt="" width="90" height="100"> </center>
      <h2>${fullName}</h2>
      <p><strong>Description:</strong> ${user.descriptib_name}</p>
      <p><strong>Nickname:</strong> ${user.nickname} ${nickname}</p>
      <p><strong>Age at Death:</strong> ${age}</p>
      <p><strong>Work:</strong> ${user.work}</p>
      <p><strong>Wealthy:</strong> ${user.and_wealthy}</p>
      <a href="/profilo_personagio/profilo.html" class="btn btn-primary">See Profile</a>
    `;

    userCardsContainer.appendChild(card);
  });
    
  }

  popolaSelect();

  // id per la lista dellepersone: person-list