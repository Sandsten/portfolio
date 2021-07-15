// Make sure all themes have all colors available through this interface
interface Theme {
	BACKGROUND: string,
	TAG_BG: string,
	CARD_BG: string,
	TEXT: string,
	SIDEBAR: string,
	LINK_1: string,
	LINK_2: string,
  THEME_TOGGLE: string
}

// TODO: Organize the theme colors like this instead!
export const DARK_THEME : Theme = {
	BACKGROUND: '#2a2c37',
	TAG_BG: '#000000',
	CARD_BG: '#1d1e26',
	TEXT: '#f8f8f2',
	SIDEBAR: '#1d1e26',
	LINK_1: '#9580ff',
	LINK_2: '#80ffea',
  THEME_TOGGLE: '#eddeaf'
};

export const LIGHT_THEME : Theme = {
	BACKGROUND: '#fdf6e3',
	TAG_BG: '#000000',
	CARD_BG: '#eee8d5',
	TEXT: '#202021',
	SIDEBAR: '#eddeaf',
	LINK_1: '#9580ff',
	LINK_2: '#80ffea',
  THEME_TOGGLE: '#202021'
};