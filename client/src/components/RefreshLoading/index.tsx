import React from 'react';
import './index.module.scss';

interface Props {}

const RefreshLoading: React.FC<Props> = () => {
	return (
		<div styleName="loading-container">
			<svg
				styleName="loading-icon"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<circle
					cx="50"
					cy="50"
					r="47.3298"
					fill="none"
					stroke="#e90c59"
					strokeWidth="9"
				>
					<animate
						attributeName="r"
						repeatCount="indefinite"
						dur="1.0416666666666665s"
						values="0;53"
						keyTimes="0;1"
						keySplines="0 0.2 0.8 1"
						calcMode="spline"
						begin="-0.5208333333333333s"
					></animate>
					<animate
						attributeName="opacity"
						repeatCount="indefinite"
						dur="1.0416666666666665s"
						values="1;0"
						keyTimes="0;1"
						keySplines="0.2 0 0.8 1"
						calcMode="spline"
						begin="-0.5208333333333333s"
					></animate>
				</circle>
				<circle
					cx="50"
					cy="50"
					r="22.8536"
					fill="none"
					stroke="#46dff0"
					strokeWidth="9"
				>
					<animate
						attributeName="r"
						repeatCount="indefinite"
						dur="1.0416666666666665s"
						values="0;53"
						keyTimes="0;1"
						keySplines="0 0.2 0.8 1"
						calcMode="spline"
					></animate>
					<animate
						attributeName="opacity"
						repeatCount="indefinite"
						dur="1.0416666666666665s"
						values="1;0"
						keyTimes="0;1"
						keySplines="0.2 0 0.8 1"
						calcMode="spline"
					></animate>
				</circle>
			</svg>
		</div>
	);
};

export default RefreshLoading;
