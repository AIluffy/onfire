import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { uniqBy } from 'lodash';
import { Feed } from '../../interface/link';
import InfiniteLinkScroll from '../InfiniteLinkScroll';
import Skeleton from '../Skeleton';
import Icon from '../Icon';
import './index.module.scss';

interface IQuery {
	feed: Feed;
}

interface Props {}

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

const LinkListQuery: React.FC<Props> = () => {
	const { loading, error, data, fetchMore } = useQuery<IQuery>(FEED_QUERY);

	let hasMore = true;

	if (loading) return <Skeleton />;
	if (error)
		return <Icon className="network-error" symbol={'iconnetwork-error'} />;
	if (!data)
		return <Icon className="network-error" symbol={'iconbasketball2'} />;

	const {
		feed: { links, offset }
	} = data;

	const refresh = () => {
		hasMore = false;

		fetchMore({
			variables: {
				offset: '0'
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;

				hasMore = true;

				const preLinks = prev.feed.links;
				const newLinks = fetchMoreResult.feed.links;

				const links = [...newLinks, ...preLinks];

				return Object.assign(
					{},
					{
						feed: {
							__typename: prev.feed.__typename,
							links: uniqBy(links, 'articleId'),
							offset: fetchMoreResult.feed.offset
						}
					}
				);
			}
		});
	};

	const handleLoadMore = () => {
		hasMore = false;
		fetchMore({
			variables: {
				offset
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;

				hasMore = true;

				const preLinks = prev.feed.links;
				const newLinks = fetchMoreResult.feed.links;

				const links = [...preLinks, ...newLinks];

				return Object.assign(
					{},
					{
						feed: {
							__typename: prev.feed.__typename,
							links: links,
							offset: fetchMoreResult.feed.offset
						}
					}
				);
			}
		});
	};

	return (
		<InfiniteLinkScroll
			links={links}
			hasMore={hasMore}
			onLoadMore={handleLoadMore}
			refresh={refresh}
		/>
	);
};

export default LinkListQuery;
