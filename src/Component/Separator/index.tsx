import React from 'react';

import { Container } from './styles';

interface SeparatorProsp {
	text?: string;
}
const Separator: React.FC<SeparatorProsp> = ({ text }) => {
	return (
		<Container>
			<div className="line left" />
			<span className="text">{text}</span>
			<div className="line right" />
		</Container>
	);
};

export default Separator;
