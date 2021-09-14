export const healthyGamerToAnki = `// Sends http request to AnkiConnect
function invoke(action, version, params={}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
      xhr.addEventListener('error', () => reject('failed to issue request'));
      xhr.addEventListener('load', () => {
        try {
          const response = JSON.parse(xhr.responseText);
          if (Object.getOwnPropertyNames(response).length != 2) {
            throw 'response has an unexpected number of fields';
          }
          if (!response.hasOwnProperty('error')) {
            throw 'response is missing required error field';
          }
          if (!response.hasOwnProperty('result')) {
            throw 'response is missing required result field';
          }
          if (response.error) {
            throw response.error;
          }
          resolve(response.result);
        } catch (e) {
          reject(e);
        }
      });
    xhr.open('POST', 'http://127.0.0.1:8765');
    xhr.send(JSON.stringify({action, version, params}));
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

const deckName = "Healthy Gamer::Glossary" // Deck name. <parent>::<child>
invoke('createDeck', 6, {deck: deckName}).then((deck) => {
  // Get all the glossary terms, deck name has to be passed to format each card correctly
  const cards = getCardsInAnkiConnectFormat(deckName);
  // Add all the notes if we successfully created the deck
  return invoke("addNotes", 6, {notes: cards});
}).then((cardIds) => {
  const message = "A new deck with the name " + deckName + " containing " + cardIds.length 
      + " cards has been added to your Anki collection.";
  console.log(message);
  alert(message);
}).catch(err => {
  console.log(err);
  alert("Could not add the glossary to your collection, see console for more details");
});`;

export const ankiConnectConfig = `{
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
