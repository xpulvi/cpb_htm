
// Crea un elemento link
var linkElement = document.createElement("link");

// Imposta gli attributi dell'elemento link
linkElement.rel = "card_stayl";
linkElement.type = "text/css";
linkElement.href = "card_stayl.css"; // Inserisci il percorso del tuo file CSS qui

// Aggiungi l'elemento link al documento head
document.head.appendChild(linkElement + "person-list");


// Dati in formato JSON
var data = {
  "idPerson": "1",
  "name": "John",
  "descriptib_name": "Doe",
  "surname": "Smith",
  "nikename": "Johnny",
  "who_get_nickname": "Friends",
  "age_at_death": "72",
  "first_appears": "1990",
  "work": "Engineer",
  "and_wealthy": "Yes"
};

// Funzione per generare la struttura HTML
function generateCard(data) {
  var cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style.width = "18rem";

  var img = document.createElement("img");
  img.className = "card-img-top";
  img.src = "..."; // Inserisci l'URL dell'immagine qui
  img.alt = "...";

  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  var title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = data.name + " " + data.surname;

  var text = document.createElement("p");
  text.className = "card-text";
  text.textContent = "Nickname: " + data.nikename + "\nAge at death: " + data.age_at_death + "\nWork: " + data.work + "\nWealthy: " + data.and_wealthy;

  var link = document.createElement("a");
  link.href = "#";
  link.className = "btn btn-primary";
  link.textContent = "Go somewhere";

  cardBody.appendChild(title);
  cardBody.appendChild(text);
  cardBody.appendChild(link);

  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBody);

  return cardDiv;
}

// Genera la carta e la aggiunge al documento
var cardContainer = document.getElementById("person-list"); // Assumi che esista un elemento con id "card-container" nel tuo HTML
var card = generateCard(data);
cardContainer.appendChild(card);
