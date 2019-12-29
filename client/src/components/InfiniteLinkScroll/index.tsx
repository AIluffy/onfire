import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link as ILink } from '../../interface/link';
import Link from '../Link';
import RefreshLoading from '../RefreshLoading';
import Loader from '../Loader';
import './index.module.scss';

interface Props {
	links: ILink[];
	hasMore: boolean;
	onLoadMore: () => void;
	refresh: () => void;
}

const LinkList: React.FC<Props> = ({ links, onLoadMore, refresh, hasMore }) => {
	return (
		<div id="scrollableDiv" styleName="scroller-wrapper">
			<InfiniteScroll
				dataLength={links.length}
				next={() => onLoadMore()}
				hasMore={hasMore}
				scrollableTarget="scrollableDiv"
				loader={<Loader />}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>已经触底</b>
					</p>
				}
				refreshFunction={() => refresh()}
				pullDownToRefreshThreshold={100}
				pullDownToRefresh
				pullDownToRefreshContent={<RefreshLoading />}
				releaseToRefreshContent={<RefreshLoading />}
			>
				{links.map(link => (
					<Link key={link.title} link={link} />
				))}
			</InfiniteScroll>
		</div>
	);
};

export default LinkList;
