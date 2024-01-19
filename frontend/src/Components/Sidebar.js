import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled, { css, withTheme } from 'styled-components';

import ThemeButton from './ThemeButton';

import { DESKTOP_XS } from '../Constants/sizes';

// Always mobile first! Then add media sections for larger screens
const StyledSidebar = styled.div`
	display: grid;
	grid-template-areas:
		'name options'
		'nav options';

	grid-template-columns: 1fr auto;

	padding: 10px;

	background-color: ${(p) => p.theme.colors.SIDEBAR};

	@media (min-width: ${DESKTOP_XS}) {
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			'name'
			'nav'
			'options';
		padding: 20px;
	}
`;

const Name = styled.div`
	grid-area: name;
	width: fit-content;
	font-size: 1.4em;
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
		font-size: 2em;
		line-height: 1.3em;
	}
`;

// Not sure what the ide with this is, is it used elsewhere?
const StyledLink = styled(Link)`
	font-size: 1.2em;
	margin-bottom: 10px;
	margin-right: 20px;
	text-decoration: none;
	outline: none;
	color: ${(p) => p.theme.colors.TEXT};

	width: fit-content;

	:hover {
		text-decoration: underline;
	}

	:last-child {
		margin-bottom: 0px;
	}

	@media (min-width: ${DESKTOP_XS}) {
		width: 100%;
		padding: 10px;
		margin: 0px;
	}
`;

const SidebarLink = styled(StyledLink)`
	grid-area: nav;
	display: block;

	/* Keep the button highlighted when de-focused or page refreshes */
	${(props) =>
		props.path === props.to &&
		css`
			color: ${(p) => p.theme.colors.LINK_1};
      }
		`}

	// When in desktop mode make sure the highlighted background on selected page covers the entire sidebar
	@media (min-width: ${DESKTOP_XS}) {
		display: block;
		padding-right: 20px;
		margin-left: -20px;
		padding-left: 20px;

		${(props) =>
			props.path === props.to &&
			css`
				background: ${(p) => p.theme.colors.BACKGROUND};
				:hover {
					text-decoration: none;
				}
			`}
	}
`;

const NavItems = styled.div`
	display: ${(p) => (p.hamburgerExpanded ? 'fit-content' : 'none')};

	@media (min-width: ${DESKTOP_XS}) {
		display: block;
	}
`;

const HamburgerButton = styled.div`
	grid-area: options;
	height: 40px; // Hardcoded to match child svg height
	padding: 5px;
	background-color: ${(props) => props.theme.colors.BACKGROUND};

	@media (min-width: ${DESKTOP_XS}) {
		display: none;
	}
`;

const StyledThemeButton = styled(ThemeButton)`
	grid-area: options;
	align-self: end;
	fill: ${(p) => p.theme.colors.THEME_TOGGLE};

	display: ${(p) => (p.hamburgerExpanded ? 'block' : 'none')};

	:hover {
		cursor: pointer;
		fill: ${(props) => (props.theme.colors.name === 'light' ? 'black' : 'yellow')};
	}

	@media (min-width: ${DESKTOP_XS}) {
		display: block;
		position: absolute;
		width: 100px;
		height: 100px;
		bottom: 75px;
		left: 50px;
	}
`;

const Sidebar = (props) => {
	const [urlPath, setUrlPath] = useState('');
	const [hamburgerExpanded, setHamburgerExpanded] = useState(false);
	const [hamburgerColor, setHamburgerColor] = useState();

	const history = useHistory();
	const handleNavHome = () => history.push('/');

	useEffect(() => {
		setUrlPath(props.location.pathname);
	});

	const toggleHamburgerNavigation = (e) => {
		setHamburgerExpanded(!hamburgerExpanded);
	};

	const navList = [
		['/', 'About'],
		['/projects', 'Projects'],
		['/tutorials', 'Tutorials'],
	];

	return (
		<StyledSidebar>
			<Name onClick={handleNavHome}>Staffan Sandberg</Name>
			<HamburgerButton onClick={toggleHamburgerNavigation}>
				<svg viewBox="0 0 50 40" width="50" height="40">
					<rect y="0" width="100%" height="10" fill={props.theme.colors.HAMBURGER_LINES}></rect>
					<rect y="15" width="100%" height="10" fill={props.theme.colors.HAMBURGER_LINES}></rect>
					<rect y="30" width="100%" height="10" fill={props.theme.colors.HAMBURGER_LINES}></rect>
				</svg>
			</HamburgerButton>
			<NavItems hamburgerExpanded={hamburgerExpanded}>
				{navList.map((page) => {
					return (
						<SidebarLink key={page[1]} path={urlPath} to={page[0]}>
							{page[1]}
						</SidebarLink>
					);
				})}
			</NavItems>
			<StyledThemeButton
				width={50}
				height={50}
				handleClick={props.toggleTheme}
				hamburgerExpanded={hamburgerExpanded}
			/>
		</StyledSidebar>
	);
};

// withTheme is used to access theme in regular component and not just in the styled component
export default withTheme(Sidebar);
