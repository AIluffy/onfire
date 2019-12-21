import React from 'react';
import Icon from '../Icon';
import './index.module.scss';

interface Props {}

const NavFooter: React.FC<Props> = () => {
	return (
		<footer styleName="nav">
			<section styleName="tab-item">
				<Icon symbol="iconlanqiu6" className="icon-news" />
				<p styleName="tab-title">资讯</p>
			</section>
		</footer>
	);
};

export default NavFooter;
