import React from 'react';
import { Link as ILink } from '../interface/link';

interface Props {
	link: ILink;
}

const goto = (articleId: string) => () => {
	window.location.href = `http://www.bbonfire.com/detail/${articleId}?p=article`;
};

const Link: React.FC<Props> = props => {
	const { thumb, title, comment, ctime, articleId } = props.link;
	return (
		<div className="news" onClick={goto(articleId)}>
			<div className="pic__container">
				<img className="pic" src={thumb} alt="" />
			</div>
			<div className="news__info">
				<p className="news__title">{title}</p>
				<div className="news__subInfo">
					<span className="news__comment">评论({comment})</span>
					<span className="news__time">
						{/* {this.transformTime(ctime)} */}
						{ctime}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Link;
