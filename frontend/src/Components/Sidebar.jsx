import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';

import ThemeButton from './ThemeButton';

import { LIGHT_THEME, DARK_THEME } from '../Constants/colors';
import { DESKTOP_XS } from '../Constants/sizes';
import { toggleTheme } from '../Redux/slices/siteConfigSlice';

// Always mobile first! Then add media sections for larger screens
const StyledSidebar = styled.div`
  grid-area: sidebar;

	display: grid;
	grid-template-areas:
		'name options'
		'nav options';
	
  /* grid-template-columns: 1fr auto; */

	padding: 10px;

	background-color: ${(props) =>
    props.theme.main === 'LIGHT' ? LIGHT_THEME.SIDEBAR : DARK_THEME.SIDEBAR};

	@media (min-width: ${DESKTOP_XS}) {
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			'name'
			'nav';
		/* height: 100vh; */
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
		font-size: 2.1em;
		/* margin-bottom: 20px; */
	}
`;

// Not sure what the ide with this is, is it used elsewhere?
export const StyledLink = styled(Link)`
	font-size: 1.2em;
	margin-bottom: 5px;
	margin-right: 20px;
	text-decoration: none;
	outline: none;
	color: ${(props) => (props.theme.main === 'LIGHT' ? LIGHT_THEME.TEXT : DARK_THEME.TEXT)};

	:hover {
		text-decoration: underline;
	}

  @media (min-width: ${DESKTOP_XS}) {
		/* font-size: 2.5em; */
		/* margin-bottom: 20px; */
    padding: 10px;
    margin: 0px;
	}
`;

const SidebarLink = styled(StyledLink)`
	/* Keep the button highlighted when de-focused or page refreshes */
	${(props) => 
    props.path === props.to &&
    css`
			color: ${DARK_THEME.LINK_1};
      }
		`}

	@media (min-width: ${DESKTOP_XS}) {
		display: block;
    margin-right: -20px;
    margin-left: -20px;
    padding-left: 20px;
    
    ${(props) => 
    props.path === props.to &&
    css`
      background: ${(props) => (props.theme.main === 'LIGHT' ? LIGHT_THEME.BACKGROUND : DARK_THEME.BACKGROUND)};
      :hover {
        text-decoration: none;
      }
		`}
	}
`;

const StyledThemeButton = styled(ThemeButton)`
	grid-area: options;
	align-self: center;
	fill: ${(props) => (props.theme.main === 'LIGHT' ? LIGHT_THEME.THEME_TOGGLE : DARK_THEME.THEME_TOGGLE)};

	:hover {
		cursor: pointer;
		fill: ${(props) => (props.theme.main === 'LIGHT' ? 'black' : 'yellow')};
	}

	@media (min-width: ${DESKTOP_XS}) {
		position: absolute;
		width: 100px;
		height: 100px;
		bottom: 75px;
		left: 50px;
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

  function handleThemeToggle() {
    // Updating the theme for the site is handled inside the top level component App.jsx
    dispatch(toggleTheme());
  };

  const navList = [
    ['/', 'About'],
    ['/projects', 'Projects'],
    ['/posts', 'Posts'],
    ['/tutorials', 'DIY Fixes'],
    ['/guitar', 'Guitar']
  ];

  return (
    <StyledSidebar>
      <Name onClick={handleNavHome}>
        Staffan Sandberg
      </Name>
      <span>
        {navList.map((page) => {
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
