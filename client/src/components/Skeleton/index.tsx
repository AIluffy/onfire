import React from 'react';
import './index.module.scss';

interface Props {}

const Skeleton: React.FC<Props> = () => {
	return (
		<div styleName="skeleton">
			{Array.from({ length: 6 }).map((item, index) => (
				<div styleName="item-box" key={index}>
					<div styleName="item-img skeleton-animation"></div>
					<div styleName="item-info">
						<div styleName="title">
							<div styleName="line1 skeleton-animation"></div>
							<div styleName="line2 skeleton-animation"></div>
						</div>
						<div styleName="sub-info skeleton-animation"></div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Skeleton;
