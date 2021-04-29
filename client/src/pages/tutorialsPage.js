import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTutorialsPage = styled.div`
	display: grid;
	grid-column-gap: 30px;

	padding: 20px 10px 10px 10px;
`;

const StyledIframe = styled.iframe`
	justify-self: center;
`;
const StyledInfo = styled.div``;

const TutorialsPage = (props) => {
	const [width, setWidth] = useState(360 * 2);
	const [height, setHeight] = useState(null);

	useEffect(() => {
		setHeight(width / 1.8);
	});

	const videos = [
		'https://www.youtube.com/embed/uP1u2lYN3DQ',
		'https://www.youtube.com/embed/D3Ls3jAgcwM',
	];

	return (
		<StyledTutorialsPage>
			<StyledInfo>
				Sometimes when I come across an annoyance and manage to find a solution for it. I get the
				feeling there's probably someone else out there with the same little annoyance. When that
				feeling strikes me I tend to make a video tutorial on how I went about solving it.{' '}
			</StyledInfo>
			{videos.map((url) => {
				return <StyledIframe width={width} height={height} src={url} />;
			})}
		</StyledTutorialsPage>
	);
};

export default TutorialsPage;
