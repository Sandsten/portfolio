import * as React from 'react';

import styles from './Image.module.scss';

interface ImageProps {
	imagePath: string;
	figNumber: number;
	caption: string;
	maxWidth: string;
}

const Image = (props: ImageProps) => {
	const id = `figure-${props.figNumber}`;

	function openImage() {
		// Only works when running on VPS with correct domain
		// history.push(`/${props.imageName}`);
	}

	return (
		<figure className={styles.figure} onClick={openImage} id={id}>
			<img className={styles.image} src={props.imagePath}></img>
			<figcaption>
				<em>{`Fig ${props.figNumber}: ${props.caption}`}</em>
			</figcaption>
		</figure>
	);
};

export default Image;