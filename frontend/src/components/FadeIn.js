import React from 'react';
import { CSSTransition } from 'react-transition-group';

import '../CSSTransitions/transitions.scss';

const FadeIn = (props) => {
	console.log(props);
	const { children, duration = 500 } = props;
	return (
		<CSSTransition in={true} appear={true} classNames="fade" timeout={duration}>
			{children}
		</CSSTransition>
	);
};

export default FadeIn;
