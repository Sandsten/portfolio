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

// Tell AnkiConnect to create a new deck
const deckName = "Healthy Gamer::Glossary" // Deck name. <parent>::<child>
await invoke('createDeck', 6, {deck: deckName});

// Grab all DOM elements with the class "glossary-terms"
// and create a js object where each key is a term and the value is its definition
// NOTE: This part is dependent on how the websites DOM is layed out. 
// If they decide to change it this won't work anymore and has to be tweaked slightly
const scrapedGlossary = document.querySelectorAll(".glossary-term");
const glossaryData = {};
for (let i = 0; i < scrapedGlossary.length; i++) {
  let term = scrapedGlossary[i].children[0].innerText;
  let definition = scrapedGlossary[i].children[1].innerText;
  glossaryData[term] = definition;
}

// Create cards formatted the way AnkiConnect wants it.
// It should be an array of cards
const cards = [];
const cardType = "Basic"     
for (key in glossaryData) {
  let card = 
  {
    "deckName": deckName,  // Name of the deck to put the card in
    "modelName": cardType, // Type of card to create
    "fields": {            // Set the value of the fields for the chosen card type
      "Front": key, // Term
      "Back": glossaryData[key] // Definition
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

console.log("Adding glossary to your Anki Collection...");
await invoke("addNotes", 6, {notes: cards}).then((cardIds) => {
  const message = "A new deck with the name " + deckName + " containing " + cardIds.length + " cards has been added to your Anki collection.";
  console.log(message);
  alert(message);
}).catch(err => {
  console.log(err);
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
