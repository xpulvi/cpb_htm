// codice ripetuto coregere. il prima posibile -----------------------
// ----- roba per il colegamento lista database -----
/*
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
      // non tocare gli ` apici
      card.innerHTML = `
        <h2>${fullName}</h2>
        <p><strong>Description:</strong> ${user.descriptib_name}</p>
        <p><strong>Nickname:</strong> ${user.nickname} ${nickname}</p>
        
      `;
  
      userCardsContainer.appendChild(card);
    });
      
    }
    */

// fine codice ripetuto.  ----------------------------------------------

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

async function main () {



  const myPersons = await getElencoPersone();
  console.log(myPersons)
            
    var graph = Viva.Graph.graph();

    // Construct the graph
    //graph.addNode(getElencoPersone())
    myPersons.forEach(element => {
      graph.addNode(element.idPerson, {label: element.idPerson, url : 'https://secure.gravatar.com/avatar/91bad8ceeec43ae303790f8fe238164b'});
    });
    
    // Set custom nodes appearance
    var graphics = Viva.Graph.View.svgGraphics();
    
    graphics.node(function(node) {
        // The function is called every time renderer needs a ui to display node
        var ui = Viva.Graph.svg('g');
        let imgG = Viva.Graph.svg('image')
                .attr('width', 24)
                .attr('height', 24)
                .link(node.data.url); // node.data holds custom object passed to graph.addNode();
        let textG = Viva.Graph.svg('text').attr('y', '-4').text(node.data.label)

        ui.append(imgG)
                ui.append(textG)
                return ui
              })
        .placeNode(function(nodeUI, pos){
            // Shift image to let links go to the center:
            //nodeUI.attr('x', pos.x - 12).attr('y', pos.y - 12);
            nodeUI.attr('transform',
            'translate(' +
                  (pos.x - 12) + ',' + (pos.y - 12) +
            ')');
        });

    var renderer = Viva.Graph.View.renderer(graph, {
            graphics : graphics
        });
    renderer.run();

            }