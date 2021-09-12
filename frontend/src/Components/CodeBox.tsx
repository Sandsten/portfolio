import * as React from 'react';
import styled from 'styled-components';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeContainerProps {
	maxWidth: string;
}

/*
  To position the copy button inside the SyntaxHighlighter i set its parent 
  to position relative and the button to position absolute. This seems to be the easiest way to do it.
  Not sure why parent has to have position relative though.
*/
const CodeContainer = styled.div<CodeContainerProps>`
	position: relative;
	font-size: 0.9em; // True for all children
	max-width: ${(p) => p.maxWidth};

	button {
		position: absolute;
		right: 10px;
		top: 10px;
		visibility: hidden;
		font-size: 1.1em;

		:hover {
			cursor: pointer;
		}
	}

	:hover {
		button {
			visibility: visible;
		}
	}
`;

const Caption = styled.div`
	margin-top: -5px;
	em {
		/* font-size: 0.9em; */
	}
`;

interface CodeBoxProps {
	code: string;
	width: string;
	languange: 'javascript' | 'json';
	caption?: string;
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
			<Caption>
				<em>{props.caption}</em>
			</Caption>
		</CodeContainer>
	);
}

export default CodeBox;
