import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';

import ThemeButton from './ThemeButton';

import { setTheme } from "../Redux/slices/siteConfigSlice";

import { DESKTOP_XS } from '../Constants/sizes';

// Always mobile first! Then add media sections for larger screens
const StyledSidebar = styled.div`
	display: grid;
	grid-template-areas:
		'name options'
		'nav options';
	
  grid-template-columns: 1fr auto;

	padding: 10px;

	background-color: ${(p) => p.theme.colors.SIDEBAR };
    
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
	font-size: 1.1em;
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
	color: ${(p) => p.theme.colors.TEXT};

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
  grid-area: nav;
	/* Keep the button highlighted when de-focused or page refreshes */
	${(props) => 
    props.path === props.to &&
    css`
			color: ${(p) => p.theme.colors.LINK_1};
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
      background: ${(p) => p.theme.colors.BACKGROUND};
      :hover {
        text-decoration: none;
      }
		`}
	}
`;

const StyledThemeButton = styled(ThemeButton)`
	grid-area: options;
	align-self: center;
	fill: ${(p) => p.theme.colors.THEME_TOGGLE};

	:hover {
		cursor: pointer;
		fill: ${(props) => (props.theme.colors.name === 'light' ? 'black' : 'yellow')};
	}

	@media (min-width: ${DESKTOP_XS}) {
		position: absolute;
		width: 100px;
		height: 100px;
		bottom: 75px;
		left: 50px;
	}
`;

const NavItems = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${DESKTOP_XS}) {
    flex-direction: column;
  }
`;

const Sidebar = (props) => {
  const [urlPath, setUrlPath] = useState("");
  const history = useHistory();
  const handleNavHome = () => history.push('/');

  useEffect(() => {
    setUrlPath(props.location.pathname);
  });

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
      <NavItems>
        {navList.map((page) => {
          return (
            <SidebarLink key={page[1]} path={urlPath} to={page[0]}>
              {page[1]}
            </SidebarLink>
          );
        })}
        </NavItems>
      <StyledThemeButton width={50} height={50} handleClick={props.toggleTheme} />
    </StyledSidebar>
  );
};

export default Sidebar;
