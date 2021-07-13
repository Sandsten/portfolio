import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { BASE2, BASE03, BASE2_SATURATED, BLUE, YELLOW } from '../constants/colors';
import { DESKTOP_XS } from '../constants/sizes';
import { toggleTheme } from '../redux-toolkit/slices/siteConfigSlice';

import { DARK_THEME } from '../constants/colors';

const StyledSidebar = styled.div`
	display: grid;
	grid-template-areas:
		'name options'
		'nav options';
	grid-template-columns: 1fr auto;

	padding: 10px;
	margin-bottom: 2px;

	background-color: ${(props) =>
		props.theme.main === 'LIGHT' ? BASE2_SATURATED : DARK_THEME.SIDEBAR};

	@media (min-width: ${DESKTOP_XS}) {
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			'name'
			'nav'
			'options';
		height: 100vh;
		padding: 20px;
	}
`;

const Name = styled.div`
	grid-area: name;
	font-size: 1.7em;
	margin-bottom: 5px;

	/* Gradient effect */
	background: -webkit-linear-gradient(#b58900, #00adb5);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

  :hover {
    cursor: pointer;
  }

	@media (min-width: ${DESKTOP_XS}) {
		font-size: 2.5em;
		margin-bottom: 20px;
	}
`;

export const StyledLink = styled(Link)`
	font-size: 1.2em;
	margin-bottom: 5px;
	margin-right: 20px;
	text-decoration: none;
	outline: none;
	color: ${(props) => (props.theme.main === 'LIGHT' ? BASE03 : BASE2)};

	:hover {
		text-decoration: underline;
	}
`;

const SidebarLink = styled(StyledLink)`
	/* Keep the button highlighted when de-focused or page refreshes */
	${(props) =>
		props.path === props.to &&
		css`
			color: ${BLUE};
		`}

	@media (min-width: ${DESKTOP_XS}) {
		display: block;
		margin-bottom: 20px;
	}
`;

const ThemeButton = ({className, width, height, handleClick }) => {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={width}
			height={height}
			viewBox="0 0 24 24"
			onClick={handleClick}
		>
			<defs>
				<path id="a" d="M0 0h24v24H0V0z" />
			</defs>
			<clipPath id="b">
				<use xlinkHref="#a" overflow="visible" />
			</clipPath>
			<path
				d="M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z"
				clipPath="url(#b)"
			/>
		</svg>
	);
};

const StyledThemeButton = styled(ThemeButton)`
	grid-area: options;
	align-self: center;
	fill: ${(props) => (props.theme.main === 'LIGHT' ? BASE03 : BASE2_SATURATED)};

	:hover {
		cursor: pointer;
		fill: ${(props) => (props.theme.main === 'LIGHT' ? 'black' : YELLOW)};
	}

	@media (min-width: ${DESKTOP_XS}) {
		position: absolute;
		width: 100px;
		height: 100px;
		bottom: 75px;
		left: 75px;
	}
`;

const Sidebar = (props) => {
	const [urlPath, setUrlPath] = useState("");
  const history = useHistory();
  const handleNavHome = () => history.push('/');
	const dispatch = useDispatch();

	useEffect(() => {
		setUrlPath(props.location.pathname);
	});

	const handleThemeToggle = () => {
		// Updating the theme for the site is handled inside the top level component App.jsx
		dispatch(toggleTheme());
	};

	return (
		<StyledSidebar>
      <Name onClick={handleNavHome}>
        Staffan Sandberg
      </Name>
			<span>
				{[
					['/', 'About'],
					['/projects', 'Projects'],
					['/tutorials', 'Tutorials'],
					// ['/cv', 'CV'],
					// ['/blogposts', 'Blog'],
					// ['/tutorials', 'Tutorials'],
				].map((page) => {
					return (
						<SidebarLink key={page[1]} path={urlPath} to={page[0]}>
							{page[1]}
						</SidebarLink>
					);
				})}
			</span>
			<StyledThemeButton width={50} height={50} handleClick={handleThemeToggle} />
		</StyledSidebar>
	);
};

export default Sidebar;
