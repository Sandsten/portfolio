import * as React from 'react';
import { useRef } from 'react';
import { Container } from '../../Components/Layout';
import Image from '../../Components/Image/Image';
import ImageRow from '../../Components/ImageRow/ImageRow';
import CodeBox from '../../Components/CodeBox';
import styled from 'styled-components';

import { healthyGamerToAnki, ankiConnectConfig } from '../../CodeSnippets/healthyGamerScrape';
import VideoPlayer from '../../Components/VideoPlayer';
import Link from '../../Components/Link';

// anki-browse-new-cards.webp
// ankiconnect-allow-hg-cors.webp
// ankiconnect-installed-successfully.webp
// glossary-added.webp
// install-ankiconnect.webp
// open-console.webp
// paste-the-js-code.webp
// press-enter-and-wait.webp

const CopyableText = styled.span`
	display: inline-block;
	text-align: center;
	background-color: ${(p) => p.theme.colors.CARD_BG};
	border-radius: 5px;
	padding-top: 1px;
	padding-left: 5px;
	padding-right: 5px;

	:hover {
		cursor: pointer;
	}
`;

const Outline = styled.ol`
	li {
		max-width: 500px;
		:hover {
			cursor: pointer;
			background-color: ${(p) => p.theme.colors.LINK_1};
		}
		span {
			:hover {
				cursor: pointer;
				background-color: ${(p) => p.theme.colors.LINK_1};
			}
		}
	}
`;

export interface IHealthyGamerGlossaryToAnkiProps {}

