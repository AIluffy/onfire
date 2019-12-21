import React from 'react';
import './index.module.scss';

interface Props {}

const Loader: React.FC<Props> = () => {
	return (
		<div styleName="loading-container">
			<svg styleName="loader" viewBox="0 0 866 866">
				<path
					styleName="bb-0"
					d="M142.327 112.062C214.1 47.017 307.79 5.714 411 .55V410.5H280.346c-8.144-184.333-121.358-284.64-138.02-298.438z"
					fill="currentColor"
				/>
				<path
					styleName="bb-1"
					d="M111.104 143.388C46.716 214.908 5.822 307.995.574 410.5h235.893c-7.19-145.817-109.942-251.965-125.363-267.112z"
					fill="currentColor"
				/>
				<path
					styleName="bb-2"
					d="M110.902 722.388C46.422 650.666 5.552 557.292.524 454.5h235.788c-8.297 149.66-114.564 257.273-125.41 267.888z"
					fill="currentColor"
				/>
				<path
					styleName="bb-3"
					d="M141.633 753.308C213.497 818.716 307.458 860.268 411 865.45V454.5H280.354c-8.297 189.4-127.334 289.638-138.72 298.808z"
					fill="currentColor"
				/>
				<path
					styleName="bb-4"
					d="M723.222 754.346C651.507 819.156 557.992 860.296 455 865.45V454h129.39c7.743 190.638 127.705 291.398 138.832 300.346z"
					fill="currentColor"
				/>
				<path
					styleName="bb-5"
					d="M754.06 723.538C819.244 651.55 860.555 557.54 865.5 454H628.416c7.704 151.184 115.666 259.807 125.644 269.538z"
					fill="currentColor"
				/>
				<path
					styleName="bb-6"
					d="M754.82 143.302C819.145 214.716 860.042 307.652 865.4 410H628.418c8.043-149.258 115.93-256.613 126.4-266.698z"
					fill="currentColor"
				/>
				<path
					styleName="bb-7"
					d="M723.687 112.075C651.91 47.022 558.217 5.715 455 .55V410h129.53c8.944-188.743 128.016-288.947 139.157-297.925z"
					fill="currentColor"
				/>
			</svg>
		</div>
	);
};

export default Loader;
