import React, { Component } from 'react';

class Link extends Component {
    goto = () => {
        const { articleId } = this.props.link;

        window.location.href = `http://www.bbonfire.com/detail/${articleId}?p=article`
    }
	render() {
		const { thumb, title, comment, ctime } = this.props.link;

		return (
			<div className="news" onClick={this.goto}>
				<div
					className="pic__container"
				>
                    <img className="pic" src={thumb} alt=""/>
                </div>
				<div className="news__info">
					<p className="news__title">{title}</p>
					<div className="news__subInfo">
						<span className="news__comment">评论({comment})</span>
						<span className="news__time">
							{/* {this.transformTime(ctime)} */}
                            {
                                ctime
                            }
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Link;
