import * as React from 'react';
import styled from 'styled-components';

export const StyledLinkContainer = styled.span<{ inText: boolean }>`
	margin: ${p => p.inText ? "0px" : "0px 6px 0px 0px"};

	a {
		color: #86A7FC;
		text-decoration: none;
		outline: none;

		:hover {
			cursor: pointer;
			text-decoration: underline;
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
