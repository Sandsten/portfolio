import * as React from 'react';

interface ThemeButtonProps {
	className: string;
	width: number;
	height: number;
	handleClick: React.MouseEventHandler;
}

const ThemeButton = ({ className, width, height, handleClick }:ThemeButtonProps) => {
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

export default ThemeButton;
