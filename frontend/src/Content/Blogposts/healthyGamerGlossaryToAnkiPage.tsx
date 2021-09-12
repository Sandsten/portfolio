import * as React from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router';
import { Container, Paragraph } from '../styledComponents';
import { Image, ImageRow } from '../../Components/Image';
import CodeBox from '../../Components/CodeBox';
import styled from 'styled-components';

import { healthyGamerToAnki, ankiConnectConfig } from './codeSnippets';

// anki-browse-new-cards.webp
// ankiconnect-allow-hg-cors.webp
// ankiconnect-installed-successfully.webp
// glossary-added.webp
// install-ankiconnect.webp
// open-console.webp
// paste-the-js-code.webp
// press-enter-and-wait.webp

export interface IHealthyGamerGlossaryToAnkiProps {}

export function HealthyGamerGlossaryToAnki(props: IHealthyGamerGlossaryToAnkiProps) {
	const history = useHistory();
	const tldrRef = useRef(null);
	const scrollContainer = useRef(null);
	const rootImagePath = 'healthy-gamer-gg-glossary-to-anki';
	const ankiConnectCode = 2055492159;

	function scrollToTLDR() {
		if (tldrRef.current) {
			const section = tldrRef.current as HTMLHeadingElement;
			if (scrollContainer.current)
				(scrollContainer.current as HTMLDivElement).scrollTo(0, section.offsetTop);
		}
	}

	return (
		<Container ref={scrollContainer}>
			<h2>Dr. K's glossary to Anki collection</h2>
			<button onClick={scrollToTLDR}>TLDR</button>
			<h3>Outline</h3>
			<h3 id="1">1. Install AnkiConnect</h3>
			<Paragraph>
				AnkiConnect is an extension for Anki which creates a backend with a bunch of functions for
				reading and modifying your Anki collection through HTTP requests.
			</Paragraph>
			<ImageRow>
				<Image
					imageName={`${rootImagePath}/install-ankiconnect.webp`}
					figNumber={1.1}
					caption={`[Tools > Add-ons > Get Add-ons]. Paste addon code ${ankiConnectCode} and press [OK] to install.`}
					maxWidth="500px"
				/>
				<Image
					imageName={`${rootImagePath}/ankiconnect-installed-successfully.webp`}
					figNumber={1.2}
					caption={`Restart Anki after addon has been installed`}
					maxWidth="500px"
				/>
			</ImageRow>
			<h3 id="2">2. Edit AnkiConnect configuration</h3>
			<Paragraph>
				AnkiConnect won't accept requests from any sites besides https://localhost by default, to
				avoid any random website you visit tinker with your Anki collection.
			</Paragraph>
			<Image
				imageName={`${rootImagePath}/ankiconnect-allow-hg-cors.webp`}
				figNumber={2.1}
				caption={`[Tools > Add-ons > (AnkiConnect > Config) or (AnkiConnect <double click>)`}
				maxWidth="700px"
			/>
			<CodeBox
				width="1000px"
				code={ankiConnectConfig}
				languange="json"
				caption="Fig 2.2: AnkiConnect config to allow requests from https://coaching.healthygamer.gg"
			/>
			<h3>3. Javascript code to scrape and add cards to your collection</h3>
			{/* <Image
				imageName={`${rootImagePath}/anki-browse-new-cards.webp`}
				figNumber={2}
				caption="All glossary terms imported to your Anki collection"
				maxWidth="1000px"
			/> */}
			<Paragraph>
				Navigate to the glossary, open the console. Copy the code down below and paste it into the
				console over at healthy gamer. Press enter and wait a second or two.
			</Paragraph>
			<CodeBox
				width="1000px"
				code={healthyGamerToAnki}
				languange="javascript"
				caption="Fig 3: Scrapes glossary page for all terms, format them to individual cards accepted by AnkiConnect and sends them to your Anki collection."
			/>
			<Paragraph>Hej hej</Paragraph>
			<h3 ref={tldrRef} id="tldr">
				TLDR
			</h3>
		</Container>
	);
}
