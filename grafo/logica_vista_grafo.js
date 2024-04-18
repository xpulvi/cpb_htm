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

const logic_list_pepol = require('D:\Develop\workSpace\fornt end\cpb_htm\lista_person\logic_list_pepol.js');

function main () {
            
    var graph = Viva.Graph.graph();

    // Construct the graph
    graph.addNode('anvaka', {url : 'https://secure.gravatar.com/avatar/91bad8ceeec43ae303790f8fe238164b'});
    graph.addNode('manunt', {url : 'https://secure.gravatar.com/avatar/c81bfc2cf23958504617dd4fada3afa8'});
    graph.addNode('thlorenz', {url : 'https://secure.gravatar.com/avatar/1c9054d6242bffd5fd25ec652a2b79cc'});
    graph.addNode('bling', {url : 'https://secure.gravatar.com/avatar/24a5b6e62e9a486743a71e0a0a4f71af'});
    graph.addNode('diyan', {url : 'https://secure.gravatar.com/avatar/01bce7702975191fdc402565bd1045a8?'});
    graph.addNode('pocheptsov', {url : 'https://secure.gravatar.com/avatar/13da974fc9716b42f5d62e3c8056c718'});
    graph.addNode('dimapasko', {url : 'https://secure.gravatar.com/avatar/8e587a4232502a9f1ca14e2810e3c3dd'});
    graph.addNode('eva', {url : 'D:\Immagini\icone\edit.svg'});
    graph.addNode('john', {url : ''});

    graph.addLink('anvaka', 'manunt');
    graph.addLink('anvaka', 'thlorenz');
    graph.addLink('anvaka', 'bling');
    graph.addLink('anvaka', 'diyan');
    graph.addLink('anvaka', 'pocheptsov');
    graph.addLink('anvaka', 'dimapasko');
    graph.addLink('anvaka', 'john');

    graph.addLink('john', 'eva');

    // Set custom nodes appearance
    var graphics = Viva.Graph.View.svgGraphics();
    graphics.node(function(node) {
        // The function is called every time renderer needs a ui to display node
        return Viva.Graph.svg('image')
                .attr('width', 24)
                .attr('height', 24)
                .link(node.data.url); // node.data holds custom object passed to graph.addNode();
        })
        .placeNode(function(nodeUI, pos){
            // Shift image to let links go to the center:
            nodeUI.attr('x', pos.x - 12).attr('y', pos.y - 12);
        });

    var renderer = Viva.Graph.View.renderer(graph, {
            graphics : graphics
        });
    renderer.run();

            }