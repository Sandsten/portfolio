import * as React from 'react';
import styled from 'styled-components';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
	base16AteliersulphurpoolLight,
	tomorrow,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useSelector } from 'react-redux';

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
	margin: 1em 0px;

	background-color: ${(p) => p.theme.colors.CARD_BG};
	padding: 10px;

	button {
		position: absolute;
		right: 20px;
		top: 26px;
		visibility: hidden;
		font-size: 2em;
		background-color: ${(p) => p.theme.colors.CARD_BG};

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

interface CodeBoxProps {
	code: string;
	width: string;
	languange: 'javascript' | 'json' | 'yaml';
	caption?: string;
	linesToHighlight?: Array<number>;
}

const CodeBox: React.FC<CodeBoxProps> = (props) => {
	// TODO: Fix correct types
	const theme: any = useSelector<any>((state) => state.config.theme);

	function handleCodeCopyToClipboard(code: string, e: React.MouseEvent) {
		navigator.clipboard.writeText(code);
		const button = e.currentTarget;
		button.textContent = '✅';
		setTimeout(() => {
			button.textContent = '📋';
		}, 1500);
	}

	return (
		<CodeContainer maxWidth={props.width}>
			<button
				onClick={(e) => {
					handleCodeCopyToClipboard(props.code, e);
				}}
			>
				📋
			</button>
			<SyntaxHighlighter
				language={props.languange}
				style={theme.NAME == 'dark' ? tomorrow : base16AteliersulphurpoolLight}
				showLineNumbers={true}
				wrapLines={true}
				lineProps={(lineNumber: number) => {
					const style = { display: 'block', backgroundColor: '' };
					if (props.linesToHighlight?.includes(lineNumber)) {
						style.backgroundColor = '#005D16'; //00FF3C 6B6E5D
					}
					return { style };
				}}
			>
				{props.code}
			</SyntaxHighlighter>

			<em>{props.caption}</em>

		</CodeContainer>
	);
};

export default CodeBox;
