import React from 'react';
import './index.module.scss';

interface Props {}

const TopBar: React.FC<Props> = () => {
	return <header styleName="bar">资讯</header>;
};

export default TopBar;
