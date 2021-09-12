import * as React from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router';
import { Container, Paragraph } from '../styledComponents';
import { Image, ImageRow } from '../../Components/Image';
import CodeBox from '../../Components/CodeBox';
import styled from 'styled-components';

import { healthyGamerToAnki, ankiConnectConfig } from './codeSnippets';
import { StyledA } from '../RootPages/homePage';
import { StyledLinkBackground } from '../Projects/mastersThesis';

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
			<h2>Outline</h2>
			<h2 id="1">1. Install AnkiConnect</h2>
			<hr />
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
			<h2 id="2">2. Edit AnkiConnect configuration</h2>
			<hr />
			<Paragraph>
				AnkiConnect won't accept requests from any sites besides https://localhost by default, to
				avoid any random website you visit tinker with your Anki collection.
			</Paragraph>
			<Paragraph>
				Since we want to make requests to AnkiConnect when on https://coaching.healthygamer.gg we
				have to tell AnkiConnect that it's a website we trust. You can always revert back once your
				Anki collection has been updated.
			</Paragraph>
			<Paragraph>
				To modify AnkiConnect's config you first have to open it as seen in Figure 2.1. Then replace
				the content with the code in Figure 2.2 and press [OK]. The difference from the default ones
				is the addition of line #9 which makes AnkiConnect accept requests made from
				https://coaching.healthygamer.gg
			</Paragraph>
			<Image
				imageName={`${rootImagePath}/ankiconnect-allow-hg-cors.webp`}
				figNumber={2.1}
				caption={`Config file with new settings. Open config with [Tools > Add-ons > (AnkiConnect > Config) or (AnkiConnect <double click>)].`}
				maxWidth="700px"
			/>
			<CodeBox
				width="1000px"
				code={ankiConnectConfig}
				languange="json"
				caption="Fig 2.2: AnkiConnect config to allow requests made from https://coaching.healthygamer.gg. Line #9 makes this possible."
				linesToHighlight={[9]}
			/>
			<Paragraph>
				Now Anki is ready to accept requests through AnkiConnect! There's no need to restart Anki
				after updating AnkiConnect's config.
			</Paragraph>
			<h2>3. Scrape glossary webpage and add it to your Anki collection</h2>
			<hr />
			<Paragraph>
				Navigate to{' '}
				<StyledLinkBackground>
					<StyledA href="https://coaching.healthygamer.gg/guide/glossary">
						https://coaching.healthygamer.gg/guide/glossary
					</StyledA>
				</StyledLinkBackground>
				, open the developer console, paste the code from Figure 3 inside it and press [Enter] to
				execute it.
			</Paragraph>

			<CodeBox
				width="1000px"
				code={healthyGamerToAnki}
				languange="javascript"
				caption="Fig 3: Scrapes glossary page for all terms, format them to individual cards accepted by AnkiConnect and sends them to your Anki collection."
			/>

			<Image
				imageName={`${rootImagePath}/paste-the-js-code.webp`}
				figNumber={3.1}
				caption={`Pressing [F12] or [(right click anywhere on the page) > Inspect > Console] will open the console. Here the code from Figure 3 has been pasted inside it.`}
				maxWidth="1000px"
			/>
			<Paragraph>
				After pasting the code press [Enter] on your keyboard and you should get a message as seen
				in Figure 3.3. Your Anki collection should also have a new deck as seen in Figure 3.3 as
				well.
			</Paragraph>
			<Image
				imageName={`${rootImagePath}/press-enter-and-wait.webp`}
				figNumber={3.2}
				caption={`On the left hand side we can see that Anki has received a new deck. And in the browser on the right we get a message telling us how many cards have been added.`}
				maxWidth="1000px"
			/>

			<h2 ref={tldrRef} id="tldr">
				TLDR
			</h2>
		</Container>
	);
}
