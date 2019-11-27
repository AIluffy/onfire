import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ReactPullLoad, { STATS } from 'react-pullload';
import { Feed } from '../interface/link';
import Link from './Link';

interface IQuery {
	feed: Feed;
}

const FEED_QUERY = gql`
	query FeedQuery($offset: String) {
		feed(offset: $offset) {
			links {
				title
				thumb
				comment
				ctime
				articleId
			}
			offset
		}
	}
`;

interface Props {}

const LinkList: React.FC<Props> = () => {
	const { loading, error, data, fetchMore } = useQuery<IQuery>(FEED_QUERY);
	const [action, setAction] = useState(STATS.init);
	const [hasMore, setHasMore] = useState(true);

	if (loading) return <div>loading</div>;
	if (error) return <div>error</div>;
	if (!data) return <div>empty</div>;

	const {
		feed: { links }
	} = data;

	const handleAction = (_action: STATS) => {
		console.log(_action, 'action');
		if (_action === action) {
			return false;
		}

		if (_action === STATS.refreshing) {
			handleRefreshing();

			return;
		}

		if (_action === STATS.loading) {
			handleLoadMore();
			return;
		}

		setAction(_action);
	};

	const handleRefreshing = () => {
		if (action === STATS.refreshing) {
			return false;
		}

		setAction(STATS.refreshing);
	};

	const handleLoadMore = () => {
		if (action === STATS.loading) {
			return false;
		}

		console.log(data.feed.offset);

		fetchMore({
			variables: {
				offset: data.feed.offset
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				setAction(STATS.reset);

				if (!fetchMoreResult) return prev;
				return Object.assign({}, prev, {
					feed: {
						__typename: prev.feed.__typename,
						links: [
							...prev.feed.links,
							...fetchMoreResult.feed.links
						],
						offset: fetchMoreResult.feed.offset
					}
				});
			}
		});

		setAction(STATS.loading);
	};

	return (
		<ReactPullLoad
			downEnough={150}
			action={action}
			handleAction={handleAction}
			distanceBottom={1000}
			hasMore={hasMore}
		>
			<div className="news-list">
				{links.map(link => (
					<Link key={link.title} link={link} />
				))}
			</div>
		</ReactPullLoad>
	);
};

export default LinkList;
