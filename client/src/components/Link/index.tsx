import React from 'react';
import { Link as ILink } from '../../interface/link';
import { timeDifferenceForDate } from '../../utils';
import './index.module.scss';

interface Props {
	link: ILink;
}

const goto = (articleId: string) => () => {
	window.location.href = `http://www.bbonfire.com/detail/${articleId}?p=article`;
};

const Link: React.FC<Props> = props => {
	const { thumb, title, comment, ctime, articleId } = props.link;
	return (
		<div styleName="news" onClick={goto(articleId)}>
			<div styleName="pic-container">
				<img styleName="pic" src={thumb} alt="" />
			</div>
			<div styleName="info-container">
				<p styleName="title">{title}</p>
				<div styleName="subInfo">
					<span styleName="comment">评论({comment})</span>
					<span styleName="time">{timeDifferenceForDate(ctime)}</span>
				</div>
			</div>
		</div>
	);
};

export default Link;
