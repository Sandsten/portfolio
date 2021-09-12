import * as React from 'react';
import styled from 'styled-components';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeContainerProps {
	maxWidth: string;
}
const CodeContainer = styled.div<CodeContainerProps>`
	position: relative;
	font-size: 0.9em;
	/* max-width: 1000px; */
	:hover {
		button {
			visibility: visible;
		}
	}
	max-width: ${(p) => p.maxWidth};
	button {
		position: absolute;
		right: 10px;
		top: 10px;
		visibility: hidden;
		font-size: 1.1em;

		/* width: 100%; */
		:hover {
			cursor: pointer;
		}
	}
`;

interface CodeBoxProps {
	code: string;
	width: string;
	languange: 'javascript' | 'json';
}
function CodeBox(props: CodeBoxProps) {
	function handleCodeCopyToClipboard(code: string, e: React.MouseEvent) {
		navigator.clipboard.writeText(code);
		const button = e.currentTarget;
		button.textContent = 'Copied to clipboard!';
		setTimeout(() => {
			button.textContent = 'Copy code to clipboard';
		}, 1500);
	}

	return (
		<CodeContainer maxWidth={props.width}>
			<button
				onClick={(e) => {
					handleCodeCopyToClipboard(props.code, e);
				}}
			>
				Copy code to clipboard
			</button>
			<SyntaxHighlighter
				language={props.languange}
				style={okaidia}
				showLineNumbers={true}
				wrapLines={true}
			>
				{props.code}
			</SyntaxHighlighter>
		</CodeContainer>
	);
}

export default CodeBox;
