function generateCardHtml() {
    // Crea gli elementi HTML
    const container = document.createElement('div');
    const heading = document.createElement('h2');
    const paragraph = document.createElement('p');
    const card = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h4');
    const cardText = document.createElement('p');
    const cardLink = document.createElement('a');
  
    // Imposta le classi e gli attributi degli elementi
    container.className = 'container mt-3';
    heading.textContent = 'Card Image';
    paragraph.textContent = 'Image at the top (card-img-top):';
    card.className = 'card';
    card.style.width = '400px';
    cardImage.className = 'card-img-top';
    cardImage.src = '../bootstrap4/img_avatar1.png';
    cardImage.alt = 'Card image';
    cardImage.style.width = '100%';
    cardBody.className = 'card-body';
    cardTitle.className = 'card-title';
    cardTitle.textContent = 'John Doe';
    cardText.className = 'card-text';
    cardText.textContent = 'Some example text some example text. John Doe is an architect and engineer';
    cardLink.className = 'btn btn-primary';
    cardLink.href = '#';
    cardLink.textContent = 'See Profile';
  
    // Aggiungi gli elementi al DOM
    container.appendChild(heading);
    container.appendChild(paragraph);
    container.appendChild(card);
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
  
    return container;
  }
  
  // Ottieni il riferimento all'elemento del DOM dove vuoi inserire la card
const cardContainer = document.getElementById('person-list');
// Genera la card HTML utilizzando la funzione e aggiungila al contenitore
cardContainer.appendChild(generateCardHtml());