import React, { Component } from 'react'

class Link extends Component {
    render () {
        return (
            <div>
                <div>
                    {this.props.link.title}
                    <img src={this.props.link.thumb} />
                </div>
            </div>
        )
    }
}

export default Link