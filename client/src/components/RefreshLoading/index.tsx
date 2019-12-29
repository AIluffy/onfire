import React from 'react';
import './index.module.scss';

interface Props {}

const RefreshLoading: React.FC<Props> = () => {
	return (
		<div styleName="refresh-loader">
			<div data-loader="rectangle"></div>
		</div>
	);
};

export default RefreshLoading;
