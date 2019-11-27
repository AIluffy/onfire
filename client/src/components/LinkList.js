import React, { Component } from 'react'
import Link from './Link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  query FeedQuery($offset: String){
    feed(offset: $offset) {
        matches {
            teams {
                name
                score
            }
        }
        links {
            title,
            thumb,
            comment,
            ctime,
            articleId
        }
        offset
    }
  }
`

class LinkList extends Component {
    // _getQueryVariables = () => {
    //     return {
    //         offset: this.props.
    //     }
    // }

    render () {
        return (
            <Query query={FEED_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const linksToRender = data.feed.links

                    return (
                        <div className="news-list">
                            {linksToRender.map(link => <Link key={link.title} link={link} />)}
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default LinkList