import * as React from 'react';
import { useEffect } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Container, Paragraph } from '../styledComponents';
import { Image, ImageRow } from '../../Components/Image';
import styled from 'styled-components';

interface CodeContainerProps {
	maxWidth: string;
}
const CodeContainer = styled.div<CodeContainerProps>`
	font-size: 0.9em;
	/* max-width: 1000px; */
	max-width: ${(p) => p.maxWidth};
	button {
		/* width: 100%; */
		:hover {
			cursor: pointer;
		}
	}
`;

export interface IHealthyGamerGlossaryToAnkiProps {}

export function HealthyGamerGlossaryToAnki(props: IHealthyGamerGlossaryToAnkiProps) {
	const rootImagePath = 'healthy-gamer-gg-glossary-to-anki';

	const code2 = `function invoke(action, version, params={}) {
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
  
  const deckName = "Healthy Gamer::Glossary" // Deck name. <parent>::<child>
  const cardType = "Basic"      
  const cards = [];
  
  const createDeck = await invoke('createDeck', 6, {deck: deckName});
  
  const scrapedGlossary = document.querySelectorAll(".glossary-term");
  const glossaryData = {};
  
  // create a js object where each key is the term and the value is the explanation
  for(let i = 0; i < scrapedGlossary.length; i++) {
      let term = scrapedGlossary[i].children[0].innerText;
      let explanation = scrapedGlossary[i].children[1].innerText;
      glossaryData[term] = explanation;
  }
  
  for (key in glossaryData) {
     let card = 
     {
          "deckName": deckName,  // Name of the deck to put the card
          "modelName": cardType, // Type of card to create
          "fields": {            // Set the value of the fields for that specific card type
              "Front": key,
              "Back": glossaryData[key]
          },
          "options": {
              "allowDuplicate": false,     // Allow duplicate cards or not
              "duplicateScope": "deck",    // Scope where duplicates should be checked. If <deck> only check current deck. Any other value will check the entire collection
              "duplicateScopeOptions": { 
                  "deckName": deckName,    // Which deck to check duplicates in
                  "checkChildren": false,  // If child decks should be used to when checking for duplicates
                  "checkAllModels": false  // If checking for duplicates are done across all card types
              }
          }
     };
      cards.push(card);
  }
  
  console.log("Adding glossary to your Anki Collection...");
  await invoke("addNotes", 6, {notes: cards}).then((cardIds) => {
      // Ask user if they want to save the data as a json file too!
      const message = "A new deck with the name " + deckName + " containing " + cardIds.length + " cards has been added to your Anki collection.";
      console.log(message);
      alert(message);
  }).catch(err => {
      console.log(err);
  });`;

	const config = `{
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

	function handleCodeCopyToClipboard(code: string, e: React.MouseEvent) {
		navigator.clipboard.writeText(code);
		const button = e.currentTarget;
		button.textContent = 'Copied to clipboard!';
		setTimeout(() => {
			button.textContent = 'Copy code to clipboard';
		}, 1500);
	}

	return (
		<Container>
			<h2>Dr. K's glossary to Anki collection</h2>
			<Image
				imageName={`${rootImagePath}/anki-browse-new-cards.webp`}
				caption="Fig 1: All glossary terms imported to your Anki collection"
				maxWidth="1000px"
			></Image>
			<CodeContainer maxWidth="800px">
				<button
					onClick={(e) => {
						handleCodeCopyToClipboard(config, e);
					}}
				>
					Copy code to clipboard
				</button>
				<SyntaxHighlighter language="json" style={okaidia} showLineNumbers={true} wrapLines={true}>
					{config}
				</SyntaxHighlighter>
			</CodeContainer>
			<Paragraph>
				Navigate to the glossary, open the console. Copy the code down below and paste it into the
				console over at healthy gamer. Press enter and wait a second or two.
			</Paragraph>
			<CodeContainer maxWidth="auto">
				<button
					onClick={(e) => {
						handleCodeCopyToClipboard(code2, e);
					}}
				>
					Copy code to clipboard
				</button>
				<SyntaxHighlighter
					language="javascript"
					style={okaidia}
					showLineNumbers={true}
					wrapLines={true}
				>
					{code2}
				</SyntaxHighlighter>
			</CodeContainer>
		</Container>
	);
}
