import React from 'react';
import './index.scss';

interface Props {
	symbol: string;
	className?: string;
}

const Icon: React.FC<Props> = ({ symbol, className }) => {
	return (
		<svg className={`icon ${className}`} aria-hidden="true">
			<use xlinkHref={`#${symbol}`}></use>
		</svg>
	);
};

export default Icon;