export function HealthyGamerGlossaryToAnki(props: IHealthyGamerGlossaryToAnkiProps) {
	const scrollContainer = useRef(null);
	const rootImagePath = 'media/images/healthy-gamer-gg-glossary-to-anki';
	const ankiConnectCode = 2055492159;

	function scrollTo(id: string) {
		const section = document.getElementById(id) as HTMLHeadingElement;
		if (scrollContainer.current && section)
			(scrollContainer.current as HTMLDivElement).scrollTo(0, section.offsetTop);
	}

	function copyText(text: string, e: React.MouseEvent) {
		navigator.clipboard.writeText(text).then(() => {
			console.log(e);
			const textElement = e.target as HTMLElement;
			const width = textElement.offsetWidth - 10; // minus 10 to account for padding of 3 on left and right sides
			textElement.innerText = 'Copied!';
			textElement.style.width = `${width.toString()}px`;

			setTimeout(() => {
				(e.target as HTMLElement).innerText = text;
			}, 1500);
		});
	}

	return (
		<Container ref={scrollContainer}>
			<h1>Dr. K's glossary to Anki collection</h1>
			<p>
				In this short post I will go through how I added the entire glossary found at{' '}
				<Link href="https://coaching.healthygamer.gg/guide" text="Dr. K's Guide to Mental Health" />{' '}
				to my Anki collection by running some Javascript in the browser.
			</p>
			<p>
				All you have to do is install the Anki add-on AnkiConnect, add one line to its config file
				and then paste some Javascript in your browser's console.
			</p>
			<h2>Outline</h2>
			<Outline>
				<li onClick={() => scrollTo('1')}>
					<span>Install AnkiConnect</span>
				</li>
				<li onClick={() => scrollTo('2')}>
					<span>Edit AnkiConnect configuration</span>
				</li>
				<li onClick={() => scrollTo('3')}>
					<span>Scrape glossary webpage and add it to your Anki collection</span>
				</li>
				<li onClick={() => scrollTo('4')}>
					<span>Done</span>
				</li>
				<li onClick={() => scrollTo('5')}>
					<span>Too Long Didn't Read Need Video (TLDRNV)</span>
				</li>
			</Outline>
			<h2 id="1">
				1. Install <Link href="https://github.com/FooSoft/anki-connect" text="AnkiConnect" />
			</h2>
			<hr />
			<p>
				AnkiConnect is an extension for Anki which creates a backend with a bunch of functions for
				reading and modifying your Anki collection through HTTP requests. Which allows us to add the
				entire glossary with a single script!
			</p>
			<p>
				Install it by first opening Anki and navigate to the Add-ons page [Tools {'>'} Add-ons {'>'}{' '}
				Get Add-ons]. Enter the code{' '}
				<CopyableText onClick={(e: React.MouseEvent) => copyText(ankiConnectCode.toString(), e)}>
					{ankiConnectCode}
				</CopyableText>{' '}
				and press [OK]. See Figure 1.1.
			</p>
			After the download is complete you have to restart Anki for the add-on to be installed. See
			Figure 1.2.
			<p></p>
			<ImageRow>
				<Image
					imagePath={`${rootImagePath}/install-ankiconnect.webp`}
					figNumber={1.1}
					caption={`[Tools > Add-ons > Get Add-ons]. Paste addon code ${ankiConnectCode} and press [OK] to install.`}
					maxWidth="500px"
				/>
				<Image
					imagePath={`${rootImagePath}/ankiconnect-installed-successfully.webp`}
					figNumber={1.2}
					caption={`Restart Anki after addon has been installed`}
					maxWidth="500px"
				/>
			</ImageRow>
			<h2 id="2">2. Edit AnkiConnect configuration</h2>
			<hr />
			<p>
				AnkiConnect won't accept requests from any sites besides https://localhost by default, to
				avoid any random website you visit tinker with your Anki collection.
			</p>
			<p>
				Since we want to make requests to AnkiConnect when on https://coaching.healthygamer.gg we
				have to tell AnkiConnect that it's a website we trust. You can always revert back once the
				glossary has been added to your collection.
			</p>
			<p>
				To modify AnkiConnect's config you first have to open it as seen in Figure 2.1. Then replace
				the content with the code in Figure 2.2 and press [OK]. The difference from the default one
				is the addition of line #9 which makes AnkiConnect accept requests made from
				https://coaching.healthygamer.gg
			</p>
			<p>There's no need to restart Anki after updating AnkiConnect's config.</p>
			<Image
				imagePath={`${rootImagePath}/ankiconnect-allow-hg-cors.webp`}
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
			<h2 id="3">3. Scrape glossary webpage and add it to your Anki collection</h2>
			<hr />
			<p>
				Navigate to{' '}
				<Link
					href="https://coaching.healthygamer.gg/guide/glossary"
					text="https://coaching.healthygamer.gg/guide/glossary"
				/>
				, open the developer console, paste the code from Figure 3 inside it and press [Enter] to
				execute it.
			</p>
			<CodeBox
				width="1000px"
				code={healthyGamerToAnki}
				languange="javascript"
				caption="Fig 3: Scrapes glossary page for all terms, format them to individual cards accepted by AnkiConnect and sends them to your Anki collection."
			/>
			<Image
				imagePath={`${rootImagePath}/paste-the-js-code.webp`}
				figNumber={3.1}
				caption={`Pressing [F12] or [(right click anywhere on the page) > Inspect > Console] will open the console. Here the code from Figure 3 has been pasted inside it.`}
				maxWidth="1000px"
			/>
			<p>
				After pressing [Enter] you should get a message as seen in Figure 3.2. Your Anki collection
				should also have a new deck as seen in Figure 3.2 as well.
			</p>
			<Image
				imagePath={`${rootImagePath}/press-enter-and-wait.webp`}
				figNumber={3.2}
				caption={`On the left hand side we can see that Anki has received a new deck. And in the browser on the right we get a message telling us how many cards have been added.`}
				maxWidth="1000px"
			/>
			<h3>Scraping details</h3>
			<p>
				To figure out how to scrape the page I opened the browsers inspector and looked at how the
				dom was layed out. In Figure 3.3 we can see that each term is encapsuled in a div with the
				class name "glossary-term". And each glossary-term has two children with the class names
				"title" and "description" respectively. To extract the text, the innerText property can be
				used which gets the visible text on the page within the element it's called on. Lines 36, 39
				and 40 in Figure 3 is doing the work of getting the appropriate elements and their text.
			</p>
			<Image
				imagePath={`${rootImagePath}/glossary-dom.webp`}
				figNumber={3.3}
				caption={`Each glossary-term has two children, title and description. InnerText can be used to get the visible text inside each one.`}
				maxWidth="1000px"
			/>
			<h2 id="4">4. Done</h2>
			<hr />
			<p>
				Happy learning! It's always fun to add something new to your vocabulary, and knowing these
				terms at the top of your head makes following Dr. K's guide a bit smoother.
			</p>
			<p>
				Memorizing terms can be tedious but with Anki a few initial hurdles to keep on practicing
				are wiped of planet earth! As soon as the cards have been added though... which is kinda
				boring if you ask me. Hence why I spent a day figuring out how I could avoid the tedious
				task of doing it manually one by one.
			</p>
			<p>
				The same process can be used on any type of data. The only trick is to format the cards the
				correct way and then make a HTTP request to AnkiConnect. To learn all the functions and
				features available you can go through its{' '}
				<Link href="https://github.com/FooSoft/anki-connect#ankiconnect" text="README on Github." />
			</p>
			<p>
				The only thing which is a bit confusing is that they refer to cards as notes, which messed
				with my mental model for a while.
			</p>
			<h2 id="5">Too Long Didn't Read Need Video (TLDRNV)</h2>
			<hr />
			<VideoPlayer
				src="https://staffansandberg.com/media/video/hg-glossary-to-anki.webm"
				thumbnail=""
				title=""
				maxWidth="800px"
			/>
		</Container>
	);
}
