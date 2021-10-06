export const healthyGamerToAnki = /*javascript*/ `// Sends http request to AnkiConnect
function ankiConnectAction(action, version, params={}) {
  return fetch('http://127.0.0.1:8765',{
    method: "POST",
    body: JSON.stringify({action, version, params}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Error:', error);
  });
}

// Scrapes the glossary page for terms and definitions. 
// Returns an array with the cards formatted the way AnkiConnect wants it.
// NOTE: This part is dependent on how the websites DOM is layed out. If they decide to change it this won't work anymore and has to be tweaked slightly
function getCardsInAnkiConnectFormat(deckName) {
  // Grab all DOM elements with the class "glossary-terms"
  const glossaryDOMElements = document.querySelectorAll(".glossary-term");
  const cards = [];
  for (let i = 0; i < glossaryDOMElements.length; i++) {
    const term = glossaryDOMElements[i].children[0].innerText;
    const definition = glossaryDOMElements[i].children[1].innerText;
    const card = 
    {
      "deckName": deckName,  // Name of the deck to put the card in
      "modelName": "Basic", // Type of card to create
      "fields": {            // Set the value of the fields for the chosen card type
        "Front": term,
        "Back": definition
      },
      "options": {
        "allowDuplicate": false,     // Allow duplicate cards or not
        "duplicateScope": "deck",    // If "deck", only check current deck for duplicates. Any other value will result in checking the entire collection
        "duplicateScopeOptions": { 
          "deckName": deckName,      // Which deck to check duplicates in
          "checkChildren": false,    // If child decks should be used to when checking for duplicates
          "checkAllModels": false    // If checking for duplicates are done across all card types
        }
      }
    };
    cards.push(card);
  }
  return cards;
}

async function main() {
  const deckName = "Healthy Gamer::Glossary" // Deck name. <parent>::<child>
  const cards = getCardsInAnkiConnectFormat(deckName);

  try {
    const createDeck = await ankiConnectAction('createDeck', 6, {deck: deckName});
    const addCards = await ankiConnectAction("addNotes", 6, {notes: cards});
  
    const message = "A new deck with the name " + deckName + " containing " + 
                    addCards.result.length + " cards has been added to your Anki collection.";
    alert(message);
  } catch(e) {
    console.error(e);
  }
}

main();`;

export const ankiConnectConfig = /*javascript*/ `{
  "apiKey": null,
  "apiLogPath": null,
  "ignoreOriginList": [],
  "webBindAddress": "127.0.0.1",
  "webBindPort": 8765,
  "webCorsOriginList": [
    "http://localhost",
    "https://coaching.healthygamer.gg"
  ]
}`;
