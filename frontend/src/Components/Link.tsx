import * as React from 'react';
import styled from 'styled-components';

import { DARK_THEME, LIGHT_THEME } from '../Constants/colors';

export const StyledLinkContainer = styled.span<{ inText: boolean }>`
	/* background-color: ${(p) => p.theme.colors.CARD_BG}; */
	border-radius: 5px;
	
	margin: ${p => p.inText ? "0px" : "0px 6px 0px 0px"};
	
	padding-top: 1px;
	padding-bottom: 1px;

	a {
		text-decoration: none;
		outline: none;

		background: -webkit-linear-gradient(${DARK_THEME.LINK_1}, ${DARK_THEME.LINK_2});
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		background-color: black;
		padding: 5px;
		border-radius: 10px;

		:hover {
			background: -webkit-linear-gradient(${DARK_THEME.LINK_2}, ${DARK_THEME.LINK_1});
			cursor: pointer;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
`;

interface Props {
	href: string;
	text: string;
	inText?: boolean;
}
const Link = (props: Props) => {
	const { inText = true } = props;
	return (
		<StyledLinkContainer inText={inText}>
			<a href={props.href}>{props.text}</a>
		</StyledLinkContainer>
	);
};

export default Link;
