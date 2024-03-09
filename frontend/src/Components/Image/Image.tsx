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

	return (
		<figure 
			className={styles.figure} 
			style={{ maxWidth: props.maxWidth }}
			id={id}
		>
			<img 
				className={styles.image}
				src={props.imagePath}
			/>
			<figcaption>
				<em>{`Fig ${props.figNumber}: ${props.caption}`}</em>
			</figcaption>
		</figure>
	);
};

export default Image;