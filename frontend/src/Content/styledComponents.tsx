import styled from 'styled-components';
import { DESKTOP_XL, DESKTOP_XS } from '../Constants/sizes';

const Container = styled.div`
	overflow-y: scroll;
	padding: 10px 10px 0 10px;

	@media (min-width: ${DESKTOP_XS}) {
		padding: 20px 20px 0 20px;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 50px;
		:first-child {
			margin-top: 0;
		}
	}
`;

const Paragraph = styled.p`
	max-width: 90ch; // 1ch is the width of the "0" character

	// Triggered if the <p> is the first of its kind in its parent
	:first-child {
		margin-top: 0;
	}
`;

const BlogPostCard = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	overflow: hidden;
	padding: 10px;
	margin-bottom: 20px;

	background-color: ${(p) => p.theme.colors.SIDEBAR};

	:hover {
		cursor: pointer;
	}

	.description {
		display: flex;
		flex-direction: column;

		div {
			padding-right: 10px;
		}
	}

	h3 {
		margin-top: 0;
	}

	img {
		border-radius: 10px;
		max-height: 200px;
		margin-right: auto;
	}

	hr {
		width: 100%;
	}

	.metadata {
		display: flex;
		flex-direction: row;
	}

	.date {
		margin-left: auto;
	}

	// When the sidebar moves from top to left
	@media (min-width: ${DESKTOP_XS}) {
		display: inline-flex;
		max-width: 1000px;
	}

	// When the content space becomes a bit larger once the menu is on the left side
	@media (min-width: ${DESKTOP_XL}) {
		.description {
			flex-direction: row;
		}
		img {
			margin-left: auto;
		}
	}
`;

export { Container, Paragraph, BlogPostCard };
