import React from 'react';
import LinkListQuery from '../LinkListQuery';
import './index.module.scss';

interface Props {}

const BodyContent: React.FC<Props> = () => {
	return (
		<section styleName="section-body">
			<LinkListQuery />
		</section>
	);
};

export default BodyContent;
